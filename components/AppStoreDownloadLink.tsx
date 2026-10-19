'use client'

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { reportAppStoreDownloadClick, type DownloadClickSource } from '@/lib/google-ads'
import { APP_STORE_URL } from '@/lib/paths'
import { usePathname } from 'next/navigation'
import { trackAppStoreHref } from '@/lib/app-store-campaign'

interface AppStoreDownloadLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  source: DownloadClickSource
  children: ReactNode
}

export default function AppStoreDownloadLink({
  source,
  children,
  href = APP_STORE_URL,
  target = '_blank',
  rel = 'noopener noreferrer',
  onClick,
  ...props
}: AppStoreDownloadLinkProps) {
  const pathname = usePathname() || '/'
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    if (!event.defaultPrevented) {
      reportAppStoreDownloadClick(source)
    }
  }

  return (
    <a href={trackAppStoreHref(href, pathname)} target={target} rel={rel} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

