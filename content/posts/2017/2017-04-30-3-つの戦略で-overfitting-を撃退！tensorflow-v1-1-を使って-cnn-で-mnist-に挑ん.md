---
author: admin
categories:
- Python
- 機械学習
date: 2017-04-29T22:10:00+00:00
dsq_thread_id:
- 5.7719e+09
excerpt: Tensorflow v1.1 を使って CNN で MNIST に挑んだ
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
- caption
pvc_views:
- 885
side:
- "y"
tags:
- DeepLearning
- Kaggle
- TensorFlow
title: 3 つの戦略で Overfitting を撃退！Tensorflow v1.1 を使って CNN で MNIST に挑んだ
title_view:
- "y"
type: post
url: /archives/=6290
---

はじめに
========

fast.ai の Practical Deep Learning for Coders を受けてます。week3
のテーマは overfitting. いかにして、overfitting
を防いで精度を向上させるかという話。 理論のあと実際の MNIST
のデータを使って精度を向上させるレクチャーがあった。

先週、ちょうど Kaggle の手書き数字認識に挑戦していたので、
今回習ったことを Kaggle
に適用してみて、精度が実際どうなるか見てみました。

また、先週 tensorflow 1.1 がリリースされて、 TensorFlow から Keras
の機能が使えるようになったので、 それも試してみました。

結論から書くと、1050 位から 342 位への大躍進！上位 20%に近づきました。

Overfitting を防ぐ戦略
======================

Overfitting とは
----------------

まずは、Overfitting についておさらい。過学習ともいう。

Overfitting
とは、訓練データの精度はいいのだけれども未知のデータの精度が悪いこと。
モデルが汎化されていない状態を指す。

どうやって、確認するかというと、訓練データの他に Validation
データを用意して Training のときに、訓練データと validation
データの精度を出す。 もし、訓練データの精度がいいけれども、validation
データの精度が悪いと Overfitting が起こっている可能性が高い。

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Overfitting_svg.svg/1024px-Overfitting_svg.svg.png"
alt="Overfitting" align="left"
title="Overfitting"
class="img"
</img>

OverFitting を防ぐ戦略
----------------------

講義の中では、以下のステップで対策することが示される。

1.  Add more data
2.  Use data augmentation
3.  Use architectures that generalize well
4.  Add regularization
5.  Reduce architecture complexity.

とくに、2 と 4 に関して、実践的な手法である

-   Dropout
-   Data Augmentation,
-   Bach Normalization

が示される。

### Dropout

階層の深いニューラルネットワークを精度よく最適化するために Hinton 教授
たちによって提案された手法。

その手法とは、ニューロンをランダムに消去しながら学習する手法。
訓練時に隠れ層のニューロンをランダムに選び出し、
その選び出したニューロンを消去する。

こんな手法で過学習を防げるのかとはじめは驚いたものの、
確かにこれで精度が出るのだ。

今回は、以下のクラスを利用した。

-   <https://www.tensorflow.org/api_docs/python/tf/contrib/keras/layers/Dropout>

### Data Augmentation

画像データを妥当な修正を加えることで、追加合成データを作成すること。
たとえば、ひっくり返したり、回したり、ズームしたり、クリッピングしたり、
色を変更したりなどなど。

参考:

