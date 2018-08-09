---
author: admin
categories:
- C言語
- TDD
date: 2013-04-21T11:36:36+00:00
dsq_thread_id:
- 3.7131835e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 3519
tags:
- cmock
- github
- unity
title: UnityとCMockの使い方が分かる本『Embedded Testing with Unity and CMock』を読んだ
type: post
url: /archives/=1281
---

UnityとCMockはC言語のためのxUnitとMockフレームワーク。UnityとCMockの使い方について、電子書籍とペーパーブックが出ている。6ドルくらいなので、購入して読んでみた。

* * *

<a href="https://www.lulu.com/shop/mark-vandervoord/embedded-testing-with-unity-and-cmock/ebook/product-17422227.html" target="_blank"><img class="alignleft" style="margin: 0px 7px 2px 0px;" alt="" src="https://capture.heartrails.com/150x130/shadow?https://www.lulu.com/shop/mark-vandervoord/embedded-testing-with-unity-and-cmock/ebook/product-17422227.html" width="150" height="130" align="left" border="0" /></a> <a style="color: #0070c5;" href="https://www.lulu.com/shop/mark-vandervoord/embedded-testing-with-unity-and-cmock/ebook/product-17422227.html" target="_blank">Embedded Testing with Unity and CMock by Mark VanderVoord (eBook) &#8211; Lulu</a> <img alt="" src="https://b.hatena.ne.jp/entry/image/https://www.lulu.com/shop/mark-vandervoord/embedded-testing-with-unity-and-cmock/ebook/product-17422227.html" border="0" />

* * *

内容はとても異色だ。まず、ページが正方形なのが、なんかおかしい。物語形式で話が進んでいく。途中に可愛い？！マンガチックなイラストがたくさんでてくる。文学表現が初めの方はおおくて、知らない単語が多かったりした。

前半がUnityの話、後半がCMockの話。全部で40ページくらいなので、あまり内容は深くない。使い方が説明されている。ツールについてくるドキュメントよりは詳しくツールが解説されている。特に、オプション周り。

この本、手順はしょりすぎ。。。けっこう苦労したので、補う意味で手順をメモしておく。

なお、UnityとCMock利用するためには、Rubyが必須ツール。Rubyスクリプトをガンガン使うため。事前にインストールすること。

### CMockのダウンロード

githubからダウンロードします。unityやceelingというプロジェクトも必要になります。サブモジュール扱いされているので、それらも取得します。

    #CMockをcloneする
    $ git clone git://github.com/ThrowTheSwitch/CMock.git
    # Unityとceelingをcloneする
    $ git submodule init
    $ git submodule update
    

### CMockをcloneする

    $ git clone git://github.com/ThrowTheSwitch/CMock.git
    

### Unityとceelingをcloneする

    $ git submodule init
    $ git submodule update
    

Unityはどんなコンパイラだって、コンパイルできるらしい（と書いてあった）。まずは、自分が使う予定のコンパイラでUnityが動作するかチェックする。

Cygwinだと、どうもWindowsに解釈されるので、makefileをチョット修正。

    $ cd CMock/vendor/unity
    $ emacs makefile
    $ make
    

