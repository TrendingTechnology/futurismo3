---
author: admin
categories:
- C言語
- Jenkins
- Ruby
- TDD
- 技術メモ
date: 2013-06-19T10:09:13+00:00
dsq_thread_id:
- 3.7086858e+09
pdrp_attributionLocation:
- end
pvc_views:
- 5286
tags:
- cmock
- gcov
- unity
title: Rubyで書かれた統合C言語TDD開発環境 「Ceedling」 がけっこう便利そうな件
type: post
url: /archives/=1498
---

UnityやCMockについて色々調べて来ましたが、今日はそれらを束ねるツール Ceedlingにつついて調べました。

[toc]

### Ceedlingとは

Ceedlingとは、UnityとCMockを使ってテストを実行するためのテスト管理用フレームワーク。テストを助けるための便利なツールがRubyスクリプトで書かれていて、それらを利用してC言語でのTDDをウマクやるためのツール。

### Ceedlingのインストール

CeedlingはRuby,Rakeが必要なので、まずはrubyとrakeをインストールしておくこと。また、Rubygemもパッケージ取得のために必要。入れておくこと。

Ceedlingのインストールは以下のコマンドで実施する。

    gem install ceedling
    

Ceedlingプロジェクトの作成する。

    ceedling new ceedling_study
    

Unity・CMockを利用するためのテスト環境が一気に自動生成される。かっこ良い。(・∀・)

デフォルトでいろんなモードが用意されている。これらがテストを実施するためのお助けツール。詳しくは、使い方のドキュメントを参照。

    % rake -T
    rake clean# Delete all build artifacts and temporary products.
    rake clobber  # Delete all generated files (and build artifacts).
    rake environment  # List all configured environment variables.
    rake files:header # List all collected header files.
    rake files:source # List all collected source files.
    rake files:test   # List all collected test files.
    rake logging  # Enable logging
    rake module:create[module_path]   # Generate module (source, header and test files)
    rake module:destroy[module_path]  # Destroy module (source, header and test files)
    rake paths:source # List all collected source paths.
    rake paths:support# List all collected support paths.
    rake paths:test   # List all collected test paths.
    rake summary  # Execute plugin result summaries (no build triggering).
    rake test:*   # Run single test ([*] real test or source file name, no path).
    rake test:all # Run all unit tests.
    rake test:delta   # Run tests for changed files.
    rake test:path[dir]   # Run tests whose test path contains [dir] or [dir] substring.
    rake test:pattern[regex]  # Run tests by matching regular expression pattern.
    rake verbosity[level] # Set verbose output (silent:[0] - obnoxious:[4]).
    rake version  # Display build environment version info.
    

vendor配下にunityとcmockのディレクトリを持ってくる。

    cd vendor
    git clone git://github.com/ThrowTheSwitch/Unity.git
    git clone git://github.com/ThrowTheSwitch/CMock.git
    

仕様のドキュメントは vendor/ceedling/docs配下にある。

    docs/
    ├── CExceptionSummary.pdf
    ├── CMock Summary.pdf
    ├── CeedlingPacket.pdf
    └── Unity Summary.pdf
    

設定ファイルは project.ymlをいじるけれども、まずはデフォルトでOk.

### Unityといっしょに使ってみる

Unityのテストコートを書いてみます。

    #include "unity.h"
    #include "hogehoge.h"
    
    void setUp(void)
    {
    }
    
    void tearDown(void)
    {
    }
    
    void test_hogehogefirst(void)
    {
      TEST_IGNORE_MESSAGE("Here");
    }
    

実行結果

    [tsu-nera]% rake test:all
    
    Test 'Testhogehoge.c'
    ---------------------
    Generating runner for Testhogehoge.c...
    Compiling Testhogehoge_runner.c...
    Compiling Testhogehoge.c...
    Linking Testhogehoge.out...
    Running Testhogehoge.out...
    
    -------------------------
    IGNORED UNIT TEST SUMMARY
    -------------------------
    [Testhogehoge.c]
      Test: test_hogehogefirst
      At line (14): "Here"
    
    -------------------------
    OVERALL UNIT TEST SUMMARY
    -------------------------
    TESTED:  1
    PASSED:  0
    FAILED:  0
    IGNORED: 1
    

ちなみに、unity fixture形式のテストの書き方だとうまく動作しなかった。ここ3週間、仕事でUnityFixture形式のテストを書きまくったので、どうやって移植しようか。。。ウマクやる方法がわかったら追記する。

