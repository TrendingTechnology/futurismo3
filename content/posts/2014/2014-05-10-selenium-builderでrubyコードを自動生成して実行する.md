---
author: admin
categories:
- Ruby
- 技術メモ
date: 2014-05-09T22:39:00+00:00
dsq_thread_id:
- 3.7288735e+09
excerpt: 次世代Selenium IDEといわれているSelenium Builderを試したメモ
pvc_views:
- 3814
tags:
- Selenium
title: Selenium BuilderでRubyコードを自動生成して実行する
type: post
url: /archives/=2431
---

次世代Selenium IDEと唱われている、Selenium Builderを試したメモ。 

[<img alt="" src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" width="256" height="256" />][1] 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    次世代Selenium IDE
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      次世代という意味は、Selenium2 、 つまりWebdriverをサポートしているということ。
    </p>
    
    <p>
      Selenium IDEは Selenium1(or RemoteConsole RC)をサポートしている。
    </p></p>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      Selenium Builderの準備
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <p>
        Selenium Builderは forefoxのブラグイン。 なので、まずはfirefoxをインストール。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.mozilla.org/ja/firefox/new/">Firefox のダウンロード — 自由な Web ブラウザ — Mozilla</a>
        </li>
      </ul>
      
      <p>
        次に、以下からプラグインをインストール。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://sebuilder.github.io/se-builder/">Selenium Builder &#8211; The next evolution</a>
        </li>
      </ul>
      
      <p>
        firefoxを再起動後、Ctrl+Alt+B or メニュー -> 開発ツール -> Launch Senium Builder.
      </p>
      
      <p>
        Selenium Builderについては、以下の記事がとても詳しい。Special Thanks!!
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://blog.trident-qa.com/2013/12/selenium-builder-vs-ide-recap/">次世代のIDE、Selenium Builderまとめ | 品質向上ブログ</a>
        </li>
      </ul>
      
      <p>
        まとまったドキュメントはここ。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/sebuilder/se-builder/wiki">Pages · sebuilder/se-builder Wiki</a>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-1-2" class="outline-3">
    <h3 id="sec-1-2">
      ruby selenium webdriverの準備
    </h3>
    
    <div class="outline-text-3" id="text-1-2">
      <p>
        rubyから seleniumを利用するために、selenium-webdriverを利用する。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">gem install selenium-webdriver
</pre></p>
      </div>
      
      <p>
        プロキシ配下では以下。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">gem install selenium-webdriver -r -p https://username:password@proxy.hostname:port
</pre></p>
      </div></p>
    </div>
    
    <div id="outline-container-sec-1-2-1" class="outline-4">
      <h4 id="sec-1-2-1">
        Windows環境のワナ
      </h4>
      
      <div class="outline-text-4" id="text-1-2-1">
        <p>
          Windows環境でgem installを動かすためには、devkitのインストールが必要。 RubyInstallerと Devkitをセットでインストールする必要がある。
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://rubyinstaller.org/">RubyInstaller for Windows</a>
          </li>
        </ul>
      </div></p>
    </div>
    
    <div id="outline-container-sec-1-2-2" class="outline-4">
      <h4 id="sec-1-2-2">
        Cygwin環境のワナ
      </h4>
      
      <div class="outline-text-4" id="text-1-2-2">
        <p>
          そもそも、Cygwin環境では 依存パッケージのffiがバグっててインストールできない。
        </p>
        
        <p>
          Cygwin64bit版は依存しているffiライブラリがバグってる！ パッチを当てる必要があるという茨の道。
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://github.com/ffi/ffi/issues/284">https://github.com/ffi/ffi/issues/284</a>
          </li>
        </ul>
        
        <div class="org-src-container">
          <pre class="src src-sh">$ gem install selenium-webdriver

Building native extensions.  This could take a while...
ERROR:  Error installing selenium-webdriver:
        ERROR: Failed to build gem native extension.

        /usr/bin/ruby.exe extconf.rb
checking for ffi.h... *** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of
necessary libraries and/or headers.  Check the mkmf.log file for more
</pre></p>
        </div>
        
        <p>
          回避方法をためしてみても、自分の環境ではうまくいかなかったので諦め。
        </p></p>
      </div></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    Rubyコードを生成
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      自動化したいページで右クリックする。
    </p>
    
    <p>
      SeleniumBuilderが立ち上がる。記録の開始を選択して、作業を記録。
    </p>
    
    <p>
      記録が終わったら、ツールバー -> ファイル -> エクスポートを選択。
    </p>
    
    <p>
      Selenium2としては以下の形式へExportできる(2014/5現在)
    </p>
    
    <ul class="org-ul">
      <li>
        JSON
      </li>
      <li>
        Java(Junit/TestNG)
      </li>
      <li>
        Ruby
      </li>
      <li>
        Python
      </li>
      <li>
        PHP
      </li>
      <li>
        Node.JS
      </li>
      <li>
        C#
      </li>
    </ul>
    
    <p>
      Selenium1としてExportするとさらに対応言語が多くなる。
    </p>
    
    <ul class="org-ul">
      <li>
        HTML
      </li>
      <li>
        Groovry
      </li>
      <li>
        Perl
      </li>
    </ul>
    
    <p>
      Selenium1だと、RubyのRSpecやtextunitにも対応しているようだ。 もっともっと多くなるのは時間の問題だろう。スゴい！
    </p>
    
    <p>
      Rubyを選択して、Rubyのコードを生成。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-language">require 'rubygems'
require 'selenium-webdriver'
wd = Selenium::WebDriver.for :firefox

wd.get "https://www.google.co.jp/"
wd.find_element(:id, "lst-ib").click
wd.find_element(:id, "lst-ib").clear
wd.find_element(:id, "lst-ib").send_keys "Selenium Builder"
wd.find_element(:css, "div.tsf-p").click
wd.find_element(:name, "btnK").click
wd.quit
</pre></p>
    </div>
    
    <p>
      selenium-webdriverがrequireされいてるところに注目されたし。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    Rubyコードを実行
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      生成したコードをコマンドラインから実行するだけ！こんなに簡単だとは！
    </p>
    
    <p>
      <iframe width="420" height="315" src="//www.youtube.com/embed/Nsigzagcuds" frameborder="0" allowfullscreen></iframe> </div>
    </p>
  </div>

 [1]: https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite