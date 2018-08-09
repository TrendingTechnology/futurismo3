---
author: admin
categories:
- C++
- TDD
date: 2013-08-10T23:26:35+00:00
dsq_thread_id:
- 3.727975e+09
excerpt: FitNesseをC/C++で利用するためのslimフレームワークではcslimがあります。これを試してみました。
follow:
- follow
index:
- index
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 2648
side:
- def
sub:
- def
tags:
- FitNesse
title: C/C++のAPIレベルのテストを直叩きできるFitNesse用フレームワーク ‘CSlim’
type: post
url: /archives/=1757
---

<!--:ja-->

FitNesseをC/C++で利用するためのslimフレームワークではcslimがあります。これを試してみました。

前回の続きです。

  * <a href="https://futurismo.biz/archives/1752" target="_blank">受け入れテスト用フレームワーク「Fitnesse」導入手順のまとめ | Futurismo</a>

![][1]

  * <a href="https://github.com/dougbradbury/cslim" target="_blank">dougbradbury/cslim</a>

CSlimを使うと、APIレベルのテストを直接実行できます。ほかのテストツールとの役割分担はこんな感じ？

      Web I/F   ... Selenium
      -----------------------------
      API       ... CSlim
      -----------------------------
      Function  ... xUnit(CppUTest)
    

Authors は Robert Martin, James Grenning, and Doug Bradburyです。James Gremmingさんといえば &#8216;Test-Driven Development for Embedded C&#8217;の著者ですね。

<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&#038;bc1=000000&#038;IS2=1&#038;bg1=FFFFFF&#038;fc1=000000&#038;lc1=0000FF&#038;t=sleephacker-22&#038;o=9&#038;p=8&#038;l=as4&#038;m=amazon&#038;f=ifr&#038;ref=ss_til&#038;asins=193435662X" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

cslimは内部でCppUTestを使ってます。CppUTestもこの本が詳しいです。

Webのドキュメントは、githubのwikiにある、以下の２つのリンクが詳しい。

  * <a href="https://www.renaissancesoftware.net/papers/79-executable-use-cases-story-testing-embedded-systems-conference-2010-boston.html" target="_blank">Executable Use Cases &#8211; Story Testing &#8211; Embedded Systems Conference 2010 Boston</a>
  * <a href="https://schuchert.wikispaces.com/cpptraining.GettingStartedWithFitNesseInCpp" target="_blank">schuchert &#8211; cpptraining.GettingStartedWithFitNesseInCpp</a>

### cslimを動かす

以下の記事を参考にして、自分も動かしてみました。

  * <a href="https://schuchert.wikispaces.com/cpptraining.GettingStartedWithFitNesseInCpp" target="_blank">schuchert &#8211; cpptraining.GettingStartedWithFitNesseInCpp</a>

まずは、CSlimを実行するディレクトリを作成

    $ mkdir cpp_fitnesse
    $ cd cpp_fitnesse
    

cslimはCppUTestに依存しているので先に、CppUTestをダウンロードしてコンパイル。

    git clone git@github.com:cpputest/cpputest.git
    mv cpputest CppUTest
    ./configure
    make
    

cslimをダウンロードしてコンパイル。

    git clone git@github.com:dougbradbury/cslim.git
    cd cslim
    make
    

cslimとcpputestは同じディレクトリにある必要がある。

    <path>/cslim
    <path>/cpputest
    

ブラウザに、以下のURLにブラウザからアクセス。

    https://localhost/CslimFirstExamples
    

編集画面がでるので、以下のように修正。(pathは自分の環境に合わせて）

    !contents -R2 -g -p -f -h
    
    !define TEST_SYSTEM {slim}
    !define TEST_RUNNER {/home/tsu-nera/src/cpp_fitnesse/cslim/CSlim_cslim}
    !define COMMAND_PATTERN {%m}
    !define SLIM_VERSION {0.0}
    

次に、以下のURLにブラウザからアクセスして、同じようにテストのサブページを作成する。

    https://localhost/CslimFirstExamples.DecisionTableExample
    

wiki形式でテストケースを書く。

    |Modulus                 |
    |value|divisor|remainder?|
    |6    |2      |0         |
    |13   |27     |13        |
    |5    |2      |1         |
    

テストを実行すると、失敗する。

![][2]

気を取り直して、テストケースを書く。コードはこのサイトを参照。

    <path>/fixture/Modulus.cpp
    <path>/fixture/Fixture.c
    

  * <a href="https://schuchert.wikispaces.com/cpptraining.GettingStartedWithFitNesseInCpp" target="_blank">schuchert &#8211; cpptraining.GettingStartedWithFitNesseInCpp</a>

Pointは、テスト対象ファイルの下に、以下の様な記述をすること。これで、自分の関数をfixtureから呼び出すための登録ができる。

    SLIM_CREATE_FIXTURE(Modulus) 
        SLIM_FUNCTION(setValue)
        SLIM_FUNCTION(setDivisor)
        SLIM_FUNCTION(remainder)
    SLIM_END
    

また、Fixture.cにModulesフィクスチャを登録すること。

        SLIM_FIXTURE(Modulus)
    

再度makeしてテストを実行すると、今度は成功した。

[<img src="https://lh5.googleusercontent.com/-5_52Cn_X03U/UgbAzXrZ2cI/AAAAAAAAAxM/gVFcmIm8L3Y/s400/SnapCrab_NoName_2013-8-11_7-34-50_No-00.jpg" height="221" width="400" />][3]

#### for cygwin memo

Cygwin環境では、うまく動作させることができなかった。makefileに細工が必要なようだが、以下の記事を参考に編集すると、コンパイルはできるものの、Slim serverにアクセスできない。

  * <a href="https://tech.dir.groups.yahoo.com/group/fitnesse/message/19431" target="_blank">fitnesse : Message: Re: CSLIM Compilation Error on Windows7 &#8211; using Cygwin and the g++4 compiler</a>

#### my environment

  * FitNesse 20130530
  * CentOS 6.4

 [1]: https://lh5.ggpht.com/-kisp2xg__ck/UgXaghxNd_I/AAAAAAAAAwM/tENCQ11ME_U/SnapCrab_NoName_2013-8-10_15-15-16_No-00.jpg
 [2]: https://lh4.ggpht.com/-JTAUaBlT4Pw/Uga_LwIaD7I/AAAAAAAAAw8/OQWYd-xYK2s/SnapCrab_NoName_2013-8-11_7-30-56_No-00.jpg
 [3]: https://picasaweb.google.com/lh/photo/MKcovKGxx-kZdZHfxLbh9DyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite