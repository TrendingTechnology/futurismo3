---
author: admin
categories:
- Eclipse
- 日記
date: 2013-10-26T01:22:54+00:00
dsq_thread_id:
- 3.7009577e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 24329
title: Eclipseが立ち上がらないときは.logを見て調査する
type: post
url: /archives/=1927
---

Eclipseが立ち上がらなくなったので、調査方法と解決方法をメモ

### とりあえず eclipse.exe -cleanで

運が良ければ、cleanオプションをつけてEclipse再起動すればなおる。

    > eclipse.exe -clean
    

eclipse.exeが置いてあるフォルダのeclipse.exe -clean.cmdを実行すれば良い。

### Eclipse Errorログを見る

Eclipseのエラーログは以下にある。

    (YourWorkspace)/.metadata/.log
    

問題が起こったら、とりあえずログを見て調査する。該当時間のメッセージをググる。

### Eclipse　コンソールモードで立ちあげ。

eclipse.exeが置いてあるフォルダのeclipsec.exeを実行すると、コンソールアプリケーションとして起動することができる。

そこに現れる標準出力をググる。

### ビューの設定をリセット

今回の原因。

    !MESSAGE Job found still running after platform shutdown.  Jobs should be canceled by the plugin that scheduled them during shutdown:
    

以下のファイルを削除すればよいようだ。

    (YourWorkspace)\.metadata\.plugins\org.eclipse.e4.workbench\workbench.xmi
    

これは、Eclipseの起動状態を管理しているファイルのよう。ビューが開けなくなったときも、このこの workbench.xmiを削除（orリネーム）して、-clean コマンドをつけて再起動すれば良い。

### Links

  * [android &#8211; Eclipse JUNO doesn&#8217;t start &#8211; Stack Overflow][1]
  * [Eclipse起動時エラーの傾向と対策 | android manifest configChanges][2]

 [1]: https://stackoverflow.com/questions/11310970/eclipse-juno-doesnt-start
 [2]: https://www.andr0o0id.com/archives/=854