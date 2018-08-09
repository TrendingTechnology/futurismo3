---
author: admin
categories:
- Wordpress
- ライフログ
- 技術メモ
date: 2012-12-21T11:02:35+00:00
dsq_thread_id:
- 3.7547215e+09
pdrp_attributionLocation:
- end
pvc_views:
- 2015
title: Foursquareの履歴をGoogleMapに表示して、wordpressで表示する方法
type: post
url: /archives/=985
---

Foursquareのチェックイン履歴をGoogleMapに表示して、それをwordpressで表示できたらステキなライフログになるだろうと思い、方法を調べてみたので、メモしまふ。

<ul class="checklist">
  <li>
    FoursquareのKMLフィードを取得する
  </li>
  <li>
    GoogleMapでKMLフィードを表示する
  </li>
  <li>
    GoogleMapをwordpressで表示する
  </li>
</ul>

では、順に解説。

### FoursquareのKMLフィードを取得する

まずは、Foursquareにログインして、チェックイン履歴のページへ。

次に、右下にRSS/ICS/KMLと書いてあるリンクを選択。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="skitch(12)" alt="skitch(12)" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch12_thumb.png" width="316" height="241" border="0" />][1]

#### KMLとは

KMLとは、位置情報を管理するための情報です。<https://ja.wikipedia.org/wiki/KML>

ページの下からKMLのURLを取得します。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="skitch(13)" alt="skitch(13)" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch13_thumb.png" width="403" height="285" border="0" />][2]

### GoogleMapでKMLフィードを表示する

次にKMLを利用して、GoogleMap上にfouresquareのチェックイン情報を表示します。

GoogleMapのページで、検索窓に先ほどコピーしたURLを貼り付けて、検索をします。
  
するとチェックイン履歴がGoogleMapに表示されました。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="skitch(14)" alt="skitch(14)" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch14_thumb.png" width="428" height="264" border="0" />][3]

### GoogleMapをwordpressで表示する

最後です。GoogleMapからブロク貼り付け用のリンクを取得します。

左上のクサリのようなアイコンをクリックして、HTMLコードを生成します。
  
そして、それをコピーして、Wordpressの好きなところに貼り付ければ完了です。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="skitch(15)" alt="skitch(15)" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch15_thumb.png" width="438" height="169" border="0" />][4]

#### こんな感じ

<iframe src="https://maps.google.co.jp/maps?f=q&source=s_q&hl=ja&geocode=&q=https:%2F%2Ffeeds.foursquare.com%2Fhistory%2F51SR1ZS0G0SJBICIVFPXMAE2ENNHTNJG.kml&aq=&sll=34.728949,138.455511&sspn=39.627819,59.941406&brcurrent=3,0x60185f7b01bd5057:0x88c9f317cacfd3cb,0&ie=UTF8&t=m&ll=35.617078,139.572409&spn=0.147362,0.260527&output=embed" height="350" width="425" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
  
<small><a style="text-align: left; color: #0000ff;" href="https://maps.google.co.jp/maps?f=q&source=embed&hl=ja&geocode=&q=https:%2F%2Ffeeds.foursquare.com%2Fhistory%2F51SR1ZS0G0SJBICIVFPXMAE2ENNHTNJG.kml&aq=&sll=34.728949,138.455511&sspn=39.627819,59.941406&brcurrent=3,0x60185f7b01bd5057:0x88c9f317cacfd3cb,0&ie=UTF8&t=m&ll=35.617078,139.572409&spn=0.147362,0.260527">大きな地図で見る</a></small>

<small>大きさを変更したい場合は、</small><small>width=&#8221;200&#8243; height=&#8221;200&#8243; の数値で調整する。</small>

<div class="wlWriterEditableSmartContent" id="scid:81867AAF-BB02-476b-AE5D-12BDAC2E750D:a00e8d06-6d22-40ee-a520-37bbdd7e612a" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <a href="https://www.amazon.co.jp/exec/obidos/ASIN/4153200107/sleephacker-22/ref=nosim" target="_blank"><img alt="ライフログのすすめ―人生の「すべて」をデジタルに記録する! (ハヤカワ新書juice)" src="https://ecx.images-amazon.com/images/I/417RwSrDozL._SL160_.jpg" /><br /> ライフログのすすめ―人生の「すべて」をデジタルに記録する! (ハヤカワ新書juice)<br /> ゴードン ベル ジム ゲメル </a>
</div>

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch12.png
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch13.png
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch14.png
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch15.png