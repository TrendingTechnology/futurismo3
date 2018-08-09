---
author: admin
categories:
- ハッキング
date: 2014-07-11T01:14:00+00:00
dsq_thread_id:
- 3.7458744e+09
excerpt: pecoで実行コマンドを絞り込んで実行するpeco-M-x
pvc_views:
- 1299
tags:
- peco
- zsh
title: pecoで実行コマンドを絞り込んで実行するpeco-M-x
type: post
url: /archives/=2520
---

今朝、Archlinuxのdmenuがうまく動かなくなった。 

結果的には直ったのだけれども、 dmenuでやっているようなことをpecoでやってみたい。 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    やりたいこと
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      実行可能なコマンドを対話的コマンドで検索して、実行する.
    </p>
    
    <p>
      Emacsのhelm-M-xのようなことをしたい。
    </p>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    実現方法
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <ol class="org-ol">
      <li>
        環境変数PATH配下にある実行可能コマンドを表示
      </li>
      <li>
        表示結果をpecoで絞り込む。
      </li>
      <li>
        検索結果を実行
      </li>
    </ol>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    Implement
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      シェルですべてかければよかったのだけれども、シェルが苦手なので途中でRubyに逃げた。
    </p>
    
    <p>
      だれか、シェルで書き直してくれないかな。（他力本願)
    </p>
    
    <p>
      </div> </div>