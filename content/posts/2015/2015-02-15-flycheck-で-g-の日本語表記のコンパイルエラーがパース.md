---
author: admin
categories:
- C++
- Emacs
- 技術メモ
date: 2015-02-15T10:22:00+00:00
dsq_thread_id:
- 3.6957816e+09
excerpt: Flycheck で g++ の日本語表記のコンパイルエラーがパースできていなかった (C/C++)
pvc_views:
- 2219
title: Flycheck で g++ の日本語表記のコンパイルエラーがパースできていなかった (C/C++)
type: post
url: /archives/=2992
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

Emacs の エラーチェッカーで flycheck がある.静的文法チェック. flymake
の後継.

-   [flycheck/flycheck](https://github.com/flycheck/flycheck)
-   [Flycheck - Modern Emacs syntax checking
    ](https://www.flycheck.org/en/latest/)

C++ でつかってみると, どうも動かないので調べてみたメモ.

Build-in
========

マニュアルによると, gcc, clnag, cppcheck が default
のチェッカーとして用意されている.

-   [Supported languages - Flycheck
    0.23-cvs](https://flycheck.readthedocs.org/en/latest/guide/languages.html#c-c)

パーサーを見てみると..
======================

ソースを除いてみると, たとえば gcc のパーサーは以下.

``` {.commonlisp}
(flycheck-define-checker c/c++-gcc
  "A C/C++ syntax checker using GCC.

Requires GCC 4.8 or newer.  See URL `https://gcc.gnu.org/'."
  :command ("gcc"

    "長いので途中省略"

  :error-patterns
  ((error line-start
          (message "In file included from") " " (file-name) ":" line ":"
          column ":"
          line-end)
   (info line-start (file-name) ":" line ":" column
         ": note: " (message) line-end)
   (warning line-start (file-name) ":" line ":" column
            ": warning: " (message) line-end)
   (error line-start (file-name) ":" line ":" column
          ": " (or "fatal error" "error") ": " (message) line-end))
  :error-filter
  (lambda (errors)
    (flycheck-fold-include-levels (flycheck-sanitize-errors errors)
                                  "In file included from"))
  :modes (c-mode c++-mode)
  :next-checkers ((warning . c/c++-cppcheck)))
```

おかしいなぁと悩むこと 1 時間近く... パーサーの文字が英語だと気づいた...

自分の環境では, g++ を走らせると,

-   error -&gt; エラー
-   Warining -&gt; 警告

と表示される.

日本語表記で checker を定義
===========================

しかたがないので, 自分で定義をする.

``` {.commonlisp}
(require 'flycheck)
(add-hook 'c-mode-common-hook 'flycheck-mode)

(defmacro flycheck-define-clike-checker (name command modes)
  `(flycheck-define-checker ,(intern (format "%s" name))
     ,(format "A %s checker using %s" name (car command))
     :command (,@command source-inplace)
     :error-patterns
     ((warning line-start (file-name) ":" line ":" column ": 警告:" (message) line-end)
      (error line-start (file-name) ":" line ":" column ": エラー:" (message) line-end))
     :modes ',modes))
(flycheck-define-clike-checker c-gcc-ja
                   ("gcc" "-fsyntax-only" "-Wall" "-Wextra")
                   c-mode)
(add-to-list 'flycheck-checkers 'c-gcc-ja)
(flycheck-define-clike-checker c++-g++-ja
                   ("g++" "-fsyntax-only" "-Wall" "-Wextra" "-std=c++11")
                   c++-mode)
(add-to-list 'flycheck-checkers 'c++-g++-ja)
```

基本的なところにかなりハマってた...
