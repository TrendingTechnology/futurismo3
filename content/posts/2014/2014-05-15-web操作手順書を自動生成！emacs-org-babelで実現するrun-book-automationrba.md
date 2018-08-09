---
author: admin
categories:
- Emacs
- Ruby
- ハッキング
date: 2014-05-15T14:47:00+00:00
dsq_thread_id:
- 3.728177e+09
excerpt: Web操作手順書を自動生成します
pvc_views:
- 2334
tags:
- RBA
title: Web操作手順書を自動生成！Emacs org-babelで実現するRun Book Automation(RBA)
type: post
url: /archives/=2451
---

![][1]

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      RunBookAutomationや Code As Infrastructureという単語をよく耳にする今日この頃。 仕事でなにかと手順書を作成することがだれにでもあるはず。
    </p>
    
    <p>
      今日は、文芸的プログラミングと、RunBookAutomationの概念を合体させて、 Web操作の作業手順書を自動作成してみます。
    </p>
    
    <p>
      これは、以下の記事の続編です。つまり、selenium-webdriverを Web操作自動化のためのエンジンとして利用します。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/en/archives/2431">Selenium BuilderでRubyコードを自動生成して実行する | Futurismo</a>
      </li>
    </ul>
    
    <p>
      以下の過去記事と関係があります。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/2349">Run Book Autmationとはなにかについて調べてみた | Futurismo</a>
      </li>
      <li>
        <a href="https://futurismo.biz/archives/2403">org-modeで書いたテキストをPandocでRestructured Textに変換する | Futurismo</a>
      </li>
    </ul>
    
    <p>
      [toc]
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    出力のためのツール org-babel
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      org-babelを利用する。
    </p>
    
    <p>
      org-babelとは、文芸的プログラミングを実現するためのemacsの機能。
    </p>
    
    <p>
      <a href="https://orgmode.org/worg/org-contrib/babel/">Babel: active code in Org-mode</a>
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    Ruby Codeに出力
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      org-babelを利用して出力するには、rubyのcodeを以下のように囲む。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-language">  #+begin_src ruby :tangle ./hello_rba.rb :exports none
</pre></p>
    </div>
    
    <ul class="org-ul">
      <li>
        begin_src ruby &#x2026; rubyのコード
      </li>
      <li>
        :tangle ./hello_rba.rb &#x2026; rubyの出力ファイル指定
      </li>
      <li>
        exports none &#x2026; org-modeのexport機能ではcodeをexportしない。
      </li>
    </ul>
    
    <p>
      Rubyコードに書き出すには、以下を実施。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-language">M-x org-babel-tangle
</pre></p>
    </div>
    
    <p>
      これで、動作する手順書(RBA)が自動生成される。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    HTMLに出力
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      org-export-dispatchから htmlを選択することで、htmlに変換可能。
    </p>
    
    <p>
      このとき:exports noneのオブションのおかげで、rubyのコードは出力されない。
    </p></p>
  </div>
  
  <div id="outline-container-sec-4-1" class="outline-3">
    <h3 id="sec-4-1">
      github風にオシャレな出力
    </h3>
    
    <div class="outline-text-3" id="text-4-1">
      <p>
        pandocを利用して md から htmlに変換することで、cssがつかえる。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://shuzo-kino.hateblo.jp/entry/2014/02/16/220708">Pandocでドキュメント変換で楽する &#8211; Bye Bye Moore</a>
        </li>
      </ul>
      
      <p>
        このデザインがとても気に入った！Special Thanks
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">wget https://gist.github.com/andyferra/2554919/raw/2e66cabdafe1c9a7f354aa2ebf5bc38265e638e5/github.css
pandoc hello_rba.md -c github.css -s -o hello_rba.html
</pre></p>
      </div></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-5" class="outline-2">
  <h2 id="sec-5">
    PDFに出力
  </h2>
  
  <div class="outline-text-2" id="text-5">
    <p>
      pandocを利用してpdfに変換したかったけど、深刻な容量不足のため断念。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://qiita.com/sky_y/items/80bcd0f353ef5b8980ee#">HTML &#8211; 多様なフォーマットに対応！ドキュメント変換ツールPandocを知ろう &#8211; Qiita</a>
      </li>
      <li>
        <a href="https://oku.edu.mie-u.ac.jp/~okumura/texwiki/?cmd=read&#038;page=Linux/Linux%20Mint">Linux/Linux Mint &#8211; TeX Wiki</a>
      </li>
    </ul>
    
    <p>
      代替手段として、firefoxのプラグインでHTMLをpdfに変換した。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-6" class="outline-2">
  <h2 id="sec-6">
    スクリーンショットを撮影
  </h2>
  
  <div class="outline-text-2" id="text-6">
    <p>
      selenium-webdriverには、スクリーンショット撮影機能がある。
    </p>
    
    <p>
      これを手順ごとに実施して、画像ファイルもorg-modeに含める。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-language">wd.save_screenshot('screenshot.png')
