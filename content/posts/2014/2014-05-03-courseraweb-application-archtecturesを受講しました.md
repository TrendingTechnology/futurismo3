---
author: admin
categories:
- MOOC
- 技術メモ
date: 2014-05-03T09:53:00+00:00
dsq_thread_id:
- 3.8817293e+09
excerpt: CourseraでWeb Application Archtecturesを受講しました
pvc_views:
- 1609
tags:
- coursera
title: '[Coursera]Web Application Archtecturesを受講しました'
type: post
url: /archives/=2414
---

CourseraでWeb Application Archtecturesを受講しました。 

<ul class="org-ul">
  <li>
    <a href="https://www.coursera.org/course/webapplications">Web Application Architectures | Coursera</a>
  </li>
</ul>

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    Motivation
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      ちょうど仕事でもRubyを使い始めたときだった。
    </p>
    
    <p>
      Rubyのキラーアプリ。Railsに触れる、&#8221;チャンス&#8221;と思ってやってみた。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    Course
  </h2>
  
  <div class="outline-text-2" id="text-2">
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      Lecture
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <p>
        Railsをあつかいながら、ウェブアーキテクャチャを学ぶ講義。
      </p>
      
      <p>
        スライドでいろいろと概念が説明されたあとに、 コンソール画面で実際にコーディングする進め方。 毎週少しずつ、ブログサービスを作成する。（イテレーション）
      </p>
      
      <p>
        内容もそうだが、動画がおもしろい。画面を先生がいろいろと飛び回る！
      </p>
      
      <p>
        上から下からGreg先生がスライドインしてきたり、先生が巨人になったり小人になったり・・・ （一度だけ、2人に分身して表示された！）。この人は動画編集で遊んでるなと思った。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      Assignment
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <p>
        4つのAssignmentがだされる。 講義の内容を自分でも手を動かして真似するだけなので、とても簡単。だれでもできる。
      </p>
      
      <p>
        完成したら、git commit してbitbucketにpushする。 そうすると、それをトリガとしてRSpecで自動採点されるという仕組み。
      </p>
      
      <p>
        自分の宿題repositoryは以下。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://bitbucket.org/tsu-nera/coursera-webapplications-assignment">https://bitbucket.org/tsu-nera/coursera-webapplications-assignment</a>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-3" class="outline-3">
    <h3 id="sec-2-3">
      Contents
    </h3>
    
    <div class="outline-text-3" id="text-2-3">
      <p>
        期間が6weekということで、広く浅くという内容だ。
      </p>
      
      <p>
        Railsというのは、ウェブを学ぶための手段だった。 実際は、Railsをつかってインターネットやウェブの歴史と技術が紹介された。
      </p>
      
      <p>
        git, Agileに関わる開発手法、Rubyもあわせて学べる。 また、言語もRubyだけではなくて、HTMLやCSS, JQueryなどなど。幅広い。
      </p>
      
      <p>
        Web開発に関わるいろんな知識がたくさんでてくる。
      </p></p>
    </div>
    
    <div id="outline-container-sec-2-3-1" class="outline-4">
      <h4 id="sec-2-3-1">
        Webの発展
      </h4>
      
      <div class="outline-text-4" id="text-2-3-1">
        <p>
          まずは、Webの歴史が紹介される。
        </p>
        
        <ul class="org-ul">
          <li>
            Web1.0 ・・・クライアントは静的ページをWebサーバから取得する。ウェブページ。ウェブを読む。
          </li>
          <li>
            Web2.0 ・・・クライアント/サーバ側で動的にページを作成する。ウェブサービス。ウェブを使う。
          </li>
          <li>
            Web3.0 ・・・クライアントごとがつながりあう。データの上のメタデータをあつかう。 <ul class="org-ul">
              <li>
                クラウドコンピューティング ・・・あらゆるデバイスがネットにつながる。
              </li>
              <li>
                セマンティックウェブ ・・・ビックデータの統計解析から価値を生み出す。 <p>
                  <a href="https://dmtc.jp/magazine/archives/=1461">迫り来るWeb3.0時代を生き抜くエンジニアが持たなければいけない3つの視点 | DMTC Magazine</a>
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div></p>
    </div>
    
    <div id="outline-container-sec-2-3-2" class="outline-4">
      <h4 id="sec-2-3-2">
        Web Archtecture
      </h4>
      
      <div class="outline-text-4" id="text-2-3-2">
        <p>
          概ね、以下のようなアーキテクチャの各部分を、各週に分けて説明される。
        </p>
        
        <div class="org-src-container">
          <pre class="src src-language">  Web Client
      |
  (NetWork)
      |
  Web Server
      |
  Script/Service
      |
  (Connector)
      |
   DataBase
