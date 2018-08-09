---
author: admin
categories:
- Linux
- 技術メモ
date: 2015-04-10T13:19:00+00:00
dsq_thread_id:
- 3.693688e+09
pvc_views:
- 8662
tags:
- wayland
- weston
title: Wayland/weston を ArchLinux で動かして遊んでみた
type: post
url: /archives/=3099
---

はじめに
========

仕事で, GUI プログラミングに関わることになりそうです.

そこで, 次世代 ウィンドウシステム wayland/weston を Arch Linux
にいれて遊んでみました.

\[toc\]

Environmet
----------

``` {.bash}
$ sudo pacman -Qe weston linux
weston 1.7.0-2
linux 3.19.2-1
```

インストール
============

以下のコマンドでインストール.

``` {.bash}
sudo pacman -S wayland weston
```

wayland
-------

x window にかわる, 次世代ウィンドウマネージャー.

-   [Wayland - Wikipedia](https://ja.wikipedia.org/wiki/Wayland)

Arch Wiki が詳しい.

-   [Wayland -
    ArchWiki](https://archlinuxjp.kusakata.com/wiki/Wayland?rdfrom=https%3A%2F%2Fwiki.archlinux.org%2Findex.php%3Ftitle%3DWayland_%28%25E6%2597%25A5%25E6%259C%25AC%25E8%25AA%259E%29%26redirect%3Dno)

x window にくらべて, 高速で, 実装がシンプルらしい.

以下の比較動画をみると, xorg と wayland/weston
の違いが歴然としていおもしろい.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ux-WCpNvRFM?rel=0" frameborder="0" allowfullscreen></iframe>

Weston
------

Wayland はただのライブラリなので, それだけでは使い物になりません. X
サーバーを置き換えるには, (Weston などの) コンポジタが必要.

遊んでみる
==========

weston 起動.

``` {.bash}
$ weston
```

左上のターミナルアイコンをクリックすると, weston-terminal が起動する.

![](./../img/2015-04-10-205933_1030x640_scrot.png)

いろいろなデモが用意されている.

-   weston-flower
-   weston-smoke
-   weston-editor

レンダリングが鮮やかな気がする.

![](./../img/2015-04-10-210800_1020x642_scrot.png)

以下で, デモが見られる.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q0euI8FIXV0?rel=0" frameborder="0" allowfullscreen></iframe>

x window アプリを wayland で動作させる
======================================

Wayland は, 描画に OpenGL ES を用いていている. 一方, Linux
のデスクトップアプリは, X クライアント.

xorg-server-xwayland をインストールすれば, 従来の Linux アプリを wayland
で動かす方法がある.

.config/weston.ini に以下を書くと, weston-terminal からアプリを立ち上
げたときに, weston 内でアプリが起動する.

``` {.text}
[core]
modules=xwayland.so,desktop-shell.so
```

weston.ini の マニュアルは以下.

-   [weston.ini - man page](https://www.mankier.com/5/weston.ini)

``` {.bash}
# xorg アプリを動作させる
[core]
modules=xwayland.so

# 日本語設定
[keyboard]
keymap_layout=jp

# ターミナルアイコン
[launcher]
icon=/usr/share/icons/gnome/24x24/apps/utilities-terminal.png
path=/usr/bin/weston-terminal

# firefox アイコン
[launcher]
icon=/usr/share/icons/hicolor/24x24/apps/firefox.png
path=/usr/bin/firefox

# フルスクリーン
[output]
name=X1
mode=1600x900
```

パフォーマンスについての考察.

-   [本の虫: XWayland
    のパフォーマンス](https://cpplover.blogspot.jp/2013/07/xwayland.html)

Bookmarks
=========

-   [Wayland/Weston について - devm33
    の備忘録](https://d.hatena.ne.jp/devm33/20140414/1397473785)
-   [weston (wayland) の screenshot の取り方 -
    Qiita](https://qiita.com/TNaruto/items/7eef814e7673fd42e681)
-   [Wayland を試してみる](https://mlny.info/2014/10/wayland/)
-   [Give Wayland/Weston a try on Arch Linux - Siosm's
    blog](https://tim.siosm.fr/blog/2012/09/21/try-weston-arch-linux/)

Linux conf 2013 におけるプレゼン.

<iframe width="420" height="315" src="https://www.youtube.com/embed/cQoQE_HDG8g?rel=0" frameborder="0" allowfullscreen></iframe>
