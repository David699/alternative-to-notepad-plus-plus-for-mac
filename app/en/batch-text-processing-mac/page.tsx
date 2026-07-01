import SeoArticleRoute, { generateSeoArticleMetadata } from '@/components/SeoArticleRoute'

const slug = 'batch-text-processing-mac'

export function generateMetadata() {
  return generateSeoArticleMetadata(slug)
}

export default function BatchTextProcessingMacPage() {
  return <SeoArticleRoute slug={slug} />
}
