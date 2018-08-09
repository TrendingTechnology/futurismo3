---
author: admin
categories:
- Python
- つくってみた
- 機械学習
date: 2017-08-04T08:38:30+00:00
dsq_thread_id:
- 6.0402473e+09
excerpt: Fast Style Transfer
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
- 370
side:
- "y"
tags:
- DeepLearning
- 論文
title: Real-Time(Fast) Style TransferでノートPCのWEBカメラからの動画にゴッホのスタイルをとらんすふぁー
title_view:
- "y"
type: post
url: /archives/=6702
---

fast.ai cutting-edge-dl-for-coders-part2の Lesson9の課題で、Fast Style Transferを実装した。

  * <https://github.com/tsu-nera/cutting-edge-dl-for-coders-part2>

[https://www.youtube.com/embed/tEUtFeF4v8Q?ecver=1]

## はじめに {#-}

前回の続きです。Lesson8ではStyle Transferを試した。

  * [Neural Style Transerで京都渡月橋の写真にゴッホのスタイルをとらんすふぁー | Futurismo][1]

今回は、その続き。

Lesson9の課題は、[Perceptual Losses for Real-Time Style Transfer][2]という論文を読んで理解し、Fast Style Transferを実装せよとのこと。

## 概要 {#-}

前回のNeural Style Transferでは、学習に時間がかかることが問題だった。

この論文で書かれた手法をつかうと、学習したネットワークに画像を入力すると、順伝搬のみの計算でStyle Transferができる。GPUだと一瞬で（CPUだと一瞬じゃなかった)できる。なので、Real-Timeな画像処理＝動画作成ができる。

これはすごい！

ネットワークの全体像は以下のような感じ。論文より引用。

![][3]

**Image Transform Network** と **Loss Network** の２つのネットワークを組み合わせる。

Image Transform Networkのアーキテクチャは、以下のサブドキュメントが詳しい。

  * [JohnsonECCV16Supplementary.pdf][4]

Loss Networkは、VGG-16を用いる(全結合層をとったもの)。Content Loss と Style Lossを足しあわせ（これを Perceptual Lossと定義している）、損失関数とする。やっていることは、Lesson8のStyle Transferに似ている。

この損失関数を使って Image Transform Networkを 誤差逆伝播法で最適化する。Loss Networkは学習させない(公開済みの重みを使う)、Image Transform Networkのみ学習させる。

学習には、MS COCOという画像データを論文では利用していたが、Lesson9では、ImageNetからの抜粋画像（[https://files.fast.ai/data/)を利用した。][5]

ちょっと言葉足らずなので、詳しくは以下の記事を参考に。とても詳しく書いてあって参考になった。感謝。

  * [画像の高速スタイル変換を行う論文の紹介 &#8211; Qiita][6]
  * [リアルタイム画風変換とその未来 : LINE Engineering Blog][7]

## 結果 {#-}

今回も、与えられたJupyter Notebookをコピペして作成。コードの意味が理解できていないという情けない状況。がんばろう

  * 学習: [https://github.com/tsu-nera/cutting-edge-dl-for-coders-part2/blob/master/fast\_style\_transfer.py][8]

ノートPCの webcamから動画を取り込んで、fast style transfer で変換して、再度出力するということをやったが、ノートPCの非力なCPUでは、リアルタイムでは行かなかった。

  * 表示: [https://github.com/tsu-nera/cutting-edge-dl-for-coders-part2/blob/master/fast\_style\_transfer_show.py][9]

<blockquote class="twitter-tweet" data-lang="ja">
  <p lang="ja" dir="ltr">
    RealTime Style Transferできた。ノートPCのCPUで計算してるので、全くリアルタイムではないという(笑) <a href="https://t.co/twQ5HUXnEa">pic.twitter.com/twQ5HUXnEa</a>
  </p>
  
  <p>
    &mdash; tsu-nera@勉強垢 (@tsu_nera_s) <a href="https://twitter.com/tsu_nera_s/status/893311162879574017">2017年8月4日</a>
  </p>
</blockquote>

 [1]: https://futurismo.biz/archives/6694
 [2]: https://arxiv.org/abs/1603.08155
 [3]: https://lh3.googleusercontent.com/Cj6TU6NfHyqhv1GD5mNgMInhlOsbwhou2kVU7TZ9AXK_zqpOPrEzWGgsPA1TN_p7gGaLRPk8ulx82DMvq125B9NoyRNmPvDAdRM5fzUsXivkO-34lR8SFoO-1G5S1cm4uIFQbq3L_sFENVYRWCXIDblsMmyAnQaFVGYyoDYBoiEFVuV-i0B6ALl5khbN9ZKhJsoVZfPgJlcu3kMXfJ8DibL4Z8x0WtfHWDGxS7apZzxbdxfyojvh9paqaA-urbw2Sqb-fQ1TCU_SOoF1sU581HQS2QA82nNzSHg3QTnwy0IvSrgCCAUdAG29SaoNFDi1SYSJCXfwYT03MTnHX-l1e_RWjDlkj3z8p29DlatOABEw_kca3w7xAwTU4mpW2p46jFzRmAwppk_Sd-jGjzHp6A-vbvFjH1kjYVAZitDco0nre6Xsl5_63N7XlAvJQDnIbbM_4gizOANKRoDCvcrCbyThCjt3MI_N9O2eMEY2tdXqu1M-qX6m65ULyzDgPJhOm2moQeXPhi_htQrJpjD5e4ckuI7djzIqpyONacnpaWnb_gYxrbnN8wcqCfzQ51cAmxqTPzzLYEDGbFgPy6j6BzkQAnqDRyAhdQOUDWxWtXEOQvyE89LVj05m=w682-h234-no
 [4]: https://cs.stanford.edu/people/jcjohns/papers/eccv16/JohnsonECCV16Supplementary.pdf
 [5]: https://files.fast.ai/data/)
 [6]: https://qiita.com/dsanno/items/a79a87720239f295234b
 [7]: https://engineering.linecorp.com/ja/blog/detail/105
 [8]: https://github.com/tsu-nera/cutting-edge-dl-for-coders-part2/blob/master/fast_style_transfer.py
 [9]: https://github.com/tsu-nera/cutting-edge-dl-for-coders-part2/blob/master/fast_style_transfer_show.py