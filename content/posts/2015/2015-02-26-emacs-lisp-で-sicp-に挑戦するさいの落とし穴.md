---
author: admin
categories:
- Elisp
- Emacs
- 技術メモ
date: 2015-02-26T14:54:00+00:00
dsq_thread_id:
- 3.7304625e+09
excerpt: Emacs Lisp で SICP に挑戦するさいの落とし穴
pvc_views:
- 1574
tags:
- SICP
title: Emacs Lisp で SICP に挑戦するさいの落とし穴
type: post
url: /archives/=3017
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

SICP を Emacs Lisp でとくという, やや無謀なことに挑戦中.

-   <https://github.com/tsu-nera/sicp-study>

SICP 自体は Scheme をベースにかかれているので, 例題や回答を elisp
に置き換えながら読んでいく.

Emacs Lisp は不自由なもので, 結構ハマリポイントがあった.

第一章がようやく終わったところで,
いったんたまったノウハウをはきだしておこう.

よくある置き換え
================

defun
-----

毎回ある置き換え.

``` {.commonlisp}
;; scheme
(define (hoge x) x)

;; emacs lisp
(defun hoge (x) x)
```

cond
----

cond の書き方について,

-   scheme は 一番最後に else をつける.
-   elips は 一番最後に t をつける.

``` {.commonlisp}
(cond ((= 1 1) 1)
      (else 2))

(cond ((= 1 1) 1)
      (t 2))
```

高階関数
--------

関数にの頭に 'をつけて別の関数の引数にすると,
関数は評価されずに引数に渡すことができる.

評価するときは, (funcall f) のように funcall を呼ぶ.

ローカル変数
------------

elips は scheme のように, 関数の中に関数をかいても
変数や関数のスコープを限定できない.

let, let\*, letrec が利用をうまくつかって, ローカルな変数や関数をつかう.

ローカル関数の定義
------------------

let + lambda を利用する, 変数に無名関数を bind させることで実現する.

``` {.commonlisp}
(let ((p (lambda (a) (message a))))
    (funcall p "hoge"))
```

letrec を利用する方が正式か?

-   [let と letrec が必要なのはなぜか - 飲む, 寝る.
    ](https://d.hatena.ne.jp/nomnel/20120712/1342085066)

letrec の rec は 再帰のこと. let は再帰関数が定義できないが, letrec
はできる.

落とし穴
========

Dynamic Scope
-------------

Emacs Lisp は Dynamic Scope という方式をとり, 名前空間がない. なので,
安直な a とか sum とかいう関数を名づけてしまうと,
うっかり他の関数と競合する.

できるだけ, 他とかぶらない関数名をつけるほうが無難.

Emacs24 からは, ファイルの先頭に以下を書くと, setq
で宣言した変数は本当の Lexical Scope になる.

``` {.commonlisp}
-*- lexical-binding: t -*- 
```

高階関数で 関数がわたせない
---------------------------

無名関数を入力しても, なぜか Symbol value as void となる.

以下を行頭に買いて, M-x eval-buffer で評価することで, 回避できた.

``` {.commonlisp}
;; -*- lexical-binding: t -*- 
```

max-lisp-eval-depth 発生
------------------------

Emacs Lisp は 末尾最適化がされないため, 深い再帰処理をかくと,
よくクラッシュする.

これによって, 解くのを諦めた問題多数. これが Elisp の限界か.

その他
======

自分一人で行き詰まった時は, 先人の知恵を拝借する.

-   <https://github.com/bixuanzju/sicp-exercises-elisp>

