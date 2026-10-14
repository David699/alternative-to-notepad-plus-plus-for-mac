import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const root = process.cwd()

const requiredArticles = [
  'notepad-plus-plus-for-mac',
  'notepad-plus-plus-alternatives-for-mac',
  'column-mode-editor-for-mac',
  'best-lightweight-text-editors-for-mac-2026',
  'why-macos-still-needs-a-notepad-plus-plus-alternative',
  'how-i-built-a-notepad-plus-plus-style-editor-for-macos',
  'text-editor-for-mac',
  'plain-text-editor-for-mac',
  'notepad-for-mac',
  'regex-find-replace-mac',
  'batch-text-processing-mac',
]

const requiredArabicBaselineArticles = [
  'notepad-plus-plus-for-mac',
  'notepad-alternative-mac',
  'text-editor-for-mac',
]

const requiredLocalizedSeoLocales = [
  'ar',
  'de',
  'es',
  'fr',
  'it',
  'ja',
  'ko',
  'nl',
  'pl',
  'pt-br',
  'tr',
  'zh-hant',
]

const requiredNotepadForMacLocalizedLocales = requiredLocalizedSeoLocales.filter((locale) => locale !== 'ar')

const expectedNotepadForMacRelatedHomeHrefByLocale = {
  de: '/de/',
  es: '/es/',
  fr: '/fr/',
  it: '/it/',
  ja: '/ja/',
  ko: '/ko/',
  nl: '/en/',
  pl: '/en/',
  'pt-br': '/pt-br/',
  tr: '/en/',
  'zh-hant': '/en/',
}

const requiredFeaturePhrases = [
  'Column Mode',
  'Regex Find & Replace',
  'Workspace Search',
  'Markdown Preview',
  'Script Pipelines',
  'Batch Processing',
]

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8')
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

function markdownSlugs(relativeDirectory) {
  const absoluteDirectory = path.join(root, relativeDirectory)
  assert(fs.existsSync(absoluteDirectory), `${relativeDirectory} is missing`)

  return fs
    .readdirSync(absoluteDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name.replace(/\.md$/, ''))
    .sort()
}

function markdownArticle(relativePath) {
  const source = read(relativePath)
  const parsed = matter(source)
  return {
    data: parsed.data,
    content: parsed.content,
  }
}

const articleDataPaths = [
  'lib/seo-articles.ts',
  'lib/seo-articles/text-editor-guides.ts',
  'lib/seo-articles/workflow-guides.ts',
  'lib/seo-articles/notepad-alternatives-guide.ts',
  'lib/seo-articles/lightweight-editor-guide.ts',
  'lib/seo-articles/notepad-mac-feature-guide.ts',
]
for (const articleDataPath of articleDataPaths) {
  assert(fs.existsSync(path.join(root, articleDataPath)), `${articleDataPath} is missing`)
}

const articleData = articleDataPaths.map((articleDataPath) => read(articleDataPath)).join('\n')
for (const slug of requiredArticles) {
  assert(articleData.includes(`slug: '${slug}'`), `Article data missing slug: ${slug}`)
  const routePath = `app/en/${slug}/page.tsx`
  assert(fs.existsSync(path.join(root, routePath)), `${routePath} is missing`)
  const routeSource = read(routePath)
  assert(routeSource.includes(slug), `${routePath} does not reference its slug`)
  assert(routeSource.includes('generateMetadata'), `${routePath} is missing metadata generation`)
}

for (const phrase of requiredFeaturePhrases) {
  assert(articleData.includes(phrase), `Article data missing real feature phrase: ${phrase}`)
}

