---
author: admin
categories:
- TDD
date: 2013-10-20T01:00:14+00:00
dsq_thread_id:
- 3.727993e+09
pvc_views:
- 3149
title: 必殺技を実践で繰り出すために、TDDの『Code Kata』について調べてみた
type: post
url: /archives/=1876
---

TDDの型を身につけるための方法論『Code Kata』について調べてみたことをまとめます。

[<img title="medium_7380838634" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="medium_7380838634" src="https://futurismo.biz/wp-content/uploads/medium_7380838634_thumb.jpg" width="410" height="512" />][1]

photo credit: [1936matt][2] via [photopin][3] [cc][4]

### きっかけ

本『The Coding Dojo Handbook』を見つけたので、調べてみた。この本の読書メモは読み終わってからまた書く。

&#160;[The Pragmatic Bookshelf | The Coding Dojo Handbook][5] 

これらの本にも、紹介されてた。初め、Dojosをどぜうだと思っていた。

* * *

<div class="amazlink-box" style="overflow: hidden; font-size: small; zoom: 1; padding-bottom: 20px; text-align: left">
  <div class="amazlink-list" style="clear: both">
    <div class="amazlink-image" style="float: left; margin: 0px 12px 1px 0px">
      <a href="https://www.amazon.co.jp/Clean-Code-%E3%82%A2%E3%82%B8%E3%83%A3%E3%82%A4%E3%83%AB%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E9%81%94%E4%BA%BA%E3%81%AE%E6%8A%80-Robert-Martin/dp/4048676881%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4048676881" rel="nofollow" target="_blank"><img style="border-top-style: none; border-left-style: none; border-bottom-style: none; border-right-style: none" src="https://ecx.images-amazon.com/images/I/51uWxRrPyYL._SL160_.jpg" /></a>
    </div>
    
    <div class="amazlink-info" style="margin-bottom: 10px">
      <div class="amazlink-name" style="margin-bottom: 10px; line-height: 120%">
        <a href="https://www.amazon.co.jp/Clean-Code-%E3%82%A2%E3%82%B8%E3%83%A3%E3%82%A4%E3%83%AB%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E9%81%94%E4%BA%BA%E3%81%AE%E6%8A%80-Robert-Martin/dp/4048676881%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4048676881" rel="nofollow" target="_blank">Clean Code アジャイルソフトウェア達人の技</a>
      </div>
      
      <div class="amazlink-powered" style="font-size: 80%; margin-top: 5px; line-height: 120%">
        posted with <a title="アマゾンアフィリエイトリンク作成ツール" href="https://amazlink.keizoku.com/" target="_blank">amazlink</a> at 13.10.20
      </div>
      
      <p>
        <noscript>
          <a href="https://bust-up.gob.jp">xn--cck2b5as2b7b</a>
        </noscript>
      </p>
      
      <div class="amazlink-detail">
        Robert C. Martin
      </div>
      
      <div class="amazlink-sub-info" style="float: left">
        <div class="amazlink-link" style="margin-top: 5px">
          <img src="https://amazlink.fuyu.gs/icon_amazon.png" width="18" /><a href="https://www.amazon.co.jp/Clean-Code-%E3%82%A2%E3%82%B8%E3%83%A3%E3%82%A4%E3%83%AB%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E9%81%94%E4%BA%BA%E3%81%AE%E6%8A%80-Robert-Martin/dp/4048676881%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4048676881" rel="nofollow" target="_blank">Amazon</a> <img src="https://amazlink.fuyu.gs/icon_rakuten.gif" width="18" /><a href="https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/archives/c=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F6077754%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D6077754%26surl%3Dbook" rel="nofollow" target="_blank">楽天</a>
        </div></p>
      </div></p>
    </div></p>
  </div></p>
</div>

* * *

