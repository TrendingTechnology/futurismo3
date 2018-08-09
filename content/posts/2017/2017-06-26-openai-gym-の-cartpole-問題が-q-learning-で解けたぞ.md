---
author: admin
categories:
- Python
- 機械学習
date: 2017-06-26T13:33:00+00:00
dsq_thread_id:
- 5.943245e+09
excerpt: OpenAI Gym の CartPole 問題が Q-Learning で解けたぞ
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
- 617
side:
- "y"
tags:
- OpenAI
- 強化学習
title: OpenAI Gym の CartPole 問題が Q-Learning で解けたぞ
title_view:
- "y"
type: post
url: /archives/=6580
---

CartPole 問題は、今までこのブログでもなんども取り上げてきた。

CartPole 問題は、今までこのブログでもなんども取り上げてきた。
- [[https://futurismo.biz/archives/6481][OpenAI Gym の CartPole-v0 を試したメモ | Futurismo]]
- [[https://futurismo.biz/archives/6549][CEM で CartPole-v0 を試したメモ | Futurismo]]

今日、ついに解けたのだ。

* 謝辞
  いろんな人のソースコードをよみあさりました。大感謝。
  - https://github.com/YuriyGuts/cartpole-q-learning
  - https://gist.github.com/Sessa93/561932f1034be5282057b6271c4d5f99
  - https://gym.openai.com/evaluations/eval_aHf1Kmc4QIKm5oPcJJToBA
  - https://gist.github.com/vmayoral/9a5f91b7347c18b8aee1135dc158c63a
  - https://gist.github.com/diegslva/b45b6fc520f1baedb4375b9418932cc6
  - https://gist.github.com/tyler-romero/81ea2530ca85b951de6e403fd5e1d9c3
  - https://gist.github.com/heechul/9f8f43c229fc790af4a8f073108ed49f
  - https://gist.github.com/heechul/9f8f43c229fc790af4a8f073108ed49f

  とくに、最後のリンクは、Reinforcement Learning のチュートリアルがまとまっている良リポジトリ。
  この場を借りて、紹介したい。
  
  - https://github.com/vmayoral/basic_reinforcement_learning

## 課題
  環境から取得できる情報は次の 4 つ。(observation_space)
  - 横軸座標(x)
  - 横軸速度(x_dot)
  - ポール角度(theta)
  - ポール角速度(theta_dot)

  エージェントが取れる行動は環境状態によらず次の 2 つ。(acnton_space)
  - 左に動く
  - 右に動く

  課題は、環境から取得できる値が連続値であること。
  Q テーブル（状態、行動）対に対して一つの値を扱う。

  つまり、連続値である状態を範囲で区切って離散の値に変換して、Q テーブルのインデックスに用いることが必要。

  ここでは gdb さんのコード を参考に以下のように書いた。
  
  - https://gym.openai.com/evaluations/eval_aHf1Kmc4QIKm5oPcJJToBA

```python
def build_state(features):
    """get our features and put all together converting into an integer"""
    return int("".join(map(lambda feature: str(int(feature)), features)))

def to_bin(value, bins):
    return np.digitize(x=[value], bins=bins)[0]

cart_position_bins = np.linspace(-2.4, 2.4, 2)
cart_velocity_bins = np.linspace(-2, 2, 10)
pole_angle_bins = np.linspace(-0.4, 0.4, 50)
pole_velocity_bins = np.linspace(-3.5, 3.5, 20)

def transform(observation):
    # return an int
    cart_pos, cart_vel, pole_angle, pole_vel = observation
    return build_state([
        to_bin(cart_pos, cart_position_bins),
        to_bin(cart_vel, cart_velocity_bins),
        to_bin(pole_angle, pole_angle_bins),
        to_bin(pole_vel, pole_velocity_bins)
    ])
```

これで、transform を呼ぶと、ovservation に対して一意な離散値が出力されるので、それを状態値として扱う。

注目すべきは、ここ。横軸座標(x)は荒く、ポール角度は細かく値を区切っている。こうすると精度がよかったのでこうしている。

```python
cart_position_bins = np.linspace(-2.4, 2.4, 2)
cart_velocity_bins = np.linspace(-2, 2, 10)
pole_angle_bins = np.linspace(-0.4, 0.4, 50)
pole_velocity_bins = np.linspace(-3.5, 3.5, 20)
```

## Code
  このコードは、Practical RL の week2 の宿題である。
  
  - https://github.com/yandexdataschool/Practical_RL

  以下を参考にした。
  - Berkeley's CS188 pacman project code
    https://ai.berkeley.edu/
  - Victor Mayoral Vilches's RL tutorial 
    https://github.com/vmayoral/basic_reinforcement_learning
  - gdb openAI
    https://gym.openai.com/evaluations/eval_aHf1Kmc4QIKm5oPcJJToBA

<script src="https://gist.github.com/tsu-nera/bdb9b229b21f00997698378a7b15df08.js"></script>

## Result

  - https://gym.openai.com/evaluations/eval_XduLYAihRHyfU3R2t5dR2Q
