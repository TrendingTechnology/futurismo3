---
title: Dockerで RailsアプリのRSpec(Capybara)のフィーチャースペックをUI操作を見ながらする
description: Docker + Capybara + Headless Chromeでの RSpecのフィーチャースペックでブラウザの動きを見る方法について調べました
date: 2018-09-25 05:37:17
author: tsu-nera
type: post
tags:
  - docker
  - rails
  - rspec
  - capybara
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1536239732/futurismo/thumbnails/rails-logo.png
---

こんにちは、Docker 大好きおじさんの tsu-nera です。

Docker + Capybara + Headless Chrome での RSpec のフィーチャースペックをやろうと思います。
はじめなので、どんな感じでブラウザ操作の UI テストが実行されているのかみたいと思いました。
Docker の中に環境が閉じ込められているため、普通にやればみれません。

しかし見たいのです！

結論からいうと、selenium/standalone-chrome-debug という docker イメージを使えば楽勝でしたので、紹介します。

## selenium/standalone-chrome-debug

Chrome, Selenium, VNC が同梱された Docker image です。

- https://github.com/SeleniumHQ/docker-selenium

VNC を経由して、UI 操作を見ようという考えです。

## docker-compose.yml の設定

この記事は、以下の記事の続編なので、Rails + PostgreSQL の環境に 追加していきます。

- [Docker で構築する Rails 開発環境\(with Redis and Postgres\) \| Futurismo](https://futurismo.biz/docker-rails-postgres-redis/)

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
  chrome:
    image: selenium/standalone-chrome-debug:3.14.0-europium
    ports:
    - 4444:4444
    - 5900:5900
volumes:
  postgres:
  redis:
```

chrome: という部分を追加しました。

## RSpec(Capybara)の設定

`spec/rails_helper,.rb`に追記します。

```ruby
if ENV["LAUNCH_BROWSER"]
  Capybara.configure do |config|
    config.server_host = "192.168.32.6" # hostname -i で調べた値
    config.server_port = 3000
    config.javascript_driver = :selenium_chrome
  end

  Capybara.register_driver :selenium_chrome do |app|
    Capybara::Selenium::Driver.new(
        app,
        browser: :remote,
        desired_capabilities: Selenium::WebDriver::Remote::Capabilities.chrome(
            chromeOptions: {
                args: [
                    "window-size=1024,512",
                ]
            }
        ),
        url: "http://chrome:4444/wd/hub",
        )
  end
end
```

ポイントは、`config.server_host` に設定する値です。
これは、`docker-compose run web hostname -i`で出力される IP を設定する必要があります。

さもないと、以下のエラーが発生して、失敗します。

```bash
     Errno::EADDRNOTAVAIL:
       Cannot assign requested address - bind(2) for 192.168.32.5:3000
```

これは、調べてもよくわからないエラーなのですが、
おそらく双方向のコンテナ間通信をしようとして、アドレスの競合が起こっているのでしょう。
よくわかりませんでした。

## 実行

まずは、vnc クライアントで、`vnc://loalhost:5900` にアクセスします。
Mac ならば、`open vnc://localhost:5900`

パスワードがきかれるため、`secret`と入力します。

テストを実行します。

```
$ docker-compse run -e LAUNCH_BROWSER=true web rspec
```

テストはこんな感じのものを用意。

```ruby
require "rails_helper"

RSpec.feature "Sample", js: true do
  scenario "sample" do
    visit root_path
    expect(page).to have_content("ダッシュボード")
  end
end
```

## おわりに

これで、Rails での UI テストがもっともっと楽しくなりますね！！
