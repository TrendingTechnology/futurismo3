---
author: admin
categories:
- Emacs
date: 2016-12-21T13:27:00+00:00
dsq_thread_id:
- 5.398972e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 1034
side:
- "y"
tags:
- racket
title: Emacs で Racket 開発環境を構築
title_view:
- "y"
type: post
url: /archives/=6009
---

coursera で Programming Languages , PartB を受講し始めた。

-   [Programming Languages, Part B - University of Washington |
    Coursera](https://www.coursera.org/learn/programming-languages-part-b)

開発環境で DrRacket(Racket
をインストールするとついてくる開発環境)が指定される のだけれども、Emacs
Love な自分はどうしても Emacs からやりたかったので、 Emacs で Racket
開発環境を構築した。

環境
----

-   Ubuntu 16.04 LTS
-   Racket v6.3

Racket のインストール
=====================

``` {.bash}
sudo apt-get install racket
```

これで /usr/bin/配下に racket がインストールされる。

優れた IDE の条件
=================

優れた IDE が備えるべき機能は以下.

-   シンタックスハイライト/ インデント
    -   racket-mode, aggressive-indent
-   検索・置換 iedit, multiple-cursors, helm-ag, helm-swoop
-   タグジャンプ racket-visit-definition
-   コード補間
    -   auto-complete
    -   tab で complete
-   エラーチェック
    -   flycheck
-   インタープリタ・デバッカ racket-repl

racket-mode
-----------

Racket の開発環境は、[24.2
Emacs](https://docs.racket-lang.org/guide/Emacs.html) によると

-   racket-mode
-   Quack
-   Geiser

などがある。

今回は、新しめの racket-mode を利用することにした。 インストールは M-x
el-get-install でした。

``` {.commonlisp}
(require 'racket-mode)
;; tab で補間
(setq tab-always-indent 'complete)
```

aggressive-indent
-----------------

賢い indent-mode

-   <https://github.com/Malabarba/aggressive-indent-mode>

names package に依存しているので, require 'names
してからインストールしないとおかしくなる.

``` {.commonlisp}
(add-hook 'racket-mode-hook #'aggressive-indent-mode)
```

smartparens
-----------

smart + parens カッコ移動を楽々。

-   <https://github.com/Fuco1/smartparens>

``` {.commonlisp}
(require 'smartparens-config)
```

auto-complete-mode
------------------

補間

-   <https://github.com/auto-complete/auto-complete>

``` {.commonlisp}
(require 'auto-complete)
(add-to-list 'ac-modes 'racket-mode)
```

RainbowDelimiters
-----------------

かっこの深さに応じて色付けしてくれる.

-   <https://github.com/Fanael/rainbow-delimiters>

``` {.commonlisp}
(add-hook 'prog-mode-hook #'rainbow-delimiters-mode)
```

flycheck
--------

エラーチェック

-   [flycheck/flycheck](https://github.com/flycheck/flycheck)

``` {.commonlisp}
(require 'flycheck)
(add-hook 'after-init-hook #'global-flycheck-mode)
```

quickrun
--------

ファイルを実行できる。

-   <https://github.com/syohex/emacs-quickrun>

quickrun は最近 Racket に対応したようだ。

-   <https://github.com/syohex/emacs-quickrun/commit/cd9052132dbde7c8526309a0c21fc5a60c709a46>

``` {.commonlisp}
(require 'quickrun)
```

参考 URL
========

-   [Emacs for Programming Languages course on
    Coursera](https://tuhdo.github.io/emacs-for-proglang.html)
-   [SICP 読書ノート\#10 - SICP のためのプログラミング環境構築 - @uents
    blog](https://uents.hatenablog.com/entry/sicp/010-prog-env.md)
-   [Question about Emacs tooling :
    Racket](https://www.reddit.com/r/Racket/comments/3ng6n3/question_about_emacs_tooling/)