### CMockといっしょに使ってみる

テストファイルに、モックしたいソースのヘッダファイルを以下の形式で書くと、CeedlingはCMockを利用してモックを自動生成する。

    #include "mock_xxxxx.h"
    

prefixのmock_はproject.ymlの以下のパラメータを変更すれば調整可能。

    :cmock:
      :mock_prefix: mock_
    

#### CMockサンプル

以下のように、uhauha()の先でhogehogeをコールしている。hogehogeをモックしたい。

uhauha.c

    #include "uhauha.h"
    #include "hogehoge.h"
    
    void uhauha(void)
    {
      hogehoge();
    }
    

テストコードを以下のようにかく。

Testuhauha.c

    #include "unity.h"
    #include "uhauha.h"
    #include "mock_hogehoge.h"
    
    void setUp(void)
    {
    }
    
    void tearDown(void)
    {
    }
    
    void test_uhauhafirst(void)
    {
      hogehoge_ExpectAndReturn(2);
      uhauha();
    }
    

### gcovといっしょに使ってみる

gcovを利用して、gcovデータを生成する。project.ymlにgcovプラグインの記述を追加する。
  
:tools:のところにgcovを追加。

    :plugins:
      :load_paths:
        - vendor/ceedling/plugins
      :enabled:
        - stdout_pretty_tests_report
        - module_generator
        - gcov(ここに追加）
    

rakeコマンドでgcovを実行。build/gcov/outに gcnoができる。

    rake gcov:all
    

### xUnit形式のxmlファイルを生成して、Jenkinsで表示する

もともと、Unityでのテスト結果をxUnit formatのXMLに変換する方法を調べていたらceedlingを見つけたので、これがやりたかったこと。project.ymlに以下を追加する。

    :plugins:
      :load_paths:
        - vendor/ceedling/plugins
      :enabled:
        - stdout_pretty_tests_report
        - module_generator
        - xml_tests_report
    

rakeコマンドでtestを実行。/build/artifacts/testに report.xmlができる。

    <?xml version='1.0' encoding='utf-8' ?>
    <TestRun>
            <FailedTests/>
            <SuccessfulTests>
                    <Test id="1">
                            <Name>test/Testuhauha.c::test_uhauhafirst</Name>
                    </Test>
            </SuccessfulTests>
            <IgnoredTests>
                    <Test id="2">
                            <Name>test/Testhogehoge.c::test_hogehogefirst</Name>
                    </Test>
            </IgnoredTests>
            <Statistics>
                    <Tests>2</Tests>
                    <Ignores>1</Ignores>
                    <FailuresTotal>0</FailuresTotal>
                    <Errors>0</Errors>
                    <Failures>0</Failures>
            </Statistics>
    </TestRun>
    

このファイルをJenkinsから表示すればよい。表示するためには、xUnit Pluginを入れる。

<a href="https://wiki.jenkins-ci.org/display/JENKINS/xUnit+Plugin" target="_blank">xUnit Plugin &#8211; Jenkins &#8211; Jenkins Wiki</a>

xUnit Pluginには、Unity用の選択肢がない。CppUnitと形式が似ているため、xml生成用のRubyスクリプトに手を入れる。

まず、CppUnitには、Ignoreという概念がないので、L38,L100のIgnore関連の記述をコメントアウト。

L38.

    =begin
        write_tests( results[:ignores], stream, 'IgnoredTests' )
    =end
    

L100.

    =begin
        stream.puts "\t\t<Ignores>#{counts[:ignored]}</Ignores>"
    =end
    

L68行目にもバグがあるので、修正。

          stream.puts "\t\t</FailedTest>"
          # stream.puts "\t\t</Test>"
    

<a href="https://sourceforge.net/p/ceedling/discussion/1052467/thread/27c7f086" target="_blank">Ceedling / Discussion / Ceedling Forum:XML report</a>

これで、Jenkinsでも結果が表示されたた。

[<img src="https://lh6.googleusercontent.com/-7NhXtc7gDU0/UcGCFvv2gkI/AAAAAAAAAZs/kUz9YN1aHPs/s400/SnapCrab_NoName_2013-6-19_19-3-43_No-00.png" height="208" width="400" />][1]

 [1]: https://picasaweb.google.com/lh/photo/WG_uaXNsLS_u2eJbNiUKDDyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite