---
author: admin
categories:
- C言語
- Eclipse
- 技術メモ
date: 2012-10-13T01:37:46+00:00
dsq_thread_id:
- 3.7062738e+09
pvc_views:
- 8746
tags:
- gcov
- カバレッジ
title: Eclipse CDTで gcovの結果を見てみる
type: post
url: /archives/=687
---

gcovの出力結果をEclipseでみる方法を調べてみた。

Eclipse 3.7(Indigo)までは CDT gcov pluginが動いたけど、Eclipse4.2 (Juno)からは、動かない・・・。しかし、代わりに、Eclipse Juno では GCov pluginが動作した。

というわけで、２つの方法を紹介する。

### その1CDT gcov plugin

#### インストール

以下のサイトからダウンロード。

<https://sourceforge.jp/projects/ginkgo/>

ダウンロードファイルを解凍すると featuresとpluginというファイルがある。

それぞれeclipse.exeと同じフォルダにあるfeaturesとpluginにコピーする。（org.ginko.gcov.feature\_0.2.2とorg.ginkgo.gcov\_0.2.2.jar）

あとは、- cleanオプションをつけてEclipse再起動。

#### CDT gcov pluginの設定

[プロジェクトエクスプローラ]からカバレッジを出したいプロジェクトを右クリックしてオプションを選択。

C Coverageという項目があるので、Activate natureを有効にする。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb44.png" width="244" height="108" />][1]

#### gcovを実行して、出力用データを作成する

Eclipseで表示するには、.gcovという形式のファイルをつくる必要がある。   
以下の３ステップで作成する。

#### ビルドして hogehoge.gcnoを作成



ビルドして.gcnoファイルを作成する。   
ビルドするときに、以下のオプションをつける。

> -fprofile-arcs -ftest-coverage

MakefileだとCFLAGSに追加すればよい。

> CFLAGS += -fprofile-arcs -ftest-coverage

#### 実行ファイルを実行して、hogehoge.gcdaを作成

実行ファイル(.exe)を実行すると、*.gcdaができる。   
自分の場合はGoogleTestでテストコードを書いて、テストを実行することで、カバレッジを得る。

#### gcovコマンドを実行して、hogehoge.c.gcovを作成

Eclipseでカバレッジを得るには、もう一工夫必要。   
実行してできた、hogehoge.gcdaに対し、以下のコマンドを実行するとhogehoge.c.gcovというファイルができる。

> gcov hogehoge.gcda

&#160;

### その2 GCov plugin を使う   


以下からダウンロード。   
[<font color="#0066cc">https://wiki.eclipse.org/Linux_Tools_Project/GCov/User_Guide</font>][2]

ちなみに、Pleades日本語プロジェクトからEclipse 4.2 CDTを落としてきたら、Defaultでついていた。   
<https://mergedoc.sourceforge.jp/index.html#/pleiades.html>

#### hogehoge.gcdaを作る

つくりからは上に同じ。   
作成したら、プロジェクトビューから、作成したhogehoge.gcdaを開く。   
実行バイナリファイルに含まれるすべてのカバレッジデータを出力するか、ファイル単位で出力するかを選択する。

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb45.png" width="443" height="260" />][3]

ファイル単位で開いてみると、カラー表示されたカバレッジ出力結果が表示される。

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb46.png" width="475" height="243" />][4]

実行バイナリファイル単位で表示すると、gcovビューにカバレッジの集計が見える。   
（開くまで時間がかかる）

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb47.png" width="511" height="147" />][5]

（GCovユーザガイド）[https://wiki.eclipse.org/Linux\_Tools\_Project/GCov/User\_Guide#Installation\_and_Set-Up][6]

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image44.png
 [2]: https://wiki.eclipse.org/Linux_Tools_Project/GCov/User_Guide
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image45.png
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image46.png
 [5]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image47.png
 [6]: https://wiki.eclipse.org/Linux_Tools_Project/GCov/User_Guide#Installation_and_Set-Up