import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const htmlLangByOutput = {
  'index.html': 'zh-CN',
  'de/index.html': 'de',
  'es/index.html': 'es',
  'fr/index.html': 'fr',
  'it/index.html': 'it',
  'ja/index.html': 'ja',
  'ko/index.html': 'ko',
  'pt-br/index.html': 'pt-BR',
  'ru/index.html': 'ru',
  'sv/index.html': 'sv',
}

const seoOnlyLangByDirectory = {
  ar: 'ar',
  de: 'de',
  es: 'es',
  fr: 'fr',
  it: 'it',
  ja: 'ja',
  ko: 'ko',
  nl: 'nl',
  pl: 'pl',
  'pt-br': 'pt-BR',
  tr: 'tr',
  'zh-hant': 'zh-Hant',
}

let updatedCount = 0

async function fixHtmlLang(relativePath, lang) {
  const filePath = path.join(process.cwd(), 'out', relativePath)
  const html = await readFile(filePath, 'utf8')
  const updated = html.replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)

  if (updated !== html) {
    await writeFile(filePath, updated)
    updatedCount += 1
  }
}

async function fixHtmlLangInDirectory(relativeDir, lang) {
  const outputDir = path.join(process.cwd(), 'out', relativeDir)
  let entries

  try {
    entries = await readdir(outputDir, { withFileTypes: true })
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      return
    }
    throw error
  }

  for (const entry of entries) {
    const childRelativePath = path.join(relativeDir, entry.name)

    if (entry.isDirectory()) {
      await fixHtmlLangInDirectory(childRelativePath, lang)
    } else if (entry.isFile() && entry.name === 'index.html') {
      await fixHtmlLang(childRelativePath, lang)
    }
  }
}

for (const [relativePath, lang] of Object.entries(htmlLangByOutput)) {
  await fixHtmlLang(relativePath, lang)
}

for (const [relativeDir, lang] of Object.entries(seoOnlyLangByDirectory)) {
  await fixHtmlLangInDirectory(relativeDir, lang)
}

const englishDir = path.join(process.cwd(), 'out', 'en')
const englishEntries = await readdir(englishDir, { withFileTypes: true })

await fixHtmlLang('en/index.html', 'en')
for (const entry of englishEntries) {
  if (entry.isDirectory()) {
    await fixHtmlLang(path.join('en', entry.name, 'index.html'), 'en')
  }
}

console.log(`Fixed html lang for ${updatedCount} exported pages.`)
