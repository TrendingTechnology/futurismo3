---
author: admin
categories:
- Eclipse
- TDD
date: 2013-01-26T00:44:21+00:00
dsq_thread_id:
- 3.713281e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 4597
tags:
- cygwin
- gdb
- gtest
title: '[Eclipse CDT]セグメンテーション違反した箇所をGDBで特定する'
type: post
url: /archives/=1176
---

<!--:ja-->Eclipse+Cygwin環境でデバッグするとき、いつもはGoogleTestを使っている。


  
GoogleTestを実行してセグメンテーション違反をすると、Windowsは以下のエラーを返す。

> <span style="font-size: xx-small;"> [main] sample 10968 exception::handle: Exception: STATUS_ACCESS_VIOLATION<br /> 1714 [main] sample 10968 open_stackdumpfile: Dumping stack trace to sample.exe.stackdump</span>

#### 例:こんなお粗末ソース

    #include
    
    int add(int x, int y)
    {
    int z;
    char *p;
    
    z = x + y;
    *p = 1; /* ここでセグメンテーション違反 */
    return z;
    }
    

こんなとき、Eclipseの画面からGDBを起動して、どこで落ちたかを調べると便利だったので、メモ。

#### 環境

  * Eclipse 4.2 Juno
  * GDB 7.5
  * Cygwin 1.7.17-1

### EclipseでGDBを利用するための設定

#### コンパイルオプション

まずは実行ファイルを作るときにコンパイルオプションで以下を追加。

    CPPFLAGS += -g -O0
    

-g : GDB用のデバッグ情報を実行ファイルに含める。
  
-Oo : コンパイラに最適化をさせない。

#### ルックアップパスの設定

デバッグ・パースペクティブにソースが現れないときは、ソースのパスが設定されていない。

    Can't find a source file at : hogehoge...
    

[ウィンドウ] > [設定] > [C/C++] > [デバッグ] > [ソース・ルックアップ・パス] から追加したいソースがあるフォルダを追加する。

### GDBを実行してみる

デバッグ・パースペクティブからF11を実行できればOK。

Defaultではmainでbreakするように設定されているので、[再開]F8する。
  
すると、STATUS\_ACCESS\_VIOLATIONが発生した場所まで移動して、
  
ソースを表示してくれる。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb89.png" width="562" height="357" border="0" />][1]

### まとめ

今回、xUnitとGDBを組み合わせることでデバッグがさらに効率的になるのではと思い、記事にしてみた。

この方法の前は、いちいちテストやソースにprintやexitを仕込んでいたが、始めっからgdbを使えばよかったなと、今頃ながら気づいたのだった。

xUnitでテストするようになってから、さすがにもう手動でのテストをする気にはなれないが、こんな組み合わせもいいかもしれない。

<div id="fastlookup_top" style="display: none;">
</div>

<!--:-->

<!--:en-->Eclipse+Cygwin環境でデバッグするとき、いつもはGoogleTestを使っている。


  
GoogleTestを実行してセグメンテーション違反をすると、Windowsは以下のエラーを返す。

> <span style="font-size: xx-small;">ﾂꀀﾂꀀﾂꀀﾂꀀﾂꀀ 1 [main] sample 10968 exception::handle: Exception: STATUS_ACCESS_VIOLATION<br /> 1714 [main] sample 10968 open_stackdumpfile: Dumping stack trace to sample.exe.stackdump</span>

#### 例:こんなお粗末ソース

> #include <stdlib.h>
> 
> int add(int x, int y)
  
> {
  
> int z;
  
> char *p;
> 
> z = x + y;
  
> \*p = 1;ﾂꀀﾂꀀﾂꀀ /\* ここでセグメンテーション違反 */
> 
> return z;
  
> }

こんなとき、Eclipseの画面からGDBを起動して、どこで落ちたかを調べると便利だったので、メモ。

#### 環境

  * Eclipseﾂꀀ 4.2 Juno
  * GDB 7.5
  * Cygwin 1.7.17-1

### EclipseでGDBを利用するための設定

#### コンパイルオプション

まずは実行ファイルを作るときにコンパイルオプションで以下を追加。

> CPPFLAGS += -g -O0

-g : GDB用のデバッグ情報を実行ファイルに含める。
  
-Oo : コンパイラに最適化をさせない。

#### ルックアップパスの設定

デバッグ・パースペクティブにソースが現れないときは、ソースのパスが設定されていない。

Can&#8217;t find a source file at : hogehoge&#8230;

[ウィンドウ] > [設定] > [C/C++] > [デバッグ] > [ソース・ルックアップ・パス] から追加したいソースがあるフォルダを追加する。

### GDBを実行してみる

デバッグ・パースペクティブからF11を実行できればOK。

Defaultではmainでbreakするように設定されているので、[再開]F8する。
  
すると、STATUS\_ACCESS\_VIOLATIONが発生した場所まで移動して、
  
ソースを表示してくれる。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb89.png" width="562" height="357" border="0" />][1]

### まとめ

今回、xUnitとGDBを組み合わせることでデバッグがさらに効率的になるのではと思い、記事にしてみた。

この方法の前は、いちいちテストやソースにprintやexitを仕込んでいたが、始めっからgdbを使えばよかったなと、今頃ながら気づいたのだった。

xUnitでテストするようになってから、さすがにもう手動でのテストをする気にはなれないが、こんな組み合わせもいいかもしれない。<!--:-->

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image89.png