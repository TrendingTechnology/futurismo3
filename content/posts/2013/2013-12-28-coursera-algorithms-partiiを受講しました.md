---
author: admin
categories:
- Java
- 技術メモ
date: 2013-12-28T13:28:37+00:00
dsq_thread_id:
- 3.7002895e+09
excerpt: Coursera Algorithms PartIIを受講しました
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
- 2159
side:
- "y"
tags:
- coursera
title: Coursera Algorithms PartIIを受講しました
title_view:
- "y"
type: post
url: /archives/=2055
---

<!--:ja-->

Couresera Algorithms PartIIを受講しましたので、感想を書きます。

[Announcements | Algorithms, Part II][1]

今回のPartIIは、前回のPartIに引き続きです。Part Iを受けたからには、当然 Part IIを受けないわけにはいかない。

  * [Coursera Algorithms PartⅠを受講しました | Futurismo][2]

[//www.youtube.com/embed/GO8frjxq25I?rel=0]

### 内容について

前半はグラフ理論をみっちり。後半は、文字列処理や圧縮について。Part Iを受講していたほうがベターだけれども、受講していなくても問題はない。

##### week1 Undirected Graphs/ Directed Graphs

グラフについての内容。有向グラフ、無向グラフについて。またグラフを検索するために、幅優先探索、深さ優先探索が紹介される。グラフはアルゴリズムのなかでもとくに重要なので、いきなり濃い内容だ。

##### week2 Minimum Spanning Trees./Shortest Paths

最短経路問題や、最小スパニング木の検索方法。ダイクストラ法、Kraskal法、Prim法などが紹介される。Assignmentは、SeamCarvingという、画像処理技術の実装。これはとてもおもしろかったので、別記事にまとめた。

  * [魔法みたいなリサイズ技術！Seam Carvingについて調べてみた | Futurismo][3]

##### week3　Maximum Flow/ Radix Sorts

前半は、ネットワークフロー問題と、フォード・ファルカーソンアルゴリズムの紹介。week3のAssignmentは、ネットワークフローを用いて、野球の試合のペナント脱落チームを求める問題。ここまでがグラフ理論。

後半からは、文字列ソートのアルゴリズム(LSD,MSD, 3-way Radix QuickSort)が紹介される。後半は、week6のAssignmentにも関わってくる。

##### week4

お休み zzz.

##### week5 Tries/Substring Search

文字列検索に関する内容。Googleの予測検索技術はこういうのをふんだんに利用しているのだろうなとおもった。Assignmentは、Boggleというゲームの答えをTries構造を利用したメモ化再帰で解く。これが一番簡単だった。

##### weel6 Regular Expressions/Data Compression

正規表現とデータ圧縮について。正規表現は、オートマンを利用して正規表現を検出するという仕組みが面白かった。圧縮では、ランレングス法、ハフマン符号化、LZW圧縮のアルゴリズムが紹介される。

自分の大学での専攻は情報理論だったが、理学部だったので実際に圧縮アルゴリズムをプログラミングするようなことはなかった（情報エントロピーの数学的証明とか）。なので、プログラミングを前提としてはなされる今回の講義はとても聞いていて楽しかった。Assignmentは、bzip2で利用されている圧縮方法、Burrows-Wheelerの実装。最後のAssignmentということで、けっこう頑張ったが、パフォーマンスがなかなかあがらなかった。

##### week7 Reductions/ Intractability

計算量理論、線形計画法、P-NPによるアルゴリズムの分類などなど、アルゴリズムの理論的な基礎が説明される。ここはわからなかった。。。

### 感想

別のコースと並列で受講していたので、全くスケジュールどおりには終わらなかった。まあ、Sertificationが発行されないのでいいか。Lectureは配信されてすぐにみてたけど、Assignmentは12月の暮れに一気に片付けた。

学習時間は、PartIとあまり変わらなかった。(つまり、Workload: 6-10 hours/weekの倍は時間がかかったという意味）難易度はPartIIのほうが難しく感じた。

PartI,IIを通して、とにかくAssignmentに時間がかかったが、どれも興味深い内容で、とても楽しかった。Assignmentは、80%くらいは点数が取れるのだけれども、残り20%のパフォーマンスの部分がいつも苦戦した。パフォーマンスやメモリ使用量のチューニングを意識してプログラミングをしたのは初めてかもしれない。

Algorithms PartI,IIを通して体系的なAlgorithmsやデータ構造の知識を学習することができたことは、とても有益だ。しかし、知識の消化不良を感じる。大学の講義ということもあり、理論的な部分やトリッキーなテクニックも多かった。理論的な部分は頭に入れてもすぐに忘れる。

しかし、自分は学者ではなくてプログラマを目指すのだ。実践で必要となるスキルは、

  * オーダやメモリの見積もりかた
  * データ構造やアルゴリズムのライブラリの選択方法
  * 簡単なアルゴリズムの実装

などだと思う。DFSやBFSなどはサラッと書きたいものだ。実際にどう使うかという観点から、重要そうなところだけ再度復習しようと思う。

### おまけ

エンディングの音楽がとても気に入った。

[//www.youtube.com/embed/SZyT9bayf8o?rel=0]<!--:-->

 [1]: https://class.coursera.org/algs4partII-002/class
 [2]: https://futurismo.biz/archives/1834
 [3]: https://futurismo.biz/archives/2050