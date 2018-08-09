---
author: admin
categories:
- C言語
- Jenkins
- Python
- 技術メモ
date: 2012-09-22T22:20:19+00:00
dsq_thread_id:
- 3.727963e+09
pdrp_attributionLocation:
- end
pvc_views:
- 11469
tags:
- gcov
- XML
- カバレッジ
title: C言語でのgcovカバレッジ計測結果をJenkinsで表示させる
type: post
url: /archives/=485
---

C言語でのカバレッジ計測結果をJenkinsで表示させる方法について調べてみた。
  
２つの方法があるみたい。

  1. lcov + HTML Publisher plugin で出力
  
    <a name="p1" href="https://d.hatena.ne.jp/nekozeoyaji/20100527/p1">Hudsonの使い方21 Hudsonでユニットテスト網羅率測定（C言語）</a>

  2. gcovr + Coberturaプラグイン で
  
    [Jenkinsでテストとカバレッジの結果をグラフ表示できるようにする][1]
  
    [Jenkins を iOS アプリ開発に導入してみた (gcov編)][2]

今回は2番目の方法で試してみた。 流れとしては以下のとおり。

> C言語のプロダクトコード
    
> ↓(gcov)
> 
> カバレッジデータ
    
> ↓(gcovrでCobertura形式のXML出力)
> 
> XMLカバレッジ結果
    
> ↓(Jenkins Cobertura Plugin)
> 
> Jenkinsて結果出力

### C言語の定番カバレッジツール gcov でカバレッジを計測する

まずはC言語の定番カバレッジツール gcov でカバレッジを計測してみる。
  
Cygwinではデフォルトでgcovコマンドがある。

gcovを使うためには、コンパイルをするときに、以下のコンパイルオプションをつける必要がある。

    -fprofile-arcs -ftest-coverage
    

Makefileをいじるときは、以下を追加すればよい。

    CFLAGS += -fprofile-arcs -ftest-coverage
    LDFLAGS += -fprofile-arcs
    

すると、.gcno というファイルができる。 実行ファイルを実行すると、.gcdaというファイルができる。
  
これが、カバレッジ計測結果データ。次に、これをXML形式に変換する。

### gcovrでXML形式のカバレッジ結果を出力する

gcovrとは、gcovでの出力結果を編集して出力してくれるツール。
  
Jenkinsで結果を見るには[Cobertura][3]と呼ばれるXMLフォーマットに変換する必要がある。
  
まずは、以下からダウンロードする。 公式のページは[ココ][4]Pythonで記述されたコードなので、適切なことろに保存する。(/usr/local/bin/とか）

[gcovr][5]

コマンドラインからだと、以下のコマンドで取得

    wget https://software.sandia.gov/trac/fast/export/2799/gcovr/trunk/scripts/gcovr
    

保存したら、実行権限を与える。

    chmod u+x gcovr
    

gcovrは以下の形式で実行する。

    gcovr --xml --output=(出力ファイル名).xml (ディレクトリ名)
    

サンプル

    gcovr --xml --output=gcovr_result.xml src/  
    

これで、XMLファイルができた。次はこれをJenkinsで出力する。

### Cobertura PluginでJenkins上でカバレッジ結果を見る

まずは、Cobertura PluginをJenkinsにインストールする。
  
[Jenkinsの管理] > [プラグインの管理] から Cobertura Pluginを選択して、インストール。

カバレッジ出力するための設定は、[設定] > [ビルド] で、gcovrのコマンドを追加する。

ちなみに、Windowsバッチコマンドだと以下のようなコマンドを追加したら動いた。 gcovrの前にpython2.6.exeを入れると動くが、 gcovrだけだったり、python gcovrだと動作しなかったりするのがナゾ。

    python2.6.exe gcovr --xml --output=gcovr_result.xml src/
    

[ビルド後の処理] に [Cobertura カバレッジレポートの集計] という項目が追加されているので、選択。
  
Cobertura XMLレポート パターンという項目に、xmlファイル名を追加する。
  
（カスタムワークスペースを設定していない場合はパスも込で）

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb17.png" alt="image" width="437" height="145" border="0" />][6]

これで、ビルドを実行すればカバレッジが表示される。

### カバレッジ表示結果

プロジェクト画面に[カバレッジレポート]という画面が現れる。
  
カバレッジはここで見ることができる。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb18.png" alt="image" width="558" height="258" border="0" />][7]

 [1]: https://safx-dev.blogspot.jp/2012/03/jenkins.html
 [2]: https://akisute.com/2012/01/jenkins-ios-gcov.html
 [3]: https://cobertura.sourceforge.net/
 [4]: https://software.sandia.gov/trac/fast/wiki/gcovr
 [5]: https://software.sandia.gov/trac/fast/export/2799/gcovr/trunk/scripts/gcovr
 [6]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image17.png
 [7]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image18.png