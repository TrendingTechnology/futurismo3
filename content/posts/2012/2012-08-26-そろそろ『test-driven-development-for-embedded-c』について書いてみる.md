---
author: admin
categories:
- C言語
- TDD
- 書評
date: 2012-08-25T22:26:08+00:00
dsq_thread_id:
- 3.7367352e+09
follow:
- follow
index:
- index
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 25140
side:
- def
sub:
- def
tags:
- 組込み
title: そろそろ『test driven development for embedded c』について書いてみる
type: post
url: /archives/=172
---

<!--:ja-->1年以上前からずっと読んでいる本について書いてみる。

『test driven development for embedded c』

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'>
  <div class='amazlink-list' style='clear: both;'>
    <div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'>
      <a href='https://www.amazon.co.jp/Test-Driven-Development-Embedded-Pragmatic-Programmers/dp/193435662X%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D193435662X' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/51AWF3--mpL._SL160_.jpg' style='border: none;' /></a>
    </div>
    
    <div class='amazlink-info' style='height:160; margin-bottom: 10px'>
      <div class='amazlink-name' style='margin-bottom:10px;line-height:120%'>
        <a href='https://www.amazon.co.jp/Test-Driven-Development-Embedded-Pragmatic-Programmers/dp/193435662X%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D193435662X' rel='nofollow' target='_blank'>Test-Driven Development for Embedded C (Pragmatic Programmers)</a>
      </div>
      
      <div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>
        posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 13.10.22
      </div>
      
      <p>
        <noscript>
          <a href='https://bust-up.gob.jp'>xn--cck2b5as2b7b</a>
        </noscript>
      </p>
      
      <div class='amazlink-detail'>
        James W. Grenning
      </div>
      
      <div class='amazlink-sub-info' style='float: left;'>
        <div class='amazlink-link' style='margin-top: 5px'>
          <img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18' /><a href='https://www.amazon.co.jp/Test-Driven-Development-Embedded-Pragmatic-Programmers/dp/193435662X%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D193435662X' rel='nofollow' target='_blank'>Amazon</a>
        </div>
      </div>
    </div>
  </div>
</div>

### はじめに

C言語を使った組込み開発でテスト駆動開発をどう実践するかについてかかれた本である。

この本は、印刷された本のみではなくて、電子書籍としても販売されているのが嬉しい。しかも、電子書籍上のURLをクリックすると、その部分のソースをダウンロードできるところが、またなんともいえなく感動的である。

自分は、はじめは通勤中に本をカバンにいれて読んでいたのだけれども、ある日上司に勝手にバックのなかを覗かれて、

『これはなんだ！』

と、エロ本を見つけた先生のようにニヤけながらいわれたのが嫌で、電子書籍を購入した。

（電子書籍はここから)
  
[<span style="color: #0066cc;">https://pragprog.com/book/jgade/test-driven-development-for-embedded-c</span>][1]

### 内容について

はじめはテスト駆動開発のことが述べられているのだが、だんだんと関係ない話題が出てきて、C言語でオブジェクト指向ライクに書くための方法だったりが混じってきて、最後のほうはTDDとはあまり関係なく、いかにして”Clean Code”をかくかということに主眼が移っていくことが、？と！で面白かった。

簡単な要約

  * 序章:TDDってなに？
  * 第１章:Unityを使ってTDDしてみる
  * 第２章:TDD応用編。テストダブル(Test Double)の紹介。ダミーファイルを使ってコンパイルする置換方法（Link-time substitution）、Test Spy、関数ポインタを使った置換方法（Function pointer substitution）、モックオブジェクトの使い方などなど。
  * 第３章いかにしてClean Codeを書くかの説明。そのための手段としてTDDを使いましょうということ。SOLIDの原則、オブジェクト指向ライクなCの書き方、リファクタリング、レガシーコードとの付き合い方などなど。

### 扱っているテストツールについて

  * Unity
  * CppUTest

の２つが紹介されている。
  
Unityは軽量なツールなので、結構良かった。
  
CppTestは、TestSuiteを作成しなくても、自分で作成してくれるところがいいところ。ほかにも、様々なサボートツールがついている（モックオブジェクト作成用のCppUMock、関数ポインタを置き換えるツールUT\_PER\_SET)ので、便利（これもすべて、書籍のなかでつかいかたは説明されている）

自分で作ったごみwikiのリンクもついでに貼っておこう。
  
