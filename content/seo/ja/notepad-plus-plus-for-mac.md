---
slug: notepad-plus-plus-for-mac
englishEquivalentPath: /en/notepad-plus-plus-for-mac/
title: 秀丸・サクラエディタ・Notepad++ からの移行先 | Mac の軽量テキストエディタ
shortTitle: Windows エディタからの Mac 移行
description: >-
  秀丸エディタ、サクラエディタ、Notepad++ に慣れた人のための Mac 移行ガイド。文字化けしがちな Shift-JIS
  ファイル、改行コード、矩形選択まで、Windows 時代の作業を macOS でどう続けるかを整理します。
datePublished: '2026-06-15'
dateModified: '2026-07-02'
keywords:
  - Mac版 Notepad++
  - Notepad++ Mac 代替
  - 秀丸エディタ Mac
  - サクラエディタ Mac
  - 文字化け 直す Mac
  - Shift-JIS Mac
  - Mac テキストエディタ
  - 矩形選択 Mac
  - 改行コード 変換 Mac
  - 軽量テキストエディタ Mac
heroKicker: Windows エディタからの移行ガイド
heroSummary: >-
  秀丸エディタもサクラエディタも Notepad++ も、Mac には来てくれません。それでも、タブ編集・矩形選択・正規表現置換という「いつもの手つき」まで
  手放す必要はありません。{{APP_NAME}} は、そうした Windows 定番エディタの日常作業を macOS
  でネイティブに続けるための、独立したテキストエディタです。
related:
  - label: 英語版 Notepad++ for Mac ページ
    href: /en/notepad-plus-plus-for-mac/
  - label: "{{APP_NAME}} 日本語ホーム"
    href: /ja/
  - label: サクラエディタは Mac で使える？機能の対応表
    href: /ja/sakura-editor-for-mac/
externalLinks:
  - label: "{{APP_NAME}} を App Store で入手"
    href: appStore
    external: true
  - label: Notepad++ 公式サイトを見る
    href: notepadPlusPlus
    external: true
  - label: サイトプロジェクトを GitHub で見る
    href: github
    external: true
faq:
  - q: "{{APP_NAME}} は公式の Notepad++ Mac版ですか？"
    a: いいえ。{{APP_NAME}} は独立したmacOS向けテキストエディタで、公式Notepad++プロジェクトとは関係ありません。
  - q: Shift-JIS のファイルを開くと文字化けしませんか？
    a: Shift-JIS など従来の文字コードで保存されたファイルも正しく開けるため、Windows 時代の古いテキストやログを化けずに読めます。
  - q: 改行コードが CR/LF のファイルはどうなりますか？
    a: Windows 由来の CR/LF 改行のファイルもそのまま扱えます。Mac 側のファイルと混在しても編集に支障はありません。
  - q: 矩形選択（列編集）はできますか？
    a: はい。Column Mode で、ログや CSV のように縦にそろったテキストをまとめて編集できます。
  - q: Wine や仮想マシンは必要ですか？
    a: 不要です。{{APP_NAME}} は macOS ネイティブのアプリで、Windows 互換レイヤーなしで動作します。
---
## 秀丸エディタやサクラエディタから、Macでは何を使う？

Windows で長くテキストを触ってきた人の手元には、たいてい決まったエディタがあります。秀丸エディタ、サクラエディタ、そして Notepad++。どれも会社の PC に当たり前のように入っていて、ログを開く、設定ファイルを直す、CSV を整える、といった作業を一手に引き受けてきました。

問題は、この三つのどれにも Mac 版がないことです。Mac へ移った初日に「あの作業、何でやればいいのか」と手が止まる。この記事は、その一点に絞った移行ガイドです。

## 移行マップ：Windowsの定番エディタとMacの選択肢

| Windows でのエディタ | Mac での近い選択肢 | 補足 |
| --- | --- | --- |
| 秀丸エディタ | {{APP_NAME}} / mi | mi は日本製の無料エディタで縦書きなど独自機能あり。タブ・正規表現・矩形選択の日常作業を軽くこなす用途なら {{APP_NAME}} が近い |
| サクラエディタ | {{APP_NAME}} / CotEditor | CotEditor は macOS 標準的な作法の無料エディタ。定型処理をパイプライン化したい場合は {{APP_NAME}} |
| Notepad++ | {{APP_NAME}} | タブ、Column Mode、Regex 置換、フォルダ検索という中心機能の考え方が近い |

mi も CotEditor も実績のある無料の選択肢で、まず試す価値があります。そのうえで {{APP_NAME}} が向くのは、「開いて直すだけ」から一歩進んで、同じ整形作業を繰り返し実行したい人です。Script Pipelines で空行削除・重複削除・並べ替え・抽出を組み合わせ、適用前に差分を確認してから反映できます。

## 文字化けと改行コード：Windowsファイルを開くときの現実

Windows 時代のファイルを Mac に持ち込むと、三つの現実に突き当たります。

**一つ目は文字化けです。** 古いテキストやログの多くは Shift-JIS で保存されています。UTF-8 前提のツールで開くと日本語が崩れて読めません。{{APP_NAME}} は Shift-JIS など従来の文字コードのファイルを正しく開けるため、十年前のメモも化けずに読めます。

**二つ目は改行コードです。** Windows のファイルは CR/LF、Mac 側は LF が基本です。両方が混ざったフォルダでも、{{APP_NAME}} はどちらの改行のファイルもそのまま扱えます。

**三つ目は全角と半角の混在です。** 全角スペースと半角スペース、全角英数と半角英数が入り混じったテキストは、見た目では区別がつきにくいもの。正規表現の検索・置換を使えば、全角スペースだけを狙って可視化・統一するような整理ができます。

## {{APP_NAME}} の日常ワークフロー

- タブで複数ファイルを開き、軽いウィンドウ内で行き来する
- Column Mode でログや CSV の縦方向をまとめて編集する
- Regex 検索・置換でパターン化された修正を一括処理する
- Workspace Search でフォルダ全体から該当行を探す
- Markdown Preview で下書きやドキュメントを確認する
- Script Pipelines と Batch Processing で、差分を見てから定型処理を反映する

## よくある移行のつまずき

最初のつまずきは、たいてい機能ではなく手癖です。Windows と macOS ではショートカットの体系（Ctrl と Cmd）が違うため、慣れた指の動きが最初の数日は空振りします。また、メニューの分類も OS の流儀に沿って異なるため、「あの機能はどこ」と探す時間が発生します。これはどの Mac エディタへ移っても通る道で、逆に言えば数日で越えられる山です。

もう一つは、Notepad++ のプラグインで実現していた処理の置き換えです。すべてに一対一の対応があるわけではないので、自分が本当に使っていた処理を書き出し、Script Pipelines や Regex 置換で再現できるかを移行前に確認しておくと、乗り換え後の落差が小さくなります。

## 商標と独立性について

Notepad++ はそれぞれの権利者に帰属する商標です。秀丸エディタ、サクラエディタ、mi、CotEditor もそれぞれの開発元に帰属します。{{APP_NAME}} は独立したmacOS向けテキストエディタであり、これらのプロジェクトと提携、承認、関連しているものではありません。
