import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

const SITE_URL = 'https://david699.github.io/notePad----'

export const metadata: Metadata = {
  title: '隐私政策',
  description: 'notePad++++ 隐私政策 — 了解我们如何处理您的数据',
  alternates: {
    canonical: `${SITE_URL}/privacy/`,
    languages: { 'zh-CN': `${SITE_URL}/privacy/`, en: `${SITE_URL}/en/privacy/` },
  },
  robots: { index: true, follow: true },
}

export default function PrivacyZh() {
  return (
    <LegalPage
      title="隐私政策"
      subtitle="本政策说明 notePad++++ 在您使用本应用期间如何收集、使用和保护数据。"
      lastUpdated="最后更新：2026 年 5 月"
      backLabel="返回首页"
      backHref="/"
      homeHref="/"
      sections={[
        {
          heading: '1. 我们收集的数据',
          body: [
            'notePad++++ 仅收集匿名或伪匿名的基础使用统计信息，用于了解应用的整体使用情况并持续改进产品。收集的内容包括：',
            '· 系统信息：macOS 版本、CPU 架构（arm64 / x86_64）、硬件型号标识、是否运行于 Rosetta',
            '· 应用信息：应用版本号、构建编号、首次安装以来的天数（分桶处理，如"1–7 天"）',
            '· 语言与地区设置',
            '· 基础使用事件：例如"打开工作区"、"执行批处理"、"测试 AI 连接"及其是否成功',
            '我们不会收集您的文件内容、编辑文本、文件名、姓名、邮箱地址或任何可直接识别您身份的个人信息。',
          ],
        },
        {
          heading: '2. 统计数据的标识符',
          body: [
            '为了区分不同设备的统计计数，应用在本地生成一个随机客户端 ID，存储在您的 Mac 的 UserDefaults（本地磁盘）中。该 ID 不与任何账户或真实身份关联，仅用于匿名区分设备。',
            '统计数据通过 Google Analytics Measurement Protocol 发送至 Google Analytics，由 Google 的隐私政策约束（analytics.google.com）。我们不会将统计数据出售或共享给其他第三方。',
          ],
        },
        {
          heading: '3. 关闭统计功能',
          body: [
            '统计功能默认开启，您可以随时在应用的“设置”中将其关闭。关闭后，应用不再发送任何使用统计数据。',
          ],
        },
        {
          heading: '4. AI 功能与文本数据',
          body: [
            '只有当您主动调用 AI 功能时，应用才会将您选中或当前文件的文本发送给您配置的第三方 AI 服务提供商（如 OpenAI、Anthropic 等）。',
            '您的 API Key 仅保存在本 Mac 的系统钥匙串（Keychain）中，不会上传至我们的服务器。AI 服务的 Base URL 和模型配置存储在本地 UserDefaults 中。',
            '我们不收集、不存储、不分析您发送给 AI 的任何文本内容。AI 服务商如何处理您的文本，请参阅其各自的隐私政策。',
          ],
        },
        {
          heading: '5. 数据存储与安全',
          body: [
            '所有用户数据（文件内容、书签权限、插件、AI Key）均仅存储在您的本地 Mac 上，不会上传到我们的服务器。应用遵守 macOS App Sandbox 规范，文件访问受到系统级沙箱限制。',
          ],
        },
        {
          heading: '6. 儿童隐私',
          body: [
            '本应用不面向 13 岁以下儿童，也不会有意收集儿童的个人信息。',
          ],
        },
        {
          heading: '7. 政策变更',
          body: [
            '如本政策发生重大变更，我们将通过应用更新日志或 App Store 描述页进行公告。继续使用应用即表示您同意更新后的政策。',
          ],
        },
        {
          heading: '8. 联系我们',
          body: [
            '如有任何关于隐私的疑问，欢迎通过 App Store 页面反馈与我们联系。',
          ],
        },
      ]}
    />
  )
}
