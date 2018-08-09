---
author: admin
categories:
- MOOC
- R
- 技術メモ
date: 2015-02-28T11:12:00+00:00
dsq_thread_id:
- 3.7017702e+09
excerpt: Coursera で Reproducible Research をうけた
pvc_views:
- 1620
tags:
- coursera
- org-mode
- 統計
title: Coursera で Reproducible Research をうけた
type: post
url: /archives/=3019
---

はじめに
========

以前, org-mode と R を組み合わせたらとても気持ちがよかった.

-   [org-babel と R の組み合わせがとても心地よい件 |
    Futurismo](https://futurismo.biz/archives/2907)

そこで, もうすこし R と org-mode の可能性を知りたくて, Coursera で
Reproducible Research をうけた.

-   [Reproducible Research](https://www.coursera.org/course/repdata)

    <iframe width="560" height="315" src="https://www.youtube.com/embed/aH8dpcirW1U?rel=0" frameborder="0" allowfullscreen></iframe>

内容
====

全部で 4 週間. 動画リストが以下にある.

-   <https://www.youtube.com/playlist?list=PLjTlxb-wKvXOU4WW4p3qc4VKWTI4gLNUf>

初めの週で, Reproducible Research についての概要について語られる.

Reproducible Research という考え方の情報が少ないので,
ネットで情報を検索するよりも, 講義資料が一番役に立つ.

2,3 週目では, 実際に Reproducible Research を実践するためのツール
が紹介される. この講義では, knitr をつかう.

紹介された内容にしたがって, 課題が 2 つ出される. github, rpubs
に課題を投稿してペアレビューをする.

以下, 自分の提出した課題.

-   <https://github.com/tsu-nera/RepData_PeerAssessment1>
-   <https://rpubs.com/tsu-nera/61656>

最後の週は, Reproducible Research の実施例が紹介される. 動画は Youtube
でも見れる.

-   [The Importance of Reproducible Research in High-Throughput
    Biology - YouTube](https://www.youtube.com/watch?v=7gYIs7uYbMo)
-   [▶ Roger Peng - Reproducible Research Workshop 2011 -
    YouTube](https://www.youtube.com/watch?v=aH8dpcirW1U)

感想
====

Emacs で頑張る
--------------

講義では RStudio を利用することが求められるのだが, もともとの動機が
Emacs org-mode で Reproducible Research をしたかったので, RStudio
を頑なに拒否して, Emacs をつかった.

-   [Emacs で knitr と R markdown を使う方法 (Rmd) |
    Futurismo](https://futurismo.biz/archives/2982)
-   [RPubs に Emacs から投稿してみた (R Markdown, org-mode) |
    Futurismo](https://futurismo.biz/archives/2987)

文芸的プログラミングと R はとても相性がいい
-------------------------------------------

文芸的プログラミングと R はとても相性がいい. この件について再認識した.

-   [org-babel と R の組み合わせがとても心地よい件 |
    Futurismo](https://futurismo.biz/archives/2907)

そしてなにより, 生成されるドキュメントがとてもかっこいいところが
一番気に入った. こういう感動を忘れずにいたい.

Reproducible blog を目指して
----------------------------

再現可能性という考え方もおもしろいと思った.

Reproducible Research が注目を集める背景には, 以下のようなことがある.

-   [論文の再現性について -
    ある医療系大学長のつぼやき](https://blog.goo.ne.jp/toyodang/e/1316a8dad8d53aef57063e651b0763cb)
-   [再現性の無い研究論文を減らすにはどうすべきか |
    堀川大樹](https://www.huffingtonpost.jp/daiki-horikawa/post_5982_b_4165458.html)

自分は研究者ではないので, いまいちピンとこないのだけれども,
身近な問題に置き換えると, ネット上でみつけたコード辺を動かしてみよう
としても動かないことがままある.

もしかしたら, 動かないコードやコンパイルできないコードを,
何食わぬ顔で自分も公開しているかもしれない.

最近では, Web 上でコードを実行できるサービスも出てきた.

-   [これはすごい!3 秒でプログラミングが始められるサービス 17 選 - paiza
    開発日誌](https://paiza.hatenablog.com/entry/2014/12/04/%E3%80%90%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%AD%A6%E7%BF%92%E3%80%91%E3%81%8C%E8%B6%85%E6%8D%97%E3%82%8B%EF%BC%813%E7%A7%92%E3%81%A7%E5%AE%9F%E8%A1%8C%E7%92%B0%E5%A2%83)

このようなサービスを利用することで,

**Reproducible Blog** 再現可能なブログ

を目指そうと思った.

学習メモ
========

以下, 自分の勉強メモを

Reproducible Research とは
--------------------------

再現可能な研究. 再現可能なデータ分析.

The ultimate product of academic research is the paper along with the
full computational environment used to produce the results in the paper
such as the code, data, etc.

-   [Reproducibility - Wikipedia, the free
    encyclopedia](https://en.wikipedia.org/wiki/Reproducibility)

Computational X の X の部分にすべて適用できる考え方

-   コンピュータ心理学
-   コンピュータ生理学
-   コンピュータ生物学 ... etc.

クラシックの交響曲は様々な楽器かそれぞれのメロディーを奏でて,
一つの音楽をつくる.

テンポや曲調がまったく同じ音楽を再現することは不可能だ.
(Replication:複製は不可能)

しかし, 楽譜にしたがって演奏することで, 演奏者が違っても,
世界中のどこでも, 作曲家の示した音楽を再現させることは可能だ.
(Reproducible: 再現)

-   [再現性 -
    Wikipedia](https://ja.wikipedia.org/wiki/%E5%86%8D%E7%8F%BE%E6%80%A7)

音楽における楽譜がデータ解析におけるスクリプトとなる.

以下のメリットがある.

-   Transparency
-   Data Availability
-   Software / Methods Availability
-   Improved Transfer of Knowledge

統計解析は異常値の除去の方法によって, 得られる結果が異なることがある.
得られた結果の論拠を強くするために, 論拠となったデータを誰もが分析で
きるかたちで共有することが重要となる.また, だれもがデータを分析でき
ることで, より議論をタイムリーに生み出しやすくできる.

登場の背景
----------

技術の向上が, Reproducible Research の台頭を支えている.

-   コンピュータの計算能力が極めて向上し, 洗練された解析が可能になった.
-   既存のデータベースが "megadatabeses"にマージ可能となった.
-   データ収集のスループットが新しい技術によって向上した.

Literate (Statistical) Programming
----------------------------------

記事は `text` , `code` (chunks) からなる

-   A documantation Language (human redable)
-   P programming language (machine readable)

文芸プログラムは

-   人間が読みやすいドキュメントに `waved` される.
-   コンピュータが実行可能なドキュメントに `tangled` される.

### Research Pipeline

1.  Mesured Data
    -   Processing code
2.  Analytic Data
    -   Analytics code
3.  Computational Resuluts -&gt; Presentation code
4.  Presentation Results
    1.  Fugures
    2.  Tables
    3.  Numerical Summaries
5.  Articles

管理するファイルの分類
----------------------

-   Data
    -   Raw data: 生データ
    -   Processed data: 前処理がおわったデータ
-   Figures
    -   Exploratory figures 分析の途中でできる図.
    -   Final Figures: 最終結果の図.
-   R Code
    -   Raw scripts
    -   Final scripts
-   Text
    -   README.md
    -   R markdown

R markdown
----------

R Studio のための マークアップ言語.

-   <https://rmarkdown.rstudio.com/>

RStudio と R markdown を利用することで 簡単に Reproducible な report
が作成可能.

-   [R で reproducible
    research](https://www.slideshare.net/sfchaos/rreproducible-research-13569000)
-   [knitr+pandoc ではじめる\~『 R Markdown で Reproducible Research
    』](https://www.slideshare.net/teramonagi/tokyo-r36-20140222)
-   [Writing reproducible reports in R with markdown, knitr and pandoc -
    Nice R Code](https://nicercode.github.io/guides/reports/)

### knitr

HTML や markdown, pdf への export. R と Markdown
を利用して文芸的プログラミングをするためのツール.

-   [yihui/knitr](https://github.com/yihui/knitr)

CRAN から取得可能.

``` {.r .rundoc-block rundoc-language="R" rundoc-session="ex" rundoc-export="both" rundoc-results="code"}
install.packages ('knitr', dependencies = TRUE)
```

evidence-based data analysis
----------------------------

-   [Treading a New Path for Reproducible Research: Part 1 | Simply
    Statistics](https://simplystatistics.org/2013/08/21/treading-a-new-path-for-reproducible-research-part-1/)
-   [Treading a New Path for Reproducible Research (Part 2) | Simply
    Statistics](https://simplystatistics.org/2013/08/28/evidence-based-data-analysis-treading-a-new-path-for-reproducible-research-part-2/)

