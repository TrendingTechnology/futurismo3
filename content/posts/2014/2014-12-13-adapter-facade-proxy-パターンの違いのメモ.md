---
author: admin
categories:
- Java
- パターン
- 技術メモ
date: 2014-12-13T03:54:00+00:00
dsq_thread_id:
- 3.734226e+09
excerpt: Adapter Pattern と Facade Pattern の違いのメモ
pvc_views:
- 4421
tags:
- Gof
title: Adapter, Facade, Proxy パターンの違いのメモ
type: post
url: /archives/=2813
---

はじめに
========

Gof のデザインパターンで **Adapter**, **Facade**, **Proxy** があり,
違いがわからなかったので, 整理してみた.

まずは定義から
==============

Adapter
-------

インタフェースを変換することにより, インタフェースに互換性がない
クラス同士を接続する.

-   [Adapter パターン -
    Wikipedia](https://ja.wikipedia.org/wiki/Adapter_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3)

既存のクラスに対して修正を加えることなく,
インタフェースを変更することができる.

継承を利用する場合と委譲を利用する場合がある.

Facade
------

複数のクラス群からなるサブシステムにアクセスするための,
インタフェースを提供する.

-   [Facade パターン -
    Wikipedia](https://ja.wikipedia.org/wiki/Facade_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3)

異なるサブシステムを単純な操作だけを持った Facade クラスで結び,
サブシステム間の独立性を高める事を目的とする.

facade とは, 正面という意味.

Proxy
-----

オブジェクトへのアクセスをフックするための代理オブジェクトを提供する.

-   [Proxy パターン -
    Wikipedia](https://ja.wikipedia.org/wiki/Proxy_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3)

Proxy は英語で代理人.

ラッパー
========

ラッパーという概念がある.

-   [ラッパーとは 【 wrapper 】 〔 ラッパ 〕 - 意味/ 解説/ 説明/ 定義 :
    IT 用語辞典](https://e-words.jp/w/E383A9E38383E38391E383BC.html)

あるクラスや関数, データ型などが提供する機能やデータを含み,
別の形で提供するもののこと.

どれもラッパーと言える.

オブジェクト思考のこころより
============================

オブジェクト思考のこころという本に, Adapter と Facade の比較表がある.

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'><div class='amazlink-list' style='clear: both;'><div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'><a href='https://www.amazon.co.jp/%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%81%AE%E3%81%93%E3%81%93%E3%82%8D-SOFTWARE-PATTERNS-SERIES-%E3%82%A2%E3%83%A9%E3%83%B3%E3%83%BB%E3%82%B7%E3%83%A3%E3%83%AD%E3%82%A6%E3%82%A7%E3%82%A4/dp/4621066048%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4621066048' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/510uRnu%2BbYL._SL160_.jpg' style='border: none;' /></a></div><div class='amazlink-info' style='height:160; margin-bottom: 10px'><div class='amazlink-name' style='margin-bottom:10px;line-height:120%'><a href='https://www.amazon.co.jp/%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%81%AE%E3%81%93%E3%81%93%E3%82%8D-SOFTWARE-PATTERNS-SERIES-%E3%82%A2%E3%83%A9%E3%83%B3%E3%83%BB%E3%82%B7%E3%83%A3%E3%83%AD%E3%82%A6%E3%82%A7%E3%82%A4/dp/4621066048%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4621066048' rel='nofollow' target='_blank'>オブジェクト指向のこころ (SOFTWARE PATTERNS SERIES)</a></div><div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 14.12.13</div><div class='amazlink-detail'>アラン・シャロウェイ<br /></div><div class='amazlink-sub-info' style='float: left;'><div class='amazlink-link' style='margin-top: 5px'><img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18'><a href='https://www.amazon.co.jp/%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%81%AE%E3%81%93%E3%81%93%E3%82%8D-SOFTWARE-PATTERNS-SERIES-%E3%82%A2%E3%83%A9%E3%83%B3%E3%83%BB%E3%82%B7%E3%83%A3%E3%83%AD%E3%82%A6%E3%82%A7%E3%82%A4/dp/4621066048%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4621066048' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18'><a href='https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12699390%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D12699390%26surl%3Dbook' rel='nofollow' target='_blank'>楽天</a></div></div></div></div></div>

以下, Proxy パターンも交えて整理すると,

-   Facade はインタフェースを簡素化する
-   Adapter は既存インタフェースを他のインタフェースに変換する
-   Proxy はインタフェースを変更せずに機能追加する.

                                                        Facade   Adapter   Proxy
  ----------------------------------------------------- -------- --------- -------
  既存クラスがある?                                     ○        ○         ○
  インタフェースを再設計する?                           ×        ○         ×
  ボリモーフィズムによるオブジェクトの振る舞いが必要?   ×        ○         ×
  より簡素なインタフェースが必要?                       ○        ×         ×

コードでの例
============

``` {.java}
class Target {
    void printInt (int i) {
        System.out.println (i);
    }

    void printLong (long l) {
        System.out.println (l);
    }
}

class Adapter {
    Target target;
    Adapter (Target target) {
        this.target = target;
    }

    void printInt (Integer i) {
        target.printInt (i);
    }

    void printLong (Long l) {
        target.printLong (l);
    }

}

class Facade {
    Target target;
    Facade (Target target) {
        this.target = target;
    }

    void print (long l) {
        target.printLong (l);
    }
}

class Proxy {
    Target target;
    int intCount = 0;
    int intCache= 0;
    long longCount = 0;
    long longCache = 0; 

    Proxy (Target target) {
        this.target = target;
    }

    void printInt (Integer i) {
        target.printInt (i);
        intCount++;
        intCache = i;
    }

    void printLong (Long l) {
        target.printLong (l);
        longCount++;
        longCache = l;
    }
}
```
