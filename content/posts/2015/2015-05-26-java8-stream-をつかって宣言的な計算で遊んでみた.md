---
author: admin
categories:
- Java
date: 2015-05-26T10:18:00+00:00
dsq_thread_id:
- 3.7944092e+09
pvc_views:
- 2943
tags:
- FP
title: Java8 Stream をつかって宣言的な計算で遊んでみた
type: post
url: /archives/=3987
---

<a href="https://futurismo.biz/wp-content/uploads/java.png"><img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" /></a>

関数型の書き方に早く慣れ親しみたいので、 **Java
による関数型プログラミング** を買ってみました.

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'><div class='amazlink-list' style='clear: both;'><div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'><a href='https://www.amazon.co.jp/Java%E3%81%AB%E3%82%88%E3%82%8B%E9%96%A2%E6%95%B0%E5%9E%8B%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E2%80%95Java-8%E3%83%A9%E3%83%A0%E3%83%80%E5%BC%8F%E3%81%A8Stream-Venkat-Subramaniam/dp/4873117046%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4873117046' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/41aZ-lQtWmL._SL160_.jpg' style='border: none;' /></a></div><div class='amazlink-info' style='height:160; margin-bottom: 10px'><div class='amazlink-name' style='margin-bottom:10px;line-height:120%'><a href='https://www.amazon.co.jp/Java%E3%81%AB%E3%82%88%E3%82%8B%E9%96%A2%E6%95%B0%E5%9E%8B%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E2%80%95Java-8%E3%83%A9%E3%83%A0%E3%83%80%E5%BC%8F%E3%81%A8Stream-Venkat-Subramaniam/dp/4873117046%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4873117046' rel='nofollow' target='_blank'>Java による関数型プログラミング — Java 8 ラムダ式と Stream</a></div><div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 15.05.26</div><div class='amazlink-detail'>Venkat Subramaniam<br /></div><div class='amazlink-sub-info' style='float: left;'><div class='amazlink-link' style='margin-top: 5px'><img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18'><a href='https://www.amazon.co.jp/Java%E3%81%AB%E3%82%88%E3%82%8B%E9%96%A2%E6%95%B0%E5%9E%8B%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E2%80%95Java-8%E3%83%A9%E3%83%A0%E3%83%80%E5%BC%8F%E3%81%A8Stream-Venkat-Subramaniam/dp/4873117046%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4873117046' rel='nofollow' target='_blank'>Amazon</a></div></div></div></div></div>

今日は、 簡単な演算を stream
で実施するとどうやるかをいろいろ実験してみました.

forEach
=======

forEach は 各ストリーム要素に大してなんらかの操作をすることができる.

表示
----

print 表示してみる.

``` {.java}
import java.util.*;

class StreamSample {
    public static void main(String args[]) {
        List<Integer> list = Arrays.<Integer>asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        list.stream().forEach(i -> System.out.print(i + " "));
    }       
}
// 1 2 3 4 5 6 7 8 9 10 
```

reduce
======

集合から単一の値を求める.

すべての合計を求める
--------------------

sum()と average()などによる集計の機能は Stream には用意されていない.
mapToInt()をつかうことで、Integer 型を int 型に変換する.

``` {.java}
int sum = list.stream()
         .mapToInt(x -> x)
     .sum();
System.out.println(sum);
```

最大値を求める
--------------

``` {.java}
int max = list.stream()
    .mapToInt(x -> x)
    .max()
    .orElse(0);
System.out.println(max);
```

すべての積を求める
------------------

とくに、専用メソッドはないようだ. reduce メソッドで実装する.

``` {.java}
int multiple = list.stream()
    .mapToInt(x -> x)           
    .reduce(1, (a, b) -> a * b);
System.out.println(multiple);       
```

filter
======

filter を用いることで、if 文相当のことができる.

``` {.java}
// 奇数のみの足し算
int sum2 = list.stream()
    .mapToInt(x -> x)
    .filter(i -> i % 2 == 1)        
    .sum();
System.out.println(sum2);
```

おわりに
========

以上、簡単に書籍を参考にしながらコードを動かしてみた.

java で関数型プログラミングを学ぶと、
慣れ親しんだ言語ということでとっつきやすい.

しかし、関数型ならば Java じゃなくて Scala とか、
本格的な言語で学んだほうがよいのではないかというジレンマもある.

当初の目論見では、TopCoder
の問題を関数型で書き直して学ぼうとおもったけれども、 TopCoder
の問題は思った以上に配列を多用しているため、ちときつい.

おそらく、Java で 関数型を学ぶとすると、 仕事で Java8
以降の開発に携わることができたときかな。
今の職場じゃ絶望的...早くコイコイ関数型の時代.

Special Thanks
==============

-   [Java Stream メモ(Hishidama's Java8 Stream
    Memo)](https://www.ne.jp/asahi/hishidama/home/tech/java/stream.html)
-   [java.util.stream (Java Platform SE 8
    )](https://docs.oracle.com/javase/jp/8/api/java/util/stream/package-summary.html)
-   [Java 8 の新機能をエレガントに使いたい | mono
    の開発ブログ](https://blog.monoweb.info/blog/2015/04/29/java-stream/)
-   [Stream API にチャレンジ！ - Java EE
    事始め！](https://masatoshitada.hatenadiary.jp/entry/2014/10/06/201202)
-   [java8 - コレクションを強化した Stream -
    Qiita](https://qiita.com/pepepe/items/337134b4fccbfee83a2d#)
-   [Java SE 8 のストリーム API
    の正しい使い方──ラムダ式とともに導入された新 API
    で、並列処理の実装はどう変わるのか？ - page2 - builder by ZDNet
    Japan](https://builder.japan.zdnet.com/sp_oracle/weblogic/35056789/2/)

<p style="font-size:32px">以上、Happy Hacking!!</p>


