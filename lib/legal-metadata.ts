import type { Metadata } from 'next'
import { APP_NAME } from './seo'
import { SITE_URL } from './paths'

export function legalPageMetadata(locale: 'zh' | 'en', slug: 'privacy' | 'terms'): Metadata {
  const english = locale === 'en'
  const label = slug === 'privacy'
    ? english ? 'Privacy Policy' : '隐私政策'
    : english ? 'Terms of Service' : '服务条款'
  const description = slug === 'privacy'
    ? english ? `${APP_NAME} Privacy Policy — learn how we handle your data` : `${APP_NAME} 隐私政策 — 了解我们如何处理您的数据`
    : english ? `${APP_NAME} Terms of Service — please read before using the app` : `${APP_NAME} 服务条款 — 使用本应用前请阅读以下条款`
  const canonical = `${SITE_URL}${english ? '/en' : ''}/${slug}/`
  const title = `${label} | ${APP_NAME}`
  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: title }, description,
    alternates: {
      canonical,
      languages: { 'zh-CN': `${SITE_URL}/${slug}/`, en: `${SITE_URL}/en/${slug}/`, 'x-default': `${SITE_URL}/en/${slug}/` },
    },
    openGraph: {
      type: 'website', title, description, url: canonical, siteName: APP_NAME,
      locale: english ? 'en_US' : 'zh_CN',
      images: [{ url: '/images/og-cover.webp', width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/og-cover.webp'] },
    robots: { index: true, follow: true },
  }
}
