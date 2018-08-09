---
author: admin
categories:
- Python
- 機械学習
date: 2017-04-18T06:33:00+00:00
dsq_thread_id:
- 5.7361935e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 1164
side:
- "y"
tags:
- Kaggle
title: Kaggle に Python で入門しました(Digit Recognizer)
title_view:
- "y"
type: post
url: /archives/=6265
---

以前から気になっていた [Kaggle](https://www.kaggle.com/)
に入門してみた。

![](./../img/Kaggle_logo.png)

Kaggle とは
===========

Kaggle
とは、データサイエンス（統計処理や機械学習）のコンペティション（大会）を開催している団体。

-   [Kaggle - Wikipedia](https://ja.wikipedia.org/wiki/Kaggle)

データサイエンティストはコンペティションに参加することでランクづけされる。
そのことによって、自分の能力を示すことができる。

データサイエンティストの履歴書、エンジニアにとっての Github
みたいなものだ。 （ちょっと違うかな、でもプロフィールページの Activity
で草を生やすイメージが似ている）

最近、Google が Kaggle を買収して話題になった。

-   [Google がデータサイエンスと機械学習のコンペ主催プラットホーム
    Kaggle を買収 | TechCrunch
    Japan](https://jp.techcrunch.com/2017/03/09/20170307google-is-acquiring-data-science-community-kaggle/)

Kaggle 入門の Motivation
========================

機械学習を勉強しはじめて、今まで教科書を写経していたり、 jupyter
notebook の穴埋めをしていたりしてきた。

そろそろ自分のコードを組み立ててみたり、なにかデータを分析してみたいと思った。
自分の知識をたしかめるためにも、なにかよい題材はないかなと思ったら、Kaggle
があった。

データサイエンスはデータを集めたり前処理をするのが大変ときくけれども、
入門なので、できればそういうところは後回しにしたい。

Kaggle には大量のデータが集められている。
しかも、参加者は各自の解答を公開（これを Kernels
というらしい）しているので、 その Kernel
を読むだけでもとても勉強になる。
投票制によって、有料な記事は注目を集めているのですぐわかる。

なにより、自分の解析結果が格付けされるのが、
もっと上位に行くために頑張ろうというモチベーションを駆り立てる。

登録方法や使い方は他のページ参照
================================

というけで、登録してみた。以下が自分のプロフィールページ。

-   <https://www.kaggle.com/fox10225fox>

登録方法や使い方は他のサイトの記事に譲る。以下、リンク集。

-   [Kaggle 事始め -
    Qiita](https://qiita.com/taka4sato/items/802c494fdebeaa7f43b7)
-   [Kaggle を始めてみる -
    サイバースイッチ](https://spitta8823.hatenablog.com/entry/2016/03/07/025359)
-   [できない英語を駆使して Kaggle
    に挑戦してみた](https://www.slideshare.net/KeisukeTokuda/kaggle-39911398)

Digit Recognizer を やってみた
==============================

数字認識データ(MNIST)をつかったコンペティションに参加してみた。

-   [Digit Recognize](https://www.kaggle.com/c/digit-recognizer)

Kaggle の入門だと [Titanic](https://www.kaggle.com/c/titanic)
の問題が有名でみんなチャレンジしているけれども、
現在以下の本を読んでいる最中。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=fox10225fox-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01MAWJJOW&linkId=7a787811c026ccfc8dc294c668b5523e"></iframe>

読書の進捗に合わせて、本の内容を真似て、解答を提出していくことにした。

具体的には、Python と Tens、PFlow
を用いて、以下の手法を順番に実装していく予定。

-   2 章: 多項分類器
-   3 章:
    -   2.単層ニューラルネットワーク
    -   3.多層ニューラルネットワーク
-   4 章: 単層 CNN
-   5 章: 多層 CNN

データのダウンロード kaggle CLI
-------------------------------

データのダウンロードのために CLI ツールがあるので、これをつかう。

-   [floydwch/kaggle-cli: An unofficial Kaggle command line
    tool.](https://github.com/floydwch/kaggle-cli)

``` {.bash}
$ pip install kaggle-cli
$ kg download -u `username` -p `password` -c digit-recognizer
```

``` {.bash}
$ ls
-rw-rw-r-- 1 tsu-nera tsu-nera 236K  4 月 18 07:55 sample_submission.csv
-rw-rw-r-- 1 tsu-nera tsu-nera  49M  4 月 18 07:55 test.csv
-rw-rw-r-- 1 tsu-nera tsu-nera  74M  4 月 18 07:53 train.csv
```

Multicilass Clasification
-------------------------

まずは基本的なところからいこうと思い、ソフトマックス関数を用いた多項分類器による分類を試みた。

自分の解答は、Kernels にアップロードした。 なんと、.ipynb
形式のファイルをアップロードすることができる。これは便利だ。

-   [Multiclass Clasification with TensorFlow|
    Kaggle](https://www.kaggle.com/fox10225fox/digit-recognizer/multiclass-clasification-with-tensorflow)

結果はどうだったかというと・・・・

![](./../img/2017-04-18-152054_302x275_scrot.png)

1456/1553 位。なんと、下から数えて 100
位以内。いやーお恥ずかしゅう。これから頑張ります。

追記
----

単層ニューラルネットワーク実装で 1419 位になった。

-   [Single Layer Network with TensorFlow |
    Kaggle](https://www.kaggle.com/fox10225fox/digit-recognizer/single-layer-network-with-tensorflow)

バカみたいに多層（5
層）にしたら精度上がったけれども、相対順位は下がった(1421 位)

-   [Multi Layer Network with TensorFlow |
    Kaggle](https://www.kaggle.com/fox10225fox/digit-recognizer/multi-layer-network-with-tensorflow/)
