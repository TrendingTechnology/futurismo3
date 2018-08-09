---
author: admin
categories:
- Jenkins
- 技術メモ
date: 2014-06-08T14:26:13+00:00
dsq_thread_id:
- 3.729665e+09
excerpt: Windows環境でJenkinsからRSpecを実行するメモ
pvc_views:
- 1960
tags:
- RSpec
title: Windows環境でJenkinsからRSpecを実行するメモ
type: post
url: /archives/=2498
---

![][1]

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    やりたいこと
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      Windows環境で、RSpecを夜中に連続実行したい。
    </p>
    
    <p>
      cronを利用してもいいけど、Better cronな Jenkinsを使う方法を調べた。
    </p></p>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      なぜcronでなくてJenkins?
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <p>
        Jenkinsを利用する利点は、
      </p>
      
      <ul class="org-ul">
        <li>
          cron書式で設定Ok <ul class="org-ul">
            <li>
              <a href="https://futurismo.biz/archives/1490">cronとwatchrを使ってJenkinsからオレオレリポジトリ監視してみる | Futurismo</a>
            </li>
          </ul>
        </li>
        
        <li>
          グラフィカルな結果レポート
        </li>
        <li>
          ログが残せる
        </li>
      </ul>
      
      <p>
        ところかな。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://hazi.jp/2012-12/2203/">邪道Jenkins（スライド） | Hazi.log</a>
        </li>
        <li>
          <a href="https://image.slidesharecdn.com/jenkins-130706091448-phpapp02/95/slide-1-638.jpg?cb=1373120272">すごい cron ? &#8211; Jenkins 試した</a>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-1-2" class="outline-3">
    <h3 id="sec-1-2">
      むかしも挑戦したけど
    </h3>
    
    <div class="outline-text-3" id="text-1-2">
      <p>
        今回はRCではなくて、WebDriver.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/292">Selenium RCで自分のPCからテストケースを実行する | Futurismo</a>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-1-3" class="outline-3">
    <h3 id="sec-1-3">
      Environment
    </h3>
    
    <div class="outline-text-3" id="text-1-3">
      <ul class="org-ul">
        <li>
          Windows 7 64bit
        </li>
        <li>
          Jenkins
        </li>
        <li>
          Ruby 2.0 p353
        </li>
        <li>
          RSpec 3.0
        </li>
      </ul>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    Jenkins
  </h2>
  
  <div class="outline-text-2" id="text-2">
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      Jenkins インストール
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <p>
        公式サイトからwarファイルをダウンロード。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://jenkins-ci.org/">https://jenkins-ci.org/</a> <ul class="org-ul">
            <li>
              jenkins.war
            </li>
          </ul>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      Jenkins起動
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <p>
        ワンラインで終わり。jenkins ワー！
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">C:\Jenkins&gt;java -jar jenkins.war
</pre></p>
      </div>
      
      <p>
        localhost の port 8080がデフォルトなのでアクセスする。おじさんがいれば成功。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://localhost:8080/">https://localhost:8080/</a>
        </li>
      </ul>
      
      <p>
        ほかにも、windowsインストーラからインストールする方法もある。むかし挑戦した。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/299">JenkinsをWindowsPCにインストールする | Futurismo</a>
        </li>
      </ul>
      
      <p>
        ハマった思い出があるので、今回は挑戦しない。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/331">WindowsバッチファイルをJenkinsで起動したらネットにアクセスできない | Futurismo</a>
        </li>
      </ul>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    RSpecを連続実行
  </h2>
  
  <div class="outline-text-2" id="text-3">
  </div>
  
  <div id="outline-container-sec-3-1" class="outline-3">
    <h3 id="sec-3-1">
      cron実行
    </h3>
    
    <div class="outline-text-3" id="text-3-1">
      <p>
        新規ジョブを作成 > フリースタイル・プロジェクトのビルド > ビルド・トリガ > 定期的に実行を選択。
      </p>
      
      <p>
        5分に1度実行。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">*/5 * * * *
</pre></p>
      </div>
      
      <p>
        ビルド > Windowsバッチコマンドの実行を選択。入力欄にrspecの実行を記入。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">rspec "C:\cygwin\home\TSUNEMICHI\repo\selenium\selenium_spec.rb"
</pre></p>
      </div>
      
      <p>
        手動でビルドを実行してみて、起動が成功すればOK.
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">C:\Users\TSUNEMICHI\.jenkins\jobs\selenium-rspec\workspace&gt;rspec "C:\cygwin\home\TSUNEMICHI\repo\selenium\selenium_spec.rb" 
.

Finished in 18.02 seconds (files took 1.68 seconds to load)
1 example, 0 failures
Finished: SUCCESS
</pre></p>
      </div></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-3-2" class="outline-3">
    <h3 id="sec-3-2">
      テスト出力
    </h3>
    
    <div class="outline-text-3" id="text-3-2">
      <p>
        せっかくなので、テスト結果の視覚化を。 ci_reporterというgemをつかうことで、RSpecの実行結果をJUnit形式のxmlに変換できる。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/nicksieger/ci_reporter/">nicksieger/ci_reporter</a>
        </li>
      </ul>
      
      <p>
        とのことだったが、rspec3は古いフォーマッタに対応していないとのことなので、今回は保留で。
      </p>
      
      <p>
        ほかにも、実行時間の視覚化もできるようだ。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://sue445.hatenablog.com/entry/2013/03/17/015836">Jenkinsにスローテストのグラフを表示する &#8211; くりにっき</a>
        </li>
      </ul>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    Special Thanks
  </h2>
  
  <div class="outline-text-2" id="text-4">
  </div>
  
  <div id="outline-container-sec-4-1" class="outline-3">
    <h3 id="sec-4-1">
      RSpec
    </h3>
    
    <div class="outline-text-3" id="text-4-1">
      <p>
        selenium-webdriverで、なぞのエラーがでて苦しむ。手動パッチをあてた。
      </p>
      
      <p>
        invalid byte sequence in UTF-8 (ArgumentError)
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://gosyujin.github.io/2013/03/18/selenium-firefox-loaderror/">Selenium WebDriverでFirefoxがロードできなくなった &#8211; kk_Atakaの日記＠GitHub Pages</a>
        </li>
        <li>
          <a href="https://seesaawiki.jp/w/kou1okada/d/Cygwin%20-%20Ruby-1.9.3p327%20-%20win32/registry">Cygwin &#8211; Ruby-1.9.3p327 &#8211; win32/registry &#8211; PIB</a>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-4-2" class="outline-3">
    <h3 id="sec-4-2">
      Jenkins
    </h3>
    
    <div class="outline-text-3" id="text-4-2">
      <ul class="org-ul">
        <li>
          <a href="https://codezine.jp/article/detail/7505">「Selenium2」テスト徹底活用！ Jenkinsによる自動実行とSelenium Grid2による複数環境でのテスト （1/6）：CodeZine</a>
        </li>
        <li>
          <a href="https://ozzy2010.blogspot.jp/2012/05/5web-jenkins-x-selenium.html">ソフトウェアテスト: 5分でできるWebテスト自動化 &#8211; Jenkins x Selenium</a>
        </li>
      </ul>
    </div></p>
  </div></p>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/Windows_7_Vertical_Logo_Web.jpg