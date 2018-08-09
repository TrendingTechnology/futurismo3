---
author: admin
categories:
- Emacs
- 技術メモ
date: 2015-03-11T15:35:00+00:00
dsq_thread_id:
- 3.7422484e+09
excerpt: 未知は eww から Google へ, 既知は geeknote から Evernote へ.
pvc_views:
- 3745
tags:
- Evernote
title: Emacs からビッグデータの叡智へ瞬速アクセスだ! 新しい Emacs Evernote Cleient の geeknote がイイ
type: post
url: /archives/=3038
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

Emacs の Evernote を 2 つ紹介します.

-   evernote-mode
-   geeknote

きっかけ
--------

数年前に Evernote を Emacs でつかう記事をかいた.

-   [Evernote で Emacs を使う (emacs-evernote-mode) |
    Futurismo](https://futurismo.biz/archives/717)

記事をかいてしばらくして, Evernote API
の仕様変更で一時期使えなくなってしまった.(アクセス token)

メイン PC が Linux に変えたら, Evernote すら利用をしてなかった.

最近, 久しぶりに Evernote にアクセスしてみて, また Evernote を触りたく
なってきた.=geeknote= という新手の Evernote クライアントが登場したため,
最近の Evernote 事情について調べてみた.

evernote-mode
=============

-   <https://github.com/pymander/evernote-mode>

本家のリポジトリはメンテされてない.

-   [emacs-evernote-mode - Functions for editing Evernote notes directly
    from Emacs - Google Project
    Hosting](https://code.google.com/p/emacs-evernote-mode/)

install
-------

基本は, doc 配下にある readme を読む.

ポイントは ruby 1.9 が必要!! 以下を実行.

``` {.commonlisp}
$ gem-1.9 install evernote_oauth
$ ruby-1.9 ruby/setup.rb
```

### /usr/bin/enclient.rb error

/usr/bin/enclient.rb がないとエラーする件は, readme
に解決方法がかいてあった. 複数 ruby バージョンインストール時に発生.

setup.rb 実施後に, マニュアルでコピーする.

``` {.bash}
$ sudo cp /usr/bin/ruby1.9/bin/enclient.rb /usr/bin
```

### auth token

事前にトークンを取得して, 以下のようにかく必要あり.

-   (ここから) <https://www.evernote.com/api/DeveloperToken.action>

``` {.text}
(setq setq evernote-developer-token "Your developer token.")
```

config
------

``` {.commonlisp}
(setq evernote-ruby-command "ruby-1.9")

(require 'evernote-mode)
(global-set-key "\C-cec" 'evernote-create-note)
(global-set-key "\C-ceo" 'evernote-open-note)
(global-set-key "\C-ces" 'evernote-search-notes)
(global-set-key "\C-ceS" 'evernote-do-saved-search)
(global-set-key "\C-cew" 'evernote-write-note)
(global-set-key "\C-cep" 'evernote-post-region)
(global-set-key "\C-ceb" 'evernote-browser)
```

感想
----

頑張って導入してみたものの, あまり使えない子だった.

-   スピードが遅い.
-   通信中のしばしハングが苛立つ.
-   ときどき動かない.
-   evernote-mode でかいたものしか見れない. (これは w3m
    をつかうと解消できるが)

geeknote
========

コマンドラインベースのツール. geeknote.el は Emacs の Evernote
クライアント.

-   <https://github.com/avendael/emacs-geeknote>

Geeknote の設定
---------------

以下からダウンロードしてインストール.

-   <https://github.com/VitaliyRodnenko/geeknote>

``` {.bash}
git clone git://github.com/VitaliyRodnenko/geeknote.git
cd geeknote
sudo python setup.py install

geeknote login
geeknote settings --editor "emacsclient"
```

Emacs の設定
------------

Emacs は server モードで立ち上げておく必要あり.

``` {.commonlisp}
(requier 'geeknote)
(global-set-key (kbd "C-c g c") 'geeknote-create)
(global-set-key (kbd "C-c g e") 'geeknote-edit)
(global-set-key (kbd "C-c g f") 'geeknote-find)
(global-set-key (kbd "C-c g s") 'geeknote-show)
(global-set-key (kbd "C-c g r") 'geeknote-remove)
(global-set-key (kbd "C-c g m") 'geeknote-move)
```

geeknote コマンドを eshell 経由で emacs からコールして, 結果を eshell
buffer に出している.

geeknote の elisp wrpper といったところか.

感想
----

コマンドラインからの検索の **サクサク感に驚いた**.

-   早い
-   簡単
-   便利

というわけで, すぐに気に入ってしまった.

そして, もう一点気に入ったのは, テキストはすべて **Markdown
形式に変換されて表示される** こと.

自分は twtitter や ブログや はてぶを全部 Evernote
につっこんでいるのだが, これらの情報源から,
単語をもとにサクッと検索できる.

-   未知のものは eww で Google 検索.
-   既知のものは geeknote で Evernote 検索.

この二つの情報源に Emacs から素早くアクセスできることは素晴らしい.

さらに, Emacs から geeknote を呼べるというこで,
カスタマイズ次第では追加機能を簡単に実装できそうなところも気に入った.
