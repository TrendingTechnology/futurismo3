---
author: admin
categories:
- 数学
- 日記
- 機械学習
date: 2017-07-27T15:30:11+00:00
dsq_thread_id:
- 6.0202885e+09
excerpt: Deep Learning に挑んだ半年間、そして今後の勉強計画について
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
- 516
side:
- "y"
tags:
- DeepLearning
title: Deep Learning に挑んだ半年間、そして今後の勉強計画について
title_view:
- "y"
type: post
url: /archives/=6682
---

## はじめに {#-}

半年くらい前、まだ機械学習についてなにも知らなかったときに、書いた記事が炎上してとても恥ずかしい思いをした（記事は非公開にしました）。

この記事はただの日記です。

  * [結局、機械学習に必要な数学ってなに？ | Futurismo][1]

## この半年で取り組んだこと {#-}

この半年で、機械学習の勉強はせずに、ディープラーニングと強化学習の勉強をした。

### 3月〜7月 {#3-7-}

上記記事を書いてモチベーションを高め、さあ機械学習のための数学をやろうと意気込んでいたのだけれども、すぐに気が変わって、機械学習の王道を進まずにディープラーニングに突っ込んでいった。なぜなら、Udacity で Deep Learning Nanodegree Foundationという4ヶ月の講座を受講し始めたからだ。

  * [Udacity で Deep Learning Nanodegree Foundation を受講してる | Futurismo][2]

この講座に 3月から7月までの4ヶ月間取り組むことによって、

  * Deep Learningという学問分野の概要を学んだ(NN, CNN, RNN, GAN)
  * TensorFlowで実装できるようになった。

このDLND、超初心者向けな講座で、手取り足取り Deep Learningを教えてくれた。なので、数学が必要なかった(笑) あれ、おかしいな、ディープラーニングって、もしかして数学あんまり必要ない？？統計とかほとんど出てこないよ。

### 4月〜5月 {#4-5-}

また、同時進行で Fast.aiのPractical Deep Learning for Coderという講座も受講したのだが、これがまたすごくいい講座。

  * [Fast.AI の Practical Deep Learning for Coders Part1 を受けた | Futurismo][3]

この講座の理念は、Deep Learningの敷居を下げて、誰もがDeep Learningを簡単に使えるようにすること。もちろん、ここでも難しい数学は抜き！そして、ここで **Keras** という Deep Learningをおそろしく簡単にするライブラリを知ってしまう。これをしったら、numpyの実装はおろか、tensorflowですら面倒に感じてしまう。この講座によって、

  * Kerasでバリバリコーディングできるようになった。
  * Kaggler としてデビューし、画像系コンペなら、いい結果を出せるようになった。

というわけで、この２つの講座によって、この半年でバリバリのディープラーニングコーダーになったのだった。

### 6月〜7月 {#6-7-}

しかし転機はまたやってきた（コロコロ変わる&#8230;）。会社にAIの勉強をしてます!といったら、「うちにはAIの仕事はまったくないよ！」といわれ、さらには「そんな役に立たない勉強よりも、Javaの資格とらないとクビにするよ」という脅しまでされたのだった。

  * [Oracle Certified Java Programmer, Silver SE 8 認定資格に合格 | Futurismo][4]

というわけで、AIとの付き合い方について、考えを見直さざるを得なくなってしまった。今の会社は、組込みソフトの受託開発がメインだ。組込みソフトと AIがどう関係するのだ？？？うーん、と悩んだところ、２つの答えにたどりついだ。

  * 強化学習
  * ロボティクス

というわけで、強化学習の勉強とLEGO Mindstormsを使ったロボット制御の勉強をはじめた。

  * [実践的な強化学習のオンライン学習教材、Practical RL をはじめた | Futurismo][5]
  * [LEGO Mindstorms EV3 を Python から制御するためのメモ | Futurismo][6]
  * [UdacityでArtificial Intelligence for Roboticsを受けた | Futurismo][7]

これにより、

  * OpenAI Gymデビューし、強化学習問題が解けるようになった。
  * 強化学習やロボット制御の理論を LEGO Mindstormsで試すことができた。

## これから取り組むこと {#-}

### 数学の苦手意識を克服 {#-}

