---
author: admin
categories:
- 未分類
date: 2013-05-25T12:56:28+00:00
dsq_thread_id:
- 3.7117908e+09
pvc_views:
- 10476
tags:
- cygwin
- zsh
title: zshは至高の利便性？！Cygwinにzshをインストール＆設定した導入方法まとめ
type: post
url: /archives/=1363
---

シェルのなかで、至高の利便性を誇ると言われているzshを試してみました。きっかけは、この本を読んだので。作業メモを兼ねて、簡単に使い方を書きます。

<div class="amazlink-box" style="overflow: hidden; font-size: small; zoom: 1; padding-bottom: 20px; text-align: left">
  <div class="amazlink-list" style="clear: both">
    <div class="amazlink-image" style="float: left; margin: 0px 12px 1px 0px">
      <a href="https://www.amazon.co.jp/zsh%E6%9C%80%E5%BC%B7%E3%82%B7%E3%82%A7%E3%83%AB%E5%85%A5%E9%96%80-%E4%B8%AD%E5%B3%B6-%E8%83%BD%E5%92%8C/dp/479811815X%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D479811815X" rel="nofollow" target="_blank"><img style="border-top-style: none; border-left-style: none; border-bottom-style: none; border-right-style: none" src="https://ecx.images-amazon.com/images/I/41hfmaKyVgL._SL160_.jpg" /></a>
    </div>
    
    <div class="amazlink-info" style="margin-bottom: 10px">
      <div class="amazlink-name" style="margin-bottom: 10px; line-height: 120%">
        <a href="https://www.amazon.co.jp/zsh%E6%9C%80%E5%BC%B7%E3%82%B7%E3%82%A7%E3%83%AB%E5%85%A5%E9%96%80-%E4%B8%AD%E5%B3%B6-%E8%83%BD%E5%92%8C/dp/479811815X%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D479811815X" rel="nofollow" target="_blank">zsh最強シェル入門</a>
      </div>
      
      <div class="amazlink-powered" style="font-size: 80%; margin-top: 5px; line-height: 120%">
        posted with <a title="アマゾンアフィリエイトリンク作成ツール" href="https://amazlink.keizoku.com/" target="_blank">amazlink</a> at 13.05.20
      </div>
      
      <div class="amazlink-detail">
        中島 能和
      </div>
      
      <div class="amazlink-sub-info" style="float: left">
        <div class="amazlink-link" style="margin-top: 5px">
          <img src="https://amazlink.fuyu.gs/icon_amazon.png" width="18" /><a href="https://www.amazon.co.jp/zsh%E6%9C%80%E5%BC%B7%E3%82%B7%E3%82%A7%E3%83%AB%E5%85%A5%E9%96%80-%E4%B8%AD%E5%B3%B6-%E8%83%BD%E5%92%8C/dp/479811815X%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D479811815X" rel="nofollow" target="_blank">Amazon</a> <img src="https://amazlink.fuyu.gs/icon_rakuten.gif" width="18" /><a href="https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/archives/c=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F5923834%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D5923834%26surl%3Dbook" rel="nofollow" target="_blank">楽天</a>
        </div></p>
      </div></p>
    </div></p>
  </div></p>
</div>

&#160;

### zshとは

zshとは、シェルの種類のひとつ。Bashやtcshなどの、全てのシェルのいいとこどりをして開発された至高のシェル。"z"というのは、これで" これでシェルは完成で終わりだよ" という意味。

