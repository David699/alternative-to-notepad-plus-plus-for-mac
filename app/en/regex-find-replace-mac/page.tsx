import SeoArticleRoute, { generateSeoArticleMetadata } from '@/components/SeoArticleRoute'

const slug = 'regex-find-replace-mac'

export function generateMetadata() {
  return generateSeoArticleMetadata(slug)
}

export default function RegexFindReplaceMacPage() {
  return <SeoArticleRoute slug={slug} />
}
