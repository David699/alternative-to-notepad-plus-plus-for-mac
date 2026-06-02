const GOOGLE_ADS_ID = 'AW-10873493085'
const DEFAULT_DOWNLOAD_CONVERSION_LABEL = 'GAr0COeAorEcEN2s8cAo'

const DOWNLOAD_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_DOWNLOAD_CONVERSION_LABEL || DEFAULT_DOWNLOAD_CONVERSION_LABEL
const DOWNLOAD_CONVERSION_SEND_TO =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_DOWNLOAD_CONVERSION_SEND_TO ||
  (DOWNLOAD_CONVERSION_LABEL ? `${GOOGLE_ADS_ID}/${DOWNLOAD_CONVERSION_LABEL}` : '')

type GtagValue = string | number | boolean | Date | undefined | (() => void)
type GtagParams = Record<string, GtagValue>

declare global {
  interface Window {
    gtag?: (command: string, eventName: string | Date, params?: GtagParams) => void
  }
}

export type DownloadClickSource = 'cta' | 'footer'

export function reportAppStoreDownloadClick(source: DownloadClickSource) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  window.gtag('event', 'app_store_download_click', {
    event_category: 'download',
    event_label: source,
    app_name: 'notePad++++',
  })

  if (!DOWNLOAD_CONVERSION_SEND_TO) return

  window.gtag('event', 'conversion', {
    send_to: DOWNLOAD_CONVERSION_SEND_TO,
    value: 1.0,
    currency: 'CNY',
    event_category: 'download',
    event_label: source,
  })
}
