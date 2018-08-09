---
author: admin
categories:
- Python
- 技術メモ
date: 2012-12-01T00:41:07+00:00
dsq_thread_id:
- 3.7278036e+09
pvc_views:
- 6070
tags:
- Sphinx
- Word
title: Sphinx-docxbuilderでWordドキュメントをテキストから生成(Windows)
type: post
url: /archives/=811
---

Sphinxを使ってWordファイルを出力してみる。   
Wordファイルを生成するには、<font color="#ff0000">Sphinx-docxbuilder</font>を使う必要がある。

今回の情報源は、sourceforgeのwikiより。   
<https://en.sourceforge.jp/projects/sphinx-docx/wiki/FrontPage>

この記事もとても参考になった。   
[sphinxで Wordファイル(docx)出力する．(Windows)－100ねんごの未来予想図][1]

#### インストール環境

  * Windows 7 64bit
  * Python 2.6
  * Sphinx 1.3.3

### Sphinx-docxbuilderに必要なPythonモジュールをインストール

Sphinx-docxbuilderを利用するには、以下をインストールする必要がある。

  * sphinx
  * lxml
  * PIL (Python Imaging Libraray)

#### sphinxのインストール

前回の記事を参照。   
[SphinxをWindowsPCにインストールした。][2]

#### PILのインストール

Windows 64bit/Python 2.6に対応する PILのインストールは、実は[公式HP][3]にはない。   
なので、非公式サイトからダウンロードして、インストールする。

[https://www.lfd.uci.edu/~gohlke/pythonlibs/][4]

ここでは、PIL-fork-1.1.7.win-amd64-py2.6.窶憩xeを落としてきてインストール。

#### lxmlのインストール

PythonでXMLを利用可能にするためのPythonモジュールである、lxmlを入れる。

> easy_install lxml

以下のエラーが出て停止した。

> Building without Cython.   
> ERROR: &#8216;xslt-config&#8217; は、内部コマンドまたは外部コマンド、   
> 操作可能なプログラムまたはバッチ ファイルとして認識されていません。

というわけでこれも、非公式サイトからダウンロードしてインストールする。   
[<font color="#0066cc">https://www.lfd.uci.edu/~gohlke/pythonlibs/</font>][4]

ここではlxml-2.3.6.win-amd64-py2.6.窶憩xeをインストール。

### Sphinx-docxbuilderをインストール

以下の配布サイトからダウンロードしてくる。   
<https://bitbucket.org/haraisao/sphinx-docxbuilder/>

落としてきたら、zipを解凍して、ファイル名は"sphinx-docxbuilder"に変更する。

Pythonのパス (sys.path)のディレクトリにコピーする。   
私の環境では、"C:\Python26\Lib\site-packages”にコピー。

#### Sphinx conf.pyの設定

Sphonxプロジェクトのフォルダに移動。   
そのなかのconf.pyに以下の一行を追加。

> &#160; extensions = [&#8216;sphinx-docxbuilder&#8217;]

### Sphinx-docxbuilderを実行する

以下のコマンドで実行。

> ＞sphinx-build -b docx \[input-dir\] \[output-dir\]

ex.) sphinx-build -b docx . _build/docx

#### 変換前テキスト

> Hello Sphinx   
> ============
> 
> テスト。
> 
> test   
> ====
> 
> テストです。

#### 変換後Wordドキュメント

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb77.png" width="411" height="394" />][5]

 [1]: https://in.shappi.org/article/279085914.html
 [2]: https://futurismo.biz/archives/805
 [3]: https://www.pythonware.com/products/pil/
 [4]: https://www.lfd.uci.edu/~gohlke/pythonlibs/ "https://www.lfd.uci.edu/~gohlke/pythonlibs/"
 [5]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image77.png