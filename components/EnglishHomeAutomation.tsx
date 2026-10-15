import Link from 'next/link'
import AppStoreDownloadLink from '@/components/AppStoreDownloadLink'
import SeoArticleFigure from '@/components/SeoArticleFigure'
import { englishHomeAutomationFigures as figures } from '@/lib/english-home-automation'
import { APP_NAME } from '@/lib/seo'
import { withBasePath } from '@/lib/paths'

export default function EnglishHomeAutomation() {
  return (
    <section id="automation" className="scroll-mt-20 bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="section-label">Built-in scripts. Your own rules. A preview before writing.</p>
        <h2 className="max-w-4xl text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Automate text files and folders, with backups and restore</h2>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">Start with a ready-made cleanup rule in {APP_NAME}. When your task needs something different, save a custom script and reuse it on one document or a folder of text files. Inspect the proposed changes before applying them.</p>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
          <article id="text-cleaning" className="scroll-mt-20">
            <h3 className="text-2xl font-bold text-gray-950">Start with dozens of built-in scripts</h3>
            <p className="mt-3 leading-7 text-gray-600">Trim trailing spaces, remove blank lines, deduplicate, sort, extract links or email addresses, and format JSON. Combine steps into a reusable sequence, called a pipeline in the App. The Pipeline Gallery includes a roster cleanup that trims, removes blank lines, deduplicates and sorts.</p>
            <SeoArticleFigure figure={figures.builtIn} />
            <p className="mt-4 text-sm leading-6 text-gray-600">Need to keep the original order? Choose the individual operations that fit your task. See the <Link href={withBasePath('/en/sort-and-remove-duplicate-lines-on-mac/')} className="text-brand-700 underline underline-offset-4">list cleanup example</Link>.</p>
          </article>
          <article id="ai" className="scroll-mt-20">
            <h3 className="text-2xl font-bold text-gray-950">Write once, save it under My Scripts</h3>
            <p className="mt-3 leading-7 text-gray-600">Write a small JavaScript rule or choose <strong>Copy as My Script</strong> to adapt a built-in script. For example, change only the OLD- prefix at the beginning of each line to NEW-, leaving the rest of the text alone. Preview its result, then save the rule for the next file.</p>
            <SeoArticleFigure figure={figures.custom} />
            <p className="mt-4 leading-7 text-gray-600">Prefer to describe the change? Configure your own AI provider and API access, then use <strong>AI Script Assistant</strong> to help create or modify a script. Review the code and test its output first. This pictured rule was written manually; it is not a claimed AI-generated result.</p>
          </article>
        </div>

        <article className="mt-12">
          <h3 className="text-2xl font-bold text-gray-950">Preview the changes across a folder</h3>
          <p className="mt-3 max-w-3xl leading-7 text-gray-600">Open a workspace folder, choose file types and filters, and select a script or pipeline. Check the target files and use <strong>Preview mode (no disk writes)</strong>, then inspect each file’s differences. In this real demonstration, three TXT files, including one in a subfolder, were selected; README.md was excluded.</p>
          <div className="max-w-4xl"><SeoArticleFigure figure={figures.preview} /></div>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">Preview calculates the result without changing the original files. <strong>Apply</strong> and <strong>Apply All</strong> are separate actions that write the reviewed changes to disk. This workflow edits file contents; it does not rename files.</p>
        </article>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          <article>
            <h3 className="text-2xl font-bold text-gray-950">Automatic backups when batch changes are applied</h3>
            <p className="mt-3 leading-7 text-gray-600">Actual batch writes create backups before modifying the files. Open <strong>Operation History</strong> to review the operation and its per-file backups. A backup failure is reported rather than silently applying an unbacked change.</p>
            <SeoArticleFigure figure={figures.backups} />
          </article>
          <article>
            <h3 className="text-2xl font-bold text-gray-950">Restore from the operation’s history</h3>
            <p className="mt-3 leading-7 text-gray-600">Open the same workspace and choose <strong>Restore this operation</strong> while its backups are available. In our demonstration, all three TXT files were restored to their original bytes, including duplicates, blank lines and trailing spaces.</p>
            <SeoArticleFigure figure={figures.restored} />
          </article>
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-gray-600">Batch backups are retained for <strong>seven days</strong>. Files changed since the operation, or open with unsaved edits, are skipped during restoration; missing or expired backups cannot be restored. Check the result for errors or skipped files, and keep your normal backups for important work. Folder batch processing, its history and AI assistance require Pro access or an eligible trial.</p>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-gray-600">These real screenshots are reused from our script tutorial and show fictional sample files. Built-in and custom scripts can run locally without AI; scripts process text supplied by the App rather than accessing arbitrary files or the network. Optional AI requests go to the provider you configure, whose terms and possible charges apply.</p>
        <div className="mt-7 flex flex-wrap items-center gap-5">
          <Link href={withBasePath('/en/automate-text-files-mac-scripts/')} className="font-semibold text-brand-700 underline underline-offset-4">Follow the full script, folder preview and restore tutorial →</Link>
          <AppStoreDownloadLink source="seo_english_home_scripts" className="inline-block rounded-xl bg-brand-600 px-6 py-3 font-bold text-white hover:bg-brand-700">Download on the Mac App Store</AppStoreDownloadLink>
        </div>
      </div>
    </section>
  )
}
