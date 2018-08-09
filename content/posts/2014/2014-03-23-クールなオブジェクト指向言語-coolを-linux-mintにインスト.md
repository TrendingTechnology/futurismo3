---
author: admin
categories:
- Linux
- 技術メモ
date: 2014-03-23T09:53:00+00:00
dsq_thread_id:
- 3.7295875e+09
excerpt: Coolを Linux Mintにインストールしたメモ
pvc_views:
- 1641
tags:
- Compiler
- Cool
- coursera
title: クールなオブジェクト指向言語 Coolを Linux Mintにインストール
type: post
url: /archives/=2346
---

Coolは、Classroom object Oriented Languageの略。 

<ul class="org-ul">
  <li>
    <a href="https://en.wikipedia.org/wiki/Cool_(programming_language)">Cool (programming language) &#8211; Wikipedia, the free encyclopedia</a>
  </li>
</ul>

文字通り、教育用オブジェクト指向言語。 

courseraで始まったCompilerの講義でつかう。この言語で、コンパイラの仕組みを学ぶ。 

<ul class="org-ul">
  <li>
    <a href="https://www.coursera.org/course/compilers">Compilers | Coursera</a>
  </li>
</ul>

Linux Mintにインストールしたメモです。 

<div id="outline-container-sec-0-1" class="outline-3">
  <h3 id="sec-0-1">
    環境
  </h3>
  
  <div class="outline-text-3" id="text-0-1">
    <ul class="org-ul">
      <li>
        Linux Mint 16
      </li>
    </ul>
  </div></p>
</div>

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    インストール
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      まずは、依存ライブラリをインストール。
    </p>
    
    <pre><code>
sudo apt-get install flex bison build-essential csh openjdk-6-jdk libxaw7-dev
</code></pre>
    
    <p>
      つづいて、Coolをインストール。
    </p>
    
    <pre><code>
sudo mkdir /usr/class
sudo chown $USER /usr/class
cd /usr/class
wget https://spark-university.s3.amazonaws.com/stanford-compilers/vm/student-dist.tar.gz
tar -xf student-dist.tar.gz
ln -s /usr/class/cs143/cool ~/cool
</code></pre>
    
    <p>
      最後にパスを通す。
    </p>
    
    <pre><code>
export PATH=/usr/class/cs143/cool/bin:$PATH
</code></pre></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    Hello Cool
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      お決まりのHello Worldをしてみる。
    </p>
    
    <p>
      といっても、/usr/class/cs143/examples/hello_world.cl にサンプルがある。
    </p>
    
    <pre><code>
class Main inherits IO {
   main(): SELF_TYPE {
        out_string("Hello, World.\n")
   };
};
</code></pre>
    
    <p>
      コンパイルして実行。
    </p>
    
    <pre><code>
$ cp /usr/class/cs143/examples/hello_world.cl .
$ coolc hello_world.cl
$ spim hello_world.s
SPIM Version 6.5 of January 4, 2003
Copyright 1990-2003 by James R. Larus (larus@cs.wisc.edu).
All Rights Reserved.
See the file README for a full copyright notice.
Loaded: /usr/class/cs143/cool/lib/trap.handler
Hello, World.
COOL program successfully executed
Stats -- #instructions : 152
         #reads : 27  #writes 22  #branches 28  #other 75
</code></pre></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    Emacs mode
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      こんなのがあるらしい。未検証だけど、リンクだけはっておく。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://bitbucket.org/srirampc/cool-mode/overview">srirampc / cool-mode — Bitbucket</a>
      </li>
      <li>
        <a href="https://github.com/markxnelson/cool-mode.git">https://github.com/markxnelson/cool-mode.git</a>
      </li>
    </ul>
  </div></p>
</div>