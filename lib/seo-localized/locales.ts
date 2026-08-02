import { notepadAppStoreRating, notepadArabicAppStoreRating } from '../app-store-rating'
import { GITHUB_REPO_URL, NOTEPAD_PLUS_PLUS_URL, TYPORA_URL } from '../paths'
import type { SeoOnlyLocale, SeoOnlyLocaleConfig } from './types'

const arabicLtrTerms = [
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
]

type LtrSeoLocale = Exclude<SeoOnlyLocale, 'ar'>

interface LtrSeoLocaleDefinition {
  locale: LtrSeoLocale
  htmlLang: string
  contentLanguage: string
  ogLocale: string
  homeHref: string
  articleLabel: string
  articleHref?: string
  officialLabel: string
  officialHref?: string
  githubLabel: string
  brandDisclaimer: string
  labels: SeoOnlyLocaleConfig['labels']
}

function ltrSeoLocale(definition: LtrSeoLocaleDefinition): SeoOnlyLocaleConfig {
  return {
    locale: definition.locale,
    segment: definition.locale,
    htmlLang: definition.htmlLang,
    contentLanguage: definition.contentLanguage,
    ogLocale: definition.ogLocale,
    dir: 'ltr',
    homeHref: definition.homeHref,
    rating: notepadAppStoreRating,
    brandDisclaimer: definition.brandDisclaimer,
    ltrTerms: [],
    labels: definition.labels,
    navLinks: [
      {
        label: definition.articleLabel,
        href: definition.articleHref ?? `/${definition.locale}/notepad-plus-plus-for-mac/`,
      },
      { label: definition.officialLabel, href: definition.officialHref ?? NOTEPAD_PLUS_PLUS_URL, external: true },
      { label: definition.githubLabel, href: GITHUB_REPO_URL, external: true },
    ],
  }
}

