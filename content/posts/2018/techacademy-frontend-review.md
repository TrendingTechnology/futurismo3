---
title: TechAcademyのフロントエンドコースの最終課題でボートフォリオサイトをつくった
description: TechAcademyのフロントエンドコースの最終課題でボートフォリオサイトをつくりました。React製の静的サイトジェネレータGatsbyJSを使いました
date: 2018-08-16 03:44:46
author: tsu-nera
type: post
tags:
- TechAcademy
- JavaScript
- GatsbyJS
- blog
- React
size: true
image: https://res.cloudinary.com/tsu-nera/image/upload/v1534356933/futurismo/posts/2018-08-16-031148_572x346_scrot.png
---

TechAcademyの
<a href="https://techacademy.jp/frontend-bootcamp" target="_blank" rel="nofollow">フロントエンドコース</a>
を修了し、ボートフォリオページを作成しました。

以下が修了制作のポートフォリオサイトです。

- https://futurismo.biz/profile

![2018\-08\-16\-031303\_566x406\_scrot\.png \(566×406\)](https://res.cloudinary.com/tsu-nera/image/upload/v1534356933/futurismo/posts/2018-08-16-031303_566x406_scrot.png)

この記事は、Webアプリケーションコースの感想の続編の記事となります。

- [TechAcademyの最終課題でWebサービスをつくった \| Futurismo](https://futurismo.biz/techacademy-webapp-review/)

## 自己紹介

組込みフトのエンジニアとして企業で働いてきましたが、フリーランスのWebエンジニアにあこがれて仕事を辞めました。
現在はTechAcademyのWebアプリケーション・フロントエンドコースを受講しながら、Web開発について勉強しています。

今回、TechAcademyの最終課題として自作オリジナルサイトを作ってみました。

## なぜ作ったの？

TechAcademyのフロントエンドコースの最終課題であるオリジナルWebサイト制作の課題として取り組みました。

これから、フリーランスエンジニアとして働いていくことを目指しているため、
実力をみせることができるポートフォリオを作ろうという思いがありました。

また、同時にブログもリニューアルしようと思いました。
そのため、ブログとボートフォリオサイトの２つを同時に作り、ひとつのドメイン上で公開しました。

## 開発環境

- GatsbyJS ... React製の静的サイトジェネレータ。今回、このフレームワークを使ってサイトを作成しました。
- Visual Studio Code ... 開発用エディタ。TechAcademyでは、課題でCloud9を利用するのだけれども、私はvscodeで開発した。
- Netlify ... サイト公開用サーバ。 TechAcademyでは、さくらのレンタルサーバの無料券が配布されるが、使わなかった。
- Markdown ... サイトで公開する情報はメンテナンスがしやすいように、プレーンテキストで管理することにした。
- Cacoo ... ワイヤフレーム作成のために使用。

ソースコード（GitHub）はコチラ https://github.com/tsu-nera/futurismo3

## 開発の感想

仕事を退職していたので、フルコミットで1ヵ月制作にあてました。

- 1週目: フロントエンド技術の習得
- 2週目: ブログの実装、ポートフォリオの設計
- 3週目: ポートフォリオの実装
- 4週目: ポートフォリオの実装、デザイン周り

苦労した点は、デスクトップとモバイルでレスポンシブな画面にするように努力した点です。
始めは自力でCSSの実装をしていたのですが、うまくいかず結局既存のCSSを流用することで、対応しました。

- [Gatsby\.js Starters and Templates \| Code Bushi](https://codebushi.com/gatsby-starters/)

ブログとボートフォリオを共存させると、CSSをimportしていないにもかかわらず、
サイトで利用しているすべてのCSSをimportしてしまう事象が発生しました。
これは、Gatsbyの最適化が働いた結果です。Global CSSは軒並importされます。
回避の方法として、styled componentsを導入し、CSSの適用範囲をせばめることができました。

ボートフォリオを作る手順というのがあまりなく、どう作っていいのか分かりませんでした。
自分が作成した手順をあとで別記事にまとめます。

## TechAcademyのフロントエンドコースについて

Webアプリとあわせて別記事にまとめる予定です。

ひとつ書いておくと、 Firebaseの課題以外は簡単で、Firebaseだけ激ムズです。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">TechAcademyのフロントエンドコースのFirebaseの課題はなんなんだ。<br><br>めちゃくちゃ難しくて泣きそう。鬼畜なほどにムズいよ。ラスボス感はんぱない。</p>&mdash; 炎のtsu-nera🔥 (@tsu_nera) <a href="https://twitter.com/tsu_nera/status/1019325074900316160?ref_src=twsrc%5Etfw">2018年7月17日</a></blockquote>
