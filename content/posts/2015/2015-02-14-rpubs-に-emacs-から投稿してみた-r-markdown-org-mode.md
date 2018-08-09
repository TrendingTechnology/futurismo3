---
author: admin
categories:
- Emacs
- R
- 技術メモ
date: 2015-02-13T15:08:00+00:00
dsq_thread_id:
- 3.7026086e+09
excerpt: RPubs に Emacs から投稿してみた (R Markdown, org-mode)
pvc_views:
- 1392
tags:
- markdown
- org-mode
title: RPubs に Emacs から投稿してみた (R Markdown, org-mode)
type: post
url: /archives/=2987
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

RPubs は R Studio に依存する R markdown 共有サービスなのですが, R Studio
を利用せずに, Emacs から 投稿できるか調べてみました.

-   <https://rpubs.com/>

rpubsUpload をつかう
====================

結論としては, rpubsUpload という関数を利用すると, コードを評価することで
RPubs に投稿できる.

-   [R Graphical
    Manual](https://rgm3.lab.nig.ac.jp/RGM/R_rdfile?f=markdown/man/rpubsUpload.Rd&d=R_CC)

``` {.r}
# Upload をする
result <- rpubsUpload ("My document title", "Document.html")

# Upload 結果をブラウザで開く
if (!is.null (result$continueUrl))
   browseURL (result$continueUrl)
else
   stop (result$error)
```

ブラウザを開くと, ログイン画面が現れるのでログインして OK を押せばよい.

Emacs から投稿
==============

R markdown を Emacs から投稿
----------------------------

Emacs で R Markdown を作成して, 投稿することができる.

以下の記事を参考にして Rmd を html に変換して, コードを評価する.

-   [Emacs で knitr と R markdown を使う方法 (Rmd) |
    Futurismo](https://futurismo.biz/archives/2982)

```` {.text}
# Upload Test

see: [rpubsUpload - R Graphical Manual] (https://rgm3.lab.nig.ac.jp/RGM/R_rdfile?f=markdown/man/rpubsUpload.Rd&d=R_CC)

# upload a document

this is my first upload from function

```{r sample, echo=TRUE, results='hide'}
require (markdown)
result <- rpubsUpload ("rpubsUpload usage", "RpubsUploadSample.html")
if (!is.null (result$continueUrl)) {
    browseURL (result$continueUrl)
}else {
    stop (result$error)
}
```
````

-   <https://rpubs.com/tsu-nera/59388>

org-mode から投稿
-----------------

markdown よりも org-mode のほうがなれているということもあり, org-mode
からも投稿してみました.

M-x org-html-export-to-html で org-mode を html に変換して,
コードを評価.

``` {.text}
#   * Upload Test
#   this is my first upload from Emacs org-mode
#  
# ** convert to html
#    M-x org-html-export-to-html
#  
# ** run script
#  
# #+begin_src R :eval query
# require (markdown)
# result <- rpubsUpload ("Emacs org-mode upload", "UploadFromOrgMode.html")
# if (!is.null (result$continueUrl)) {
#     browseURL (result$continueUrl)
# }else {
#     stop (result$error)
# }
# #+end_src
#  
```

-   <https://rpubs.com/tsu-nera/59397>

