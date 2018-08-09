---
author: admin
categories:
- Java
- Scala
- 技術メモ
date: 2015-04-18T08:59:00+00:00
dsq_thread_id:
- 3.6936563e+09
pvc_views:
- 2137
title: ScalaCheck をつかって Java の性質テスト (Property-based Testing) をしてみる
type: post
url: /archives/=3121
---

[<img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" />][1]

<div id="outline-container-unnumbered-1" class="outline-2">
  <h2 id="unnumbered-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-1">
    <p>
      Property-based Testing というものを知ったので, Java でできるか試してみました.
    </p>
    
    <p>
      [toc]
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-2" class="outline-2">
  <h2 id="unnumbered-2">
    Property-based Testing とは
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-2">
    <p>
      うまい日本語訳がないのだが, この記事では性質テストとする.
    </p>
    
    <p>
      ある集合のなかにある要素から取り出した値をつかって, 総当たりテストをして, 条件式がなりたつことを確認するテスト.
    </p>
    
    <p>
      よく数学の問題で, <b>任意の x について hogehoge がなりたつことを証明せよ</b> みたいなのがあるが, hogehoge が 性質にあたるもの.
    </p>
    
    <p>
      上手く説明できないので, 大量の参照リンクをはっておく.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://mogproject.blogspot.jp/2014/10/scala-property-based-testing-with.html">mog project: Scala: Property-Based Testing with ScalaTest and ScalaCheck</a>
      </li>
      <li>
        <a href="https://blog.livedoor.jp/prjmng/archives/52322897.html">ソフトウェアの品質を学びまくる:Property-based Testing, そして Example-based testing, とは</a>
      </li>
      <li>
        <a href="https://arata.hatenadiary.com/entry/2015/02/12/000747">Scala の Test ツール ScalaTest を使ってみた. &#8211; 日頃の行い</a>
      </li>
    </ul>
    
    <p>
      英語:
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://blog.jessitron.com/2013/04/property-based-testing-what-is-it.html">Abstractivate: Property-based testing: what is it?</a>
      </li>
      <li>
        <a href="https://natpryce.com/articles/000802.html">Mistaeks I Hav Made: Property Based TDD at SPA 2013</a>
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-unnumbered-3" class="outline-2">
  <h2 id="unnumbered-3">
    ScalaCheck
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-3">
    <p>
      Scala の 性質テスト用ツールで, ScalaCheck というものがある.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://scalacheck.org/">https://scalacheck.org/</a>
      </li>
    </ul>
    
    <p>
      Scala なので, Java にもつかえるか試す.(私は, 現在 java プログラマなので)
    </p>
  </div>
  
  <div id="outline-container-unnumbered-4" class="outline-3">
    <h3 id="unnumbered-4">
      target
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-4">
      <p>
        以下のコードをテスト.
      </p>
      
      <p>
        [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> package example;
      </p>
      
      <p>
        public class MyArithmetic {<br /> public static int add (int a, int b) { return a + b; }<br /> public static int del (int a, int b) { return a &#8211; b; }
      </p>
      
      <p>
        public static void main (String[] args) {<br /> System.out.println (add (1, 2));<br /> }<br /> }<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-5" class="outline-2">
  <h2 id="unnumbered-5">
    Java で sbt をつかう
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-5">
    <p>
      scala のテストツールなので, scala の ビルドツール sbt をつかうのが楽.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.scala-sbt.org/">https://www.scala-sbt.org/</a>
      </li>
    </ul>
    
    <p>
      src/main/java 配下に ソースをおいて, root で sbt を起動すると なんと Java コードが sbt で使えてしまう.
    </p>
    
    <p>
      これはこれで, 手軽さに驚いた. Java のビルドツールとして使えそう.
    </p>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> # コンパイル<br /> > compile
    </p>
    
    <p>
      # main 関数を自動で検索して実行<br /> > run<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-6" class="outline-2">
  <h2 id="unnumbered-6">
    ScalaCheck をつかう
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-6">
    <p>
      以下のようなファイルを作成して, src/test/scala 配下におく.
    </p>
    
    <p>
      [sourcecode language=&#8221;scala&#8221; title=&#8221;&#8221;]<br /> import org.scalacheck.Properties<br /> import org.scalacheck.Prop.forAll
    </p>
    
    <p>
      import example._
    </p>
    
    <p>
      object MyArithmeticSpecification extends Properties ("MyArithmetic") {
    </p>
    
    <p>
      property ("add") = forAll { (a : Int, b : Int) =><br /> val aa = a % 100<br /> val bb = b % 100<br /> val c = MyArithmetic.add (aa*aa, bb*bb)<br /> c >= aa*aa && c >= bb*bb<br /> }
    </p>
    
    <p>
      property ("add2") = forAll { (a : Int) =><br /> val aa = a % 100<br /> aa * aa >= aa<br /> }
    </p>
    
    <p>
      property ("del") = forAll { (a : Int, b : Int) =><br /> val aa = a g% 100<br /> val bb = b % 100
    </p>
    
    <p>
      val c = MyArithmetic.del (aa*aa, bb*bb)
    </p>
    
    <p>
      c <= aa*aa || c <= bb*bb<br /> }<br /> }<br /> [/sourcecode]
    </p>
    
    <p>
      root ディレクトリの build.sbt に以下を書く.
    </p>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> libraryDependencies += "org.scalacheck" %% "scalacheck" % "1.12.2" % "test"<br /> [/sourcecode]
    </p>
    
    <p>
      ファイル構成はいかのようなかんじ
    </p>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> &#8212; build.sbt<br /> src<br /> main<br /> java<br /> MyArithmetic.java<br /> test<br /> scala<br /> MyArithmeticSpecification.scala<br /> [/sourcecode]
    </p>
    
    <p>
      テスト実行
    </p>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> $ sbt test<br /> [info] + MyArithmetic.add: OK, passed 100 tests.<br /> [info] + MyArithmetic.add2: OK, passed 100 tests.<br /> [info] + MyArithmetic.del: OK, passed 100 tests.<br /> [info] Passed: Total 3, Failed 0, Errors 0, Passed 3<br /> [success] Total time: 1 s, completed 2015/04/18 17:54:54<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-7" class="outline-2">
  <h2 id="unnumbered-7">
    おわりに
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-7">
    <p>
      むかしむかし, CUnit のことを課長にはなしたことがあったのだが, (うたぐり深い) 課長は, xUnit のようなものでは品質がとれないと突っかかってきた.
    </p>
    
    <p>
      <b>全部網羅したテストじゃないと, 完全にバグがないなんて言いきれない</b>
    </p>
    
    <p>
      自分はこれに対して反論ができなかった.
    </p>
    
    <p>
      いまならば, 反論できる.Property-based Testing はどうだろう? 乱数による総当たりテストならば, 信じてくれるのではないだろうか?
    </p>
  </div>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/java.png