この半年間で、理論よりは実践重視でバリバリコーディングしてきたのだけれども、ディープラーニングが趣味レベルで中途半端にできるだけでは、仕事には生かせないし、なにもできない！！

そもそも、である。機械学習に興味を持った理由は、数学を使って現実問題を解決するところがかっこいいと思った憧れからである。そのために、大学では数学を専攻したはずだった。

大学を卒業して１０年くらい経った。大学は情報系の専攻で、卒業研究は、**情報理論** を学んだのだが（学部卒）、１０年も経って数学から離れていたらすっかり忘れてしまった。なので、大学の数学を一から学び直したい。

また、やっぱり数学が壁で挫折したことが、この半年間でたくさんあった。
  
数学で撃沈した思いでをつらつらと並べたい。

  * 誤差逆伝播法が理解できず挫折。（これはデーィプラーニングがわかる数学という本によってようやく理解できた）
  * Udacity: Artificial Intelligence for Roboticsや確率ロボティクスでベイズ統計や確率が理解できず挫折。
  * Deep Learning Nanodegreeで学んだことの先にいこうとすると、論文を読んでいかないといけない。しかし、論文を開くと数式の羅列に意味が分からずフリーズ。
  * 深層学習（イルカ本）挫折。
  * Deep Learning Javaプログラミング 深層学習の理論と実装、挫折。生成モデル？？
  * Siraj Ravalの The Math of Intelligence 挫折。

というわけで、数学、やります！

プログラミングのための３０代からのやり直し数学である。

### 勉強の方針 {#-}

大学生のころは、理学系だったので、数学の勉強は定理と証明の繰り返しだった。ソフトウェア開発者になると、数学に対する姿勢は工学系よりになる。

  * 理論よりも応用を考える
  * この定理がどう役に立つかを考える
  * 抽象性よりも、具体的イメージを
  * 証明の厳密性はほどほどに（理解できることに越したことはないが）

## 大学1,2年生の数学の復習 {#-1-2-}

機械学習で必要な数学とはなにか、それは情報系の大学生が1,2年生で習う数学で十分という意見が多い。私は、情報系の専攻だったのだけれども、そこで習った数学は以下の４つ。

  * 線形代数
  * 解析学
  * 統計学
  * 離散数学

離散数学は、TopCoderなどのアルゴリズムコンテストにとても役に立ちそうな分野だ。機械学習との関係は、よくわからなかった。集合や代数的な知識は、線形代数を勉強することで、身につけられそう。離散数学の勉強は保留で。

### 基礎固めのための参考書はマセマで {#-}

やり直し数学ということで、最近大学生の間で評判の高いマセマシリーズで基礎固めをすることにした。高校数学から大学数学への考え方の移行がスムーズにいける、定理の証明に手を抜いていないのでガチ、コメントが多くページを遡って読みなおす必要がなく読みやすい、などの印象を受けた。

基礎ということで、以下の３つをすすめることにした。これで、まずは、大学の初等数学を復習する。

  * 線形代数
  * 微分積分
  * 統計学

