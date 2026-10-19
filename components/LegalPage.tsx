import AppName from '@/components/AppName'
import { APP_NAME } from '../lib/seo'
import { SITE_URL, withBasePath } from '@/lib/paths'

interface Section {
  heading: string
  body: string[]
}

interface LegalPageProps {
  title: string
  canonicalPath: string
  subtitle: string
  lastUpdated: string
  sections: Section[]
  backLabel: string
  backHref: string
  homeHref: string
  appName?: string
}

export default function LegalPage({
  title,
  canonicalPath,
  subtitle,
  lastUpdated,
  sections,
  backLabel,
  backHref,
  homeHref,
  appName = APP_NAME,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebPage',
        name: `${title} | ${appName}`, description: subtitle,
        url: `${SITE_URL}${canonicalPath}`, inLanguage: homeHref === '/en/' ? 'en' : 'zh-CN',
        publisher: { '@type': 'Organization', name: appName, url: `${SITE_URL}/` },
      }) }} />
      {/* Top nav bar */}
      <nav className="border-b border-gray-800 bg-gray-950/90 backdrop-blur sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href={withBasePath(homeHref)} className="font-bold text-white text-lg">
            <AppName name={appName} accentClassName="text-brand-400" />
          </a>
          <a href={withBasePath(backHref)} className="text-sm text-gray-400 hover:text-white transition-colors">
            ← {backLabel}
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{title}</h1>
          <p className="text-gray-400 text-sm">{subtitle}</p>
          <p className="text-gray-600 text-xs mt-2">{lastUpdated}</p>
        </header>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((sec, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-gray-800">
                {sec.heading}
              </h2>
              <div className="space-y-3">
                {sec.body.map((para, j) => (
                  <p key={j} className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20 py-8 text-center text-xs text-gray-600">
        <p>© 2026 {appName} · <a href={withBasePath(backHref)} className="hover:text-gray-400 transition-colors">{backLabel}</a></p>
      </footer>
    </div>
  )
}
