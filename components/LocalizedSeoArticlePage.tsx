import Link from 'next/link'
import HtmlLangSetter from '@/components/HtmlLangSetter'
import AppStoreDownloadLink from '@/components/AppStoreDownloadLink'
import AppStoreRatingSummary from '@/components/AppStoreRatingSummary'
import OptimizedImage from '@/components/OptimizedImage'
import type { LocalizedSeoArticle, LocalizedSeoArticleLink, SeoOnlyLocaleConfig } from '@/lib/seo-localized'
import { APP_STORE_URL } from '@/lib/paths'

interface Props {
  article: LocalizedSeoArticle
  config: SeoOnlyLocaleConfig
}

function getEscapedPatternPart(term: string): string {
  return term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export default function LocalizedSeoArticlePage({ article, config }: Props) {
  const ltrTerms = [...config.ltrTerms].sort((lhs, rhs) => rhs.length - lhs.length)
  const ltrTermSet = new Set(ltrTerms)
  const ltrTermPattern = ltrTerms.length > 0
    ? new RegExp(`(${ltrTerms.map(getEscapedPatternPart).join('|')})`, 'g')
    : null
  const textAlignClass = config.dir === 'rtl' ? 'text-right' : 'text-left'

  const mixedText = (text: string) => {
    if (!ltrTermPattern) return text

    return (
      <>
        {text.split(ltrTermPattern).filter(Boolean).map((part, index) => {
          if (ltrTermSet.has(part)) {
            return (
              <bdi key={`${part}-${index}`} dir="ltr" className="mx-1 inline-block">
                {part}
              </bdi>
            )
          }

          return <span key={`${part}-${index}`}>{part}</span>
        })}
      </>
    )
  }

  const articleLink = (link: LocalizedSeoArticleLink) => {
    if (link.external) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-700 hover:text-brand-900"
        >
          {mixedText(link.label)}
        </a>
      )
    }

    return (
      <Link href={link.href} className="font-semibold text-brand-700 hover:text-brand-900">
        {mixedText(link.label)}
      </Link>
    )
  }

  const navLink = (link: LocalizedSeoArticleLink) => {
    const className = "hover:text-gray-900"

    if (link.external) {
      return (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
          {mixedText(link.label)}
        </a>
      )
    }

    return (
      <Link key={link.href} href={link.href} className={className}>
        {mixedText(link.label)}
      </Link>
    )
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <HtmlLangSetter lang={config.htmlLang} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <main dir={config.dir} lang={config.htmlLang} className={`min-h-screen bg-white ${textAlignClass} text-gray-900`}>
        <header className="border-b border-gray-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href={config.homeHref} className="flex items-center gap-2.5">
              <span className="h-8 w-8 overflow-hidden rounded-lg">
                <OptimizedImage
                  src="/images/app-icon.png"
                  alt={config.labels.appIconAlt}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </span>
              <span className="text-sm font-bold tracking-tight">
                <bdi dir="ltr">notePad<span className="text-brand-600">++++</span></bdi>
              </span>
            </Link>
            <nav className="hidden items-center gap-5 text-sm font-semibold text-gray-600 sm:flex">
              {config.navLinks.map(navLink)}
            </nav>
          </div>
        </header>

        <article>
          <section className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-brand-700">
                {mixedText(article.heroKicker)}
              </p>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl">
                {mixedText(article.shortTitle)}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-600">{mixedText(article.heroSummary)}</p>
              {article.showRating !== false && <AppStoreRatingSummary rating={config.rating} className="mt-8 max-w-3xl" />}
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <AppStoreDownloadLink
                  source={`seo_${config.segment}_${article.slug}`}
                  href={APP_STORE_URL}
                  className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700"
                >
                  {mixedText(config.labels.download)}
                </AppStoreDownloadLink>
                <AppStoreDownloadLink
                  source={`seo_${config.segment}_${article.slug}_store`}
                  href={APP_STORE_URL}
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-800 transition hover:border-gray-400 hover:bg-gray-50"
                >
                  {mixedText(config.labels.viewStore)}
                </AppStoreDownloadLink>
              </div>
              <figure className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <OptimizedImage
                  src="/images/screen-main-en.png"
                  alt={config.labels.heroImageAlt}
                  width={1440}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </figure>
            </div>
          </section>

          <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_280px] lg:px-8">
            <div className="space-y-12">
              <div
                className={`localized-seo-markdown localized-seo-markdown-${config.dir}`}
                dangerouslySetInnerHTML={{ __html: article.contentHtml }}
              />

              <section>
                <h2 className="text-2xl font-black tracking-tight text-gray-950">{config.labels.faq}</h2>
                <div className="mt-5 divide-y divide-gray-200 rounded-xl border border-gray-200">
                  {article.faq.map((item) => (
                    <div key={item.q} className="p-5">
                      <h3 className="font-bold text-gray-950">{mixedText(item.q)}</h3>
                      <p className="mt-2 leading-8 text-gray-700">{mixedText(item.a)}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm font-semibold leading-7 text-gray-600">{mixedText(config.brandDisclaimer)}</p>
              </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h2 className="text-sm font-black uppercase tracking-[0.08em] text-gray-500">{config.labels.related}</h2>
                <ul className="mt-4 space-y-3 text-sm leading-7">
                  {article.related.map((link) => (
                    <li key={link.href}>{articleLink(link)}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h2 className="text-sm font-black uppercase tracking-[0.08em] text-gray-500">{config.labels.usefulLinks}</h2>
                <ul className="mt-4 space-y-3 text-sm leading-7">
                  {article.externalLinks.map((link) => (
                    <li key={link.href}>{articleLink(link)}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  )
}
