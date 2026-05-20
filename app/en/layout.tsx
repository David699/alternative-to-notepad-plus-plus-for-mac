import type { Metadata } from 'next'
import HtmlLangSetter from './HtmlLangSetter'
import { SITE_URL } from '@/lib/paths'
import { APP_NAME, EN_APP_DESC, EN_SEO_KEYWORDS } from '@/lib/seo'
import { getLanguageAlternates } from '@/lib/site-locales'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${APP_NAME} — Notepad++ for Mac Alternative`,
    template: `%s | ${APP_NAME}`,
  },
  description: EN_APP_DESC,
  keywords: EN_SEO_KEYWORDS,
  authors: [{ name: 'David699' }],
  creator: 'David699',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/en/`,
    siteName: APP_NAME,
    title: `${APP_NAME} — Notepad++ for Mac Alternative`,
    description: EN_APP_DESC,
    images: [{ url: '/images/og-cover.png', width: 1200, height: 630, alt: `${APP_NAME} — Text Workbench for Mac` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} — Notepad++ for Mac Alternative`,
    description: EN_APP_DESC,
    images: ['/images/og-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: {
    'content-language': 'en',
  },
  alternates: {
    canonical: `${SITE_URL}/en/`,
    languages: getLanguageAlternates(),
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLangSetter />
      {children}
    </>
  )
}
