import { notepadAppStoreRating, type AppStoreRatingSummaryData } from '@/lib/app-store-rating'

interface AppStoreRatingSummaryProps {
  rating?: AppStoreRatingSummaryData
  className?: string
}

function StarIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarLabel({ count }: { count: number }) {
  return (
    <div className="flex w-[72px] justify-end gap-0.5 text-gray-950" aria-label={`${count} star`}>
      {Array.from({ length: count }).map((_, index) => (
        <StarIcon key={index} className="h-3 w-3" />
      ))}
    </div>
  )
}

export default function AppStoreRatingSummary({
  rating = notepadAppStoreRating,
  className = '',
}: AppStoreRatingSummaryProps) {
  const ratingCount = rating.ratingCount.toLocaleString('en-US')
  const ariaLabel = `${rating.platformLabel}: ${rating.score} out of ${rating.maxScore}, ${ratingCount} ${rating.ratingCountLabel}`

  return (
    <aside
      aria-label={ariaLabel}
      className={`overflow-hidden rounded-2xl border border-gray-200 bg-white/90 shadow-sm ring-1 ring-white/80 backdrop-blur ${className}`}
    >
      <div className="grid gap-0 divide-y divide-gray-100 sm:grid-cols-[0.82fr_1.18fr] sm:divide-x sm:divide-y-0">
        <div className="flex items-center gap-4 p-5 sm:p-6">
          <div>
            <div className="text-sm font-black text-gray-500">{rating.platformLabel}</div>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-6xl font-black leading-none tracking-tight text-gray-950">{rating.score.toFixed(1)}</span>
              <span className="pb-1 text-sm font-bold text-gray-500">out of {rating.maxScore}</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
                {Array.from({ length: rating.maxScore }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-600">App Store</span>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="space-y-2.5">
            {rating.distribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <StarLabel count={item.stars} />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-gray-950"
                    style={{ width: `${Math.max(0, Math.min(item.percentage, 100))}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right text-sm font-bold text-gray-500">
            {ratingCount} {rating.ratingCountLabel}
          </div>
        </div>
      </div>
    </aside>
  )
}
