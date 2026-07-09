import { SITE_URL } from '../paths'
import { getLocalizedSeoLocale, localizedSeoLocales } from './locales'
import { loadLocalizedSeoArticles } from './markdown'
import type { LocalizedSeoArticle, SeoOnlyLocale } from './types'

export type {
  LocalizedSeoArticle,
  LocalizedSeoArticleFaq,
  LocalizedSeoArticleLink,
  SeoOnlyLocale,
  SeoOnlyLocaleConfig,
} from './types'
export { getLocalizedSeoLocale, localizedSeoLocales } from './locales'

export const localizedSeoArticlesByLocale: Record<SeoOnlyLocale, LocalizedSeoArticle[]> = {
  ar: loadLocalizedSeoArticles('ar', localizedSeoLocales.ar),
}

export const localizedSeoArticleEntries = (Object.keys(localizedSeoArticlesByLocale) as SeoOnlyLocale[]).flatMap(
  (locale) => {
    const config = localizedSeoLocales[locale]

    return localizedSeoArticlesByLocale[locale].map((article) => ({
      locale,
      config,
      article,
      url: getLocalizedSeoArticleUrl(locale, article),
    }))
  },
)

export function getLocalizedSeoArticle(locale: SeoOnlyLocale, slug: string): LocalizedSeoArticle | undefined {
  return localizedSeoArticlesByLocale[locale]?.find((article) => article.slug === slug)
}

export function getLocalizedSeoArticleUrl(locale: SeoOnlyLocale, article: LocalizedSeoArticle): string {
  const config = getLocalizedSeoLocale(locale)
  return `${SITE_URL}/${config.segment}/${article.slug}/`
}
