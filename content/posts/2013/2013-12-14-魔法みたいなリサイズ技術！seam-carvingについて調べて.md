---
author: admin
categories:
- Java
- 技術メモ
date: 2013-12-14T11:16:51+00:00
dsq_thread_id:
- 3.7410207e+09
pvc_views:
- 2192
tags:
- coursera
title: 魔法みたいなリサイズ技術！Seam Carvingについて調べてみた
type: post
url: /archives/=2050
---

Coursera Algorithmsの課題として、Seam Carving（シームカービング）というアルゴリズムをJavaで実装をした。

  * [Seam carving &#8211; Wikipedia, the free encyclopedia][1]

写真の縦横幅をトリミングではなくて、見た目的に違和感なくリサイズする技術。2007年に世に出たという、新しめの技術。詳しくはYoutube動画を参照。

[//www.youtube.com/embed/6NcIJXTlugc?rel=0]

### アプリなど

iPhoneやAndroidアプリでこういう変換アプリがあればよさそうと探してみたところ、Androiidアプリはすでにある模様。

  * [aSeamCarving &#8211; Google Play の Android アプリ][2]

また、フリーソフトもある。

  * [<font color="#0066cc">窓の杜 &#8211; 【REVIEW】“シームカービング”技術を利用できる画像編集ソフト「Seam Carving GUI」</font>][3]

### iPhone写真を変換

というわけで、Javaで実装したコードでiPhoneで撮影した写真を変換してみたので作品紹介。画像データをDAGなグラフと見立てて、端から端で色のグラデーションが少ない部分を幅優先探索で検索するとできる。

ここでは、512x 384 px 画像を、正方形に変換してる。

#### 変換前

[<img title="beaf_512_384" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="beaf_512_384" src="https://futurismo.biz/wp-content/uploads/beaf_512_384_thumb.jpg" width="415" height="312" />][4]

#### 変換後

[<img title="beaf_384_384" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="beaf_384_384" src="https://futurismo.biz/wp-content/uploads/beaf_384_384_thumb.jpg" width="361" height="361" />][5]

#### 変換前

[<img title="cafe_512_384" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="cafe_512_384" src="https://futurismo.biz/wp-content/uploads/cafe_512_384_thumb.jpg" width="438" height="330" />][6]

#### 変換後

[<img title="cafe_384_384" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="cafe_384_384" src="https://futurismo.biz/wp-content/uploads/cafe_384_384_thumb.jpg" width="338" height="338" />][7]

#### 変換前

[<img title="sushi_512_384" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="sushi_512_384" src="https://futurismo.biz/wp-content/uploads/sushi_512_384_thumb.jpg" width="447" height="337" />][8]

#### 変換後

[<img title="sushi_384_383" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="sushi_384_383" src="https://futurismo.biz/wp-content/uploads/sushi_384_383_thumb.jpg" width="349" height="349" />][9]

魔法みたいで面白い！

 [1]: https://en.wikipedia.org/wiki/Seam_carving
 [2]: https://play.google.com/store/apps/details?id=it.fpiantoni.seamcarving&hl=ja
 [3]: https://www.forest.impress.co.jp/article/2008/10/29/seamcarvinggui.html
 [4]: https://futurismo.biz/wp-content/uploads/beaf_512_384.jpg
 [5]: https://futurismo.biz/wp-content/uploads/beaf_384_384.jpg
 [6]: https://futurismo.biz/wp-content/uploads/cafe_512_384.jpg
 [7]: https://futurismo.biz/wp-content/uploads/cafe_384_384.jpg
 [8]: https://futurismo.biz/wp-content/uploads/sushi_512_384.jpg
 [9]: https://futurismo.biz/wp-content/uploads/sushi_384_383.jpg