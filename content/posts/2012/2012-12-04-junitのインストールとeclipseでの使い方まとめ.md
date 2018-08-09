---
author: admin
categories:
- Eclipse
- Java
- TDD
- 技術メモ
date: 2012-12-04T14:33:38+00:00
dsq_thread_id:
- 3.728098e+09
excerpt: JUnitをEclipseで利用する方法をメモします
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 24899
side:
- "y"
sub:
- def
tags:
- JUnit
title: JUnitのインストールとEclipseでの使い方まとめ
title_view:
- "y"
type: post
url: /archives/=844
---

<!--:ja-->JUnitをEclipseで利用する方法をメモします。

#### 環境

  * Windows 7 64bit
  * Eclipse 4.2 Juno
  * Java SE 7.9

### JUnitはJava用の単体テストフレームワーク

JUnitとは、Java用の単体テストフレームワーク。
  
Javaでのロジックテストが簡単にできる、お助けツール。
  
(Wikipedia: <https://ja.wikipedia.org/wiki/JUnit>)
  
この本がJUnitでは、一番有名。TDDのバイブル。

<div id="scid:81867AAF-BB02-476b-AE5D-12BDAC2E750D:c1783384-3301-47da-a4d5-f01793c22edf" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <a href="https://www.amazon.co.jp/exec/obidos/ASIN/4894717115/sleephacker-22/ref=nosim" target="_blank"><img src="https://ecx.images-amazon.com/images/I/51G6YEDVRKL._SL160_.jpg" alt="テスト駆動開発入門" /><br /> テスト駆動開発入門<br /> ケント ベック </a>
</div>

&nbsp;

### JUnitのダウンロードとインストール

#### JUnitを手に入れる

JUnitはGuitHubより落としてこれる。

  * <https://github.com/junit-team/junit/wiki/Download-and-Install> 
      * junit.jar

JUnitのインストールは、落としてきたフォルダを任意の場所に置くだけ。
  
(ここではC:\src\junitにおいた）

フォルダに環境変数のパスを通す。
  
<span style="widows: 2; text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; display: inline !important; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; orphans: 2; float: none; color: #333333; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;">[コントロールバネル] > [システム] > [システムの詳細設定] > [環境変数]を選択。<br /> </span><span style="widows: 2; text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; display: inline !important; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; orphans: 2; float: none; color: #333333; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;"><span style="widows: 2; text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; display: inline !important; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; orphans: 2; float: none; color: #333333; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;">下段のシステムの環境変数の中からPathを選択して、[編集]を選択。<br /> </span></span><span style="widows: 2; text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; display: inline !important; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; orphans: 2; float: none; color: #333333; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;"><span style="widows: 2; text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; display: inline !important; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; orphans: 2; float: none; color: #333333; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;"><span style="widows: 2; text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; display: inline !important; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; orphans: 2; float: none; color: #333333; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;">すでに入っている値の最後に”;”をつけてから、パスを追加する。</span></span></span>

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:9f1bd905-ecfa-4817-9a09-8d9cd38a9735" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c">C:\src\junit</pre>
</div>

### EclipseでのJUnit ビルド・パスの設定

EclipseでJUnitを利用するために、ビルド・パスを通す。

プロジェクトを選択して、[ブロパティ] > [Javaのビルドパス]を選択。

[ライブラリ]タブ > [ライブラリの追加] > [ユーザライブラリ] > [次へ]

[ユーザライブラリ] > [新規]を選択。

ライブラリを作成するために、[JUnit4]と名前をつける。

続いて、[外部Jar追加]。

ここで、先ほどおいたファイルの中にあるjunit-4.11.jarを選択する。

### Eclipse JUnit プラグインを利用する

Eclipseでは， Eclipse JUnit プラグインを利用すると簡単にテストケースが作成できる。

（Eclipse JDTには標準で入っている）

テストコードを書きたいソースコードを右クリックして、[新規] > [JUnitテストケース]を選択。今回のテスト対象は、以下の通り。メソッドより期待値が返されるかをテストする。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:d6730482-b25e-4d27-926d-5859823c0f65" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="java">public class sample {
    public static int num() {
    	return 10;
    }
}</pre>
</div>

ここでは、新規JUnit 4テストケースを選択。とりあえず、細かい設定は置いておいて、完了を選択。テストケースが自動生成される。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:c63df8bb-aadd-4ebb-8ca1-4be8b22cda64" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="js">import static org.junit.Assert.*;

import org.junit.Test;

public class sampleTest {

	@Test
	public void test() {
		fail("まだ実装されていません");
	}

}</pre>
</div>

### JUnitテストの実行

#### テストの失敗

プロジェクトを選択して、右クリック。

[実行 > [JUnitテストの実行] を選択して、テストケースを実行する。

まだなにも期待値を書いていないので、テストは失敗する。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb82.png" alt="image" width="312" height="221" border="0" />][1]

#### テストの成功

fail(&#8220;まだ実装されていません&#8221;);の部分を置き換えてテスト実行すると、テストは成功する。

<pre>assertEquals(10, sample.num());
</pre>

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb83.png" alt="image" width="319" height="211" border="0" />][2]

assertEqualsは、期待値(10)と結果(sample.num() )を比較する関数。

等しければテストは成功する。

assertEqualsだけ覚えれば、とりあえずどんなテストでも書ける（乱暴な言い方）。

<div id="fastlookup_top">
</div>

<!--:-->

<!--:en-->

&nbsp;

<!--:-->

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image82.png
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image83.png