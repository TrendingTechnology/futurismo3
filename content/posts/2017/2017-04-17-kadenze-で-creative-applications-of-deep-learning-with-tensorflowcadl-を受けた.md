---
author: admin
categories:
- MOOC
- 機械学習
date: 2017-04-17T07:49:00+00:00
dsq_thread_id:
- 5.7332065e+09
excerpt: kadenze で、Creative Applications of Deep Learning with TensorFlow(CADL) を受けました
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
- 548
side:
- "y"
tags:
- DeepLearning
- kadenze
title: kadenze で Creative Applications of Deep Learning with TensorFlow(CADL) を受けた
title_view:
- "y"
type: post
url: /archives/=6254
---

kadenze で、Creative Applications of Deep Learning with TensorFlow(CADL)
を受けました。

-   [Creative Applications of Deep Learning with
    TensorFlow](https://www.kadenze.com/courses/creative-applications-of-deep-learning-with-tensorflow/info)

これは、Creative Applications of Deep Learning with TensorFlow という
Program (全 3 Course)のうちの一つ。

-   [Creative Applications of Deep Learning with TensorFlow
    Program](https://www.kadenze.com/programs/creative-applications-of-deep-learning-with-tensorflow)

Program の Part2,3 は有料だけれども、Part1 のみ無料で受けられる。

概要
====

Deep Learning を 芸術に適用しようという講義。

主に Part1 では、画像処理に関する話題が取り上げられる。

1.  畳み込み
2.  画像補正(image inpainting)
3.  自己符号化器
4.  DeepDream, Style Net
5.  GAN, RNN

詳細
====

講義ノートと課題（session)は以下のリポジトリにある。

juputer notebook の形式で github に置いてある。

-   <https://github.com/pkmital/CADL>

session1: Introduction to TensorFlow
------------------------------------

Deep Learning とはなにかからはじまり、画像データの処理方法、 TensorFlow
の紹介、さらには Kernel を利用した畳み込み処理が解説される。 CNN
までは、行かない。畳み込むだけ。

ちょっとはじめから飛ばしすぎな感があったけど、Lecture
ノートが丁寧なので、 理解することができた。

課題は、自分で用意した 100
枚の画像に対して畳み込み処理をするというもの。
不気味な画像が生成された。

-   [kadenze: CADL Session 1 畳み込み |
    Futurismo](https://futurismo.biz/archives/6231)

session2: Training A Network W/ TensorFlow
------------------------------------------

lecture では、tensorflow
をつかって、サイン曲線付近に散らばったデータから、
サイン曲線を回帰によって求めることをした。

また、画像をニューラルネットワークに学習させることをした。
これは、Karphaty さんのデモサイトを真似たもの。

-   [ConvNetJS demo: Image
    Painting](https://cs.stanford.edu/people/karpathy/convnetjs/demo/image_regression.html)

課題も、レクチャーの延長で、画像をニューラルネットワークに学習させることをした。
はじめは、一つの画像を、次に１００枚の画像を、最後の Option 問題で 4
つの画像を ニューラルネットワークに描かせることをした。

-   [Kadenze: CADL Session2 Image Painting |
    Futurismo](https://futurismo.biz/archives/6240)

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">kadenze CADL session2 explore.gif <a href="https://twitter.com/hashtag/CADL?src=hash">#CADL</a><br>これをどう解釈すればいいのかいまいち分かってない。 <a href="https://t.co/NgzpdTmHyB">pic.twitter.com/NgzpdTmHyB</a></p>&mdash; tsu-nera@勉強垢 (@tsu_nera_s) <a href="https://twitter.com/tsu_nera_s/status/852088350093783040">2017 年 4 月 12 日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

session3: Unsupervised And Supervised Learning
----------------------------------------------

教師なし学習として、自己符号化器が紹介される。

また、教師あり学習として、ニューラルネットワークを分類問題に適用する方法が説明される。

課題では、音声データを音楽かスピーチか判定して分類するようなことをする。

session4: Visualizing And Hallucinating Representations
-------------------------------------------------------

隠れ層の可視化をする。

また、DeepDream という、コンピュータビジョンの手法が説明される。

-   [DeepDream - Wikipedia](https://en.wikipedia.org/wiki/DeepDream)

DeepDream についてはこのブログ記事がとても詳しい。

-   [巷で噂の Google: Deep Dream の仕組みはこんな感じらしい |
    ロボ部](https://robobu.io/2015/08/08/how-deep-dream-works/)

Google Research Blog の内容を意訳してくれている。

-   [Research Blog: Inceptionism: Going Deeper into Neural
    Networks](https://research.googleblog.com/2015/06/inceptionism-going-deeper-into-neural.html)

また Neural Style Net というものを学ぶ。

-   [A Neural Algorithm of Artistic
    Style](https://arxiv.org/abs/1508.06576)

### 作品集

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">DeepDream でイルカさんと合体した。kadenze <a href="https://twitter.com/hashtag/CADL?src=hash">#CADL</a> <a href="https://t.co/lW3MXndGUH">pic.twitter.com/lW3MXndGUH</a></p>&mdash; tsu-nera@勉強垢 (@tsu_nera_s) <a href="https://twitter.com/tsu_nera_s/status/853213460183695361">2017 年 4 月 15 日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">京都の金閣寺に嵐山の竹林を DeepDeram で合成。kadenze <a href="https://twitter.com/hashtag/CADL?src=hash">#CADL</a> <a href="https://t.co/jdpSiihG0I">pic.twitter.com/jdpSiihG0I</a></p>&mdash; tsu-nera@勉強垢 (@tsu_nera_s) <a href="https://twitter.com/tsu_nera_s/status/853222153541439490">2017 年 4 月 15 日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">ルノアールを style net で学習させた kadenze <a href="https://twitter.com/hashtag/CADL?src=hash">#CADL</a> <a href="https://t.co/ZDtWiX8pi3">pic.twitter.com/ZDtWiX8pi3</a></p>&mdash; tsu-nera@勉強垢 (@tsu_nera_s) <a href="https://twitter.com/tsu_nera_s/status/853384000169156608">2017 年 4 月 15 日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

session5: Generative Models
---------------------------

GAN と RNN を説明。どっちの説明も雑だった。これじゃあなにもわからない。

GAN は用意されたライブラリの説明で、理論の説明はないし、 RNN(LSTM)も、2
分くらいの説明があったあとデモンストレーションがあっただけ。

課題は、GAN は丁寧な解説があった。DCGAN, VAEGAN が説明されて、 CELEB Net
の画像を利用して、画像を生成するところまでをやる。

RNN はトランプ大統領のツィートから文を生成しようというものだが、
出来た文章は文字化けしたような意味不明なものだった。深追いはしなかった。

感想
====

わからなすぎるー──ヾ(\*'∀\`\*)ﾉ──
---------------------------------

session1,2 までは理解できたけれども、session3,4,5 は理解できなかった。

session1,2 の内容は既に知っている内容だったので、なんとかなった。
session3,4 はほとんど、session5 に至ると、まったく分からない。

こんなにわからないのは、久しぶりだと思うほどに分からない。

説明はまあ丁寧なほう
--------------------

説明は丁寧、ということは言っておく。わからないのは自分のせい。

講義動画の内容は、話した内容がそのまま jupyter notebook
に書き起こされている。

はじめ、講義 ノートの存在をしらなくて、
動画だけかと思ってたので、こんな動画だけじゃわかんねぇよとか思ったけど、
ちゃんと丁寧な講義ノートがあった。

講義でわからなくても、課題が講義をなぞるようにできているので、
課題を通して理解を深めることができる。

数式ほとんどでてこない
----------------------

なお、数式がほとんどでてこない。
芸術をテーマにしているからか、理論的なところには踏み込んでいかないところが特徴。

たとえば、BackPropagation の説明は、以下のリンクのような感じ。

-   [Backpropagation](https://render.githubusercontent.com/view/ipynb?commit=260901dc6a0cf2dc8d073c86dd376ef6f2ab594d&enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f706b6d6974616c2f4341444c2f323630393031646336613063663264633864303733633836646433373665663666326162353934642f73657373696f6e2d322f6c6563747572652d322e6970796e62&nwo=pkmital%2FCADL&path=session-2%2Flecture-2.ipynb&repository_id=62756493#backpropagation)

数式がないとはいえ、自分は session3,4,5
がなにいってるか理解できなかったので、数式なければ簡単とはかぎらない。

課題は簡単, TensorFlow にも慣れる
---------------------------------

課題は、実はとても簡単。

課題は講義の応用なので、基本的には講義ノートのどこかに答えがある。

もしくはパラメータチューニングなので、自分で与えられた課題に対して数値をいじって変化を見る。

この講座は w/ TendorFlow というくらいなので、TensorFlow
が初めの週からでてくる。

でも難しいことはあまりない。

正直、一から TensorFlow のコードを書いていくのはまだきついけれども、
課題を穴埋めしているうちになんとなく TensorFlow の使い方がわかる。

修了製作
========

チャップリンの動画に Neural Style Net でミロのスタイルをかぶせたもの。

どうやってつくったかというと、

-   gif を画像に分解
-   [この処理](https://github.com/pkmital/CADL/blob/master/session-4/session-4.ipynb)
    を画像に適応
-   再び画像から gif を作成

元ネタ
------

![](./../img/miro2.jpg)

![](./../img/chaplin.gif)

出来上がったもの
----------------

![](./../img/miro_chaplin.gif)

<blockquote class="twitter-tweet" data-lang="ja"><p lang="pl" dir="ltr">Style Transfer, Miro to Chaplin.<a href="https://twitter.com/hashtag/kadenze?src=hash">#kadenze</a> <a href="https://twitter.com/hashtag/CADL?src=hash">#CADL</a> <a href="https://twitter.com/hashtag/deeplearning?src=hash">#deeplearning</a> <a href="https://t.co/bbxZ2dv7tp">pic.twitter.com/bbxZ2dv7tp</a></p>&mdash; tsu-nera@勉強垢 (@tsu_nera_s) <a href="https://twitter.com/tsu_nera_s/status/853892569448628225">2017 年 4 月 17 日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
