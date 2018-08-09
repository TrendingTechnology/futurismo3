---
author: admin
categories:
- Ruby
date: 2013-06-02T23:35:12+00:00
dsq_thread_id:
- 3.6975524e+09
pvc_views:
- 4712
tags:
- cygwin
title: Cygwin上のRuby1.9をrbenvで最新版Ruby2.0にバージョンアップしたの巻
type: post
url: /archives/=1383
---

### はじめに

タイトル通りです。Rubyをrbenvで最新版にバージョンアップする方法を調べたのでまとめます。

Ruby2.0は、1.9系に比べてrequireする速度が2.5倍！ときいたので、是非移行したくなりました！(・∀・)

[toc] 

### rbenvのインストール

#### rbenvとは

rbenvとは、Rubyの版数を管理するためのツール。これを使ってRubyのバージョンアップをします。Rubyの版数管理だと、rvmもあるけれども、rbenvは後発のツールで、Rubyのみに特化した、シンプルなツールらしい。

[sstephenson/rbenv ・ GitHub][1]

#### rbenvのインストール

rbenvはgithubで公開されているツールなので、gitを使って取得します。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:0b4b0e00-5216-40d5-9285-368397dea466" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c"># ホームディレクトリに移動
cd 
# githubから rbenv取得。~/.rvenvに置きます。
git clone git://github.com/sstephenson/rbenv.git .rbenv
</pre>
</div>

#### rbenvの設定

rbenvにパスを通すために、ログインシェルにパスを追記します。自分の場合は、.zshrcに以下を追記した。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:d7e7b0ea-50f4-47c0-aff5-8f3921b91fe0" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c"># .rvenvディレクトリがあるときだけ設定を追加
if [ -d ${HOME}/.rbenv  ] ; then
    PATH=${HOME}/.rbenv/bin:${PATH}
    export PATH
    eval "$(rbenv init -)"
fi</pre>
</div>

source .zshrcで読み込み。

ちなみに、この設定をいれたら、.zshrcの読み込みが遅くなった気がするので、普段はこの記述はコメントアウトしておくことにしました。

#### rbenv-buildとrvenv-gemsetのインストール

rbenvだけだと、Rubyをビルドすることができないため、rbenv-buildもインストールします。 

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:9783d17e-5982-4dbf-a27a-22f8ba40bc61" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">mkdir -p ~/.rbenv/plugins
cd ~/.rbenv/plugins
# rbenv-build
git clone git://github.com/sstephenson/ruby-build.git
</pre>
</div>

### rbenvで最新版Ruby2.0をインストールしてみる

まずは、利用できるバージョンを確認する。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:4df99209-d3f0-48cb-8640-a7c2c3dec547" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">% ~/.rbenv/plugins/ruby-build/bin/ruby-build --definitions
2.0.0-dev
2.0.0-p0
2.0.0-p195
</pre>
</div>

最新安定版である Ruby 2.0.0-p195を入れます。Cygwinでコンパイルをすると、想像を絶するほどの時間がかかった。-vをつけると、コンパイルの様子が出力される。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:c88f4d92-04c5-443e-b820-5c1422878fe9" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">%　rbenv install 2.0.0-p195 -v</pre>
</div>

と、ここでエラーした。。。。(´･ω･｀)

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:f29b1399-90fd-4716-8f21-c65db422e0a0" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c#">compiling process.c
In file included from ./include/ruby/ruby.h:1567:0,
                 from process.c:14:
./include/ruby/intern.h:293:72: warning: 'struct timeval' declared inside parameter list
./include/ruby/intern.h:293:72: warning: its scope is only this definition or declaration, which is probably not what you want
In file included from ./include/ruby/ruby.h:1567:0,
                 from process.c:14:
./include/ruby/intern.h:412:1: warning: 'struct timeval' declared inside parameter list
./include/ruby/intern.h:413:79: warning: 'struct timeval' declared inside parameter list
./include/ruby/intern.h:414:32: warning: 'struct timeval' declared inside parameter list
process.c: In function 'rb_f_sleep':
process.c:4105:2: error: type of formal parameter 1 is incomplete
Makefile:325: recipe for target `process.o' failed
make: *** [process.o] Error 1</pre>
</div>

回避方法を参考して、ソースをダウンロードしたところで一旦 Ctrl+Zで止めて、/tmp配下にあるrubyソースの中の、include/ruby/intern.hに，「#include <sys/time.h>」を追記する。Windows 7，8での不具合っぽい。

[Rubyのスナップショットをビルド―2.1.0dev & 2.0.0対応― &#8211; わさっき][2]

気を取り直して、再度コンパイルをかけると、opensslのなにかでハング！

止まった。。。(´･ω･｀)。。。困った。。。(´･ω･｀)

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:5fb20c77-5def-4172-9959-2268a14c60df" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">make[1]: ディレクトリ `/tmp/ruby-build.20130602153618.8580/ruby-2.0.0-p195' から出ます
configuring io/nonblock
configuring io/wait
configuring json
configuring json/generator
configuring json/parser
configuring mathn/complex
configuring mathn/rational
configuring nkf
configuring objspace
configuring openssl
</pre>
</div>

これも、ググったら回避方法が載っていた。./cofigureにオプションを設定すればよいようだ。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:9a07d038-43e7-42d9-887b-ae9339816ac3" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">CONFIGURE_OPTS=-"-with-opt-dir=/usr/local" rbenv install 2.0.0-p195 -v</pre>
</div>

これでOK.こんなに苦戦するとは。。。最後に、おまじないを叩いて終了。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:97d37394-3442-4564-a306-cd7484be4f34" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">% rbenv rehash</pre>
</div>

2.0.0に切り替える。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:f6849a66-b8bb-48f2-a744-605d095ea702" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c"># インストールされているRubyのバージョンを確認
% rbenv versions
* system
  2.0.0-p195 (set by /home/TSUNEMICHI/.rbenv/version)
# 2.0をいつものバージョンにする
% rbenv global 2.0.0-p195</pre>
</div>

&#160;

### おわりに

rbenvは、いろんなRuby版数を簡単に切り替える機能もあります。なので、試しにRubyを最新版にあげてみて、動かなかったら古い版数に戻したり、特定のディレクトリ配下だけを古い版数で動かしたり、なんていう設定も可能です。

体感的には、2.0にしても速度が向上したようには感じされなかった。（むしろ・・・おそorz）CygwinでRubyが異常に遅いことは有名らしい。Linuxではそんなことはないらしい。（3倍速？）Cygwin上にRubyを動作させることがはかないあやまちのような気がした。

#### 環境

  * Cygwin 1.7 
  * Ruby 1.9.3 -> 2.01 

#### 参考記事

  * [最新Rubyを使いたいけど「動かない」の心配をしている人へ|rbenv。 &#8211; むかぁ～ どっと こむ][3] 
  * [* Cygwin &#8211; rbenv インストール！ &#8211; mk-mode BLOG][4] 
  * [rvmを捨ててrbenvを使おう &#8211; それマグで！][5] 
  * [rbenvで管理しているrubyのバージョンを2.0.0-p195にアップデートする手順 #rbenv #Ruby &#8211; Qiita [キータ]][6]

 [1]: https://github.com/sstephenson/rbenv
 [2]: https://d.hatena.ne.jp/takehikom/20130516/1363359600
 [3]: https://mukaer.com/archives/2012/03/12/rubyrbenv/
 [4]: https://www.mk-mode.com/octopress/2012/07/20/20002001/
 [5]: https://takuya-1st.hatenablog.jp/entry/20121104/1352015815
 [6]: https://qiita.com/items/5d000afa6571c71c2723