[<span style="color: #0066cc;">https://www.wikihouse.com/fox10225fox/index.php?CppUTest</span>][2]

TDDの他のオススメ本についてのゴミlinkもついでに貼っておこう。
  
[TDD テスト駆動開発 2012年 オススメ本ランキング][3]

### おわりに

仕事がC言語で組込み開発な自分にとっては最上のTDDバイブルだった。年甲斐もなく、ボロボロになるまで読んでいる。スルメイカのように、読めば読むほどに発見があるので、１年たった今でも新鮮だ。

(2013/10/22 追記)
  
日本語訳がでたようだ。

<div class="amazlink-box" style="text-align: left; padding-bottom: 20px; font-size: small; /zoom: 1; overflow: hidden;">
  <div class="amazlink-list" style="clear: both;">
    <div class="amazlink-image" style="float: left; margin: 0px 12px 1px 0px;">
      <a href="https://www.amazon.co.jp/%E3%83%86%E3%82%B9%E3%83%88%E9%A7%86%E5%8B%95%E9%96%8B%E7%99%BA%E3%81%AB%E3%82%88%E3%82%8B%E7%B5%84%E3%81%BF%E8%BE%BC%E3%81%BF%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E2%80%95C%E8%A8%80%E8%AA%9E%E3%81%A8%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%81%A7%E5%AD%A6%E3%81%B6%E3%82%A2%E3%82%B8%E3%83%A3%E3%82%A4%E3%83%AB%E3%81%AA%E8%A8%AD%E8%A8%88-James-W-Grenning/dp/4873116147%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4873116147" target="_blank" rel="nofollow"><img style="border: none;" alt="" src="https://ecx.images-amazon.com/images/I/51c%2BlMEDT-L._SL160_.jpg" /></a>
    </div>
    
    <div class="amazlink-info" style="height: 160; margin-bottom: 10px;">
      <div class="amazlink-name" style="margin-bottom: 10px; line-height: 120%;">
        <a href="https://www.amazon.co.jp/%E3%83%86%E3%82%B9%E3%83%88%E9%A7%86%E5%8B%95%E9%96%8B%E7%99%BA%E3%81%AB%E3%82%88%E3%82%8B%E7%B5%84%E3%81%BF%E8%BE%BC%E3%81%BF%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E2%80%95C%E8%A8%80%E8%AA%9E%E3%81%A8%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%81%A7%E5%AD%A6%E3%81%B6%E3%82%A2%E3%82%B8%E3%83%A3%E3%82%A4%E3%83%AB%E3%81%AA%E8%A8%AD%E8%A8%88-James-W-Grenning/dp/4873116147%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4873116147" target="_blank" rel="nofollow">テスト駆動開発による組み込みプログラミング ―C言語とオブジェクト指向で学ぶアジャイルな設計</a>
      </div>
      
      <div class="amazlink-powered" style="font-size: 80%; margin-top: 5px; line-height: 120%;">
        posted with <a title="アマゾンアフィリエイトリンク作成ツール" href="https://amazlink.keizoku.com/" target="_blank">amazlink</a> at 13.10.22
      </div>
      
      <p>
        <noscript>
          <a href='https://bust-up.gob.jp'>xn--cck2b5as2b7b</a>
        </noscript>
      </p>
      
      <div class="amazlink-detail">
        James W. Grenning
      </div>
      
      <div class="amazlink-sub-info" style="float: left;">
        <div class="amazlink-link" style="margin-top: 5px;">
          <img alt="" src="https://amazlink.fuyu.gs/icon_amazon.png" width="18" /><a href="https://www.amazon.co.jp/%E3%83%86%E3%82%B9%E3%83%88%E9%A7%86%E5%8B%95%E9%96%8B%E7%99%BA%E3%81%AB%E3%82%88%E3%82%8B%E7%B5%84%E3%81%BF%E8%BE%BC%E3%81%BF%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E2%80%95C%E8%A8%80%E8%AA%9E%E3%81%A8%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%81%A7%E5%AD%A6%E3%81%B6%E3%82%A2%E3%82%B8%E3%83%A3%E3%82%A4%E3%83%AB%E3%81%AA%E8%A8%AD%E8%A8%88-James-W-Grenning/dp/4873116147%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4873116147" target="_blank" rel="nofollow">Amazon</a> <img alt="" src="https://amazlink.fuyu.gs/icon_rakuten.gif" width="18" /><a href="https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/archives/c=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12298785%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D12298785%26surl%3Dbook" target="_blank" rel="nofollow">楽天</a>
        </div>
      </div>
    </div>
  </div>
</div>

 [1]: https://pragprog.com/book/jgade/test-driven-development-for-embedded-c
 [2]: https://www.wikihouse.com/fox10225fox/index.php?CppUTest
 [3]: https://astore.amazon.co.jp/sleephacker-22 "TDD テスト駆動開発 2012年 オススメ本ランキング"