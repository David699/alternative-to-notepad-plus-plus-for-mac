import SeoArticleRoute, { generateSeoArticleMetadata } from '@/components/SeoArticleRoute'

const slug = 'text-editor-for-mac'

export function generateMetadata() {
  return generateSeoArticleMetadata(slug)
}

export default function TextEditorForMacPage() {
  return <SeoArticleRoute slug={slug} />
}
