# 本地化 SEO 文章深度差异化实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 按差异化矩阵重写 11 篇本地化 SEO 文章（结构/竞品/痛点/关键词/日期全部互不重复），错开 ar 三篇日期，并给校验脚本加日期唯一性断言。

**Architecture:** 纯内容改动 + 一处脚本增量。每篇文章是独立 Markdown 文件（frontmatter + 正文），由 `lib/seo-localized/markdown.ts` 加载、`scripts/validate-seo-articles.mjs` 校验。路由、组件、locale 配置全部不动。

**Tech Stack:** Markdown (gray-matter frontmatter)、Node 校验脚本、Next.js 静态构建。

**Spec:** `docs/superpowers/specs/2026-07-09-localized-seo-differentiation-design.md`（差异化矩阵是唯一事实来源，本计划的每篇简报与矩阵一致）。

## Global Constraints

以下约束适用于每一个文章任务（Task 2–12），不再逐个重复：

1. **frontmatter 必填字段**（缺一个构建即抛错）：`slug`、`englishEquivalentPath`、`title`、`shortTitle`、`description`、`datePublished`、`dateModified`、`keywords`、`heroKicker`、`heroSummary`、`faq`、`related`、`externalLinks`。
2. **固定值**：`slug: notepad-plus-plus-for-mac`；`englishEquivalentPath: /en/notepad-plus-plus-for-mac/`。
3. **externalLinks 三条**（label 用该语言写，href 用 token）：`appStore`、`notepadPlusPlus`、`github`，均 `external: true`。校验脚本强制要求含 `appStore` 和 `notepadPlusPlus`。
4. **related 两条**：英文原文 `/en/notepad-plus-plus-for-mac/` + 本语言首页 `/{locale}/`。**禁止**链接 `/{locale}/text-editor-for-mac/` 等未生成页面（校验脚本会报错）。
5. **正文必须含 `## ` 二级标题**（校验脚本断言）。
6. **正文最后一节固定为商标独立性声明**，内容与 `lib/seo-localized/locales.ts` 中该语言的 `brandDisclaimer` 同义（可措辞自然化），必须包含「非官方、无关联、未授权」三层意思。
7. **编码卖点措辞层级**：只写「打开/转换传统编码文件不乱码」，不虚构具体功能名、菜单名；tr 篇额外禁止承诺土耳其语大小写转换算法。
8. **竞品提及**：只客观描述定位差异（Windows 平台、重量级、本土历史等），不贬低。
9. **产品功能词保留英文原名**：Column Mode、Regex、Script Pipelines、Markdown Preview、Workspace Search、iCloud Sync（与现有各篇一致）。
10. **日期格式**：`datePublished: '2026-MM-DD'`（单引号字符串，与现有文件一致）。
11. 每个任务完成后运行 `node scripts/validate-seo-articles.mjs`，期望输出以 `SEO article validation passed` 开头；然后单独提交，commit message 用中文，结尾加：

    ```
    Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
    Claude-Session: https://claude.ai/code/session_014qSR98q7fZ23GVHffD17G7
    ```
12. **写作语言要求**：正文用该语言母语者的自然表达写作（不是从德语/英语版翻译）；开篇第一句的句式、小节标题、段落节奏必须按本任务简报执行，不得复用其他篇的结构。

---

### Task 1: 错开 ar 三篇日期

**Files:**
- Modify: `content/seo/ar/notepad-plus-plus-for-mac.md`（仅 frontmatter 日期两行）
- Modify: `content/seo/ar/text-editor-for-mac.md`（同上）
- Modify: `content/seo/ar/notepad-alternative-mac.md`（同上）

**Interfaces:**
- Produces: 三篇的 `datePublished` 分别为 `2026-06-10`、`2026-06-18`、`2026-06-30`，供 Task 13 的唯一性断言消费。

- [ ] **Step 1: 修改日期**

| 文件 | datePublished | dateModified |
|---|---|---|
| notepad-plus-plus-for-mac.md | '2026-06-10' | '2026-06-10' |
| text-editor-for-mac.md | '2026-06-18' | '2026-06-18' |
| notepad-alternative-mac.md | '2026-06-30' | '2026-07-04' |

正文与其他 frontmatter 字段一律不动。注意 ar 现有文件日期用双引号 `"2026-07-09"`，改成新值时保持原引号风格。

