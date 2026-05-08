'use client'
import { motion } from 'framer-motion'
import type { FeaturesMatrixDict } from '@/lib/i18n/types'

interface Props { t: FeaturesMatrixDict }

export default function FeaturesMatrix({ t }: Props) {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">{t.sectionLabel}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {t.headline}
            <span className="gradient-text">{t.headlineGradient}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
              viewport={{ once: true }}
              className="feature-card group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{feat.icon}</span>
                {feat.badge && (
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${feat.badge.color}`}>
                    {feat.badge.text}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feat.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
