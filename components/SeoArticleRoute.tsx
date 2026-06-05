import type { Metadata } from 'next'
import SeoArticlePage from '@/components/SeoArticlePage'
import { APP_NAME } from '@/lib/seo'
import { getSeoArticle, getSeoArticleUrl } from '@/lib/seo-articles'
import { SITE_URL } from '@/lib/paths'

const ARTICLE_IMAGE = '/images/screen-main-en.png'

export function generateSeoArticleMetadata(slug: string): Metadata {
  const article = getSeoArticle(slug)
  if (!article) return {}

  const canonical = getSeoArticleUrl(article)

  return {
    metadataBase: new URL(SITE_URL),
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: canonical,
      siteName: APP_NAME,
      title: article.title,
      description: article.description,
      images: [{ url: ARTICLE_IMAGE, width: 1440, height: 900, alt: article.shortTitle }],
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [ARTICLE_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    other: { 'content-language': 'en' },
  }
}

export default function SeoArticleRoute({ slug }: { slug: string }) {
  const article = getSeoArticle(slug)
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
            image: `${SITE_URL}${ARTICLE_IMAGE}`,
            mainEntityOfPage: canonical,
            author: { '@type': 'Person', name: 'David699' },
            publisher: { '@type': 'Organization', name: APP_NAME, url: SITE_URL },
          }),
        }}
      />
      <SeoArticlePage article={article} />
    </>
  )
}
