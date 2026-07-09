import { notepadArabicAppStoreRating } from '../app-store-rating'
import { GITHUB_REPO_URL } from '../paths'
import type { SeoOnlyLocale, SeoOnlyLocaleConfig } from './types'

export const localizedSeoLocales: Record<SeoOnlyLocale, SeoOnlyLocaleConfig> = {
  ar: {
    locale: 'ar',
    segment: 'ar',
    htmlLang: 'ar',
    contentLanguage: 'ar-SA',
    ogLocale: 'ar_SA',
    dir: 'rtl',
    homeHref: '/en/',
    rating: notepadArabicAppStoreRating,
    brandDisclaimer:
      'Notepad++ علامة تجارية تخص مالكها. notePad++++ هو محرر نصوص مستقل لنظام macOS ولا يرتبط بمشروع Notepad++ الرسمي ولا يتم اعتماده من قبله.',
    ltrTerms: [
      'Regex Find & Replace',
      'Markdown Preview',
      'Script Pipelines',
      'Batch Processing',
      'Workspace Search',
      'Sublime Text',
      'Product Hunt',
      'notePad++++',
      'Notepad++',
      'App Store',
      'CotEditor',
      'TextEdit',
      'Windows',
      'BBEdit',
      'GitHub',
      'VS Code',
      'macOS',
      'Regex',
      'Markdown',
      'CSV',
      'Mac',
      'AI',
      'IDE',
      'TXT',
    ],
    labels: {
      home: 'English home',
      faq: 'الأسئلة الشائعة',
      related: 'صفحات ذات صلة',
      usefulLinks: 'روابط مفيدة',
      download: 'تحميل من App Store',
      viewStore: 'عرض صفحة App Store',
      appIconAlt: 'أيقونة notePad++++',
      heroImageAlt: 'واجهة notePad++++ لتحرير النصوص على macOS',
    },
    navLinks: [
      { label: 'Notepad++ للماك', href: '/ar/notepad-plus-plus-for-mac/' },
      { label: 'البدائل', href: '/ar/notepad-alternative-mac/' },
      { label: 'GitHub', href: GITHUB_REPO_URL, external: true },
    ],
  },
}

export function getLocalizedSeoLocale(locale: SeoOnlyLocale): SeoOnlyLocaleConfig {
  return localizedSeoLocales[locale]
}