<a href="https://www.amazon.co.jp/%E3%82%B9%E3%83%90%E3%83%A9%E3%82%B7%E3%82%AF%E5%AE%9F%E5%8A%9B%E3%81%8C%E3%81%A4%E3%81%8F%E3%81%A8%E8%A9%95%E5%88%A4%E3%81%AE%E7%B7%9A%E5%BD%A2%E4%BB%A3%E6%95%B0%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9-%E3%82%BC%E3%83%9F-%E5%A4%A7%E5%AD%A6%E3%81%AE%E6%95%B0%E5%AD%A6%E3%81%8C%E3%81%93%E3%82%93%E3%81%AA%E3%81%AB%E5%88%86%E3%81%8B%E3%82%8B-%E5%8D%98%E4%BD%8D%E3%81%AA%E3%82%93%E3%81%A6%E6%A5%BD%E3%81%AB%E5%8F%96%E3%82%8C%E3%82%8B-%E9%A6%AC%E5%A0%B4-%E6%95%AC%E4%B9%8B/dp/4866150297/ref=as_li_ss_il?s=books&#038;ie=UTF8&#038;qid=1501168252&#038;sr=1-1&#038;keywords=%E3%83%9E%E3%82%BB%E3%83%9E&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=ce00e092f646a5867a0bf3b169af454d" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4866150297&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4866150297" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<a href="https://www.amazon.co.jp/%E3%82%B9%E3%83%90%E3%83%A9%E3%82%B7%E3%82%AF%E5%AE%9F%E5%8A%9B%E3%81%8C%E3%81%A4%E3%81%8F%E3%81%A8%E8%A9%95%E5%88%A4%E3%81%AE%E5%BE%AE%E5%88%86%E7%A9%8D%E5%88%86%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9%E3%83%BB%E3%82%BC%E3%83%9F_%E5%A4%A7%E5%AD%A6%E3%81%AE%E6%95%B0%E5%AD%A6%E3%81%8C%E3%81%93%E3%82%93%E3%81%AA%E3%81%AB%E5%88%86%E3%81%8B%E3%82%8B-%E5%8D%98%E4%BD%8D%E3%81%AA%E3%82%93%E3%81%A6%E6%A5%BD%E3%81%AB%E5%8F%96%E3%82%8C%E3%82%8B-%E9%A6%AC%E5%A0%B4-%E6%95%AC%E4%B9%8B/dp/4866150106/ref=as_li_ss_il?s=books&#038;ie=UTF8&#038;qid=1501168252&#038;sr=1-2&#038;keywords=%E3%83%9E%E3%82%BB%E3%83%9E&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=8dc1c4c3d621ee80f7a941710726be43" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4866150106&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4866150106" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<a href="https://www.amazon.co.jp/%E3%82%B9%E3%83%90%E3%83%A9%E3%82%B7%E3%82%AF%E5%AE%9F%E5%8A%9B%E3%81%8C%E3%81%A4%E3%81%8F%E3%81%A8%E8%A9%95%E5%88%A4%E3%81%AE%E7%B5%B1%E8%A8%88%E5%AD%A6%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9-%E3%82%BC%E3%83%9F-%E9%A6%AC%E5%A0%B4-%E6%95%AC%E4%B9%8B/dp/4866150203/ref=as_li_ss_il?s=books&#038;ie=UTF8&#038;qid=1501168252&#038;sr=1-6&#038;keywords=%E3%83%9E%E3%82%BB%E3%83%9E&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=fa2a5097ad92aadb7e2b36fa99561d25" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4866150203&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4866150203" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

## 基礎の補強と応用へ {#-}

マセマは数学をとても簡単に（でも手を抜かずに）書かれているけれども、知識を厚くし、また別の角度から知識を補強したい。そこで選んだのが「プログラミングのための〜」のシリーズ。

解析系がこのシリーズにないので、代わりに最適化数学をメニューに組み込む。また、機械学習ではベイズ統計が使われるので、メニューに組み込む。

  * プログラミングのための線形代数
  * プログラミングのための確率統計
  * これなら分かる最適化数学
  * Pythonで体験するベイズ推論 PyMCによるMCMC入門

