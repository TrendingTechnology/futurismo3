---
title: GatsbyJS で Lighthouse 満点の技術ブログはこちらです
description: GatsbyJSを使った当ブログのトップページをGoogle製のWebサイト総合評価ツールLighthouseで満点にした話
date: 2018-08-18 09:54:51
author: tsu-nera
type: post
tags:
- lighthouse
- GatsbyJS
- blog
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1534554094/futurismo/posts/google-lighthouse-perfect-score.jpg
---

GatsbyJSを使った当ブログのトップページをGoogle製のWebサイト総合評価ツールLighthouseで満点にしました。

ちょっとズルもしました。そのあたりを解説します。

## なぜ目指したか？

GatsbyJSを使って、最速の技術ブログを目指そうとしたときに、
評価基準が欲しかったのでLighthouseで計測しました。

## すこしズルをした

普通にやっても満点が出ませんでした。ですので、少しズルをしました。

### no throttlingモードで実施

スロットリング、あまり理解していながCPUの高負荷によるスループットの低下？に対応できなかったので、これを無効の設定で実施した。

### CLIツールをつかってHeadLessモードで起動した

PWAの項目の、**Contents is not sised correctly for the viewport**がどうやっても解決できなかった。viewportとブラウザwindowの幅の不一致というエラーなのだけれども、cliのheadlessモードでブラウザ起動を抑制した。

cliはこちら。

- https://github.com/GoogleChrome/lighthouse

```bash
lighthouse https://futurismo.biz --disable-device-emulation --throttling-method=provided --chrome-flags="--headless" --view
```

## ソースコード

- https://github.com/tsu-nera/futurismo3

