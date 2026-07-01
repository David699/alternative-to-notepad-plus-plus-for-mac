import SeoArticleRoute, { generateSeoArticleMetadata } from '@/components/SeoArticleRoute'

const slug = 'plain-text-editor-for-mac'

export function generateMetadata() {
  return generateSeoArticleMetadata(slug)
}

export default function PlainTextEditorForMacPage() {
  return <SeoArticleRoute slug={slug} />
}
