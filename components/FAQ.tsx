'use client'
import { motion } from 'framer-motion'
import type { FAQDict } from '@/lib/i18n/types'

interface Props { t: FAQDict }

export default function FAQ({ t }: Props) {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">{t.sectionLabel}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">{t.headline}</h2>
          <p className="text-lg text-gray-600">{t.sub}</p>
        </div>

        <div className="space-y-4">
          {t.items.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-card"
            >
              <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="text-brand-500 flex-shrink-0 mt-0.5 text-lg font-black">Q</span>
                <span>{faq.q}</span>
              </h3>
              <div className="flex items-start gap-3">
                <span className="text-teal-500 flex-shrink-0 mt-0.5 text-lg font-black">A</span>
                <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: t.items.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />
    </section>
  )
}
