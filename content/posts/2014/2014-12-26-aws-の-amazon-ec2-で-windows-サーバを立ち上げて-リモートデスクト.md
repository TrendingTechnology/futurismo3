---
author: admin
categories:
- 技術メモ
date: 2014-12-26T07:55:00+00:00
dsq_thread_id:
- 3.706875e+09
excerpt: Amazon EC2 で Windows サーバを立ち上げて リモートデスクトップ接続してみた
pvc_views:
- 1859
tags:
- AWS
title: AWS の Amazon EC2 で Windows サーバを立ち上げて リモートデスクトップ接続してみた
type: post
url: /archives/=2847
---

はじめに
========

Amazon Web Service (AWS) をずっと試してみたかったので,
冬休みに試してみた.

以前, OpenStack を動かしてみた.今回はライバルを試す.

-   [OpenStack をとりあえず動かしてみたい! vagrant で OpenStack
    を初体験したメモ | Futurismo](https://futurismo.biz/archives/2604)

環境
----

-   ArchLinux

手順
====

まずは, アカウントを作成.

-   <https://aws.amazon.com/jp/>

やりたいこと
------------

Linux サーバと Windows サーバをお手軽に借りたい

利用できそうか?
---------------

AWS にはいろいろなサブコンポーネントがある.

-   [AWS クラウド 無料利用枠 | アマゾン ウェブ サービス (AWS
    日本語)](https://aws.amazon.com/jp/free/?sc_ichannel=ha&sc_ipage=homepage&sc_icountry=jp&sc_isegment=c&sc_iplace=hero1&sc_icampaigntype=free_tier&sc_icampaign=ha_jp_FreeTier&sc_icategory=none&sc_idetail=ha_jp_206_1&sc_icontent=ha_206)

これによると,

-   Amazon EC2 というものを選択すれば, 仮想サーバが利用できそうだ.
-   Amazon Lambda
    というものを利用すると,イベント駆動でサーバを制御できるようになる.

今回は, Amazon EC2 を利用してサーバを立ち上げる.
使うときに手動で立ち上げて, やめるときに手動で落とす.

Amazon Lambda を利用すると, EC2 を常時立ち上げていなくてもいいよう
なので, コスト削減と自動化が達成できそうだが, 時間がかかりそうなので,
後回しとする.

料金
----

以下で料金が見積もれる. はじめの一年間は無料らしい.

-   [Amazon Web Services Simple Monthly
    Calculator](https://calculator.s3.amazonaws.com/index.html?lng=ja_JP#)

Windows と Linux を最小構成で週 2 時間借りた場合は, 0.6 ドル??

-   <https://calculator.s3.amazonaws.com/index.html?lng=ja_JP#r=NRT&s=EC2&key=calc-813C393E-B64B-4410-8E86-AB42F1CB9898>

![](./../img/2014-12-26-151045_938x142_scrot.png)

Windows のインスタンスを作成
----------------------------

まずは 最小構成の Windows のインスタンスを作成してみる.

-   EC2 サービスを選択
-   Launch Instance を選択
-   Microsoft Windows Server 2008 R2 Base 64bit 選択
-   t2.micro を選択
-   あとはデフォルト設定で.
-   Launch をおすと Key Pair の作成を聞かれるので生成して, 選択.

参考

-   [Amazon EC2 Windows インスタンスの使用開始 - Amazon Elastic Compute
    Cloud](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/WindowsGuide/EC2Win_GetStarted.html#EC2Win_LaunchInstance)
-   [Amazon EC2 で Windows 環境の構築 その 1
    リモートデスクトップで接続](https://awoni.net/hosting/ec2-setup/)

リモートデスクトップで接続
==========================

Linux 環境から Remote Desktop のクライアント rdesktop で接続してみる.

まずは, 接続に必要なパスワードを取得する. さっきダウンロードした Key
Pair ファイルをアップロードすると, パスワードが表示される.

以下のコマンドで接続.

``` {.bash}
rdesktop -k ja (IPAddress) -u (Username) -p (Psssword)
```

Linux から Windows に接続できた!

![](./../img/2014-12-26-164148_797x602_scrot.png)
