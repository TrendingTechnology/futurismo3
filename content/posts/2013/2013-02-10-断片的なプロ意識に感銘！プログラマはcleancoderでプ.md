---
author: admin
categories:
- 日記
- 書評
date: 2013-02-10T02:42:00+00:00
dsq_thread_id:
- 3.7281316e+09
pdrp_attributionLocation:
- end
pvc_views:
- 2465
title: 断片的なプロ意識に感銘！プログラマは[CleanCoder]でプロの感性を学ぼう。
type: post
url: /archives/=1179
---

ロバート・C・マーチン(ポブおじさん）の[CleanCoder]を読んだ感想を書きます。

<div style="text-align: left; padding-bottom: 20px; zoom: 1; font-size: small; overflow: hidden" class="amazlink-box">
  <div style="clear: both" class="amazlink-list">
    <div style="margin: 0px 12px 1px 0px; float: left" class="amazlink-image">
      <a href="https://www.amazon.co.jp/Clean-Coder-%E3%83%97%E3%83%AD%E3%83%95%E3%82%A7%E3%83%83%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AB%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%81%B8%E3%81%AE%E9%81%93-Robert-Martin/dp/4048860690%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4048860690" rel="nofollow" target="_blank"><img style="border-bottom-style: none; border-left-style: none; border-top-style: none; border-right-style: none" src="https://ecx.images-amazon.com/images/I/51dv8ZDoLBL._SL160_.jpg" /></a>
    </div>
    
    <div style="margin-bottom: 10px" class="amazlink-info">
      <div style="line-height: 120%; margin-bottom: 10px" class="amazlink-name">
        <a href="https://www.amazon.co.jp/Clean-Coder-%E3%83%97%E3%83%AD%E3%83%95%E3%82%A7%E3%83%83%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AB%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%81%B8%E3%81%AE%E9%81%93-Robert-Martin/dp/4048860690%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4048860690" rel="nofollow" target="_blank">Clean Coder プロフェッショナルプログラマへの道</a>
      </div>
      
      <div style="line-height: 120%; margin-top: 5px; font-size: 80%" class="amazlink-powered">
        posted with <a title="アマゾンアフィリエイトリンク作成ツール" href="https://amazlink.keizoku.com/" target="_blank">amazlink</a> at 13.02.09
      </div>
      
      <div class="amazlink-detail">
        Robert C. Martin
      </div>
      
      <div style="float: left" class="amazlink-sub-info">
        <div style="margin-top: 5px" class="amazlink-link">
          <img src="https://amazlink.fuyu.gs/icon_amazon.png" width="18" /><a href="https://www.amazon.co.jp/Clean-Coder-%E3%83%97%E3%83%AD%E3%83%95%E3%82%A7%E3%83%83%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AB%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%81%B8%E3%81%AE%E9%81%93-Robert-Martin/dp/4048860690%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4048860690" rel="nofollow" target="_blank">Amazon</a> <img src="https://amazlink.fuyu.gs/icon_rakuten.gif" width="18" /><a href="https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/archives/c=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11529693%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D11529693%26surl%3Dbook" rel="nofollow" target="_blank">楽天</a>
        </div></p>
      </div></p>
    </div></p>
  </div></p>
</div>

&#160;

### ああ・・・あのときこうすりゃよかったよ、みたいな

先入観では、プログラマとはなにかを悟った筆者が"プログラマとはこうあるべきである"という結論をズバズバといっていくものと思っていた（帰納的）。

実際は、ポブおじさんの失敗談がこれでもかと紹介されて、"プロならばこう振る舞う"という感じで語られていく。

個人的体験を元に，"こうだ"と語られる(演繹的)。

全体を通して、断片的なエッセイが書くテーマに対してまとめられたようになっている。   
プログラミングの本だけれども、コードはほとんど登場しない。コードを作るときの思想が語られている。

そんな断片的で、個人的にこころに残ったフレーズを引用しながら感想を書きます。

### 個人的に印象に残ったこと

#### テストの必要性について

> 自動テストユニットって、どのくらいのコードを書けばいいの？その質問に答える必要があるのか？全部だ！ぜ・ん・ぶ。
> 
> (第1章 プロ意識)

この言い切りが、潔かった！ぜ・ん・ぶだ！   
TDDは規律で、どんなに追い詰められているときでも規律を厳守することで、自分のペースを保つのだと説明されてる。なるほど・・・。

#### ソフトウェアのプロが抑えるべき最低限のこと

プログラマがおされるべき最低限のこととして、以下の視点を上げている。

>   * デザインパターン （Gof、POSA、など） 
>   * 設計原則 （SOLIDの原則、コンポーネントの原則など） 
>   * 方法論 （XP、アジャイル、ウォーターフォール、など） 
>   * 規律 （TDD、オブジェクト思考、構造化設計、CI、ペアプロ、など） 
>   * 成果物 （UML、DFD、状態遷移表、フローチャート、構造チャート、、ディシジョン・テーブルなど） 
> 
> （第1章 プロ意識）

自分の場合は、知っているものもあれば、まだまだ知らないこともある。   
プログラマの必須科目として、学び続けていきたい。 

具体的には、今年は<font color="#0000ff">デザインパターン</font>を勉強したい!

#### 第２章「ノー」という

できないことに「ノー」ということについて、凄まじい体験談を引用しながら説明されている。

<a href="https://raptureinvenice.com/is-good-code-impossible/" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://raptureinvenice.com/is-good-code-impossible/" width="150" height="130" /></a> <a style="color: #0070c5" href="https://raptureinvenice.com/is-good-code-impossible/" target="_blank">Is Good Code Impossible? | Rapture In Venice: iOS, Android Mobile Development Shop</a>  <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://raptureinvenice.com/is-good-code-impossible/" />

&#160;

&#160;

こんな状況になっても、誰に責任があるのかといえば、"ノー"と言わなかった人に責任がある。プロのプログラマは、できないことには"ノー"という。

逆に"イエス"といったことは絶対にやり通す。そのため、安易な見積もりを元に"イエス"とは言ってはいけない。イエスの責任感が説かれている。

#### 見積もりについて

見積もりに関するこんな視点も新鮮だった。

> 見積もりは数値ではない。見積もりは確率分布だ。
> 
> （第10章 見積もり)

