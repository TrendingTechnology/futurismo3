---
author: admin
categories:
- Java
- 技術メモ
date: 2014-12-07T15:33:00+00:00
dsq_thread_id:
- 3.7946598e+09
excerpt: Java で Chain of Responsibility Pattern メモ
pvc_views:
- 1715
tags:
- Gof
title: Java で Chain of Responsibility Pattern を 末尾再帰で実装した
type: post
url: /archives/=2795
---

[<img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" />][1]

<div id="outline-container-unnumbered-1" class="outline-2">
  <h2 id="unnumbered-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-1">
    <p>
      Chain of Responsibility Pattern という, マイナーな Gof のパターンがある.
    </p>
    
    <p>
      本をよんでみて, これって再帰関数を利用すればもっとシンプルにかけるん じゃないかとおもって, 試してみた.
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-2" class="outline-2">
  <h2 id="unnumbered-2">
    Chain of Responsibility Pattern
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-2">
    <p>
      責務を持たせたオブジェクトの Chain に 要求を渡していく.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://ja.wikipedia.org/wiki/Chain_of_Responsibility_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3">Chain of Responsibility パターン &#8211; Wikipedia</a>
      </li>
    </ul>
    
    <p>
      要求は,
    </p>
    
    <ul class="org-ul">
      <li>
        そのオブジェクトで処理できればそこで処理する
      </li>
      <li>
        そのオブジェクトで処理できなければ, 次のオブジェクトに渡す.
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-unnumbered-3" class="outline-2">
  <h2 id="unnumbered-3">
    パターン未適用
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-3">
    [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> import java.util.List;<br /> import java.util.LinkedList;</p> 
    
    <p>
      public class ChainOfResponsibilitySample {<br /> public static void main (String[] args) {<br /> List<Handler> chain = new LinkedList<Handler>();<br /> chain.add (new A ());<br /> chain.add (new B ());<br /> chain.add (new C ());
    </p>
    
    <p>
      for (Handler handler : chain) {<br /> if (handler.isMatch (&#8216;b&#8217;)) {<br /> handler.execute ();<br /> break;<br /> }<br /> }<br /> }<br /> }
    </p>
    
    <p>
      abstract class Handler {<br /> public abstract boolean isMatch (char c);<br /> public abstract void execute ();<br /> }
    </p>
    
    <p>
      class A extends Handler {<br /> public boolean isMatch (char c) { return c == &#8216;a&#8217;; }<br /> public void execute () { System.out.println ("a hit"); }<br /> }
    </p>
    
    <p>
      class B extends Handler {<br /> public boolean isMatch (char c) { return c == &#8216;b&#8217;; }<br /> public void execute () { System.out.println ("b hit"); }<br /> }
    </p>
    
    <p>
      class C extends Handler {<br /> public boolean isMatch (char c) { return c == &#8216;c&#8217;; }<br /> public void execute () { System.out.println ("c hit"); }<br /> }<br /> [/sourcecode]
    </p>
  </div>
  
  <div id="outline-container-unnumbered-4" class="outline-3">
    <h3 id="unnumbered-4">
      絶望ポイント
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-4">
      <p>
        ここがきたない.
      </p>
      
      <p>
        制御側からいちいち判定用メソッドを読んだり, マッチしたらアクションを起動している.これが面倒.
      </p>
      
      <p>
        [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> for (Handler handler : chain) {<br /> if (handler.isMatch (&#8216;b&#8217;)) {<br /> handler.execute ();<br /> break;<br /> }<br /> }<br /> [/sourcecode]
      </p>
      
      <p>
        できれば, ひとつメソッドをよんだら, あとは好き勝手に処理されればいい.
      </p>
      
      <p>
        Amazon で本を注文するときは, ポチったら, あとはコンビニに勝手に届いて入ればいい.
      </p>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-5" class="outline-2">
  <h2 id="unnumbered-5">
    パターン適用
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-5">
  </div>
  
  <div id="outline-container-unnumbered-6" class="outline-3">
    <h3 id="unnumbered-6">
      メリット
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-6">
      <p>
        要求を出す側と, 要求を処理する側の結びつきが弱まる.
      </p>
      
      <p>
        具体的にいえば, ループを回さなくてすむ.
      </p>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-7" class="outline-3">
    <h3 id="unnumbered-7">
      コード
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-7">
      [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> public class ChainOfResponsibilitySample {<br /> public static void main (String[] args) {<br /> Handler chain = new A (new B (new C (null)));<br /> chain.handle (&#8216;b&#8217;);<br /> }<br /> }</p> 
      
      <p>
        abstract class Handler {<br /> private Handler next;
      </p>
      
      <p>
        public Handler (Handler next) {<br /> this.next = next;<br /> }
      </p>
      
      <p>
        public void handle (char c) {<br /> if (isMatch (c))<br /> execute ();<br /> else<br /> next.handle (c);<br /> }
      </p>
      
      <p>
        abstract boolean isMatch (char c);<br /> abstract void execute ();<br /> }
      </p>
      
      <p>
        class A extends Handler {<br /> public A (Handler next){ super (next); }<br /> boolean isMatch (char c) { return c == &#8216;a&#8217;; }<br /> void execute () { System.out.println ("a hit"); }<br /> }
      </p>
      
      <p>
        class B extends Handler {<br /> public B (Handler next){ super (next); }<br /> boolean isMatch (char c) { return c == &#8216;b&#8217;; }<br /> void execute () { System.out.println ("b hit"); }<br /> }
      </p>
      
      <p>
        class C extends Handler {<br /> public C (Handler next){ super (next); }<br /> boolean isMatch (char c) { return c == &#8216;c&#8217;; }<br /> void execute () { System.out.println ("c hit"); }<br /> }<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-8" class="outline-3">
    <h3 id="unnumbered-8">
      感動のポイント
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-8">
      <p>
        みよ! このシンプルさを.
      </p>
      
      <p>
        [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> public static void main (String[] args) {<br /> Handler chain = new A (new B (new C (null)));<br /> chain.handle (&#8216;b&#8217;);<br /> }<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-9" class="outline-2">
  <h2 id="unnumbered-9">
    こんなの, 関数型の考え方でかけば当たり前だ!
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-9">
    <p>
      この主張をしたいがために, この記事を書いた.
    </p>
    
    <p>
      関数型っぽくかけば, こんなの当たり前の方法.
    </p>
    
    <p>
      [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> public class ChainOfResponsibilityFinctional {<br /> public static void main (String[] args) {
    </p>
    
    <p>
      LinkedList<Handler> chain = new LinkedList<Handler>();<br /> chain.add (new A ());<br /> chain.add (new B ());<br /> chain.add (new C ());
    </p>
    
    <p>
      handle (chain, &#8216;b&#8217;);<br /> }
    </p>
    
    <p>
      static void handle (LinkedList<Handler> chain, char c) {<br /> Handler head = chain.element ();<br /> chain.removeFirst ();<br /> LinkedList<Handler> tail = chain;<br /> if (head == null)<br /> return;<br /> else {<br /> if (head.isMatch (c)) {<br /> head.execute ();<br /> return;<br /> }<br /> else<br /> handle (tail, c);<br /> }<br /> }<br /> }
    </p>
    
    <p>
      abstract class Handler {<br /> public abstract boolean isMatch (char c);<br /> public abstract void execute ();<br /> }
    </p>
    
    <p>
      class A extends Handler {<br /> public boolean isMatch (char c) { return c == &#8216;a&#8217;; }<br /> public void execute () { System.out.println ("a hit"); }<br /> }
    </p>
    
    <p>
      class B extends Handler {<br /> public boolean isMatch (char c) { return c == &#8216;b&#8217;; }<br /> public void execute () { System.out.println ("b hit"); }<br /> }
    </p>
    
    <p>
      class C extends Handler {<br /> public boolean isMatch (char c) { return c == &#8216;c&#8217;; }<br /> public void execute () { System.out.println ("c hit"); }<br /> }<br /> [/sourcecode]
    </p>
  </div>
  
  <div id="outline-container-unnumbered-10" class="outline-3">
    <h3 id="unnumbered-10">
      感動のポイント
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-10">
      <p>
        一行で一応処理できている.
      </p>
      
      <p>
        [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> handle (chain, &#8216;b&#8217;);<br /> [/sourcecode]
      </p>
      
      <p>
        末尾再帰を利用している. しかし, あんまりシンプルにかけないな&#x2026;
      </p>
      
      <p>
        [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> static void handle (LinkedList<Handler> chain, char c) {<br /> Handler head = chain.element ();<br /> chain.removeFirst ();<br /> LinkedList<Handler> tail = chain;<br /> if (head == null)<br /> return;<br /> else {<br /> if (head.isMatch (c)) {<br /> head.execute ();<br /> return;<br /> }<br /> else<br /> handle (tail, c);<br /> }<br /> }<br /> [/sourcecode]
      </p>
      
      <p>
        ただし, 呼び元で Handler に対してメッセージをおくっているところはかわらないか.
      </p>
      
      <p>
        Chain of responsibility は, chain のリスト構造のなかに, 責務をカプセル化している.
      </p>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-11" class="outline-2">
  <h2 id="unnumbered-11">
    おわりに
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-11">
    <p>
      デコレータパターンやコンポジットパターンでも感じるが, Gof のデザインパターンは, 関数型で書いたほうが便利なことを がんばって OOP で書いているように思えるのだが.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/2780">動的に機能追加!Java で Decolator パターンを実装してみた | Futurismo</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-unnumbered-12" class="outline-3">
    <h3 id="unnumbered-12">
      関数型デザインパターン
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-12">
      <p>
        ネットで調べたら, やはり同じことを考えている人はいるようだ.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://sujitpal.blogspot.jp/2013/06/functional-chain-of-responsibility.html">Salmon Run: Functional Chain of Responsibility implementation in Scala</a>
        </li>
      </ul>
      
      <p>
        以下の二つは関数型パラダイムでのデザインパターンにもなりえると思う.
      </p>
      
      <ul class="org-ul">
        <li>
          Decorator Pattern
        </li>
        <li>
          Chain of Responsibility Pattern
        </li>
      </ul>
    </div>
  </div>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/java.png