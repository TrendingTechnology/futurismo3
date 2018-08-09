---
author: admin
categories:
- Jenkins
- TDD
- 技術メモ
date: 2012-09-22T01:02:34+00:00
dsq_thread_id:
- 3.7052713e+09
pdrp_attributionLocation:
- end
pvc_views:
- 7132
tags:
- gtest
- xUnit
title: JenkinsでGoogleTestのテスト結果を表示する方法を調べてみた。
type: post
url: /archives/=475
---

GoogleTest(gtest)のテスト結果をJenkinsで表示する方法を調べてみた。
  
GoogleTestで出力されるXML出力結果はJUnitのフォーマット(junitreport Ant タスク)
  
にもとづいているため、Jenkinsに取り込んで解析することができるらしい。

### GoogleTestのテスト結果をXML形式で出力する

テスト実行時に、以下のオプションとともに実行するとxML形式でテスト結果が出力される。 &#8211;gtest_output=xml:(ファイル名）がオプションだ。
  
\[text\](プログラム).exe 窶堵test_output=xml:(出力ファイル名).xml[/text]
  
こんな感じでXML出力される。

<pre lang="xml"><?xml version="1.0" encoding="UTF-8"?>
&lt;testsuites tests="3" failures="0" disabled="0" errors="0" time="0.012" name="AllTests">
  &lt;testsuite name="MockNumTest" tests="3" failures="0" disabled="0" errors="0" time="0.006">
    &lt;testcase name="return1" status="run" time="0" classname="MockNumTest" />
    &lt;testcase name="return2" status="run" time="0" classname="MockNumTest" />
    &lt;testcase name="return3" status="run" time="0" classname="MockNumTest" />
  &lt;/testsuite>
&lt;/testsuites>
</pre>

### XML形式のテスト結果をJenkinsで表示する

次はjenkinsの設定。ジョブの設定画面を開く。

[プロジェクトの高度なオプション] > [カスタムワークスペースの使用]
  
にチェックを入れて、テスト出力ファイルのディレクトリの指定。

[ビルド]を選択して、ビルドを実行するための方法を選択。
  
ここでは、Windowsバッチコマンドで実行する。

[text]
  
cd &#8220;C:\Users\hogehoge\Dropbox\src\mock_study&#8221;
  
make clean
  
make
  
target.exe &#8211;gtest\_output=&#8221;xml:test\_result.xml&#8221;
  
[/text]

Windowsバッチコマンドがでmakeができないときは、
  
WindowsサービスでJenkinsを立ち上げるのをやめるとよい。
  
[参考:WindowsバッチファイルをJenkinsで起動したらネットにアクセスできないﾂꀀ][1]

[ビルド後の処理] > [JUnitテスト結果の集計]を選択。テスト結果ファイル名を入力。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb15.png" alt="image" width="389" height="144" border="0" />][2]

### テスト出力結果

こんな感じで出力された。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb16.png" alt="image" width="547" height="264" border="0" />][3]

#### 参考リンク

[GoogleTest &#8211; 上級ガイド &#8211; XMLレポート][4]

 [1]: https://futurismo.biz/archives/331 "WindowsバッチファイルをJenkinsで起動したらネットにアクセスできない"
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image15.png
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image16.png
 [4]: https://opencv.jp/googletestdocs/advancedguide.html