---
author: admin
categories:
- Eclipse
- 日記
date: 2013-06-09T09:30:51+00:00
dsq_thread_id:
- 3.732821e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 3442
tags:
- cmock
- unity
title: UnityやCMockをEclipseで使うときに役立つ設定まとめ
type: post
url: /archives/=1391
---

<!--:ja-->最近はようやくUnityやCMockの使い方が分かってきた感じだ。今日は、Eclipseでの便利な設定を試してみた。元ネタ、本家公式サイトからの抜粋。

  * <a style="color: #0070c5;" href="https://throwtheswitch.squarespace.com/white-papers/using-eclipse-ide.html" target="_blank">Throw The Switch! &#8211; White Papers &#8211; Using Eclipse IDE</a> <img alt="" src="https://b.hatena.ne.jp/entry/image/https://throwtheswitch.squarespace.com/white-papers/using-eclipse-ide.html" border="0" />

### TEST_IGNOREタグの設定

Eclipseは指定したタグを検索して、タスク・ビューに表示させる機能がある。これに、UnityでのTEST_IGNOREを加えることで、これからするテストに対するリマインダを設定できる。以下を選択。

  * ツールバー 
      * ウィンドウ -> 設定 
          * C/C++ -> タスク・タグ -> 新規

TEST_IGNOREを追加する。その後、プロジェクトを右クリックして、

  * インデックス -> 全てのファイルを更新

することで、再度タグの検索が走り、TEST_IGNOREがタスクビューに表示される。

### SunShade Pluginでテストコードとソースコード間をいったりきたり

SunShade プラグインを入れると、テストコードとソースコード間をいったりきたりできる。通常は、2画面で並べて作業しているので、出番は少なめかもしれない。

<a href="https://sunshade.sourceforge.net/" target="_blank">The Sunshade suite of eclipse plugins</a>

