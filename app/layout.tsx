import type { Metadata } from 'next'
import './globals.css'
import { withBasePath } from '@/lib/paths'

export const metadata: Metadata = {
  icons: {
    icon: withBasePath('/images/app-icon.png'),
    apple: withBasePath('/images/app-icon.png'),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#118de8" />
      </head>
      <body>{children}</body>
    </html>
  )
}
