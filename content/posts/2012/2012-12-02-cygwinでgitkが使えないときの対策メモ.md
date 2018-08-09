---
author: admin
categories:
- 技術メモ
date: 2012-12-02T04:32:32+00:00
dsq_thread_id:
- 3.6936666e+09
pvc_views:
- 4947
tags:
- cygwin
- git
title: Cygwinでgitkが使えないときの対策メモ
type: post
url: /archives/=824
---

Cygwinのターミナルでgitkを利用しようとすると、以下のメッセージでエラー。

> Application initialization failed: no display name and no $DISPLAY environment variable   
> Error in startup script: no display name and no $DISPLAY environment variable   
> &#160;&#160;&#160; while executing   
> "load /usr/lib/tk8.5/../../bin/libtk8.5.dll Tk"   
> &#160;&#160;&#160; ("package ifneeded Tk 8.5.11" script)   
> &#160;&#160;&#160; invoked from within   
> "package require Tk"   
> &#160;&#160;&#160; (file "/usr/bin/gitk" line 10) 

調べてみると、仕様変更によって、x win serverを起動しないといけないらしい。

#### 今回の情報源はココを参考。

  * <https://stackoverflow.com/questions/9248034/cygwin-gitk-issue>
  * <a href="https://d.hatena.ne.jp/taktos/20120223/1330011958" name="1330011958">Cygwinでgitkを実行するのにX serverが必要になった</a>

### Xwin サーバを立ち上げて、Cygwinからgitkを使えるようにする

まずは、xinit/xorg-serverを Cygwinのsetup.exeからインストール。

xwinサーバを立ちあげる。

> startxwin >/dev/null 2>&1

環境変数を設定する。

> export DISPLAY=localhost:0.0

gitkを実行すると、まだ、エラーがでる。

> Error in startup script: unknown color name "SystemButtonFace"   
> &#160;&#160;&#160; while executing   
> "winfo rgb . $c"   
> &#160;&#160;&#160; (procedure "setui" line 3)   
> &#160;&#160;&#160; invoked from within   
> "setui $uicolor"   
> &#160;&#160;&#160; (file "/usr/bin/gitk" line 11522)

これは古いgitkがあると駄目っぽい。.gitkを削除。

> rm ~/.gitk

gitkを再起動して、起動された。

~/.bash_profileに起動のためのコマンド追加

gitkを使おうするたびに、コマンドを叩くのは面倒なので、~/.bash_profileに以下の2つのコマンドを記入する。

> startxwin >/dev/null 2>&1   
> export DISPLAY=localhost:0.0

これで今まで通り、gitkコマンドを叩くだけで、開けるようになった。

> gitk

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb78.png" width="453" height="326" />][1]

#### 環境

> $ cygcheck -c cygwin git gitk   
> Cygwin Package Information   
> Package&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Version&#160;&#160;&#160;&#160;&#160;&#160;&#160; Status   
> cygwin&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; 1.7.17-1&#160;&#160;&#160;&#160;&#160;&#160; OK   
> git&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; 1.7.9-1&#160;&#160;&#160;&#160;&#160;&#160;&#160; OK   
> gitk&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; 1.7.9-1&#160;&#160;&#160;&#160;&#160;&#160;&#160; OK

Windows7 64bit

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image78.png