こんな感じに修正。

    #ifeq ($(OS),Windows_NT)    
    # TARGET_EXTENSION=.exe
    #else
    TARGET_EXTENSION=.out
    #endif
    
    —————–
    
    #ifeq ($(OS),Windows_NT)
    # CLEANUP = del /F /Q build\* && del /F /Q $(TARGET1) && del /F /Q $(TARGET2)
    #else
    CLEANUP = rm -f build/*.o ; rm -f $(TARGET1) ; rm -f $(TARGET2)
    #endif
    
    —————-
    
    ./$(TARGET1)
    

これで174のテストが走る。Great! v(o´∀｀o)v

別のコンパイラを試すには、makefileの先頭にC_COMPILER=gccという部分を修正する。

    C_COMPILER=g++
    C_COMPILER=gcc-3
    

CMockはデフォルトコンパイラがgccのようだが、他のコンパイラでのテスト方法がかワカラなかった。gccでのテスト方法は、以下を実行する。

    $ cd CMock
    $ rake
    

### Unity編(p3~)

以下のようにコマンドを実行することで、MenacingLED.c/MenacingLED.h/TestMenacingLED.cができる。

    $ ruby auto/generate_module.rb MenacingLED
    File /home/TSUNEMICHI/src/unity/book/auto/../src//MenacingLED.c created    
    File /home/TSUNEMICHI/src/unity/book/auto/../src//MenacingLED.h created
    File /home/TSUNEMICHI/src/unity/book/auto/../test//TestMenacingLED.c created
    Generate Complete
    

次に以下のコマンドでTestMenacingLED_Runner.cができる。

    $ ruby auto/generate_test_runner.rb test/TestMenacingLED.c
    

makefileを編集する。以下の4つを追加する。作成された4つのファイルをコンパイルしてリンクし、実行ファイルを生成。実行する。

    # Unity File
    SRC_FILES = src/unity.c
    
    # Source Files
    SRC_FILES += src/MenacingLED.c
    SRC_FILES += test/TestMenacingLED.c
    SRC_FILES += test/TestMenacingLED_Runner.c
    
    $ make
    rm -f build/*.o ; rm -f book.exe ; mkdir -p build
    gcc -Isrc -DTEST -DUNITY_SUPPORT_64 src/unity.c src/MenacingLED.c test/TestMenacingLED.c test/TestMenacingLED_Runner.c -o book.exe
    
    ./book.exe
    test/TestMenacingLED.c:14:test_MenacingLED_NeedToImplement:IGNORE
    -----------------------
    1 Tests 0 Failures 1 Ignored
    OK
    

### CMock編(p14~)

S5モジュールを生成。

    $ ruby auto/generate_module.rb S5    
    File /home/TSUNEMICHI/src/unity/book/auto/../src//S5.c created
    File /home/TSUNEMICHI/src/unity/book/auto/../src//S5.h created
    File /home/TSUNEMICHI/src/unity/book/auto/../test//TestS5.c created
    Generate Complete
    

S5_Exec()をS5.hとS5.cに空実装する。

同様にして、ButtonsとS5モジュールを生成する。

    $ ruby auto/generate_module.rb Buttons    
    $ ruby auto/generate_module.rb S5Ctrl
    

Buttons_CheckS5Switch と S5Ctrl_Silenceをヘッダに宣言する。

ここからが書いていないのだが、モックオブジェクトを生成する。以下をカレントディレクトリにコピーしてくる。

  * cmock/lib
  * cmock/config/
  * cmock/src(cmock.cとcmock.hが欲しい）

mocksディレクトリを作成して、cmock生成用のスクリプトを実行する。

    $mkdir mocks
    $ ruby lib/cmock.rb src/Buttons.h src/S5Ctrl.h
    Creating mock for Buttons...
    Creating mock for S5Ctrl...
    

Makefileを編集する。インクルードファイルにもmocksディレクトリを追加。
  
cmockを利用するためには、unity.cとcmock.cも同時にコンパイルしてやる。最終的なMakefileはこんな感じ

    C_COMPILER=gcc 
    TARGET_BASE = MenacingLED 
    TARGET_BASE2 = S5 
    TARGET_EXTENSION=.exe 
    TARGET = $(TARGET_BASE)$(TARGET_EXTENSION) 
    TARGET2 = $(TARGET_BASE2)$(TARGET_EXTENSION)
    
    # Unity Files 
    SRC_FILES   = src/unity.c 
    SRC_FILES2  = src/unity.c
    
    # CMock Files 
    SRC_FILES  += src/cmock.c 
    SRC_FILES2 += src/cmock.c
    
    # Source Files 
    SRC_FILES += src/MenacingLED.c 
    SRC_FILES += test/TestMenacingLED.c 
    SRC_FILES += build/TestMenacingLED_Runner.c
    
    SRC_FILES2 += src/S5.c 
    SRC_FILES2 += test/TestS5.c 
    SRC_FILES2 += build/TestS5_Runner.c
    
    SRC_FILES2 += mocks/MockButtons.c 
    SRC_FILES2 += mocks/MockS5Ctrl.c
    
    INC_DIRS  =-Isrc 
    INC_DIRS +=-Imocks 
    SYMBOLS=-DTEST -DUNITY_SUPPORT_64
    
    CLEANUP = rm -f build/*.o ; rm -f $(TARGET); rm -f $(TARGET2) ; mkdir -p build
    
    all: clean default
    
    default: 
            ruby auto/generate_test_runner.rb test/TestMenacingLED.c build/TestMenacingLED_Runner.c 
            ruby auto/generate_test_runner.rb test/TestS5.c build/TestS5_Runner.c 
            ruby lib/cmock.rb src/S5Ctrl.h 
            ruby lib/cmock.rb src/Buttons.h 
            $(C_COMPILER) $(INC_DIRS) $(SYMBOLS) $(SRC_FILES) -o $(TARGET) 
            $(C_COMPILER) $(INC_DIRS) $(SYMBOLS) $(SRC_FILES2) -o $(TARGET2) 
            ./$(TARGET) 
            ./$(TARGET2)
    
    clean: 
            $(CLEANUP)