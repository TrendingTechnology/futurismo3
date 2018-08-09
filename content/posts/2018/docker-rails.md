---
title: "Ruby on Rails + MySQL 開発環境を Dockerで構築"
date: 2018-06-19T01:23:53+09:00
verson: 2
---

## はじめに
TechAcademyの Webエンジニアになるべく、Webアプリケーションコースを受講している。

- https://techacademy.jp/rails-bootcamp

受講の感想はあとで書くとして、このコースの課題としてRailsアプリをつくることになった。

自分のPCはUbuntuなので、環境は比較的容易に作成できるものの、やはりローカル環境はあまり汚したくないので、
流行りのDockerを利用することにした。けっこう、この手の情報は Web上になかったので、まとめてみる。

Dockerを、正確には Docker Composeを利用することで、Railsのコンテナと MySQLのコンテナを Dockerで動かし、
Rails server, DB serverをローカル環境にインストールすることなく、開発が可能になるのだ。

それでは、いってみよう。

## 設定ファイルの用意
### Gemfile, Gemfile.lock の準備
Docker内で bundle install を実行して railsをインストールするために, Gemfileを用意。

```
source 'https://rubygems.org'
gem 'rails', '5.0.6'
```

空の Gemfile.lockも用意。

### Dockerfileの準備
以下のような、Dockerfileを用意。

```
FROM ruby:2.4.1
RUN apt-get update -qq && apt-get install -y build-essential nodejs
RUN mkdir /app
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install
COPY . /app
```

### docker-compose.ymlを用意
webと dbの2つのコンテナをたちあげる docker-compose.ymlを用意。

```
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
    image: mysql:5.5
    volumes:
      - db-volume:/var/lib/mysql
    environment:
      MYSQL_ALLOW_EMPTY_PASSWORD: "yes"
volumes:
  db-volume:
```

## docker-composeの実行
Railsのコンテナを起動してRailsのプロジェクトを作成する。

```
$ docker-compose run web rails new . --force --database=mysql --skip-test
```

Railsイメージのビルドを実行する。

```
$ docker-compose build
```

config/database.ymlのdefault内の項目 host: localhostを dbにを修正。


コンテナをデタッチドモード（バックグラウンド）で実行する

```
$ docker-compose up -d
```

RailsのコンテナでDB作成のタスクを実行する

```
$ docker-compose run web bundle exec rake db:create
```


## マウントしたvolumeの書き込み権限がない問題
Dockerの操作は基本すべてroot権限で実行されるので、生成されたRailsアプリの所有権が root:root となる。ログインユーザーに変更しておく。

```
$ sudo chown -R $USER:$USER .
```

