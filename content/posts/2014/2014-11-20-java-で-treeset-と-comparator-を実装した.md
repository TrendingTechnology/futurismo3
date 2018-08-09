---
author: admin
categories:
- Java
- 技術メモ
date: 2014-11-19T15:15:00+00:00
dsq_thread_id:
- 3.7298301e+09
excerpt: Java で TreeSet と Comparator を実装した
pvc_views:
- 17607
title: Java で TreeSet と Comparator を実装した
type: post
url: /archives/=2725
---

はじめに
========

Java で, 順序づけをした集合をイテレーティブに処理したい.

ちなみに, PriorityQueue では, 実現できなかった...

-   [Java での優先順位付きキューの使い方まとめ (PriorityQueue) |
    Futurismo](https://futurismo.biz/archives/2723)

TreeSet
=======

SortedSet, TreeSet を利用する.

-   [TreeSet (Java Platform
    SE 6)](https://docs.oracle.com/javase/jp/6/api/java/util/TreeSet.html)
-   [SortedSet (Java Platform
    SE 6)](https://docs.oracle.com/javase/jp/6/api/java/util/SortedSet.html)

SortedSet はインタフェース, TreeSet は クラスという違いがある.

Comparator
==========

順序をつけるために java.util.Comparator インタフェースを利用する.
これは,コレクションの順序づけをおこなうための比較関数,compare をもつ.

-   [Comparator (Java Platform
    SE 6)](https://docs.oracle.com/javase/jp/6/api/java/util/Comparator.html)

以下の記事が詳しい.

-   [3. Set (2) | TECHSCORE
    (テックスコア)](https://www.techscore.com/tech/Java/JavaSE/Utility/3-2/)

具体例
======

優先度をもつ以下のようなオブジェクトを TreeSet に格納することを考える.

``` {.java}
class MyClass {
    private char a;
    private int priority;

    public MyClass (char a, int priority) {
        this.a = a;
        this.priority = priority;
    }

    public int getPriority () {
        return priority;
    }

    public String toString () {
        return "char: " + a + " priority: " + priority;
    }
}
```

まずは, Comparator を作成する.

``` {.java}
import java.util.Comparator;

class MyComparator implements Comparator {
    @Override
    public int compare (Object arg0, Object arg1) {
        MyClass x = (MyClass) arg0;
        MyClass y = (MyClass) arg1;

        int xp = x.getPriority ();
        int yp = y.getPriority ();      

        if (xp < yp) {
            return 1;
        } else if (xp > yp) {
            return -1;
        } else{
            return 0;
        }
    }
}
```

最後に TreeSet の実装.

``` {.java}
import java.util.TreeSet;

public class SortedSetSample {
    public static void main (String[] args) {
        MyClass A = new MyClass ('a', 3);       
        MyClass B = new MyClass ('b', 1);
        MyClass C = new MyClass ('c', 2);

        TreeSet<MyClass> set = new TreeSet<MyClass>(new MyComparator ());

        set.add (A);
        set.add (B);
        set.add (C);

        for (MyClass obj: set) {
            System.out.println (obj);
        }
    }
}
```

実行結果
--------

``` {.language}
char: a priority: 3
char: c priority: 2
char: b priority: 1
```

Full Code
---------

``` {.java}
import java.util.Comparator;
import java.util.TreeSet;

public class SortedSetSample {
    public static void main (String[] args) {
        MyClass A = new MyClass ('a', 3);       
        MyClass B = new MyClass ('b', 1);
        MyClass C = new MyClass ('c', 2);

        TreeSet<MyClass> set = new TreeSet<MyClass>(new MyComparator ());

        set.add (A);
        set.add (B);
        set.add (C);

        for (MyClass obj: set) {
            System.out.println (obj);
        }
    }
}

class MyComparator implements Comparator {
    @Override
    public int compare (Object arg0, Object arg1) {
        MyClass x = (MyClass) arg0;
        MyClass y = (MyClass) arg1;

        int xp = x.getPriority ();
        int yp = y.getPriority ();      

        if (xp < yp) {
            return 1;
        } else if (xp > yp) {
            return -1;
        } else{
            return 0;
        }
    }
}

class MyClass {
    private char a;
    private int priority;

    public MyClass (char a, int priority) {
        this.a = a;
        this.priority = priority;
    }

    public int getPriority () {
        return priority;
    }

    public String toString () {
        return "char: " + a + " priority: " + priority;
    }
}
```

Special Thanks
==============

-   [3. Set (3) | TECHSCORE
    (テックスコア)](https://www.techscore.com/tech/Java/JavaSE/Utility/3-3/)

