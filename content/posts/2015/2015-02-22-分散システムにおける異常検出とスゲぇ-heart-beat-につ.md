---
author: admin
categories:
- 技術メモ
date: 2015-02-22T11:21:00+00:00
dsq_thread_id:
- 3.7338478e+09
excerpt: 分散システムにおける異常検出について
pvc_views:
- 1955
tags:
- coursera
title: 分散システムにおける異常検出とスゲぇ HeartBeat についてのまとめ
type: post
url: /archives/=3007
---

はじめに
========

Coursera でとっている Cloud Computing Concepts で Gossip-Style HeartBeat
というものが出てきたので詳しく調べてみた.

-   [Cloud Computing
    Concepts](https://www.coursera.org/course/cloudcomputing)

以前の仕事について
------------------

一年以上前の話になるのだが, 以前のプロジェクトの仕事について書く.

以前は, ストレージ の 異常検出機能を作っていた.

-   [ストレージ FUJITSU Storage ETERNUS DX8000 S2 series
    ](https://storage-system.fujitsu.com/jp/products/diskarray/dx-enterprise/)

信頼性を確保するために, 部品は冗長化されている. 最大で, 8
ノードの部品が互いを監視しあうような構成.

あるの部品が故障した場合に, 別の部品で異常を検出して,
その部品を部分的に停止するような機能.

監視のロジックは単純で, 定期的に相手と通信して,
通信タイムアウトが多発したら異常と判断する.

異常検出はそれがすべてと思っていた. しかし,
実際はずっと奥が深かったのだった.

ということ. 以下, 詳しく.

Failure Detector
================

分散システムのノードの中で, 異常検出を担うものを Failure Detector
という.

In distributed computing, a failure detector is an application or a
subsystem that is responsible for detection of node failures or crashes
in a distributed system.

-   [Failure detector - Wikipedia, the free
    encyclopedia](https://en.wikipedia.org/wiki/Failure_detector)

以下の論文で提出された概念.

-   [Unreliable failure detectors for reliable distributed
    systems](https://dl.acm.org/citation.cfm?coll=GUIDE&dl=GUIDE&id=226647)
-   [Chandra – Toueg consensus algorithm - Wikipedia, the free
    encyclopedia](https://en.wikipedia.org/wiki/Chandra%E2%80%93Toueg_consensus_algorithm)

Failure Detector の解説を噛み砕いて書いてある.

-   [FailureDetectors](https://www.cs.yale.edu/homes/aspnes/pinewiki/FailureDetectors.html)

Failure Detector の異常検出方法
-------------------------------

2 種類のパターンしかない.

Alive - Suspected - Failed という 3 つの状態遷移がある.

故障したかを確認するのに, タイムアウトの仕組みを使うことが多い

### Ack-Ping Protocol

能動的にプロセスがお互いに"生きてますか"という旨のメッセージを送信しあう.

-   A は B に T 秒ごとに ping を投げる.
-   B は A に ack を応答する.
-   A は B からの応答が 2T 秒 以内が帰ってこなければ B を異常と判断.
    タイムアウトは 2T 以内.

### Heartbeating Protocol

受動的に相手からの通信をまつ.

-   B -&gt; A へ T 秒ごとに heartbeat を投げる.
-   A は T 秒ごとに heartbeat を受信する.
-   A は B からの heartbeat が 3T 秒間なければ, A は B を異常と判断.

Faulure Detector の特徴
-----------------------

  Property       Description
  -------------- --------------------------------------------------
  Completeness   each failure is detected.
  Accuracy       there is no mistaken detection.
  Speed          Time to first detction of a failure.
  Scale          Equal Load on each member/ Network Message Load.
                 (No bottlenecks, single failure point)

HeartBeating
============

ネットワーク上で, コンピュータやネットワーク機器が自身が
正常に稼動していることを外部に知らせるために送る信号.

-   [ハートビートとは 【 heartbeat 】 - 意味/ 解説/ 説明/ 定義 : IT
    用語辞典](https://e-words.jp/w/E3838FE383BCE38388E38393E383BCE38388.html)

Keep-Alive ともいう.

HeartBeating の種類
-------------------

実施方法は, いろいろある.

### Centralized Heartbeating

ひとつのノードが他のすべてにハートビートを送る.

scale において x (single point of failure)

### Ring Heartbeating

円上にならんだ, ノードがとなりのノードにハートビートを送る.

Accuracy において x.(いつも検出できない)

### All-to-all Heartbeating

それぞれのノードがそれぞれのノードに対してハートビートを送る.

通信の負荷が高い.

Gossip-style Heartbeating
-------------------------

Better All-to-all Heartbeating.Probabilistic Failure Detector.

Multicast 通信で, 特定のグループに情報を伝達するためのよい手段.

-   epidemics とも呼ばれている.
-   速く, 信頼性があり, スケーラブル.

すべてのノードに heartbeat をするのではなく,
ランダムに選出したノードに対して heartbeat を実施する.

Load (負荷) は N に比例しないという特徴がある. つまり,
いくらでもノードを動的に拡張できるということ.

Gossip はうわさのこと.
人のうわさがあっという間に広まるのには理論的根拠があった.

あるノードが通信を受信すると, ランダムに選んだ n
つのノードにメッセージを送信する.

ウワサや伝染病が広まるように, 情報が伝達していく.

-   [Gossip protocol - Wikipedia, the free
    encyclopedia](https://en.wikipedia.org/wiki/Gossip_protocol)

Amazon EC2/S3 で利用されている.

### Membership protocols

Gossip-style を実現するための方法.

メンバシップリストというデータを互いのノードが送信しあって,
同期をする方式.

-   ノードを追加するときは, メンバシップリストにノードを登録する.
-   ノードを削除するときは, メンバシップリストからノードを削除する.

メンバシップリストは, Gossip-Style Multicast によって,
あっという間に各ノードで共有される.

### Snippet

たとえば, 30%の確率で まわりのノードに HeartBeat をおくっていても,
ちゃんと異常を検出できる.

すべてのノードに送らなくてもいいことに驚いた.

-   <https://github.com/tsu-nera/gossip-style-heartbeating-study>

``` {.c}
void MP1Node::sendHeartBeat () {
  Address address;
  double prob = 0.3;

  for (MemberListEntry entry: memberNode->memberList) {

    // 自分自身はスキップ
    if (isSameAddress (getAddress (entry), memberNode->addr)) {
      continue;
    }

    // ランダムに送信する (Gossip)
    if ((((double) (rand () % 100))/100) < prob) {
      address = getAddress (entry);
      sendMessage (HEARTBEAT, &address);
    }
  }
}
```

Fault-tolerant Patterns
=======================

Fault-tolerant Patterns の分野は Pattern
化されている.この分野の話をもっと知りたい.

Fault-tolerant で利用される概念がコンパクトにまとまっている.

-   <https://www.slideshare.net/ufried/no-crash-allowed-fault-tolerance-patterns>

Fault-tolerant のパターン. POSA と同じ出版社.

-   [Amazon.co.jp: Patterns for Fault Tolerant Software (Wiley Software
    Patterns Series) 電子書籍: Robert Hanmer: Kindle
    ストア](https://www.amazon.co.jp/Patterns-Fault-Tolerant-Software-Series-ebook/dp/B00DXK33SK)

上の本の書評

-   [Patterns for Fault Tolerant Systems -
    copton](https://blogs.ethz.ch/copton/2009/06/26/patterns-for-fault-tolerant-systems/)

Pattern についてまとまった PDF.

-   <https://www.dcl.hpi.uni-potsdam.de/teaching/depend13/07_ftpatterns.pdf>

おわりに
========

異常検出は奥が深かった!
-----------------------

今回, 調べてみて驚いたのは, こういう異常検出というのは,

-   Fault-Tolerant という用語で検索するとたくさん情報がでてくる
-   異常検出方法は, 体系的にまとまっている
-   スケーラブルなハートビートが存在する

ということ. 自分の視野の狭さと, 分散システムのおもしろさを感じた.

特許を考えるにはあまりに無知だった
----------------------------------

今まで, 自分の頭でいろいろな分散ノードの異常検出方法について,
特許になりそうなものを考えてきた.

しかし, この分散システムにおける異常検出というのは,
すでにいろいろなアイデアが出されていることを知った.

分散シテステムの鉄板本にいろいろなアイデアが載っている.

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'><div class='amazlink-list' style='clear: both;'><div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'><a href='https://www.amazon.co.jp/%E5%88%86%E6%95%A3%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0-%E7%AC%AC%E4%BA%8C%E7%89%88-%E3%82%A2%E3%83%B3%E3%83%89%E3%83%AA%E3%83%A5%E3%83%BC%E3%83%BBS%E3%83%BB%E3%82%BF%E3%83%8D%E3%83%B3%E3%83%90%E3%82%A6%E3%83%A0/dp/4894714981%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4894714981' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/51zOfqbGCyL._SL160_.jpg' style='border: none;' /></a></div><div class='amazlink-info' style='height:160; margin-bottom: 10px'><div class='amazlink-name' style='margin-bottom:10px;line-height:120%'><a href='https://www.amazon.co.jp/%E5%88%86%E6%95%A3%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0-%E7%AC%AC%E4%BA%8C%E7%89%88-%E3%82%A2%E3%83%B3%E3%83%89%E3%83%AA%E3%83%A5%E3%83%BC%E3%83%BBS%E3%83%BB%E3%82%BF%E3%83%8D%E3%83%B3%E3%83%90%E3%82%A6%E3%83%A0/dp/4894714981%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4894714981' rel='nofollow' target='_blank'>分散システム  第二版</a></div><div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 15.02.23</div><div class='amazlink-detail'>アンドリュー・ S ・タネンバウム<br /></div><div class='amazlink-sub-info' style='float: left;'><div class='amazlink-link' style='margin-top: 5px'><img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18'><a href='https://www.amazon.co.jp/%E5%88%86%E6%95%A3%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0-%E7%AC%AC%E4%BA%8C%E7%89%88-%E3%82%A2%E3%83%B3%E3%83%89%E3%83%AA%E3%83%A5%E3%83%BC%E3%83%BBS%E3%83%BB%E3%82%BF%E3%83%8D%E3%83%B3%E3%83%90%E3%82%A6%E3%83%A0/dp/4894714981%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4894714981' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18'><a href='https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F5961785%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D5961785%26surl%3Dbook' rel='nofollow' target='_blank'>楽天</a></div></div></div></div></div>

それらを知らずに自分でアイデアをひねり出すことは,遠回りのような気がした.
また, そういうアイデアがすでにたくさんあることにも驚きだった.

まずは先人のアイデアを身につけることを優先したほうがよい気がした.
そして, それらのアイデアを知った上で,
プラスアルファで新しいアイデアが生まれるかもしれないと思った.

分散システムにおける論文について調べるとおもしろいかもしれない.
