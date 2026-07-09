# 本地化 SEO 文章深度差异化设计

日期：2026-07-09

## 背景与目标

11 篇新增的本地化 SEO 文章（de/es/fr/it/ja/ko/nl/pl/pt-br/tr/zh-hant 各一篇
`notepad-plus-plus-for-mac.md`）目前是「统一骨架 + 本地化改写」：结构 6 段式同构、
日期全部为 2026-07-09。存在被搜索引擎判定为批量模板页的风险。

目标：

1. **日期差异化**：发布日期回溯分散到 2026-06-12 ～ 2026-07-08，间隔不均匀。
2. **去模板化**：每篇小节结构、开篇角度、篇幅、FAQ 条数、表格有无全部差异化。
3. **深度地域差异化**：每篇写入该市场真实的本地竞品、本地技术痛点、本地搜索用词。

前提确认（已与产品方确认）：app 支持打开/转换传统编码（Shift-JIS、Big5、EUC-KR、
Windows-125x 等），编码能力可以作为卖点写进文章。

## 不改的部分

- 路由、`lib/seo-localized/` 配置、`components/` 渲染层——全部不动。
- 每篇 frontmatter 必填字段（slug、title、shortTitle、description、datePublished、
  dateModified、keywords、heroKicker、heroSummary、faq、related、externalLinks）保持齐全。
- 校验脚本现有约束继续满足：externalLinks 含 `appStore` + `notepadPlusPlus`、
  `englishEquivalentPath: /en/notepad-plus-plus-for-mac/`、正文含 `## ` 标题、
  related 不链接未生成的本地化页面。

## 差异化矩阵（核心交付）

| 语言 | 发布日 / 修改日 | 结构形态 | 本地竞品 / 生态 | 本地技术痛点 | 关键词特色 | 表格 | FAQ |
|---|---|---|---|---|---|---|---|
| de | 06-12 / 06-25 | 工具箱实用主义：任务→工具对照 | UltraEdit、Wine 跑 Notepad++ 的老办法 | 分号分隔 CSV（德区 Excel）、Umlaut 在 Windows-1252 下乱码 | Ersatz / Spaltenmodus / Texteditor | 有（任务→工具维度） | 4 |
| ja | 06-15 / 07-02 | 竞品迁移对照：从熟悉的编辑器出发 | 秀丸エディタ、サクラエディタ（Windows 侧）、mi、CotEditor（Mac 侧） | 文字化け（Shift-JIS）、改行コード CR/LF、全角/半角混在 | テキストエディタ、文字化け 修復、矩形選択 | 有（移行对照） | 5 |
| pt-br | 06-17 / 06-17 | 亲和教程：一步步带着做 | Notepad++ 在巴西的高普及 | 巴西版 Excel 分号 CSV、ç/ã/õ 在 Windows-1252 下乱码 | bloco de notas para mac、editor de texto | 无 | 4 |
| es | 06-20 / 06-20 | How-to 教程式 | — | ¿¡ 与重音在 ISO-8859-1/Windows-1252 下乱码 | **bloc de notas**（西语版 Windows 记事本官方名）系长尾 | 无 | 5 |
| ko | 06-23 / 07-05 | 问答驱动（Naver 知识风格） | EditPlus、AcroEdit（均为韩国本土编辑器） | EUC-KR/CP949 한글 깨짐（乱码） | Naver 风格长尾：맥 메모장、텍스트 편집기 | 无 | 6 |
| fr | 06-26 / 06-26 | 文字排版工作者角度 | Notepad++ 在法语圈的普及 | 分号 CSV、« » 引号与不间断空格、重音大写（É） | éditeur de texte mac、rechercher remplacer regex | 无 | 4 |
| pl | 06-28 / 06-28 | 开发者/管理员日志处理角度 | Notepad++ 在波兰的高普及（波兰开发者社区常用） | ą/ę/ś/ż 在 Windows-1250 下乱码 | edytor tekstu mac、zamiennik notepad++ | 无 | 4 |
| nl | 07-01 / 07-01 | 简明清单式、直接了当（篇幅最短） | Notepad++ 在荷兰职场普及 | 分号 CSV、欧洲键盘符号 | teksteditor mac、notepad++ alternatief | 无 | 3 |
| it | 07-03 / 07-03 | 场景故事：办公室报表/CSV 一天 | — | 分号 CSV、重音字符乱码 | editor di testo mac、alternativa notepad++ | 有（场景→功能） | 4 |
| tr | 07-06 / 07-06 | 痛点驱动开篇 | Notepad++ 在土耳其学生/开发者中的普及 | 土耳其字符 ı/İ/ş/ğ 在 Windows-1254 之外乱码（只写编码层面，**不承诺**土耳其语大小写转换算法） | metin editörü mac、not defteri | 无 | 4 |
| zh-hant | 07-08 / 07-08 | 情怀叙事：从台湾资讯课上的 Notepad++ 讲起 | Notepad++ 在台湾教学/职场的高普及背景 | Big5 乱码（开老档案）、全形/半形标点混排 | 文字編輯器、記事本 Mac、取代 Notepad++ | 无 | 5 |

矩阵约束：

- **结构形态 11 篇互不重复**；小节标题、段落顺序、开篇第一句的句式各写各的。
- 篇幅拉开：最短（nl）约 60–70 行正文，最长（ja/de）约 110–130 行。
- 表格仅 3 篇有（de/ja/it），且表格维度各不相同；其余篇用清单、问答或纯段落。
- heroKicker/heroSummary 每篇角度不同，不做同一句翻译。
- 竞品提及保持客观、尊重，只描述定位差异，不贬低。
- 编码卖点的措辞统一为「打开/转换传统编码文件不乱码」层级，不虚构具体功能名。

## ar 三篇（顺带、仅日期）

ar 的 3 篇也全是 2026-07-09，与 11 篇同天共 14 篇。顺带把 ar 日期错开（内容不动）：

- `notepad-plus-plus-for-mac.md`：06-10 / 06-10
- `text-editor-for-mac.md`：06-18 / 06-18
- `notepad-alternative-mac.md`：06-30 / 07-04

## 校验脚本增量

`scripts/validate-seo-articles.mjs` 新增一条轻量断言：

- 所有本地化 SEO 文章（含 ar）的 `datePublished` 互不重复，防止未来回归到「同天批量发布」。

## 验收标准

1. `node scripts/validate-seo-articles.mjs` 通过（含新断言）。
2. `npx next build` 通过，14 个本地化页面全部生成。
3. 人工抽查：任意两篇的小节标题序列不相同；每篇含矩阵指定的竞品/痛点/关键词。

## 明确不做

- 不改英文文章、不改渲染组件、不改 locales 配置。
- 不为每种语言新增第二篇文章（text-editor-for-mac 等 slug 留待后续）。
- 不引入结构化数据/hreflang 等新功能（另行立项）。
