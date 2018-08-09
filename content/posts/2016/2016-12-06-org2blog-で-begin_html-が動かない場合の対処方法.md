---
author: admin
categories:
- Emacs
- 技術メモ
date: 2016-12-06T06:46:00+00:00
dsq_thread_id:
- 5.359598e+09
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
- 758
side:
- "y"
tags:
- org-mode
title: org2blog で BEGIN_HTML が動かない場合の対処方法
title_view:
- "y"
type: post
url: /archives/=5847
---

いつも、このブログは org2blog を利用して、Emacs から書いているのだが、

``` {.text}
#+BEGIN_HTML

#+END_HTML
```

を書いても、HTML を記事の中に埋め込むことができなくなった。

解決方法
========

いろいろと試行錯誤してみたところ、以下の書き方だとうまくいった。

``` {.text}
#+begin_export html

#+end_export
```

誰かの参考になればとおもいメモ。

