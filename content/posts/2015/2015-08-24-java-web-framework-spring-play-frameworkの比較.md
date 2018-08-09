---
author: admin
categories:
- Java
- 技術メモ
date: 2015-08-24T10:53:00+00:00
dsq_thread_id:
- 4.0616645e+09
pvc_views:
- 4339
title: Java Web Framework, Spring & Play Frameworkの比較
type: post
url: /archives/=4660
---

Javaの Web フレームワークで有名な Spring と Play について調べてみました.

Spring
======

[Spring Framework -
Wikipedia](https://ja.wikipedia.org/wiki/Spring_Framework)

-   DIとAOP（アスペクト指向）を中核とした豊富な機能.
-   効率的に複雑なアプリケーションを作成するのに必要な機能を提供
-   ドキュメントも豊富.
-   OSSとしての歴史も長い, 実績あり.

Spring Boot
-----------

-   複雑で豊富なSpring Frameworkを結合したもの.

参考:

-   [春だから！Javaでの開発にSpring
    Bootを使おう！](https://maplesystems.co.jp/blog/all/programming/18474.html)
-   [» Spring Boot 入門 TECHSCORE
    BLOG](https://www.techscore.com/blog/2014/05/01/spring-boot-introduction/)

Play
====

[Play Framework -
Wikipedia](https://ja.wikipedia.org/wiki/Play_Framework)

-   小規模な開発に向いている.
-   導入が簡単なことや機能がシンプル.
-   Ruby on RailsとDjangoから大きな影響を受けた Scalaでかかれている.
-   Play
    Frameworkを導入したデフォルトの状態で開発に必要なツールはほとんどそろっている
-   開発スピードを重視する企業やJava以外の開発者を中心に人気.
-   Spring Frameworkと比較すると実績が少なめ.
-   生産性に注目し、RESTfulアーキテクチャを目指して開発.
-   ソースの変更時にコンパイルやサーバーの再起動が不要.
-   JSONライブラリ内臓.(jackson/jerkson).

両者の比較
==========

両者をマトリックスで比較してみた.

                 Spring    Play
  -------------- --------- ---------
  実績           2002 \~   2007 \~
  開発規模       中−大     小−中
  ドキュメント   豊富      
  コード量                 軽量
  生産性                   高い

まとめ
======

中規模開発で実績重視ならば、Spring

小規模で素早く開発をするならば、Play

といったところだろうか.

Special Thanks
==============

-   [3つのフレームワークで学ぶエンタープライズJava開発入門（1）：Strutsを使い続けることの問題点＆現在有力なJava
    EE、Spring、Play
    ...](https://www.atmarkit.co.jp/ait/articles/1507/02/news012.html)
-   [フレームワーク選択のススメ -
    yuksewの日記](https://d.hatena.ne.jp/yuksew/20130318/1363570567)
-   [Javaの常識を変えるPlay
    framework入門（1）：Java開発で泣かないためのPlay frameworkの基礎知識
    (1/3) -
    ＠IT](https://www.atmarkit.co.jp/ait/articles/1204/09/news114.html)


Javaの Web フレームワークで有名な Spring と Play について調べてみました. 

