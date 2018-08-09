---
author: admin
categories:
- Emacs
- Scala
- 技術メモ
date: 2014-05-11T10:39:00+00:00
dsq_thread_id:
- 3.6945385e+09
excerpt: EmacsでScala開発環境を構築したメモ(Ensime)
pvc_views:
- 6453
title: Emacs で Scala 開発環境を構築 (Ensime)
type: post
url: /archives/=2449
---

![][1]

<div id="outline-container-unnumbered-1" class="outline-2">
  <h2 id="unnumbered-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-1">
    <p>
      edX で受けた <a href="https://futurismo.biz/archives/2427">プログラミングパラダイム</a> の講義のなかで,
    </p>
    
    <p>
      &#8221; これからは, Scala と Erlang だ!C++ と Java はレガシーになりつつある!&#8221;
    </p>
    
    <p>
      とのことだったので, ちょっと scala をいじってみようと思います.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.scala-lang.org/">The Scala Programming Language</a>
      </li>
    </ul>
    
    <p>
      [toc]
    </p>
  </div>
  
  <div id="outline-container-unnumbered-2" class="outline-3">
    <h3 id="unnumbered-2">
      Environment
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-2">
      <ul class="org-ul">
        <li>
          Linux Mint 16 64bit
        </li>
        <li>
          Scala 2.9
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-3" class="outline-2">
  <h2 id="unnumbered-3">
    Installing Scalas
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-3">
  </div>
  
  <div id="outline-container-unnumbered-4" class="outline-3">
    <h3 id="unnumbered-4">
      Installing the JDK
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-4">
      <p>
        Scala は JVM 上で動作する. まずは JDK をインストール.
      </p>
      
      <p>
        [sourcecode language=&#8221;sh&#8221; title=&#8221;&#8221;]<br /> sudo apt-get install openjdk-7-jdk<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-5" class="outline-3">
    <h3 id="unnumbered-5">
      Installing sbt
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-5">
      <p>
        Scala のビルドツールである sbt を入れる. 以下から Download して, 解凍. なかにある bin ディレクトリにパスを通す.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.scala-sbt.org/release/docs/Getting-Started/Setup.html">Setup &#8211; sbt Documentation</a>
        </li>
      </ul>
      
      <p>
        日本語のドキュメントがあった.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://scalajp.github.io/sbt-getting-started-guide-ja/">始める sbt &#8211; ようこそ</a>
        </li>
        <li>
          <a href="https://www.scala-sbt.org/">sbt &#8211; sbt Documentation</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-6" class="outline-3">
    <h3 id="unnumbered-6">
      Installing Scala
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-6">
      [sourcecode language=&#8221;sh&#8221; title=&#8221;&#8221;]<br /> sudo apt-get install scala<br /> [/sourcecode]</p> 
      
      <p>
        以下から最新版をダウンロードしてもよい.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.scala-lang.org/download/">Download | The Scala Programming Language</a>
        </li>
      </ul>
      
      <p>
        ダウンロードしたら bin ディレクトリにパスを通す.
      </p>
      
      <p>
        [sourcecode language=&#8221;sh&#8221; title=&#8221;&#8221;]<br /> # Scala<br /> export PATH=$HOME/app/sbt/bin:$PATH<br /> export PATH=$HOME/app/scala/bin:$PATH<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-7" class="outline-3">
    <h3 id="unnumbered-7">
      Hello Scala
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-7">
      <p>
        それでは, お決まりの儀式から.
      </p>
      
      <p>
        [sourcecode language=&#8221;scala&#8221; title=&#8221;&#8221;]<br /> object Hello extends App {<br /> println ("Hello, Scala!")<br /> }<br /> [/sourcecode]
      </p>
      
      <p>
        以下で実行.
      </p>
      
      <p>
        [sourcecode language=&#8221;sh&#8221; title=&#8221;&#8221;]<br /> % scalac Hello.scala<br /> % scala Hello<br /> Hello, Scala!<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-8" class="outline-2">
  <h2 id="unnumbered-8">
    Installing Emacs
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-8">
    <p>
      Emacs 自体のインストール方法は省略.
    </p>
  </div>
  
  <div id="outline-container-unnumbered-9" class="outline-3">
    <h3 id="unnumbered-9">
      Installing scala-mode
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-9">
      <p>
        scala-mode と scala-mode2 がある. 2 を入れた.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/hvesalai/scala-mode2">hvesalai/scala-mode2</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-10" class="outline-3">
    <h3 id="unnumbered-10">
      Installing Ensime
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-10">
      <p>
        Scala 用の統合開発環境. インストールはは github にしたがえばよい.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/ensime/ensime-src">ensime/ensime-src</a>
        </li>
      </ul>
      
      <p>
        Ensime Server をダウンロードしてロードパスの通った場所におく.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.dropbox.com/sh/ryd981hq08swyqr/V9o9rDvxkS/ENSIME%20Releases">Dropbox &#8211; ENSIME Releases</a>
        </li>
      </ul>
      
      <p>
        (ハマリメモ. github から落としてきたやつではなくて, Dropbox から落とした Reliese 番でないとダメなんだね. めちゃくちゃハマった)
      </p>
    </div>
    
    <div id="outline-container-unnumbered-11" class="outline-4">
      <h4 id="unnumbered-11">
        .ensime を作成
      </h4>
      
      <div class="outline-text-4" id="text-unnumbered-11">
        <p>
          ensime を利用するには, .ensime という設定ファイルが必要.
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://d.hatena.ne.jp/masaaki1001/20121226/1356539103">ensime の設定方法 &#8211; masaaki1001 の日記</a>
          </li>
          <li>
            <a href="https://d.hatena.ne.jp/lranran123/20130409/1365515128">Emacs での Scala 開発には Ensime というプラグインらしい -q 趣味プログラマがまれになんかしたことの記録</a>
          </li>
          <li>
            <a href="https://github.com/ensime/ensime-sbt-cmd">https://github.com/ensime/ensime-sbt-cmd</a>
          </li>
        </ul>
        
        <p>
          上記を参考に~/.sbt/plugins/plugins.sbt を作成し, 以下を記入.
        </p>
        
        <p>
          [sourcecode language=&#8221;language&#8221; title=&#8221;&#8221;]<br /> resolvers += Resolver.sonatypeRepo ("snapshots")
        </p>
        
        <p>
          addSbtPlugin ("org.ensime" % "ensime-sbt" % "0.1.5-SNAPSHOT")<br /> [/sourcecode]
        </p>
        
        <p>
          M-x ensime-config-gen というコマンドでも対話的に設定ファイルが作成できるらしい.
        </p>
        
        <p>
          Hello.scala を開いたディレクトリで以下を実行.
        </p>
        
        <p>
          [sourcecode language=&#8221;language&#8221; title=&#8221;&#8221;]<br /> sbt "ensime generate"<br /> [/sourcecode]
        </p>
      </div>
    </div>
    
    <div id="outline-container-unnumbered-12" class="outline-4">
      <h4 id="unnumbered-12">
        emsime 実行
      </h4>
      
      <div class="outline-text-4" id="text-unnumbered-12">
        <p>
          これで, .ensime が生成される.
        </p>
        
        <p>
          Emacs 上で M-x ensime を実行. 先ほど生成した.ensime の場所を教える.
        </p>
        
        <p>
          今日はこんなところで. 逐次, 追記予定.
        </p>
      </div>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-13" class="outline-2">
  <h2 id="unnumbered-13">
    Special Thanks
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-13">
    <ul class="org-ul">
      <li>
        <a href="https://hirooka.pro/archives/=1611">Scala 2.10.1 | hirooka.pro</a>
      </li>
      <li>
        <a href="https://tototoshi.hatenablog.com/entry/20100925/1285420294">Emacs でつくる Scala 開発環境 前編 (scala-mode) &#8211; tototoshi の日記</a>
      </li>
      <li>
        <a href="https://tototoshi.hatenablog.com/entry/20100927/1285595939">Emacs でつくる Scala 開発環境 後編 (ENSIME) &#8211; tototoshi の日記</a>
      </li>
      <li>
        <a href="https://tototoshi.hatenablog.com/entry/20101101/1288623548">Scala + Emacs + ctags &#8211; tototoshi の日記</a>
      </li>
      <li>
        <a href="https://sleepboy-zzz.blogspot.jp/2013/10/emacsscala.html">memo: Emacs での Scala 用の設定を公開してみる</a>
      </li>
      <li>
        <a href="https://d.hatena.ne.jp/lranran123/20130409/1365515128">Emacs での Scala 開発には Ensime というプラグインらしい &#8211; 趣味プログラマがまれになんかしたことの記録</a>
      </li>
      <li>
        <a href="https://d.hatena.ne.jp/papamitra/20100817/ensime">ensime で補完生活 &#8211; papamitra</a>
      </li>
    </ul>
    
    <p>
      Emacs Scala Youtube Video Tutorials
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://jglobal.com/emacs-power-for-scala-development-setting-up/">Emacs Power for Scala Development: Setting Up &#8211; JGlobal Limited</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCPNbOY0HKvilrk6XucqiwYw">Michael Nash &#8211; YouTube</a>
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-unnumbered-14" class="outline-2">
  <h2 id="unnumbered-14">
    追記 2014-06-21
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-14">
    <p>
      sbt-mode というものもある.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/hvesalai/sbt-mode">https://github.com/hvesalai/sbt-mode</a>
      </li>
    </ul>
    
    <p>
      機能的には ensime とおなじようなことができるし, ensime ファイルを作成しなくてもいいので導入が楽.
    </p>
    
    <p>
      ensime よりよいところは, M-x sbt-send-region で Scala REPL にリージョンを送信することができるところ. これは便利そう.
    </p>
    
    <p>
      また, repl を autoload する方法もあるようだ.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/ensime/ensime-src/issues/149">Auto reload classes in the Scala REPL on recompilation · Issue #149 · ensime/ensime-src</a>
      </li>
    </ul>
  </div>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/emacs_logo.jpg