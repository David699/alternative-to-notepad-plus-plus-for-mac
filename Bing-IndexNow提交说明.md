# Bing IndexNow 提交说明

## 结论

Bing Webmaster Tools 中的 **IndexNow** 页面主要用于查看提交记录，不是逐条填写网址的提交表单。

本官网已经配置了 IndexNow 提交脚本，因此发布新页面后，可以直接在官网源码目录通过命令行通知 Bing。DuckDuckGo 的普通网页结果大量来自 Bing，所以这种提交也有助于 DuckDuckGo 更快发现新页面。

## 现有文件

- 提交脚本：`scripts/submit-indexnow.mjs`
- npm 命令：`package.json` 中的 `seo:indexnow`
- IndexNow 验证文件：位于 `public` 目录
- 网站地图：`https://notepad-plus-plus-mac.com/sitemap.xml`

提交脚本会读取验证文件，然后向以下接口发送网址：

```text
https://api.indexnow.org/indexnow
```

## 提交新增或更新的网址

在官网源码目录执行：

```bash
npm run seo:indexnow -- \
  https://notepad-plus-plus-mac.com/en/example-page-1/ \
  https://notepad-plus-plus-mac.com/en/example-page-2/
```

在要求所有命令使用 RTK 的 Codex 环境中执行：

```bash
rtk npm run seo:indexnow -- \
  https://notepad-plus-plus-mac.com/en/example-page-1/ \
  https://notepad-plus-plus-mac.com/en/example-page-2/
```

脚本支持一次传入多个网址。IndexNow 单次可以接收远多于本站现有页面数量的网址，因此本站不需要拆成多批。

如果不传网址，脚本只会提交代码中 `defaultUrls` 定义的几个默认网址，并不会自动读取整个网站地图。

## 2026 年 8 月 4 日的全量提交记录

本次检查得到以下结果：

- 线上网站地图共有 44 个网址。
- 44 个网址均返回 HTTP 200。
- 页面中没有发现 `noindex` 禁止收录标记。
- 先单独提交了 4 篇新文章。
- 随后又提交了网站地图中的全部 44 个网址。
- 两次 IndexNow 请求均返回 `200 OK`。
- Bing 页面显示过去 3 小时收到 48 次提交，来源为 `Self`。

48 次提交不代表有 48 个不同页面。原因是最先提交的 4 篇新文章，也包含在随后提交的 44 个网址中：

```text
4 + 44 = 48 次提交
```

网站地图中实际仍是 44 个不同网址。

## 在 Bing 中确认结果

1. 打开 Bing Webmaster Tools。
2. 选择 `notepad-plus-plus-mac.com`。
3. 点击左侧的 **IndexNow**。
4. 查看“过去 3 小时内提交的 URL”。
5. 在下方列表中核对网址、提交时间和来源。

来源显示为 `Self`，表示网址由本站自己的 IndexNow 配置提交。

`200 OK` 只表示搜索引擎已经收到网址通知，不代表页面已经立即收录。Bing 仍会抓取页面，并根据页面内容和质量决定是否加入索引。

## 后续发布流程

以后发布文章时按以下顺序处理：

1. 编译并部署官网。
2. 确认新网址可以正常访问。
3. 确认网站地图已经包含新网址。
4. 使用 `npm run seo:indexnow -- 新网址` 提交本次新增或修改的页面。
5. 在 Bing Webmaster Tools 的 IndexNow 页面检查提交记录。

不需要每次都重新提交全部 44 个网址，也不要反复提交没有变化的页面。全量提交适合首次补齐记录，后续只提交新增、修改或删除的网址。

## 与 Google 和 DuckDuckGo 的区别

- Google：继续使用 Google Search Console 和网站地图。
- Bing：使用网站地图和 IndexNow。
- DuckDuckGo：没有面向站长的单独网址提交入口；其普通网页结果大量来自 Bing，因此无需再去 DuckDuckGo 单独提交。