[Z Shell &#8211; Wikipedia][1]

### zsh導入まで

#### zshインストール方法

Cygwinパッケージに含まれているので、setup.exeかapt-cygで取得します。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:4d461acc-22e2-44d4-8c3a-5a211dee98fd" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">$ apt-cyg install zsh
$ zsh --version
zsh 5.0.2 (i686-pc-cygwin)</pre>
</div>

zshと打ち込むとzshになります。入力のためのコンソールが%になりました。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:b1c5477a-749a-4ca9-bc38-4c8d7f1de658" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c"># zshに切り替える
zsh</pre>
</div>

#### zshをログインシェルにする

ログインしたときに、zshが起動するように設定します。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:1386028a-110d-42f8-9616-aa60f7118646" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c"># ログインシェルの確認
% echo $SHELL
/bin/bash</pre>
</div>

普通はchshを利用するけれども、Cygwinではそれがない！なので、/etc/passwdを直接書き換えます。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:d44717f7-f39c-4d78-9202-a18606bc5936" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">% emacs /etc/passwd

# 変更前
tsu-nera:unused:1000:513:U-TSUNEMICHI-VAIO\TSUNEMICHI,S-1-5-21-2209003112-325970183-628590984-1000:/home/TSUNEMICHI:/bin/bash

# 変更後
tsu-nera:unused:1000:513:U-TSUNEMICHI-VAIO\TSUNEMICHI,S-1-5-21-2209003112-325970183-628590984-1000:/home/TSUNEMICHI:/usr/bin/zsh

</pre>
</div>

すると、CygwinやCygtermはみごとzshで起動。しかし、母艦terminalのminttyだけがbashのまま・・・・(´･ω･｀)。

いろいろと頑張ること１時間・・・<font color="#0000ff" size="4">ついにわかった！(・∀・)</font>

ユーザ環境変数で、$SHELLがbashだった。

コントロールパネル &#8211; > システム -> システムの詳細設定 -> 環境変数からユーザ環境変数の設定画面へ。/bin/bashをを/usr/bin/zshに変更することで、minttyもzshで起動するようになった(^O^)

### .zshrcの作成

.zshrcを作成すると、ログイン時に読み込まれる。$HOMEディレクトリにまずは作成。

touch .zshrc

.zshrcに書く内容は、いろんなサイトを参考に作ってみた。

[自分の.zshrcファイルを公開 &#8211; 世界中の羊をかき集めて][2]

あと、zsh最強シェル入門の本も参考にした。以下、便利そうなのをつまんで紹介。

### screenで端末間のヒストリ機能の共有

zshは強力なヒストリ機能が魅力。特に、screenコマンドを使っていると、端末で実行したコマンドを全て共有したい場合がある。zshならば、端末ごとの共有だってできてしまう。以下2つの設定で有効になる。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:4e73429b-ef40-4e30-8683-bd29e1f0e4a0" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">## Screenでのコマンド共有用
## シェルを横断して.zshhistoryに記録
setopt inc_append_history
## ヒストリを共有
setopt share_history
</pre>
</div>

他にも、重複排除などの機能もたくさん。

### カレントディレクトリの表示

zshを利用すると、コンソール上にカレントディレクトリも表示することができる。もうpwdなんていらないのである。設定は以下。

[<img title="SnapCrab_NoName_2013-5-24_17-47-24_No-00" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="SnapCrab_NoName_2013-5-24_17-47-24_No-00" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/SnapCrab_NoName_2013-5-24_17-47-24_No-00_thumb.png" width="488" height="58" />][3] 

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:fc5e64a2-a266-48c3-a917-88333f7f10e7" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c"># 色有効
autoload -U colors
colors

# 色を定義
local GREEN=$'%{\e[1;32m%}'
local BLUE=$'%{\e[1;34m%}'
local DEFAULT=$'%{\e[1;m%}'

# 通常のプロンプト
PROMPT=$BLUE'[%n]%# '$WHITE
# 右側のプロンプト。ここでカレントディレクトリを出す。
RPROMPT=$GREEN'[%~]'$WHITE
setopt transient_rprompt
</pre>
</div>

  * [zshで右プロンプトを自動的に消す &#8211; まちゅダイアリー(2013-01-14)][4] 
  * [zsh &#8211; まちゅダイアリー(2004-03-29)][5] 

### グローバルエイリアスの設定

グローバルエイリアスを設定することで、<span style="white-space: normal; text-transform: none; word-spacing: 0px; float: none; color: rgb(74,74,74); font: 14px/22px &#39;Helvetica Neue&#39;, helvetica, arial, sans-serif; display: inline !important; letter-spacing: normal; background-color: rgb(255,255,255); text-indent: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px"><font face="Helvetica">コマンドの任意の場所で展開できるようになる。zshだけの機能。</font></span>

<span style="white-space: normal; text-transform: none; word-spacing: 0px; float: none; color: rgb(74,74,74); font: 14px/22px &#39;Helvetica Neue&#39;, helvetica, arial, sans-serif; display: inline !important; letter-spacing: normal; background-color: rgb(255,255,255); text-indent: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px"><font face="Helvetica">例えば、</font></span><span style="white-space: normal; text-transform: none; word-spacing: 0px; float: none; color: rgb(74,74,74); font: 14px/22px &#39;Helvetica Neue&#39;, helvetica, arial, sans-serif; display: inline !important; letter-spacing: normal; background-color: rgb(255,255,255); text-indent: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px">ls -l L と入力すると、ls -l | less というように変換される。</span>

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:88142ba1-f4c1-4297-9f1d-67502647e693" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">alias -g L='| less'
alias -g H='| head'
alias -g T='| tail'
alias -g G='| grep'
alias -g GI='| grep -i'
</pre>
</div>

### Cygwinでwindowsパス形式のWaringを抑止する

zshでの操作の途中でこんなエラーが出る。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:5d9767f2-e203-4565-b797-7e9faa222c5a" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c:nogutter:nocontrols">  MS-DOS style path detected: ./.zshrc\~
  Preferred POSIX equivalent is: ./.zshrc/~
  CYGWIN environment variable option "nodosfilewarning" turns off this warning.
  Consult the user's guide for more details about POSIX paths:
    https://cygwin.com/cygwin-ug-net/using.html#using-pathnames
</pre>
</div>

これは、CygwinがWindowsパス形式をWaringとするため。コントロールパネル &#8211; > システム -> システムの詳細設定 -> 環境変数からシステム環境変数の設定画面へ。

CYGWIN=nodosfilewarningというように、環境変数追加するとよい。

[<img title="SnapCrab_環境変数_2013-5-22_8-21-18_No-00" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="SnapCrab_環境変数_2013-5-22_8-21-18_No-00" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/SnapCrab__2013-5-22_8-21-18_No-00_thumb.png" width="420" height="377" />][6]

[gnupack Users Guide &#8211; 技術情報][7]

&#160;

他にも便利そうな機能はたくさんあるけれども、とりあえずはこのへんでやめておく。

 [1]: https://ja.wikipedia.org/wiki/Z_Shell
 [2]: https://d.hatena.ne.jp/shepherdMaster/20110924/1316881131
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/SnapCrab_NoName_2013-5-24_17-47-24_No-00.png
 [4]: https://www.machu.jp/diary/20130114.html#p01
 [5]: https://www.machu.jp/diary/20040329.html#p01
 [6]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/SnapCrab__2013-5-22_8-21-18_No-00.png
 [7]: https://gnupack.sourceforge.jp/docs/current/UsersGuide_technical_info.html