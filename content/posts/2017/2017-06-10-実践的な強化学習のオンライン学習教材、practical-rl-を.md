---
author: admin
categories:
- MOOC
- Python
date: 2017-06-10T07:49:00+00:00
dsq_thread_id:
- 5.897099e+09
excerpt: 実践的な強化学習のオンライン学習教材、Practical RL をはじめた
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
- 651
side:
- "y"
tags:
- OpenAI
- 強化学習
title: 実践的な強化学習のオンライン学習教材、Practical RL をはじめた
title_view:
- "y"
type: post
url: /archives/=6490
---

実践的な強化学習の教材、Practical RL をやりはじめた。

-   <https://github.com/yandexdataschool/Practical_RL>

これはなに
==========

HSE と Yandex SDA
というロシアの大学？で教えられている強化学習のコースが、
オンライン学習のために英語とロシア語で公開されている。

教材は、オンラインで強化学習をするためのリソースのいいとこどりをしている。

-   [David Silver's Reinforcement Learning Course
    (UCL, 2015)](https://www0.cs.ucl.ac.uk/staff/d.silver/web/Teaching.html)
-   [CS 294 Deep Reinforcement Learning,
    (Berkeley,Spring 2017)](https://rll.berkeley.edu/deeprlcourse/)
-   [Sutton & Barto Book: Reinforcement Learning: An
    Introduction](https://incompleteideas.net/sutton/book/the-book-2nd.html)(2nd
    Edition Draft!!)
-   その他もろもろ...

各週のディレクトリに動画や pdf のリンクがかかれた README がある。

また、"実践" とつくだけに、各週の課題が Jupyter Notebook
で与えられ、OpenAI Gym を活用する。

[fast.ai の講座](https://futurismo.biz/archives/6440)
が予想以上によかったので、実践的とかかれると期待してしまう。

強化学習のコースなのだが、最近の動向に合わせ Deep Learning(DQN)
の内容も盛り込まれている。

Deep Learning のためのライブラリは、Lasagne
というライブラリが推奨されている。 しかし、Tensorflow
版の課題ノートも公開されている。

シラバス
--------

github の README から抜粋。詳しくは、元サイトへ。

-   <https://github.com/yandexdataschool/Practical_RL>

前半で、強化学習の話題をカバーしている。中盤で、Deep Learning
の話題が出てくる。後半はよくわからない。

``` {.text}
week0 Welcome to the MDP
week1 Crossentropy method and monte-carlo algorithms
week2 Temporal Difference
week3 Value-based algorithms
week4 Approximate reinforcement learning
week5 Deep reinforcement learning
week6 Policy gradient methods
week6.5 RNN recap
week7 Partially observable MDPs
week 8 Case studies 1
week 9 Advanced exploration methods
week 10 Trust Region Policy Optimization.
week 11 Model-based RL: Planning
```

他のコースとの比較
==================

他のコースと比較検討して Practical RL
を進めようと思ったので、その理由も書いておく。

Practical RL のデメリットは、課題 の解答が公開されていないところ。

fork
している人のリポジトリを覗いて自分の解答と照らし合わせようかと思ったけれども、
参考になりそうなリポジトリがあまり見つからなかった。

ということで、自分は途中で挫折する可能性が高いので、
このコースに挫折したら次にやることも考えておく。

Learning Reinforcement Learning - WildML
----------------------------------------

-   [Learning Reinforcement Learning (with Code, Exercises and
    Solutions) –
    WildML](https://www.wildml.com/2016/10/learning-reinforcement-learning/)
-   <https://github.com/dennybritz/reinforcement-learning>

強化学習の主要な話題が Jupyter Notebook
と共に提供されている。うれしいことに、解答付きだ。

ただいま作成中のようなのと、学ぶ方法が Sutton
本を読むことに偏っていたのでやめた。

しかし、Practical RL
に行き詰まったらこっちにシフトしようかと考えている。

UCL Course on RL
----------------

ユニバーシティ・カレッジ・ロンドンの強化学習の講義資料

-   [David Silver's Reinforcement Learning Course
    (UCL, 2015)](https://www0.cs.ucl.ac.uk/staff/d.silver/web/Teaching.html)

この動画は、Practical RL
の中で何度も引用されていてみることが進められている。

なので、Practical ML を進めたらこの講義内容はカバーできるのと、
課題が見つからなかったので止めた。

追記: 2016 年のページ見つけた。課題もしたのほうにある。

-   [UCL course – 2016 – Hado van
    Hasselt](https://hadovanhasselt.com/2016/01/12/ucl-course/)

CS 294: Deep Reinforcement Learning, Spring 2017
------------------------------------------------

UC Barkeley の Deep Learning と強化学習を学ぶ講義資料。

-   [CS 294 Deep Reinforcement Learning,
    (Berkeley,Spring 2017)](https://rll.berkeley.edu/deeprlcourse/)

強化学習に Deep Learning を使う。ライブラリは Tensorflow.

講義動画がしっかりそろっている。

-   <https://www.youtube.com/playlist?list=PLkFD6_40KJIwTmSbCv9OVJB3YaO4sFwkX>

課題は 4 つある。掲示板も Reddit
を使っていて課題につまったときは検索できそう。

-   <https://github.com/berkeleydeeprlcourse/homework>
-   <https://www.reddit.com/r/berkeleydeeprlcourse/>

これを選ばなかった理由は、Practical RL
よりも難しそうな印象を受けたから。 Deep Learning も
強化学習もわからないのに、それを合わせた内容をバンバン紹介されても消化できなさそうだ。

また 、Practical RL
からもこのコースの動画や課題(hw3)が紹介されていたので、
うまくつまみぐいできるかと思ったから。

### UC Barkeley CS294 Deep Reinforcement Learning

2015 年の Barkeley の Deep Reinforcement Learning

-   [CS 294 Deep Reinforcement Learning, Fall
    2015](https://rll.berkeley.edu/deeprlcourse-fa15/)

2017 年版の元になったコースだ。内容は、短くまとまっている（４つ？？）

### UC Berkeley CS188 Intro to AI

2014 年の Berkeley の AI コース。

-   [UC Berkeley CS188 Intro to AI](https://ai.berkeley.edu/home.html)

レクチャー動画や課題はしっかりしている。Project もおもしろそうだ。

扱っているものは、基本的なもので Deep
うんたらはでてこないので少し古さは感じる。

An introduction series to Reinforcement Learning (RL) with comprehensive step-by-step tutorials.
------------------------------------------------------------------------------------------------

Git-Base のチュートリアリル。提供元団体不明。個人かな？

-   <https://github.com/vmayoral/basic_reinforcement_learning>

このチュートリアルも作成中のようだが、前半はほぼ完成している。

README とコードベースのチューとリアルなので、
それほど英語力や数学力を求められない、今までで一番やさしそうな印象を受ける。

扱っている話題は、Q-Learning, OpenAI Gym, DQN, Deep Convolutional
Q-Learning, ROS などなど、おもしろそうなものばかりだ。

Udacity Reinforcement Learning
------------------------------

MOOC の大御所 Udacity が提供しているコース。

-   <https://www.udacity.com/course/reinforcement-learning--ud600>

短い動画がたくさんある。二人の掛け合いによって動画が進んでいき、
とっつきやすい感じはある。

課題はなく、短いので、理解が足りないところを補足する目的で見てもみてもいいかも。

Reinforcement Learning: An Introduction - Richard S. Sutton and Andrew G. Barto
-------------------------------------------------------------------------------

言わずと知れた、強化学習のバイブル。これを腰を据えて読むのがいいのかも。

-   第 1 版 HTML:
    <https://incompleteideas.net/sutton/book/ebook/the-book.html>
-   第 2 版 Draft: [Sutton & Barto Book: Reinforcement Learning: An
    Introduction](https://incompleteideas.net/sutton/book/the-book-2nd.html)

第２版には、サンプルコードが提供されているようだ。ただし、解答はなし。

-   <https://github.com/ShangtongZhang/reinforcement-learning-an-introduction>

Udemy Artificial Intelligence A - Z
-----------------------------------

Udemy の AI コースも, 最新の話題を扱っている。セールのときに 1200
円で買った。

-   <https://www.udemy.com/artificial-intelligence-az/>

``` {.text}
Module 1: "Self Driving Car"
Module 2: "Deep Convolutional Q-Learning"
Module 3: "A3C"
```

なんと、フレームワークは Pytouch を使う。

-   Module1 では、シミュレータ上の車のライントレースを DQN で行う。
-   Module2 では、OpenAI Gy 上で Deep Convolutional Q-Learning を学ぶ。
-   Module3 では、A3C という発展的な話題を扱う。

これで、1200 円だ。安いと思う。

Simple Reinforcement Learning with Tensorflow
---------------------------------------------

TensorFlow による 強化学習の実装チュートリアル。

-   [Simple Reinforcement Learning with Tensorflow Part 0: Q-Learning
    with Tables and Neural
    Networks](https://medium.com/emergent-future/simple-reinforcement-learning-with-tensorflow-part-0-q-learning-with-tables-and-neural-networks-d195264329d0)

以下は内容。コードはここ <https://github.com/awjuliani/DeepRL-Agents>

-   Part 0 — Q-Learning Agents
-   Part 1 — Two-Armed Bandit
-   Part 1.5 — Contextual Bandits
-   Part 2 — Policy-Based Agents
-   Part 3 — Model-Based RL
-   Part 4 — Deep Q-Networks and Beyond
-   Part 5 — Visualizing an Agent ’ s Thoughts and Actions
-   Part 6 — Partial Observability and Deep Recurrent Q-Networks
-   Part 7 — Action-Selection Strategies for Exploration
