---
author: admin
categories:
- Java
- 技術メモ
date: 2014-12-29T14:17:00+00:00
dsq_thread_id:
- 3.723899e+09
excerpt: Java で 高階関数の map と filter を実装してみた
pvc_views:
- 1757
title: Java で 高階関数の map と filter を実装してみた
type: post
url: /archives/=2855
---

<a href="https://futurismo.biz/wp-content/uploads/java.png"><img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" /></a>

はじめに
========

Java 6 で 関数型言語のような map, filter を実装してみた.

結論としては, 結構めんどうだったのてやるべきではないということだった.

Environment
-----------

-   Java 6 (8 ではない)

実装方針
========

関数型言語の原則にそうように実装する.

-   クロージャは 無名クラスで実装
-   高階関数は, クロージャとリストを引数にとって,
    新しいリストを生成して返すように実装 (immutable).

実装
====

map
---

``` {.java .rundoc-block rundoc-language="java" rundoc-classname="FunctionalMap" rundoc-results="raw"}
import java.util.List;
import java.util.ArrayList;

public class FunctionalMap {
    public static void main (String args[]) {
        List<Integer> xs = java.util.Arrays.asList (1,2,3,4,5);
        MyFunc<Integer> f = new MyFunc<Integer>() {
                public Integer evaluate (Integer x) { return x + 1; }
            };
        Functor<Integer> functor = new Functor<Integer>();

        List<Integer> ys = functor.map (f, xs);

        for (Integer y : ys){ System.out.print (y.toString () + " "); }
    }
}

class Functor<T> {
    public List<T> map (MyFunc<T> f, List<T> xs) {
        ArrayList<T> list = new ArrayList<T>();
        for (T x : xs) { list.add (f.evaluate (x)); }
        return list;
    }
}

interface MyFunc <T> {
    public T evaluate (T x);
}
```

### results

``` {.text}
2 3 4 5 6 
```

filter
------

``` {.java .rundoc-block rundoc-language="java" rundoc-classname="FunctionalMap" rundoc-results="raw"}
import java.util.List;
import java.util.ArrayList;

public class FunctionalMap {
    public static void main (String args[]) {
        List<Integer> xs = java.util.Arrays.asList (1,2,3,4,5);
        MyFilter<Integer> g = new MyFilter<Integer>() {
                public boolean evaluate (Integer x) { return x % 2 == 0; }
            };

        Functor<Integer> functor = new Functor<Integer>();

        List<Integer> zs = functor.filter (g, xs);      

        for (Integer z : zs){ System.out.print (z.toString () + " "); }     
    }
}

class Functor<T> {
    public List<T> filter (MyFilter<T> f, List<T> xs) {
        ArrayList<T> list = new ArrayList<T>();
        for (T x : xs) {
            if (f.evaluate (x))
                list.add (x);
        }
        return list;
    }
}

interface MyFilter <T> {
    public boolean evaluate (T x);
}
```

### results

``` {.text}
2 4 
```
