---
author: admin
categories:
- 技術メモ
date: 2014-11-15T14:04:00+00:00
dsq_thread_id:
- 3.728208e+09
excerpt: ライブコーディングについて調べたメモ
follow:
- follow
index:
- index
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 3517
side:
- def
sub:
- def
tags:
- LiveCoding
title: プログラミングでイケイケミュージックライブ?! Live Coding について調べたまとめ
type: post
url: /archives/=2692
---

はじめに
========

coursera の講義でライブコーディング (Live Coding) というものを知った.

-   [Survey of Music Technology |
    Coursera](https://www.coursera.org/course/musictech)

正直, なんじゃこりゃ? といった不思議な世界.

日本語の情報はほとんどないのだが, 海外では有名っぽい. というわけで,
情報をまとめてみる.

Live Coding とは
================

TopLap のページから引用. ([About | TOPLAP](https://toplap.org/about/))

> "Live coding is a new direction in electronic music and video, and is
> starting to get somewhere interesting. Live coders expose and rewire
> the innards of software while it generates improvised music and/or
> visuals. All code manipulation is projected for your pleasure."

on-the-fly programming, just in time programming ともいう.

-   [Live coding - Wikipedia, the free
    encyclopedia](https://en.wikipedia.org/wiki/Live_coding)

coursera からの表現を借りると,

-   パフォーマンスとしてのアルゴリズム作曲.
    -   編集過程を聴衆に見せる.
    -   リアルタイムで編集する.

TopLap
------

Live Coding のためのコミュニティ.

-   <https://toplap.org/>

アルゴリズム作曲用プログラミング言語
====================================

TOPLAP のベージに情報がまとまっている.

-   [Software | TOPLAP](https://toplap.org/category/software/)

coursera の講義を参考にまとめてみた.

Supercollider
-------------

Smalltalk like な言語. OSS

-   [SuperCollider » SuperCollider](https://supercollider.github.io/)
-   [supercollider/supercollider ·
    GitHub](https://github.com/supercollider/supercollider)

開発盛ん.

-   [SuperCollider 基礎文法最速マスター - sc3onlinux
    の日記](https://d.hatena.ne.jp/sc3onlinux/20100206/1265449076)
-   [SuperCollider 自主練 – 基本編 | yoppa
    org](https://yoppa.org/blog/4042.html)

ChucK
-----

C - like な言語.

-   [ChucK : ](https://chuck.cs.princeton.edu/release/)
-   [Algorithmic Composition on ChucK on
    Vimeo](https://vimeo.com/2994084)

ChucK を学ぶ coursera のコース. [Introduction to Programming for
Musicians and Digital Artists |
Coursera](https://www.coursera.org/course/chuck101)

ChucK を解説した本. [Manning: Programming for Musicians and Digital
Artists](https://www.manning.com/kapur/)

Csound
------

C - like な言語. 開発は盛ん. (2014)

-   [Csound: A C-Based Audio Programming
    Language](https://www.csounds.com/)
-   [Csound github.io](https://csound.github.io/)

Impromptu
---------

Mac OS のための live coding 言語. Lisp 系の言語. Andrew Sorensen
さんがつくった.

-   [impromptu](https://impromptu.moso.com.au/)
-   [Impromptu (programming environment) - Wikipedia, the free
    encyclopedia](https://en.wikipedia.org/wiki/Impromptu_(programming_environment))

Overtone
--------

OSS の Clojure API.

A Clojure API to the SuperCollider synthesis engine.

-   [overtone/overtone](https://github.com/overtone/overtone)
-   [Overtone - Collaborative Programmable
    Music](https://overtone.github.io/)

MAX/MSP
-------

有料のソフト.

-   [Max (ソフトウェア) -
    Wikipedia](https://ja.wikipedia.org/wiki/Max_(%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2))

Pure Data
---------

オリジナルの開発者ミラー・パケットによるフリーソフトウェアプログラム.
Max/Msp の OSS 版. Pd と略す.

-   [Pure Data - Wikipedia](https://ja.wikipedia.org/wiki/Pure_Data)

動画
====

Live Coding で検索して引っかかったやつで,気になるやつを集めてみる.

TOPLAP のページに example がまとまっている.

-   [About | TOPLAP](https://toplap.org/about/)

Andrew Sorensen
---------------

Live Coding の世界で有名な人.

### Andrew Sorensen OSCON 2014 Keynote: "The Concert Programmer"

Andrew Sorensen さんの ライブコーディング.

オライリーのイベント? のなかで, 解説を交えながらのコーディング.

<iframe width="560" height="315" src="//www.youtube.com/embed/yY1FSsUV-8c?rel=0" frameborder="0" allowfullscreen></iframe>

### ComputeMusic (now): Andrew Sorensen at TEDxQUT

これも, Andrew Sorensen さんの TED 講演.

<iframe width="560" height="315" src="//www.youtube.com/embed/GSGKEy8vHqg" frameborder="0" allowfullscreen></iframe>

### A Study In Keith

<iframe width="420" height="315" src="//www.youtube.com/embed/b-8Cmd6k4_M" frameborder="0" allowfullscreen></iframe>

Overtone
--------

Clojure でのライブ.

なにかの講演.後半から実演している.

-   [Programming Music with Overtone - Sam Aaron -
    YouTube](https://www.youtube.com/watch?v=imoWGsipe4k)

### Meta-eX

Overtone を利用したミュージシャンデュオ

-   [Meta-eX - Live Coding Duo](https://meta-ex.com/)

<iframe width="560" height="315" src="//www.youtube.com/embed/bMP-7POtML0" frameborder="0" allowfullscreen></iframe>

SuperCollider
-------------

<iframe width="420" height="315" src="//www.youtube.com/embed/wNWFSIadAH8" frameborder="0" allowfullscreen></iframe>

ChucK
-----

なんか, 初心者っぽい.

<iframe width="560" height="315" src="//www.youtube.com/embed/TwkSCPvjQb8" frameborder="0" allowfullscreen></iframe>

Haskell
-------

Haskell?? の Live Coding

<iframe width="420" height="315" src="//www.youtube.com/embed/FenTeBMkAsQ" frameborder="0" allowfullscreen></iframe>

最後に
======

なんだか意味不明だが, かっこいい.

新しい世界を見た.

個人的には, Emacs 上で音楽が鳴らせる Overtune に惹かれる.
