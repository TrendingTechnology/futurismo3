---
author: admin
categories:
- Jenkins
- Ruby
date: 2013-06-17T13:57:37+00:00
dsq_thread_id:
- 3.7269594e+09
pdrp_attributionLocation:
- end
pvc_views:
- 2638
tags:
- git
title: cronとwatchrを使ってJenkinsからオレオレリポジトリ監視してみる
type: post
url: /archives/=1490
---

### はじめに

Jenkinsを利用てリポジトリ監視をしたい。しかし、自分が利用しているSCMは社内独自ツールという、

(´・д・｀)

なカンジなので、Jenkinsのプラグインがなかった。しかたがないので、こんな方法でなんとかならないか考えた。

  * cronを利用して、5分毎にローカルのリポジトリをアップデートする。 
  * watchrを利用して、ファイルの変更を監視。 
  * wgetを利用して、Jenkinsのジョブをキックする。 

[toc]

#### 今回利用するもの

  * CentOS 
  * git 
  * Jenkins 
  * crontab
  * watchr 

### cronで定期リポジトリ更新

5分毎にローカルで持っているリポジトリを更新する。５分毎の定期実行はJenkinsを利用てもいいけど、これはバックグラウンドで動かしたいので、cronを利用しようと思う。

まずは、crontabに実行したいコマンドを記述する。以下のコマンドでエディタが開きます。

    % crontab -e  
    

cronの記述方法は

    「分」「時」「日」「月」「曜日」 [実行コマンド]
    

詳しくは、以下を参照。

<a href="https://www.server-memo.net/tips/crontab.html" target="_blank">crontabの書き方 — server-memo.net</a>

「/」を利用すると、間隔を指定できる。たとえば、5分毎にコマンドを実行するには、以下のように書く。

    */5 * * * * git pull 
    

せっかくならば、JenkinsのJobを使ってもよい。その場合は、古いビルドの破棄にチェックを入れて、ビルドの最大保存数を制限する。Jenkinsで5分定期を動かす記法はcronと同じ。

    */5 * * * *
    

### watchrを利用して、ファイルの変更を監視

ファイルに変更があったかどうかを監視するためのrubyスクリプトでwatchrというものがある。これで、ファイルの変更を見つけたらJenkins Jobをキックしてみる。(ちなみに、pythonだとwatchmedo)

    [tsu-nera]% gem install watchr
    Successfully installed watchr-0.7
    Parsing documentation for watchr-0.7
    1 gem installed
    

設定ファイルに監視のルールを書く。設定ファイルの書き方は、Readmeが参考になる。

  * https://github.com/mynyml/watchr/blob/master/README.md

以下のように、監視したいファイルを正規表現で、監視に引っかかったファイルに対して、実行したいコマンドを書く。

    watch( 'test/test_.*\.rb' )  {|md| system("ruby #{md[0]}") }
    watch( 'lib/(.*)\.rb' )      {|md| system("ruby test/test_#{md[1]}.rb") }
    

wathcrコマンドに設定ファイルを渡して実行する。

    bash-4.1# watchr git.watchr　&
    

### wgetを利用して、Jenkinsのジョブをキック

wgetでURLを指定すると、Jenkinsのジョブを実行することができる。

    $ wget --http-user=<ユーザ名> --http-password=<パスワード> https://yourserver.com/job/<ジョブ>/build?token=＜トークン名＞
    

以下の過去記事も参照。

  * <a href="https://futurismo.biz/archives/826" target="_blank">git commitをフックしてJenkins でビルドを起動 | Futurismo</a>

今回はコレ。

    wget --no-proxy --http-user=tsu-nera --http-password=*********** https://192.168.118.130:8080/job/vxUnit/build?token=vxunit_token
    

まとめると、watchrに渡す設定ファイルは以下のようになる。

    watch( 'src/*.[ch]' )  {|md| system("wget --no-proxy --http-user=tsu-nera --http-password=********** https://localhost:8080/job/vxUnit/build?token=vxunit_token") }
    watch( 'test/*.[ch]' )  {|md| system("wget --no-proxy --http-user=tsu-nera --http-password=********** https://localhost:8080/job/vxUnit/build?token=vxunit_token") }