</pre></p>
        </div>
        
        <p>
          Railsということで、MVCアーキも随所随所で強調される。
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://ja.wikipedia.org/wiki/Model_View_Controller">Model View Controller &#8211; Wikipedia</a>
          </li>
        </ul>
      </div></p>
    </div>
    
    <div id="outline-container-sec-2-3-3" class="outline-4">
      <h4 id="sec-2-3-3">
        Database Layer
      </h4>
      
      <div class="outline-text-4" id="text-2-3-3">
        <p>
          MVCのモデルに当たる部分。 データベースとそれをRailsからどうあつかうかを学ぶ。
        </p>
        
        <div class="org-src-container">
          <pre class="src src-language">Week Three – Module 3: Database Interactions
  Lecture 1: Relational Databases
  Lecture 2: Databases in Rails
  Lecture 3: The Active Record Design Pattern
</pre></p>
        </div>
        
        <p>
          ブログの記事とコメントの関係をMySQLをつかって説明される。
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://ja.wikipedia.org/wiki/%E9%96%A2%E4%BF%82%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9">関係データベース &#8211; Wikipedia</a>
          </li>
        </ul>
        
        <p>
          モデル層で、データのValidateをチェックする役割も紹介される。
        </p></p>
      </div></p>
    </div>
    
    <div id="outline-container-sec-2-3-4" class="outline-4">
      <h4 id="sec-2-3-4">
        Middleware Layer
      </h4>
      
      <div class="outline-text-4" id="text-2-3-4">
        <p>
          MVCのコントローラに当たる部分。HTTPやそれをベースにした通信プロトコルの解説。
        </p>
        
        <div class="org-src-container">
          <pre class="src src-language">Week Five – Module 5: Middleware
  Lecture 1: What is Middleware?
  Lecture 2: The Hypertext Transfer Protocol (HTTP) – Introduction
  Lecture 3: HTTP – Request
  Lecture 4: HTTP – Response
  Lecture 5: The Model-View-Controller (MVC) Design Pattern
  Lecture 6: Rails Controllers – Request Handling
  Lecture 7: Rails Controllers – Response
  Lecture 8: MVC Implementation in Rails
</pre></p>
        </div>
        
        <p>
          以下のような概念が紹介される。 はずかしながら、HTTPについてはじめてまともに勉強した気がした。
        </p>
        
        <ul class="org-ul">
          <li>
            HTTP, HTTPS(Request, Responce) <a href="https://ja.wikipedia.org/wiki/Hypertext_Transfer_Protocol">https://ja.wikipedia.org/wiki/Hypertext_Transfer_Protocol</a>
          </li>
        </ul>
        
        <p>
          REST, SOAPは未だにわからないな。。。
        </p>
        
        <ul class="org-ul">
          <li>
            REST-based, Restful, <a href="https://ja.wikipedia.org/wiki/REST">https://ja.wikipedia.org/wiki/REST</a>
          </li>
          <li>
            RPC-based, SOAP <a href="https://ja.wikipedia.org/wiki/SOAP_(%E3%83%97%E3%83%AD%E3%83%88%E3%82%B3%E3%83%AB)">SOAP (プロトコル) &#8211; Wikipedia</a>
          </li>
        </ul>
      </div></p>
    </div>
    
    <div id="outline-container-sec-2-3-5" class="outline-4">
      <h4 id="sec-2-3-5">
        Presentation Layer
      </h4>
      
      <div class="outline-text-4" id="text-2-3-5">
        <div class="org-src-container">
          <pre class="src src-language">Week Six – Module 6: Presentation/User Interface
  Lecture 1: Introduction and Background
  Lecture 2: HTML – Basic Syntax
  Lecture 3: HTML – Document Structure
  Lecture 4: HTML – Forms
  Lecture 5: Dynamic Content
  Lecture 6: Cascading Style Sheets (CSS)
  Lecture 7: JavaScript and jQuery
  Lecture 8: Ajax
