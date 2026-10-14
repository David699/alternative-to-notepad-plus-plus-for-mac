import OptimizedImage from '@/components/OptimizedImage'
import type { SeoArticleFigure as ArticleFigure } from '@/lib/seo-articles'
import { withBasePath } from '@/lib/paths'

export default function SeoArticleFigure({ figure, priority = false }: { figure: ArticleFigure; priority?: boolean }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {figure.src.endsWith('.svg') ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={withBasePath(figure.src)} alt={figure.alt} width={figure.width} height={figure.height} loading={priority ? 'eager' : 'lazy'} className="h-auto w-full" />
      ) : (
        <OptimizedImage src={figure.src} alt={figure.alt} width={figure.width} height={figure.height} priority={priority} loading={priority ? undefined : 'lazy'} className="h-auto w-full" />
      )}
      {(figure.caption || figure.source) && (
        <figcaption className="border-t border-gray-200 px-4 py-3 text-sm leading-6 text-gray-600">
          {figure.caption && <p>{figure.caption}</p>}
          {figure.source && <p className="mt-1">Source: <a href={figure.source.href} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline underline-offset-2">{figure.source.label}</a></p>}
        </figcaption>
      )}
    </figure>
  )
}
