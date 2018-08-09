---
author: admin
categories:
- ハッキング
date: 2014-01-11T05:34:05+00:00
dsq_thread_id:
- 3.7090179e+09
excerpt: <!--:ja-->wifiが遅い気がしたので高速化の方法を調べた<!--:-->
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 3768
title: namebenchでDNSサーバへの通信速度をベンチマーク！モバイルWifi環境を高速化する方法
type: post
url: /archives/=2132
---

namebenchでDNSサーバへの通信速度をベンチマーク！Wifi環境を高速化する方法

普段、家の外でノートPCを利用することが多いのだが、wifiが遅い気がしたので高速化の方法を調べた。

### DNSサーバを変更する

DNSサーバを変更すると、名前解決が早くなり、その結果通信速度が上がるらしい。

以下のIPがおすすめらしい。

  * NTT America Technical Operations
    
    29.250.35.250
  
    29.250.35.251

参考:[「8.8.8.8,8.8.4.4」より速い「129.250.35.250」: 小粋空間][1]

  * Google Public DNS
    
    8.8.8.8
  
    8.8.8.4

参考 [[N] iPhoneのWiFi接続を高速化する魔法の数字「8.8.8.8,8.8.4.4」][2]

### namebench でベンチマーク

しかし、この結果を鵜呑みにしてはいけない！環境によって最適なDNSサーバは異なるはず！

オープンソースのnamebenchを利用すると、自分に最適なDNSサーバを調査することができる。これで最も早いサーバを調べて設定するのがよい。マルチプラットフォームのため、Windows,Mac,LinuxどれでもOK.

  * [namebench &#8211; Open-source DNS Benchmark Utility &#8211; Google Project Hosting][3]
  * [Google製のDNSベンチマークソフトウェア「namebench」|オープンソース・ソフトウェア、ITニュースを毎日紹介するエンジニア、デザイナー向けブログ][4]

### ベンチマーク結果

Linux Mintでは、パッケージマネージャからインストールできる。端末を開き、namebenchと入力すると検索が開始する。解析が終了すると、HTMLファイルが生成される。それを開くと…

127.0.1.1が一番早いとのこと。これは、自動で取得できるDNSサーバらしい。ということで、とくに設定の変更は必要なかった。。。

[<img src="https://futurismo.biz/wp-content/uploads/Screenshot_from_2014-01-11-142839-300x190.png" alt="Screenshot_from_2014-01-11 14:28:39" width="300" height="190" class="aligncenter size-medium wp-image-2133" />][5]

 [1]: https://www.koikikukan.com/archives/2011/09/17-035555.php
 [2]: https://netafull.net/iphone/038593.html
 [3]: https://code.google.com/p/namebench/
 [4]: https://www.moongift.jp/2009/10/namebench/
 [5]: https://futurismo.biz/wp-content/uploads/Screenshot_from_2014-01-11-142839.png