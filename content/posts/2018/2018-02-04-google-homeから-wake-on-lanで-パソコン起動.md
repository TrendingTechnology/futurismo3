---
author: admin
categories:
- ハッキング
date: 2018-02-04T06:37:29+00:00
dsq_thread_id:
- 6.457459e+09
excerpt: Google Homeから Wake on Lanで パソコン起動
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
- 209
side:
- "y"
tags:
- GoogleHome
title: Google Homeから Wake on Lanで パソコン起動
title_view:
- "y"
type: post
url: /archives/=6915
---

## はじめに {#はじめに}

Google Homeに 「パソコンつけて」といって、パソコンを起動してみました。

[https://www.youtube.com/embed/B1FW42dwSWs]

## 仕組み {#仕組み}

必要なものは以下です。

  * Google Home(Google Assistants)　・・・ 音声インタフェース。トリガを与える口。
  * IFTTT(<https://ifttt.com/>) ・・・ Google Assistantsからの通知をトリガにして GET リクエストを Beeboteに投げる。
  * Beebotte(<https://beebotte.com/>) ・・・ MQTTメッセージBroker。 IFTTTからのRestを受け取る。Mindstormsからの mqttのポーリングに応答する。
  * Linuxサーバ(Raspberry Piをつかう人が大半だけれども、自分は持っていないので LEGO Mindstormsに ev3devいれている)
  * python + paho-mqtt ・・・ Pythonで mqtt通信を実施するためのライブラリ。
  * wakeonlan ・・・ wakeonlan発行ツール
  * 起動対象のパソコン

処理の流れは以下のような感じ。

  * GoogleHome -(音声)→ IFTTT -(REST)→ Beebotte ←(監視)- Mindstorms -(wol)-> PC

## システム構築 {#システム構築}

基本的には、以下の記事に従って構築しました。

  * <https://qiita.com/msquare33/items/9f0312585bb4707c686b>

IFTTTや Beebotteの設定は上記記事に詳しく書いてあるので、参照してください。ここでは省略し、差分のみを書きます。

### Mindstormsでの設定 {#mindstormsでの設定}

Beebotteに通知されたGETリクエストを監視するために、paho-mqttを入れます。

    $ sudo apt install pip
    $ sudo pip install paho-mqtt
    

以下のようなスクリプトをpythonで書きました。

mqtt_client.py:

```python
#!/usr/bin/python
import paho.mqtt.client as mqtt
import json
import os

HOST = 'mqtt.beebotte.com'
PORT = 8883
CA_CERTS = 'mqtt.beebotte.com.pem'
TOKEN = '[channelのトークン]'
TOPIC = 'MySmartHome/voice'
CMD = 'wakeonlan 70:85:c2:67:7a:66'

def on_connect(client, userdata, flags, respons_code):
    print('status {0}'.format(respons_code))

def on_message(client, userdata, msg):
    data = json.loads(msg.payload)["data"][0]
    if data["action"] == "on":
        os.system(CMD)

if __name__ == '__main__':
    client = mqtt.Client()
    client.on_connect = on_connect
    client.on_message = on_message
    client.username_pw_set('token:%s' % TOKEN)
    client.tls_set(CA_CERTS)
    client.connect(HOST, PORT)
    client.subscribe(TOPIC)
    client.loop_forever()
```

[UbuntuでWake on Lanするための設定メモ | Futurismo][1]

このスクリプトをシステム起動時に起動するようにサービス化します。

  * <https://gist.github.com/tstellanova/7323116>

シェルスクリプトを作成。 /usr/local/bin/hal.sh

     #!/bin/bash
     /home/robot/scripts/mqtt_client.py 
    

サービスファイルを以下のように、作成 /lib/systemd/system/hal.service

  * <https://kernhack.hatenablog.com/entry/2014/09/20/110938>

      [Unit]
      Description=Hal Service
      After=network-online.target
    
      [Service]
      Type=simple
      ExecStart=/bin/bash /usr/local/bin/hal.sh
    
      [Install]
      WantedBy=network-online.target
    

シンボリックリンク作成。

    ln -s /lib/systemd/system/hal.service /etc/systemd/system/hal.service
    

サービス起動。

    sudo systemctl daemon-reload
    sudo systemctl enable hal
    sudo systemctl start hal
    

rebootして、サービス起動していればOK.

 [1]: https://futurismo.biz/archives/6885
