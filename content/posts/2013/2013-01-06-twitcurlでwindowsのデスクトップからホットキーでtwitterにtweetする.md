---
author: admin
categories:
- VBA
- ハッキング
date: 2013-01-06T10:41:09+00:00
dsq_thread_id:
- 3.7001823e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3114
tags:
- cygwin
- twitter
title: twitcurlでWindowsのデスクトップからホットキーでtwitterにtweetする
type: post
url: /archives/=1150
---

### はじめに

デスクトップからショートカットでtwitterにつぶやきたいなと思い、いろいろと探してみたがいいフリーソフトがみつからなかったので、twitCurlというC++用のtwitterライブラリを利用して、作ってみました。
  
[https://www.youtube.com/embed/2FhRoTXbpHM]
  
&nbsp;

#### 環境

  * Windows 7 64bit
  * Cygwin 1.7.17-1
  * curlﾂꀀﾂꀀﾂꀀﾂꀀﾂꀀ 7.28.1-1

### twitcurlを使う

<a href="https://code.google.com/p/twitcurl/" target="_blank"><img class="alignleft" alt="" src="https://capture.heartrails.com/150x130/shadow?https://code.google.com/p/twitcurl/" width="150" height="130" align="left" border="0" /></a> <a style="color: #0070c5;" href="https://code.google.com/p/twitcurl/" target="_blank">twitcurl &#8211; twitcurl is a pure C++ twitter API library based on cURL &#8211; Google Project Hosting</a> <img alt="" src="https://b.hatena.ne.jp/entry/image/https://code.google.com/p/twitcurl/" border="0" />

twitcurlとは、twitter API用のC++ライブラリ。
  
これを使えば、C++のソースからtwitter APIを叩くことができる。

#### twitcurlの導入

twitcurlの導入方法は以下が詳しい

  * [WikiHowToUseTwitcurlLibrary &#8211; twitcurl &#8211; How to use twitcurl library? &#8211; twitcurl is a pure C++ twitter API library based on cURL &#8211; Google Project Hosting][1]

今回は、Windows上のcygwin環境で試してみたので、Linuxの方を参考にした。

まずは、事前にg++,libcurl4-dev, subversion を setup.exeを使って取得しておく。
  
Curlというのは、ファイル転送用プロトコルをサポートするライブラリで、コレを利用して、HTTPをコマンドラインから利用するらしい。

次に、libtwitcurlをsvnコマンドで取得。

> svn co <https://twitcurl.googlecode.com/svn/trunk/libtwitcurl>

subversionがないと、ソースを取ってこれない。

取得後に、libtwitcurlに移動して、makeコマンドでコンパイルをかける。
  
libtwitcurl.so.1.0という共用ライブラリが作成されるのでこれを/usr/lib/配下にlibtwitcurl.soとリネームしてコピーする。

> mv libtwitcurl.so.1.0 /usr/lib/libtwitcurl.so

### サンプルコード改造してつぶやき専用クライアント作成

つぎに、twitcurlのサンプルコードを改造してみて、つぶやき専用にした。
  
サンプルコードは以下のように持ってこれる。

> svn co https://twitcurl.googlecode.com/svn/trunk/twitterClient

こんな感じで改造（というよりも、いらない部分を削除したという方が正しい）

  * quichtweet.cpp 
      * <https://gist.github.com/4466391>

ユーザ名とパスワードを変更する。
  
デスクトップからtwitterにアクセスするためには、以下の4つのキーの取得が必要。

  * ConsumerKey
  * ConsumerSecuret
  * AuthAccessTokenKey
  * AuthAccessTokenSecret

取得方法はドットインストールで学習した。

  * [ツイッターボットを作る (全10回) &#8211; ドットインストール][2]

#### コンパイルをかけて実行

コンパイルをかける。

> g++ quicktweet.cpp -o quicktweet -l/usr/lib/twitcurl

-ltwitcurlをコンパイルオプションにつければコンパイルできる。
  
(libtwitcurl.soだけと、libと.soはいらない。自分の場合、どうもパスの通し方がわからないので、フルパスでリンクさせた）

実行するときに、共用ライブラリlibtwitcurl.so.1.0を実行するディレクトリに持ってきておく。Cygwinの場合、共用ライブラリを実行するためには、PATHにlibtwitcurl.so.1.0かあるディレクトリの環境変数を通しておく必要があるけれども、面倒臭いで横着した。

  * [インストール後の設定作業][3]

quicktweet.exeにつぶやきたい言葉を渡して実行するとつぶやけた。

### VBSからtwitterクライアントを呼び出す

次に、VBScriptからquicktweetを実行できるように、VBScriptを作成。

メッセージボックスを表示させて、メッセージを入力してEnterを押すと、メッセージがquickktweetの引数として渡される。

https://gist.github.com/4466455

### VBSにショートカットキーを割り当てる

VBSをホットキーから実行できるようにする。
  
作成したVBSのショートカットをデスクトップか、[スタートメニュー] > [すべてのプログラムで右クリック] > [開く]を選択して、スタートメニューのフォルダに作成する。

ショートカットを右クリックして、プロパティを選択。
  
ショートカットの欄で、好きなショートカットを入力する。

[<img alt="" src="https://lh5.googleusercontent.com/-GRw-pNCBW14/UOlSzMlfjfI/AAAAAAAAAEg/3jZVmxyjY_M/s288/quicktweet_20130106_01.png" width="260" height="288" />][4]

ここでは[Ctrl + Shift + T]を割り当てた。
  
これで、デスクトップのどこからでもつぶやけるようになった。

[<img alt="" src="https://lh5.googleusercontent.com/-RsyY69JVqLE/UOlT9R2uC4I/AAAAAAAAAFU/-MwejCDjfpA/s800/quicktweet_20130106_02.png" width="377" height="151" />][5]

これで 、お手軽にﾂꀀ Let&#8217;s Tweet。

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://code.google.com/p/twitcurl/wiki/WikiHowToUseTwitcurlLibrary
 [2]: https://dotinstall.com/lessons/twitter_bot_php
 [3]: https://www.postgresql.jp/document/8.0/html/install-post.html
 [4]: https://picasaweb.google.com/lh/photo/8jMlfdkUM5ib3lOesoNoSTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [5]: https://picasaweb.google.com/lh/photo/FyFBH579BP6DoT2EL6GvYjyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite