---
author: admin
categories:
- C++
- TDD
- 書評
date: 2013-09-29T04:23:49+00:00
dsq_thread_id:
- 3.734587e+09
excerpt: C++ の TDD本、『Modern C++ Programming with Test-Driven Development』の写経環境を構築するためのメモです
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
- 2881
side:
- "y"
title: 『Modern C++ Programming with Test-Driven Development』写経環境をWindows上のCentOSに構築
title_view:
- "y"
type: post
url: /archives/=1832
---

<!--:ja-->C++ の TDD本、『Modern C++ Programming with Test-Driven Development』の写経環境を構築するためのメモです。

<iframe style="width: 120px; height: 240px;" src="https://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=sleephacker-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=1937785483" width="320" height="240" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>

[toc]

ebookはここから購入できる。

  * <a href="https://pragprog.com/book/lotdd/modern-c-programming-with-test-driven-development" target="_blank" rel="noopener noreferrer">The Pragmatic Bookshelf | Modern C++ Programming with Test-Driven Development</a>

各ツールの説明は、書籍の第1章に載っています。自分のPCはWindowsなのですが、Virtual Box 上に CentOSをインストールしてそこに開発環境を構築し、、Sambaを経由してWindows上のEclipse上から写経をしようと考えています。なので、ベースは CentOS。そのへんの導入方法は過去記事を参照のこと。

  * <a href="https://futurismo.biz/archives/1390" target="_blank" rel="noopener noreferrer">CentOS上でSAMBAサーバを立ちあげてWindowsからアクセスするためのメモ | Futurismo</a>
  * <a href="https://futurismo.biz/archives/1330" target="_blank" rel="noopener noreferrer">CentOSを最小構成(minimal)でVMware Playerにインストールした | Futurismo</a>
  * <a href="https://futurismo.biz/archives/1643" target="_blank" rel="noopener noreferrer">Windows上のCentOSをVmwarePlayerからVirtualBoxへ移行した手順 | Futurismo</a>

Windows環境だと、CygwinのgccやVisualStudioを利用するてもあるけれども、コンパイル時間が遅いので今回はやめた。

#### 環境

  * CentOS 6.4(on VirtualBox on Windows 7 64bit)
  * Eclipse 4.3 kepler

### ソースコードの取得

githubはこのリンクから。

  * <a href="https://github.com/jlangr" target="_blank" rel="noopener noreferrer">jlangr (Jeff Langr)</a>

コードはここからダウンロード可能。

  * <a href="https://pragprog.com/titles/lotdd/source_code" target="_blank" rel="noopener noreferrer">The Pragmatic Bookshelf | Source Code</a>tar xzf lotdd-code.tgz
  
    mv code modernCTDD

### g++

CentOSでは、C++11対応のg++4.7.2をインストールするには一工夫が必要。

  * [CentOS 6.4でC++11対応のg++ 4.7.2を使うためのメモ | Futurismo][1]

### cmake

サンプルコードのコンパイルには、cmakeを利用するので必要。

    sudo yum -y install cmake
    % cmake -version
    cmake version 2.6-patch 4
    

### Google Mock

この本の主人公、GoogleMockをインストールします。

まずは、gmockをサイトからダウンロードして解凍。最新版は1.7だが、現時点(2013/10)では、1.7だとサンプルテストがエラーしたので、1.6で入れる。

