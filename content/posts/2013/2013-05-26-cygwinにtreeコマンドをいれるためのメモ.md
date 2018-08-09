---
author: admin
categories:
- 未分類
date: 2013-05-26T06:38:48+00:00
dsq_thread_id:
- 3.7112653e+09
pvc_views:
- 3093
tags:
- cygwin
title: Cygwinにtreeコマンドをいれるためのメモ
type: post
url: /archives/=1373
---

Cygwinにはtreeコマンドがないようです。

いつものことながら手のかかる子( 一一)

ということで、ソースコードからインストールします。

### treeソースコードの入手

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:675f4e34-06e3-4f80-a582-f627cb1c45a1" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">curl -LO https://mama.indstate.edu/users/ice/tree/src/tree-1.6.0.tgz
tar xzfv tree-1.6.0.tgz
cd tree-1.6.0.tgz</pre>
</div>

&#160;

### treeコンパイル

続いてコンパイルですが、Cygwinの場合、makefileの修正が必要。Cygwinはコメントを外してくださいという箇所がMakefileのなかにあるので、コメントアウトを消します。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:d027c58d-63d4-4e37-beef-0766bc3bff30" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c"># Uncomment for Cygwin:
CFLAGS=-O2 -Wall -fomit-frame-pointer -DCYGWIN
LDFLAGS=-s
TREE_DEST=tree.exe
OBJS+=strverscmp.o
</pre>
</div>

&#160;

あとは、コンパイルしてインストールするだけ。デフォルトでは、/usr/bin配下にインストールされます。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:f67e9958-c1c0-4c33-b138-da2a11e5b66a" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">% make && make install
% tree
.
├── CHANGES
├── color.c
├── color.o
├── doc
│ﾂꀀﾂꀀ ├── tree.1
│ﾂꀀﾂꀀ ├── tree.1.fr
│ﾂꀀﾂꀀ └── xml.dtd
├── hash.c
├── hash.o
├── html.c
├── html.o
├── INSTALL
├── LICENSE
├── Makefile
├── Makefile~
├── README
├── strverscmp.c
├── strverscmp.o
├── TODO
├── tree.c
├── tree.exe
├── tree.h
├── tree.o
├── unix.c
├── unix.o
├── xml.c
└── xml.o

1 directory, 26 files
</pre>
</div>