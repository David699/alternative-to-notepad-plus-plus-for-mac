'use client'
import { motion } from 'framer-motion'
import type { AISectionDict, Locale } from '@/lib/i18n/types'
import LocalizedImage from '@/components/LocalizedImage'

interface Props { t: AISectionDict; locale?: Locale }

export default function AISection({ t, locale = 'zh' }: Props) {
  return (
    <section id="ai" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">{t.sectionLabel}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {t.headline}
            <br />
            <span className="gradient-text">{t.headlineGradient}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.sub}</p>
        </div>

        {/* AI flow diagram */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-bold text-gray-800 mb-8">{t.flowTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.flowSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`rounded-2xl border-2 p-5 h-full ${s.color}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-black text-gray-400 font-mono">{s.step}</span>
                    <h4 className="font-bold text-gray-900 text-sm">{s.label}</h4>
                  </div>
                  <pre className="text-xs font-mono text-gray-600 whitespace-pre leading-relaxed">{s.example}</pre>
                </div>
                {i < t.flowSteps.length - 1 && (
                  <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-4 items-center justify-center text-gray-300 text-lg font-bold z-10">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Editorial split: feature cards (left) + screenshot (right) */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center mb-16">
          {/* Feature cards column */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5 mb-10 lg:mb-0">
            {t.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="feature-card flex items-start gap-4"
              >
                <span className="text-3xl flex-shrink-0">{feat.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-gray-900">{feat.title}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${feat.tagColor}`}>
                      {feat.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Screenshot panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="screenshot-glow overflow-hidden rounded-2xl border border-gray-200"
          >
            <LocalizedImage
              src="/images/ai-write.png"
              locale={locale}
              alt={t.screenshotAlt}
              width={1400}
              height={900}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Privacy disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-blue-50 border border-blue-100 p-6 flex items-start gap-4"
        >
          <span className="text-2xl flex-shrink-0 mt-0.5">🔒</span>
          <div>
            <h4 className="font-bold text-blue-900 mb-2">{t.privacyTitle}</h4>
            <p className="text-sm text-blue-800 leading-relaxed">{t.privacyBody}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
