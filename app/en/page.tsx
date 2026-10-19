import type { Metadata } from 'next'
import EnglishHomeHero from '@/components/EnglishHomeHero'
import EnglishHomeOverviewVideo from '@/components/EnglishHomeOverviewVideo'
import EnglishHomeWorkflows from '@/components/EnglishHomeWorkflows'
import { englishHomeTitle, englishHomeDescription, englishHomeHero } from '@/lib/english-home'
import { getLanguageAlternates } from '@/lib/site-locales'
import Navbar from '@/components/Navbar'
import Privacy from '@/components/Privacy'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import { en } from '@/lib/i18n'
import { SITE_URL } from '@/lib/paths'
import { APP_NAME, EN_SEO_KEYWORDS } from '@/lib/seo'
import { appStoreOffer } from '@/lib/app-store-offer'
import { appStoreUrlForPath } from '@/lib/app-store-campaign'
import { notepadAppStoreAggregateRating } from '@/lib/app-store-rating'

export const metadata: Metadata = {
  title: { absolute: englishHomeTitle },
  description: englishHomeDescription,
  alternates: { canonical: `${SITE_URL}/en/`, languages: getLanguageAlternates() },
  openGraph: {
    type: 'website', locale: 'en_US', url: `${SITE_URL}/en/`, siteName: APP_NAME,
    title: englishHomeTitle, description: englishHomeDescription,
    images: [{ url: englishHomeHero.src, width: englishHomeHero.width, height: englishHomeHero.height, alt: englishHomeHero.alt }],
  },
  twitter: { card: 'summary_large_image', title: englishHomeTitle, description: englishHomeDescription, images: [englishHomeHero.src] },
}

const homeFaq = {
  ...en.faq,
  items: [
    { q: 'Is this the official Notepad++ for Mac?', a: `${APP_NAME} is an independent macOS editor. The original Notepad++ project distributes a Windows application; this App is not affiliated with or endorsed by that project.` },
    { q: 'Can I use my Windows Notepad++ plugins here?', a: `${APP_NAME} does not run Windows Notepad++ plugins or import recorded Notepad++ macros. Check whether its built-in editing and scripting tools cover the tasks you need.` },
    ...en.faq.items
      .filter((item) => item.q !== `How is ${APP_NAME} related to Notepad++?`)
      .map((item) => item.q === 'Is batch processing safe? What if something goes wrong?'
        ? { ...item, a: 'Use Preview to inspect the target files and proposed changes before applying them. Actual batch writes create backups retained for seven days. Open the same workspace and use Restore this operation in Operation History while its backups are available. Files changed since the operation, or open with unsaved edits, are skipped. Check the result for errors or skipped files and keep your normal backups for important work.' }
        : item),
  ],
}

export default function EnHome() {
  return (
    <main>
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
            offers: { ...appStoreOffer, url: appStoreUrlForPath('/en/') },
            aggregateRating: notepadAppStoreAggregateRating,
            description: englishHomeDescription,
            keywords: EN_SEO_KEYWORDS.join(', '),
            url: `${SITE_URL}/en/`,
            image: `${SITE_URL}/images/app-icon.webp`,
            screenshot: [
              `${SITE_URL}${englishHomeHero.src}`,
              `${SITE_URL}/images/seo/notepad-mac-features/workspace-search-real.webp`,
              `${SITE_URL}/images/seo/english-home/pipeline-gallery-real.webp`,
            ],
            featureList: [
              'Multi-tab text editing', 'Workspace search & browse', 'Regex find & replace',
              'Column editing', 'Markdown preview', 'Diff comparison',
              'Script automation', 'Pipeline batch processing', 'Workspace and single-file cloud sync', 'AI rewrite & script generation',
              'Text cleaning',
            ],
            author: { '@type': 'Person', name: 'David699' },
          }),
        }}
      />
      <Navbar t={en.nav} locale="en" />
      <EnglishHomeHero />
      <EnglishHomeOverviewVideo />
      <EnglishHomeWorkflows />
      <Privacy t={en.privacy} />
      <Reviews t={en.reviews} locale="en" />
      <FAQ t={homeFaq} />
      <CTASection t={{ ...en.cta, appStoreLabel: 'Download on the Mac App Store' }} />
      <Footer t={en.footer} />
    </main>
  )
}
