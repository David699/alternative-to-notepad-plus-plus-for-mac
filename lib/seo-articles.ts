import { APP_NAME } from './seo'
import { APP_STORE_URL, GITHUB_REPO_URL, NOTEPAD_PLUS_PLUS_URL, PRODUCT_HUNT_URL, SITE_URL } from './paths'

export interface SeoArticleLink {
  label: string
  href: string
  external?: boolean
}

export interface SeoArticleSection {
  title: string
  body: string[]
  bullets?: string[]
}

export interface SeoArticleTable {
  title: string
  headers: string[]
  rows: string[][]
}

export interface SeoArticleFaq {
  q: string
  a: string
}

export interface SeoArticle {
  slug: string
  title: string
  shortTitle: string
  description: string
  datePublished: string
  dateModified: string
  keywords: string[]
  heroKicker: string
  heroSummary: string
  sections: SeoArticleSection[]
  table?: SeoArticleTable
  faq: SeoArticleFaq[]
  related: SeoArticleLink[]
  externalLinks: SeoArticleLink[]
}

export const seoArticles: SeoArticle[] = [
  {
    slug: 'notepad-plus-plus-for-mac',
    title: 'Notepad++ for Mac Alternative: A Native macOS Text Editor for Everyday Text Work',
    shortTitle: 'Notepad++ for Mac Alternative',
    description:
      'Looking for Notepad++ for Mac? notePad++++ is a native macOS text editor with tabs, Column Mode, Regex Find & Replace, Workspace Search, Markdown Preview, Script Pipelines, Batch Processing, diff preview, rollback, iCloud sync, and user-configured AI.',
    datePublished: '2026-06-03',
    dateModified: '2026-06-03',
    keywords: [
      'Notepad++ for Mac',
      'Notepad++ Mac alternative',
      'Notepad++ alternative for macOS',
      'Mac text editor like Notepad++',
      'lightweight text editor for Mac',
    ],
    heroKicker: 'For users moving from Windows to macOS',
    heroSummary:
      'Notepad++ itself is best known as a Windows editor. If what you miss is the fast editing workflow, tabs, column editing, regex search, and practical text utilities, notePad++++ is built to cover those daily Mac workflows natively.',
    sections: [
      {
        title: 'Is Notepad++ available for Mac?',
        body: [
          'Notepad++ is widely used on Windows, but Mac users usually need a native alternative rather than a direct drop-in copy. Running a Windows app through compatibility layers can work for some people, but it rarely feels like a clean macOS editing workflow.',
          `${APP_NAME} focuses on the workflows people search for when they type "Notepad++ for Mac": fast plain-text editing, multiple open files, column edits, regular-expression search, and tools for cleaning or transforming text.`,
        ],
      },
      {
        title: 'What notePad++++ covers for Notepad++ users',
        body: [
          'The app is not the official Mac version of Notepad++. It is an independent macOS editor designed around similar day-to-day needs: open text files quickly, edit across tabs, search a workspace, and apply repeatable text transformations safely.',
          'For users who handle notes, Markdown files, logs, CSV snippets, copied web text, lists, configuration-style text, or release notes, those workflows matter more than copying every single Windows menu item.',
        ],
        bullets: [
          'Multi-tab editing for working across several local files.',
          'Column Mode for aligned text, lists, logs, CSV-like rows, and configuration blocks.',
          'Regex Find & Replace for precise cleanup and structured edits.',
          'Workspace Search for finding text across a folder.',
          'Markdown Preview for notes, documentation, and drafts.',
          'Diff preview, backup, and rollback for safer batch changes.',
        ],
      },
      {
        title: 'Where notePad++++ goes beyond a basic editor',
        body: [
          'The biggest difference is that notePad++++ treats repetitive text work as a workflow, not just a single edit. Script Pipelines can remove blank lines, deduplicate lists, sort entries, extract links or dates, normalize punctuation, and process multiple files with a preview before changes are applied.',
          'AI support is also user-controlled. You configure your own provider, choose when to send text, and can use AI for rewriting, translation, summarizing, proofreading, explaining code, or generating a script for a specific cleanup rule.',
        ],
      },
    ],
    table: {
      title: 'Feature fit for common Notepad++ for Mac searches',
      headers: ['Need', 'How notePad++++ addresses it'],
      rows: [
        ['Tabbed text editing', 'Open multiple files and switch between them in one lightweight macOS window.'],
        ['Column Mode', 'Edit aligned columns of text for lists, tables, logs, and structured snippets.'],
        ['Regex Find & Replace', 'Use regular expressions, case-sensitive matching, whole-word matching, and replace workflows.'],
        ['Workspace Search', 'Search across a folder and jump to the relevant file and line.'],
        ['Batch Processing', 'Run pipelines or scripts across repeated text tasks, with diff preview and rollback.'],
        ['Markdown Preview', 'Edit Markdown and preview documents for notes, docs, and drafts.'],
      ],
    },
    faq: [
      {
        q: 'Is notePad++++ the official Notepad++ for Mac?',
        a: 'No. notePad++++ is an independent macOS text editor. It is built for users who want familiar Notepad++-style workflows on Mac.',
      },
      {
        q: 'Does it support Column Mode?',
        a: 'Yes. Column Mode is one of the core workflows highlighted in the app and is useful for aligned text, logs, tables, and CSV-like data.',
      },
      {
        q: 'Can it process multiple files?',
        a: 'Yes. Script Pipelines and batch workflows can process repeated text tasks with a preview before applying changes.',
      },
    ],
    related: [
      { label: 'Compare Notepad++ alternatives for Mac', href: '/en/notepad-plus-plus-alternatives-for-mac/' },
      { label: 'Column Mode editor for Mac', href: '/en/column-mode-editor-for-mac/' },
      { label: 'Back to product overview', href: '/en/' },
    ],
    externalLinks: [
      { label: 'Download notePad++++ on the App Store', href: APP_STORE_URL, external: true },
      { label: 'See notePad++++ on Product Hunt', href: PRODUCT_HUNT_URL, external: true },
      { label: 'View this website repository on GitHub', href: GITHUB_REPO_URL, external: true },
      { label: 'Visit the official Notepad++ website', href: NOTEPAD_PLUS_PLUS_URL, external: true },
    ],
  },
  {
    slug: 'notepad-plus-plus-alternatives-for-mac',
    title: 'Best Notepad++ Alternatives for Mac: When to Use notePad++++, BBEdit, CotEditor, Sublime Text, or VS Code',
    shortTitle: 'Notepad++ Alternatives for Mac',
    description:
      'Compare practical Notepad++ alternatives for Mac and see where notePad++++ fits: tabs, Column Mode, Regex Find & Replace, Workspace Search, Markdown Preview, Script Pipelines, Batch Processing, iCloud sync, and user-controlled AI.',
    datePublished: '2026-06-03',
    dateModified: '2026-06-03',
    keywords: [
      'best Notepad++ alternatives for Mac',
      'Notepad++ Mac replacement',
      'BBEdit alternative',
      'CotEditor alternative',
      'Sublime Text alternative Mac',
    ],
    heroKicker: 'Comparison guide',
    heroSummary:
      'There is no single best editor for every Mac user. The right Notepad++ alternative depends on whether you need a code-first tool, a lightweight plain-text editor, or a text-processing workbench for repeatable cleanup tasks.',
    sections: [
      {
        title: 'How to choose a Notepad++ alternative on Mac',
        body: [
          'Start with the work you do most often. If you mainly write code, an IDE-like tool or VS Code may be the better fit. If you mainly open plain text, clean copied content, edit lists, search folders, and process repeated text tasks, a focused editor can be faster.',
          `${APP_NAME} is positioned for that second group: Mac users who want a lightweight editor with strong text manipulation features rather than a full development environment.`,
        ],
      },
      {
        title: 'Where notePad++++ fits',
        body: [
          'notePad++++ is strongest when editing and processing text are part of the same job. The app combines Multi-Tab Editing, Column Mode, Regex Find & Replace, Workspace Search, Markdown Preview, Diff View, Script Pipelines, Batch Processing, backup, rollback, iCloud sync, and optional AI assistance.',
          'That makes it useful for notes, Markdown documents, logs, CSV-like text, keyword lists, support snippets, release notes, copied social content, and one-off cleanup jobs that would be tedious by hand.',
        ],
      },
      {
        title: 'When another editor may be better',
        body: [
          'BBEdit is a long-running professional Mac editor with a deep feature set. CotEditor is a clean native Mac text editor for users who want simplicity. Sublime Text is fast and extensible. VS Code is strong for coding projects and extensions.',
          'Those tools can be excellent choices. notePad++++ is designed for a more specific search intent: a Mac-first text editor that keeps Notepad++-style editing comfort while adding repeatable cleanup workflows and batch-safe processing.',
        ],
      },
    ],
    table: {
      title: 'Alternative comparison by primary use case',
      headers: ['Tool', 'Best fit', 'Tradeoff to consider'],
      rows: [
        ['notePad++++', 'Text editing plus repeatable cleanup, Column Mode, Regex Find & Replace, Workspace Search, Script Pipelines, Batch Processing, Markdown Preview.', 'Best for macOS text workflows, not intended to replace a full IDE.'],
        ['BBEdit', 'Professional Mac editing with a broad, mature feature set.', 'More advanced than some users need for quick everyday cleanup.'],
        ['CotEditor', 'Simple native Mac plain-text editing.', 'Less focused on batch pipelines and automation workflows.'],
        ['Sublime Text', 'Fast cross-platform editing with packages and keyboard-driven workflows.', 'A different product style for users who want a strictly native Mac app.'],
        ['VS Code', 'Coding projects, extensions, debugging, language tooling.', 'Heavier than needed for simple text cleanup and quick file edits.'],
      ],
    },
    faq: [
      {
        q: 'What is the best Notepad++ alternative for Mac?',
        a: 'It depends on your workflow. notePad++++ is a strong fit if you want tabs, Column Mode, Regex Find & Replace, Workspace Search, Markdown Preview, Script Pipelines, and batch text processing in a native Mac app.',
      },
      {
        q: 'Is notePad++++ a code IDE?',
        a: 'No. It is a text editor and text-processing workbench. It can edit many plain-text and code-like formats, but it is not trying to replace a full IDE.',
      },
      {
        q: 'Why not just use TextEdit?',
        a: 'TextEdit is useful for simple documents, but it does not target Notepad++-style workflows such as Column Mode, regex cleanup, workspace search, scripted pipelines, and batch preview.',
      },
    ],
    related: [
      { label: 'Notepad++ for Mac alternative overview', href: '/en/notepad-plus-plus-for-mac/' },
      { label: 'Column Mode editor for Mac', href: '/en/column-mode-editor-for-mac/' },
      { label: 'Back to product overview', href: '/en/' },
    ],
    externalLinks: [
      { label: 'Download notePad++++ on the App Store', href: APP_STORE_URL, external: true },
      { label: 'See notePad++++ on Product Hunt', href: PRODUCT_HUNT_URL, external: true },
      { label: 'View this website repository on GitHub', href: GITHUB_REPO_URL, external: true },
      { label: 'Visit the official Notepad++ website', href: NOTEPAD_PLUS_PLUS_URL, external: true },
    ],
  },
  {
    slug: 'column-mode-editor-for-mac',
    title: 'Column Mode Editor for Mac: Edit Aligned Text, Lists, Logs, and CSV-Like Data Faster',
    shortTitle: 'Column Mode Editor for Mac',
    description:
      'Need a Column Mode editor for Mac? notePad++++ supports column-style editing alongside tabs, Regex Find & Replace, Workspace Search, Markdown Preview, Script Pipelines, Batch Processing, diff preview, and rollback.',
    datePublished: '2026-06-03',
    dateModified: '2026-06-03',
    keywords: [
      'Column Mode editor for Mac',
      'Notepad++ column mode Mac',
      'Mac text editor with column mode',
      'column editing macOS',
      'edit columns of text on Mac',
    ],
    heroKicker: 'For aligned text and structured snippets',
    heroSummary:
      'Column Mode is useful when text behaves more like a grid than a paragraph. It helps with aligned lists, log snippets, CSV-like rows, configuration blocks, and repeated edits in the same character position.',
    sections: [
      {
        title: 'What Column Mode is useful for',
        body: [
          'Many text edits are not line-by-line. Sometimes you need to change a repeated prefix, align values, remove a fixed-width field, or edit several rows at the same horizontal position. Column Mode exists for those cases.',
          `${APP_NAME} brings this workflow into a native Mac editor and pairs it with Regex Find & Replace, Workspace Search, and batch-safe processing tools.`,
        ],
        bullets: [
          'Add or remove text across several aligned rows.',
          'Edit fixed-width logs or configuration snippets.',
          'Clean CSV-like text before moving it into another tool.',
          'Make repeated row edits without writing a custom script.',
        ],
      },
      {
        title: 'Column Mode plus regex and pipelines',
        body: [
          'Column Mode is best for visual, position-based edits. Regex Find & Replace is better when the pattern matters more than the position. Script Pipelines help when the same cleanup must be repeated across a document or folder.',
          'Using these together keeps text work flexible: make a quick column edit, run a regex cleanup, preview the diff, then apply or roll back if the result is not right.',
        ],
      },
      {
        title: 'Why this matters for Notepad++ users on Mac',
        body: [
          'Column editing is one of the features many Notepad++ users expect. On macOS, not every lightweight editor treats it as a first-class workflow.',
          'notePad++++ keeps Column Mode close to other practical editing tools instead of hiding it inside a heavy IDE workflow.',
        ],
      },
    ],
    table: {
      title: 'Column Mode compared with other editing tools',
      headers: ['Workflow', 'Best tool inside notePad++++'],
      rows: [
        ['Repeated edit at the same position', 'Column Mode'],
        ['Find a structured pattern and replace it', 'Regex Find & Replace'],
        ['Clean many lines by rule', 'Script Pipelines'],
        ['Review changes before applying', 'Diff View'],
        ['Undo a batch mistake', 'Backup and rollback'],
      ],
    },
    faq: [
      {
        q: 'Does notePad++++ support Column Mode?',
        a: 'Yes. Column Mode is one of the core features shown on the product page and is designed for aligned text, lists, logs, and CSV-like data.',
      },
      {
        q: 'Can Column Mode replace regex?',
        a: 'No. They solve different problems. Column Mode is position-based; Regex Find & Replace is pattern-based. notePad++++ supports both workflows.',
      },
      {
        q: 'Can I preview batch changes?',
        a: 'Yes. For batch workflows, notePad++++ emphasizes diff preview, backup, and rollback so you can inspect changes before applying them.',
      },
    ],
    related: [
      { label: 'Notepad++ for Mac alternative overview', href: '/en/notepad-plus-plus-for-mac/' },
      { label: 'Compare Notepad++ alternatives for Mac', href: '/en/notepad-plus-plus-alternatives-for-mac/' },
      { label: 'Back to product overview', href: '/en/' },
    ],
    externalLinks: [
      { label: 'Download notePad++++ on the App Store', href: APP_STORE_URL, external: true },
      { label: 'See notePad++++ on Product Hunt', href: PRODUCT_HUNT_URL, external: true },
      { label: 'View this website repository on GitHub', href: GITHUB_REPO_URL, external: true },
      { label: 'Visit the official Notepad++ website', href: NOTEPAD_PLUS_PLUS_URL, external: true },
    ],
  },
]

export function getSeoArticle(slug: string): SeoArticle | undefined {
  return seoArticles.find((article) => article.slug === slug)
}

export function getSeoArticleUrl(article: SeoArticle): string {
  return `${SITE_URL}/en/${article.slug}/`
}