- [ ] **Step 2: 运行校验**

Run: `node scripts/validate-seo-articles.mjs`
Expected: `SEO article validation passed ...`

- [ ] **Step 3: 提交**

```bash
rtk git add content/seo/ar && rtk git commit -m "错开阿拉伯语三篇 SEO 文章的发布日期

避免全部文章集中在同一天发布的批量痕迹"
```

---

### Task 2: 重写 de（德语）— 工具箱实用主义型

**Files:**
- Modify: `content/seo/de/notepad-plus-plus-for-mac.md`（全文重写）

**frontmatter 指令:**
- `title: Notepad++ Ersatz für den Mac: der Werkzeugkasten für Textarbeit`
- `shortTitle: Notepad++ Ersatz für Mac`
- 日期：`datePublished: '2026-06-12'`，`dateModified: '2026-06-25'`
- keywords（10 个，按此列表）：Notepad++ Ersatz Mac / Notepad++ für Mac / Notepad++ Alternative Mac / Texteditor Mac / Spaltenmodus Mac Editor / Regex Suchen und Ersetzen Mac / CSV Semikolon Mac / Umlaute Kodierung reparieren / UltraEdit Alternative Mac / leichter Texteditor macOS
- `heroKicker`：从「工具箱」角度写（如 Der Werkzeugkasten für den Textalltag）
- `heroSummary`：不写「如果你怀念 Notepad++…」句式（ja 篇已用类似角度），改写成「日常文本任务需要一套顺手的工具，而不是一个 IDE」的立意
- faq 4 条：官方版否认 / Wine 或虚拟机 / 分号 CSV 如何处理 / 旧 Windows-1252 文件的 Umlaut 乱码能否正常打开

**正文小节序列（必须按此顺序与措辞）：**
1. `## Der Werkzeugkasten-Ansatz: was Notepad++-Nutzer wirklich brauchen` — 开篇不谈情怀，直接列日常任务清单（日志、配置、CSV、Markdown）
2. `## UltraEdit, Wine oder nativ? Die üblichen Wege auf dem Mac` — 客观对比三条路：买 UltraEdit（跨平台老牌、商业授权）、Wine/CrossOver 跑 Windows 版 Notepad++（能用但不 native）、选原生轻量编辑器
3. `## Aufgabe für Aufgabe: so deckt notePad++++ den Alltag ab` — **表格**（维度：Aufgabe → Vorgehen in notePad++++，6 行左右，与旧版「搜索意图→帮助」表格维度不同）
4. `## Semikolon-CSV und Umlaute: typische Stolperfallen` — 德区 Excel 导出用分号分隔+逗号小数；老文件 Windows-1252 编码下 ä/ö/ü/ß 乱码，写「打开传统编码不乱码」层级的解决叙述
5. `## Für wen sich der Umstieg lohnt` — 适合谁/不适合谁
6. `## Marke und Unabhängigkeit` — 商标声明

篇幅目标：110–130 行。

- [ ] **Step 1: 按简报全文重写**
- [ ] **Step 2: 运行校验** — `node scripts/validate-seo-articles.mjs` → PASS
- [ ] **Step 3: 提交**

```bash
rtk git add content/seo/de && rtk git commit -m "重写德语 SEO 文章为工具箱角度并加入本地化痛点

- 新增 UltraEdit/Wine 迁移路径对比与分号 CSV、Umlaut 编码痛点
- 发布日期回溯至 2026-06-12"
```

（结尾加 Global Constraints 第 11 条签名；后续任务的提交同理，用多行 message。）

---

### Task 3: 重写 ja（日语）— 竞品迁移对照型

**Files:**
- Modify: `content/seo/ja/notepad-plus-plus-for-mac.md`（全文重写）

**frontmatter 指令:**
- `title: 秀丸・サクラエディタ・Notepad++ からの移行先 | Mac の軽量テキストエディタ`
- `shortTitle: Windows エディタからの Mac 移行`
- 日期：`datePublished: '2026-06-15'`，`dateModified: '2026-07-02'`
- keywords（10 个）：Mac版 Notepad++ / Notepad++ Mac 代替 / 秀丸エディタ Mac / サクラエディタ Mac / 文字化け 直す Mac / Shift-JIS Mac / Mac テキストエディタ / 矩形選択 Mac / 改行コード 変換 Mac / 軽量テキストエディタ Mac
- `heroKicker`：Windows エディタからの移行ガイド 之类
- `heroSummary`：从「秀丸/サクラエディタ/Notepad++ 用户来 Mac 后找不到对应物」切入
- faq 5 条：官方版否认 / 文字化け（Shift-JIS 文件能否打开）/ 改行コード CR/LF / 矩形選択 / Wine 不要

