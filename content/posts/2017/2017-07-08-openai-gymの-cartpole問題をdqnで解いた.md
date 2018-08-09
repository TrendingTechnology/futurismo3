---
author: admin
categories:
- Python
- 機械学習
date: 2017-07-08T08:16:03+00:00
dsq_thread_id:
- 5.9734595e+09
excerpt: OpenAI Gymの CartPole問題をDQNで解いた
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
- 639
side:
- "y"
tags:
- ディープラーニング
- 強化学習
title: OpenAI Gymの CartPole問題をDQNで解いた
title_view:
- "y"
type: post
url: /archives/=6610
---

また、CartPole問題なのだが、今回はDeep Q-Network(DQN)で解いた。

  * [OpenAI Gym の CartPole-v0 を試したメモ | Futurismo][1]
  * [CEM で CartPole-v0 を試したメモ | Futurismo][2]
  * [OpenAI Gym の CartPole 問題が Q-Learning で解けたぞ | Futurismo][3]

解いたといっても、自力で解いたわけではなくて、Udacity DLNDの Reinforcement Learningの回のJupyter Notebookを参考にした。

  * <https://github.com/udacity/deep-learning/blob/master/reinforcement/Q-learning-cart.ipynb>

このNotebookは tensorflowを利用しているのだけれども、理解を深めるためにKerasに移植してみた。

### DQNのポイント

Deep Q-Network(DQN)とは、ディープラーニングと強化学習(Q学習)を組み合わせたアルゴリズム。

これがなんなのか、いまいちよくわからなかったので、参考になりそうなリンクをかき集めた。

  * [Deep Q-Network(DQN)リンク集 | Futurismo][4]

Q学習で利用するテーブルをニューラルネットワークで関数近似しただけだと、
  
DQNとは呼ばないらしい。[David Silver さんのスライド][5]によると、
  
以下の３つの学習を促進するための工夫をしたことによって、DQNは安定した学習を可能にしている。

  * Experience Replay
  * Fixed Target Q-Network
  * 報酬のclipping

Fixed Target Q-Networkをいまいち理解していないので、正式なDQNではないのかも。Experience Replayは実装した。
  
これは、状態の相関関係によって学習がうまくいかないことを防ぐための手法。<s, a, r, s’> の組を保存しておき、学習時に保存したデータ組からランダムにサンプリングしてミニバッチをつくり、それをニューラルネットで学習するという手法。アルゴリズムを Udacity DLNDから引用する。

  * Initialize the memory <span class="math"></span>
  * Initialize the action-value network <span class="math"></span> with random weights
  * **For** episode = 1, <span class="math"></span> **do** 
      * **For** <span class="math"></span>, <span class="math"></span> **do** 
          * With probability <span class="math"></span> select a random action <span class="math"></span>, otherwise select <span class="math"></span>
          * Execute action <span class="math"></span> in simulator and observe reward <span class="math"></span> and new state <span class="math"></span>
          * Store transition <span class="math"></span> in memory <span class="math"></span>
          * Sample random mini-batch from <span class="math"></span>: <span class="math"></span>
          * Set <span class="math"></span> if the episode ends at <span class="math"></span>, otherwise set <span class="math"></span>
          * Make a gradient descent step with loss <span class="math"></span>
      * **endfor**
  * **endfor**

### コード



### 結果

前回のQ学習が3000エピソードくらいで解けたのに対して、今回のDQNは250エピソードで解けた。大幅な進歩だ。
  
<https://gym.openai.com/evaluations/eval_DYySvAnSxuP3oHjZchxaQ>

 [1]: https://futurismo.biz/archives/6481
 [2]: https://futurismo.biz/archives/6549
 [3]: https://futurismo.biz/archives/6580
 [4]: https://futurismo.biz/archives/6604
 [5]: https://www.iclr.cc/lib/exe/fetch.php?media=iclr2015:silver-iclr2015.pdf