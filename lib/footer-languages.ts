import { allSiteLocales } from '@/lib/site-locales'

export interface FooterLanguageLink {
  hreflang: string
  label: string
  href: string
}

// 没有独立首页的语言，入口就是各自的文章页。
const articleOnlyLanguages: FooterLanguageLink[] = [
  { hreflang: 'zh-Hant', label: '繁體中文', href: '/zh-hant/notepad-plus-plus-for-mac/' },
  { hreflang: 'ar', label: 'العربية', href: '/ar/notepad-plus-plus-for-mac/' },
  { hreflang: 'nl', label: 'Nederlands', href: '/nl/notepad-plus-plus-for-mac/' },
  { hreflang: 'pl', label: 'Polski', href: '/pl/notepad-plus-plus-for-mac/' },
  { hreflang: 'tr', label: 'Türkçe', href: '/tr/notepad-plus-plus-for-mac/' },
]

// 页脚的语言入口：语言下拉菜单点开才有链接，搜索引擎在静态页面里看不到，
// 所以这里把每种语言的入口页直接写成页脚里的普通链接。
export const footerLanguageLinks: FooterLanguageLink[] = [
  ...allSiteLocales.map((locale) => ({
    hreflang: locale.hreflang,
    label: locale.nativeLabel,
    href: locale.path,
  })),
  ...articleOnlyLanguages,
]

// 各语言首页页脚里的"本语言文章"链接，否则这些文章没有任何站内入口。
const localizedGuideLinks: Record<string, { label: string; href: string }[]> = {
  de: [{ label: 'Notepad++ für Mac', href: '/de/notepad-plus-plus-for-mac/' }],
  es: [{ label: 'Notepad++ para Mac', href: '/es/notepad-plus-plus-for-mac/' }],
  fr: [{ label: 'Notepad++ pour Mac', href: '/fr/notepad-plus-plus-for-mac/' }],
  it: [{ label: 'Notepad++ per Mac', href: '/it/notepad-plus-plus-for-mac/' }],
  ja: [
    { label: 'Windows エディタからの Mac 移行', href: '/ja/notepad-plus-plus-for-mac/' },
    { label: 'サクラエディタの Mac での代わり', href: '/ja/sakura-editor-for-mac/' },
  ],
  ko: [
    { label: '맥 Notepad++ 대체 에디터', href: '/ko/notepad-plus-plus-for-mac/' },
    { label: '맥에서 중복 줄 제거하기', href: '/ko/remove-duplicate-lines-mac/' },
  ],
  'pt-br': [{ label: 'Notepad++ para Mac', href: '/pt-br/notepad-plus-plus-for-mac/' }],
}

export function getLocalizedGuideLinks(slug: string): { label: string; href: string }[] {
  return localizedGuideLinks[slug] ?? []
}
