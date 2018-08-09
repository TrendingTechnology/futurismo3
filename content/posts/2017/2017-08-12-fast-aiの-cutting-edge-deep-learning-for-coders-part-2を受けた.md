---
author: admin
categories:
- MOOC
- Python
- 機械学習
date: 2017-08-12T09:51:35+00:00
dsq_thread_id:
- 6.060266e+09
excerpt: fast.aiの Cutting Edge Deep Learning For Coders, Part 2を受けた
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
- 568
side:
- "y"
tags:
- DeepLearning
- Keras
- PyTorch
title: fast.aiの Cutting Edge Deep Learning For Coders, Part 2を受けた
title_view:
- "y"
type: post
url: /archives/=6721
---

fast.aiが提供する ディープラーニングのオンライン無料講座、**Cutting Edge Deep Learning for Coders** を受けたのだが、難しくて後半から挫折。。

  * [Deep Learning For Coders—36 hours of lessons for free][1]

とてもいい講座なので、布教のためにも講座の紹介と、各レクチャーの内容を書いておくことにする。

これは、fast.aiが提供するDeep Learning コースの Part2に当たる。Part1の感想は以下。

  * [Fast.AI の Practical Deep Learning for Coders Part1 を受けた | Futurismo][2]

## 講座の紹介 {#-}

紹介記事: [Cutting Edge Deep Learning for Coders—Launching Deep Learning Part 2 · fast.ai][3]

### Cutting Edge(最先端)の意味〜論文を読め！ {#cutting-edge-}

Part1のPracticalのテーマは、Kagglerになれ、ということだった。

Part2では、Cutting Edge = 最先端の手法が紹介される。Cutting Edgeとはなにか？それは、

**論文を読め!!** ということだ。

そのため、最先端を追いかけるために、arXivの論文を読むことが課題として課せられる。論文を読み、その内容を実装できるスキルをみにつけることが求められる。

論文というものに今まで触れたことがないので、かなりびっくりだ。

### Kerasのバックエンドが theanoからTensorFlowに変更、PyTouchも使おう {#keras-theano-tensorflow-pytouch-}

Part1と同様に、Part2も丁寧に書かれたJupyter Notebookが提供されて、それにそってレクチャーが進む。

このJupyter Notebook, Keras と PyTouch の両方で実装されている。
  
なので、PyTouchを使いたいひとは、そっちを使うことができる。

### Part1より難しい・・・ {#part1-}

Part1には、充実したwikiがあったのだが、Part2にはWikiがない。

さらには、英語字幕もない。自分は、英語があまり聞き取れないので、Part1での勉強スタイルは、動画で雰囲気を掴んだあと、wikiを熟読してなんとか理解するものだった。今回、それができない。

また、内容的にも難しさが上がっている。Part1でやったことはすべてわかっている前提ではじまるので、Part1を飛ばしてPart2からやるのは厳しいと思う。

### 目安は100時間以上 {#-100-}

正直、Lesson12くらいからよくわからなくなったのと、急いで終わらせる必要が出てきたので、、後半はあまり時間をかけなかった。

それでも、100時間はかかった。真面目にやったら150時間？はかかると思う。

ちなみに、Part1は真面目にやって100時間かかった。

## レクチャーメモ {#-}

### Lesson 8: Artistic Style {#lesson-8-artistic-style}

まずは、Part1でやったことの紹介と、これからやるPart2の紹介から始まる。

Part2では、最先端を追いかけるために論文を読め！と言われる。[Mendeley][4]という論文管理ソフトが紹介される。

そしてStyle Transferの論文が紹介されてこれを理解するように、という課題が出される。

  * [[1508.06576] A Neural Algorithm of Artistic Style][5]

はじめから意味不明なコードとハイレベルな難易度で戸惑う。
  
やってけるかな？？もうダメだ！と思ったら、丁寧な日本語解説記事を見つけて救われる＼(^o^)／

  * [Neural Style Transfer: Prismaの背景技術を解説する][6]

