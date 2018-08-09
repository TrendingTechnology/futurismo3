---
title: CI/CDによるアジャイルなブログ記事作成
date: 2018-08-07 17:00:00
size: false
image: "http://res.cloudinary.com/tsu-nera/image/upload/c_thumb,w_600/v1533617837/futurismo/thumbnails/blog-writing.jpg"
---

この記事では、アジャイルなアプローチでブログ記事を作成する方法を紹介します。
また、継続的インテグレーション・継続的デリバリをブログ執筆に導入します。

## TL;DR

まずは、やったことの概要を紹介します。

- GitHubで記事のissueを作成
- topic branch作成（posts/xxxx-xxxx）
- topic branchからマスタbranchにpull-requestを立てる
- Git commit & Git pushを小さく繰り返して執筆を進める
- GitHubにpushされるたび、Circle CIとNetlifyでビルド & テストを実施
  - textlint
  - prh
  - markdownlint
  - codecov
  - gatsby build
  - （Netlify Previewも裏で動く）
- GitHubのProtect branches機能を設定し、マスタbranchへのマージ可能状態を、次の条件がそろったときとする。
  - CirclCIの結果OK
  - Netlify Deploy Preview画面チェックOK
  - Netlify gatsby build OK
- serverlessのpost-schedulerによって、投稿のスケジューリングをする。
- 投稿の時間になると、post-schedulerがPRのacceptとマスタbranchへのmerge
- Netlifyがmargeをtriggerにしてデプロイ開始
- サイト公開される
- GitHub issue閉じる
- topic branchのクローズ
- slackに完了通知

## Introduction

まずは、この記事を書くきっかけになった２つの記事を紹介します。

