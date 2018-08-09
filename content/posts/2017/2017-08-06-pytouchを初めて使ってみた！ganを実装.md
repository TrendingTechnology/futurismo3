---
author: admin
categories:
- Python
- 機械学習
date: 2017-08-06T07:36:14+00:00
dsq_thread_id:
- 6.0449434e+09
excerpt: PyTorch で GANを実装
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
- 832
side:
- "y"
tags:
- DeepLearning
- PyTorch
- 論文
title: PyTorchを初めて使ってみた！GANを実装
title_view:
- "y"
type: post
url: /archives/=6707
---

fast.ai Lesson10のテーマはGAN.

  * [Deep Learning For Coders—36 hours of lessons for free][1]

課題は、PyTorchで書かれたWGANを改善せよとのこと。さすがは、Cutting Edgeだ。GANもDCGANも通り越して、WGANに行ってしまう。

PyTorchもGANもよくわからない自分にはツライ。まずは、WGANの前にPyTorchとGANからはじめることにした。

まずは、GANの開祖である以下の論文に目を通した。

  * [[1406.2661] Generative Adversarial Networks][2]

## PyTorch first inpression {#pytorch-first-inpression}

軽くPyTorchのチュートリアルと fast.aiの [Jupyter Notebook][3]を眺めたあと、PyTorchに挑戦！numpyを扱うみたいで書きやすい。

PyTouchの特徴は以下のようだ。

<blockquote class="twitter-tweet" data-lang="ja">
  <p lang="ja" dir="ltr">
    PyTorchのメリットは２つらしい、動的計算グラフと命令型プログラミング。PyTorch in 5 Minutes <a href="https://t.co/pLCGTB4Eed">https://t.co/pLCGTB4Eed</a> <a href="https://twitter.com/YouTube">@YouTube</a>さんから
  </p>
  
  <p>
    &mdash; tsu-nera@勉強垢 (@tsu_nera_s) <a href="https://twitter.com/tsu_nera_s/status/893781472670130177">2017年8月5日</a>
  </p>
</blockquote>



Kerasだと、簡単に書くために細かい部分はライブラリに覆い隠されているけれども、PyTorchは多少なりともむき出しになっているので、細かいカスタマイズがしやすそうない印象を受けた。Kerasと PyTorch、両方使えるようになりたい。

## GANを実装してみる {#gan-}

GANの実装は、Kerasバージョンがfast.aiから提供されている。

  * <https://nbviewer.jupyter.org/github/fastai/courses/blob/master/deeplearning2/DCGAN.ipynb>

これをPyTorchに置き換える。パラメータを参考にしつつ、また [公式の DCGANチュートリアル][4]の実装も参考にしつつ、実装してみた。

  * <https://nbviewer.jupyter.org/github/tsu-nera/cutting-edge-dl-for-coders-part2/blob/master/vanilla_gan.ipynb>

![][5]

<font size="15">ぜんぜんダメじゃん、ジェレミー先生！</font>

これを **mode collapse** というらしい。

なんど試してみても、損失関数の D値が0に収束、G値が大きくなっている。

Dは Discriminaterを表し、GのGeneratorが生成したものが本物か偽物かを判定する役割があるのだが、今起こっている状況は、Generator が生成した画像がほとんどの確率で偽物と判定されている。

## GANを改善してみる {#gan-}

How to Train a GANというNIPS2016での発表があって、ここにGANの改善方法がまとまっている。

  * <https://github.com/soumith/ganhacks>

[https://www.youtube.com/embed/X1mUN6dD8uE]

以下を試してみた。

  * ReLU の 代わりにLeakyReLUを使う。
  * BatchNormalizationを使う。
  * Adam の 学習率を小さくする。
  * ノイズは正規分布からサンプリングする。
  * ネットワークのニューロン数を変更する。

結果。

  * <https://nbviewer.jupyter.org/github/tsu-nera/cutting-edge-dl-for-coders-part2/blob/master/vanilla_gan2.ipynb>

![][6]

おっ、それらしく古代文字っぽいものが浮き出てきたぞ。

単純なGANだと、あまり成果がでないことはわかっているので、実験は早めに切り上げて次のステップ DCGANに進むことにする。

 [1]: https://course.fast.ai/lessons/lesson10.html
 [2]: https://arxiv.org/abs/1406.2661
 [3]: https://github.com/fastai/courses/blob/master/deeplearning2/pytorch-tut.ipynb
 [4]: https://github.com/pytorch/examples/tree/master/dcgan
 [5]: https://lh3.googleusercontent.com/Y2FrrkVyEOMVCyWyEAKrNNEhSvetHtCgiNMOIce20TGwuGujk9DN85qZ3_8A7kC4z_3D9bfup6H-qePBiVmM9F7duzPFeOYEhus0-GDfcg9sjysKqScWItuVAFHTxzLKLSBecpwZu0icN6Wypy4FoIHRK3x_BHlWteFl84JHRkNL4jk_qfLGV89XjTpFYNaFfg18PIJv25wBDuUoM2FJCttZIqKO2HzkBu1JGqEgWaduGfi8W2ceSWflipBZTGYojMkVjvsCASV19Xkb30kZi3jlk_t_QU2AA7aG_d2gDEawK7N8Bjs8yvrtdt-8gTDz5WVn4p_hrWvSOr7L70kV6FoIn8HbHT_r-UzRG2xbD_iqSp1fO3L__q6oWBRuU5Zvo428JFfLWN1bu8y6ZHXpxuVxD-5kim-PYg4jPDdTCNoUYfzatbfb01gO1GfviaPlFPXsM_rZpGNw7G6PHPtMbLI58CwTUNbUUGk8hUjkV-VHg5MMX708nwmAUTDAyx9WEln76G13WmaeGqKU7MMmHlLGF4SMeagDckp4qNlZhw2fZpt-96rC1dRQNON7LxfwrvnPPmx2Zf6RYPikdA7zAWkrQkLcwxIOPkqYBJqdAHd3GKNOCy-LtFhT=w261-h252-no
 [6]: https://lh3.googleusercontent.com/hQzmq_027W-cNROG7G2JVT2g2JN-_Bs-DGU4td3bdjuVHW4T-NWe5QnPZjyI6-Z5q9VogL0Pa4OcML4feZqtwdhG1UYcy1RnUkZl-mChH2RFr1_oj0gDHxiWrF2oqUwDJpM3BFa6siZcsvp0ojaWYCYkoXIYjSJO3offY75e0fdPMBHPPhwYTH_CwRIA2MYS8_f4TBbNi879MJHxsbj_LOeD_ahNXp9R3VZli4WxHUUNQlXMyjjpK5NE1K0MnFtyV3et2oX6Tg96Oxjq8WetSHXPoXh30cAiSa3BXXqo1kJVC_dXc45aLXYDMpG0Y2nxe5gTtjnFb-iwXjRBG05Gop0n3Uwmb6osGTfBYl0seFFbFrviWjOlFoBS6BEt8C7TkHbfQ_OvA469K2Lq4yTnUOC3RXzOrrsJlNb0gXvIKQYqc_yPJ_ZwXFT5SRDE8_RhW0WJv3M4utOjn5fHCrcQnV9aPqlVU_W6zz24JvxSXnG823eFlGO4QSu_7lnPPpYPuaYOKlHa017KoL8SPUYzJCYxqNJ4ZEvhsuk9qM6rwRNMb-z578zHH-xHwovof2z94si81OPggHiBZ52hM4y4jvFRbW__2lbUfVL1z8lcdRapKO9tFOWrtlXs=w261-h252-no