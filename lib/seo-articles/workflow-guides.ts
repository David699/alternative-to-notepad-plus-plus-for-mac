import type { SeoArticle, SeoArticleLink } from '../seo-articles'
import { APP_NAME } from '../seo'
import { APP_STORE_URL, GITHUB_REPO_URL, PRODUCT_HUNT_URL } from '../paths'

const commonExternalLinks: SeoArticleLink[] = [
  { label: 'Download notePad++++ on the App Store', href: APP_STORE_URL, external: true },
  { label: 'See notePad++++ on Product Hunt', href: PRODUCT_HUNT_URL, external: true },
  { label: 'View this website repository on GitHub', href: GITHUB_REPO_URL, external: true },
]

export const workflowGuides: SeoArticle[] = [
  {
    slug: 'regex-find-replace-mac',
    title: 'Regex Find and Replace on Mac: Clean URLs, Dates, Logs, Lists, and Markdown Faster',
    shortTitle: 'Regex Find and Replace on Mac',
    description:
      'Use regex find and replace on Mac with notePad++++ to clean structured text, extract URLs, normalize dates, edit logs, update Markdown, and preview text changes before applying them.',
    datePublished: '2026-07-01',
    dateModified: '2026-07-01',
    keywords: [
      'regex find replace Mac',
      'regular expression find replace macOS',
      'Mac text editor regex replace',
      'regex text cleanup Mac',
      'Notepad++ regex Mac alternative',
    ],
    heroKicker: 'For pattern-based text cleanup',
    heroSummary:
      'Regex Find & Replace is the right tool when the text follows a pattern: URLs, dates, IDs, prefixes, log levels, Markdown links, or repeated formats. notePad++++ keeps regex close to everyday Mac text editing.',
    sections: [
      {
        title: 'When regex is better than manual editing',
        body: [
          'Manual find and replace works when the exact text is known. Regex is better when you need to match a pattern: every URL, every date, every line starting with a prefix, or every value inside a repeated structure.',
          `${APP_NAME} pairs Regex Find & Replace with tabs, workspace search, Column Mode, Markdown preview, and batch-safe workflows so pattern cleanup can stay inside the editor.`,
        ],
        bullets: [
          'Extract URLs from copied research notes.',
          'Normalize dates from 2026/07/01 to 2026-07-01.',
          'Remove tracking parameters from links.',
          'Rename repeated Markdown headings or labels.',
          'Clean log prefixes and status fields.',
          'Replace structured snippets across a folder with preview.',
        ],
      },
      {
        title: 'Practical before and after examples',
        body: [
          'Example: use a URL pattern to find links inside a long document, then extract or deduplicate them through a pipeline. Example: match blank lines and repeated whitespace, then normalize copied text before pasting it into a CMS.',
          'For dates, a regex can capture year, month, and day groups and rewrite them into the format your spreadsheet, database, or release note expects. For Markdown, regex can help change repeated link labels or remove formatting from a draft.',
        ],
      },
      {
        title: 'Use regex with safer batch workflows',
        body: [
          'The risk with regex is applying a broad pattern too confidently. A useful Mac regex editor should make it easy to test the match, inspect the result, preview differences, and roll back when the change affects many lines or files.',
          'That is why notePad++++ treats regex as part of a controlled text workflow rather than a hidden power feature.',
        ],
      },
    ],
    table: {
      title: 'Regex cleanup examples',
      headers: ['Text problem', 'Regex workflow'],
      rows: [
        ['Copied article full of links', 'Find URL patterns, extract results, deduplicate, and sort.'],
        ['Dates in mixed formats', 'Capture year/month/day groups and replace with a standard format.'],
        ['Log lines with repeated prefixes', 'Match the prefix pattern and remove or rewrite it.'],
        ['Markdown links need relabeling', 'Find repeated link syntax and replace selected groups.'],
        ['Extra blank lines and spaces', 'Match repeated whitespace and normalize the document.'],
        ['Folder-wide cleanup', 'Run the replacement with diff preview before applying.'],
      ],
    },
    faq: [
      {
        q: 'Does notePad++++ support regex find and replace?',
        a: 'Yes. Regex Find & Replace is one of the core text cleanup workflows and pairs with batch processing, diff preview, and rollback.',
      },
      {
        q: 'Can regex be used across multiple files?',
        a: 'notePad++++ is built around workspace and batch workflows, so repeated cleanup can be reviewed before broad changes are applied.',
      },
      {
        q: 'Is regex only for developers?',
        a: 'No. It is useful for anyone cleaning patterned text such as links, dates, lists, logs, Markdown, or copied web content.',
      },
    ],
    related: [
      { label: 'Batch text processing on Mac', href: '/en/batch-text-processing-mac/' },
      { label: 'Delete lines containing text on Mac', href: '/en/delete-lines-containing-text-on-mac/' },
      { label: 'Plain text editor for Mac', href: '/en/plain-text-editor-for-mac/' },
      { label: 'Column Mode editor for Mac', href: '/en/column-mode-editor-for-mac/' },
      { label: 'Back to product overview', href: '/en/' },
    ],
    externalLinks: commonExternalLinks,
  },
  {
    slug: 'batch-text-processing-mac',
    title: 'Batch Text Processing on Mac: Clean Lists, Logs, Markdown, and Local Text Files Safely',
    shortTitle: 'Batch Text Processing on Mac',
    description:
      'Batch process text on Mac with notePad++++. Clean lists, remove blank lines, deduplicate, sort, extract links, normalize punctuation, strip Markdown, preview diffs, and roll back changes.',
    datePublished: '2026-07-01',
    dateModified: '2026-07-01',
    keywords: [
      'batch text processing Mac',
      'batch text cleanup Mac',
      'text cleaning tool Mac',
      'process multiple text files Mac',
      'deduplicate sort text Mac',
    ],
    heroKicker: 'For repeatable cleanup work',
    heroSummary:
      'Batch text processing is useful when the same cleanup needs to happen more than once: across many lines, many notes, or many local files. notePad++++ turns those repeated edits into previewable workflows.',
    sections: [
      {
        title: 'The text jobs that should not stay manual',
        body: [
          'Many text jobs are simple but repetitive: remove blank lines, trim spaces, deduplicate lists, sort values, extract URLs, strip Markdown, normalize punctuation, or clean a batch of similar files before publishing.',
          `${APP_NAME} handles those workflows through Script Pipelines and Batch Processing so you can configure a cleanup once and reuse it.`,
        ],
        bullets: [
          'Remove blank lines from keyword lists.',
          'Deduplicate and sort copied values.',
          'Extract links or dates from long notes.',
          'Strip Markdown syntax for plain-text output.',
          'Normalize punctuation in copied content.',
          'Apply a cleanup pipeline to several local files.',
        ],
      },
      {
        title: 'Preview first, then apply',
        body: [
          'Batch editing is only useful if the result can be trusted. A fast tool that changes many files without a preview creates risk, especially when the input is messy or the pattern is broad.',
          'notePad++++ emphasizes diff preview, backup, and rollback for broad changes. That makes batch processing useful for real work rather than only throwaway text.',
        ],
      },
      {
        title: 'How batch processing relates to regex and scripts',
        body: [
          'Regex is best for pattern matching. Column Mode is best for position-based edits. Pipelines are best for common step-by-step transformations. Scripts are best when the rule is custom.',
          'Batch Processing ties those ideas together when the same transformation needs to run on more than one chunk of text or more than one file.',
        ],
      },
    ],
    table: {
      title: 'Batch processing workflows',
      headers: ['Input', 'Useful output'],
      rows: [
        ['Messy keyword list', 'Trimmed, deduplicated, sorted list.'],
        ['Long article with references', 'Extracted and deduplicated URLs.'],
        ['Markdown draft', 'Plain-text version without Markdown syntax.'],
        ['Several log snippets', 'Normalized lines with noisy prefixes removed.'],
        ['Copied social content', 'Cleaned punctuation and spacing.'],
        ['Folder of local text files', 'Previewed batch changes with rollback available.'],
      ],
    },
    faq: [
      {
        q: 'Can notePad++++ process multiple text files?',
        a: 'Yes. It is designed for batch-safe text processing with preview, backup, and rollback for broad changes.',
      },
      {
        q: 'What can batch text processing do?',
        a: 'Common jobs include removing blank lines, deduplicating lists, sorting entries, extracting links, normalizing punctuation, stripping Markdown, and applying custom scripts.',
      },
      {
        q: 'Is batch processing safe?',
        a: 'Batch changes should be reviewed before they are applied. notePad++++ emphasizes diff preview and rollback to reduce mistakes.',
      },
    ],
    related: [
      { label: 'Regex find and replace on Mac', href: '/en/regex-find-replace-mac/' },
      { label: 'Sort and remove duplicate lines on Mac', href: '/en/sort-and-remove-duplicate-lines-on-mac/' },
      { label: 'Text editor for Mac', href: '/en/text-editor-for-mac/' },
      { label: 'Plain text editor for Mac', href: '/en/plain-text-editor-for-mac/' },
      { label: 'Back to product overview', href: '/en/' },
    ],
    externalLinks: commonExternalLinks,
  },
]
