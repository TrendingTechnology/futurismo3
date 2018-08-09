---
author: admin
categories:
- 技術メモ
date: 2015-04-23T04:17:00+00:00
dsq_thread_id:
- 3.706005e+09
excerpt: mps-youtube でコマンドラインから Youtube の音楽を聴く
pvc_views:
- 2114
title: コッソリ音楽を楽しむならこれ! mps-youtube でコマンドラインから Youtube の音楽を聴く
type: post
url: /archives/=3441
---

![](./../img/SnapCrab_Cwindowssystem32cmdexe - mpsyt_2015-4-23_13-13-30_No-00.png)

はじめに
========

音楽をききながら作業をすると, 生産性が上がる.

しかし, 職場で Youtube をどうどうと見ながら仕事をするは気が引ける.

そんなときに, コマンドラインから Youtube の聞くことができる
`mps-youtube` をつかうと便利だ.

<div data-theme="default" data-height="155" data-width="500" data-github="np1/mps-youtube" class="github-card"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>

\[toc\]

メリット
========

以下の点かいい.

-   コマンドラインツール.
-   python でかかれているため, Windows, Mac, Linux どこでも動く.
-   広告なしで聞ける.
-   repeat 再生が簡単 (repeat keyword 指定)
-   複数の音楽をまとめてきくのが簡単 (数字指定)
-   かくれながらこっそり利用できる.

広告をみなくていいところが素晴らしい.

つかいかた
==========

Install (Windows)
-----------------

Windows 環境へインストールする.

python のツール pip を利用してインストール.

python がない場合は, 以下からインストール.

-   <https://www.python.org/downloads/windows/>

ここでは, Python 3.4 をインストール. C:\Python34 にインストールされる.
インストールしたら, C:\Python34\Scripts に環境変数パスを通す.

以下を実行すると, C:\Python34\Scripts\mpsyt.exe がインストールされる.

``` {.bash}
$ pip install mps-youtube
```

使い方
------

コマンドプロンプトから, `mpsyt` をたたいて起動.

`/ (keyword)` で キーワード検索する. 検索結果がリストされるので,
番号を指定して音楽を指定

![](./../img/SnapCrab_Cwindowssystem32cmdexe - mpsyt_2015-4-23_13-3-10_No-00.png)

文字コード指定
--------------

日本語の検索結果を表示しようとすると, エラーする.
コマンドプロンプトの文字コードを UTF-8 にする.

``` {.bash}
chcp 65001
```

以上, Happy Listening!!.
