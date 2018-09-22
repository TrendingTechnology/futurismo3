---
title: Dockerで構築するRails開発環境(with Redis and Postgres)
description:  Rails, Redis, Postgresqlの３つのインストタンスをdocker-composeで構築したメモ
date: 2018-09-22 20:04:10
author: tsu-nera
type: post
tags:
- Rails
- Docker
- Postgres
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1536239732/futurismo/thumbnails/rails-logo.png
---

こんにちは、tsu-neraです。以前、Rails と MySQLでのDockerを使った開発環境構築について書きました。

- [Ruby on Rails \+ MySQL 開発環境を Dockerで構築 \| Futurismo](https://futurismo.biz/docker-rails/)

今回は、その続編で Postgresqlと Redisの Dockerインスタンスを利用した方法について紹介します。

### 前提

- MacOS
- 既存プロジェクトが存在していて、そこに Docker を導入する
- Docker for Macがインストール済みであること

## Dockerファイルの準備

以下のようなDokckerfileを準備

```Dockerfile
FROM ruby:2.5.1
RUN apt-get update -qq && apt-get install -y build-essential nodejs libpq-dev postgresql-client 
RUN mkdir /app
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install
COPY . /app
```

## docker-compose.ymlを準備

web, db, redisの３つのコンテナを立ち上げる。docker-compose.ymlを用意。

```yml
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
    - redis
    tty: true
    stdin_open: true
  db:
    image: postgres:10.4-alpine
    volumes:
    - postgres:/var/lib/postgresql/data
  redis:
    image: redis:latest
    ports:
    - 6379:6379
    volumes:
    - redis:/data
    command: redis-server --appendonly yes

volumes:
  postgres:
  redis:
```

## docker-composeの実行

Rails  イメージのビルド。

```bash
$ docker-compose build
```

コンテナをデタッチモードで起動。

```bash
$ docker-compose up -d
```

psコマンドで起動を確認。

```bash
$ docker-compose ps
 Name                       Command               State           Ports
----------------------------------------------------------------------------------------
myapp_db_1      docker-entrypoint.sh postgres    Up      5432/tcp
myapp_redis_1   docker-entrypoint.sh redis ...   Up      0.0.0.0:6379->6379/tcp
myapp_web_1     bundle exec rails s -p 300 ...   Up      0.0.0.0:3000->3000/tcp
```

これて起動完了です。Enjoy!!

## マウントしたvolumeの書き込み権限がない問題
Dockerの操作は基本すべてroot権限で実行されるので、
生成されたRailsアプリの所有権が root:root となる。ログインユーザーに変更しておく。

```bash
$ sudo chown -R $USER:$USER .
```
