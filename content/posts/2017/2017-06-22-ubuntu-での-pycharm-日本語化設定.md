---
author: admin
categories:
- Python
date: 2017-06-21T22:04:00+00:00
dsq_thread_id:
- 5.9312394e+09
excerpt: Ubuntu での PyCharm 日本語化設定
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
- 1152
side:
- "y"
tags:
- PyCharm
- Ubuntu
title: Ubuntu での PyCharm 日本語化設定
title_view:
- "y"
type: post
url: /archives/=6553
---

Python の統合開発環境 [PyCharm](https://www.jetbrains.com/pycharm/),
デフォルトでは英語ですが日本語化できるようだ。

Eclipse で有名な Pleiades が日本語化のプラグインを配布している。

-   [Pleiades - 日本語化プラグイン Eclipse、Android
    Studio、PhpStorm](https://mergedoc.osdn.jp/pleiades.html)

PyCharm を日本語化する手順は、以下。

-   [Android Studio / IntelliJ IDEA の日本語化と設定 -
    Qiita](https://qiita.com/cypher256/items/a87179fbe8dd7f63ec4e)

ところが、Linux の環境について描かれていなくて少し迷ったので、 Linux
での PyCharm 日本語化設定を備忘録としてメモしておきます。

環境
====

-   Ubuntu 16.04
-   PyCharm Communite Edition 2017.1
-   Pleiades 1.7.26

日本語化する手順
================

1. Pleiades の配置
------------------

<https://mergedoc.osdn.jp/> から Pleiades プラグインの
"最新版ダウンロード"をクリックしてダウンロード。

(図を借ります)

![](https://qiita-image-store.s3.amazonaws.com/0/45147/0634ef38-af44-badb-934d-3726e24dcaa1.png)

zip を解凍。Linux の、p、plugins/jp.sourceforge.mergedoc.pleiades を

``` {.text}
(PyCharm を配置したディレクトリ)/plugins 
```

の配下にコピーする。

2. 起動オプションの編集
-----------------------

PyCharm を起動して、ツールバーから Help : Edit Custom VM Options...
を選択する。

これで、(PyCharm を配置したディレクトリ)/bin、p、pycharm.vmoptions
というファイルが生成される。

編集画面が開くので、以下をファイルの末尾に貼り付け。

``` {.text}
-Xverify:none
-javaage（P（Pleiades を配置した場所のフルパス）/jp.sourceforge.mergedoc.pleiades/pleiades.jar
```

以上、これで PyCharm を再起動すれば、日本語化されている。
