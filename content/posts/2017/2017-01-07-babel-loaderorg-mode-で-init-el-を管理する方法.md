---
author: admin
categories:
- Emacs
date: 2017-01-07T09:40:00+00:00
dsq_thread_id:
- 5.442938e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 1118
side:
- "y"
tags:
- org-mode
title: babel-loader:org-mode で init.el を管理する方法
title_view:
- "y"
type: post
url: /archives/=6057
---

私の現時点での.emacs 管理方法を紹介します。リポジトリは以下です。

-   <https://github.com/tsu-nera/dotfiles/tree/master/.emacs.d/inits>

org ファイルがならんでます。そうです！

emacs の設定ファイルを org-mode で管理しています。

org-mode で書いた設定ファイルを hoge.org -&gt; hoge.el
に変換しています。

それを可能にするパッケージが、babel-loader です。

<div class="github-card" data-github="takaishi/babel-loader.el" data-width="400" data-height="177" data-theme="default"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>

-   <https://github.com/takaishi/babel-loader.el>

org-mode で init.el を管理することで得られる 7 つの恩恵
=======================================================

benel-loader は init-loder
と組み合わせることによって、効果を発揮します。 hoge.org -&gt; hoge.el
に変換したファイルを init-loader によって、
一つずつロードしていくからです。

rubikitch さんが以下のような記事を年末に書きました。