これらも参考になる。

  * [画風を変換するアルゴリズム | Preferred Research][7]
  * [FADL2 L8: ‘Neural’ Artistic Style Transfer – Towards Data Science – Medium][8]

<blockquote class="twitter-tweet" data-lang="ja">
  <p lang="ja" dir="ltr">
    Style Transfer できた。京都の渡月橋にゴッホの星月夜をとらんすふぁー。 <a href="https://t.co/nFjtZQ3HJ4">pic.twitter.com/nFjtZQ3HJ4</a>
  </p>
  
  <p>
    &mdash; tsu-nera@勉強垢 (@tsu_nera_s) <a href="https://twitter.com/tsu_nera_s/status/892307566625038337">2017年8月1日</a>
  </p>
</blockquote>



なんとか実装した。

  * [Neural Style Transerで京都渡月橋の写真にゴッホのスタイルをとらんすふぁー | Futurismo][9]

### Lesson9: GENERATIVE MODELS {#lesson9-generative-models}

[Perceptual Losses for Real-Time Style Transfer][10]という論文の内容が説明される。この技術は、Super-Resolutionという画質を良くする技術と、Real-Time Style Transfer という Neural Style Transferを高速化した技術の、両方に応用できる。

講義では、Super-Resolutionが取り上げられる。課題は、論文を読んで理解し、Fast Style Transferを実装せよとのこと。またもやもうダメだと思ったら、解説記事を発見。

  * [画像の高速スタイル変換を行う論文の紹介 &#8211; Qiita][11]
  * [リアルタイム画風変換とその未来 : LINE Engineering Blog][12]
  * [JohnsonECCV16Supplementary.pdf][13]

なんとか実装した。

  * [Real-Time(Fast) Style TransferでノートPCのWEBカメラからの動画にゴッホのスタイルをとらんすふぁー | Futurismo][14]

ノートPCの webcamから動画を取り込んで、fast style transfer で変換して、再度出力するということをやったが、ノートPCの非力なCPUでは、リアルタイムでは行かなかった。

<blockquote class="twitter-tweet" data-lang="ja">
  <p lang="ja" dir="ltr">
    RealTime Style Transferできた。ノートPCのCPUで計算してるので、全くリアルタイムではないという(笑) <a href="https://t.co/twQ5HUXnEa">pic.twitter.com/twQ5HUXnEa</a>
  </p>
  
  <p>
    &mdash; tsu-nera@勉強垢 (@tsu_nera_s) <a href="https://twitter.com/tsu_nera_s/status/893311162879574017">2017年8月4日</a>
  </p>
</blockquote>



### Lesson10: MULTI-MODAL & GANS {#lesson10-multi-modal-gans}

DeViSEという論文の紹介と実装。

  * [DeViSE: A Deep Visual-Semantic Embedding Model][15]
  * [courses/imagenet_process.ipynb at master · fastai/courses][16]

画像から関連する単語を抽出する試み。ResNetとword2vecを組み合わせる。
  
あまり理解していない。

Pythonで大規模データ(996433個の画像！)を扱うTipsとかも紹介される。ImageNetの大量画像データをスレッドやbcolzを使ってリサイズしたりする。あまりやりたくなかったので、これはJupyter Notebookを読むだけにした。

後半は、GANの説明。オリジナルのGAN, DCGANが説明される。あまりよい結果が出ない。そこで、WGANが紹介される。WGANはPyTorchで実装も公開されているとのことで、ここで[PyTorch][17]登場。

課題は、与えられたPyTouchのWGANを修正して、改善を加えること。

PyTorchとWGANという大きな課題を前に、途方にくれる。

まずは、GAN, DCGAN として、WGANというステップを踏んで学習することにした。

  * [PyTorchを初めて使ってみた！GANを実装 | Futurismo][18]
  * [PyTorchでDCGAN(MNIST) | Futurismo][19]

WGANに進んで論文読み始めたけど、この論文難しい。。数式とその証明が難しい。レクチャーでも、この論文は難しいと言っていた。先を急ぐので、WGANは後回しにすることにした。

### Lecture11: MEMORY NETWORKS {#lecture11-memory-networks}

前半は、最新の研究成果を追うためには論文を読むことを改めて強調される。そして、最近の研究成果を元にCNNを改良するためのたくさんのTipsとpaperが紹介される。

そのあと、k-means、Mean shiftというクラスタリング手法について説明がある。なんでここでクラスタリングなのかなと思ったら、PyTorchを使ってGPUの恩恵を受け、計算を高速化する方法が紹介される。

PyTorchはNumpyのようにデータを扱えるがブロードキャスト機能がないとのこと。そうなんだと思っていたら、v0.2.0で昨日追加された模様！[link][20]

最後に、Memory Network。これは、Facebook発のシンプルな自動応答のアルゴリズム。詳しい日本語の解説記事があった。

  * [論文解説 Memory Networks (MemNN) &#8211; ディープラーニングブログ][21]
  * [NIP2015読み会「End-To-End Memory Networks」][22]

Lecture11から先は、明確なassignmentsがなくなり、課題としてなにをすればいいか悩む。正直、後半は完璧な理解は求めず、流しつつ進めた。とりあえず、与えられたJupyter Notebookと論文を読んで理解することにした。

### Lecture12: ATTENTIONAL MODELS {#lecture12-attentional-models}

k-meansの説明から始まる。Tensorflowでk-meansを実装する説明。k-meansについてよく理解していないので、ここの動画は飛ばしてしまった。(40分)

Attentional Modelsの説明とkeras実装が紹介される。はじめにencoder-decoderモデルを紹介して、これでは長文になるにつれて精度がでないねといって、Attentionモデルが出てくる。RNNや Embeddingsを忘れてしまったので、よくわからなかった。そういう人は、Lesson4,5,6を復習してねとのこと。まいったな。いよいよ [詳解 ディープラーニング][23]を読んでみようかな。評判いいし。

(話は脇道にそれて、このDLコースのPart3はないよ、強化学習はやらない。代わりに、Part0を作って Practical machine learningをやるかも、とのこと。期待)

次は、いよいよCutting-Edgeな技術、ニューラル翻訳。予告編として、以下の論文が紹介される。

  * [[1412.7449] Grammar as a Foreign Language][24]

### Lecture13: NEURAL TRANSLATION {#lecture13-neural-translation}

ニューラル翻訳、英語からフランス語への翻訳、実はUdacityのDLNDで同じ課題をやったことがあるのだった。このときは、TensorFlowをつかった。TensorFlowは Seq2Seqのライブラリが充実していて、なんかよくわからないまま、講義のコピペで実装できてしまった。

  * [tsu-nera/dlnd-language-translation][25]

fast.aiでは、KerasとPyTorch両方の実装が提供されている。よし学び直そうと思ったけど、やっぱり理解できなかったorz。とばし。

後半は、 Densenetの紹介。

  * [[1608.06993] Densely Connected Convolutional Networks][26]

<blockquote class="twitter-tweet" data-cards="hidden" data-lang="ja">
  <p lang="ja" dir="ltr">
    DenseNetの略をディズニーコネクテッドCNNと勘違いして、なんだかワクワクした。<a href="https://t.co/XVDyu5NamD">https://t.co/XVDyu5NamD</a>
  </p>
  
  <p>
    &mdash; tsu-nera@勉強垢 (@tsu_nera_s) <a href="https://twitter.com/tsu_nera_s/status/895280093211246596">2017年8月9日</a>
  </p>
</blockquote>



### Lecture14: TIME SERIES & SEGMENTATION {#lecture14-time-series-segmentation}

Final Lecture！

Kaggleのコンペを使って時系列データの扱いを学ぶ。Part1は主に画像データの扱いがメインだった。カグルマスターのKaggle攻略法講座が久しぶりに帰ってきた！！・・・が、真似できる気がしなかった。こうやって、カグルマスターは前処理をするのかと思った。

  * [Rossmann Store Sales | Kaggle][27]
  * [ECML/PKDD 15: Taxi Trajectory Prediction (I) | Kaggle][28]

[カテゴリカルデータをembeddingを使ってニューラルネットにぶち込む手法][29]が参考になった。これを参考にして、自分は入門コンペのTitanicとか、House Prediction とかからはじめよう。Taxiコンペは Bengioさんが[論文][30]かいて手法を解説しているとか。

次に、segmentation(画像データをセグメントでわける処理)を学ぶ。これは、DenseNetを改良した、Transfer Learningに似たネットワークが使われる。

最後に、さらなる高みを目指して

  * コードを書こう！
  * Paperを読もう！
  * ブログを書こう！

と言われる。

ここまで、長い長い旅だった。英語力がもう少しあればと思うときが何度もあった。このPart2で得られた最も多きな、恩恵は、PyTorchと論文に触れたことだった。未消化な部分や飛ばした部分がPart2は多いので、復習しよう。

## Part2で読んだPapers {#part2-papers}

論文は[Mendeley][4]で管理するのがすごく便利。

  * [[1508.06576] A Neural Algorithm of Artistic Style][5]
  * [[1603.08155] Perceptual Losses for Real-Time Style Transfer and Super-Resolution][10]
  * [DeViSE: A Deep Visual-Semantic Embedding Model][15]
  * [[1406.2661] Generative Adversarial Networks][31]
  * [[1511.06434] Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks][32]
  * [[1701.07875] Wasserstein GAN][33]
  * [[1503.08895] End-To-End Memory Networks][34]
  * [[1412.7449] Grammar as a Foreign Language][24]
  * [[1608.06993] Densely Connected Convolutional Networks][26]
  * and more &#8230;

他にも、たくさん論文が紹介されたのだけれども、後半紹介された論文は、あまり読んでない。。。

 [1]: https://course.fast.ai/part2.html
 [2]: https://futurismo.biz/archives/6440
 [3]: https://www.fast.ai/2017/07/28/deep-learning-part-two-launch/
 [4]: https://www.mendeley.com/
 [5]: https://arxiv.org/abs/1508.06576
 [6]: https://elix-tech.github.io/ja/2016/08/22/art.html
 [7]: https://research.preferred.jp/2015/09/chainer-gogh/
 [8]: https://medium.com/towards-data-science/fadl2-l8-neural-artistic-style-transfer-a2e6780ab17b
 [9]: https://futurismo.biz/archives/6694
 [10]: https://arxiv.org/abs/1603.08155
 [11]: https://qiita.com/dsanno/items/a79a87720239f295234b
 [12]: https://engineering.linecorp.com/ja/blog/detail/105
 [13]: https://cs.stanford.edu/people/jcjohns/papers/eccv16/JohnsonECCV16Supplementary.pdf
 [14]: https://futurismo.biz/archives/6702
 [15]: https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/41869.pdf
 [16]: https://github.com/fastai/courses/blob/master/deeplearning2/imagenet_process.ipynb
 [17]: https://pytorch.org/
 [18]: https://futurismo.biz/archives/6707
 [19]: https://futurismo.biz/archives/6710
 [20]: https://pytorch.org/docs/0.2.0/notes/broadcasting.html
 [21]: https://deeplearning.hatenablog.com/entry/memory_networks
 [22]: https://www.slideshare.net/unnonouno/nip2015endtoend-memory-networks
 [23]: https://amzn.to/2vNM7x6
 [24]: https://arxiv.org/abs/1412.7449
 [25]: https://github.com/tsu-nera/dlnd-language-translation
 [26]: https://arxiv.org/abs/1608.06993
 [27]: https://www.kaggle.com/c/rossmann-store-sales
 [28]: https://www.kaggle.com/c/pkdd-15-predict-taxi-service-trajectory-i
 [29]: https://arxiv.org/pdf/1604.06737.pdf
 [30]: https://arxiv.org/abs/1508.00021
 [31]: https://arxiv.org/abs/1406.2661
 [32]: https://arxiv.org/abs/1511.06434
 [33]: https://arxiv.org/abs/1701.07875
 [34]: https://arxiv.org/abs/1503.08895