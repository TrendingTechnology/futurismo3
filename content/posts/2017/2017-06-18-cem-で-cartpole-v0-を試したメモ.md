---
author: admin
categories:
- 機械学習
date: 2017-06-18T07:51:00+00:00
dsq_thread_id:
- 5.923507e+09
excerpt: CrossEntropy Method(CEM)をつかって、OpenAI gym の CartPole-v0 を試した
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
- 446
side:
- "y"
tags:
- 強化学習、OpenAI
title: CEM で CartPole-v0 を試したメモ
title_view:
- "y"
type: post
url: /archives/=6549
---

はじめに
========

前回の続き。前回はなんの戦略もなく、ただ試した。

-   [OpenAI Gym の CartPole-v0 を試したメモ |
    Futurismo](https://futurismo.biz/archives/6481)

今回は、CrossEntropy Method(CEM)をつかって、OpenAI gym の CartPole-v0
を試した。

CrossEntropy Method(CEM)について
================================

クロスエントロピー法は、2006
年に登場したモンテカルロ法を応用したアルゴリズム。

-   [Cross-entropy method -
    Wikipedia](https://en.wikipedia.org/wiki/Cross-entropy_method)

レアなイベントについてサンプリングすることで（政策改善）、
エリートのみであらたなポリシーをつくる（政策評価）するところに特徴がある。

自分のイメージでは、ランダムにシミュレーションして、
ラッキーな場合のみを選び出して、ポリシーに反映させていくように考えている。

Berkeley の John Schulman さん曰く、このアルゴリズムは、

-   Evolutionary algorithm
-   Works embarrassingly well

と、激ホメしている。

<iframe width="560" height="315" src="https://www.youtube.com/embed/aUrX-rP_ss4" frameborder="0" allowfullscreen></iframe>

アルゴリズム
------------

Schulman さんの講義スライドより引用。

-   <https://rl-gym-doc.s3-website-us-west-2.amazonaws.com/mlss/2016-MLSS-RL.pdf>

![](./../img/2017-06-19-203102_582x382_scrot.png)

この gist の資料も参考になった。以下、アルゴリズムの定義を引用。

-   [nv.monitor.clos](https://gist.github.com/kashif/5dfa12d80402c559e060d567ea352c06)

平均(mean)とガウシアンの共分散(sigma)を初期化し、n\_iter
回以下を繰り返す。

1.  batch\_size 分の theta を mean と sigma からなるガウス分布から集める
2.  noisy evaluation を実施して、これらの theta からの報酬を得る
3.  top p% のサンプルを選択する（これをエリート集合と呼ぶ）
4.  エリート集合の mean と sigma で 現在の値を更新する。

Lab1
====

Schulman さんの 2016 年 Deep Reinforcement Learning
サマースクールの課題をやる。

クロスエントロピーメソッドで cartpole
を攻略するためのスターターコードがある。

-   [Lab1](https://rl-gym-doc.s3-website-us-west-2.amazonaws.com/mlss/lab1.html)

Code
----

スターターコードの穴埋め部分を埋めてみた。[nv.monitor.clos](https://gist.github.com/kashif/5dfa12d80402c559e060d567ea352c06)
のコードを参考にした。

<script src="https://gist.github.com/tsu-nera/1ab5e393f7f0bcafbee5b71909adf286.js"></script>

Result
------

結果は、OpenAI Gym にアップロードした。

-   <https://gym.openai.com/evaluations/eval_lbLXlKDwQdGL09MrntdhDA>

132.20 ± 6.42. という結果で、合格ラインの 195
には程遠いが、前回よりはずっと改善した。

embarrassingly だ！

参考リンク
==========

-   Practical RL week1:
    <https://github.com/yandexdataschool/Practical_RL/tree/master/week1>
-   Article about CEM in general -
    <https://people.smp.uq.edu.au/DirkKroese/ps/eormsCE.pdf>
-   Article about CEM for optimization -
    <https://people.smp.uq.edu.au/DirkKroese/ps/CEopt.pdf>
-   Article about CEM in reinforcement learning -
    <https://www.aaai.org/Papers/ICML/2003/ICML03-068.pdf>
