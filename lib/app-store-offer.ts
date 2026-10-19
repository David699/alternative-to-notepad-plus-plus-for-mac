import { APP_STORE_URL } from './paths'

// App Store lookup confirmed free acquisition on 2026-10-19; Pro features use in-app purchases.
export const appStoreOffer = {
  '@type': 'Offer',
  price: 0,
  priceCurrency: 'USD',
  url: APP_STORE_URL,
} as const
