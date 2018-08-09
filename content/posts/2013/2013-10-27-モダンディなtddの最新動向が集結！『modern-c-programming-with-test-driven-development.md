---
author: admin
categories:
- C++
- TDD
date: 2013-10-26T17:01:29+00:00
dsq_thread_id:
- 3.7301809e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 1884
title: モダンディでイケイケなTDDの最新動向が集結！『Modern C++ Programming with Test-Driven Development』
type: post
url: /archives/=1948
---

『Modern C++ Programming with Test-Driven Development』をだいたい読み終わりましたので、感想を書きます。

<div class="amazlink-box" style="text-align: left; padding-bottom: 20px; font-size: small; /zoom: 1; overflow: hidden;">
  <div class="amazlink-list" style="clear: both;">
    <div class="amazlink-image" style="float: left; margin: 0px 12px 1px 0px;">
      <a href="https://www.amazon.co.jp/Modern-Programming-With-Test-Driven-Development/dp/1937785483%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D1937785483" target="_blank" rel="nofollow"><img style="border: none;" alt="" src="https://ecx.images-amazon.com/images/I/41UOJBZ4qxL._SL160_.jpg" /></a>
    </div>
    
    <div class="amazlink-info" style="height: 160; margin-bottom: 10px;">
      <div class="amazlink-name" style="margin-bottom: 10px; line-height: 120%;">
        <a href="https://www.amazon.co.jp/Modern-Programming-With-Test-Driven-Development/dp/1937785483%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D1937785483" target="_blank" rel="nofollow">Modern C++ Programming With Test-Driven Development: Code Better, Sleep Better</a>
      </div>
      
      <div class="amazlink-powered" style="font-size: 80%; margin-top: 5px; line-height: 120%;">
        posted with <a title="アマゾンアフィリエイトリンク作成ツール" href="https://amazlink.keizoku.com/" target="_blank">amazlink</a> at 13.10.27
      </div>
      
      <p>
        <noscript>
          <a href='https://bust-up.gob.jp'>xn--cck2b5as2b7b</a>
        </noscript>
      </p>
      
      <div class="amazlink-detail">
        Jeff Langr
      </div>
      
      <div class="amazlink-sub-info" style="float: left;">
        <div class="amazlink-link" style="margin-top: 5px;">
          <img alt="" src="https://amazlink.fuyu.gs/icon_amazon.png" width="18" /><a href="https://www.amazon.co.jp/Modern-Programming-With-Test-Driven-Development/dp/1937785483%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D1937785483" target="_blank" rel="nofollow">Amazon</a>
        </div>
      </div>
    </div>
  </div>
</div>

### 各章の概要

各章の概要と、学習メモは以下のエントリを参照。

  * [『Modern C++ with TDD』学習メモ(Chapter2-5)][1]
  * [『Modern C++ with TDD』学習メモ(Chapter6-11)][2]

初めは懇切丁寧にTDDの基礎が述べられているので、モダンだからと言ってもTDD実践入門に最適。 使われているフレームワークは、

  * GoogleMock
  * CppUTest

Mockに関する説明は少なかったように思う。一部のテクニックを書くのではなくて、まんべんなく書かれているイメージ。

また、コンパイラはC++11を使っていて、見慣れないC++の文法がたくさん出てきたのが少しつらかったところ。このへんも、モダン。

### 写経について

この本は、ところどころ写経しながら読みました。写経環境の導入手順は以下にまとめました。あとから思うと、Ubuntuが一番楽じゃないかと思う。

  * [『Modern C++ Programming with Test-Driven Development』写経環境をWindows上のCentOSに構築][3]

電子書籍なので、本からウェブ上のソースコードにリンクが張ってあります。すべてをそのまま写したところもありますが、ちょっと手を抜いて、サンプルコードをコピペしながら読んだところもあります。 サンプルコードを実際に動かしたり、diffを取ったりしながら読んだほうが、理解が深まりますね。

### 感想

モダン！( ｰ\`дｰ´)

この名に恥じない内容だった。新しいテクニックや考え方にワクワクして、明治時代の人がザンギリ頭に触れる喜びを感じた。

西洋のTDD界ではkataだとかdojoだとかMikadoだとかがブームだというおかしなジャポニズムを初めて知った。そんなニッポンはShakyoがブーム?この本を通してKataを知ったのは収穫だった。今後の勉強の進む方向はコッチだ。

個人的には、『test driven development for embedded c』に続く良書。ただし、かつての感動はなかった。もともと、前半の内容は知っていることが多かったので。C++というのも、Cに比べると疎遠なので。

  * [そろそろ『test driven development for embedded c』について書いてみる | Futurismo][4]

サブタイトルが『Code Better, Sleep Better』となっている。

Code Betterは、リファクタリングについての話題が多め。実際のサードパーティから依存関係を取り除いたり、実際のレガシーコードを利用したリファクタリングしたりする。理想的なTDDなどありえなくて、現実はとてつもないレガシーコードと戦わなければいけない。現実に則した本だ。我らの味方だ。

Sleep Betterがなにを暗示しているのかワカラなかったので、そろそろ寝ます。おやすみなさい(´-ω-｀)

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://futurismo.biz/archives/1847 "『Modern C++ with TDD』学習メモ(Chapter2-5)"
 [2]: https://futurismo.biz/archives/1946 "『Modern C++ with TDD』学習メモ(Chapter6-11)"
 [3]: https://futurismo.biz/archives/1832 "『Modern C++ Programming with Test-Driven Development』写経環境をWindows上のCentOSに構築"
 [4]: https://futurismo.biz/archives/172