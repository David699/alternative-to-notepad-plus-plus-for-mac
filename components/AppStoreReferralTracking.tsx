'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { appStoreUrlForCampaign, isNotepadAppStoreHref, trackAppStoreHref, YOUTUBE_CAMPAIGNS } from '@/lib/app-store-campaign'

const SESSION_KEY = 'notepad_youtube_referral'
const REFERRAL_LIFETIME_MS = 30 * 60 * 1000

function youtubeReferral(): string | undefined {
  const query = new URLSearchParams(window.location.search)
  const incoming = query.get('utm_source') === 'youtube' ? query.get('utm_campaign') : null
  const allowed = Object.values(YOUTUBE_CAMPAIGNS) as string[]
  if (incoming && allowed.includes(incoming)) {
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ campaign: incoming, expires: Date.now() + REFERRAL_LIFETIME_MS }))
    } catch { /* Direct referral still works when browser storage is unavailable. */ }
    return incoming
  }
  try {
    const saved = JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null')
    if (saved && allowed.includes(saved.campaign) && saved.expires > Date.now()) return saved.campaign
    sessionStorage.removeItem(SESSION_KEY)
  } catch { /* Ordinary per-page tracking needs no browser storage. */ }
  return undefined
}

export default function AppStoreReferralTracking() {
  const pathname = usePathname() || '/'
  useEffect(() => {
    const updateLink = (anchor: HTMLAnchorElement) => {
      const href = anchor.getAttribute('href') || ''
      if (!isNotepadAppStoreHref(href)) return
      const pageHref = trackAppStoreHref(href, pathname)
      const campaign = youtubeReferral()
      anchor.href = campaign ? appStoreUrlForCampaign(campaign) : pageHref
    }
    document.querySelectorAll<HTMLAnchorElement>('a[href*="apps.apple.com"]').forEach(updateLink)
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return
      const anchor = event.target.closest<HTMLAnchorElement>('a[href*="apps.apple.com"]')
      if (anchor) updateLink(anchor)
    }
    document.addEventListener('click', onClick, true)
    document.addEventListener('auxclick', onClick, true)
    return () => {
      document.removeEventListener('click', onClick, true)
      document.removeEventListener('auxclick', onClick, true)
    }
  }, [pathname])
  return null
}
