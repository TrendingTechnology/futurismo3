---
date: 2018-04-12T23:20:06+09:00
title: ソフトバンク光でチャンネル競合を解消した
size: false
---

## はじめに
家のwifi, 最近だろうか、とても遅くてイライラしていた。

ついに原因を突き止めたかもしれないのでそのレポートです。

## バッファローの USB Wifi
購入したものは、こちら。バッファローの USB Wifi. wi-u3-866ds

- https://buffalo.jp/product/wireless-lan/client/wi-u3-866ds/

これを使っていたのだけれども、とにかく回線が不安定。
しょっちゅうブツブツ切れてしまう。
とくに、外出先から自宅サーバに乗り込んでいるときに、通信がとだえることが何度もある。
とてもストレスがたまるので調査することにした。

## 原因はチャンネルの競合
あまりネットワークについての知識はなのだけれどもどうやらチャンネルの競合が怪しい。

集合住宅に住んでいるので、隣人もwifiを利用している。どうも、その電波と競合を起こしているよう。

具体的には、Linuxだと`iwlist`でチャンネルの競合をしらべることができる。

```
$ sudo iwlist (interface name) scan | grep Freq
                    Frequency:2.412 GHz (Channel 1)
                    Frequency:2.412 GHz (Channel 1)
                    Frequency:2.432 GHz (Channel 5)
                    Frequency:2.437 GHz (Channel 6)
                    Frequency:2.442 GHz (Channel 7)
                    Frequency:2.442 GHz (Channel 7)
                    Frequency:2.437 GHz (Channel 6)
                    Frequency:2.437 GHz (Channel 6)
                    Frequency:2.457 GHz (Channel 10)
                    Frequency:2.457 GHz (Channel 10)
                    Frequency:2.462 GHz (Channel 11)
                    Frequency:2.462 GHz (Channel 11)
                    Frequency:2.462 GHz (Channel 11)
                    Frequency:2.462 GHz (Channel 11)
                    Frequency:5.18 GHz (Channel 36)
                    Frequency:5.22 GHz (Channel 44)
                    Frequency:5.24 GHz (Channel 48)
                    Frequency:5.6 GHz (Channel 120)
```

これで空いているチャンネル番号を選んで、ルータに設定しなおしたら途切れることがなくなった（気がする）。

うちはソフトバンク光なので、ルータにログインして、チャンネル設定から　チャンネルを40を選択するように指定した。


### 参考情報
- https://d.hatena.ne.jp/softcandy/20160801/1470003818
- https://askubuntu.com/questions/309458/is-there-a-program-to-see-channels-used-by-wifi-networks-similar-to-vistumbler
