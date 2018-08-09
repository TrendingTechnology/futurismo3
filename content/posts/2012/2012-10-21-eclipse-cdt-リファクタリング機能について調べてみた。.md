---
author: admin
categories:
- C++
- C言語
- Eclipse
- 技術メモ
date: 2012-10-21T13:25:16+00:00
dsq_thread_id:
- 3.7401923e+09
pvc_views:
- 4931
tags:
- CDT
- リファクタリング
title: Eclipse CDT リファクタリング機能について調べてみた。
type: post
url: /archives/=712
---

偶然、以下のリンクの動画を見つけて、ものすごくカッコ良かった。

[実践！リファクタリング &#8211; WEB+DB PRESS Vol.37][1]

ほぼパクリだけれども、自分でもEclipse CDT版で紹介動画を作ってみた。   
ソースとかは思いつきなので、参考にならないけれども。

[https://www.youtube.com/embed/huxHVMcMfR0] 

&#160;

### Eclipse CDTのリファクタリング機能はJDTに比べてショボかった

Eclipse CDTのリファクタリング機能はJDTに比べて、思ったよりもショボかった。

  * インライン化の機能はない。
  * 関数の抽出でも、重複コードを見つけてくれない。
  * 関数の移動ができない

。。などなど。

できることは、以下の通り。

  * 名前変更
  * ローカル変数の抽出
  * 定数の抽出
  * 関数の抽出
  * Toggle Function

開発元のサイト（[<font color="#0066cc">https://r2.ifs.hsr.ch/cdtrefactoring</font>][2])をのぞくと、今後機能追加がされそうな雰囲気。

### CDT リファクタリング機能の簡単な紹介

リファクタリング機能の簡単な説明。

実際にC言語でどのようなリファクタリングが有効かというのは、以下のサイトが非常に参考になった。リファクタリングの経典、マーチン・ファウラーの『リファクタリング』の中で、C言語で使えるものだけを選択して紹介している。

[Refactoring C-code][3]

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:81867AAF-BB02-476b-AE5D-12BDAC2E750D:2a35f98d-dac2-4fe3-b1df-a10dafa61646" class="wlWriterEditableSmartContent">
  <a href="https://www.amazon.co.jp/exec/obidos/ASIN/4894712288/sleephacker-22/ref=nosim" target="_blank"><img alt="リファクタリング―プログラムの体質改善テクニック (Object Technology Series)" src="https://ecx.images-amazon.com/images/I/51885S48YPL._SL160_.jpg" /><br />リファクタリング―プログラムの体質改善テクニック (Object Technology Series)<br />マーチン ファウラー </a>
</div>

#### 名前変更(Alt + Shift + R)

同一ファイル名の変数名や関数名を変更できる。   
個人的には、とてもよく使う。

ただし、ファイルをまたいで置換は失敗する。   
この場合は、検索＆置換機能で変更したほうがよい。

#### ローカル変数の抽出(Alt +Shift + L)

選択した部分をローカル変数に抽出することができる。   
長い条件文を簡単にするときなどや、わかりにくい式に簡単な名前を与えるときに使用する。

実行すると、選択した行のすぐ上に、型つきで変数の定義と代入文があらわれる。

> int sample = ( 選択した式）   
> if(sample(選択した式) {   
> }

個人的には、この逆の変数のインライン化とセットでできればいいのにと思う。

#### 定数の抽出( Alt + C)

数字や文字列など、むき出しな状態でコードに書いてあるときは、定数の抽出を使う。   
実行すると、ファイルの先頭に、定数が 『static const 』つきで宣言される。

#### 関数の抽出( Alt + Shift&#160; + M)

関数の抽出もよく使う。

関数として抽出したい部分を選択して実行すると、関数の頭に選択した部分を含む関数が生成される。選択した部分にreturn文が含まれると動作しないので注意が必要。また、選択した部分に含まれる変数を自動的に検出して、仮引数とする。

これはJDTのように重複する部分を自動で検出して置換してはくれないのが悲しい。

#### Toggle Function( Alt + Shift + T)

指定された関数をソースファイルからヘッダファイルへ移動する。   
関数をインライン関数に変更したい場合に使う機能。

#### 参考リンク

  * <https://r2.ifs.hsr.ch/cdtrefactoring>
  * [C++ _Refactoring_ &#8211; Now for Real.pdf &#8211; EclipseCon][4]

 [1]: https://gihyo.jp/magazine/wdpress/information/2007/vol37-refactoring
 [2]: https://r2.ifs.hsr.ch/cdtrefactoring
 [3]: https://www.s34.co.jp/cpptechdoc/article/c_refactoring/
 [4]: https://docs.google.com/viewer?url=https://www.eclipsecon.org/2012/sites/eclipsecon.org.2012/files/C++%20Refactoring%20-%20Now%20for%20Real_0.pdf