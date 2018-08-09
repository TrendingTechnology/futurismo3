---
author: admin
categories:
- Python
- 技術メモ
date: 2015-07-04T14:38:00+00:00
dsq_thread_id:
- 3.9042673e+09
pvc_views:
- 4773
tags:
- FX
title: Pythonの テクニカル分析ライブラリ ta-libでバックテストしてみる
type: post
url: /archives/=4276
---

FXのテクニカル指標を提供してくれるような、
便利なPythonのライブラリはないかなと探していたら、ありました.

-   <https://github.com/mrjbq7/ta-lib>

TA-LIBとは、経済データに対するテクニカル分析をするための関数がまとまっ
たライブラリ. さっそく試す.

インストール
============

<https://mrjbq7.github.io/ta-lib/install.html>

tarをダウンロードして、ビルドする方法もあるけど、 easy\_install
で入れることができる.

``` {.commonlisp}
easy_install ta-lib
```

およそ、100以上の関数が用意されている. 各関数の使い方は github参照.

-   <https://github.com/mrjbq7/ta-lib/tree/master/docs/func_groups>

つかってみる
============

単純移動平均の関数 SMAを利用して、
為替データでバックテストもどきをしてみる.

-   5日移動平均が25日移動平均を上回ったら(ゴールデンクロス) 買い
-   5日移動平均が25日移動平均を下回ったら(デッドクロス) 売り

データは、 MT4のヒストリカルデータより、1分足データをエクスポートした.

``` {.python}
import numpy as np
import talib as ta

data = np.loadtxt('150703.csv', delimiter=",", usecols=(2, 3, 4, 5))

tanki = ta.SMA(data[:, 3], timeperiod=5)
tyuki = ta.SMA(data[:, 3], timeperiod=25)

total = 100000
units = 1000

for i in range(len(data)-1):
    if ((tanki[i] < tyuki[i]) and (tanki[i+1] > tyuki[i+1])):
        print("Golden Closs!!")
        total = total - 1000*data[i,3]

    elif ((tanki[i] > tyuki[i]) and (tanki[i+1] < tyuki[i+1])):
        print("Dead Closs!!")
        total = total + 1000*data[i,3]

print(total)
```

所感
====

Pythonだと、パラメータ（ここでは、移動平均の5と25)の調整がモンテカルロ法で
できそう. パラメータの最適化がしやすいという点は
metatraderに比べてメリットだ.

しかし、まだまだ、バックテストのしにくさは Metatraderに比べると大きい.
使えるレベルにするには、そうとうの努力が必要そうだ.
