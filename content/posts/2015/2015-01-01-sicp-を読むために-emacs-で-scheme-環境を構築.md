---
author: admin
categories:
- Emacs
- 技術メモ
date: 2014-12-31T16:00:00+00:00
dsq_thread_id:
- 3.7279068e+09
excerpt: SICP を読むために Emacs で Scheme 環境を構築
pvc_views:
- 6171
tags:
- Scheme
- SICP
title: SICP を読むために Emacs で Scheme 環境を構築
type: post
url: /archives/=2888
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

2015 年は SICP を読んでいく予定です.

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'><div class='amazlink-list' style='clear: both;'><div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'><a href='https://www.amazon.co.jp/%E8%A8%88%E7%AE%97%E6%A9%9F%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%AE%E6%A7%8B%E9%80%A0%E3%81%A8%E8%A7%A3%E9%87%88-%E7%AC%AC2%E7%89%88-%E3%83%8F%E3%83%AD%E3%83%AB%E3%83%89-%E3%82%A8%E3%82%A4%E3%83%96%E3%83%AB%E3%82%BD%E3%83%B3/dp/4798135984%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4798135984' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/511qf4jdYjL._SL160_.jpg' style='border: none;' /></a></div><div class='amazlink-info' style='height:160; margin-bottom: 10px'><div class='amazlink-name' style='margin-bottom:10px;line-height:120%'><a href='https://www.amazon.co.jp/%E8%A8%88%E7%AE%97%E6%A9%9F%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%AE%E6%A7%8B%E9%80%A0%E3%81%A8%E8%A7%A3%E9%87%88-%E7%AC%AC2%E7%89%88-%E3%83%8F%E3%83%AD%E3%83%AB%E3%83%89-%E3%82%A8%E3%82%A4%E3%83%96%E3%83%AB%E3%82%BD%E3%83%B3/dp/4798135984%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4798135984' rel='nofollow' target='_blank'>計算機プログラムの構造と解釈 [第 2 版]</a></div><div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 15.01.01</div><div class='amazlink-detail'>ハロルド エイブルソン<br /></div><div class='amazlink-sub-info' style='float: left;'><div class='amazlink-link' style='margin-top: 5px'><img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18'><a href='https://www.amazon.co.jp/%E8%A8%88%E7%AE%97%E6%A9%9F%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%AE%E6%A7%8B%E9%80%A0%E3%81%A8%E8%A7%A3%E9%87%88-%E7%AC%AC2%E7%89%88-%E3%83%8F%E3%83%AD%E3%83%AB%E3%83%89-%E3%82%A8%E3%82%A4%E3%83%96%E3%83%AB%E3%82%BD%E3%83%B3/dp/4798135984%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4798135984' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18'><a href='https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12780410%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D12780410%26surl%3Dbook' rel='nofollow' target='_blank'>楽天</a></div></div></div></div></div>

というわけで, Scheme の開発環境を Emacs で構築しました.

Scheme の処理系 Gauche
======================

まずは, Scheme 処理系をインストール.(ゴーシュ)

