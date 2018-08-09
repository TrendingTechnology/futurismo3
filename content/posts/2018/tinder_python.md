---
title: "Deep Learningで出会い系アプリ tinder の画像判定をしてlikeを自動化する"
date: 2018-05-14T17:47:09+09:00
size: false
---

<img src="https://lh3.googleusercontent.com/88Vr382ZFo2bAbu_eM9KT1TNFC4ttFNdtuS_hbnUXA2K_sR3d2mdXZEHLTrxMr8GsT7hGvgL_Egyu8MUScYWxBaIL0bGp8lohotnVilz462AhX5-CPJ-d3fVq66Da1iZmG6P3mXjASmB0k51_52vU9hgJmFI7kWprdfYuFYytw4PimBLwj_jGx9KQxw8T-hHxrYs9JBKNxoIEmJVE3vXWQZ-RgK8CQdl_t-lrhQp1gOj0ZYqsKoTIDYuz21MQMJLLEo9wgwXd3I6HpS55ca_iAyLU_cjp8GvMJzgJTOpXCWNTSWottrlUMi5smalIzLx1d8DVzlxm0yi6pPCNId2OOE9Yn14lZr_L7INUabvXNtUu0wgXkfJOhrrxTbuU9A4lJHRKoeL-8tTLNyk71awkfIx1ZwyD8DI9s6L-it0ISh3ZrJzRBCGgvXq00TxqTU6qDrBGeLhPYxMKozNOXeaQm1Ju_ubPIY3xxv1DRIT4lbgF2mT2LJl3pnWwQ82VSarwpTH8e3m8LHJyrBXl72wDM_ZdLvF5EX3p13oQAEMbCmmHfo_zwrCbxhnT1fdicJAb5gqmrQ6f2g8y1Cg40qKPh7RFD2kBm_IvKK0rgc=w400-h300-no">

## はじめに
スケベとDeep Learningが出会うとき、技術の進化は訪れる！

ということで、出会い系アプリtinderをpythonからいじる pynderを試してみました。

そして、Deep Learningの無駄遣いをして、画像データを元に美人判定をして、
美人ならばlikeを、そうでなければnopeをすることをしてみました。

