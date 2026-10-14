import { APP_NAME } from './seo'
import { APP_STORE_URL, GITHUB_REPO_URL, NOTEPAD_PLUS_PLUS_URL, PRODUCT_HUNT_URL, SITE_URL } from './paths'
import { textEditorGuides } from './seo-articles/text-editor-guides'
import { workflowGuides } from './seo-articles/workflow-guides'
import { notepadAlternativesGuide } from './seo-articles/notepad-alternatives-guide'
import { lightweightEditorGuide } from './seo-articles/lightweight-editor-guide'
import { notepadMacFeatureGuide } from './seo-articles/notepad-mac-feature-guide'

export interface SeoArticleLink {
  label: string
  href: string
  external?: boolean
  download?: boolean
}

export interface SeoArticleFigure {
  src: string
  alt: string
  caption?: string
  source?: SeoArticleLink
  width: number
  height: number
}

export interface SeoArticleSection {
  title: string
  body: string[]
  bullets?: string[]
  figure?: SeoArticleFigure
  links?: SeoArticleLink[]
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
  heroFigure?: SeoArticleFigure
  editorialNote?: string
  tableAfterSection?: string
  showContents?: boolean
  downloadCta?: {
    afterSection: string
    title: string
    body: string
  }
  sections: SeoArticleSection[]
  table?: SeoArticleTable
  faq: SeoArticleFaq[]
  related: SeoArticleLink[]
  externalLinks: SeoArticleLink[]
}

