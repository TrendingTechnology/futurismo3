---
author: admin
categories:
- Linux
- Ruby
date: 2013-05-13T15:19:18+00:00
dsq_thread_id:
- 3.704901e+09
pvc_views:
- 5073
title: Linuxで任意のディレクトリにRubyをインストールする方法メモ
type: post
url: /archives/=1329
---

Linuxだと、管理者しかツールをインストールできないとおもってたけど、それはオバカな勘違いだった。管理者でない一般ユーザだって、好きなディレクトリに配置して使うことがデキる。

本題。会社のサーバにRubyがはいってないけど、Rubyでいろいろスクリプトを書きたいので、Rubyを任意のディレクトリにインストールする方法を調べてみた。

#### 環境

  * Ubuntu
  * Ruby 2.0.0

### Rubyをローカルディレクトリにインストールする手順

#### Rubyソースの取得

まずは、ソースを取得します。Rubyソースは、ここからダウンロードできます。ここでは現時点での最新版、<span style="text-align: left; text-transform: none; background-color: rgb(255,255,255); text-indent: 0px; letter-spacing: normal; display: inline !important; font: 13px/20px verdana, geneva, arial, helvetica, sans-serif; white-space: normal; float: none; color: rgb(0,0,0); word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px"><font face="Verdana">2.0.0-p0</font></span>をダウンロードする。

  * [<font color="#0066cc">https://www.ruby-lang.org/ja/downloads/</font>][1]
  * ruby-2.0.0-p0.tar.gz

### Rubyのインストール

解凍して、とりあえずどこでもいいので置く。

> $ tar zxvf ruby-2.0.0-p0.tar.gz   
> $ruby-2.0.0-p0

次に、./configを実行してMakefileを作るときに、オプションでインストールしたいディレクトリを指定。ここがミソ。ここでは、$HOME/local配下にインストールする。

<font size="4"><u>$ ./configure &#8211;prefix=$HOME/local</u></font>

Tipsとしては、RDocのインストールしないように指定したほうがよいかも。容量を節約。

&#8211;disable-install-doc

あとは、いつもどおりコンパイルして、インストールするだけ。

> $ make   
> $ make install

インストールできたかどうか確認する。

> <tsu-nera@tsunera-virtual-machine:~/local$> ls   
> bin&#160; include&#160; lib&#160; share
> 
> <tsu-nera@tsunera-virtual-machine:~$> /home/tsu-nera/local/bin/ruby -v   
> ruby 2.0.0p0 (2013-02-24 revision 39474) [i686-linux]

ここは、絶対パスを入力する必要がある。

### Rubyスクリプトとして実行する

スクリプトとして実行するには、スクリプトの第一行目に、パスを書きます。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:07f6be8f-bd12-4ae7-ae2b-4dd5fc121323" class="wlWriterEditableSmartContent">
  <pre name="code" class="ruby">#!/home/tsu-nera/local/bin/ruby

num = 1

puts  num

</pre>
</div>

### 実行パスを追加する

インストールしたディレクトリにパスを通すことで、ruby hogehoge.rbで、rubyを実行することができる。ログインシェルの設定ファイルで以下を追加します。例えば、.bashrcは、

PATH=$PATH:$HOME/local/bin

#### 参考記事

  * [さくらインターネットサーバに Ruby 1.9 をインストール &#8211; vivid memo][2]
  * [さくらインターネットのレンタルサーバに Ruby 1.9.3 を入れた &#8211; ema log(2011-11-04)][3]

 [1]: https://www.ruby-lang.org/ja/downloads/
 [2]: https://d.hatena.ne.jp/vividcode/20100221/1266756694
 [3]: https://emaame.com/20111104.html