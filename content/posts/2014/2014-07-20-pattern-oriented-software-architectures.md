---
author: admin
categories:
- MOOC
- 技術メモ
date: 2014-07-20T06:42:00+00:00
dsq_thread_id:
- 3.7395791e+09
excerpt: Courseraで Pattern-Oriented Software Architecturesを学んだ
pvc_views:
- 1871
tags:
- coursera
- Gof
- Pattern
- POSA
title: オブジェクト指向設計と並列プログラミングをAndoirdで学ぶ！Pattern-Oriented Software Architecturesを受けた
type: post
url: /archives/=2527
---

Courseraで Pattern-Oriented Software Architecturesを学びました。

<iframe width="560" height="315" src="//www.youtube.com/embed/Pz9FWJ0zQUo" frameborder="0" allowfullscreen></iframe>

-   [Pattern-Oriented Software Architectures: Programming Mobile
    Services for Android Handheld Systems |
    Coursera](https://www.coursera.org/course/posa)

\[toc\]

なぜPOSAを学んだか？
====================

POSAを学んだ目的は、自分のオブジェクト指向設計能力を向上させるためだ。

デザインパターンを身につける
----------------------------

今年の目標の一つが、デザインパターンを身につけること。

去年はRubyやC++を学ぶことで、オブジェクト指向を身につけた。

そして今年は更なる成長のために、
デザインパターンを身につけることを本年度の目標にしたのだった。

アーキテクチャ・パターンという新しい考え方を身につける
------------------------------------------------------

今回学んだPOSAというものは、デザインパターンとは違う。
デザインパターンの上位に位置する、アーキテクチャ・パターンというものだ。

-   [第2回 アーキテクチャーパターンとは何か | Think
    IT（シンクイット）](https://thinkit.co.jp/article/940/1)

デザイン・パターンはクラス間の関係を示すのに対して、
アーキテチャ・パターンは、システムやモジュール同士の関係を示す。
アーキテクャ・パターンのなかに、デザインパターンが現れる。

あまりメジャーではないけれども、だからこそ人より抜きん出るためには、
デザインパターンとともに、アーキテクチャパターンをみにつけたいと思った。

並列プログラミングを身につける
------------------------------

これは棚からぼたもちだったのだけれども、
このCourseraのコースは平行プログラミングについても一通り説明されている。

今まで、平行プログラミングを真面目に学んだことがなかったため、
網羅的に学べるとてもよい機会だった。

Androidと平行プログラミング、そしてパターン
===========================================

パターンだけが、学習の対象ではなかった。以下のことが学べた。

-   Android
-   平行プログラミング
-   パターン

Pattern-Oriented Software Architecture: Patterns for Concurrent and Networked Objects
-------------------------------------------------------------------------------------

Douglas Schmidt先生は、以下の本の著者の一人。Schmidt先生、渾身の著作！

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'><div class='amazlink-list' style='clear: both;'><div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'><a href='https://www.amazon.co.jp/Pattern-Oriented-Software-Architecture-Concurrent-Networked-ebook/dp/B00CHK5SIA%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00CHK5SIA' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/41JQiq8T4QL._SL160_.jpg' style='border: none;' /></a></div><div class='amazlink-info' style='height:160; margin-bottom: 10px'><div class='amazlink-name' style='margin-bottom:10px;line-height:120%'><a href='https://www.amazon.co.jp/Pattern-Oriented-Software-Architecture-Concurrent-Networked-ebook/dp/B00CHK5SIA%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00CHK5SIA' rel='nofollow' target='_blank'>Pattern-Oriented Software Architecture, Patterns for Concurrent and Networked Objects: Volume 2 (Wiley Software Patterns Series)</a></div><div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 14.07.18</div><div class='amazlink-detail'>Douglas C. Schmidt<br /></div><div class='amazlink-sub-info' style='float: left;'><div class='amazlink-link' style='margin-top: 5px'><img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18'><a href='https://www.amazon.co.jp/Pattern-Oriented-Software-Architecture-Concurrent-Networked-ebook/dp/B00CHK5SIA%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00CHK5SIA' rel='nofollow' target='_blank'>Amazon</a></div></div></div></div></div>

[Pattern-Oriented Software Architecture: Patterns for Concurrent and
Networked Objects](https://www.dre.vanderbilt.edu/~schmidt/POSA/POSA2/)

講義はこの本に書いてある内容、すなわち、

平行プログラミングに関するアーキテチャ・パターン

が中心的な話題となっている。

また、その学習のためのプラットフォームとしてAndroidOSが
採用されているという内容。
パターンが体系的に、順番に、解説されていくものを想定していたため、
このような進め方は予想外だった。

詳しく解説されたGofのパターンは以下。軽く触れたものはもう少しある。

-   Factory Method
-   Bridge
-   Command
-   Strategy
-   Template Method

また、POSAについては以下。

-   Half-Sync/Harf-Async
-   Active Object
-   Monitor Object
-   Producer-Consumer

とても熱い講義
--------------

Schmidt先生は、教えることにたいしてとても熱心に感じた。
やや早口だが、とても生き生きとはなしいている。
また、掲示板にしょっちゅう出没してコメントを精力的に書き込んでいるのにも驚く。

Douglas
Schmidtさん本人のYoutubeチャンネルから、実際の動画を見ることができる。

-   <https://www.youtube.com/channel/UCt-Wvc_ojTzGLpjhruIXYSw>

そして、なぞのPDF群。いろいろなパターンに関する覚え書きがたくさんある。貴重な資料。

-   [Index of
    /\~schmidt/PDF](https://www.dre.vanderbilt.edu/~schmidt/PDF/)

Assignmentは簡単
----------------

Assignmentは、とても簡単な内容。
githubから課題を落として、TODOとなっている場所を10箇所くらい修正する。

-   <https://github.com/douglascraigschmidt/POSA-14/>

スケジュールの前半は、JavaのConcurrencyに関する話題が課題。

-   RentrantLock
-   ReadWriteLock
-   Semaphore
-   ConditionObject
-   CountdownLatch

Ping-Poigというプログラミングを作成した。

-   <https://runnable.com/U8CSddyaq8w2NqyV/pingpong-for-java>

スケジュールの後半になって、ようやくAndroidの話題がでる。
Androidのライブラリを利用した並列処理について学ぶ。

-   HaMeR framework
-   AsyncTask framework

中級・上級を目指してガチにAndroidを極める人のための講義
-------------------------------------------------------

ServiceやIntentがどういう思想のもとに設計されているかが、
パターンという観点から整理されて解説される。

並列プログラミングを題材にして、パターンが解説されていく。
実例を通して学べるところがよい。

市場にでているAndroidの参考書は、技術的な詳細よりも、
動くアプリを作成することに重点が置かれてかかれている。

この講義は、フレームワークの仕組みをJavaや設計の観点から詳しく解説しているので、
世の中の参考書にはない、貴重な学習材料だ。

中級・上級を目指して本気でにAndroidを学ぼうとする人に最適だと思う。

POSAをどう生かすか？
====================

実例にそってパターンを学ぶ
--------------------------

正直、この講義だけではPOSAが分からない。Gofも部分的にしか紹介されない。

Androidと平行プログラミング、そしてパターン、いろいろ覚えることが多く、
頭の中で整理できないでいる。

思ったことは、パターンはパターンそのものとして学習するのではなくて、
コードや実例を通じて学んだ方がわかりやすいということだ。
そういう意味では、Androidが題材にされいてるところはよかった。

パターンは、折にふれてリファレンスを参照して、
繰り返し慣れ親しむことで覚えていくのがよいだろう。
普段のコードリーディングで、『これってパターンかも』と思ったら、
その度ごとにGoogleで調べるように心がけたい。

オブジェクト指向設計をもっく詳しく
----------------------------------

パターンというのは、課題があってその解決策として導かれるもの。
GofやPOSAは、オブジェクト指向を大前提にしている。
オブジェクト指向の課題から、必然的に導かれたものがパターンとなる。

なので、パターンの本質を身につけるためには、
もっと深くオブジェクト指向設計を学ぶ必要を感じる。
オブジェクト指向設計の解説書として定評のある以下の本を買った。
これで、オブジェクト指向の本質的な部分を学びたい。

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'><div class='amazlink-list' style='clear: both;'><div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'><a href='https://www.amazon.co.jp/%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%81%AE%E3%81%93%E3%81%93%E3%82%8D-SOFTWARE-PATTERNS-SERIES-%E3%82%A2%E3%83%A9%E3%83%B3%E3%83%BB%E3%82%B7%E3%83%A3%E3%83%AD%E3%82%A6%E3%82%A7%E3%82%A4/dp/4621066048%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4621066048' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/510uRnu%2BbYL._SL160_.jpg' style='border: none;' /></a></div><div class='amazlink-info' style='height:160; margin-bottom: 10px'><div class='amazlink-name' style='margin-bottom:10px;line-height:120%'><a href='https://www.amazon.co.jp/%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%81%AE%E3%81%93%E3%81%93%E3%82%8D-SOFTWARE-PATTERNS-SERIES-%E3%82%A2%E3%83%A9%E3%83%B3%E3%83%BB%E3%82%B7%E3%83%A3%E3%83%AD%E3%82%A6%E3%82%A7%E3%82%A4/dp/4621066048%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4621066048' rel='nofollow' target='_blank'>オブジェクト指向のこころ (SOFTWARE PATTERNS SERIES)</a></div><div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 14.07.20</div><div class='amazlink-detail'>アラン・シャロウェイ<br /></div><div class='amazlink-sub-info' style='float: left;'><div class='amazlink-link' style='margin-top: 5px'><img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18'><a href='https://www.amazon.co.jp/%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%81%AE%E3%81%93%E3%81%93%E3%82%8D-SOFTWARE-PATTERNS-SERIES-%E3%82%A2%E3%83%A9%E3%83%B3%E3%83%BB%E3%82%B7%E3%83%A3%E3%83%AD%E3%82%A6%E3%82%A7%E3%82%A4/dp/4621066048%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4621066048' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18'><a href='https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12699390%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D12699390%26surl%3Dbook' rel='nofollow' target='_blank'>楽天</a></div></div></div></div></div>

あと、POSA2の日本語訳、出版されないかな。
