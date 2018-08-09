---
author: admin
categories:
- 機械学習
date: 2017-05-09T08:59:00+00:00
dsq_thread_id:
- 5.8002586e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 1123
side:
- "y"
tags:
- DeepLearning
title: Vgg16 モデルに Batch Normalization を組み込む技
title_view:
- "y"
type: post
url: /archives/=6399
---

はじめに
========

Vgg16 モデルによる転移学習で、kaggle で結構いい成績がでているので、
転移学習すごくない？と思っている今日この頃。

Vgg16 モデルを使って、kaggle の [MNIST
コンペ](https://www.kaggle.com/c/digit-recognizer)
に挑戦したらどうなるだろうと思っていろいろ試してみた。
結論からいうと、無謀な挑戦で挫折したのだけれども、得たことをまとめて置く。

Vgg16 モデルには、Batch Normalization が使われていない
======================================================

Batch Normalization は、overfitting
を防ぎ、学習をスピードアップさせるよい方法なのだが、 Vgg16
モデルには、Batch Normalization が使われていない。

なぜか？それは、VGG16 モデルができたとき、Batch Normalization
は存在しなかったから。

-   [Lesson 5 Notes - Deep Learning Course
    Wiki](https://wiki.fast.ai/index.php/Lesson_5_Notes#Introducing_Batch_Normalization_into_a_Pre-Trained_Model_.3C00:01:55.3E)

Fast AI での解決方法
====================

fast.ai の講義では Lesson4,5 で、VGG に Batch Normalization
を組み込む方法を紹介している。

以下の ipynb がそれ。

-   [courses/statefarm.ipynb at master ·
    fastai/courses](https://github.com/fastai/courses/blob/master/deeplearning1/nbs/statefarm.ipynb)

以下の処理で、Vgg16 モデルの最後の Convolution
レイヤのインデックス値を調べて、 FC 層を取っ払う。ここでコールしている
Vgg16 クラスは、独自関数（keras とは関係ない）ので注意。

``` {.python}
vgg = Vgg16()
model=vgg.model
last_conv_idx = [i for i,l in enumerate(model.layers) if type(l) is Convolution2D][-1]
conv_layers = model.layers[:last_conv_idx+1]
conv_model = Sequential(conv_layers)
```

取っ払った層(30 層)のみで、学習をする。

``` {.python}
conv_feat = conv_model.predict_generator(batches, batches.nb_sample)
conv_val_feat = conv_model.predict_generator(val_batches, val_batches.nb_sample)
conv_test_feat = conv_model.predict_generator(test_batches, test_batches.nb_sample)
```

以下のような、BatchNorm と Dropout を含む層を作成する。

``` {.python}
def get_bn_layers(p):
    return [
        MaxPooling2D(input_shape=conv_layers[-1].output_shape[1:]),
        Flatten(),
        Dropout(p/2),
        Dense(128, activation='relu'),
        BatchNormalization(),
        Dropout(p/2),
        Dense(128, activation='relu'),
        BatchNormalization(),
        Dropout(p),
        Dense(10, activation='softmax')
        ]
p=0.8
bn_model = Sequential(get_bn_layers(p))
bn_model.compile(Adam(lr=0.001), loss='categorical_crossentropy', metrics=['accuracy'])
```

この層をつかって、前に学習した conv\_feat から学習を再開する。

``` {.python}
bn_model.fit(conv_feat, trn_labels, batch_size=batch_size, nb_epoch=1, 
             validation_data=(conv_val_feat, val_labels))
```

うーむ、うなるような職人技だ。

Keras では、オプション指定で可能
================================

Keras では、VGG16 がデフォルトで使うことが出来る。以下の記事が詳しい。

-   [Keras で VGG16 を使う -
    人工知能に関する断創録](https://aidiary.hatenablog.com/entry/20170104/1483535144)

VGG16 というクラスが用意されている。

-   [Applications - Keras
    Documentation](https://keras.io/ja/applications/#vgg16)

このクラスをつかうときに、include\_top オプションを False
に指定することで、 ネットワークの出力層側にある 3
つの全結合層を含まないように指定できるのだ。

このオプションをつかうと以下のように組み込むことが出来る。

``` {.python}
def pretrained_model(img_shape, num_classes):
    model_vgg16_conv = VGG16(weights='imagenet', include_top=False)
    #model_vgg16_conv.summary()

    #Create your own input format
    keras_input = Input(shape=img_shape, name = 'image_input')

    #Use the generated model 
    output_vgg16_conv = model_vgg16_conv(keras_input)

    #Add the fully-connected layers 
    x = Flatten(name='flatten')(output_vgg16_conv)
    x = Dropout(0.8)(x)
    x = Dense(256, activation=layer_type, name='fc1')(x)
    x = BatchNormalization()(x)
    x = Dropout(0.8)(x)
    x = Dense(256, activation=layer_type, name='fc2')(x)
    x = BatchNormalization()(x)
    x = Dropout(0.8)(x)
    x = Dense(num_classes, activation='softmax', name='predictions')(x)

    #Create your own model 
    pretrained_model = Model(inputs=keras_input, outputs=x)
    pretrained_model.compile(optimizer=Adam(lr=0.001), loss='categorical_crossentropy', metrics=['accuracy'])

    return pretrained_model
```

元にした情報元は以下のリンク

-   [using pre trained VGG16 for another classification task · Issue
    \#4465 ·
    fchollet/keras](https://github.com/fchollet/keras/issues/4465)

VGG16 モデルで画像の入力サイズを変更したい
==========================================

VGG16 は デフォルトで 226x226
のサイズの画像を処理するように設計されているけれども、
上のソースを使うことで、input shape を変更できる。

よし、これで MNIST
に挑戦するぞ！と思ったら、なんとサイズに制限があった！！

公式ドキュメントによると、48x48 以上でなければいけないのだ。

> 正確に 3 つの入力チャンネルをもつ必要があり，width と height は 48
> 以上にする必要があります

MNIST は 28x28 なので、使えない。痛恨!！

今回の記事でとちゅうまで書いた中途半端な ipynb は以下です。

-   [kaggle/vgg16.ipynb at master ·
    tsu-nera/kaggle](https://github.com/tsu-nera/kaggle/blob/master/digit-recognizer/vgg16.ipynb)
