---
author: admin
categories:
- Emacs
- R
- 技術メモ
date: 2014-12-22T13:23:00+00:00
dsq_thread_id:
- 3.7279626e+09
excerpt: Emacs で R 言語を利用するための設定メモ (ESS)
pvc_views:
- 6097
title: Emacs で R 言語を利用するための設定メモ (ESS)
type: post
url: /archives/=2840
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

最近, 統計学と R 言語をさわり始めた.

なぜなら, 本屋にいくとビッグデータやら, データマイニングやら,
データサイエンティストやら, そんな単語がポンポン目に入るから.

ということで, まずは Emacs で R
言語を快適に利用するための設定をしてみた.

もちろん, RStudio なんて便利なものは知っているがね.

ESS
===

Emacs を統計用 IDE にするツール. デファクトスタンダードと言えよう.

-   Official: [ESS - Emacs Speaks Statistics](https://ess.r-project.org/)
-   github: <https://github.com/emacs-ess/ESS>
-   メチャクチャ詳しい: [ESS -
    RjpWiki](https://www.okada.jp.org/RWiki/?ESS)
-   [EmacsWiki: Emacs Speaks
    Statistics](https://www.emacswiki.org/emacs/EmacsSpeaksStatistics)
-   [ESS で快適 R ライフ \~設定編\~(2012 年度版) -
    あらびき日記](https://d.hatena.ne.jp/a_bicky/20120415/1334490586)
-   [ESS で快適 R ライフ \~操作編\~(2012 年度版) -
    あらびき日記](https://d.hatena.ne.jp/a_bicky/20120422/1335086814)

起動は M-x R.

``` {.commonlisp}
(setq load-path (cons "/usr/share/emacs/site-lisp/ess" load-path))
(when (locate-library "ess-site")
  (require 'ess-site)

(setq auto-mode-alist
      (cons (cons "\\.[rR]$" 'R-mode) auto-mode-alist))
(autoload 'R-mode "ess-site" "Emacs Speaks Statistics mode" t)


;; R 起動時にワーキングディレクトリを訊ねない
(setq ess-ask-for-ess-directory nil)
```

ESS Auto-complete
=================

R 言語の入力自動補完をするために, auto-complete を利用する.

-   [EmacsWiki:
    ESSAuto-complete](https://www.emacswiki.org/emacs/ESSAuto-complete)

    ac-R.el はふるいっぽい.
    -   [EmacsWiki: Auto Complete
        Sources](https://www.emacswiki.org/emacs/AutoCompleteSources#toc2)
    -   [Emacs autocomplete-mode extension for ESS and R - Stack
        Overflow](https://stackoverflow.com/questions/4682459/emacs-autocomplete-mode-extension-for-ess-and-r)
    -   [ESS の auto-complete を試す - kozo2's
        blog](https://kozo2.hatenablog.com/entry/2012/04/14/050121)

``` {.commonlisp}
(when (locate-library "ess-site")
(setq ess-use-auto-complete t)
;; (setq ess-use-auto-complete 'script-only)
)
```

ESS R Data View
===============

データの中身がみれる.

-   [R のデータビューワ ess-R-data-view.el というのを作りました -
    sheephead](https://sheephead.homelinux.org/2013/05/10/7019/)
-   <https://github.com/myuhe/ess-R-data-view.el>

``` {.commonlisp}
;; (define-key ess-mode-map (kbd "C-c v") 'ess-R-dv-ctable)
(define-key ess-mode-map (kbd "C-c v") 'ess-R-dv-pprint)
```

popwin と組み合わせると便利.

ess-R-object-popup
==================

オブジェクトの中身をポップアップで表示.

-   <https://github.com/myuhe/ess-R-object-popup.el>
-   [popup.el を使って R オブジェクトの情報を popup する
    ess-R-object-popup.el -
    sheephead](https://sheephead.homelinux.org/2010/03/02/1807/)

``` {.commonlisp}
(when (locate-library "ess-site")
(require 'ess-R-object-popup)
(define-key ess-mode-map "\C-c\C-g" 'ess-R-object-popup)
)
```

gist 版は古いようだ.

-   <https://gist.github.com/myuhe/318365>

no ESS process is associated with this buffer というエラー がでたら C-c
C-s を叩く.

-   [r - ess-rdired: I get this error "no ESS process is associated with
    this buffer now" - Stack
    Overflow](https://stackoverflow.com/questions/13930713/ess-rdired-i-get-this-error-no-ess-process-is-associated-with-this-buffer-now)

helm-R
======

helm インタフェースで 関数のヘルプをひくことができる.

-   [R のための anything インターフェイス, anything-R.el を作った. -
    sheephead](https://sheephead.homelinux.org/2010/05/24/1846/)
-   <https://github.com/emacs-helm/helm-R>

``` {.commonlisp}
(when (locate-library "ess-site")
(require 'helm-R)
(define-key ess-mode-map "\C-ch" 'helm-for-R)
(define-key inferior-ess-mode-map "\C-ch" 'helm-for-R)
)
```

org-babel-R
===========

org-mode で R を利用する.

-   [Emacs org-mode を使ってみる: (40) org-babel-R を使う 1/2 -
    屯遁のパズルとプログラミングの日記](https://d.hatena.ne.jp/tamura70/20100315/org)
-   [Emacs org-mode を使ってみる: (41) org-babel-R を使う 2/2 -
    屯遁のパズルとプログラミングの日記](https://d.hatena.ne.jp/tamura70/20100316/org)
-   [R Source Code Blocks in Org
    Mode](https://orgmode.org/worg/org-contrib/babel/languages/ob-doc-R.html)

``` {.commonlisp}
(when (locate-library "ess-site")
(org-babel-do-load-languages
 'org-babel-load-languages
 '((R . t)))
)
```

R 言語と org-mode で Reproducible Research を.

-   <https://github.com/vikasrawal/orgpaper/blob/master/orgpapers.org>

以下のようにタグでソースを加工する. C-c C-c で評価する.

``` {.org-mode}
#+begin_src R :file age_at_intake.png :width 400 :height 400 :results graphics
```

\#+end\_src

おわりに
========

半分以上のパッケージが myuhe さんが作成したものだと気づく. すごい.
Special Thanks!
