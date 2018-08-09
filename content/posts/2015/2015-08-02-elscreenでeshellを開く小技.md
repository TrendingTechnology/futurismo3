---
author: admin
categories:
- Emacs
date: 2015-08-02T10:25:00+00:00
dsq_thread_id:
- 3.9955052e+09
pvc_views:
- 1015
title: elscreenでeshellを開く小技
type: post
url: /archives/=4494
---

elscreenでeshellを開く小技を思いついた.

やりたいこと
============

elscreenで別タブを開いて、そこに新規にeshellを立ち上げたい.

elscreen-diredやelscreen-wlはあるのに、eshellはなかった.

必要なもの
==========

-   elsreen
-   multi-eshell
    -   <https://github.com/emacsmirror/multi-eshell>

別のシェルを新規に起動するために、multi-eshellを利用する.

設定
====

これで、 C-c t bで やりたいことが実現できる.

``` {.commonlisp}
(require 'multi-eshell)
(setq multi-eshell-shell-function '(eshell))
(setq multi-eshell-name "*eshell*")

(defun elscreen-esh ()
  (interactive)
  (elscreen-create)
  (multi-eshell 1))
(global-set-key (kbd "C-c t b") 'elscreen-esh)
```

おわりに
========

最近 eshellをほとんど常用中.

eshell-zがでてきて最近ますます便利になった.

-   <https://github.com/travisjeffery/eshell-z.el>

zshよりもeshellだよね！

<p style="font-size:32px">以上、Happy Hacking!!</p>
