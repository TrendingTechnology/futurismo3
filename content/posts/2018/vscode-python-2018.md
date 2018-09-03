---
title: Visual Studio Code(vscode)でPython開発環境構築(2018)
description: Visual Studio Code(vscode)でPython開発環境を構築しました。導入したプラグインの紹介です。
date: 2018-09-04 07:18:21
author: tsu-nera
type: post
tags:
- vscode
- Python
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1536016302/futurismo/thumbnails/vscode-logo.jpg
---

## はじめに

Visual Studio Code(vscode)における Python の開発環境を構築したメモです。

Python 開発環境というと**PyCharm が最強**ですが、最近 JavaScript を書き始めて、
vscode がいたく気に入ってしまいました。

そこで、現在取り組んでいる Python のサイドプロジェクトを vscode で進めようと考えました。

## vscode を Python IDE にする

優れた IDE が揃えるべき機能は次のとおり。

- シンタックスハイライト/ インデント
- 検索・置換
- タグジャンプ
- コード補間
- エラーチェック
- リファクタリング
- インタープリタ・デバッカ
- プロジェクト管理

## Python 拡張

とりあえず Pyhton 拡張プラグインをインストール。これで大抵のことは済んでしまう。

- [Python \- Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

補完が機械学習にそったものになるとか、すごくね？？

- [Microsoft、Visual Studio Code に Python 向け AI アシスト機能追加 \| マイナビニュース](https://news.mynavi.jp/article/20180726-669530/)

### Anaconda 連携

私は、Python のモジュール管理で Anaconda 環境を使っているので、conda 環境のインタープリタを使いたい。

この場合は、検索窓から**Select Interpriter**を入力することで、選択することができる。

## エラーチェック(Lint)

エラーチェックには、pyflake8 を利用する。

```bash
$ pip install flake8
```

`"python.linting.flake8Enabled": true,`と設定ファイルに記入する。

## Auto Format

コードフォーマットには、yapf を利用する。

```bash
$ pip install yapf
```

```
"editor.formatOnSave": true,
"python.formatting.provider": "yapf"
```

と設定ファイルに記入する。

## おわりに

vscode、ますます便利になっていく。JetBrain 勢を打ち負かす日はあるのだろうか？

## 参考リンク

- [Python in Visual Studio Code](https://code.visualstudio.com/docs/languages/python)
- [python \- Activating Anaconda Environment in VsCode \- Stack Overflow](https://stackoverflow.com/questions/43351596/activating-anaconda-environment-in-vscode/45092632)
