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

export function getSeoArticle(slug: string): SeoArticle | undefined {
  return seoArticles.find((article) => article.slug === slug)
}

export function getSeoArticleUrl(article: SeoArticle): string {
  return `${SITE_URL}/en/${article.slug}/`
}
