---
author: admin
categories:
- Java
- Jenkins
date: 2017-10-01T08:43:39+00:00
dsq_thread_id:
- 6.1831803e+09
excerpt: Java開発でJenkinsを個人運用するためのメモ
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
- 325
side:
- "y"
title: Java開発でJenkinsを個人運用するためのメモ
title_view:
- "y"
type: post
url: /archives/=6805
---

## はじめに {#-}

仕事でJava開発をすることになったのだけれども、
  
コードの品質をGUIで可視化すると便利だなと思って、
  
Jenkinsをつかってみることにしました。

あくまで可視化するためのグラフィカルな便利cronとしての役割のみ求めているので、複雑なことや難しいことはしません。

### やりたいこと {#-}

  * gradle 連携
  * FindBugsの指摘を可視化
  * CheckStyleの指摘を可視化
  * ステップ数を数える
  * TODO 管理
  * spock テスト実行

## version {#version}

  * Jenkins 2.73.1
  * StepCounter Plugin 2.0.0
  * FindBugs Plugin 4.71
  * CheckStyle Plug-in 3.49
  * Task Scanner Plug-in 4.52

## Jenkinsのインストール {#jenkins-}

お試しなので、自PCのUbuntu 16.04 LTSにインストールします。手順は以下。

  * <https://pkg.jenkins.io/debian-stable/>

仕事では、CentOS 7.4にインストールします。

  * <https://pkg.jenkins.io/redhat-stable/>

ポート番号の変更をします。デフォルトでは8080です。
  
/etc/default/jenkinsを編集して、12345とか適当なものに変更します。

    - HTTP_PORT=8080
    + HTTP_PORT=12345
    

Jenkinsを再起動。

    $ sudo systemctl daemon-reload
    $ sudo service jenkins restart
    

<https://localhost:12345> にアクセスして、画面が表示されることを確認。

手順にしたがって、初期設定をする。オススメプラグインをインストールする。

## リポジトリをチェックアウトしてビルドしてみる {#-}

とりあえず以下のgithub repoを利用します。ビルドツールはgradleです。

  * [https://github.com/tsu-nera/java\_spock\_playground][1]

設定手順

  * General -> プロジェクト名に "hello_jenkins"を入力
  * ソースコード管理 -> git にチェックして、リポジトリURLに [https://github.com/tsu-nera/java\_spock\_playground.git][2] を入力
  * ビルド -> ビルド手順の追加 -> Invoke gradle script を選択

手動でビルドを実行すると、githubからcloneして、gradleコマンドが叩かれる。

## プラグインでやりたいことを実現 {#-}

### ステップ数を数える {#-}

以下のプラグインを追加。

  * StepCounter Plugin
  * 設定 -> ビルド後の処理 -> ビルド後の処理の追加を選択
  * Step Counter を選択
  * ファイルの種類: java,
  * 解析するファイルパターン *\*/\*.java を入力

### FindBugsの設定 {#findbugs-}

以下のプラグインを追加。

  * FindBugs Plug-in
  * 設定 -> ビルド後の処理 -> ビルド後の処理の追加を選択
  * Findbugs警告の集計を選択
  * build/reports/findbugs/main.xmlを入力。
  * build.gradleに以下を追加

<pre><code class="lang-groovy">apply plugin: &#39;findbugs&#39;

findbugs {
    reportsDir = file("./build/reports/findbugs")
    ignoreFailures = true
}
</code></pre>

### CheckStyleの設定 {#checkstyle-}

  * CheckStyle Plug-in
  * 設定 -> ビルド後の処理 -> ビルド後の処理の追加を選択
  * CheckStyle警告の集計を選択
  * build/reports/checkstyle/main.xmlを入力。
  * build.gradleに以下を追加

<pre><code class="lang-groovy">apply plugin: &#39;checkstyle&#39;

checkstyle {
    reportsDir = file(&#39;./build/reports/checkstyle&#39;)
    configFile = file(&#39;./sun_checks.xml&#39;)
    ignoreFailures = true
}
</code></pre>

  * ここから、checkstyleの設定ファイルを取得してプロジェクトルートに置く。 <https://github.com/checkstyle/checkstyle/tree/master/src/main/resources> 
      * google_checks.xml
      * sun_checks.xml
  * 設定-> ビルド -> ビルド手順の追加 -> Invoke gradle script を選択
  * Use Gradle Wrapperを選択。Tasksのところに以下を入力。

    checkstyleMain
    findbugsMain
    

### TODO を表示 {#todo-}

  * TaskScanner Plug-in
  * 設定 -> ビルド後の処理 -> ビルド後の処理の追加を選択
  * 未解決タスクの集計を選択
  * 集計対象に *\*/\*.javaを入力

### spock テスト実行 {#spock-}

  * 設定 -> ビルド後の処理 -> ビルド後の処理の追加を選択
  * JUnitテスト結果の集計を選択
  * テスト結果xmlに *\*/\*Spec.xmlを入力
  * 設定-> ビルド -> ビルド手順の追加 -> Invoke gradle script を選択
  * Use Gradle Wrapperを選択。Tasksのところに以下を入力。

    clean test
    

## ジョブの実行 {#-}

エラーするので以下をプロジェクトルートで叩いた。

    sudo gradle wrap
    

  * [gradlewが謎のエラーで動かない件について &#8211; Qiita][3]

 [1]: https://github.com/tsu-nera/java_spock_playground
 [2]: https://github.com/tsu-nera/java_spock_playground.git
 [3]: https://qiita.com/pg_mot/items/bf02f4f37382696f3898