---
author: admin
categories:
- Emacs
- 技術メモ
date: 2015-03-08T07:19:00+00:00
dsq_thread_id:
- 3.7324334e+09
pvc_views:
- 5039
title: Eshell を使い倒すための Tips いろいろ
type: post
url: /archives/=3035
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

以前から, Emacs の shell 環境として eshell をつかいつづけてきた.

だいたい, ノウハウがまとまりつつあるので, ここらでスナップショットと
して設定をメモしておこうと思う.

Eshell 固有
===========

prompt のフォーマット
---------------------

prompt のフォーマットを自分独自のものにする.

``` {.commonlisp}
(setq eshell-prompt-function
      (lambda ()
        (concat "[tsu-nera"
                (eshell/pwd)
                (if (= (user-uid) 0) "]\n# " "]\n$ "))))
```

eshell alias
------------

eshell の alias 設定

-   <https://www.emacswiki.org/emacs/EshellAlias>

eshell 上では eshell/hoge というコマンドは hoge に置き換えられる.

``` {.commonlisp}
(setq eshell-command-aliases-list
      (append
       (list
        (list "ll" "ls -ltr")
        (list "la" "ls -a")
        (list "o" "xdg-open")
        (list "emacs" "find-file $1")
        (list "m" "find-file $1")
        (list "mc" "find-file $1")
        (list "d" "dired .")
        (list "l" "eshell/less $1"))))
```

### eshell からファイルを開く.

find-file を利用すると, emacs \[ファイル名\] というかたちでファイル
を開くことができる.

``` {.commonlisp}
(list "emacs" "find-file $1")
(list "m" "find-file $1")
(list "mc" "find-file $1")
```

### eshell から dired を開く.

``` {.commonlisp}
(list "d" "dired .")
```

### eshell から less を開く

独自巻数を追加.

``` {.commonlisp}
;; written by Stefan Reichoer <reichoer@web.de>
(defun eshell/less (&rest args)
  "Invoke `view-file' on the file.
\"less +42 foo\" also goes to line 42 in the buffer."
  (interactive)
  (while args
    (if (string-match "\\`\\+\\([0-9]+\\)\\'" (car args))
    (let* ((line (string-to-number (match-string 1 (pop args))))
           (file (pop args)))
      (view-file file)
      (goto-line line))
      (view-file (pop args)))))
```

新しいシェルを開く
------------------

Eshell を複数起動するためには, 一工夫必要.

-   <https://stackoverflow.com/questions/2540997/create-more-than-one-eshell-instance-in-emacs>

``` {.commonlisp}
(defun eshell/make-new-eshell (name)
  "Create a shell buffer named NAME."
  (interactive "sName: ")
  (setq name (concat "$" name))
  (eshell)
  (rename-buffer name))
```

eshell with helm
----------------

Eshell と helm を組合せ.

-   <https://github.com/emacs-helm/helm/blob/master/helm-eshell.el>
-   <https://github.com/emacs-helm/helm/wiki#helmeshellcompletion>
-   [helm で eshell が便利 -
    あじーん-0.0.2-SNAPSHOT](https://nishikawasasaki.hatenablog.com/entry/2012/09/12/233116)

つかいかた

-   helm-esh-pcomplete helm で補完 ほんとは tab に bind したいのだが,
    できない.
    <https://www.gnu.org/software/emacs/manual/html_node/eshell/Completion.html>

-   helm-eshell-history 履歴から入力

``` {.commonlisp}
(use-package helm-eshell
  :init
  (add-hook 'eshell-mode-hook
        #'(lambda ()
        (define-key eshell-mode-map [remap eshell-pcomplete] 'helm-esh-pcomplete)))
  (add-hook 'eshell-mode-hook
        #'(lambda ()
                (define-key eshell-mode-map (kbd "M-p") 'helm-eshell-history))))
```

shell 共通
==========

ここからは, eshell 以外でも利用できるものを.

shell-toggle
------------

現在ページに移動してでシェルを起動する.

-   <https://github.com/knu/shell-toggle.el>

``` {.commonlisp}
(require 'shell-toggle)
;; eshell をつかう.
(setq shell-toggle-launch-shell 'shell-toggle-eshell)

;; フルスクリーンで切り替え
(setq shell-toggle-full-screen-window-only t)

(global-set-key [M-f1] 'shell-toggle)
(global-set-key [C-f1] 'shell-toggle-cd)
```

shell-pop
---------

シェルをポップアップ.

-   [Emacs でシェルを好きな時に呼び出す その 4 - 8tree
    にっき](https://d.hatena.ne.jp/kyagi/20090601/1243841415)
-   <https://github.com/kyagi/shell-pop-el>

設定すると, 下からピョコットシェルがでてくるので便利.

``` {.commonlisp}
(require 'shell-pop)'

(custom-set-variables
 '(shell-pop-default-directory "~/")
 '(shell-pop-shell-type (quote ("eshell" "*eshell*"
                                (lambda nil (eshell shell-pop-term-shell)))))
 '(shell-pop-term-shell "/usr/bin/zsh")
 '(shell-pop-universal-key "C-t")
 '(shell-pop-window-height 30)
 '(shell-pop-full-span t)
 '(shell-pop-window-position "bottom"))
```

exec-path-from-shell
--------------------

環境変数 PATH を引き継ぐ.

-   [purcell/exec-path-from-shell](https://github.com/purcell/exec-path-from-shell)
-   <https://sakito.jp/emacs/emacsshell.html#emacs>

``` {.commonlisp}
(require 'exec-path-from-shell)
(exec-path-from-shell-initialize)
```

Emacs の起動フォルダを変更する.
-------------------------------

C-x C-f で開くディレクトリがデフォルト. Windows だと, Emacs
の起動ディレクトリになってしまう.

default-directory を利用する

``` {.commonlisp}
(when windows-p
  (setq default-directory "C:/cygwin64/home/tsu-nera"))
```

-   [customization - Changing the default folder in Emacs - Stack
    Overflow](https://stackoverflow.com/questions/60464/changing-the-default-folder-in-emacs)
-   [Windows の Emacs (NTEmacs) で起動時ディレクトリを HOME
    ディレクトリに変更できない問題解決! |
    こすブ](https://blog.cosscoss.biz/?p=477)

term-run
--------

interactive なターミナルアプリを動かす.

-   <https://github.com/10sr/term-run-el>

これで, ますます Emacs に引きこもれる.

``` {.commonlisp}
(require 'term-run)

(defun term-run-alsamixer ()
  (interactive)
  (term-run-shell-command "alsamixer"))
```
