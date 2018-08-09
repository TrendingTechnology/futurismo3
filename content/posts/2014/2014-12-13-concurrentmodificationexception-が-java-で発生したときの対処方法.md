---
author: admin
categories:
- Java
- 技術メモ
date: 2014-12-12T15:59:00+00:00
dsq_thread_id:
- 3.7297935e+09
excerpt: ConcurrentModificationException が Java で発生したときの対処方法
pvc_views:
- 17296
title: ConcurrentModificationException が Java で発生したときの対処方法
type: post
url: /archives/=2811
---

<a href="https://futurismo.biz/wp-content/uploads/java.png"><img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" /></a>

はじめに
========

ConcurrentModificationException が Java で発生したときの対処方法.

以下のようなコードを実行すると, 例外発生.

``` {.java}
import java.util.Set;
import java.util.HashSet;

public class ConcurrentModification {
    public static void main (String[] args) {
        Set<Integer> set = new HashSet<Integer>();
        for (int i = 0; i < 5; i++)
            set.add (i);

        for (Integer i: set) {
            if (i == 3) {
                set.remove (i);
            }
        }
    }
}
```

``` {.bash}
Exception in thread "main" java.util.ConcurrentModificationException
   at java.util.HashMap$HashIterator.nextEntry (HashMap.java:922)
   at java.util.HashMap$KeyIterator.next (HashMap.java:956)
   at ConcurrentModification.main (ConcurrentModification.java:10)
```

原因は, iterater で for 文を回している時に, 要素を削除しようとしたから.

-   [ConcurrentModificationException (Java Platform
    SE 6)](https://e-class.center.yuge.ac.jp/jdk_docs/ja/api/java/util/ConcurrentModificationException.html)

回避方法
========

その 1: イテレータを利用しない
------------------------------

イテレータなんてつかってかっこつけているのが悪い. Index で for
文をまわす

``` {.java}
for (int i=0; i < set.size (); i++) {
    if (i == 3) {
        set.remove (i);
    }
}
```

その 2 Concurrent ライブラリを利用する
--------------------------------------

ConcurrentHashMap を利用する. ただし, ConcurrentHashSet
はない...以下のように対応

``` {.java}
Set<Integer> set = Collections.newSetFromMap (new ConcurrentHashMap<Integer, Boolean>());
```

その 3 コレクションをコピーして回す
-----------------------------------

すこし冗長か?

``` {.java}
Set<Integer> set = new HashSet<Integer>();
for (int i = 0; i < 5; i++)
    set.add (i);

Set<Integer> set2 = new HashSet<Integer>();
set2.addAll (set);

for (Integer i: set2) {
    if (i == 3) {
        set.remove (i);
    }
}
```

おわりに
========

やりかたはいろいろある. 1 がいいかな...

BookMark
========

-   [How to Avoid ConcurrentModificationException when using an Iterator
    | Java Code
    Geeks](https://www.javacodegeeks.com/2011/05/avoid-concurrentmodificationexception.html)
-   [java - Why there is no ConcurrentHashSet against
    ConcurrentHashMap - Stack
    Overflow](https://stackoverflow.com/questions/6992608/why-there-is-no-concurrenthashset-against-concurrenthashmap)

