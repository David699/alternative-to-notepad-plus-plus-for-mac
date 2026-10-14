import { APP_NAME } from '../seo'
import type { SeoArticle, SeoArticleFigure, SeoArticleLink } from '../seo-articles'
import { APP_STORE_URL, NOTEPAD_PLUS_PLUS_URL } from '../paths'

const official = (label: string, href: string): SeoArticleLink => ({ label, href, external: true })
const sample = (label: string, name: string, preview = false): SeoArticleLink => ({
  label, href: `/samples/notepad-mac-feature-demo/${name}`, download: !preview,
})
const screenshot = (name: string, alt: string, caption: string): SeoArticleFigure => ({
  src: `/images/seo/notepad-mac-features/${name}.webp`, width: 2536, height: 1305, alt, caption,
  source: official(`Screenshot captured in ${APP_NAME} — view full size`, `/images/seo/notepad-mac-features/${name}.webp`),
})

export const notepadMacFeatureGuide: SeoArticle = {
  slug: 'notepad-plus-plus-for-mac',
  title: 'Notepad++ for Mac: Tabs, Column Editing & Search (2026)',
  shortTitle: `Notepad++ for Mac: Familiar Features in ${APP_NAME}`,
  description: `Looking for Notepad++ on Mac? See real ${APP_NAME} screenshots of tabs, syntax highlighting, column editing, regex replacement, and workspace search.`,
  datePublished: '2026-06-03',
  dateModified: '2026-10-14',
  keywords: ['Notepad++ for Mac', 'notepad++ mac', 'notepad++ macos', 'Notepad++ Mac alternative', 'Mac text editor like Notepad++', 'column editing Mac', 'regex find and replace Mac'],
  heroKicker: 'Familiar text editing tasks · Actual Mac app screenshots',
  heroSummary: `Want the everyday features you use in Notepad++ on a Mac? ${APP_NAME} is an independent macOS editor with document tabs, syntax highlighting, Column Mode, Regex Find & Replace, and Workspace Search. This guide shows those workflows in the actual app, using small files you can inspect and try yourself.`,
  editorialNote: `Written by the developer of ${APP_NAME}. All app images below are actual screenshots captured on October 14, 2026, with a fictional demonstration workspace. We tried the five-row column edit and four-record regex replacement described below. The Notepad++ feature references link to its official project and manual. This guide is not a speed or memory benchmark, and ${APP_NAME} is not an official Notepad++ Mac release.`,
  heroFigure: screenshot('tabs-syntax-real', `Actual ${APP_NAME} Mac window with multiple file tabs, a five-file demonstration workspace, JSON syntax highlighting, and a JSON tree preview.`, `Actual ${APP_NAME} screenshot: related files stay in tabs, JSON keys and values use syntax colors, and an optional tree preview appears beside the source. The preview is an additional ${APP_NAME} tool.`),
  showContents: true,
  tableAfterSection: 'Bring the editing workflow, then check the differences',
  downloadCta: {
    afterSection: 'Find in files: search a workspace folder',
    title: 'Try these text editing tasks on your Mac',
    body: `Download ${APP_NAME} for tabs, Column Mode, Regex Find & Replace, and Workspace Search. Use the sample files below to check the operations you need. The App Store lists current pricing and macOS requirements.`,
  },
  sections: [
    {
      title: 'Is there an official Notepad++ for Mac?',
      body: [`The original Notepad++ project distributes a Windows application. ${APP_NAME} is a separate macOS app, not a Mac release from the Notepad++ project. Its purpose is to cover familiar text editing jobs using a Mac interface.`,
        'If you depend on the original Windows program or a particular Notepad++ plugin, check that requirement before switching. If your everyday tasks are opening several files, editing aligned text, searching with patterns, and finding a field across a folder, the examples below give you concrete things to evaluate.'],
      links: [official('Official Notepad++ project', NOTEPAD_PLUS_PLUS_URL), { label: 'Ways to use Notepad++ workflows on Mac', href: '/en/does-notepad-plus-plus-work-on-mac/' }],
    },
    {
      title: 'Bring the editing workflow, then check the differences',
      body: ['The Notepad++ manual documents document tabs, column selections, search and replacement, and finding text in files. The useful comparison is how you complete those tasks in another editor, rather than whether every menu has the same name.',
        'The table gives you a small check for each task. Shortcuts, search syntax, extension systems, and available features can differ; use your own representative files after trying the demonstration workspace.'],
      links: [official('Notepad++ interface and tabs', 'https://npp-user-manual.org/docs/user-interface/'), official('Notepad++ editing manual', 'https://github.com/notepad-plus-plus/npp-usermanual/blob/master/content/docs/editing.md'), official('Notepad++ search manual', 'https://github.com/notepad-plus-plus/npp-usermanual/blob/master/content/docs/searching.md')],
    },
    {
      title: 'Document tabs: keep notes, logs, and settings together',
      body: ['The opening screenshot shows five demonstration files in a workspace: notes, aligned text, search examples, a log, and JSON settings. Several documents are open in tabs above the editor, so you can switch files while keeping the folder list available.',
        'Try opening the notes, log, and settings file in separate tabs. Switch between them and confirm you can tell which file is active before saving. When many tabs are open, use the workspace list to locate the next file instead of arranging separate windows.'],
      links: [sample('Preview the demonstration notes in your browser', '01-project-notes.txt', true)],
    },
    {
      title: 'Syntax highlighting: read the structure of a file',
      body: ['In the JSON file shown above, property names, strings, numbers, and booleans have different colors. Line numbers and indentation keep the nested editor settings easy to follow. This is the sort of structured-file reading that many Notepad++ users want from a Mac editor.',
        'Use the language selector to check the detected file type or choose a language explicitly. Plain TXT notes can stay in Plain Text mode, while a JSON configuration benefits from JSON highlighting. The optional JSON tree preview shown beside the source offers another way to inspect nested values; syntax colors alone do not establish that a file is valid.'],
      links: [sample('Download the JSON syntax example', '05-settings.json')],
    },
    {
      title: 'Column Mode: change the same columns on several lines',
      body: [`Column editing selects the same character positions across multiple rows. In ${APP_NAME}, enable Column Mode from the toolbar, then drag across the aligned text. You can also use Option-drag for a rectangular selection. In the screenshot, only the three-character OLD prefix is selected on five rows.`,
        'We tried typing NEW into this selection. All five prefixes changed to NEW, while the identifier and status text stayed in place. The input and resulting file are linked below so you can reproduce this small operation. Use aligned, fixed-width text for the example; a character column is not a parsed CSV field.'],
      figure: screenshot('column-selection-real', `Actual ${APP_NAME} Column Mode screenshot with a rectangular selection covering only OLD at the start of five aligned rows.`, 'Actual rectangular selection: OLD is selected on five rows, while customer_id, account_id, and the status values remain outside the selection.'),
      links: [sample('Download the column-editing input (.txt)', '02-column-editing.txt'), { label: 'Download the verified column-editing result (.txt)', href: '/samples/notepad-mac-feature-results/02-column-editing.txt' }, { label: 'More Column Mode examples', href: '/en/column-mode-editor-for-mac/' }],
    },
    {
      title: 'Regex Find & Replace: preserve the part you need',
      body: ['Open Search / Replace, enable Advanced Regex, and search for customer_id=([0-9]+) in the sample file. The parentheses capture the number. Enter client_id=$1 as the replacement: $1 puts the captured number back into the output.',
        'The screenshot shows four matches before replacement. In this demonstration, Replace All changed customer_id=1001 through customer_id=1004 into client_id=1001 through client_id=1004. The account_id and invoice_id rows stayed unchanged. Check the output when migrating a pattern from Notepad++; regular-expression behavior and replacement conventions can differ between editors.'],
      figure: screenshot('regex-replace-real', `Actual ${APP_NAME} Search / Replace panel with Advanced Regex enabled, pattern customer_id=([0-9]+), replacement client_id=$1, and a one-of-four match indicator.`, 'Actual search panel before applying the change: four records match the expression, and the replacement preserves each captured number.'),
      links: [sample('Download the regex input (.txt)', '03-search-replace.txt'), { label: 'Download the verified regex replacement result (.txt)', href: '/samples/notepad-mac-feature-results/03-search-replace.txt' }, { label: 'Regex Find & Replace guide', href: '/en/regex-find-replace-mac/' }],
    },
    {
      title: 'Find in files: search a workspace folder',
      body: ['Open the demonstration folder as a workspace, expand Search in Workspace, and enter customer_id. This searches the selected folder instead of only the document you are currently editing. The sidebar lets you check the folder scope, file types, excluded directory names, and optional path or filename filters.',
        'In our five-file sample, the search reported 14 matching lines across five files. The screenshot shows the search controls beside the fictional log, with the match summary in the status area. Check the scope and filters whenever an expected file is missing from a search. The shown counts belong to this sample; they are not a large-file performance result.'],
      figure: screenshot('workspace-search-real', `Actual ${APP_NAME} workspace search for customer_id, with folder scope and file-type controls, a fictional application log open, and a status summary of 14 matches in five files.`, 'Actual workspace search: the folder and filters are visible at the left, and the status area reports 14 matching lines across the five demonstration files.'),
      links: [sample('Download the fictional application log (.txt)', '04-app-log.txt')],
    },
    {
      title: 'A small workspace you can reproduce',
      body: [`Save the five input files below into one folder and open it as a workspace in ${APP_NAME}. Start with the tabs and JSON file, then try the column edit and regex replacement on copies. The two verified result files linked above make it easy to check your output.`,
        'These are fictional samples. Use a copy of your own files for the next check, including any non-English text, file encodings, and search patterns that your work depends on.'],
      links: [sample('Download project notes (.txt)', '01-project-notes.txt'), sample('Download aligned column text (.txt)', '02-column-editing.txt'), sample('Download search and replacement text (.txt)', '03-search-replace.txt'), sample('Download a fictional log (.txt)', '04-app-log.txt'), sample('Download JSON settings', '05-settings.json')],
    },
    {
      title: 'Check plugins, macros, and shortcuts before switching',
      body: [`${APP_NAME} does not run Windows Notepad++ plugins. A familiar feature name does not transfer a plugin or its binary. List the plugins and shortcuts you use, then check whether the required task has a built-in Mac workflow or needs another tool.`,
        `For repeated cleanup, ${APP_NAME} offers Script Pipelines and Batch Processing with review and recovery tools. These are its own workflows, not an import path for Notepad++ recorded macros. Markdown Preview and user-configured AI are additional options; the tabs, column selection, and search examples above are the starting point for everyday editing.`],
      links: [{ label: 'Compare Mac editor alternatives and compatibility', href: '/en/notepad-plus-plus-alternatives-for-mac/' }, { label: 'Batch text processing guide', href: '/en/batch-text-processing-mac/' }],
    },
  ],
  table: {
    title: `Familiar Notepad++ tasks in ${APP_NAME}`,
    headers: ['Editing task', 'Mac workflow', 'A small check'],
    rows: [
      ['Document tabs', 'Open related files in tabs and navigate the workspace.', 'Switch between the notes, log, and JSON example.'],
      ['Syntax highlighting', 'Check the language selector and color-coded source.', 'Inspect JSON strings, numbers, booleans, and nesting.'],
      ['Column editing', 'Use Column Mode or Option-drag for a rectangle.', 'Replace five aligned OLD prefixes with NEW.'],
      ['Pattern replacement', 'Enable Advanced Regex in Search / Replace.', 'Rename customer_id while preserving four numbers.'],
      ['Find in files', 'Search in Workspace with scope and file filters.', 'Find customer_id across the five example files.'],
      ['Repeated text operations', `Use ${APP_NAME} Script Pipelines or Batch Processing.`, 'Plan your own steps; Windows macros and plugins do not import.'],
    ],
  },
  faq: [
    { q: `Is ${APP_NAME} the official Notepad++ for Mac?`, a: `No. ${APP_NAME} is an independent macOS editor. The official Notepad++ project distributes its Windows application.` },
    { q: `Which familiar Notepad++ features can I use in ${APP_NAME}?`, a: 'The demonstrated tasks are document tabs, syntax highlighting, rectangular column selection, regular-expression find and replace, and searching a workspace folder. Check the screenshots and try the sample files for the tasks you need.' },
    { q: 'How do I select a column of text on Mac?', a: `Enable Column Mode in the ${APP_NAME} toolbar and drag a rectangle across aligned rows, or use Option-drag. Start with the provided fixed-width sample and check that the remaining text stays unchanged.` },
    { q: 'Can I use my Windows Notepad++ plugins or recorded macros?', a: `${APP_NAME} does not run Windows Notepad++ plugins or import recorded Notepad++ macros. Its scripting and pipeline tools use their own workflows; evaluate the task you need to reproduce.` },
    { q: 'Do the screenshots prove faster editing or lower memory use?', a: 'No. They show actual interface states and small editing operations. Launch time, memory use, and large-file behavior require separate measurements on the same Mac with representative files.' },
  ],
  related: [{ label: 'Compare Notepad++ alternatives for Mac', href: '/en/notepad-plus-plus-alternatives-for-mac/' }, { label: 'Does Notepad++ work on Mac?', href: '/en/does-notepad-plus-plus-work-on-mac/' }, { label: 'Column Mode guide', href: '/en/column-mode-editor-for-mac/' }, { label: 'Regex find and replace', href: '/en/regex-find-replace-mac/' }, { label: 'Lightweight Mac editor comparison', href: '/en/best-lightweight-text-editors-for-mac-2026/' }, { label: 'Product overview', href: '/en/' }],
  externalLinks: [official(`Download ${APP_NAME} on the App Store`, APP_STORE_URL), official('Official Notepad++ project', NOTEPAD_PLUS_PLUS_URL), official('Official Notepad++ editing manual source', 'https://github.com/notepad-plus-plus/npp-usermanual/blob/master/content/docs/editing.md'), official('Official Notepad++ search manual source', 'https://github.com/notepad-plus-plus/npp-usermanual/blob/master/content/docs/searching.md')],
}
