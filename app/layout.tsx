import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { CLOUDFLARE_WEB_ANALYTICS_TOKEN } from '@/lib/analytics'
import { withBasePath } from '@/lib/paths'
import { getHtmlLangForSegment } from '@/lib/site-locales'
import AppStoreReferralTracking from '@/components/AppStoreReferralTracking'

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

export const metadata: Metadata = {
  icons: {
    icon: [{ url: withBasePath('/images/optimized/app-icon-64.png'), sizes: '64x64', type: 'image/png' }],
    apple: [{ url: withBasePath('/images/optimized/app-icon-180.png'), sizes: '180x180', type: 'image/png' }],
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
        {GOOGLE_ADS_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} strategy="beforeInteractive" />
            <Script id="google-ads-tag" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ADS_ID}');
              `}
            </Script>
          </>
        ) : null}
        <meta name="theme-color" content="#118de8" />
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: CLOUDFLARE_WEB_ANALYTICS_TOKEN })}
        />
      </head>
      <body>{children}<AppStoreReferralTracking /></body>
    </html>
  )
}
