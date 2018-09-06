---
title: ReactをつかったRuby on Railsプロジェクトのはじめかた(with Docker)
description: フロントエンドにReactをつかう場合のRuby on Railsプロジェクトのはじめかたについて調べてみました。
date: 2018-09-06 01:47:39
author: tsu-nera
type: post
tags:
- Rails
- React
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1536239732/futurismo/thumbnails/rails-logo.png
---

Ruby on Rails プロジェクトをはじめる際に、
React をフロントエンドで利用する場合の方法をまとめました。

今回は、Docker を利用して環境構築。この記事の続編です。

- [Ruby on Rails \+ MySQL 開発環境を Docker で構築 \| Futurismo](https://futurismo.biz/docker-rails)

## 事前調査

どうやら、rails + React には４つの手段があるようだ。

- HTML にリンクを貼る
- webpack をつかう(npm)
- react-rails(RubyGem)
- webpacker(yarn+RubyGem)

参考: https://www.slideshare.net/yoshioka_cb/railsreactjs

今回は、webpacker でいきます。

## Docker のファイル準備

次の４つを用意する。

- docker-compose.yml
- Dockerfile
- Gemfile
- Gemfile.lock

docker-compose.yml

```yaml
version: '3'
services:
  web:
    build: .
    command: bundle exec rails s -p 3000 -b '0.0.0.0'
    volumes:
      - .:/app
    ports:
      - 3000:3000
    depends_on:
      - db
    tty: true
    stdin_open: true
  db:
    image: mysql:5.7
    volumes:
      - db-volume:/var/lib/mysql
    environment:
      MYSQL_ALLOW_EMPTY_PASSWORD: "yes"
volumes:
  db-volume:
```

Dockerfile. これは、nodejs と yarn も入れる。

```bash
FROM ruby:2.5.1
RUN apt-get update -qq && apt-get install -y build-essential
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install yarn
RUN mkdir /app
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install
COPY . /app
```

Gemfile

```bash
source 'https://rubygems.org'
gem 'rails', '5.2.1'
```

Gemfile.lock は空ファイル。

## Rails プロプロジェクトの作成

`webpack=react`オプションをつけて、rails プロジェクトを作成します。

```bash
$ docker-compose run web rails new . --webpack=react
```

### 既存プロジェクトに React を追加

この場合は、次のコマンドでいけるらしい。私の場合、ねんのため、叩いておいた。

```bash
$ docker-compose run web rails webpacker:install
$ docker-compose run web rails webpacker:install:react
```

## 動作確認

```bash
$ docker-compose up -d
$ docker-compose run web bin/webpack-dev-server
```

エラーなく立ち上がれば完了です。

### JavaScript の表示

以下の 2 つのファイルが作成されています。

- ./app/javascript/packs/application.js
- ./app/javascript/packs/hello_react.jsx

適当にコントローラを作成して、この Js を呼び出してみます。

```bash
$ rails g controller StaticPages home help
```

`javascript_pack_tag`というタグを利用することで、js を呼び出します。

home.html.erb:

```ruby
<%= javascript_pack_tag 'hello_react', 'data-turbolinks-track': 'reload' %>
```

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const Hello = props => <div>Hello {props.name}!</div>

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div'))
  )
})
```

## react-rails を入れる

まあ、ここまでで目的は果たせたものの、document.addEventListener を書くのがだるい。
そこで、react-rails gem をインストールする。

Gemfile に `react-rails` を追加。

```bash
$ bundle install
$ rails webpacker:install
$ rails webpacker:install:react
$ rails generate react:install
```

`app/views/layouts/application.html.erb`を編集。

```html
<!--  Path: app/views/layouts/application.html.erb  -->
<!DOCTYPE html>
<html>
  <head>
    <title>RailsReactWebpacker</title>
    <%= csrf_meta_tags %>

    <%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track': 'reload' %>
    <%= javascript_include_tag 'application', 'data-turbolinks-track': 'reload' %>
    <!-- Following will make the react components availabe to our layout -->
    <%= javascript_pack_tag 'application' %>
  </head>

  <body>
    <%= yield %>
  </body>
</html>
```

React Component を作成。

```bash
$ rails g react:component Hello
```

```javascript
import React from 'react'

const Hello = () => <div>Hello World</div>

export default Hello
```

home.html.erb:

```ruby
<%= react_component 'Hello' %>
```

## 今日のまとめ

Rails x React ならば、webpacker と react-rails の組み合わせがいいですね。

## 参考

- [webpack を使った Rails 上での React 開発 \- クックパッド開発者ブログ](https://techlife.cookpad.com/entry/2016/07/27/101015)
- [\[Rails5\.1\] Webpacker \+ React on Docker · onox blog](https://onoxeve.com/posts/rails5-with-react-on-docker/)
- [Rails で React\.js を動かしてみた話](https://www.slideshare.net/yoshioka_cb/railsreactjs)
- [How to add React JS to your Ruby on Rails App with Webpacker](https://blog.botreetechnologies.com/how-to-add-react-js-to-your-ruby-on-rails-app-with-webpacker-330d619d11ec)
