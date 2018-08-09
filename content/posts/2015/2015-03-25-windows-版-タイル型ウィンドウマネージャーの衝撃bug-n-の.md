---
author: admin
categories:
- 技術メモ
date: 2015-03-25T04:13:00+00:00
dsq_thread_id:
- 3.721634e+09
excerpt: Windows のデスクトップ環境をタイル型 WM bug.n の紹介
pvc_views:
- 4945
title: Windows 版 タイル型ウィンドウマネージャーの衝撃!! bug.n の紹介
type: post
url: /archives/=3061
---

![](./../img/SnapCrab_NoName_2015-3-25_13-23-55_No-00.png)

はじめに
========

Windows のデスクトップ環境をタイル型 WM bug.n の紹介.

\[toc\]

背景
----

以前, タイル型 Window Manager というものを知ってとても驚いた.
それ以来ずっと, Linux 上では xmonad を利用するようになった.

-   [タイル型ウィンドウマネージャという新たな世界観に衝撃を受けた!Xmonad
    をつかってワクワク CUI 生活 |
    Futurismo](https://futurismo.biz/archives/2165)

タイル型 Window Manager の一番良い所は,
マウスを利用しなくてもアプリの移動や管理かできるというところだろう.
今回, 実はマウスが壊れてしまったので, これを機会に Windows で利用でき
るものはないか, 調査をしてみた.

Windows 上で利用できるものは, 意外にすくない. bug.n
というものを試すことにした.

-   <https://github.com/fuhsjr00/bug.n>

bug.n をつかう
==============

bung.n は AutoHotKey を利用した, Windows
用タイル型ウィンドウマネージャーだ.

Install
-------

AutoHotKey を入れる. windows はインストーラがある.

-   [AutoHotkey Downloads](https://ahkscript.org/download/)

次に bug.n のソースをダウンロード.

-   <https://github.com/fuhsjr00/bug.n/releases>

zip を展開して, 中にある bugn.exe を起動.

つかってみる
------------

まずは, 起動画面.

![](./../img/SnapCrab_NoName_2015-3-25_13-23-55_No-00.png)

-   いつくかアプリケーションを立ち上げると, **自動整列** !!
-   しかも, 等間隔に並んでいて気分も上々.
-   Win + 数字 を押すことで **仮想ディスプレイ** を利用することも可能.

操作感は, xmonad と同じ. コレはすごいぞ!

ここにデフォルトのキーバインドがある. 一つ一つためして覚えていく.

-   <https://github.com/fuhsjr00/bug.n/blob/master/doc/Default_hotkeys.md>

設定
----

### 設定ファイル

C:\Users\tsu-nera\AppData\Roaming\bug.n\Config.ini を作成. 以後, win +
ctrl + e で編集を呼び出せる.

### xmonad と同じキー操作にする

操作感は xmonad とかなり似ている. そのため, いっそのこと xmonad
のキーバインドにする.

-   <https://github.com/fuhsjr00/bug.n/blob/master/doc/User-hotkeys.md>

### かたかなひらがなを changekey で修飾キーにする.

bug.n は Autohotkey を内部でりようしているので, 設定ファイルの書き方も
autohotkey と同じ.

Linux 環境ではカタカナひらがなを Default Key に割り当てているが, Windoes
環境でもわりあてようとしたが, ここでひと苦労.

Autohotkey のマニュアル通りに sc070 に なにかを割り当てても動かない.

あくせくした結果, 以下のページを参考に カタカナひらがなキーを F13 に
割り当て, F13 を bug.n のデフォルトキーにした.

-   [ひらがなカタカナキーを F21 キーに変更 -
    情報科学屋さんを目指す人のメモ (FC2
    ブログ版)](https://did2.blog64.fc2.com/blog-entry-374.html)

カタカナひらがなキーを F13 に割り当てるために, Change Key
というソフトを利用した.

-   [Change Key キーボードのキーを変更のダウンロード : Vector
    ソフトを探す!](https://www.vector.co.jp/soft/dl/winnt/util/se214366.html)

おわりに
========

このアプリケーション, 感動した!!

マウスをつかうことから開放されることが一番の喜びだ.
面倒なウィンドウの並び替えに気を紛らわすこともない.
仮想ディスプレイ間も自由自在に移動できる.

xmonad のような操作が Windows で実現できるなんて, 夢のようだ. もともと
Linux で タイル型ウィンドウマネージャーに開眼したのだが, 2
度目の感動.ベートーヴェンは言った.

**音楽は人々の精神から炎を打ち出さなければならない**

そのように言おう.

**プログラミングは人々の精神から炎を打ち出さなければならない**