const arabicArticleDirectory = 'content/seo/ar'
const arabicArticleSlugs = markdownSlugs(arabicArticleDirectory)
for (const slug of requiredArabicBaselineArticles) {
  assert(arabicArticleSlugs.includes(slug), `${arabicArticleDirectory} is missing required baseline article: ${slug}`)
}
for (const slug of arabicArticleSlugs) {
  const articlePath = `content/seo/ar/${slug}.md`
  const article = markdownArticle(articlePath)
  assert(article.data.slug === slug, `Arabic Markdown article missing slug: ${slug}`)
  assert(article.content.includes('## '), `${articlePath} is missing Markdown section headings`)
}
for (const locale of requiredNotepadForMacLocalizedLocales) {
  const articleDirectory = `content/seo/${locale}`
  const slugs = markdownSlugs(articleDirectory)
  assert(slugs.includes('notepad-plus-plus-for-mac'), `${articleDirectory} is missing notepad-plus-plus-for-mac`)

  const articlePath = `${articleDirectory}/notepad-plus-plus-for-mac.md`
  const article = markdownArticle(articlePath)
  const relatedHrefs = article.data.related.map((link) => link.href)
  const externalHrefs = article.data.externalLinks.map((link) => link.href)
  assert(article.data.slug === 'notepad-plus-plus-for-mac', `${articlePath} has an invalid slug`)
  assert(article.data.englishEquivalentPath === '/en/notepad-plus-plus-for-mac/', `${articlePath} is missing English equivalent`)
  assert(externalHrefs.includes('notepadPlusPlus'), `${articlePath} should link to official Notepad++`)
  assert(externalHrefs.includes('appStore'), `${articlePath} should link to App Store`)
  assert(!relatedHrefs.includes(`/${locale}/text-editor-for-mac/`), `${articlePath} should not link to ungenerated localized related pages`)
  assert(
    relatedHrefs.includes(expectedNotepadForMacRelatedHomeHrefByLocale[locale]),
    `${articlePath} should link to ${expectedNotepadForMacRelatedHomeHrefByLocale[locale]} as its related home page`,
  )
  if (expectedNotepadForMacRelatedHomeHrefByLocale[locale] !== `/${locale}/`) {
    assert(!relatedHrefs.includes(`/${locale}/`), `${articlePath} should not link to an ungenerated /${locale}/ home page`)
  }
  assert(article.content.includes('## '), `${articlePath} is missing Markdown section headings`)
}
const localizedPublishedDates = new Map()
for (const locale of requiredLocalizedSeoLocales) {
  for (const slug of markdownSlugs(`content/seo/${locale}`)) {
    const { data } = markdownArticle(`content/seo/${locale}/${slug}.md`)
    const existing = localizedPublishedDates.get(data.datePublished)
    assert(
      !existing,
      `content/seo/${locale}/${slug}.md shares datePublished ${data.datePublished} with ${existing}`,
    )
    localizedPublishedDates.set(data.datePublished, `content/seo/${locale}/${slug}.md`)
  }
}
const localizedSeoRoutePath = 'app/[locale]/[slug]/page.tsx'
assert(fs.existsSync(path.join(root, localizedSeoRoutePath)), `${localizedSeoRoutePath} is missing`)
const localizedSeoRouteSource = read(localizedSeoRoutePath)
assert(localizedSeoRouteSource.includes('localizedSeoArticleEntries'), `${localizedSeoRoutePath} does not generate all localized SEO articles`)
assert(localizedSeoRouteSource.includes('isLocalizedSeoLocale'), `${localizedSeoRoutePath} should validate locale params`)
assert(!fs.existsSync(path.join(root, 'app/ar/[slug]/page.tsx')), 'Arabic SEO should use the shared localized route')
assert(fs.existsSync(path.join(root, 'lib/seo-localized/locales.ts')), 'Localized SEO locale config is missing')
assert(fs.existsSync(path.join(root, 'lib/seo-localized/index.ts')), 'Localized SEO registry is missing')
assert(fs.existsSync(path.join(root, 'lib/seo-localized/markdown.ts')), 'Localized SEO Markdown loader is missing')
assert(fs.existsSync(path.join(root, 'content/seo/README.md')), 'SEO Markdown authoring guide is missing')
assert(fs.existsSync(path.join(root, 'components/LocalizedSeoArticlePage.tsx')), 'Generic localized SEO page component is missing')
assert(fs.existsSync(path.join(root, 'components/LocalizedSeoArticleRoute.tsx')), 'Generic localized SEO route component is missing')
assert(!fs.existsSync(path.join(root, 'lib/seo-localized/articles-ar.ts')), 'Arabic SEO content should live in Markdown, not TS article data')
assert(read('lib/seo-localized/locales.ts').includes("dir: 'rtl'"), 'Arabic SEO locale config is missing RTL direction')
assert(read('lib/seo-localized/locales.ts').includes('Notepad++ علامة تجارية'), 'Arabic SEO locale config is missing brand disclaimer')
for (const locale of requiredLocalizedSeoLocales) {
  assert(read('lib/seo-localized/types.ts').includes(`'${locale}'`), `Localized SEO type is missing locale: ${locale}`)
  const localeConfigSource = read('lib/seo-localized/locales.ts')
  assert(
    localeConfigSource.includes(`${locale}:`) || localeConfigSource.includes(`'${locale}':`),
    `Localized SEO config is missing locale: ${locale}`,
  )
}
assert(read('components/LocalizedSeoArticlePage.tsx').includes('dir={config.dir}'), 'Generic localized SEO page does not use locale direction')
assert(read('components/LocalizedSeoArticlePage.tsx').includes('article.contentHtml'), 'Generic localized SEO page does not render Markdown content')
assert(read('components/LocalizedSeoArticleRoute.tsx').includes('content-language'), 'Generic localized SEO metadata is missing content-language')

