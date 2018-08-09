---
author: admin
categories:
- Eclipse
- 日記
date: 2013-04-10T23:05:51+00:00
dsq_thread_id:
- 3.7075026e+09
pvc_views:
- 11915
title: Eclipseの比較エディタでWinMergeを使うためのメモ
type: post
url: /archives/=1256
---

Windowsで差分比較をするための有名なソフトとして、『WinMerge』があります。Eclipseでコードを比較するとき、『External diff Tool』というプラグインを入れることで、Eclipseから外部比較エディタとしてWinMergeを開くことができます。

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb96.png" width="505" height="315" />][1]

以下、導入をメモ。

### External diff Toolプラグインの導入

以下のサイトからプラグインをダウンロードします。

[External diff Tool][2]

ダウンロードしたら解凍して、plugins配下にある以下のような名前のファイルをEclipseの起動フォルダにあるplugins配下にコピーします。

  * com.leucht.eclipse.externaldiff_0.1.1

あとは、Eclipseを再起動して完了です。

### WinMergeの導入

WinMergeはフリーのWindows用差分比較ツール/マージツールです。日本語化してあるサイトがあるので、そこから落としてくるのがよいでしょう。

[WinMerge 日本語版][3]

落としてきたら、インストーラを起動してインストールします。

### EclipseからWinMergeを使ってみる

EclipseからWinMergeを使うための設定をします。

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb97.png" width="462" height="319" />][4]

  1. [ウインドウ] > [設定] > [一般] > [比較/外部ツール]を選択。
  2. 外部diff実行可能ファイルにWinMergePortable.exeを指定します。

あとは、比較したいファイルやフォルダを２つ選択して、右クリックから[比較] > [相互(外部ツール)]を選択すれば、WinMergeが比較エディタとして立ち上がります。

注意することは、Eclipseの現在のワークスペース配下に比較するファイルやフォルダがないと、正しくパスが入力されないこと。あとは、いちいち比較するファイルを選択するのもやや面倒ではあるな。。。

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image96.png
 [2]: https://externaldiff.sourceforge.net/
 [3]: https://www.geocities.co.jp/SiliconValley-SanJose/8165/winmerge.html
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image97.png