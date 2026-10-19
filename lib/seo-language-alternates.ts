import { SITE_URL } from './paths'
import { localizedSeoArticleEntries } from './seo-localized'

// Reuse the declared English equivalent so both sides publish the same group.
export function getArticleLanguageAlternates(englishPath: string): Record<string, string> {
  const englishUrl = `${SITE_URL}${englishPath}`
  const languages: Record<string, string> = { en: englishUrl }
  for (const { article, config, url } of localizedSeoArticleEntries) {
    if (article.englishEquivalentPath === englishPath) languages[config.htmlLang] = url
  }
  return { ...languages, 'x-default': englishUrl }
}
