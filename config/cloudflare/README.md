# www 永久跳转配置

`www-to-apex-redirect.json` 保存 Cloudflare 单条跳转规则的配置。保存文件不会启用线上跳转，普通 Pages 构建和上传也不会自动应用它；须在用户批准发布后单独配置。

2026-10-19 经用户批准，已在 Cloudflare 后台启用名称为「www 永久跳转到根域名」的单一重定向，匹配条件、目标表达式、301 状态码和参数保留设置与 JSON 一致。未修改 DNS、证书和其他规则。

## 发布时配置

在 `notepad-plus-plus-mac.com` 域名的 Cloudflare「规则 → 重定向规则」中管理此规则，或通过 Rulesets API 将 JSON 作为一条规则加入区域级 `http_request_dynamic_redirect` 阶段的现有规则集。先按名称或 `ref` 检查已有规则，存在则更新，保留所有无关规则，不能用这个单条 JSON 覆盖整个规则集。本次通过后台界面创建，后续使用 API 时须先定位该规则，不能因未找到本地 `ref` 就重复创建。

- 匹配条件：主机名恰好为 `www.notepad-plus-plus-mac.com`，同时覆盖 HTTP 和 HTTPS。
- 目标地址：`concat("https://notepad-plus-plus-mac.com", http.request.uri.path)`。
- 状态码：301。
- 保留查询参数：开启。
- `www` 主机必须由 Cloudflare 代理，保留现有 DNS 和证书。
- 根域名不匹配此规则，不改变首页语言、不增加语言跳转、不影响 App Store 外部下载链接。

Pages 的 `public/_redirects` 不支持域名级跳转，不能把这条规则写在那里。既有图片迁移规则继续保留。

## 发布后检查

| 输入网址 | 预期 |
| --- | --- |
| `http://www.notepad-plus-plus-mac.com/` | 301 至 `https://notepad-plus-plus-mac.com/` |
| `https://www.notepad-plus-plus-mac.com/en/` | 301 至 `https://notepad-plus-plus-mac.com/en/` |
| `https://www.notepad-plus-plus-mac.com/en/automate-text-files-mac-scripts/?utm_source=youtube` | 301 至同路径根域名，保留 `utm_source=youtube` |
| `https://notepad-plus-plus-mac.com/` | 仍为中文首页，200，无跳转循环 |
| `https://notepad-plus-plus-mac.com/en/` | 仍为英文首页，200 |

`#watch-scripts` 等定位片段由浏览器处理，不会发送给 Cloudflare；目标地址不设置新片段，以保留浏览器正常的片段继承行为。

官方依据：[Pages redirects 的限制](https://developers.cloudflare.com/pages/configuration/redirects/)、[Single Redirects API](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-api/)。
