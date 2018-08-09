---
author: admin
categories:
- 技術メモ
date: 2015-02-17T13:50:00+00:00
dsq_thread_id:
- 3.7349957e+09
excerpt: LimeSurvey を Windows で動かす
pvc_views:
- 6292
tags:
- OSS
title: フリーで高性能な OSS アンケートツール!LimeSurvey を Windows で動かす
type: post
url: /archives/=2998
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/Windows_7_Vertical_Logo_Web.jpg"/>

はじめに
========

職場で簡単なアンケートを実施したいとおもった.

メールベースで作成すると集計が大変だ. できれば CSV 形式で出力して,
相関関係を Excel か R で分析までしたいところ.

なにかうまい手はないかと思っていたら, OSS
のアンケートツールを見つけたので試す.

環境
----

-   Windows 8.1

職場でも, あいている Windows サーバが自分の端末にいれようと考えている.

ちなみに, LimeSurvey の HP には, サポートは 7 までとかいてあるが, 8
でもばっちり動いた.

LimeSurvey について
===================

フリーで高性能な OSS アンケートツール.

-   [LimeSurvey - the free and open source survey software
    tool!](https://www.limesurvey.org/en/)
-   [高機能なアンケートシステム | LimeSurvey とは | Web
    アンケートシステム
    LimeSurvey](https://www.d-ip.jp/limesurvey/ls/ls1/)

ネットで調べてると, ほぼこのツール以外に見つからない.
デファクトスタンダードっぽい.

-   [LimeSurvey Manual](https://manual.limesurvey.org/LimeSurvey_Manual)

Windows にインストール
======================

インストールは, 以下の方法がある.

-   appatch & mysql がある環境にインストール.
-   (windows) xampp 上で動作させる.

Windows でサクッとためするには, XAMPP がおすすめ.

-   [Installation of the LimeSurvey XAMPP package - LimeSurvey
    Manual](https://manual.limesurvey.org/Installation_of_the_LimeSurvey_XAMPP_package)

以下からダウンロードして, インストーラを起動するだけという簡単さ!

-   [LimeSurvey Downloads - Latest stable
    release](https://www.limesurvey.org/en/stable-release)
    -   limesurvey205plus-build150211-on-xampp-win32-setup.exe

ちなみに, インストール先でデフォルトの C:xampp 以外をしていすると,
動作しなかった. おそらく PHP の PATH 設定かと.

XAMPP をイントラネット内に公開
------------------------------

もともと, xampp は Windows ローカル環境で PHP などの開発環境を作成する
ためのツール. 今は, vagrant とか docker が取って代わった気がする.

そのため, xampp のサイトを外部に公開するには, 一工夫必要.

-   [XAMPP にイントラネット内 (LAN 内) の PC から接続する設定 |
    ウェブル](https://weble.org/2009/11/28/xampp-intranet)

サンプルでアンケート作成
========================

以下, スクリーンショットとともに. まずは, admin/password でログイン.

[file:c:/cygwin64/home/tsu-nera/futurismo/blog/img/SnapCrab\_NoName\_2015-2-17\_22-8-41\_No-00.png](c:/cygwin64/home/tsu-nera/futurismo/blog/img/SnapCrab_NoName_2015-2-17_22-8-41_No-00.png)

ログインすると, アンケート作成のガイダンスが出る.

[file:c:/cygwin64/home/tsu-nera/futurismo/blog/img/SnapCrab\_NoName\_2015-2-17\_22-17-54\_No-00.png](c:/cygwin64/home/tsu-nera/futurismo/blog/img/SnapCrab_NoName_2015-2-17_22-17-54_No-00.png)

ガイダンスにしたがって作成した. 次に作成したアンケートをテスト.

[file:c:/cygwin64/home/tsu-nera/futurismo/blog/img/SnapCrab\_NoName\_2015-2-17\_22-23-45\_No-00.png](c:/cygwin64/home/tsu-nera/futurismo/blog/img/SnapCrab_NoName_2015-2-17_22-23-45_No-00.png)

完了!!

[file:c:/cygwin64/home/tsu-nera/futurismo/blog/img/SnapCrab\_NoName\_2015-2-17\_22-23-58\_No-00.png](c:/cygwin64/home/tsu-nera/futurismo/blog/img/SnapCrab_NoName_2015-2-17_22-23-58_No-00.png)

おわりに
========

Windows 環境での導入の気楽さに感動した.

作成はやや手間がかかるものの,

-   その後の集計作業
-   イケテル UI
-   回答率の管理

などなど, かける労力に対するリターンは大きそうな印象を受けた.

もう少しいじってみて利用できそうか見極めてみる.
