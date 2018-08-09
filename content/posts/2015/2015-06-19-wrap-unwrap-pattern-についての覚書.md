---
author: admin
categories:
- Python
- パターン
date: 2015-06-19T12:29:00+00:00
dsq_thread_id:
- 3.861708e+09
pvc_views:
- 919
tags:
- FP
title: Wrap-Unwrap Pattern についての覚書
type: post
url: /archives/=4169
---

Functional Python Programming という本を読んでいたら、 Wrap-Unwrap
Pattern というものを知ったので、ちょっとメモ.

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'><div class='amazlink-list' style='clear: both;'><div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'><a href='https://www.amazon.co.jp/Functional-Python-Programming-Steven-Lott-ebook/dp/B00T96XC0Q%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00T96XC0Q' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/518KSmGEJBL._SL160_.jpg' style='border: none;' /></a></div><div class='amazlink-info' style='height:160; margin-bottom: 10px'><div class='amazlink-name' style='margin-bottom:10px;line-height:120%'><a href='https://www.amazon.co.jp/Functional-Python-Programming-Steven-Lott-ebook/dp/B00T96XC0Q%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00T96XC0Q' rel='nofollow' target='_blank'>Functional Python Programming</a></div><div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 15.06.19</div><div class='amazlink-detail'>Steven Lott<br /></div><div class='amazlink-sub-info' style='float: left;'><div class='amazlink-link' style='margin-top: 5px'><img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18'><a href='https://www.amazon.co.jp/Functional-Python-Programming-Steven-Lott-ebook/dp/B00T96XC0Q%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00T96XC0Q' rel='nofollow' target='_blank'>Amazon</a></div></div></div></div></div>

公式
====

``` {.text}
unwrap(process(wrap(iterable)))
```

-   wrap() ラッパー
-   unwrap() アンラッパー ラッパーで処理したものをもとに戻す.
-   process() 処理したい手続き
-   iterable 処理したいデータ

ラッパーは、iterable なデータをタプルに加工する.
タプルを利用するのは、タプルが immutable なデータ構造だから.

例: 最大値を求める
==================

以下、python による例です.

以下のデータ構造で身長が最大の人を調べる.

-   太郎: 170
-   次郎: 160
-   三郎: 180

``` {.python}
students = [("Taro", 170), ("Jiro", 160), ("Saburo", 180)]
```

max 関数は、そのままでは利用できない.

``` {.python}
>>> max(students)
('Taro', 170)
```

ラッパーでタプルを作成する. wrap 関数は、generator expression ともいう.

``` {.python}
def wrap(students):
    return ((student[1], student) for student in students)

def unwrap(data):
    length, student = data
    return student
```

パターンを適用.

``` {.python}
unwrap(max(wrap(students)))

>>> unwrap(max(wrap(students)))
('Saburo', 180)
```

その他
======

wrap 関数をいちいち定義するのは面倒なので、lambda が利用される.

``` {.python}
>>> max(map(lambda s: (s[1], s), students))[1]
('Saburo', 180)
```

map を利用する場合の方が、generator expression よりも、高速らしい.

unwrap の操作でタプルの一番目、二番目を取り出すのは常套手段.
なので、Haskell には、fst,snd という関数が用意されている.

-   fst: タプルの 1 番目の要素を取り出し
-   snd: タプルの 2 番目の要素を取り出し

