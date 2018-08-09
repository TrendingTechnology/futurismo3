---
author: admin
categories:
- Emacs
- 技術メモ
date: 2014-04-27T06:18:00+00:00
dsq_thread_id:
- 3.6936668e+09
excerpt: Emacs org-mode で書いたテキストを Restructured Text に変換する方法を調べました
pvc_views:
- 3140
tags:
- Sphinx
title: org-mode で書いたテキストを Pandoc で Restructured Text に変換する
type: post
url: /archives/=2403
---

![][1]

<div id="outline-container-unnumbered-1" class="outline-2">
  <h2 id="unnumbered-1">
    やりたいこと
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-1">
    <p>
      org-mode で書いたテキストを Restructured Text に変換したい.
    </p>
    
    <p>
      Pandoc を利用すると, org-mode の文章を変換することができる.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> 入力 (org-mode) -> 変換 (Pandoc) -> 出力 (Restructured Text)<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-2" class="outline-2">
  <h2 id="unnumbered-2">
    Pandoc をつかう
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-2">
    <p>
      Pandoc とは, 汎用的なドキュメント変換ツール. ある形式から別の形式へドキュメントの形式を変換できる.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://sky-y.github.io/site-pandoc-jp/users-guide/">Pandoc ユーザーズガイド 日本語版 &#8211; Japanese Pandoc User&#8217;s Association</a>
      </li>
      <li>
        <a href="https://qiita.com/sky_y/items/80bcd0f353ef5b8980ee">HTML &#8211; 多様なフォーマットに対応! ドキュメント変換ツール Pandoc を知ろう &#8211; Qiita</a>
      </li>
    </ul>
    
    <p>
      org-mode の writer は以前からあったが, reader は最近ようやく pull request された.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/jgm/pandoc/issues/476">Org-Mode Reader · Issue #476 · jgm/pandoc</a>
      </li>
      <li>
        <a href="https://github.com/jgm/pandoc/commit/b1e6ea80fde0c3a21336747cd34a3ab0ddfe3cfe">https://github.com/jgm/pandoc/commit/b1e6ea80fde0c3a21336747cd34a3ab0ddfe3cfe</a>
      </li>
    </ul>
    
    <p>
      ということで, 最新の Pandoc を試してみる. github からダウンロード.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/jgm/pandoc">https://github.com/jgm/pandoc</a>
      </li>
    </ul>
    
    <p>
      pandoc は haskell でかかれてるので, ビルドには haskell がひつよう.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://johnmacfarlane.net/pandoc/installing.html">Pandoc &#8211; Installing</a>
      </li>
    </ul>
    
    <p>
      以下を順々に実施.
    </p>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> $ cabal update<br /> $ cabal install pandoc<br /> $ pandoc -v<br /> pandoc 1.12.3.3<br /> Compiled with texmath 0.6.6.1, highlighting-kate 0.5.6.1.<br /> [/sourcecode]
    </p>
  </div>
  
  <div id="outline-container-unnumbered-3" class="outline-3">
    <h3 id="unnumbered-3">
      実験
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-3">
      <p>
        これがゴール.
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> Hello Sphinx<br /> ============
      </p>
      
      <p>
        テスト.
      </p>
      
      <p>
        テスト<br /> ======
      </p>
      
      <p>
        テストです.<br /> [/sourcecode]
      </p>
      
      <p>
        これを変換する.
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> * Hello Sphinx
      </p>
      
      <p>
        テスト.
      </p>
      
      <p>
        * テスト
      </p>
      
      <p>
        テストです.<br /> [/sourcecode]
      </p>
      
      <p>
        変換はコマンドラインから以下を実行
      </p>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> pandoc -f rst hello2.org<br /> [/sourcecode]
      </p>
      
      <p>
        こうなった.
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> &#8211; Hello Sphinx
      </p>
      
      <p>
        テスト.
      </p>
      
      <p>
        &#8211; テスト
      </p>
      
      <p>
        テストです.<br /> [/sourcecode]
      </p>
      
      <p>
        箇条がきではなくて, 見出しなのだが. . . 今後に期待ということで.
      </p>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-4" class="outline-2">
  <h2 id="unnumbered-4">
    org-pandoc をつかう
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-4">
    <p>
      org-pandoc をというツールをつかっても, panodc に対応した色々なフォーマットに変換できる.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/robtillotson/org-pandoc">robtillotson/org-pandoc</a>
      </li>
    </ul>
    
    <p>
      仕組みは, 一度 org-mode から markdown に変換して, markdown を pandoc にかけるというもの.
    </p>
  </div>
  
  <div id="outline-container-unnumbered-5" class="outline-3">
    <h3 id="unnumbered-5">
      実験
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-5">
      <p>
        変換には, 以下を評価したあとに, M-x org-pandoc-export-to-pandoc 実 行.
      </p>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221;]<br /> (require &#8216;ox-pandoc)<br /> (setq org-pandoc-export-format &#8216;rst)<br /> [/sourcecode]
      </p>
      
      <p>
        こうなった.
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> ======<br /> hello2<br /> ======
      </p>
      
      <p>
        :Author: tsu-nera
      </p>
      
      <p>
        .. raw:: html
      </p>
      
      <p>
        <div id="table-of-contents"><br /> \<h2\>
      </p>
      
      <p>
        Table of Contents
      </p>
      
      <p>
        .. raw:: html
      </p>
      
      <p>
        \</h2\><br /> <div id="text-table-of-contents"><br /> <ul><br /> <li>
      </p>
      
      <p>
        1. Hello Sphinx
      </p>
      
      <p>
        .. raw:: html
      </p>
      
      <p>
        </li><br /> <li>
      </p>
      
      <p>
        2. テスト
      </p>
      
      <p>
        .. raw:: html
      </p>
      
      <p>
        </li><br /> </ul><br /> </div><br /> </div>
      </p>
      
      <p>
        Hello Sphinx<br /> ============
      </p>
      
      <p>
        テスト.
      </p>
      
      <p>
        テスト<br /> ======
      </p>
      
      <p>
        テストです.<br /> [/sourcecode]
      </p>
      
      <p>
        ヘッダによけいなものがたくさんつくものの, default pandoc よりいいな.
      </p>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-6" class="outline-2">
  <h2 id="unnumbered-6">
    org-mode から markdown 経由で reST へ変換する
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-6">
    <p>
      Markdown から reST への変換は いろいろな人がチャレンジして実績があるので, この道を考える.
    </p>
    
    <p>
      org-mode には, デフォルトで markdown 変換コマンドあり. MarkDown どころか, HTML,Pandoc,LATex.. いろいろある.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://orgmode.org/manual/Markdown-export.html">https://orgmode.org/manual/Markdown-export.html</a>
      </li>
    </ul>
    
    <p>
      詳しくは, org-export-dispatch (C-c C-e) を実行.
    </p>
    
    <p>
      さっきのゴミは, emacs-export 機能のオプションを利用すれば消せた.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> #+OPTIONS: toc:nil<br /> [/sourcecode]
    </p>
    
    <p>
      オプションの詳しい説明は, 以下.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://orgmode.org/manual/Export-settings.html#Export-settings">Export settings &#8211; The Org Manual</a>
      </li>
      <li>
        <a href="https://d.hatena.ne.jp/tamura70/20100304/org">Emacs org-mode を使ってみる: (29) エクスポートオプション一覧 &#8211; 屯遁のパズルとプログラミングの日記</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-unnumbered-7" class="outline-3">
    <h3 id="unnumbered-7">
      コマンドラインから変換したい
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-7">
      <p>
        上記の方法は, Emacs のなかで変換処理を行うのだが, 複数ファイルを処理するとするとコマンドラインから変換処理を行いたい.
      </p>
      
      <p>
        調べたところ, emacs には batch という機能があるようだ.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://d.hatena.ne.jp/rubikitch/20101107/org2html">org-mode → HTML 変換をする 3 つの方法 &#8211; (rubikitch loves (Emacs Ruby CUI Books))</a>
        </li>
        <li>
          <a href="https://shuzo-kino.hateblo.jp/entry/2014/01/02/012905">CLI で emacs の org-mode を使って html 化する &#8211; Bye Bye Moore</a>
        </li>
        <li>
          <a href="https://www.bookshelf.jp/texi/emacs-20.6-man-jp/emacs_32.html#SEC490">GNU Emacs マニュアル: A. コマンド行引数</a>
        </li>
      </ul>
      
      <p>
        batch については今回はわからなかったので, 次回に回す. 外部ライブラリまわりで苦戦.
      </p>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> emacs hello.org -f org-md-export-to-markdown<br /> [/sourcecode]
      </p>
      
      <p>
        とりあえず, なんとなくできるという道が開けた気がした.
      </p>
    </div>
  </div>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/emacs_logo.jpg