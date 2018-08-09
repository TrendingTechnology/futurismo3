---
author: admin
categories:
- C++
- 日記
date: 2013-08-19T15:32:42+00:00
dsq_thread_id:
- 3.7699558e+09
pvc_views:
- 1556
tags:
- gtest
title: 夏休みの自由研究 『Console Karajan』
type: post
url: /archives/=1790
---

夏休みが4日間あったので、なにか自由研究をしてみようと思いました。

Kinectを使ってクラシック音楽を操るソフトをつくろうとしたのだけれども、結局Kinectをつかいこなすまで開発が進まなかったorz。というわけで、コンソールバージョンの日記でも。

[//www.youtube.com/embed/-9tmgcL0V-Y?rel=0]

実は、もともとゴールデンウィークにつくってたものだけれども、ゴールデンウィークの３日間で完成せず、夏休みの４日間でも完成せず。もう1週間もかけてるのに、一向に開発はすすまず。はたして、次はお正月か？

音源の制御には、VLCのAPIを利用。

  * <a href="https://futurismo.biz/archives/1291" target="_blank">音楽の速度をコマンドラインから自由自在に操れる！多機能すぎるオープンソースの音楽再生ソフト『VLC メディアプレイヤー』 | Futurismo</a>

テンポの変更検出は、4拍子ごとに実施しているけど、これだと精度が悪すぎた。また、急激にテンポを変更すると、きいていて違和感が。今後の課題。

こっちが本物のカラヤン。カックイイ(・∀・)

[//www.youtube.com/embed/FJ96i-m6cBk?rel=0]

ちなみに、テストはGoogleTest/GoogleMockを使ってバリバリ実施。むしろ、こっちが大変だった。GoogleTestはファイル操作系のwindows APIと相性が悪くて、これだけで半日潰れて、そのままうつになって、一日潰れた。

[//www.youtube.com/embed/lzsrTv3UA-I?rel=0]