import { APP_NAME } from '../lib/seo'
import AppStoreDownloadLink from '@/components/AppStoreDownloadLink'
import type { SeoArticle } from '@/lib/seo-articles'

export default function SeoArticleDownloadCta({ article, placement }: { article: SeoArticle; placement: 'in_article' | 'end' }) {
  const cta = article.downloadCta
  if (!cta) return null

  return (
    <section aria-label={`Download ${APP_NAME}`} className="rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
      <h2 className="text-2xl font-black tracking-tight text-gray-950">{cta.title}</h2>
      <p className="mt-3 leading-7 text-gray-700">{cta.body}</p>
      <AppStoreDownloadLink
        source={`seo_${article.slug}_${placement}`}
        className="mt-5 inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700"
      >
        Download {APP_NAME} on the App Store
      </AppStoreDownloadLink>
      <p className="mt-3 text-sm leading-6 text-gray-600">See the App Store listing for current pricing and macOS requirements.</p>
    </section>
  )
}