<div class="amazlink-box" style="overflow: hidden; font-size: small; zoom: 1; padding-bottom: 20px; text-align: left">
  <div class="amazlink-list" style="clear: both">
    <div class="amazlink-image" style="float: left; margin: 0px 12px 1px 0px">
      <a href="https://www.amazon.co.jp/Modern-Programming-With-Test-Driven-Development/dp/1937785483%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D1937785483" rel="nofollow" target="_blank"><img style="border-top-style: none; border-left-style: none; border-bottom-style: none; border-right-style: none" src="https://ecx.images-amazon.com/images/I/41UOJBZ4qxL._SL160_.jpg" /></a>
    </div>
    
    <div class="amazlink-info" style="margin-bottom: 10px">
      <div class="amazlink-name" style="margin-bottom: 10px; line-height: 120%">
        <a href="https://www.amazon.co.jp/Modern-Programming-With-Test-Driven-Development/dp/1937785483%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D1937785483" rel="nofollow" target="_blank">Modern C++ Programming With Test-Driven Development: Code Better, Sleep Better</a>
      </div>
      
      <div class="amazlink-powered" style="font-size: 80%; margin-top: 5px; line-height: 120%">
        posted with <a title="アマゾンアフィリエイトリンク作成ツール" href="https://amazlink.keizoku.com/" target="_blank">amazlink</a> at 13.10.20
      </div>
      
      <p>
        <noscript>
          <a href="https://bust-up.gob.jp">xn--cck2b5as2b7b</a>
        </noscript>
      </p>
      
      <div class="amazlink-detail">
        Jeff Langr
      </div>
      
      <div class="amazlink-sub-info" style="float: left">
        <div class="amazlink-link" style="margin-top: 5px">
          <img src="https://amazlink.fuyu.gs/icon_amazon.png" width="18" /><a href="https://www.amazon.co.jp/Modern-Programming-With-Test-Driven-Development/dp/1937785483%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D1937785483" rel="nofollow" target="_blank">Amazon</a>
        </div></p>
      </div></p>
    </div></p>
  </div></p>
</div>

* * *

自分も過去記事にしてた。 TopCoderに挑戦するきっかけになったのだった。再度、引用。

  * [[CleanCoder]断片的なプロ意識に感銘！プログラマは[CleanCoder]でプロの感性を学ぼう。 | Futurismo][6] 

### Code Kata てなに？

Kataは、日本の柔道の型を指す。 

実践で技を繰り出すためには、普段からなんどもなんども技を練習しておく必要がある。実践では、考えてる時間がないので、頭が空っぽでも身体がかってに動くレベルまで、普段から基本的な技を磨いておく。

  * [Kata (programming) &#8211; Wikipedia, the free encyclopedia][7] 

これを、TDDに応用したのが、『Code Kata』だ( ｰ\`дｰ´)

TDDやリファクタリングの技術は小さなTipsや心構えの積み重ねなので、それを実践のコーディングですばやく繰り出すためには、普段からTDDをして身体を慣らしておく必要がある。『CleanCoder』のボブおじさんの言葉も引用。

> 必要になった時に完全な動きが自動的にできるようになることが、最終的な目標である。 
> 
> プログラミングの型というのは、プログラミングの問題を解くためのキーボードやマウスの動きの練習である。 
> 
> 解き方はすでにわかっている問題を解きながら身体の意思決定の練習をするのだ。 
> 
> （第6章 練習)

### やり方

お題がネット上にあるので、それを解く。自分は、『The Coding Dojo Handbook』のお題を進めていく予定。

  * [CodeKata][8] 
  * [Coding Dojo Wiki: KataCatalogue][9] 

週１回から３回、30分くらいかけて実施する。深い呼吸をしながら、心の声に耳を傾ける。

### まとめ

型を磨くというのは、プログラミングにかぎらず、道を極めるための王道だ。『Code Kata』というのは、Katalogという形で、技を磨くためのステップが体系化されているところがよい。

しばらく、この習慣を始めてみようと思う。

### Links

  * [TDD Problems][10] 
  * [Code Kata][11] 
  * [craftsmanship.sv.cmu.edu/categories/test-driven-development][12] 
  * [TDD の素振りをしよう &#8211; haru01のめも][13]

 [1]: https://futurismo.biz/wp-content/uploads/medium_7380838634.jpg
 [2]: https://www.flickr.com/photos/39matt/7380838634/
 [3]: https://photopin.com
 [4]: https://creativecommons.org/licenses/by-nc-nd/2.0/
 [5]: https://pragprog.com/book/ebdojo/the-coding-dojo-handbook
 [6]: https://futurismo.biz/archives/1179
 [7]: https://en.wikipedia.org/wiki/Kata_%28programming%29
 [8]: https://www.codekata.com/
 [9]: https://codingdojo.org/cgi-bin/wiki.pl?KataCatalogue
 [10]: https://sites.google.com/site/tddproblems/
 [11]: https://katas.softwarecraftsmanship.org/
 [12]: https://craftsmanship.sv.cmu.edu/categories/test-driven-development
 [13]: https://d.hatena.ne.jp/haru01/20121217/1355758723