---
author: admin
categories:
- Emacs
- 技術メモ
date: 2014-07-25T13:54:00+00:00
dsq_thread_id:
- 3.7294753e+09
excerpt: Emacs で pdf-tools をうごかすのにいろいろハマったメモ
pvc_views:
- 2836
tags:
- pdf
title: Emacs で pdf-tools をうごかすのにいろいろハマったメモ
type: post
url: /archives/=2535
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

Emacs で pdf-tools を動かすのにいろいろハマったので,
解決するまでのメモです.

Environment
-----------

-   ArchLinux
-   Emacs 24.3.1

苦難の道
========

さて, コンパイルが通らない!
---------------------------

**15/01/03 追記 この問題は最新版ではでない**

今は, ArchLinux をつかっているが, 以前は Linux Mint を利用してた.

その環境ではなんの問題もなくインストールできたのだが, 環境か ArchLinux
に変わったらコンパイルが通らなくなっちゃた.

fork して, いろいろいじくって, 強引にコンパイルを通した.

-   <https://github.com/tsu-nera/pdf-tools>

<!-- -->

    ./configure & make
    make install

doc-view-mode が動かん!
-----------------------

まず, doc-view-mode で PDF が見れない!

どうも, GhostScript というものを入れる必要があるようだ.

-   [Emacs and PDF - Carpe diem (Felix's
    blog)](https://www.idryman.org/blog/2013/05/20/emacs-and-pdf/)

ということで, インストール.

``` {.language}
sudo pacman -S ghostscript
```

それでも PDF みれない!
----------------------

それでも, PDF が見れない.

どうも, no windows モードで閲覧しようとしたことが原因.

``` {.language}
emacsclient -nw
```

フレームを作成するモードで立ち上げる.

``` {.language}
emacsclient -c
```

やっと, Emacs で PDF 見れた!!

めっちゃおそい!
---------------

閲覧には成功したけれども, 閲覧していると Emacs がものすごく重い!

これは, ストレスを通り越して, 使えないレベルだ. . いろいろ調べると,
linum-mode が悪さをしていることが判明.

-   [How can I speed up Emacs DocView mode? - Stack
    Overflow](https://stackoverflow.com/questions/16132234/how-can-i-speed-up-emacs-docview-mode)

どうも, doc-view-mode がめちゃくちゃ遅い!linum-mode が有効なことが原因.
以下のページを参考に, major-mode が

-   doc-view-mode
-   pdf-view-mode

のときは, linum-mode は disable に.

-   [How can I speed up Emacs DocView mode? - Stack
    Overflow](https://stackoverflow.com/questions/16132234/how-can-i-speed-up-emacs-docview-mode)

pdf-info-epdfinfo-program error がでる.
---------------------------------------

pdf-info-epdfinfo-program の変数が設定されていないとのエラー.

リポジトリの src/epdfinfo のパスを設定.

``` {.commonlisp}
(setq pdf-info-epdfinfo-program "/path/to/pdf-tools/src/epdfinfo")
```

おわりに
========

ついに PDF が見れるようになった\~\~!!
-------------------------------------

というわけで, めちゃくちゃ茨の道だったものの, 何とか PDF が快適に Emacs
で閲覧できるようになりました. わーい \^\^

Special Thanks
--------------

pdf-tools 自体のつかいかたは, この記事がとても参考になりました.
pdf-occur とか, pdf-isearch とか, 便利.

-   [Emacs 上の PDF で isearch,occur,imenu とかなんでもしてしまう
    pdf-tools の紹介 |
    sheephead](https://sheephead.homelinux.org/2014/03/17/7076/)

