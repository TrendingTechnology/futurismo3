---
author: admin
categories:
- C++
- 日記
date: 2013-07-21T07:39:33+00:00
dsq_thread_id:
- 3.7279857e+09
excerpt: |
  <!--:ja-->Codeforcesに初参戦しました！

  Codeforcesの参加方法や参加してみた感想をカンタンに記録します。<!--:--><!--:en-->I tried Codeforces for the first time<!--:-->
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 5073
tags:
- Codeforces
title: Codeforcesに初参戦しました！参加方法と感想について
type: post
url: /archives/=1685
---

<!--:ja-->

Codeforcesに初参戦しました。

[toc]

### Codeforcesってなに

いわゆる、プログラミングコンテスト。以下の特徴があります。

  * 2時間で5題問題を解く
  * ロシア発祥
  * 月に2、3度の頻度で開かれる
  * 利用できる言語が豊富</p> 
      * GNU C++ 4
      * GNU C 4
      * MS VS C++ 2005
      * Free Pascal 2
      * Delphi 7
      * C# Mono 2.6
      * Java 6
      * Ruby 1.9
      * Python 2.7
      * PHP 5.3
      * Haskell GHC 6.12
      * F# 2.0
      * OCaml
      * Scala

### コンテストに参加するまで

#### Codeforcesの登録方法

まずは、Webページにアクセス

  * <a href="https://codeforces.com/enter" target="_blank">Login &#8211; Codeforces</a>

Gmailアカウントがあれば、それで認証して終了。わぁ、登録カンタン。

#### コンテストへの参加方法

コンテストが近くなると、トップページに開催案内がでる。クリックして登録完了。わぁ、登録カンタン。

### コンテストに参加してみて

問題文は、すべてWebで公開されています。こんな感じ。

[<img src="https://lh4.googleusercontent.com/-7Fys89uFSLo/UeuIVAhw0fI/AAAAAAAAAtk/S-Z4bl2B538/s400/SnapCrab_NoName_2013-7-20_22-45-38_No-00.png" height="214" width="400" />][1]

テスト画面でコーディングします。エディタがあり、ここでコードを作成します。Inputを与えて、「Run」を押して、テストを実施。Outputを確認します。

[<img src="https://lh4.googleusercontent.com/-ATiqrJ9FVzI/UeuIUIAoeAI/AAAAAAAAAtc/tqYbo_fsQQE/s400/SnapCrab_NoName_2013-7-20_22-45-21_No-00.png" height="199" width="400" />][2]

解答が完成したら、SUBMITタブを選択。解答を提出します。

![][3]

### 標準入力、標準出力の扱い方について

初め、この入力と出力が意味不明だった。データが扱えないので、なにもできない！

Inputは標準入力, Outputは 標準出力なので、まずはこれを変数に格納することに一苦労。

#### C++ での Inputの扱い方

C++では、cinを使って、Inputを変数に格納します。

たとえば、Inputが

    1 2
    

のときは、

    cin >> a >> b;
    

のようにすると、値が変数に格納できます。スペースで区切られたものを、それぞれの変数に格納します。

cinは一回で1行を読みこむので、複数行にまたがるときは、cinを何度も書いて読みこむ。

#### C++ での Outputの扱い方。

coutを使って、標準出力に書き出します。

たとえば、rsltをOutputに書き出す場合は、

    cout << rslt << endl;
    

### 当日の感想

問題のInputとOutputの扱い方がわからずに、それだけで30分おわってしまった。

エディタからの解答作成はちょっと面倒だっだ。TopCoderのようにEclipseのPluginがあればいいのたけれども、ないみたい。

関数の型も、テストも自分で考えるので、TopCoderよりも不親切にも感じた。

#### 当日解いた問題

これは、システムテストで落とされました。。。初参戦にして、惨敗。。。(ノД｀)

Codeforces Round #192 (Div. 2) A

  * <a href="https://codeforces.com/problemset/problem/330/A" target="_blank">Problem &#8211; 330A &#8211; Codeforces</a>

[gist id=6045503]
  
<!--:-->

<!--:en-->

I tried Codeforces for the first time

[toc]

### What is Codeforces

It&#8217;s so called &#8220;Programming Contests&#8221;。 Special feature are follows.

  * Solve 5 problems within 2 houres 
  * Russia origin
  * held three or four times per month
  * Lot&#8217;s of Langages supports 
      * GNU C++ 4
      * GNU C 4
      * MS VS C++ 2005
      * Free Pascal 2
      * Delphi 7
      * C# Mono 2.6
      * Java 6
      * Ruby 1.9
      * Python 2.7
      * PHP 5.3
      * Haskell GHC 6.12
      * F# 2.0
      * OCaml
      * Scala

### How to Enter Cotests

#### How to register Codeforces 

At first access to the url

  * <a href="https://codeforces.com/enter" target="_blank">Login &#8211; Codeforces</a>

If you have a google account, authenticate with that。Wah, it&#8217;s easy.

#### How to Enter Contest 

If the contest day comming, there shows a　notice at the top page. Just click and is over. Wah, it&#8217;s easy

### Start Contest!

You can see plobrems at the web, like that

[<img src="https://lh4.googleusercontent.com/-7Fys89uFSLo/UeuIVAhw0fI/AAAAAAAAAtk/S-Z4bl2B538/s400/SnapCrab_NoName_2013-7-20_22-45-38_No-00.png" height="214" width="400" />][1]

Coding at test view. there is an editor, and you can make there. Give input date、 push the &#8220;Run&#8221; to run the test. Check the output

[<img src="https://lh4.googleusercontent.com/-ATiqrJ9FVzI/UeuIUIAoeAI/AAAAAAAAAtc/tqYbo_fsQQE/s400/SnapCrab_NoName_2013-7-20_22-45-21_No-00.png" height="199" width="400" />][2]

If your answer complete, move to SUBMIT tab, then submit your answer.

![][3]

### How to handle standard input and standard output

At first, I can&#8217;t understand this input and output。I can&#8217;t handle input and can&#8217;t do anything!

#### How to handle stdin with C++

In C++, you can put data to variable with cin

For example 、Input is 

    1 2
    

    cin >> a >> b;
    

cin input date 1 line at once, so if you want to input another line, use multiple times

#### How to handle stdout with C++

In C++, you can put data to stdout with cout

For example、output rslt to stdout

    cout << rslt << endl;
    

### Impressions

I can7t figure it out stdin and stdout, so I spend 30min to research

Codinng with web edittor is not easy. It seems that there is no plugin to code from eclipse, like topcoder

#### My answer

My answer was failed with system test,..(ノД｀)

Codeforces Round #192 (Div. 2) A

  * <a href="https://codeforces.com/problemset/problem/330/A" target="_blank">Problem &#8211; 330A &#8211; Codeforces</a>

[gist id=6045503]<!--:-->

 [1]: https://picasaweb.google.com/lh/photo/0MQfo68bQ4W-N60rOwLxVDyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [2]: https://picasaweb.google.com/lh/photo/v8PMrj-xLbjoUJgSf9ARfDyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [3]: https://lh4.ggpht.com/-3OFYRTc4OAU/UeuIWWNzBKI/AAAAAAAAAts/6ch5d_m1KVo/SnapCrab_NoName_2013-7-20_22-45-0_No-00.jpg