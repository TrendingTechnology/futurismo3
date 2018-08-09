---
author: admin
categories:
- Python
- つくってみた
- 機械学習
date: 2017-08-02T04:34:50+00:00
dsq_thread_id:
- 6.034651e+09
excerpt: Neural Style Transer
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
- 517
side:
- "y"
tags:
- DeepLearning
- 論文
title: Neural Style Transerで京都渡月橋の写真にゴッホのスタイルをとらんすふぁー
title_view:
- "y"
type: post
url: /archives/=6694
---

## fast.ai Part2 {#fast-ai-part2}

fast.ai の [Cutting Edge Deep Learning for Coders][1] を始めた。

Lesson8のテーマは Artistic Transfer。いわゆる Style Transfer。絵のスタイルをディープラーニングで抽出して、別の画像に転移させるというもの。

Part1は Practical(実践) という題名だった。その意味するところは、**Kagglerになれ** というものだった。

Part2は、Cutting Edge(最先端)という題名だ。その意味するところがわかった。それは、**論文を読め** ということだった。Part2では、論文を読んでそれを実装するというのが課題として課せられるようだ。英語も数学もツライのに、論文なんて読んだことないから、無理だよ！！挫折しそう。

## Neural Algorithm of Artistic Style {#neural-algorithm-of-artistic-style}

Lesson8では、アート系のディープラーニングの先駆けになった論文、[A Neural Algorithm of Artistic Style][2]を読んで、再実装して、さらには結果をブログに書いてねという課題が出された。

というわけで、実装してみた。

  * [Jupyter Notebook Viewer][3]

元となるコードはちゃんと提供されている。それを写経しただけ。Keras版と PyTouch版がある。

  * <https://github.com/fastai/courses/blob/master/deeplearning2/neural-style.ipynb>
  * <https://github.com/fastai/courses/blob/master/deeplearning2/neural-style-pytorch.ipynb>

理論の方は、素晴らしく解説された記事があるので、それを紹介。

  * [Neural Style Transfer: Prismaの背景技術を解説する][4]
  * [画風を変換するアルゴリズム | Preferred Research][5]

## コンテンツとスタイルの特徴抽出 {#-}

このNeural Style Transferという方法は、異なる画像からコンテンツとスタイルを別々に特徴抽出して、それらを足しあわせて一枚の画像を生成する。

まずは、元となるコンテンツ画像。京都嵐山の渡月橋。去年旅行で行ってきた。

![][6]

このコンテンツ画像からコンテンツの特徴を抽出したものが以下。

![][7]

スタイル画像は、定番のゴッホの星月夜。

![][8]

スタイルの特徴を抽出した画像が以下。

![][9]

## 結果 {#-}

そして最後に、コンテンツとスタイルを合成した画像が以下。

![][10]

### おまけ {#-}

こんなこともできる。

<blockquote class="twitter-tweet" data-lang="ja">
  <p lang="ja" dir="ltr">
    ディープラーニングでミロの画風をチャップリンに適用。 <a href="https://t.co/18FYKjPFlE">pic.twitter.com/18FYKjPFlE</a>
  </p>
  
  <p>
    &mdash; tsu-nera (@tsu_nera) <a href="https://twitter.com/tsu_nera/status/853922520973496320">2017年4月17日</a>
  </p>