<a href="https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E7%B7%9A%E5%BD%A2%E4%BB%A3%E6%95%B0-%E5%B9%B3%E5%B2%A1-%E5%92%8C%E5%B9%B8/dp/4274065782/ref=as_li_ss_il?s=books&#038;ie=UTF8&#038;qid=1501168448&#038;sr=1-1&#038;keywords=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=8887a68d0576243ddee1bc3a5c9e9b0b" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4274065782&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4274065782" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<a href="https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E7%A2%BA%E7%8E%87%E7%B5%B1%E8%A8%88-%E5%B9%B3%E5%B2%A1-%E5%92%8C%E5%B9%B8/dp/4274067750/ref=as_li_ss_il?s=books&#038;ie=UTF8&#038;qid=1501168448&#038;sr=1-2&#038;keywords=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=0048e732f09ab6a2a6f47bb668b3f871" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4274067750&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4274067750" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<a href="https://www.amazon.co.jp/%E3%81%93%E3%82%8C%E3%81%AA%E3%82%89%E5%88%86%E3%81%8B%E3%82%8B%E6%9C%80%E9%81%A9%E5%8C%96%E6%95%B0%E5%AD%A6-%E5%9F%BA%E7%A4%8E%E5%8E%9F%E7%90%86%E3%81%8B%E3%82%89%E8%A8%88%E7%AE%97%E6%89%8B%E6%B3%95%E3%81%BE%E3%81%A7-%E9%87%91%E8%B0%B7-%E5%81%A5%E4%B8%80/dp/4320017862/ref=as_li_ss_il?_encoding=UTF8&#038;psc=1&#038;refRID=4MEQHTNHXYMVJACGWW2Y&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=a22e7aa1aa34fa28f24ea5947a1d22a6" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4320017862&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4320017862" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<a href="https://www.amazon.co.jp/Python%E3%81%A7%E4%BD%93%E9%A8%93%E3%81%99%E3%82%8B%E3%83%99%E3%82%A4%E3%82%BA%E6%8E%A8%E8%AB%96-PyMC%E3%81%AB%E3%82%88%E3%82%8BMCMC%E5%85%A5%E9%96%80-%E3%82%AD%E3%83%A3%E3%83%A1%E3%83%AD%E3%83%B3-%E3%83%87%E3%83%93%E3%83%83%E3%83%89%E3%82%BD%E3%83%B3-%E3%83%94%E3%83%AD%E3%83%B3/dp/4627077912/ref=as_li_ss_il?ie=UTF8&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=d88a760899cb1eb9e8e2380f475be231" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4627077912&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4627077912" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

## 数学を復習したら機械学習へ {#-}

数学力を強化したら、もともとの目標である機械学習の勉強に着手したい。まずは、はじパタから。

<a href="https://www.amazon.co.jp/%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AE%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E8%AA%8D%E8%AD%98-%E5%B9%B3%E4%BA%95-%E6%9C%89%E4%B8%89/dp/4627849710/ref=as_li_ss_il?ie=UTF8&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=5ab9e9658fa6671b53332f52449a6503" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4627849710&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4627849710" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

理論よりも実践を重視したいので、なるべくPythonとJupyter Notebookでプログラミングできる教材を使って勉強していきたい。

<a href="https://www.amazon.co.jp/IT%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E7%90%86%E8%AB%96%E5%85%A5%E9%96%80-%E4%B8%AD%E4%BA%95-%E6%82%A6%E5%8F%B8/dp/4774176982/ref=as_li_ss_il?_encoding=UTF8&#038;psc=1&#038;refRID=YAEF039DKDQFVM5W9ZCP&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=48c73a647e754a7f81eff940b7341316" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4774176982&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4774176982" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<a href="https://www.amazon.co.jp/Python%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E9%81%94%E4%BA%BA%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%83%86%E3%82%A3%E3%82%B9%E3%83%88%E3%81%AB%E3%82%88%E3%82%8B%E7%90%86%E8%AB%96%E3%81%A8%E5%AE%9F%E8%B7%B5-impress-top-gear/dp/4844380605/ref=as_li_ss_il?s=books&#038;ie=UTF8&#038;qid=1501551817&#038;sr=1-4&#038;keywords=Jupyter+Notebook&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=dc5bef41eaf27b95423cf1033b6fa34c" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4844380605&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4844380605" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<a href="https://www.amazon.co.jp/Python%E3%81%A7%E3%81%AF%E3%81%98%E3%82%81%E3%82%8B%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92-scikit-learn%E3%81%A7%E5%AD%A6%E3%81%B6%E7%89%B9%E5%BE%B4%E9%87%8F%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%A8%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E3%81%AE%E5%9F%BA%E7%A4%8E-Andreas-C-Muller/dp/4873117984/ref=as_li_ss_il?_encoding=UTF8&#038;psc=1&#038;refRID=YAEF039DKDQFVM5W9ZCP&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=1ca7049c2f2ae5f317a64896eba94a9e" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4873117984&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4873117984" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

ココらへんまで来たら、Kaggleにもガンガン挑戦していきたい。Deep Learningの手法のみに頼らずに、いろんな手法から最適な方法を取捨選択できるようになりたい。

その他、情報理論を勉強したい。この本は、情報理論的な立場から機械学習を捉えているらしいので、気になっている。

