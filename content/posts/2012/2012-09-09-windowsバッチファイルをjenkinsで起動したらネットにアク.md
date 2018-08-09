---
author: admin
categories:
- Jenkins
- 技術メモ
date: 2012-09-09T07:42:05+00:00
dsq_thread_id:
- 3.7297667e+09
pdrp_attributionLocation:
- end
pvc_views:
- 6185
tags:
- bat
- Selenium
- Windows
title: WindowsバッチファイルをJenkinsで起動したらネットにアクセスできない
type: post
url: /archives/=331
---

Selenium RCの起動をWindowsのバッチファイルにして、Jenkinsから起動したら、
  
Firefoxを立ち上げたところで処理が止まってしまう。

> 05:55:02.690 INFO &#8211; Preparing Firefox profile&#8230;
  
> 05:55:04.964 INFO &#8211; Launching Firefox&#8230;
  
> 05:55:06.985 INFO &#8211; Checking Resource aliases

Jenkinsを介さずに、Windowsのコマンドプロンプトからならば、
  
処理が停滞しないので、さらにわけが分からない。

どうやら、Jenkinsからではインターネットにアクセスできないようだ。
  
処理が停滞するのは、URLのopenがタイムアイトしているから。

JenkinsはWindowsのサービスとして起動している。
  
そして、Windowsのサービスからインターネットにアクセスしようとして、
  
ファイアウォールに引っかかっているようだ（という推測）。

[コントロールパネル]>[管理ツール]>[サービス]
  
からJenkinsのプロパティを開いて、
  
[ログオン]タブの『デスクトップとの対話をサービスに許可』
  
を選択すると、サービスが起動している画面に移動でき、
  
停滞している画面を見ることができる。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb7.png" alt="image" width="372" height="341" border="0" />][1]

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb8.png" alt="image" width="372" height="234" border="0" />][2]

メッセージの表示を選択すれば、Firefoxが停滞している様子が見える。

この課題を解決するには、ネットワーク設定をいじる必要がありそうだけれど、
  
よくわからなかった。

### Slaveノードを作成して、Windowsサービスとして登録せずに起動する

自分がたどりついた方法は、Slaveノードを作成して、
  
そいつはWindowsサービスとしては登録しないまま、ネットにアクセスさせる方法。

まずは、
  
[Jenkinsの管理] > [ノードの管理]> [新規ノードの作成]からノード作成。
  
このとき、
  
詳しくは参考ページを参照。

<span style="color: #0066cc;"><a href="https://www50.atwiki.jp/mucho_note/pages/17.html">Jenkinsスレーブの作成と設定 －ムーチョのメモ帳</a><br /> <a href="https://wiki.jenkins-ci.org/display/JA/Step+by+step+guide+to+set+up+master+and+slave+machines">https://wiki.jenkins-ci.org/display/JA/Step+by+step+guide+to+set+up+master+and+slave+machines</a></span>

作成したノードをブラウザ上から立ちあげると、こんな窓が出てくる。

[<img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb9.png" alt="image" width="244" height="156" border="0" />][3]

この状態で、Seleniumパッチを実行すると、問題なくネットへアクセスできた。

&nbsp;

### JenkinsをWindowsサービスとして立ちあげない

昨日のエントリの続き。
  
寝て起きたら、もっとカンタンな（当たり前な？）方法を思いついた。

JenkinsがWindowsのスタートアップでサービスとして起動することが問題なので、
  
サービスを無効にしてしまえばよい。

[コントロールパネル]>[管理ツール]>[サービス]
  
からJenkinsのプロパティを開いて、サービスを停止する。

停止したら、コマンドラインから、Jenkinsを手動で立ち上げなおす。

> cd　&#8221;C:\xxxxxx\Jenkins&#8221;
> 
> java -jar jankins.war

すると、しばらくしてJenkinsがWindowsのサービスとしてではなく
  
立ちあがるので、この状態ならばネットにつなげた。

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image7.png
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image8.png
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image9.png