---
author: admin
categories:
- 機械学習
date: 2017-04-26T07:22:00+00:00
dsq_thread_id:
- 5.760521e+09
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
- 1214
side:
- "y"
tags:
- DeepLearning
- Kaggle
- Keras
title: Vgg16 モデルを使って Kaggle の Dogs vs Cats をやってみた
title_view:
- "y"
type: post
url: /archives/=6281
---

fast.ai の Practical Deep Learning for Coders の week2 の課題で、
勉強の理解のために、スクラッチで教えた内容を自分で実装してみてねと書かれていたので、やってみた。

-   <https://wiki.fast.ai/index.php/Lesson_2>

はじめに
========

Practical Deep Learning for Coders では、 Kaggle の Compatition [Dogs
vs. Cats Redux|
Kaggle](https://www.kaggle.com/c/dogs-vs-cats-redux-kernels-edition)
に参加することが課題に課せられるのだが、 week1 でいきなり、上位 50%
に入ってねという課題が出される。

無理だよ！と思ったのだけれども、week2 で上位
50%に入るための種明かしをしてくれる。 それが、vgg16 モデルを使った
fine-tuning
による転移学習。これについては、以下の記事がとても参考になった。

-   [VGG16 の Fine-tuning による犬猫認識 (1) -
    人工知能に関する断創録](https://aidiary.hatenablog.com/entry/20170108/1483876657)
-   [VGG16 の Fine-tuning による犬猫認識 (2) -
    人工知能に関する断創録](https://aidiary.hatenablog.com/entry/20170110/1484057655)

課題をスクラッチではなく（できないので）、与えられたコードコピペしまくりでなんとか実装してみた。元ネタこれ。

-   <https://github.com/fastai/courses/blob/master/deeplearning1/nbs/lesson2.ipynb>
-   <https://github.com/fastai/courses/blob/master/deeplearning1/nbs/dogs_cats_redux.ipynb>

今回の課題の jupyter notebook は github に
あるので、ここではコードを抜粋して載せる。

-   [practical-dl-for-coders-part1/dogs\_cats\_scratch.ipynb](https://github.com/tsu-nera/practical-dl-for-coders-part1/blob/master/lesson2/dogs_cats_scratch.ipynb)

実装の抜粋
==========

Rearrange image files into their respective directories
-------------------------------------------------------

まずは、kaggle
からデータを持ってきて、以下のようなディレクトクリ構造をつくる。
分類クラスごとにサブディレクトリ（dogs, cats,
unknown)を作ることによって、 Keras の ImageDataGenerator
がうまいこと処理してくれる。

``` {.text}
├── test
│   └── unknown
├── train
│   ├── cats
│   └── dogs
└── valid
    ├── cats
    └── dogs
```

Finetune and Train model
------------------------

VGG モデルを作成する。

``` {.python}
def ConvBlock(layers, model, filters):
    for i in range(layers):
        model.add(ZeroPadding2D((1,1)))
        model.add(Convolution2D(filters, 3, 3, activation='relu'))
    model.add(MaxPooling2D((2,2), strides=(2,2)))

def FCBlock(model):
    model.add(Dense(4096, activation='relu'))
    model.add(Dropout(0.5))
```

``` {.python}
# Mean of each channel as provided by VGG researchers
vgg_mean = np.array([123.68, 116.779, 103.939]).reshape((3,1,1))

def vgg_preprocess(x):
    x = x - vgg_mean     # subtract mean
    return x[:, ::-1]    # reverse axis bgr->rgb

def VGG_16():
    model = Sequential()
    model.add(Lambda(vgg_preprocess, input_shape=(3,224,224)))
    ConvBlock(2, model, 64)
    ConvBlock(2, model, 128)
    ConvBlock(3, model, 256)
    ConvBlock(3, model, 512)
    ConvBlock(3, model, 512)
    model.add(Flatten())
    FCBlock(model)
    FCBlock(model)
    model.add(Dense(1000, activation='softmax'))
    return model


def finetune(model, num_classes):
    # remove last layer
    model.pop()
    # set all layers untrainable.
    for layer in model.layers: layer.trainable=False
    # add new layer
    model.add(Dense(num_classes, activation='softmax'))
    model.compile(optimizer=Adam(lr=0.001),
                loss='categorical_crossentropy', metrics=['accuracy'])
    return model

def get_batches(path, dirname, gen=image.ImageDataGenerator(), shuffle=True,
                batch_size=64, class_mode='categorical'):
    return gen.flow_from_directory(path+dirname, target_size=(224,224),
                class_mode=class_mode, shuffle=shuffle, batch_size=batch_size)
```

そして、学習済みの重みを fast.ai のサーバから手に入れる。

-   <https://files.fast.ai/models/>

``` {.bash}
wget https://files.fast.ai/models/vgg16.h5
```

[ここ](https://drive.google.com/file/d/0Bz7KyqmuGsilT0J5dmRCM0ROVHc/view)
からもダウンロードできる。

なお、keras1.2.0
では、[ここ](https://aidiary.hatenablog.com/entry/20170104/1483535144)によると、
VGG16 モデルが keras.applications.vgg16
モジュールに実装されているらしい。

つまり、自分のやり方は古いということだ！！

``` {.python}
model = VGG_16()

# load pre-trained weights!!!
model.load_weights('vgg16.h5')

# remove last layer and add new layer
ftmodel = finetune(model, 2)
```

print ftmodel.summary() で 最後の層に出力が 2
のレイヤが追加されたことを確認する。

``` {.text}
dense_4 (Dense)                  (None, 2)             8194        dropout_2[0][0]                  
```

追加した層を犬猫判定ように調整する。

``` {.python}
batch_size=64
path = DATA_HOME_DIR

batches = get_batches(path,'train', batch_size=batch_size)
val_batches = get_batches(path,'valid', batch_size=batch_size)

# train finetuned model(only last layer)
no_of_epochs=1

for epoch in range(no_of_epochs):
    print "Running epoch: %d" % epoch
    ftmodel.fit_generator(batches, samples_per_epoch=batches.nb_sample, nb_epoch=1,
                validation_data=val_batches, nb_val_samples=val_batches.nb_sample)
    latest_weights_filename = 'ft%d.h5' % epoch
    ftmodel.save_weights(latest_weights_filename)
```

Generate predictions
--------------------

test データから犬猫の確率を推測。preds
には\[猫,犬\]とデータが入っている。

``` {.python}
test_batches = get_batches(path, 'test', batch_size=2*batch_size, class_mode=None)
preds = ftmodel.predict_generator(test_batches, test_batches.nb_sample)
```
