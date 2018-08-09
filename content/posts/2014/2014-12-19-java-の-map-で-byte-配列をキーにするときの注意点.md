---
author: admin
categories:
- Java
- 技術メモ
date: 2014-12-19T12:18:00+00:00
dsq_thread_id:
- 3.7318758e+09
excerpt: Java の Map で byte 配列をキーにするときの注意点
pvc_views:
- 3787
title: Java の Map で byte 配列をキーにするときの注意点
type: post
url: /archives/=2837
---

<a href="https://futurismo.biz/wp-content/uploads/java.png"><img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" /></a>

はじめに
========

Java で HashMap のキーに byte\[\] 配列を利用したら, key を put しても
containsKey で key がないよといわれてしまった.

``` {.java}
static void testbyteMap () {
    Map<byte[], Integer> map = new HashMap<byte[], Integer>();
    byte[] key = {1,2,3};
    byte[] key2 = {4,5,6};
    byte[] key3 = {1,2,3};

    map.put (key,1);
    map.put (key2,2);

    System.out.println (map.containsKey (key));
    System.out.println (map.containsKey (key2));
    System.out.println (map.containsKey (key3));
}
```

結果
----

``` {.java}
true
true
false
```

調査
====

どうも配列を入れても, うまく検出できないようだ.

同一オブジェクトだと, 大丈夫だが, 値が同じでも違うオブジェクトだとだめ.

``` {.java}
static void testIntMap () {
    Map<int[], Integer> map = new HashMap<int[], Integer>();
    int[] key = {1,2,3};
    int[] key2 = {4,5,6};;
    int[] key3 = {1,2,3};;

    map.put (key,1);
    map.put (key2,2);

    System.out.println (map.containsKey (key));
    System.out.println (map.containsKey (key2));
    System.out.println (map.containsKey (key3));
}
```

解決策
======

原因は, byte\[\] が 大小比較できないから.

-   [Using a byte array as HashMap key (Java) - Stack
    Overflow](https://stackoverflow.com/questions/1058149/using-a-byte-array-as-hashmap-key-java)

Stack Overflow によると

-   byte\[\] を String に変換
-   byte\[\] をを List&lt;Byte&gt;に変換
-   equals と hashmap を実装した ラッパーデータ型を作成

String 変換を試す
-----------------

一番お手軽なのは, String 変換か?

``` {.java}
static void testStringMap () throws UnsupportedEncodingException {
    Map<String, Integer> map = new HashMap<String, Integer>();
    byte[] key = {1,2,3};
    byte[] key2 = {4,5,6};
    byte[] key3 = {1,2,3};

    String keyStr = new String (key, "UTF-8");
    String keyStr2 = new String (key2, "UTF-8");
    String keyStr3 = new String (key3, "UTF-8");        

    map.put (keyStr,1);
    map.put (keyStr2,2);

    System.out.println (map.containsKey (keyStr));
    System.out.println (map.containsKey (keyStr2));
    System.out.println (map.containsKey (keyStr3));
}

static void testStringMap2 () throws UnsupportedEncodingException {
    Map<String, Integer> map = new HashMap<String, Integer>();
    byte[] key = {1,2,3};
    byte[] key2 = {4,5,6};
    byte[] key3 = {1,2,3};

    String keyStr = Arrays.toString (key);
    String keyStr2 = Arrays.toString (key2);
    String keyStr3 = Arrays.toString (key3);        

    map.put (keyStr,1);
    map.put (keyStr2,2);

    System.out.println (map.containsKey (keyStr));
    System.out.println (map.containsKey (keyStr2));
    System.out.println (map.containsKey (keyStr3));
}
```

結果
----

これで OK.

``` {.java}
true
true
true
```

Special Thanks
==============

-   [Using a byte array as HashMap key (Java) - Stack
    Overflow](https://stackoverflow.com/questions/1058149/using-a-byte-array-as-hashmap-key-java)
-   [byte array as HashMap key? | Coding
    Forums](https://www.thecodingforums.com/threads/byte-array-as-hashmap-key.141717/)
-   [Java で String と byte 配列のとの相互変換 -
    Java](https://www.syboos.jp/java/doc/byte-string.html)

