---
author: admin
categories:
- Emacs
date: 2016-12-19T01:11:00+00:00
dsq_thread_id:
- 5.391625e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 1391
side:
- "y"
title: Windows 環境で Emacs で 自動スペルチェック(aspell, flyspell)
title_view:
- "y"
type: post
url: /archives/=5995
---

Windows 環境で、Emacs で英文を書くとき、Word
のようなスペルチェックをしたい。

そんなときのための、Tips を紹介。ちょっと設定ではまったのて、メモ。

環境
----

-   NTEmacs 25.1.1

aspell をインストール
=====================

aspell というツールをつかうと、スペルチェックが可能になる。
ダウンロードは以下から。

-   [GNU Aspell (Win32 version)](https://aspell.net/win32/)
    -   aspell 本体 Latest（Aspell-0-50-3-3-Setup.exe）
    -   英語辞書(aspell-en-0.50-2-3.exe)

ダウンロードしたファイルを開くとインストールがはじまるので、インストール。

aspell の設定
=============

Emacs の設定ファイルに以下を書く。

``` {.commonlisp}
;; aspell のインストールパス
(add-to-list 'exec-path "C:/Program Files (x86)/Aspell/bin/")
(require 'ispell)
;; スペルチェックに aspell を使う
(setq ispell-program-name "aspell")
;; 日本語と英語の共存設定
(eval-after-load "ispell"
  '(add-to-list 'ispell-skip-region-alist '("[^\000-\377]+")))
```

　ホームディレクトリに .aspell.conf
というファイルを作成して、以下を記入。

``` {.text}
lang en_US
```

そうしないと、以下のようなエラーがでる。

``` {.text}
Error: No word lists can be found for the language "ja_JP".
```

flyspell-mode
=============

自動で英文チェックしてくれるパッケージ。M-x flyspell-mode で有効にする。

または、以下のように自動で有効にしてもよい。

``` {.commonlisp}
(mapc
 (lambda (hook)
   (add-hook hook 'flyspell-mode))
 '(text-mode-hook
   org-mode-hook
   wl-draft-mode-hook
   twittering-edit-mode))
```

参考
====

-   [Aspell Windows](https://www.emacswiki.org/emacs/AspellWindows)
-   [よしいずの雑記帳　 Windows における Aspell
    のセットアップ作業のメモ](https://yoshiiz.blog129.fc2.com/blog-entry-766.html)
-   [Mac で flyspell-mode を使うための設定 - syohex ’ s
    diary](https://syohex.hatenablog.com/entry/2015/08/20/005348)

