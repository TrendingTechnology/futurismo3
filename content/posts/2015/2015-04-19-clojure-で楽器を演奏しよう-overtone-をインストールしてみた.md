---
author: admin
categories:
- Clojure
date: 2015-04-19T12:37:00+00:00
dsq_thread_id:
- 3.694222e+09
follow:
- follow
index:
- index
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 2334
side:
- def
sub:
- def
tags:
- overtone
title: Clojure で楽器を演奏しよう! Overtone をインストールしてみた
type: post
url: /archives/=3127
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

前回, overtone を起動しました.

-   [Clojure で楽器を演奏しよう! Overtone をインストールしてみた |
    Futurismo](https://futurismo.biz/archives/3127)

今回は Emacs から利用するまでを試します.

Emacs Live
==========

Emacs Live は Overtone を Emacs から操るための 環境, ツール群, Emacs
の設定.

<div data-theme="default" data-height="155" data-width="500" data-github="overtone/emacs-live" class="github-card"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>

-   <https://github.com/overtone/emacs-live>

Install
-------

overtone の設定は, 前回の記事を参照.

-   [Clojure で楽器を演奏しよう! Overtone をインストールしてみた |
    Futurismo](https://futurismo.biz/archives/3127)

    以下のスクリプトを実行する.

``` {.bash}
bash <(curl -fksSL https://raw.github.com/overtone/emacs-live/master/installer/install-emacs-live.sh)
```

\~/.emacs.d に emacs live 用の環境が作成される.

もし, すでに .emacs.d が存在する場合は, emacs-live-old-config
ディレクトリに旧設定がコピーされる.

Getting Started
---------------

-   lein repl 起動.
-   emacs 起動.
-   M-x cider-connect で lein に接続する
    -   localhost/port 番号 (lein repl 起動時にコンソールに出る)
        を入れる.

これで, emacs 上から, repl を操作することができる.あとは, コンソー
ルから overtone を利用するときと同じ.

``` {.commonlisp}
# External server 起動
$ user=> (use 'overtone.core)
$ user=> (boot-external-server)

# 音がでるか確認. ピーっと音が出れば OK.
user=> (demo (sin-osc))
```

ファイルに音楽を書く.
---------------------

github にサンプルの音楽が置いてある.

-   <https://github.com/overtone/overtone/wiki/Swing>

適当なファイルを作成して, コピペ後, C-x C-e でひとつずつ評価すると,
コードが repl に送信されて, 音がなる. Live Coding !!

自分の Emacs で overtone をつかう
=================================

overtone を利用する度に自分の Emacs 設定を Emacs live に置き換えたくは
ないので, 自分の Emacs 環境で overtone を利用する方法を試す.

Emacs Live を利用すためには, 以下を入れる必要あり.

-   clojure-mode
-   cider

<div data-theme="default" data-height="155" data-width="500" data-github="clojure-emacs/cider" class="github-card"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>

自分は, el-get からインストールした.

clojure-mode
------------

Clojure のためのメジャーモード.

-   <https://github.com/clojure-emacs/clojure-mode>

``` {.commonlisp}
(require 'clojure-mode)
```

cider
-----

Clojure のためのインタラクティブな開発環境.

-   <https://github.com/clojure-emacs/cider>

``` {.commonlisp}
(require 'cider)
(add-hook 'clojure-mode-hook 'cider-mode)
(add-hook 'cider-mode-hook 'cider-turn-on-eldoc-mode)
```

Getting Started
---------------

Emacs Live と起動方法は同じ. 音が出れば OK.

おわりに
========

Emacs Live には, いろいろ便利な関数や色が定義されているので, 時間をみて
Emacs Live の リポジトリを眺めてみよう.

今日はここまで!

Special Thanks
==============

-   [Emacs Org and Overtone quick
    intro](https://bzg.fr/emacs-org-babel-overtone-intro.html#)
-   [Emacs で Overtone 演奏環境構築 - のぶ
    Lab.](https://atsuya046.hatenablog.com/entry/2015/02/11/232316)


