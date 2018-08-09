---
author: admin
categories:
- Eclipse
- 日記
date: 2013-10-27T13:48:59+00:00
dsq_thread_id:
- 3.7230126e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 8524
title: Eclipse CDTで変数や関数が赤バツになってしまう場合の対処方法(C++11対応も)
type: post
url: /archives/=1963
---

Eclipse CDTで変数や関数が赤バツになってしまう場合の対処方法

Eclipseに外部のソースをインポートすると、赤バツがたくさんでることがある。また、C++11対応のソースが赤バツになることがある。

これは、CDTのインデックス機能がインデックスをするときに、ファイルパスの場所やプリプロセッサの定義値を知らないから。

### パスおよびシンボルを設定

こんなときは、プロジェクトを右クリックしてプロパティを選択。

  * C/C++一般 -> パスおよびシンボル

ここでMakefileに書くような情報（インクルードパスやdefine値）を設定することで、赤バツが消える。たとえば、

  * インクルードパスを追加する場合にはインクルードを選択。
  * define値を追加するときにはシンポルを選択。

### Eclipse CDTで C++11のソースを赤バツにしない方法

すでにEclipseの設定でdefine値が設定してあると、自分の値が反映されないことがある。C++11などはまさにそうだった。この場合は、

  * C/C++一般 -> Prosessor Include, Macro..->エントリ　-> CDT User Setting Entrys

であたいを追加する。

    __cplusplus　= 201103L
    

### Links

  * [Eclipse Community Forums: C / C++ IDE (CDT) » C++11 standard library indexing fails, __cplusplus recognized with wrong value][1]

 [1]: https://www.eclipse.org/forums/index.php/fa/15559/0/