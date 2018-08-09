---
author: admin
categories:
- 技術メモ
date: 2014-09-13T12:32:00+00:00
dsq_thread_id:
- 3.751011e+09
excerpt: Wrapper Facade Pattern について調べてみたまとめです.
pvc_views:
- 1237
tags:
- coursera
- POSA
title: Wrapper Facade Pattern について調べてみたまとめ
type: post
url: /archives/=2613
---

coursera で受けている, POSA の講義で出てきた Wrapper Facade Pattern について調べてみたまとめです. 

<ul class="org-ul">
  <li>
    <a href="https://www.coursera.org/course/mobilecloud">Programming Cloud Services for Android Handheld Systems | Coursera</a>
  </li>
</ul>

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    Wrapper Facade とは
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      ソケットなどの OS に依存するような native methods に対してラッパーライブラリを作成すること.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> encapsulate low-level functions and data<br /> structures with object-oriented (OO) class interfaces.<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    メリット
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      以下のメリットがある.
    </p>
    
    <ul class="org-ul">
      <li>
        Non-OOP 言語が OOP で利用できたり (Type-safe I/F)
      </li>
      <li>
        OS 依存がなくなったり, (Portable)
      </li>
      <li>
        コンパイル時にエラーをチェックする機能を作り込んだりして, API error-prone (誤りがちな) を防ぐ.
      </li>
    </ul>
    
    <p>
      Facade や Bridge と異なり, 薄く, Light weight な実装でオーバヘッドがないことが特徴.
    </p>
    
    <p>
      coursera の posa 講義で出てきたパターン. Doug 氏 の論文.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.cs.wustl.edu/~schmidt/PDF/wrapper-facade.pdf">https://www.cs.wustl.edu/~schmidt/PDF/wrapper-facade.pdf</a>
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    Ruby のソケットライブラリの例
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      Ruby の Socket Library がよい例. bind や listen を TCPServer メソッドで隠している. 言語レベルでサポートされていることが多い?
    </p>
    
    <p>
      [sourcecode language=&#8221;ruby&#8221; title=&#8221;&#8221; ]<br /> server = TCPServer.new (4481)
    </p>
    
    <p>
      # =><br /> server = Socket.new (:INET, :STREAM)<br /> addr = Socket.pack_sockaddr_in (4481, &#8220;0.0.0.0&#8221;)<br /> server.bind (addr)<br /> server.listen (5)<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    Special Thanks
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <ul class="org-ul">
      <li>
        <a href="https://stackoverflow.com/questions/15000095/wrapper-facade-pattern">java &#8211; Wrapper Facade Pattern &#8211; Stack Overflow</a>
      </li>
    </ul>
  </div>
</div>