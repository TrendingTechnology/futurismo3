---
title: Vue.jsをつかったRuby on Railsプロジェクトのはじめかた(with Docker)
description: フロントエンドにVue.jsをつかう場合のRuby on Railsプロジェクトのはじめかたについて調べてみました。
date: 2018-10-08 11:50:01
author: tsu-nera
type: post
tags:
  - Rails
  - Vue.js
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1536239732/futurismo/thumbnails/rails-logo.png
---

Ruby on Rails プロジェクトをはじめる際に、
Vue.js をフロントエンドで利用する場合の方法をまとめました。

前回は、React をつかった環境構築について紹介しましたか、
仕事で Vue.js をつかうことになったため、急遽 Vue.js を勉強しています。

今回も、webpacker でいきます。

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
  web: &app_base
    build: .
    command: bundle exec rails s -p 3000 -b '0.0.0.0'
    volumes:
      - .:/app
      - bundle:/usr/local/bundle:delegated
      - node_modules:/app/node_modules:delegated
    ports:
      - 3000:3000
    depends_on:
      - db
    tty: true
    stdin_open: true
  webpack:
    <<: *app_base
    command: "bin/webpack-dev-server"
    ports:
      - "3035:3035"
    depends_on:
      - web
    tty: false
    stdin_open: false
  db:
    image: mysql:5.7
    volumes:
      - db-volume:/var/lib/mysql
    environment:
      MYSQL_ALLOW_EMPTY_PASSWORD: "yes"
volumes:
  db-volume:
  bundle:
  node_modules:
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
$ docker-compose run web bundle exec rails db:create
$ docker-compose up -d
```

エラーなく立ち上がれば完了です。

### JavaScript の表示

以下の ファイルが作成されています。

- ./app/javascript/packs/application.js
- ./app/javascript/packs/hello_vue.js
  ./app/javascript/app.vue

適当にコントローラを作成して、この Js を呼び出してみます。

```bash
$ rails g controller StaticPages home
```

`javascript_pack_tag`というタグを利用することで、js を呼び出します。

application.html.erb

```ruby
<%= javascript_pack_tag 'hello_vue', 'data-turbolinks-track': 'reload' %>
```

```javascript
import Vue from 'vue'
import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el,
    render: h => h(App),
  })

  console.log(app)
})
```

```javascript
<template>
  <div id="app">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
```

