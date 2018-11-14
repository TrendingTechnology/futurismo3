---
title: Ruby on Railsのアーキテクチャ勉強メモ
description: Ruby on Railsのアーキテクチャ勉強メモ
date:  2018-11-14 20:47:16
author: tsu-nera
type: post
tags:
- Rails 
size: false
 image: https://res.cloudinary.com/tsu-nera/image/upload/v1536239732/futurismo/thumbnails/rails-logo.png
---

深夜に寝ぼけてRailsの怪しい情報商材を買ってしまいました。

[Owning Rails \- Master the Rails framework](http://owningrails.com/)

日本語の情報がないので、たぶんだれも買っていないのだと。しかし、内容は、Railsがどうやって作られているかが、詳細に解説されている、稀有な教材っぽい。

これで、RailsやひいてはWebアプリケーションフレームワークがどうやって作られているかを理解したい。今はWebフレームワークは便利なツールを集めたものくらいの認識しかない。

今回は、情報教材の導入として、各モジュールの大まかな概要をまとめてみた。参考にしたのは、以下の英語記事。

[Ruby on Rails Architectural Design \| Adrian Mejia Blog](https://adrianmejia.com/blog/2011/08/11/ruby-on-rails-architectural-design/)

## Railsのモジュール

### Action Mailer

メールサービスを担うモジュール

### Action Pack

ViewとControllerを担うモジュール。ブラウザからのリクエストを受けて、アクションにマッピングする。３つのサブモジュールに分けられる。
		
#### Action Controller

すべてのControllerが継承するベースのContorller。Viewへのレンダリングやリダイレクション。その他、キャッシュやフィルター、ヘルパーなどの機能を提供。

#### Action Dispatcher
 
ブラウザのリクエストをハンドリングする。キャッシュやセッションの機能も担う。

#### Action View

Controllerから呼ばれて、画面を表示する。及び、viewのhelperメソッド。

### Active Model

Action Pack と Action Recordをつなぐインタフェース。ActiveRecordのデータベースに関連する部分以外の機能を切り出したもの。

### Active Record

RDBをオブジェクトにマッピングするためのArchtecture Pattern。CRUDのメソッドを提供。

### Active Resource
 	
RESTfullなAPIをActiveRecordと同じようなインターフェイスで扱うための機能を提供します

### Active Support

Rubyを拡張するための便利Utility

### Railties
 
Railsのコア。今まで紹介したモジュールをくっつける。
