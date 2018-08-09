---
author: admin
categories:
- 技術メモ
date: 2012-12-15T07:21:00+00:00
dsq_thread_id:
- 3.731765e+09
pvc_views:
- 3605
tags:
- Sphinx
title: SphinxのPDF出力をrst2pdfで試す@Windows64bit
type: post
url: /archives/=946
---

SphinxでPDF出力する方法は以下の2つがあるらしい。

  * rst2pdf
  * Latex

以下のページを参考にした。   
<a href="https://sphinx-users.jp/cookbook/pdf/index.html" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://sphinx-users.jp/cookbook/pdf/index.html" width="150" height="130" /></a> <a style="color: #0070c5" href="https://sphinx-users.jp/cookbook/pdf/index.html" target="_blank">SphinxでPDFファイル作成 :: ドキュメンテーションツール スフィンクス Sphinx-users.jp</a>      <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://sphinx-users.jp/cookbook/pdf/index.html" /><br style="clear: both" />今回はWindows環境で、rst2pdfを使う方法を試してみた。

#### 環境

  * Windows 7 64bit
  * Python 2.6
  * Sphinx1.1.3

### rst2pdf設計方法

#### rst2pdfを手に入れる

easy_installに対応しているので、コマンドプロンプトから以下のコマンドを叩きます。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:fd43eea4-833e-43f0-b26a-258cb5e57c09" class="wlWriterEditableSmartContent">
  <pre name="code" class="py"> easy_install rst2pdf</pre>
</div>

そうすると、すんなりいかないでしょう。
    
  
Pythonモジュールである、PILやReportLabをインストールするところで失敗します。

#### PILの入手@Winodows64bit version

Windows 64bitユーザはPILを以下のサイトから手に入れます。

  * <https://www.lfd.uci.edu/~gohlke/pythonlibs/>

#### ReportLabの入手@Winodows64bit version

