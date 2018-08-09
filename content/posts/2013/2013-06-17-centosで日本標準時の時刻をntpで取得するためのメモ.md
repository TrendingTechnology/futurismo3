---
author: admin
categories:
- Linux
date: 2013-06-16T23:01:39+00:00
dsq_thread_id:
- 3.7279032e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3851
title: CentOSで日本標準時の時刻をntpで取得するためのメモ
type: post
url: /archives/=1487
---

CentOSにntpサーバを入れて、日本標準時刻に自動的に合わせるためのメモです。

[toc]

### NTPとは

NTPとは、NetWork Time Protocolの略。

時刻を問い合わせる機能を持ち、正確な時間をコンピュータに反映することができる。

#### NTPのインストール

    % sudo yum -y install ntp
    

#### 時刻を他サーバに問い合わせる

日本標準時プロジェクトというものがあり、ここから日本の正確な時刻を配信している。

<a href="https://www2.nict.go.jp/aeri/sts/tsp/PubNtp/index.html" target="_blank"><img class="alignleft" align="left" border="0" src="https://capture.heartrails.com/150x130/shadow?https://www2.nict.go.jp/aeri/sts/tsp/PubNtp/index.html" alt="" width="150" height="130" /></a> <a style="color:#0070C5;" href="https://www2.nict.go.jp/aeri/sts/tsp/PubNtp/index.html" target="_blank">日本標準時プロジェクト　公開NTP</a>  <img border="0" src="https://b.hatena.ne.jp/entry/image/https://www2.nict.go.jp/aeri/sts/tsp/PubNtp/index.html" alt="" style="" /><br style="clear:both;" />

ntp.nict.jpというサーバから正確な時刻を取得する。

    % sudo ntpdate ntp.nict.jp
    17 Jun 07:44:15 ntpdate[30214]: adjust time server 133.243.238.243 offset 0.005146 sec
    

### ntpdデーモンを起動して、自動的に時刻同期させる

#### /etc/ntp.confの編集

デーモンを起動することで、時刻を自動同期できます。設定ファイルは、/etc/ntp.confです。

    server 0.centos.pool.ntp.org
    server 1.centos.pool.ntp.org
    server 2.centos.pool.ntp.org
    

となっている部分を、以下のように編集。

    server -4 ntp.nict.jp
    server -4 ntp1.jst.mfeed.ad.jp
    server -4 ntp2.jst.mfeed.ad.jp
    server -4 ntp3.jst.mfeed.ad.jp
    

ntp1.jst.mfeed.ad.jpはntp.nict.jpと同期している別サーバ。

#### NTPサービス起動

設定が完了したら、サービスを起動。

    sudo service ntpd start
    ntpd を起動中:                                             [  OK  ]
    

ntpd -pでステータスを確認することができます。

    ntpq -p
    remote           refid      st t when poll reach   delay   offset  jitter
    =============================================================================
    ntp-b3.nict.go. .NICT.           1 u   45   64    1   51.180   36.062   0.004
    ntp1.jst.mfeed. 172.29.3.50      2 u   45   64    1   46.038   35.957   0.004
    ntp2.jst.mfeed. 172.29.2.50      2 u   44   64    1   37.927   31.670   0.004
    ntp3.jst.mfeed. 172.29.3.50      2 u   43   64    1   41.949   30.128   0.004
    

#### 自動起動の設定

最後に、自動起動の設定をして終了

    % sudo chkconfig ntpd on
    % chkconfig --list ntpd
    ntpd            0:off   1:off   2:on    3:on    4:on    5:on    6:off
    

#### 環境

  * CentOS 6.4

#### 参考

  * <a href="https://sj6.org/ntp_install_for_centos/" target="_blank">CentOSにntpサーバで時刻同期設定 | 適当な日々</a>
  * <a href="https://sj6.org/ntp_install_for_centos/" target="_blank">CentOSにntpサーバで時刻同期設定 | 適当な日々</a>
  * <a href="https://www2.nict.go.jp/aeri/sts/tsp/PubNtp/index.html" target="_blank">日本標準時プロジェクト　公開NTP</a>