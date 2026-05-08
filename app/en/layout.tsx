import type { Metadata } from 'next'
import HtmlLangSetter from './HtmlLangSetter'

const SITE_URL = 'https://david699.github.io/notePad----'
const APP_NAME = 'notePad++++'
const EN_DESC = 'The most powerful plain-text workbench for Mac. Multi-tab editing, workspace search, regex find & replace, script pipelines, batch processing, and AI assistance — the macOS alternative to Notepad++.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${APP_NAME} — The Text Workbench for Mac`,
    template: `%s | ${APP_NAME}`,
  },
  description: EN_DESC,
  keywords: [
    'notePad++', 'Notepad++ Mac', 'Mac text editor', 'text workbench',
    'automation pipeline', 'AI text processing', 'macOS editor',
    'multi-tab editing', 'regex replace', 'batch processing', 'workspace search',
    'script automation', 'Mac notepad', 'text tool',
  ],
  authors: [{ name: 'David699' }],
  creator: 'David699',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/en/`,
    siteName: APP_NAME,
    title: `${APP_NAME} — The Text Workbench for Mac`,
    description: EN_DESC,
    images: [{ url: '/images/og-cover.png', width: 1200, height: 630, alt: `${APP_NAME} — Text Workbench for Mac` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} — The Text Workbench for Mac`,
    description: EN_DESC,
    images: ['/images/og-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: `${SITE_URL}/en/`,
    languages: { 'zh-CN': SITE_URL, en: `${SITE_URL}/en/` },
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
