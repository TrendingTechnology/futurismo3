---
author: admin
categories:
- Python
- 機械学習
date: 2017-06-30T20:15:46+00:00
dsq_thread_id:
- 5.9547054e+09
excerpt: LEGO Mindstormsの crawler を強化学習で前に進むことを学習させた
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
- 480
side:
- "y"
tags:
- 強化学習
title: LEGO Mindstormsの crawler を強化学習で前に進むことを学習させた
title_view:
- "y"
type: post
url: /archives/=6596
---

LEGO x 強化学習の初の成果が出た。

強化学習の古典的問題、crawler に Q-Learningを適用して前に進むことを学習させたのだ
  
。

まずは見るのが早い。一つ目の動画は学習を開始して間もない動画。ランダムに尾をうごかして、運良く前にすすんでいることがわかる。

[https://www.youtube.com/embed/UD0_tK9DToc?ecver=1]

次に、10分ほど学習させた結果が以下。明らかに、意図して前にすすんでいることが分かる。

[https://www.youtube.com/embed/El13ZG2m_wY?ecver=1]

今回利用したアルゴリズムはQ-Learning。
  
赤外線センサで壁との位置を計測して、壁に塚づいたら報酬を与える。

以下が今回のソースコードです。