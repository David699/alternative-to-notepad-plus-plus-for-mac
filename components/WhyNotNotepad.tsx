'use client'
import { motion } from 'framer-motion'
import type { WhyNotNotepadDict, Locale } from '@/lib/i18n/types'
import LocalizedImage from '@/components/LocalizedImage'

interface Props { t: WhyNotNotepadDict; locale?: Locale }

export default function WhyNotNotepad({ t, locale = 'zh' }: Props) {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">{t.sectionLabel}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {t.headline}
            <span className="gradient-text">{t.headlineGradient}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.sub}</p>
        </div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl bg-gradient-to-b ${p.gradient} border border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300`}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className={`text-xl font-bold ${p.accent}`}>{p.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-2">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className={`w-1.5 h-1.5 rounded-full ${p.badge.replace('text-', 'bg-').split(' ')[0]}`} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-gray-100 overflow-hidden bg-gray-900">
                <LocalizedImage
                  src={p.image}
                  locale={locale}
                  alt={p.imageAlt}
                  width={700}
                  height={420}
                  className="w-full h-40 object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
