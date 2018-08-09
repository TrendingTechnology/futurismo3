---
author: admin
categories:
- C++
- C言語
- Eclipse
- 日記
date: 2013-03-02T07:25:35+00:00
dsq_thread_id:
- 3.6954716e+09
pvc_views:
- 8141
tags:
- CDT
- CppCheck
- 静的解析
title: CppcheckをEclipse CDTに組み込んで静的解析！C/C++ユーザに嬉しい『cppcheclipse』
type: post
url: /archives/=1226
---

Eclipse CDT からCppcheckの結果が見れたら便利だなーなんて思って、Eclipseのプラグインを探してみたら、こんなのを見つけた。

<a href="https://code.google.com/a/eclipselabs.org/p/cppcheclipse/?redir=1" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://code.google.com/a/eclipselabs.org/p/cppcheclipse/?redir=1" width="150" height="130" /></a> <a style="color: #0070c5" href="https://code.google.com/a/eclipselabs.org/p/cppcheclipse/?redir=1" target="_blank">cppcheclipse &#8211; Integration for cppcheck with Eclipse (CDT) &#8211; Google Project Hosting</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://code.google.com/a/eclipselabs.org/p/cppcheclipse/?redir=1" />  <br style="clear: both" />

なんと語呂がいい名前。座布団一枚だ。 というわけで、試してみる。

#### 環境

  * Eclipse 4.2 Juno
  * Windows 7 
  * Cppcheck 1.58（注:1.58でないと、Eclipse 4.2 Junoで動かなかった」 

### cppcheclipseのダウンロードとインストール

Eclipse CDTとCppcheckはインストールされていることが前提で。   
Cppcheckがインストール方法は過去記事を参照ください。

<a href="https://futurismo.biz/archives/602" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://futurismo.biz/archives/602" width="150" height="130" /></a> <a style="color: #0070c5" href="https://futurismo.biz/archives/602" target="_blank">CppCheckでC言語/C++のメモリリーク（解放漏れ）を静的解析で検出する。 | Futurismo</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://futurismo.biz/archives/602" />  <br style="clear: both" />

注:cygwinからのcppcheckでは動かないので注意すること。

cppcheclipseのインストールは、ツールバーから[ヘルプ] > [Eclipse マーケットプレイス]を選択して、cppcheckで検索すると見つかるので、インストールを選択。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb91.png" width="523" height="162" />][1]

### Eclipseでの設定

インストールして再起動したら、ツールバーの[ウィンドウ] > [設定] > [C/C++]を選択する。選択項目にcppcheclipseが現れる。

まず、Cppcheckの実行バイナリを選択する。

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb92.png" width="539" height="189" />][2]

次に、[設定]を選択して、cppcheck実行時のオプションを選択する。   
とりあえずは、"&#8211;enable=all"だけでよい。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:6c5ccf1f-7747-4bdb-8914-2f53025f333f" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/20131603#5850643101089857202"><img style="border: 1px solid #ccc; background-color: white; padding: 6px; margin: 0px" alt="130302_1.png" src="https://lh5.ggpht.com/-UfhrqZpAKQ0/UTGo5wQM_rI/AAAAAAAAAJs/Nye6vRgtzlk/130302_1.png" /></a>
</div>

&#160;

#### cppcheckを実行する

プロジェクト・エクスプローラからcppcheckを実行したいファイルやフォルダを選択して、右クリック。[cppcheck] > [run cppcheck]を選択して、実行。

実行の結果、エラーがあった場合は[問題ビュー]から確認できる。   
そのまま、該当箇所にもジャンブで移動可能なのが嬉しい。

エディタにも、エラー箇所は赤く表示される。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:c20a0f64-285b-4397-aac7-eb6804aee113" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/20131603#5850643098661279778"><img style="border: none; padding: 0px; margin: 0px" alt="130302_2.png" src="https://lh3.ggpht.com/-Iku8MNMX818/UTGo5nNL2CI/AAAAAAAAAJk/aKxIWHlwTOM/130302_2.png" /></a>
</div>

&#160;

[Ctrl + Alt + C]がCppcheckの実行に割り当てられている。   
これで、アクティブなファイルに対して即座に静的解析が実行できる。とても便利だ。

#### cygwinにインストールしたcppcheckは使えない

cygwinにインストールしたcppcheckだと、cppcheckの結果を正しくEclipseがパースしてくれない。templateの指定方法が間違ってるようで、"問題"ビューにあらわれてくれない。   
下のような感じで、表示されてしまう。

&#8216;{file}:{line},{severity},{id},{message}&#8217;

WindowsにインストールしたCppcheckを使うこと。

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image91.png
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image92.png