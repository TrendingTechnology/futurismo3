---
author: admin
categories:
- Python
- 機械学習
date: 2017-07-12T13:57:09+00:00
dsq_thread_id:
- 5.983493e+09
excerpt: USDJPYのヒストリカルデータをダウンロードしてDQN Agentを動かしてみた
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
- 423
side:
- "y"
tags:
- FX
- 強化学習
title: USDJPYのヒストリカルデータをダウンロードしてDQN Agentを動かしてみた
title_view:
- "y"
type: post
url: /archives/=6630
---

前回の続き。

  * [正弦曲線にしたがう為替の値動きについてDQNでバックテストをしてみた | Futurismo][1]

## USDJPYでバックテスト {#usdjpy-}

今回は、DukascopyからUSDJPYのヒストリカルデータをダウンロードして、DQN Agentを動かしてみました。

  * <https://www.dukascopy.com/swiss/english/marketwatch/historical>

すごく苦労して、なんとかDQN Agentに学習させることに成功した。

ロジックは、前回とほぼ同じです。今回の Jupyter Notebookは以下。

  * <https://gist.github.com/tsu-nera/d801fab3100c8c2f29b0ed6927c4355a>

## 苦労した点 {#-}

  * はじめ、keras-rlで testメソッドを走らせたあとに、rewardが0になってしまった。いくら論理を見直しても、0になってしまう。
  * 波の形で学習できるときとできないときがあることが分かった。たとえば、サイン波は学習できるがコサイン波は学習できない。
  * 標準化を適用して、なるべくサイン波に近い形にヒストリカルデータを編集した。

 [1]: https://futurismo.biz/archives/6615