工数は、楽観値、標準値、悲観値の３つの視点で考えることが大事だ。

自分の場合も、終わりますというのは標準値（楽観値？）を考えていたが、コレは３つの視点で考えることが必要だと思った。

#### 練習について

日々の練習を通して、"型”を身につけることの重要性を解いている。

> 必要になった時に完全な動きが自動的にできるようになることが、最終的な目標である。
> 
> プログラミングの型というのは、プログラミングの問題を解くためのキーボードやマウスの動きの練習である。
> 
> 解き方はすでにわかっている問題を解きながら身体の意思決定の練習をするのだ。
> 
> （第6章 練習)

型を身につける、キーバインドやホットキーの使い方に習熟するようにする。   
いつも忘れないようにしたい。

個人的には、今年はTopCoderを頑張ろうと思っている。

<a href="https://www.topcoder.com/" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://www.topcoder.com/" width="150" height="130" /></a> <a style="color: #0070c5" href="https://www.topcoder.com/" target="_blank">TopCoder, Inc.TopCoder, Inc. | Home of the world&#8217;s largest development community</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://www.topcoder.com/" />  <br style="clear: both" />

これは、<font color="#0000ff">アルゴリズム</font>の勉強が第一の目的だ。   
別の目的としては解けなかった同じ問題を繰り返して練習することで、その問題で使われているアルゴリズムを息をすうようにコーディングできるようにすることがある。

### まとめ

断片的に、様々な発見がある。また時間を置いて読めば、別の発見が得られそうだ。

<div style="text-align: left; padding-bottom: 20px; zoom: 1; font-size: small; overflow: hidden" class="amazlink-box">
  <div style="clear: both" class="amazlink-list">
    <div style="margin-bottom: 10px" class="amazlink-info">
      <div style="line-height: 120%; margin-bottom: 10px" class="amazlink-name">
        <a href="https://www.amazon.co.jp/Clean-Coder-%E3%83%97%E3%83%AD%E3%83%95%E3%82%A7%E3%83%83%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AB%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%81%B8%E3%81%AE%E9%81%93-Robert-Martin/dp/4048860690%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4048860690" rel="nofollow" target="_blank">Clean Coder プロフェッショナルプログラマへの道</a>
      </div>
      
      <div style="line-height: 120%; margin-top: 5px; font-size: 80%" class="amazlink-powered">
        posted with <a title="アマゾンアフィリエイトリンク作成ツール" href="https://amazlink.keizoku.com/" target="_blank">amazlink</a> at 13.02.09
      </div>
      
      <div class="amazlink-detail">
        Robert C. Martin
      </div>
      
      <div style="float: left" class="amazlink-sub-info">
        <div style="margin-top: 5px" class="amazlink-link">
          <img src="https://amazlink.fuyu.gs/icon_amazon.png" width="18" /><a href="https://www.amazon.co.jp/Clean-Coder-%E3%83%97%E3%83%AD%E3%83%95%E3%82%A7%E3%83%83%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AB%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%81%B8%E3%81%AE%E9%81%93-Robert-Martin/dp/4048860690%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4048860690" rel="nofollow" target="_blank">Amazon</a> <img src="https://amazlink.fuyu.gs/icon_rakuten.gif" width="18" /><a href="https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/archives/c=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11529693%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D11529693%26surl%3Dbook" rel="nofollow" target="_blank">楽天</a>
        </div></p>
      </div></p>
    </div></p>
  </div></p>
</div>