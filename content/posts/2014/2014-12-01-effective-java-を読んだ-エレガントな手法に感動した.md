---
author: admin
categories:
- Java
- 技術メモ
- 書評
date: 2014-12-01T14:04:00+00:00
dsq_thread_id:
- 3.729572e+09
excerpt: Effective Java の感想
pvc_views:
- 4329
title: Effective Java を読んだ.エレガントな手法に感動した.
type: post
url: /archives/=2774
---

はじめに
========

仕事で Java をつかうようになった.

<blockquote class="twitter-tweet" lang="ja"><p>来週から悪名だかき Javaer になる. <a href="https://t.co/pfdExrE3nG">pic.twitter.com/pfdExrE3nG</a></p>&mdash; きつね (@tsu_nera) <a href="https://twitter.com/tsu_nera/status/533456855264006144">2014, 11 月 15</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

といっても, まだ 8 時間くらいしかプログラミングしてないんだけど・・・.

ここ一か月, 怒涛のようにブログの記事を書いているけれども, そのほとんどが
Java に関する記事だ.

たとえば...

-   [Java のユーティリティクラスはシングルトンパターン/
    フライウェイトパターンで実装する |
    Futurismo](https://futurismo.biz/archives/2709)
-   [Java のリフレクションでインスタンスやメソッドを動的生成する |
    Futurismo](https://futurismo.biz/archives/2715)
-   [委譲のまとめと Strategy パターンの実装 (Java) |
    Futurismo](https://futurismo.biz/archives/2748)
-   [エレガントな Effective Java の Builder Pattern を実装してみた |
    Futurismo](https://futurismo.biz/archives/2706)
-   [Java でのジェネリックスの使い方まとめ |
    Futurismo](https://futurismo.biz/archives/2750)
-   [Effective Java にのっている エレガントな Enum の使い方メモ |
    Futurismo](https://futurismo.biz/archives/2768)

それは, 元ネタはほとんど Effective Java だったりする.

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'><div class='amazlink-list' style='clear: both;'><div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'><a href='https://www.amazon.co.jp/EFFECTIVE-JAVA-%E7%AC%AC2%E7%89%88-Java-Series/dp/4621066056%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4621066056' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/51lEBnUjJqL._SL160_.jpg' style='border: none;' /></a></div><div class='amazlink-info' style='height:160; margin-bottom: 10px'><div class='amazlink-name' style='margin-bottom:10px;line-height:120%'><a href='https://www.amazon.co.jp/EFFECTIVE-JAVA-%E7%AC%AC2%E7%89%88-Java-Series/dp/4621066056%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4621066056' rel='nofollow' target='_blank'>EFFECTIVE JAVA 第 2 版 (The Java Series)</a></div><div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 14.12.01</div><div class='amazlink-detail'>Joshua Bloch<br /></div><div class='amazlink-sub-info' style='float: left;'><div class='amazlink-link' style='margin-top: 5px'><img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18'><a href='https://www.amazon.co.jp/EFFECTIVE-JAVA-%E7%AC%AC2%E7%89%88-Java-Series/dp/4621066056%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4621066056' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18'><a href='https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12699391%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D12699391%26surl%3Dbook' rel='nofollow' target='_blank'>楽天</a></div></div></div></div></div>

2 週間ちかくかかったけれども, ようやく読みきったので感想を書く.

内容の紹介
==========

紹介といっても, あまりに有名な本なので紹介するまでもないかも..

Java をつかうプログラマ必読の書

と, よくネットで見かける.自分も, この誘い文句に惹かれて本を手に取った.

第 2 版 は Java 6 の仕様にそって, Java を使う上での有効なテクニックが 78
項目, 順に紹介されていく.

題名のとおり, Effective な Java 文法の使い方のカタログ. よいとされる
Java の書き方が, なぜそうするべきなのか説明される.

-   第 2 章 オブジェクトの生成と消滅 (項目 1 〜 項目 7)
-   第 3 章 すべてのオブジェクトに共通のメソッド (項目 8 〜 項目 12)
-   第 4 章 クラスとインタフェース (項目 13 〜項目 22)
-   第 5 章 ジェネリックス (項目 23 〜 29)
-   第 6 章 enum とアノテーション (項目 30 〜 項目 37)
-   第 7 章 メソッド (項目 38 〜 項目 44)
-   第 8 章 プログラミング一般 (項目 45 〜 項目 56)
-   第 9 章 例外 (項目 57 〜 項目 65)
-   第 10 章 並行性 (項目 66 〜 項目 73)
-   第 11 章 シリアライズ (項目 74 〜 項目 78)

順番に読む必要はないので,
目次をみて気になったところからつまみ読みできる.

感想
====

Elegant java
------------

まず, この本に乗っている手法はとてもエレガントだ.

関心して, かつ興奮することが毎日体験できる. 思わず写経して,
記事にしてしまうほど, 感動するのだ!

どんな風に感動したかは, 過去記事に譲る.

-   [エレガントな Effective Java の Builder Pattern を実装してみた |
    Futurismo](https://futurismo.biz/archives/2706)
-   [Effective Java にのっている エレガントな Enum の使い方メモ |
    Futurismo](https://futurismo.biz/archives/2768)

Elegant Java というタイトルでも十分通用する.

あたりまえのようにデザインパターンがでてくる
--------------------------------------------

オブジェクト指向言語における,
美しいパターンが各ページにちりばめられている.

Gof のデザインパターンというものが,
オブジェクト指向でよく利用されるパターンのカタログならば, Effective
な手法と Gof のパターンがかぶってしまうことは当たり前.

出てきたものを, 思いつくままに抜粋.

-   ファクトリーメソッド 項目 1
-   ビルダー 項目 2
-   シングルトン 項目 3
-   デコレータ 項目 16
-   ブリッジ 項目 18
-   ストラテジ 項目 21
-   アダプタ 項目 22
-   オブザーバ 項目 67
-   フライウェイト 項目 71

継承をやたら敵対視
------------------

とくに印象的だったのが, 以下の章だ.

-   第 4 章 クラスとインタフェース (項目 13 〜項目 22)
-   第 6 章 enum とアノテーション (項目 30 〜 項目 37)

Enum は別記事に譲るとして,
ここではインタフェースについてのコメントを抜粋.

-   継承よりもコンポジションを選ぶ 継承は不必要なメソッドを公開する.
    つまり, 継承はカプセル化を破る.

-   継承をつかうならば設計を文書化する, でなければ禁止だ.

-   抽象クラスよりもインタフェースを選ぶ 実装の観点では,
    -   抽象クラスはメソッドに対する実装を含むことを許されている.
    -   インタフェースはメソッドに対する実装を含むことを許されていない.

    機能の観点では,
    -   抽象クラスはある機能の実装を強制する.
    -   インタフェースは任意の機能を混ぜ合わせる.

    階層化の観点では,
    -   抽象クラスは物事を階層化することに優れる.
    -   インタフェースは階層を持たないものをまとめることに優れる.

-   インタフェースは, 階層を持たない型システムを構築する.

おわりに
========

とてもよい読後感だ.

いいエンディングの映画をみたように,
ここに掲載されている手法の美しさに心を打たれた.

各項目が細かく分類されているのもよい. Java での実装に困ったとき,
折に触れて読み返そうと思った.

BookMarks
=========

-   [『 Effective Java 第 2
    版』正誤表](https://www001.upp.so-net.ne.jp/yshibata/myhomepage/errata/ej2eerrata.html)
-   Effective Java のソース:
    [marhan/effective-java-examples](https://github.com/marhan/effective-java-examples)
-   [Effective Java のまとめのまとめ -
    Qiita](https://qiita.com/disc99/items/ccdcbe797b077dd0c54d)
-   [『 Effective Java 第 2 版』の電子版 (PDF) が発売になりました:柴田
    芳樹 (Yoshiki Shibata):So-net
    ブログ](https://yshibata.blog.so-net.ne.jp/2014-10-04)

