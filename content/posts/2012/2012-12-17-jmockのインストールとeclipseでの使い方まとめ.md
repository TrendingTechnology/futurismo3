---
author: admin
categories:
- Java
- TDD
- 技術メモ
date: 2012-12-16T23:02:38+00:00
dsq_thread_id:
- 3.7371914e+09
pvc_views:
- 3850
tags:
- JMock
title: JMockのインストールとEclipseでの使い方まとめ
type: post
url: /archives/=961
---

JMockとは、JAVAでモックオブジェクトを簡単に作成するためのフレームワーク。   
モックオブジェクトを利用すると、以下のことが簡単にテストできる。

  * メゾッドが何回呼ばれたか。 
  * メソッドがどんな引数で呼ばれたか。 
  * メソッドから任意の値を返す。 
  * メゾッドがどんなシーケンスで呼ばれたか。 

などなど。他にもできることはたくさん。

### JMockの設定方法

#### JMockのダウンロード

以下のサイトより、ダウンロード。   
ここでは、最新安定版の 2.5.1 jmock-2.5.1-jars.zipを落とす。

<a href="https://jmock.org/download.html" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://jmock.org/download.html" width="150" height="130" /></a> <a style="color: #0070c5" href="https://jmock.org/download.html" target="_blank">jMock &#8211; Downloads</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://jmock.org/download.html" />  <br style="clear: both" />

#### Eclipseでビルド・パスを通す

ダウンロードしたzipファイルを解凍し、任意の場所に置く。   
（ここでは、jmockと名前を変更してC:\src\jmockにおいた）

EclipseからJMockライブラリを利用するために、ビルド・パスを通す。   
プロジェクトを選択して、[ブロパティ] > [Javaのビルドパス]を選択。   
[ライブラリ]タブ > [ライブラリの追加] > [ユーザライブラリ] > [次へ]   
[ユーザライブラリ] > [新規]を選択。

ライブラリを作成するために、[JMock2]と名前をつける。   
続いて、[外部Jar追加]。ここでは、以下のJarを追加。

  * jmock-2.5.1.jar 
  * jmock-junit4-2.5.1.jar 
  * hamcrest-library-1.1.jar 
  * hamcrest-core-1.1.jar 

### JMockを動かしてみる

JMockを動かしてみる。JMockを利用するためには、テスト対象のコードは以下。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:72f612c3-183a-4dd2-8b4c-396ed70b58a6" class="wlWriterEditableSmartContent">
  <pre name="code" class="java">public class Sample {

	private External external;

	public int num() {
		return external.get_num();
	}

	public void setExternal(External external) {
		this.external = external;
	}
}
</pre>
</div>

#### インタフェースの用意

JMockを利用してモックオブジェクトを作成するためには、
    
  
クラスのメソッドが<font color="#0000ff">インタフェース化</font>されている必要がある。

インタフェースを利用することで、『実体』と『モック』を置き換えることができる。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:38d5679c-d0d9-4629-bfde-59570aac9685" class="wlWriterEditableSmartContent">
  <pre name="code" class="java">public interface External {
	int get_num();
}
</pre>
</div>

#### テストコードの追加

続いて、テストコードの追加。ここでは、1回呼ばれることを検証している。oneOf
    
  
されに、生成されたモックの戻り値として返して貰いたい数字を指定している(10) 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:d7d54a66-88f1-4dc0-9d69-7e1ac4059602" class="wlWriterEditableSmartContent">
  <pre name="code" class="java">import static org.junit.Assert.*;

import org.jmock.Expectations;
import org.jmock.Mockery;
import org.jmock.integration.junit4.JMock;
import org.jmock.integration.junit4.JUnit4Mockery;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(JMock.class)   // TestRunnerを使う宣言
public class mock_sampleTest {
	private final Mockery context = new JUnit4Mockery(); //モッカリー生成
	private External external;
	private Sample impl;

	@Before  // 事前処理宣言
	public void setUp() throws Exception {
		external = context.mock(External.class);  //インタフェースのモック生成
		impl = new Sample();					   //テスト対象の宣言
		impl.setExternal(external);
	}

	@Test
	public void firstMockGenerate() {
		context.checking(new Expectations() {{
			oneOf(external).get_num();		//1回呼びだされる
			will(returnValue(10));			//10を返す
		}});
		assertEquals(10, impl.num());       //メソッド呼び出し
	}
}
</pre>
</div>

モッカリーとは、テスト実行中にモックを呼び出す。
    
  
モッカリーやモック生成は定型文なので、コピペで。

テストを実行すると、グリーンバーが出てテストが成功することがわかる。

#### おまけ

Eclipseだと、もともと入っているJUnitとJMockでのものが競合する場合がある。
    
  
そんなときは、以下の解決方法を参照。

<a style="widows: 2; text-transform: none; background-color: rgb(255,255,255); text-indent: 0px; letter-spacing: normal; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; orphans: 2; color: rgb(102,102,102); word-spacing: 0px; text-decoration: underline; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px" title="EclipseにJMockを入れてSecurityExceptionが発生。" href="https://futurismo.biz/archives/939">EclipseにJMockを入れてSecurityExceptionが発生。</a>