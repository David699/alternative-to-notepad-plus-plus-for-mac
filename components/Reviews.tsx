'use client'
import { motion } from 'framer-motion'
import type { AppStoreReviewItem, ReviewsDict, Locale } from '@/lib/i18n/types'

interface Props { t: ReviewsDict; locale?: Locale }

function Stars({ rating, muted = false }: { rating: number; muted?: boolean }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={`h-4 w-4 ${index < rating ? 'text-gray-950' : muted ? 'text-gray-300' : 'text-amber-400'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function AppStoreReviewCard({ review, versionPrefix }: { review: AppStoreReviewItem; versionPrefix: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <Stars rating={review.rating} muted />
      <div className="mt-3 font-bold text-gray-950">{review.title}</div>
      <div className="mt-1 text-xs text-gray-500">{review.date} - {review.author}</div>
      <p className="mt-5 text-sm leading-relaxed text-gray-700">{review.text}</p>
      <div className="mt-6 text-xs text-gray-400">{versionPrefix} - {review.country}</div>
    </div>
  )
}

export default function Reviews({ t, locale = 'zh' }: Props) {
  const ratingRows = [
    { stars: 5, width: '92%' },
    { stars: 4, width: '18%' },
    { stars: 3, width: '8%' },
    { stars: 2, width: '4%' },
    { stars: 1, width: '2%' },
  ]

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
                <Stars rating={r.rating} />
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
          className="max-w-5xl mx-auto"
        >
          <div className="text-center text-sm text-gray-500 mb-4">{t.appStoreCaption}</div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-8">
              <div className="text-sm font-bold text-gray-900">{t.scoreLabel}</div>
              <div className="mt-8 flex items-end gap-3">
                <div className="text-6xl font-black leading-none text-gray-950">{t.scoreValue}</div>
                <div className="pb-2 text-sm text-gray-500">{t.scoreSuffix}</div>
              </div>
            </div>
            <div className="rounded-xl bg-gray-50 p-8">
              <div className="space-y-2">
                {ratingRows.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3">
                    <div className="w-14 text-right text-xs font-semibold text-gray-950">{'★'.repeat(row.stars)}</div>
                    <div className="h-1.5 flex-1 rounded-full bg-gray-200">
                      <div className="h-full rounded-full bg-gray-950" style={{ width: row.width }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-right text-sm text-gray-500">{t.ratingsCount} {t.ratingsCountLabel}</div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-2xl font-black text-gray-950">{t.latestLabel} ({t.latestCount})</h3>
            <div className="text-sm text-gray-500">{locale === 'zh' ? '所有版本 · 所有评分 · 所有评论' : 'All versions · All ratings · All reviews'}</div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {t.appStoreReviews.map((review) => (
              <AppStoreReviewCard key={`${review.author}-${review.date}`} review={review} versionPrefix={t.versionPrefix} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
