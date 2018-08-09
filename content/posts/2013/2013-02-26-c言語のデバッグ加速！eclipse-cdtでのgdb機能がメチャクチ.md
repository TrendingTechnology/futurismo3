---
author: admin
categories:
- C++
- C言語
- Eclipse
- 日記
date: 2013-02-26T14:12:34+00:00
dsq_thread_id:
- 3.7280077e+09
pdrp_attributionLocation:
- end
pvc_views:
- 17798
tags:
- CDT
- gdb
title: C言語のデバッグ加速！Eclipse CDTでのgdb機能がメチャクチャ便利だ。
type: post
url: /archives/=1211
---

Eclipse CDTには、グラフィッカルなgdbインタフェースがついてきます。
  
これが最近便利すぎるので、オススメ機能をここらでまとめときます。

<div class="wlWriterEditableSmartContent" id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:ac266147-2047-4d3f-8587-a4b20ba23f92" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <div>
  </div>
</div>

### 基本的な設定方法

#### コンパイルオプション

まずは実行ファイルを作るときにコンパイルオプションで以下を追加。

> CPPFLAGS += -g -O0

-g : GDB用のデバッグ情報を実行ファイルに含める。
  
-Oo : コンパイラに最適化をさせない。

#### ルックアップパスの設定

デバッグ・パースペクティブにソースが現れないときは、ソースのパスが設定されていない。

Can’t find a source file at : hogehoge…

[ウィンドウ] > [設定] > [C/C++] > [デバッグ] > [ソース・ルックアップ・パス] から追加したいソースがあるフォルダを追加する。

#### GDBを実行してみる

デバッグ・パースペクティブからF11を実行できればOK。

### ソースを見ながらブレークポイントをはって、ステップ実行

ソースを見ながらブレイクポイントをはれるのが嬉しい。
  
貼る方法も、解除する方法も、クリックひとつだ。

はった場所は、別のビューから確認できる。

<div class="wlWriterEditableSmartContent" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:3ad06a91-33cc-4fe5-aa5b-351bdc731c71" style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px;">
  <a href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5849257452933299746" target="_blank"><img style="border: none; padding: 0px; margin: 0px;" alt="2013_0226_gdb_0.png" src="https://lh3.ggpht.com/-hK-wybdNYsc/USy8qanlPiI/AAAAAAAAAIg/BmoOdgZhoqA/2013_0226_gdb_0.png" /></a>
</div>

### 構造体や変数のなかもスケスケ丸見え

gdbの恩恵は、変数や構造体の中身を見て、さらに値を書き換えて実行できるところだ。
  
構造体のネスト構造を中の中まで確認できるのがとても嬉しい。

また、xUnitではテストしづらい部分もブレークを貼って手動で値を書き換えてテストスルことができる。痒いところに手が届くとは、ここから始まった。

変数や構造体の参照は、[変数ビュー]で確認できる。
  
図は複雑怪奇なaddrinfo構造体とsockaddr構造体。
  
中身の値まで丸見えだ。なんなら、書き換えも同じビューで可能。

<div class="wlWriterEditableSmartContent" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:2ce6aac0-385a-4d23-9ed2-5127c8654143" style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px;">
  <a href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5849256532699596914" target="_blank"><img style="border: none; padding: 0px; margin: 0px;" alt="2013_0226_gdb_01.png" src="https://lh5.ggpht.com/-8Vq8OIrqCa8/USy702exSHI/AAAAAAAAAIA/gMVZr-CkLkw/2013_0226_gdb_01.png" /></a>
</div>

また、ソース上で変数の上にカーソルを移動するだけでも確認できる。

### ステップ実行で、セグメンテーション違反した箇所まで移動できる

これについては、以前記事にまとめたので、こちらを参照。

  * [GoogleTestとEclipseのGDB機能の組み合わせが最強だった件 | Futurismo][1]
  * [[Eclipse CDT]セグメンテーション違反した箇所をGDBで特定する | Futurismo][2]

ステップ実行のためのよく使用するショートカットも以下にまとめます。

<table width="557" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td valign="top" width="133">
      起動
    </td>
    
    <td valign="top" width="133">
      F11
    </td>
    
    <td valign="top" width="289">
      gdbを起動する
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="133">
      再開
    </td>
    
    <td valign="top" width="133">
      F8
    </td>
    
    <td valign="top" width="289">
      gdbを再開する。<br /> はじめはmainで止まるので、F8でブレイクポイントまで移動することを
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="133">
      ステップイン
    </td>
    
    <td valign="top" width="133">
      F5
    </td>
    
    <td valign="top" width="289">
      ステップ実行をする。<br /> 一行ずつプログラムを進めることができる。
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="133">
      ステップオーバー
    </td>
    
    <td valign="top" width="133">
      F6
    </td>
    
    <td valign="top" width="289">
      関数単位で実行する。<br /> 関数の頭でステップオーバーすると、<br /> 関数内にはいらずに次の処理へすすむ。<br /> 結構使う。
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="133">
      ステップ・リターン
    </td>
    
    <td valign="top" width="133">
      F7
    </td>
    
    <td valign="top" width="289">
      現在の関数がreturnするまでを実行する。<br /> まあまあ使う。
    </td>
  </tr>
</table>

&nbsp;

他にも、ウォッチポイントを簡単に設定できたり、逆アセンブリ結果を表示できる。
  
とにかく高機能だ。
  
こんな便利なものが、無料で使えるならば、利用しない手はないだろう。

### 補足

  * Eclipse 3.7 Indigoでは、gdb7.4以降のバージョンが動作しないようだ。

<span style="text-align: left; widows: 2; text-transform: none; background-color: #f4f4f4; text-indent: 0px; letter-spacing: normal; display: inline !important; font: 13px/16px verdana, geneva, lucida, 'Lucida Grande', arial, helvetica, sans-serif; white-space: normal; orphans: 2; float: none; color: #000000; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;"><span style="font-family: Verdana;">Undefined maintenance set command: &#8220;python print-stack off&#8221;. Try &#8220;help maintenance set&#8221;.</span></span>

のようなメッセージが出るはず。そんなときは、

  * Eclipse 4.2 Junoにアップグレードする。
  * gdbをダウングレードする。

のいづれかが必要。自分はcygwinで一つ前のgdbのバージョンに設定したら動いた。

[Eclipse Community Forums: CDT ≫ Error message from debugger back end][3]

  * Eclipseを使ってない場合はInsightという方法もある。

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://futurismo.biz/archives/1178
 [2]: https://futurismo.biz/archives/1176
 [3]: https://www.eclipse.org/forums/index.php/m/991796/