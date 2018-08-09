---
author: admin
categories:
- TDD
- ハッキング
date: 2013-08-04T13:55:33+00:00
dsq_thread_id:
- 3.702104e+09
excerpt: <!--:ja-->Tera Term Language(TTL)のためのxUnitフレームワーク TTLUnit<!--:--><!--:en-->TTLUnit
  is xUnit framework for Tera Term Language(TTL).<!--:-->
follow:
- follow
index:
- index
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 3781
side:
- def
sub:
- def
tags:
- TTL
title: teratermマクロで自由自在にエンドツーエンドを書く！TTLのためのxUnitフレームワーク「TTLUnit」
type: post
url: /archives/=1748
---

Teratermマクロを利用してテスト自動化ができたらいいのになと思っていたのだけれども、いくらさがしても良いツールが見つからなかったので、つくてみました。

名づけて、　

TTLUnit

じゃじゃ～ん！githubにあげました。

  * <a href="https://github.com/tsu-nera/TTLUnit" target="_blank">tsu-nera/TTLUnit</a>

本当ならば、Rubyでエンドツーエンドを書きたいところだが、Rubyだと、多段telnetをする方法がいつになっても、わからなかった。

しかし、Rubyはたいていの仕事で利用するPCにはインストールされていないので、どうしても多段telnetは必要。そして、teratermマクロならば多段telnetが可能だ。

これは、以下の記事のリベンジ、というか続編です。

  * <a href="https://futurismo.biz/archives/1289" target="_blank">組込み開発のシステムテスト・機能テストを自動化できるか?Rubyのminitestで非同期テストを実施する方法を本気出して考えてみた | Futurismo</a>
  * <a href="https://futurismo.biz/archives/1667" target="_blank">ミライの組込み開発！vagrant × sahara × minitestで実現する仮想エンドツーエンドテスト | Futurismo</a>

[toc]

### これはなに

TTLUnit とは、Tera Term Language(TTL)のためのxUnitフレームワーク。

### 使い方

#### フォルダパスの設定

テストをはじめる前に、フォルダパスの設定をする。 lib/config.ttl　を修正。

  * BASE_DIR : TTLUnit デフォルトフォルダパス
  * LIB_DIR : TTLUnit ライブラリパス
  * TEST_DIR : テストフォルダパス
  * LOG_DIR : ログフォルダパス

以下のオブションもチェック。

  * TEST_PREFIX : テストケースのブレフィックスを指定
  * LOG_MODE : ログモード 1:有効 0:無効

### テストスイートフォルダの作成

TTLUnitでは、テストスイートをフォルダで管理します。フォルダパスで指定したフォルダにテストスイートのフォルダを作成。

また、テストスイートのリストファイルをつくる必要がある。　ts_lit.ttl をテストフォルダに作成して、テストスイートを追加する。

    ; Pleas Modify Test Suite Max 
    TEST_SUITE_MAX = 2
    strdim test_suite TEST_SUITE_MAX
    
    ; Add your test suite folder
    test_suite[0] = 'ts_mkdir'
    test_suite[1] = 'ts_pwd'
    test_suite[2] = ...
    

### テストケースファイルの作成

テストケースファイルをテストスイートフォルダに作成する。テストファイルの名前は、決められたものを指定する（lib/config.ttlのTEST_PREfiX で指定したもの）

TTL の知識も必要。TTLコマンドリファレンスをチェック。

  * [TTL command reference][1]

For Example: Test_mkdir_test_dir.ttl

    ;Test
    sendln 'mkdir testdir'
    
    ;Assert
    sendln 'ls'
    Wait 'testdir'
    
    ;tearDown
    sendln 'rmdir testdir'
    
    exit
    

最終行は exit　である必要がある。Wait commant 以降では、resultを返すTTLコマンドは使えません（苦し紛れの仕様です）

### テスト実行

テストの実行方法は3つ

##### すべてのテストを実行

.ttlファイルをttpmacro.exeに関連付ける（これでクリックひとつで.ttlファイルがttpmacro.exeで開ける）

lib/RunAlltests.ttlを開く。すべてのテストスイート（ts_list.ttlに登録したもの)が実行される。

##### 一つのテストスイートを実行

一つのテストスイートを選択すくこともできる。 lib/RunTestSuite.ttlを
  
開く。メッセージボックスがボップアップするので、テストスイートフォルダを入力する。

##### 　ドラッグ & ドロップで実行

テストスイートフォルダを.batファイルにドラッグするだけで、テストが実行する。

example/RunTestSuite.batをご覧されたし。ttpmacro.exeとテストフォルダを指定する必要がある。

    @echo off
    
    set file=%*
    
    rem Call TestSuite
    "C:\Program Files (x86)\teraterm\ttpmacro.exe" "C:\cygwin\home\TSUNEMICHI\src\ttlunit\lib\RunTestSuite.ttl" %file%
    

### テスト結果

テストが実行され、結果がポップアップする。

![][2]

### Tips

##### Setup と TaerDown

テストスイートフォルダに &#8216;setup.ttl&#8217; , &#8216;teardown.ttl&#8217;があると、 SetUp と tearDownがテストケースの前、後ろで実行される。

テストフォルダに、&#8217;setup.ttl&#8217; , &#8216;teardown.ttl&#8217;があると、 SetUp がすべてのテストの開始前に実行される。 TearDownが全てのテストの実行後に実行される。

##### Expect の表示

デフォルトのテスト結果では、Expectの値が表示されない。もし、どのWaitコマンドでテストが失敗したかをチェックしたい場合は、こんなふうにかく。

    expect_str = 'hogehoge'
    Wait expect_str
    

##### タイムアウト

デフォルトのタイムアウト値は 5秒にしている。もし、値を変えたい場合は、この行はどこでも書いて変更できる。

    timeout = (your favorite value)
    

##### ログモード

ログモードをOnにすると、テストケース実行ごとに、ログフォルダにテスト結果をログすることができる。 lib/config.ttlを編集。

    LOG_MODE = 1
    

### 動画

[//www.youtube.com/embed/h6iN5MiI3FI?list=UUT1w_8QIwJc5Ia67MjOWN1A]

 [1]: https://ttssh2.sourceforge.jp/manual/ja/macro/command/index.html
 [2]: https://lh3.ggpht.com/-y5ss0lsm8Rg/Uf5TloyW3XI/AAAAAAAAAv8/FPnGWd-rzZ0/SnapCrab_%25255BTest%252520Summary%25255D_2013-8-4_22-13-35_No-00.jpg