import SeoArticleRoute, { generateSeoArticleMetadata } from '@/components/SeoArticleRoute'

const slug = 'notepad-for-mac'

export function generateMetadata() {
  return generateSeoArticleMetadata(slug)
}

export default function NotepadForMacPage() {
  return <SeoArticleRoute slug={slug} />
}
