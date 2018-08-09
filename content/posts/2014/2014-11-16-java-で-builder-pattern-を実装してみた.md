---
author: admin
categories:
- Java
- パターン
- 技術メモ
date: 2014-11-16T14:31:00+00:00
dsq_thread_id:
- 3.713185e+09
excerpt: Java で Builder Pattern を実装してみた
pvc_views:
- 3415
tags:
- Gof
title: エレガントな Effective Java の Builder Pattern を実装してみた
type: post
url: /archives/=2706
---

はじめに
========

Effective Java を読んでいたら,
エレガントなコードを見つけたので思わずメモ.

引数がおおいオブジェクトを生成するとき....
==========================================

王道は 2 つの方法がある.

テレスコーピング・コンストラクタパターン
----------------------------------------

-   コンストラクタの引数に情報を追加する方法.
-   引数が増えるたびに, 異なる型のコンストラクタの作成が必要.

``` {.java}
///////////////////////////////////////////
// テレスコーピング・コンストラクタパターン
///////////////////////////////////////////
public Hoge (int a, int b, int c, int d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}
```

JavaBeans パターン
------------------

-   コンストラクタには, 引数を与えない.
-   代わりに, setter を用意する.

``` {.java}
/////////////////////
// Javabeans パターン
/////////////////////
public Hoge () {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.d = 0;
}
public static void setA (int x) { a = x; }
public static void setB (int x) { b = x; }
public static void setC (int x) { c = x; }
public static void setD (int x) { d = x; }
```

エレガントな Builder パターン
=============================

最後に, エレガントな Builder パターン.

-   コンストラクタの引数には, Builder オブジェクトを渡す.
-   Builder オブジェクトの引数には必須の情報を渡す.
-   任意の引数には, setter を用意する.

    エレガントな行はこれ.

``` {.java}
Hoge hoge = new Builder (1,2).c (3).d (4).build ();
```

完全版のコードは以下.

``` {.java}
class BuilderSample {

    public static class Hoge {
        private static int a, b; // should be set
        private static int c, d; // optional

        /////////////////////
        // Builder パターン
        /////////////////////
        private Hoge (Builder builder) {
            a = builder.a;
            b = builder.b;
            c = builder.c;
            d = builder.d;          
        }
    }

    public static class Builder {
        private static int a, b; // should be set
        private static int c, d; // optional

        public Builder (int a, int b) {
            this.a = a;
            this.b = b;
            this.c = 0;
            this.d = 0;
        }

        public Builder c (int x) { c = x; return this; }
        public Builder d (int x) { d = x; return this; }
        public Hoge build () { return new Hoge (this); }
    }

    public static void main (String[] args) {
        Hoge hoge = new Builder (1,2).c (3).d (4).build ();
    }

}
```

Gof とは違う??
==============

最後に, Gof の Builder パターンとはすこし意味合いがことなるように,
Effective Java ではつかわれているようだ.

-   [Builder パターン -
    Wikipedia](https://ja.wikipedia.org/wiki/Builder_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3)