今回の記事は、以下の記事に触発されています。
- [Deep Learning \(Machine Learning\) applied to Tinder – Philippe Remy – My Blog\.](https://philipperemy.github.io/tinder-deep-learning/)

## pynderをいじる
まずは、インストールから。
- https://github.com/charliewolf/pynder

```bash
$ pip install pynder
```

### facebook トークンの取得
https://tinderface.herokuapp.com/ にアクセス。

GET STARTEDを押すことで、ガイドラインが表示されるので、それに従って tokenを取得する。

### はじめの一歩
以下のようなサンプルソースを動かす。

```python
import pynder
session = pynder.Session(facebook_auth_token) # 取得したaccess tokenを設定

for user in session.nearby_users():
    print(user.name)
```

名前が取得できました。

```text
M
みっ
Charlene
はるな
詩羚
Yuki
Mi
Nattarawan
みなみ
Marina
かな
```

### 画像データを手に入れる
これでtinderのユーザの画像データが取得できました。

```python
users = session.nearby_users()
user = next(users)

import urllib.request
 
url = user.thumbnails[0]
savename = "test.png"
 
png = urllib.request.urlopen(url).read()
with open(savename, mode="wb") as f:
    f.write(png)
```

### like, nopeを送信する
like, dislikeのメソッドを呼び出すことで, likeとnopeを送信できます。

```python
user.like
user.dislike
```

これで、pynderの調査は終わり。次は、Deep Learningです。

## Deep Learningで美人判定
人工知能に美人かそうでないかを判定させるというのは、いかがなものかと思うのだが、
それは置いておいて、美人判定をする方法を調べました。

### 先行事例
- [Deep Learning \(Machine Learning\) applied to Tinder – Philippe Remy – My Blog\.](https://philipperemy.github.io/tinder-deep-learning/)
- [How Attractive Are You in the Eyes of Deep Neural Network?](https://towardsdatascience.com/how-attractive-are-you-in-the-eyes-of-deep-neural-network-3d71c0755ccc)
- [Can deep learning help find the perfect date?](https://www.kdnuggets.com/2015/07/can-deep-learning-help-find-perfect-girl.html)

### SCUT-FBP5500 Dataset
SCUT-FBP Datasetというものがあった。
顔写真のデータと、その表情がどのくらい魅力的かどうかを5 段階評価でラベルづけされたもの。

- https://arxiv.org/abs/1511.02459
- https://github.com/HCIILAB/SCUT-FBP5500-Database-Release

美人かそうでないかの二値分類をするときの学習に使うためのラベルづけが大変そうだと思ったがか
このデータセットを使って学習ができそうだ。1,2,3点の人はブス、4,5の人は美人と判定する。

### 実験
SCUT-FBP のデータセットを利用して、美人判定モデルを作成しました。
詳細は、gistに譲りますが、このモデルでは、85% の精度を達成できた。

- https://gist.github.com/tsu-nera/7f6c46a960c2810f652931a28fb3897c

以下、要点を列挙。

- データセットの 女性だけを利用。2250枚。そのうちの1/5をvalidationとして利用。
- fastai(PyTorch)ライブラリを利用。ResNet32をファインチューニング。
- チューニング方法は[過去記事](https://futurismo.biz/2018/05/fastai_lesson2/)参照。85%の精度。
- targetラベルは、ratingを利用。3.0以下をnope, 3.0以上をlikeと分類するようにする。


## tinder の画像から推論
画像データの取得、モデル作成とできたので、次は画像データを元に like/nopeを判定する。

### like
<img src="https://lh3.googleusercontent.com/4zQgbHcrnX8CFBpEs0oo_tqKc00UHNvzZ7pTrHtfQO4izEm8bC5h3CIYswm953Pc33Xy2K4i2NFfd5jiGeyO7IKPOoRjWAhV16XMGLkeYqls0An051kpV5VsGSixt1qQfYloX8HIiYupemx2RTf4ueHUSOIuf3XYZoC351En0oyO5Ua0Tcxvvnt0TnTjoLnnZnWGFsbw8VgJgAvnGHrRmD1S-6c586TS3cx6e21HgaU-eGGJOhNV_WnSxjE5Af9skLFJP6uefNhmXXQ6HsAXh93lwxeKIly8XxNE6eC6pyKV0-HDGVpj1WQ3jhoPq5uYcRufJBn9uZynWhSVa9VgSydINzRHeLEqBXxsK-XyhghkjB7P1yMvyWkOK7nA-2S4S7IlYWH8FUl6SUnnE9Zy7Vo58t65FwKsjXucDIZ7Dpx0lRc4uIFe9gOJmi8rdIPMMsrpZPqiWlGCy_bANMUIBFachpEmIKdlfhVvi8hdGUpFMOFc8NjyTIBVjpmElXM4Zta3Ng9LC4wgOu7Y6Ig9ZvSxk1f-OFjNSEuI5eqZI-qru9ZrjMPv5E8-l3yvuyv-HPJJo0rZkQI1R2wbFNriGyOsfGVXXX3_qf33jwk=w618-h500-no">

<img src="https://lh3.googleusercontent.com/Q0POUddJ53MlUwp3rUCXz0TmPSc60CTDoWJMEVbXfK9pVK8Ab4Y3Ov7LKCuj-bCWT73yOqXgxTDO9zEYJzrlAIq5Q8MuqbhIfuSjFJdDUN4hyfsu4C7x4Z1d1acokd6vDg8Rvgk84jB0JM0p4_g6m_PcMje5DGBwSnU_ZsMz7rIYeDHdbKmcazBfyAcO0p1kS45NY76t3e7g-Q-Sj_nOho7SAmR1xz1o49wUSaSQ2STkBGonO1EW_wukMJcqdc9HZamUTfAjdOABvuBbb-O1XnuTvf_AWmLBq_MrEnfV9-UjU5kkztR2liwcItAHJyfteX6xoppdyczMYgberTdsC3Yh8gBHUPKZm2ybRhQ6rtg6PhWH5oq6TI4V5CFR65tQKWpZkBcdf-HOgvJkHaI5tyfxTn4dsvCDcr-aUG_rxY2YtKhZ3zfCZ3rERcWZSDXcY9ZTyhRSuivuoUWziC8N6o5pKawbnEbvCuyX8dZJ-j_0VQgQhdoxV3jTzFrzcArG4JT8QSWSh9HZQI0pHWS-HHLyUL_N6WTAfyAkeMNcmjbUQjY3kDEwmyNDn3An3SS6zWxH4VAAaPOB7lJWRzq-KgpmMxwyNLoWhH0FGp4=w404-h427-no">

### nope
<img src="https://lh3.googleusercontent.com/1-pBy0D65oWfYfoaZeGvG8WdoScGXCyyopIF5DdQyMotSGUvsSLFSH3p3xoMkGDrw92WdhFavvKOxqU9pHygmCi09G_fnGnAz08rLX3n8hLm-Wswi2i0JlISw51CmJ-nU2IUDB20yJhm9RY7hrRY1sMldpwna-zv39dhvOhTYnqDo731gdHzkiwwaCJRTre2S26wjKfLWiokiq37YKhoJGghU8sim6SRkNkIAcDe8xCaqMVzE71ckV8LlJJrlyTMzV-ZCdAv5N6tKQ1GrfGVC-GtLH8Rx6qijt1XvUomYPrH8kLVS6pvWkycoRib17Wpqct7mNS1SZEcX5MhDQtr5390xU7ZING9Wn4O3WPHooj2RoM_bSN3hdBPyIKeI28cP66J6SOXHar3wXHaonF1qmtrMarfRh0KLPHE4KNvhiaPZtqUucFUvJ2WNJEKGgGNu5Dzm8KnPlWl0rVJDkbFBt8lO8J5EHe7H-LrBNQk84qUNaq4A6TzXJgELdraXGyju468TWGUrav2OYL4BAa1qzCUc9spNC5IaypbZYvMeJm7cwCxMYPE30GhmIPS1XVajmY75jpnT1d7LW1cmOdnZItjgqMPYO9eBcJ4iq0=w434-h419-no">

<img src="https://lh3.googleusercontent.com/GxZbjwPWrK6tMcMyTCDv_oNploWRG8v64S65rmlYPhOlqOxIM1LEDOJQNe9ajzAnjR0s3ggzss_wQkwMbkh9G8YpW-vOKcs3AiXntM3qlfNLIIH7acEu0S96z_sNmVqMBIT0cZyyhXg2RpOJqQJ1CBJCTKU5oZkEwfUYyTsx8qud6Zfib9uJlPGz6Xg2Hfhf_YZpEaawzSTB7H_4anBpEtSV5lJrirMv1bOWAsjhPT1LK4Ea2jfMpLTppP1Lsb4_1Ktuvmj4GvSYWUy6poNLT7UYpZt6IsabyKiD5CAoZyMw8LlOkv3rmLOF1skjoRSyOUfVSU2NvBpIrPbuRxLsKVkrnBN1XrSBUozlxN2U4L80IhCQJakepYpre7C4DAxXcOqmAxMMQ186WzA2nFQwWB5Enr-_i6f0uubw6zdgGIz7IvRxSmdv7utFmhSCyG7SIS-usHojhk4pFb9-MrB-byHG2pCNlqexbFE22Sd--RYJ74DUcqxFHKrnOYxcpF2IZnvrtpPB4HtYfoR-FcfeC-BzchJ0AySycR5vz4cU-DauvQw4dzFndoebnZYzAn-vOAPYAKLKMKFbzeoncgUn7M2JiFDilLY1TK094fs=w384-h426-no">

を、なかなかよさそうじゃんと思ったのだけれども、犬を美人判定にかけたらlikeと判定されてしまった。。
いやいや、犬は、好きではないのですが。。

## まとめ
以下ができた。

- pynder を利用して、tinderから画像データの取得
- deep learning を利用して、美人判定モデルの構築
- 美人判定モデルからの like/nope判定の自動化

美人判定モデルの精度がよかったら、ここから機械学習アプリの作成に移るところだった。
しかしながら、判定結果に不満があり、アプリ作成までは実施しないことにした。

今後の課題は、

- 人判定のモデルをつくる。Object Detection?? 犬をlikeと判定するようではダメだ。
- 画像以外の特徴量もまぜる。紹介文とか。NLP。
- データセットを多くする。自分でラベルづけをしていって、それを学習していく。

現在開催中のkaggleのavitoコンペがこのtinderの問題に似ている気がするので、
avitoコンペで培ったkaggle力を無駄に利用して取り組みたい。

また、調べてみると、arxivにもtinder関連のpaperがいくつかあるようだ（スケベめ）。これを読んでいこう。

- https://arxiv.org/search/?query=tinder&searchtype=all&source=header
