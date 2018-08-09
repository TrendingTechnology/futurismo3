---
author: admin
categories:
- Elisp
- Emacs
- 技術メモ
date: 2015-01-02T10:41:00+00:00
dsq_thread_id:
- 3.768045e+09
excerpt: Emacs での eval について調べてみた
follow:
- follow
index:
- index
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 1163
side:
- def
sub:
- def
title: Emacs での eval について調べてみた
type: post
url: /archives/=2894
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

Elisp を評価 (eval) する方法について調べてみました.

代表的なコマンド
================

以下の 3 つが代表的.

-   eval-buffer バッファを評価
-   eval-region リージョンを評価
-   eval-last-sexp C-x C-e 最後のかっこを評価

参考:

-   [emacs-lisp を反映するときのコマンド一覧 - Bye Bye
    Moore](https://shuzo-kino.hateblo.jp/entry/2013/10/27/153038)
-   [Lisp Eval - GNU Emacs
    Manual](https://www.gnu.org/software/emacs/manual/html_node/emacs/Lisp-Eval.html)

インタラクティブに評価
======================

こんな感じや, こんな感じに,

-   [Windows + Emacs + Gauche の環境構築 |
    小さいモノは美しい](https://hayate2255.wordpress.com/2013/02/03/windows7-emacs-gauche-%E3%81%AE%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89/)
-   [inferior-haskell-mode で設定すると便利なこと - プログラムとかのの
    blog](https://d.hatena.ne.jp/pogin/20140121/1390299797)

片方のウィンドウで評価したら別のウィンドウで動作させたいので,
以下の関数を書いてみた.

``` {.commonlisp}
(defun my-inf-elisp ()
  (interactive)
  (eval-buffer)
  (if (one-window-p)
    (split-window))
  (other-window 1)
  (eshell)
)
(define-key emacs-lisp-mode-map (kbd "C-c S") 'my-inf-elisp)
```
