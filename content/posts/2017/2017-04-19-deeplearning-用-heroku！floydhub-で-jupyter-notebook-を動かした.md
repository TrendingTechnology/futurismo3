---
author: admin
categories:
- 機械学習
date: 2017-04-19T10:40:00+00:00
dsq_thread_id:
- 5.739957e+09
excerpt: DeepLearning 用 Heroku！FloydHub で Jupyter Notebook を動かした
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
- 1339
side:
- "y"
tags:
- DeepLearning
title: DeepLearning 用 Heroku！FloydHub で Jupyter Notebook を動かした
title_view:
- "y"
type: post
url: /archives/=6272
---

Kaggle に 挑戦しているのだが、 自分の 非力な ノート PC で DeepLearning
を勉強するのに限界を感じてきたので、 DeepLearning 用のクラウドサービス
FloydHub で GPU を使ってみた！

-   [Floyd Zero Setup Deep Learning](https://www.floydhub.com/)

FloydHub とは
=============

DeepLearning 専用の Platform-as-a-Service(PAAS).

Web サイトいわく、DeepLearning 用の Heroku だそうだ。

なにがうれしいかというと、100 時間分フリートライアルで GPU
が無料で使えるのだ。

Google の AWS
を使ったことがないので、どっちがお得がわからないのだけれども、
とりあえず無料トライアル分だけ遊ぶのもよし、使用料を払って使うもよし。

詳しくは、料金表を見てください。

-   [Floyd Zero Setup Deep Learning](https://www.floydhub.com/pricing)

Floyd インストール
==================

floyd は CLI が用意されているので、pip でインストール。

``` {.bash}
$ pip install -U floyd-cli
```

続いて login

``` {.bash}
$ floyd login
```

token を取得するために WEB ブラウザが立ち上がるので、 token
をコピペすれば、認証完了。

FloydHub で Jupyter Notebook を使う
===================================

今回は、この jupyter notebook を動かした。

-   [kaggle/double-layer-cnn.ipynb at master ·
    tsu-nera/kaggle](https://github.com/tsu-nera/kaggle/blob/master/digit-recognizer/double-layer-cnn.ipynb)

公式ドキュメントは以下にある。

-   [Home - FloydHub](https://www.floydhub.com/)

jupyter notebook の アップロード
--------------------------------

jupyter notebook があるディレクトリに移動して、floyd init
&lt;プロジェクト名&gt; で初期化。

``` {.bash}
$ floyd init kg-digit-recognizer
Project "kg-digit-recognizer" initialized in current directory
```

Input データのアップロード
--------------------------

Input データは、実行用ファイルとは別に管理される。

まずは、データがあるディレクトリに移動して、floyd data init を打つ。

``` {.bash}
$ floyd data init kg-digit-recognizer
Data source "kg-digit-recognizer" initialized in current directory

    You can now upload your data to Floyd by:
        floyd data upload
```

次にサーバにアップロードする。

``` {.bash}
$ floyd data upload
Compressing data ...
Creating data source. Total upload size: 14.2MiB
Uploading compressed data ...
Done=============================] 14909284/14909284 - 00:00:16
Upload finished
DATA ID                 NAME                              VERSION
----------------------  ------------------------------  ---------
adkR2QJxDeUDBS4ZTdqDCW  tsu_nera/kg-digit-recognizer:1          1
```

Jupyter mode で Floyd 起動
--------------------------

jupyter notebook があるディレクトリに戻ってきて、floyd run
を打って起動。

このとき、オプションに

-   --mode jupyter をつけると jupyter notebook 用に起動する
-   -gpu をつけると、GPU を使用するように指定出来る
-   -data &lt;Data ID&gt; で input データを利用することが出来る

``` {.bash}
$ floyd run --mode jupyter --gpu --data adkR2QJxDeUDBS4ZTdqDCW

Creating project run. Total upload size: 148.5KiB
Syncing code ...
Done=============================] 154412/154412 - 00:00:00
RUN ID                  NAME                              VERSION
----------------------  ------------------------------  ---------
nDTDCvWFLABp6pcgq6UP9X  tsu_nera/kg-digit-recognizer:2          2

Setting up your instance and waiting for Jupyter notebook to become available ......

Path to jupyter notebook: https://www.floydhub.com:8000/ZigtoBzouVNxt7yT4L7vQf
```

Jupyter Notebook を使う
-----------------------

URL を開くと、いつもの Jupyter Notebook
の画面が現れるので、あとは自由に使う。

注意点は、

-   入力データは /input
-   出力データは /output

を指定する必要がある。

output を ダウンロードする
--------------------------

floyd output &lt;RUN ID&gt; を指定すると、/output の URL が帰ってくる。

``` {.bash}
$ floyd output nDTDCvWFLABp6pcgq6UP9X                                                                                          18:29:01
Opening output directory in your browser ...
```

その URL
をブラウザに入力すると、出力データがあるので、ダウンロードする。

floyd output &lt;DATA ID&gt; でも同じことができる。

``` {.bash}
$ floyd data status                                                                                                            18:53:39
DATA ID                 CREATED         DISK USAGE    NAME                                        VERSION
----------------------  --------------  ------------  ----------------------------------------  ---------
ZigtoBzouVNxt7yT4L7vQf  17 minutes ago  307.29 KB     tsu_nera/kg-digit-recognizer:2/output             2
adkR2QJxDeUDBS4ZTdqDCW  an hour ago     122.2 MB      tsu_nera/kg-digit-recognizer:1                    1
aoVTWy7hL9fdNssGH4hX5n  an hour ago     122.71 MB     tsu_nera/kg-digit-recognizer:1/output             1

$ floyd data output ZigtoBzouVNxt7yT4L7vQf                                                                                     18:53:47
Opening output directory in your browser ...
```

Jupyter Notebook を終了する
---------------------------

floyd stop &lt;RUN ID&gt; で jupyter サーバを停止する。
そうしないと、いつまでも動作し続けることになるので、つかわなくなったら停止すること。

``` {.bash}
$ floyd stop nDTDCvWFLABp6pcgq6UP9X
Experiment shutdown request submitted. Check status to confirm shutdown

$ floyd status nDTDCvWFLABp6pcgq6UP9X
RUN ID                  CREATED         STATUS      DURATION(s)  NAME                            INSTANCE      VERSION
----------------------  --------------  --------  -------------  ------------------------------  ----------  ---------
nDTDCvWFLABp6pcgq6UP9X  54 minutes ago  shutdown           3250  tsu_nera/kg-digit-recognizer:2  gpu                 2
```

shutdown になっていれば OK.

まとめ
======

とても便利なものを知ったという気がしてならない。

Deep Learning の勉強をしていると、自分の CPU
が遅くて遅くてとてもイライラしていた。

値段も、とても安いよとサイトには買いてあるので、おそらく安いのだろう。

これから流行る予感。便利なサービスはどんどん使っていこう。
