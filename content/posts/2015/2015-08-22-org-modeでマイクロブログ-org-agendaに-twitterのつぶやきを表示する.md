---
author: admin
categories:
- Emacs
- 技術メモ
date: 2015-08-22T14:50:00+00:00
dsq_thread_id:
- 4.056681e+09
pvc_views:
- 1573
tags:
- org-mode
title: org-modeでマイクロブログ!! org-agendaに twitterのつぶやきを表示する方法
type: post
url: /archives/=4640
---

org-agendaに twitterのつぶやきを表示してみました.

これらの関連記事のまとめになります.

-   [その場の感情を ライフログ!! org-journal でひとりツイッターする |
    Futurismo](https://futurismo.biz/archives/3655)
-   [Emacsのミニバッファから twitterにメッセージを投稿する小技 |
    Futurismo](https://futurismo.biz/archives/4341)

方法
====

以下のようなRuby スクリプトをかいて、自分のつぶやきをorg形式で保存.
rubyからtwitterのtweetを取得するために、twitter gemを利用.

-   [sferik/twitter · GitHub](https://github.com/sferik/twitter)

``` {.ruby}
#!/usr/bin/ruby
require 'twitter'
require 'pp'

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ""
  config.consumer_secret     = ""
  config.access_token        = ""
  config.access_token_secret = ""
end

lines = nil

# ファイルに保存してあるツイートを一旦読込み
File.open("/home/tsu-nera/gtd/journal/twitter.org", "r") do |file|
  lines = file.readlines
end

# ツイートを配列に挿入
client.user_timeline("tsu_nera").each do |tweet|
  t = tweet.created_at.dup.utc.localtime
  lines << "** <#{t.strftime("%Y-%m-%d %H:%M")}> #{tweet.text}\n"
end

# 重複除去
lines.uniq!

# 書き込み
File.open("/home/tsu-nera/gtd/journal/twitter.org", "w") do |file|
  lines.each do |line|
    file.puts line
  end
end
```

以下のような感じで保存される.

``` {.text}
** <2015-08-22 22:43> 投稿テスト
** <2015-08-22 22:23> twitterの投稿をorg-agandaからみることができるかどうかテスト
** <2015-08-22 21:51> clojureを写経してばかりいるけど、自分で一からかける気がしないなぁ。
** <2015-08-22 19:21> test
** <2015-08-20 21:59> 名言を書き溜めてEmacsからランダムに参照するというライフハック。https://t.co/DYmuvM3Faq
** <2015-08-16 23:19> courseraの講義受けて同じようにアルゴリズム取引に挑戦したけど、全く儲からずに泣いている自分がここにいます。 / “自家製プログラムでアルゴリズム取引に励む個人投資家 - WSJ” https://t.co/VzE8Rl9aTc
** <2015-08-10 01:06> ドラクエ3の性格占い、しあわせものだった。
** <2015-08-09 22:17> 集中力がおちたと最近とても感じる。
** <2015-08-09 20:51> clojureで為替レートを取得する処理を書いてみた。https://t.co/lUgKXdfp2o
** <2015-08-09 14:45> walkcar https://t.co/xakyqwcqid
** <2015-08-09 14:42> walkcarほしい。会社の通勤使いたい。これで遅刻しなくてすむ。https://t.co/Tu0trSq4tf
** <2015-08-09 13:34> ニューラルネットワークによる自動作曲。信じられない…。https://t.co/WD2NAwFXxN
** <2015-08-08 14:22> 最近、無駄についつい本を買って積ん読してしまう。でも、FXで湯水のごとくお金がなくなっていくので、もうどうでもいいやと思えてきた。
** <2015-08-08 05:58> @kanata_56 違う言語を学ぶと見える世界も変わりますね。
** <2015-08-08 04:00> ネストの深さは悪しきものだと思っていたが、今はカッコの深さがカッコいいと思う今日この頃。
** <2015-08-08 01:33> もう3か月も仕事でプログラミングしてない。こんな状態が続くなら畜生転職だ。
** <2015-08-08 01:29> 今週も仕事が暇で辛かった。
** <2015-08-06 19:19> かった！よむ！ https://t.co/306Ai5M6LF
** <2015-08-04 04:19> 4時なのに眠れない。明日の会社のC言語テストはズタボロだな。
** <2015-08-03 23:16> ランボー怒りのシャワー浴びよ
```

このファイルを org-agenaの対象ファイルに指定する.

``` {.commonlisp}
(setq org-agenda-files '("~/gtd/main.org"
                         "~/gtd/inbox.org"
                         "~/gtd/journal/journal.org"
                         "~/gtd/journal/twitter.org"
                         "~/gtd/habits.org"))
```

これで、org-agenda view をみると、
twitterのコメントが時間つきで表示されているのだ.

![](./../img/2015-08-22-234835_798x224_scrot.png)

なにができるようになったか
==========================

以前, org-journalに書き溜めたコメントを org-agendaでみるハックを書いた.

-   [その場の感情を ライフログ!! org-journal でひとりツイッターする |
    Futurismo](https://futurismo.biz/archives/3655)

今回、twitterのつぶやきが org-agendaで見られるようになった.
このことによって、

-   公開したいつぶやきは、twitterへ
-   非公開のつぶやきは、 org-journalへ

というように分けることができるようになった.
どちらの書き込みにも、ミニバッファから投稿できるようにした.

twitterをミニバッファ経由での書き込みにするには、以下の記事を.

-   [Emacsのミニバッファから twitterにメッセージを投稿する小技 |
    Futurismo](https://futurismo.biz/archives/4341)

org-journalへミニバッファからコメントを書くには、
以下の関数を呼べばいい.

``` {.commonlisp}
(defun org-journal-from-minibuffer (x)
  "write from minibuffer"
  (interactive "sEnter message: ")
  (let ((tweet-message
         (concat "** " (format-time-string org-journal-time-format) x "\n")))
    (write-region tweet-message nil
                  (concat org-journal-dir org-journal-file-format) 'append))))
```

これで、個人のつぶやきをミニバッファから書き溜めて、
org-agendaという統一 viewで閲覧することができるようになった.

<p style="font-size:32px">以上、Happy Hacking!!</p>
