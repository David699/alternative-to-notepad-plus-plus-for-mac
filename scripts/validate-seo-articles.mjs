import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()

const requiredArticles = [
  'notepad-plus-plus-for-mac',
  'notepad-plus-plus-alternatives-for-mac',
  'column-mode-editor-for-mac',
  'best-lightweight-text-editors-for-mac-2026',
  'why-macos-still-needs-a-notepad-plus-plus-alternative',
  'how-i-built-a-notepad-plus-plus-style-editor-for-macos',
]

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

const articleDataPath = 'lib/seo-articles.ts'
assert(fs.existsSync(path.join(root, articleDataPath)), `${articleDataPath} is missing`)

const articleData = read(articleDataPath)
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

const paths = read('lib/paths.ts')
assert(paths.includes('https://notepad-plus-plus.org/'), 'Official Notepad++ external link is missing')
assert(paths.includes('https://github.com/David699/alternative-to-notepad-plus-plus-for-mac'), 'GitHub external link is missing')
assert(paths.includes('https://www.producthunt.com/products/notepad-14'), 'Product Hunt external link is missing')
assert(paths.includes('apps.apple.com'), 'App Store external link is missing')

const sitemap = read('app/sitemap.ts')
assert(sitemap.includes('seoArticles'), 'Sitemap does not import seoArticles')
for (const slug of requiredArticles) {
  assert(sitemap.includes(slug) || articleData.includes(`slug: '${slug}'`), `Sitemap source cannot include ${slug}`)
}

const footer = read('components/Footer.tsx')
assert(footer.includes('guideLinks'), 'Footer does not render guide links')
assert(footer.includes('GITHUB_REPO_URL'), 'Footer does not render GitHub external link')
assert(footer.includes('PRODUCT_HUNT_URL'), 'Footer does not render Product Hunt external link')

console.log(`SEO article validation passed for ${requiredArticles.length} articles.`)
