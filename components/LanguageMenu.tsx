'use client'
import { useEffect, useRef, useState } from 'react'
import type { Locale } from '@/lib/i18n/types'
import { allSiteLocales } from '@/lib/site-locales'
import { withBasePath } from '@/lib/paths'

interface Props {
  locale: Locale
}

export default function LanguageMenu({ locale }: Props) {
  const [open, setOpen] = useState(false)
  const [hash, setHash] = useState('')
  const rootRef = useRef<HTMLDivElement>(null)
  const currentLocale = allSiteLocales.find((item) => item.slug === locale) ?? allSiteLocales[0]

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash)
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)
    window.addEventListener('pointerdown', handlePointerDown)

    return () => {
      window.removeEventListener('hashchange', syncHash)
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  return (
    <div ref={rootRef} className="relative flex-shrink-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                   border border-gray-200 bg-white/85 backdrop-blur
                   text-xs font-semibold text-gray-700
                   hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50
                   transition-all duration-150 shadow-sm"
      >
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2.5 10h15M10 2c2 2.15 3 4.82 3 8s-1 5.85-3 8M10 2c-2 2.15-3 4.82-3 8s1 5.85 3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="max-w-[92px] truncate">{currentLocale.nativeLabel}</span>
        <svg className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-card-hover z-50 py-1"
        >
          {allSiteLocales.map((item) => {
            const active = item.slug === locale
            return (
              <a
                key={item.hreflang}
                role="menuitem"
                href={withBasePath(`${item.path}${hash}`)}
                hrefLang={item.hreflang}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between gap-3 px-3 py-2 text-sm transition-colors ${
                  active
                    ? 'bg-brand-50 text-brand-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-950'
                }`}
              >
                <span>{item.nativeLabel}</span>
                <span className="text-xs text-gray-400">{item.hreflang}</span>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
