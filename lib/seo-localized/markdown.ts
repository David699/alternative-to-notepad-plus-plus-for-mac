import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { APP_NAME } from '../seo'
import {
  APP_STORE_URL,
  GITHUB_REPO_URL,
  NOTEPAD_PLUS_PLUS_URL,
  PRODUCT_HUNT_URL,
} from '../paths'
import type {
  LocalizedSeoArticle,
  LocalizedSeoArticleFaq,
  LocalizedSeoArticleLink,
  SeoOnlyLocale,
  SeoOnlyLocaleConfig,
} from './types'

const externalHrefByToken: Record<string, string> = {
  appStore: APP_STORE_URL,
  github: GITHUB_REPO_URL,
  notepadPlusPlus: NOTEPAD_PLUS_PLUS_URL,
  productHunt: PRODUCT_HUNT_URL,
}

function fieldPath(filePath: string, field: string): string {
  return `${path.relative(process.cwd(), filePath)}:${field}`
}

function requiredString(value: unknown, field: string, filePath: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${fieldPath(filePath, field)} must be a non-empty string`)
  }

  return value.replaceAll('{{APP_NAME}}', APP_NAME)
}

function optionalString(value: unknown, field: string, filePath: string): string | undefined {
  if (value === undefined) return undefined
  return requiredString(value, field, filePath)
}

function stringArray(value: unknown, field: string, filePath: string): string[] {
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string' || item.trim().length === 0)) {
    throw new Error(`${fieldPath(filePath, field)} must be a string array`)
  }

  return value.map((item) => item.replaceAll('{{APP_NAME}}', APP_NAME))
}

function booleanValue(value: unknown): boolean | undefined {
  if (value === undefined) return undefined
  if (typeof value !== 'boolean') {
    throw new Error('showRating must be a boolean when present')
  }

  return value
}

function linksArray(value: unknown, field: string, filePath: string): LocalizedSeoArticleLink[] {
  if (!Array.isArray(value)) {
    throw new Error(`${fieldPath(filePath, field)} must be an array`)
  }

  return value.map((item, index) => {
    if (!item || typeof item !== 'object') {
      throw new Error(`${fieldPath(filePath, `${field}[${index}]`)} must be an object`)
    }

    const source = item as Record<string, unknown>
    const href = requiredString(source.href, `${field}[${index}].href`, filePath)

    return {
      label: requiredString(source.label, `${field}[${index}].label`, filePath),
      href: externalHrefByToken[href] ?? href,
      external: typeof source.external === 'boolean' ? source.external : undefined,
    }
  })
}

function faqArray(value: unknown, filePath: string): LocalizedSeoArticleFaq[] {
  if (!Array.isArray(value)) {
    throw new Error(`${fieldPath(filePath, 'faq')} must be an array`)
  }

  return value.map((item, index) => {
    if (!item || typeof item !== 'object') {
      throw new Error(`${fieldPath(filePath, `faq[${index}]`)} must be an object`)
    }

    const source = item as Record<string, unknown>
    return {
      q: requiredString(source.q, `faq[${index}].q`, filePath),
      a: requiredString(source.a, `faq[${index}].a`, filePath),
    }
  })
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function escapedPatternPart(term: string): string {
  return term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function wrapLtrTerms(markdown: string, terms: string[]): string {
  const sortedTerms = [...terms].sort((lhs, rhs) => rhs.length - lhs.length)
  if (sortedTerms.length === 0) return markdown

  const pattern = new RegExp(`(${sortedTerms.map(escapedPatternPart).join('|')})`, 'g')
  return markdown.replace(pattern, (term) => `<bdi dir="ltr" class="mx-1 inline-block">${escapeHtml(term)}</bdi>`)
}

function wrapMarkdownTables(html: string): string {
  return html
    .replace(
      /<table>/g,
      '<div class="mt-5 overflow-x-auto rounded-xl border border-gray-200"><table class="w-full min-w-[640px] border-collapse text-sm">',
    )
    .replace(/<\/table>/g, '</table></div>')
}

function parseMarkdownArticle(filePath: string, config: SeoOnlyLocaleConfig): LocalizedSeoArticle {
  const source = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(source)
  const data = parsed.data as Record<string, unknown>
  const heroImage = optionalString(data.heroImage, 'heroImage', filePath)
  const heroImageAlt = optionalString(data.heroImageAlt, 'heroImageAlt', filePath)

  if (Boolean(heroImage) !== Boolean(heroImageAlt)) {
    throw new Error(`${fieldPath(filePath, 'heroImage')} and heroImageAlt must be provided together`)
  }

  if (heroImage) {
    if (!heroImage.startsWith('/images/')) {
      throw new Error(`${fieldPath(filePath, 'heroImage')} must start with /images/`)
    }

    const imagePath = path.join(process.cwd(), 'public', heroImage.slice(1))
    if (!fs.existsSync(imagePath)) {
      throw new Error(`${fieldPath(filePath, 'heroImage')} references missing file ${heroImage}`)
    }
  }

  const contentHtml = wrapMarkdownTables(
    marked.parse(wrapLtrTerms(parsed.content.trim().replaceAll('{{APP_NAME}}', APP_NAME), config.ltrTerms), { async: false }) as string,
  )

  return {
    slug: requiredString(data.slug, 'slug', filePath),
    englishEquivalentPath: optionalString(data.englishEquivalentPath, 'englishEquivalentPath', filePath),
    title: requiredString(data.title, 'title', filePath),
    shortTitle: requiredString(data.shortTitle, 'shortTitle', filePath),
    description: requiredString(data.description, 'description', filePath),
    datePublished: requiredString(data.datePublished, 'datePublished', filePath),
    dateModified: requiredString(data.dateModified, 'dateModified', filePath),
    keywords: stringArray(data.keywords, 'keywords', filePath),
    heroKicker: requiredString(data.heroKicker, 'heroKicker', filePath),
    heroSummary: requiredString(data.heroSummary, 'heroSummary', filePath),
    heroImage,
    heroImageAlt,
    contentHtml,
    showRating: booleanValue(data.showRating),
    faq: faqArray(data.faq, filePath),
    related: linksArray(data.related, 'related', filePath),
    externalLinks: linksArray(data.externalLinks, 'externalLinks', filePath),
  }
}

export function loadLocalizedSeoArticles(locale: SeoOnlyLocale, config: SeoOnlyLocaleConfig): LocalizedSeoArticle[] {
  const localeDirectory = path.join(process.cwd(), 'content', 'seo', locale)
  const entries = fs
    .readdirSync(localeDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .sort((lhs, rhs) => lhs.name.localeCompare(rhs.name))

  return entries.map((entry) => parseMarkdownArticle(path.join(localeDirectory, entry.name), config))
}
