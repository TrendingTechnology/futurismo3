---
title: Everyday Rails, Rspec による Railsテスト入門を読んだ
description: Everyday Rails, Rspec による Railsテスト入門を読んだ感想
date: 2018-09-19 04:30:39
author: tsu-nera
type: post
tags:
- Ruby
- Rails
- RSpec
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1536239732/futurismo/thumbnails/rails-logo.png
---

Everyday Rails, Rspec による Rails テスト入門を読んだので、感想を簡単にしたためます。

## 本を読もうと思った理由

プログラミングスクールで Rails の開発を学んだのだけれども、
プログラミングスクールではテストについてまったく習わない。
しかし、仕事でプログラミングをするならば、テストをしないなんてありえない。
なので、テストについて勉強することの必要性を感じ、本を購入。

実は、RSpec は 5 年前！の Ruby での開発でつかったことがあるのだが、
時間が経ちすぎて忘れてしまった。錆びついた TDD 魂をふるい立たせるために、手に取った。

## 本の内容

この本の特徴は、Ruby on Rails のテストに特化しているところだ。

まず、model, controller のテスト方法について学ぶ。興味深いところは、
controller のテストは Deprecated(廃れた)と言っているところだ。
テストって、controller に対してするものかと思ったのだけれども、違った。

controller はフィーチャースペック（私の認識では画面を考慮した結合テスト)で洗う。
Capybara を利用した方法が紹介される。

加えて、GET, POST リクエストの API を直接たたくような方法、リクエストスペックという方法も学ぶ。
こんな方法もあるのだなぁとおもしろかった。

TDD については、昔流行った一つの手法としてサラッと紹介される。
テストについて書かれた本を読むと、TDD についてかかれていることが多い。
この本は、すでに出来上がったプロダクトに対してテストを書いていくところに特徴がある。
TDD はあまり推奨していない。

ほかにも FactoryBot などの便利なツールも紹介される。

## まとめ

私が知っているテスト手法をはみ出し、いろいろな進化が見られ、なかなか刺激的だった。

もう、TDD とか、過去の手法なのかな？ controller へもテストを書かない。
Capybara や API テストのようなより高度なテストが主流になるのだろうか？

テストは奥が深い。
