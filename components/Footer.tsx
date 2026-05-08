'use client'
import type { FooterDict } from '@/lib/i18n/types'

interface Props { t: FooterDict }

const GITHUB_ICON = (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

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
                <a
                  href="https://apps.apple.com/app/id6759166160?mt=12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.appStoreLabel}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/David699/notePad----"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  {GITHUB_ICON}
                  {t.githubLabel}
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">{t.downloadLabel}</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-300 mb-3 text-sm">{t.legalTitle}</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={t.privacyHref} className="hover:text-white transition-colors">{t.privacyLabel}</a>
              </li>
              <li>
                <a href={t.termsHref} className="hover:text-white transition-colors">{t.termsLabel}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>{t.copyright}</p>
          <p className="text-gray-600">{t.trademark}</p>
        </div>
      </div>
    </footer>
  )
}