- [オンラインドキュメントへCI/CDを適用している話](https://www.slideshare.net/iwashi86/cicd-86801443)

@iwashi86さんのスライド。図をみて、これはやりたいと思いました。

- [Introduction \| 技術文書をソフトウェア開発する話](https://azu.gitbooks.io/nodefest-technical-writing/content/)

@azu_reさんの記事。textlintに触れたときは、これは作文のゲームチェンジになるツールだと思いました。
また、この記事には名言がたくさん埋め込まれています。

- 文章は動的型付き言語
- 技術文書の開発でもCIを回すのが基本
- 自動校正 = ユニットテスト
- 推敲 = リファクタリング

２つとも自分には衝撃的であり、感動しました。そして、自分も真似してみたいと思ったことが今回の記事執筆の動機です。
これから書く内容は、いわばお二人のアイデアの焼き回しです。

先日、このアイデアを語ったところ、そのメリットは？と質問されました。このアジャイルなブログ執筆のメリットは、**ワクワクできる**ことです！

## 使っている技術・ツール・サービスの紹介

- Markdown ... 見やすい記法
- Visual Studio Code ... 高機能エディタ、ここではMarkdown IDE
- GatsbyJS ... 世界最速のReact製な静的サイトジェネレータ
- Git ... バージョン管理ツール
- GitHub ... ソースコードのホスティングサーバ
- Netlify ... 静的サイトのホスティングサーバ
- CircleCI ... 継続的インテグレーションを行うための高機能cron
- textlint/markdownlint ... 表記や構文のチェックを行うツール
- codecov ... カバレッチ計測サービス
- serverless ... サーバレースサービス、よく分かっていない
- slack ... チャットツール

## 文章執筆IDEとしての Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/)を文章執筆のための統合開発環境IDEとして扱います。

プラグインを入れることで、強力なMarkdownの執筆支援が可能です。

- Markdown記法のハイライト
- Markdownリアルタイムプレビュー
- textlint/markdownlintによる静的解析
- Git Integration

静的解析のために、textlintとMarkdownLintを利用しています。

- [作文界のゲームチェンジャー！ 日本語の文章校正ツールのtextlintを試した](https://futurismo.biz/use-textlint-for-markdown/)
- [markdownlintをつかって、Markdownファイルの構文チェックを行う](https://futurismo.biz/use-textlint-for-markdown/)

Lintingからのエラーのフィードバックはユニットテストに相当します。

## GitHub Flow

GitHub Flowに従った執筆を実施します。

- [GitHub Flow \(Japanese translation\)](https://gist.github.com/Gab-km/3705015)
- [GitHub Flow 図解 \- Qiita](https://qiita.com/tbpgr/items/4ff76ef35c4ff0ec8314)

Git Flowというものが有名ですが、複雑すぎる欠点があるためより簡単なGitHub Flowを採用しました。

具体的には、次のとおり。

- Issueを立てる、branchを切る
- pull-requestをなげる
- commitとpushを小さく繰り返す
- レビューとビルド、テストが通ったらmerge
- branchとIssueを閉じる

## 継続的インテグレーション（CI）

GitHubにpushされるたび、ビルドとテストを実施します。

- build == yarn install/gatsby build
- test == textlint/markdownlint

ここでは、Circle CIとNetlifyの２つのサービスを利用します。どちらも、 GitHubにpushされたことをトリガにして、動作します。

- [CircleCI](https://circleci.com/) ... yarn install/textlint/markdownlint Markdownのビルド
- [Netlify](https://www.netlify.com/) ... gatsby build JavaScriptのビルド/画面プレビュー

![github-ci-status](https://res.cloudinary.com/tsu-nera/image/upload/v1533616533/futurismo/posts/2018-08-07-132835_github-ci-status.png "GitHub CI Status")

また、[codecov](https://codecov.io/)というカバレッジ計測ツールと連携させることで、カバレッジを計測できます。

- 参考: [textlintで文章カバレッジレポートを継続的に見ていく \| Web Scratch](https://efcl.info/2016/01/12/textlint-coverage/)

## 継続的デリバリ（CD）

レビュー、テスト、ビルドの３つがOKであれば、 記事branchからマスタbranchにmargeします。

ここでは、GitHubのProtected Branches機能によって、
NetlifyとCircleCIの両方がOKでないとmarge禁止というルールを設定します。
1人記事執筆なのでレビュアーいないため、CircleCIとNetlifyが番人となります。

- [GitHub \+ Jenkins で、全てのプルリクエストに対してレビューとテストを必須にする \- Qiita](https://qiita.com/bonotake/items/37fb3194c33f3ae3bbf0)

![branch protectoin rule](https://res.cloudinary.com/tsu-nera/image/upload/v1533616533/futurismo/posts/2018-08-07-branch-protection-rule.png)

## 投稿のスケジューリング

この段階まできたら、記事branchはマスタbranchへいつでもmerge可能、デプロイ可能となっています。
なので記事の予約投稿を設定することによって、適切なタイミングで記事を公開します。
予約投稿には、[serverless](https://serverless.com/)というサービスを使います。

- [How To Schedule Posts for Static Site Generators \(Jekyll, Hugo, Phenomic etc\.\)](https://serverless.com/blog/static-site-post-scheduler/)

ついでに、Twitterの予約投稿もしかけます。

投稿の時間になると、serverlessがPRのacceptとマスタbranchへのmergeを実施します。
マスタbranchへのcommitをトリガにしてNetlifyが動作して、本番環境に記事をデプロイします。

![post-scheduler](https://res.cloudinary.com/tsu-nera/image/upload/v1533616533/futurismo/posts/2018-08-07-post-scheduler.png)

あとは、branchとissueを削除して、slackにデプロイ完了の通知がくるのを待ちます。

めでたし、めでたし。

## Reference and Many Thanks

- [オンラインドキュメントへCI/CDを適用している話](https://www.slideshare.net/iwashi86/cicd-86801443)
- [Githubで書く電子書籍](http://azu.github.io/slide/individual/)
- [Introduction \| 技術文書をソフトウェア開発する話](https://azu.gitbooks.io/nodefest-technical-writing/content/)
- [一人で使えるGithub Issue](http://azu.github.io/slide/udonjs/github-issue.html)
