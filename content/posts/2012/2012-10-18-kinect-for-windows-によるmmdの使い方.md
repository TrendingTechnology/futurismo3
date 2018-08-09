---
author: admin
categories:
- 技術メモ
date: 2012-10-17T22:33:56+00:00
dsq_thread_id:
- 3.7029327e+09
pdrp_attributionLocation:
- end
pvc_views:
- 7264
tags:
- Kinect
- MMD
title: Kinect for Windows によるMMDの使い方
type: post
url: /archives/=692
---

MMDが自分の動作に合わせて動いたら楽しそうだなーというだけの理由で、Kinect for Windows をAmazonで衝動買いした。価格は、22000円。

KinectをつかってMMDのモーションをキャプチャーする方法はインターネット上にたくさん紹介されている。しかし、よくよく調べてみると、これはすべて xBoxタイプの方法だった・・・orz。

<span style="color: #ff0000; font-size: large;">えっ、Kinect for WindowsだとMMDつかえないの？<br /> 2万円したんだよー！</span>

という思いとともにいろいろと調べたら、なんとか使う方法がわかったので、メモしておく。

### Kinectには2種類あるらしい

Kinectには、Xboxに接続して使うタイプと、PCに接続して使うタイプの２つがあるらしい。そして、あたしはxboxをもっていないという理由で、PCに接続してつかう、Kinect for Windowsを購入した。

２つの機能比較は、以下のリンクが参考になる。
  
<https://thinkit.co.jp/story/2012/07/03/3605>

  * Xboxに接続するタイプ

<div id="scid:81867AAF-BB02-476b-AE5D-12BDAC2E750D:4398846a-8a5a-465d-911a-dd3b983600a8" class="wlWriterSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <a href="https://www.amazon.co.jp/exec/obidos/ASIN/B003T9VDJQ/sleephacker-22/ref=nosim" target="_blank"><img src="https://ecx.images-amazon.com/images/I/31wUYDad5yL._SL160_.jpg" alt="Xbox 360 Kinect センサー" /><br /> Xbox 360 Kinect センサー<br /> </a>
</div>

&nbsp;

  * PC(Windows 7)に接続するタイプ

<div id="scid:81867AAF-BB02-476b-AE5D-12BDAC2E750D:df9c5e56-7cfc-4ac8-b224-12b8d6aec24e" class="wlWriterSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <a href="https://www.amazon.co.jp/exec/obidos/ASIN/B0074BN0VO/sleephacker-22/ref=nosim" target="_blank"><img src="https://ecx.images-amazon.com/images/I/41eOoga3LvL._SL160_.jpg" alt="マイクロソフト 【商業用】Kinect for Windows センサー L6M-00005" /><br /> マイクロソフト 【商業用】Kinect for Windows センサー L6M-00005<br /> </a>
</div>

&nbsp;

### Kinect for Windowsでミクを動かせ

#### MMM(MikuMikuMoving）がKinect for Windowsに対応している

MMDではダメだけれども、MikuMikuDanceの互換ソフトMikuMikuMoving(以下MMM)がKinect for Windowsに対応していることがわかった。ダウンロードは以下のサイトから。

[MikuMikuMoving][1]

MMMを起動するとリボンの[Kinect]タブをクリックして、キャプチャをクリックすると、Kinectから動作を取り込むことができる。[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb48.png" alt="image" width="412" height="116" border="0" />][2]

こんな感じで、踊ってみた。ふう。
  
[https://www.youtube.com/embed/mPLmooCeXBM]

#### 他、MoggNUI 導入でMMDをつかう方法について

どうやら、MoggNUI を利用するとMMDでもKinect for Windowsが使えるらしい。
  
ただし、自分の環境(Windows7 64bit)ではエラーして動かなかった。[https://masque2525.blog97.fc2.com/?tag=Kinect][3]

### おまけ OpenNIを利用しようとして失敗した記録

#### 失敗1 OpenNIをつかう方法

xboxタイプだと、以下の方法が王道パターン。

  1. OpenNIをインストール。
  2. SensorKinect（Kinectのドライバ）をインストール
  3. NITEをインストールする
  4. DxOpenNIをインストール。

しかし、この方法を試しても、Kinectをデバイスとして認識してくれない・・・。この時点で、Kinect for Windows SDKとOpenNIの両方を使うことができないことに気づく。

#### 失敗2ﾂꀀ kinect-mssdk-openni-bridgeを試す

kinect-mssdk-openni-bridgeをつかうことで、Kinect for Windowsから OpenNIを利用することができる。ダウンロードは以下から。

[kinect-mssdk-openni-bridge][4]

しかし、残念、これをインストールしてもMMDからはOpenNIにアクセスできなかった。
  
OpenNIがインストールされていませんという注意がでて終了。

 [1]: https://sites.google.com/site/mikumikumoving/
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image48.png
 [3]: https://masque2525.blog97.fc2.com/?tag=Kinect "https://masque2525.blog97.fc2.com/?tag=Kinect"
 [4]: https://code.google.com/p/kinect-mssdk-openni-bridge/