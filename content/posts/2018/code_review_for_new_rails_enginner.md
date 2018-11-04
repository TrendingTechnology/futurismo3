---
title: Railsエンジニア1ヶ月の初心者の僕がテックリーダーから受けたレビュー指摘
description: Railsエンジニアとして働き始めて1ヶ月が立ちましたがリーダーから受けたコードレビュー指摘についてまとめました
date: 2018-11-04 21:08:44
author: tsu-nera
type: post
tags:
- Ruby
- Rails
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1536239732/futurismo/thumbnails/rails-logo.png
---

Rails エンジニアとして働きはじめて 1 ヶ月が経った tsu-nera です。

本日は、この 1 ヶ月のコードレビューでリーダーから受けた指摘を紹介していきます。

こういうノウハウって、本になかなか載っていないいし、スクールでも教えてくれない。
実務経験のコードレビューの中で受け継がれていくベストプラクティスだと思います。

## Model

### よくつかうクエリは scope 化する

Scope について知らなかったら、「えっ？Scope も知らないの？これは常識だよ！」といわれた。そのくらい当たり前につかうパターン。

Scope をモデルに設定することで、特定の SQL をメソッド化することができる。
メソッド化は命名することで処理をわかりやすくする目的もある。積極的に使うべき方法。

さらに、[rzane/baby_squeel](https://github.com/rzane/baby_squeel)をつかってわかりやすく。

### timestamp は基本的にはつける

とくに理由がなければ、timestamp はつけとく。

### モデルはサブクラスをつくることで細かく分けて整理

Controller や View のロジックを Model によせることがよいが、今度は Model が肥大化してくる。

そんなときは、Model をサブモデルに分割することで、さらに整理する。

わけるためのの方法として、[makandra/active_type](https://github.com/makandra/active_type)を使う。 命名は、ForXXX みたいな。

```ruby
class Topic < ApplicationRecord
  class ForXXX < ActiveType::Record[Topic]
    private
     def base_model
      super.xxx
    end
  end
end
```

差分を `base_model`みたいなかたちで、子クラスでメソッド定義して差分抽出してつかうのもよい。

## View

### 表示の制御は Decorator を利用する

View で表示する形式を制御するのであれば、decorator を利用する。

たとえば、model の属性の true/false を はい/いいえ表示したい場合は、`@model.view_flag` みたいに View でつかう。

Decorator モジュールを `app/decorator`ディレクトリのなかに作成し、xxxDecorator.rb みたいなモジュールをつくる。

コントローラでデータの加工はしません。

## Controller

コントローラーではモデルやライブラリで定義したメソッドを呼び出すだけとかがいいです。
簡単なものはコントローラーに書いてしまったりもしてしまいますが、

迷ったらモデル側に寄せてください。「コントローラーは薄く」が基本です。

コントローラーを薄くすると、自然とモデルが太くなってしまうので、
それを防ぐために active_type を使って用途ごとにモデルも切り分けています

### 処理の共通化

Controller で共通処理をまとめたい場合は、
親クラス(ApplicationContorller など)に書くか、concerns フォルダに定義する。

Concerns は `app/controllers/concerns` に配置する。

```ruby
module TopicUtility
  extend ActiveSupport::Concern
```

こんな感じに、 `ActiveSupport::Concern` をつかう。

### 事前条件チェックは filter に任せる

実行の前処理や条件判定みたいなものは、`before_action`にまとめると綺麗。

たとえば、パラメータの存在チェックやら正当性チェックなど。

さらに、id もらって find かけたものをチェックするときは場合によっては
`set_param`みたいなメソッドつくって事前条件チェックの前に呼び出すのもあり。

```ruby
module Utility
  extend ActiveSupport::Concern

  included do
    before_action :set_target, only: %i[show]
    before_action :force_redirect_if_not_exist, only: %i[show]
    before_action :force_redirect_if_it_has_a_link, only: %i[show]
    before_action :force_redirect_if_invalid, only: %i[show]
  end
end
```

指摘はなかったけれども、モデルの LifeCycle Hook もつかいこなしたい。

### Common

### 外部サイトとのやりとり

コントローラには、データの取得、生成などの処理は持たせない。

外部リソースとのやりとりは、ライブラリにまとめて処理を委譲する。
たとえば、Instagram サーバと通信する場合は、`lib/instagram_fetcher.rb`など。

外部サイトとやりとりする場合は、mock を使ってテストも書くのが better.
gem `vcr`, `webmock` が便利。

## まとめ

一ヶ月を振り返って見ましたが、こんなところでしょうか？

まだまだ細かい指摘はズタボロにズバズバ受けたのだけれども、大事なことはこのくらいかな。

ありがたいことに、厳しくも丁寧にコードレビューをしていただき、大変感謝しています。

同じことは指摘されないように、早く成長できるように頑張ります。
