// Public provider token generated in App Store Connect on 2026-10-19.
export const APP_STORE_PROVIDER_TOKEN = '118772193'
const APP_STORE_BASE_URL = 'https://apps.apple.com/app/id6759166160'
export const YOUTUBE_CAMPAIGNS = {
  JrA0Y0iOdos: 'yt_overview',
  '2M2RvFUXkxU': 'yt_scripts',
  Z0O3QfLGM5o: 'yt_folder_batch',
  Us0glyrVpDI: 'yt_html_preview',
  xweYD8JKFn8: 'yt_multi_keyword',
  jxHVcfoCrUk: 'yt_sql_preview',
  RzehRkrH9QQ: 'yt_markdown',
} as const

export function appStoreCampaignForPath(pathname: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const path = (basePath && pathname.startsWith(`${basePath}/`) ? pathname.slice(basePath.length) : pathname)
    .split(/[?#]/)[0].replace(/^\/+|\/+$/g, '')
  if (!path) return 'web_home_zh'
  if (!path.includes('/')) return `web_home_${path.replace(/-/g, '_')}`
  const readable = `web_${path.replace(/[^a-z0-9]+/g, '_')}`
  if (readable.length <= 30) return readable
  let hash = 2166136261
  for (const char of path) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619) >>> 0
  return `${readable.slice(0, 22)}_${hash.toString(36).padStart(7, '0')}`
}

export function appStoreUrlForCampaign(campaign: string): string {
  if (!/^[a-zA-Z0-9_]{1,30}$/.test(campaign)) throw new Error(`Invalid App Store campaign: ${campaign}`)
  return `${APP_STORE_BASE_URL}?pt=${APP_STORE_PROVIDER_TOKEN}&ct=${campaign}&mt=12`
}

export function appStoreUrlForPath(pathname: string): string {
  return appStoreUrlForCampaign(appStoreCampaignForPath(pathname))
}

export function isNotepadAppStoreHref(href: string): boolean {
  try {
    const url = new URL(href)
    return url.hostname === 'apps.apple.com' && /\/id6759166160\/?$/.test(url.pathname)
  } catch {
    return false
  }
}

export function trackAppStoreHref(href: string, pathname: string): string {
  return isNotepadAppStoreHref(href) ? appStoreUrlForPath(pathname) : href
}

export function trackAppStoreHtml(html: string, pathname: string): string {
  return html.replace(/href="([^"]+)"/g, (attribute, href: string) => {
    const tracked = trackAppStoreHref(href.replaceAll('&amp;', '&'), pathname)
    return tracked === href.replaceAll('&amp;', '&') ? attribute : `href="${tracked.replaceAll('&', '&amp;')}"`
  })
}
