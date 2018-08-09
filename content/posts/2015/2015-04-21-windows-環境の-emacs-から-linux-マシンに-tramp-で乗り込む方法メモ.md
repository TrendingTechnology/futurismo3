---
author: admin
categories:
- Emacs
date: 2015-04-21T06:55:00+00:00
dsq_thread_id:
- 3.7005988e+09
excerpt: Windows 環境の Emacs から Linux マシンに tramp で乗り込む
pvc_views:
- 3727
tags:
- AWS
title: Windows 環境の Emacs から Linux マシンに tramp で乗り込む方法メモ
type: post
url: /archives/=3412
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

昨日, 職場で vi しかインストールされていないという, ぼくたち Emacs
ユーザにとっては恐怖にみちた Linux マシンをつかった.

もちろん, vi コマンドなんて覚える気はないので, 全くなにもできない.

そこで, Windows から Emacs の tramp 機能を利用して, Linux マシンへ ssh
接続する方法を調べた.

Environment
-----------

環境は, AWS から Ubuntu を借りて利用する.

-   Windows 8.1 (Client)
-   Ubuntu 14.0 (Server)

Cygwin をつかう
===============

cygwin 上で動く Emacs から tramp を利用する方法は簡単. C-x C-f
のあとに以下を入力.

``` {.bash}
/ssh:(ユーザ名)@(ホスト名):
```

:を押すと, パスワードがきかれるので答える.

AWS へ乗り込む
--------------

AWS は公開鍵を利用して, アクセスする必要がある. tramp には,
公開鍵を指定する方法がない.

そこで, .ssh/config に設定を書くことで, alias を作成する.

以下を参考に, .ssh/config に設定を追記.

-   [Tricotism - Using an Identity File in Emacs Tramp
    Mode](https://danzorx.tumblr.com/post/11396993061/using-an-identity-file-in-emacs-tramp-mode)

``` {.bash}
Host remote_box_alias
    HostName ip_or_address_of_remote
    User username
    IdentityFile path_to_pem_file
```

あとは, alias 名を打てば良い

``` {.bash}
/ssh:remote_box_alias:
```

GUI 版 Emacs を利用する
=======================

なんと, ssh がつかえない. かわりに plink という外部ツールを利用する.

以下から, Putty のインストーラを落としてきて, putty をインストールする
と, 付随で plink がついてくる.

-   <https://www.chiark.greenend.org.uk/~sgtatham/putty/download.html>

plink.exe があるフォルダに, 環境変数 PATH を通す.

Emacs を起動して, C-x C-f 後, 以下を入力.

``` {.bash}
/plink:(ユーザ名)@(ホスト名):
```

ssh から plink に変更している.

AWS へ乗り込む
--------------

putty の機能を使って, session を保存する. 保存の仕方は,
以下のサイトを参照. .pem ファイルは, putty
形式の鍵に変換が必要なところに注意.

-   [Public Key Authentication With
    PuTTY](https://www.ualberta.ca/CNS/RESEARCH/LinuxClusters/pka-putty.html)

作成した, session 名を指定して接続する.

``` {.bash}
/plink:(alias 名)
```

おわりに
========

これで, すべてが Emacs.
