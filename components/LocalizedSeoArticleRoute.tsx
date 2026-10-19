import type { Metadata } from 'next'
import LocalizedSeoArticlePage from '@/components/LocalizedSeoArticlePage'
import { APP_NAME } from '@/lib/seo'
import {
  getLocalizedSeoArticle,
  getLocalizedSeoArticleUrl,
  getLocalizedSeoLocale,
  type SeoOnlyLocale,
} from '@/lib/seo-localized'
import { SITE_URL } from '@/lib/paths'
import { getArticleLanguageAlternates } from '@/lib/seo-language-alternates'

const ARTICLE_IMAGE = '/images/og-cover.webp'

export function generateLocalizedSeoArticleMetadata(locale: SeoOnlyLocale, slug: string): Metadata {
  const article = getLocalizedSeoArticle(locale, slug)
  if (!article) return {}

  const config = getLocalizedSeoLocale(locale)
  const canonical = getLocalizedSeoArticleUrl(locale, article)
  const articleImage = article.heroImage ?? ARTICLE_IMAGE
  const articleImageAlt = article.heroImageAlt ?? article.shortTitle

  return {
    metadataBase: new URL(SITE_URL),
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical,
      languages: article.englishEquivalentPath
        ? getArticleLanguageAlternates(article.englishEquivalentPath)
        : { [config.htmlLang]: canonical, 'x-default': canonical },
    },
    openGraph: {
      type: 'article',
      locale: config.ogLocale,
      url: canonical,
      siteName: APP_NAME,
      title: article.title,
      description: article.description,
      images: [{ url: articleImage, alt: articleImageAlt }],
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [articleImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    other: {
      'content-language': config.contentLanguage,
    },
  }
}

export default function LocalizedSeoArticleRoute({ locale, slug }: { locale: SeoOnlyLocale; slug: string }) {
  const article = getLocalizedSeoArticle(locale, slug)
  if (!article) return null

  const config = getLocalizedSeoLocale(locale)
  const canonical = getLocalizedSeoArticleUrl(locale, article)
  const articleImage = article.heroImage ?? ARTICLE_IMAGE
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      image: `${SITE_URL}${articleImage}`,
      mainEntityOfPage: canonical,
      author: { '@type': 'Person', name: 'David699' },
      publisher: { '@type': 'Organization', name: APP_NAME, url: `${SITE_URL}/` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: config.labels.home, item: `${SITE_URL}${config.homeHref}` },
        { '@type': 'ListItem', position: 2, name: article.shortTitle, item: canonical },
      ],
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <LocalizedSeoArticlePage article={article} config={config} />
    </>
  )
}
