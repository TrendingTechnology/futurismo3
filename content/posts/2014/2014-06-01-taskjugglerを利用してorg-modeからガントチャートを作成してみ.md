---
author: admin
categories:
- Emacs
- 技術メモ
date: 2014-06-01T08:20:00+00:00
dsq_thread_id:
- 3.7002734e+09
excerpt: TaskJugglerを利用してorg-modeからガントチャートを作成してみる
pvc_views:
- 3082
tags:
- GTD
- org-mode
title: TaskJugglerを利用してorg-modeからガントチャートを作成してみる
type: post
url: /archives/=2485
---

![][1]

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      org-modeでタスク管理をしているのだけれども、 いくつかのプロジェクトをガントチャートで見る方法がないか調べてみた。
    </p>
    
    <p>
      TaskJugglerというツールが使えそうなので、ちょっくら試してみた。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.taskjuggler.org/">TaskJuggler &#8211; A Free and Open Source Project Management Software &#8211; About TaskJuggler</a>
      </li>
    </ul>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    TaskJugglerについて
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      TaskJugglerは、オープンソースのプロジェクト管理ツール。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://ja.wikipedia.org/wiki/TaskJuggler">TaskJuggler &#8211; Wikipedia</a>
      </li>
    </ul>
    
    <p>
      特徴は、以下。
    </p>
    
    <ul class="org-ul">
      <li>
        ガントチャート
      </li>
      <li>
        コマンドラインベース
      </li>
      <li>
        プレーンテキスト管理
      </li>
    </ul>
    
    <p>
      なんとも自分にとってはうれしい内容。
    </p>
    
    <p>
      10年以上つづいているプロジェクトらしく、 ドキュメントが充実しているところがさらにうれしい。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.taskjuggler.org/tj3/manual/toc.html">Index</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      Install
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <p>
        Rubyでかかれているので、gem installでいける。簡単簡単。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">% gem install taskjuggler

% tj3 --version
TaskJuggler v3.5.0 - A Project Management Software
</pre></p>
      </div>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.taskjuggler.org/tj3/manual/Installation.html#Installation">Installation</a>
        </li>
      </ul>
      
      <p>
        サンプルプロジェクトを試してみる。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">wget https://taskjuggler.org/tj3/examples/Tutorial/tutorial.tjp
tj3 tutorial.tjp
</pre></p>
      </div>
      
      <p>
        htmlが生成される。Overview.htmlを開いてみる。
      </p></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    Org-modeでつかう
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      org-modeには、taskjugglerを使うためのelがすでにはいっている。以下をrequireする。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-language">(require 'ox-taskjuggler)
</pre></p>
    </div>
    
    <p>
      以下のコマンドでorgからtjpに変換できる。
    </p>
    
    <ul class="org-ul">
      <li>
        org-taskjuggler-export
      </li>
      <li>
        org-taskjuggler-export-and-
      </li>
      <li>
        org-taskjuggler-export-process-and-open
      </li>
    </ul>
    
    <p>
      org-exportの一部として動くのでよい。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    サンプル
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      Resourceを設定しないと、デフォルトでリソースが tsu-neraになるが、 -という文字でsyntax errorになるので、allocate属性をつけた。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-language"> * TaskJuggler search					:taskjuggler_project:
 ** test
    :PROPERTIES:
    :task_id:  taskjuggler
    :allocate: tsune
    :Effort:   2h
    :END: 
  
 * Resources 					       :taskjuggler_resource:
 ** Developers
    :PROPERTIES:
    :resource_id: tsune
    :END:
</pre></p>
    </div>
    
    <p>
      <img src="https://lh4.ggpht.com/-PRa1tPiOxow/U4rhSe3INKI/AAAAAAAABEo/9u73Ez3Pp1s/2014-06-01-171555_796x882_scrot.png" /> </div>
    </p>
  </div>
  
  <div id="outline-container-sec-5" class="outline-2">
    <h2 id="sec-5">
      まとめ
    </h2>
    
    <div class="outline-text-2" id="text-5">
      <p>
        これは、使いこなせば強力なツールになりそうだ。org-modeとの連携がいい。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-6" class="outline-2">
    <h2 id="sec-6">
      その他。
    </h2>
    
    <div class="outline-text-2" id="text-6">
    </div>
    
    <div id="outline-container-sec-6-1" class="outline-3">
      <h3 id="sec-6-1">
        Special Thanks
      </h3>
      
      <div class="outline-text-3" id="text-6-1">
        <p>
          TaskJuggler Offical Document
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://www.taskjuggler.org/tj3/manual/toc.html">Index</a>
          </li>
        </ul>
        
        <p>
          org-manual
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://www.gnu.org/software/emacs/manual/html_node/org/TaskJuggler-export.html">TaskJuggler export &#8211; The Org Manual</a>
          </li>
        </ul>
        
        <p>
          github
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://github.com/taskjuggler/TaskJuggler">taskjuggler/TaskJuggler</a>
          </li>
        </ul>
        
        <p>
          ちょっとふるい。
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://orgmode.org/worg/org-tutorials/org-taskjuggler.html">Creating Gantt charts by Exporting to TaskJuggler</a>
          </li>
        </ul>
        
        <p>
          TaskJuggler 3に対応した記事。
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://orgmode.org/worg/exporters/taskjuggler/ox-taskjuggler.html">Exporting Gantt charts with Taskjuggler v3 (tj3)</a>
          </li>
        </ul>
        
        <p>
          日本語の記事。
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://ichiroc.hatenablog.com/entry/2010/05/16/000500#">org-mode で管理しているプロジェクトをガントチャートにする &#8211; ichiroc subset</a>
          </li>
        </ul>
      </div></p>
    </div>
    
    <div id="outline-container-sec-6-2" class="outline-3">
      <h3 id="sec-6-2">
        Environment
      </h3>
      
      <div class="outline-text-3" id="text-6-2">
        <ul class="org-ul">
          <li>
            Ruby 2.0.0
          </li>
          <li>
            TaskJuggler 3.5
          </li>
          <li>
            Linux Mint 16
          </li>
        </ul>
      </div></p>
    </div></p>
  </div>

 [1]: https://futurismo.biz/wp-content/uploads/emacs_logo.jpg