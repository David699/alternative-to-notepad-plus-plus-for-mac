import SeoArticleRoute, { generateSeoArticleMetadata } from '@/components/SeoArticleRoute'

const slug = 'how-i-built-a-notepad-plus-plus-style-editor-for-macos'

export function generateMetadata() {
  return generateSeoArticleMetadata(slug)
}

export default function HowIBuiltNotepadPlusPlusStyleEditorForMacosPage() {
  return <SeoArticleRoute slug={slug} />
}