</pre></p>
        </div>
        
        <p>
          Presentation Layerの構成要素は以下。
        </p>
        
        <ul class="org-ul">
          <li>
            HTML(構造)
          </li>
          <li>
            CSS(表現)
          </li>
          <li>
            JavaScript(動作)
          </li>
        </ul>
        
        <p>
          これらは絶対に、絶対に、絶対に、分けなければいけないと強調される。
        </p></p>
      </div></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    感想
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      今まで漠然と知っていたことを、改めて学び直した気がする。
    </p>
    
    <p>
      このブログもWordPressでできており、 ブログの改造をすることでHTMLやCSS,JavaScriptをつかったこともあったが、 それらの役割や関わりを基礎からおさえられた気がした。
    </p>
    
    <p>
      もっとウェブサービスを理解したいと思って、こんな本も購入してみた。
    </p>
    
    <div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'>
      <div class='amazlink-list' style='clear: both;'>
        <div class='amazlink-info' style='height:; margin-bottom: 10px'>
          <div class='amazlink-name' style='margin-bottom:10px;line-height:120%'>
            <a href='https://www.amazon.co.jp/%E3%80%8C%E3%83%97%E3%83%AD%E3%81%AB%E3%81%AA%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AEWeb%E6%8A%80%E8%A1%93%E5%85%A5%E9%96%80%E3%80%8D-%E2%80%95%E2%80%95%E3%81%AA%E3%81%9C%E3%80%81%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AFWeb%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%82%92%E9%96%8B%E7%99%BA%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%81%AE%E3%81%8B-%E5%B0%8F%E6%A3%AE-%E8%A3%95%E4%BB%8B/dp/4774142352%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4774142352' rel='nofollow' target='_blank'>「プロになるためのWeb技術入門」 ――なぜ、あなたはWebシステムを開発できないのか</a>
          </div>
          
          <div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>
            posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 14.05.02
          </div>
          
          <div class='amazlink-detail'>
            小森 裕介
          </div>
          
          <div class='amazlink-sub-info' style='float: left;'>
            <div class='amazlink-link' style='margin-top: 5px'>
              <img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18' /><a href='https://www.amazon.co.jp/%E3%80%8C%E3%83%97%E3%83%AD%E3%81%AB%E3%81%AA%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AEWeb%E6%8A%80%E8%A1%93%E5%85%A5%E9%96%80%E3%80%8D-%E2%80%95%E2%80%95%E3%81%AA%E3%81%9C%E3%80%81%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AFWeb%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%82%92%E9%96%8B%E7%99%BA%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%81%AE%E3%81%8B-%E5%B0%8F%E6%A3%AE-%E8%A3%95%E4%BB%8B/dp/4774142352%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4774142352' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18' /><a href='https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/archives/c=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F6416565%2F&#038;m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D6416565%26surl%3Dbook' rel='nofollow' target='_blank'>楽天</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <p>
      広く浅くなので、まだまだ入り口を学んだだけだ。 ものたりないな、と思っていたところに朗報！ なんと8月にレクチャーの再放送、そして9月に続編のレクチャーが計画されているとか。次も頑張ろう。
    </p></p>
  </div></p>
</div>