const ltrSeoLocales: Record<LtrSeoLocale, SeoOnlyLocaleConfig> = {
  en: ltrSeoLocale({
    locale: 'en',
    htmlLang: 'en',
    contentLanguage: 'en',
    ogLocale: 'en_US',
    homeHref: '/en/',
    articleLabel: 'Notepad++ for Mac',
    officialLabel: 'Official Notepad++',
    githubLabel: 'GitHub',
    brandDisclaimer:
      'Notepad++ is a trademark of its respective owner. notePad++++ is an independent macOS text editor and is not affiliated with, endorsed by, or approved by the official Notepad++ project.',
    labels: {
      home: 'English home',
      faq: 'FAQ',
      related: 'Related guides',
      usefulLinks: 'Useful links',
      download: 'Download on the App Store',
      viewStore: 'View App Store page',
      appIconAlt: 'notePad++++ icon',
      heroImageAlt: 'notePad++++ editing and previewing Markdown on macOS',
    },
  }),
  de: ltrSeoLocale({
    locale: 'de',
    htmlLang: 'de',
    contentLanguage: 'de',
    ogLocale: 'de_DE',
    homeHref: '/de/',
    articleLabel: 'Notepad++ für Mac',
    officialLabel: 'Offizielles Notepad++',
    githubLabel: 'GitHub',
    brandDisclaimer:
      'Notepad++ ist eine Marke des jeweiligen Rechteinhabers. notePad++++ ist ein unabhängiger macOS-Texteditor und ist weder mit dem offiziellen Notepad++-Projekt verbunden noch von diesem unterstützt oder autorisiert.',
    labels: {
      home: 'Startseite',
      faq: 'FAQ',
      related: 'Verwandte Seiten',
      usefulLinks: 'Nützliche Links',
      download: 'Im App Store laden',
      viewStore: 'App Store ansehen',
      appIconAlt: 'notePad++++ Symbol',
      heroImageAlt: 'notePad++++ Oberfläche für Textbearbeitung auf macOS',
    },
  }),
  es: ltrSeoLocale({
    locale: 'es',
    htmlLang: 'es',
    contentLanguage: 'es',
    ogLocale: 'es_ES',
    homeHref: '/es/',
    articleLabel: 'Notepad++ para Mac',
    officialLabel: 'Notepad++ oficial',
    githubLabel: 'GitHub',
    brandDisclaimer:
      'Notepad++ es una marca de su respectivo propietario. notePad++++ es un editor de texto independiente para macOS y no está afiliado, respaldado ni aprobado por el proyecto oficial Notepad++.',
    labels: {
      home: 'Inicio',
      faq: 'Preguntas frecuentes',
      related: 'Páginas relacionadas',
      usefulLinks: 'Enlaces útiles',
      download: 'Descargar en App Store',
      viewStore: 'Ver en App Store',
      appIconAlt: 'Icono de notePad++++',
      heroImageAlt: 'Interfaz de notePad++++ para editar texto en macOS',
    },
  }),
  fr: ltrSeoLocale({
    locale: 'fr',
    htmlLang: 'fr',
    contentLanguage: 'fr',
    ogLocale: 'fr_FR',
    homeHref: '/fr/',
    articleLabel: 'Notepad++ pour Mac',
    officialLabel: 'Notepad++ officiel',
    githubLabel: 'GitHub',
    brandDisclaimer:
      'Notepad++ est une marque de son propriétaire respectif. notePad++++ est un éditeur de texte macOS indépendant, sans affiliation, approbation ni soutien du projet officiel Notepad++.',
    labels: {
      home: 'Accueil',
      faq: 'Questions fréquentes',
      related: 'Pages liées',
      usefulLinks: 'Liens utiles',
      download: 'Télécharger sur l’App Store',
      viewStore: 'Voir sur l’App Store',
      appIconAlt: 'Icône notePad++++',
      heroImageAlt: 'Interface notePad++++ pour l’édition de texte sur macOS',
    },
  }),
  it: ltrSeoLocale({
    locale: 'it',
    htmlLang: 'it',
    contentLanguage: 'it',
    ogLocale: 'it_IT',
    homeHref: '/it/',
    articleLabel: 'Notepad++ per Mac',
    officialLabel: 'Notepad++ ufficiale',
    githubLabel: 'GitHub',
    brandDisclaimer:
      'Notepad++ è un marchio del rispettivo proprietario. notePad++++ è un editor di testo indipendente per macOS e non è affiliato, approvato o supportato dal progetto ufficiale Notepad++.',
    labels: {
      home: 'Home',
      faq: 'Domande frequenti',
      related: 'Pagine correlate',
      usefulLinks: 'Link utili',
      download: 'Scarica da App Store',
      viewStore: 'Vedi su App Store',
      appIconAlt: 'Icona di notePad++++',
      heroImageAlt: 'Interfaccia di notePad++++ per modificare testo su macOS',
    },
  }),
  ja: ltrSeoLocale({
    locale: 'ja',
    htmlLang: 'ja',
    contentLanguage: 'ja',
    ogLocale: 'ja_JP',
    homeHref: '/ja/',
    articleLabel: 'Notepad++ for Mac',
    officialLabel: 'Notepad++ 公式',
    githubLabel: 'GitHub',
    brandDisclaimer:
      'Notepad++ はそれぞれの権利者に帰属する商標です。notePad++++ は独立したmacOS向けテキストエディタであり、公式Notepad++プロジェクトと提携、承認、関連しているものではありません。',
    labels: {
      home: 'ホーム',
      faq: 'よくある質問',
      related: '関連ページ',
      usefulLinks: '参考リンク',
      download: 'App Storeで入手',
      viewStore: 'App Storeページを見る',
      appIconAlt: 'notePad++++ アイコン',
      heroImageAlt: 'macOSで動作するnotePad++++のテキスト編集画面',
    },
  }),
  ko: ltrSeoLocale({
    locale: 'ko',
    htmlLang: 'ko',
    contentLanguage: 'ko',
    ogLocale: 'ko_KR',
    homeHref: '/ko/',
    articleLabel: 'Mac용 Notepad++',
    officialLabel: 'Notepad++ 공식',
    githubLabel: 'GitHub',
    brandDisclaimer:
      'Notepad++는 해당 권리자의 상표입니다. notePad++++는 macOS용 독립 텍스트 에디터이며 공식 Notepad++ 프로젝트와 제휴, 승인 또는 보증 관계가 없습니다.',
    labels: {
      home: '홈',
      faq: '자주 묻는 질문',
      related: '관련 페이지',
      usefulLinks: '유용한 링크',
      download: 'App Store에서 받기',
      viewStore: 'App Store 페이지 보기',
      appIconAlt: 'notePad++++ 아이콘',
      heroImageAlt: 'macOS에서 텍스트를 편집하는 notePad++++ 화면',
    },
  }),
  nl: ltrSeoLocale({
    locale: 'nl',
    htmlLang: 'nl',
    contentLanguage: 'nl',
    ogLocale: 'nl_NL',
    homeHref: '/en/',
    articleLabel: 'Notepad++ voor Mac',
    officialLabel: 'Officiële Notepad++ site',
    githubLabel: 'GitHub',
    brandDisclaimer:
      'Notepad++ is een merk van de respectieve eigenaar. notePad++++ is een onafhankelijke teksteditor voor macOS en is niet gelieerd aan, goedgekeurd door of ondersteund door het officiële Notepad++-project.',
    labels: {
      home: 'English home',
      faq: 'Veelgestelde vragen',
      related: 'Gerelateerde pagina’s',
      usefulLinks: 'Nuttige links',
      download: 'Download in de App Store',
      viewStore: 'Bekijk in de App Store',
      appIconAlt: 'notePad++++ pictogram',
      heroImageAlt: 'notePad++++ interface voor tekstbewerking op macOS',
    },
  }),
  pl: ltrSeoLocale({
    locale: 'pl',
    htmlLang: 'pl',
    contentLanguage: 'pl',
    ogLocale: 'pl_PL',
    homeHref: '/en/',
    articleLabel: 'Notepad++ na Maca',
    officialLabel: 'Oficjalny Notepad++',
    githubLabel: 'GitHub',
    brandDisclaimer:
      'Notepad++ jest znakiem towarowym odpowiedniego właściciela. notePad++++ jest niezależnym edytorem tekstu dla macOS i nie jest powiązany, zatwierdzony ani wspierany przez oficjalny projekt Notepad++.',
    labels: {
      home: 'English home',
      faq: 'Najczęstsze pytania',
      related: 'Powiązane strony',
      usefulLinks: 'Przydatne linki',
      download: 'Pobierz z App Store',
      viewStore: 'Zobacz w App Store',
      appIconAlt: 'Ikona notePad++++',
      heroImageAlt: 'Interfejs notePad++++ do edycji tekstu na macOS',
    },
  }),
  'pt-br': ltrSeoLocale({
    locale: 'pt-br',
    htmlLang: 'pt-BR',
    contentLanguage: 'pt-BR',
    ogLocale: 'pt_BR',
    homeHref: '/pt-br/',
    articleLabel: 'Notepad++ para Mac',
    officialLabel: 'Notepad++ oficial',
    githubLabel: 'GitHub',
    brandDisclaimer:
      'Notepad++ é uma marca de seu respectivo proprietário. notePad++++ é um editor de texto independente para macOS e não é afiliado, aprovado nem apoiado pelo projeto oficial Notepad++.',
    labels: {
      home: 'Início',
      faq: 'Perguntas frequentes',
      related: 'Páginas relacionadas',
      usefulLinks: 'Links úteis',
      download: 'Baixar na App Store',
      viewStore: 'Ver na App Store',
      appIconAlt: 'Ícone do notePad++++',
      heroImageAlt: 'Interface do notePad++++ para editar texto no macOS',
    },
  }),
  tr: ltrSeoLocale({
    locale: 'tr',
    htmlLang: 'tr',
    contentLanguage: 'tr',
    ogLocale: 'tr_TR',
    homeHref: '/en/',
    articleLabel: 'Mac için Notepad++',
    officialLabel: 'Resmi Notepad++',
    githubLabel: 'GitHub',
    brandDisclaimer:
      'Notepad++ ilgili sahibinin ticari markasıdır. notePad++++ macOS için bağımsız bir metin editörüdür ve resmi Notepad++ projesiyle bağlantılı, onaylı veya desteklenmiş değildir.',
    labels: {
      home: 'English home',
      faq: 'Sık sorulan sorular',
      related: 'İlgili sayfalar',
      usefulLinks: 'Faydalı bağlantılar',
      download: 'App Store’dan indirin',
      viewStore: 'App Store sayfasını görüntüleyin',
      appIconAlt: 'notePad++++ simgesi',
      heroImageAlt: 'macOS üzerinde metin düzenleyen notePad++++ arayüzü',
    },
  }),
  'zh-hans': ltrSeoLocale({
    locale: 'zh-hans',
    htmlLang: 'zh-CN',
    contentLanguage: 'zh-CN',
    ogLocale: 'zh_CN',
    homeHref: '/',
    articleLabel: 'Typora 替代方案',
    articleHref: '/zh-hans/typora-alternative-for-mac/',
    officialLabel: 'Typora 官网',
    officialHref: TYPORA_URL,
    githubLabel: 'GitHub',
    brandDisclaimer:
      'Typora 和 Notepad++ 是其各自权利人的商标。notePad++++ 是独立的 macOS 文本编辑器，与上述产品或项目没有合作、认可或背书关系。本文依据公开功能资料比较不同工作方式。',
    labels: {
      home: '中文首页',
      faq: '常见问题',
      related: '相关文章',
      usefulLinks: '实用链接',
      download: '在 App Store 下载',
      viewStore: '查看 App Store 页面',
      appIconAlt: 'notePad++++ 图标',
      heroImageAlt: 'notePad++++ 在 macOS 上编辑和预览 Markdown 的界面',
    },
  }),
  'zh-hant': ltrSeoLocale({
    locale: 'zh-hant',
    htmlLang: 'zh-Hant',
    contentLanguage: 'zh-Hant',
    ogLocale: 'zh_TW',
    homeHref: '/en/',
    articleLabel: 'Mac 版 Notepad++',
    officialLabel: 'Notepad++ 官方網站',
    githubLabel: 'GitHub',
    brandDisclaimer:
      'Notepad++ 是其權利人的商標。notePad++++ 是獨立的 macOS 文字編輯器，並未與官方 Notepad++ 專案合作、獲得其認可或由其背書。',
    labels: {
      home: '英文首頁',
      faq: '常見問題',
      related: '相關頁面',
      usefulLinks: '實用連結',
      download: '在 App Store 取得',
      viewStore: '查看 App Store 頁面',
      appIconAlt: 'notePad++++ 圖示',
      heroImageAlt: 'notePad++++ 在 macOS 上編輯文字的介面',
    },
  }),
}

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
    ltrTerms: arabicLtrTerms,
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
  ...ltrSeoLocales,
}

export function getLocalizedSeoLocale(locale: SeoOnlyLocale): SeoOnlyLocaleConfig {
  return localizedSeoLocales[locale]
}
