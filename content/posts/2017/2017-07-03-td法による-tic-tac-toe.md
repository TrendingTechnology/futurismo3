---
author: admin
categories:
- Python
- 機械学習
date: 2017-07-03T08:42:25+00:00
dsq_thread_id:
- 5.960009e+09
excerpt: TD法による tic-tac-toe
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
- 275
side:
- "y"
tags:
- 強化学習
title: TD法による tic-tac-toe
title_view:
- "y"
type: post
url: /archives/=6599
---

前回の続き。

  * [三目並べ（tic-tac-toe） にモンテカルロ法を試した | Futurismo][1]

以下の本のoctaveでかかれたコードをpythonで書き直した。

<iframe style="width: 120px; height: 240px;" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=fox10225fox-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01I58XHTE&linkId=2206f314c91c7123c8193bda3bf5d409" width="300" height="150" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>

勝率がよくないので、自分の実装がバグっている可能性大。でも、本でもそれほど勝率は高くなかったので、何とも言えない。

間違ったコードを公開することは抵抗があるけれども、今後誰かが勉強するための足がかりになればと思い公開。

### SARSA法 {#sarsa-}

サンプルコードのQテーブルの更新式が怪しい。Q学習と同じになっている。s-a-r-s-aになっていないのだ。なので、書籍とは違う実装にした。
  


### Q学習 {#q-}

 [1]: https://futurismo.biz/archives/6505