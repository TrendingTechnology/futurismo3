---
title: markdownlintをつかって、Markdownファイルの構文チェックを行う
description: markdownlintをつかって、Markdownファイルの構文チェックを行います
date: 2018-08-06 12:14:18
---

ひとつ前の記事で、textlintというツールを紹介しました。

- [作文界のゲームチェンジャー！ 日本語の文章校正ツールのtextlintを試した](https://futurismo.biz/use-textlint-for-markdown/)
  
今回は、Markdownの構文をチェックする、Markdownlintを紹介します。

## Markdownlint

Markdownlintとは、Markdownの構文をチェックするツール。

- https://github.com/igorshubovych/markdownlint-cli

インストールは次のようにする。

```bash
yarn add markdownlint-cli
```

ルールを除外するには、設定ファイル`.markdonlintrc.json`に書き込む。

```json
{
  "MD002": false,
  "MD034": false
}
```

次のようにして使う。

```bash
./node_modules/markdownlint-cli/markdownlint.js -c .markdownlintrc.json filename.md
```

## Visual Studio Code plugin

例によって、vscodeのプラグインがある。

- [markdownlint \- Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
