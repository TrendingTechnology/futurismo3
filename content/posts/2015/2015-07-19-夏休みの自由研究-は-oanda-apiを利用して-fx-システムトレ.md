---
author: admin
categories:
- Python
- つくってみた
date: 2015-07-19T06:57:00+00:00
dsq_thread_id:
- 3.9486019e+09
pvc_views:
- 3260
tags:
- FX
title: 夏休みの自由研究 は OANDA APIを利用して FX システムトレード
type: post
url: /archives/=4392
---

夏休みの自由研究として、FX システムトレードをしようと画策中.
この記事は、そのスナップショット.

-   <https://github.com/tsu-nera/oanda-forex-study>

やったこと
==========

OANDA API 、とくに oandapyを利用して、 Pythonから
為替取引ができるようにした. oandapyは python3
で動作するようにフォークした

-   <https://github.com/tsu-nera/oandapy>

Dukascopyからヒストリカルデータをダウンロードして（これは手動）、
そのデータを利用して、バックテストを実施. バックテストの結果を
matplotlibでグラフ化.

損益のグラフ

![](./../img/2015-07-19-154658_480x344_scrot.png)

移動平行線のクロスで売買するグラフ

![](./../img/2015-07-19-154650_473x344_scrot.png)

参考にしたコード
----------------

一人ではとうていできないので、以下のコードを参考にした.

-   <https://github.com/mhallsmoore/qsforex>
-   <https://github.com/jamesmawm/Mastering-Python-for-Finance-source-codes>

MT4との比較
===========

メリット
--------

-   好きな言語が使える

    OANDA APIは REST APIなので、どんな言語でも使える. 自分は Python!

-   Linux環境で動作

    Linux環境で動作することで、Amazon AWSの
    EC2上で動作させることができる.

-   Pythonのデータ解析ライブラリがつかえる

    Pythonを利用しているので、Pythonの便利なデータ解析ライブラリを
    利用することができます. Numpy, Pandas, Scipy, Matplotlib...

    ta-libなんという、テクニカル指標に特化したライブラリもある.

デメリット
----------

-   バックテストのデータを自分で用意する必要がある.
-   プラットフォームを自分で実装するのが大変.

    MT4プログラミングはMT4というプラットフォームのおかげで、
    用意にコーディングやテストができたけれども、 OANDA
    APIを利用すると、自前ですべてプログラミングしないといけない.

今後の予定
==========

ようやく動作しそうな？ベースができたので、
これから取引のロジックを考えていこうと思う. ここからが本当の自由研究！

<p style="font-size:32px">以上、Happy Hacking!!</p>
