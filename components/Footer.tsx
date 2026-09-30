'use client'
import AppStoreDownloadLink from '@/components/AppStoreDownloadLink'
import type { FooterDict } from '@/lib/i18n/types'
import { footerLanguageLinks } from '@/lib/footer-languages'
import { GITHUB_REPO_URL, PRODUCT_HUNT_URL, withBasePath } from '@/lib/paths'

interface Props { t: FooterDict }

export default function Footer({ t }: Props) {
  const taglineLines = t.tagline.split('\n')
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-bold text-white mb-3">
              notePad<span className="text-brand-400">++++</span>
            </div>
            <p className="text-sm leading-relaxed">
              {taglineLines[0]}
              {taglineLines[1] && <><br />{taglineLines[1]}</>}
            </p>
          </div>
          <div>
            <div className="font-semibold text-gray-300 mb-3 text-sm">{t.navTitle}</div>
            <ul className="space-y-2 text-sm">
              {t.navLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-300 mb-3 text-sm">{t.linksTitle}</div>
            <ul className="space-y-2 text-sm">
              <li>
                <AppStoreDownloadLink
                  source="footer"
                  className="hover:text-white transition-colors"
                >
                  {t.appStoreLabel}
                </AppStoreDownloadLink>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">{t.downloadLabel}</a>
              </li>
              <li>
                <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {t.githubLabel}
                </a>
              </li>
              <li>
                <a href={PRODUCT_HUNT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {t.productHuntLabel}
                </a>
              </li>
              {t.guideLinks?.map((link) => (
                <li key={link.href}>
                  <a href={withBasePath(link.href)} className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-300 mb-3 text-sm">{t.legalTitle}</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={withBasePath(t.privacyHref)} className="hover:text-white transition-colors">{t.privacyLabel}</a>
              </li>
              <li>
                <a href={withBasePath(t.termsHref)} className="hover:text-white transition-colors">{t.termsLabel}</a>
              </li>
            </ul>
          </div>
        </div>

        <nav aria-label="Languages" className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
          <svg className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2.5 10h15M10 2c2 2.15 3 4.82 3 8s-1 5.85-3 8M10 2c-2 2.15-3 4.82-3 8s1 5.85 3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {footerLanguageLinks.map((language) => (
            <a
              key={language.hreflang}
              href={withBasePath(language.href)}
              hrefLang={language.hreflang}
              lang={language.hreflang}
              className="hover:text-white transition-colors"
            >
              {language.label}
            </a>
          ))}
        </nav>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>{t.copyright}</p>
          <p className="text-gray-600">{t.trademark}</p>
        </div>
      </div>
    </footer>
  )
}
