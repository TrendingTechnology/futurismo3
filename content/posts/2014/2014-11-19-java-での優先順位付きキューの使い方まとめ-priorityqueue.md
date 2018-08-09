---
author: admin
categories:
- Java
- 技術メモ
date: 2014-11-19T13:53:00+00:00
dsq_thread_id:
- 3.7157594e+09
excerpt: Java での優先順位付きキューの使い方まとめ (PriorityQueue)
pvc_views:
- 4407
title: Java での優先順位付きキューの使い方まとめ (PriorityQueue)
type: post
url: /archives/=2723
---

はじめに
========

優先順位付きキューのを PriorityQueue という. キューの中で最大 (最小)
のものを抜き出す場合などに利用する.

-   [優先度つきキュー -
    Wikipedia](https://ja.wikipedia.org/wiki/%E5%84%AA%E5%85%88%E5%BA%A6%E3%81%A4%E3%81%8D%E3%82%AD%E3%83%A5%E3%83%BC)

1 年前は C++ で書いた
---------------------

思いかえせば一年前, C++ で PriorityQueue の記事を書いた.

-   [C++ での優先順位付きキューの使い方まとめ (PriorityQueue) |
    Futurismo](https://futurismo.biz/archives/1981)

また, 1 年前の coursera の講義で, 自前で PriorityQueue の実装をした.

-   [Coursera Algorithms Part Ⅰを受講しました |
    Futurismo](https://futurismo.biz/archives/1834)

参考にした java コード:

-   <ftp://ftp.cs.princeton.edu/pub/cs226/bins/MinPQ.java>

    今回は, Java の使い方. こういう記事を書くと, うれしくなるね!

使い方
======

Java では, 以下のライブラリを利用する.

-   [PriorityQueue (Java Platform
    SE 6)](https://docs.oracle.com/javase/jp/6/api/java/util/PriorityQueue.html)

宣言
----

優先順位は,いかの 2 つ指定方法がある.

-   自然順位づけ
-   自分で順位をつける

デフォルトでは小さい順で 取り出される.

``` {.java}
import java.util.PriorityQueue;
```

関数
----

### 要素を追加する

``` {.java}
pq.add (1);
```

### 先頭の要素を取り出す

最大 (または最小) の先頭を取り出します.

``` {.java}
pq.poll ();
```

### 要素を調べる

``` {.java}
// キューがからかどうかを調べる
pq.isEmpty ();

// 要素数をしらべる
pq.size ();
```

Sample
======

``` {.java}
import java.util.PriorityQueue;

public class PriorityQueueSample {
    public static void main (String[] args) {

        // 宣言
        PriorityQueue pq = new PriorityQueue ();

        // 挿入
        pq.add (2);             
        pq.add (3);     
        pq.add (1);

        // 先頭の要素を取り出す
        System.out.println (pq.poll ());

        // キューがからかどうかを調べる
        System.out.println (pq.isEmpty ());     

        // 要素数をしらべる
        System.out.println (pq.size ());                                                     
    }
}
```

独自定義の順位づけ
==================

Comparator を実装し, PriorityQueue 生成時に引数で渡す.

-   [Comparator (Java Platform
    SE 6)](https://docs.oracle.com/javase/jp/6/api/java/util/Comparator.html)

``` {.java}
import java.util.PriorityQueue;
import java.util.Comparator;

public class PriorityQueueSample {
    public static void main (String[] args) {

        // 宣言
        PriorityQueue pq = new PriorityQueue (3, new MyComparator ());

        // 挿入
        pq.add (2);             
        pq.add (3);     
        pq.add (1);

        // 先頭の要素を取り出す
        System.out.println (pq.poll ());
        System.out.println (pq.poll ());
        System.out.println (pq.poll ());        
    }
}

class MyComparator implements Comparator {
    @Override
    public int compare (Object arg0, Object arg1) {
        int x = (int) arg0;
        int y = (int) arg1;

        if (x < y) {
            return 1;
        } else if (x > y) {
            return -1;
        } else{
            return 0;
        }
    }
}
```

Iterator の注意
===============

これだと, 1, 3, 2 という順番で出力される.

PriorityQueue は, 取り出すときに優先順位ごとにとりだされるので, Iterator
でまわしても, 順番どおりにならない.

``` {.java}
import java.util.PriorityQueue;

public class PriorityQueueSample {
    public static void main (String[] args) {

        PriorityQueue pq = new PriorityQueue ();

        pq.add (2);             
        pq.add (3);     
        pq.add (1);

        for (Object i: pq) {
            System.out.println (i);
        }
    }
}
```

Special Thanks
==============

-   [11. 新たに追加されたコレクション | TECHSCORE
    (テックスコア)](https://www.techscore.com/tech/Java/JavaSE/Utility/11/)
-   [java.util.PriorityQueue で取り出したデータがソートされないケース -
    日々の報告書](https://d.hatena.ne.jp/stakizawa/20070930/t1)

