---
author: admin
categories:
- 機械学習
date: 2017-04-12T13:47:27+00:00
dsq_thread_id:
- 5.719288e+09
excerpt: 画像をニューラルネットワークに描かせる
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
- 377
side:
- "y"
tags:
- DeepLearning
- スクレイピング
title: 'Kadenze: CADL Session2 Image Painting'
title_view:
- "y"
type: post
url: /archives/=6240
---

kadenze という MOOC を知ったので、紹介します。

-   [Online Arts and Technology Courses |
    Kadenze](https://www.kadenze.com/)

Kadenze とは
============

Kadenze
とは、芸術、つまりアートや音楽、絵画と、それに関わるテクノロジーに特化した
講座を多数よういされた MOOC だ。

<iframe width="560" height="315" src="https://www.youtube.com/embed/wYop9PzBlyo" frameborder="0" allowfullscreen></iframe>

2015/7 に設立されたので、まだ誕生して 2 年も経たない。
しかし、コンテンツは 100 近くある。

コースは聴講のみなら無料、課題の提出や certification
の取得は有料となっている。 ここは、他の MOOC とかわらない。

また、Course と Program とで分かれている。

Program は複数の Course をばら売りしたもの。 逆にいえば、複数き Course
をシリーズにしてまとめたものが Program.

-   [Programs | Kadenze](https://www.kadenze.com/programs)

For the Engineering
-------------------

coursera や edX にもアート系の講座はあるが、Kadenza
は特化しているだけあって、 興味深い講座が多数ある。

Kadenza に惹かれる理由は、エンジニアのためのアート、
つまりテクノロジーに関連したものを扱っているところだ。ここが、coursera
や edX と異なるところ。

気になる講座
============

プログラミングや機械学習、特に DeepLearning と アートの講座もある。

Machine Learning for Musicians and Artists
------------------------------------------

機械学習と、音楽の講座。

-   [Machine Learning for Musicians and Artists - an Online Machine Art
    Course at
    Kadenze](https://www.kadenze.com/courses/machine-learning-for-musicians-and-artists/info)

Creative Audio Programming on the Raspberry Pi
----------------------------------------------

Raspberry Pi 上で動作する オーディオプログラミング。

-   [Creative Audio Programming on the Raspberry
    Pi](https://www.kadenze.com/courses/creative-audio-programming-on-the-raspberry-pi/info)

Introduction to Programming for Musicians and Digital Artists
-------------------------------------------------------------

オープンソース ChucK による、サウンドプログラミング。これは，以前
coursera にあった。

-   [Intro to Programming for Musicians & Digital Artists - an Online
    Programming Course at
    Kadenze](https://www.kadenze.com/courses/introduction-to-programming-for-musicians-and-digital-artists/info)

Creative Applications of Deep Learning with TensorFlow
======================================================

そして、最後に私が受講し始めた講座を紹介。

-   [Creative Applications of Deep Learning with TensorFlow |
    Kadenze](https://www.kadenze.com/programs/creative-applications-of-deep-learning-with-tensorflow)

Program の受講料は 500 ドルだけれども、聴講なら無料。Program は３つの
Course に分かれている。

TensorFlow を使って、クリエイティブなアプリケーションを DeepLearning
の手法を用いて作成していく。

![](./../img/2017-04-08-005728_946x646_scrot.png)

シラバス
--------

3 部構成になっている。

``` {.text}
COURSE 1
Creative Applications of Deep Learning with TensorFlow

    Session 1: Introduction to TensorFlow
    Session 2: Training A Network W/ TensorFlow
    Session 3: Unsupervised And Supervised Learning
    Session 4: Visualizing And Hallucinating Representations
    Session 5: Generative Models

COURSE 2 — Summer 2017
Creative Applications of Deep Learning with TensorFlow II

    Session 1: Cloud Computing, GPUs, Deploying
    Session 2: Mixture Density Networks, Handwriting Synthesis
    Session 3: Modeling Attention with RNNs, DRAW
    Session 4: PixelCNN and PixelRNN, Generative Images

COURSE 3 — Late 2017
Creative Applications of Deep Learning with TensorFlow III

    Session 1: WaveNet, Generative Audio
    Session 2: Conditional Deep Generator Networks
    Session 3: Reinforcement Learning
    Session 4: Google Brain's Magenta Lab: Music and Art Generation
```

まとめ
======

私はクラシック音楽が大好きだ。

だから、音楽とプログラミングを結びつけてなにか面白いことをするというのが、
自分の昔からの夢だった。

Deep Learning
はそのような可能性を引き出してくれる最高の遊び道具だと思う。

夢の実現のために、この Deep Learning の講座を理解して、応用したい。

kadenzeの[Creative Applications of Deep Learning with TensorFlow][1]を受けてます。

week2の[課題][2]では、tensorflow をつかって、多層ニューラルネット（10層 Deep Learningだ！）を構築し、画像をニューラルネットワークに描かせることをやる。

なにをいっているのか、うまく伝える自信がないので、ようは以下のサイトのようなことをするのだ。そのロジックを学んだ。

  *  [ConvNetJS demo: Image Painting][3]

Input: 画像のrowとcolの位置情報 / Output RGB値

### Goghを学ばせる

[<img class="aligncenter size-full wp-image-6243" src="https://futurismo.biz/wp-content/uploads/gogh.png" alt="" width="560" height="431" />][4]

これを、ニューラルネットワークで学習させると・・・・

<img class="wp-image-6244 aligncenter" src="https://futurismo.biz/wp-content/uploads/single.gif" alt="" width="333" height="333" />

### AV女優を学ばせる

AIだって、AV女優を見れば、活性化関数が元気になるんじゃなかと思って、題材に選んだ。

[<img class="aligncenter size-full wp-image-6245" src="https://futurismo.biz/wp-content/uploads/index-1.png" alt="" width="587" height="578" />][5]これを、ニューラルネットワークで学習させると・・・・

[<img class="aligncenter wp-image-6246" src="https://futurismo.biz/wp-content/uploads/explore.gif" alt="" width="500" height="500" />][6]

これが何を意味しているのか、よくわかっていなかったりする。

今回の課題は以下のリポジトリにあります。

  * [CADL/session-2 at master · tsu-nera/CADL][7]

### おまけ: DMM AV女優月刊ランキングの女優の画像を取得するスクリプト

&nbsp;

 [1]: https://www.kadenze.com/courses/creative-applications-of-deep-learning-with-tensorflow/info
 [2]: https://github.com/pkmital/CADL/blob/master/session-2/session-2.ipynb
 [3]: https://cs.stanford.edu/people/karpathy/convnetjs/demo/image_regression.html
 [4]: https://futurismo.biz/wp-content/uploads/gogh.png
 [5]: https://futurismo.biz/wp-content/uploads/index-1.png
 [6]: https://futurismo.biz/wp-content/uploads/explore.gif
 [7]: https://github.com/tsu-nera/CADL/tree/master/session-2
 
