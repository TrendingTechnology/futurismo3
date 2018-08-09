---
author: admin
categories:
- Linux
date: 2018-01-17T15:13:19+00:00
dsq_thread_id:
- 6.4199444e+09
excerpt: UbuntuでWake on Lanするための設定メモ
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
- 179
side:
- "y"
tags:
- Ubuntu
title: UbuntuでWake on Lanするための設定メモ
title_view:
- "y"
type: post
url: /archives/=6885
---

## はじめに {#はじめに}

自宅のパソコンのwifi接続がどうも不安定で、たまに接続が切れる。そういうときは、USBのwifi子機を抜き差しすると復旧するのだけれども、今日は外出中にいきなり接続できなくなった(T_T)

そんな非常事態に備えて、外出中にパソコンを再起動して復旧を試みるために、Wake on Lan の設定をしたので、今日はそのメモです。

### 環境 {#環境}

  * Ubuntu 16.04

## 設定メモ {#設定メモ}

### BIOS設定 {#bios設定}

BIOSの設定が必要。ここは省略。。なのだが、ここがわからずいろいろな設定を試した挙句、最後にBIOS初期化して、4時間かかった。

### OS設定 {#os設定}

wol設定の確認/変更に必要なethtoolを入れる。

    $ sudo apt install ethtool
    

NICの名前を確認して、ethtoolを叩く。Wake-on: d で Wake on Lanが無効状態。 Wake-on: gで有効状態。

    $ ifconfig
    $ sudo ethtool enx343dc4787303
    Settings for enx343dc4787303:
    No data available
    

おりょ？？なにも表示されない。おばかな頭で考えること数十分、どうやら無線LANでは Wake on Lan ができないという根本的なことに気づいたのたった！！

NICは通電している必要があるのだけれども、無線LANの子機はUSBでPCに刺さっているのだから、PCの電源が落ちれば電力供給されなくなって、動かなくなる。バカダー。

## 無線 Lan でも Wake on Lanしたい {#無線-lan-でも-wake-on-lanしたい}

無線Lan でも Wake on Lanしたい。調べると、イーサネットコンバーターというものがあり、これを購入し、有線をパソコンと コンバーターでむすぶと、あたかもその繋いだPCが物理LANでつながれているようにルータから見えるというもの。

以下をamazonでget.

  * [Amazon | PLANEX デジタル家電やゲーム機を無線化 300Mbps 無線LANシンプルコンバータ(子機)MZK-SC300N2 | プラネックス | 無線LAN子機 通販][1]

NICの名前を確認して、ethtoolを叩く。今度こそ・・・

    $ ifconfig
    $ sudo ethtool enp0s31f6
     Settings for enp0s31f6:
    	Supported ports: [ TP ]
    	Supported link modes:   10baseT/Half 10baseT/Full 
    	                        100baseT/Half 100baseT/Full 
    	                        1000baseT/Full 
    	Supported pause frame use: No
    	Supports auto-negotiation: Yes
    	Advertised link modes:  10baseT/Half 10baseT/Full 
    	                        100baseT/Half 100baseT/Full 
    	                        1000baseT/Full 
    	Advertised pause frame use: No
    	Advertised auto-negotiation: Yes
    	Speed: 100Mb/s
    	Duplex: Full
    	Port: Twisted Pair
    	PHYAD: 1
    	Transceiver: internal
    	Auto-negotiation: on
    	MDI-X: on (auto)
    	Supports Wake-on: pumbg
    	Wake-on: g
    	Current message level: 0x00000007 (7)
    			       drv probe link
    	Link detected: yes
    

Wake-on: g となっていました。これでOSレベルでの設定ができていることになります。
  
ifconfigを叩いて、MAC アドレスを調べておく。

## クライアントPCに wakeonlanのツールをインストール {#クライアントpcに-wakeonlanのツールをインストール}

クライアントPCにwakeonlanのツールを入れる。

    $ sudo apt install wakeonlan
    

そして、いよいよ、Wake on Lanを実行、電源が入りました！

    $ wakeonlan <Mac Address>
    

## 外出先から Wake on Lanしたい {#外出先から-wake-on-lanしたい}

外出先から、wake on lanをすることで、PCを起動したい。我が家はソフトバンク光を契約していて、ルータもレンタルなのでルータに port forwardingの設定をすればいけると思っていた。。。

しかし、あらゆる手段を試したのだが、できない！！

ここまでか・・・と思ったが、いろいろ情報収集をすると、どうやらRaspberry pi から wake on lanを実行する事例がいくつかあった。うちには、raspberry pi はないのだけれども、ほこりにまみれたロボコンマシンがあったのだった。こんなの↓

![][2]

このボロットにsshで乗り込んで、プライベートネットワークからwake on lan を実行すればいけるのでは？

[以前の設定メモ][3]を元に、sshで乗り込んで実行してみたところ、成功！

やったー。

 [1]: https://www.amazon.co.jp/gp/product/B004NSVS60/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1
 [2]: https://lh3.googleusercontent.com/uHK4iDN26CPnilKnAWaKWfQcv7unXL7VydRkn7w6XSkP25ca-XlTxWSaCuObEDz87LJgFotrwCnf7d5H4D47QND5jkRM7YhYINZEa0laLdj-PKCY_xO_EqrdQpoRnHZvH0ypVLSuBZfaIBQzbDqekLNNhF_FBLZbI0bFyTZV6CFYCjn-rois8e6MZnvyL95cX64m0sfb-i8FVqbLf80b4ivKCLdaWv2l5aXMyVC7eysUp6_8aHleFcT8Igk_usbj3rfnRbeS3QWnhiAjdu22AVJuhXdUQH1TsA6Sd5iMfNf-7_AnVad59goXQJQEpVcSK9nnije5sh5IlL5IA24FtSPTWbPtCBaCy_s3GRMERq-cnLz2ocUpASzxE-p3xStBtjgbjvx2Ulw8Bd6SeuQpp2v6LBhasa0udZb1gf0axwd-vM9lFpO24x5ESkwWcLxIFppWo9YgM6OoWhdMQzxQA9mUbyfEZkcBuSCS15mFmwR8bVTMpwvVEW60GUouGPh62l05KJCOR0guZVhelfElWCHI982m-2W8EDemH8AKLEO7US9DPvIxbVFnGufGaEbDtks5iLkrsp9yvLYSFHGzgpa0EwSWvyXL5qWy84o=w480-h640-no
 [3]: https://futurismo.biz/archives/6862