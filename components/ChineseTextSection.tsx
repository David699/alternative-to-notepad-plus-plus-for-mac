'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { TextCleaningDict } from '@/lib/i18n/types'

interface Props { t: TextCleaningDict }

export default function ChineseTextSection({ t }: Props) {
  const [activeCase, setActiveCase] = useState(0)
  const [showAfter, setShowAfter] = useState(false)

  return (
    <section id="text-cleaning" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">{t.sectionLabel}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {t.headline && <>{t.headline}<br /></>}
            <span className="gradient-text">{t.headlineGradient}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.sub}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left: case selector */}
          <div className="lg:col-span-4 space-y-2">
            {t.cases.map((c, i) => (
              <button
                key={i}
                onClick={() => { setActiveCase(i); setShowAfter(false) }}
                className={`w-full flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                  activeCase === i
                    ? 'bg-white border-brand-200 shadow-card'
                    : 'bg-white/60 border-gray-100 hover:border-gray-200 hover:bg-white'
                }`}
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{c.icon}</span>
                <div>
                  <div className={`font-bold text-sm mb-1 ${activeCase === i ? 'text-brand-700' : 'text-gray-800'}`}>
                    {c.title}
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed">{c.desc}</div>
                  <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    {c.tag}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Before/After demo */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-card"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 bg-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{t.cases[activeCase].icon}</span>
                    <span className="font-semibold text-sm text-gray-800">{t.cases[activeCase].title}</span>
                  </div>
                  <button
                    onClick={() => setShowAfter(!showAfter)}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 ${
                      showAfter
                        ? 'bg-green-100 text-green-700 border border-green-200'
                        : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                    }`}
                  >
                    {showAfter ? t.toggleAfter : t.toggleBefore}
                  </button>
                </div>

                {/* Content */}
                <div className="grid sm:grid-cols-2 divide-x divide-gray-100">
                  <div className="p-5">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">{t.beforeLabel}</div>
                    <pre className="text-sm font-mono text-gray-700 whitespace-pre leading-relaxed">{t.cases[activeCase].before}</pre>
                  </div>
                  <div className="p-5 bg-green-50/40">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{t.afterLabel}</div>
                      {showAfter && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold"
                        >
                          {t.cleanedBadge}
                        </motion.span>
                      )}
                    </div>
                    <AnimatePresence mode="wait">
                      {showAfter ? (
                        <motion.pre
                          key="after"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-sm font-mono text-gray-700 whitespace-pre leading-relaxed"
                        >
                          {t.cases[activeCase].after}
                        </motion.pre>
                      ) : (
                        <motion.div
                          key="placeholder"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-center justify-center py-8 text-gray-300"
                        >
                          <span className="text-4xl mb-2">✨</span>
                          <span className="text-sm">{t.showPlaceholder}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