**正文小节序列：**
1. `## 秀丸エディタやサクラエディタから、Macでは何を使う？` — 开篇点名日本本土编辑器，承认它们没有 Mac 版这一事实
2. `## 移行マップ：Windowsの定番エディタとMacの選択肢` — **表格**（维度：Windows でのエディタ → Mac での近い選択肢 → 补足说明；行含 秀丸→notePad++++/mi、サクラエディタ→notePad++++/CotEditor、Notepad++→notePad++++；对 mi/CotEditor 客观描述为免费本土选项）
3. `## 文字化けと改行コード：Windowsファイルを開くときの現実` — Shift-JIS 旧文件乱码、CR/LF 改行差异、全角/半角混排三个痛点，编码层级措辞
4. `## notePad++++ の日常ワークフロー` — 清单式列功能
5. `## よくある移行のつまずき` — 快捷键差异、菜单位置差异等移行注意点（写通用现象，不虚构具体键位）
6. `## 商標と独立性について`

篇幅目标：110–130 行。

- [ ] **Step 1: 按简报全文重写**
- [ ] **Step 2: 运行校验** → PASS
- [ ] **Step 3: 提交** — message 主题「重写日语 SEO 文章为竞品迁移对照型」，正文提及秀丸/サクラエディタ对照表与文字化け痛点、日期回溯

---

### Task 4: 重写 pt-br（巴西葡语）— 亲和教程型

**Files:**
- Modify: `content/seo/pt-br/notepad-plus-plus-for-mac.md`（全文重写）

**frontmatter 指令:**
- `title: Notepad++ no Mac: por onde começar | Editor de texto leve`
- `shortTitle: Notepad++ no Mac: por onde começar`
- 日期：`datePublished: '2026-06-17'`，`dateModified: '2026-06-17'`
- keywords（9 个）：notepad++ para mac / bloco de notas para mac / editor de texto mac / alternativa notepad++ mac / csv ponto e vírgula mac / acentos quebrados arquivo / editor leve macos / localizar e substituir regex mac / editor csv mac
- `heroSummary`：亲和第二人称（você）教程口吻
- faq 4 条：官方版否认 / 巴西 Excel 的分号 CSV / 重音字符乱码（Windows-1252）/ 是否需要 Wine

**正文小节序列：**
1. `## Sentiu falta do Notepad++ no Mac? Comece por aqui` — 直接对话读者
2. `## Seus primeiros dez minutos` — 有序步骤清单（打开多标签→试 Column Mode→试 Regex 替换→开 Markdown Preview），教程式
3. `## CSV com ponto e vírgula e acentos quebrados` — 巴西版 Excel 分号分隔；ç/ã/õ/é 在老编码下乱码，编码层级措辞
4. `## O que muda em relação ao Notepad++ do Windows` — 诚实差异段（无插件生态等）
5. `## Marca e independência`

**无表格**。篇幅目标：80–95 行。

- [ ] **Step 1: 按简报全文重写**
- [ ] **Step 2: 运行校验** → PASS
- [ ] **Step 3: 提交** — 主题「重写巴西葡语 SEO 文章为亲和教程型」

---

### Task 5: 重写 es（西语）— How-to 教程式

**Files:**
- Modify: `content/seo/es/notepad-plus-plus-for-mac.md`（全文重写）

**frontmatter 指令:**
- `title: Del Bloc de notas y Notepad++ al Mac | Editor de texto ligero`
- `shortTitle: Bloc de notas y Notepad++ en Mac`
- 日期：`datePublished: '2026-06-20'`，`dateModified: '2026-06-20'`
- keywords（10 个）：bloc de notas para mac / bloc de notas mac / notepad++ para mac / alternativa notepad++ mac / editor de texto mac / editor de código mac / buscar y reemplazar regex mac / editor csv mac / editor ligero macos / abrir archivos con acentos mal
- 核心关键词策略：**bloc de notas**（西语版 Windows 记事本的官方名称）贯穿标题、首段、FAQ
- faq 5 条：官方版否认 / 与 Bloc de notas 的区别 / ¿ ¡ 与重音乱码 / Regex 支持 / Wine 不需要

