---
title: "Dockerで立てるMastodonローカル環境"
date: 2018-07-01T02:30:13+09:00
draft: true
size: false
---

## はじめに

Docker(docker-compose)でマストドンのインスタンスをローカル環境に構築する。

運用を考えると、さくらのVPSで動かすのがよいが、とりあえず利用してみたい程度なので、ローカル環境でもいいだろう。

### 環境

- docker
- docker-compose
- Ubuntu16.04

## Mastodonのセットアップ

- https://github.com/tootsuite/documentation/blob/master/Running-Mastodon/Docker-Guide.md

GitHubのリポジトリから、ソースコードをダウンロード。

```
$ git clone  https://github.com/tootsuite/mastodon.git
$ cd mastodon
```

`docker-compose.yml`を編集。`db`、`redis` の dataを dockerを落としても永続化できるように、dockerの外に保存する設定をする。

```
  db:
    restart: always
    image: postgres:alpine
### Uncomment to enable DB persistance
    volumes:
      - ./postgres:/var/lib/postgresql/data

  redis:
    restart: always
    image: redis:alpine
### Uncomment to enable REDIS persistance
    volumes:
      - ./redis:/data
```

docker compose実行時の、環境変数を書きこむファイルをcpしておく。

```
$ cp .env.production.sample .env.production
```

docker-compose実行時に必要なイメージのダウンロードとビルド。

```
$ docker-compose build
```



## 設定ファイル準備

以下で出力される文字列を、.env.productionに記入する。

```
$ docker-compose run --rm web rake secret
```

94ee02b357f5f1e29add6761698ae9b6eb4ff6c1bd4e82fcfddf92ce2fcb976471abc8d90010c68d47a1486cfac99d56d78d8ae9343b4f4d30bab336b8682c99