'use client'
import { motion } from 'framer-motion'
import type { ScenariosDict } from '@/lib/i18n/types'

interface Props { t: ScenariosDict }

export default function Scenarios({ t }: Props) {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">{t.sectionLabel}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {t.headline}
            <span className="gradient-text">{t.headlineGradient}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">{t.sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl bg-gradient-to-b ${s.color} border p-6 hover:shadow-card-hover transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="font-bold text-gray-900">{s.title}</h3>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 mb-4">
                {s.flow.map((step, j) => (
                  <span key={j} className="flex items-center gap-1">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${s.flowColor}`}>
                      {step}
                    </span>
                    {j < s.flow.length - 1 && (
                      <span className="text-gray-300 text-xs">→</span>
                    )}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {s.useCases.map((uc, j) => (
                  <span key={j} className="text-xs text-gray-500 bg-white/80 border border-gray-100 px-2 py-0.5 rounded-full">
                    {uc}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
