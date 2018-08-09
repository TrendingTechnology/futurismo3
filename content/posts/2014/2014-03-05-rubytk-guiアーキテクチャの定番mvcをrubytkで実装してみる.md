---
author: admin
categories:
- Ruby
- 技術メモ
date: 2014-03-05T12:29:28+00:00
dsq_thread_id:
- 3.7316298e+09
pvc_views:
- 1382
tags:
- Tk
title: '[RubyTk] GUIアーキテクチャの定番MVCをRubyTkで実装してみる'
type: post
url: /archives/=2295
---

[<img alt="" src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" width="256" height="256" />][1] 

MVCについて勉強したので、実際にRubyTkに応用してみる。 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    MVCとは
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      MVCとは、アーキテクチャの一つ。 Model-View-Controllerの略。 ユーザ・インタフェースをもつアプリケーションをうまくつくるための設計方法。
    </p>
    
    <p>
      詳しい解説は、リンク先に譲るとする。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://ja.wikipedia.org/wiki/Model_View_Controller">Model View Controller &#8211; Wikipedia</a>
      </li>
      <li>
        <a href="https://www7.ocn.ne.jp/~fishbone/mvc/">MVCモデル</a>
      </li>
    </ul>
    
    <p>
      MVCアーキを利用すると、
    </p>
    
    <ul class="org-ul">
      <li>
        仕様変更につよい
      </li>
      <li>
        移植がしやすい
      </li>
    </ul>
    
    <p>
      などのメリットがある。
    </p>
    
    <p>
      また、テストが書きやすいという利点もある。 RubyTkライブラリがからむとviewのテストがかけない。 tkライブラリは論理的な処理から切り離したい。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    MVC実装例
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      ボタンをおすと、ファイルからデータを読み出して、画面に表示するアプリケーションをつくる。
    </p></p>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      MVC以前
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <p>
        普通の実装。
      </p>
      
      <p>
        </div>
      </p>
    </div>
    
    <div id="outline-container-sec-2-2" class="outline-3">
      <h3 id="sec-2-2">
        MVCの実装
      </h3>
      
      <div class="outline-text-3" id="text-2-2">
        <p>
          Model, View, Controllerの３つにクラスを分割して実装。
        </p>
        
        <p>
          </div>
        </p>
      </div>
      
      <div id="outline-container-sec-2-3" class="outline-3">
        <h3 id="sec-2-3">
          proc, lambdaを導入する
        </h3>
        
        <div class="outline-text-3" id="text-2-3">
          <p>
            上の例だと、ViewとControllerの間に依存関係がある。これをなくしたい。
          </p>
          
          <p>
            Rubyでコールバックやハンドラの仕組みを導入するためにはどうすればいいのだろうか？
          </p>
          
          <p>
            答えは、procやlambdaを利用すればうまくできた！といっても、完全に依存関係がなくなったわけではないけど。
          </p>
          
          <p>
            感性的にこっちの方が美しく感じる。
          </p>
          
          <p>
            </div>
          </p>
        </div>
        
        <div id="outline-container-sec-2-4" class="outline-3">
          <h3 id="sec-2-4">
            Links
          </h3>
          
          <div class="outline-text-3" id="text-2-4">
            <ul class="org-ul">
              <li>
                <a href="https://stackoverflow.com/questions/1677861/how-to-implement-a-callback-in-ruby">How to implement a &#8220;callback&#8221; in Ruby? &#8211; Stack Overflow</a>
              </li>
            </ul>
          </div></p>
        </div></p>
      </div>

 [1]: https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite