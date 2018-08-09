---
author: admin
categories:
- MOOC
- R
- 技術メモ
date: 2015-03-27T12:27:00+00:00
dsq_thread_id:
- 3.6936668e+09
pvc_views:
- 1859
tags:
- coursera
- 統計
title: 鮮やかにデータを可視化する! coursera で Exploratory Data Analysis を受けた
type: post
url: /archives/=3069
---

はじめに
========

R を利用してグラフを書く方法を学ぶために, coursera で Exploratory Data
Analysis を受けた.

-   [Exploratory Data Analysis - Johns Hopkins University |
    Coursera](https://www.coursera.org/course/exdata)

<iframe width="560" height="315" src="https://www.youtube.com/embed/bdTYrogKYxE?rel=0" frameborder="0" allowfullscreen></iframe>

\[toc\]

R を利用してグラフを書く方を学べる内容
======================================

この講座は, 探索的データ解析を学ぶ講座. 探索的データ解析とは,
未知の関係性を **データの可視化** によって探る方法.

といっても, 前半は グラフの書き方を学ぶ.

3 つの代表的なライブラリが紹介される.

-   Base: "artist's palette" model
-   Lattice: Entire plot specified by one function; conditioning
-   ggplot2: Mixes elements of Base and Lattice

後半は, クラスタ分析を扱う. これもデータを可視化することで,
データの関係性を調べる方法.

Exploratory Data Analysis:
--------------------------

未知の関係性を見つけることが目的.

-   [S-PLUS: EDA](https://www.msi.co.jp/splus/products/eda.html)

可視化することで関係性を見つける.

-   To understand data properties
-   To find patterns in data
-   To suggest modeling strategies
-   To "debug" analyses

基本的な手法

-   Five-number summary
-   Histograms
-   Density plot (Scatter Plot)
-   Boxplots (for Numerical Data, ヒゲ)
-   Barplot (for categorical Data)

感想
====

部内意識調査アンケート
----------------------

この講座をとったのは, 職場でアンケート調査をする機会があったから.
これは, 学んだ統計的手法を生かす絶好の機会だと思った.

集計したデータをまとめて可視化するスキルの取得か急務だったので,
取り組んだ. こういう, 目的があるときは知識の吸収がはかどる ( \^ω\^ )

-   [リッカート法によるアンケートの相関分析を R でする方法のメモ |
    Futurismo](https://futurismo.biz/archives/3048)

今まで, R に標準搭載されていた base package で グラフの描写を
していたのだが, ggplot2 の qplot をつかうことで良さげなグラフがかける
ことに喜んだ. 参考書には, 以下を利用した.

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'><div class='amazlink-list' style='clear: both;'><div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'><a href='https://www.amazon.co.jp/R%E3%82%B0%E3%83%A9%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%82%B9%E3%82%AF%E3%83%83%E3%82%AF%E3%83%96%E3%83%83%E3%82%AF-%E2%80%95ggplot2%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B0%E3%83%A9%E3%83%95%E4%BD%9C%E6%88%90%E3%81%AE%E3%83%AC%E3%82%B7%E3%83%94%E9%9B%86-Winston-Chang/dp/4873116538%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4873116538' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/51S2-F8zkRL._SL160_.jpg' style='border: none;' /></a></div><div class='amazlink-info' style='height:160; margin-bottom: 10px'><div class='amazlink-name' style='margin-bottom:10px;line-height:120%'><a href='https://www.amazon.co.jp/R%E3%82%B0%E3%83%A9%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%82%B9%E3%82%AF%E3%83%83%E3%82%AF%E3%83%96%E3%83%83%E3%82%AF-%E2%80%95ggplot2%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B0%E3%83%A9%E3%83%95%E4%BD%9C%E6%88%90%E3%81%AE%E3%83%AC%E3%82%B7%E3%83%94%E9%9B%86-Winston-Chang/dp/4873116538%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4873116538' rel='nofollow' target='_blank'>R グラフィックスクックブック -ggplot2 によるグラフ作成のレシピ集</a></div><div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 15.03.27</div><div class='amazlink-detail'>Winston Chang<br /></div><div class='amazlink-sub-info' style='float: left;'><div class='amazlink-link' style='margin-top: 5px'><img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18'><a href='https://www.amazon.co.jp/R%E3%82%B0%E3%83%A9%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%82%B9%E3%82%AF%E3%83%83%E3%82%AF%E3%83%96%E3%83%83%E3%82%AF-%E2%80%95ggplot2%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B0%E3%83%A9%E3%83%95%E4%BD%9C%E6%88%90%E3%81%AE%E3%83%AC%E3%82%B7%E3%83%94%E9%9B%86-Winston-Chang/dp/4873116538%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4873116538' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18'><a href='https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12584967%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D12584967%26surl%3Dbook' rel='nofollow' target='_blank'>楽天</a></div></div></div></div></div>

しかし, Excel に嫉妬...
-----------------------

R でグラフを書くには, スクリプトで設定を指定する必要があるので,
使いこなすまでに時間がかかる. なにを指定すれば, どんな図が生成され
るのか, いまいちわからない. 試行錯誤しながらも, なんども試しつつ,
ようやく一つのグラフをプロットできる. そんな繰り返しだ.

アンケート結果をなんとか R をつかって棒グラフで可視化してみた. しかし,
すでに同僚が Excel をつかって帯グラフと折れ線グラフを
ちゃちゃっと作成していた...

これには, ショックを受けた. 自分は, 結構苦労して R でグラフ
をかけるようになるまでにけっこう時間がかかった. しかし, Excel つかえば,
だれでも簡単に, それなりのグラフが作成できてしまうのだ.

Excel すごいと思うとともに, 嫉妬...

もしかしたら, 本格的なデータ解析をする場合以外は, R は必要ないのかも
しれない.普通の一般人は, R をつかうよりも Excel を利用するほうが,
学習対効果においてよいのではないかと思う.

CLI と GUI
----------

しかし, 自分はすでに中途半端に R を学んでしまった. こうなったら, い
くところまでいこう. Excel にはもう戻れない, 戻らない!!

R と Excel の関係は, CLI と GUI の関係と同じ.

CLI は身につけるまでは苦労するが, 一旦身につければ GUi よりも高い
生産性が出せると信じている.
