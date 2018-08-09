---
author: admin
categories:
- Emacs
date: 2013-04-20T10:51:04+00:00
dsq_thread_id:
- 3.7054917e+09
pvc_views:
- 5517
tags:
- cygwin
title: ストレス社会を乗り切るために！cygwinとemacsの起動が遅い場合の高速化２選(emacsclient)
type: post
url: /archives/=1273
---

私はWindows上でCygwinとEmacsをガリガリ使っているひとですが、悩みは

<font color="#ff0000" size="4">起動が遅いことヽ(`Д´)ﾉ</font>

である。cygwinの起動は10秒くらい、emacsも5秒くらいかかり、イライラする。

そこで、そんなストレス社会を薬物に頼らずに乗り切るために、起動高速化のための方法を調べてみたので、まとめてメモしておく。

### Cygwin起動高速化の方法(/etc/bash_completion)

私はCygtermでCygwinを起動している。起動時にcygwinはいろいろな設定をしているのだが、特に時間がかかる原因が

/etc/bash_completion

の読み込みらしい。なので、この/etc/bash_completionを読み込まないように設定する。行頭にreturnを挿入することで解決。

以下の記事が参考になった。

<a href="https://www.mazn.net/blog/2010/10/31/324.html" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://www.mazn.net/blog/2010/10/31/324.html" width="150" height="130" /></a> <a style="color: #0070c5" href="https://www.mazn.net/blog/2010/10/31/324.html" target="_blank">Cygwin 1.7 の起動が遅い@ Windows 7 x64 | Mazn.net</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://www.mazn.net/blog/2010/10/31/324.html" />  <br style="clear: both" />

\# この項は今後も調べたら追加するかも。。

### Emacs起動高速化の方法(emacsclient)

次に、emacsの起動。

Emacsは起動時にいろいろな設定ファイルを開くので、時間がかかるのは仕方がないEmacsは一度立ち上げたらめったに落とすものではないのだ。それが正しい使い方なのである。

しかし、簡単な設定ファイルを開こうとする度に5秒待たされたのでは溜まったものではない。そんなときに役に立つのが、EmacsServerとEmacsClientだ。

EmacsServerを立ちあげると、以後にemacsで編集をするときは、emacsClientからServerに通信してすでに開いているEmacs上で編集することがデキる。つまり、emacsを起動しなくても編集できる。

#### EmacsServerの立ちあげ

Emacsサーバを立ち上げるためには、Emacs上で

> "M-x server-start"

と打ち込む。これだと、いちいちコマンドを打ち込まないといけないので、起動設定ファイルに以下を入力することで、起動時に自動でサーバを起動できる。

自分の場合は、$HOME/.emacs.d/init.el)に以下の設定を追加した。.emacsでもよい。自分の設定に合わせて。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:60848760-81b1-43e7-8050-35e73160fac6" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">; server start for emacs-client
(require 'server)
(unless (server-running-p)
  (server-start))
</pre>
</div>

または、デーモンを起動しておけば、ウィンドウを閉じていてもバックグラウンドでサーバが立ち上がる。コマンドラインから以下のコマンドを叩く。

$ emacs -daemon

また、emacs daemonの終了は以下の通り

$&#160; emacsclient -e &#8216;(kill-emacs)&#8217;
    


再起動も含め、シェルにしておくとよい。



&#160;

#### EmacsClientで編集する

いつもは、emacsでファイルを編集しようとしていたものを、emacsclient.exeで編集する。

> $ emacsclient .bashrc
      
>   
> Waiting for Emacs&#8230;

これでサーバ上でファイルが編集できる。もっと便利にするためには、aliasを切るとよい。これもcygwin起動ファイルに以下を追加。(自分の場合は.bashrc)

> alias emacs="emacsclient.exe -nw"

デフォルトでemacsclientを使うように指定する。"-nw"オプションをつけることで、今開いているターミナル上でファイルが編集できる。閉じるときは"Ctrl + x + #"で。

参考:[emacsclientを使おう &#8211; Life is very short][1]

これで、ストレスにつぶれてこの世を呪うことなく生きることができる。

 [1]: https://d.hatena.ne.jp/syohex/20101224/1293206906