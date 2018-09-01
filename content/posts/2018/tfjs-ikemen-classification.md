---
title: TensorFlow.jsでイケメン判定サービスを開発しました
description: TensorFlow.jsをつかって開発したイケメン判定サービスの技術詳細です。
date: 2018-08-31 18:07:14
author: tsu-nera
type: post
tags:
- TensorFlow.js
- React
- 機械学習
- DeepLearning
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1535707633/futurismo/posts/2018-08-31-181157_924x518_scrot.png
---

TensorFlow.jsを利用して、イケメン判定サービスを作成しました。

- https://tfjs-ikemen-classification.herokuapp.com/

この記事は、次の２つの過去記事の続編になります。

- [Tensorflow\.jsでmnist手書き数字認識をやってみた\(React\) \| Futurismo](https://futurismo.biz/tfjs-mnist-react/)
- [Deep Learningで出会い系アプリ tinder の画像判定をしてlikeを自動化する \| Futurismo](https://futurismo.biz/tinder_python/)

## サービスの仕組み

前回のMNISTの記事と仕組みはだいたい同じです。

### モデルの学習

まず、Python(Keras)で学習して、学習モデルをGitHubとかにアップロードしておきます。
今回学習につかった、Jupyter Notebookはこれです。

- https://gist.github.com/tsu-nera/b86d6c188feb02885bbabd8bbad78c5b

以前の記事で使用したtinderのときのNotebookとあまり変わりません。
違いは、PytorchからKerasにしたことです。TensorFlow.jsはKerasのモデルならば読み込めるらしいので。
Keras, 久しぶりに書いたら書き方を忘れていましたので、以下の記事を参考にしました。

- [Keras Tutorial : Fine\-tuning pre\-trained models \| Learn OpenCV](https://www.learnopencv.com/keras-tutorial-fine-tuning-using-pre-trained-models/)

もう一つの違いは、今回**MobileNets**という学習済みモデルをFine-tuningしたことです。
MobileNetsというのは、名前の通りモバイル端末向けに軽量に作成された画像認識モデルだそうです。
このサービスはモバイルでは動作しないのですが、GitHubから学習モデルを配信するので、
できるだけ軽量なこのモデルを使って転移学習をさせました。

- [\[1704\.04861\] MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications](https://arxiv.org/abs/1704.04861)

あと、今回は男性が対象です。女性を美人判定すると、あとが怖いので。。

### 機械学習をWebアプリケーションに組み込む

さて、学習モデルをWebアプリに組み込むのですが、これもMNISTの流用ですね。React製です。

違いは、Webcamから画像を取得するようにしたことですかね。あと、地味にマテリアルデザインに凝っていました。

工夫したところは、モデルをダウンロードするのに時間がかかるので、ダウンロード中という画面を表示したところです。

## おわりに

結構ノウハウを流用しているので、２日で開発できました。

このサービスを評価している最中なのですが、自分の場合、なんどやってもイケメンになれません。

なので、バグっているか、ラベルが逆なのだと思います。

AIのくせになんどもなんども私のことをキモいと判定するので、いいかげんしばいたろか？

ソースコードもリンク貼っておきます。

- https://github.com/tsu-nera/tfjs-moteone
