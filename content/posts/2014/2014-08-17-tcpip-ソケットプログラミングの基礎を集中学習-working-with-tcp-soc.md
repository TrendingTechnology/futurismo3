---
author: admin
categories:
- Ruby
- 技術メモ
- 書評
date: 2014-08-17T12:49:00+00:00
dsq_thread_id:
- 3.7319634e+09
excerpt: ソケットプログラミング知識をつけるために Working with TCP sockets を読んでる
pvc_views:
- 3050
tags:
- ネットワーク
title: TCP/IP ソケットプログラミングの基礎を集中学習! Working with TCP sockets を読んでる
type: post
url: /archives/=2572
---

<a href="https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite"><img alt="" src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" width="256" height="256" /></a>

はじめに
========

これからネットワーク関係の業務が始まる.

ネットワークの知識をつけるためにソケットプログラミングの本を読み始めた.

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'><div class='amazlink-list' style='clear: both;'><div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'><a href='https://www.amazon.co.jp/Working-With-Sockets-Jesse-Storimer-ebook/dp/B00BPYT6PK%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00BPYT6PK' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/51uNC60Jm4L._SL160_.jpg' style='border: none;' /></a></div><div class='amazlink-info' style='height:124; margin-bottom: 10px'><div class='amazlink-name' style='margin-bottom:10px;line-height:120%'><a href='https://www.amazon.co.jp/Working-With-Sockets-Jesse-Storimer-ebook/dp/B00BPYT6PK%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00BPYT6PK' rel='nofollow' target='_blank'>Working With TCP Sockets</a></div><div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 14.08.17</div><div class='amazlink-detail'>Jesse Storimer<br /></div><div class='amazlink-sub-info' style='float: left;'><div class='amazlink-link' style='margin-top: 5px'><img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18'><a href='https://www.amazon.co.jp/Working-With-Sockets-Jesse-Storimer-ebook/dp/B00BPYT6PK%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00BPYT6PK' rel='nofollow' target='_blank'>Amazon</a></div></div></div></div></div>

本の内容
========

Ruby をつかって, ソケットプログラミングの内容が解説されている.この本
のよさは, まさに,

**安い, はやい, うまい**

である.

-   Amazon Kindle で購入できるから, 1000 円で即時に手に入る.
-   はじめのほうが丁寧にかかれているので, Ruby さえしっていれば, 短時間
    でソケットプログラミングのエッセンスを速習できる.
-   たった 100p ちょいの厚さだけれども, 要点がまとまっていてる.

初めの 1/3 は基本のサーバ・クライアントプログラミング.C 言語にも通じ
る内容を Ruby で解説している. わたしの業務ははじめは Ruby でプロトタイ
ピングをして, そのあと Java で書く予定.なので, 言語に縛られない知識
が欲しい. そういう意味で, 基礎を学ぶことは有意義.

自分は以前, C で 軽くネットワークをかじったので, Ruby での簡潔さに驚
いた. いろいろメソッドが解説されるのだけれども, 最後に Ruby の糖衣構
文がでてきて, ほーら Ruby だとこんなに簡単にかけるんだよーといわれる.

