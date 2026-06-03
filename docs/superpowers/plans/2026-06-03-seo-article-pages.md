# SEO Article Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add high-intent English SEO article pages for notePad++++ without claiming features the app does not actually have.

**Architecture:** Keep article content in `lib/seo-articles.ts`, render it through a reusable `components/SeoArticlePage.tsx`, expose one static route per article under `/en/`, and feed the same data into sitemap generation and footer/internal navigation. A validation script checks the routes, sitemap source, article data, and important links.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, static export, Node validation script.

---

### Task 1: Validation Script

**Files:**
- Create: `scripts/validate-seo-articles.mjs`
- Modify: `package.json`

- [ ] Add a Node script that fails until the planned SEO article files, routes, sitemap integration, and footer guide links exist.
- [ ] Add `npm run test:seo`.
- [ ] Run `npm run test:seo` and confirm it fails before implementation.

### Task 2: Article Data And Renderer

**Files:**
- Create: `lib/seo-articles.ts`
- Create: `components/SeoArticlePage.tsx`
- Modify: `lib/paths.ts`

- [ ] Define three articles: `notepad-plus-plus-for-mac`, `notepad-plus-plus-alternatives-for-mac`, and `column-mode-editor-for-mac`.
- [ ] Include only verified product capabilities: multi-tab editing, column mode, regex find/replace, workspace search, Markdown preview, diff preview, script pipelines, batch processing, rollback, iCloud sync, and user-configured AI.
- [ ] Add external link constants for App Store, GitHub repository, and the official Notepad++ website.
- [ ] Render article sections, comparison tables, FAQ, related links, and download CTA.

### Task 3: Static Routes And Metadata

**Files:**
- Create: `app/en/notepad-plus-plus-for-mac/page.tsx`
- Create: `app/en/notepad-plus-plus-alternatives-for-mac/page.tsx`
- Create: `app/en/column-mode-editor-for-mac/page.tsx`

- [ ] Add per-page metadata with canonical URLs, descriptions, Open Graph, Twitter, and `Article` JSON-LD.
- [ ] Render each article with the shared component.

### Task 4: Sitemap And Internal/External Links

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `components/Footer.tsx`
- Modify: `lib/i18n/en.ts`
- Modify: `lib/i18n/zh.ts`
- Modify: `lib/i18n/multilingual.ts`

- [ ] Include article URLs in sitemap.
- [ ] Add guide links to the footer.
- [ ] Add GitHub repository external link to the footer.

### Task 5: Verification

**Commands:**
- `npm run test:seo`
- `npm run build`

- [ ] Confirm SEO validation passes.
- [ ] Confirm static build passes.
- [ ] Start a local dev server and provide the preview URL.
