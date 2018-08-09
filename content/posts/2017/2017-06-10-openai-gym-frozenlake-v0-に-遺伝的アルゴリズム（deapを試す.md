---
author: admin
categories:
- Python
- 機械学習
date: 2017-06-09T23:09:00+00:00
dsq_thread_id:
- 5.896225e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 552
side:
- "y"
tags:
- OpenAI
title: OpenAI Gym FrozenLake-v0 に 遺伝的アルゴリズム（deap)を試す
title_view:
- "y"
type: post
url: /archives/=6488
---

タイトルのとおり、OpenAI Gym FrozenLake-v0
に遺伝的アルゴリズムを試しました。

-   <https://gym.openai.com/envs/FrozenLake-v0>

遺伝的アルゴリズム
==================

遺伝的アルゴリズムとは
----------------------

遺伝的アルゴリズム(genetic algorithm, 略して GA)とは、
組み合わせ問題の最適解を求めるためのアルゴリズム。

-   [遺伝的アルゴリズム -
    Wikipedia](https://ja.wikipedia.org/wiki/%E9%81%BA%E4%BC%9D%E7%9A%84%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)

具体的には、以下の 2 〜 4 を繰り返すアルゴリズム。

``` {.text}
1. 初期設定
2. 選択
3. 交叉
4. 突然変異
```

詳しくは、他のサイトに説明は譲る。この記事がわかりやすかった。

-   [遺伝的アルゴリズム - Python
    と機械学習](https://darden.hatenablog.com/entry/2017/03/29/213948)

Python で遺伝的アルゴリズムやるなら Deap
----------------------------------------

Python で遺伝的アルゴリズムやるなら Deap というライブラリがある。

-   <https://github.com/DEAP/deap>

遺伝的アルゴリズムにも、選択、交叉、突然変異にいろいろな酒類がある。

この辺の話は,
[Wikipedia](https://ja.wikipedia.org/wiki/%E9%81%BA%E4%BC%9D%E7%9A%84%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)
が詳しい。

それらをうまく抽象化して扱えるのがこのライブラリ。

解説記事はネット上にたくさんあるのだが OneMax
問題を扱っているものが多い。

-   [Python の進化計算ライブラリ Deap -
    Qiita](https://qiita.com/neka-nat@github/items/0cb8955bd85027d58c8e)
-   [DEAP - Python
    と機械学習](https://darden.hatenablog.com/entry/2017/04/18/225459)
-   [遺伝的アルゴリズムに入門するときに参考になったスライドと OneMax
    問題の実装 -
    もふもふ技術部](https://tech.mof-mof.co.jp/blog/ga-one-max-problem.html)
-   [Goodbye, World! Python の DEAP
    が面白そう](https://3thefuture.blog.fc2.com/blog-entry-22.html)

なので、OpenAI の FrozenLake-v0 を題材に Deap を使ってみた。

FrozenLake-v0
=============

-   <https://gym.openai.com/envs/FrozenLake-v0>

Random Search
-------------

GA の前に乱数を発生させて、そのポリシーにしたがって進んでいく例を書く。

<script src="https://gist.github.com/tsu-nera/a3fa51cf6ab27c34e4456038ef5055da.js"></script>

結果は、こちら。https://gym.openai.com/evaluations/eval\_iinFj8fUSvOOYHWXwjjAw

Score が 0.56 で、基準の 0.78 をオーバーしていない。

deap を使った GA
----------------

<script src="https://gist.github.com/tsu-nera/9684a3019b30329ff89e40fa316a8406.js"></script>

結果は、こちら。https://gym.openai.com/evaluations/eval\_uU3CIG5yTgOhOXVM8EG3wA

Score が 0.81 と、基準値をなんとかクリアした。

deap をつかわない GA
--------------------

<script src="https://gist.github.com/tsu-nera/c7bc7e5afb4b0a7c80bee8c267f2b8cd.js"></script>

結果は、こちら。https://gym.openai.com/evaluations/eval\_YpHI9YmhQoSGcKMI1dFsw

なんと Score は 0.91 だ。

ということは、自分の deap をつかった実装はどこかバグってるなぁ？！
