import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

const SITE_URL = 'https://david699.github.io/notePad----'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'notePad++++ Terms of Service — please read before using the app',
  alternates: {
    canonical: `${SITE_URL}/en/terms/`,
    languages: { 'zh-CN': `${SITE_URL}/terms/`, en: `${SITE_URL}/en/terms/` },
  },
  robots: { index: true, follow: true },
}

export default function TermsEn() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="Please read these terms before downloading or using notePad++++. By using the app you agree to these terms."
      lastUpdated="Last updated: May 2026"
      backLabel="Back to Home"
      backHref="/en/"
      homeHref="/en/"
      sections={[
        {
          heading: '1. License',
          body: [
            'notePad++++ is distributed through the Apple App Store and requires macOS 13 or later. We grant you a personal, non-exclusive, non-transferable license to install and use the app on Mac devices you own or control.',
          ],
        },
        {
          heading: '2. Free and Paid Features',
          body: [
            'Core features of the app are free. Some advanced features (such as unlimited scripts or Pro workspace access) may require an in-app purchase or subscription, as indicated within the app.',
            'All purchases are processed through the Apple App Store and are subject to Apple\'s refund policies.',
          ],
        },
        {
          heading: '3. AI Features',
          body: [
            'AI features require you to supply an API key from a third-party AI provider (e.g., OpenAI) and comply with that provider\'s terms of service. Any charges from the AI provider are between you and that provider — notePad++++ does not charge for AI usage.',
          ],
        },
        {
          heading: '4. Prohibited Uses',
          body: [
            'You may not: reverse-engineer, decompile, or crack the app; abuse or attack the app\'s related services through automated means; or use the app for any unlawful purpose or in a way that infringes the rights of others.',
          ],
        },
        {
          heading: '5. Disclaimer of Warranties',
          body: [
            'The app is provided "as is" without any express or implied warranties. We do not guarantee the app will be error-free or uninterrupted.',
            'To the maximum extent permitted by law, we are not liable for any direct, indirect, or incidental damages arising from use of or inability to use the app.',
          ],
        },
        {
          heading: '6. Third-Party Services',
          body: [
            'The app may interact with third-party services (such as OpenAI APIs and Google Analytics). We are not responsible for the availability, accuracy, or privacy practices of those services — please review their respective terms and policies.',
          ],
        },
        {
          heading: '7. Intellectual Property',
          body: [
            'The notePad++++ name, icon, interface design, and code are owned by the developer. macOS is a registered trademark of Apple Inc. Notepad++ is an open-source project by Don Ho; notePad++++ has no affiliation with it.',
          ],
        },
        {
          heading: '8. Changes to Terms',
          body: [
            'We reserve the right to update these terms at any time. Material changes will be announced in release notes or the App Store description. Continued use of the app constitutes acceptance of the revised terms.',
          ],
        },
        {
          heading: '9. Contact',
          body: [
            'For questions about these terms, please contact us through the App Store page.',
          ],
        },
      ]}
    />
  )
}
