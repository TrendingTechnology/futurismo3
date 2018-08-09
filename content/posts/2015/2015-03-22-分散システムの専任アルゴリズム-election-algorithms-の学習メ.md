---
author: admin
categories:
- 技術メモ
date: 2015-03-22T05:20:00+00:00
dsq_thread_id:
- 3.6943176e+09
excerpt: 分散システムにおける専任アルゴリズム (Election Algorithms) の学習メモ
pvc_views:
- 1653
tags:
- coursera
title: 分散システムの専任アルゴリズム (Election Algorithms) の学習メモ
type: post
url: /archives/=3056
---

要約
====

分散システムにおける専任アルゴリズム (Election Algorithms) の学習メモ.

代表的なアルゴリズムには, 以下がある.

-   Bully Algorithm
-   Ring Algorithm

背景
====

以前の記事のつづき.前回は,
異常検出についての古典的なアルゴリズムを記事にした.

-   [分散システムにおける異常検出とスゲぇ HeartBeat についてのまとめ |
    Futurismo](https://futurismo.biz/archives/3007)

今回は, 異常を検出したあとの動作についてメモ. coursera で Election
Algorithms を学習した.

-   [Coursera - Free Online Courses From Top
    Universities](https://www.coursera.org/course/cloudcomputing2)

Master 決定の論理でも,
古典的なアルゴリズムがすでに存在することに驚いたので 詳しくしらべてみた.

Leader Election
===============

選任アルゴリズム.

通常, 分散システムでは, Coordinator が存在する. Coordinator
で異常が発生したさい, 次の Coordinator を決定する必要がある.

また, 異常な Coordinator が復旧したときに Coordinator を戻す必要がある.

古典的な Coordinator を決定するためのアルゴリズムは以下.

-   Bully algorithm
-   Ring algorithm

実際の実装例.

-   Google Chubby
-   Apatch ZooKeeper

Bully Algorithm
---------------

Bully (ガキ大将) アルゴリズム. つよいものが勝つというもの.

-   [CS 551: Synchronization, Bully Election Algorithm
    Example](https://www.cs.colostate.edu/~cs551/CourseNotes/Synchronization/BullyExample.html)
-   [Bully algorithm - Wikipedia, the free
    encyclopedia](https://en.wikipedia.org/wiki/Bully_algorithm)

3 種類のメッセージがある. \* Election Message: Sent to announce faster
election \* Answer Message: Respond to the election message \*
Coordinator message: Sent to announce the identity of the elected
process

手順は以下

1.  あるノードが Master の異常を検出したとき, Election を開催する.
    Master が異常状態から復旧したときも, Election を開催する.
2.  あるノードは自身よりも高い ID をもつノードにたいして, Election
    Message をおくる. (生存宣言)
3.  Election Message をうけとったノードは, Answer Message をかえす.
    そして, 自身よりも高い ID をもつノードにたいして, Election Message
    をおくる.
4.  2, 3 が続いた結果, どのノードからも応答がない, 送信するノードがな
    い場合に, そのノードが Master となる. Master は Coordinator messag
    をおくる.

Ring Algorithm
--------------

リング上にノードの ID が割り振られる.
あるノードは自身のとなりにならぶノードにメッセージを送る.

となりとなりにメッセージをおくることで, リングを一周したら,
リングを構成するノードの生存確認がとれるので, もっとも高い ID
をもつノードが Master になる.

-   [CS 551: Synchronization, Token Ring Election Algorithm
    Example](https://www.cs.colostate.edu/~cs551/CourseNotes/Synchronization/RingElectExample.html)

Bookmarks
---------

-   [Distributed
    Algorithms](https://www2.cs.uregina.ca/~hamilton/courses/330/notes/distributed/distributed.html)
-   <https://www.hpcs.cs.tsukuba.ac.jp/~msato/lecture-note/dsys-2014/lecture-dist-mutex.pdf>

おわりに
========

以前はストレージ装置における異状検出機能を担当していたことはすでに書いた.

Master-Slave 構成において, Master で異常が発生した際に, 次期 Master
を決定する必要がある.

自分の所属していたチーム内ではこのロジックを 次期 Master 決定論理
などど呼んでいた. 自分たちでなんとなく考えたものだった.

世の中をみわたせば, この領域は Election Algorithms と呼ばれていて,
研究も進んでいるのだった.

この分野は 自分がはじめて出した特許に関係する部分だったので,
自身の無知をしった.
