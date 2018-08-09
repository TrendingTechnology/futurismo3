---
author: admin
categories:
- 未分類
date: 2013-05-18T21:41:35+00:00
dsq_thread_id:
- 3.6961052e+09
pvc_views:
- 12362
tags:
- cygwin
title: Cygwinにnkfをインストールして文字化け攻略する！
type: post
url: /archives/=1331
---

Cygwin上でファイルを開くとたまに文字化けしてて、ほぞを噛む思いをすることがある。こんなときは、Linuxならばnkfコマンドでサクッと変換するのだが、どうやらCygwinにはnkfコマンドが入っていない。apt-cygしても、そのようなパッケージが見つからない。

というわけで、自力でnkfコマンドをインストールしてみました。

### Cygiwn上でのnkfインストール方法

Cygwin上でnkfコマンドを利用するには、ソースコードからコンパイルするしかない。まずは、nkfをSourceForgeから取得します。

  * <https://sourceforge.jp/projects/nkf/>
  * nkf-2.1.2.tar.gz

取得したら解凍してインストール。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:4bee5aad-0732-41cb-b484-5295a7b58dba" class="wlWriterEditableSmartContent">
  <pre name="code" class="c:nogutter">$ tar xvfz nkf-2.1.2.tar.gz
$ cd nkf-2.1.2
$ make
$ make install
</pre>
</div>

コレでインストール完了です。

$ which nkf
    
  
/usr/local/bin/nkf



nkfの使い方は以下を参照。

[Linuxコマンド集 &#8211; 【 nkf 】 文字コードを変換する：ITpro][1]

 [1]: https://itpro.nikkeibp.co.jp/article/COLUMN/20060227/230849/