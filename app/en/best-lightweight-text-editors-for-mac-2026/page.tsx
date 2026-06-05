import SeoArticleRoute, { generateSeoArticleMetadata } from '@/components/SeoArticleRoute'

const slug = 'best-lightweight-text-editors-for-mac-2026'

export function generateMetadata() {
  return generateSeoArticleMetadata(slug)
}

export default function BestLightweightTextEditorsForMac2026Page() {
  return <SeoArticleRoute slug={slug} />
}
