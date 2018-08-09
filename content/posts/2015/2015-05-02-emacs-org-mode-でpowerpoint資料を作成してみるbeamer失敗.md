---
author: admin
categories:
- Emacs
date: 2015-05-02T10:29:00+00:00
dsq_thread_id:
- 3.7310582e+09
excerpt: Emacs org-mode でPowerPoint資料を作成してみる(beamer)
follow:
- follow
index:
- index
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 2181
side:
- def
sub:
- def
tags:
- org-mode
- PowerPoint
title: Emacs org-mode でPowerPoint資料を作成してみる(beamer)(失敗)
type: post
url: /archives/=3605
---

![](./../img/document-428332_640.jpg)

前回の続きです.

-   [Emacs org-mode でPowerPoint資料を作成してみる(ODT経由)(失敗) |
    Futurismo](https://futurismo.biz/archives/3601)

前回は、ODT経由でPowerPoint資料をつくろうとして、失敗しました.
今回は、Beamer(Latex)経由で作成してみます.

結論から書くと、beamerの方法も挫折しましたが、 もう
**PowerPointに変換しなくてもbeamerでいいじゃん** とおもってきました.

org-mode形式 -&gt; beamer形式 -&gt; PDF形式 -&gt; ODP形式 -&gt; PPT形式
=======================================================================

ox-beamerパッケージを利用する.
これは、org-modeにデフォルトで入っているので、 以下のようにrequireする.

``` {.commonlisp}
(require 'ox-beamer)
```

実行のためには、 `pdflatex` コマンドが必要.
Latex環境をまるまるインストールしてしましった.

-   [簡単LaTeXインストールWindows編（2014年7月版）](https://did2memo.net/2014/03/06/easy-latex-install-windows-8-2014-03/)

M-x org-beamer-export-to-pdf を実行すると、
beamerをPDFに変換したものを出力できる.

文字化けについて
----------------

UTF-8でないと変換できなかった. また、 pdflatexコマンドだと失敗するので、
実行のためのコマンドをpdfplatexコマンドに変更した.

``` {.commonlisp}
(setq org-latex-pdf-process
  '("pdfplatex %f"
    "pdfplatex %f"
    "pdfplatex %f"))
```

PPTへの変換
===========

PDFから PPTへうまい方法が見つからない..

以下の方法がみつかったが、どうもうまくいかない.

-   [pdf2odp](https://www2.hyo-med.ac.jp/~tanimura/LaTeX/pdf2odp.html)
-   [microsoft powerpoint - How to convert PDF to PPT or ODP? - Super
    User](https://superuser.com/questions/268244/how-to-convert-pdf-to-ppt-or-odp)

Special Thanks
==============

この動画に惹かれた.

<iframe width="420" height="315" src="https://www.youtube.com/embed/Ho6nMWGtepY" frameborder="0" allowfullscreen></iframe>


