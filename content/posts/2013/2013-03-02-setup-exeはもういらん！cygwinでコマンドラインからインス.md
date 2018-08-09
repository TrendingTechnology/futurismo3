---
author: admin
categories:
- 技術メモ
date: 2013-03-02T02:10:03+00:00
dsq_thread_id:
- 3.703439e+09
excerpt: <!--:ja-->apt-getみたいにコマンドラインからツールのインストールやアップデートをするためのコマンド、apt-cygについて調べてみました。<!--:-->
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 21023
tags:
- CppCheck
- cygwin
title: setup.exeはもういらん！Cygwinでコマンドラインからインストール/アップデートする[apt-cyg]を試す
type: post
url: /archives/=1220
---

<!--:ja-->

Cygwinをツールをアップデートするときに、いちいちsetup.exeを起動するのが面倒だ 。

LinuxやRubyとかみたいに、コマンドラインからインストール出来ないかなと思って調べたらありました。それが

<font color="#0000ff" size="4">apt-cyg</font>

です。以下、詳細をメモメモφ(｀д´)ﾒﾓﾒﾓ</p> 

### apt-cygとは

apt-cygとは、apt-getみたいにコマンドラインからツールのインストールやアップデートをするためのコマンド。
  
GoogleCodeで公開されている。

<a href="https://code.google.com/p/apt-cyg/" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://code.google.com/p/apt-cyg/" width="150" height="130" /></a> <a style="color: #0070c5" href="https://code.google.com/p/apt-cyg/" target="_blank">apt-cyg &#8211; A command-line software installer for Cygwin &#8211; Google Project Hosting</a>  <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://code.google.com/p/apt-cy]g/" />

&#160;

&#160;</hr> </hr> 

### apt-cygのインストール方法

事前準備として、以下のコマンドをcygwinに入れておくこと。apt-cygの中で使う。

  * Base/gawk
  * Archive/bzip2
  * Base/tar 
  * Net/wget

wgetで取得。

    $ wget https://apt-cyg.googlecode.com/svn/trunk/apt-cyg
    

apt-cygは内部的にwgetを使っている。proxy環境でうまくいかない時は、wgetのプロキシ設定が必要。自分は以下の記事を参考にしました。

  * <a href="https://d.hatena.ne.jp/taiyo/20080401/p2" target="_blank">wgetを認証必須のプロキシ経由で使いたい &#8211; spikelet days</a>

実行権限を与えて、パスの通った場所に置く。

    $ chmod +x apt-cyg
    $ mv apt-cyg /usr/bin
    

これだけで、インストール完了。簡単簡単。

    $ apt-cyg --version
    apt-cyg version 0.57
    Written by Stephen Jungels
    
    Copyright (c) 2005-9 Stephen Jungels.  Released under the GPL.
    

#### ミラーサーバの設定

cygwinの取得先を日本のサーバに指定しておく。

    // 32 bit
    $ apt-cyg -m　https://ftp.iij.ad.jp/pub/cygwin/x86/ update
    // 64 bit
    $ apt-cyg -m　https://ftp.iij.ad.jp/pub/cygwin/x86_64/ update
    

### apt-cygの使い方

helpを参照

    $ apt-cyg --help
    apt-cyg: Installs and removes Cygwin packages.
      "apt-cyg install <package names>" to install packages
      "apt-cyg remove <package names>" to remove packages
      "apt-cyg update" to update setup.ini
      "apt-cyg show" to show installed packages
      "apt-cyg find <patterns>" to find packages matching patterns
      "apt-cyg describe <patterns>" to describe packages matching patterns
      "apt-cyg packageof <commands or files>" to locate parent packages
    Options:
      --mirror, -m <url> : set mirror
      --cache, -c <dir>  : set cache
      --file, -f <file>  : read package names from file
      --noupdate, -u     : don't update setup.ini from mirror
      --help
      --version
    

#### リポジトリ(setup.ini)をアップデートする

ローカルで持っているツールの更新情報をアップデートする。

    apt-cyg update
    

#### ツールをアップデートしてみる

ここでは、すでにインストールされたcppcheckをアップデートしてみる。

既存のcppcheckをまずは削除。

    $apt-cyg remove cppcheck
    

次に、新しいcppcheckをインストールする。

    $ apt-cyg install cppcheck
    

これで、cppcheckのバージョンが1.56から1.58にアップデートされた。

