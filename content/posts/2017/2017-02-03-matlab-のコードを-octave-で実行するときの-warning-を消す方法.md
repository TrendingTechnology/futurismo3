---
author: admin
categories:
- MOOC
date: 2017-02-03T06:14:00+00:00
dsq_thread_id:
- 5.5175045e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 1010
side:
- "y"
tags:
- MATLAB
- Octave
title: MATLAB のコードを Octave で実行するときの Warning を消す方法
title_view:
- "y"
type: post
url: /archives/=6181
---

LAFF を受けている.

-   [Linear Algebra - Foundations to Frontiers |
    edX](https://www.edx.org/course/linear-algebra-foundations-frontiers-utaustinx-ut-5-05x)

MATLAB Online を利用することが推奨されているのだが、
期間限定なのでできれば無料の Octave を利用したい。

Discussion を見ると、Octave でも課題はできるよと書いてある。

でも、テストスクリプトを実行すると以下のような Warning がたくさん出る。

``` {.bash}
warning: Matlab-style short-circuit operation performed for operator &
```

これを消したい。

消す方法
========

/usr/share/octave/site/m/startup/octaverc に以下の行を追加する。

``` {.bash}
warning('off', 'Octave:possible-matlab-short-circuit-operator');
```

参考: [linux - How to suppress warnings in gnu octave - Stack
Overflow](https://stackoverflow.com/questions/11384359/how-to-suppress-warnings-in-gnu-octave)

これで Warning はひとまずでなくなる。
