---
author: admin
categories:
- Python
- ハッキング
date: 2018-02-04T14:20:10+00:00
dsq_thread_id:
- 6.458041e+09
excerpt: Google Homeから Linux上のパソコンをコマンド操作を自由にする
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
- 189
side:
- "y"
tags:
- GoogleHome
title: Google Homeから Linux上のパソコンをコマンド操作を自由にする
title_view:
- "y"
type: post
url: /archives/=6921
---

## はじめに {#はじめに}

GoogleHome/ IFTTT/ Beebotte、そして Pyhtonを使えば声をトリガーに任意の作業ができる。前回、ダーゲットPCに対して、別のサーバを用意していたけれどもど、今回の場合は実行したいPCを用意すれば良い。
  
まずは結果を。

[https://www.youtube.com/embed/ue_UKf3HSZE]

## システム構築 {#システム構築}

基本的には前回の記事と同じだ。

  * [Google Homeから Wake on Lanで パソコン起動 | Futurismo][1]

マシンが違うので、異なるチャンネル beebotteで作成した。

## 出来るようになったこと {#出来るようになったこと}

こである声をトリガにして、処理を実施するということができるようになった。

具体的には、

  * モニター OFF
  * モニターON
  * パソコン シャットダウン
  * パソコン Sleep
  * パソコン再起動

しかし、これだけではない。Linux上で実施するあらゆる操作がpythonコードを介して実現可能となった。これは大きな一歩だ。

```python
#!/home/tsu-nera/anaconda3/envs/py3/bin/python
import paho.mqtt.client as mqtt
import json
import os

HOST = 'mqtt.beebotte.com'
PORT = 8883
CA_CERTS = '/home/tsu-nera/repo/python-scripts/mqtt.beebotte.com.pem'
TOKEN = '[チャンネルのトークン]'
TOPIC = 'Galleria/voice'

MONITOR_ON_CMD = "xset dpms force on"
MONITOR_OFF_CMD = "xset dpms force off"
PC_SLEEP_CMD = "systemctl suspend"
PC_OFF_CMD = "shutdown now"
PC_REBOOT_CMD = "shutdown -r now"

def on_connect(client, userdata, flags, respons_code):
    print('status {0}'.format(respons_code))

def on_message(client, userdata, msg):
    data = json.loads(msg.payload)["data"][0]
    print(data)
    if data["device"]=="monitor" and data["action"]=="on":
        os.system(MONITOR_ON_CMD)
    elif data["device"]=="monitor" and data["action"]=="off":
        os.system(MONITOR_OFF_CMD)
    elif data["device"]=="pc" and data["action"]=="スリープ":
        os.system(PC_SLEEP_CMD)
    elif data["device"]=="pc" and data["action"]=="シャットダウン":
        os.system(PC_OFF_CMD)
    elif data["device"]=="pc" and data["action"]=="再起動":
        os.system(PC_REBOOT_CMD)
    else:
        print("Ivalid requset")
    
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

 [1]: https://futurismo.biz/archives/6915
