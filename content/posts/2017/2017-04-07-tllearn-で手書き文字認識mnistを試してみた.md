---
author: admin
categories:
- 機械学習
date: 2017-04-07T10:53:00+00:00
dsq_thread_id:
- 5.7040573e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 973
side:
- "y"
tags:
- DeepLearning
title: TFLearn で手書き文字認識(MNIST)を試してみた
title_view:
- "y"
type: post
url: /archives/=6222
---

先日、ゼロから作る DeepLearning を読んだ。

-   [ゼロから作る Deep Learning を読んだ |
    Futurismo](https://futurismo.biz/archives/6219)

Udacity Deep Learning Nanodegree で TFLearn が紹介されていたのだが、
MNIST
データを使った手書き文字認識が簡単に実装できてしまうことにビックリした。

実装
====

TFLearn のシンプルさにビックリ
------------------------------

こんな感じで、簡単に層を追加できてしまう。ビックリ！

``` {.python}
# Inputs 784 個の入力データ
net = tflearn.input_data([None, trainX.shape[1]])

# Hidden layers 
# 活性化関数には ReLU 関数を利用。
net = tflearn.fully_connected(net, 128, activation='ReLU')
net = tflearn.fully_connected(net, 32, activation='ReLU')

# Output layer
# 活性化関数は、ソフトマックス関数を利用
net = tflearn.fully_connected(net, 10, activation='softmax')
# 最適化手法は、SGD. 学習率は 0.01. Cont 関数は、交差エントロピーを利用
net = tflearn.regression(net, optimizer='sgd', learning_rate=0.01, loss='categorical_crossentropy')

# モデルの生成
model = tflearn.DNN(net)
```

ゼロから作る DeepLearning
で苦悩しつつ実装したニューラルネットワークはなんだったのだろうか？

ライブラリをつかえばこんなに簡単に実装できるのか？！

gist
----

<script src="https://gist.github.com/tsu-nera/0327864211dc44f9855c7d4b952eb8e1.js"></script>

このコードを実行すると、Accuracy は、97.69%.

TFLearn とは
============

TFLearn とは、Tensorflow のラッパーライブラリ。

-   <https://tflearn.org/>

scikit-learn のように TensorFlow が使えるらしい。

-   [TensorFlow を scikit-learn のように使える TF Learn (旧
    skflow）が超便利です- datalove ’ s
    diary](https://datalove.hatenadiary.jp/entry/introduction-to-an-amazing-tensorflow-wrapper-tflearn-skflow)

TFLearn インストール
--------------------

公式のやり方は以下。

-   <https://tflearn.org/installation/>

DLND では、anaconda を利用してインストールする方法が紹介されていた。

``` {.bash}
# conda で tflearn 用の仮想環境を作成
conda create -n tflearn python=3.5

# 有効化
activate tflearn

# Tensorflow と TFLearn をインストール
conda install scipy h5py
pip install tensorflow
pip install TFLearn
```

