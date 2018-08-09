---
author: admin
categories:
- Emacs
- 技術メモ
date: 2015-01-01T14:54:00+00:00
dsq_thread_id:
- 3.6965706e+09
excerpt: SKK サーバを利用して Linux 環境で Google 日本語入力する方法
pvc_views:
- 2285
tags:
- SKK
- 親指シフト
title: SKK サーバを利用して Linux 環境で 親指シフト&Google 日本語入力ができた!
type: post
url: /archives/=2890
---

はじめに
========

Google 日本語入力がもっとも変換にすぐれているとおもう. mozc
を利用したいところなのだけれども, 自分には mozc
をつかえない致命的な問題があった.

それは・・・ **親指シフトに対応していないこと**

-   [Ubuntu10.10 インストール: 親指シフト on
    Linux](https://thumb-shift-on-linux.seesaa.net/article/166840845.html)
-   [腱鞘炎と戦う男 腱鞘炎対策キーボード作成記 google 日本語入力 (mozc)
    で,
    かえであすかモドキを作ってみた](https://kenfight.blog137.fc2.com/blog-entry-131.html)

Windows 環境では, GoogleIME + やまぶきの組み合わせで実現できていた.
Linux 環境での IME は, ibus-anthy を利用していた.

-   [Fcitx-anthy を使って Linux Mint
    で親指シフト日本語入力環境を構築するまでの手順 |
    Futurismo](https://futurismo.biz/archives/2067)

しかし, 今日でそれもおわりだ! Linux 環境でも Google
日本語入力をする方法を偶然にも発見してしまった.

それは,SKK を利用するというワザ.

SKK とは
========

SKK は, IME の一種.

-   [SKK Openlab -
    ドキュメント](https://openlab.ring.gr.jp/skk/doc-ja.html)

導入手順は過去記事を参照. 親指シフトにも対応している.

-   [Emacs DDSKK で NICOLA 親指シフト入力をする |
    Futurismo](https://futurismo.biz/archives/2881)

SKK Server で Google 日本語入力サーバにアクセスする
===================================================

SKK Server という機能を利用すると, Google
日本語入力サーバにアクセスすることができる.

-   <https://github.com/hitode909/google-ime-skk>
-   [Google IME SKK サーバー 作った - hitode909
    の日記](https://hitode909.hatenablog.com/entry/20110421/1303274561)

ローカル PC で SKK サーバを動かして,
日本語入力サーバにアクセスすることで, 親指シフト入力が出来るようになる.

install
-------

``` {.bash}
gem install google-ime-skk
```

install できたら, google-ime-skk を実行する.

ddskk の設定
------------

IP を設定してアクセスする.

``` {.commonlisp}
(require 'skk-server)
;; 辞書サーバを利用する場合の設定
(setq skk-server-host "0.0.0.0"
      skk-server-prog "google-ime-skk" ;; パスは通っているようだ.
      skk-server-portnum 55100)

;; 辞書サーバが使用不能になると辞書ファイルを 
;; Emacs のバッファに読み込んで 検索を行う.
(setq skk-server-inhibit-startup-server nil) ;; 通信エラー時はローカル辞書を.
(setq skk-server-jisyo "~/.emacs.d/dic/SKK-JISYO.L")

(add-to-list 'skk-search-prog-list
         '(skk-server-completion-search) t)
(add-to-list 'skk-search-prog-list
         '(skk-comp-by-server-completion) t)

;; 一応手動で起動する手段を用意するが, 起動は OS 側で実施する予定
(defun my/boot-skk-server ()
  "Start SKK server"
  (interactive)    
  (unless (skk-server-live-p)
    (async-shell-command skk-server-prog (get-buffer-create "*google-ime-skk*"))
    (setq skkserv-process (skk-open-server-1))
    (when (skk-server-live-p)
      (set-process-coding-system skkserv-process 'utf-8 'utf-8))))

(defun my/skk-close-server ()
  (interactive)
  (when (skk-server-live-p)
    (skk-disconnect-server)
    (kill-process (get-buffer-process "*google-ime-skk*"))
    (message "Server disconnected")))
(add-hook 'kill-emacs-hook 'my/skk-close-server)
```

おわりに
========

以前の記事にも書いたのだけれども, どうも SKK の打鍵方法と NICOLA
は相性が悪い気がする. 文節のあたまで打鍵をする必要があるため,
いままでに比べて打鍵数が増えているきがするのだ.

まだ慣れていないだけの問題なのだろうか??

しばらく様子見だけれども, そのうちどうするかは決定する. いまは,
長い文章を一気に変換できることに快感を覚えている.
