---
author: admin
categories:
- Emacs
- 日記
date: 2015-04-08T11:24:00+00:00
dsq_thread_id:
- 3.6938944e+09
pvc_views:
- 1766
title: Hackernews や Reddit で 海外の技術情報をギャンギャン収集するのだ
type: post
url: /archives/=3092
---

はじめに
========

Hackernews と Reddit で英語の技術情報を漁る方法, およびそれを Emacs
からみる方法の紹介.

\[toc\]

きっかけ
--------

社内で, 英会話のサークル活動をすることなった. 初日の今日は,
半年後の目標を英語で 1 分話した. 自分が話したことは,

**英語の技術情報を素早く収集する力をつけること**

**そのためには hackernews を毎日速読すること**

と言うわけなのだ. 今現在は,
主にはてなブックマークで話題になったものを読んでいる.
それは日本に閉じている.

海外サイトのほうが

-   ユーザ数が圧倒的におおい.
-   よりおもしろい情報だったり,
-   技術の最新情報は英語ででてくるだろう

という理由から, 海外で話題の hackernews と reddit を毎日読むことにした.

Web サイトで読む
================

reddit
------

reddit とは, 2ch のような掲示板の海外版. 最近人気が急上昇.

-   <https://www.reddit.com/>
-   [人気の出始めた英語圏版 2ch の「 reddit 」対応ブラウザまとめ | hppy
    ブログ](https://blog.hppy.net/?p=1566)

reddit は default では, いろんなキーワードをもとに情報を集めている.
以下のサイトを参考にして, 一旦すべてのキーワードを unsubscribe にする.

その後, Programming と Emacs のみを購読するように設定.

-   [How do I unsubscribe from all subreddits? :
    help](https://www.reddit.com/r/help/comments/2f13er/how_do_i_unsubscribe_from_all_subreddits/)

hackernews
----------

世界中のハッカー・ギークが読んでいるウェブサイト.
英語圏で話題になったニュースやブログ投稿が集まっていて, 日々更新される.

-   <https://news.ycombinator.com/>

最近, Hackernews で話題になった記事を翻訳するサイトも現れた.

-   [POSTD |
    プログラミングの話題を翻訳して届けるエンジニアのためのニュースメディア](https://postd.cc/)

Hackernews で話題になった記事のタイトルだけ翻訳されているものもあった.

-   [hourly POSTD |
    日刊より更新するテック系メディア](https://h.postd.cc/)

Emacs で読む
============

Emacs を利用しているひとは, なんでも Emacs ですませたいはず.
さがしてみると, Emacs で reddit や hackernews を読むための elips
があった.

-   reddit <https://github.com/death/reddit-mode>
-   hackenews <https://github.com/clarete/hackernews.el>

おわりに
========

よーし, これで準備は整った. たくさん読むぞー.
