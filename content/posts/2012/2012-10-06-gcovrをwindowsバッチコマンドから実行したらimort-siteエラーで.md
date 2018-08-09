---
author: admin
categories:
- Python
- 技術メモ
date: 2012-10-06T07:08:35+00:00
dsq_thread_id:
- 3.6983606e+09
pvc_views:
- 2906
tags:
- cygwin
- gcov
title: gcovrをWindowsバッチコマンドから実行したらimort siteエラーでハマる
type: post
url: /archives/=620
---

Cygwin環境で、gcovrをWindowsのコマンドプロンプトで実行しようとすると、以下のエラーが出た。 gcovrとは、gcovの結果をCoverture形式のXML出力結果に変換するPythonスクリプトだ。

> ‘import site’ failed : use 窶砺 for trackback

Pythonを使ったことがないからよくわからないが、調べてみると環境変数にパスが正しく設定されていないと、これが表示されるらしい。

回避方法は以下のサイトによると、

> import PYTHONHOME=/usr

を打ち込めばいいらしい。

参考 [_ Python &#8216;import site&#8217; failed; use -v for traceback][1]

これがWindowsのコマンドプロンプトからだと、

> set PYTHONHOME=/usr

で回避できた。

環境変数の設定からなんとかしようといろいろ試したけれど、よくわからなかった。   
とりあえず、gcovrを実行する前におまじないを叩いてから実行するという、若干ダメな回避方法で凌ぐ。

正しい方法がわかったら、またメモしよう。

 [1]: https://www.area51.gr.jp/~rin/diary/?date=20100204