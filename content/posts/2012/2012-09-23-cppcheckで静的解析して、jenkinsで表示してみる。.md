---
author: admin
categories:
- C++
- C言語
- Jenkins
- 技術メモ
date: 2012-09-23T05:37:43+00:00
dsq_thread_id:
- 3.727848e+09
pdrp_attributionLocation:
- end
pvc_views:
- 6689
tags:
- CI
- CppCheck
- XML
- 静的解析
title: Cppcheckで静的解析して、Jenkinsで表示してみる。
type: post
url: /archives/=497
---

C/C++用の静的解析ツール、cppcheckを使って、静的コード解析をして、
  
解析結果をJenkinsで表示する方法を調べてみた。

### CppCheckのダウンロード・インストール

以下の公式サイトから入手する。
  
<https://cppcheck.sourceforge.net/>

Cygwiinからでも入手ができた。
  
Cygwin使いの自分は、cygwin の setup経由で入手。
  
[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb19.png" alt="image" width="433" height="217" border="0" />][1]

### CppCheckを実行してみる

公式マニュアルは[ココ][2]( var 1.56)
  
コマンドラインから、以下のコマンドを実行する。
  
\[text\](フアイル単位）
  
cppcheck &#8211;enable=all hogehoge.c
  
[/text]
  
\[text\](フォルダ単位)
  
cppcheck &#8211;enable=all hogehoge
  
[/text]
  
[text]
  
ex.)
  
C:\mock_study>cppcheck &#8211;enable=all src
  
Checking src/numlib.c&#8230;
  
1/2 files checked 22% done
  
Checking src/sample.c&#8230;
  
2/2 files checked 100% done
  
Checking usage of global functions..[/text]
  
XML形式で結果を出力するには、窶肺ml オプションをつける。
  
( &#8211;xmlﾂꀀﾂꀀﾂꀀﾂꀀﾂꀀﾂꀀﾂꀀﾂꀀﾂꀀﾂꀀﾂꀀﾂꀀﾂꀀﾂꀀﾂꀀ Write results in xml format to error stream (stderr).)
  
これで、標準エラーでXML形式の結果が出力されるので、
  
リダイレクトでファイルに記録すればよい。
  
[text]C:\mock\_study>cppcheck &#8211;enable=all 窶度ml srcﾂꀀ 2>cppcheck\_result.xml[/text]
  
( 2> で標準エラーをリダイレクトできるんですねー、知らなんだ ; ~_ ~ ; ）

### CppCheck Plugin を Jenkinsに入れて、静的コード解析結果をみる

<span style="widows: 2; text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; display: inline !important; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; orphans: 2; float: none; color: #333333; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;">Cppcheck PluginをJenkinsにインストールする。</span> <br style="widows: 2; text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; orphans: 2; color: #333333; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;" /><span style="widows: 2; text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; display: inline !important; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; orphans: 2; float: none; color: #333333; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;">[Jenkinsの管理] > [プラグインの管理] から <span style="widows: 2; text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; display: inline !important; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; orphans: 2; float: none; color: #333333; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;">Cppcheck</span> Pluginを選択して、インストール。</span>

プロジェクトの<span style="widows: 2; text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; display: inline !important; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; orphans: 2; float: none; color: #333333; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;">[設定] > [ビルド] で、cppcheckのコマンドを追加する。<br /> </span>
  
[ビルド後の処理] に [Publish Cppcheck results]
  
という項目が追加されているので、選択。
  
Cppcheck report XMLsという項目に、xmlファイル名を追加する。[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb20.png" alt="image" width="557" height="142" border="0" />][3]

### 実行結果

Web画面でエラーが確認できる。
  
クリックすれば、ソースの該当箇所まで飛んでくれる。便利。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb21.png" alt="image" width="566" height="182" border="0" />][4]

#### 動作環境

  * Windows 7
  * Cppcheck 1.56
  * Cppcheck Plugin 1.11

#### 参考ページ

  * <a name="1334374451" href="https://d.hatena.ne.jp/replication/20120409/1334374451"></a>フリーのC/C++向け静的コード解析ツールCppCheckの使い方 &#8211; 大人になったら肺呼吸
  * ##### [Cppcheck を使ってみた &#8211; ブログズミ][5]

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image19.png
 [2]: https://cppcheck.sourceforge.net/manual.pdf
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image20.png
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image21.png
 [5]: https://srz-zumix.blogspot.jp/2012/03/cppcheck.html