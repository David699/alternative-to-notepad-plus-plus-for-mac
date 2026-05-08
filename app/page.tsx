import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyNotNotepad from '@/components/WhyNotNotepad'
import FeaturesMatrix from '@/components/FeaturesMatrix'
import Automation from '@/components/Automation'
import AISection from '@/components/AISection'
import ChineseTextSection from '@/components/ChineseTextSection'
import Privacy from '@/components/Privacy'
import CloudSync from '@/components/CloudSync'
import Scenarios from '@/components/Scenarios'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import { zh } from '@/lib/i18n'

const SITE_URL = 'https://david699.github.io/notePad----'
const APP_NAME = 'notePad++++'
const APP_DESC = 'Mac 上更顺手的文本处理工作台。多标签编辑、正则搜索、工作区浏览、脚本流水线、批量处理、云同步与 AI 辅助。Notepad++ 在 macOS 上的优秀替代选择，支持中文文本清洗与自动化处理。'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${APP_NAME} — Mac 上的文本处理工作台`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESC,
  keywords: [
    'notePad++', 'Notepad++ Mac', 'Mac 文本编辑器', '文本处理工作台',
    '自动化流水线', 'AI 文本处理', '中文文本清洗', 'macOS 编辑器',
    '多标签编辑', '正则替换', '批量处理', '工作区搜索', 'iCloud 同步', '工作区同步',
    '脚本自动化', 'Mac 记事本', '文本工具',
  ],
  authors: [{ name: 'David699' }],
  creator: 'David699',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: SITE_URL,
    siteName: APP_NAME,
    title: `${APP_NAME} — Mac 上更顺手的文本处理工作台`,
    description: APP_DESC,
    images: [{ url: '/images/og-cover.png', width: 1200, height: 630, alt: `${APP_NAME} — Mac 文本处理工作台` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} — Mac 上更顺手的文本处理工作台`,
    description: APP_DESC,
    images: ['/images/og-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: SITE_URL,
    languages: { 'zh-CN': SITE_URL, en: `${SITE_URL}/en/` },
  },
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: APP_NAME,
            operatingSystem: 'macOS',
            applicationCategory: 'ProductivityApplication',
            applicationSubCategory: 'TextEditor',
            description: APP_DESC,
            url: SITE_URL,
            image: `${SITE_URL}/images/app-icon.png`,
            screenshot: [
              `${SITE_URL}/images/screen-main.png`,
              `${SITE_URL}/images/screen-search.png`,
              `${SITE_URL}/images/screen-scripts.png`,
            ],
            featureList: [
              '多标签文本编辑', '工作区搜索与浏览', '正则查找替换', '列模式编辑',
              'Markdown 预览', 'Diff 差异对比', '脚本自动化', '流水线批量处理',
              '工作区与单文件云同步', 'AI 辅助改写与脚本生成', '中文文本清洗',
            ],
            author: { '@type': 'Person', name: 'David699' },
          }),
        }}
      />
      <Navbar t={zh.nav} locale="zh" />
      <Hero t={zh.hero} />
      <WhyNotNotepad t={zh.whyNotNotepad} />
      <FeaturesMatrix t={zh.featuresMatrix} />
      <Automation t={zh.automation} />
      <AISection t={zh.aiSection} />
      <ChineseTextSection t={zh.textCleaning} />
      <Privacy t={zh.privacy} />
      <CloudSync t={zh.cloudSync} />
      <Scenarios t={zh.scenarios} />
      <Reviews t={zh.reviews} />
      <FAQ t={zh.faq} />
      <CTASection t={zh.cta} />
      <Footer t={zh.footer} />
    </main>
  )
}
