import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

const SITE_URL = 'https://david699.github.io/notePad----'

export const metadata: Metadata = {
  title: '服务条款',
  description: 'notePad++++ 服务条款 — 使用本应用前请阅读以下条款',
  alternates: {
    canonical: `${SITE_URL}/terms/`,
    languages: { 'zh-CN': `${SITE_URL}/terms/`, en: `${SITE_URL}/en/terms/` },
  },
  robots: { index: true, follow: true },
}

export default function TermsZh() {
  return (
    <LegalPage
      title="服务条款"
      subtitle="在使用 notePad++++ 之前，请仔细阅读以下条款。下载或使用本应用即表示您同意本条款。"
      lastUpdated="最后更新：2026 年 5 月"
      backLabel="返回首页"
      backHref="/"
      homeHref="/"
      sections={[
        {
          heading: '1. 许可',
          body: [
            'notePad++++ 通过 Apple App Store 分发，适用于 macOS 13 及以上版本。我们授予您个人、非独占、不可转让的许可，在您拥有或控制的 Mac 设备上安装和使用本应用。',
          ],
        },
        {
          heading: '2. 免费功能与付费功能',
          body: [
            '应用的基础功能免费提供。部分高级功能（如无限脚本、Pro 工作区等）可能需要应用内购买或订阅，具体以应用内标注为准。',
            '所有购买均通过 Apple App Store 完成，受 Apple 的退款政策约束。',
          ],
        },
        {
          heading: '3. AI 功能',
          body: [
            'AI 功能需要您自行提供第三方 AI 服务商（如 OpenAI）的 API Key，并遵守该服务商的使用条款。使用 AI 功能产生的费用由您与 AI 服务商之间直接结算，与 notePad++++ 无关。',
          ],
        },
        {
          heading: '4. 禁止行为',
          body: [
            '您不得：对本应用进行逆向工程、反编译或破解；通过自动化手段滥用或攻击本应用的相关服务；将本应用用于任何违法用途或侵害他人权益的活动。',
          ],
        },
        {
          heading: '5. 免责声明',
          body: [
            '本应用按"现状"提供，不附任何形式的明示或暗示保证。我们不保证应用永远无错误或不间断运行。',
            '在法律允许的最大范围内，我们不对因使用或无法使用本应用而导致的任何直接、间接或附带损失承担责任。',
          ],
        },
        {
          heading: '6. 第三方服务',
          body: [
            '本应用可能与第三方服务（如 OpenAI API、Google Analytics）交互。我们不对这些第三方服务的可用性、准确性或隐私实践负责，请参阅各服务商的条款与政策。',
          ],
        },
        {
          heading: '7. 知识产权',
          body: [
            'notePad++++ 的名称、图标、界面设计及代码归开发者所有。macOS 是 Apple Inc. 的注册商标。Notepad++ 是 Don Ho 的开源项目，notePad++++ 与其无从属关系。',
          ],
        },
        {
          heading: '8. 条款变更',
          body: [
            '我们保留随时更新本条款的权利。重大变更将通过应用更新日志或 App Store 描述页公告。继续使用应用即视为接受最新条款。',
          ],
        },
        {
          heading: '9. 联系我们',
          body: [
            '如对本条款有任何疑问，请通过 App Store 页面反馈与我们联系。',
          ],
        },
      ]}
    />
  )
}
