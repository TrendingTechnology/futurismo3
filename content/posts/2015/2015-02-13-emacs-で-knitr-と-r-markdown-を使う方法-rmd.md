---
author: admin
categories:
- Emacs
- R
- 技術メモ
date: 2015-02-12T15:12:00+00:00
dsq_thread_id:
- 3.7349348e+09
excerpt: Emacs で knitr と R markdown を使う方法 (Rmd)
pvc_views:
- 2166
tags:
- markdown
title: Emacs で knitr と R markdown を使う方法 (Rmd)
type: post
url: /archives/=2982
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

coursera で, Reproducible Research の講座をとっています.

-   [Reproducible Research](https://www.coursera.org/course/repdata)

knitr の演習が出てきて, R Studio を使うように強いられます.

Emacs が捨てがたいので, knitr を Emacs で利用する方法について調べました.

knitr
=====

knitr R と Markdown を利用して文芸的プログラミングをするためのツール.

-   [yihui/knitr](https://github.com/yihui/knitr)

CRAN から取得可能.

``` {.language}
install.packages ('knitr', dependencies = TRUE)
```

polymode
========

polymode を利用すると, 複数のモードを共存させる. これを利用して R-mode
(ESS) と markdown-mode を共存.

-   [Using ESS with .Rmd files | John
    Stanton-Geddes](https://johnstantongeddes.org/open%20science/2014/03/26/Rmd-polymode.html)
-   [r - knitr Markdown highlighting in Emacs? - Stack
    Overflow](https://stackoverflow.com/questions/16567348/knitr-markdown-highlighting-in-emacs)
-   <https://github.com/vspinu/polymode>

``` {.commonlisp}
;; MARKDOWN
(require  'poly-markdown)
(add-to-list 'auto-mode-alist '("\\.md" . poly-markdown-mode))

;; R modes
(require  'poly-R)
(add-to-list 'auto-mode-alist '("\\.Snw" . poly-noweb+r-mode)
(add-to-list 'auto-mode-alist '("\\.Rnw" . poly-noweb+r-mode))
(add-to-list 'auto-mode-alist '("\\.Rmd" . poly-markdown+r-mode))
```

markdown への変換
=================

ess-swv-knit で Rmd を md に変換できる.

-   [R でレポートを作成するのに knitr が超便利 -
    あらびき日記](https://d.hatena.ne.jp/a_bicky/20140221/1392941055#)

HTLM への変換
=============

html に変換するには, 以下の方法がある.

-   <https://twitter.com/braingrasper/status/436689893624778752>
-   [Using R Markdown in
    Emacs](https://roughtheory.com/posts/ess-rmarkdown.html)

``` {.commonlisp}
(defun rmarkdown-to-html ()
  (interactive)
  "Run knitr::knit2html on the current file"
  "https://gist.github.com/kohske/9128031"
  (shell-command
   (format "Rscript -e \"knitr::knit2html ('%s')\""
       (shell-quote-argument (buffer-file-name)))))

;; do this in R process
;; library (rmarkdown); render ("file_name.Rmd")

(defun ess-rmarkdown ()
  (interactive)
  "Compile R markdown (.Rmd). Should work for any output type."
  "https://roughtheory.com/posts/ess-rmarkdown.html"
  ; Check if attached R-session
  (condition-case nil
      (ess-get-process)
    (error 
     (ess-switch-process)))
  (let* ((rmd-buf (current-buffer)))
    (save-excursion
      (let* ((sprocess (ess-get-process ess-current-process-name))
         (sbuffer (process-buffer sprocess))
         (buf-coding (symbol-name buffer-file-coding-system))
         (R-cmd
          (format "library (rmarkdown); rmarkdown::render (\"%s\")"
              buffer-file-name)))
    (message "Running rmarkdown on %s" buffer-file-name)
    (ess-execute R-cmd 'buffer nil nil)
    (switch-to-buffer rmd-buf)
    (ess-show-buffer (buffer-name sbuffer) nil)))))

(define-key polymode-mode-map "\M-ns" 'ess-rmarkdown)
```
