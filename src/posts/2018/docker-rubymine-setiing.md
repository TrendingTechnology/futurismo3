---
title: "Dockerで立ち上げたRails + MySQL 環境をRubyMineで接続"
date: 2018-06-21T05:13:36+09:00
size: false
---

## はじめに
Dockerで立ち上げた、Railsサーバ、MySQLサーバに RubyMineから接続する方法を紹介します。

Dockerを利用して、Rails環境をたちあげる手順は、前回の記事を参考にしてください。

- [Ruby on Rail \+ MySQL 開発環境を Dockerで構築 · Futurismo](https://futurismo.biz/2018/06/docker-rails/)

## RailsサーバにRubyMineで接続
これで実現できることは、ローカルPCに RubyやRailをインストールしてなくても、
リモートにあるDocker内のRubyリモートインタプリタを利用して、RubyMineが動作することだ。

- 設定 > 言語＆フレームワーク > Ruby SDK及びGemを選択。
- ＋の追加ボタンを押す。新規リモートを選択。
- Docker Composeを選択し、以下の図のように設定
  - サーバ: 好きな名前
  - 構成ファイル: ./docker-compose.yml
  - サービス: docker-compose.ymlで定義したサービス名

[![https://gyazo.com/678a9bcd1d6a9a6d89923067d63640fb](https://i.gyazo.com/678a9bcd1d6a9a6d89923067d63640fb.png)](https://gyazo.com/678a9bcd1d6a9a6d89923067d63640fb)

これで、リモートインタプリタとしてDocker内のRubyが利用できる。

## MySQLサーバにRubyMineで接続
これで実現できることは、ローカルPCに MySQLをインストールしてなくても、
リモートにあるDocker内のMySQLを利用できる。RubyMineは、DBのための見やすいViewerを提供する。

Docker内で立ち上げたMySQLと、ローカル環境ですでに立ち上げていたMySQLがどちらもPort 3306 を利用していたので、
Dockerが立ち上がらなかった。

docker-complse.ymlを以下のようにして、3306 > 3307にポートフォワーディングする設定を書いた。

```
db:
  image: mysql:5.5
  volumes:
    - db-volume:/var/lib/mysql
  environment:
    MYSQL_ALLOW_EMPTY_PASSWORD: "yes"
  ports:
    - 3307:3306
```

- データベースビューで＋の追加ボタンを押す。
- データ・ソース > MySQLを選択
- 以下のように設定。

[![https://gyazo.com/c41c17d670472b824692b6a8d10b0ee6](https://i.gyazo.com/c41c17d670472b824692b6a8d10b0ee6.png)](https://gyazo.com/c41c17d670472b824692b6a8d10b0ee6)

これで、データベースの中身がグラフィカルに分かるようになりました。

[![https://gyazo.com/b60d989df0987c5732786d7a14e35abe](https://i.gyazo.com/b60d989df0987c5732786d7a14e35abe.png)](https://gyazo.com/b60d989df0987c5732786d7a14e35abe)

## おわりに
Dockerのすごさがようやくわかってきたかもしれない。
