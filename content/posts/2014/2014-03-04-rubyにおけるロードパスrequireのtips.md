---
author: admin
categories:
- Ruby
- 技術メモ
date: 2014-03-04T13:20:00+00:00
dsq_thread_id:
- 3.7278275e+09
excerpt: Rubyのrequireについてしらべたことのまとめです
pvc_views:
- 10395
title: Rubyにおけるロードパス(require)のtips
type: post
url: /archives/=2293
---

[<img alt="" src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" width="256" height="256" />][1] 

基本的なことかもしれないけれども、基本すらできないので、Rubyのrequireについてしらべたことをまとめ。 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    requireとは
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      requireとは、ロードパスからファイルを探してきて自分のコードに取り込む仕組み。
    </p>
    
    <p>
      requireの他にも、loadというものもある。両者の違いは別記事で以前まとめた。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/en/archives/2250">Rubyでのloadとrequireの違いをしらべたメモ | Futurismo</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      例
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <p>
        たとえば、同一ディレクトリにあるhogehogeを自分のコードに取り込みたいときは、以下のようにつかう。
      </p>
      
      <pre><code>
# requireを使う場合
requier './hogehoge'

# require_relativeを使う場合
require_relative 'hogehoge'
</code></pre>
      
      <p>
        requireは、LOAD_PATHが通ったところをロードするため、カレントディレクトリのファイルをロードするためには、ドットをうつ。
      </p>
      
      <p>
        require_relative相対パスでパスを指定できる。
      </p>
      
      <p>
        余談で、rspecは実行時にlibとspecのディレクトリがロードパスに追加される。
      </p></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    相対パスがかっこ悪いのでなんとかする
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      個人的には、相対パスがかっこ悪いので、何とかしたい。
    </p></p>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      コード中でLOAD_PATHにカレントディレクトリを追加
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <p>
        以下の処理を書くと、コード実行時にLOAD_PATHに自分のディレクトリを追加できる。
      </p>
      
      <pre><code>
# 簡易版
$:.unshift File.dirname(__FILE__)

# 自分でパスを追加したい場合
$:.unshift(File.dirname(File.expand_path(__FILE__)) + '起動したプログラムからの相対パス')
</code></pre></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      ruby起動時にLOAD_PATHにディレクトリを追加
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <p>
        ruby -I (ディレクトリ)でもパスを追加できる。起動用のシェルやbatを作成するといいかも。
      </p>
      
      <pre><code>
#!/bin/bash

current_dir=`dirname $0`
cd ${current_dir}

ruby -I ./lib  $@
</code></pre></p>
    </div></p>
  </div></p>
</div>

 [1]: https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite