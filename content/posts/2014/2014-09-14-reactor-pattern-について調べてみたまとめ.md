---
author: admin
categories:
- Ruby
- 技術メモ
date: 2014-09-14T05:02:00+00:00
dsq_thread_id:
- 3.6951475e+09
excerpt: Reactor Pattern について調べてみたまとめです.
pvc_views:
- 2628
tags:
- POSA
title: Reactor Pattern について調べてみたまとめ
type: post
url: /archives/=2616
---

coursera で受けている, POSA の講義で出てきた Reactor Pattern について調べてみたまとめです. 

<ul class="org-ul">
  <li>
    <a href="https://www.coursera.org/course/mobilecloud">Programming Cloud Services for Android Handheld Systems | Coursera</a>
  </li>
</ul>

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    Reactor Pattern とは
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      イベント駆動のためのデザインパターン.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> The reactor design pattern is an event handling pattern<br /> for handling service requests delivered concurrently<br /> to a service handler by one or more inputs.<br /> [/sourcecode]
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://en.wikipedia.org/wiki/Reactor_pattern">Reactor pattern &#8211; Wikipedia, the free encyclopedia</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      特徴
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <ul class="org-ul">
        <li>
          イベント (入力データ) を, 処理や状態を表すハンドラ (メソッド or サブクラス) にディスパッチ (結びつける) する.
        </li>
        <li>
          ハンドラごとに責務を分割できるので OOP 向き.
        </li>
        <li>
          ハンドラ以外の部分はフレームワークに隠蔽されていることがおおい.
        </li>
      </ul>
      
      <p>
        EventMachine は Reactor パターンの高性能な実装さ.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://keijinsonyaban.blogspot.jp/2010/12/eventmachine.html">見えないチカラ: 【翻訳】 EventMachine 入門</a>
        </li>
      </ul>
      
      <p>
        Android は状態ごとにハンドラが呼び出される.
      </p>
      
      <ul class="org-ul">
        <li>
          onCreate ()
        </li>
        <li>
          onResume ()
        </li>
        <li>
          onDestory ()
        </li>
      </ul>
      
      <p>
        Spring Framework では, GET や POST の HTTP request は, それぞれ対応するメソッドにコールバックされる.
      </p>
    </div>
  </div>
  
  <div id="outline-container-sec-1-2" class="outline-3">
    <h3 id="sec-1-2">
      Structure
    </h3>
    
    <div class="outline-text-3" id="text-1-2">
      <ul class="org-ul">
        <li>
          Resources: 入力データ
        </li>
        <li>
          Synchronous Event Demultiplexer:入力データを拾うためのイベントループ. シングルスレッドで loop していることが特徴 (Synchronous).
        </li>
        <li>
          Dispatcher: ハンドラを管理する. Demultiplexer から通知を受けたら, Resource を Handler に Dispatch する (select など)
        </li>
        <li>
          Handler: Resource に関連付けられた処理.
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    Socket Programming における Reactor Pattern
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      Socket Programming ででてくる Reactor は, 狭義の Reactor Pattern のようだ.
    </p>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      特徴
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <ul class="org-ul">
        <li>
          すべての処理をシングルスレッドで実施する.
        </li>
        <li>
          マルチスレッドを利用しなくても, 非同期処理がかける.
        </li>
        <li>
          スレッドやプロセス数の制限なしに, クライアントからの要求に答えることができる.
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      実装方法
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <ul class="org-ul">
        <li>
          ソケットを select で監視する. 読み取り可能, 書き込み可能なソケットのみに対して処理を実施する.
        </li>
        <li>
          遅い回線があるときに, その回線に引きずられて Reactor が他の処理をできない. すべての処理が Blocking される.そんなときは, non-blocking write を利用する.
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-2-3" class="outline-3">
    <h3 id="sec-2-3">
      sample
    </h3>
    
    <div class="outline-text-3" id="text-2-3">
      <p>
        以下のリンクのサンプルをそのまま写経しました.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://gihyo.jp/dev/serial/01/ruby/0030archives/age=1">第 29 回 Reactor で非同期処理をやってみよう (1):Ruby Freaks Lounge|gihyo.jp … 技術評論社</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;ruby&#8221; title=&#8221;&#8221; ]<br /> write_socks = hosts.map do |host|<br /> TCPSocket.new (host, 80)<br /> end<br /> read_socks = []
      </p>
      
      <p>
        # handler<br /> write_proc = lambda{|sock|<br /> sock.write (request)<br /> }
      </p>
      
      <p>
        # handler<br /> read_proc = lambda{|sock|<br /> sock.read<br /> sock.close<br /> }
      </p>
      
      <p>
        # Reactor<br /> until (write_socks + read_socks).empty?
      </p>
      
      <p>
        # Demultiplexer<br /> r_socks, w_socks, e_socks = IO.select (read_socks, write_socks)
      </p>
      
      <p>
        # Dispatcher<br /> if ws = w_socks.first<br /> write_proc.call (ws)<br /> read_socks << ws write_socks.delete (ws) end # Dispatcher if rs = r_socks.first read_proc.call (rs) read_socks.delete (rs) end end [/sourcecode] 
        
        <p>
          Working With TCP Socket における Reactor Pattern.
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://futurismo.biz/archives/2572">TCP/IP ソケットプログラミングの基礎を集中学習! Working with TCP sockets を読んでる | Futurismo</a>
          </li>
          <li>
            gist: <a href="https://gist.github.com/tsu-nera/0a0930175a3f23641848">https://gist.github.com/tsu-nera/0a0930175a3f23641848</a>
          </li>
        </ul></div> </div> </div>