---
author: admin
categories:
- C言語
- Eclipse
- 技術メモ
date: 2013-06-20T10:32:32+00:00
dsq_thread_id:
- 3.6988703e+09
pdrp_attributionLocation:
- end
pvc_views:
- 15544
tags:
- gdb
title: gdbserverを立ちあげてリモートデバッグする方法メモ
type: post
url: /archives/=1502
---

プログラムの勉強をする開発環境は今までCygwinを利用していたが，最近はvmware上のCentOSに乗り換えた。

C言語のコードを編集するときは、Windows上でEclipseを起動してsamba経路でソースを編集してる。コンパイルを実施するときは、ssh接続でリモートシェルを起動している。

今回、gdbをEclipseから利用する方法を調べてみた。利用するのは、

gdbserver

デバッグ対象のプログラムを実行しているマシンとは異なるマシン上で GDB を実行することを可能にするプログラム。

### 環境

  * ターゲットPC CentOS 6.4
  * ホストPC Windows 7 (Cygwin)

### gdbserverをインストールする

なにはともあれ、まずはgdbとgdbServerをターゲットPCにインストールする

    yum -y install gdb
    yum -y install gdb-gdbserver
    

### Cygwinのgdbからgdbserverに接続してリモートデバッグ

CentOS上でgdbserverを立ちあげて、Windows上のCygwinで動作してているgdbからTCP接続でアクセスします。

#### gdbserverの起動

gdbserverの起動のための書式は以下。

    gdbserer (ターゲットIP):(ポート番号) (プログラム) [引数]
    

例えば、hogehoge.exeをポート8081で起動する場合、

    [tsu-nera]% gdbserver locallhost:8081 hogehoge.exe
    Process hogehoge.exe created; pid = 3739
    Listening on port 1234
    

これでホストPCからの接続を待っている状態になる。

ちなにみ、ポートが開いていない場合は開けておく。

    sudo emacs  /etc/sysconfig/iptables
    # for gdbserver
      -A INPUT -m state --state NEW -m tcp -p tcp --dport 8081 -j ACCEPT
    

#### gdbクライアントからgdbserverに接続

クライアント側でも、gdbを起動。Cygwin上のgdbを利用して、samba経路でhogehoge.exeを起動する。

    gdb hogehoge.exe
    

リモートのターゲットに接続するためには、以下を入力。

    (gdb) target remote saru:8081
    Remote debugging using saru:8081
    warning: A handler for the OS ABI "GNU/Linux" is not built into this configuration
    of GDB.  Attempting to continue with the default i386 settings.
    

接続完了。あとはお好きな様に。

### Eclipseからgdbserverに接続してリモートデバッグ

Eclipseには、高機能なGUIインタフェースのgdbが付いている。コレを使用する。

  * プロジェクトを右クリック -> デバッグ -> デバッグの構成
  * C/C++リモート・アプリケーション -> 新規 を選択。
  * C/C++アプリケーションで、sambaから見えている実行ファイルを選択。
  * 同じビューの下のほうにある、GDB(DSF) Manual Remote Debugging ランチャーを選択。
  * デバッガータブを開き、接続タブを選択。
  * 型でTCPを選択。ホスト名とポートも入力。
  * 最後に、デバッグを押して完了。

ソースが見えないときは、ソース・ルックアップパスの設定でパス・マッピングをする。例えば、sambaでZ\ドライブに/home/tsu-neraを割り当てている場合、Z\と/home/tsu-nerを割り当てる。

これで、Eclipseから見えるはず！！！(｀･ω･´)ゞ

とおもったが、breakpointをはってもgdbが止まってくれない。。。(T_T)

ステップ実行も変数の値の書き換えもできるが、ブレークポイントでトマラない。。(T_T)

5時間頑張って、今日は挫折した。このくらいで許してよ。orz

追記: gdb traceをみてみると、以下のエラー。どうやら、ソースが見えない？？

    789,439 26-break-insert --thread-group i1 -f /home/tsu-nera/repo/vxUnit/vxUnit/test/Testhogehoge.c:2\
    4
    789,510 &"No source file named /home/tsu-nera/repo/vxUnit/vxUnit/test/Testhogehoge.c.\n"
    789,513 26^done,bkpt={number="2",type="breakpoint",disp="keep",enabled="y",addr="<PENDING>",pending=\
    "/home/tsu-nera/repo/vxUnit/vxUnit/test/Testhogehoge.c:24",times="0",original-location="/home/tsu-ne\
    ra/repo/vxUnit/vxUnit/test/Testhogehoge.c:24"}
    789,513 (gdb) 
    

#### 参考

  * <a href="https://d.hatena.ne.jp/ponkme/20101117/1289966852" target="_blank">eclipseでqemu上の仮想マシンのデバッグ &#8211; 杜松の実 改め ponkmeの日記</a>

  * <a href="https://code.google.com/p/myboards/wiki/RemoteDebuggingusingEclipseIDE" target="_blank">RemoteDebuggingusingEclipseIDE &#8211; myboards &#8211; Resources of all the boards available at EasyARM &#8211; Google Project Hosting</a>