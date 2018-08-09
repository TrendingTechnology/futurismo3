---
author: admin
categories:
- Emacs
- 技術メモ
date: 2014-12-31T01:43:00+00:00
dsq_thread_id:
- 3.71754e+09
excerpt: Emacs DDSKK で NICOLA 親指シフト入力をする
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
- 2046
side:
- "y"
title: Emacs DDSKK で NICOLA 親指シフト入力をする
title_view:
- "y"
type: post
url: /archives/=2881
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

私は親指シフターだ.

-   [親指シフトで PC
    入力効率を爆速化!\~ようやく効果を感じ始めた私の体験談\~ |
    Futurismo](https://futurismo.biz/archives/548)

Emacs の入力システムで SKK というものがある.

-   [SKK Openlab -
    ドキュメント](https://openlab.ring.gr.jp/skk/doc-ja.html)
-   <https://github.com/skk-dev/ddskk>

いままで利用していなかったのだけれども, 今朝調べてみたら,
親指シフトに対応しているようだ.

方法:

-   [SKK Manual:
    ローマ字入力以外の入力方式](https://www.bookshelf.jp/texi/skk/skk_6.html#SEC155)

どんなものだか, ちょっと利用してみることにした.

SKK
===

インストール
------------

インストールは el-get で実施した.

一般的な方法は以下.

-   [SKK Manual:
    インストール](https://www.bookshelf.jp/texi/skk/skk_2.html#SEC4)

設定
----

``` {.commonlisp}
(require 'skk-autoloads)
(global-set-key "\C-x\C-j" 'skk-mode)
(global-set-key "\C-xj" 'skk-auto-fill-mode)

;; 親指シフト
(setq skk-use-kana-keyboard t)
(setq skk-kanagaki-keyboard-type 'omelet-jis)
```

使いかたは以下にある

-   [SKK Manual:](https://www.bookshelf.jp/texi/skk/skk.html)

キーバインド
------------

以下に親指シフト専用のキーバインドがのっている.

-   <https://github.com/skk-dev/ddskk/blob/master/nicola/README.NICOLA.ja>

感想
====

まず, SKK 自体に慣れていないので利用しにくい. . . Emacs のなかでは SKK
を利用するのだが, Emacs の外側では ibus を利用するこ とになる.
これがはたして効率がよい方法なのかどうかは疑問だ.

以下の意見に同感.引用します.

-   [日本語入力 SKKIME 使ってみた (SKK はローマ字入力専用だね) -
    itouhiro メモ](https://d.hatena.ne.jp/itouhiro/20080529)

> ローマ字入力の SKK は, 普通のローマ字入力「 kyouhasibuyani
> 」と体感上同じテンポで, 「 KyouHaSibuyaNi 」と入力できます.
>
> しかし, JIS かなや親指シフトの SKK は,
> 普通のかな入力「きょうはしぶやに」とは別の,
> 「□きょう□は□しぶや□に」というテンポにどうしてもなってしまう.
> 体感するテンポが明らかに違ってしまうんですよ.
>
> 「これは常用できない……」と試したとき思いました

しかしここで諦めるのもなんだかくやしいので, もう少し試してみてから,
諦めることにする.
