'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { HeroDict, Locale } from '@/lib/i18n/types'
import LocalizedImage from '@/components/LocalizedImage'
import { withBasePath } from '@/lib/paths'

function KeyBadge({ keys }: { keys: string[] }) {
  return (
    <div className="flex items-center gap-1">
      {keys.map((k, i) => (
        <kbd key={i} className="inline-flex items-center justify-center min-w-[26px] h-6 px-1.5
                     rounded-md bg-white/[0.18] border border-white/30
                     text-white text-xs font-semibold font-mono
                     shadow-[0_1px_0_0_rgba(255,255,255,0.25),0_2px_6px_rgba(0,0,0,0.4)]
                     select-none">
          {k}
        </kbd>
      ))}
    </div>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

interface HeroProps {
  t: HeroDict
  locale?: Locale
}

export default function Hero({ t, locale = 'zh' }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-hero-gradient">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-teal-100/50 blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-purple-50/80 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          {/* App badge */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur border border-gray-200 rounded-2xl px-4 py-2.5 shadow-card">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                <Image src={withBasePath('/images/app-icon.png')} alt="notePad++++ App icon" width={40} height={40} className="object-cover" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 leading-none mb-0.5">{t.appBadgeOS}</div>
                <div className="font-bold text-sm text-gray-900">notePad<span className="text-brand-600">++++</span></div>
              </div>
              <div className="pl-3 border-l border-gray-200">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-xs text-gray-500">4.8 · App Store</div>
              </div>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-6"
          >
            {t.headline}
            <br />
            <span className="gradient-text">{t.headlineGradient}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            {t.subheadline}
          </motion.p>

          {/* Tags — equal-width grid: 2 cols on mobile, 4 cols on sm+ */}
          <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12 max-w-2xl mx-auto">
            {t.tags.map((tag) => (
              <motion.span
                key={tag.label}
                whileHover={{ scale: 1.07, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 480, damping: 28 }}
                className={`flex items-center justify-center gap-2.5 border-2 rounded-full
                            w-full px-4 py-2.5 text-sm font-bold shadow-sm select-none cursor-default
                            transition-all duration-200 backdrop-blur-sm
                            ${tag.classes} ${tag.glow}`}
              >
                <span
                  className={`relative w-8 h-8 rounded-full overflow-hidden border-2 p-0.5 flex-shrink-0
                              ${tag.iconFrame}`}
                >
                  <Image src={withBasePath(tag.iconSrc)} alt="" fill sizes="32px" className="object-cover p-0.5" />
                </span>
                {tag.label}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-3 mb-16">
            <a href="#download" className="btn-primary text-base px-8 py-3.5">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              {t.ctaPrimary}
            </a>
            <a href="#features" className="btn-secondary text-base px-8 py-3.5">
              {t.ctaSecondary}
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* ── Shortcut mapping panel — embedded in hero visual zone ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-3xl mb-14"
        >
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300/60" />
            <span className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              {t.shortcutPanelTitle}
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300/60" />
          </div>

          {/* Dark shortcut panel */}
          <div className="rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.30),0_0_0_1px_rgba(255,255,255,0.10)]">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1e2740] border-b border-white/[0.10]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <div className="hidden sm:flex items-center gap-6 mr-1 ml-auto">
                <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-widest">{t.shortcutColLeft}</span>
                <span className="text-[10px] font-semibold text-brand-400 uppercase tracking-widest">{t.shortcutColRight}</span>
              </div>
            </div>

            {/* Shortcut rows */}
            <div className="bg-[#19213a] divide-y divide-white/[0.07]">
              {t.shortcuts.map((s, i) => (
                <motion.div
                  key={s.action}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.45 + i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`group relative flex items-center gap-3 px-4 py-3
                              bg-gradient-to-r ${s.color}
                              hover:bg-white/[0.04] transition-colors duration-200`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white leading-tight">{s.action}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{s.desc}</div>
                  </div>
                  <div className="hidden sm:flex items-center justify-end w-28">
                    <span className={`inline-block text-[11px] font-mono px-2 py-0.5 rounded-md
                                     bg-white/[0.12] border border-white/[0.18] text-slate-200
                                     shadow-[0_1px_3px_rgba(0,0,0,0.4)]`}>
                      {s.win}
                    </span>
                  </div>
                  <div className="hidden sm:block text-slate-400 text-sm font-medium">→</div>
                  <div className="flex items-center justify-end w-24 sm:w-32">
                    <KeyBadge keys={s.mac} />
                  </div>
                  <div className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-r opacity-60 group-hover:opacity-100 transition-opacity bg-gradient-to-b ${s.color} ${s.border}`} />
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2 bg-white/[0.04] border-t border-white/[0.08]">
              <span className="text-[11px] text-slate-400">{t.shortcutFooterLeft}</span>
              <span className="text-[11px] text-brand-400 font-medium">{t.shortcutFooterRight}</span>
            </div>
          </div>
        </motion.div>

        {/* Hero screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          {/* Floating labels */}
          {t.floats.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : i === 2 ? 20 : 0, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8 + f.delay, duration: 0.5 }}
              className={`absolute z-10 hidden md:flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold shadow-card glass-card ${f.color} ${
                i === 0 ? 'left-4 lg:left-16 top-8' :
                i === 1 ? 'right-4 lg:right-16 top-16' :
                'left-8 lg:left-24 bottom-12'
              }`}
            >
              <span>{f.icon}</span>
              <span>{f.text}</span>
            </motion.div>
          ))}

          <div className="screenshot-glow overflow-hidden mx-auto max-w-5xl border border-gray-800/10">
            <LocalizedImage
              src="/images/screen-main.png"
              locale={locale}
              alt="notePad++++ main editor interface — multi-tab editing and workspace"
              width={1400}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
