---
author: admin
categories:
- Eclipse
date: 2013-09-01T07:53:43+00:00
dsq_thread_id:
- 3.7077878e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 8420
tags:
- git
title: EclipseとGithubを連携させるプラグイン『EGit』を利用して、新しいリボジトリを作成する手順メモ
type: post
url: /archives/=1821
---

<!--:ja-->

Githubにローカルリポジトリを登録する方法は以前調べました。

  * [githubに新しいリポジトリを作成してローカルのリポジトリをアップロードする | Futurismo][1]

今回、Eclipseで管理しているプロジェクトをそのままGithubにアップロードしたかったので、その手順をメモします。

#### 環境

  * Eclipse 4.3 Kepler
  * git 1.7.9

### Egitプラグインをインストール

まだEGITがはいっていない場合は、インストールする。たぶん、デフォルトで搭載されているはず。

  * [EGit &#8211; Download][2]

### ローカルリポジトリの作成

Git管理したいプロジェクトを右クリックして

  * チーム -> プロジェクトの共用 -> Git -> 次へ
  * プロジェクトの親フォルダ内のリポジトリを使用または作成をチェック
  * 完了を選択。

これで、すでに.gitがある場合はそれをEclipseから見ることができ、.gitがない場合は新規作成されます。

無視するフォルダを選択して、チーム -> 無視 を選択。これで、.gitignoreにフォルダが登録されます。

  * .setting/org.eclipse.jdt.core.prefsはEclipseの設定ファイルなので、無視。
  * .classpathはビルド時の外部jarのパスがかかれたファイルなので残す。
  * .projectはEclipseプロジェクトの設定ファイルなので、残す。

.gitignore

    /bin
    /.settings
    

最後に、初回commitをしましょう。チーム -> コミットでコミットする。

### githubにリポジトリリポジトリ作成

githubにリポジトリを作成します。詳細は、以前の記事と同じなので、省略。

  * [githubに新しいリポジトリを作成してローカルのリポジトリをアップロードする | Futurismo][1]

ここでは、リモートリポジトリになにも作成しません。

### EclipseとGithubを連携する

Githubにpushします。

チーム -> リモート -> プッシュを選択。

URIの欄に、HTTPSのURLを選択

    https://github.com/tsu-nera/coursera-algorithms-part1.git
    

あとの欄は勝手に入力される。

続いて、ref mappingの設定。ここでは、ローカルのmaster　branchに、リモートのmasterブランチを対応させる。

  * ソース参照 refs/heads/master
  * 宛先参照 master

これで、プッシュできるようになりました。

つづいて、プルの設定。

チーム -> リモート -> 次から取り出しを選択。

続いて、ref mappingの設定。ここでは、ローカルのmaster　branchに、リモートのmasterブランチを対応させる。

  * ソース参照 refs/heads/master
  * 宛先参照 refs/remotes/origin/master

これで、フェッチを選んでもリモートから取れなくて、プルを選択するとリモートから取得できる。このへんは理由がよくわからない。

ちなにみ、作業中に以下のエラーがでた。

    現在のブランチはプル用に構成されていません
    構成にキー branch.master.merge の値がありません
    

以下のサイトを参考に解決。

  * <a href="https://sonoshou.hatenablog.jp/entry/20121111/1352655599" target="_blank">Eclipse と git の連携 &#8211; sonoshouのまじめなブログ</a>

  * ウィンドウ -> 設定 -> チーム -> Git -> 構成を選択。

  * 「ユーザー設定」タブから「エントリーの追加」を選択。
  * キーに「branch.master.merge」、値に「refs/heads/master」と入力し、「OK」

<!--:-->

 [1]: https://futurismo.biz/archives/1280
 [2]: https://www.eclipse.org/egit/download/