const coreSeoArticles: SeoArticle[] = [
  notepadMacFeatureGuide,
  notepadAlternativesGuide,
  {
    slug: 'column-mode-editor-for-mac',
    title: 'Column Mode Editor for Mac: Edit Aligned Text, Lists, Logs, and CSV-Like Data Faster',
    shortTitle: 'Column Mode Editor for Mac',
    description:
      `Need a Column Mode editor for Mac? Hold Option and drag for a column selection, or switch Column Mode on from the toolbar. ${APP_NAME} pairs it with Regex Find & Replace, Workspace Search, Script Pipelines, diff preview, and rollback.`,
    datePublished: '2026-06-03',
    dateModified: '2026-09-30',
    keywords: [
      'Column Mode editor for Mac',
      'Notepad++ column mode Mac',
      'Mac text editor with column mode',
      'column editing macOS',
      'edit columns of text on Mac',
      'column mode shortcut Mac',
      'Option drag column select Mac',
      'block selection Mac text editor',
    ],
    heroKicker: 'For aligned text and structured snippets',
    heroSummary:
      'Column Mode is useful when text behaves more like a grid than a paragraph. It helps with aligned lists, log snippets, CSV-like rows, configuration blocks, and repeated edits in the same character position.',
    sections: [
      {
        title: 'How to make a column selection on Mac',
        body: [
          'On a Mac the Alt key is called Option. Hold Option, press the mouse button in the editor, and drag: the selection becomes a rectangle instead of following the lines. This works at any time, even when Column Mode is switched off.',
          'To stay in column selection without holding a key, switch Column Mode on with its toolbar button. The button reads Column Mode: On, the app confirms with a message that says Option + drag, and the setting is remembered the next time you open the app.',
          `The editor engine ${APP_NAME} is built on, Monaco, also defines Cmd + Shift + Option + an arrow key to grow a column selection from the keyboard.`,
        ],
        bullets: [
          'Hold Option and drag: a one-off column selection with no setup.',
          'Toolbar Column Mode button: keeps column selection on until you turn it off.',
          'Type once: the text is inserted on every selected row at the same column.',
          'Copy a column block, then paste it into a column selection with the same number of rows to put each copied row on its matching row.',
        ],
      },
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
          `${APP_NAME} keeps Column Mode close to other practical editing tools instead of hiding it inside a heavy IDE workflow.`,
        ],
      },
    ],
    table: {
      title: 'Column Mode compared with other editing tools',
      headers: ['Workflow', `Best tool inside ${APP_NAME}`],
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
        q: 'What is the Column Mode shortcut on Mac?',
        a: 'Hold Option and drag with the mouse to select a column block. From the keyboard, Cmd + Shift + Option plus an arrow key extends a column selection. The toolbar Column Mode button keeps column selection on without holding a key.',
      },
      {
        q: 'Is Column Mode part of Pro?',
        a: 'No. In the app, column mode editing is part of the free edition. Check the App Store listing for the current split between free and Pro features.',
      },
      {
        q: `Does ${APP_NAME} support Column Mode?`,
        a: 'Yes. Column Mode is one of the core features shown on the product page and is designed for aligned text, lists, logs, and CSV-like data.',
      },
      {
        q: 'Can Column Mode replace regex?',
        a: `No. They solve different problems. Column Mode is position-based; Regex Find & Replace is pattern-based. ${APP_NAME} supports both workflows.`,
      },
      {
        q: 'Can I preview batch changes?',
        a: `Yes. For batch workflows, ${APP_NAME} emphasizes diff preview, backup, and rollback so you can inspect changes before applying them.`,
      },
    ],
    related: [
      { label: 'Regex find and replace on Mac', href: '/en/regex-find-replace-mac/' },
      { label: 'Batch text processing on Mac', href: '/en/batch-text-processing-mac/' },
      { label: 'Notepad++ for Mac alternative overview', href: '/en/notepad-plus-plus-for-mac/' },
      { label: 'Compare Notepad++ alternatives for Mac', href: '/en/notepad-plus-plus-alternatives-for-mac/' },
      { label: 'Back to product overview', href: '/en/' },
    ],
    externalLinks: [
      { label: `Download ${APP_NAME} on the App Store`, href: APP_STORE_URL, external: true },
      { label: `See ${APP_NAME} on Product Hunt`, href: PRODUCT_HUNT_URL, external: true },
      { label: 'View this website repository on GitHub', href: GITHUB_REPO_URL, external: true },
      { label: 'Visit the official Notepad++ website', href: NOTEPAD_PLUS_PLUS_URL, external: true },
    ],
  },
  lightweightEditorGuide,
  {
    slug: 'why-macos-still-needs-a-notepad-plus-plus-alternative',
    title: 'Why macOS Still Needs a Notepad++ Alternative',
    shortTitle: 'Why macOS Still Needs a Notepad++ Alternative',
    description:
      `Why Mac users still search for a Notepad++ alternative in 2026, and how practical workflows like tabs, regex cleanup, column editing, workspace search, Markdown preview, and local text processing shape ${APP_NAME}.`,
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    keywords: [
      'why macOS needs Notepad++ alternative',
      'Notepad++ alternative for Mac',
      'Notepad++ for Mac',
      'Mac text editor like Notepad++',
      'local text editor for macOS',
    ],
    heroKicker: 'Product thinking',
    heroSummary:
      'Mac users do not need a pixel-for-pixel clone of Notepad++. They need the same practical feeling: open quickly, edit local text, search precisely, transform repetitive content, and move on without launching a full IDE.',
    sections: [
      {
        title: 'The search is really about workflow',
        body: [
          'When people search for "Notepad++ for Mac", they are not only asking whether the Windows app runs on macOS. They are usually asking for a familiar workflow: quick local files, multiple tabs, predictable find and replace, column editing, and simple tools for text cleanup.',
          'That workflow sits between two extremes. TextEdit is too basic for many structured text tasks. Full IDEs are powerful, but heavy when you only want to inspect a log, clean a list, edit a config snippet, or replace a pattern in a Markdown file.',
        ],
      },
      {
        title: 'The gap on Mac',
        body: [
          'macOS has good editors, but the category is still fragmented. Some apps are beautifully simple, some are built for professional text editing, and some are code platforms. The everyday Notepad++ habit is different: open the file, make the fix, use regex or columns when needed, then close it.',
          `${APP_NAME} was built around that gap. It keeps the app focused on local text work, while adding the practical features users tend to miss when moving from Windows to Mac.`,
        ],
      },
      {
        title: 'What a modern alternative should add',
        body: [
          'A 2026 Mac alternative should not stop at tabs and syntax highlighting. Modern text work often means cleaning copied content, previewing Markdown, extracting useful lines, applying a repeated cleanup rule, or making a safe change across more than one file.',
          `That is why ${APP_NAME} combines Column Mode, Regex Find & Replace, Workspace Search, Markdown Preview, Script Pipelines, Batch Processing, diff preview, backup, and rollback. The goal is not to become a full IDE. The goal is to make repetitive text work less manual.`,
        ],
        bullets: [
          'Column Mode for structured rows and aligned edits.',
          'Regex Find & Replace for precise cleanup.',
          'Workspace Search for folder-level text lookup.',
          'Script Pipelines for repeatable transformations.',
          'Batch Processing with preview and rollback.',
          'Optional AI actions controlled by the user.',
        ],
      },
      {
        title: 'A different kind of power tool',
        body: [
          'The best lightweight tools do not feel small because they lack features. They feel small because the features stay close to the job. A Notepad++-style Mac editor should be fast enough for small notes and capable enough for messy real-world text.',
          `That is the space ${APP_NAME} is trying to occupy: not a clone, not an IDE, but a practical Mac text workbench for people who still value the Notepad++ way of getting text fixed quickly.`,
        ],
      },
    ],
    table: {
      title: 'The Notepad++ habit translated to macOS',
      headers: ['User need', 'Modern Mac interpretation'],
      rows: [
        ['Open quickly', 'A focused Mac app for local files rather than a whole development workspace.'],
        ['Edit several files', 'Multi-tab editing and workspace-aware navigation.'],
        ['Fix text precisely', 'Regex Find & Replace, case options, whole-word matching, and structured cleanup.'],
        ['Handle aligned rows', 'Column Mode for lists, logs, tables, and configuration-style text.'],
        ['Repeat cleanup work', 'Script Pipelines and Batch Processing with preview and rollback.'],
        ['Stay in control', 'Local-first editing and explicit user-triggered AI or scripting actions.'],
      ],
    },
    faq: [
      {
        q: 'Does macOS need a Notepad++ clone?',
        a: 'Not necessarily. What many users need is a native Mac app that preserves the practical Notepad++ workflow: tabs, regex, column editing, search, and fast local text cleanup.',
      },
      {
        q: 'Why not just use an IDE?',
        a: 'An IDE is great for projects, but often too heavy for one-off text work such as cleaning copied content, inspecting logs, editing snippets, or normalizing lists.',
      },
      {
        q: `What makes ${APP_NAME} different from a basic notepad app?`,
        a: 'It combines everyday editing with text-processing workflows such as Script Pipelines, Batch Processing, diff preview, backup, rollback, and optional user-controlled AI actions.',
      },
    ],
    related: [
      { label: 'Best lightweight text editors for Mac in 2026', href: '/en/best-lightweight-text-editors-for-mac-2026/' },
      { label: 'How I built a Notepad++-style editor for macOS', href: '/en/how-i-built-a-notepad-plus-plus-style-editor-for-macos/' },
      { label: 'Notepad++ for Mac alternative overview', href: '/en/notepad-plus-plus-for-mac/' },
      { label: 'Back to product overview', href: '/en/' },
    ],
    externalLinks: [
      { label: `Download ${APP_NAME} on the App Store`, href: APP_STORE_URL, external: true },
      { label: `See ${APP_NAME} on Product Hunt`, href: PRODUCT_HUNT_URL, external: true },
      { label: 'View this website repository on GitHub', href: GITHUB_REPO_URL, external: true },
      { label: 'Visit the official Notepad++ website', href: NOTEPAD_PLUS_PLUS_URL, external: true },
    ],
  },
  {
    slug: 'how-i-built-a-notepad-plus-plus-style-editor-for-macos',
    title: 'How I Built a Notepad++-Style Editor for macOS',
    shortTitle: 'How I Built a Notepad++-Style Editor for macOS',
    description:
      `A developer story about building ${APP_NAME}, a Notepad++-style editor for macOS focused on local files, fast editing, tabs, column mode, regex cleanup, workspace search, scripts, Markdown preview, and batch-safe text processing.`,
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    keywords: [
      'how I built a Notepad++ style editor for macOS',
      'build Mac text editor',
      'Notepad++ style editor for Mac',
      'Mac-first text editor architecture',
      `${APP_NAME} development story`,
    ],
    heroKicker: 'Developer story',
    heroSummary:
      `${APP_NAME} started from a simple observation: many Mac users still want the practical Notepad++ workflow, but they also expect a Mac app that feels local, safe, and modern.`,
    sections: [
      {
        title: 'The product constraint',
        body: [
          'The goal was not to build another IDE. macOS already has strong developer tools. The product constraint was narrower: make a lightweight editor for local text work, especially for users who miss the Notepad++ habit of opening a file, making a precise edit, and moving on.',
          'That constraint shaped the feature set. Multi-tab editing, Column Mode, Regex Find & Replace, Workspace Search, Markdown Preview, Script Pipelines, and Batch Processing all serve the same loop: inspect text, transform text, preview changes, and stay in control.',
        ],
      },
      {
        title: 'Why a hybrid architecture made sense',
        body: [
          `A pure native editor can feel excellent on macOS, but building advanced editor behavior from scratch is expensive. A pure web app can move fast, but local file workflows and desktop expectations matter. ${APP_NAME} uses a Mac-first app shell with a desktop-grade editing surface so the editor can support serious text features while still behaving like a desktop app.`,
          'That architecture keeps the app focused on the hard parts users notice: opening local files, switching tabs, keeping unsaved state clear, running text operations safely, and showing useful previews before changes are applied.',
        ],
      },
      {
        title: 'The scripting idea',
        body: [
          'The scripting feature came from a recurring pattern: many text edits are too small to justify writing a standalone script, but too repetitive to do by hand every time. Removing blank lines, deduplicating lists, extracting links, normalizing dates, stripping Markdown, or cleaning copied content all fall into that category.',
          `Instead of treating scripts as system automation, ${APP_NAME} treats them as text transformations. The app focuses on current-document and batch-safe workflows, with preview, diff, backup, and rollback where the operation could affect more content.`,
        ],
        bullets: [
          'Keep scripts close to the text being edited.',
          'Make repeatable cleanup easy to rerun.',
          'Preview changes before applying broad edits.',
          'Use rollback as part of the workflow, not as an afterthought.',
        ],
      },
      {
        title: 'What I would still improve',
        body: [
          'The interesting part of this category is that the work never ends at "can edit text." The next improvements are about reducing friction: better batch review, clearer script reuse, smoother Markdown workflows, and more user-controlled AI actions that help with real text tasks instead of adding a chatbot for its own sake.',
          `The direction remains the same: ${APP_NAME} should be a small, practical Mac text workbench for people who value the Notepad++ workflow but want it to fit macOS.`,
        ],
      },
    ],
    table: {
      title: `Design choices behind ${APP_NAME}`,
      headers: ['Choice', 'Reason'],
      rows: [
        ['Mac-first app shell', 'Local files, permissions, window behavior, and App Store distribution matter for the target users.'],
        ['Desktop-grade editing surface', 'Advanced editing behaviors such as Column Mode and syntax-aware workflows are easier to support consistently.'],
        ['Text transformation scripts', 'Many users repeat cleanup tasks that are too small for standalone automation.'],
        ['Diff preview and rollback', 'Batch edits need trust before they need speed.'],
        ['User-controlled AI', 'AI should help with selected text, scripts, summaries, and rewrites only when the user asks for it.'],
      ],
    },
    faq: [
      {
        q: `Is ${APP_NAME} open source?`,
        a: 'The landing page repository is public, but the macOS app itself is distributed through the Mac App Store.',
      },
      {
        q: 'Why use a hybrid architecture for a Mac editor?',
        a: 'A hybrid architecture lets the app support advanced text workflows while the Mac app shell handles local desktop behavior and distribution.',
      },
      {
        q: `Is ${APP_NAME} a Notepad++ clone?`,
        a: 'No. It is an independent macOS editor inspired by practical Notepad++-style workflows, not an official port or clone.',
      },
    ],
    related: [
      { label: 'Best lightweight text editors for Mac in 2026', href: '/en/best-lightweight-text-editors-for-mac-2026/' },
      { label: 'Why macOS still needs a Notepad++ alternative', href: '/en/why-macos-still-needs-a-notepad-plus-plus-alternative/' },
      { label: 'Notepad++ for Mac alternative overview', href: '/en/notepad-plus-plus-for-mac/' },
      { label: 'Back to product overview', href: '/en/' },
    ],
    externalLinks: [
      { label: `Download ${APP_NAME} on the App Store`, href: APP_STORE_URL, external: true },
      { label: `See ${APP_NAME} on Product Hunt`, href: PRODUCT_HUNT_URL, external: true },
      { label: 'View this website repository on GitHub', href: GITHUB_REPO_URL, external: true },
      { label: 'Visit the official Notepad++ website', href: NOTEPAD_PLUS_PLUS_URL, external: true },
    ],
  },
]

export const seoArticles: SeoArticle[] = [
  ...coreSeoArticles,
  ...textEditorGuides,
  ...workflowGuides,
]

export function getSeoArticle(slug: string): SeoArticle | undefined {
  return seoArticles.find((article) => article.slug === slug)
}

export function getSeoArticleUrl(article: SeoArticle): string {
  return `${SITE_URL}/en/${article.slug}/`
}
