---
author: admin
categories:
- Eclipse
- 技術メモ
date: 2012-11-21T11:57:40+00:00
dsq_thread_id:
- 3.6948943e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 3245
tags:
- TopCoder
title: TopCoder用プラグイン EclipseCoderを試す
type: post
url: /archives/=745
---

本屋でTopCoder用の本を購入して依頼、毎日コツコツと問題を解いている。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:81867AAF-BB02-476b-AE5D-12BDAC2E750D:2b833d59-0291-49c6-b08b-328f3473eaf5" class="wlWriterEditableSmartContent">
  <a href="https://www.amazon.co.jp/exec/obidos/ASIN/4797367172/sleephacker-22/ref=nosim" target="_blank"><img alt="最強最速アルゴリズマー養成講座 プログラミングコンテストTopCoder攻略ガイド" src="https://ecx.images-amazon.com/images/I/61G3pzteg7L._SL160_.jpg" /><br />最強最速アルゴリズマー養成講座 プログラミングコンテストTopCoder攻略ガイド<br />高橋 直大 </a>
</div>

Eclipse用のTopCoderプラグインである『EclipseCoder』を試してみた。   
公式URL:   
<https://fornwall.net/eclipsecoder/>

### EclipseCoderのインストール

ダウンロードは、ツールバーの   
[ヘルプ] > [新規ソフトウェアのインストール] から。   
作業対象に以下のURLを貼り付ける。   
<https://fornwall.net/eclipsecoder/>

  * EclipseCoder Core
  * EclipseCoder Problem Archive
  * EclipseCoder (好きな言語) Support

を選択してダウンロードとインストール。   
言語は JAVA, C++ , Pythonがあるようだ。ここでは、C++を選択。

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb55.png" width="405" height="286" />][1]

### EclipseCoderの使い方

ツールバーの [ウィンドウ] > [設定] > [EclipseCoder]から設定画面を開き、   
Username/Passwordを入れる。   
（入れなくても、ログイン時に入力すれば大丈夫だけど）

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb56.png" width="416" height="268" />][2]

[ウィンドウ] > [ビューを開く]から、EclipseCoderのビューを選択。   
開いたビューの右上の赤いマークをクリックすると、TopCoderが開く。

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="temp" border="0" alt="temp" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/temp_thumb.png" width="437" height="183" />][3]

問題を開いて、言語[C++]を選択すると、自動的にEclipse上で、   
ヘッダファイルとテストファイルが生成される。

自動的にできたプロジェクトのオプションから   
[C/C++ビルド] > [ツール・チェーン・エディタ]を選択して、自分のツール・チェーンを選択。（Default は Microsoft Visual C++]なので [Cygwin GCC]に変更している）

プロジェクトをビルドしてバイナリを実行してみると、コンソールにテスト失敗の失敗が表示される。

> Test case 0 PASSED!   
> Test case 1 FAILED! Expected: <2> but was: <0>   
> Test case 2 FAILED! Expected: <4> but was: <0>   
> Test case 3 FAILED! Expected: <8> but was: <0>   
> Test case 4 FAILED! Expected: <6> but was: <0>

あとは、ヘッダファイルを編集して、問題を解くのみ。

#### 感想

テストコードを自動生成してくれるところが秀逸だと思う。   
Eclipseが好きな自分としては、このプラグインは素晴らしい。   
問題がスラスラ解けたら、もっと素晴らしい。

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image55.png
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image56.png
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/temp.png