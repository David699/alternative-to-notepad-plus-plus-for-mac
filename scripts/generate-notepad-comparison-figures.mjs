// Regenerate article figures with: node scripts/generate-notepad-comparison-figures.mjs
// Generate WebP directly so PNG originals do not enter the public directory.
import { mkdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const output = path.resolve('public/images/seo')
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const text = (x, y, value, size = 30, color = '#334155', weight = 400, font = 'Arial') =>
  `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" fill="${color}" font-weight="${weight}">${escape(value)}</text>`
const lines = (x, y, values, size = 30, color = '#334155', gap = 44) =>
  values.map((value, index) => text(x, y + index * gap, value, size, color)).join('')
const box = (x, y, w, h, fill = '#ffffff', stroke = '#cbd5e1') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="20" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`
const frame = (height, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="${height}" viewBox="0 0 1440 ${height}">
  <rect width="1440" height="${height}" fill="#f8fafc"/>
  <rect width="1440" height="10" fill="#118de8"/>
  ${body}
</svg>`

const cards = [
  { x: 60, y: 240, n: '01', title: 'Familiar Notepad++ editing', tools: ['Nextpad++', 'NotepadNext'], detail: ['Check your plugins, macros,', 'and the exact Mac release.'] },
  { x: 750, y: 240, n: '02', title: 'Plain text and custom commands', tools: ['CotEditor', 'TextMate'], detail: ['Check encodings, scripting,', 'and your macOS version.'] },
  { x: 60, y: 560, n: '03', title: 'Coding projects', tools: ['VS Code', 'Sublime Text'], detail: ['Check extensions, navigation,', 'and development tools.'] },
  { x: 750, y: 560, n: '04', title: 'Text processing across files', tools: ['BBEdit', 'notePad++++'], detail: ['Check replacement previews', 'and repeatable cleanup steps.'] },
]
const workflow = frame(960,
  text(60, 95, 'Choose a Mac editor by the task', 52, '#0f172a', 700)
  + lines(60, 155, ['Eight alternatives. Four starting points.', 'Compare the fit, then try the same job on copies.'], 32)
  + cards.map((c) => box(c.x, c.y, 630, 290)
    + text(c.x + 28, c.y + 54, c.n, 30, '#0369a1', 700)
    + text(c.x + 86, c.y + 54, c.title, 30, '#0f172a', 700)
    + text(c.x + 28, c.y + 112, c.tools.join(' / '), 36, '#0369a1', 700)
    + lines(c.x + 28, c.y + 178, c.detail, 30)).join('')
  + text(60, 925, 'Starting points, not exclusive categories or benchmark rankings.', 28, '#64748b'))

const plugin = frame(720,
  text(60, 95, 'Will your Windows plugin work on Mac?', 48, '#0f172a', 700)
  + text(60, 153, 'A familiar editor name does not establish plugin compatibility.', 32)
  + box(60, 225, 410, 260) + box(515, 225, 410, 260) + box(970, 225, 410, 260)
  + text(86, 280, '1. Identify', 38, '#0369a1', 700)
  + lines(86, 345, ['Exact plugin name', 'Version and task', 'Expected result'], 30)
  + text(541, 280, '2. Find a match', 38, '#0369a1', 700)
  + lines(541, 345, ['Supported Mac port', 'Built-in equivalent', 'Alternative extension'], 30)
  + text(996, 280, '3. Verify', 38, '#0369a1', 700)
  + lines(996, 345, ['Use copied files', 'Check actual output', 'Confirm recovery'], 30)
  + box(60, 540, 1320, 120, '#e0f2fe', '#bae6fd')
  + text(90, 590, 'No suitable replacement?', 34, '#0c4a6e', 700)
  + text(90, 635, 'Evaluate a Windows setup for that specific plugin before migrating.', 30, '#0c4a6e'))

const input = await readFile('public/samples/notepad-alternatives/list-cleanup-input.txt', 'utf8')
const expected = await readFile('public/samples/notepad-alternatives/list-cleanup-expected.txt', 'utf8')
const actualLines = [...new Set(input.split(/\r?\n/).map((line) => line.trim()).filter(Boolean))].sort()
if (actualLines.join('\n') !== expected.trimEnd()) throw new Error('Cleanup sample and expected output disagree')
const inputLines = input.replace(/\r?\n$/, '').split(/\r?\n/)
const cleanup = frame(960,
  text(60, 95, 'Compare results with the same small list', 48, '#0f172a', 700)
  + text(60, 155, 'Trim spaces > Remove blank lines > Deduplicate > Sort', 32)
  + box(60, 220, 630, 580) + box(750, 220, 630, 580, '#f0fdf4', '#bbf7d0')
  + text(90, 280, 'INPUT', 32, '#64748b', 700)
  + text(780, 280, 'EXPECTED OUTPUT', 32, '#166534', 700)
  + inputLines.map((line, i) => text(90, 352 + i * 50, `${String(i + 1).padStart(2, '0')}  ${line.replaceAll(' ', '·') || '(blank line)'}`, 32, '#334155', 400, 'monospace')).join('')
  + actualLines.map((line, i) => text(780, 352 + i * 62, line, 38, '#166534', 400, 'monospace')).join('')
  + text(780, 690, 'Exactly four lowercase entries.', 30, '#166534')
  + text(60, 859, 'Dots on the left make spaces visible. Downloadable text uses ordinary spaces.', 28, '#64748b')
  + text(60, 908, 'A worked example of the rule, not an editor speed test.', 30, '#64748b'))

await mkdir(output, { recursive: true })
for (const [name, svg] of [
  ['notepad-alternatives-workflow-map', workflow],
  ['notepad-plugin-migration-check', plugin],
  ['notepad-list-cleanup-example', cleanup],
]) {
  const target = path.join(output, `${name}.webp`)
  await sharp(Buffer.from(svg)).webp({ quality: 82, effort: 6, smartSubsample: true }).toFile(target)
  console.log(path.relative(process.cwd(), target))
}
