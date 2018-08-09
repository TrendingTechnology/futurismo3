---
author: admin
categories:
- MOOC
- Ruby
date: 2017-01-08T04:24:00+00:00
dsq_thread_id:
- 5.4448364e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- def
pdrp_attributionLocation:
- caption
pvc_views:
- 999
side:
- "y"
tags:
- coursera
- racket
- SML
title: coursera で Programming Languages を受けた
title_view:
- "y"
type: post
url: /archives/=6060
---

coursera で Programming Languages を受けた。

-   [Programming Languages, Part A - University of Washington |
    Coursera](https://www.coursera.org/learn/programming-languages)
-   [Programming Languages, Part B - University of Washington |
    Coursera](https://www.coursera.org/learn/programming-languages-part-b)
-   [Programming Languages, Part C - University of Washington |
    Coursera](https://www.coursera.org/learn/programming-languages-part-c)

<iframe width="560" height="315" src="https://www.youtube.com/embed/LTDmMI4VSCM" frameborder="0" allowfullscreen></iframe>

概要
====

ワシントン大学の CS のコース。3 つの言語、SML、Racket、Ruby
を通じて、プログラム言語のエッセンスを学ぶというコース。

なぜこの３つの言語かというと、以下のようなマトリックスで説明される。

                    dynamically typed   statically typed
  ----------------- ------------------- ------------------
  functinal         Racket              SML
  object-oriented   Ruby                Java/C\#/Scala

-   ML: polymorphic type, pattern-matching, abstract type & module
-   Racket: dynamic typing, "good" macro, minimalist syntax, eval
-   Ruby: classes but not typed, very OOP, mixens

つまり、関数型言語、オブジェクト指向言語、動的型付け、静的型付けを
バランスよく学ぶためにこの３つが選ばれたのだ。

講義は、関数型言語、オブジェクト指向言語、動的型付け、静的型付け
の各特徴を比較しながら、コンセプトを解説していく。

感想
====

とてもハードな内容だった。StudyPlus
で勉強時間を記録していたのだけれども、
各コースにかかった時間は以下のとおり. １５０時間くらい。

-   Part A 72h
-   Part B 33h
-   Part C 52h

Assignment の目安は 3
時間となっているけれども、とてもそんな時間ではできなかった。

A,B,C を平行して受講したので、年末年始地獄を見た。全然時間が足りない。 1
日 12-15 時間くらいこれにかかりきりだった。

Assignment も難しく、何度もカンニングした。
本当は自力でときたかったけれども、力足らず解けなかった。
しかし、Assignment の内容は骨のある楽しい内容だった。詳しくは後述。

英語力がないことを痛感。
いろいろと力説していることの意味が把握できなかった。
この一年、英語力の向上に力を入れてきたのだけれども、それでもほとんどダメ。

関数型言語、オブジェクト指向言語、動的型付け、静的型付け、それぞれの特徴や比較が
興味深かった。言語もいろいろな特徴があり、一長一短あることを知った。

Emacs をエディタとして推奨しているところがいい。Emacs Love.

Part A
======

言語は Standard-ML を使う。
なぜなら、文法がシンプルで、初学者に使いやすいからとのこと。

SML を利用して、関数型ブログラミングのエッセンスを学んでいく。

week1
-----

week1 では、プログラミングはしない。 コースの説明と、環境設定(Emacs や
SML のインストール)まで。

week2
-----

SML の基本文法を学ぶ。

-   変数宣言
-   関数宣言
-   if - then - else
-   変数のスコープと内部変数(let)

基本データ型についても学ぶ

-   Pair
-   List
-   Tuple
-   Option(これが特殊)

Assignment は日付に関する関数を作成していく問題。これは難しくなかった。

week3
-----

-   データ型(Datatypes)
-   パターンマッチ
-   例外
-   末尾再帰

パターンマッチの便利さに開眼。

Assignemnt は、文字列操作に関する関数を作成していく問題。

week4
-----

-   第一級関数
-   高階関数
-   関数クロージャ
-   無名関数
-   map,filter
-   レキシカルスコープ

week5
-----

-   type interface(型推論, ポリモーフィズム)
-   Mutual Recursion
-   modules
-   equivalence
-   Exam

Part B
======

-   言語は Racket を使う <https://racket-lang.org>
-   開発環境は、DrRacket. <https://racket-lang.org/download/>

    が、指定されているのだが、Emacs でやりたいので、 Emacs
    で環境構築をすることにした。
    -   [Emacs で Racket 開発環境を構築 |
        Futurismo](https://futurismo.biz/archives/6009)

Lisp 系の言語はいろいろ経験がある（Common Lisp ,Scheme, Emacs
Lisp,Clojure)
ので、それほど苦戦することはないだろうと思っていたが、とても苦戦した。

なにが苦戦したかというと、

week1
-----

-   Racket の文法（cons, car , cdr ... etc)
-   遅延評価
-   ストリーム
-   メモ化再帰
-   マクロ(Optional)

Assignment でやたらとストリームが出てくる。手強かった。

week2
-----

-   struct
-   インタープリタとコンパイラ
-   インタプリタの実装方法

Assignment は、MUPL という独自言語のインタプリタを Racket で書くこと。
意味が分からなすぎて泣きそうになった。

Honor Code とかもうどうでもいい（どうでもよくはないが・・）

github
にある他人のソースコードを読んで理解するのがやっとだった。（理解すらできない！）

week3
-----

-   動的型づけ言語と 静的型づけ言語の比較.
-   Exam

Part C
======

week1
-----

-   Ruby の文法
-   Duck Typing
-   Arrays, Hashs
-   block, proc
-   SubClass
-   Overriding, Dynamic Dispatch

Ruby は業務で使ったことがあるので、文法は問題なし。

assignment は テトリスのゲームの仕様拡張。
動作するコードが与えられて、継承を使って機能を追加する。
コードを読む力が試される。

と、ここでさっそくサンプルが動かない！Ruby2.3 では動かないみたい。
親切なおじさん現れて、解決用のスクリプトを公開してくれていた。

-   <https://gist.github.com/squiter/c8d336b2c0b006f80024e3bc9bc56a65>

week2
-----

-   Function Decomposition
-   Double dispatch
-   Multiple Inheritance
-   Mixins
-   Interfaces

Assignment は SML(FP)でかかれたコードを Ruby(OOP)にポートする。

week3
-----

-   Subtyping
-   Final Exam

サブタイピングにについては、意味不明だった。

日本語情報もほとんどないから理解は諦めた。

最後に
======

今回、初めて MOOC にお金を払ってコースを受講した。
なぜなら、現在休職しているのだが復職の条件の一つがプログラミングの勉強をすることだからだ。
なので、certification
があれば、プログラミングの勉強をしたという証明になると思った。

普段は途中で諦めてもいいやと思って受講していたけれども、お金を払うとやる気がでるね。

取得した cartification は以下。

-   PartA:
    <https://www.coursera.org/account/accomplishments/certificate/KB24LCCEPQL6>
-   PartB;
    <https://www.coursera.org/account/accomplishments/certificate/ZQJJNSZT74H2>
-   PartC:
    <https://www.coursera.org/account/accomplishments/certificate/CTXKUYXKDVC7>
