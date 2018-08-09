---
author: admin
categories:
- TDD
date: 2013-05-02T16:41:27+00:00
dsq_thread_id:
- 3.701756e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 4839
tags:
- gmock
- gtest
title: Visual Studio 2012に GoogleMockを導入したメモ
type: post
url: /archives/=1302
---

Visual StudioにGoogleMockを導入する手順も忘れないようにメモしながら入れてみようと思います。GoogleTestはGoogleMockの中に含まれるので、GoogleMockを入れれば、GoogleTestもついてくる。一石二鳥、早起きは三文の得、結構毛だらけ猫灰だらけだ。

#### 導入環境

  * Windows 7 
  * Visual Studio Express 2012&#160; for Windows Desktop
  * GoogleMock 1.6.0 

### GoogleMockをダウンロード

GoogleMockをダウンロードしてきて、適当な場所に置きます。

<https://code.google.com/p/googlemock/>

### Visual StudioでGoogleMockをビルド

Visual StudioでGoogleMockをビルドします。

まずは、msvc/2010配下に移動してフォルダの読み取り専用属性を外します。右クリックから[プロパティ] > [読み取り専用]のチェックを外す。

次に、gmock.slnをVisual Studioで起動します。Visual Studioの変換ウィザードが立ち上がり2010が2012用のプロジェクトに変換されるはず。

上のツールバーから[ビルド] > [ソリューションのビルド]でビルドまたは、F7で。そうすると、エラーが出まくるはず(´・ω・｀)

以下のサイトに、解説方法が載っている。感謝しながらヘッダファイルを修正しよう。gmockだけど、gtestのファイルを修正する。

[ブログズミ: Visual Studio 11 Beta で Google Test を使う][1]

gmock\gtest\include\gtest\internal\gtest-port.h

ただし、GoogleTestならばこれでうまく行くけれども、GoogleMockは軽薄な奴なので、そうはいかない。追加で修正。

ソリューションエクスプローラに並んでいるプロジェクト(gmock,gmock\_main,gmock\_test)のプロパティを右クリックで開き、[構成プロパティ] > [C/C++] > [プリプロセッサ] >[プリプロセッサの定義]を選択して、以下のdefineを追加する。

> \_VARIADIC\_MAX=10

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb99.png" width="574" height="356" />][2]

gmock\msvc\2010\Debug\gmock_test.exeができるので、とりあえず動かしてみて、テストが走ればコンパイル成功。以下のライブラリが作成されます。

  * gmock.lib
  * gmock_main.lib

### GoogleMockを使いたいプロジェクトの設定

GoogleMockを使いたいプロジェクトをVisual Studioで起動します。プロジェクトのプロパティを以下のように修正。gtestはgmockに含まれるので、ライブラリは必要ないことに注意。

  * gmockとgtestのインクルードディレクトリを設定&#160; 
      * C/C++ -> 全般 -> 追加のインクルードディレクトリ 
          * \gmock-1.6.0\include
          * \gmock-1.6.0\gtest\include
  * gmock ライブラリを追加(gtestライブラリの代わり） 
      * リンカー -> 全般 -> 追加のライブラリディレクトリ 
          * \gmock-1.6.0\msvc\2010\Debug
      * リンカー-> 入力 -> 追加のライブラリ 
          * gmock.lib 
          * gmock_main.lib
  * ランタイムライブラリの修正 
  * C/C++ -> コード生成-> ランタイムライブラリ
  * マルチスレッド デバッグ (/MTd)

また、\_VARIADIC\_MAX=10もプリプロセッサに追加する。

Debug用のメイン関数に <gmock/gmock.h>をインクルードする。また、main関数に、&#160;&#160;&#160; ::testing::InitGoogleMock(&argc, argv);を追加。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:4d27f7f7-8170-48e8-9cd8-248af99e4d55" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">#include "stdafx.h"
#include &lt;gmock/gmock.h&gt;
#include &lt;gtest/gtest.h&gt;

 
int _tmain(int argc, _TCHAR* argv[])
{
    ::testing::InitGoogleTest(&argc, argv);
 ::testing::InitGoogleMock(&argc, argv);
    return RUN_ALL_TESTS();
}

</pre>
</div>

サンプルコードまで書こうとおもったけど、疲れたので今日は終わり。参考リンクを下にいろいろ貼っておきます。

#### 参考

  * [ブログズミ: Visual Studio 11 Beta で Google Test を使う][1] 
  * [VCでGoogle Test &#8211; udon&#8217;s blog][3] 
  * [Visual Studio Express 2012 for Windows Desktop で初めてのGoogle Test を動かした記録 &#8211; HIDARI日記（右）][4] 
  * [C/C++開発者におくるユニットテストフレームワークGoogleTestの使い方 &#8211; 大人になったら肺呼吸][5] 
  * [Sticky Bits ≫ Blog Archive ≫ Setting up googlemock with Visual C++ 2010 Express Edition][6] 
  * [Visual Studio で GoogleMock を使う &#8211; かおるんダイアリー][7]

 [1]: https://srz-zumix.blogspot.jp/2012/03/visual-studio-11-beta-google-test.html
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image99.png
 [3]: https://datsuns.hatenablog.com/entry/2013/02/13/215650
 [4]: https://hidari-lab.hatenablog.com/entry/vs_exp_2012_with_gtest
 [5]: https://d.hatena.ne.jp/replication/20111208/1323356303
 [6]: https://blog.feabhas.com/2012/03/setting-up-googlemock-with-visual-c-2010-express-edition/
 [7]: https://d.hatena.ne.jp/kaorun55/20100723/1279810738