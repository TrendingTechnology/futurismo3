---
author: admin
categories:
- Emacs
- 技術メモ
date: 2015-03-29T11:49:00+00:00
dsq_thread_id:
- 3.7135114e+09
excerpt: Emacs org-mode と freemind の関係と変換についての考察
pvc_views:
- 2113
tags:
- freemind
- org-mode
title: Emacs org-mode と freemind の変換と関係性についての考察
type: post
url: /archives/=3082
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

概要
====

Emacs の org-mode と freemind の連携について書きます.

また, 両者の関係性について考察します.

\[toc\]

背景
====

以前の自分は freemind ジャンキーだった. なんでもかんでも freemind
を利用して管理していた.

Emacs を 利用しはじめてから, または, 以下を読んでから.

-   [プレインテキストへの決意 `for progmatic programmer` |
    Futurismo](https://futurismo.biz/archives/2209)

.... やっぱプレーンテキストだよな!!

と思って, freemind は使わなくなってしまった.

最近になって, ふと freemind を久しぶりに思わず便利さを思いだしたので,
ここで, org-mode と freemind 連携を長短や連携をかんがえた.

freemind to org-mode
====================

目的
----

freemind はよくわからない独自フォーマットだ.
プレーンテキストでないところが気にくわない.
しかもバージョンがあがると開けなくなるかもしれない.

そこで, **保存のため** には freemind から org-mode への変換が必要.

### 障害解析に freemind を

最近, とくに freemind の効果を感じるのは, バグを出して,
障害解析をしているとき.

障害解析は 仮説をたてて, ログを確認して, 原因をかんがえる
というプロセスを繰り替えし続ける. 難しいバグだと,
このサイクルをまわしているうちに,
自分が今どこにいるか輪からなくなってしまう. 自分がなにを調べていたの
かわすれてしまうこともある.

そこで, freemind を利用して, 何でもかんでもどんどんまとめていくことで,
障害調査中に迷子にならずにすむ.

### ブログ記事の下書きを freemind で 推敲を org-mode で

このブログ記事は org-mode で書いている.

アイデアをだすのは freemind を利用して, それを org-mode に変換して
ブログ記事として完成させてみるというアイデアはよい.

-   [Markdown - マインドマップから全てを紡ぎ出す - XMind+Pandoc
    のドキュメント作成術 - -
    Qiita](https://qiita.com/sky_y/items/b92e9ce4b941545c8af5)
-   [XMind の HTML ファイルを org-mode で編集したい -
    雲行きそらゆきココロイキ](https://sky-y.hatenablog.jp/entry/20110925/1316951911)

手段
----

freemind から org-mode への直接的な変換方法はない. freemind は html への
export をサポートしているので, html から org-mode へ変換しようと試みた.
(pandoc 利用) しかし, 変換したものは, org-mode でなかった!!

諦めずに別の方法を探してみると, **vym** という mindmap ツールが mindmap
から org-mode への変換をサポートしていた.

-   [vym - view your mind プロジェクト日本語トップページ -
    SourceForge.JP](https://sourceforge.jp/projects/sfnet_vym/)

vym は freemind 0.9 version を開くことができる. なので,

-   freemind 0.9 -&gt; vym -&gt; org-mode

という変換ルートで変換ができた.

追記:
-----

もっといい方法を見つけた. 必要なノードを選択して org-mode へ 直接 コピペ
必要に応じて整理すればいい.

てか, これすごい.

-   <https://www.youtube.com/watch?v=93cqGFu3B-g>

org-mode to freemind
====================

目的?
-----

いろいろかんがえたのだが, org-mode から freemind にわざわざ変換する
利用シーンが思いつかなかった.

手段
----

目的がないのに手段があるというのもへんだけど, org-mode には 標準で
freemind へ変換する手段がある.

また, この方法だと, freemind を利用して, org-mode で作成した freemind
のリアルタイムプレビューなんかもできる.

``` {.commonlisp}
(require 'ox-freemind)
```

以下を評価して, M-x org-export すれば freemind が選択肢にでる.

-   [Freemind export](https://orgmode.org/worg/exporters/freemind.html)
-   M-x org-export-as-freemind

おわりに
========

org-mode と freemind の比較
---------------------------

org-mode はいわゆるアウトラインエディタだ. mindmap が
アウトラインエディタに比べて優れている点は, **自由さ** にあるとおもう.

逆に言えば, org-mode が freemind に対して優れている点は, **軸がある**
点にあるだろう.

結論
----

両者, 必要に応じてつかいわければいい.

今までは org-mode にこだわすぎた. もっと柔軟にツールをわけたほうがいい.

または, freemind から org-mode へは

-   保存
-   まとめ

のために変換する利用シーンがありそう.

-   freemind は, アイデアをだすための 使い捨てのフォーマット.
-   org-mode は保存のためのフォーマット.

