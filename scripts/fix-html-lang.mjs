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

for (const [relativePath, lang] of Object.entries(htmlLangByOutput)) {
  await fixHtmlLang(relativePath, lang)
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