ツールバー -> ヘルプ -> 新規ソフトウェアのインストール -> 追加 で[<span style="color: #0066cc;">https://sunshade.sourceforge.net/update</span>][1]を追加してインストールする。

起動するとエラーした(´･ω･｀)SWTエラーが発生しましただと。

Cannot initialize Drop

pluginsディレクトリのnet.sourceforge.sunshade.filedrag_3.4.0というディレクトリを削除したらエラーしなくなった。こんな対処で大丈夫か？

機能を利用するためには、ツールバー -> ウィンドウ -> 設定 -> Sunshade -> Scripted Actionsを選択。たとえば、src/*\*\\*\*.cとtest/Test\*\**.cの間を行き来するためには、以下のように書く。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:b1908cc1-e4fa-45b9-a7b5-9754d3321c15" style="float: none; margin: 0px; display: inline; padding: 0px;">
  <pre name="code" class="c">importPackage(java.lang, Packages.org.eclipse.ui);
importPackage(Packages.net.sourceforge.sunshade.util);
var wb = PlatformUI.getWorkbench(); // IWorkbench API
var editor = // IEditorPart API
  wb.getActiveWorkbenchWindow().getActivePage().getActiveEditor(); 
if (editor)
{
  var input = editor.getEditorInput(); // IEditorInput API
  var path = input.getPath(); // IPath API
  var filename = path.toOSString();
  if (filename.indexOf("Test") == -1) // ここを書き換え
    filename = filename.replace("src\\","test\\Test"); // ここを書き換え
  else
    filename = filename.replace("test\\Test","src\\"); // ここを書き換え
  //alert("Filename: " + filename);
  FileUtil.openEclipseEditorForFile(filename);
}</pre>
</div>

Test拡張子以外に対応する場合でも、例えばMock拡張子でも、すこしコードを書き換えれば利用できる。

このSunshadeにはErrorlinkというツールがあるけれども、こっちはうまく動かない。

### コードテンプレートの設定

Eclipseのコードテンプレート機能を利用すれば、Ctrl + Spaceでテストのテンプレートを呼び出すことができる。

レッツ メタプログラミング(^O^)／

ツールバー -> ウィンドウ -> 設定 -> C/C++ -> エディタ－ -> テンプレートを選択。

新規を選択して、テスト用のテンプレートを記述する。たとえば、Unityのフィクスチャ機能のテンプレートは以下。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:9e65a607-fb43-4be5-b70b-8791c1bef6b2" style="float: none; margin: 0px; display: inline; padding: 0px;">
  <pre name="code" class="c">TEST(${test_group_name},${test_case_name})
{
  ${line_selection}${cursor}

  TEST_IGNORE_MESSAGE("${test_case_name} Needs Definition.");
}

RUN_TEST_CASE(${test_group_name}, ${test_case_name});</pre>
</div>

別にテンプレートを利用しなくても、testまで書いて Ctrl + Spaceである程度の自動補完はできる。

<div id="fastlookup_top" style="display: none;">
</div>

<!--:-->

<!--:en-->

最近はようやくUnityやCMockの使い方が分かってきた感じだ。今日は、Eclipseでの便利な設定を試してみた。元ネタ、本家公式サイトからの抜粋。

<a href="https://throwtheswitch.squarespace.com/white-papers/using-eclipse-ide.html" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://throwtheswitch.squarespace.com/white-papers/using-eclipse-ide.html" width="150" height="130" /></a> <a style="color: #0070c5" href="https://throwtheswitch.squarespace.com/white-papers/using-eclipse-ide.html" target="_blank">Throw The Switch! &#8211; White Papers &#8211; Using Eclipse IDE</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://throwtheswitch.squarespace.com/white-papers/using-eclipse-ide.html" />

### TEST_IGNOREタグの設定

Eclipseは指定したタグを検索して、タスク・ビューに表示させる機能がある。これに、UnityでのTEST_IGNOREを加えることで、これからするテストに対するリマインダを設定できる。以下を選択。

  * ツールバー 
      * ウィンドウ -> 設定 
          * C/C++ -> タスク・タグ -> 新規 

TEST_IGNOREを追加する。その後、プロジェクトを右クリックして、

  * インデックス -> 全てのファイルを更新 

することで、再度タグの検索が走り、TEST_IGNOREがタスクビューに表示される。

### SunShade Pluginでテストコードとソースコード間をいったりきたり

SunShade プラグインを入れると、テストコードとソースコード間をいったりきたりできる。通常は、2画面で並べて作業しているので、出番は少なめかもしれない。

<a href="https://sunshade.sourceforge.net/" target="_blank">The Sunshade suite of eclipse plugins</a>

ツールバー -> ヘルプ -> 新規ソフトウェアのインストール -> 追加 で[<font color="#0066cc">https://sunshade.sourceforge.net/update</font>][1]を追加してインストールする。

起動するとエラーした(´･ω･｀)SWTエラーが発生しましただと。

Cannot initialize Drop

pluginsディレクトリのnet.sourceforge.sunshade.filedrag_3.4.0というディレクトリを削除したらエラーしなくなった。こんな対処で大丈夫か？

機能を利用するためには、ツールバー -> ウィンドウ -> 設定 -> Sunshade -> Scripted Actionsを選択。たとえば、src/*\*\\*\*.cとtest/Test\*\**.cの間を行き来するためには、以下のように書く。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:b1908cc1-e4fa-45b9-a7b5-9754d3321c15" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">importPackage(java.lang, Packages.org.eclipse.ui);
importPackage(Packages.net.sourceforge.sunshade.util);
var wb = PlatformUI.getWorkbench(); // IWorkbench API
var editor = // IEditorPart API
  wb.getActiveWorkbenchWindow().getActivePage().getActiveEditor(); 
if (editor)
{
  var input = editor.getEditorInput(); // IEditorInput API
  var path = input.getPath(); // IPath API
  var filename = path.toOSString();
  if (filename.indexOf("Test") == -1) // ここを書き換え
    filename = filename.replace("src\\","test\\Test"); // ここを書き換え
  else
    filename = filename.replace("test\\Test","src\\"); // ここを書き換え
  //alert("Filename: " + filename);
  FileUtil.openEclipseEditorForFile(filename);
}</pre>
</div>

Test拡張子以外に対応する場合でも、例えばMock拡張子でも、すこしコードを書き換えれば利用できる。

このSunshadeにはErrorlinkというツールがあるけれども、こっちはうまく動かない。

### コードテンプレートの設定

Eclipseのコードテンプレート機能を利用すれば、Ctrl + Spaceでテストのテンプレートを呼び出すことができる。

レッツ メタプログラミング(^O^)／

ツールバー -> ウィンドウ -> 設定 -> C/C++ -> エディタ－ -> テンプレートを選択。

新規を選択して、テスト用のテンプレートを記述する。たとえば、Unityのフィクスチャ機能のテンプレートは以下。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:9e65a607-fb43-4be5-b70b-8791c1bef6b2" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">TEST(${test_group_name},${test_case_name})
{
  ${line_selection}${cursor}
  
  TEST_IGNORE_MESSAGE("${test_case_name} Needs Definition.");
}

RUN_TEST_CASE(${test_group_name}, ${test_case_name});
</pre>
</div>

別にテンプレートを利用しなくても、testまで書いて Ctrl + Spaceである程度の自動補完はできる。

<!--:-->

 [1]: https://sunshade.sourceforge.net/update