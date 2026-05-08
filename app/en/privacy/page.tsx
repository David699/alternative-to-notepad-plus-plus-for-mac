import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { SITE_URL } from '@/lib/paths'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'notePad++++ Privacy Policy — learn how we handle your data',
  alternates: {
    canonical: `${SITE_URL}/en/privacy/`,
    languages: { 'zh-CN': `${SITE_URL}/privacy/`, en: `${SITE_URL}/en/privacy/` },
  },
  robots: { index: true, follow: true },
}

export default function PrivacyEn() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="This policy explains what data notePad++++ collects, how it is used, and how it is protected."
      lastUpdated="Last updated: May 2026"
      backLabel="Back to Home"
      backHref="/en/"
      homeHref="/en/"
      sections={[
        {
          heading: '1. Data We Collect',
          body: [
            'notePad++++ collects anonymous or pseudonymous basic usage analytics to understand how the app is used and to improve it over time. The collected information includes:',
            '· System info: macOS version, CPU architecture (arm64 / x86_64), hardware model identifier, whether running under Rosetta',
            '· App info: app version, build number, days since first install (bucketed, e.g. "1–7 days")',
            '· Language and region settings',
            '· Basic usage events: for example "workspace opened", "batch run started", "AI connection test" and its result',
            'We do not collect file contents, editor text, file names, your name, email address, or any information that directly identifies you.',
          ],
        },
        {
          heading: '2. Analytics Identifier',
          body: [
            'To distinguish devices in aggregate statistics, the app generates a random client ID stored locally in your Mac\'s UserDefaults. This ID is not linked to any account or real identity — it is used solely to count devices anonymously.',
            'Analytics data is sent to Google Analytics via the Measurement Protocol and is subject to Google\'s Privacy Policy (analytics.google.com). We do not sell or share analytics data with other third parties.',
          ],
        },
        {
          heading: '3. Opting Out of Analytics',
          body: [
            'Analytics is enabled by default. You can turn it off at any time in the app Settings. Once disabled, the app sends no usage analytics.',
          ],
        },
        {
          heading: '4. AI Features and Text Data',
          body: [
            'Text is only sent to a third-party AI provider (such as OpenAI or Anthropic) when you explicitly invoke an AI action. The app sends the text you select or the current file content along with your request to the AI endpoint you have configured.',
            'Your API key is stored exclusively in the macOS system Keychain on your Mac and is never uploaded to our servers. The AI provider\'s base URL and model settings are stored in local UserDefaults.',
            'We do not collect, store, or analyze any text you send to an AI provider. Please review the privacy policy of your chosen AI provider to understand how they handle submitted text.',
          ],
        },
        {
          heading: '5. Data Storage and Security',
          body: [
            'All user data — file contents, security-scoped bookmarks, plugins, and AI keys — is stored only on your local Mac. Nothing is uploaded to our servers. The app complies with macOS App Sandbox, and file access is enforced by the operating system sandbox.',
          ],
        },
        {
          heading: '6. Children\'s Privacy',
          body: [
            'This app is not directed at children under 13, and we do not knowingly collect personal information from them.',
          ],
        },
        {
          heading: '7. Policy Changes',
          body: [
            'If we make significant changes to this policy, we will announce them in the app\'s release notes or App Store description. Continued use of the app constitutes acceptance of the updated policy.',
          ],
        },
        {
          heading: '8. Contact',
          body: [
            'For privacy-related questions, please contact us through the App Store page.',
          ],
        },
      ]}
    />
  )
}
