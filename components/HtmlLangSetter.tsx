'use client'
import { useEffect } from 'react'

export default function HtmlLangSetter({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang.startsWith('ar') ? 'rtl' : 'ltr'
  }, [lang])

  return null
}