**正文小节序列：**
1. `## Del Bloc de notas y Notepad++ al Mac: qué cambia` — 从 Windows 双起点（记事本+Notepad++）讲起
2. `## Cómo resolver las tareas de siempre` — how-to 式小任务清单（限行整理、去重、排序、提取 URL）
3. `## Acentos y archivos antiguos sin sustos` — ¿¡ 与 á/é/í/ó/ú/ñ 在 ISO-8859-1/Windows-1252 旧文件下的乱码，编码层级措辞
4. `## Cuándo elegir notePad++++ y cuándo no` — 诚实边界
5. `## Marca e independencia`

**无表格**。篇幅目标：85–100 行。

- [ ] **Step 1: 按简报全文重写**
- [ ] **Step 2: 运行校验** → PASS
- [ ] **Step 3: 提交** — 主题「重写西语 SEO 文章并主打 bloc de notas 关键词」

---

### Task 6: 重写 ko（韩语）— 问答驱动型

**Files:**
- Modify: `content/seo/ko/notepad-plus-plus-for-mac.md`（全文重写）

**frontmatter 指令:**
- `title: 맥에서 EditPlus·Notepad++ 대신 쓸 만한 텍스트 에디터`
- `shortTitle: 맥 Notepad++ 대체 에디터`
- 日期：`datePublished: '2026-06-23'`，`dateModified: '2026-07-05'`
- keywords（10 个）：맥 메모장 / 맥 텍스트 에디터 / 노트패드++ 맥 / notepad++ mac / EditPlus 맥 / 한글 깨짐 맥 / EUC-KR 변환 / 맥 코드 에디터 / 정규식 찾기 바꾸기 맥 / 가벼운 에디터 맥
- `heroSummary`：问句开场的知识问答口吻（Naver 지식iN 风格）
- faq 6 条：官方版否认 / EditPlus·AcroEdit 有没有 Mac 版 / EUC-KR 한글 깨짐 / 메모장 수준이면 충분한지 / 정규식 / Wine 불필요

**正文小节序列（标题全部用问句）：**
1. `## 맥에는 EditPlus나 AcroEdit 같은 에디터가 없을까?` — 点名韩国本土编辑器（EditPlus 是韩国公司 ES-Computing 出品、AcroEdit 为韩国免费编辑器），承认都是 Windows 专属
2. `## 메모장 대신 뭘 쓰면 되나요?` — 맥 기본 TextEdit 的局限 → 轻量编辑器定位
3. `## EUC-KR로 저장된 옛날 파일, 한글이 깨지는데요?` — CP949/EUC-KR 乱码痛点，编码层级措辞
4. `## 그래서 notePad++++ 로는 뭘 할 수 있나요?` — 功能问答清单
5. `## 상표와 독립성 안내`

**无表格**。篇幅目标：90–105 行。

- [ ] **Step 1: 按简报全文重写**
- [ ] **Step 2: 运行校验** → PASS
- [ ] **Step 3: 提交** — 主题「重写韩语 SEO 文章为问答驱动型」

---

### Task 7: 重写 fr（法语）— 文字排版工作者角度

**Files:**
- Modify: `content/seo/fr/notepad-plus-plus-for-mac.md`（全文重写）

**frontmatter 指令:**
- `title: Alternative à Notepad++ sur Mac pour le travail du texte`
- `shortTitle: Alternative à Notepad++ sur Mac`
- 日期：`datePublished: '2026-06-26'`，`dateModified: '2026-06-26'`
- keywords（10 个）：notepad++ mac / alternative notepad++ mac / éditeur de texte mac / éditeur de code mac / rechercher remplacer regex mac / csv point-virgule mac / guillemets français éditeur / majuscules accentuées / éditeur léger macos / bloc-notes mac
- faq 4 条：官方版否认 / CSV 分号 / « » 与排版字符处理（用 Regex 批量替换的角度写，不虚构自动排版功能）/ Wine 不需要