-   [Gauche - A Scheme
    Implementation](https://practical-scheme.net/gauche/index-j.html)

``` {.bash}
gosh -V
```

scheme-mode
-----------

Default で Emacs にはいっている. 以下の設定を参考にした.

-   [Emacs から Gauche を使う -
    karetta.jp](https://karetta.jp/book-node/gauche-hacks/004640)
-   [Windows + Emacs + Gauche の環境構築 |
    小さいモノは美しい](https://hayate2255.wordpress.com/2013/02/03/windows7-emacs-gauche-%E3%81%AE%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89/)

``` {.commonlisp}
;; UTF-8 に統一
(setq process-coding-system-alist
      (cons '("gosh" utf-8 . utf-8) process-coding-system-alist))

(setq scheme-program-name "gosh -i")
(autoload 'scheme-mode "cmuscheme" "Major mode for Scheme." t)
(autoload 'run-scheme "cmuscheme" "Run an inferior Scheme process." t)

;; 別のウィンドウに gosh を動作させる
(defun scheme-other-window ()
  "Run Gauche on other window"
  (interactive)
  (split-window-horizontally (/ (frame-width) 2))
  (let ((buf-name (buffer-name (current-buffer))))
    (scheme-mode)
    (switch-to-buffer-other-window
     (get-buffer-create "*scheme*"))
    (run-scheme scheme-program-name)
    (switch-to-buffer-other-window
     (get-buffer-create buf-name))))

(define-key global-map "\C-cS" 'scheme-other-window)
```

smartparens
-----------

カッコをあつかうための多機能な移動・編集ツール.

-   <https://github.com/Fuco1/smartparens>
-   <https://github.com/Fuco1/smartparens/wiki>
-   [smartparens.el での括弧処理 -
    理系学生日記](https://kiririmode.hatenablog.jp/entry/20131231/p1)

``` {.commonlisp}
(require 'smartparens-config)
(smartparens-global-mode t)
```

### default

smartparens-config では以下が設定される.

-   <https://github.com/Fuco1/smartparens/blob/master/smartparens-config.el>

### example

設定例.

-   <https://github.com/Fuco1/smartparens/wiki/Example-configuration>

あまりに多機能すぎて使いこなす自信がないな..

覚えておきたいのは,

-   かっこで囲む xx sp-pair M-(
-   かっこを外す sp-unwrap C-M-s

``` {.commonlisp}
(define-key sp-keymap (kbd "C-M-f") 'sp-forward-sexp)
(define-key sp-keymap (kbd "C-M-b") 'sp-backward-sexp)

(define-key sp-keymap (kbd "C-M-d") 'sp-down-sexp)
(define-key sp-keymap (kbd "C-M-a") 'sp-backward-down-sexp)
(define-key sp-keymap (kbd "C-S-a") 'sp-beginning-of-sexp)
(define-key sp-keymap (kbd "C-S-d") 'sp-end-of-sexp)

(define-key sp-keymap (kbd "C-M-e") 'sp-up-sexp)
(define-key emacs-lisp-mode-map (kbd ")") 'sp-up-sexp)
(define-key sp-keymap (kbd "C-M-u") 'sp-backward-up-sexp)
(define-key sp-keymap (kbd "C-M-t") 'sp-transpose-sexp)

(define-key sp-keymap (kbd "C-M-n") 'sp-next-sexp)
(define-key sp-keymap (kbd "C-M-p") 'sp-previous-sexp)

(define-key sp-keymap (kbd "C-M-k") 'sp-kill-sexp)
(define-key sp-keymap (kbd "C-M-w") 'sp-copy-sexp)

(define-key sp-keymap (kbd "C-M-s") 'sp-unwrap-sexp)
(define-key sp-keymap (kbd "M-<backspace>") 'sp-backward-unwrap-sexp)

(define-key sp-keymap (kbd "C-<right>") 'sp-forward-slurp-sexp)
(define-key sp-keymap (kbd "C-<left>") 'sp-forward-barf-sexp)
(define-key sp-keymap (kbd "C-M-<left>") 'sp-backward-slurp-sexp)
(define-key sp-keymap (kbd "C-M-<right>") 'sp-backward-barf-sexp)

(define-key sp-keymap (kbd "M-D") 'sp-splice-sexp)
(define-key sp-keymap (kbd "C-M-<delete>") 'sp-splice-sexp-killing-forward)
(define-key sp-keymap (kbd "C-M-<backspace>") 'sp-splice-sexp-killing-backward)
(define-key sp-keymap (kbd "C-S-<backspace>") 'sp-splice-sexp-killing-around)

(define-key sp-keymap (kbd "C-]") 'sp-select-next-thing-exchange)
(define-key sp-keymap (kbd "C-<left_bracket>") 'sp-select-previous-thing)
(define-key sp-keymap (kbd "C-M-]") 'sp-select-next-thing)

(define-key sp-keymap (kbd "M-F") 'sp-forward-symbol)
(define-key sp-keymap (kbd "M-B") 'sp-backward-symbol)

(define-key sp-keymap (kbd "H-t") 'sp-prefix-tag-object)
(define-key sp-keymap (kbd "H-p") 'sp-prefix-pair-object)
(define-key sp-keymap (kbd "H-s c") 'sp-convolute-sexp)
(define-key sp-keymap (kbd "H-s a") 'sp-absorb-sexp)
(define-key sp-keymap (kbd "H-s e") 'sp-emit-sexp)
(define-key sp-keymap (kbd "H-s p") 'sp-add-to-previous-sexp)
(define-key sp-keymap (kbd "H-s n") 'sp-add-to-next-sexp)
(define-key sp-keymap (kbd "H-s j") 'sp-join-sexp)
(define-key sp-keymap (kbd "H-s s") 'sp-split-sexp)

;;;;;;;;;;;;;;;;;;
;; pair management
(sp-local-pair 'minibuffer-inactive-mode "'" nil :actions nil)

;;; lisp modes
(sp-with-modes sp--lisp-modes
  (sp-local-pair "(" nil :bind "C-("))

(sp-pair "(" ")" :wrap "M-(")
```

rainbow-delimiters
------------------

かっこの深さに応じて色付けしてくれる.

-   <https://github.com/Fanael/rainbow-delimiters>

かっこの強調をどきつくする. これはいいなぁ.

-   [rainbow-delimiters.el の括弧色付けをデフォルトより強調する方法 -
    会者定離で以降](https://d.hatena.ne.jp/murase_syuka/20140815/1408061850)
-   [Small rainbow-delimiters tutorial | Yoo
    Box](https://yoo2080.wordpress.com/2013/12/21/small-rainbow-delimiters-tutorial/)

**注意** テーマ読み込みのあとに配置すること.

``` {.commonlisp}
(require 'rainbow-delimiters)
(add-hook 'emacs-lisp-mode-hook 'rainbow-delimiters-mode)
(add-hook 'scheme-mode-hook 'rainbow-delimiters-mode)
(add-hook 'lisp-mode-hook 'rainbow-delimiters-mode)

;; these setting should be placed after load-theme
;; using stronger colors
(require 'cl-lib)
(require 'color)

;; 関数にしないとうまくいかない...手動で有効に
(defun rainbow-delimiters-using-stronger-colors ()
  (interactive)
  (cl-loop
   for index from 1 to rainbow-delimiters-max-face-count
   do
   (let ((face (intern (format "rainbow-delimiters-depth-%d-face" index))))
     (cl-callf color-saturate-name (face-foreground face) 100))))

;; making unmatched parens stand out more
(set-face-attribute 'rainbow-delimiters-unmatched-face nil
            :foreground 'unspecified
            :inherit 'error
            :strike-through t)
```

SICP を info で読む
-------------------

以下の設定で Emacs の info で SICP が読める (English)

-   [Emacs の info として SICP を読む - 大切なものは目に見えない -
    mahata の日記
    (はてなブランチ)](https://d.hatena.ne.jp/mahata/20080921/1221958711)
-   [SICP 読むための設定とか -
    Clipboard](https://d.hatena.ne.jp/tequilasunset/20110220/p4)
-   [計算機プログラムの構造と解 -
    とりあえず暇だったし何となく始めたブログ](https://d.hatena.ne.jp/khiker/20070406/sicp)

この方法のよいところは, テキストの文章をそのまま C-x C-e で評価して実
行できるところ.

``` {.bash}
# sicp.info 取得
wget https://www.neilvandyke.org/sicp-texi/sicp.info.gz
gunzip sicp.info.gz

# /usr/local/info に sicp.info をコピー.
$ sudo mkdir -p /usr/local/info
$ sudo cp sicp.info /usr/local/info

# dir ファイルを編集.
$ sudo emacs /usr/local/share/info/dir

# 次の二行を追記.
 The Algorithmic Language Scheme
 * SICP : (sicp.info). Structure and Interpretation of Computer Programs.
```

調べたけど利用しないもの
========================

せっかく調べたけど, 設定を有効にしない (できない) ものも列挙.

paredit
-------

Lisp コードで頻出する括弧類のバランスを維持することを目的としたもの.

-   [ParEdit
    チュートリアル](https://www.daregada.sakuraweb.com/paredit_tutorial_ja.html)
-   [Emacs Rocks!](https://emacsrocks.com/e14.html)
-   <https://github.com/Fuco1/smartparens>

smartparens に人気をとられてしまったかわいそうな子.

gosh-mode
---------

scheme-mode の拡張.

-   [gosh-mode.el -
    まにっき](https://d.hatena.ne.jp/mhayashi1120/20110103/1294013522)
-   <https://github.com/mhayashi1120/Emacs-gosh-mode>

scheme-mode を継承しているので, 基本的な操作は変わらないそうだ.

el-get で取得. リボジトリから取得後に make && make install

``` {.commonlisp}
(require 'gosh-config)
```

M-x gosh-run で gosh が起動すれば OK.

scheme-mode に比べて情報がすくないのと, すごさがわからないので,
ひとまずは scheme-mode を利用することにした.

なれてきたらそのうちもう一度挑戦する.

scheme-complete
---------------

auto-complete で補完をすることができる. デフォルト設定で,
そこそこの補完候補が出る.

scheme-complete というものもあるそうなので,気休め程度に導入.

本家のサーバ落ちた?? github の mirror より取得.

-   <https://github.com/emacsmirror/scheme-complete>

以下を参考にして, auto-complete の source に scheme-complete
の情報源を加える.

-   [scheme-complete.el を auto-complete.el で使う -
    ガットポンポコ](https://d.hatena.ne.jp/kobapan/20091205/1259972925)

メンテされていないのと, auto-complete で何とかなるので削除.

``` {.commonlisp}
(autoload 'scheme-smart-complete "scheme-complete" nil t)
(autoload 'scheme-get-current-symbol-info "scheme-complete" nil t)

(eval-after-load 'scheme
  '(define-key scheme-mode-map "\e\t" 'scheme-smart-complete))

;; scheme-mode-hook
(defvar ac-source-scheme
  '((candidates
     . (lambda ()
         (require 'scheme-complete)
         (all-completions ac-target (car (scheme-current-env))))))
  "Source for scheme keywords.")

(add-hook 'scheme-mode-hook
          '(lambda ()
             (make-local-variable 'ac-sources)
             (setq ac-sources (append ac-sources '(ac-source-scheme)))))
```

eldoc
-----

-   [Emacs Lisp モードを便利にする機能 3 選 (auto-complete, eldoc,
    rainbow-delimiters) |
    プログラマーズ雑記帳](https://yohshiy.blog.fc2.com/blog-entry-251.html)
-   [sicpstudygroup @ ウィキ -
    環境設定例集](https://www29.atwiki.jp/sicpstudygroup/pages/45.html)

scheme の eldoc は scheme-complete と合わせて利用するらしいが, eldoc
error void-function eldoc-current-symbol とでてエラーする.

``` {.commonlisp}
(require 'eldoc-extension)
(add-hook 'scheme-mode-hook
  (lambda ()
    ;; Gauche の場合, 次の 2 個の変数を設定しておいたほうがよいのかも.
    (setq default-scheme-implementation 'gauche)
    (setq *current-scheme-implementation* 'gauche)
    ;; eldoc-mode
    (set (make-local-variable 'eldoc-documentation-function)
     'scheme-get-current-symbol-info)
    (eldoc-mode t)
    )
  )
(setq lisp-indent-function 'scheme-smart-indent-function)
```

flymake 設定
------------

glint というものがあるらしい. gauche 0.8.13
でしか動作しないようなので試していない.

-   [glint](https://www.koguro.net/prog/codecheck/index-j.html)
-   [小黒さんの Scheme における glint + Emacs + flymake を試してみた -
    Higepon's blog](https://d.hatena.ne.jp/higepon/20080309/1205043148)

