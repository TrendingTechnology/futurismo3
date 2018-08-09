---
author: admin
categories:
- Eclipse
- 技術メモ
date: 2012-10-21T12:35:52+00:00
dsq_thread_id:
- 3.7153966e+09
pvc_views:
- 5849
tags:
- CDT
- gtest
title: 『cdt-tests-runner』GoogleTestの結果をEclipse CDTから見るプラグイン
type: post
url: /archives/=710
---

自分は、Eclipse CDTからGoogleTestを利用している。   
Eclipse CDTから GoogleTestの結果を見るプラグインを見つけたので、紹介。

[https://www.youtube.com/embed/vObiKSSNJEY] 

&#160;

### JUnit ViewerのCDT版『cdt-tests-runner』

プラグインの名前は『cdt-tests-runner』。公式サイトは以下。

[<font color="#0066cc">https://github.com/xgsa/cdt-tests-runner/wiki/Tutorial</font>][1]

GoogleTestだけでなく、Boost Test, Qt Testにも対応している。

Eclipse CDT 8.1 からは、デフォルトで搭載されているらしい。   
が、自分のCDT 8.1には入っていなかったので、手動でダウンロードした。   
以下のパスを[ヘルプ] > [新規ソフトウェアのインストール] > [作業対象] に貼り付けて、C/C++ Test Runnerをインストール。

[https://raw.github.com/xgsa/cdt-tests-runner/tests\_runner\_demo/testsrunner/org.eclipse.cdt.testsrunner-updatesite/site.xml][2]

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb49.png" width="587" height="186" />][3]

### cdt-tests-runnerの設定方法

インストールできたら、GoogleTestを走らせたいプロジェクトの[実行の構成]を見る。   
C/C++ Unitという新たな項目を選択して、実行構成を新規作成。

GoogleTestを利用するためには、[C/C++ Testing]タブを開いて、Tests RunnerでGoogle Tests Runnerを選択する。 

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb50.png" width="475" height="249" />][4]

[実行]を選択すると、テストが走り、実行結果が表示される。

#### 実行結果

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb51.png" width="486" height="243" />][5]

失敗したテストをクリックすると、そのテストまでジャンプできるところが嬉しい。   
これはEmacsではできるよと書いてあったが、Eclipseでもしたかった。

[_Emacs で直接，失敗した行に移動するにはどうすればよいでしょうか？_][6] 窶錀 GoogleTests

### Eclipse のプラグインでなければ、Guiterもあるよ

Eclipseのプラグインにこだわりがなかったり、Eclipseユーザでなければ、『gtest-gbar(Guiter)』というツールをつかうという選択肢もある。

<https://code.google.com/p/gtest-gbar/>

これならば、Visual Studioユーザでもレッド・グリーンが楽しめる。

今までは、自分もこっちを利用していた。   
エラーしたときのメッセージ表示の欄が広くて見やすいので、またこっちに戻るかも。

 [1]: https://github.com/xgsa/cdt-tests-runner/wiki/Tutorial
 [2]: https://raw.github.com/xgsa/cdt-tests-runner/tests_runner_demo/testsrunner/org.eclipse.cdt.testsrunner-updatesite/site.xml "https://raw.github.com/xgsa/cdt-tests-runner/tests_runner_demo/testsrunner/org.eclipse.cdt.testsrunner-updatesite/site.xml"
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image49.png
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image50.png
 [5]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image51.png
 [6]: https://opencv.jp/googletestdocs/FAQ.html#faq-how-do-i-jump-to-the-line-of-a-failure-in-emacs