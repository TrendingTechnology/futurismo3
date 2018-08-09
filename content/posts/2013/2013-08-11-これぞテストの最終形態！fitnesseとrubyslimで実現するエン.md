---
author: admin
categories:
- Ruby
- ハッキング
date: 2013-08-11T12:20:59+00:00
dsq_thread_id:
- 3.693667e+09
excerpt: FitnesseとRubySlimを使ってでエンドツーエンドを書いてみました
follow:
- follow
index:
- index
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 2223
side:
- def
sub:
- def
tags:
- FitNesse
title: これぞテストの最終形態！FitNesseとRubySlimで実現するエンドツーエンドテスト
type: post
url: /archives/=1772
---

<!--:ja-->

FitnesseとRubySlimを使ってでエンドツーエンドを書いてみました。

![][1]

なんどもおんなじネタで恐縮だけれども、FitNesseとRubySlimを利用して、エンドツーエンドを実装してみました。

この記事は、以下の記事の延長になります。

  * <a href="https://futurismo.biz/archives/1289" target="_blank">組込み開発のシステムテスト・機能テストを自動化できるか?Rubyのminitestで非同期テストを実施する方法を本気出して考えてみた | Futurismo</a>
  * <a href="https://futurismo.biz/archives/1667" target="_blank">ミライの組込み開発！vagrant × sahara × minitestで実現する仮想エンドツーエンドテスト | Futurismo</a>
  * <a href="https://futurismo.biz/archives/1748" target="_blank">teratermマクロで自由自在にエンドツーエンドを書く！TTLのためのxUnitフレームワーク「TTLUnit」 | Futurismo</a>

### FitNesse テストケースの用意

まずは、テストケースのページの作成です。

  * <a href="https://futurismo.biz/archives/1769" target="_blank">RubyのAPIレベルのテストを直叩きできるFitNesse用フレームワーク ‘RubySlim’ | Futurismo</a>

これは、前回の記事のまんま。

    !contents -R2 -g -p -f -h
    
    !define TEST_SYSTEM {slim}
    !define TEST_RUNNER {/home/tsu-nera/src/ruby_fitnesse/rubyslim/bin/rubyslim}
    !define COMMAND_PATTERN {ruby -I %p %m}
    !define PATH_SEPARATOR { -I }
    !path /home/tsu-nera/src/ruby_fitnesse/tests
    

こんな感じで、Decision Tableを作成しました。

    |make directory                     |
    |command       |expect  |get result?|
    |mkdir testdir |testdir |0          |
    |mkdir testdir2|testdir2|0          |
    |mkdir testdir3|testdir4|0          |
    

### Custom Fixturesの用意

ここからが本題。RubyでCustomFixtureを作成します。
  
/home/tsu-nera/src/ruby_fitnesse/testsに Test Fixtures作成。



なかなかウマクイカなかったので、こんな実験用コードも書いた。

    require "./make_directory"
    include Fixtures
    
    @foo = MakeDirectory.new
    @foo.set_command("mkdir testdir")
    @foo.set_expect("/testdir/")
    @foo.get_result
    @foo = nil
    

これで、準備完了！Webからテストを実行します。

[//www.youtube.com/embed/3lGEuIW5LQc?rel=0]

テスト結果のログは、&#8217;Output Capture&#8217;というところをクリックすると見れる。障害調査も完璧。

 [1]: https://lh5.ggpht.com/-kisp2xg__ck/UgXaghxNd_I/AAAAAAAAAwM/tENCQ11ME_U/SnapCrab_NoName_2013-8-10_15-15-16_No-00.jpg