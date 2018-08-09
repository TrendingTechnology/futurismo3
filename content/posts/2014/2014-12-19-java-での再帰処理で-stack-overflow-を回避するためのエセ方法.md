---
author: admin
categories:
- Java
- 技術メモ
date: 2014-12-18T15:44:00+00:00
dsq_thread_id:
- 3.723894e+09
excerpt: 再帰関数呼び出しで StackOverflow の回避 Java
pvc_views:
- 4045
title: Java での再帰処理で Stack Overflow を回避するためのエセ方法
type: post
url: /archives/=2835
---

<a href="https://futurismo.biz/wp-content/uploads/java.png"><img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" /></a>

はじめに
========

最近, haskell の勉強をしている関係上, Java でも再帰が使いたい.

しかし, Java で 再帰処理を書くと, いつか必ず StackOverflowError がでて
プログラムが強制終了してしまう.

回避方法がないものか, 調べてみた.

検証
====

コード
------

``` {.java}
public class RecursiveSample {
    public static void main (String args[]) {
        recursiveProcedure (1);
    }

    static void recursiveProcedure (int i) {
        try {
            System.out.println (i);
            recursiveProcedure (i+1);
        }
        catch (Throwable e) {
      System.out.println ("Error " + e.getMessage ());
      e.printStackTrace ();
        }
    }
}
```

実行結果
--------

``` {.java}
9917
9918
9919Error null
java.lang.StackOverflowError
at java.util.concurrent.locks.AbstractOwnableSynchronizer.<init>(AbstractOwnableSynchronizer.java:59)
at java.util.concurrent.locks.AbstractQueuedSynchronizer.<init>(AbstractQueuedSynchronizer.java:299)
at java.util.concurrent.locks.ReentrantLock$Sync.<init>(ReentrantLock.java:119)
at java.util.concurrent.locks.ReentrantLock$NonfairSync.<init>(ReentrantLock.java:203)
at java.util.concurrent.locks.ReentrantLock.<init>(ReentrantLock.java:262)
at java.util.concurrent.ConcurrentHashMap$Segment.<init>(ConcurrentHashMap.java:425)
at java.util.concurrent.ConcurrentHashMap.ensureSegment (ConcurrentHashMap.java:749)
at java.util.concurrent.ConcurrentHashMap.putIfAbsent (ConcurrentHashMap.java:1149)
at java.lang.ClassLoader.getClassLoadingLock (ClassLoader.java:464)
at java.lang.ClassLoader.loadClass (ClassLoader.java:405)
at java.lang.ClassLoader.loadClass (ClassLoader.java:412)
at sun.misc.Launcher$AppClassLoader.loadClass (Launcher.java:308)
at java.lang.ClassLoader.loadClass (ClassLoader.java:358)
at RecursiveSample.recursiveProcedure (RecursiveSample.java:9)
at RecursiveSample.recursiveProcedure (RecursiveSample.java:9)
at RecursiveSample.recursiveProcedure (RecursiveSample.java:9)
```

所感
----

あちゃー.

再帰階層に上限をつけてみる
==========================

問題は, 深すぎる再帰呼び出しにある. ある程度深くなったら,
一旦関数呼び出しから戻って, 再会してみる.

コード
------

``` {.java}
  public class RecursiveSample {
    static int recursiveMax;
    static int recursiveCount;

    public static void main (String args[]) {

        try {
            while (true) {
                    recursiveMax += 10000;
                    recursiveCount = recursiveProcedure2 (recursiveCount);
            }
        } catch (RecursiveEnd e) {
            System.out.println ("End");
        }

    }

    static int recursiveProcedure2 (int recursiveCount) throws RecursiveEnd {
        if (recursiveCount == 50000) throw new RecursiveEnd ();

        if (recursiveCount < recursiveMax) {
            System.out.println (recursiveCount);
            return recursiveProcedure2 (recursiveCount+1);
        }
        else {
            return recursiveCount;
        }
    }
}

class RecursiveEnd extends Exception {
}
```

所感
----

loop を結局つかっていて, かっこわるい... でも一応再帰も使えている.

終了条件にマッチしたら例外を発生させて,
コンテキストから飛び出すところがミソ.
