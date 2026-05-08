'use client'
import { motion } from 'framer-motion'
import type { PrivacyDict } from '@/lib/i18n/types'

interface Props { t: PrivacyDict }

export default function Privacy({ t }: Props) {
  return (
    <section className="py-24 bg-white">
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
          {t.points.map((tp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl border-2 ${tp.color} p-6 ${tp.bg}`}
            >
              <div className="text-3xl mb-4">{tp.icon}</div>
              <h3 className={`font-bold text-lg mb-2 ${tp.accent}`}>{tp.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{tp.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8 max-w-xl mx-auto">{t.disclaimer}</p>
      </div>
    </section>
  )
}
