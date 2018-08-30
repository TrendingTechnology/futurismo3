---
title: Tensorflow.jsでmnist手書き数字認識をやってみた(React)
description: Tensorflow.jsでmnist手書き数字認識をやってみました。既存のサービスをReactで書き直したものになります。
date: 2018-08-30 14:48:21
author: tsu-nera
type: post
tags:
- Tensorflow.js
- JavaScript
- React
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1535610106/futurismo/posts/tjfs-mnist-react.png
---

Tensorflow.jsで画像認識の定番、手書き数字認識（mnist）をやってみました。

作成したサービスをHerokuに公開しています。

- https://tfjs-react-mnist.herokuapp.com/

注: モバイル対応ができませんでした。デスクトップからのアクセスをお願いします。

## Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/hCf-p4FwRf8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 制作背景

今回のサービスは、次の記事のフォークとなります。

- [TensorFlow\.jsでMNIST学習済モデルを読み込みブラウザで手書き文字認識をする \- Qiita](https://qiita.com/kaneU/items/ca84c4bfcb47ac53af99)

ただし、そのまま持ってきたわけではなくて、Reactに移植しました。ソースコードは次になります。

- https://github.com/tsu-nera/tfjs-react-mnist-study

## 感想

Tensorflow.jsすごい！の一言です。

このサービス、どうやって動いているかを解説すると、まずPythonでmnistのデータを学習します。そして**学習したモデルをJSで動くように変換**します。推論は、JavaScriptでクライアントサイドのブラウザ上で実施するのです。モデル自体は、GitHubに置いてあります。ユーザーがブラウザで実行するために、モデルをダウンロードしてきて、手元で推論を実行するのです。

これは、機械学習プロジェクトの新たな形です。今までの認識では、学習モデルの作成も推論も、Pythonでやるのかなと思っていました。たとえば、Kerasで分析したモデルをDjangoサービスに組み込んで、サーバサイドで推論をするのかなと。

しかし、Tensorflow.jsをつかうことで、推論をサーバではなくてクライアント側で実行するという、別の手段ができたのです。（メリットデメリットについては、2018年Software Design 9月号が詳しい)一番の課題は、モデルサイズでしょうか？モバイルで推論をするためには、モデルが軽量でなければいけません。

とはいえ、JavaScriptをつかったクライアントサイド推論、ワクワクする技術ですね〜。もう少し遊んで、深めていきたいです。

