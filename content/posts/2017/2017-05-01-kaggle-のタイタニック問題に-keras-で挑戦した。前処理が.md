---
author: admin
categories:
- 機械学習
date: 2017-05-01T06:36:00+00:00
dsq_thread_id:
- 5.775297e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 883
side:
- "y"
tags:
- Kaggle
- Keras
title: Kaggle のタイタニック問題に Keras で挑戦した。前処理が課題だと分かった。
title_view:
- "y"
type: post
url: /archives/=6296
---

Kaggle のタイタニック問題に Keras で挑戦しました。

-   [Titanic: Machine Learning from Disaster |
    Kaggle](https://www.kaggle.com/c/titanic)

前置き
======

タイタニック問題は、Kaggle
の看板コンペということで、いろんな人が挑戦している。

自分も早くデータサイエンティストになりたいので、登竜門であるコンペに挑戦してみた。

タイトルが、Titanic: Machine Learning from Disaster
とある通り、機械学習を
使って問題を解くことが求められているのだけれども、自分の ToolBox には、
ニューラルネットワーク一本槍しかない。

他の手法も身につけたいのだけれども、他にも手を出すと知識が発散してしまうので、
今はニューラルネットワークひとつにかけている。

最近 Keras をいじりはじめたので、Keras
でニューラルネットワークを組んで問題に挑戦してみた。

考察
====

モデルのチューニングが難しい。
------------------------------

以下のようなモデルを組んでみたのだけれども、精度が 75%。 これで上位 90%
という惨憺たる結果。

``` {.python}
# create model
model = Sequential()
model.add(Dense(64, input_shape=(8,)))

for i in range(0, 8):
    model.add(Dense(units=64))
    model.add(Activation('relu'))

model.add(Dense(units=1))
model.add(Activation('linear'))

model.compile(loss='mean_squared_error', optimizer='rmsprop')
```

9 層の Dense レイヤ（Relu 関数で activate) のあとに、1
ノードの出力層を設けた。 コスト関数は、最小二乗誤差、最適化手法は
RMSProp.

Bach Norm や Dropout
層を入れることも検討したのだけれども、そうすると精度が下がる。
この設計以上にシンプルにしたり、複雑にしてみたりしたのだけれども、精度が下がる。

チューニング方法が試行錯誤なので、難しい。いい方法がないか、考察中。
チューニングにベストプラクティスはあるのだろうか？直感に頼るしかないのだろうか？
経験を積めば、知識が増えて、いい方法がすぐに思いついたりするのだろうか？

前処理はズルをしました
----------------------

どういう特徴量を使うかは、以下の記事を参考（パクリ）にしました。

-   [Kaggle の「Titanic: Machine Learning from
    Disaster」にニューラルネットワークを適用する -
    Qiita](https://qiita.com/ryouta0506/items/c5ffb704b5c20106b771)

本当は、以下のようなデータ分析をしてデータの傾向を見る必要があるのだけれども、
そういうスキルが自分にはまだない。これから時間をかけて身につけていく。

-   [Pandas でタイタニック号の乗客データを解析する -
    Qiita](https://qiita.com/yudsuzuk/items/a13236a415f238da857e#%E5%89%8D%E6%BA%96%E5%82%99)

おそらくだけれども、この前処理の段階を改善することで、精度がグンと上がるのだと思う。
Udemy
に参考になりそうな講座がいくつかあるので、購入しようか検討中。(追記:セールだったので購入した。1200
円！)

-   [【世界で 5 万人が受講】実践 Python データサイエンス |
    Udemy](https://www.udemy.com/python-jp/)
-   [Byte-Sized-Chunks: Decision Trees and Random Forests |
    Udemy](https://www.udemy.com/decision-trees-and-random-forests/)

そういう気づきを得られただけでも、今回参加した価値はあったと思う。
とにかく動くことで課題が明確になる。

コード
======

github に jupyter notebook をアップロードしました。

-   [kaggle/titanic-keras-nn.ipynb at master ·
    tsu-nera/kaggle](https://github.com/tsu-nera/kaggle/blob/master/titanic/titanic-keras-nn.ipynb)