-   [AI
    時代の鍵を握るのはデータオーギュメンテーション技術](https://wirelesswire.jp/2016/09/56680/)

Tensorflow(keras)には、ImageDataGenerator
というクラスがあり、これを利用する。

-   <https://www.tensorflow.org/api_docs/python/tf/contrib/keras/preprocessing/image/ImageDataGenerator>

### Bach Normalization

Bach Normalization とは、
各層でのアクティベーションの分布を適度な広がりを持つように調整すること。

前処理として、データを加工することはよくやることだけれども、
アクティベーションされた分布に処理を加えることが特徴。これによって、

-   学習を速く進行させることができる（学習係数を大きくすることができる）
-   初期値にそれほど依存しない（初期値に対してそこまで神経質にならなくてよい）
-   学習を抑制する（Dropout などの必要性を減らす）

などの利点がある。

Tensorflow(keras) では、以下のクラスがある。

-   <https://www.tensorflow.org/api_docs/python/tf/contrib/keras/layers/BatchNormalization>

MNIST に挑戦
============

今回は、以下の Keras(backend は Theano)を Tensorflow v1.1
にポーティングした。

-   <https://github.com/fastai/courses/blob/master/deeplearning1/nbs/mnist.ipynb>

今回作成した、自分の Jupyter Notebook は以下。

-   <https://github.com/tsu-nera/kaggle/blob/master/digit-recognizer/multi-layer-cnn.ipynb>

以下、コードの抜粋を以下に示す。

まずは、import。tensorflow.contrib.keras.python.keras と書く。
この書き方がわからずハマった。

``` {.python}
import tensorflow as tf
from tensorflow.contrib.keras.python.keras.models import Sequential
from tensorflow.contrib.keras.python.keras.layers import Flatten, Dense, Dropout, Lambda, Conv2D, BatchNormalization, MaxPool2D
from tensorflow.contrib.keras.python.keras.optimizers import Adam
from tensorflow.contrib.keras.python.keras.preprocessing.image import ImageDataGenerator
```

ネットワークを構成。ちょくちょく BatchNormalization
の層が入っているところがポイント。 Dropout
層も出口のところに設けてある。

``` {.python}
def get_model_bn_do():
    model = Sequential()
    model.add(Lambda(norm_input, input_shape=(28,28,1)))
    model.add(Conv2D(filters=32,kernel_size=(3,3), activation='relu'))
    model.add(BatchNormalization(axis=1))
    model.add(Conv2D(filters=32,kernel_size=(3,3), activation='relu'))
    model.add(MaxPool2D())
    model.add(BatchNormalization(axis=1))
    model.add(Conv2D(filters=64,kernel_size=(3,3), activation='relu'))
    model.add(BatchNormalization(axis=1))
    model.add(Conv2D(filters=64,kernel_size=(3,3), activation='relu'))
    model.add(MaxPool2D())
    model.add(Flatten())
    model.add(BatchNormalization())
    model.add(Dense(512, activation='relu'))
    model.add(BatchNormalization())
    model.add(Dropout(0.5))
    model.add(Dense(10, activation='softmax'))
    model.compile(Adam(), loss='categorical_crossentropy', metrics=['accuracy'])
    return model
```

以下のようなネットワークができあがる。

``` {.text}
Layer (type)                 Output Shape              Param #   
=================================================================
lambda_1 (Lambda)            (None, 28, 28, 1)         0         
_________________________________________________________________
conv2d_1 (Conv2D)            (None, 26, 26, 32)        320       
_________________________________________________________________
batch_normalization_1 (Batch (None, 26, 26, 32)        104       
_________________________________________________________________
conv2d_2 (Conv2D)            (None, 24, 24, 32)        9248      
_________________________________________________________________
max_pooling2d_1 (MaxPooling2 (None, 12, 12, 32)        0         
_________________________________________________________________
batch_normalization_2 (Batch (None, 12, 12, 32)        48        
_________________________________________________________________
conv2d_3 (Conv2D)            (None, 10, 10, 64)        18496     
_________________________________________________________________
batch_normalization_3 (Batch (None, 10, 10, 64)        40        
_________________________________________________________________
conv2d_4 (Conv2D)            (None, 8, 8, 64)          36928     
_________________________________________________________________
max_pooling2d_2 (MaxPooling2 (None, 4, 4, 64)          0         
_________________________________________________________________
flatten_1 (Flatten)          (None, 1024)              0         
_________________________________________________________________
batch_normalization_4 (Batch (None, 1024)              4096      
_________________________________________________________________
dense_1 (Dense)              (None, 512)               524800    
_________________________________________________________________
batch_normalization_5 (Batch (None, 512)               2048      
_________________________________________________________________
dropout_1 (Dropout)          (None, 512)               0         
_________________________________________________________________
dense_2 (Dense)              (None, 10)                5130      
=================================================================
Total params: 601,258.0
Trainable params: 598,090.0
Non-trainable params: 3,168.0
```

data augmentation を ImageDataGenerator で実施する。
パラメータでいろいろ変更できるようになっている。

``` {.python}
gen = ImageDataGenerator(rotation_range=8, width_shift_range=0.08, shear_range=0.3,
                            height_shift_range=0.08, zoom_range=0.08)
batches = gen.flow(features, labels, batch_size=batch_size)
test_batches = gen.flow(valid_features, valid_labels, batch_size=batch_size)
```

fit\_generator で学習。ちなみに、train\_on\_batch
関数だと、メモリ枯渇を起こした。

``` {.python}
model.fit_generator(batches, batches.n//batch_size, epochs=1,
                    validation_data=test_batches, validation_steps=test_batches.n//batch_size)
```

predict\_classes 関数でテストデータを予測。

``` {.python}
classes = model.predict_classes(test_features)
```
