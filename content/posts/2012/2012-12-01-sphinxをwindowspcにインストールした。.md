---
author: admin
categories:
- Python
- 技術メモ
date: 2012-11-30T22:52:52+00:00
dsq_thread_id:
- 3.731645e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3156
tags:
- Sphinx
title: SphinxをWindowsPCにインストールした。
type: post
url: /archives/=805
---

興味本位だが、Sphinxという文章を書くツールを試してみたので、メモする。
  
Wordをテキストから自動生成できればいいなーと思ってたらSphinxを見つけた。

### Sphinxとは

Sphinx(スフィンクス)とは、文章を書くためのツール（フレームワーク）
  
エディタとも、wikiとも分類しがたい、新たな書き方のツール。

Sphinxを利用すると、以下のことができる。

  * さまざまな形式で出力できる。(HTML,ePub,PDF,Word&#8230;)
  * テキストでかける。
  * バージョン管理できる。

### Sphinxのインストール方法

#### インストール環境

  * Windows 7 64bit
  * Pythionﾂꀀ 2.6

Windowsへのインストール方法は公式HPに乗っている。
  
<https://sphinx-users.jp/gettingstarted/install_windows.html>

#### Pythonをインストール

省略。ここでは2.6を利用する。パスが通っていることを確認。

<h4 style="widows: 2; text-transform: none; background-color: #393939; text-indent: 0px; margin: 0px 0px 10px; letter-spacing: normal; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; orphans: 2; color: #ffffff; clear: both; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; border: #666666 1px dotted; padding: 8px;" align="left">
  Python Setuptoolsをイントール
</h4>

easy_installというコマンドを使うと、外部ライブラリを簡単にインストールできるようになるので、このコマンドを使えるようにする。

以下のURLからez_setup.pyをダウンロードして、コマンドラインから実行。 (<https://peak.telecommunity.com/dist/ez_setup.py>)

> > python ez_setup.py

#### Sphinxのインストール

コマンドラインから以下を実行。

> >easy_install sphinx

自動的にSphinx 1.1.3がインストールされる。

> Searching for sphinx
  
> Reading [<span style="color: #0066cc;">https://pypi.python.org/simple/sphinx/</span>][1]
  
> Reading [<span style="color: #0066cc;">https://sphinx.pocoo.org/</span>][2]
  
> Best match: Sphinx 1.1.3
  
> Downloading [<span style="color: #0066cc;">https://pypi.python.org/packages/2.6/S/Sphinx/Sphinx-1.1.3-py2.6.egg#md5=f0873b56</span>][3]

easy\_installが実行できないときは、Scriptフォルダにパスが通っているか確認。easy\_install.exeはScriptsフォルダにインストールされるので、
  
環境変数の設定から、パスをフォルダに通す必要がある。(&#8220;C:\Python26\Scripts&#8221;)

### sphinx-quickstartでSphinxの起動を確認

以下のコマンドで、Sphinxのプロジェクトが作成できればインストールは成功している。

> >sphinx-quickstart

実行すると、プロジェクトの詳細設定を聞かれるメッセージがでるが、
  
とりあえずEnterを押していく。途中、以下の３つの項目が入力必須項目。

<ul class="simple" style="list-style-position: outside; widows: 2; text-transform: none; background-color: #ffffff; list-style-type: disc; text-indent: 0px; margin: 0px 0px 1em 1em; letter-spacing: normal; font: 14px/24px 'Helvetica Neue', arial, helvetica, geneva, sans-serif; white-space: normal; orphans: 2; color: #444444; vertical-align: baseline; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; border-width: 0px; padding: 0px;">
  <li style="margin: 0px; font-family: 'Helvetica Neue', arial, helvetica, geneva, sans-serif; font-size: 14px; vertical-align: baseline; border-width: 0px; padding: 0px;">
    プロジェクト名
  </li>
  <li style="margin: 0px; font-family: 'Helvetica Neue', arial, helvetica, geneva, sans-serif; font-size: 14px; vertical-align: baseline; border-width: 0px; padding: 0px;">
    バージョン番号
  </li>
  <li style="margin: 0px; font-family: 'Helvetica Neue', arial, helvetica, geneva, sans-serif; font-size: 14px; vertical-align: baseline; border-width: 0px; padding: 0px;">
    著者の名前
  </li>
</ul>

> C:\temp\temp_sphinx>sphinx-quickstart
  
> Welcome to the Sphinx 1.1.3 quickstart utility.
> 
> Please enter values for the following settings (just press Enter to
  
> accept a default value, if one is given in brackets).
> 
> Enter the root path for documentation.
  
> > Root path for the documentation [.]:
> 
> You have two options for placing the build directory for Sphinx output.
  
> Either, you use a directory &#8220;_build&#8221; within the root path, or you separate
  
> &#8220;source&#8221; and &#8220;build&#8221; directories within the root path.
  
> > Separate source and build directories (y/N) [n]:
> 
> Inside the root directory, two more directories will be created; &#8220;_templates&#8221;
  
> for custom HTML templates and &#8220;_static&#8221; for custom stylesheets and other static
  
> files. You can enter another prefix (such as &#8220;.&#8221;) to replace the underscore.
  
> > Name prefix for templates and static dir [_]:
> 
> The project name will occur in several places in the built documentation.
  
> > Project name: sphinx-sample
  
> > Author name(s): tsu_nera
> 
> Sphinx has the notion of a &#8220;version&#8221; and a &#8220;release&#8221; for the
  
> software. Each version can have multiple releases. For example, for
  
> Python the version is something like 2.5 or 3.0, while the release is
  
> something like 2.5.1 or 3.0a1.ﾂꀀ If you don&#8217;t need this dual structure,
  
> just set both to the same value.
  
> > Project version: 1.0
  
> > Project release [1.0]:
> 
> The file name suffix for source files. Commonly, this is either &#8220;.txt&#8221;
  
> or &#8220;.rst&#8221;.ﾂꀀ Only files with this suffix are considered documents.
  
> > Source file suffix [.rst]:
> 
> One document is special in that it is considered the top node of the
  
> &#8220;contents tree&#8221;, that is, it is the root of the hierarchical structure
  
> of the documents. Normally, this is &#8220;index&#8221;, but if your &#8220;index&#8221;
  
> document is a custom template, you can also set this to another filename.
  
> > Name of your master document (without suffix) [index]:
> 
> Sphinx can also add configuration for epub output:
  
> > Do you want to use the epub builder (y/N) [n]:
> 
> Please indicate if you want to use one of the following Sphinx extensions:
  
> > autodoc: automatically insert docstrings from modules (y/N) [n]:
  
> > doctest: automatically test code snippets in doctest blocks (y/N) [n]:
  
> > intersphinx: link between Sphinx documentation of different projects (y/N) [n]:
  
> > todo: write &#8220;todo&#8221; entries that can be shown or hidden on build (y/N) [n]:
  
> > coverage: checks for documentation coverage (y/N) [n]:
  
> > pngmath: include math, rendered as PNG images (y/N) [n]:
  
> > mathjax: include math, rendered in the browser by MathJax (y/N) [n]:
  
> > ifconfig: conditional inclusion of content based on config values (y/N) [n]:
  
> > viewcode: include links to the source code of documented Python objects (y/N) [n]:
> 
> A Makefile and a Windows command file can be generated for you so that you
  
> only have to run e.g. \`make html&#8217; instead of invoking sphinx-build
  
> directly.
  
> > Create Makefile? (Y/n) [y]:
  
> > Create Windows command file? (Y/n) [y]:
> 
> Creating file .\conf.py.
  
> Creating file .\index.rst.
  
> Creating file .\Makefile.
  
> Creating file .\make.bat.
> 
> Finished: An initial directory structure has been created.
> 
> You should now populate your master file .\index.rst and create other documentation
  
> source files. Use the Makefile to build the docs, like so:
  
> make builder
  
> where &#8220;builder&#8221; is one of the supported builders, e.g. html, latex or linkcheck.

以下のようなファイルが自動生成された。

> C:\temp\temp_sphinx>ls
  
> Makefileﾂꀀ \_buildﾂꀀ \_staticﾂꀀ _templatesﾂꀀ conf.pyﾂꀀ index.rstﾂꀀ make.bat

### なにはともあれ、Hello Sphinx してみる。

いろんな記法はあと回しにして、まずはSphinxを実行してみる。

hello_sphinx.rstファイルを作成する。
  
ちなみに、文字コードはUTF-8。

[text]
  
Hello Sphinx
  
============

テスト。

test
  
====

テストです。
  
[/text]

index.rstに hello_sphixのファイルを追加。
  
[text]
  
Welcome to sphinx-sample&#8217;s documentation!
  
=========================================

Contents:

.. toctree::
     
:maxdepth: 2

hello_sphinx

Indices and tables
  
==================

* :ref:\`genindex\`
  
* :ref:\`modindex\`
  
* :ref:\`search\`
  
[/text]

#### 実行結果

HTMLファイルを生成してみる。以下のコマンド実行。

> >make html

\_build\htmlフォルダ配下にHTMLファイルが生成されるので、index.htmlを開いてみる。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb75.png" alt="image" width="458" height="197" border="0" />][4]

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb76.png" alt="image" width="459" height="235" border="0" />][5]

<div id="fastlookup_top">
</div>

 [1]: https://pypi.python.org/simple/sphinx/
 [2]: https://sphinx.pocoo.org/
 [3]: https://pypi.python.org/packages/2.6/S/Sphinx/Sphinx-1.1.3-py2.6.egg#md5=f0873b56
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image75.png
 [5]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image76.png