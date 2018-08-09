---
author: admin
categories:
- ライフログ
date: 2018-01-27T07:41:17+00:00
dsq_thread_id:
- 6.440853e+09
excerpt: Fitbit Apiとpythonで心拍数の取得をする
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
- 197
side:
- "y"
tags:
- fitbit
title: Fitbit Apiとpythonで心拍数の取得をする
title_view:
- "y"
type: post
url: /archives/=6903
---

## はじめに {#はじめに}

fitbit ionicを購入しました！ fitbit Charge, altaに続いて、3台目の購入となります。ここまでくると私もfitbit マニア？？

<blockquote class="twitter-tweet">
  <p dir="ltr" lang="ja">
    ついに私もスマートウォッチデビュー。 <a href="https://t.co/tePzHJqouy">pic.twitter.com/tePzHJqouy</a>
  </p>
  
  <p>
    — 神楽家きつね (@tsu_nera_s) <a href="https://twitter.com/tsu_nera_s/status/955394973431558144?ref_src=twsrc%5Etfw">2018年1月22日</a>
  </p>
</blockquote>

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=fox10225fox-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07798SYN8&linkId=02213a2eee8868e1b220d9899e43c0ef" width="300" height="150" scrolling="no"></iframe>

購入の動機は、睡眠の深度を測る機能が欲しかったから。てっきり、浅い睡眠で起こしてくれる機能がついたと思ったのだけれども、それはなかった(T_T)。

別の理由は、fitbit初のスマートウォッチということで、ディベロッパーとしてなにか応援できないかと思ったから。というわけで、このHackableなガジェットをハックします！ Let’s Hack begin。

## Fitbit APIをつかってみる {#fitbit-apiをつかってみる}

データの取得をするために、Fitbit APIを利用する。

  * <https://dev.fitbit.com/build/reference/web-api/>

まずは、API の IDを取得する。

<https://dev.fitbit.com/login> からログインして、 REGISTER AN APP を選択。情報を入力する。

  * Application Name 適当
  * Description 適当
  * Application Website 適当
  * Organization 適当
  * Organization Website 適当
  * OAuth 2.0 Application Type Personalを選択
  * Callback URL <https://127.0.0.1:8080/> と入力
  * Default Access Type Read & Write を選択

次に、Access Tokenを取得する。取得するために、Pythonのツール、python-fitbitを利用する。

  * <https://github.com/orcasgit/python-fitbit>

    $ git clone git@github.com:orcasgit/python-fitbit.git
    $ cd python-fitbit
    $ pip install -r requirements/dev.txt
    $ ./gather_keys_oauth2.py <Client ID> <client secret>
    

Access Tokenと Refresh Tokenをメモする。以下の４つはプログラムで必要になるのでメモする。

  * Client ID
  * Client Secret
  * Access Token
  * Refresh Token

## スクリプトの作成 {#スクリプトの作成}

心拍数を取得するスクリプト。

```python
import fitbit
import pandas as pd

CLIENT_ID =  "xxx"
CLIENT_SECRET  = "xxxx"
ACCESS_TOKEN =  "xxxx"
REFRESH_TOKEN =  "xxxx"

DATE = "2018-01-26"
client = fitbit.Fitbit(CLIENT_ID, CLIENT_SECRET,
                       access_token=ACCESS_TOKEN,
                       refresh_token=REFRESH_TOKEN)

stats = client.intraday_time_series('activities/heart', DATE, detail_level='1min')
heart_beat = stats["activities-heart-intraday"]["dataset"]

heart_df = pd.DataFrame.from_dict(heart_beat)
heart_df.index = pd.to_datetime([DATE + " " + t for t in heart_df.time])
heart_df.drop(["time"], axis=1, inplace=True)
heart_df.plot(y="value", figsize=(20,5))
import fitbit
import pandas as pd

CLIENT_ID = #
CLIENT_SECRET  = #
ACCESS_TOKEN =  #
REFRESH_TOKEN =  # 

DATE = "2018-01-26"
client = fitbit.Fitbit(CLIENT_ID, CLIENT_SECRET,
                       access_token=ACCESS_TOKEN,
                       refresh_token=REFRESH_TOKEN)

stats = client.intraday_time_series('activities/heart', DATE, detail_level='1min')
heart_beat = stats["activities-heart-intraday"]["dataset"]

heart_df = pd.DataFrame.from_dict(heart_beat)
heart_df.index = pd.to_datetime([DATE + " " + t for t in heart_df.time])
heart_df.drop(["time"], axis=1, inplace=True)

# plot
heart_df.plot(y="value", figsize=(20,5))

# export csv
heart_df.to_csv("heartbeat.csv")
```

以下のような時系列グラフが出力される。寝ている時間は心拍数が低い。

![][1]

 [1]: https://lh3.googleusercontent.com/P0XW6ofTX6N4isuD11dnV1zYuRgUoocPX215ZiMErzWQ_IsrEDWl6RUw2y557kg78GSGQEqMKuOvJBCC7aNJfXvp_fRx3vy4It2xGOk60-IKFyyLFW4_y91oJp_dLxrFty1buXih0Ulwy6I09-SRj1Wa1BM4JvPUYmmE5RnHgertRQ8viKa8z3jbxgUP4WAI8C2SeeV4kGyxO85e7k1fSqgKycnWIQ1cjMn-ANyya-UhQQD4gy9EBd2h9DH1XPBby5YZ6qf8PcVt5bUjlveezMuYs3_F7ncCx2-iAXonbNTAH0egKdQQSt7-kk1Py4lhzDBbxSY5Kt3M8HF-7TRPo7xY7VQswhBqby_sQvT3uBZz6JG6qoRo0BnHvahvVcKil6XRT7K7t8cp7R46sgXB2SJg113uBB6xLhfk6RIERtfP2y5LbWlyMUAFs2_Cet6JuUH0Avos25Gf5iLdE3uT8qfSBHqC9g-KlKqG0ArvtpgG1UM3JYFzce14WR_Lm3FReEx44anFslzdsHeiHAXVr4Nkd54eJHQFLWpPeS5j1kMERsi7bwRTYkf-McS5XMR8_mPXHwK-cVuLx7qd70iQsJkvkU8hhxKtM-bTBB0=w1318-h435-no
