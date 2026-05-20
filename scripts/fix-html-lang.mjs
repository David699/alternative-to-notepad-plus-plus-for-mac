import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const htmlLangByOutput = {
  'index.html': 'zh-CN',
  'en/index.html': 'en',
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

for (const [relativePath, lang] of Object.entries(htmlLangByOutput)) {
  const filePath = path.join(process.cwd(), 'out', relativePath)
  const html = await readFile(filePath, 'utf8')
  const updated = html.replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)

  if (updated !== html) {
    await writeFile(filePath, updated)
    updatedCount += 1
  }
}

console.log(`Fixed html lang for ${updatedCount} exported pages.`)
