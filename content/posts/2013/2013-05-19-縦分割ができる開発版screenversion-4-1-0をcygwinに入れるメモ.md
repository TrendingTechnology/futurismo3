---
author: admin
categories:
- 日記
date: 2013-05-19T11:56:07+00:00
dsq_thread_id:
- 3.693667e+09
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
- 5156
side:
- "y"
tags:
- cygwin
- screen
title: 縦分割ができる開発版screen(version 4.1.0)をCygwinに入れるメモ
title_view:
- "y"
type: post
url: /archives/=1352
---

<!--:ja-->

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="SnapCrab_~_2013-5-19_20-46-31_No-00" border="0" alt="SnapCrab_~_2013-5-19_20-46-31_No-00" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/SnapCrab__2013-5-19_20-46-31_No-00_thumb.png" width="545" height="342" />][1]

最近イタク感動を覚えた記事が以下です。

<a href="https://shyouhei.tumblr.com/post/313410522/screenrc" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://shyouhei.tumblr.com/post/313410522/screenrc" width="150" height="130" /></a> <a style="color: #0070c5" href="https://shyouhei.tumblr.com/post/313410522/screenrc" target="_blank">卜部昌平のあまりreblogしないtumblr &#8211; 俺の .screenrc が火を吹くぜ</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://shyouhei.tumblr.com/post/313410522/screenrc" />  <br style="clear: both" />

&#160;

<font color="#0000ff" size="5">スッゲー！Σ(ﾟДﾟﾉ)ﾉ</font>

いつかはこんな画面を目指して自分も精進しようと決意しました。screenはデフォルトでは横分割しかできないけれども、開発版のscreenはなんと縦分割が可能！ということで、開発版のscreen(version 4.1.0)をソースからコンパイルしてみました。

縦分割はtmuxも実現可能。最近はtmuxが熱いらしい。screenは終わったとかうわさをきいたが、Google検索調査ではこんなかんじだった。

[![][2]][3] 

&#160;

### screenとは

screenとは、GNU プロジェクトのひとつ。今は、

