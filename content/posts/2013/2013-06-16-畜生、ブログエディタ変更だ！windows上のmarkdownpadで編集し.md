---
author: admin
categories:
- Wordpress
- 日記
date: 2013-06-16T06:38:06+00:00
dsq_thread_id:
- 3.7293023e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3136
title: 畜生、ブログエディタ変更だ！Windows上のMarkDownPadで編集してWordPressに投稿する
type: post
url: /archives/=1456
---

### はじめに

今までは、WordPress投稿用のエディタはWindows Live Writerを利用していた。
  
ブログを独自ドメインに変更してテーマの更新を実行したら、テーマが反映されなくなってしまった。

解決方法は場合場合によって違うようで、ネット上の方法をすべて試してみたけれども、ダメだった。

<font color="#ff0000" size="5">畜生、エディタ変更だ！ヽ(`Д´)</font>

Markdown記法というのがシンプルで強力ときいたため、これでブログがかけたらいいなと思った。
  
というわけで、今日はWordPressでMarkdownを利用する方法を調査しました。

[toc]

### Markdown on Save Improved を導入

WordPressの投稿エディタでMarkDownを利用するためのプラグイン、Markdown on Save Improvedを入れる。インストールは、プラグインの検索からいつもの方法で。

<a href="https://wordpress.org/plugins/markdown-on-save-improved/" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://wordpress.org/plugins/markdown-on-save-improved/" width="150" height="130" /></a> <a style="color: #0070c5" href="https://wordpress.org/plugins/markdown-on-save-improved/" target="_blank">WordPress › Markdown on Save Improved « WordPress Plugins</a>  <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://wordpress.org/plugins/markdown-on-save-improved/" /><br style="clear: both" />

プラグインを有効化して新規投稿をしようとすると、デフォルトのエディタがMarkdown用のエディタになる。

[<img src="https://lh3.googleusercontent.com/-8NWxMgyrOzs/Ub1aENGhJZI/AAAAAAAAAYw/Bx1OVmXjFNM/s400/skitch.png" width="400" height="188" />][1]

MarkDownでかかれた記事は保存するときにHTMLに変換されるという仕組み。

#### WordPressプラグインが利用するタグを埋め込む場合

MarkDown中に、WordPressの機能のタグを利用したくなることがある。たとえば、目次を自動生成するためのTOCタグだったり、HyntaxHighwriterのタグだったり。

普通に生でタグを記入をすると、HTML変換時に、消されてしまう。

こういう時は、＜div＞ ＜/div＞で囲むとよいみたい。

参考:

  * <a href="https://zafiel.wingall.com/archives/4610" target="_blank">WordPressのMarkdownプラグインとSyntaxHighlighterを共存させる方法 | Azrael</a> 

#### 色やフォント、画像が使いたい時

MarkDown中に、HTMLを直接かける。なので、色を変えたい場所や、大きさを調整したい前後で
  
＜font＞ ＜/font＞をつければよい。

### MarkDownPad2もいっしょにつかう

まだMardDown記法自体に慣れていないため、頭のなかで完成された記事が描けない。そこで、MarkDownをリアルタイムプレビューしてくれるWindowsクライアントも探してみた。以下の記事が参考になった。

<a href="https://www.diffshare.com/blog/archives/2218" target="_blank">Windows向けMarkdownエディタまとめ | ぶろゲ</a>

世界で一番有名そうなWindows用MarkDownクライアントソフト「MarkDownPad2」を入れてみる。

ダウンロードは以下のサイトから。

<a href="https://markdownpad.com/" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://markdownpad.com/" width="150" height="130" /></a> <a style="color: #0070c5" href="https://markdownpad.com/" target="_blank">MarkdownPad &#8211; The Markdown Editor for Windows</a>  <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://markdownpad.com/" /><br style="clear: both" />

起動するとこんな感じ。

[<img src="https://lh6.googleusercontent.com/-cCbpmQ-yKlU/Ub1aFid6tDI/AAAAAAAAAY8/f3XVE6UAuwk/s400/skitch.jpg" width="400" height="224" />][2]

リアルタイムプレビューができるところが嬉しい。また、日本語翻訳されていて利用していて不具合はない。

このMarkdownをそのままWordPressに貼り付けても、プレビュー通りにならない。MarkDownっぽいスタイルシートを適用する。

  * git://github.com/nicolashery/markdownpad-github.git

### おわりに

まだ、実験段階なので、これが自分のスタイルになるかどうかはわからない。
  
このままだと、いちいちWebページを開かないと記事の投稿ができない。これは面倒だ。

次は、Emacsのorg2blogからWordPressにポストすることを試してみる。

一番いいのは、Windows Live Writerが使えようになることなんだけど、なんとかならないかな。。。

もう3時間くらい調べた気がする。。。はあ。(´｡･ω･｡｀)

#### 追記

Windows Live Writerのテーマがようやく更新できた。
  
原因は、index.htmlのPHPがバグってた！！！
  
でも、良い機会なので、MarkDownをもう少しいじってみる。

 [1]: https://picasaweb.google.com/lh/photo/j7OdSYds3qgjU2DFJzyVzTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [2]: https://picasaweb.google.com/lh/photo/WkgFmjCymzB5081eaRt9izyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite