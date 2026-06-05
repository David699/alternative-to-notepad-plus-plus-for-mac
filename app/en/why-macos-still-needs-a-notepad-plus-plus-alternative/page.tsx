import SeoArticleRoute, { generateSeoArticleMetadata } from '@/components/SeoArticleRoute'

const slug = 'why-macos-still-needs-a-notepad-plus-plus-alternative'

export function generateMetadata() {
  return generateSeoArticleMetadata(slug)
}

export default function WhyMacosStillNeedsNotepadPlusPlusAlternativePage() {
  return <SeoArticleRoute slug={slug} />
}
