'use client'
import { useEffect } from 'react'

export default function HtmlLangSetter() {
  useEffect(() => {
    document.documentElement.lang = 'en'
    document.documentElement.dir = 'ltr'
  }, [])
  return null
}