</blockquote>

 [1]: https://course.fast.ai/part2.html
 [2]: https://arxiv.org/abs/1508.06576v2
 [3]: https://nbviewer.jupyter.org/github/tsu-nera/cutting-edge-dl-for-coders-part2/blob/master/style-transfer.ipynb
 [4]: https://elix-tech.github.io/ja/2016/08/22/art.html
 [5]: https://research.preferred.jp/2015/09/chainer-gogh/
 [6]: https://lh3.googleusercontent.com/hZXyZ-gPRdCXEmUNrNI6ys2I4Tp7RFb6UVbt7T4GF7xWf8KfamBZjSuSzx73qMue_bhVn2PVpyRnHoyi9HL_SAR7IJD-5irA1XpQ7OgXxqDtEEF0kO9iNe_4OrRVY52PhOeA0cLpmFWrWdvqZvE15q-Y3JA8khSjpI9JOyyEWSDR6nx6spA1K0zELpZR9uWpCIRuLlcRUncUrUCmvK6CMnV0SKSmAkifqVaaSq-l827PDP1bc9YYxt-0SdAvtkUlQ9s0k6zaZNNCZf1I50xsTW-UoR4FYAAsx4wTiyjSeSED4lVruNRuTqQQXW-rh0XMaEU3Cvgwka7FT02PL3_daiDr1q_Yjcp2y_1cipa9143CMd5MzBpnOZYYlPk8KFDyLEJ4fCHE4uDuZ2Hm3CcBfgtSB61yyOLw32-GA-nJqTKmocql0jMDlaM4NVMkrsrXzU-6BhpBNP3eAzcxeULHTRZQFbfj5DJ_IAg4nWy9iX_NL1cE_0BiOawn0FG3ZpBCY5I8zJbMWryyy6xAH8at7iaPtz2w35pD5eZOUN5OoN0WRl7ZC1A3THg6mNDtHqJ-2SfWMaV69ZjZTOS2KtMaFT6TqmkggWeZ791eeVc6-9UmHGN7FI_jbfvc=w600-h450-no
 [7]: https://lh3.googleusercontent.com/QrkFiAR5ml2_oPb0KDS-Y_MGNvD71EGerj1Cb8LEy6XFxgfx7hOYIgcF8YASbla-0f1nVJXg_RresFq9Ylp55ahbfV0-OVfCF-YDes96mkYM07lHH2Hfoc82hOKjYUk66PJs33OkOOLbgT-aubybzSHt9T_gH2E8_1-MwtvJgNYQTkm0pn4rbAFQkeVzlduA28kw4dLuOLYDnY3K3E3FhP17BWbGgNFqGPuIWYDKzDirsh_DN2_QGVnWtkZTAW88W5GE2eGfP_s7FWdsyHh3xTo4xBZPFInhNkVOTEswv390V_ynEXrXnjah1Op4rIP178ht3sVZkMvYVFq4GsFx6J_JLcazXEA4d7IG7953LULWvx93j0-8Y11zP8seihztf5sE9s9FZg55cV6IqVh66zQMA-Qw_19OgxpS3ceJgG17lqUnUoCQkhAvVoqJAQqKs_8eqqWpvB-fOrinBoQPrfup8TOUVYlH8B1rhvsL3mEigacdk3oierpzn5bo0vCKcDEC5AkDnjb6KixW5mJJTnGsDUVP8zFkByopdrTw6jF_R6z23DoA2dHTwCUrFFD4Q1yBFPjTnXNkoqUde049k_IQraN764xKuwb9tKfWqiee6d745H3zO1BD=w600-h450-no
 [8]: https://lh3.googleusercontent.com/byMpnuF2YMy1eyPnTwMdTxkbs_x-wEBh2hXF-NmbSblwVxjsQxouM9XmntctYci8fp_bBIZIDekn3hWrirccjjm-Y7BZiOlunigD1TYOiksjwwrmfQQ9SFw99StM2I_-ecHaLJQiJ0KXW1PQ-9E3Bfz0D2WZ204Rp2UsbwIoPUOY6LRyXuk6RAclaSktJiFtaQ2ZNKnKaGPCb0z-xkbcmCjkxDpNJw_e79k2ePZ4AhPElihp9UhtzZGezkjVOWf9WJ1z-UkVIL33OwYwkrMQNLLbp2F44F7D__w9j38Cra34zt9-m8o-uzFn_Q4vJ2gCRX2zSxcSoIMOWYCD7ng2sWx_0j5Wrnk70M0f7dnyPNwlpbapi-wtJnxXyJL_lRmvmRLQAKG7A86i1yS4sZjaAZxseiSUAgGW-tq0pieqhj-qyiWwNc56B0Oxik6207euyeX3VOdV9gje0IxJSUxriBgR7ezeV08APShJmZyHbCUVO0JW4gJ54jpPciqpumPIjDp6Is5qis_33YpWCU1zODd8gFSzDBeOLWp_jTTFTk2Dr-kVmVsaqptWsGvpBDQw1-h9vPobdRd_8N_JRyhGx0fJb9CNXhnJ7JMiP-SkAjxkvTt6g6t3OX43=w606-h480-no
 [9]: https://lh3.googleusercontent.com/dFZemNAJ4q-BzHvkShhZ-GoYMIv4GCzjsrSd0vhtHOxQy5kklKajQKmhlRbWe1zOW4IfR7N18MYNdoOHq213oMZOfWzBd0BiD-A5uc7zP4npszMYttS7I55LmmdgjTRE0LlGJmJiWFTy7scQENGg_0tZE1lFggEZ2UpAuTfT_oUPVDMa86AfwS0QBU0YU8nQ3c_iWd7oPZEHN7yW2et1d2V5HY_QAoUIpFfy_xTpfNWUmayclBUpnT5qS6Et5DJQNyoQjGJzlZTIsSEPhKUcbOZLLhjbFcLtphG449W73oaMU4wJeKoI1Y4YqAhnV0Et0-uP8B7rrCtunY8GL2_6rNo0IoxJSdhbB1YvNLlCgJu0RiUVa2liLXy2hHrpo22y2Tx5PxyZmOIWBpyia95rSy5SqQKCyKHc9yNcWLtlPTicJV97UUqiLgw9nj7zyGtCpqvA9oKypO4oOs8VhLkrFc1vhbKLizUesquEx9U65Svp3ua1WV2NUbCCNmlCD-2PX8VojZGIPsJePdOJC2QBRxsLIDd8QOp6j_60LGqGPjGFNOTWGvkQj2yaHiEkRB1dL9Wramge97h8lMjlza-uZY6qwUmYb_Lmbv6RoUCw2476PWWvFCPGw0x5=w568-h450-no
 [10]: https://lh3.googleusercontent.com/cnbKKNtySmqlRduBKxLC-pHLhy8jgJV1eX2yf5p9VZcNelvYtZNf7yKoelC6ed0DVq1bT9kKAPuoBDQYwpcUZY51crgLRX2IN3qYyylszavHwkgeRy7M9ackcirc8hHWFX-_NDilcn7okFqBshAsl__R_gCkOsyQwFS-rR7tib9C-XqGGbSC3K4zzRT7Ds7ZUPxQYFPbRoD0e7rwu3SnOK9RN89YbqgNxKHZp29ULEUY3FQ7Lpo0O-lzOGTerhk1vdXSot3IDJjocOxfWpbxBbn8ag3qgyIC1mnwndFMM7F6grSVhnlV8MP273r8sincJr53KoBovbnglIRpXCYz1w0vUNFVWpA4aweRPLWecHlzjNNz48RItOJi8qnbgmHYl1ogeVeHvBYcik1FpJPUfp6iyqjY2LW52EG6JEf8ShJbonTiVkAIIdlAyYaH6u-RhwrvhMAELso27I_58JTUXfQ3S-V6V_cyBH7_8os-23j3TgcC1h7Bt_d1XpOuW7VlORKPTdhBhWpP5gmpOIZCuOgNpBg97kUPaIeHk97pSokTCogiefsLkwnhC3cPolCRxKfMKhS8QJOkoy90so7rEugFxPEbxzhS9G4CBLD8ZRCEMAfrQ0euiJaH=w568-h450-no