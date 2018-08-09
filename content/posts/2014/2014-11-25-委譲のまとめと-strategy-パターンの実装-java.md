---
author: admin
categories:
- Java
- 技術メモ
date: 2014-11-25T13:47:00+00:00
dsq_thread_id:
- 3.695413e+09
excerpt: 委譲のまとめ
pvc_views:
- 6037
tags:
- Gof
title: 委譲のまとめと Strategy パターンの実装 (Java)
type: post
url: /archives/=2748
---

<a href="https://futurismo.biz/wp-content/uploads/java.png"><img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" /></a>

はじめに
========

委譲.

よく聞く言葉だが, 実際にどういうものか知らなかったので調べてみた.

Delegation
==========

委譲.あるオブジェクトの操作を一部他のオブジェクトに代替させる手法.

-   [委譲 - Wikipedia](https://ja.wikipedia.org/wiki/%E5%A7%94%E8%AD%B2)

特徴
----

-   委譲を行うオブジェクトは委譲先オブジェクトへの参照を持つ
-   必要に応じてその参照を切り替える事で動作にバリエーションを持たせる事ができる
-   プラグイン機構

コンポジショントデリゲーション
------------------------------

-   委譲の実現には多くの場合コンポジションを使用する.
    委譲は「目的」であり, コンポジションはその「手段」.

参考:

-   [コンポジションとデリゲーション -
    とある技術メモブログ](https://d.hatena.ne.jp/earu/20100525/1274794979)

継承との比較
------------

-   実装の観点では,
-   抽象クラスはメソッドに対する実装を含むことを許されている.
-   インタフェースはメソッドに対する実装を含むことを許されていない.

-   機能の観点では,
    -   抽象クラスはある機能の実装を強制する.
    -   インタフェースは任意の機能を混ぜ合わせる.
-   階層化の観点では,
    -   抽象クラスは物事を階層化することに優れる.
    -   インタフェースは階層を持たないものをまとめることに優れる.

### メリット

-   Java の場合継承は一クラスしかできないが, 委譲なら複数可能
-   継承なら親クラスのメソッドが全て公開されてしまうが,
    委譲なら必要なものだけ公開できる.

### デメリット

-   継承に比べてコードの記述量が多くなる.
-   継承は何も書かなければ親クラスの機能が使える.
    委譲はメソッドの呼び出しを実装しなくてはならない.

-   eclipse では, 右クリック→ソース→委譲メソッドで簡単に作成できる.
-   Ruby には delegation のライブラリがある. [Ruby で delegation (委譲)
    を簡単にする 2 つの方法 -
    Qiita](https://qiita.com/w650/items/671cc9c49b2ebf60620d)

参考:

-   [オブジェクト指向で. 継承の他に, 委譲といのが出てきますが.
    これは具... - Yahoo!
    知恵袋](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14103428069)

関連する Design Pattern
-----------------------

-   Adapter
-   Proxy
-   Facade
-   State
-   Strategy
-   ほかにもあるかな...

Strategy Pattern
================

サンプルとして, Gof デザインパターンの Strategy パターンを書いた.
参考:[Tricorn Labs » State パターンと Strategy
パターンは何が違うのか考える](https://lab.tricorn.co.jp/toda/1088)

ここでは, 戦略を別々のクラスに委譲することで, 次々に切り替えている.

動的に A が保持するオブジェクトを切り替えているので, こういう場合は,
コンポジションではなくて集約関係というのか な?? (素人の見解)

``` {.java}
public class DelegationSample {
    public static void main (String[] args) {
        A x = new A ();

        x.setHuman (new B ());
        x.greeding ();
        x.setHuman (new C ());
        x.greeding ();
    }
}

class A {
    Human a; // 集約

    void setHuman (Human x) {
        a = x;
    }

    void greeding () {
        a.greeding (); // 委譲
    }
}

interface Human {
    void greeding ();
}

class B implements Human {
    public void greeding () {
        System.out.println ("やあ");
    }
}

class C implements Human {
    public void greeding () {
        System.out.println ("オス!");
    }
}
```

Effective Java から
-------------------

p101 戦略を表現するために関数オブジェクトを使用する

-   戦略を現すインタフェースを用意
-   個々の具象戦略に関してそのインタフェースを実装しているクラスを定義.
    -   具象戦略が一度しか利用されないならば, 無名クラスで作成
    -   繰り返し利用されるならば, public static final の フィールド or
        static factory method を通じて提供.

