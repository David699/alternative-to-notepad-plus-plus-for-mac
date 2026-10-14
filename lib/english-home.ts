import { APP_NAME } from './seo'
import type { SeoArticleFigure } from './seo-articles'

export const englishHomeTitle = `Notepad++ Alternative for Mac — ${APP_NAME}`
export const englishHomeDescription = `Looking for Notepad++ on Mac? ${APP_NAME} offers tabs, column editing, regex find and replace, and workspace search. Download on the Mac App Store.`

function actualFigure(src: string, alt: string, caption: string, height = 1305): SeoArticleFigure {
  return { src, alt, caption, width: 2536, height, source: { label: 'View the actual App screenshot at full size', href: src } }
}

// Reuse the same assets as the feature and lightweight-editor articles.
export const englishHomeHero = actualFigure(
  '/images/seo/notepad-mac-features/tabs-syntax-real.webp',
  `${APP_NAME} on Mac with multiple document tabs, a workspace folder, JSON syntax highlighting, and a tree preview.`,
  'Actual App screenshot: related documents in tabs, a folder at the left, and JSON source beside its optional tree preview.',
)

export const englishHomeWorkflows = [
  {
    title: 'Column editing: change five aligned prefixes',
    body: 'Select a rectangle across aligned rows, then type once. In this example, replacing OLD with NEW changed five prefixes while leaving the identifiers and status text in place.',
    figure: actualFigure('/images/seo/notepad-mac-features/column-selection-real.webp', `${APP_NAME} Column Mode selecting the OLD prefix on five rows.`, 'Actual selection before editing. A character column is different from a parsed CSV field.'),
    href: '/en/column-mode-editor-for-mac/', label: 'Explore Column Mode',
  },
  {
    title: 'Regex replacement: keep the numbers you need',
    body: 'Find customer_id=([0-9]+) and replace it with client_id=$1. The four matching records keep their numbers; account_id and invoice_id stay unchanged in the demonstration.',
    figure: actualFigure('/images/seo/notepad-mac-features/regex-replace-real.webp', `${APP_NAME} Advanced Regex search with four matching records and a replacement that preserves captured numbers.`, 'Actual Search / Replace panel before applying the change.'),
    href: '/en/regex-find-replace-mac/', label: 'See regex examples',
  },
  {
    title: 'Workspace search: check the whole folder',
    body: 'Search beyond the active document. Choose the folder scope and file types, then look for a field across related notes, logs, and configuration files. This five-file example reports 14 matching lines.',
    figure: actualFigure('/images/seo/notepad-mac-features/workspace-search-real.webp', `${APP_NAME} workspace search with scope controls and a summary of 14 matching lines in five files.`, 'Actual search controls and sample match summary. Counts describe this fictional workspace.'),
    href: '/en/notepad-plus-plus-for-mac/', label: 'Try the downloadable demonstration files',
  },
]

export const englishHomeExtras = [
  {
    title: 'Markdown: preview beside the source',
    body: 'Write notes and documentation while checking headings, task lists, tables, and code blocks beside your Markdown source.',
    figure: actualFigure('/images/seo/english-home/markdown-preview-real.webp', `${APP_NAME} editing a fictional Markdown release checklist with a rendered preview beside the source.`, 'Actual App screenshot with a fictional Markdown checklist, table, and code block.'),
    href: '/en/markdown-editor-with-live-preview-for-mac/', label: 'Read the Markdown guide',
  },
  {
    title: 'Pipelines: reuse a sequence of cleanup steps',
    body: 'The Pipeline Gallery groups built-in text operations such as removing blank lines, deduplicating lists, sorting entries, and extracting links. Check the steps and try them on a copy of your file.',
    figure: actualFigure('/images/seo/english-home/pipeline-gallery-real.webp', `${APP_NAME} Pipeline Gallery showing built-in list and link cleanup workflows.`, 'Actual Pipeline Gallery. No simulated batch counts or processing results.'),
    href: '/en/batch-text-processing-mac/', label: 'Explore batch text processing',
  },
]

export const englishHomeFocusModes = [
  { title: 'Zen Mode', body: 'Reduce surrounding controls when you want to concentrate on the current document.', figure: actualFigure('/images/seo/lightweight-editor/zen-workspace-real.webp', `${APP_NAME} Zen Mode with a fictional TXT project note.`, 'Actual Zen Mode screenshot reused from our lightweight-editor guide.') },
  { title: 'Minimal Mode', body: 'Use a simpler editing view for plain text notes and quick changes.', figure: actualFigure('/images/seo/lightweight-editor/minimal-mode-real.webp', `${APP_NAME} Minimal Mode displaying a fictional TXT note.`, 'Actual Minimal Mode screenshot reused from our lightweight-editor guide.', 1306) },
]
