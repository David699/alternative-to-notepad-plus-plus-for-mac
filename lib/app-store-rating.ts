export interface AppStoreRatingDistributionItem {
  stars: 1 | 2 | 3 | 4 | 5
  percentage: number
}

export interface AppStoreRatingSummaryData {
  platformLabel: string
  score: number
  maxScore: number
  ratingCount: number
  ratingCountLabel: string
  distribution: AppStoreRatingDistributionItem[]
}

export const notepadAppStoreRating: AppStoreRatingSummaryData = {
  platformLabel: 'macOS rating',
  score: 4.8,
  maxScore: 5,
  ratingCount: 261,
  ratingCountLabel: 'ratings',
  distribution: [
    { stars: 5, percentage: 86 },
    { stars: 4, percentage: 12 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 0.5 },
    { stars: 1, percentage: 0.5 },
  ],
}
