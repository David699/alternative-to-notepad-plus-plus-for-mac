import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/paths'
import { seoArticles } from '@/lib/seo-articles'
import { allSiteLocales, getAbsoluteUrl } from '@/lib/site-locales'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...allSiteLocales.map((locale) => ({
      url: getAbsoluteUrl(locale.path),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: locale.path === '/' ? 1 : 0.85,
    })),
    ...seoArticles.map((article) => ({
      url: `${SITE_URL}/en/${article.slug}/`,
      lastModified: new Date(article.dateModified),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    {
      url: `${SITE_URL}/privacy/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/terms/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/en/privacy/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/en/terms/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
