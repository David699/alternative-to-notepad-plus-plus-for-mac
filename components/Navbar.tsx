'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import type { NavDict } from '@/lib/i18n/types'
import type { Locale } from '@/lib/i18n/types'

interface NavbarProps {
  t: NavDict
  locale: Locale
}

export default function Navbar({ t, locale }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg overflow-hidden">
            <Image src="/images/app-icon.png" alt="notePad++++ icon" width={32} height={32} className="object-cover" />
          </div>
          <span className="font-bold text-gray-900 text-sm tracking-tight">notePad<span className="text-brand-600">++++</span></span>
          <span className="hidden sm:inline text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded font-medium">for macOS</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {t.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher locale={locale} switchLabel={t.switchLang} switchHref={t.switchLangHref} />
          <a
            href="https://github.com/David699/notePad----"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs px-4 py-2"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            {t.githubLabel}
          </a>
          <a href="#download" className="btn-primary text-xs px-4 py-2">
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            {t.downloadLabel}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div className="w-5 space-y-1">
            <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-4 py-4 space-y-1"
          >
            {t.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-gray-700 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex gap-2">
              <a href="#download" className="btn-primary flex-1 justify-center text-xs py-2.5">{t.downloadLabel}</a>
              <LanguageSwitcher locale={locale} switchLabel={t.switchLang} switchHref={t.switchLangHref} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
