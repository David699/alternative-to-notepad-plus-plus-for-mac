'use client'
import { useState, useEffect, useCallback } from 'react'
import Image, { type ImageProps } from 'next/image'
import type { Locale } from '@/lib/i18n/types'
import { withBasePath } from '@/lib/paths'

/** Insert `-en` before the file extension: `foo.png` → `foo-en.png` */
function toEnVariant(src: string): string {
  return src.replace(/(\.[^./]+)$/, '-en$1')
}

type LocalizedImageProps = Omit<ImageProps, 'src'> & {
  src: string
  locale?: Locale
}

/**
 * Drop-in replacement for `next/image` with automatic locale-aware fallback.
 *
 * For `locale='en'`:  tries `<name>-en.<ext>` first;
 *   if that asset is missing (onError), silently falls back to the original src.
 * For all other locales: uses the original src directly, no extra request.
 */
export default function LocalizedImage({
  src,
  locale = 'zh',
  ...props
}: LocalizedImageProps) {
  const preferredSrc = locale === 'en' ? toEnVariant(src) : src
  const [imgSrc, setImgSrc] = useState(preferredSrc)

  // Keep in sync if the src or locale prop changes (e.g. route transitions)
  useEffect(() => {
    setImgSrc(preferredSrc)
  }, [preferredSrc])

  const handleError = useCallback(() => {
    if (imgSrc !== src) setImgSrc(src)
  }, [imgSrc, src])

  // alt is guaranteed to be in props (required by ImageProps); ESLint can't see through the spread
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} src={withBasePath(imgSrc)} onError={handleError} />
}
