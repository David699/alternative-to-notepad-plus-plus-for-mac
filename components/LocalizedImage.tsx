'use client'
import { useState, useEffect, useCallback, useMemo } from 'react'
import Image, { type ImageProps } from 'next/image'
import type { Locale } from '@/lib/i18n/types'
import { withBasePath } from '@/lib/paths'

/** Insert a locale suffix before the file extension: `foo.png` -> `foo-en.png` */
function toLocaleVariant(src: string, locale: string): string {
  return src.replace(/(\.[^./]+)$/, `-${locale}$1`)
}

const imageVariants: Partial<Record<string, readonly Locale[]>> = {
  '/images/ai-write.png': ['en'],
  '/images/screen-bookmarks.png': ['en'],
  '/images/screen-column.png': ['en'],
  '/images/screen-main.png': ['en'],
  '/images/screen-scripts.png': ['en'],
  '/images/screen-search.png': ['en'],
}

type LocalizedImageProps = Omit<ImageProps, 'src'> & {
  src: string
  locale?: Locale
}

/**
 * Drop-in replacement for `next/image` with automatic locale-aware fallback.
 *
 * For Chinese: use the original image.
 * For other languages: use a known locale-specific asset if present,
 * then the English asset if present, then the original image.
 */
export default function LocalizedImage({
  src,
  locale = 'zh',
  ...props
}: LocalizedImageProps) {
  const fallbackSources = useMemo(() => {
    if (locale === 'zh') return [src]

    const supportedLocales = imageVariants[src] ?? []
    const candidates = [
      supportedLocales.includes(locale) ? toLocaleVariant(src, locale) : null,
      supportedLocales.includes('en') ? toLocaleVariant(src, 'en') : null,
      src,
    ].filter((candidate): candidate is string => Boolean(candidate))

    return candidates.filter((candidate, index) => candidates.indexOf(candidate) === index)
  }, [locale, src])

  const [sourceIndex, setSourceIndex] = useState(0)
  const imgSrc = fallbackSources[sourceIndex] ?? src

  // Keep in sync if the src or locale prop changes (e.g. route transitions)
  useEffect(() => {
    setSourceIndex(0)
  }, [fallbackSources])

  const handleError = useCallback(() => {
    setSourceIndex((current) => Math.min(current + 1, fallbackSources.length - 1))
  }, [fallbackSources.length])

  // alt is guaranteed to be in props (required by ImageProps); ESLint can't see through the spread
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} src={withBasePath(imgSrc)} onError={handleError} />
}
