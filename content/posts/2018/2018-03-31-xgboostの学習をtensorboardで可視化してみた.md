---
author: admin
categories:
- Python
- 機械学習
date: 2018-03-30T16:27:51+00:00
excerpt: xgboostの学習をtensorboardで可視化してみた
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
- 59
side:
- "y"
tags:
- xgboost
title: xgboostの学習をtensorboardで可視化してみた
title_view:
- "y"
type: post
url: /archives/=6957
---

## はじめに {#はじめに}

Google の TensorBoardは、TensorFlowの学習をクールに可視化する。今回、xgboostや scikit-learnの学習結果を、TensorBoardで可視化できないかなと調べたところ、方法を見つけた。

## tensorboard_logger {#tensorboard_logger}

tensorboard_loggerをつかうと、tensorboardで表示できる形式でログ出力できる。

  * <https://github.com/TeamHG-Memex/tensorboard_logger>

これとxgboostの callbacksの機能を利用して学習の結果を可視化する。



[<img src="https://i.gyazo.com/9da25151162b5e5db0106a55439ef647.png" alt="https://gyazo.com/9da25151162b5e5db0106a55439ef647" width="378" />][1]

 [1]: https://gyazo.com/9da25151162b5e5db0106a55439ef647