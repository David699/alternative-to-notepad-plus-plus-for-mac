'use client'
import { motion } from 'framer-motion'
import type { ReviewsDict, Locale } from '@/lib/i18n/types'
import LocalizedImage from '@/components/LocalizedImage'

interface Props { t: ReviewsDict; locale?: Locale }

export default function Reviews({ t, locale = 'zh' }: Props) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">{t.sectionLabel}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {t.headline}
            <span className="gradient-text">{t.headlineGradient}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {t.items.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="feature-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{r.avatar}</span>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{r.name}</div>
                  <div className="text-xs text-gray-500">{r.role}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array(r.rating).fill(0).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center text-sm text-gray-500 mb-4">{t.appStoreCaption}</div>
          <div className="rounded-2xl overflow-hidden shadow-card border border-gray-100">
            <LocalizedImage
              src="/images/reviews.png"
              locale={locale}
              alt={t.reviewsAlt}
              width={900}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
