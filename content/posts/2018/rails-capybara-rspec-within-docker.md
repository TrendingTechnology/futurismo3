---
title: Docker内で Headless Chrome を起動してRSpecを動作させる方法
description: Headless Chromeを使った RSpecのUIテストについて紹介します
date: 2018-09-23 10:48:08
author: tsu-nera
type: post
tags:
- rails
- rspec
- docker
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1536239732/futurismo/thumbnails/rails-logo.png
---

こんにちは、tsu-neraです。

今日は、Headless Chromeを使った RSpecのUIテストについて紹介します。
なぜHeadlessかというと、Docker内でブラウザテストをやりたいから。
同じ方法は、CircleCIなどの継続的インテグレーションでも使えます。

## Capybara準備

UIテストには、capybaraを使います。Gemfileに以下を追記。

```ruby
group :test do
   gem 'capybara'
end
```

spec/rails_helper.rbに、以下を追記。

```ruby
require 'capybara/rspec' 
```

## Headless Chromeの準備

まずはDockerに、google-chromeと、webdriverを入れる。Dockerfileに以下を書く。

```Dockerfile
FROM ruby:2.4.1
RUN apt-get update -qq && apt-get install -y build-essential nodejs unzip
RUN CHROME_DRIVER_VERSION=`curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE` && \
    wget -N http://chromedriver.storage.googleapis.com/$CHROME_DRIVER_VERSION/chromedriver_linux64.zip -P ~/ && \
    unzip ~/chromedriver_linux64.zip -d ~/ && \
    rm ~/chromedriver_linux64.zip && \
    chown root:root ~/chromedriver && \
    chmod 755 ~/chromedriver && \
    mv ~/chromedriver /usr/bin/chromedriver && \
    sh -c 'wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -' && \
    sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list' && \
    apt-get update && apt-get install -y google-chrome-stable
RUN mkdir /app
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install
COPY . /app
```

以下をGemfileに書く。

```ruby
group :test do
    gem 'capybara', '~> 2.15.4'
    gem 'selenium-webdriver' 
    gem 'chromedriver-helper'
    gem 'launchy', '~> 2.4.3'
end
```

`spec/support/capybara.rb` に 以下を追記。

```ruby
Capybara.register_driver :chrome_headless do |app|
  options = ::Selenium::WebDriver::Chrome::Options.new

  options.add_argument('--headless')
  options.add_argument('--no-sandbox')
  options.add_argument('--disable-dev-shm-usage')
  options.add_argument('--window-size=1400,1400')

  Capybara::Selenium::Driver.new(app, browser: :chrome, options: options)
end

Capybara.javascript_driver = :chrome_headless
```

以前は、PhantomJSを使っていた人も、Headless Chromeを試してみよう！
