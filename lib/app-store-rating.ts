export interface AppStoreRatingDistributionItem {
  stars: 1 | 2 | 3 | 4 | 5
  percentage: number
}

export interface AppStoreRatingSummaryData {
  platformLabel: string
  score: number
  maxScore: number
  maxScoreLabel?: string
  ratingCount: number
  ratingCountLabel: string
  storeLabel?: string
  numberLocale?: string
  distribution: AppStoreRatingDistributionItem[]
}

export const notepadAppStoreRating: AppStoreRatingSummaryData = {
  platformLabel: 'macOS rating',
  score: 4.8,
  maxScore: 5,
  maxScoreLabel: 'out of',
  ratingCount: 261,
  ratingCountLabel: 'ratings',
  storeLabel: 'App Store',
  numberLocale: 'en-US',
  distribution: [
    { stars: 5, percentage: 86 },
    { stars: 4, percentage: 12 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 0.5 },
    { stars: 1, percentage: 0.5 },
  ],
}

export const notepadArabicAppStoreRating: AppStoreRatingSummaryData = {
  platformLabel: 'تقييم macOS',
  score: 4.8,
  maxScore: 5,
  maxScoreLabel: 'من أصل',
  ratingCount: 261,
  ratingCountLabel: 'تقييمًا',
  storeLabel: 'App Store',
  numberLocale: 'en-US',
  distribution: [
    { stars: 5, percentage: 86 },
    { stars: 4, percentage: 12 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 0.5 },
    { stars: 1, percentage: 0.5 },
  ],
}