</pre></p>
    </div>
    
    <p>
      org-modeにはこんな感じで書く
    </p>
    
    <div class="org-src-container">
      <pre class="src src-language">[[./screenshot.png]]
</pre></p>
    </div>
    
    <p>
      これで、画像がついてよりわかりやすくなった。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-7" class="outline-2">
  <h2 id="sec-7">
    Code
  </h2>
  
  <div class="outline-text-2" id="text-7">
    <p>
      <a href="https://gist.github.com/tsu-nera/39eb7a9b7189531db008">https://gist.github.com/tsu-nera/39eb7a9b7189531db008</a>
    </p></p>
  </div>
  
  <div id="outline-container-sec-7-1" class="outline-3">
    <h3 id="sec-7-1">
      RunBook
    </h3>
    
    <div class="outline-text-3" id="text-7-1">
      <p>
        表示のために、冒頭に#を入れています。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">#   * Hello RBA
#    
#   ** はじめに
#   Selenium Webdriverをつかって、Google検索します。
#    
#   #+begin_src ruby :tangle ./hello_rba.rb :exports none
#   require 'pp'
#   require 'selenium-webdriver'
#   #+end_src
#    
#   ** 手順
#   まずは、firefoxを立ち上げます。
#    
#   #+begin_src ruby :tangle ./hello_rba.rb :exports none
#   wd = Selenium::WebDriver.for :firefox
#   #+end_src
#    
#   次に、https://www.google.co.jp/ にアクセスします。
#    
#   #+begin_src ruby :tangle ./hello_rba.rb :exports none
#   wd.get "https://www.google.co.jp/"
#   wd.save_screenshot('screenshot.png')
#   #+end_src
#    
#   [[./screenshot.png]]
#    
#   次に、検索窓に以下を入力します。
#    
#   - "Selenium Builder"
#    
#   #+begin_src ruby :tangle ./hello_rba.rb :exports none
#   wd.find_element(:id, "lst-ib").click
#   wd.find_element(:id, "lst-ib").clear
#   wd.find_element(:id, "lst-ib").send_keys "Selenium Builder"
#   wd.save_screenshot('screenshot2.png')
#   #+end_src
# 
#   [[./screenshot2.png]]
#    
#   最後に、検索ボタンを押します。
#    
#   #+begin_src ruby :tangle ./hello_rba.rb :exports none
#   wd.find_element(:name, "btnK").click
#   #+end_src
#    
#   #+begin_src ruby :tangle ./hello_rba.rb :exports none
#   sleep 3
#   wd.save_screenshot('screenshot3.png')
#   wd.quit
#   #+end_src
#    
#   [[./screenshot3.png]]
</pre></p>
      </div></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-7-2" class="outline-3">
    <h3 id="sec-7-2">
      生成したCode
    </h3>
    
    <div class="outline-text-3" id="text-7-2">
      <div class="org-src-container">
        <pre class="src src-language">require 'pp'
require 'selenium-webdriver'

wd = Selenium::WebDriver.for :firefox

wd.get "https://www.google.co.jp/"
wd.save_screenshot('screenshot.png')

wd.find_element(:id, "lst-ib").click
wd.find_element(:id, "lst-ib").clear
wd.find_element(:id, "lst-ib").send_keys "Selenium Builder"
wd.save_screenshot('screenshot2.png')

wd.find_element(:name, "btnK").click

sleep 3
wd.save_screenshot('screenshot3.png')
wd.quit
</pre></p>
      </div></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-8" class="outline-2">
  <h2 id="sec-8">
    Sample
  </h2>
  
  <div class="outline-text-2" id="text-8">
    <img src="https://lh6.ggpht.com/-LAhbzJR8w3g/U3TSdYx0ikI/AAAAAAAABDs/1XAvbhnYv9U/2014-05-15-234140_796x882_scrot.png" />
  </div></p>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/emacs_logo.jpg