-   [IPv6 ネットワークプログラミングを読んだ感想 |
    Futurismo](https://futurismo.biz/archives/1206)

中盤は, Non-Blocking I/O やマルチソケットプログラミングなど, やや専門
的なな内容を扱っている. 自分の仕事では利用するところとしないところ我
ありそうなので, つまみ食いしつつ読んでいる (今ここ)

驚いたのが終盤の章だ. ネットワーキングのアーキテクチャパターンが解説
されている. 結構マニアック.そして, coursera でここを学んだ, そしてま
だ学んでいる自分としては, この参考資料はうれしい.

-   [オブジェクト指向設計と並列プログラミングを Andoird で学
    ぶ!Pattern-Oriented Software Architectures を受けた |
    Futurismo](https://futurismo.biz/archives/2527)

ソケットプログラミングの基礎メモ
================================

以下, かんたんなメモ.

Socket
------

-   実行中のプログラム間でデータの送受信を行うための標準的なプログラ
    ミングインターフェース (API) の一つ.
-   TCP/IP アプリケーションを作成するための抽象化されたインターフェース
-   [ソケット (BSD) -
    Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%BD%E3%82%B1%E3%83%83%E3%83%88_(BSD))

EndPoints
---------

端末.一意に定まる通信先.

Socket は IP Address と PortNo.をつかって, 通信先のソケットを特定す る.
ネットワークに接続されたパソコンや PDA, 携帯電話などのネットワーク
端末の総称.

-   [エンドポイントとは (end point): - IT
    用語辞典バイナリ](https://www.sophia-it.com/content/%E3%82%A8%E3%83%B3%E3%83%89%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88)

エンドボイントに Socket がバインドされる.

Loopbacks
---------

IP アドレスは必ずしもリモートホストと関連付けられている必要はない.
得に開発環境では, ローカルな IP アドレスが役に立つ.

自端末に対して通信することを LoopBack という. LoopBack
で指定するアドレスを Loopback Address という.

-   ハードウェアと関係ない, 論理的なインタフェース.
-   Linux では, localhost と言われている. IP は 127.0.0.1

[ループバックとは 〔 ローカルループバック
〕](https://e-words.jp/w/E383ABE383BCE38397E38390E38383E382AF.html)

Server Lifecycle
----------------

1.  create ソケットの生成
2.  bind
    -   ソケットを利用する Port にバインド.
        -   User でバインドする Port は 1025-48999
    -   ソケットが通信を許可する IP を指定.

-   0.0.0.0: すべて許可
-   127.0.0.1: 自端末のみ許可
-   xxx.xxx.xxx.xxx: ある端末のみ許可

1.  listen 通信先ソケットからの通信をまつ
2.  accept 通信先ソケットからの通信を受け取り, 通信路 をそのつど生成
    (connection)
3.  close 通信元ソケットの消滅.

``` {.ruby}
# coding: utf-8
require 'socket'

# 1. create
server = Socket.new (:INET, :STREAM)

# 2. bind
addr = Socket.pack_sockaddr_in (4481, "0.0.0.0")
server.bind (addr)

# 3. listen 
server.listen (5)

# 4. accept
loop do
  connection, _ = server.accept

  ## send message from client.
  # ehco "Hello" | nc localhost 4481
  p connection

  # it should be closed each connection
  connection.close
end

# 5. close
server.close
```

### TCPServer

Ruby では, 以下のような糖衣構文がある.

-   [class
    TCPServer](https://docs.ruby-lang.org/ja/2.0.0/class/TCPServer.html)

``` {.ruby}
server = TCPServer.new (4481)
# => 
# server = Socket.new (:INET, :STREAM)
# addr = Socket.pack_sockaddr_in (4481, "0.0.0.0")
# server.bind (addr)
# server.listen (5)
```

Client LifeCycle
----------------

1.  create ソケットの生成

(2. bind )

1.  connect サーバと接続
2.  close ソケットの破棄

``` {.ruby}
require 'socket'

# 1. create
socket = Socket.new (:INET, :STREAM)

# 3. connect
remote_addr = Socket.pack_sockaddr_in (80, 'google.com')
socket.connect (remote_addr)

# 4. close
socket.close
```

### TCPSocket

Ruby では, 以下のような糖衣構文がある.

-   [class
    TCPSocket](https://docs.ruby-lang.org/ja/1.8.7/class/TCPSocket.html)

``` {.ruby}
socket = TCPSocket.new ('google.com', 80)
# =>
# socket = Socket.new (:INET, :STREAM)
# remote_addr = Socket.pack_sockaddr_in (80, 'google.com')
# socket.connect (remote_addr)
```

Simple Read
-----------

以下の例では, 永遠にサーバは Read を待ち続けて, その先が進まない.

``` {.ruby}
require 'socket'

Socket.tcp_server_loop (4481) do |connection|
  puts connection.read
  connection.close
end
```

Socket は指定されたデータ長のデータが到着するまで待ち続ける.
デッドロックを回避するためには,

-   Client 側で データの最後で EOF を送信する.(EOF event)
-   Server 側で一度に読み込むデータ長を小さくする. (partial read)

Client のソケットが close メソッドを実行すると, その延長で EOF が通知
される.

最後に
======

来週からつかう知識だとだとおもうと, 知識を吸収しようという集中力が違 う.

それは, 不安だからでもある. 知識を求めるのは, 自分の無力感を感じたく
ないから. 仕事が遅れて辛いおもいをしたくないから.

はたして, これからやってけるかな...
