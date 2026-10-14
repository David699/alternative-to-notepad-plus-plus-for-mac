import type { SeoArticle, SeoArticleLink } from '../seo-articles'
import { APP_NAME } from '../seo'
import { APP_STORE_URL, GITHUB_REPO_URL, PRODUCT_HUNT_URL } from '../paths'

const commonExternalLinks: SeoArticleLink[] = [
  { label: `Download ${APP_NAME} on the App Store`, href: APP_STORE_URL, external: true },
  { label: `See ${APP_NAME} on Product Hunt`, href: PRODUCT_HUNT_URL, external: true },
  { label: 'View this website repository on GitHub', href: GITHUB_REPO_URL, external: true },
]

export const textEditorGuides: SeoArticle[] = [
  {
    slug: 'text-editor-for-mac',
    title: 'Text Editor for Mac: A Practical Native Editor for Notes, Logs, Markdown, and Text Cleanup',
    shortTitle: 'Text Editor for Mac',
    description:
      `Looking for a text editor for Mac? ${APP_NAME} is a native macOS editor for local text files, tabs, regex find and replace, column editing, Markdown preview, workspace search, and batch-safe text cleanup.`,
    datePublished: '2026-07-01',
    dateModified: '2026-07-01',
    keywords: [
      'text editor for Mac',
      'Mac text editor',
      'macOS text editor',
      'lightweight text editor for Mac',
      'text editor app for Mac',
    ],
    heroKicker: 'For everyday Mac text work',
    heroSummary:
      `A good Mac text editor should open quickly, handle local files cleanly, and help with the work around text: searching, cleaning, previewing, and safely applying repeated edits. ${APP_NAME} is built for that daily loop.`,
    sections: [
      {
        title: 'What makes a useful Mac text editor',
        body: [
          'Most people do not open a text editor only to type paragraphs. They open logs, notes, Markdown drafts, CSV snippets, copied web text, release notes, config-style text, and lists that need cleanup before they can be used somewhere else.',
          `${APP_NAME} focuses on those practical jobs. It keeps the editor lightweight while adding the tools that make text work faster: tabs, workspace search, regex find and replace, column editing, Markdown preview, script pipelines, and batch processing with preview.`,
        ],
      },
      {
        title: `When ${APP_NAME} fits better than a code IDE`,
        body: [
          'A full IDE is excellent when the task is software development. It can feel heavy when the task is opening one file, fixing a list, extracting lines, reviewing Markdown, or cleaning copied content.',
          `${APP_NAME} is designed for the in-between space: more capable than a basic notepad app, but more focused than a coding platform. The goal is to make local text manipulation fast without turning every small edit into a project.`,
        ],
        bullets: [
          'Open multiple local files with tabs.',
          'Search across a workspace folder.',
          'Use regex for precise cleanup.',
          'Use Column Mode for aligned text and repeated positions.',
          'Preview Markdown drafts without leaving the editor.',
          'Run repeatable cleanup pipelines with diff preview.',
        ],
      },
      {
        title: 'Common text editor jobs on Mac',
        body: [
          'The app is especially useful for messy real-world text: keyword lists, support replies, Markdown notes, copied tables, logs, URLs, dates, and one-off snippets that need structure.',
          `Instead of forcing every task into a manual find-and-replace session, ${APP_NAME} lets you combine editing with repeatable processing. You can inspect the result, preview differences, and roll back broad changes when needed.`,
        ],
      },
    ],
    table: {
      title: `Text editor tasks and ${APP_NAME} features`,
      headers: ['Task', 'Feature to use'],
      rows: [
        ['Open several text files', 'Multi-tab editing with clear local file handling.'],
        ['Find text inside a folder', 'Workspace Search with direct navigation to matching files.'],
        ['Clean repeated patterns', 'Regex Find & Replace with structured matching.'],
        ['Edit aligned rows', 'Column Mode for logs, lists, and CSV-like snippets.'],
        ['Write Markdown notes', 'Markdown Preview for docs, notes, and drafts.'],
        ['Repeat the same cleanup', 'Script Pipelines and Batch Processing with diff preview.'],
      ],
    },
    faq: [
      {
        q: 'What is a good text editor for Mac?',
        a: `A good Mac text editor depends on the job. ${APP_NAME} is a strong fit if you want local text editing, tabs, regex cleanup, Column Mode, workspace search, Markdown preview, and batch-safe processing.`,
      },
      {
        q: `Is ${APP_NAME} only for programmers?`,
        a: 'No. It can edit code-like files, but it is also useful for notes, Markdown, lists, logs, copied text, and everyday text cleanup.',
      },
      {
        q: 'Does it require an account?',
        a: 'No account is needed for local editing. Optional AI features are user-configured and triggered by explicit actions.',
      },
    ],
    related: [
      { label: 'Plain text editor for Mac', href: '/en/plain-text-editor-for-mac/' },
      { label: 'Notepad for Mac', href: '/en/notepad-for-mac/' },
      { label: 'Best lightweight text editors for Mac', href: '/en/best-lightweight-text-editors-for-mac-2026/' },
      { label: 'Validate YAML with a schema on Mac', href: '/en/validate-yaml-schema-on-mac/' },
      { label: 'Back to product overview', href: '/en/' },
    ],
    externalLinks: commonExternalLinks,
  },
  {
    slug: 'plain-text-editor-for-mac',
    title: 'Plain Text Editor for Mac: Local Files, Markdown, Regex Cleanup, and Batch Text Processing',
    shortTitle: 'Plain Text Editor for Mac',
    description:
      `Need a plain text editor for Mac? ${APP_NAME} edits local .txt, .md, .csv, .json, .log, and code-like files with tabs, regex, Column Mode, Markdown preview, workspace search, and safe batch cleanup.`,
    datePublished: '2026-07-01',
    dateModified: '2026-07-01',
    keywords: [
      'plain text editor Mac',
      'plain text editor for Mac',
      'Mac plain text editor',
      'TXT editor for Mac',
      'Markdown text editor Mac',
    ],
    heroKicker: 'For local plain-text files',
    heroSummary:
      `Plain text work sounds simple until the file is a log, a Markdown draft, a CSV-like list, or copied content full of noise. ${APP_NAME} keeps plain-text editing direct while adding tools for cleanup and structure.`,
    sections: [
      {
        title: 'Plain text needs more than a blank page',
        body: [
          'A plain text editor should preserve predictable text, avoid unexpected formatting, and make local files easy to open and edit. That covers the basics, but many Mac users also need to clean, search, transform, and preview text.',
          `${APP_NAME} is built around plain-text workflows such as .txt notes, Markdown, CSV-like rows, JSON snippets, logs, HTML fragments, keyword lists, and support text.`,
        ],
      },
      {
        title: 'Useful workflows for plain text',
        body: [
          'The most common plain-text tasks are often repetitive: remove blank lines, deduplicate values, sort entries, extract links, normalize punctuation, replace date formats, or strip Markdown before pasting somewhere else.',
          `Instead of handling those tasks by hand every time, ${APP_NAME} combines Regex Find & Replace with Script Pipelines and Batch Processing. For broad changes, diff preview and rollback help keep the workflow controlled.`,
        ],
        bullets: [
          'Edit .txt, .md, .csv, .json, .log, .html, .js, .py, and other plain-text files.',
          'Use tabs for multiple files.',
          'Search an entire folder when one file is not enough.',
          'Preview Markdown while writing.',
          'Clean lists with repeatable pipelines.',
          'Review changes before applying them in batch.',
        ],
      },
      {
        title: 'When to choose a focused editor',
        body: [
          'TextEdit is already available on Mac and works for simple documents. A focused plain-text editor is useful when you want fewer formatting surprises and more text operations close to the file.',
          `${APP_NAME} is aimed at users who want that focused editing surface plus Notepad++-style power features on macOS.`,
        ],
      },
    ],
    table: {
      title: 'Plain-text workflows',
      headers: ['Workflow', `How ${APP_NAME} helps`],
      rows: [
        ['Quick local editing', 'Open files directly and work in tabs.'],
        ['Markdown drafts', 'Edit and preview Markdown documents.'],
        ['List cleanup', 'Remove blanks, deduplicate, sort, and normalize text.'],
        ['Log inspection', 'Search, filter, and edit structured lines.'],
        ['Pattern replacement', 'Use regex and whole-word/case options.'],
        ['Folder-level cleanup', 'Batch processing with diff preview and rollback.'],
      ],
    },
    faq: [
      {
        q: `Can ${APP_NAME} edit plain text files?`,
        a: 'Yes. It is designed around local plain-text formats such as TXT, Markdown, CSV-like text, JSON, logs, scripts, and HTML snippets.',
      },
      {
        q: 'Is it a rich text editor?',
        a: `No. ${APP_NAME} focuses on plain text and text-processing workflows rather than document formatting.`,
      },
      {
        q: 'Can I use it for Markdown?',
        a: 'Yes. Markdown Preview is included for notes, documentation, and drafts.',
      },
    ],
    related: [
      { label: 'Text editor for Mac', href: '/en/text-editor-for-mac/' },
      { label: 'Batch text processing on Mac', href: '/en/batch-text-processing-mac/' },
      { label: 'Regex find and replace on Mac', href: '/en/regex-find-replace-mac/' },
      { label: 'Convert file encoding to UTF-8 on Mac', href: '/en/convert-file-encoding-to-utf8-on-mac/' },
      { label: 'Back to product overview', href: '/en/' },
    ],
    externalLinks: commonExternalLinks,
  },
  {
    slug: 'notepad-for-mac',
    title: 'Notepad for Mac: A Native macOS Text Editor for Quick Notes, Plain Text, and Cleanup',
    shortTitle: 'Notepad for Mac',
    description:
      `Looking for a Notepad for Mac? ${APP_NAME} is a native macOS text editor for quick plain-text notes, local files, tabs, Markdown, regex cleanup, Column Mode, and batch text processing.`,
    datePublished: '2026-07-01',
    dateModified: '2026-07-01',
    keywords: [
      'notepad for Mac',
      'Mac notepad',
      'notepad app for Mac',
      'simple text editor for Mac',
      'Notepad++ for Mac alternative',
    ],
    heroKicker: 'A stronger notepad-style workflow',
    heroSummary:
      `If you search for a notepad on Mac, you may only need a fast place to edit plain text. But many real notes turn into lists, logs, Markdown, snippets, and cleanup jobs. ${APP_NAME} covers that practical range.`,
    sections: [
      {
        title: 'What people usually mean by notepad for Mac',
        body: [
          'Sometimes the need is simple: open a text file, paste notes, make a quick edit, and save. macOS already includes basic options for that. The problem appears when the note becomes structured text that needs search, cleanup, or repeated edits.',
          `${APP_NAME} keeps the direct feel of a notepad-style editor while adding practical tools for local text work: tabs, regex, Column Mode, Markdown preview, workspace search, pipelines, and safe batch changes.`,
        ],
      },
      {
        title: 'A notepad that can handle messy text',
        body: [
          'Copied notes often contain extra blank lines, duplicate entries, inconsistent punctuation, URLs, dates, or Markdown syntax. Manual cleanup is slow and easy to repeat badly.',
          `${APP_NAME} lets you use built-in pipelines or custom scripts to clean text in a repeatable way. For bigger operations, preview the diff before applying changes.`,
        ],
        bullets: [
          'Quick notes and plain-text drafts.',
          'Markdown notes with preview.',
          'Lists that need deduplication and sorting.',
          'Logs and snippets that need regex cleanup.',
          'Aligned rows that benefit from Column Mode.',
          'Folder-level search for recurring notes and references.',
        ],
      },
      {
        title: 'How it differs from Notepad++ searches',
        body: [
          `Some users search for "notepad for Mac" because they want a simple editor. Others mean "something like Notepad++ on Mac." ${APP_NAME} is closer to the second intent: it is simple enough for quick text, but built for practical Notepad++-style workflows.`,
          'That makes this page useful for broader search intent while the dedicated Notepad++ pages cover users who already know the Windows editor by name.',
        ],
      },
    ],
    table: {
      title: 'Notepad-style needs on Mac',
      headers: ['Need', `${APP_NAME} fit`],
      rows: [
        ['Quick text note', 'Open a local file and edit without a project setup.'],
        ['Plain-text file', 'Work with predictable text instead of rich formatting.'],
        ['Several notes at once', 'Use tabs for multiple open files.'],
        ['Markdown note', 'Preview the rendered document while editing.'],
        ['Messy pasted text', 'Run cleanup pipelines and regex replacements.'],
        ['Repeated edits', 'Use scripts and batch-safe processing.'],
      ],
    },
    faq: [
      {
        q: 'Does Mac have a notepad app?',
        a: `macOS includes basic text tools, but users who need tabs, regex, Column Mode, Markdown preview, workspace search, and batch cleanup may prefer a focused editor like ${APP_NAME}.`,
      },
      {
        q: `Is ${APP_NAME} simple enough for quick notes?`,
        a: 'Yes. It can be used for quick local text notes, while still offering advanced tools when the text needs cleanup or structure.',
      },
      {
        q: 'Is this the same as Notepad++?',
        a: `No. ${APP_NAME} is an independent Mac app inspired by practical Notepad++-style text workflows.`,
      },
    ],
    related: [
      { label: 'Text editor for Mac', href: '/en/text-editor-for-mac/' },
      { label: 'Plain text editor for Mac', href: '/en/plain-text-editor-for-mac/' },
      { label: 'Notepad++ for Mac alternative', href: '/en/notepad-plus-plus-for-mac/' },
      { label: 'Back to product overview', href: '/en/' },
    ],
    externalLinks: commonExternalLinks,
  },
]