const paths = read('lib/paths.ts')
assert(paths.includes('https://notepad-plus-plus.org/'), 'Official Notepad++ external link is missing')
assert(paths.includes('https://github.com/David699/alternative-to-notepad-plus-plus-for-mac'), 'GitHub external link is missing')
assert(paths.includes('https://www.producthunt.com/products/notepad-14'), 'Product Hunt external link is missing')
assert(paths.includes('apps.apple.com'), 'App Store external link is missing')

const sitemap = read('app/sitemap.ts')
assert(sitemap.includes('seoArticles'), 'Sitemap does not import seoArticles')
assert(sitemap.includes('localizedSeoArticleEntries'), 'Sitemap does not import localized SEO article entries')
for (const slug of requiredArticles) {
  assert(sitemap.includes(slug) || articleData.includes(`slug: '${slug}'`), `Sitemap source cannot include ${slug}`)
}
for (const slug of arabicArticleSlugs) {
  assert(fs.existsSync(path.join(root, `content/seo/ar/${slug}.md`)), `Sitemap source cannot include Arabic article ${slug}`)
}

const siteLocales = read('lib/site-locales.ts')
assert(!siteLocales.includes("slug: 'ar'"), 'Arabic should not be added to full-site locale list in this SEO test')

const htmlLangFixer = read('scripts/fix-html-lang.mjs')
assert(htmlLangFixer.includes('seoOnlyLangByDirectory'), 'Static html lang fixer is missing SEO-only locale directory support')
assert(htmlLangFixer.includes("ar: 'ar'"), 'Static html lang fixer is missing Arabic SEO directory support')
assert(htmlLangFixer.includes("ja: 'ja'"), 'Static html lang fixer is missing localized SEO directory support')

const ratingSource = read('lib/app-store-rating.ts')
assert(ratingSource.includes('const appStoreRatingCount = 493'), 'App Store rating source should keep the current rating count')
for (const localeDataPath of ['lib/i18n/en.ts', 'lib/i18n/zh.ts', 'lib/i18n/multilingual.ts']) {
  const localeData = read(localeDataPath)
  assert(
    localeData.includes('String(notepadAppStoreRating.ratingCount)'),
    `${localeDataPath} should derive review count from notepadAppStoreRating.ratingCount`,
  )
}

const hero = read('components/Hero.tsx')
assert(hero.includes("import AppStoreDownloadLink from '@/components/AppStoreDownloadLink'"), 'Hero app badge should use the shared App Store link component')
assert(hero.includes('source="hero_badge"'), 'Hero app badge should report a dedicated download source')
assert(hero.includes('aria-label={`Open ${APP_NAME} on the App Store`}'), 'Hero app badge should expose an accessible App Store link label using APP_NAME')
assert(read('lib/google-ads.ts').includes("'hero_badge'"), 'Download click source should include hero_badge')

const footer = read('components/Footer.tsx')
assert(footer.includes('guideLinks'), 'Footer does not render guide links')
assert(footer.includes('GITHUB_REPO_URL'), 'Footer does not render GitHub external link')
assert(footer.includes('PRODUCT_HUNT_URL'), 'Footer does not render Product Hunt external link')

console.log(
  `SEO article validation passed for ${requiredArticles.length} English articles, ${arabicArticleSlugs.length} Arabic articles, and ${requiredNotepadForMacLocalizedLocales.length} localized Notepad++ pages.`,
)
