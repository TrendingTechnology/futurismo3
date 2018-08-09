---
author: admin
categories:
- 技術メモ
date: 2012-12-15T07:36:36+00:00
dsq_thread_id:
- 3.7121096e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3067
tags:
- Sphinx
title: Sphinxでテキストから変幻自在の出力結果比較(HTML,Word,PDF,ePub)
type: post
url: /archives/=949
---

Sphinxの魅力の一つが、ひとつのテキストから様々なフォルダ形式に出力可能な点だ。
  
今回は以下の形式の出力結果をまとめてみようと思う。

<ul class="checklist">
  <li>
    HTML
  </li>
  <li>
    Word
  </li>
  <li>
    PDF
  </li>
  <li>
    ePub
  </li>
</ul>

### HTML出力

まずは基本から。

  * [SphinxをWindowsPCにインストールした。][1] 
      * make html

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb88.png" width="443" height="282" border="0" />][2]

### PDF出力

rst2pdfを使ってPDF出力しました。

  * [SphinxのPDF出力をrst2pdfで試す@Windows64bit][3] 
      * make pdf

&nbsp;

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb87.png" width="434" height="332" border="0" />][4]

### Word出力

Sphinx-docxbuilderを利用して、Word出力しました。

  * [Sphinx-docxbuilderでWordドキュメントをテキストから生成(Windows)][5] 
      * make word

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb77.png" width="411" height="394" border="0" />][6]

### ePub出力

  * [Sphinxからepub形式で出力して、Dropbox経由でiPadから読んでみる][7] 
      * make epub

<div class="sticky-itslinktext">
  <a href="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/IMG_0014.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="IMG_0014" alt="IMG_0014" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/IMG_0014_thumb.png" width="287" height="381" border="0" /></a>
</div>

 [1]: https://futurismo.biz/archives/805
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image88.png
 [3]: https://futurismo.biz/archives/946
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image87.png
 [5]: https://futurismo.biz/archives/811
 [6]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image77.png
 [7]: https://futurismo.biz/archives/925