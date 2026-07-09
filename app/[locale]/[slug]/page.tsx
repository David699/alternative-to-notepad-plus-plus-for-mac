import { notFound } from 'next/navigation'
import LocalizedSeoArticleRoute, { generateLocalizedSeoArticleMetadata } from '@/components/LocalizedSeoArticleRoute'
import {
  getLocalizedSeoArticle,
  localizedSeoArticleEntries,
  localizedSeoArticlesByLocale,
  type SeoOnlyLocale,
} from '@/lib/seo-localized'

function isLocalizedSeoLocale(locale: string): locale is SeoOnlyLocale {
  return locale in localizedSeoArticlesByLocale
}

export function generateStaticParams() {
  return localizedSeoArticleEntries.map(({ locale, article }) => ({
    locale,
    slug: article.slug,
  }))
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocalizedSeoLocale(params.locale)) return {}

  return generateLocalizedSeoArticleMetadata(params.locale, params.slug)
}

export default function LocalizedSeoArticlePage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocalizedSeoLocale(params.locale) || !getLocalizedSeoArticle(params.locale, params.slug)) {
    notFound()
  }

  return <LocalizedSeoArticleRoute locale={params.locale} slug={params.slug} />
}