**正文小节序列：**
1. `## Retrouver ses habitudes de Notepad++ sur Mac` — 提及 Notepad++ 在法语圈的高普及（客观：官方界面有法语翻译、社区活跃）
2. `## Guillemets « français », espaces insécables et majuscules accentuées` — 法语排版三痛点：直引号批量换成 « »（Regex 方案）、不间断空格的查找清理、É/À 大写重音在旧编码下乱码
3. `## CSV au point-virgule et fichiers hérités de Windows` — 法区 Excel 分号 CSV + Windows-1252 旧文件
4. `## Les flux de travail au quotidien` — 功能段
5. `## Marque et indépendance`

**无表格**。篇幅目标：90–105 行。

- [ ] **Step 1: 按简报全文重写**
- [ ] **Step 2: 运行校验** → PASS
- [ ] **Step 3: 提交** — 主题「重写法语 SEO 文章为排版工作者角度」

---

### Task 8: 重写 pl（波兰语）— 开发者/管理员角度

**Files:**
- Modify: `content/seo/pl/notepad-plus-plus-for-mac.md`（全文重写）

**frontmatter 指令:**
- `title: Zamiennik Notepad++ na Maca dla programistów i adminów`
- `shortTitle: Zamiennik Notepad++ na Maca`
- 日期：`datePublished: '2026-06-28'`，`dateModified: '2026-06-28'`
- keywords（9 个）：notepad++ mac / zamiennik notepad++ mac / edytor tekstu mac / edytor kodu mac / polskie znaki krzaczki / windows-1250 mac / szukaj i zamień regex mac / edytor logów mac / lekki edytor macos
- faq 4 条：官方版否认 / 波兰字符乱码（krzaczki）/ 日志与大文件场景 / Wine 不需要

**正文小节序列：**
1. `## Notepad++ był wszędzie. A co na Macu?` — 从 Notepad++ 在波兰开发者/管理员环境的普及讲起
2. `## Logi, konfiguracje i zrzuty z produkcji` — 管理员日常：日志过滤、配置对比、生产导出清理，对应 Workspace Search / Regex / Script Pipelines
3. `## Polskie znaki bez krzaczków` — ą/ę/ś/ż/ł 在 Windows-1250/ISO-8859-2 旧文件下乱码（krzaczki 是波兰语对乱码的俗称，正文要用这个词），编码层级措辞
4. `## Czego można oczekiwać po notePad++++` — 功能与边界
5. `## Znak towarowy i niezależność`

**无表格**。篇幅目标：85–100 行。

- [ ] **Step 1: 按简报全文重写**
- [ ] **Step 2: 运行校验** → PASS
- [ ] **Step 3: 提交** — 主题「重写波兰语 SEO 文章为开发者与管理员角度」

---

### Task 9: 重写 nl（荷兰语）— 简明清单型（全站最短）

**Files:**
- Modify: `content/seo/nl/notepad-plus-plus-for-mac.md`（全文重写）

**frontmatter 指令:**
- `title: Notepad++ op de Mac: de korte versie`
- `shortTitle: Notepad++ op de Mac`
- 日期：`datePublished: '2026-07-01'`，`dateModified: '2026-07-01'`
- keywords（8 个）：notepad++ mac / notepad++ alternatief mac / teksteditor mac / kladblok mac / code editor mac / puntkomma csv mac / zoeken en vervangen regex mac / lichte teksteditor macos
- `heroSummary`：一句话直给，不铺垫
- faq 3 条：官方版否认 / 分号 CSV / Wine 不需要

**正文小节序列（直接了当、无长段落）：**
1. `## De korte versie` — 三四句话说清是什么、不是什么
2. `## Wat je er in de praktijk mee doet` — 纯清单（bullet），每条一行
3. `## Puntkomma-CSV's en rare tekens` — 荷区 Excel 分号 CSV + 旧编码字符乱码，两段收尾
4. `## Merk en onafhankelijkheid`

**无表格**。篇幅目标：55–70 行（全站最短，体现篇幅差异化）。

- [ ] **Step 1: 按简报全文重写**
- [ ] **Step 2: 运行校验** → PASS
- [ ] **Step 3: 提交** — 主题「重写荷兰语 SEO 文章为简明清单型」

---

### Task 10: 重写 it（意大利语）— 场景故事型

**Files:**
- Modify: `content/seo/it/notepad-plus-plus-for-mac.md`（全文重写）

