# SEO Markdown 写作规范

这个目录是 SEO-only 页面内容源。Markdown 文件在 `npm run build` 阶段被读取，frontmatter 用来生成 SEO 元数据和页面侧栏，正文 Markdown 会转换成静态 HTML，插入统一的 React 页面模板。

最终访问者和搜索引擎看到的是完整 HTML 页面，不是运行时加载的 Markdown。

## 目录和 URL

文件路径按语言分目录：

```txt
content/seo/ja/notepad-plus-plus-for-mac.md
```

对应 URL：

```txt
/ja/notepad-plus-plus-for-mac/
```

对已经配置动态路由的语言来说，新增一篇文章只需要：

1. 在对应语言目录新增 `.md` 文件。
2. 确保 `slug` 和文件名一致。
3. 运行 `npm run test:seo` 和 `npm run build`。

当前已注册的 SEO-only 语言共用 `app/[locale]/[slug]/page.tsx` 动态路由，新增 `content/seo/<locale>/*.md` 不需要再新增路由文件。

新增一个全新语言时，还需要在 `lib/seo-localized/locales.ts` 和 `lib/seo-localized/types.ts` 注册语言配置。只要语言被注册，Markdown 文件会自动进入构建和 sitemap。

## 文件结构

每篇文章由两部分组成：

```md
---
slug: "text-editor-for-mac"
title: "页面 SEO 标题"
description: "页面 meta description"
---

## 正文标题

这里写正文。
```

`---` 中间是 frontmatter，用 YAML 格式。`---` 后面是文章正文，用标准 Markdown。

## 必填字段

```yaml
slug: "text-editor-for-mac"
englishEquivalentPath: "/en/text-editor-for-mac/"
title: "محرر نصوص للماك: خفيف وسريع لمعالجة النصوص اليومية"
shortTitle: "محرر نصوص للماك"
description: "页面 meta description"
datePublished: "2026-07-09"
dateModified: "2026-07-09"
keywords:
  - "关键词 1"
  - "关键词 2"
heroKicker: "Hero 上方的小标题"
heroSummary: "Hero 里的简介"
```

字段用途：

| 字段 | 用途 |
| --- | --- |
| `slug` | 页面 URL 片段，必须和文件名一致 |
| `englishEquivalentPath` | 对应英文页，用于 hreflang；没有对应页时可以省略 |
| `title` | `<title>`、Open Graph title、Article JSON-LD headline |
| `shortTitle` | 页面 H1 |
| `description` | meta description、Open Graph description |
| `datePublished` | Article JSON-LD 发布时间 |
| `dateModified` | Article JSON-LD 更新时间 |
| `keywords` | meta keywords |
| `heroKicker` | Hero 区域上方小标题 |
| `heroSummary` | Hero 区域说明文字 |

每篇文章可以在 frontmatter 中指定自己的 Hero 配图。两个字段必须同时填写，图片必须位于 `public/images/`：

```yaml
heroImage: "/images/seo/example-page.png"
heroImageAlt: "准确描述图片内容的英文替代文字"
```

如果省略这两个字段，页面继续使用默认产品截图。构建前的图片处理会自动为 PNG 或 JPEG 生成 WebP，文章作者仍然只需要维护 Markdown 和原始图片。

## 相关链接

`related` 会显示在页面侧栏的“相关文章”区域。

```yaml
related:
  - label: "Notepad++ للماك"
    href: "/ar/notepad-plus-plus-for-mac/"
  - label: "الصفحة الإنجليزية"
    href: "/en/text-editor-for-mac/"
```

## 外部链接

`externalLinks` 会显示在页面侧栏的“Useful links”区域。`href` 可以写真实 URL，也可以写项目内置 token。

每篇和 Notepad++ 相关的本地化 SEO 页面建议至少包含 App Store 和 Notepad++ 官方网站。这样页面不会只像下载转化页，也能把原始 Windows 项目的来源讲清楚。

```yaml
externalLinks:
  - label: "تحميل notePad++++ من App Store"
    href: "appStore"
    external: true
  - label: "موقع Notepad++ الرسمي"
    href: "notepadPlusPlus"
    external: true
  - label: "مشاهدة المشروع على GitHub"
    href: "github"
    external: true
```

支持的 token：

| token | 实际链接 |
| --- | --- |
| `appStore` | App Store 下载页 |
| `github` | GitHub 仓库 |
| `productHunt` | Product Hunt 页面 |
| `notepadPlusPlus` | Notepad++ 官方网站 |

## FAQ

`faq` 会用于两个地方：

1. 页面下方 FAQ 区块。
2. `FAQPage` JSON-LD 结构化数据。

```yaml
faq:
  - q: "问题？"
    a: "回答。"
  - q: "另一个问题？"
    a: "另一个回答。"
```

## 可选字段

默认每篇 SEO 页面都会显示 App Store 评分组件。如果某篇文章不想显示评分，可以加：

```yaml
showRating: false
```

## 正文 Markdown 写法

正文不要写 `# H1`。页面 H1 已经由 `shortTitle` 生成。

正文从 `##` 开始：

```md
## 第一个正文标题

正文段落。

## 第二个正文标题

- 列表项
- 列表项

## 表格标题

| 列 1 | 列 2 |
| --- | --- |
| 内容 | 内容 |
```

支持：

- 段落
- `##` 和 `###`
- 无序列表
- Markdown 表格
- 普通 Markdown 链接

不建议：

- 写原始 HTML
- 写 `<script>`
- 在正文里写 H1
- 用客户端脚本插入内容

## 多语言和混排

语言方向、按钮文案、评分文案、免责声明、RTL/LTR 都在 `lib/seo-localized/locales.ts` 配置。

例如 Arabic 页面中出现 `Notepad++`、`macOS`、`App Store` 等英文词时，构建阶段会自动包成：

```html
<bdi dir="ltr">Notepad++</bdi>
```

文章作者不需要手动写 `<bdi>`。

## 完整模板

```md
---
slug: "example-page"
englishEquivalentPath: "/en/example-page/"
title: "页面完整 SEO 标题"
shortTitle: "页面 H1 标题"
description: "页面 meta description。"
datePublished: "2026-07-09"
dateModified: "2026-07-09"
keywords:
  - "关键词 1"
  - "关键词 2"
heroKicker: "Hero 小标题"
heroSummary: "Hero 简介。"
related:
  - label: "相关文章"
    href: "/ar/related-page/"
externalLinks:
  - label: "تحميل notePad++++ من App Store"
    href: "appStore"
    external: true
faq:
  - q: "常见问题？"
    a: "问题回答。"
---

## 第一个正文标题

正文第一段。

正文第二段。

## 第二个正文标题

- 要点 1
- 要点 2

## 对比表

| 项目 | 说明 |
| --- | --- |
| A | 说明 A |
| B | 说明 B |
```

## 验证

新增或修改文章后运行：

```bash
npm run test:seo
npm run build
```

`test:seo` 会检查基础 SEO 文件结构。`build` 会真正读取 Markdown、生成静态 HTML，并暴露 frontmatter 或 Markdown 格式错误。
