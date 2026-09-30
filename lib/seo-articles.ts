import { APP_NAME } from './seo'
import { APP_STORE_URL, GITHUB_REPO_URL, NOTEPAD_PLUS_PLUS_URL, PRODUCT_HUNT_URL, SITE_URL } from './paths'
import { textEditorGuides } from './seo-articles/text-editor-guides'
import { workflowGuides } from './seo-articles/workflow-guides'

export interface SeoArticleLink {
  label: string
  href: string
  external?: boolean
}

export interface SeoArticleFigure {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
}

export interface SeoArticleSection {
  title: string
  body: string[]
  bullets?: string[]
  figure?: SeoArticleFigure
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

const coreSeoArticles: SeoArticle[] = [
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
      { label: 'Text editor for Mac', href: '/en/text-editor-for-mac/' },
      { label: 'Regex find and replace on Mac', href: '/en/regex-find-replace-mac/' },
      { label: 'Compare Notepad++ alternatives for Mac', href: '/en/notepad-plus-plus-alternatives-for-mac/' },
      { label: 'Does Notepad++ work on Mac?', href: '/en/does-notepad-plus-plus-work-on-mac/' },
      { label: 'CotEditor alternative for Mac', href: '/en/coteditor-alternative-for-mac/' },
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
      'Compare Notepad++ alternatives for Mac in 2026: Nextpad++, NotepadNext, BBEdit, CotEditor, TextMate, Sublime Text, VS Code, and notePad++++.',
    datePublished: '2026-06-03',
    dateModified: '2026-09-30',
    keywords: [
      'best Notepad++ alternatives for Mac',
      'Notepad++ Mac replacement',
      'BBEdit alternative',
      'CotEditor alternative',
      'Sublime Text alternative Mac',
      'native Notepad++ for Mac',
      'Nextpad++ vs NotepadNext',
      'free Notepad++ alternative for Mac',
      'Notepad++ vs BBEdit',
    ],
    heroKicker: 'Comparison guide, updated September 2026',
    heroSummary:
      'There is no single best editor for every Mac user. Notepad++ itself is still a Windows program, so the real choice is between native ports of its code, Mac-native editors, and cross-platform code editors. The right one depends on the work you do most.',
    sections: [
      {
        title: 'Quick picks: which Notepad++ alternative fits you',
        body: [
          'If you only have a minute, start here. Each pick below is explained in its own section, with what it is good at and what to weigh before you install it.',
        ],
        bullets: [
          'Closest to the original: Nextpad++, a native port',
          'Free and lightweight: CotEditor',
          'Deepest text processing: BBEdit',
          'Coding projects: VS Code or Sublime Text',
          'Repeatable cleanup and batch edits: notePad++++',
          'Open-source look-alike: NotepadNext',
        ],
      },
      {
        title: 'How to choose a Notepad++ alternative on Mac',
        figure: {
          src: '/images/seo/notepad-alternatives-decision-guide.svg',
          alt: 'Decision guide: choose Nextpad++ or NotepadNext for the Notepad++ interface, VS Code or Sublime Text for coding, CotEditor for a free and simple native editor, BBEdit for deep grep and scripting, and notePad++++ for tabs, Column Mode, and batch edits.',
          caption: 'The same questions as a picture: answer them in order and stop at the first yes. Prices, system requirements, and trade-offs are covered in the sections below.',
          width: 600,
          height: 740,
        },
        body: [
          'Start with the work you do most often. If you mainly write code, an IDE-like tool or VS Code may be the better fit. If you mainly open plain text, clean copied content, edit lists, search folders, and process repeated text tasks, a focused editor can be faster.',
          'A few questions narrow the field quickly. Do you depend on a specific Notepad++ plugin? Do you search and change text across many files? Does the price model matter to you? And does the editor support the macOS version you run? The sections below answer these for each option.',
        ],
      },
      {
        title: 'First, the fact that shapes every option: Notepad++ is Windows-only',
        body: [
          'The official Notepad++ project distributes a Windows application and does not publish a macOS version. Everything on this page is therefore one of three things: a port or re-implementation of Notepad++ for the Mac, a Mac editor with a similar feature set, or a general code editor that also runs on macOS.',
          'You can also run the original Windows build through Wine, CrossOver, or a Windows virtual machine. That works, but it is a Windows program in a translation layer, which is why most people end up choosing one of the native options below.',
        ],
      },
      {
        title: 'Nextpad++: a native port of the Notepad++ code',
        body: [
          'In April 2026 an independent developer released a native macOS port of the Notepad++ code under the name Notepad++ for Mac. The original author objected to the use of the Notepad++ name and branding, and the port was renamed Nextpad++ in May 2026. It is an unofficial community project and is not endorsed by the Notepad++ project.',
          'According to its own site, Nextpad++ is free, released under the GPL, and ships as a universal binary for Apple silicon and Intel Macs. Plugins written for the Windows version have to be ported, so a plugin you rely on may not be available yet.',
        ],
        bullets: [
          'Best for: the Notepad++ interface as a native Mac app',
          'Weigh: a community project, and plugin availability varies',
        ],
      },
      {
        title: 'NotepadNext: an open-source re-implementation',
        body: [
          'NotepadNext describes itself as a cross-platform re-implementation of Notepad++. It is built with Qt, released under GPL-3.0, and runs on Windows, Linux, and macOS. On a Mac you can download a disk image from its releases page or install it with Homebrew.',
          'Its README calls it stable and usable, but also says it should not be considered safe for critically important work and acknowledges bugs and half-working parts. It does not mention plugin support. Treat it as a promising look-alike for everyday editing rather than a drop-in replacement.',
        ],
        bullets: [
          'Best for: an open-source editor with a Notepad++-style layout',
          'Weigh: rough edges, and no plugin support is mentioned',
        ],
      },
      {
        title: 'BBEdit: the deepest Mac-native text tool',
        body: [
          'BBEdit describes itself as a professional HTML and text editor for macOS. Its website lists grep pattern matching, multi-file search and replace, code folding, and AppleScript and Unix scripting. At the time of writing, it requires macOS 14.0 or later.',
          'BBEdit includes a 30-day evaluation with all features enabled. After that you can keep using it in Free Mode, or unlock its exclusive features with a purchase or a Mac App Store subscription. Check its website for current prices.',
        ],
        bullets: [
          'Best for: heavy pattern-based search and scripting across many files',
          'Weigh: more depth than quick cleanup needs, and some features are paid',
        ],
      },
      {
        title: 'CotEditor: free, native, and lightweight',
        body: [
          'CotEditor is a free, open-source Mac text editor available through the Mac App Store. Its website highlights find and replace with the ICU regular expression engine, macros in languages such as AppleScript, JavaScript, Python, Ruby, and UNIX shell, and support for many file encodings with attention to CJK languages.',
          'Its GitHub page states that it supports the latest two major macOS releases, and at the time of writing it lists macOS Tahoe 26 or later as the requirement. If your Mac runs an older system, check the requirements first.',
        ],
        bullets: [
          'Best for: a simple, free native editor for everyday text',
          'Weigh: current releases need a recent version of macOS',
        ],
      },
      {
        title: 'TextMate: bundles, multiple carets, and project search',
        body: [
          'TextMate is developed as open source and, according to its website, requires macOS 10.12 or later. It highlights multiple carets, file search with a preview of replacements, snippets, macros, and bundles for customization across many languages and markup systems.',
          'Its customization centers on bundles, which is a different model from Notepad++ plugins, so plan for a short adjustment if you are moving over from Notepad++.',
        ],
        bullets: [
          'Best for: customizable editing with snippets and macros',
          'Weigh: bundles work differently from Notepad++ plugins',
        ],
      },
      {
        title: 'Sublime Text and VS Code: cross-platform code editors',
        body: [
          'Sublime Text can be downloaded and evaluated for free, but a license must be purchased for continued use. Its website describes personal licenses as a one-time purchase that includes three years of updates. It highlights multiple selections, Goto features for navigating projects, native Apple silicon support, and a Python-based plugin API.',
          'Visual Studio Code is free and open source, with a large extension marketplace, built-in Git support, debugging, and an integrated terminal. Its documentation says it supports macOS versions that still receive Apple security updates, typically the latest release and the two before it.',
        ],
        bullets: [
          'Best for: coding projects, extensions, and language tooling',
          'Weigh: built around code projects rather than quick plain-text cleanup',
        ],
      },
      {
        title: 'Where notePad++++ fits',
        figure: {
          src: '/images/screen-scripts-en.png',
          alt: 'notePad++++ Script Pipelines: a step-by-step text workflow with a result preview, batch processing counts, and rollback',
          caption: 'Script Pipelines chain cleanup steps such as trimming, deduplicating, and sorting, then show a preview before anything is applied.',
          width: 1440,
          height: 900,
        },
        body: [
          'notePad++++ is strongest when editing and processing text are part of the same job. The app combines Multi-Tab Editing, Column Mode, Regex Find & Replace, Workspace Search, Markdown Preview, Diff View, Script Pipelines, Batch Processing, backup, rollback, iCloud sync, and optional AI assistance.',
          'That makes it useful for notes, Markdown documents, logs, CSV-like text, keyword lists, support snippets, release notes, copied social content, and one-off cleanup jobs that would be tedious by hand. It does not run Notepad++ plugins, and it is not affiliated with or endorsed by the Notepad++ project.',
        ],
        bullets: [
          'Best for: searching, transforming, and reviewing text in one window',
          'Weigh: a text workbench, not an IDE or a Notepad++ plugin host',
        ],
      },
      {
        title: 'When another editor may be better',
        body: [
          'Choose Nextpad++ or NotepadNext if you want the Notepad++ interface itself and accept the trade-offs of a community project. Choose BBEdit if you need the deepest Mac-native text processing. Choose CotEditor if you want something free and simple. Choose Sublime Text or VS Code if your day is mostly code.',
          'Those tools can be excellent choices. notePad++++ is designed for a more specific search intent: a Mac-first text editor that keeps Notepad++-style editing comfort while adding repeatable cleanup workflows and batch-safe processing.',
        ],
      },
      {
        title: 'Test with one real task before you commit',
        figure: {
          src: '/images/screen-search-en.png',
          alt: 'notePad++++ Workspace Search finding a term across project files, with match counts per file and replacement previews',
          caption: 'A realistic test: search a whole folder for a pattern and check the replacement preview before you apply it.',
          width: 1440,
          height: 900,
        },
        body: [
          'Feature lists only go so far. Pick one real job, such as changing the same pattern across a folder of files or cleaning a messy export, and try it in your top two candidates. The tool that makes you switch windows the least is usually the right one.',
          'If you work with older text files, also open one legacy file in each candidate to check that its encoding is handled correctly, since that is a common surprise after switching platforms.',
        ],
      },
    ],
    table: {
      title: 'Alternatives at a glance',
      headers: ['Tool', 'Cost model', 'Best fit', 'Trade-off to consider'],
      rows: [
        ['notePad++++', 'Mac App Store; see the listing for current pricing', 'Text editing plus repeatable cleanup: Column Mode, Regex Find & Replace, Workspace Search, Script Pipelines, Batch Processing', 'A text workbench for macOS, not a full IDE or a Notepad++ plugin host'],
        ['Nextpad++', 'Free, GPL, per its own site', 'The Notepad++ interface as a native Mac app', 'Unofficial community project; Windows plugins must be ported'],
        ['NotepadNext', 'Free, GPL-3.0', 'An open-source, cross-platform look-alike of Notepad++', 'The README mentions bugs and does not mention plugin support'],
        ['BBEdit', '30-day evaluation, then Free Mode; exclusive features are paid', 'Deep grep, multi-file search, and scripting on Mac', 'More than some users need for quick everyday cleanup'],
        ['CotEditor', 'Free and open source', 'Simple native plain-text editing with regex and scripting', 'Current releases require a recent version of macOS'],
        ['TextMate', 'Open source', 'Customizable editing with bundles, snippets, and macros', 'Bundles differ from Notepad++ plugins'],
        ['Sublime Text', 'Free to evaluate; license required for continued use', 'Fast cross-platform editing with a Python plugin API', 'A different product style for users who want a strictly native Mac app'],
        ['VS Code', 'Free and open source', 'Coding projects, extensions, debugging, language tooling', 'Heavier than needed for simple text cleanup and quick file edits'],
      ],
    },
    faq: [
      {
        q: 'What is the best Notepad++ alternative for Mac?',
        a: 'It depends on your workflow. Nextpad++ is closest if you want the Notepad++ interface as a native app, CotEditor is a good free and simple choice, and BBEdit is the deepest Mac-native tool. notePad++++ is a strong fit if you want tabs, Column Mode, Regex Find & Replace, Workspace Search, Markdown Preview, Script Pipelines, and batch text processing in a native Mac app.',
      },
      {
        q: 'Is there a native Notepad++ for Mac?',
        a: 'Not from the official project, which distributes a Windows application only. Nextpad++ is an independent community port of the Notepad++ code to macOS, and NotepadNext is a cross-platform re-implementation. Neither is an official release.',
      },
      {
        q: 'What is the difference between Nextpad++ and NotepadNext?',
        a: 'By their own descriptions, Nextpad++ is a port of the Notepad++ code base to macOS, while NotepadNext is a cross-platform re-implementation of Notepad++ built with Qt. Check each project for the features and plugins you need.',
      },
      {
        q: 'Is there a free Notepad++ alternative for Mac?',
        a: 'Yes, several. CotEditor is free and open source, Nextpad++ and NotepadNext are released under the GPL, Visual Studio Code is free and open source, TextMate is open source, and BBEdit offers a Free Mode after its 30-day evaluation. Sublime Text is free to evaluate but needs a license for continued use.',
      },
      {
        q: 'Which alternatives support Notepad++ plugins?',
        a: 'Nextpad++ says it supports plugins, but plugins written for Windows have to be ported, so not every plugin is available. The NotepadNext README does not mention plugin support. The other tools have their own extension systems, and notePad++++ does not run Notepad++ plugins.',
      },
      {
        q: 'Can I run the real Notepad++ on a Mac?',
        a: 'Yes, through a compatibility layer such as Wine or CrossOver, or inside a Windows virtual machine. It is still a Windows program, so behavior and integration differ from a native Mac app. The guide linked in the sidebar covers the trade-offs.',
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
      { label: 'Text editor for Mac', href: '/en/text-editor-for-mac/' },
      { label: 'Plain text editor for Mac', href: '/en/plain-text-editor-for-mac/' },
      { label: 'Notepad++ for Mac alternative overview', href: '/en/notepad-plus-plus-for-mac/' },
      { label: 'Does Notepad++ work on Mac?', href: '/en/does-notepad-plus-plus-work-on-mac/' },
      { label: 'Nextpad++ vs NotepadNext vs notePad++++', href: '/en/nextpad-vs-notepadnext-vs-notepad-plus-plus-plus-plus/' },
      { label: 'CotEditor alternative for Mac', href: '/en/coteditor-alternative-for-mac/' },
      { label: 'Column Mode editor for Mac', href: '/en/column-mode-editor-for-mac/' },
      { label: 'Back to product overview', href: '/en/' },
    ],
    externalLinks: [
      { label: 'Download notePad++++ on the App Store', href: APP_STORE_URL, external: true },
      { label: 'See notePad++++ on Product Hunt', href: PRODUCT_HUNT_URL, external: true },
      { label: 'View this website repository on GitHub', href: GITHUB_REPO_URL, external: true },
      { label: 'Visit the official Notepad++ website', href: NOTEPAD_PLUS_PLUS_URL, external: true },
      { label: 'Nextpad++ community port', href: 'https://nextpad.org/', external: true },
      { label: 'NotepadNext on GitHub', href: 'https://github.com/dail8859/NotepadNext', external: true },
      { label: 'BBEdit official website', href: 'https://www.barebones.com/products/bbedit/', external: true },
      { label: 'CotEditor official website', href: 'https://coteditor.com/', external: true },
      { label: 'TextMate official website', href: 'https://macromates.com/', external: true },
      { label: 'Sublime Text official website', href: 'https://www.sublimetext.com/', external: true },
      { label: 'Visual Studio Code official website', href: 'https://code.visualstudio.com/', external: true },
    ],
  },
  {
    slug: 'column-mode-editor-for-mac',
    title: 'Column Mode Editor for Mac: Edit Aligned Text, Lists, Logs, and CSV-Like Data Faster',
    shortTitle: 'Column Mode Editor for Mac',
    description:
      'Need a Column Mode editor for Mac? Hold Option and drag for a column selection, or switch Column Mode on from the toolbar. notePad++++ pairs it with Regex Find & Replace, Workspace Search, Script Pipelines, diff preview, and rollback.',
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
          'The editor engine notePad++++ is built on, Monaco, also defines Cmd + Shift + Option + an arrow key to grow a column selection from the keyboard.',
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
        q: 'What is the Column Mode shortcut on Mac?',
        a: 'Hold Option and drag with the mouse to select a column block. From the keyboard, Cmd + Shift + Option plus an arrow key extends a column selection. The toolbar Column Mode button keeps column selection on without holding a key.',
      },
      {
        q: 'Is Column Mode part of Pro?',
        a: 'No. In the app, column mode editing is part of the free edition. Check the App Store listing for the current split between free and Pro features.',
      },
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
      { label: 'Regex find and replace on Mac', href: '/en/regex-find-replace-mac/' },
      { label: 'Batch text processing on Mac', href: '/en/batch-text-processing-mac/' },
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
  {
    slug: 'best-lightweight-text-editors-for-mac-2026',
    title: 'Best Lightweight Text Editors for Mac in 2026: Choosing Between notePad++++, CotEditor, BBEdit, Sublime Text, VS Code, and TextEdit',
    shortTitle: 'Best Lightweight Text Editors for Mac in 2026',
    description:
      'A practical 2026 guide to lightweight text editors for Mac, comparing notePad++++, CotEditor, BBEdit, Sublime Text, VS Code, and TextEdit for notes, logs, regex cleanup, column editing, Markdown, and local text processing.',
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    keywords: [
      'best lightweight text editors for Mac 2026',
      'lightweight text editor for Mac',
      'Mac text editor',
      'Notepad++ alternative for Mac',
      'CotEditor BBEdit Sublime Text VS Code comparison',
    ],
    heroKicker: '2026 buyer and workflow guide',
    heroSummary:
      'The best lightweight Mac editor depends on what you actually do with text: quick notes, source snippets, Markdown drafts, logs, regex cleanup, column edits, or repeatable batch processing. This guide compares common choices by workflow rather than by feature count.',
    sections: [
      {
        title: 'What lightweight should mean on macOS',
        body: [
          'A lightweight text editor should open quickly, stay out of the way, and make common text work faster without asking you to manage a full development environment. For many Mac users, that means a native-feeling app with tabs, search, keyboard-friendly editing, and predictable local file handling.',
          'The tricky part is that "lightweight" does not always mean "minimal." A tool can still be lightweight if it includes focused power features such as Regex Find & Replace, Column Mode, Workspace Search, Markdown Preview, Script Pipelines, and Batch Processing, as long as those features serve daily text work instead of turning the editor into an IDE.',
        ],
      },
      {
        title: 'The short list',
        body: [
          'TextEdit is already on every Mac and is fine for simple rich text or plain text notes. CotEditor is a clean native choice for plain-text editing. BBEdit is the long-running professional Mac editor. Sublime Text is fast, keyboard-driven, and cross-platform. VS Code is excellent for coding projects but often more than needed for quick text cleanup.',
          `${APP_NAME} fits a more specific niche: users who want a Notepad++-style Mac editor for local files, tabs, regex cleanup, column editing, Markdown, workspace search, and repeatable transformations without opening a full IDE.`,
        ],
      },
      {
        title: 'When notePad++++ makes sense',
        body: [
          'notePad++++ is strongest when editing and processing are part of the same job. If you often clean copied content, inspect logs, normalize lists, edit Markdown, run regex replacements, or repeat the same text transformation across multiple files, the app is designed around that loop.',
          'Its local-first workflow also matters. Core editing does not require an account, and text processing happens around the files you choose to open. Optional AI and scripting workflows are designed as explicit actions rather than background behavior.',
        ],
        bullets: [
          'Use tabs for several local files in one focused window.',
          'Use Column Mode for aligned text, logs, and CSV-like snippets.',
          'Use Regex Find & Replace for structured cleanup.',
          'Use Workspace Search when a folder contains the answer.',
          'Use Script Pipelines and Batch Processing for repeatable cleanup.',
          'Use Markdown Preview for notes, docs, and drafts.',
        ],
      },
      {
        title: 'How to choose',
        body: [
          'Choose TextEdit if the file is simple and formatting matters. Choose CotEditor if you want a clean native editor for straightforward plain-text work. Choose BBEdit if you want a mature professional Mac editor. Choose Sublime Text if you prefer a fast cross-platform editor with a package ecosystem. Choose VS Code if the text lives inside a coding project.',
          'Choose notePad++++ if your main problem is not only writing text, but repeatedly cleaning, transforming, searching, previewing, and safely applying edits to local text files.',
        ],
      },
    ],
    table: {
      title: 'Lightweight Mac editor comparison',
      headers: ['Editor', 'Best fit', 'Where it may be too much or too little'],
      rows: [
        ['notePad++++', 'Notepad++-style Mac text work with tabs, Column Mode, Regex Find & Replace, Workspace Search, Markdown Preview, Script Pipelines, and Batch Processing.', 'Best for text workflows, not a full IDE replacement.'],
        ['CotEditor', 'Clean native plain-text editing on macOS.', 'Less focused on batch pipelines, rollback, and repeatable automation.'],
        ['BBEdit', 'Mature professional Mac text editing with a deep feature set.', 'Can be more than a casual text-cleanup workflow needs.'],
        ['Sublime Text', 'Fast cross-platform editing, keyboard workflows, and packages.', 'Less Mac-native in feel than pure macOS-focused tools.'],
        ['VS Code', 'Coding projects, extensions, debugging, and language tooling.', 'Heavier than needed for quick notes, logs, and one-off text cleanup.'],
        ['TextEdit', 'Built-in simple documents and quick notes.', 'Not designed for Notepad++-style regex, column, workspace, or batch workflows.'],
      ],
    },
    faq: [
      {
        q: 'What is the best lightweight text editor for Mac in 2026?',
        a: 'There is no single best choice. notePad++++ is a strong fit for users who want a lightweight Mac editor with tabs, Column Mode, Regex Find & Replace, Workspace Search, Markdown Preview, Script Pipelines, and Batch Processing.',
      },
      {
        q: 'Is VS Code a lightweight text editor?',
        a: 'VS Code can edit text well, but it is usually better described as a code editor platform. For quick local text cleanup, a smaller focused editor may feel faster.',
      },
      {
        q: 'Is notePad++++ affiliated with Notepad++?',
        a: 'No. notePad++++ is an independent macOS text editor inspired by practical Notepad++-style workflows.',
      },
    ],
    related: [
      { label: 'Text editor for Mac', href: '/en/text-editor-for-mac/' },
      { label: 'Plain text editor for Mac', href: '/en/plain-text-editor-for-mac/' },
      { label: 'Batch text processing on Mac', href: '/en/batch-text-processing-mac/' },
      { label: 'Why macOS still needs a Notepad++ alternative', href: '/en/why-macos-still-needs-a-notepad-plus-plus-alternative/' },
      { label: 'How I built a Notepad++-style editor for macOS', href: '/en/how-i-built-a-notepad-plus-plus-style-editor-for-macos/' },
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
  {
    slug: 'why-macos-still-needs-a-notepad-plus-plus-alternative',
    title: 'Why macOS Still Needs a Notepad++ Alternative',
    shortTitle: 'Why macOS Still Needs a Notepad++ Alternative',
    description:
      'Why Mac users still search for a Notepad++ alternative in 2026, and how practical workflows like tabs, regex cleanup, column editing, workspace search, Markdown preview, and local text processing shape notePad++++.',
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
          'That is why notePad++++ combines Column Mode, Regex Find & Replace, Workspace Search, Markdown Preview, Script Pipelines, Batch Processing, diff preview, backup, and rollback. The goal is not to become a full IDE. The goal is to make repetitive text work less manual.',
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
          'That is the space notePad++++ is trying to occupy: not a clone, not an IDE, but a practical Mac text workbench for people who still value the Notepad++ way of getting text fixed quickly.',
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
        q: 'What makes notePad++++ different from a basic notepad app?',
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
      { label: 'Download notePad++++ on the App Store', href: APP_STORE_URL, external: true },
      { label: 'See notePad++++ on Product Hunt', href: PRODUCT_HUNT_URL, external: true },
      { label: 'View this website repository on GitHub', href: GITHUB_REPO_URL, external: true },
      { label: 'Visit the official Notepad++ website', href: NOTEPAD_PLUS_PLUS_URL, external: true },
    ],
  },
  {
    slug: 'how-i-built-a-notepad-plus-plus-style-editor-for-macos',
    title: 'How I Built a Notepad++-Style Editor for macOS',
    shortTitle: 'How I Built a Notepad++-Style Editor for macOS',
    description:
      'A developer story about building notePad++++, a Notepad++-style editor for macOS focused on local files, fast editing, tabs, column mode, regex cleanup, workspace search, scripts, Markdown preview, and batch-safe text processing.',
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    keywords: [
      'how I built a Notepad++ style editor for macOS',
      'build Mac text editor',
      'Notepad++ style editor for Mac',
      'Mac-first text editor architecture',
      'notePad++++ development story',
    ],
    heroKicker: 'Developer story',
    heroSummary:
      'notePad++++ started from a simple observation: many Mac users still want the practical Notepad++ workflow, but they also expect a Mac app that feels local, safe, and modern.',
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
          'A pure native editor can feel excellent on macOS, but building advanced editor behavior from scratch is expensive. A pure web app can move fast, but local file workflows and desktop expectations matter. notePad++++ uses a Mac-first app shell with a desktop-grade editing surface so the editor can support serious text features while still behaving like a desktop app.',
          'That architecture keeps the app focused on the hard parts users notice: opening local files, switching tabs, keeping unsaved state clear, running text operations safely, and showing useful previews before changes are applied.',
        ],
      },
      {
        title: 'The scripting idea',
        body: [
          'The scripting feature came from a recurring pattern: many text edits are too small to justify writing a standalone script, but too repetitive to do by hand every time. Removing blank lines, deduplicating lists, extracting links, normalizing dates, stripping Markdown, or cleaning copied content all fall into that category.',
          'Instead of treating scripts as system automation, notePad++++ treats them as text transformations. The app focuses on current-document and batch-safe workflows, with preview, diff, backup, and rollback where the operation could affect more content.',
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
          'The direction remains the same: notePad++++ should be a small, practical Mac text workbench for people who value the Notepad++ workflow but want it to fit macOS.',
        ],
      },
    ],
    table: {
      title: 'Design choices behind notePad++++',
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
        q: 'Is notePad++++ open source?',
        a: 'The landing page repository is public, but the macOS app itself is distributed through the Mac App Store.',
      },
      {
        q: 'Why use a hybrid architecture for a Mac editor?',
        a: 'A hybrid architecture lets the app support advanced text workflows while the Mac app shell handles local desktop behavior and distribution.',
      },
      {
        q: 'Is notePad++++ a Notepad++ clone?',
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
      { label: 'Download notePad++++ on the App Store', href: APP_STORE_URL, external: true },
      { label: 'See notePad++++ on Product Hunt', href: PRODUCT_HUNT_URL, external: true },
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
