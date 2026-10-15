import Link from 'next/link'
import SeoArticleFigure from '@/components/SeoArticleFigure'
import AppStoreDownloadLink from '@/components/AppStoreDownloadLink'
import EnglishHomeAutomation from '@/components/EnglishHomeAutomation'
import { englishHomeWorkflows, englishHomeExtras, englishHomeFocusModes } from '@/lib/english-home'
import { APP_NAME } from '@/lib/seo'
import { withBasePath } from '@/lib/paths'

export default function EnglishHomeWorkflows() {
  return (
    <>
      <section id="features" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label">Everyday text editing</p>
          <h2 className="max-w-3xl text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Familiar tasks, shown in the actual Mac App</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">Keep related files in tabs, read structured text with syntax highlighting, and check the following operations on your own files. These screenshots show real controls and small examples.</p>
          <div className="mt-12 space-y-16">
            {englishHomeWorkflows.map((item) => (
              <article key={item.title}>
                <h3 className="text-2xl font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 max-w-3xl leading-7 text-gray-600">{item.body}</p>
                <SeoArticleFigure figure={item.figure} />
                <Link href={withBasePath(item.href)} className="mt-4 inline-block font-semibold text-brand-700 underline underline-offset-4">{item.label} →</Link>
              </article>
            ))}
          </div>
          <div className="mt-14 rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-950">Try these tasks in {APP_NAME}</h3>
            <p className="mt-3 leading-7 text-gray-700">Start with a copy of your TXT, log, or configuration file. Keep the operations you need, then explore the optional tools.</p>
            <AppStoreDownloadLink source="seo_english_home_in_article" className="mt-5 inline-block rounded-xl bg-brand-600 px-6 py-3 font-bold text-white hover:bg-brand-700">Download on the Mac App Store</AppStoreDownloadLink>
          </div>
        </div>
      </section>
      <section id="formats" className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label">When you need more</p>
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Preview Markdown beside the source</h2>
          <div className="mt-10 max-w-4xl">
            {englishHomeExtras.map((item) => (
              <article key={item.title}>
                <h3 className="text-xl font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{item.body}</p>
                <SeoArticleFigure figure={item.figure} />
                <Link href={withBasePath(item.href)} className="mt-4 inline-block font-semibold text-brand-700 underline underline-offset-4">{item.label} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <EnglishHomeAutomation />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Choose a quieter view for plain text</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {englishHomeFocusModes.map((item) => (
              <article key={item.title}>
                <h3 className="text-xl font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{item.body}</p>
                <SeoArticleFigure figure={item.figure} />
              </article>
            ))}
          </div>
          <nav aria-label="Notepad++ Mac guides" className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              ['/en/notepad-plus-plus-for-mac/', 'See feature demonstrations', 'Actual screenshots and downloadable example files.'],
              ['/en/notepad-plus-plus-alternatives-for-mac/', 'Compare Mac editors', 'Check alternatives, compatibility, and different use cases.'],
              ['/en/does-notepad-plus-plus-work-on-mac/', 'Can Notepad++ run on Mac?', 'Understand native editors and ways to run the Windows program.'],
            ].map(([href, title, body]) => (
              <Link key={href} href={withBasePath(href)} className="rounded-2xl border border-gray-200 p-6 transition hover:border-brand-400">
                <span className="font-bold text-brand-700">{title} →</span>
                <p className="mt-3 text-sm leading-6 text-gray-600">{body}</p>
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </>
  )
}
