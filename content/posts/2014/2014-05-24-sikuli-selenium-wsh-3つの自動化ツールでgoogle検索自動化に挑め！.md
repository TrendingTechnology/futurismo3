---
author: admin
categories:
- Ruby
- ハッキング
date: 2014-05-24T06:18:07+00:00
dsq_thread_id:
- 3.7323077e+09
pvc_views:
- 3882
tags:
- Selenium
- Sikuli
- Windows
- 自動化
title: Sikuli, Selenium, WSH, 3つの自動化ツールでGoogle検索自動化に挑め！
type: post
url: /archives/=2470
---

[<img alt="" src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" width="256" height="256" />][1] 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      前回、Sikuliの使い方を調べてみました。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/2467">画像認識でアプリケーション操作の自動化を実現！Sikuliがあまりに革命的で興奮した | Futurismo</a>
      </li>
    </ul>
    
    <p>
      今回は、Sikuliと別のツールを組み合わせてみます。前回記事の続編です。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/en/archives/2431">Selenium BuilderでRubyコードを自動生成して実行する | Futurismo</a>
      </li>
    </ul>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    やること
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      以下の手順を自動化します。
    </p>
    
    <ol class="org-ol">
      <li>
        firefoxを立ち上げる
      </li>
      <li>
        検索窓にSikuliと入力する
      </li>
      <li>
        検索ボタンをおす
      </li>
    </ol>
    
    <p>
      以下のツールを利用します。
    </p>
    
    <ul class="org-ul">
      <li>
        Sikuli &#x2026; 画像認識による自動化ツール
      </li>
      <li>
        Selenium &#x2026; HTML解析による自動化ツール
      </li>
      <li>
        WSH &#x2026; キー操作の自動化ツール
      </li>
    </ul>
    
    <p>
      なんだか、ヨットに対して戦車と軍艦と戦闘機で総攻撃をかけるような感じになってきた。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    使う手段
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      JRubyです。以下を利用。
    </p>
    
    <ul class="org-ul">
      <li>
        win32ole
      </li>
      <li>
        sikulixapi
      </li>
      <li>
        selenium-webdriver
      </li>
    </ul>
    
    <p>
      win32oleはデフォルトで入っている。sikuliは前回記事を参照。
    </p>
    
    <p>
      selenium-webdriverは、jgem install selenium-webdriverで問題なくインストール。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    結果
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      自動化がキマるとけっこうきもちいい。
    </p>
    
    <p>
      <iframe width="420" height="315" src="//www.youtube.com/embed/fiAT3qeqng0?rel=0" frameborder="0" allowfullscreen></iframe> </div>
    </p>
  </div>

 [1]: https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite