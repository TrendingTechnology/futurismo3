---
author: admin
categories:
- 技術メモ
date: 2012-04-18T11:16:29+00:00
dsq_thread_id:
- 3.6972905e+09
pdrp_attributionExtended:
- 1
pdrp_attributionLocation:
- end
pvc_views:
- 4650
tags:
- cygwin
- doxygen
title: Cygwinでdoxygenコンパイルエラ－
type: post
url: /archives/=30
---

doxygenのソ－スをCygwinでコンパイルしたら以下のエラ－が出てコンパイルが停止

<pre lang="unix">./configure --prefix /usr/local
Autodetected platform win32-g++...
Checking for GNU make tool... using /usr/bin/make
Checking for GNU install tool... using /usr/bin/install
Checking for dot (part of GraphViz)... not found!
Checking for perl... using /usr/bin/perl
Checking for flex... not found!</pre>

いろいろと足りないものがあるので指摘されたものをsetup.exeで手に入れて再度実行。
  
./configreは通る。
  
しかしmakeでエラ－

<pre lang="unix">portable_c.c:1:19: iconv.h: No such file or directory</pre>

調べて見たらlibiconvというものが必要みたい。
  
Cygwin の　setup.exeで手に入れて再度makeを実行したら、コンパイル成功ﾂꀀ<https://sourceforge.net/projects/doxygen/forums/forum/130996/topic/3136999>

make install で再度エラ－

<pre lang="unix">$ make install
/usr/bin/install -d //usr/local/bin
/usr/bin/install: cannot create directory `//usr': Read-only file system
Makefile:76: recipe for target `install' failed
make: *** [install] Error 1
</pre>

どうも &#8216;//usr&#8217;が悪いみたいなので

<pre>./configure --prefix usr/local
</pre>

と変更したら成功。

続いてﾂꀀmake docs_installで失敗
  
epstopdfがないと言われる。

ここでわからず挫折。

<div id="fastlookup_top" style="display: none;">
</div>