import type { AppStoreRatingSummaryData } from '../app-store-rating'

export type SeoOnlyLocale = 'ar'

export interface LocalizedSeoArticleLink {
  label: string
  href: string
  external?: boolean
}

export interface LocalizedSeoArticleFaq {
  q: string
  a: string
}

export interface LocalizedSeoArticle {
  slug: string
  englishEquivalentPath?: string
  title: string
  shortTitle: string
  description: string
  datePublished: string
  dateModified: string
  keywords: string[]
  heroKicker: string
  heroSummary: string
  contentHtml: string
  showRating?: boolean
  faq: LocalizedSeoArticleFaq[]
  related: LocalizedSeoArticleLink[]
  externalLinks: LocalizedSeoArticleLink[]
}

export interface SeoOnlyLocaleConfig {
  locale: SeoOnlyLocale
  segment: string
  htmlLang: string
  contentLanguage: string
  ogLocale: string
  dir: 'ltr' | 'rtl'
  homeHref: string
  navLinks: LocalizedSeoArticleLink[]
  rating: AppStoreRatingSummaryData
  brandDisclaimer: string
  ltrTerms: string[]
  labels: {
    home: string
    faq: string
    related: string
    usefulLinks: string
    download: string
    viewStore: string
    appIconAlt: string
    heroImageAlt: string
  }
}
