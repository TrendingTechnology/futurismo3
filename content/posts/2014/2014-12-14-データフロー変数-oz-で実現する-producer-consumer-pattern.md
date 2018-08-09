---
author: admin
categories:
- Java
- Oz
- 技術メモ
date: 2014-12-14T08:51:00+00:00
dsq_thread_id:
- 3.7618816e+09
excerpt: Oz のもつ決定性データフローモデルを利用して Producer-Consumer Pattern を 実装
pvc_views:
- 1272
tags:
- POSA
title: データフロー変数 (Oz) で実現する Producer-Consumer Pattern
type: post
url: /archives/=2829
---

<div id="outline-container-unnumbered-1" class="outline-2">
  <h2 id="unnumbered-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-1">
    <p>
      以下の記事の続編です.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/2656">Java で Producer-Consumer Pattern を実装してみた | Futurismo</a>
      </li>
    </ul>
    
    <p>
      前回は, Java の 共有メモリモデルを利用して Producer-Consumer Pattern を実装した.
    </p>
    
    <p>
      今回は, Oz のもつ決定性データフローモデルを利用して実装してみる.
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-2" class="outline-2">
  <h2 id="unnumbered-2">
    決定性データフローモデル
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-2">
    <p>
      データフロー変数をもつモデル.
    </p>
  </div>
  
  <div id="outline-container-unnumbered-3" class="outline-3">
    <h3 id="unnumbered-3">
      データフロー変数
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-3">
      <p>
        変数に値が束縛されるまでプログラムの実行を待ち合わせるような宣言的変数.
      </p>
      
      <p>
        あるスレッドがデータフロー変数を利用しようとしたとき, その変数に値が束縛されていない場合は, 別のスレッドが束縛するまで待ち合わせを行う.
      </p>
      
      <p>
        束縛されたときの実行を データフロー実行 という.
      </p>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-4" class="outline-2">
  <h2 id="unnumbered-4">
    実行例
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-4">
  </div>
  
  <div id="outline-container-unnumbered-5" class="outline-3">
    <h3 id="unnumbered-5">
      Java
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-5">
      <p>
        まずは, Java でのサンプル. 平行性を実現するためには, キューを共有する.
      </p>
      
      <p>
        結構コードがながくなってしまった&#x2026;
      </p>
      
      <p>
        [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> import java.util.concurrent.LinkedBlockingQueue;<br /> import java.util.concurrent.BlockingQueue;<br /> import java.util.LinkedList;<br /> import java.util.List;
      </p>
      
      <p>
        public class ProducerConsumerPattern {<br /> public static void main (String args[]) {<br /> BlockingQueue<List<Integer>> queue = new LinkedBlockingQueue<List<Integer>>();
      </p>
      
      <p>
        Producer producer = new Producer (queue, 10);<br /> Consumer consumer = new Consumer (queue);
      </p>
      
      <p>
        producer.start ();<br /> consumer.start ();<br /> }<br /> }
      </p>
      
      <p>
        class Producer extends Thread {<br /> BlockingQueue<List<Integer>> queue;<br /> List<Integer> list;<br /> int limit;
      </p>
      
      <p>
        public Producer (BlockingQueue<List<Integer>> queue, int limit) {<br /> this.queue = queue;<br /> this.limit = limit;<br /> list = new LinkedList<Integer>();<br /> }
      </p>
      
      <p>
        public void run () {<br /> try {<br /> for (int i=1; i <= limit; i++) {<br /> System.out.println (i);<br /> sleep (1000);<br /> list.add (i);<br /> }<br /> queue.put (list);<br /> }<br /> catch (Exception e) {}<br /> }<br /> }
      </p>
      
      <p>
        class Consumer extends Thread {<br /> BlockingQueue<List<Integer>> queue;<br /> Integer sum;<br /> public Consumer (BlockingQueue<List<Integer>> queue) {<br /> this.queue = queue;<br /> this.sum = 0;<br /> }
      </p>
      
      <p>
        public void run () {<br /> try {<br /> List<Integer> list = queue.take ();<br /> for (Integer i: list) {<br /> sum += i;<br /> }<br /> System.out.println (sum);<br /> }<br /> catch (Exception e) {}<br /> }<br /> }<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-6" class="outline-3">
    <h3 id="unnumbered-6">
      Oz
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-6">
      <p>
        つづいて, データフロー変数をサポートする Oz.
      </p>
      
      <p>
        とてもシンプルにかつ安全に書くことができる. データフロー変数の未来を感じることができるコード.
      </p>
      
      <p>
        [sourcecode language=&#8221;ruby&#8221; title=&#8221;&#8221;]<br /> declare<br /> fun {Producer N}<br /> fun {Producer1 X N}<br /> {Delay 1000}<br /> if X < N+1 then<br /> {Show X}<br /> X|{Producer1 X+1 N}<br /> else nil<br /> end<br /> end<br /> in<br /> {Producer1 1 N}<br /> end
      </p>
      
      <p>
        fun {Consumer S}<br /> fun {Sum S Acc}<br /> case S of X|Xr then {Sum Xr Acc+X}<br /> [] nil then Acc<br /> end<br /> end<br /> in<br /> {Sum S 0}<br /> end
      </p>
      
      <p>
        local Xs Ys S in<br /> thread Xs = {Producer 10} end<br /> thread<br /> Ys = {Consumer Xs}<br /> {Show Ys}<br /> end<br /> end<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>