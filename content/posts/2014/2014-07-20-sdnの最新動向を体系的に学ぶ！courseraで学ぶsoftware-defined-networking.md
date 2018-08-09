---
author: admin
categories:
- MOOC
- 技術メモ
date: 2014-07-20T09:37:00+00:00
dsq_thread_id:
- 3.735371e+09
excerpt: Courseraで、Software Defined Networkingを学びました
pvc_views:
- 1819
tags:
- coursera
- SDN
- SDS
title: SDNの最新動向を体系的に学ぶ！Courseraで学ぶSoftware Defined Networking
type: post
url: /archives/=2530
---

Courseraで、Software Defined Networkingを学びました。

-   [Software Defined Networking |
    Coursera](https://class.coursera.org/sdn-002)

<iframe width="560" height="315" src="//www.youtube.com/embed/bWvLmWQUEDQ" frameborder="0" allowfullscreen></iframe>

\[toc\]

Software-Definedとはなにかを知るために
======================================

5月頃に Software-Definedという言葉を知り、調べてみた。

-   [Software Defined Infrastructureに関するブックマーク |
    Futurismo](https://futurismo.biz/archives/2435)

そんなおりに、courseraでSDNに関する講座が開かれるということで、
好奇心が盛り上がっている今には最適なタイミングだと思い、受けてみた。

自分はNetworkについてはほとんど知識がなかった。
Networkというよりは、Sofware-Definedという考え方に興味があった。
ネットの情報をかき集めて学んでもいいけれども、
Software-Definedという考え方、アーキテクチャを体系的に学びたかった。

よくわからなかった・・・
========================

最新技術が無料で体系的に学べるMOOCは素晴らしい
----------------------------------------------

SDNに関するホットな技術を体系的に学ぶことができる。

-   Module 1: History and evolution of SDN
-   Module 2: Control and data plane separation
-   Module 3: Control Plane
-   Module 4: Network Virtualization
-   Module 5: Data Plane
-   Module 6: Programming SDNs
-   Module 7: Verification and Debugging
-   Module 8: Use Cases and Looking Forward

また、内容は毎年更新されていく。
さらには、その分野で輝いている人へのインタビュー動画が毎週配信される。

最新技術を無料で学ぶことができるなんて、MOOCは素晴らしいと改めて思う。

正直・・・too dificult for me..
-------------------------------

講義のスライドはとても論理的にできている。
課題、解決策、効果の順番で、SDNを導入することによるメリットを述べている。

-   現状の課題
-   SDNによる解決策の提示
-   SDNによる効果

Nick FeamsterさんのYoutubeチャンネルで、動画の一部が公開されていた。

-   [Introduction to SDN 2014 -
    YouTube](https://www.youtube.com/watch?v=I-XdDffLMqc&list=PLpherdrLyny-4Y6jXKvi0Ia9jJAk3M_Bs)

しかし、難しくてよくわからなかった。
Networkについての前提知識がないので、用語が理解できない。

また、AssignmentはPythonなので、Pythonが分からずに挫折。。。orz

とりあえず講義だけをきいた
--------------------------

じゃあなにをやったの？というと、
講義をきいて、毎週のQuizに答え、講義の内容をテキストにメモしたりした。

この講義は、非エンジニアも楽しめるようにできていて、
Pythonかけなくても、ビデオ見てクイズに答えればいいよと、
冒頭のガイダンスで言われたので、その通りにした。

これで、毎週3時間くらい。

講座はNetworkingに関わる話題しか扱わない。
しかし、自分はSoftware-Defined という考え方を知りたかった。
なので、解説されている内容からNetwork以外にも当てはまりそうなことを
推測しながら聞いていた。

学習メモ
========

Software Defined Networkingに関する学習メモ。

定義
----

-   広義：「従来システムのネットワーク要素を抽象化し分割する、コンピュータ
    ネットワークを構築するアプローチ」（wiki より）
-   狭義：「（広義のアプローチを具体化するために）ネットワーク機器のコントロールプレーン、

データ プレーンを分離し、集中化されたソフトウェアからコントロールして、
もっと効率的なこと、便利なことをする！！」

A new networking paradigm whereby the behavior of a network is
controlled by a single high-level software program. The general term for
network architectures whereby the control plane (software that controls
network behavior) and the data plane (the devices that forward traffic)
are separate from one another.

SDN allows network administrators to manage network services through
abstraction of lower level functionality.

-   [Software-defined networking - Wikipedia, the free
    encyclopedia](https://en.wikipedia.org/wiki/Software-defined_networking)

    コントロールプレーンとフォワーディングプレーンを分離し、ネットワークにプログラマビリティを持たせる

-   [SDN時代のデータセンター・アーキテクチャ/Forwarding Plane J-Net
    Community](https://forums.juniper.net/t5/%E3%83%96%E3%83%AD%E3%82%B0/SDN%E6%99%82%E4%BB%A3%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC-%E3%82%A2%E3%83%BC%E3%82%AD%E3%83%86%E3%82%AF%E3%83%81%E3%83%A3-Forwarding-Plane-%E5%89%8D%E7%B7%A8/ba-p/204427)

ネットワーク全体で一つのOSとして見え、
ソフトウェアから見れば個々のネットワーク機器が隠ぺいされています。
こうすることで、ソフトウェアを開発さえすれば
自由にネットワークを制御することが可能になります。

-   [SDNへの潮流とOpenFlowの歴史 | Think
    IT（シンクイット）](https://thinkit.co.jp/story/2012/02/02/3151)

SDNの歴史と基盤技術
-------------------

### Active networks

A collection of network architecture projects in the 1990s that shared
many of the same goals as software-defined networking.

### Network virtualization

ネットワーク仮想化。物理ネットワーク上に複数の論理ネットワークを構築すること。

The notion of instantiating many distinct logical networks on top of a
single, shared physical network infrastructure.

-   [ASCII.jp：なぜSDNは生まれたのか？ネットワーク仮想化との関係は？
    (1/2)｜Q&A形式で学ぶOpenFlow/SDN](https://ascii.jp/elem/000/000/793/793504/)

「ネットワーク仮想化」とも呼ばれ、厳密にはSDNの応用の一つであり、
また、SDNによらず別の技術によって実現する手法もあるため、
ネットワーク仮想化とSDNそのものとは区別する必要がある。

-   [SDNとは 【 Software-Defined Networking 】 - 意味/解説/説明/定義 ：
    IT用語辞典](https://e-words.jp/w/SDN.html)

構成要素
--------

### Control Plane

The functions in the network that control the behavior of the network
(e.g., network paths, forwarding behavior). Typically, the control plane
is instantiated as a single, high-level software controller.

### Data Plane

フォワーディング・プレーン, Forwarding planeともいう。

-   [Forwarding plane - Wikipedia, the free
    encyclopedia](https://en.wikipedia.org/wiki/Forwarding_plane)

The functions in the network that are responsible for forwarding (or not
forwarding) traffic. Typically, the data plane is instantiated as
forwarding tables in routers, switches, firewalls , and middleboxes.

Data plane design goals. 技術革新に素早く対応できること。

-   Flexible(柔軟性)
-   Extensible(拡張性)
-   Clean interfaces (整理されたインタフェース)

1.  Programmable Hardware

    標準化された、プログラミング可能なハードウェア。
    もうすぐ、高級言語での記述もできるようになるはず。

    -   FPGA
    -   Click

2.  Flowの構成要素

    -   ヘッダフィールド（マッチングルール）
    -   アクション
        -   Forwarding
        -   Enqueue
        -   Drop
    -   統計情報

    [OpenFlowのアーキテクチャと仕様・機能 | Think
    IT（シンクイット）](https://thinkit.co.jp/story/2012/02/09/3209)

### NorthBound API

Programming interface that allows applications and norchestration
systems to program the network .Uses for Northbound API ,

-   Path computation
-   Loop avoidance
-   Routing
-   Security

Northbound APIは、アプリケーションからSDNコントローラを制御できるAPIだ。

-   [SDN/OpenFlowの新しい課題：Northbound APIとは何か？ −
    Publickey](https://www.publickey1.jp/blog/12/sdnopenflownorthbound_api.html)
-   [Northdound APIは、Software-Defined Networkにとって重大な欠落だ −
    Publickey](https://www.publickey1.jp/blog/12/northdound_apisoftware-defined_network.html)

Northbound API can help,

-   Sophisticated events
-   Composition of policies
-   Event handling

### SouthBound API

Control Planeと Data PlaneをつなぐAPI.

SDNのアーキテクチャ
-------------------

``` {.language}
                        ---
Controller Applications  |
======================   |
   NorthBound API        | Control Plane
======================   |  
  Controller Platform   ---
======================   |  
   SouthBound API        | Data Plane
======================   |
  OpenFlow Switches      |  
                        ---
```

Composition
-----------

シーケンシャルな制御方法とパラレルな制御方法。

-   Sequential composition :Perform one operation, then the next.
-   Parallel composition :Perform both operations simultaneously.

Event-Driven SDN
----------------

ネットワーク構成のほとんどは、イベント駆動の処理。
ネットワークのポリシーをEvent-Basedで表現という考えが Event-Based
Network Control.

-   Event Plane
    -   user
        -   time
        -   history
    -   Dinamic Event Handler -&gt; State Transition signal to Control
        Plane.
    -   Control Plane -&gt; finite state machineで制御される。
        -   State

    ドメインの状態(value)の集合。
    -   Events

    ステートマシンにしたがって状態遷移を発生させるトリガ
    -   Data Plane

他の用語との違いについて整理
----------------------------

### OpenFlow

Software-Defined Network （SDN）は、コンセプト、アーキテクチャ。
それを実現する技術の一つがOpenFlow。

OpenFlowは、スタンフォード大学が中心となっている
「OpenFlowスイッチングコンソーシアム」が提唱するネットワーク制御技術.

SDNを実現するための代表的なフレームワーク。

-   [ASCII.jp：SDNを牽引するOpenFlowとは？業界へのインパクトは？](https://ascii.jp/elem/000/000/794/794744/)
-   [OpenFlowとは 〔 オープンフロー 〕 - 意味/解説/説明/定義 ：
    IT用語辞典](https://e-words.jp/w/OpenFlow.html)
-   [OpenFlow/SDNはなぜ誕生したのか、OpenFlow以前にあった問題とは。生みの親カサド氏が壇上で語る。SDN
    Japan 2013 −
    Publickey](https://www.publickey1.jp/blog/13/openflowsdnopenflowsdn_japan_2013.html)

### OpenStack

OpenStackはクラウドをOSSで管理するためのソフトウェア群の総称。
OpenStackのネットワーク仮想化にあたる部分がSDNの思想と重なる。

これからどうするの？
====================

もちろん、これを仕事に生かしたい。

Networkの分野はバブル景気？
---------------------------

社内の噂できいたところによると、Networkをやっている部署は残業し放題らしい。

世の中はどうだかわからないが、
身の回りではNetworkのビジネスがものすごい勢いで成長しているのを感じる。
お金もどんどん投資されるし、人材もどんどんネットワークに集められていく。
かくいう自分も、8月から半年間くらい、WANに関する仕事をすることになった。

その盛り上がりの理由のひとつは、SDNとそれから派生したOpenStackだろう。

今回の講座を通じて、SDNについて興味は深まり、上っ面の知識が身についた。
しかし、Assignmentをサボったために、
コーディングレベルの知識が身につかなかったことが、残念だ。
これだけの知識だと、役に立たない。業務に入っていくには、もう少し深い知識が必要だ。

手をあげられるようなチャンスができたら、
上っ面な知識だけれども手をあげて飛び込んでいきたい。

新世代を創るSoftware-Defined Storageの未来を思い描く
----------------------------------------------------

自分は、ストレージのエンジニアとしてこれまで働いてきた。
これからも、ストレージ分野で仕事をしていれば、
SDSは避けて通れない知識だろう。

今回の講義を通じて、Software-Definedのアーキテチャについて学ぶことができた。
Control Plane, Data Plane, Event-Driven Archなどなど。
こういう前提知識をもとに、このSoftware-Definedという考え方が
Storageの世界でどうやって適応できるかを考えていきたい。

Networkの分野では、まずはじめに解決するべきNetwork上の課題があり、
それに応じて必要な技術があり、その一つがSDNなのだ。
SDNとSDSは解決するべき課題がまったく異なるので、
SDNを学んだからってSDSにそのまま応用できるわけではない。

そのストレージ固有の問題についてSDNで得た考え方をもとに考えていきたい。

または、SDNもSDSも、Software-Defined Data Centorの構成要素なので、
それぞれを組み合わせた一段上の視点を身につけたい。