<a href="https://www.amazon.co.jp/%E6%83%85%E5%A0%B1%E7%90%86%E8%AB%96%E3%81%AE%E5%9F%BA%E7%A4%8E_%E6%83%85%E5%A0%B1%E3%81%A8%E5%AD%A6%E7%BF%92%E3%81%AE%E7%9B%B4%E8%A6%B3%E7%9A%84%E7%90%86%E8%A7%A3%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AB-SGC-Books-%E6%9D%91%E7%94%B0-%E6%98%87/dp/4781912125/ref=as_li_ss_il?s=books&#038;ie=UTF8&#038;qid=1501551234&#038;sr=1-2&#038;keywords=%E6%83%85%E5%A0%B1%E7%90%86%E8%AB%96%E3%81%AE%E5%9F%BA%E7%A4%8E&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=57b89ad9a5f92e7fbc2b9d6b382e9b10" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4781912125&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4781912125" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

## 読みたい本 {#-}

目指すは、機械学習の登竜門、パターン認識と機械学習(PRML)

<a href="https://www.amazon.co.jp/%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E8%AA%8D%E8%AD%98%E3%81%A8%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92-%E4%B8%8A-C-M-%E3%83%93%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97/dp/4621061224/ref=as_li_ss_il?ie=UTF8&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=ebc0eaa3a43e9abf1f5dac23687e195f" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4621061224&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4621061224" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<a href="https://www.amazon.co.jp/%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E8%AA%8D%E8%AD%98%E3%81%A8%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92-%E4%B8%8B-%E3%83%99%E3%82%A4%E3%82%BA%E7%90%86%E8%AB%96%E3%81%AB%E3%82%88%E3%82%8B%E7%B5%B1%E8%A8%88%E7%9A%84%E4%BA%88%E6%B8%AC-C-M-%E3%83%93%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97/dp/4621061240/ref=as_li_ss_il?_encoding=UTF8&#038;psc=1&#038;refRID=C7QNP8BRPE89ZEKS9A7A&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=d74c84a1e22cdc77e23c207e35b3e520" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4621061240&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4621061240" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

また、確率ロボティクスも挫折したので、数学力をつけて再挑戦したい。

<a href="https://www.amazon.co.jp/%E7%A2%BA%E7%8E%87%E3%83%AD%E3%83%9C%E3%83%86%E3%82%A3%E3%82%AF%E3%82%B9-ROBOT-books-Sebastian-Thrun/dp/4839924015/ref=as_li_ss_il?ie=UTF8&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=a9adb2b031678ab23235ee68d6fb6000" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=4839924015&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=4839924015" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

## その他の勉強 {#-}

### Deep Learning {#deep-learning}

今後はDeep Learningの勉強は抑えて他の勉強にリソースを割り当てる。

ただし、fast.aiの Deep Learning のオンライン講座 [Cutting Edge Deep Learning for Coders][8] は進める。この講座はほんとうによい講座なので、引き続き受講する。

[Deep Learning Book][9] の 本が翻訳されたら、勉強を再開しよう。

### ロボティクスと強化学習 {#-}

仕事で AI を活用するためには、この２つの分野の学習が必要なので、ここに力点をいれていく。

具体的には、Udacity Robotics Nanodegreeを半年間に渡って受講します。おそらく、これはかなりの負荷になるので、他のことをやる時間がとれなくなるかもしれない。

  * [Robotics Nanodegree | Udacity][10]

また、強化学習は 次期 MLPシリーズで発売が予定されているので、その本が発売されたら勉強を再開したい。

## まとめ: 今年やること {#-}

まとめると、今年の残りの予定は以下の３つだ。

  * 機械学習のための数学力強化
  * Udacity Robotics Nanodegree
  * fast.ai Cutting Edge Deep Learning for Coders

 [1]: https://futurismo.biz/archives/6106
 [2]: https://futurismo.biz/archives/6285
 [3]: https://futurismo.biz/archives/6440
 [4]: https://futurismo.biz/archives/6469
 [5]: https://futurismo.biz/archives/6490
 [6]: https://futurismo.biz/archives/6564
 [7]: https://futurismo.biz/archives/6667
 [8]: https://course.fast.ai/part2.html
 [9]: https://www.deeplearningbook.org/
 [10]: https://www.udacity.com/robotics