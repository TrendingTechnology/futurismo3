---
author: admin
categories:
- Python
date: 2015-07-03T12:39:00+00:00
dsq_thread_id:
- 3.901197e+09
pvc_views:
- 10982
tags:
- FX
title: OANDA APIをつかって Pythonで 為替レートを取得してみた
type: post
url: /archives/=4266
---

少し前に mt4をいじってみたが、その先が取っ掛かりがつかめずにいた.

-   [MQL4で Hello World | Futurismo](https://futurismo.biz/archives/4010)

FXは自分は初心者なのだが、FX単体だと、飽きてしまった.
損してでもいいので、統計学とあわせて勉強できないかと道を探していた.

また、mt4のためのMQL言語は、C言語に近い言語で、拡張性がない.
できればpythonを利用したいなーと思っていた.

Rest APIのことを調べていたら、Rest APIで 為替情報を取得できるという
おもしろいAPIを OANDA 証券が提供しているのを見つけたので、試してみた.

-   [OANDA FX 外国為替取引 API のご紹介 | OANDA
    Japan株式会社](https://www.oanda.jp/api/)

やってみる
==========

今回は、無料で即日利用できるデモ口座を開設して試す.

口座を開設
----------

右上のデモ口座開設をクリックして、手順にしたがって口座開設.

-   <https://www.oanda.jp/>

デモ口座にログインして、APIアクセスの管理を選択し、 Personal Access
Tokenを発行.

為替レートを取得
----------------

APIのドキュメントは以下にある. なんと日本語! 微妙な訳なので自動翻訳?!

-   <https://developer.oanda.com/docs/>

Pythonで動かしてみよう. 為替レートを取得するサンプルは以下にある.

-   <https://github.com/oanda/py-api-streaming>

access\_token, acount\_idを自分のもので置き換えて実行.

``` {.bash}
[tsu-nera]% python2 streaming.py
{"tick":{"instrument":"EUR_USD","time":"2015-07-03T11:55:53.198067Z","bid":1.10999,"ask":1.11004}}
{"tick":{"instrument":"USD_CAD","time":"2015-07-03T11:55:52.634607Z","bid":1.25685,"ask":1.25712}}
{"tick":{"instrument":"USD_CAD","time":"2015-07-03T11:55:54.816590Z","bid":1.2569,"ask":1.25717}}
{"tick":{"instrument":"USD_CAD","time":"2015-07-03T11:55:58.650057Z","bid":1.25691,"ask":1.25716}}
{"tick":{"instrument":"USD_CAD","time":"2015-07-03T11:55:58.807926Z","bid":1.25688,"ask":1.25714}}
{"tick":{"instrument":"USD_CAD","time":"2015-07-03T11:55:59.070828Z","bid":1.25686,"ask":1.25711}}
{"tick":{"instrument":"EUR_USD","time":"2015-07-03T11:55:59.338964Z","bid":1.10997,"ask":1.11002}}
{"tick":{"instrument":"USD_CAD","time":"2015-07-03T11:56:00.915263Z","bid":1.25685,"ask":1.25711}}
```

これはすごい...

API Wrapperもある
-----------------

API Wrapperを利用すれば、rest の知識なしに 操作ができる.

-   <https://github.com/oanda/oandapy>

Mastering Python for Financeという本に、
oandapyを利用したトレード方法が書いてある.

-   <https://www.amazon.co.jp/Mastering-Python-Finance-James-Ma/dp/1784394513>

oandapyを利用した、為替レート取得.

``` {.python}
import oandapy
import time

oanda = oandapy.API(environment="practice", access_token=ACCESS_TOKEN)

while(True):
    time.sleep(1)
    response = oanda.get_prices(instruments="EUR_USD")
    prices = response.get("prices")
    print(prices[0])
```

おわりに
========

まずは初めの一歩.
次はバックテストをやってみたいところだ.以下が参考になりそう.

-   [Forex Trading Diary \#1 - Automated Forex Trading with the OANDA
    API -
    QuantStart](https://www.quantstart.com/articles/Forex-Trading-Diary-1-Automated-Forex-Trading-with-the-OANDA-API#)
-   <https://github.com/mhallsmoore/qsforex>

また、このサイトの管理人さんは、OANDAを利用して実際にトレードしているようだ.

-   [夢と、希望と、勇気と、トレード戦隊
    バイセルマン！](https://ameblo.jp/wtpmjgdaxuqnkhebcfilorvy/)

Metatrader は 古くからある売買方法だが、 OANDA
APIを利用した方法を利用している人はほとんどいないので、
ブルーオーシャンかもしれない.
しかし、情報がとても少ないというリスクがある.

この海に飛び込んだらPythonがつかえるというモチベーションの炎が消えて
しまわないか心配だ.

Special Thanks
--------------

-   [OANDA fx Trade API
    を使って、リアルタイムな為替レートを取得してみる -
    うなの日記](https://unageanu.hatenablog.com/entry/2015/05/12/104942)
-   [OANDAの REST APIを使ってphpから口座情報にアクセス | The Coherence
    World](https://nsplat.wordpress.com/2015/05/24/oanda%E3%81%AE-rest-api%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6php%E3%81%8B%E3%82%89%E5%8F%A3%E5%BA%A7%E6%83%85%E5%A0%B1%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9/)
-   [Scala - リアルタイム為替レートをとってみた -
    Qiita](https://qiita.com/takuan_v2/items/9c17ba43c8cf50872143)

    <p style="font-size:32px">以上、Happy Hacking!!</p>
