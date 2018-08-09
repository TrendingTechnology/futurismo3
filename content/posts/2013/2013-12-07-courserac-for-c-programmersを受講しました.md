---
author: admin
categories:
- C++
- C言語
- 技術メモ
date: 2013-12-07T07:45:13+00:00
dsq_thread_id:
- 3.7754803e+09
excerpt: Cプログラマなので、C++を勉強するために『C++ For C Programmers』を受講しました
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 2055
side:
- "y"
tags:
- coursera
title: '[Coursera]C++ For C Programmersを受講しました'
title_view:
- "y"
type: post
url: /archives/=2020
---

<!--:ja-->

Cプログラマなので、C++を勉強するために『C++ For C Programmers』を受講しました。

  * [C++ For C Programmers | Coursera][1]

### 概要

C++の初級的な話題が紹介される。この講義でC++の基礎がマスターできる内容。Cプログラマを対象にしているため、Cとの比較やC++のここがスゴイのだという説明も出てきて、Cしかしらない自分にはこのCについての伏線が嬉しい。

また、なにかにつけてC++11の話題がガッツリ紹介されるので、C++11 For C++98 Programmersというタイトルのほうが実は適切な気がする。

オープニングにJAZZが流れて、ダンディさあふれるのIra Pohl教授が現れる。

[//www.youtube.com/embed/tph2O4qPNMg?rel=0]

話し方がカメみたいにものすごくゆっくりなので、English的な壁は大丈夫だった。スライドにカラーペンで書き込みながら説明されるので、臨場感がある。（しかし字がけっこうきたない）

### 参考書

参考書は、ネット上にある無料のものと、有料のものがある。

  * C++ by Dissection
  * C++ For C Programmers

* * *

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'>
  <div class='amazlink-list' style='clear: both;'>
    <div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'>
      <a href='https://www.amazon.co.jp/For-Programmers-Third-Edition/dp/0201395193%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D0201395193' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/41M6JR7Z4DL._SL160_.jpg' style='border: none;' /></a>
    </div>
    
    <div class='amazlink-info' style='height:160; margin-bottom: 10px'>
      <div class='amazlink-name' style='margin-bottom:10px;line-height:120%'>
        <a href='https://www.amazon.co.jp/For-Programmers-Third-Edition/dp/0201395193%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D0201395193' rel='nofollow' target='_blank'>C++ For C Programmers, Third Edition</a>
      </div>
      
      <div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>
        posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 13.11.05
      </div>
      
      <p>
        <noscript>
          <a href='https://bust-up.gob.jp'>xn--cck2b5as2b7b</a>
        </noscript>
      </p>
      
      <div class='amazlink-detail'>
        Ira Pohl
      </div>
      
      <div class='amazlink-sub-info' style='float: left;'>
        <div class='amazlink-link' style='margin-top: 5px'>
          <img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18' /><a href='https://www.amazon.co.jp/For-Programmers-Third-Edition/dp/0201395193%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D0201395193' rel='nofollow' target='_blank'>Amazon</a>
        </div>
      </div>
    </div>
  </div>
</div>

* * *

が、自分は利用しなかった。どちらかというと、副読本としては、かつて挫折した独習C++を読んでた。

### 各回の概要

#### Week1 C++ as a Better C

A言語からC言語までに至る歴史の説明。そして、C++がC言語に比べてなぜ優れているかを解説する。課題は、C言語でかかれたコードをC++に書きなおす。ここでC++独特の表記をならう。

#### week2 C++: Basics of Generics and Classes　Template

templateが出てくる。より汎用的で、再利用可能な書き方について学ぶ。課題はダイクストラ法の実装。どのへんがC　Programmerのためなのだ? モンテカルロ法やPriorityQueueを使いこなす必要があり、難しい。

#### week3 C++: Class Constructors　and Destructors

コンストラクタ、デコンストラクタの説明。または、List構造の説明。Assignmentの実装方法に関するフォローの講義も入る。

#### week4: C++: Minimum Spanning Tree & Standard Template Library

auto,継承、friend関数などなど。ここで、STLの解説とイテレータという概念が出てくる。だんだんC++ぽくなってくる。Assignmentは最小スパニングツリーをプリム法かクラスカル法で実装。

#### week5: C++ 11 Standard; Containers, Iterators and Algorithms

主にここではSTLの説明。コンテナ、イテレータ、アルゴリズムの三本柱が詳しく解説される。lambdaの使い方も紹介されるが、理解できなかった。

#### week6: Hex, the game and C++ Inheritance

後半の大きな話題である、Hex gameの説明が入る。また、重要な概念である、もここで解説。

#### Module 7: Min-Max and C++11 Classes; Alpha-beta and Polish

Copy Constactor や Move Costractorなど。またHex Gameを実装するための方法が解説される。ミニマックス法やアルファ・ベータ法など。ここで、このCourseのサムネイル画像がチェスの理由を理解した。この先生はチェスがとても好きらしい。チェスにおけるAIの実装方法なども出てくる。

後半の課題である、Hex Gameを 3weekにわたって実装する。この課題で、C++のfeatureを全部注ぎ込みなさいと言われて、けっこう頑張った。

#### Module 8: Monte Carlo Evaluation; the C++11 Standard

例外処理、スレッド処理などなど、今までで解説していないC++のfeatureももれなく紹介。また、C++中級への道として、簡単なデザインパターンが紹介される。

### おわりに

For C Programmerな部分は実はweek1だけだった気がした。グラフ理論やゲーム理論が出てきて、『いったいどのへんがFor C Programmerナンダヨ！』と全生徒が唸ったに違いない。

Cしかできない自分にとっては、まさにうってつけの授業だった。

#### Hex Game

[//www.youtube.com/embed/kNOFq7aEYUE?rel=0]
  
<!--:-->

 [1]: https://www.coursera.org/course/cplusplus4c