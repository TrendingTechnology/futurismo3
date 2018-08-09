---
author: admin
categories:
- C++
- MOOC
- 技術メモ
date: 2014-08-29T13:24:00+00:00
dsq_thread_id:
- 3.7919613e+09
excerpt: coursera で The Hardware/Software Interface を受けた感想です
pvc_views:
- 1342
tags:
- Assembly
- coursera
title: 他人のコードに INCEPTION する!coursera で The Hardware/Software Interface を受けた
type: post
url: /archives/=2596
---

coursera で The Hardware/Software Interface を受けた感想です.

-   [The Hardware/Software Interface |
    Coursera](https://www.coursera.org/course/hwswinterface)

![](./../img/2014-08-29-211509_445x249_scrot.png)

目的
====

組込みソフトの知識を身につけるため
----------------------------------

私はいちおう組込みエンジニアなのだが, 組込みソフトの知識がない.

すごく, そのことに危機感を感じている. 組込みソフトの知識は,
実際に業務で取り組まないと身につける機会が少ない.

しかし, 仕事ではいつまで待っていても新しいプロジェクトには移動できな
い.仕事を通して知識を身につけようなんて思っていたら, 10 年経っても身
につかない気がする.

メモリ管理・プロセス管理・アセンブラ言語などなど,
このあたりの知識がほしい.

アセンブラ言語の知識を身につけるため
------------------------------------

この講座では, アセンブラ言語についても学ぶことができる.

職場でも, アセンブラ言語を利用しているという話はたまにきくので,
学んでいれば, 新しい業務にもつながることを期待.

感想
====

C 言語のことをなにもボクは知らなかった
--------------------------------------

一番感じたことは, 自分は C 言語のことについて理解したつもりになってい
たが, それはまだまだ不十分だったということだ.

たとえば, この講義では, malloc, free の原理について解説される. そして,
malloc, free を自分で実装するような課題が出される.

ヒープ領域, スタック領域がどういう役割していて,
それぞれどういうようにプログラムでは利用されているか,
自分は理解していなかった. それなのに, C 言語なんて全部わかったよ!
なんて思っていた自分が恥ずかしい.

まるでそれはインセプション!
---------------------------

課題がどれも難しく, 毎週 10 時間以上かかった. しかし, 今まで受けてきた
MOOC の課題の中ではもっともおもしろかった.

そのなかでもとくにおもしろかったのは,
バッファオーバーフローについての課題.

与えられたプログラムのセキュリティホールに対して
バッファオーバーフローアタックを仕掛けて,
まったく関係ない関数を実行したり,
さらにはセキュリティホールから自分で書いたアセンブラコードを注入し
て実行させたりする.

それはまるで, 映画"インセプション" のような興奮だ!

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'><div class='amazlink-list' style='clear: both;'><div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'><a href='https://www.amazon.co.jp/%E3%82%A4%E3%83%B3%E3%82%BB%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3-Blu-ray-%E3%83%AC%E3%82%AA%E3%83%8A%E3%83%AB%E3%83%89%E3%83%BB%E3%83%87%E3%82%A3%E3%82%AB%E3%83%97%E3%83%AA%E3%82%AA/dp/B0050ICKEQ%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB0050ICKEQ' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/5155lES7WYL._SL160_.jpg' style='border: none;' /></a></div><div class='amazlink-info' style='height:160; margin-bottom: 10px'><div class='amazlink-name' style='margin-bottom:10px;line-height:120%'><a href='https://www.amazon.co.jp/%E3%82%A4%E3%83%B3%E3%82%BB%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3-Blu-ray-%E3%83%AC%E3%82%AA%E3%83%8A%E3%83%AB%E3%83%89%E3%83%BB%E3%83%87%E3%82%A3%E3%82%AB%E3%83%97%E3%83%AA%E3%82%AA/dp/B0050ICKEQ%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB0050ICKEQ' rel='nofollow' target='_blank'>インセプション [Blu-ray]</a></div><div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 14.08.29</div><div class='amazlink-detail'></div><div class='amazlink-sub-info' style='float: left;'><div class='amazlink-link' style='margin-top: 5px'><img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18'><a href='https://www.amazon.co.jp/%E3%82%A4%E3%83%B3%E3%82%BB%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3-Blu-ray-%E3%83%AC%E3%82%AA%E3%83%8A%E3%83%AB%E3%83%89%E3%83%BB%E3%83%87%E3%82%A3%E3%82%AB%E3%83%97%E3%83%AA%E3%82%AA/dp/B0050ICKEQ%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB0050ICKEQ' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18'><a href='https://hb.afl.rakuten.co.jp/hgc/g00r9st4.n763we24.g00r9st4.n763x60a/?pc=http%3A%2F%2Fitem.rakuten.co.jp%2Fguruguru-ds2nd%2Fcwba-y26419%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Fguruguru-ds2nd%2Fi%2F10286068%2F' rel='nofollow' target='_blank'>楽天</a></div></div></div></div></div>

映画では, ディカプリオが他人の夢の中に侵入して,思い通りの記憶を埋め込む.
そして私は, 他人のプログラムのなかに侵入して,
思い通りのコードを埋め込む.

ハッカーはこの快感をもとめて悪さをするのだろう.

内容
====

シラバスからそのまま引用.

``` {.language}
Topics:
    Number representation
    Assembly language
    Basics of C
    Memory management
    Operating-system process model
    High-level machine architecture
    Memory hierarchy
    Implementation of high-level languages
```

Number representation
---------------------

ビット演算について学ぶ.

まず, 驚いたことは, if や while のような制御文は
ビット演算でかけてしまうということだ.

-   [Bit Twiddling
    Hacks](https://graphics.stanford.edu/~seander/bithacks.html)

C 言語なんて楽勝でしょと思っていたら,
しょっぱなから出鼻を折られるという..

また, コンピュータは 0 と 1 の世界で, プログラミング言語はそれを置き換
えたものに過ぎないという, 基本的なことを気づかされる.

Assembly language
-----------------

x86-64 アセンブリ言語の文法を学ぶ. 意外にネットや書籍での情報が多く,
参考になった.

-   [GNU アセンブラ入門
    (GAS)](https://www.oklab.org/program/assembler/gas.html#0)

    この本も読んだ.

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'><div class='amazlink-list' style='clear: both;'><div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'><a href='https://www.amazon.co.jp/%E6%A9%9F%E6%A2%B0%E3%81%AE%E3%82%B3%E3%83%88%E3%83%90-%E6%B8%A1%E8%BE%BA-%E5%BE%B9/dp/4839917620%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4839917620' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/51PH6QARGJL._SL160_.jpg' style='border: none;' /></a></div><div class='amazlink-info' style='height:160; margin-bottom: 10px'><div class='amazlink-name' style='margin-bottom:10px;line-height:120%'><a href='https://www.amazon.co.jp/%E6%A9%9F%E6%A2%B0%E3%81%AE%E3%82%B3%E3%83%88%E3%83%90-%E6%B8%A1%E8%BE%BA-%E5%BE%B9/dp/4839917620%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4839917620' rel='nofollow' target='_blank'>機械のコトバ</a></div><div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 14.08.29</div><div class='amazlink-detail'>渡辺 徹<br /></div><div class='amazlink-sub-info' style='float: left;'><div class='amazlink-link' style='margin-top: 5px'><img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18'><a href='https://www.amazon.co.jp/%E6%A9%9F%E6%A2%B0%E3%81%AE%E3%82%B3%E3%83%88%E3%83%90-%E6%B8%A1%E8%BE%BA-%E5%BE%B9/dp/4839917620%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4839917620' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18'><a href='https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F10285004%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D10285004%26surl%3Dbook' rel='nofollow' target='_blank'>楽天</a></div></div></div></div></div>

昔のテレビゲームは, アセンブラ言語でかかれていたときく.
こんな世界でガリガリコーディングをするなんて, すごいな.

Memory management
-----------------

メモリがどのように利用されているかのお話.

プログラムがどうやって動いているのかをアセンブラレベルで理解して,
今までなにもわかっていなかったんだと自覚. とともに,
仕組みが分かって感動.

``` {.language}
2^n-1
|---------------------|
| Stacks              | ローカル変数, プロシージャの内容
|                     |
| Dynamic Data (Heap) | new や malloc で獲得できる領域
| Static Data         | グローバル変数など.
| Literals            | 文字列
| Instructions        | プログラム. 関数
|---------------------|
0
```

Memory hierarchy
----------------

キャッシュアーキテクチャとその制御アルゴリズム, 仮想メモリについて. C
言語通じて, コンピュータアーキテクチャも学べる.

``` {.language}
| registers          |             |
| L1 Cache           | SRAM        |
| L2 Cache           | SRAM        |
| Memory             | DRAM        |
| local 2nd storage  | local disks |
| remote 2nd storage | Web Servers |
```

私は, ストレージ屋だ. (そしてもうやめたい) キャッシュ技術を学ぶと,
ストレージを支える技術というものは,
かなりの部分がキャッシュが関わっているのだと思った.

-   Disk の性能をあげるためには?
-   ホスト I/O の性能をあげるためには?

とりあえず, 特許でこまったらキャッシュを思い出す. 講義でも, CS
の世界での問題解決の常套手段が関節参照だ! と力説してた.

-   [間接参照 -
    Wikipedia](https://ja.wikipedia.org/wiki/%E9%96%93%E6%8E%A5%E5%8F%82%E7%85%A7)

これから
========

今までセキュアコーディングなんてまったく意識したことがなかった.
無知のまま脆弱性をプログラムに仕込んでしまうことは恐ろしいと思った.
もうすこし, セキュアコーディングについて学んでおこうと思った.

-   [IPA セキュア・プログラミング講座:C / C++
    言語編](https://www.ipa.go.jp/security/awareness/vendor/programmingv2/clanguage.html)

アセンブリ言語はこれ以上は深堀りしなくていいかな. . .
なんとなくだけれども, プログラムの仕組みが理解できたし,
あまりおもしろいものではないので.
