---
title: ポートフォリオサイトの企画、設計方法についてのガイドライン
description: ポートフォリオサイトを制作する際、どんな点に注意して企画と設計をすればよいのかを解説しました。
date: 2018-08-17 02:50:13
author: tsu-nera
type: post
tags:
- Portfolio
- React
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1534356933/futurismo/posts/2018-08-16-031303_566x406_scrot.png
---

自分のポートフォリオサイトをReactを使って作成しました。

- [TechAcademyのフロントエンドコースの最終課題でボートフォリオサイトをつくった \| Futurismo](https://futurismo.biz/techacademy-frontend-review/)

ポートフォリオの内容は上記記事に譲るとしてこの記事では、どうやってボートフォリオを作成したか
、またはポートフォリオの企画と設計について述べます。

## 課題:ボートフォリオサイトの作り方がわからん

ポートフォリオサイトをいざ作ろうとしたときに、どうやればいいのかネット上に情報がありませんでした。
ボーとフォリオの完成品は見つかります。知りたいのは、それをどうやって作ったかです。

しかし、しぶとくいろいろネットを探した結果、最終的に発見したのが次の動画シリーズです。

- [React Portfolio Journey \- YouTube](https://www.youtube.com/playlist?list=PLNglBCIijurlEj4mTvA9XU3k4FTKlDlD0)
- [Ricky Garcia](https://garcia-portfolio.herokuapp.com/)

この動画では、どうやってポートフォリオを作成すればいいかが手順ごとに解説されています。
私は、さっそくぱくりました。

## ポートフォリオ作成のためのテンプレート

動画の中で紹介されていたポートフォリオサイトを作成するための企画と設計を書きます。

### 目的の設定

- 問題設定、目標設定
- 解決方法、ゴールの洗い出し
- 誰に対してのポートフォリオか？
- アウトライン・サイトマップ
- ユーザーのユースケース

まずは、問題設定をします。何のために作るのか？定義します。

次に、問題に対する解決方法、つまりはゴールを定めます。

そして、誰のために、ユーザーを明確に定義します。

目的に沿って、サイトマップを箇条書きしていきます。

最後に、ユーザーのユースケース、つまりどんなページを閲覧するのかを予想します。
場合によっては、サイトマップを並び替えます。

### 探索と発見

既存のポートフォリオの調査をします。Google検索です。

そして、情報をまとめます。いいなと思った箇所を盗んできて、メモしておきます。

### ワイヤーフレーム

さて、設計の肝である、モックアップを書きます。
ユーザーインタフェースの定義、アニメーション、要素の状態を定義をします。

### コンテンツ作成

コンテンツ、つまりポートフォリオに載せる自分の内容を準備します。
職務経歴書やGitHubで公開している作品など、整理します。

### デザイン

サイトで利用する画像を探して、ワイヤーフレームに当てはめていきます。

## 私のポートフォリオの作成ドラフトを公開

せっかくですので、私のポートフォリオ作成の下書きを公開します（キャー恥ずかしい）

### 問題設定、目標設定

- 自己ブランドの確立
  - フリーランスの仕事獲得
  - フロントエンド開発スキル（React）の習得
  - 自己スキルやキャリアの棚卸
- 解決方法、ゴールの洗い出し
  - ブログとボートフォリオサイトの立ちあげ
  - スキルセットの列挙
  - コンタクトフォームの設置
- 誰に対してのポートフォリオか？
  - 中小企業のオーナー
  - Web開発企業のエキスパート
  - エンジニア
- サイトマップ
  - Home
  - About Me（自己紹介）
    - ソーシャルアカウント
  - Skills
    - 組込み・IoT
    - Web-バックエンド
    - Web-フロントエンド
    - データサイエンス
    - 資格
    - MOOC受講歴
    - Work History（職務経歴）
      - 転職時に準備したものを流用する
      - 学歴
      - 職歴
  - Projects（サイドプロジェクト）
    - FXシステムトレード
    - Railsサービス(体重記録サービス）
    - ポートフォリオブログ
    - Emacsの設定ファイル
    - データ分析コンペの入賞コード
  - Contact（コンタクト）
- User Journey
  - Twitter訪問者
  - Google検索者
  - ブログ訪問者
    - スキル＞プロジェクト＞コンタクト
  - フリーランス仕事依頼者
  - 採用担当者
    - 自己紹介＞職務経歴＞コンタクト

### 探索と発見の記述

既存のポートフォリオの調査、特にReactで作られたサイトの調査、どんなことができるか？

- https://react-portfolio-test.herokuapp.com/
- https://www.ymyzk.com/
- https://gmork.in/
- https://nabeliwo.github.io/
- https://garcia-portfolio.herokuapp.com/
- Gatsby starter
  - https://github.com/haysclark/gatsby-starter-casper
- そのほか
  - http://ja.webcreatormana.com/
  - https://hasegawahiroshi.jp/
  - https://dev.greglobinski.com/
  - https://github.com/kremalicious/portfolio
  - http://musou1500.github.io/

### ワイヤーフレームの作成

cacooで作成しました。

- https://cacoo.com/diagrams/wdJ1DISQVaDwnOXO/FC193

## 最後に

最後に、完成した私のポートフォリオのURLは以下です。

- https://futurismo.biz/profile