**frontmatter 指令:**
- `title: Alternativa a Notepad++ su Mac per report, CSV e testi`
- `shortTitle: Alternativa a Notepad++ su Mac`
- 日期：`datePublished: '2026-07-03'`，`dateModified: '2026-07-03'`
- keywords（9 个）：notepad++ mac / alternativa notepad++ mac / editor di testo mac / editor di codice mac / csv punto e virgola mac / caratteri accentati file / trova e sostituisci regex mac / editor leggero macos / blocco note mac
- faq 4 条：官方版否认 / 分号 CSV / 重音字符乱码 / Wine 不需要

**正文小节序列：**
1. `## Una giornata tra report, CSV ed export gestionali` — 场景叙事开篇：办公室里从管理系统导出的 CSV、报表片段、要清理的文本（用第三人称场景，不用第二人称教程口吻——与 pt-br 区分）
2. `## Dal problema allo strumento` — **表格**（维度：Scenario concreto → Come lo risolvi，5 行左右；与 de 的「任务→做法」、ja 的「编辑器→对应物」维度均不同）
3. `## Accenti e file di dieci anni fa` — è/à/ò 等在旧编码下乱码，编码层级措辞
4. `## Perché non aprire ogni volta un IDE` — 轻量定位
5. `## Marchio e indipendenza`

篇幅目标：90–105 行。

- [ ] **Step 1: 按简报全文重写**
- [ ] **Step 2: 运行校验** → PASS
- [ ] **Step 3: 提交** — 主题「重写意大利语 SEO 文章为场景故事型」

---

### Task 11: 重写 tr（土耳其语）— 痛点驱动型

**Files:**
- Modify: `content/seo/tr/notepad-plus-plus-for-mac.md`（全文重写）

**frontmatter 指令:**
- `title: Mac'te Notepad++ alternatifi: bozuk Türkçe karakterlere son`
- `shortTitle: Mac'te Notepad++ alternatifi`
- 日期：`datePublished: '2026-07-06'`，`dateModified: '2026-07-06'`
- keywords（9 个）：notepad++ mac / notepad++ mac alternatifi / metin editörü mac / not defteri mac / türkçe karakter bozuk / windows-1254 mac / kod editörü mac / regex bul değiştir mac / hafif metin editörü macos
- faq 4 条：官方版否认 / 土耳其字符乱码 / 不承诺大小写转换（如果被问 ı/İ 转换，答案限定在「按原样正确显示与保存」）/ Wine 不需要
- **红线**：编码层面只写「用 Windows-1254 等旧编码保存的文件里 ı/İ/ş/ğ/ç/ö/ü 能正确打开显示」；**禁止**任何关于土耳其语大小写转换（ı↔I、i↔İ）算法的承诺

**正文小节序列：**
1. `## Dosyayı açtınız, Türkçe karakterler bozuk mu görünüyor?` — 痛点开场：老文件打开满屏乱码的场景
2. `## Windows'tan Mac'e geçen Notepad++ kullanıcısının gerçek listesi` — 迁移用户的真实需求清单（Notepad++ 在土耳其学生/开发者中普及度高，客观一句带过）
3. `## notePad++++ ile günlük metin işleri` — 功能段
4. `## Kimler için uygun, kimler için değil` — 诚实边界
5. `## Marka ve bağımsızlık`

**无表格**。篇幅目标：80–95 行。

- [ ] **Step 1: 按简报全文重写**
- [ ] **Step 2: 运行校验** → PASS
- [ ] **Step 3: 提交** — 主题「重写土耳其语 SEO 文章为痛点驱动型」

---

### Task 12: 重写 zh-hant（繁体中文）— 情怀叙事型

**Files:**
- Modify: `content/seo/zh-hant/notepad-plus-plus-for-mac.md`（全文重写）

**frontmatter 指令:**
- `title: 從 Notepad++ 到 Mac：找回熟悉的文字編輯器`
- `shortTitle: Notepad++ 的 Mac 替代方案`
- 日期：`datePublished: '2026-07-08'`，`dateModified: '2026-07-08'`
- keywords（10 个）：notepad++ mac / 取代 notepad++ / 文字編輯器 mac / 記事本 mac / notepad++ 替代 / big5 亂碼 / 純文字編輯器 mac / 正規表示式 取代 mac / 直欄編輯 mac / 輕量編輯器 mac
- 用词规范：台湾惯用词——「正規表示式」（不用「正则表达式」）、「直欄/欄位編輯」、「檔案」、「軟體」、「程式」；标点用全形
- faq 5 条：官方版否认 / Big5 舊檔亂碼 / 全形半形整理 / 正規表示式 / 不需要 Wine

