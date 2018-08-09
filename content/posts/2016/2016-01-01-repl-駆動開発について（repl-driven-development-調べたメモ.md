---
author: admin
categories:
- TDD
- 技術メモ
date: 2015-12-31T22:46:00+00:00
dsq_thread_id:
- 4.451396e+09
pvc_views:
- 3942
title: REPL 駆動開発について（REPL Driven Development) 調べたメモ
type: post
url: /archives/=5717
---

REPL と REPL 駆動開発について調べたメモです.

REPL とは
=========

Read-Eval-Print-Loop の略. 読んで、評価して、表示するを繰り返す.

-   [Read – eval – print loop - Wikipedia, the free
    encyclopedia](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)

対話的に開発するためのツール.

素早いフィードバックを得ることで、頭に浮かんだ考えを即実行できる!!

インタラクティブシェルとの違いがよくわからなかった. Lisp 系の言語で REPL
という用語が利用され, スクリプト言語で
インタラクティブシェルという用語が利用される??

-   [インタラクティブシェル -
    Wiki](https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%A9%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96%E3%82%B7%E3%82%A7%E3%83%AB)
-   [programming languages - Difference between a REPL and interactive
    shell -
    Pro...](https://programmers.stackexchange.com/questions/168285/difference-between-a-repl-and-interactive-shell)

各言語のサポート状況
--------------------

スクリプト言語は大体できる.

-   Ruby ... irb, pry
-   Python ... iPhthon
-   Perl ... perl -de 1

Lisp 系言語はもちろんできる.

-   Clojure .. lein repl
-   Scheme
-   Common Lisp

コンパイラ系言語でもサポートしようという取り組みがある.

-   Scala ... sbt console
-   java ... <https://github.com/albertlatacz/java-repl>
-   C++ ... <https://github.com/vgvassilev/cling>

REPL Driven Development
=======================

Repl によって開発を駆動する方法. 以下 RDD. 具体的には、 エディタと Repl
を両側にならべて、以下のプロセスを繰り返す.

1.  実装(S 式)を書いてみる
2.  実装を 即座に Repl に読み込ませて評価
3.  結果を確認しその実装が正しいことを確認する

[この](https://blog.jayfields.com/2014/01/repl-driven-development.html)
記事によると、以下の 3 点から開放されることで、
開発に集中することができるとのこと.

1.  restarting the application ... アプリケーションの再起動
2.  running something other than the application to verify behavior ...
    振る舞いの確認のためにアプリケーション以外を起動すること
3.  moving out of the source to execute arbitrary code...
    任意のコードを実行するためにソースから離れること.

たとえば C\#の場合は、アプリを止めて
リビルドして、アプリを再起動するというサイクルが入るが、
このサイクルはとても時間がかかり受け入れがたい. REPL
は瞬時にフィードバックが得られる.

RDD は TDD と組み合わせることもできる. テストを書くよりもより素早く
フィードバッグを得られることが RDD の TDD に対するメリットだ. RDD
の結果から, REPL の出力ずく pritty print をコピペすることで TDD
のテストケースを書くことで、 リグレッションテストのメリットを享受できる.

資料
====

日本語
------

RDD 解説したスライド.

<script async class="speakerdeck-embed" data-id="ab05517deef749d28503b199e3f48cc2" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>
たいへん丁寧な解説。参考になる.

> つまり、プログラムを作りながら、横で REPL を起動しておき、
> その関数をロード（またはリロード）して実際に使ってみて、
> さらに修正して、使ってみて、ということができる、ということです。

-   [REPL Driven Programming - tyano's Tech
    Log](https://tyano.shelfinc.com/post/48110396231/repl-driven-programming)

REPL 駆動開発を体験することができる.

> Clojure は他の言語とは違ってファイルをベースに開発しません。 基本的に
> REPL の上に全てあるので、それを最大限に活かして開発出来るのが Clojure
> の利点であり他の言語に対するひとつの優位性でしょう

-   [Column: REPL 駆動開発を取り入れて Ring でもう少し遊んでみる —
    Clojure
    の日本語ガイド](https://ayato-p.github.io/clojure-beginner/intro_web_development/column_rdd_and_more_ring.html)

英語
----

-   [Jay Fields' Thoughts: REPL Driven
    Development](https://blog.jayfields.com/2014/01/repl-driven-development.html)
-   [A Workflow: TDD, RDD and
    DDD](https://eigenhombre.com/clojure/2014/07/20/a-worfklow-tdd-rdd-and-ddd/)
-   [REPL-driven development is wonderful. I&\#x27;m not a Clojure user
    (yet), but ...](https://news.ycombinator.com/item?id=8074646)

REPL で評価した結果をコピペで TDD の期待値としてつかえば、
期待値を用意するのが楽。REPL
の結果からテストが自動できればいいねという話.

-   [REPL Driven Development and Testing in Clojure |
    davidtanzer.net](https://davidtanzer.net/rdd_and_tests)

<blockquote class="twitter-tweet" lang="ja"><p lang="en" dir="ltr">with current technology, REPL-driven development is significantly faster than test-driven development <a href="https://twitter.com/hashtag/clojure?src=hash">#clojure</a></p>&mdash; stuarthalloway (@stuarthalloway) <a href="https://twitter.com/stuarthalloway/status/604307306818363392">2015, 5 月 29</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
所感
====

なにも REPL 駆動開発なんて、名前をつけるまでもなく、
つくったコードを動かして結果を確認するということは、当たり前のことだ. C
言語をはじめて勉強したときも、書いて、コンパイルして、実行をしていた.

REPL
駆動開発は、このフィードバッグを得るスピードが普通よりも抜群に速いことで、
開発により集中出きるのではと感じた. Emacs で C-x C-e をすることで、
Clojure や Emacs Lisp
コードを評価して結果をパッと得られることは、快感でもある.

RDD は TDD と比較されることが多い. TDD
はテストコードを書くのに、またメンテナンスすることに時間がかかることが問題視されることが多い.
TDD は費用対効果を考えてやらなければならないというのが今の持論.

-   [CleanCode はよいわけではない、場合によっては悪いこと |
    Futurismo](https://futurismo.biz/archives/2412)
-   [TDD is Dead!! Long living testing!! 014-04-24 -
    やっとむでぽん](https://d.hatena.ne.jp/yach/20140424)

とくにプロトタイプなどは品質よりは速く成果をあげることが大事.そこで、RDD
である.
先日ハッカーと画家を読んだが、そこでも速くアイデアを形にすることがハッカー気質だと学んだ.

-   [あなたはハッカーですか？ハッカーと画家から学ぶハッカー気質について。
    | Futurismo](https://futurismo.biz/archives/5692)

より素早くフィードバッグを回してガンガンつくることに相性が良い.

REPL
駆動開発は、素早くプロトタイプや自分の考えを形にするときに有効な手段だと感じた.
