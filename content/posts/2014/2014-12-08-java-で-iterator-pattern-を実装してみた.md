---
author: admin
categories:
- Java
- パターン
- 技術メモ
date: 2014-12-08T13:52:00+00:00
dsq_thread_id:
- 3.7308946e+09
excerpt: Java で Iterator Pattern を実装してみた
pvc_views:
- 2380
tags:
- Gof
title: Java で Iterator Pattern を実装してみた
type: post
url: /archives/=2798
---

<a href="https://futurismo.biz/wp-content/uploads/java.png"><img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" /></a>

はじめに
========

最近, Gof のデザインパターンをすべて記事にしようと考えている.

そんなわけで, 今日は Iterator パターン. あまりに基本すぎて,
記事にするほどではないがするが...

Iterator パターンとは
=====================

オブジェクトの集合 (データ構造, コンテナ) があるとき,
その集合の内部構造はカプセル化したままで,
要素に対して順にアクセスする方法を提供する.

-   [イテレータ -
    Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%86%E3%83%AC%E3%83%BC%E3%82%BF)
-   [Iterator パターン -
    Wikipedia](https://ja.wikipedia.org/wiki/Iterator_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3)

コンテナオブジェクトの要素を列挙する手段を独立させることによって,
コンテナの内部仕様に依存しない反復子を提供することを目的とする.

言語でサポートしていることがおおい. 拡張 for 文, for-each
文などと呼ばれる.

自前で実装するよりも, 言語に頼るほうがよい.

Java
====

Collection フレームワークでは, 反復子が利用できる.

``` {.java}
List<Integer> list = LinkedList<Integer>
for (int i; list) {
System.out.println (i);
}
```

Iterator インタフェースを実装することで,
自前のクラスにイテレータを適用できる.

-   [Iterator (Java Platform
    SE 6)](https://docs.oracle.com/javase/jp/6/api/java/util/Iterator.html)

Iterator interface を実装する.
==============================

Iterator interface を実装した.

``` {.java}
import java.util.Iterator;

public class IteratorSample {
    public static void main (String args[]) {
        myList list = new myList (1, new myList (2, new myList (3, null)));

        while (list.hasNext ()) {
            list.show ();
            list = list.next ();
        } 
        list.show ();
    }
}

class myList implements Iterator {
    myList next;
    int value;

    public myList (int value, myList next) {
        this.value = value;
        this.next = next;
    }

    @Override
    public boolean hasNext () {
        return (next != null);
    }

    @Override
    public myList next () {
        return next;
    }

    @Override
    public void remove () {
        // nop
    }

    public void show () {
        System.out.println (value);
    }
}
```

自前で hasNext, next メソッドを用意するよりも, Iterator interface
を実装したほうが, 通に思われるというメリットがある.

関数型 Iterator パターン
========================

関数型 Iterator パターンみたいなものを考えた. というよりも List の実装.

-   while を利用するのではなくて, 再帰を利用する.

``` {.java}
import java.util.Iterator;

public class IteratorSample2 {
    public static void main (String args[]) {
        myList list = new myList (1, new myList (2, new myList (3, null)));
        whileLoop (list);
    }

    static void whileLoop (myList list) {
        list.show ();
        if (!list.hasNext ())
            return;
        else { 
            whileLoop (list.next ());
        }
    }
}

class myList implements Iterator<myList> {
    myList next;
    int value;

    public myList (int value, myList next) {
        this.value = value;
        this.next = next;
    }

    @Override
    public boolean hasNext () {
        return (next != null);
    }

    @Override
    public myList next () {
        return next;
    }

    @Override
    public void remove () {
        // nop
    }

    public void show () {
        System.out.println (value);
    }
}
```

なんか, 再帰のほうがいいな.おそまつさまでした.
