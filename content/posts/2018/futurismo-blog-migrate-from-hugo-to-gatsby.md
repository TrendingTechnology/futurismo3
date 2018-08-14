---
title: FuturismoブログをHugoからGatsbyJSに移行しました
description: 技術ブログFuturismoはHugoで運営していましたが、React製の爆速な静的サイトジェネレーターであるGatsbyJSに乗り換えました。
date: 2018-08-14 15:35:20
author: tsu-nera
type: post
tags:
- blog
- Hugo
- GatsbyJS
size: true
image: https://res.cloudinary.com/tsu-nera/image/upload/v1534266806/futurismo/posts/13f47511475dd6b8e5a78620bae9b6a3.png
---

技術ブログFuturismoはHugoで運営していましたが、
React製の爆速な静的サイトジェネレータであるGatsbyJSに乗り換えました。

また、ブログと併設してボートフォリオサイトを作成しました。
ポートフォリオサイトは別記事で紹介するとして、この記事で、GatsbyJSでブログを作成した経験や苦労したことを共有します。

## HugoからGatsbyJSに移行した理由

まず、GatsbyJSに移行しようとした理由ですが、主に以下でした。

- 速いブログが欲しい
- 自分でカスタマイズできるようなブログが欲しい
- これからのブログはフロントエンドの最新技術を取り入れているものを使いたい

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">blogを hugoから gatsbyに移行したくなってきた。モダンなフロントエンド技術を使っているので。これからのブログは、最新技術を取り入れているものを採用しよう。そうすると、移行前提のコンテンツ作成が必要だ。Markdownは必須！WordPressは論外です。</p>&mdash; 炎のtsu-nera🔥 (@tsu_nera) <a href="https://twitter.com/tsu_nera/status/1013232246218559489?ref_src=twsrc%5Etfw">2018年7月1日</a></blockquote>

移行元がHugoだっだので結構満足はしていたのですが、Reactでガシガシカスタマイズしたいという気持ちが強かったです。

## 新サイトのコンセプト

というわけで、Gatsbyサイトのコンセプトは次になります。

- 最先端フロントエンド技術を投入する
- 世界最速のフレームワークによる爆速サイトを目指す
- アフィリエイトは目指さず有名になることを目指す

特に3つめに注目!

サイトには、Googleアドセンスは貼らない予定です。
このブログの目的は、ブログを通じてフリーランスエンジニアとして有名になって **仕事を獲得する** ことにあるからです。
これをCAREEA SKILLSの著者、Sonmez氏はインバウンドマーケティングと呼んでいました。
Googleアドセンスは、ブログのデザインを崩すところが嫌いです。
（こんなことを書いておきつつ、数ヵ月後にアドセンスを張り付けていたらゴメンネ）

## GatsbyJSを導入する際の課題

２つの課題がありました。

### Reactを知らない

まず、GatsbyJSを導入する際の課題は、 **ぼくはJavaScriptを知らない** ということです。
ましてや、Reactも知りません。下心をいうと、 GatsbyJSでのブログ作成を通じて、
 JavaScriptやReactの技術習得ができたらいいなと思っていました。

こちらについて、結論からいうと、 **なんか知らなくても作れちゃいました（笑）**

とても苦労したことは確かです。しかし、チュートリアルやstarterが豊富にそろっていますので、
それらをコピー&ペーストして組み合わせることでなんとかサイトができてしまいました。
さらには、 Reactも分かった気がします。（Reactが分かったとは言っていない）

### WordPress, Hugoとの互換性

このブログは、WordPress, Hugoと2つのフレームワークを経由しています。
そのため、過去に書いた記事との互換性を合わせる必要があります。
特に、 Markdownで吐き出されるヘッダ（frontmatter）が異なります。
そこをプログラミングの力でうまく処理する必要があり、苦労しました。

## サイト移行手順

さて、具体的なサイト移行です。
Hugoからの移行であるため、frontmatterさえなんとかすればMarkdown本文はそのまま使えます。

今回の移行に際しては銀の弾丸的な先人のブログ記事があり、それにしたがって移行しました。

- [unlikenesses\.com/2017\-11\-06\-migrating\-blog\-to\-gatsby/](http://unlikenesses.com/2017-11-06-migrating-blog-to-gatsby/)

この記事は、JekyllからGatsbyへの移行ですが、Hugoに読み替えてもいけます。
特に今回はHydeてーまをGatsbyに移植したかったのですが、
記事にしたがってテーマのCSSをそのまま持ってくることで、簡単にテーマ移植ができました。

## まとめ

最後に、今回作成したGatsbyJSのソースのリンクを紹介します。
READMEも参照ください。作り込んだ機能を列挙しています。

- https://github.com/tsu-nera/futurismo3

この記事ではGatsbyJSをつかった実際の技術的なところには触れませんが、機会があれば別記事でいろいろ書きます。
（やったことが多すぎてOutputが追いつかない。詳細を知りたい場合は、GitHubのissueをあさってください。DMくれてもいいです)