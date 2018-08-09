---
author: admin
categories:
- Python
- つくってみた
date: 2017-07-25T13:23:09+00:00
dsq_thread_id:
- 6.014628e+09
excerpt: MQTTでMindstorms EV3 を パソコンのキーボードからリモート操作
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
- 350
side:
- "y"
tags:
- mindstorms
title: MQTTでMindstorms EV3のロボットカーを パソコンのキーボードからリモコン操作
title_view:
- "y"
type: post
url: /archives/=6661
---

LEGO Mindstorms EV3 を パソコンのキーボードから操作してみます。

私は、LEGO Mindstorms EV3の教育版を買ったので、家庭版と違いリモコンがありません。でも、ラジコンのようにロボットカーを操作したい！そこで、MQTTというプロトコルを利用して、ノートPCのキーボードを使ってロボットカーを制御する方法を思いつきました。

まずは、結果をどうぞ！

[https://www.youtube.com/embed/kl_07BWGNWo?ecver=1]

### 環境 {#-}

  * Publisher(PC) Ubuntu 16.04
  * Subscriber(ev3) ev3dev
  * Python 3.6
  * ev3dev-lang-python

## ロボットの組み立て {#-}

この本に載っているtribotを作成しました。

<a href="https://www.amazon.co.jp/dp/B00OMCKW5A/ref=as_li_ss_il?_encoding=UTF8&#038;btkr=1&#038;linkCode=li2&#038;tag=fox10225fox-22&#038;linkId=e011d3a7534428853cce5704353b4914" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&#038;ASIN=B00OMCKW5A&#038;Format=_SL160_&#038;ID=AsinImage&#038;MarketPlace=JP&#038;ServiceVersion=20070822&#038;WS=1&#038;tag=fox10225fox-22" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=fox10225fox-22&#038;l=li2&#038;o=9&#038;a=B00OMCKW5A" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

## Setup {#setup}

MQTTという軽量な通信プロトコルを使った方法がev3devのサイトに紹介されていたので、それを参考にする。

  * [Sending and Receiving Messages with MQTT][1]

MQTTではpublisher(出版者)が発するメッセージをbroker(仲介者)がsubscriber(購読者)へ配信する。今回は、publisherが ノートPC, brokerとsubscriberが ev3になる。

ev3に brokerサーバソフトをインストールする。mosquittoというソフトをインストール

  * [An Open Source MQTT v3.1 Broker][2]

<pre><code class="lang-sh">sudo apt-get install mosquitto
</code></pre>

インストールが完了すると、サービスが立ち上がる。

続いて、mqttをPythonで使うための pahoというソフトをノートPCと ev3の両方にインストール。

  * [Eclipse Paho &#8211; MQTT and MQTT-SN software][3]

<pre><code class="lang-sh">sudo apt-get install python3-pip
sudo pip3 install paho-mqtt
</code></pre>

PC 側

<pre><code class="lang-sh">pip3 install paho-mqtt
</code></pre>

これで、MQTT で通信する準備は整った。

## punput {#punput}

Pythonで押されたキーボードのキーの取得をするために、punputというライブラリを利用する。

ラズパイカーで同じようなことを考えている人のブログ記事を発見した。これはありがたい。

  * [Pythonでキーイベントを取得したかったけどできなかった話←できました。 &#8211; 豆腐とコンソメ][4]

    pip install pynput
    

## コード {#-}

最後に、書いたコードが以下。これで、キーボードの十字キーを使ってロボットカーをリモコン代わりに操作することができた。

 [1]: https://www.ev3dev.org/docs/tutorials/sending-and-receiving-messages-with-mqtt/
 [2]: https://mosquitto.org/
 [3]: https://www.eclipse.org/paho/
 [4]: https://tohutokonsome.hatenablog.com/entry/2017/05/22/002531