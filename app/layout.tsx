import type { Metadata } from 'next'
import './globals.css'
import { withBasePath } from '@/lib/paths'
import { getHtmlLangForSegment } from '@/lib/site-locales'

export const metadata: Metadata = {
  icons: {
    icon: withBasePath('/images/app-icon.png'),
    apple: withBasePath('/images/app-icon.png'),
  },
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params?: { locale?: string }
}) {
  const htmlLang = getHtmlLangForSegment(params?.locale)

  return (
    <html lang={htmlLang} className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#118de8" />
      </head>
      <body>{children}</body>
    </html>
  )
}