-   [init-loader:init.el を分割で得られる 7
    つの恩恵](https://emacs.rubikitch.com/init-loader/)

それにならって、org-mode で init.el
を管理することの恩恵を考えて見たいと思います。

1.  説明をコメントとして書かないですむ。... ;;
    で説明をコメントアウトする見苦しさとはおさらば。
2.  説明とコードを一緒に 一元管理できる。... Run Book Automation です。
3.  org-mode に慣れていれば説明を書きやすい。... I love org-mode!!
4.  org-mode の折りたたみ機能によって、階層的に設定を管理できる。
5.  設定ファイルがブログ記事になる ... こんな感じです。[Emacs
    プログラミング言語開発環境 |
    Futurismo](https://futurismo.biz/emacs_programming_environment)
6.  読みやすい。他人に見せやすい。... とくに github
    にあげるといい感じにシンタックスハイライトしてくれる。
7.  書いていて楽しい！！

私の Emacs 起動方法
===================

以下、自分き Emacs の起動順序について抜粋しながら書く。

フォルダ構成
------------

フォルダ構成はこんな感じ。

``` {.text}
.emacs.d
  |- init.el ... 一番初めに起動されるファイル
  |- inits ... org ファイルが入っているディレクトリ
       |- 00_init.org
       |- ....
       |- 90_color.org
  |- el-get
      |- repo 
          |- el-get 
          |- el-get で取得したパッケージ群
      |- user-recipes ... el-get 用の自分のレシピ
```

init.el: el-get
---------------

まずは、el-get を一番初めにダウンロードする。

``` {.commonlisp}
;; el-get ロードパス設定
(add-to-list 'load-path (locate-user-emacs-file "el-get/repo/el-get"))

;; ダウンロードした elisp 置き場
(setq el-get-dir "~/.emacs.d/el-get/repo")

;; ダウンロードしていないときはダウンロード
(unless (require 'el-get nil 'noerror)
  (with-current-buffer
      (url-retrieve-synchronously
       "https://raw.github.com/dimitri/el-get/master/el-get-install.el")
    (let (el-get-master-branch)
      (goto-char (point-max))
      (eval-print-last-sexp))))

;; 初期化処理用
(setq el-get-user-package-directory "~/.emacs.d/el-get/init-files")

;; レシピ置き場
;; 追加のレシピ置き場
(add-to-list 'el-get-recipe-path "~/.emacs.d/el-get/user-recipes")
```

init.el: org-mode
-----------------

org-mode を読み込む。load-path に

``` {.commonlisp}
;; org-mode/lisp, org-mode/contribe/lisp をロードパスに追加する
(let* ((org-dir (expand-file-name
                 "lisp" (expand-file-name
                         "org-mode" el-get-dir)))
       (org-contrib-dir (expand-file-name
                         "lisp" (expand-file-name
                                 "contrib" (expand-file-name
                                            ".." org-dir)))))
  (setq load-path (append (list org-dir org-contrib-dir)
                          (or load-path nil))))
(require 'org)
```

init.el: init-loader
--------------------

``` {.commonlisp}
(el-get-bundle emacs-jp/init-loader)

;; バイトコンパイルする
;; 初めのバイトコンパイルは手動で実施する必要がある
(setq init-loader-byte-compile t)

;; エラー発生時にだけ log を開く
;; (setq init-loader-show-log-after-init t)
(setq init-loader-show-log-after-init 'error-only)
```

init.el: babel-loader
---------------------

el-get で babel-loader をインストール

``` {.commonlisp}
(el-get-bundle takaishi/babel-loader.el)
(add-to-list 'load-path (locate-user-emacs-file "el-get/repo/babel-loader.el"))
(require 'babel-loader)

;; インデント保持
;; これをしないと 変換された elisp ファイルのインデントがずれる.
(setq org-src-preserve-indentation t)

;; inits 配下の org ファイルを elc に変換して読み込み.
(bl:load-dir "~/.emacs.d/inits/")
```

inits:00\_init.org フォルダを再帰的にロードパスに追加
-----------------------------------------------------

-   <https://e-arrows.sakura.ne.jp/2010/03/macros-in-emacs-el.html>

``` {.commonlisp}
;; @ load-path
;; for Emacs 23 under
(defvar user-emacs-directory "~/.emacs.d")

;; load-path の追加関数
(defun add-to-load-path (&rest paths)
  (let (path)
    (dolist (path paths paths)
      (let ((default-directory (expand-file-name (concat user-emacs-directory path))))
    (add-to-list 'load-path default-directory)
    (if (fboundp 'normal-top-level-add-subdirs-to-load-path)
        (normal-top-level-add-subdirs-to-load-path))))))

;; load-path に追加するフォルダ
;; 2 つ以上フォルダを指定する場合の引数 => (add-to-load-path "elisp" "xxx" "xxx")
(add-to-load-path "elisp" "inits" "el-get" "local" "mylisp")
```

inits:00\_init.org: use-package
-------------------------------

パッケージ管理のパッケージ

-   <https://github.com/jwiegley/use-package>

``` {.commonlisp}
(package-initialize nil)
(el-get-bundle use-package)

;; use-package が存在しないときはなにもしない
(add-to-list 'load-path "~/.emacs.d/el-get/repo/use-package")
(unless (require 'use-package nil t)
  (defmacro use-package (&rest args)))
```

inits:00\_init.org: el-get 同期 Package
---------------------------------------

el-get で自動にインストールするパッケージをひたすら列挙。

``` {.commonlisp}
(defvar my/el-get-packages-all
  '(
    ;; 03_display
    popwin
    switch-window
    isearch-dabbrev
    ;; open-junk-file
    iy-go-to-char
    key-chord
    jump-char
    recentf-ext
    stripe-buffer

    ;; 20_text
    hydra
    swiper
    yasnippet
    dired-k
    migemo
    undo-tree
    define-word
    auto-complete
    anzu
    auto-highlight-symbol
    highlight-symbol
    multiple-cursors
    bm
    emacs-async
    pcre2el
    ht
    iedit
    codic
    search-web
    wgrep
    expand-region
    ag
    auto-capitalize
    omni-kill

    ;; 以下省略
    )
  "A list of packages to install from el-get at launch.")
```

inits: 00\_init.org el-get config
---------------------------------

``` {.commonlisp}
;; 通知は minibuffer のみ
(setq el-get-notify-type 'message)

;; パッケージをインストール
(el-get 'sync my/el-get-packages-all)
```

inits: 01\_global.org ... 90\_color.org
---------------------------------------

babel-loader によって、次々と org ファイルを el
に変換して読み込んでいく。

Special Thanks
==============

-   <https://github.com/takaishi/.emacs.d>
-   [平衡点(2011-12-13)](https://uwabami.junkhub.org/log/?date=20111213)
    -   <https://github.com/uwabami/emacs>
-   <https://github.com/r0man/.emacs.d>
-   <https://github.com/eschulte/emacs-starter-kit/>
-   [ORG-Babel + init.el = ??｜くらいまーず
    はい](https://ameblo.jp/concello/entry-10786074455.html)
-   [俺、ちゃんと全部管理してます（org-mode で init.el を管理する） |
    lambda
    consulting](https://blog.lambda-consulting.jp/2015/11/20/article/)
-   [Sacha Chua's Emacs
    configuration](https://pages.sachachua.com/.emacs.d/Sacha.html)
