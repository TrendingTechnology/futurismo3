---
author: admin
categories:
- Ruby
- TDD
- ハッキング
date: 2013-07-15T09:26:44+00:00
dsq_thread_id:
- 3.74879e+09
excerpt: vagrant × sahara × minitestでエンドツーエンドテストを実施する方法を考えてみました
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 2297
tags:
- GOOS
- sahara
- vagrant
- VirtualBox
title: ミライの組込み開発！vagrant × sahara × minitestで実現する仮想エンドツーエンドテスト
type: post
url: /archives/=1667
---

[<img src="https://lh6.googleusercontent.com/-uBi8GOg1xtU/UePHmo08g9I/AAAAAAAAArc/vWTDQV5Tl6Q/s800/medium_5567424914.jpg" height="304" width="640" />][1]

photo credit: [Ѕolo][2] via [photopin][3] [cc][4]

以前、組込み開発での機能テスト自動化について考察しました。

  * <a href="https://futurismo.biz/archives/1289" target="_blank">組込み開発のシステムテスト・機能テストを自動化できるか?Rubyのminitestで非同期テストを実施する方法を本気出して考えてみた | Futurismo</a>

組込み開発でのエンドツーエンドの課題は、テストが失敗したところから正常な状態まで復旧させることでした。

> 実際にテストできるかどうかはまだまだ試行錯誤が必要そうだ。実際の仕事で適用するためには、後処理から正常な状態に復旧させる処理が最大の課題だと思っている。

この課題を、仮想環境のスナップショットがコマンドラインから操作できるvagrantとsaharaを利用して解決してみようと思います。

  * <a href="https://futurismo.biz/archives/1660" target="_blank">仮想環境を破壊しまくっても大丈夫だ、問題ない。vagrantプラグイン『sahara』 | Futurismo</a>

### 3ヶ月前のリベンジ

３ヶ月前に書いた、Rubyのminitestを利用したスクリプトのなかに、vagrantとsaharaを組込みます。ポイントは、

  * setupでスナップショットから仮想環境を初期化

です。テストが失敗した結果、いくらボロボロに環境を破壊してても、一瞬でもとに戻します。

    # sahara rollbackで初期化
    system( 'vagrant sandbox rollback' )
    

#### 　mkdirするサンプルテスト



#### 動画

[//www.youtube.com/embed/Ct7ivafdpoY?rel=0]

### ミライの組込み開発

GOOS本を読んでから、ウォーキングスケルトンを組込み開発でどうやってつくればいいのか、ずっと頭を悩ませていた。（そして、途中で読むのをやめてしまった。。えっ？(・・?）

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'>
  <div class='amazlink-list' style='clear: both;'>
    <div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'>
      <a href='https://www.amazon.co.jp/%E5%AE%9F%E8%B7%B5%E3%83%86%E3%82%B9%E3%83%88%E9%A7%86%E5%8B%95%E9%96%8B%E7%99%BA-%E3%83%86%E3%82%B9%E3%83%88%E3%81%AB%E5%B0%8E%E3%81%8B%E3%82%8C%E3%81%A6%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%92%E8%82%B2%E3%81%A6%E3%82%8B-Object-Oriented-SELECTION/dp/4798124583%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4798124583' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/61vSRgWto0L._SL160_.jpg' style='border: none;' /></a>
    </div>
    
    <div class='amazlink-info' style='height:160; margin-bottom: 10px'>
      <div class='amazlink-name' style='margin-bottom:10px;line-height:120%'>
        <a href='https://www.amazon.co.jp/%E5%AE%9F%E8%B7%B5%E3%83%86%E3%82%B9%E3%83%88%E9%A7%86%E5%8B%95%E9%96%8B%E7%99%BA-%E3%83%86%E3%82%B9%E3%83%88%E3%81%AB%E5%B0%8E%E3%81%8B%E3%82%8C%E3%81%A6%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%92%E8%82%B2%E3%81%A6%E3%82%8B-Object-Oriented-SELECTION/dp/4798124583%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4798124583' rel='nofollow' target='_blank'>実践テスト駆動開発 テストに導かれてオブジェクト指向ソフトウェアを育てる (Object Oriented SELECTION)</a>
      </div>
      
      <div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>
        posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 13.07.15
      </div>
      
      <p>
        <noscript>
          <a href='https://bust-up.gob.jp'>xn--cck2b5as2b7b</a>
        </noscript>
      </p>
      
      <div class='amazlink-detail'>
        Steve Freeman
      </div>
      
      <div class='amazlink-sub-info' style='float: left;'>
        <div class='amazlink-link' style='margin-top: 5px'>
          <img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18' /><a href='https://www.amazon.co.jp/%E5%AE%9F%E8%B7%B5%E3%83%86%E3%82%B9%E3%83%88%E9%A7%86%E5%8B%95%E9%96%8B%E7%99%BA-%E3%83%86%E3%82%B9%E3%83%88%E3%81%AB%E5%B0%8E%E3%81%8B%E3%82%8C%E3%81%A6%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%92%E8%82%B2%E3%81%A6%E3%82%8B-Object-Oriented-SELECTION/dp/4798124583%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4798124583' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18' /><a href='https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/archives/c=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11891807%2F&#038;m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D11891807%26surl%3Dbook' rel='nofollow' target='_blank'>楽天</a>
        </div>
      </div>
    </div>
  </div>
</div>

vagrant、これが、答えだ！　( ｰ\`дｰ´)ｷﾘｯ

vagrantとsaharaを利用したエンドツーエンドテスト、革命的な方法だと思う。

githubのReadmeを読むと、Acceptance Tests用の追加機能もあるっぽいのでもう少し調べてみる。

会社では、quemで作成されたシミュレータをCentOS上で動作させてテストしたりしてる。vagrantとsaharaを利用すれば、quemで作られたシミュレータも一瞬で初期化できるのだ。もっとも、quem自体にスナップショット機能があるっぽいけど。。

実機がないけど、シミュレータを利用してテスト出来て、いくらでも壊して一瞬で復元できる。。。これが、ミライの組込み開発。

これって、すごいことじゃないか？

 [1]: https://picasaweb.google.com/lh/photo/Dln_dMpNVkmDiwdXToQ2hTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [2]: https://www.flickr.com/photos/donsolo/5567424914/
 [3]: https://photopin.com
 [4]: https://creativecommons.org/licenses/by-nc-sa/2.0/