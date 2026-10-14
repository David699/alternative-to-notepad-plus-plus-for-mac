import AppName from '@/components/AppName'
import { APP_NAME } from '../lib/seo'
import Link from 'next/link'
import AppStoreDownloadLink from '@/components/AppStoreDownloadLink'
import AppStoreRatingSummary from '@/components/AppStoreRatingSummary'
import OptimizedImage from '@/components/OptimizedImage'
import SeoArticleFigure from '@/components/SeoArticleFigure'
import SeoArticleTable from '@/components/SeoArticleTable'
import SeoArticleDownloadCta from '@/components/SeoArticleDownloadCta'
import type { SeoArticle } from '@/lib/seo-articles'
import { APP_STORE_URL, GITHUB_REPO_URL, withBasePath } from '@/lib/paths'

interface Props {
  article: SeoArticle
}

function ArticleLink({ link }: { link: { label: string; href: string; external?: boolean; download?: boolean } }) {
  const sample = link.href.startsWith('/samples/')
  const download = sample && link.download !== false
  if (link.external || sample) {
    return (
      <a
        href={download ? withBasePath(link.href) : link.href}
        target={link.external || (sample && !download) ? '_blank' : undefined}
        rel={link.external || (sample && !download) ? 'noopener noreferrer' : undefined}
        download={download || undefined}
        className="font-semibold text-brand-700 hover:text-brand-900"
      >
        {link.label}
      </a>
    )
  }

  return (
    <Link href={link.href} className="font-semibold text-brand-700 hover:text-brand-900">
      {link.label}
    </Link>
  )
}

export default function SeoArticlePage({ article }: Props) {
  const sections = article.sections.map((section) => ({ ...section, id: section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') }))
  const tableInSections = article.tableAfterSection && sections.some((section) => section.title === article.tableAfterSection)
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/en/" className="flex items-center gap-2.5">
            <span className="h-8 w-8 overflow-hidden rounded-lg">
              <OptimizedImage
                src="/images/app-icon.webp"
                alt={`${APP_NAME} icon`}
                width={32}
                height={32}
                className="object-cover"
              />
            </span>
            <span className="text-sm font-bold tracking-tight">
              <AppName accentClassName="text-brand-600" />
            </span>
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-gray-600 sm:flex">
            <Link href="/en/" className="hover:text-gray-900">Overview</Link>
            <Link href="/en/notepad-plus-plus-for-mac/" className="hover:text-gray-900">Guides</Link>
            <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">GitHub</a>
          </nav>
        </div>
      </header>

      <article>
        <section className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-brand-700">{article.heroKicker}</p>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl">
              {article.shortTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">{article.heroSummary}</p>
            {article.editorialNote && <p className="mt-6 border-l-2 border-brand-300 pl-4 text-sm leading-6 text-gray-600">{article.editorialNote}</p>}
            <AppStoreRatingSummary className="mt-8 max-w-3xl" />
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <AppStoreDownloadLink
                source={`seo_${article.slug}`}
                href={APP_STORE_URL}
                className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700"
              >
                Download on the App Store
              </AppStoreDownloadLink>
              <AppStoreDownloadLink
                source={`seo_${article.slug}_overview`}
                href={APP_STORE_URL}
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-800 transition hover:border-gray-400 hover:bg-gray-50"
              >
                View App Store page
              </AppStoreDownloadLink>
            </div>
            {article.heroFigure ? <SeoArticleFigure figure={article.heroFigure} priority /> : <figure className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <OptimizedImage
                src="/images/screen-main-en.webp"
                alt={`${APP_NAME} main editor interface on macOS`}
                width={1440}
                height={900}
                priority
                className="h-auto w-full"
              />
            </figure>}
          </div>
        </section>

        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_280px] lg:px-8">
          <div className="min-w-0 space-y-12">
            {article.showContents && (
              <details className="rounded-xl border border-gray-200 p-5 lg:hidden">
                <summary className="cursor-pointer font-bold">On this page</summary>
                <nav aria-label="Article sections" className="mt-4">
                  <ul className="space-y-3 text-sm leading-6">{sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-brand-700">{section.title}</a></li>)}</ul>
                </nav>
              </details>
            )}
            {sections.map((section) => (
              <div key={section.id} className="space-y-12">
              <section id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl font-black tracking-tight text-gray-950">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.figure && <SeoArticleFigure figure={section.figure} />}
                {section.bullets && (
                  <ul className="mt-5 grid gap-3 text-sm font-semibold text-gray-800 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {section.links && (
                  <ul aria-label={`Sources and guides for ${section.title}`} className="mt-5 space-y-2 text-sm leading-6">
                    {section.links.map((link) => <li key={link.href}><ArticleLink link={link} /></li>)}
                  </ul>
                )}
              </section>
              {article.table && section.title === article.tableAfterSection && <SeoArticleTable table={article.table} />}
              {section.title === article.downloadCta?.afterSection && <SeoArticleDownloadCta article={article} placement="in_article" />}
              </div>
            ))}

            {article.table && !tableInSections && <SeoArticleTable table={article.table} />}

            <section>
              <h2 className="text-2xl font-black tracking-tight text-gray-950">FAQ</h2>
              <div className="mt-5 divide-y divide-gray-200 rounded-xl border border-gray-200">
                {article.faq.map((item) => (
                  <div key={item.q} className="p-5">
                    <h3 className="font-bold text-gray-950">{item.q}</h3>
                    <p className="mt-2 leading-7 text-gray-700">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
            {article.downloadCta && <SeoArticleDownloadCta article={article} placement="end" />}
          </div>

          <aside className={`space-y-6 lg:sticky lg:top-8 lg:self-start ${article.showContents ? 'lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto' : ''}`}>
            {article.showContents && (
              <nav aria-label="On this page" className="hidden rounded-xl border border-gray-200 bg-white p-5 lg:block">
                <h2 className="text-sm font-black uppercase tracking-[0.14em] text-gray-500">On this page</h2>
                <ul className="mt-4 space-y-2 text-sm leading-6">
                  {sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-gray-600 hover:text-brand-700">{section.title}</a></li>)}
                </ul>
              </nav>
            )}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h2 className="text-sm font-black uppercase tracking-[0.14em] text-gray-500">Related guides</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6">
                {article.related.map((link) => (
                  <li key={link.href}><ArticleLink link={link} /></li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-black uppercase tracking-[0.14em] text-gray-500">Useful links</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6">
                {article.externalLinks.map((link) => (
                  <li key={link.href}><ArticleLink link={link} /></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}
