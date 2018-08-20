---
title: 技術ブログの表示速度が激増したぞ！8.11の修正に対する調査とPRPL Patternについて
description: ブログの表示速度が激増してしまったので、いろいろ調べました。調査結果をまとめました。
date: 2018-08-21 04:55:57
author: tsu-nera
type: post
tags:
- GatsbyJS
- blog
- PRPL
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1533617837/futurismo/thumbnails/blog-writing.jpg
---

当ブログの表示速度が激増してしまった。

ううっ・・・、爆速がウリの技術ブログを目指していたのに、ふんふんふん。

なんとか改善しようと、この数日間は速度改善に取り組んでいた。
本記事は、その速度改善の調査結果です。

## 簡単な要約

8/11にページの表示速度が4倍になっていることに気がづきました。

![google-analytics-slowdown-graph](https://res.cloudinary.com/tsu-nera/image/upload/v1534795625/google-analytics-180811-slowdown.png)

パフォーマンスが落ちたのは、ページサイズが4倍になっていたからだと推測しました。

git commit履歴を元に、8/11に入れた修正を抜いていくことにしました。

サイズは元通りになったものの、それでも遅い。トレースをよくみてみると、GatsbyJSではPRPLパターンというものを採用しているようで、ページの先読みが動いていることに気づきました。これが、Document Completeが遅くなる原因。

## サイズの削減

まず、表示速度に影響を与えるものとして真っ先に思いついたのは、ページのサイズでした。

計測したところ、8.17は次のとおり。

- 要求回数: 100
- ページ・サイズ:  2300KB

一方、8.10は次のとおり。

- 要求回数: 65
- ページサイズ: 900KB

サイズが倍になっちょるよ！commit履歴から、8.11に入れた修正を片端から抜いていく。

- twitterのツィート埋込み(widget.js)の廃止
- Google Web フォントの廃止
- Font Awesome iconの廃止
- AddThisサービスの廃止

主に外部から取得するJavaScriptが悪影響を与えていた模様。これによって、サイズはもとに戻りました。

## PRPL Pattern

それでもまだ遅い。トレースをよくみてみます。

![gatsby-prpl-pattern](https://res.cloudinary.com/tsu-nera/image/upload/v1534796955/gatsby-prpl-pattern-0821.png)

青の線が、Document Complete、ロード完了の指標。トレースをみると、次の点に気づきます。

- まずHTMLが送信される(0-0.7)
- HTMLの送信がおわると、JSが複数に分かれて送信される(0.7-1.5)
- なぞの第2波が2.4秒あたりから送信されている。

この謎の第2波は、トップページからリンクされているページのようです。え？先読み？

ここでGatsbyJSの仕組みについて、視点を変えて調べてみると、次の記事を見つけました。

- [Why is Gatsby so Fast? The PRPL Pattern\. \| Mike Herchel](https://herchel.com/2018-01-10-why-is-gatsby-fast-prpl/)

なぜ゛、GatsbyJSは高速なのか？それはPRPLだからだ！ PRPLとは、Push, Render, Pre-cache, Lazy-loadの略。

> Because each page is pre-downloaded, when the end user clicks a link, the next page is rendered instantly. There’s no performance penalty for pre-downloading the pages because this happens in the background after your page is rendered.

つまり、リンク先をバックグラウンドで先読みしているということ。これだ！

- まずHTMLが送信(Push)
- HTMLの送信がおわると、JSが複数に分かれて送信される(Render??)
- リンク先を先読み(pre-Cache)
- リンク先をクリックすると、先読みしたデータを詠み込む(Lazy-load)

ということで、Document Completeしていなくても、実は表示は完了していたのだった。

## PRPL の指標は？

じゃあ、Document Completeの代わりに、なにを指標にして速度改善をしていけばいいの？

こんな記事を見つけた。

- [Thinking PRPL \- A Progressive Web Pattern](https://houssein.me/thinking-prpl)

First Meaningful Paintと、Time to Interactiveが使えそうとのこと。

> First Meaningful Paint: The time it takes the user to see meaningful content on their device.
> Time to Interactive (TTI): The time it takes for the JavaScript thread to settle and the user can interact with the application.


## おわりに

速度改善に取り組もうと思って、Document Completeを1秒以内に収めようと思ったのだけれども、
それはGatsbyJSではあまり意味がないようだ。

First Meaningful Paintも TTIも、
既存のサイトスピードを評価するサイトでどのMetrixにあたるのかよくわからない。
なにを信じて改善をすればいいのか分からなくなっちゃった。とりあえず、速度改善はここでやめます。
