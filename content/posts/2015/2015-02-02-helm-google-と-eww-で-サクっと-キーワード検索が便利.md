---
author: admin
categories:
- Emacs
- 技術メモ
date: 2015-02-01T16:08:00+00:00
dsq_thread_id:
- 3.7325036e+09
excerpt: helm-google と eww を 組み合わせた
pvc_views:
- 1744
title: helm-google と eww で サクっと キーワード検索が便利
type: post
url: /archives/=2965
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

はじめに
========

helm-google と eww を組み合わせたらなかなか相性がよかった.

helm-google
===========

helm-google は, google 検索結果を helm で絞り込めるもの.

-   <https://github.com/steckerhalter/helm-google>

``` {.r .rundoc-block rundoc-language="R" rundoc-session="ex" rundoc-export="both" rundoc-results="code"}
(require 'helm-google)
(setq helm-google-tld "co.jp")
```

eww と組み合わせる
------------------

ブラウザはデフォルトでは browse-url を呼んでいるので, これを eww
を呼ぶように変更してしまう.

``` {.commonlisp}
;; eww で表示
(setq helm-source-google
    `((name . "Google")
      (init . (lambda () (require 'google)))
      (action ("Browse URL" . eww-browse-url))
      (display-to-real . helm-google-display-to-real)
      (candidates . helm-google-search)
      (requires-pattern)
      (nohighlight)
      (multiline)
      (volatile)))
```

helm-resume と組み合わせる
--------------------------

helm-resume と組み合わせると便利.
検索語句にキーワードを追加で足して検索したいときは, helm-resume!!

便利だと感じたのは, 一度キーワードで検索をかけたあとに,
追加でキーワードを指定したいと思ったとき.

helm-resume だと, 前回の検索結果からはじまるので,
追加でキーワードををいれることができる.

検索結果の表示を高くする
------------------------

検索結果は, helm の buffer に現れる. 画面の 20%にしか表示されないので,
すこし小さい. 大きくしてみる.

最近追加された autoresize 機能で, 動的に高さを調整.

``` {.commonlisp}
(helm-autoresize-mode 1) ;; 検索結果によってリサイズ. default 40%
(setq helm-autoresize-max-height 50)
```
