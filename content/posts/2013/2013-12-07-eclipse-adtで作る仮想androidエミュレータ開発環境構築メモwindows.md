---
author: admin
categories:
- Eclipse
- Java
- 日記
date: 2013-12-07T13:23:32+00:00
dsq_thread_id:
- 3.7238738e+09
excerpt: 既存のEclipse環境にAndroid SDKをインストールする方法を調べてみました
follow:
- follow
index:
- index
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 4510
side:
- def
sub:
- def
tags:
- Android
- coursera
title: Eclipse ADTでつくるAndroidエミュレータ開発環境構築メモ(Windows)
type: post
url: /archives/=2025
---

Courseraを通じて、Android開発を勉強しようと思います。

  * [Creative, Serious and Playful Science of Android Apps | Coursera][1]

講義では、Android SDKをEclipse込でまるごとダウンロードしてくる方法が紹介されている。

  * [Android SDK | Android Developers][2]</p> 
      * adt-bundle-windows-x86_64-20131030.zip

Disk容量が残り8GBしかない自分には、チョット無理ゲーなので、既存のEclipse環境にAndroid SDKをインストールする方法を調べてみた。

Android SDK開発環境の構築作業で自分がやった手順を作業メモメモφ(..)

[toc]

#### 環境

  * Windows 7 64bit
  * Eclipse 4.3 kepler
  * JDK 7

### Android SDKとは

Android SDKとは、Android Software Development Kitの略。

Android開発をするためのAPIライブラリやら、その他開発に必要なものがセットになったもの

#### Eclipseのインストール

なにはともあり、Eclipse All in One Projectから 日本語EclipseJDK環境をまるごと落としてくれる。自分はすでにインストール済みなので、詳細は省略。

  * [Pleiades &#8211; Eclipse プラグイン日本語化プラグイン | MergeDoc Project][3]

#### JDK 7のインストール

Java開発環境(JDK)をインストールする。現時点(2013)では、Android SDKは、JDK 6を推奨しているよう。ネットの情報では、JDK7 も動作するよう。

  * [JDK7でAndroid開発、していいの？ダメなの？ &#8211; Qiita [キータ]][4]

以前、JDK7のインストール方法を記事にしているので、基本的にはここを参照。

  * [Java JDK インストール方法まとめ(Windows) | Futurismo][5]

#### Android SDKのインストール

まずは、Android SDKのダウンロードページに行く。

  * [Android SDK | Android Developers][2]</p> 
      * adt-bundle-windows-x86_64-20131030.zip

青い大きなボタンを押してしまうと、Eclipse込のダウンロードとなるため、下
  
のほうにある、DOWNLOAD FOR OTHER PLATFORMSを選択。そして、SDK Tools Onlyのしたにあるzipファイル、

  * android-sdk_r22.3-windows.zip

をダウンロード。インストーラ版installer_r22.3-windows.exeもあるけれども、Eclipseからだと、zip版でよい。

[<img src="https://lh4.googleusercontent.com/-ALrS-70zOLE/UqL3Gr8Xn9I/AAAAAAAAA4M/ynkQcdGx6sU/s400/skitch.png" height="254" width="400" />][6]

ダウンロードが完了したら、適当な場所へ解凍。ここでは以下へ。

    C:\android-sdk\android-sdk-windows
    

#### Eclipse ADTのインストール

EclipseでAndroid開発を実施するためには、Eclipse Android開発ツール(ADT)のプラグインをインストールする必要がある。

Eclipseのツールバーから

  * ヘルプ > Eclipse マーケットプレイス

を選択。検索欄から、ADT、と入力。Android開発ツールが現れるので、インストール。

[<img src="https://lh3.googleusercontent.com/-QJGpBlLGqus/UqL3CpmKdwI/AAAAAAAAA4E/sZnsV94ctxE/s400/skitch.png" height="292" width="400" />][7]

#### SDKマネージャーの操作

Eclipseを再起動すると、先ほどインストールしたSDKのパスを聞いてくるので、入力する。

[<img src="https://lh4.googleusercontent.com/-c4XgFgXvCvk/UqL8IQJA3zI/AAAAAAAAA4s/cM8gGMxYwmg/s400/skitch.png" height="136" width="400" />][8]

続いて、SDKマネージャーの起動を要求してくれる。

[<img src="https://lh6.googleusercontent.com/-opStnoWYeQQ/UqL3Jg2Fl2I/AAAAAAAAA4U/3G4PUJ-aVew/s400/skitch.png" height="69" width="400" />][9]

SDKマネージャーで、追加のSDKをダウンロードする。デフォルトで、アップデートやインストールが必要なものにはチェックがはいる。ここでは、講義に従って、以下をインストール（すでにインストール済みのものも列挙)

  * Tools</p> 
      * Android SDK Tools
      * Android SDK Platform-tools
      * Android SDK Build-tools
  * Android 4.3</p> 
      * SDK Platform
      * ARM EABI v7a System Image
      * Intel x86 Atom System Image
  * Android 2.3.3</p> 
      * SDK Platform
      * Intel x86 Atom System Image
  * Extra</p> 
      * Android Support Library
      * Intel x86 Emulator Accelarator

#### エミュレータの設定

エミュレータ設定する。ツールバー > ウィンドウ > 仮想デバイスマネージャーを選択。新規を選択。

つづけて、エミュレータのスペックを入力していく。ここでは、以下の画像のように入力。

[<img src="https://lh4.googleusercontent.com/-YV-s4Yvrhl0/UqMcxuAOCTI/AAAAAAAAA48/H1uDsJkQyks/s800/skitch.png" height="653" width="536" />][10]

設定が完了したら、開始をクリック。

待つこと数十秒で、エミュレータ起動((o(´∀｀)o))

[<img src="https://lh4.googleusercontent.com/-YgGU0ZKNuJ4/UqMfl0hdZ_I/AAAAAAAAA5I/32cDNKse1LE/s640/skitch.png" height="640" width="554" />][11]

#### エミュレータの高速化

Intel CPUを利用しているならば、エミュレータを高速化できる。Intel x86 Emulator Accelaratorを利用する。

事前準備として、Intel 仮想化支援機能 Intel VTが有効になっている必要がある。設定方法は、過去記事参照。

  * [仮想化支援機構(VT-x/AMD-V)を有効化できません | Futurismo][12]

以下の場所にあるIntelHaxm.exeを起動して、インストール。

    \android-sdks\extras\intel\Hardware_Accelerated_Execution_Manager\IntelHaxm.exe

 [1]: https://www.coursera.org/course/androidapps101
 [2]: https://developer.android.com/sdk/index.html
 [3]: https://mergedoc.sourceforge.jp/
 [4]: https://qiita.com/hidekuro/items/6a252c82132ed5d279a4
 [5]: https://futurismo.biz/archives/751
 [6]: https://picasaweb.google.com/lh/photo/DEMlwi2rgRacUtsESESOzTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [7]: https://picasaweb.google.com/lh/photo/FhPmhzohzGI0lpOcI_W5LzyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [8]: https://picasaweb.google.com/lh/photo/n62Cawek6FBRq2Rxhj8mSjyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [9]: https://picasaweb.google.com/lh/photo/PPEKUxG0QMGpLGRGp6TcNTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [10]: https://picasaweb.google.com/lh/photo/6ERXtsIBZLWR5JYDC_XMBDyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [11]: https://picasaweb.google.com/lh/photo/gvLJWCQkdaZM78e2cbhJrjyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [12]: https://futurismo.biz/archives/1647