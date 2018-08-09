---
author: admin
categories:
- Jenkins
- 技術メモ
date: 2012-12-02T11:01:38+00:00
dsq_thread_id:
- 3.7129905e+09
pdrp_attributionLocation:
- end
pvc_views:
- 5897
tags:
- cygwin
- git
title: git commitをフックしてJenkins でビルドを起動
type: post
url: /archives/=826
---

gitでリボジトリへコミットすると、それをJenkinsが検出して、ビルドを実行する仕組みを入れてみた。

[toc]

### 通知にするべきかポーリングにするべきか、それが問題だ。

調べてみると、gitのCommitからJenkinsにビルドさせる方法は2つあるっぽい。

  * git commit時にJenkinsに通知する方法
  * Jenkinsがgitリボジトリを定期的にポーリングする方法

通知だと、gitのフック機能を利用して、簡単に実現できる。
  
ポーリングだと、Jenkins GIT Pluginを使って実現できる。

通知方法だと、branchごとにビルドを起動できないという弱点がある。
  
今回は、post-commitの方法を利用する。（というより、ポーリングは挫折した)

#### 環境

  * Windows 7 64bit
  * Cygwin

### wgetでJenkinsのジョブをキックする

#### Jenkinsトークンを利用して、リモートからビルドキック

コマンドラインからJenkinのジョブを起動するには、wgetコマンドを使う。

リモートから、jenkinsにアクセスするためには、管理画面からトークンの設定をしておく。

  * 設定 => ビルドトリガ => リモートからビルド
  * 認証トークンで任意のトークン名を記述

これで、JENKINS\_URL/job/vxUnit/build?token=TOKEN\_NAMEというURLでリモートからキックすることができるようになる。Jobの実行をアカウントを持つユーザのみにしている場合は、&#8211;http-user/&#8211;http-passworオプションをつける。まとめると、

    wget --http-user=<ユーザ名> --http-password=<パスワード> https://yourserver.com/job/<ジョブ>/build?token=＜token名＞ 
    

#### git post-commmitの設定

.git/hooks/配下にあるpost-comitファイルに以下の行を追加。 https://localhost:8080の部分は、自分の環境に読み替えてください。

    wget --no-proxy https://localhost:8080/job/(ジョブの名前）/build?delay=5sec
    

post-commitがなければ、新規作成して、実行権限を与える。

    touch post-commit
    chmod a+x post-commit
    

post-commit例

    #!/bin/sh    
    echo "Hook post-commit start"
    wget --no-proxy <a href="https://localhost:8080/job/4th_ginnan/build?delay=5sec">https://localhost:8080/job/4th_ginnan/build?delay=5sec</a> || echo "wget failed"
    echo "Hook post-commit end"
    

あとは、git commitを実行すれば、Jenkinsに通知が飛んで、Jobが実行された。

参考:
  
[コマンドラインからJenkinsのジョブを実行する &#8211; azuki note][1]

 [1]: https://d.hatena.ne.jp/w650/20110419/1303183753