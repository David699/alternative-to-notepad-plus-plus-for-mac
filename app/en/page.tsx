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
import { en } from '@/lib/i18n'
import { SITE_URL } from '@/lib/paths'
import { APP_NAME, EN_APP_DESC, EN_SEO_KEYWORDS } from '@/lib/seo'

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
            description: EN_APP_DESC,
            keywords: EN_SEO_KEYWORDS.join(', '),
            url: `${SITE_URL}/en/`,
            image: `${SITE_URL}/images/app-icon.png`,
            screenshot: [
              `${SITE_URL}/images/screen-main.png`,
              `${SITE_URL}/images/screen-search.png`,
              `${SITE_URL}/images/screen-scripts.png`,
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
      <Hero t={en.hero} locale="en" />
      <WhyNotNotepad t={en.whyNotNotepad} locale="en" />
      <FeaturesMatrix t={en.featuresMatrix} />
      <Automation t={en.automation} />
      <AISection t={en.aiSection} locale="en" />
      <ChineseTextSection t={en.textCleaning} />
      <Privacy t={en.privacy} />
      <CloudSync t={en.cloudSync} />
      <Scenarios t={en.scenarios} />
      <Reviews t={en.reviews} locale="en" />
      <FAQ t={en.faq} />
      <CTASection t={en.cta} />
      <Footer t={en.footer} />
    </main>
  )
}
