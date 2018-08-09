---
author: admin
categories:
- Java
- パターン
date: 2017-09-16T10:54:56+00:00
dsq_thread_id:
- 6.147618e+09
excerpt: 'Java 8 で Command Pattern '
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 215
side:
- "y"
tags:
- Gof
title: Java 8 で Command Pattern
title_view:
- "y"
type: post
url: /archives/=6775
---

## はじめに {#-}

３年前の記事の補足です。

  * [Java で Command Pattern を実装してみた | Futurismo][1]

Java8で追加されたラムダ式でコマンドパターンを書き換えてみた。

かつては、Java 6を使っていたので、匿名クラスを利用して処理を実行と分離していた。

## ポイント {#-}

  * インターフェースに 明示的に @FunctionalInterface アノテーションを追加する。
  * ラムダ式を使って、無名関数を渡す。

## コード {#-}

<script src="https://gist.github.com/tsu-nera/58d0365cedd0f55d3fe5df3159d6729b.js"></script>

 [1]: https://futurismo.biz/archives/2703
