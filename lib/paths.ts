const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''
export const SITE_URL = 'https://notepad-plus-plus-mac.com'
export const APP_STORE_URL = 'https://apps.apple.com/cn/app/id6759166160?ct=landing_page&mt=12'
export const GITHUB_REPO_URL = 'https://github.com/David699/alternative-to-notepad-plus-plus-for-mac'
export const NOTEPAD_PLUS_PLUS_URL = 'https://notepad-plus-plus.org/'
export const PRODUCT_HUNT_URL = 'https://www.producthunt.com/products/notepad-14'

export function withBasePath(path: string): string {
  if (!path.startsWith('/')) return path
  return `${BASE_PATH}${path}`
}