**正文小节序列：**
1. `## 從資訊課教室裡的 Notepad++ 說起` — 情怀叙事：Notepad++ 在台湾教学环境与职场的普及（资讯课、公司标配），客观陈述
2. `## 換到 Mac 之後，那些習慣去哪裡了` — 逐个对应：分頁、直欄編輯、搜尋取代
3. `## 十年前的 Big5 舊檔，打開還是亂碼嗎？` — Big5/CP950 旧档乱码痛点，编码层级措辞
4. `## 全形半形與標點的日常整理` — 全形/半形混排、中英文夹杂空格整理（用 Regex 方案叙述，不虚构专用功能）
5. `## notePad++++ 適合誰` — 定位与边界
6. `## 商標與獨立性聲明`

**无表格**。篇幅目标：95–110 行。

- [ ] **Step 1: 按简报全文重写**
- [ ] **Step 2: 运行校验** → PASS
- [ ] **Step 3: 提交** — 主题「重写繁体中文 SEO 文章为情怀叙事型」

---

### Task 13: 校验脚本加日期唯一性断言 + 最终验收

**Files:**
- Modify: `scripts/validate-seo-articles.mjs`（在现有 localized locales 校验循环之后追加）

**Interfaces:**
- Consumes: Task 1–12 产出的 14 篇文章日期（互不重复）。

- [ ] **Step 1: 添加断言**

在 `scripts/validate-seo-articles.mjs` 中，紧跟现有 `for (const locale of requiredNotepadForMacLocalizedLocales) {...}` 循环之后添加（`requiredLocalizedSeoLocales`、`markdownSlugs`、`markdownArticle`、`assert` 均已在该文件中定义）：

```js
const localizedPublishedDates = new Map()
for (const locale of requiredLocalizedSeoLocales) {
  for (const slug of markdownSlugs(`content/seo/${locale}`)) {
    const { data } = markdownArticle(`content/seo/${locale}/${slug}.md`)
    const existing = localizedPublishedDates.get(data.datePublished)
    assert(
      !existing,
      `content/seo/${locale}/${slug}.md shares datePublished ${data.datePublished} with ${existing}`,
    )
    localizedPublishedDates.set(data.datePublished, `content/seo/${locale}/${slug}.md`)
  }
}
```

- [ ] **Step 2: 验证断言能抓到重复（test-the-test）**

临时把 `content/seo/nl/notepad-plus-plus-for-mac.md` 的 `datePublished` 改成 `'2026-06-12'`（与 de 重复），运行：

Run: `node scripts/validate-seo-articles.mjs`
Expected: FAIL，报错含 `shares datePublished 2026-06-12`

然后把 nl 的日期改回 `'2026-07-01'`。

- [ ] **Step 3: 全量校验**

Run: `node scripts/validate-seo-articles.mjs`
Expected: `SEO article validation passed for ... 11 localized Notepad++ pages.`

- [ ] **Step 4: 构建验收**

Run: `rtk next build`
Expected: 构建成功，输出含 14 个本地化文章路由（`/ar/*` 3 个 + 11 个 `/{locale}/notepad-plus-plus-for-mac`）

- [ ] **Step 5: 去同构抽查**

Run: `for d in de es fr it ja ko nl pl pt-br tr zh-hant; do echo "== $d =="; grep '^## ' content/seo/$d/notepad-plus-plus-for-mac.md; done`
Expected: 11 组小节标题序列两两不同；nl 组最短。

- [ ] **Step 6: 提交**

```bash
rtk git add scripts/validate-seo-articles.mjs && rtk git commit -m "校验脚本新增本地化文章发布日期唯一性断言

防止未来回归到同一天批量发布的模板痕迹"
```

---

## 执行顺序说明

Task 2–12 相互独立，可任意顺序执行；Task 13 必须最后（依赖全部日期就位）。断言放在最后而非最先，是为了让每个中间提交的校验脚本都保持通过（避免 Task 2–12 期间脚本处于红灯状态）。
