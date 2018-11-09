---
title: Rails AntiPatterns 読書メモ
description: Rails AntiPatternsの読書メモ
date: 2018-11-10 05:54:55
author: tsu-nera
type: post
tags:
- Rails
- Ruby
- Book
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1536239732/futurismo/thumbnails/rails-logo.png
---

どうも、駆け出し Rails エンジニアの tsu-nera です。

最近思うことは、Rails はそんなに難しくないんだけれども、従うべきルールがたくさんあって、
それに従って書かないといいコードが書けない、ということ。

Rails らしい書き方とはなんだろうか？

というのが最近の悩みだ。Rails らしさはスクールや本では教えてくれない。
どうやって学ぶのかというと、先輩から後輩へのコードレビューによって実務で身につくノウハウ。

このノウハウを手っ取り早く身につけたい！と思っていた所へ、いい本見つけたのでちょっくら読んでみた。

[Amazon \| Rails AntiPatterns: Best Practice Ruby on Rails Refactoring \(Addison\-Wesley Professional Ruby Series\) \[Kindle edition\] by Chad Pytel, Tammer Saleh \| Languages & Tools \| Kindle ストア](https://www.amazon.co.jp/dp/B004C04QE0/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)

## Rails AntiPatterns

Rails の悪い書き方とよい書き方をまとめた本。アンチパターンの反対は、ベストプラクティス。

内容の詳細は、この後書く読書メモを見ていただきたい。

感想を書くと、こういうノウハウを扱ったものは、めったに見つからないので満足。
この本は 9 年前の本で、Rails3 の時代の本なため、昔の書き方っぽいところは飛ばして読んだ。
しかし、たくさんの部分が Rails5 でも生きる書き方だ。

英語しかないし、古い本なので日本語に翻訳されることはないと思うが、Rails5のリバイバル版とかでないかな。
最近読んだ本では、万葉さんが出している [現場で使える Ruby on Rails 5速習実践ガイド](https://www.amazon.co.jp/dp/B07JHQ9B5T/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1) の最終章に、マル秘ノウハウが載っていた。

## Model

### AntiPattern:Voyeuristic Models (覗き見モデル)

Ruby on Rails を使用する場合、プログラマーはオブジェクト指向の基本的な信条を無視してアプリケーションを作成しかねない。

#### デメルメの法則に従う

Active Record Relationships においては、オブジェクト間の関係を少なくする。

`@invoice.customer.address.street` こんなのはダメ。

**ひとつのドットをつかう**。そのためには、小さなラッパーメソッドを書く。

または、`delegate`をつかう。

- [早く知ってたら良かった rails の技 \- Qiita](https://qiita.com/k-shogo/items/5bbc23e1d0dd0ad3a8a2#delegate-%E3%82%82%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86)

#### find() コールを Model の Finders にいれる

PHPer は、View で SQL を発行するようなことを書く。そんなことは、Rails, MVC モデルに反している。

モデルの find 系操作は、View ではなく、Controllers に書く。
どんなロジックも Presentation 層には書いてはならない。

#### Finder を その Model 自体に書く

Controllers に 複雑な find ロジックを書くのはアンチパターン。
Model 自体にメソッドを持たせて、それを使う。

もっといい方法は、Model に scope を書くことで、find のロジックを Model 自体にもたせる。

### AntiPattern:Fat Models (太ったモデル)

モデルに処理を書きすぎると、モデルが大きくなりすぎる。

#### 新しいクラスに責任を委譲する

単一責任の原則に従い、責任範囲を新たなクラスに分割する。

これは、OOP の世界では composition という。

しかし、composition はデメルメの法則を壊す。
こんなときは、先に紹介した Rails の delegate を検討する。

#### モジュールを使用する

クラス分割の代わりに、モジュールを使ってロジックを別ファイルに追い出すのも手。

#### 大きなトランザクションブロックのサイズを減らす

具体的には、`transaction`で複数の SQL 発行をまとめる。

### AntiPattern:スパゲッティ SQL

複雑な SQL をさける。

#### Active Recrd Association をうまく使う

#### Scope メソッドを学び愛する

find にたくさんの検索条件を詰め込むのではなく、 scope をつかうことで再利用可能なコンポーネントを作る。

scope をチェインしても SQL クエリは 1 つだけ。これは scope が lambda で遅延評価しているため。

### AntiPattern: コードの重複を複製する

DRY のための究極テクニック紹介

#### モジュールに抽出する

処理を`lib`にあるモジュールに追い出すのもよい。

ActiveSupport::Concern をつかって`concern`モジュールにまとめるのもよい。

スーパークラスに共通ロジックを持ってくるよりもモジュールがよい。
スーパークラスに処理を寄せて成功している例はほぼ見ない。

#### プラグインを書く

- [Rails プラグイン作成入門 \| Rails ガイド](https://railsguides.jp/plugins.html)

#### メタプログラミングでマジックを起こす

メタプログラミングは中上級者用。

## Views

- [【Ruby】【Rails】RAILS ANTIPATTERNS、chapter3 view のまとめ \- blog\.waterlow\.work](https://waterlow2013.hatenablog.com/entry/2016/11/05/190615)

### AntiPattern: PHPitis

PHP は、ドメインロジック、複雑なプレゼンテーションロジック、コントローラコードを一つのファイルに押し込む。
これは、MVC に反する。

#### Rails が提供している View Helper を学ぶ

- form_for
- render parcial
- content_for

#### モデルに役に立つ Accessors を加える

#### カスタムヘルパーに抽出する

if 文とか、helper に抽出してすっきりさせよう

### AntiPattern: Markup の大騒ぎ

Markup の複雑さを取り除く工夫

#### Rails Helper をつかう

Rails helper をつかって、 解釈できる HTML を生み出す。

#### Haml をつかう

Erb よりもわかりやすい。

## Controllers

よい Controllers は、Scaffold で自動生成されたものに近い。

### AntiPattern: Homemade Keys

認証機能を自前でつくるのはアンチパターン。セキュリティホールになる。

gem をつかう。今なら Devise とか。

### AntiPattern: Fat Controller

もっとも人気なアンチパターン。デブなコントローラ。

モデルに属するべきビジネスロジックがコントローラにあることが原因。

#### Active Record Callbacks と Setters をつかう

- 更新日/登録日は独自に持たない。updated_at か created_at を使う事。
- デフォルト値はロジックでなくテーブル側に持たせる

モデルのコールバックに処理を寄せられないか考える。before_validation とか。

#### Presenter Pattern

MVP.Presenter は Decorater の複数バージョン？

- [Decorator と Presenter を使い分けて、 Rails を ViewModel ですっきりさせよう \- KitchHike Tech Blog](https://tech.kitchhike.com/entry/2018/02/28/221159)
