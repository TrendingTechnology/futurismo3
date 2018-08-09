---
author: admin
categories:
- ライフハック
- 技術メモ
date: 2012-12-08T02:24:24+00:00
dsq_thread_id:
- 3.726745e+09
pvc_views:
- 3793
tags:
- GTD
- OSS
title: PSP実践のOSS「The Software Process Dashboard」を評価する。
type: post
url: /archives/=899
---

会社のプロジェクトでは、作業時間計測が流行っている。（というより、強制的）   
ツールに縛りはないため、みんなはTaskCoachを利用している。

しかし、ヘビーOutlookerな自分はOutlookカレンダーに集計時間をリアルタイムで出力できるTimeEditionを利用している。

時間計測は生産物とセットで評価しないと意味がないと常日頃思っているので、時間計測とともに管理できるツールはないかなと思った。また、Webでチャートを簡単に公開したいと思った。

### PSPとは

PSPとは、プレーステーション・ポータブルの略である。   
いや、派手に間違えた、Personal Software Processの略。パーソナルソフト開発作法。   
個人のソフトウェア開発における時間管理の方法。CMMIの個人バージョン。

詳しくは以下のリンクを参照。

  * [ゼロからはじめるPSP ─Personal Software Process][1] 
  * [チケット駆動開発にPSPの概念を持ち込む][2]

GTDに心酔している自分は、タスクに対して時間を割り当てることは、面倒なのでしない。   
大きな枠組みで、時間を計測したい。   
ここでは、PSPを実践するためのオープンソースProcess Dashboardを使ってみる。

### Process Dashboardをインストール

<a href="https://www.processdash.com/" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://www.processdash.com/" width="150" height="130" /></a> <a style="color: #0070c5" href="https://www.processdash.com/" target="_blank">The Software Process Dashboard | The Software Process Dashboard Initiative</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://www.processdash.com/" />  <br style="clear: both" />

以下のリンクより、ダウンロード。

  * [https://www.processdash.com/download][3] 
      * pdash-install-main-1-15-0-1.exe 

インストーラを起動して、聞かれるままにOKを押せばよい。   
ちなみに、日本語対応しているのが嬉しい。

### Process Dashboardを使ってみる

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb84.png" width="421" height="103" />][4]

UIはシンプル。JAVAでできている。   
ホットキーに対応していないのが（一番）つらいところだ。   
基本的なタイムトラッキングの機能は揃っている。

  * 階層でのプロジェクト管理
  * 手動での時間修正
  * タイムログの表示
  * 時間集計結果

などなど。時間集計結果のチャートはWEB画面でも出力することができる。

#### LOC Counter

LOC というのは Life Of Codeの略で、要はステップ数のこと。   
時間とコードのステップ数を対応して管理できるみたい。   
Subversionがデフォルトでサポートされている。

しかし、自分の要件としてはドキュメント作成時間やテスト項目も管理したいので、これでは足りない。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb85.png" width="361" height="270" />][5]

基本機能は、こんな感じ。   
拡張機能を利用するためには、アンケートに登録する必要がある。しかし、会社で利用して、さらにはよければ他人の展開することも考えると、これは障害になるかな。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:81867AAF-BB02-476b-AE5D-12BDAC2E750D:358162bb-9be0-4131-bd5d-5f7fb6218911" class="wlWriterEditableSmartContent">
  <a href="https://www.amazon.co.jp/exec/obidos/ASIN/4320120132/sleephacker-22/ref=nosim" target="_blank"><img alt="パーソナルソフトウェアプロセス入門" src="https://ecx.images-amazon.com/images/I/515YEEDHN6L._SL160_.jpg" /><br />パーソナルソフトウェアプロセス入門<br />ワッツ ハンフリー </a>
</div>

 [1]: https://gihyo.jp/lifestyle/feature/01/psp
 [2]: https://forza.cocolog-nifty.com/blog/2010/02/psp-cd51.html
 [3]: https://www.processdash.com/download "https://www.processdash.com/download"
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image84.png
 [5]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image85.png