---
author: admin
categories:
- Emacs
- 技術メモ
date: 2015-03-30T23:41:00+00:00
dsq_thread_id:
- 3.7182904e+09
excerpt: コマンドラインから 家計簿をつけることができる ledger を試してました
pvc_views:
- 2051
tags:
- ledger
- org-mode
title: Emacs で家計簿をつけよう! プログラマブル複式簿記, Ledger.
type: post
url: /archives/=3085
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

コマンドラインから 家計簿をつけることができる ledger を試してました.

-   [ledger, a powerful command-line accounting
    system](https://ledger-cli.org/)

    \[toc\]

ledger は
=========

Ledger は, \*nix システムのコマンドラインで動作する, 複式簿記記録ツール.

メリットは,

-   command line
-   複式簿記
-   データはプレーンテキストで保存
-   シンプル

以下から, ダウンロードできる. マルチプラットフォーム.

-   [Download - Ledger](https://ledger-cli.org/download.html)

つかいかた
==========

.dat 形式の独自 ledger フォーマットで記録していく.

以下, 3 日間の自分の記録. budger.dat で保存する.

``` {.text}
; -*- ledger -*-

2015/03/30 .
    食費:外食:主食                              4.00
    食費:外食:飲み物                            2.00
    食費:自炊                                  17.00
    資産

2015/03/28 .
    光熱費:水道                                25.00
    食費:外食:カフェ                            3.00
    食費:外食:カフェ                            3.00
    食費:外食:主食                              6.00
    食費:自炊                                   3.00
    資産    

2015/03/27 .
    食費:外食:カフェ                            3.00
    食費:外食:カフェ                            3.00
    資産
```

バランスシート
--------------

集計は, `bal` を指定する.

``` {.bash}
$ ledger -f budget.dat bal
                  25  光熱費:水道
                 -69  資産:支出
                  44  食費
                  24    外食
                  12      カフェ
                  10      主食
                   2      飲み物
                  20    自炊
--------------------
                   0
```

トランザクション
----------------

項目の支出の確認には, `reg` を指定する. もちろん `reg (項目)`
でフィルタリングできる.

``` {.bash}
$ ledger -f budget.dat reg 外食
15-Mar-30 .                      食費:外食:主食                        4             4
                                 食費:外食:飲み物                      2             6
15-Mar-28 .                      食費:外食:カフェ                      3             9
                                 食費:外食:カフェ                      3            12
                                 食費:外食:主食                        6            18
15-Mar-27 .                      食費:外食:カフェ                      3            21
                              食費:外食:カフェ                      3            24

```

Emacs 連携 (ledger-mode)
========================

Emacs 用の lisp もある.

-   <https://github.com/ledger/ledger>

ledger のデータファイルを編集するときのメジャーモード. Emacs から ledger
コマンドを発行するための 関数がとても豊富に容易されている.

よく利用するのが, `M-x ledger-report` (C-c C-o C-r) これで,
いろいろな情報を簡単にまとめることができる.

-   [Ledger: Command-Line
    Accounting](https://www.ledger-cli.org/3.0/doc/ledger-mode.html)

org-capture との連携

-   [Emacs: Recording ledger entries with org-capture-templates - sacha
    chua](https://sachachua.com/blog/2010/11/emacs-recording-ledger-entries-with-org-capture-templates/)

``` {.commonlisp}
(require 'ledger-mode)
(add-to list 'load-path  "~/.emacs.d/el-get/repo/ledger-mode/lisp")
(add-to-list 'auto-mode-alist '("\\.dat$" . ledger-mode))
```

flycheck-ledger
---------------

ledger ファイルを flycheck でチェックすることもできる.

-   <https://github.com/purcell/flycheck-ledger>

``` {.commonlisp}
(with-eval-after-load 'flycheck
  '(require 'flycheck-ledger))
```

org-mode (org-babel) 連携
-------------------------

legder -f xx org とかくと, org-table 形式で出力.

-   [Using Ledger for Accounting in Org-mode with
    Babel](https://orgmode.org/worg/org-contrib/babel/languages/ob-doc-ledger.html)
-   [Weaving a budget with Org &
    ledger](https://orgmode.org/worg/org-tutorials/weaving-a-budget.html)

これをやると, コマンドラインから使えなくなってしまうのが欠点.

以下の設定を追加. これで, org-babel で ledger が利用可能になる.

``` {.commonlisp}
(org-babel-do-load-languages
 'org-babel-load-languages
 '((R . t)
   (shell . t)
   (ledger . t)))  ;; ★
```

`#begin_src ledger :cmdline bal` とかいてコードを書く. これを評価する と
balance コマンドが発行される. :cmdline というオプションにいろい
ろと指定すれば, 自由に ledger のコマンドが発行できる.

`#begin_src ledger :cmdline org :results raw` とかくと, org-table
方式でテーブル出力が可能だ. org-table からならば, R を利用し
てデータ集計が可能.

-   [org-table の表で記録した睡眠時間を R
    で折れ線グラフにして表示する方法 |
    Futurismo](https://futurismo.biz/archives/3023)

まとめ
======

デメリット
----------

ledger の最大のメリットは, データを簡単にフィルタリングできるという
ことだと思う. しかし, 以下のようなデメリットもある.

-   データの加工は不自由 (ledger 仕様)
-   グラフもかけない
-   クラウド連携もできない

あわよくば複式簿記をみにつけたい
--------------------------------

しかし, 自分はしばらく ledger を利用しつづけようと思う. あわよくば
ledger を通じて複式簿記をみにつけたい.

ledger には, 複式簿記用の大量の機能が備わっている.
これらはほとんど理解していない. データ加工は, 必要に応じて Excel や Gnu
Cash をつかいわけることにする.

environment
-----------

-   Arch Linux
-   Ledger 3.1.0

Bookmarks
---------

-   [Ledger – \*nix cli bookkeeping | Bills
    Blog](https://billalex.wordpress.com/2013/05/01/ledger-nix-cli-double-entry-accounting/#)

