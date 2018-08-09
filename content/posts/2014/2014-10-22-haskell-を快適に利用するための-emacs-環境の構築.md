---
author: admin
categories:
- Emacs
- Haskell
- 技術メモ
date: 2014-10-22T14:52:00+00:00
dsq_thread_id:
- 3.7284844e+09
excerpt: Haskell を快適に利用するための Emacs 環境の構築
pvc_views:
- 6750
title: Haskell を快適に利用するための Emacs 環境の構築
type: post
url: /archives/=2662
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

edX で Haskell の講座をとり始めました.

-   [Introduction to Functional Programming |
    edX](https://www.edx.org/course/delftx/delftx-fp101x-introduction-functional-2126#.VEfEZ1svCCg)

内容はさておき, まずは Emacs の環境作りから始めました.

環境づくりに夢中になって内容がおろそかになるという,
いつもの悪いパターン.

haskell-mode
============

Haskell のマイナーモード.

-   <https://github.com/haskell/haskell-mode>

``` {.commonlisp}
(autoload 'haskell-mode "haskell-mode" nil t)
(autoload 'haskell-cabal "haskell-cabal" nil t)

(add-to-list 'auto-mode-alist '("\\.hs$" . haskell-mode))
(add-to-list 'auto-mode-alist '("\\.lhs$" . literate-haskell-mode))
(add-to-list 'auto-mode-alist '("\\.cabal\\'" . haskell-cabal-mode))
```

モードの設定.以下のリンクが詳しい.

-   [Haskell Mode
    13.07](https://haskell.github.io/haskell-mode/manual/latest/)

``` {.commonlisp}
 ;; indent の有効.
(add-hook 'haskell-mode-hook 'turn-on-haskell-indentation)
(add-hook 'haskell-mode-hook 'turn-on-haskell-doc-mode)
(add-hook 'haskell-mode-hook 'font-lock-mode)
(add-hook 'haskell-mode-hook 'imenu-add-menubar-index)

```

Haskell Script の編集モード
---------------------------

``` {.commonlisp}
(add-to-list 'interpreter-mode-alist '("runghc" . haskell-mode))
(add-to-list 'interpreter-mode-alist '("runhaskell" . haskell-mode))
```

Haskell でかかれたスクリプトを haskell-mode で編集する.

``` {.haskell}
#!/usr/bin/env runhaskell
```

Ghci との連携
-------------

M-x run-haskell で ghci が起動.

``` {.commonlisp}
(setq haskell-program-name "/usr/bin/ghci")
```

C-c, C-l でも起動.

``` {.commonlisp}
(add-hook 'haskell-mode-hook 'inf-haskell-mode) ;; enable
```

ghci の起動とファイルの読み込みを一緒に行う設定.

``` {.commonlisp}
(defadvice inferior-haskell-load-file (after change-focus-after-load)
  "Change focus to GHCi window after C-c C-l command"
  (other-window 1))
(ad-activate 'inferior-haskell-load-file)
```

-[ inferior-haskell-mode で設定すると便利なこと - プログラムとかのの
blog](https://d.hatena.ne.jp/pogin/20140121/1390299797)

gcd-mod
=======

Haskell 開発を助ける機能がそろったツール.

-   [Happy Haskell
    Programming](https://www.mew.org/%7Ekazu/proj/ghc-mod/en/)
-   [kazu-yamamoto/ghc-mod](https://github.com/kazu-yamamoto/ghc-mod)

Install
-------

-   [Installing
    "ghc-mod"](https://www.mew.org/~kazu/proj/ghc-mod/en/install.html)

``` {.bash}
% cabal update
% cabal install ghc-mod
```

Settings
--------

-   [Preparing Emacs
    front-end](https://www.mew.org/~kazu/proj/ghc-mod/en/preparation.html)

``` {.commonlisp}
(autoload 'ghc-init "ghc" nil t)
(autoload 'ghc-debug "ghc" nil t)
(add-hook 'haskell-mode-hook (lambda () (ghc-init)))
```

Emacs での使い方は以下のページに書いてある.

-   [Usage of Emacs
    front-end](https://www.mew.org/~kazu/proj/ghc-mod/en/emacs.html)

エラーチェック
==============

flymake
-------

構文チェック.

``` {.commonlisp}
(add-hook 'haskell-mode-hook (lambda () (flymake-mode)))
```

hlint
-----

コードチェック. cabal install hlint でインストールする. C-c C-c
でカーソル部のチェック.

自動補完
========

こんなの見つけた. ac-haskell-process.

-   <https://github.com/purcell/ac-haskell-process>

``` {.commonlisp}
(require 'ac-haskell-process) ; if not installed via package.el
(add-hook 'interactive-haskell-mode-hook 'ac-haskell-process-setup)
(add-hook 'haskell-interactive-mode-hook 'ac-haskell-process-setup)
(eval-after-load "auto-complete"
  '(add-to-list 'ac-modes 'haskell-interactive-mode))
```

Links
=====

-   [Emacs - HaskellWiki](https://www.haskell.org/haskellwiki/Emacs)
-   [Emacs/Inferior Haskell processes -
    HaskellWiki](https://www.haskell.org/haskellwiki/Emacs/Inferior_Haskell_processes)
-   [静岡の Haskeller は Emacs
    を使う](https://www.slideshare.net/KazufumiOhkawa/haskelleremacs)
-   [karky7 のブログ: Gentoo で emacs+haskell
    環境を作る](https://blog.karky7.com/2012/12/gentooemacshaskell.html)
-   [Haskell 用の emacs カスタマイズ例 -
    わからん](https://d.hatena.ne.jp/kitokitoki/20111217/p1)