[GNU Screen &#8211; GNU Project &#8211; Free Software Foundation][4]

仮想端末作り出し、端末を切り替えながら作業することを助けるツール。一つのコンソール上で、バーチャルなコンソールをいくつも作成して、それらをコマンドラインから切り替えられる。Emacsでも画面分割ができるが、あれをコンソールで実現する感じ。

コンソール画面を10個くらい開いている自分にとっては神ツールだ。

### 最新版 GNU screeenをインストールする

最新版は、ソースからコンパイルして、インストールする。

#### 事前準備

以下のツールがコンパイルに必要なので、まだCygwinに入っていない場合はインストールすること。

  * gcc4 
  * autoconf 
  * automake 
  * libncurses-devel 
  * git 
  * libcrypt-devel
  * ncurses(make installするとき、tieというコマンド実行で必要っぽい。これでえらーした） 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:641976cc-0666-403b-90dd-3c0663f5cf49" class="wlWriterEditableSmartContent">
  <pre name="code" class="c:nogutter">$ apt-cyg install gcc4 autoconf automake libncurses-devel</pre>
</div>

gccのバージョンは4である必要があるので、一応確認。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:c7d089b0-d6c7-4a5c-8ac3-1bd0b87d0be7" class="wlWriterEditableSmartContent">
  <pre name="code" class="c:nogutter:nocontrols">$ gcc --version
gcc (GCC) 4.5.3
Copyright (C) 2010 Free Software Foundation, Inc.
</pre>
</div>

#### ソースの取得

githubより取得して、github用のスクリプトを実行します。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:b5a00a45-9bc3-4372-8436-3b9aeeba0563" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">$ git clone git://git.sv.gnu.org/screen.git
$ cd screen/src
$ ./autogen.sh
</pre>
</div>

./configureを実行。デフォルトでは/usr/bin配下にインストールされるので、自分でインストール場所を変えたい場合は、./configure &#8211;prefix="hogehoge/hogehoge"で指定する。また、&#8211;enable-colors256を指定すると、256色が利用できる。

これでMakefileが生成されたらmakeする。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:cd8ac017-259b-4bcb-bb1a-fb337cfa2eb1" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">$ ./configure
$ make
$ make install</pre>
</div>

<font color="#0000ff" size="4"></font>

<font color="#0000ff" size="4">インストール完了！ミッションコンプリート！！━━v(o´∀｀o)v━━</font>

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:b4331e13-e718-45d6-931e-02ff22fd46a2" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">$ screen -v
Screen version 4.01.00devel (GNUc2cd059) 2-May-06</pre>
</div>



### GNU screen最新の縦分割を試す

#### 縦分割について

縦分割を実行するには、(デフォルトでは) Ctrl + a, |でいけます。
    
  
横分割は Ctrl + a, Sです。

グレイトな結果ですね。

[https://www.youtube.com/embed/p18lXnKlg9E?rel=0]

#### 256色の設定について

minttyで256色を有効にするには、.screenrcに以下を追記するとよい。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:12c67c30-ad8b-45c2-8c47-c72047710990" class="wlWriterEditableSmartContent">
  <pre name="code" class="c:nogutter"> TERM=xterm-256color screen</pre>
</div>

Cygtermだとこのリンクが参考になる。

  * [Cygwin+Cygterm+PuTTY+VIMで256colorが使えなかった理由がわかった &#8211; Tosikの雑記][5] 

.screenrcの設定や開発版の新機能の探検はまた今度で。

#### オススメ書籍

余談だけれども、screenについては以下の本で解説されている。zshの本なのに。。。

<div style="text-align: left; padding-bottom: 20px; zoom: 1; font-size: small; overflow: hidden" class="amazlink-box">
  <div style="clear: both" class="amazlink-list">
    <div style="margin: 0px 12px 1px 0px; float: left" class="amazlink-image">
      <a href="https://www.amazon.co.jp/zsh%E6%9C%80%E5%BC%B7%E3%82%B7%E3%82%A7%E3%83%AB%E5%85%A5%E9%96%80-%E4%B8%AD%E5%B3%B6-%E8%83%BD%E5%92%8C/dp/479811815X%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D479811815X" rel="nofollow" target="_blank"><img style="border-bottom: medium none; border-left: medium none; border-top: medium none; border-right: medium none" src="https://ecx.images-amazon.com/images/I/41hfmaKyVgL._SL160_.jpg" /></a>
    </div>
    
    <div style="margin-bottom: 10px; height: 160px" class="amazlink-info">
      <div style="line-height: 120%; margin-bottom: 10px" class="amazlink-name">
        <a href="https://www.amazon.co.jp/zsh%E6%9C%80%E5%BC%B7%E3%82%B7%E3%82%A7%E3%83%AB%E5%85%A5%E9%96%80-%E4%B8%AD%E5%B3%B6-%E8%83%BD%E5%92%8C/dp/479811815X%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D479811815X" rel="nofollow" target="_blank">zsh最強シェル入門</a>
      </div>
      
      <div style="line-height: 120%; margin-top: 5px; font-size: 80%" class="amazlink-powered">
        posted with <a title="アマゾンアフィリエイトリンク作成ツール" href="https://amazlink.keizoku.com/" target="_blank">amazlink</a> at 13.05.19
      </div>
      
      <div class="amazlink-detail">
        中島 能和<br />
      </div>
      
      <div style="float: left" class="amazlink-sub-info">
        <div style="margin-top: 5px" class="amazlink-link">
          <img src="https://amazlink.fuyu.gs/icon_amazon.png" width="18" /><a href="https://www.amazon.co.jp/zsh%E6%9C%80%E5%BC%B7%E3%82%B7%E3%82%A7%E3%83%AB%E5%85%A5%E9%96%80-%E4%B8%AD%E5%B3%B6-%E8%83%BD%E5%92%8C/dp/479811815X%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D479811815X" rel="nofollow" target="_blank">Amazon</a> <img src="https://amazlink.fuyu.gs/icon_rakuten.gif" width="18" /><a href="https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/archives/c=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F5923834%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D5923834%26surl%3Dbook" rel="nofollow" target="_blank">楽天</a>
        </div></p>
      </div></p>
    </div></p>
  </div>
</div>

#### 参考

  * [Cygwin で GNU Screen を使って画面の縦分割をしてみる | レンタルサーバー・自宅サーバー設定・構築のヒント][6] 
  * [最近の（僕の）GNU Screen 事情 | blog.remora.cx][7] 

<!--:-->

<!--:en-->

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="SnapCrab_~_2013-5-19_20-46-31_No-00" border="0" alt="SnapCrab_~_2013-5-19_20-46-31_No-00" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/SnapCrab__2013-5-19_20-46-31_No-00_thumb.png" width="545" height="342" />][1]

最近イタク感動を覚えた記事が以下です。

<a href="https://shyouhei.tumblr.com/post/313410522/screenrc" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://shyouhei.tumblr.com/post/313410522/screenrc" width="150" height="130" /></a> <a style="color: #0070c5" href="https://shyouhei.tumblr.com/post/313410522/screenrc" target="_blank">卜部昌平のあまりreblogしないtumblr &#8211; 俺の .screenrc が火を吹くぜ</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://shyouhei.tumblr.com/post/313410522/screenrc" />  <br style="clear: both" />

&#160;

<font color="#0000ff" size="5">スッゲー！Σ(ﾟДﾟﾉ)ﾉ</font>

いつかはこんな画面を目指して自分も精進しようと決意しました。screenはデフォルトでは横分割しかできないけれども、開発版のscreenはなんと縦分割が可能！ということで、開発版のscreen(version 4.1.0)をソースからコンパイルしてみました。

縦分割はtmuxも実現可能。最近はtmuxが熱いらしい。screenは終わったとかうわさをきいたが、Google検索調査ではこんなかんじだった。

[![][2]][3] 

&#160;

### screenとは

screenとは、GNU プロジェクトのひとつ。今は、

[GNU Screen &#8211; GNU Project &#8211; Free Software Foundation][4]

仮想端末作り出し、端末を切り替えながら作業することを助けるツール。一つのコンソール上で、バーチャルなコンソールをいくつも作成して、それらをコマンドラインから切り替えられる。Emacsでも画面分割ができるが、あれをコンソールで実現する感じ。

コンソール画面を10個くらい開いている自分にとっては神ツールだ。

### 最新版 GNU screeenをインストールする

最新版は、ソースからコンパイルして、インストールする。

#### 事前準備

以下のツールがコンパイルに必要なので、まだCygwinに入っていない場合はインストールすること。

  * gcc4 
  * autoconf 
  * automake 
  * libncurses-devel 
  * git 
  * ncurses(make installするとき、tieというコマンド実行で必要っぽい。これでえらーした） 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:641976cc-0666-403b-90dd-3c0663f5cf49" class="wlWriterEditableSmartContent">
  <pre name="code" class="c:nogutter">$ apt-cyg install gcc4 autoconf automake libncurses-devel</pre>
</div>

gccのバージョンは4である必要があるので、一応確認。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:c7d089b0-d6c7-4a5c-8ac3-1bd0b87d0be7" class="wlWriterEditableSmartContent">
  <pre name="code" class="c:nogutter:nocontrols">$ gcc --version
gcc (GCC) 4.5.3
Copyright (C) 2010 Free Software Foundation, Inc.
</pre>
</div>

#### ソースの取得

githubより取得して、github用のスクリプトを実行します。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:b5a00a45-9bc3-4372-8436-3b9aeeba0563" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">$ git clone git://git.sv.gnu.org/screen.git
$ cd screen/src
$ ./autogen.sh
</pre>
</div>

./configureを実行。デフォルトでは/usr/bin配下にインストールされるので、自分でインストール場所を変えたい場合は、./configure &#8211;prefix="hogehoge/hogehoge"で指定する。また、&#8211;enable-colors256を指定すると、256色が利用できる。

これでMakefileが生成されたらmakeする。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:cd8ac017-259b-4bcb-bb1a-fb337cfa2eb1" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">$ ./configure
$ make
$ make install</pre>
</div>

<font color="#0000ff" size="4"></font>

<font color="#0000ff" size="4">インストール完了！ミッションコンプリート！！━━v(o´∀｀o)v━━</font>

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:b4331e13-e718-45d6-931e-02ff22fd46a2" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">$ screen -v
Screen version 4.01.00devel (GNUc2cd059) 2-May-06</pre>
</div>



### GNU screen最新の縦分割を試す

#### 縦分割について

縦分割を実行するには、(デフォルトでは) Ctrl + a, |でいけます。
    
  
横分割は Ctrl + a, Sです。

グレイトな結果ですね。

[https://www.youtube.com/embed/p18lXnKlg9E?rel=0]

#### 256色の設定について

minttyで256色を有効にするには、.screenrcに以下を追記するとよい。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:12c67c30-ad8b-45c2-8c47-c72047710990" class="wlWriterEditableSmartContent">
  <pre name="code" class="c:nogutter"> TERM=xterm-256color screen</pre>
</div>

Cygtermだとこのリンクが参考になる。

  * [Cygwin+Cygterm+PuTTY+VIMで256colorが使えなかった理由がわかった &#8211; Tosikの雑記][5] 

.screenrcの設定や開発版の新機能の探検はまた今度で。

#### オススメ書籍

余談だけれども、screenについては以下の本で解説されている。zshの本なのに。。。

<div style="text-align: left; padding-bottom: 20px; zoom: 1; font-size: small; overflow: hidden" class="amazlink-box">
  <div style="clear: both" class="amazlink-list">
    <div style="margin: 0px 12px 1px 0px; float: left" class="amazlink-image">
      <a href="https://www.amazon.co.jp/zsh%E6%9C%80%E5%BC%B7%E3%82%B7%E3%82%A7%E3%83%AB%E5%85%A5%E9%96%80-%E4%B8%AD%E5%B3%B6-%E8%83%BD%E5%92%8C/dp/479811815X%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D479811815X" rel="nofollow" target="_blank"><img style="border-bottom: medium none; border-left: medium none; border-top: medium none; border-right: medium none" src="https://ecx.images-amazon.com/images/I/41hfmaKyVgL._SL160_.jpg" /></a>
    </div>
    
    <div style="margin-bottom: 10px; height: 160px" class="amazlink-info">
      <div style="line-height: 120%; margin-bottom: 10px" class="amazlink-name">
        <a href="https://www.amazon.co.jp/zsh%E6%9C%80%E5%BC%B7%E3%82%B7%E3%82%A7%E3%83%AB%E5%85%A5%E9%96%80-%E4%B8%AD%E5%B3%B6-%E8%83%BD%E5%92%8C/dp/479811815X%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D479811815X" rel="nofollow" target="_blank">zsh最強シェル入門</a>
      </div>
      
      <div style="line-height: 120%; margin-top: 5px; font-size: 80%" class="amazlink-powered">
        posted with <a title="アマゾンアフィリエイトリンク作成ツール" href="https://amazlink.keizoku.com/" target="_blank">amazlink</a> at 13.05.19
      </div>
      
      <div class="amazlink-detail">
        中島 能和<br />
      </div>
      
      <div style="float: left" class="amazlink-sub-info">
        <div style="margin-top: 5px" class="amazlink-link">
          <img src="https://amazlink.fuyu.gs/icon_amazon.png" width="18" /><a href="https://www.amazon.co.jp/zsh%E6%9C%80%E5%BC%B7%E3%82%B7%E3%82%A7%E3%83%AB%E5%85%A5%E9%96%80-%E4%B8%AD%E5%B3%B6-%E8%83%BD%E5%92%8C/dp/479811815X%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D479811815X" rel="nofollow" target="_blank">Amazon</a> <img src="https://amazlink.fuyu.gs/icon_rakuten.gif" width="18" /><a href="https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/archives/c=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F5923834%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D5923834%26surl%3Dbook" rel="nofollow" target="_blank">楽天</a>
        </div></p>
      </div></p>
    </div></p>
  </div>
</div>

#### 参考

  * [Cygwin で GNU Screen を使って画面の縦分割をしてみる | レンタルサーバー・自宅サーバー設定・構築のヒント][6] 
  * [最近の（僕の）GNU Screen 事情 | blog.remora.cx][7] 

<!--:-->

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/SnapCrab__2013-5-19_20-46-31_No-00.png
 [2]: //chart.googleapis.com/chart?cht=bhg&chs=400x200&chxt=y%2Cx&chxl=0%3A%7CGNU%20screen%7Ctmux&chdlp=r&chco=ffbf67&chxr=1%2C0%2C1360000&chbh=a&chd=t%3A61600%2C1360000&chtt=Google%20%E6%A4%9C%E7%B4%A2%E7%B5%90%E6%9E%9C%E6%95%B0%E3%81%AE%E6%AF%94%E8%BC%83&chds=0%2C1360000&chm=N**%2C666666%2C0%2C-1%2C12%2C0&chl
 [3]: https://konisimple.net/tool/google_graph/#tmux
 [4]: https://www.gnu.org/software/screen/
 [5]: https://d.hatena.ne.jp/tosik/20080716/1216180086
 [6]: https://server-setting.info/blog/cygwin-gnu-screen-install.html
 [7]: https://blog.remora.cx/2012/12/my-recent-screen-env.html