いろんなツールの更新を調べて、一気にアップデートするのはsetup.exeを使ったほうがよさそう。

### 追記 13/08/12

Cygwinに大きな仕様変更があったようで、32bit版と、64bit版で、Cygwinは分けられたようだ。64bit版には、inetutilsも見つからない・・・。

、久しぶりにapt-cygを実行したらエラー。

    $ apt-cyg update
    Working directory is /setup
    Mirror is https://ftp.iij.ad.jp/pub/cygwin/
    --2013-08-12 23:12:06--  https://ftp.iij.ad.jp/pub/cygwin//setup.bz2
    ftp.iij.ad.jp (ftp.iij.ad.jp) をDNSに問いあわせています... 202.232.140.143, 202.232.140.144, 2001:240:bb8f::f:300, ...
    ftp.iij.ad.jp (ftp.iij.ad.jp)|202.232.140.143|:80 に接続しています... 接続しました。
    HTTP による接続要求を送信しました、応答を待っています... 404 Not Found
    2013-08-12 23:12:06 エラー 404: Not Found。
    
    --2013-08-12 23:12:06--  https://ftp.iij.ad.jp/pub/cygwin//setup.ini
    ftp.iij.ad.jp (ftp.iij.ad.jp) をDNSに問いあわせています... 202.232.140.143, 202.232.140.144, 2001:240:bb8f::f:300, ...
    ftp.iij.ad.jp (ftp.iij.ad.jp)|202.232.140.143|:80 に接続しています... 接続しました。
    HTTP による接続要求を送信しました、応答を待っています... 404 Not Found
    2013-08-12 23:12:06 エラー 404: Not Found。
    
    Error updating setup.ini, reverting
    

404 Not Found&#8230;だと？

原因は、setup.iniが 32bit番と64bit番でディレクトリが分けられるようになったからだった。

https://ftp.iij.ad.jp/pub/cygwin/にアクセスすると、ディレクトリ構造が変更されていた。

ミラーサイトは以下のように、32bitと64bitで区別する必要がある。

    // 32 bit
    $ apt-cyg -m　https://ftp.iij.ad.jp/pub/cygwin/x86/ update
    // 64 bit
    $ apt-cyg -m　https://ftp.iij.ad.jp/pub/cygwin/x86_64/ update
    

正式版のapt-cygはこの仕様変更には対応していないみたい。forkしたapt-cygをみつけたので、しばらくはこっちを使うのが良さそう。

  * <a href="https://github.com/rcmdnk/apt-cyg" target="_blank">rcmdnk/apt-cyg</a>

<!--:-->

<!--:en-->

Cygwinをツールをアップデートするときに、いちいちsetup.exeを起動するのが面倒だ 。

LinuxやRubyとかみたいに、コマンドラインからインストール出来ないかなと思って調べたらありました。それが

<font color="#0000ff" size="4">apt-cyg</font>

です。以下、詳細をメモメモφ(｀д´)ﾒﾓﾒﾓ</p> 

### apt-cygとは

apt-cygとは、apt-getみたいにコマンドラインからツールのインストールやアップデートをするためのコマンド。
  
GoogleCodeで公開されている。

<a href="https://code.google.com/p/apt-cyg/" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://code.google.com/p/apt-cyg/" width="150" height="130" /></a> <a style="color: #0070c5" href="https://code.google.com/p/apt-cyg/" target="_blank">apt-cyg &#8211; A command-line software installer for Cygwin &#8211; Google Project Hosting</a>  <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://code.google.com/p/apt-cy]g/" />

&#160;

&#160;</hr> 

### apt-cygのインストール方法

事前準備として、以下のコマンドをcygwinに入れておくこと。apt-cygの中で使う。

  * Base/gawk
  * Utils/bzip2
  * Utils/tar 
  * Web/wget

wgetで取得。

    $ wget https://apt-cyg.googlecode.com/svn/trunk/apt-cyg
    

apt-cygは内部的にwgetを使っている。proxy環境でうまくいかない時は、wgetのプロキシ設定が必要。自分は以下の記事を参考にしました。

  * <a href="https://d.hatena.ne.jp/taiyo/20080401/p2" target="_blank">wgetを認証必須のプロキシ経由で使いたい &#8211; spikelet days</a>

実行権限を与えて、パスの通った場所に置く。

    $ chmod +x apt-cyg
    $ mv apt-cyg /usr/bin
    

