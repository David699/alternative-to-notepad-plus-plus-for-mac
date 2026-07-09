import LocalizedSeoArticleRoute, { generateLocalizedSeoArticleMetadata } from '@/components/LocalizedSeoArticleRoute'
import { localizedSeoArticlesByLocale } from '@/lib/seo-localized'

const locale = 'ar'

export function generateStaticParams() {
  return localizedSeoArticlesByLocale[locale].map((article) => ({
    slug: article.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateLocalizedSeoArticleMetadata(locale, params.slug)
}

export default function ArabicSeoArticlePage({ params }: { params: { slug: string } }) {
  return <LocalizedSeoArticleRoute locale={locale} slug={params.slug} />
}
