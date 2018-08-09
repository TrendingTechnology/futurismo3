---
author: admin
categories:
- MOOC
- ストレージ
- 技術メモ
date: 2015-04-12T13:43:00+00:00
dsq_thread_id:
- 3.7380454e+09
pvc_views:
- 1257
tags:
- coursera
title: 仕事に関わる知識を MOOC で! Coursera で Cloud Computing Concepts Part2 を受けた
type: post
url: /archives/=3109
---

[file:./../img/IMG\_3914.JPG](./../img/IMG_3914.JPG)

はじめに
========

Coursera で, クラウドコンピューティングの講座を受けました. これは, Part2
です.

-   [Cloud Computing Concepts: Part 2 - University of Illinois at
    Urbana-Champaign |
    Coursera](https://www.coursera.org/course/cloudcomputing2)

Part1 の感想は以下です.

-   [システム制御は奥が深い! 井戸の中の蛙な自分.coursera で Cloud
    Computing Cocepts をうけた |
    Futurismo](https://futurismo.biz/archives/3032)

内容
====

講義
----

以下の内容を扱う.

-   Leader Election, Mutual Exclusion
-   Concurrency Control, Replication Control
-   Stream Processing, Graph Processing, Structure of Networks,
    Scheduling
-   Distributed File Systems, Distributed Shared Memory, Sensor Networks
-   Security, Datacenter Outage Studies, Wrap-up

コースの進みかたは Part1 と同じだ.

たくさんのコンセプトや考え方が次から次へと紹介されるので,
すべてを消化できない..そして, 早口の英語の説明が困る.. \^-\^;

内容や課題は, Part1 を引用していることもあり, Part2 は Part1
が終わってから取り組んだ方がよい.

宿題
----

プログラミングの宿題は, Key-Value Store の実装.
この課題に取り組むことで,

-   replica の扱いかた,
-   key-value store の考え方.
-   quorum consistency level の考え方.

などが学べる. 言語は C++. 自分には難しくて,
満点をどうしてもとれずに途中で諦めた.

こころにのこった考え方
======================

こころにのこった考え方をコメントともに書く.

Leader Election
---------------

こういうロジックを考える仕事をしていたので, Leader Election ロジック
は感銘を受けた. 以下, 記事にした.

-   [分散システムの専任アルゴリズム (Election Algorithms) の学習メモ |
    Futurismo](https://futurismo.biz/archives/3056)

Replication Control
-------------------

もともとがストレージ屋なので, レプリケーションの技術とは馴染みがある.

昨今, 急激に台頭してきた分散ストレージのなかで使われている KVS や
Replication の知識を補充することができたことは価値があった.

以下, 勉強メモ.

### 分散 KVS

分散 Key-Value ストア. スケールアウト技術の基幹技術.

-   [key-value
    ストアの基礎知識](https://www.shudo.net/article/201002-Software-Design-KVS/#)

同じデータを複数のコンピューターに複製して保存し,
それぞれのコンピューター上のデータに変更が起きていないかどうかを
随時チェックすることによって整合性を確保. リアルタイム性はない.

Key で担当サーバを分ける.

たいていはいくつかのサーバ上に複製 (replica) を作成することによって
耐故障性を高めている.

### Replication

レプリケーション. 複製.

データ複製.オブジェクトをコピーし, ノード間で複製を保持することで
冗長性を高める手法.

システム障害時の継続運用が目的となります. 災害時に接続しているシステ
ムが壊れてしまったとき, 遠隔地にある複製データを利用し事業継続を実現
する DR (ディザスタリカバリ) に有効.

-   [データ保全手法\~バックアップ, レプリケーション, アーカイブの相違点
    :
    富士通](https://storage-system.fujitsu.com/jp/lib-f/tech/backup/features/?1503)

コンテンツ配信する方法は二つある.

-   Passive Replicatoin .. Master Replica だけを更新
-   Active Replicatoin .. id ごとにすべてを更新.

Distributed File Systems
------------------------

現在の業務は, SMB プロトコルの高速化についての研究開発.

講義では, NFS を例に, 分散ファイルシステムの特徴や, NFS における高速
化技術を解説していた. 仕事にからんでいる領域なので,
きいていておもしろい. 印象としては, NFS は高速化のための仕組みがた
くさん試されている用に見えた. SMB は....

以下, 簡単な勉強メモ.

### 分散ファイルシステムの特徴

分散ファイルシステムの目的は, ユーザから
ファイルかリモートにあるかローカルにあるか意識しなくていいよう
にすること.

2 つのアクセスモデルがある.

-   遠隔アクセスモデル ... リモートサーバにあるファイルを読み書き
-   アップロードダウンロードモデル ... 一旦ローカルにダウンロードして
    編集してからアップロード.

ローカルファイルにアクセスするときは, file discripter を指定する. file
discripter には, read/write に必要な pointer が保持されているので,
ユーザは, offset を指定しない.

リモートファイルにアクセスするときは file id と offset を指定する.

これからどうするか?
===================

フォールトトラレントの情報をあつめる
------------------------------------

信頼性の高い製品の開発に関わっていく以上,
これからもフォールトトラレントは必要な, より深めるべき知識だろう.

フォールトトラレントについては, この領域で研究が盛んで本や論文もた
くさんでている. こういうものをどんどん読み込んでいきたい.

特許ノルマが仕事で課せられているので, 集めた情報の Output として,
特許に結びつけたい.

日経コンピュータをよむ
----------------------

今まで, お昼休みにフロアにおいてある日経コンピュータを読んでいた.
しかし, 職場で席を引っ越したので, 現在日経コンピュータを読む 機会がない.

日経コンピュータは, クラウドコンピューティングの最新動向をつかむた
めのとてもいい情報源なので, これからも読みたい. これはここでブログ
に宣言することによって, 自分にプレッシャーを.
