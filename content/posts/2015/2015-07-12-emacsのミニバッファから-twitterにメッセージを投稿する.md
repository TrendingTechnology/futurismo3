---
author: admin
categories:
- Emacs
date: 2015-07-12T13:09:00+00:00
dsq_thread_id:
- 3.927209e+09
pvc_views:
- 1316
tags:
- twitter
title: Emacsのミニバッファから twitterにメッセージを投稿する小技
type: post
url: /archives/=4341
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg"/>

Emacsのミニバッファから twitterにメッセージを投稿する小技.

はじめに
========

最近は、非公開のtwitter個人アカウントに独り言をすることが多い.

Emacsから twittering-modeを利用してつぶやいている.

-   <https://emacswiki.org/emacs/TwitteringMode-ja>

しかし、たまには？表の公開アカウントでつぶやきたくなるときもある.

そんなとき、Emacsからでなければいけいなということにストレスを
感じたのでミニバッファからツイートする方法を考えた.

ちなみに、Linux環境のための記事です.

コマンドラインからツイートする
==============================

ruby の twitter ライブラリを利用してスクリプトを書けば、
コマンドラインからツイートできる.

-   <https://github.com/sferik/twitter>

以下のようなスクリプトを用意.

``` {.ruby}
#!/usr/bin/ruby
require 'twitter'
client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "YOUR_CONSUMER_KEY"
  config.consumer_secret     = "YOUR_CONSUMER_SECRET"
  config.access_token        = "YOUR_ACCESS_TOKEN"
  config.access_token_secret = "YOUR_ACCESS_SECRET"
end
client.update ARGV[0]
```

これを実行可能にして、パスの通ったところにおくとツイートできる.

``` {.commonlisp}
$ chmod +x twitter
$ twitter "テスト投稿"
```

Emacsのミニバッファから投稿
===========================

本題。以下の関数を定義した。

``` {.commonlisp}
(defun twit-from-minibuffer (x)
  "Tweet message from minibuffer"
  (interactive "sEnter twitter message: ")
  (let ((tweet-message (concat "twitter " x)))
    (shell-command tweet-message)))
(global-set-key (kbd "C-c C-x t") 'twit-from-minibuffer)
```

これで、ショートカットからツイートできるようになった.

最後に
======

Emacsからツイートできないとストレスを感じることが異常かもしれない.

<p style="font-size:32px">以上、Happy Hacking!!</p>
