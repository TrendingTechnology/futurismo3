---
author: admin
categories:
- Python
- 技術メモ
date: 2017-05-09T15:53:00+00:00
dsq_thread_id:
- 5.8013153e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 1845
side:
- "y"
tags:
- Bitcoin
title: pybitflyer をつかって Python で ビットコインレートを取得してみた
title_view:
- "y"
type: post
url: /archives/=6401
---

以前、FX システムトレードをしていたので、その経験を生かし（5
万損したけどね）、 Bitcoin でシステムトレードが出来ないか調べてみた。

-   [OANDA API をつかって Python で 為替レートを取得してみた |
    Futurismo](https://futurismo.biz/archives/4266)
-   [tsu-nera/oanda-forex-study: My Forex Study
    Repository](https://github.com/tsu-nera/oanda-forex-study)

Bitcoin API 調査
================

"bitcoin api" で検索をかけた。また、言語は Python で書きたいので、
Python で使えるかも注目して調べた。

ざっと調べた限りだと、 日本では以下の会社が API を提供しているようだ。

-   coincheck: [ビットコイン決済 API ドキュメント | coincheck
    payment](https://coincheck.com/ja/documents/payment/api)
-   bitflyer: [ZaifAPI ドキュメント — Zaif api document v1.1.1
    ドキュメント](https://techbureau-api-document.readthedocs.io/ja/latest/)
-   Kraken: [Kraken | ビットコイン取引所 -
    API](https://www.kraken.com/ja-jp/help/api#general-usage)
-   Quoine: [Quoine Exchange API
    Reference](https://developers.quoine.com/#introduction)
-   Zaif: [ZaifAPI ドキュメント — Zaif api document v1.1.1
    ドキュメント](https://techbureau-api-document.readthedocs.io/ja/latest/)
-   BTCBOX: [ヘルプ](https://www.btcbox.co.jp/help/api.html)

なお、調査には、以下のサイトの情報が役立った。
システムトレードできる会社の名前が列挙されて、比較されている。

-   [ビットコインとシステムトレード (Bitcoin & Automated Algorithmic
    Trading)](https://bitcoin-system-trading.hatenablog.com/)

python library 調査
-------------------

-   [kmn/coincheck: Coincheck API Library for
    Python](https://github.com/kmn/coincheck)
-   [yagays/pybitflyer: Python wrapper for bitFlyer's REST
    API.](https://github.com/yagays/pybitflyer)
-   [Akira-Taniguchi/zaifapi: zaif の API
    を簡単にコール出来るようにしました。](https://github.com/Akira-Taniguchi/zaifapi)

BitFlyer に決めた
=================

BitFlyer の API を利用することにした。

-   [仮想通貨ビットコイン（Bitcoin）の購入/販売所/取引所【 bitFlyer
    】](https://bitflyer.jp/)

理由は、検索で上位に引っかかったから。とりあえずお試しなので、これでいいだろう。

-   [yagays/pybitflyer: Python wrapper for bitFlyer's REST
    API.](https://github.com/yagays/pybitflyer)

そんな決定で大丈夫か？大丈夫だ、問題ない（ぬわー）

インストール
============

Anaconda 環境を構築して、そこにインストールした。

``` {.bash}
conda create -n bitcoin
source activate bitcoin
pip install pybitflyer
```

BitCoin レートを取得
====================

使い方は簡単。4 行だ。

``` {.python}
import pybitflyer

api = pybitflyer.API()
while True:
    print(api.ticker(product_code = "BTC_JPY"))
```

``` {.text}
{'product_code': 'BTC_JPY', 'timestamp': '2017-05-09T14:55:00.413', 'tick_id': 388314, 'best_bid': 208700.0, 'best_ask': 208820.0, 'best_bid_size': 6.95343174, 'best_ask_size': 0.001, 'total_bid_depth': 5013.20612844, 'total_ask_depth': 1350.24206904, 'ltp': 208700.0, 'volume': 135481.11248751, 'volume_by_product': 18380.43374774}
{'product_code': 'BTC_JPY', 'timestamp': '2017-05-09T14:55:01.023', 'tick_id': 388315, 'best_bid': 208700.0, 'best_ask': 208820.0, 'best_bid_size': 6.95343174, 'best_ask_size': 0.001, 'total_bid_depth': 5011.09612844, 'total_ask_depth': 1350.24206904, 'ltp': 208700.0, 'volume': 135481.11348751, 'volume_by_product': 18380.43374774}
{'product_code': 'BTC_JPY', 'timestamp': '2017-05-09T14:55:01.477', 'tick_id': 388318, 'best_bid': 208700.0, 'best_ask': 208820.0, 'best_bid_size': 6.95343174, 'best_ask_size': 0.001, 'total_bid_depth': 5011.21504903, 'total_ask_depth': 1350.24206904, 'ltp': 208700.0, 'volume': 135481.11348751, 'volume_by_product': 18380.43374774}
```

ドキュメントは以下。

-   [ビットコイン取引所【 bitFlyer Lightning
    】](https://lightning.bitflyer.jp/docs)

API は、

-   API キーによる認証が不要な HTTP Public API
-   認証が必要な HTTP Private API

に分けられる。なのでほんとうは、pybitflyer.API()のインスタンス引数に、

-   api\_key
-   api\_secret

を取得して、設定する必要があるのだが、口座開設してすぐには発行されないので、今はこれで。
API Key, API Secret は、[ビットコイン取引所【 bitFlyer Lightning
】](https://lightning.bitflyer.jp/) にログインして、
左バーのところにある API を選択して、取得する。

どんな情報が取得できたのか
--------------------------

json ライブラリで見やすくする。

``` {.python}
import pybitflyer
import json

api = pybitflyer.API()
while True:
    print(json.dumps(api.ticker(product_code = "BTC_JPY"), 
                     sort_keys=True, indent=4))
```

取得結果。

``` {.text}
{
    "best_ask": 209190.0,
    "best_ask_size": 0.0075,
    "best_bid": 209147.0,
    "best_bid_size": 0.02277838,
    "ltp": 209557.0,
    "product_code": "BTC_JPY",
    "tick_id": 392364,
    "timestamp": "2017-05-09T15:08:51.51",
    "total_ask_depth": 1312.51807976,
    "total_bid_depth": 4998.61968155,
    "volume": 134942.30375862,
    "volume_by_product": 18338.51424803
}
```

トレード用にデータを間引く
--------------------------

ここでトレードに必要な情報は、FX の経験からいうと、

-   best\_bid
-   best\_ask

(- product\_code)

-   timestamp

データを修正する。

``` {.python}
import pybitflyer
import json

api = pybitflyer.API()

class Event(object):
    pass

class TickEvent(Event):
    def __init__(self, instrument, time, bid, ask):
        self.type = 'TICK'
        self.instrument = instrument
        self.time = time
        self.bid = bid
        self.ask = ask

    def show(self):
        print("instrument:" + self.instrument +
              ", time:" + self.time +
              ", bid:" + str(self.bid) +
              ", ask:" + str(self.ask))

while True:
    data = json.dumps(api.ticker(product_code = "BTC_JPY"))
    data_dict = json.loads(data)
    event = TickEvent(data_dict['product_code'], 
                      data_dict['timestamp'],
                      data_dict['best_bid'],
                      data_dict['best_ask'])
    event.show()
```

``` {.text}
instrument:BTC_JPY, time:2017-05-09T15:52:25.537, bid:209164.0, ask:209165.0
instrument:BTC_JPY, time:2017-05-09T15:52:26.413, bid:209164.0, ask:209165.0
instrument:BTC_JPY, time:2017-05-09T15:52:26.853, bid:209164.0, ask:209165.0
instrument:BTC_JPY, time:2017-05-09T15:52:26.697, bid:209164.0, ask:209165.0
instrument:BTC_JPY, time:2017-05-09T15:52:27.257, bid:209164.0, ask:209165.0
instrument:BTC_JPY, time:2017-05-09T15:52:27.977, bid:209164.0, ask:209165.0
instrument:BTC_JPY, time:2017-05-09T15:52:27.977, bid:209164.0, ask:209165.0
instrument:BTC_JPY, time:2017-05-09T15:52:27.977, bid:209164.0, ask:209165.0
instrument:BTC_JPY, time:2017-05-09T15:52:27.977, bid:209164.0, ask:209165.0
instrument:BTC_JPY, time:2017-05-09T15:52:30.457, bid:209164.0, ask:209165.0
```

これで、FX とおなじデータ形式になったので、FX のコードが再利用できるぞ。

追記 ヒストリカルデータが欲しいな
=================================

シストレするためには、バックテストをしたい。そのために、ヒストリカルデータが必要だ。

さがしてみると、coincheck のデータが Bitcoincharts というサイトで
Markets API として公開されているようだ。

-   [Bitcoincharts](https://bitcoincharts.com/)
-   [Bitcoincharts | Markets
    API](https://bitcoincharts.com/about/markets-api/)

以下の日本語の記事が詳しい。

-   [Bitcoincharts で bitcoin の過去の取引履歴を取得し可視化する -
    おおかみ山](https://wolfin.hatenablog.com/entry/2016/09/04/194104)

なので、Bitflyer
は止めて、[Coincheck（コインチェック）](https://coincheck.com/ja/)
に変更することにした。

coincheck も python の API がある。ありがたい。

-   [kmn/coincheck: Coincheck API Library for
    Python](https://github.com/kmn/coincheck)

これをつかって、Producer-Consumer Pattern
をつかって、値を取得する処理を途中まで書いた。

開発中のリポジトリは以下です。

-   [tsu-nera/bitcoin-study](https://github.com/tsu-nera/bitcoin-study)
