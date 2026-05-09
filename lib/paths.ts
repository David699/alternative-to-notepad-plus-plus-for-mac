const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''
export const SITE_URL = 'https://david699.github.io/alternative-to-notepad-plus-plus-for-mac'
export const APP_STORE_URL = 'https://apps.apple.com/cn/app/notepad-%E5%88%97%E6%A8%A1%E5%BC%8F-%E5%A4%9A%E6%A0%87%E7%AD%BE-%E5%8F%AF%E7%BC%96%E7%A8%8B-%E8%BD%BB%E9%87%8F%E7%BA%A7%E7%BC%96%E8%BE%91%E5%99%A8/id6759166160?mt=12'

export function withBasePath(path: string): string {
  if (!path.startsWith('/')) return path
  return `${BASE_PATH}${path}`
}
