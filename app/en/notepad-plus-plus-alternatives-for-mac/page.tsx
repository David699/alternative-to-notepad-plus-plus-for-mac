import type { Metadata } from 'next'
import SeoArticlePage from '@/components/SeoArticlePage'
import { APP_NAME } from '@/lib/seo'
import { getSeoArticle, getSeoArticleUrl } from '@/lib/seo-articles'
import { getArticleLanguageAlternates } from '@/lib/seo-language-alternates'
import { SITE_URL } from '@/lib/paths'

const article = getSeoArticle('notepad-plus-plus-alternatives-for-mac')

export function generateMetadata(): Metadata {
  if (!article) return {}
  const canonical = getSeoArticleUrl(article)

  return {
    metadataBase: new URL(SITE_URL),
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical, languages: getArticleLanguageAlternates(`/en/${article.slug}/`) },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: canonical,
      siteName: APP_NAME,
      title: article.title,
      description: article.description,
      images: [{ url: '/images/seo/notepad-alternatives-workflow-map.webp', width: 1440, height: 960, alt: article.heroFigure?.alt ?? article.shortTitle }],
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: ['/images/seo/notepad-alternatives-workflow-map.webp'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    other: { 'content-language': 'en' },
  }
}

export default function NotepadPlusPlusAlternativesForMacPage() {
  if (!article) return null
  const canonical = getSeoArticleUrl(article)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.description,
            datePublished: article.datePublished,
            dateModified: article.dateModified,
            mainEntityOfPage: canonical,
            author: { '@type': 'Person', name: 'David699' },
            image: `${SITE_URL}/images/seo/notepad-alternatives-workflow-map.webp`,
            publisher: { '@type': 'Organization', name: APP_NAME, url: `${SITE_URL}/` },
          }),
        }}
      />
      <SeoArticlePage article={article} />
    </>
  )
}