これだけで、インストール完了。簡単簡単。

    $ apt-cyg --version
    apt-cyg version 0.57
    Written by Stephen Jungels
    
    Copyright (c) 2005-9 Stephen Jungels.  Released under the GPL.
    

#### ミラーサーバの設定

cygwinの取得先を日本のサーバに指定しておく。

    // 32 bit
    $ apt-cyg -m　https://ftp.iij.ad.jp/pub/cygwin/x86/ update
    // 64 bit
    $ apt-cyg -m　https://ftp.iij.ad.jp/pub/cygwin/x86_64/ update
    

### apt-cygの使い方

helpを参照

    $ apt-cyg --help
    apt-cyg: Installs and removes Cygwin packages.
      "apt-cyg install <package names>" to install packages
      "apt-cyg remove <package names>" to remove packages
      "apt-cyg update" to update setup.ini
      "apt-cyg show" to show installed packages
      "apt-cyg find <patterns>" to find packages matching patterns
      "apt-cyg describe <patterns>" to describe packages matching patterns
      "apt-cyg packageof <commands or files>" to locate parent packages
    Options:
      --mirror, -m <url> : set mirror
      --cache, -c <dir>  : set cache
      --file, -f <file>  : read package names from file
      --noupdate, -u     : don't update setup.ini from mirror
      --help
      --version
    

#### リポジトリ(setup.ini)をアップデートする

ローカルで持っているツールの更新情報をアップデートする。

    apt-cyg update
    

#### ツールをアップデートしてみる

ここでは、すでにインストールされたcppcheckをアップデートしてみる。

既存のcppcheckをまずは削除。

    $apt-cyg remove cppcheck
    

次に、新しいcppcheckをインストールする。

    $ apt-cyg install cppcheck
    

これで、cppcheckのバージョンが1.56から1.58にアップデートされた。

いろんなツールの更新を調べて、一気にアップデートするのはsetup.exeを使ったほうがよさそう。

### 追記 13/08/12

Cygwinに大きな仕様変更があったようで、32bit版と、64bit版で、Cygwinは分けられたようだ。64bit版には、inetutilsも見つからない・・・。

、久しぶりにapt-cygを実行したらエラー。

    $ apt-cyg update
    Working directory is /setup
    Mirror is https://ftp.iij.ad.jp/pub/cygwin/
    --2013-08-12 23:12:06--  https://ftp.iij.ad.jp/pub/cygwin//setup.bz2
    ftp.iij.ad.jp (ftp.iij.ad.jp) をDNSに問いあわせています... 202.232.140.143, 202.232.140.144, 2001:240:bb8f::f:300, ...
    ftp.iij.ad.jp (ftp.iij.ad.jp)|202.232.140.143|:80 に接続しています... 接続しました。
    HTTP による接続要求を送信しました、応答を待っています... 404 Not Found
    2013-08-12 23:12:06 エラー 404: Not Found。
    
    --2013-08-12 23:12:06--  https://ftp.iij.ad.jp/pub/cygwin//setup.ini
    ftp.iij.ad.jp (ftp.iij.ad.jp) をDNSに問いあわせています... 202.232.140.143, 202.232.140.144, 2001:240:bb8f::f:300, ...
    ftp.iij.ad.jp (ftp.iij.ad.jp)|202.232.140.143|:80 に接続しています... 接続しました。
    HTTP による接続要求を送信しました、応答を待っています... 404 Not Found
    2013-08-12 23:12:06 エラー 404: Not Found。
    
    Error updating setup.ini, reverting
    

404 Not Found&#8230;だと？

原因は、setup.iniが 32bit番と64bit番でディレクトリが分けられるようになったからだった。

https://ftp.iij.ad.jp/pub/cygwin/にアクセスすると、ディレクトリ構造が変更されていた。

ミラーサイトは以下のように、32bitと64bitで区別する必要がある。

    // 32 bit
    $ apt-cyg -m　https://ftp.iij.ad.jp/pub/cygwin/x86/ update
    // 64 bit
    $ apt-cyg -m　https://ftp.iij.ad.jp/pub/cygwin/x86_64/ update
    

正式版のapt-cygはこの仕様変更には対応していないみたい。forkしたapt-cygをみつけたので、しばらくはこっちを使うのが良さそう。

  * <a href="https://github.com/rcmdnk/apt-cyg" target="_blank">rcmdnk/apt-cyg</a>

<!--:-->