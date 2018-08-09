---
author: admin
categories:
- Jenkins
- 技術メモ
date: 2012-10-08T23:34:01+00:00
dsq_thread_id:
- 3.701918e+09
pdrp_attributionLocation:
- end
pvc_views:
- 4449
tags:
- doxygen
title: DoxygenとJenkinsを連携させてみた。
type: post
url: /archives/=661
---

前回までの記事で、Doxygenの基本的な使い方を書いた。

  * [Doxygenの使い方（セットアップ編）の備忘録][1]
  * [Doxygen C言語のコメント備忘録][2]

Doxygenでドキュメント管理しても、実は見ないことのほうが多かったりする。その理由は、

  * 目につく場所にないから
  * ソースコードを修正するたびにdoxygenファイルを作り直すのが面倒だから
  * ソースの修正がドキュメントに反映されていないから

などなど、考えられるが、Jenkinsを利用して、Jenkinsジョブを流すたびにドキュメントを更新し、さらにはJenkinsから閲覧できるようにすれば、上に上げた課題は解決するかも。

というわけで、JenkinsとDoxygenを連携してみる。

#### Doxygen Pluginのインストール

Jenkinsには[Doxygen Plugin][3]というものがあるので、インストールする。
  
[Jenkinsの管理] > [プラグインの管理] からDoxygen Plugeinを選択して、ダウンロードとインストール。

インストールできたらジョブの[設定] からビルドのDoxygenの生成コマンドを追加。
  
ex.) doxygen doxygen.conf

[ビルド後の処理の追加]から[Publish Doxygen]を選択。
  
doxygenの設定ファイルを指定する。
  
[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb43.png" alt="image" width="378" height="112" border="0" />][4]

ビルドを実行して、Doxygenファイルを生成してみる。
  
DoxyGen HTMLというメニューが現れて、リンク先からDoxygenを閲覧することができる。

* * *

注意: こんなエラーがでたら、Doxygenのフォルダパスを指定している。
  
フォルダではなくて、Doxyfileを指定する。

<pre>Publishing Doxygen HTML results.
FATAL: error
<a href="https://stacktrace.jenkins-ci.org/search?query=java.io.FileNotFoundException">java.io.FileNotFoundException</a>: C:\Users\TSUNEMICHI\Dropbox\src\mock_study\html (アクセスが拒否されました。)
	at java.io.FileInputStream.open(Native Method)
	at java.io.FileInputStream.&lt;init&gt;(Unknown Source)
	at hudson.plugins.doxygen.DoxygenDirectoryParser.loadDoxyFile(DoxygenDirectoryParser.java:208)
	at hudson.plugins.doxygen.DoxygenDirectoryParser.retrieveDoxygenDirectoryFromDoxyfile(DoxygenDirectoryParser.java:345)
	at hudson.plugins.doxygen.DoxygenDirectoryParser.invoke(DoxygenDirectoryParser.java:53)
	at hudson.plugins.doxygen.DoxygenDirectoryParser.invoke(DoxygenDirectoryParser.java:14)
	at hudson.FilePath.act(FilePath.java:842)
	at hudson.FilePath.act(FilePath.java:824)
	at hudson.plugins.doxygen.DoxygenArchiver._perform(DoxygenArchiver.java:219)
	at hudson.plugins.doxygen.DoxygenArchiver.perform(DoxygenArchiver.java:176)
	at hudson.tasks.BuildStepMonitor$2.perform(BuildStepMonitor.java:27)
	at hudson.model.AbstractBuild$AbstractBuildExecution.perform(AbstractBuild.java:717)
	at hudson.model.AbstractBuild$AbstractBuildExecution.performAllBuildSteps(AbstractBuild.java:692)
	at hudson.model.Build$BuildExecution.post2(Build.java:183)
	at hudson.model.AbstractBuild$AbstractBuildExecution.post(AbstractBuild.java:639)
	at hudson.model.Run.execute(Run.java:1527)
	at hudson.model.FreeStyleBuild.run(FreeStyleBuild.java:46)
	at hudson.model.ResourceController.execute(ResourceController.java:88)
	at hudson.model.Executor.run(Executor.java:236)
Build step 'Publish Doxygen' changed build result to FAILURE</pre>

<pre></pre>

<pre></pre>

<pre></pre>

 [1]: https://futurismo.biz/archives/587 "Doxygenの使い方（セットアップ編）の備忘録"
 [2]: https://futurismo.biz/archives/655 "Doxygen C言語のコメント備忘録"
 [3]: https://wiki.jenkins-ci.org/display/JENKINS/Doxygen+Plugin
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image43.png