ReportLabのインストールは注意が必要です。version2.6ではなくて、2.5を入れます。
    
  
以下のサイトにありました。

  * [https://www.reportlab.com/ftp/][1]
  * reportlab-2.5.win-amd64-py2.6.exe

2.6を入れると以下の様なエラーが発生して、PDF作成に失敗しました。
    
  
これは、既知障害っぽいです。

[https://code.google.com/p/rst2pdf/issues/detail?id=474][2]

> $ rst2pdf -s ja &#8211;font-path=C:\Windows\Fonts index.rst
      
>   
> Traceback (most recent call last):
> 
> File "/usr/bin/rst2pdf", line 8, in <module>
> 
> load\_entry\_point(&#8216;rst2pdf==0.92&#8217;, &#8216;console_scripts&#8217;, &#8216;rst2pdf&#8217;)()
> 
> File "/usr/lib/python2.6/site-packages/rst2pdf-0.92-py2.6.egg/rst2pdf/createpdf.py", line 1445, in main
> 
> section\_header\_depth=int(options.section\_header\_depth),
> 
> File "/usr/lib/python2.6/site-packages/rst2pdf-0.92-py2.6.egg/rst2pdf/createpdf.py", line 183, in \_\_init\_\_
> 
> self.loadStyles(stylesheets)
> 
> File "/usr/lib/python2.6/site-packages/rst2pdf-0.92-py2.6.egg/rst2pdf/createpdf.py", line 276, in loadStyles
> 
> def\_dpi=self.def\_dpi)
> 
> File "/usr/lib/python2.6/site-packages/rst2pdf-0.92-py2.6.egg/rst2pdf/styles.py", line 527, in \_\_init\_\_
> 
> reportlab.platypus.tables.CellStyle1.fontname=self[&#8216;base&#8217;].fontName
> 
> AttributeError: &#8216;module&#8217; object has no attribute &#8216;CellStyle1&#8217;

#### 日本語フォントのインストール

PDF出力をするためには、日本語フォントを追加する必要があります。
    
  
以下の2つをそれぞれダウンロードします。

  * IPAフォント([https://sourceforge.jp/projects/ipafonts/][3])
  * VLゴシックフォント(<https://jaist.dl.sourceforge.jp/vlgothic/>)

それぞれ、拡張子がttfのファイルをWindowsのフォントフォルダにコピーします。

  * VL-Gothic-Regular.ttf
  * VL-PGothic-Regular.ttf
  * ipag.ttf
  * ipam.ttf

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:f74a2e2c-9925-4fcd-8177-72603287158a" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">C:\Windows\Fonts</pre>
</div>

#### rst2pdfがインストールできたかの確認

試しにSphinxのindex.rstをpdfに変換します。
    
  
以下のコマンドを叩いて、index.pdfが生成出来れば成功です。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:732d64cf-02eb-44ac-8630-8b5fb5afebfc" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">rst2pdf -s ja --font-path=C:\Windows\Fonts index.rst</pre>
</div>

### Sphinxの設定

各RSTファイルへの実行は成功するようになったので、全てのRSTファイルをまとめて実行できるように、Sphinxの設定ファイルをいじります。

#### Makefileの修正

まずは、make pdfが実行できるように、Makefileの終わりに以下を追加します。
    
  
Makefileの常識で、先頭の空白は必ずタブにします。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:540eb2ce-1b13-42ed-a690-57f8e36ecb00" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">pdf:
        $(SPHINXBUILD) -b pdf $(ALLSPHINXOPTS) $(BUILDDIR)/pdf
        @echo
        @echo "Build finished. The PDF files are in _build/pdf."</pre>
</div>

#### conf.pyの修正

conf.pyにrst2pdfを実行する際のオプションを設定します。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:727963f7-4aa1-43e1-ae30-3e4d4a00e702" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">extensions = ['rst2pdf.pdfbuilder']

pdf_documents = [
    ('index', u'MyProject', u'My Project', u'Author Name'),
]

# A comma-separated list of custom stylesheets. Example:
pdf_stylesheets = ['sphinx','kerning','a4','ja']

import os
font_dir = os.path.abspath(os.path.join(os.path.split(__file__)[0], os.pardir, 'fonts'))
pdf_font_path = [font_dir, 'C:\WINDOWS\Fonts']

pdf_language = "ja"

</pre>
</div>

#### フォントの指定

最後にフォントを指定するための設定ファイルを作ります。
    
  
ja.jsonという名前で、以下の内容を追記します。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:7b87d78d-5bd8-43c8-af35-1b973c547b9e" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">{
  "embeddedFonts" : [
    [
        "VL-Gothic-Regular.ttf",
        "VL-PGothic-Regular.ttf",
        "ipam.ttf",
        "ipag.ttf"
     ]
  ],
  "fontsAlias" : {
    "stdFont": "VL-PGothic-Regular",
    "stdBold": "VL-PGothic-Regular",
    "stdItalic": "VL-PGothic-Regular",
    "stdBoldItalic": "VL-PGothic-Regular",
    "stdMono": "VL-PGothic-Regular",
    "stdMonoBold": "VL-PGothic-Regular",
    "stdSanBold": "VL-PGothic-Regular",
    "stdSansBold": "VL-PGothic-Regular"
  },
  "styles" : [
    ["base" , {
      "wordWrap": "CJK"
    }],
    ["literal" , {
      "wordWrap": "None"
    }]
  ]
}</pre>
</div>



### PDFを生成する

以下のコマンドで、_build/pdf配下にPDFが生成されます。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:ba8a35f5-e488-4850-a73f-9e84a3622592" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">make pdf</pre>
</div>

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb87.png" width="434" height="332" />][4]

 [1]: https://www.reportlab.com/ftp/ "https://www.reportlab.com/ftp/"
 [2]: https://code.google.com/p/rst2pdf/issues/detail?id=474 "https://code.google.com/p/rst2pdf/issues/detail?id=474"
 [3]: https://sourceforge.jp/projects/ipafonts/ "https://sourceforge.jp/projects/ipafonts/"
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image87.png