'use client'
import { motion } from 'framer-motion'
import type { Locale } from '@/lib/i18n/types'
import { withBasePath } from '@/lib/paths'

interface Props {
  locale: Locale
  switchLabel: string
  switchHref: string
}

export default function LanguageSwitcher({ locale, switchLabel, switchHref }: Props) {
  return (
    <motion.a
      href={withBasePath(switchHref)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                 border border-gray-200 bg-white/80 backdrop-blur
                 text-xs font-semibold text-gray-700
                 hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50
                 transition-all duration-150 shadow-sm"
      title={locale === 'zh' ? 'Switch to English' : '切换到中文'}
    >
      <span className="text-sm leading-none">{locale === 'zh' ? '🌐' : '🌐'}</span>
      {switchLabel}
    </motion.a>
  )
}
