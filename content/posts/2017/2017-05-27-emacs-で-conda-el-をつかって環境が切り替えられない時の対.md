---
author: admin
categories:
- Emacs
- トラブルシューティング
date: 2017-05-26T16:28:00+00:00
dsq_thread_id:
- 5.852999e+09
excerpt: Emacs で conda.el をつかって環境が切り替えられない時の対処方法
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
- 456
side:
- "y"
tags:
- fish
title: Emacs で conda.el をつかって環境が切り替えられない時の対処方法
title_view:
- "y"
type: post
url: /archives/=6462
---

Emacs で、anaconda 環境を切り替える便利な eLisp に conda.el
というものがある。

-   <https://github.com/necaris/conda.el>

しかし、これがどうもうまく動かなかったので調査してみた。

環境
----

-   fish shell 2.5.0
-   Emacs 25.1.2

事象
====

`conda-env-activate` を使うと、切り替わったよというメッセージはでるが、
実際は Anaconda の root を使っている。指定した環境を使ってくれない。

原因
====

PATH に何が設定されてるか調べてみると。 `(getenv "PATH")`

``` {.text}
"/home/tsu-nera/anaconda3/envs/kaggles/bin:/home/tsu-nera/.rbenv/shims:/home/tsu-nera/anaconda3/bin:/home/tsu-nera/.cask/bin:/home/tsu-nera/bin:/home/tsu-nera/go/bin:/home/tsu-nera/.rbenv/bin:/home/tsu-nera/script/scala:/home/tsu-nera/script/ruby:/home/tsu-nera/script/sh:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/usr/lib/jvm/java-8-oracle/bin:/usr/lib/jvm/java-8-oracle/db/bin:/usr/lib/jvm/java-8-oracle/jre/bin"
```

つまり、二つのパスが登録されている。

1.  /home/tsu-nera/anaconda3/envs/kaggle/bin
2.  /home/tsu-nera/anaconda3/bin

使いたいのは、1 のほうで２はいらない。

なぜかわからないが、Emacs を起動すると、PATH
を自動で読み込んでくれるようなのだ。

こんな機能しらないぞ！exec-path-from-shell
をつかって実現する機能ではなかったか？ デフォルトで PATH
を引き継ぐように仕様変更されたのか？？

解決方法
========

fish shell の環境設定ファイル（自分の場合は env.fish に分けている）、
から、anaconda のパスを削除すると、Emacs で `conda-activate`
をつかった切り替えができる。

しかし、これでは、ふだん conda コマンドが使えない。

そこで、fish shell にこんな関数を定義した。まず Emacs
を立ち上げた上で、conda を有効にする。

``` {.bash}
# anaconda
function conda-activate
    set fish_user_paths $HOME/anaconda3/bin $fish_user_paths
end
```

一時しのぎだけれども、これで Emacs から conda
で環境を切り替えることができるようになった。
