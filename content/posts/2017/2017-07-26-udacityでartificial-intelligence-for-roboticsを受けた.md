---
author: admin
categories:
- MOOC
- Python
date: 2017-07-26T03:34:59+00:00
dsq_thread_id:
- 6.016422e+09
excerpt: UdacityでArtificial Intelligence for Robotics(CS373)を受けた
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 383
side:
- "y"
tags:
- Robotics
- Udacity
title: UdacityでArtificial Intelligence for Roboticsを受けた
title_view:
- "y"
type: post
url: /archives/=6667
---

UdacityでArtificial Intelligence for Robotics(CS373)を受けた。

  * [Artificial Intelligence for Robotics][1]

[https://www.youtube.com/embed/g-fk3RQiw5Q]

しかしながら、この講座はとても難しく、挫折した。

なので、簡単に内容の紹介と感想を書く。

## 動機 {#-}

Udacityの Deep Learning Nanodegree を受講し終わったので、
  
次の講座として Robotics Nanodegreeの受講を考えている。

  * [Robotics Nanodegree | Udacity][2]

その間のつなぎの講座として、タイトル惹かれてこの講座を受けてみることにした。

また、最近 LEGO mindstormsを購入したので、学んだことを応用できればいいなと思っている。

## 内容 {#-}

Googleの自動運転車の要素技術について学ぶ講座。この要素技術は、自動運転車に限らずあらゆるロボティクスについて応用できるとのこと。講座のタイトルが昔は Self Driving Car だったが今の AI for Roboticsに変わったようだ。

講師は、Udacityの創立者にしてGoogleカーのエンジニア、セバスチャン・スラン氏。すごい。

シラバスは以下のとおり。

Lesson1-3は自己位置推定(Localization)について、4,5は探索と制御について、6は地図生成だ。

  * Lesson 1: The Problem of Localization ・・・ヒストグラムフィルタについて学ぶ
  * Lesson 2: Kalman Filters ・・・ カルマンフィルタについて学ぶ
  * Lesson 3: Particle Filters ・・・粒子フィルタについて学ぶ
  * Lesson 4: Motion Planning ・・・経路探索について、幅優先探索、A*, 動的計画法について。
  * Lesson 5: PID Control ・・・経路の平滑化、PID制御について学ぶ。
  * Lesson 6: GraphSLAM ・・・ Lesson1-5まで学んだまとめ、おまけとしてGraphSLAMについて。

途中、よくわからなくなったので、参考書を買った。確率ロボティクス。スラン先生の本だ。

<a href="https://www.amazon.co.jp/%E7%A2%BA%E7%8E%87%E3%83%AD%E3%83%9C%E3%83%86%E3%82%A3%E3%82%AF%E3%82%B9-%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%96%E3%83%83%E3%82%AF%E3%82%B9%E7%89%88-Sebastian-Thrun/dp/4839952981/ref=as_li_ss_il?ie=UTF8&#038;qid=1501038553&#038;sr=8-1&#038;keywords=%E7%A2%BA%E7%8E%87%E3%83%AD%E3%83%9C%E3%83%86%E3%82%A3%E3%82%AF%E3%82%B9&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=9bc1d5e9674468baa32e8ef43ceb6c03" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4839952981&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4839952981" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

講座の進め方は、ミニクイズとPythonによるプログラミング課題が、説明のあとに出される。少しずつ難易度が上がっていくので、理解しやすい。そして、週の終わりにミニテストとプログラミング課題が出される。一応リポジトリを起こして、コードを書いた。

  * <https://github.com/tsu-nera/udacity-ai-for-robotics>

この講座、一番うれしいところは、すべての動画に日本語字幕がついているところだ。

  * [https://www.youtube.com/watch?v=Uqt\_pRbR8rI&list=PLAwxTw4SYaPkCSYXw6-a\_aAoXVKLDwnHK][3]

その他、Forumが充実しているところもうれしい。が、講座が開講された2012年のころの投稿が多い。

  * <https://discussions.udacity.com/c/standalone-courses/artificial-intelligence-for-robotics>

## 感想 {#-}

難しく、挫折した。一応、動画は最後まで目を通した。これが完全に理解できれば、君はスタンフォードの優等生だと講義でいっていた。むりだー。

少し飛ばしぎみで講義を進めていったので、深くは理解を深めようとしていないからかもしれない。

大体ひとLesson 5時間くらいかければ終わる。

無料の講座だとついつい気が緩んで真剣にとりくまないのかもしれない。
    
この講座は、今の Self-Driving Car NanoDegreeに内容が引き継がれているようだ。

  * [Udacity自動運転エンジニアコースのTerm1を終えた感想 &#8211; Qiita][4]
  * [Udacity自動運転エンジニアコースのTerm2を終えた感想 &#8211; Qiita][5]

DeepLearning Nanodegreeのあとの進路は、Self-Driving Car, Artificial Intelligence, Roboticsの３つに分かれるのだが、自分は 組込み屋なので、Roboticsに決めている。ただ、自動運転車の講座もおもしろそうだと思った、と同時に難しそうだと思った。自分には、Roboticsを挫折しないでやり遂げる能力があるのだろうか・・・。

挫折したことが悔しいし、確率ロボティクスの本も買ったことなので、いつかこの講座をやり直そう。ロボティクスでも、自己位置推定が扱われるようなので、そのときに振り返ることにする。

Path Planningや PID制御は LEGO Mindstormsで実際に試せそうだ。時間があればやってみよう。

 [1]: https://www.udacity.com/course/artificial-intelligence-for-robotics--cs373
 [2]: https://www.udacity.com/robotics
 [3]: https://www.youtube.com/watch?v=Uqt_pRbR8rI&list=PLAwxTw4SYaPkCSYXw6-a_aAoXVKLDwnHK
 [4]: https://qiita.com/RyosukeH/items/822d11d2fb5c83e03786
 [5]: https://qiita.com/RyosukeH/items/4853e9a403fc760c25ea