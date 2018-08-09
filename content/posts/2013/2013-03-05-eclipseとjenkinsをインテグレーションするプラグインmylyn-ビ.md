---
author: admin
categories:
- Eclipse
- Jenkins
date: 2013-03-05T12:49:55+00:00
dsq_thread_id:
- 3.701391e+09
pvc_views:
- 4577
title: EclipseとJenkinsをインテグレーションするプラグイン[Mylyn ビルド・コネクター Hadson/Jenkins]
type: post
url: /archives/=1233
---

Eclipseを使っていて、Jenkinsも使っていると、どうしてもEclipseからJenkinsを覗き見したくなります。(\*/∀＼\*)ｲﾔﾝ。Eclipseは総合開発環境なので、全てEclipseから実施しないと気が済みません。

ということで、EclipseからJenkinsのビルド結果を確認するためのプラグイン

<font color="#0000ff" size="5">Mylyn ビルド・コネクター Hadson/Jenkins</font>

を試しました。

### インストールと導入設定

#### インストール

インストールは以下のURLを[ヘルプ] > [新規ソフトウェアのインストール] > [追加]に追加して、落としてくるのがよい。

<https://download.eclipse.org/mylyn/releases/latest>

（他にも、mylynのビューから[新規タスクの追加] > [コネクターをさらにインストール]からHadson/Jenkinsを選択してもよい。しかし、上記URLから落としてきたほうが最新版がテに入るので良い）

#### 導入設定

まずは[ウィンドウ] > [ビューの設定] > [mylyn] > [ビルド]からビルドビューをだす。   
次に、[新規ビルドサーバを追加] > [Jenkins]を選択する。

サーバーの欄にJenkinsサーバのURLを入力。   
ユーザ管理されている場合は、ログインするユーザ・パスワードを入力。

これでいったん、左下の[検証]を押してサーバと接続できるか試す。   
（できないときは、プラグインのバージョンが古いかも。   
自分も古いバージョンでログインできずにハマった）

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb93.png" width="511" height="368" />][1]

ビルド・プランの欄にJobが現れるので、Eclipseから見たいJobを選択して、完了をおす。

### こんな感じ

ビューから最新のビルド結果を見ることができる。   
また、ビルドの履歴、テスト結果、ビルド時のコンソールもみれる。   
これがあれば、わざわざサーバまでアクセスして結果の確認をする必要もない。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb94.png" width="566" height="98" />][2]

また、ビルドの成功、失敗はポップアップ通知で表示されたりする。

[https://www.youtube.com/embed/2qTgUnHY7s4]

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image93.png
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image94.png