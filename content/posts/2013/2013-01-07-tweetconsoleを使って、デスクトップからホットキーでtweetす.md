---
author: admin
categories:
- VBA
- 日記
date: 2013-01-07T11:54:18+00:00
dsq_thread_id:
- 3.7598705e+09
pdrp_attributionLocation:
- end
pvc_views:
- 2809
tags:
- twitter
title: TweetConsoleを使って、デスクトップからホットキーでtweetする
type: post
url: /archives/=1161
---

前回、twitcurlライブラリを利用した自作twitterクライアントでつぶやく方法を書いた。

  * [twitcurlでWindowsのデスクトップからホットキーでtwitterにtweetする | Futurismo][1]

フリーソフトで、この手のコマンドプロンプトからtwitterを利用するツールはけっこうあるらしく、その中で一つ『TweetConsole』とVBSを組み合わせたTipsを紹介。

<a href="https://www.vector.co.jp/soft/win95/net/se483315.html" target="_blank"><img class="alignleft" alt="" src="https://capture.heartrails.com/150x130/shadow?https://www.vector.co.jp/soft/win95/net/se483315.html" width="150" height="130" align="left" border="0" /></a> <a style="color: #0070c5" href="https://www.vector.co.jp/soft/win95/net/se483315.html" target="_blank">TweetConsoleの詳細情報 : Vector ソフトを探す！</a> <img alt="" src="https://b.hatena.ne.jp/entry/image/https://www.vector.co.jp/soft/win95/net/se483315.html" border="0" />

&nbsp;

&nbsp;

はじめに、twitterの認証が必要（これは、twtcnsl.exeを実行して認証する）
  
一度認証すれば、あとは認証は必要なく利用できる。

TweetConsoleでつぶやく方法は以下。twtcnslが実行コマンドで /tがオプション。

> twtcnsl /t テスト投稿です

ダウンロードしたtwtcnsl.exeをどこかに移動して、前回作ったVBSを少し書き換える。
  
Program Filesみたいに、パス名に空白が入ると実行できない。

https://gist.github.com/4466704

 [1]: https://futurismo.biz/archives/1150