---
author: admin
categories:
- Ruby
- 技術メモ
date: 2014-03-03T12:21:00+00:00
dsq_thread_id:
- 3.7304763e+09
excerpt: RubyTkにTkCompositeについてしらべました
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 1471
tags:
- Gof
title: '[RubyTk]コンポジット・パターン(Composite Pattern)とTkCompositeについてしらべた'
type: post
url: /archives/=2288
---

[<img alt="" src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" width="256" height="256" />][1] 

RubyTkにTkCompositeというなぞのライブラリがあるので、しらべた。 

名前から推測するに、Composite Patternと関係がありそうだ。 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    Composite Patternとは
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      Composite Patternとは、Gofのパターンの一つ。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://ja.wikipedia.org/wiki/Composite_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3">Composite パターン &#8211; Wikipedia</a>
      </li>
    </ul>
    
    <p>
      説明はwikipediaに譲るとして、自分の理解では、
    </p>
    
    <blockquote>
      <p>
        再帰的な操作が可能なデータ構造
      </p>
      
      <p>
        親子関係のあるデータ構造と素の操作
      </p>
    </blockquote>
    
    <p>
      という感じ。たとえば単方向リスト、木構造などのデータ構造とそれに対する操作。 何だか当たり前のことだ。
    </p></p>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      登場人物
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <ul class="org-ul">
        <li>
          Component(親) 全ての親になるもの
        </li>
        <li>
          Leaf（葉） Leafを持たないもの
        </li>
        <li>
          Composite（枝）Leafを持つもの
        </li>
      </ul>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    TkCompositeの使い方
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      TkCompositeを利用すると、 複数のウィンドウ部品がまとまってできているウィンドウ部品を簡単に作成できるみたい。
    </p>
    
    <p>
      以下が、作法。
    </p>
    
    <pre><code>
class Tkhoge &lt; TkWindow
  include TkComposite

  def initialize_composite
    ...
  end
end
</code></pre>
    
    <p>
      @frameがインスタンス変数として利用できる。 この@frameを親にして、この部品たちを組み合わせる(ここがcomposite!)
    </p>
    
    <p>
      delegateを利用すると、属性を子の部品に委譲できる。
    </p>
    
    <p>
      詳しくは以下のリンクを参照。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-list/5610">How to make Composite Widget (Re: megawidgets)</a>
      </li>
    </ul>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    サンプル
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      再生、停止ボタン、エントリフィールドをもつのモックguiを作成してみた。
    </p>
    
    <p>
    </p>
    
    <p>
      GUIの親部品、子部品がcompositeのよきサンプル。
    </p></p>
  </div></p>
</div>

 [1]: https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite