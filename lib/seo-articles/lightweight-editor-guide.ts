import { APP_NAME } from '../seo'
import type { SeoArticle, SeoArticleFigure, SeoArticleLink } from '../seo-articles'
import { APP_STORE_URL } from '../paths'

const official = (label: string, href: string): SeoArticleLink => ({ label, href, external: true })
const screenshot = (name: string, alt: string, caption: string): SeoArticleFigure => ({
  src: `/images/seo/lightweight-editor/${name}.webp`, width: 2536, height: name === 'minimal-mode-real' ? 1306 : 1305, alt, caption,
})

export const lightweightEditorGuide: SeoArticle = {
  slug: 'best-lightweight-text-editors-for-mac-2026',
  title: 'Lightweight Text Editors for Mac: 6 Apps Compared (2026)',
  shortTitle: 'Lightweight Text Editors for Mac: Less Clutter, Useful Tools',
  description: `Compare 6 Mac text editors for everyday files. See real ${APP_NAME} screenshots of tabs, Zen Mode, and Minimal Mode, plus a TXT workspace you can try.`,
  datePublished: '2026-06-05',
  dateModified: '2026-10-14',
  keywords: ['lightweight text editor for Mac', 'best lightweight text editor for Mac', 'lightweight text editor Mac', 'Mac text editor with tabs', 'distraction-free text editor Mac', `${APP_NAME} Zen Mode`, `${APP_NAME} Minimal Mode`],
  heroKicker: 'A practical interface comparison · Updated October 14, 2026',
  heroSummary: 'A lightweight text editor for Mac should make everyday files easy to work with: keep related documents in tabs, show the tools you need, and let you step into a quieter view when it is time to read or write. Compare six options, then try the same small TXT workspace yourself.',
  editorialNote: `Written by the developer of ${APP_NAME}. The ${APP_NAME} images are actual app screenshots captured with an English TXT demonstration workspace. Other product descriptions use the official sources linked below, checked on October 14, 2026. This guide compares interface and workflow choices; it does not rank these apps by measured launch time, memory use, or CPU usage.`,
  heroFigure: screenshot('tabs-workspace-real', `Actual ${APP_NAME} window with a workspace containing six TXT files, multiple document tabs, and project notes open in the editor.`, 'Actual app screenshot: a small TXT workspace, related documents in tabs, and search and batch areas collapsed. More tools can be opened when the task needs them.'),
  showContents: true,
  tableAfterSection: 'Choose a starting point for your everyday files',
  downloadCta: {
    afterSection: 'Minimal Mode: a small set of writing controls',
    title: `Try a quieter text workflow in ${APP_NAME}`,
    body: `Keep related TXT files in tabs, enter Zen Mode for focused reading, or use Minimal Mode for a pared-back writing view. Download ${APP_NAME} and try the sample workspace below. Check the App Store for current pricing and requirements.`,
  },
  sections: [
    {
      title: 'What makes a text editor feel lightweight?',
      body: ['For everyday editing, lightweight can describe how little effort stands between opening a file and doing the next useful thing. A clear document view, familiar save controls, and less window management can matter as much as the length of the feature list.',
        'Resource use is a separate question. A screenshot can show hidden panels or a clean layout, but it cannot establish low memory use, fast launch time, or smooth large-file editing. If those are your priorities, compare the same files on the same Mac and record the versions and conditions.'],
      bullets: ['Easy to start: open a local file and begin editing.', 'Easy to navigate: keep related documents nearby.', 'Easy to focus: hide controls you are not using.', 'Enough tools: reveal search or other features when needed.'],
    },
    {
      title: 'Choose a starting point for your everyday files',
      body: ['For a quick note, start with the editor you already have. For repeated work, ask whether you need plain-text tools, keyboard-driven code navigation, folder-wide changes, or a development environment. The best lightweight editor is the one whose interface and capabilities fit that particular job.',
        'The table below compares those starting points. Try a typical file and check whether the navigation and editing controls fit the way you work.'],
    },
    {
      title: 'Tabs: related TXT files without extra windows',
      body: [`In the opening screenshot, ${APP_NAME} has a six-file demonstration workspace in the sidebar and several documents open in tabs. Notes, a checklist, reference text, and a log can stay in one window. That reduces the need to arrange separate document windows while you move between related files.`,
        'Keep only the documents you need open, and use the workspace file list when the tab strip becomes crowded. Tabs are useful here because they keep the next document close to the current task.'],
      bullets: ['Use notes, a checklist, and reference text as separate tabs.', 'Keep files in a small workspace for easy navigation.'],
      links: [{ label: 'Preview the demo TXT file in your browser', href: '/samples/lightweight-demo-workspace/01-project-notes.txt', download: false }],
    },
    {
      title: 'Zen Mode: put the document first',
      body: [`When you are reading a long note or checking the wording of a paragraph, file navigation and editing commands do not always need to stay on screen. In ${APP_NAME}, open Compact Mode and choose Zen Mode. The demonstrated view hides the workspace sidebar, tab strip, main toolbar, and status controls while keeping the document and an exit control visible.`,
        'Use this view for a focused reading or writing pass, then exit it when you need to switch documents or use other tools. The screenshot below shows the same project-notes TXT file as the opening screenshot, making the visible change easy to compare. The app remains in an ordinary macOS window.'],
      figure: screenshot('zen-workspace-real', `Actual ${APP_NAME} Zen Mode screenshot displaying the project-notes TXT file with the sidebar, tab strip, main toolbar, and status bar hidden.`, 'Actual screenshot of the same TXT document in Zen Mode. The document takes priority; the exit control remains available at the upper right.'),
    },
    {
      title: 'Minimal Mode: a small set of writing controls',
      body: ['Minimal Mode is another choice in the Compact Mode menu. Like Zen Mode, it removes the regular workspace and editing controls. It also exposes a small strip for background color, text color, text size, and exiting the mode.',
        'Choose it when you want a pared-back writing view but still want to adjust readability without bringing back the full interface. In this demonstration, the same TXT file uses a pale background and 24-point text. The controls change how the plain-text document appears while you read and edit it.'],
      figure: screenshot('minimal-mode-real', `Actual ${APP_NAME} Minimal Mode screenshot showing the same TXT project notes on a pale background, with background, text-color, font-size, and exit controls in a small strip.`, 'Actual screenshot: Minimal Mode keeps a compact strip for colors and text size. The source remains a plain TXT file.'),
      bullets: ['Zen Mode: focus on the document with an exit control.', 'Minimal Mode: focus on the document with a few readability controls.'],
    },
    {
      title: 'Keep extra tools available when the task needs them',
      body: [`A quiet editor still needs to handle ordinary work. In the regular ${APP_NAME} view, you can expand workspace search or batch controls when you need them, then collapse those areas afterward. Column Mode, Regex Find & Replace, and Markdown Preview serve different tasks; they do not all have to be part of a simple TXT-writing session.`,
        'The useful distinction is between having a capability and showing its controls all the time. Choose a focused mode for reading and writing, and return to the regular view for file navigation or more involved editing.'],
      links: [{ label: 'Column Mode for aligned text', href: '/en/column-mode-editor-for-mac/' }, { label: 'Regex find and replace examples', href: '/en/regex-find-replace-mac/' }],
    },
    {
      title: 'How the other editors fit a lightweight workflow',
      body: ['TextEdit is a useful starting point for occasional notes because it is included with macOS. It supports plain-text and rich-text documents, so check the document format when your output must be a TXT file. CotEditor focuses on plain text for macOS, with syntax highlighting and regular-expression find and replace.',
        'BBEdit is worth evaluating when your work includes searching or replacing across files and using scripting tools. It offers a 30-day evaluation, followed by Free Mode; check whether your required features remain included. Sublime Text offers multiple selections, tabs, and split views for keyboard-driven text and code editing. Check its license terms for continued use.',
        `VS Code is a sensible choice when editing is part of a coding project that also needs extensions, debugging, or terminal commands. Its documentation includes Zen Mode too. ${APP_NAME} is not unique in offering focused editing; the decision is which combination of navigation, focused views, and text tools fits your work.`],
      links: [official('Apple TextEdit guide', 'https://support.apple.com/guide/textedit/welcome/mac'), official('CotEditor official features', 'https://coteditor.com/'), official('BBEdit features and Free Mode', 'https://www.barebones.com/products/bbedit/'), official('Sublime Text official features', 'https://www.sublimetext.com/'), official('Sublime Text license information', 'https://www.sublimehq.com/store/text'), official('VS Code interface and Zen Mode', 'https://code.visualstudio.com/docs/editing/getting-started/userinterface')],
    },
    {
      title: 'Try a six-file TXT workspace before deciding',
      body: ['Download the sample files below into one folder and open that folder as a workspace. Open the project notes, checklist, and reference text in tabs. Switch between them, collapse any panels you are not using, then read the project notes in Zen Mode and Minimal Mode.',
        'Finally, return to the regular view, edit a copy, save it, and reopen it to check the result. Try the same small set of files in another editor. Compare the steps you need, the controls you understand, and whether the interface stays comfortable for your task. These sample documents are fictional and do not measure large-file performance.'],
      links: [
        { label: 'Download project notes (.txt)', href: '/samples/lightweight-demo-workspace/01-project-notes.txt' },
        { label: 'Download editing checklist (.txt)', href: '/samples/lightweight-demo-workspace/02-editing-checklist.txt' },
        { label: 'Download reference text (.txt)', href: '/samples/lightweight-demo-workspace/03-reference.txt' },
        { label: 'Download demonstration release notes (.txt)', href: '/samples/lightweight-demo-workspace/04-release-notes.txt' },
        { label: 'Download fictional sample log (.txt)', href: '/samples/lightweight-demo-workspace/05-sample-log.txt' },
        { label: 'Download task list (.txt)', href: '/samples/lightweight-demo-workspace/06-task-list.txt' },
      ],
    },
  ],
  table: {
    title: 'Six Mac editors for everyday text work',
    headers: ['Editor', 'Useful starting point', 'Check before choosing'],
    rows: [
      [APP_NAME, 'Related local files in tabs; Zen Mode and Minimal Mode; text tools when needed.', 'Try the focused views with your files; see App Store pricing and requirements.'],
      ['TextEdit', 'Occasional notes and simple documents using a built-in Mac app.', 'Use plain-text format when you need a TXT file.'],
      ['CotEditor', 'A free macOS plain-text editor with syntax and search tools.', 'Check the supported macOS release and the workflow you need.'],
      ['BBEdit', 'Multi-file search, text transformations, and scripting.', 'Check which features remain in Free Mode after evaluation.'],
      ['Sublime Text', 'Multiple selections, split views, and keyboard-driven code navigation.', 'Check license terms and required packages.'],
      ['VS Code', 'Coding projects with extensions, debugging, and terminal tools.', 'Decide whether you need a development workspace for this task.'],
    ],
  },
  faq: [
    { q: 'What is the best lightweight text editor for Mac?', a: `Choose by task. TextEdit can handle occasional notes; CotEditor focuses on Mac plain text; ${APP_NAME} combines tabs, focused views, and text tools; BBEdit suits multi-file work; Sublime Text suits keyboard-driven editing; VS Code suits development projects. This is not a measured performance ranking.` },
    { q: 'Does a minimal interface mean lower memory use?', a: 'No. Hiding interface controls can reduce visible clutter, but it does not establish lower memory or CPU use. Measure those separately with the same Mac, files, app versions, and settings.' },
    { q: `How do I enter Zen Mode or Minimal Mode in ${APP_NAME}?`, a: 'Open Compact Mode in the regular toolbar, then choose Zen Mode or Minimal Mode. Use the exit control to return to the regular interface. The screenshots above show both modes in an ordinary window.' },
    { q: `Is Zen Mode unique to ${APP_NAME}?`, a: 'No. Other editors offer focused views too, including VS Code. Compare the full workflow: opening files, navigating tabs, choosing a focused view, and returning to the tools you need.' },
    { q: `Is ${APP_NAME} an official Notepad++ Mac release?`, a: `No. ${APP_NAME} is an independent macOS app. It does not run Windows Notepad++ plugins.` },
  ],
  related: [
    { label: 'Compare Notepad++ alternatives for Mac', href: '/en/notepad-plus-plus-alternatives-for-mac/' },
    { label: 'Plain text editing on Mac', href: '/en/plain-text-editor-for-mac/' },
    { label: 'Column Mode guide', href: '/en/column-mode-editor-for-mac/' },
    { label: 'Batch text processing', href: '/en/batch-text-processing-mac/' },
    { label: 'Product overview', href: '/en/' },
  ],
  externalLinks: [official(`Download ${APP_NAME} on the App Store`, APP_STORE_URL), official('CotEditor', 'https://coteditor.com/'), official('BBEdit', 'https://www.barebones.com/products/bbedit/'), official('Sublime Text', 'https://www.sublimetext.com/'), official('VS Code', 'https://code.visualstudio.com/'), official('Apple TextEdit guide', 'https://support.apple.com/guide/textedit/welcome/mac')],
}