以下のサイトからダウンロード。

  * [Downloads &#8211; googlemock &#8211; Google C++ Mocking Framework &#8211; Google Project Hosting][2]

落としたら適当な場所におく。SampleSourseのcmakeでのビルドのために、パスを通す。

    export GMOCK_HOME=/home/tsu-nera/tools/gmock
    

GMOCK_HOMEで、以下を実行。

    mkdir mybuild
    cd mybuild
    cmake ..
    make
    

続いて、gtestの方もビルドする。

    cd $GMOCK_HOME/gtest
    mkdir mybuild
    cd mybuild
    cmake ..
    make
    

サンプルコードを動かて、テストが成功すればOK.

    cd /home/tsu-nera/repo/modernCTDD/c2/2
    cmake CMakeLists.txt
    make
    ./test
    [==========] Running 1 test from 1 test case.
    [----------] Global test environment set-up.
    [----------] 1 test from SoundexEncoding
    [ RUN      ] SoundexEncoding.RetainsSoleLetterOfOneLetterWord
    [       OK ] SoundexEncoding.RetainsSoleLetterOfOneLetterWord (0 ms)
    [----------] 1 test from SoundexEncoding (1 ms total)
    
    [----------] Global test environment tear-down
    [==========] 1 test from 1 test case ran. (1 ms total)
    [  PASSED  ] 1 test.
    

おまけ、VisualStudioへのGoogleMock導入方法は以前まとめた気がした。

  * [Visual Studio 2012に GoogleMockを導入したメモ | Futurismo][3]

### Eclipseの設定

Windows上でのEclipseの設定。前述のとおり、ここでは、Sambaを経路してWindows上から使います。Sambaの設定は省略です。

プロジェクト・エクスプローラを右クリックして、

  * インポート -> C/C++ -> Existing Code as Makefile Project

次に、ヘッダファイルのパスを設定する。プロジェクトのプロパティから

  * C/C++一般 -> パスおよびシンボル

を選択する。インクルードでGMockとGTestのインクルードパスを追加。

    Z:\tools\gmock\include
    Z:\tools\gmock\gtest\include
    

リモートビルドの設定はめんどくさかったので、とりあえずビルドはコンソールからコマンドを叩きます。

とりあえず、ここまでで初めの章をすすめる準備が整った。あとはひたすら読み進めるのみだが。。。Keine Zeit!!!

### libcurl

Chapter5で必要となる。サイトから最新版をダウンロード。

  * <a href="https://curl.haxx.se/" target="_blank" rel="noopener noreferrer">curl and libcurl</a> 
      * curl-7.32.0.tar.gz

以下のコマンドでインストール。

    tar zvxf curl-7.32.0.tar.gz
    export CURL_HOME=/home/tsu-nera/tools/curl-7.32.0
    cd $CURL_HOME
    mkdir build
    cd build
    cmake ..
    make
    

### JsonCpp

Chapter5で必要となる。サイトから最新版をダウンロード。

  * <a href="https://sourceforge.net/projects/jsoncpp/files/" target="_blank" rel="noopener noreferrer">json-cpp &#8211; Browse Files at SourceForge.net</a> 
      * jsoncpp-src-0.5.0.tar.gz

インストールには、pythonで書かれたビルドツールsconsというものが必要らしい。(makeのようなもの）。以下から落とす。

  * [SCons &#8211; a Software Construction tool &#8211; Browse /scons-local at SourceForge.net][4] 
      * scons-2.3.0.zip

適当なところに解凍する。setup.pyが中にあるので、sconsをインストール。

    sudo python setup.py install
    

つづいて、jsonをビルドする。

    tar zvxf jsoncpp-src-0.5.0.tar.gz
    export JSONCPP_HOME=/home/tsu-nera/tools/jsoncpp-src-0.5.0
    cd $JSONCPP_HOME
    scons platform=linux-gcc
    cd $JSONCPP_HOME/libs
    cp linux-gcc-4.4.7/libjson_linux-gcc-4.4.7.so libjson_linux-gcc.so
    

環境変数のバージョン(gcc 4.4.7)でしか、ビルドできなかった。。。とりあえず動作する。

追記:ビルドのために以下も。

    export LD_LIBRARY_PATH=$JSONCPP_HOME/libs:$LD_LIBRARY_PATH
    export LD_LIBRARY_PATH=$CURL_HOME/build/lib:$LD_LIBRARY_PATH
    

### Boost

C++をbotstさせるライブラリ群、Boostをインストールします。以下から、最新版を落とす。

  * [Boost C++ Libraries &#8211; Browse /boost/1.54.0 at SourceForge.net][5] 
      * boost_1_54_.0.tar.gz

任意のディレクトリに配置して、パスを通す。

    tar zvxf boost_1_54_0.tar.gz
    export BOOST_ROOT=/home/tsu-nera/tools/boost_1_54_0
    export BOOST_VERSION=1.54.0
    

続いて、必要なライブラリをBuildする。

    cd $BOOST_ROOT
    ./bootstrap.sh --with-libraries=filesystem,system
    ./b2
    

### CppUTest

レガシーコードに対するモックはGoogleMockよりも、CppUTestのほうがモックしやすいという理由で、CppUTestも紹介されている。以下からダウンロード。

  * [Cpputest][6]

以下でインストール。

    tar xvzf cpputest-3.3.tar.gz
    export CPPUTEST_HOME=/home/tsu-nera/tools/cpputest-3.3
    cd $CPPUTEST_HOME
    make
    make -f Makefile_CppUTestExt
    

※3.4,3.5はまだ動かない。

### rlog

Chapter8でrlogが使われます。

[rlog &#8211; C++ logging library &#8211; Google Project Hosting][7]

以下でインストール。

    tar xvzf rlog-1.4.tar.gz 
    export RLOG_HOME=/home/tsu-nera/tools/rlog-1.4
    cd $RLOG_HOME
    

<div id="fastlookup_top" style="display: none;">
</div>

<!--:-->

<!--:en-->

<!--:-->

 [1]: https://futurismo.biz/archives/1841
 [2]: https://code.google.com/p/googlemock/downloads/list
 [3]: https://futurismo.biz/archives/1302
 [4]: https://sourceforge.net/projects/scons/files/scons-local/
 [5]: https://sourceforge.net/projects/boost/files/boost/1.54.0/
 [6]: https://cpputest.github.io/index.html
 [7]: https://code.google.com/p/rlog/