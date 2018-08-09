---
author: admin
categories:
- Language
date: 2015-05-27T23:23:00+00:00
dsq_thread_id:
- 3.8002714e+09
pvc_views:
- 2115
tags:
- Hello World
- MQL
title: MQL4で Hello World
type: post
url: /archives/=4010
---

システムトレードに興味を持ったので、
シミュレーションをするための言語MQLを触ってみました.

MQL4とは
========

MQLとは、MetaTrader上で プログラミングをするための専用言語.
文法は，C言語に近いという.

-   公式: [MQL4 Reference - MQL4
    Documentation](https://docs.mql4.com/index)
-   日本語:
    [MQL言語リファレンス日本語翻訳マニュアル｜メタトレーダーMQLプログラミング自動売買システム作成サイト
    メタシス・シーカー](https://www.metasys-seeker.net/MQL4_Reference_ver1/MQL4_Reference_Contents.html)

環境の準備
==========

利用するためには、MetaTraderをインストールする必要がある.
例えば以下を参考にインストール.
検索すると、たくさんのアフィリサイトが引っかかりる.

-   [１章２　今すぐＭＴ４をインストールしてみよう！｜ザイFX！が作ったメタトレーダー（MT4）入門 -
    ザイFX！×メタトレーダー（MT4）](https://zai.diamond.jp/articles/-/125971)

windows 8.1にインストール(Linuxへのインストールは文字化けしたので諦め)

Hello World
===========

以下のページそのままなのだけれども、Hello Wolldをやってみる.

-   [MQL4プログラミングの扉を開けよう |
    FX自動売買システム開発部](https://autofx100.com/2014/07/21/152907/)

新規作成 &gt; エキストパートアドバイザ
あとは、ナビにしたがってコードを生成.

OnTick() 関数のなかに以下を追加.

``` {.c}
Print("Hello, World");
```

全体のコードは以下.

    //+------------------------------------------------------------------+
    //|                                                  Hello World.mq4 |
    //|                        Copyright 2015, MetaQuotes Software Corp. |
    //|                                             https://www.mql5.com |
    //+------------------------------------------------------------------+
    #property copyright "Copyright 2015, MetaQuotes Software Corp."
    #property link      "https://www.mql5.com"
    #property version   "1.00"
    #property strict
    //+------------------------------------------------------------------+
    //| Expert initialization function                                   |
    //+------------------------------------------------------------------+
    int OnInit()
      {
    //---

    //---
       return(INIT_SUCCEEDED);
      }
    //+------------------------------------------------------------------+
    //| Expert deinitialization function                                 |
    //+------------------------------------------------------------------+
    void OnDeinit(const int reason)
      {
    //---

      }
    //+------------------------------------------------------------------+
    //| Expert tick function                                             |
    //+------------------------------------------------------------------+
    void OnTick()
      {
    //---
       Print("Hello, World");

      }
    //+------------------------------------------------------------------+

コンパイルボタンをおして、再生ボタンを押すと、 Hello,
Worldとかかれたポップアップがでてくる.

おわりに
========

この記事に触発されました...

-   [プログラミングでマネタイズしたいならシステムトレードどうよ？ -
    UXエンジニアになりたい人のブログ](https://uxlayman.hatenablog.com/entry/2014/09/04/071120)

これから頑張ります. 新しい趣味になればいいな.
今回の記事で終わりになりませんように.
