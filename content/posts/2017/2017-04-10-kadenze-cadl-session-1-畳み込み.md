---
author: admin
categories:
- 機械学習
date: 2017-04-10T12:58:50+00:00
dsq_thread_id:
- 5.712924e+09
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
- 408
side:
- "y"
tags:
- DeepLearning
- kadenze
title: 'kadenze: CADL Session 1 畳み込み'
title_view:
- "y"
type: post
url: /archives/=6231
---

kadenzeの[Creative Applications of Deep Learning with TensorFlow][1]を受けてます。

以下の投稿と似たような内容になってしまいますが、week1の[課題][2]の結果だけ載せます。

  * [画像の平均作成、標準化、畳み込みの結果をもとにソート【kadenzeCADL 1】 &#8211; Qiita][3]

以下のサイトのようなことを実装した。

  * [Image Kernels explained visually][4]

### 画像データ１００枚収集

女優の画像をスクレイピングして集めてきました。

[<img class="aligncenter size-full wp-image-6233" src="https://futurismo.biz/wp-content/uploads/dataset.png" alt="" width="1011" height="1011" />][5]

### 画像の平均を計算

100枚の画像の平均をとった画像が以下です。なんとなく、茶髪のショートカットの女性に見えます。

### [<img class="aligncenter size-full wp-image-6236" src="https://futurismo.biz/wp-content/uploads/mean.png" alt="" width="100" height="100" />][6]畳み込み用のカーネルで畳み込み

小さいのだけれども、16&#215;16のカーネルで100&#215;100の画像を捜査して畳み込んでいく。

[<img class="size-full wp-image-6235 alignleft" src="https://futurismo.biz/wp-content/uploads/kernel.png" alt="" width="16" height="16" />][7]

&nbsp;

畳み込みのイメージを得るには、[このサイト][4]で遊んで見るのがいい。

畳み込み結果は以下の通り。気持ち悪くなってしまいました。

[<img class="aligncenter size-full wp-image-6232" src="https://futurismo.biz/wp-content/uploads/convolved.png" alt="" width="1011" height="1011" />][8]

 [1]: https://www.kadenze.com/courses/creative-applications-of-deep-learning-with-tensorflow/info
 [2]: https://github.com/pkmital/CADL/blob/master/session-1/session-1.ipynb
 [3]: https://qiita.com/tackey/items/c340f01ce64374129452
 [4]: https://setosa.io/ev/image-kernels/
 [5]: https://futurismo.biz/wp-content/uploads/dataset.png
 [6]: https://futurismo.biz/wp-content/uploads/mean.png
 [7]: https://futurismo.biz/wp-content/uploads/kernel.png
 [8]: https://futurismo.biz/wp-content/uploads/convolved.png