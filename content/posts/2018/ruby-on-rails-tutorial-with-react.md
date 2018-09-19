---
title: Ruby on Rails Tutorial を フロントエンド Reactでやってみた
description: Ruby on Rails Tutorial を フロントエンド Reactでやってみた感想
date: 2018-09-19 18:32:59
author: tsu-nera
type: post
tags:
- Rails
- Ruby
- React
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1536239732/futurismo/thumbnails/rails-logo.png
---

[Ruby on Rails Tutorial by Michael Hartl](https://railstutorial.jp/) の フロントエンドを React で実装しました。

- https://github.com/tsu-nera/ruby-on-rails-tutorial-with-react

## 概要

Rails エンジニアならば誰もが知っている[Ruby on Rails Tutorial](https://railstutorial.jp/) 5.1 (第 4 版)を
実装したリポジトリです。

ハイライトは以下の 3 点です。

- CSS に [Styled Components](https://github.com/styled-components/styled-components)を導入
- 依存関係の管理に [docker-compose](http://docs.docker.jp/compose/toc.html)を導入

第 11 章、第 12 章は実装していません。
テストは実装していません。
その他、実装していない機能もあります。

## Install

```bash
$ git clone https://github.com/tsu-nera/ruby-on-rails-tutorial-with-react.git
$ cd ruby-on-rails-tutorial-with-react
$ docker-compose build
$ docker-compose up -d
```

## 苦労した点

苦労の連続でした。

- flash がつかえない
- Form がつかえない
- erb で参照てきたインスタンス変数が参照できない
- paginage がつかえない
- post, patch, delete request ができない

一応、それぞれ苦労して解決方法はみつけたのですが、まあ大変。

## 感想

Rails と React の組み合わせは Web 上にも情報がないため、
今回の試みはリスクがあるものでした。実際にやってみて、その理由がわかりました。

Rails と React のデータのやりとりが複雑になります。

Web の情報が少ないことから、特に強い理由がなければ、
素直に erb を利用したほうが、開発効率がよいと感じました。
