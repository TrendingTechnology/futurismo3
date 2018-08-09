---
author: admin
categories:
- MOOC
- 機械学習
date: 2017-05-17T11:00:00+00:00
dsq_thread_id:
- 5.825122e+09
excerpt: fast.ai の Practical Deep Learning for Coders Part1 を受けた
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
- end
pvc_views:
- 1422
side:
- "y"
tags:
- DeepLearning
title: fast.ai の Practical Deep Learning for Coders, Part1 を受けた
title_view:
- "y"
type: post
url: /archives/=6440
---

![](./../img/2017-05-17-194233_264x267_scrot.png)

fast.ai が提供する MOOC, "Practical Deep Learning for Coders Part1"
を受けた。

-   [Practical Deep Learning For Coders — 18 hours of lessons for
    free](https://course.fast.ai/)

特徴
====

プログラマのための実践ディープラーニング入門
--------------------------------------------

この講座は、プログラマのためにある。素晴らしい理念の序文を引用したい。

> The purpose of this course is to make deep learning accessible to
> those individuals who may or may not possess a strong background in
> machine learning or mathematics.
>
> We strongly believe that deep learning will be transformative in any
> application; as such, this course is designed for individuals who
> possess a background in computer programming and would like to apply
> these techniques to their domain of expertise.

Deep Learning
は、機械学習や数学に深い造詣がないといけないというまやかしを、
吹き飛ばそうという野心を感じる。

そして、機械学習も数学もできない自分にはピッタリの講座だ！

Practical\~実践の意味、Kaggler になれ！
---------------------------------------

講師を努めるのは、Kaggle のかつての President、Jeremy Howard.

TED の動画もある。

<iframe src="https://embed.ted.com/talks/lang/ja/jeremy_howard_the_wonderful_and_terrifying_implications_of_computers_that_can_learn" width="640" height="360" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

そして毎週の課題は、Kaggle に挑戦すること。 そのうち、トップ 50%
に入ることが基準として課される。

トップ 50% に入るのは、正直とてもたいへんだ。
しかし、この手法を使えば入れるという種明かしを授業のなかでしてくれる。

ここでタイトルの実践の意味がわかる。つまり、kaggle のデータを使って、
実際にデータ解析をすることで、実力をつけようという意図があるのだ。

実際、以下のコンペに挑戦する。

-   [Dogs vs. Cats
    Redux](https://www.kaggle.com/c/dogs-vs-cats-redux-kernels-edition)
-   [State
    Farm](https://www.kaggle.com/c/state-farm-distracted-driver-detection)
-   [Fisheries
    Monitoring](https://www.kaggle.com/c/the-nature-conservancy-fisheries-monitoring)

全て無料！ただし GPU つかうから AWS でインスタンス を借りてね
-------------------------------------------------------------

この講座は無料である。state-of-the-art の内容が無料で受けられる。

しかし、GPU をつかうから AWS を借りてねと言われる。1 時間 90
セントだから安いよと言われる。

-   <https://wiki.fast.ai/index.php/AWS_install>

p2 タイプというのが GPU 対応らしいのでそのインスタンスを借りる。

AWS の EC2 の自動セットアップスクリプトが提供されるのだけれども、
このスクリプトがアメリカとヨーロッパしか対応してなくて、アジアがない。

しかたがないので、アメリカの EC2 のインスタンスを使う。
操作すると、距離のせいか、レスポンスが遅いが、なんとか頑張る。

floydhub が使えるという情報を見つけた。

-   [Running Fast.ai Lesson 1 on Floyd - How To - FloydHub
    Forum](https://forum.floydhub.com/t/running-fast-ai-lesson-1-on-floyd/40)

2 時間の動画と丁寧なレクチャーノート
------------------------------------

毎週 2 時間の動画がある。他の MOOC は動画が短く区切られているけれども、
この MOOC は 2 時間ぶっ通しである。

なので、疲れる。毎回 TimeLine の wiki ページがあるので、
自分は途中休憩をはさみながら細切れに見た。

英語（ただし英語の字幕はある）なので、聞いていてもよくわからない。

しかし、ありがたいことに、すごく丁寧なレクチャーノートの wiki と Jupyter
Notebook が提供されている。

-   [Deep Learning Course
    Wiki](https://wiki.fast.ai/index.php/Main_Page#Lessons)
-   [fastai/courses: fast.ai Courses](https://github.com/fastai/courses)

疑問点があるときは、Forum で同じことに困っている人がいるので、Forum
を検索する。

-   [Deep Learning Course Forums](https://forums.fast.ai/)

なので、英語のリスニングに不安がある人でも大丈夫。

Keras 大活躍
------------

この講座では、Python2 と keras 1.x(Backend は
Theano)を使う。なぜなら、簡単にかけるからだ。

(一応、Python3, Keras2 に対応した非公式リポジトリもある
[roebius/deeplearning1\_keras2](https://github.com/roebius/deeplearning1_keras2))

今まで TensorFlow しか知らなかったけれども、 Keras をつかうと、Deep
Learning のコードがすごく簡単にかける。

Keras がこの講座で好きになった。

全 7 週間で最低 8 時間は自習しましょう
--------------------------------------

講義は全 7 回ある。２時間の講義ビデオに加えて 8 時間の自習が必要。

勉強時間は平均的に 8-15 時間が一般的らしい。 なかには、15-30
時間勉強する人もいるとか。

ハードだ。でも、他の MOOC と違い、自分のペースで進めることが出来るので、
時間に追い詰められることはなく、自分が納得できるまで努力することができる。

この MOOC は自習が重んじられているように感じた。

自分はこんな感じで、各回を進めた。

-   動画みる(2h)
-   レクチャーノートを読む(2-3h)
-   Jupyter Notebook を読む(2h)
-   Assignment をやる(???)

講義メモ
========

以下、各回が終わるたびにメモを書いていきました。

lesson1: Image Recognition
--------------------------

lesson1 の動画はうれしいことに日本語字幕がついている。

前半で、AWS
の環境構築をする。全てセットアップスクリプトが面倒見てくれるので、
問題なくセットアップできた。

それから、VGG16 という imagenet のモデルを ファインチューニングして、
[Dogs vs. Cats Redux|
Kaggle](https://www.kaggle.com/c/dogs-vs-cats-redux-kernels-edition)
用にモデルをつくる。

fine-tuning については、この記事が詳しい。

-   [Keras で VGG16 を使う -
    人工知能に関する断創録](https://aidiary.hatenablog.com/entry/20170104/1483535144)
-   [VGG16 の Fine-tuning による犬猫認識 (1) -
    人工知能に関する断創録](https://aidiary.hatenablog.com/entry/20170108/1483876657)

課題は、上記 kaggle のコンペティション（競技会）に参加してみること。
自分が参加したときは、もう既にこのコンペが終了していた。
提出はできたので、スコアを眺めてみたけれども、どうもあまり成績はよくなかった。

lesson1 では、理論的な話はでてこないので、説明された通りに進めていけば
OK.

lesson2: CNNs
-------------

前半は、lesson1 の課題の説明。Dogs or Cats コンペで
上位に入るための種明かしがされる。

後半は、CNN について。CNN の説明はガイダンスでしたよね？といわれ、 CNN
の理論は飛ばされて線形問題を SGD で解くことをやる。 そのあと、Keras
をつかって、線形問題を解く。

その後、Keras をつかって、スクラッチから Dogs vs Cats をかいて
どうやれば精度が向上するかを実験する。

課題は、コンペで 50%以内に入る種明かしを元に、再度 kaggle
に挑戦してみること。 また、vgg16 の fine-tuning による方法はいろんな
kaggle のコンペに適用可能なので、犬猫以外のコンペに参加してみること。

また、課題図書で
以下を読むこと。こんなに読めないよ！！と思ったので、読まなかったけど。

-   [CS231n Convolutional Neural Networks for Visual
    Recognition](https://cs231n.github.io/) - The following from module
    1:
    -   Optimization: Stochastic Gradient Descent
    -   Backpropagation, Intuitions
    -   Neural Networks Part 1: Setting up the Architecture
-   [Neural networks and deep
    learning](https://neuralnetworksanddeeplearning.com/chap1.html) -
    chapters 1, 2, & 3

てか、普通にこれだけ勉強するなんて、アメリカの学生勉強しすぎでしょ、偉いよ。

lesson3: Overfitting
--------------------

前半は、CNN
の復習。サブ講師のレイチェルさんがちょくちょく質問をして、講義を遮る。

後半は、Overfitting と Underfitting について。以下の手法が紹介される。

-   Data Augmentation
-   Dropout
-   Bach Normalization

そして、これらのテクニックをつかって MMIST の認識を試み、 精度
97%まで達することを示す。自分も Kaggle の [Digit
Recognizer](https://www.kaggle.com/c/digit-recognizer)
で好成績を出すことが出来た。

-   [3 つの戦略で Overfitting を撃退！Tensorflow v1.1 を使って CNN で
    MNIST に挑んだ | Futurismo](https://futurismo.biz/archives/6290)

課題は、今までの復習(CNN はここまで)を各自でやるようにとのこと。
それから、[State
Farm](https://www.kaggle.com/c/state-farm-distracted-driver-detection)
のコンペで上位 50% に入ることが課せられるのだが、 これができなかった。。

lesson4: Embedding
------------------

前半は、CNN を Excel で表現していろいろ動かしてみるデモ。

それから、いくつかの最適化手法が紹介される。

-   Momentam
-   Adagrad
-   RMSProp
-   Adam
-   Eve

これを Excel で実装したものが与えられるのだが、Excel もっていない。
LibreOffice では、VBA マクロを動作させることができない。
しかたがないので、Lecture Note と Video で雰囲気だけ感じた。

それから、[State
Farm](https://www.kaggle.com/c/state-farm-distracted-driver-detection)
のコンペの攻略法について 30 分ほど話がある。 Psuedo-labeling
という手法。今週も頑張ってねとのこと。

Psuedo-labeling で検索かけたら面白いスライド見つけた。10
位だって、すごい。

-   [Kaggle State Farm Distracted Driver Detection -
    SSSSLIDE](https://sssslide.com/speakerdeck.com/iwiwi/kaggle-state-farm-distracted-driver-detection)

State Farm の課題はサーバーのメモリエラーが発生したので Pesude-labeling
の手法ができない！ 上位 50%は諦めた。

State Farm が終わったら、[Fisheries
Monitoring](https://www.kaggle.com/c/the-nature-conservancy-fisheries-monitoring)
のコンペが紹介される。 Vgg16
の転移学習を試したら、すぐにいい成績が出た。転移学習最強説がでできた。

最後に協調フィルタリングの紹介。Excel
のソルバーを使ってデモをしていたけれども、 自分は Excel
を持っていないので、試すことができない。 講義資料の ipynb で keras
による、協調フィルタリングの説明もある。 ここで、embedding
という概念を説明して、次の lesson の word embedding につながる。

lesson4 は Excel 大活躍だな。

lesson5: NLP
------------

まずは、Vgg16 に BatchNormalization を適用したモデルの紹介。

-   [Vgg16 モデルに Batch Normalization を組み込む技 |
    Futurismo](https://futurismo.biz/archives/6399)

次に、協調フィルタリングについて先週のノートを元に復習したあと
今回のテーマである NLP に。

センチメント分析を Embeddings をつかって実施する。 データは、IMDB
という映画のレビューのデータセットを利用する。

単純なモデルから、複雑なモデルへと説明していき、精度が向上することを確かめる。

面白いと思ったのは、NLP の世界でも画像のような訓練済みのモデルを使った
転移学習ができるということだ。Glove
という訓練済みのモデルを利用したりした。
日本語の訓練済みモデルが欲しいところだ。

最後に、次のレッスンの導入として RNN の簡単な説明があって終了。

lesson6: RNNs
-------------

RNN のモデルが説明される。簡単なモデルから、だんだん複雑になっていく。

文章の文字を読み込んで次の文字を推測するということをやる。

-   3 層のモデル
-   8 層のモデル
-   N 層のモデル
-   Sequential RNN
-   Stateful RNN

そして一通り説明が終わったところで、なんと、Theano がでてくる。

今までは実践的なことばかり教えてきて、Keras で簡単に DL
を実装してきたけど、 Keras
がどう動いているのかとか、低レイヤとかのことも知っておいたほうがいいよね、
というわけで、Theano による RNN の実装の説明がはじまる。

そして、次回予告として、次回は numpy で RNN
を実装するよ！とのこと。感動の最終回??

lesson7: CNN Architectures
--------------------------

ResNet という新たなモデルが出てくる。 これは 2015 年に
現れた手法のようで、VGG モデルよりも複雑。 Input を 層を重ねたあとに
Merge するというよくわからないことをやっていた。
ソースコードも提供されている。([courses/resnet50.py](https://github.com/fastai/courses/blob/master/deeplearning1/nbs/resnet50.py))

そのあとに、kaggle [Fisheries
Monitoring](https://www.kaggle.com/c/the-nature-conservancy-fisheries-monitoring)
コンペの攻略法の解説。 lesson7 は、3/4 の時間を Fisheries Monitoring
の解説に費やすというサービス。 Kaggle 必勝法が凝縮している講義だ。
自分は、一回動画を見ただけでは理解できなかった。

この講座はこれで最後でこれが終わったら、暇になるだろうから、 この
Jupyter Notebook を何度も読んで、Kaggle で遊んでねとのこと。

-   [courses/lesson7.ipynb at master ·
    fastai/courses](https://github.com/fastai/courses/blob/master/deeplearning1/nbs/lesson7.ipynb)
    -   Data Leakage
    -   魚が写真のどこにいるかを探す方法
    -   大きなサイズの転移学習の仕方
    -   Inception モデル

そして、残りの 30 分で、numpy を使った RNN の実装と GRU の紹介。 LSTM
よりも、GRU のほうが便利なので、GRU を紹介するとのこと。

難しいのが最後にきた。。keras
は一行でかけるが本質を理解することが大事とのことで、 ここでも Theano
による実装が紹介された。BackPropagation、復習しよう。

おわりに
========

この講座でおしいところは、紹介されている kaggle
のコンペがすでに終わっているところだ。

今 Active な Kaggle コンペに参加して腕試ししようかと思って、入門の
Titanic や Digit Recognizer にも挑んだりした。

-   [TensorFlow で学ぶディープラーニング入門を読んだ。Kaggle
    で実践してみた。 | Futurismo](https://futurismo.biz/archives/6274)
-   [Kaggle のタイタニック問題に Keras
    で挑戦した。前処理が課題だと分かった。 |
    Futurismo](https://futurismo.biz/archives/6296)

[DeepAnalytics](https://deepanalytics.jp/)
という日本のデータ解析のコンテストサイト(Kaggle の日本版)を知った。
私は、この MOOC
で学んだ技で腕試しをしようと思ってコンテストに挑戦した。そういう実力もつくのがこの
MOOC だ。
自分がそういう力を数週間のうちに獲得できるとは思わなかった、順位は低いけど。

![](./../img/2017-05-17-193748_769x286_scrot.png)

coursera で、Octave 使って Machine Learning
学んで結局何にも応用できずに終わるのならば、 この MOOC
で実践的なことを学んで、Kaggle なり DeepAnalytics に挑戦したほうがいい。

Machine Learning よりも時代は Deep Learning だ。 DeepAnalytics
では、参加者がどの手法や言語をつかったかが分かるのだが、 圧倒的に Python
と DeepLearning が使われている。

この MOOC
は実践的でかつわかりやすいところが素晴らしい。もっと知られるべきだ。
[Udacity で Deep Learning Nanodegree Foundation
を受講してる](https://futurismo.biz/archives/6285)が、この MOOC
ほうがいい。

この MOOC は Part2 もある。Part2 はもうすぐ公開予定。楽しみ！
