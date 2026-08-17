import Image, { type ImageProps } from 'next/image'
import { withBasePath } from '@/lib/paths'

type OptimizedImageProps = Omit<ImageProps, 'src'> & {
  src: string
}

function getWebpSource(src: string): string {
  const imagePath = src.replace(/^\/images\//, '')
  return `/images/optimized/${imagePath}.webp`
}

export default function OptimizedImage({ src, priority = false, loading, ...props }: OptimizedImageProps) {
  return (
    <picture className="block">
      <source srcSet={withBasePath(getWebpSource(src))} type="image/webp" />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        {...props}
        src={withBasePath(src)}
        loading={priority ? 'eager' : loading}
        fetchPriority={priority ? 'high' : props.fetchPriority}
      />
    </picture>
  )
}
