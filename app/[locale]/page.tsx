import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import HtmlLangSetter from '@/components/HtmlLangSetter'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyNotNotepad from '@/components/WhyNotNotepad'
import FeaturesMatrix from '@/components/FeaturesMatrix'
import Automation from '@/components/Automation'
import AISection from '@/components/AISection'
import ChineseTextSection from '@/components/ChineseTextSection'
import Privacy from '@/components/Privacy'
import CloudSync from '@/components/CloudSync'
import Scenarios from '@/components/Scenarios'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import { APP_SUPPORTED_LOCALE_SLUGS, getAbsoluteUrl, getLanguageAlternates, getLocalePage } from '@/lib/site-locales'
import { SITE_URL } from '@/lib/paths'
import { APP_NAME } from '@/lib/seo'
import { getLandingDict } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

interface Props {
  params: { locale: string }
}

export function generateStaticParams() {
  return APP_SUPPORTED_LOCALE_SLUGS.map((locale) => ({ locale }))
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getLocalePage(params.locale)
  if (!page) return {}

  const canonical = getAbsoluteUrl(page.path)

  return {
    metadataBase: new URL(SITE_URL),
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    authors: [{ name: 'David699' }],
    creator: 'David699',
    openGraph: {
      type: 'website',
      locale: page.hreflang.replace('-', '_'),
      url: canonical,
      siteName: APP_NAME,
      title: page.title,
      description: page.description,
      images: [{ url: '/images/og-cover.png', width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: ['/images/og-cover.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    other: {
      'content-language': page.htmlLang,
    },
    alternates: {
      canonical,
      languages: getLanguageAlternates(),
    },
  }
}

export default function LocalePage({ params }: Props) {
  const page = getLocalePage(params.locale)
  if (!page) notFound()
  const locale = page.slug as Locale
  const t = getLandingDict(locale)

  return (
    <>
      <HtmlLangSetter lang={page.htmlLang} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: APP_NAME,
            operatingSystem: 'macOS',
            applicationCategory: 'ProductivityApplication',
            applicationSubCategory: 'TextEditor',
            description: page.description,
            keywords: page.keywords.join(', '),
            url: getAbsoluteUrl(page.path),
            image: `${getAbsoluteUrl('/')}images/app-icon.png`,
            screenshot: [
              `${getAbsoluteUrl('/')}images/screen-main-en.png`,
              `${getAbsoluteUrl('/')}images/screen-search-en.png`,
              `${getAbsoluteUrl('/')}images/screen-scripts-en.png`,
            ],
            featureList: t.featuresMatrix.features.map((item) => item.title),
            author: { '@type': 'Person', name: 'David699' },
          }),
        }}
      />
      <main>
        <Navbar t={t.nav} locale={locale} />
        <Hero t={t.hero} locale={locale} />
        <WhyNotNotepad t={t.whyNotNotepad} locale={locale} />
        <FeaturesMatrix t={t.featuresMatrix} />
        <Automation t={t.automation} />
        <AISection t={t.aiSection} locale={locale} />
        <ChineseTextSection t={t.textCleaning} />
        <Privacy t={t.privacy} />
        <CloudSync t={t.cloudSync} />
        <Scenarios t={t.scenarios} />
        <Reviews t={t.reviews} locale={locale} />
        <FAQ t={t.faq} />
        <CTASection t={t.cta} />
        <Footer t={t.footer} />
      </main>
    </>
  )
}
