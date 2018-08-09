---
author: admin
categories:
- Emacs
date: 2015-05-02T08:15:00+00:00
dsq_thread_id:
- 3.730824e+09
excerpt: Emacs org-mode でPowerPoint資料を作成してみる
follow:
- follow
index:
- index
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 1927
side:
- def
sub:
- def
tags:
- org-mode
- PowerPoint
- Word
title: Emacs org-mode でPowerPoint資料を作成してみる(ODT経由)(失敗)
type: post
url: /archives/=3601
---

![](./../img/document-428332_640.jpg)

職場で作成するドキュメントはWordかExcel, PowerPointが標準だ.
最近、Lyncが社内に導入された関係でやけにPowerPointで資料を作成する
風土が増えてきた.

チキンなボクは、そんな風土に歯向かうほどの勇気がないので、
長いものにまかれてMicrosoft製品を使わざるを得ない. そこで、Emacs
org-modeで PowerPointの資料がつくれないものか調べてみた.

結果的に失敗したのだが、かわりに **Word仕様書をorg-modeで書く技**
をみつけた.

方針
====

大きく分けて、以下の2つの方法があるようだ.

-   org-mode形式 -&gt; ODT形式 -&gt; ODP形式 -&gt; PPT形式
    -   [Re: export presentations: org to ppt or
        odp](https://lists.gnu.org/archive/html/emacs-orgmode/2013-03/msg01712.html)
    -   [How to Convert a PDF to a PPT with Open Source |
        Chron.com](https://smallbusiness.chron.com/convert-pdf-ppt-open-source-48940.html)
-   org-mode形式 -&gt; beamer形式 -&gt; PDF形式 -&gt; ODP形式 -&gt;
    PPT形式
    -   [pdf2odp](https://www2.hyo-med.ac.jp/~tanimura/LaTeX/pdf2odp.html)

    今回は、１つめのODT経由の方法を試す.

環境
----

-   Windows 8.1
-   PowerPoint 2013

実は、PowerPointを自宅に持っていないので、評価版を利用.

-   <https://www.microsoft.com/ja-jp/office/2013/trial/default.aspx>

org-mode形式 -&gt; ODT形式 -&gt; ODP形式 -&gt; PPT形式
======================================================

org-mode から ODT形式に変換
---------------------------

ox-odtパッケージを利用する.

-   <https://github.com/emacsmirror/org/blob/master/lisp/ox-odt.el>

これは、org-modeにデフォルトで入っているので、 以下のようにrequireする.

``` {.commonlisp}
(require 'ox-odt)
```

実行のためには、

-   zip
-   unzip

コマンドに環境変数PATHが通っている必要があった.
自分の場合は、cygwinからダウンロードしたコマンドにパスを通した.

M-x org-odt-export-to-odt を実行すれば、odt形式のファイルが作成される.

ODT形式から PPT形式に変換
-------------------------

LibreOffice Writer からODTファイルを開く.

ファイル -&gt; 送る -&gt; プレゼンテーションに自動抽出

を選択.ODP形式でパワーポイントに出力される. それを PPTとして保存.

-   [Home | LibreOffice - Free Office Suite - Fun Project - Fantastic
    People](https://www.libreoffice.org/)

これでいけた！と思いきや... アウトラインしか出力されず、中身空っぽ..
これでは使えない(\#゜Д゜)y-\~\~

しかし、このodtを Word形式やPDF形式に変換することで、
仕様書がorg-modeで作成できる！(\^\_\^;)

おわりに
========

今回の記事では、PPTの作成ができなかった. 次回? beamerを試してみる.

怪我の香味で、ODTファイルをWord変換やPDF変換する方法が試せた.
このことによって、

**仕様書をorg-modeで執筆することができる**

これは、とても嬉しいことだ.
