---
author: admin
categories:
- 機械学習
date: 2017-07-09T08:58:12+00:00
dsq_thread_id:
- 5.9752463e+09
excerpt: CartPole問題にDQN(numpy only)で挑戦したけど解けなかった
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
- 321
side:
- "y"
tags:
- DeepLearning
- 強化学習
title: CartPole問題にDQN(numpy only)で挑戦したけど解けなかった
title_view:
- "y"
type: post
url: /archives/=6612
---

前回の続き。

  * [OpenAI Gymの CartPole問題をDQNで解いた | Futurismo][1]

前回は、Kerasを利用したのだが、今回は numpyだけで実装してみた。[ゼロから作るDeepLearning][2]を大いに参考にした。

  * Kerasと同じことを実装はずなのに、結果が同じにならない。
  * エピソードを重ねても生存率が頭打ちになって、伸びない。
  * 調子のいいときと調子の悪いときがある。エピソードの開始時に運良く生存すると、その後の生存率が上がる。

## 結果

解けなかった。

<https://gym.openai.com/evaluations/eval_iNrsSMkNSxW1wGF0b1lspg>

## コード

 [1]: https://futurismo.biz/archives/6610
 [2]: https://www.oreilly.co.jp/books/9784873117584/