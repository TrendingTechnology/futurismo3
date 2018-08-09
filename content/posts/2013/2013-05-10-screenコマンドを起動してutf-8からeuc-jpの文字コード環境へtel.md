---
title: screenコマンドを起動してutf-8からeuc-jpの文字コード環境へtelnetして文字化けしたときの対策
author: admin
type: post
date: 2013-05-09T23:12:43+00:00
draft: true
private: true
url: /archives/=1310
pvc_views:
  - 21
pdrp_attributionLocation:
  - end
categories:
  - Linux
tags:
  - cygwin
  - expect
  - screen

---
telnetとexpectコマンドを利用して、サーバにオートログインする方法を調べた。

[Expect コマンドでパスワードなしでログインする方法(telnet,ssh,scp) | Futurismo][1]

しかし、この方法では、utf-8からeuc-jpにtelnetしたときに文字化けしてしまうことがわかった。telnetだけではなく、screenコマンドを起動した上でtelnetをしても同様の事象となる。ターミナルエディタの設定を変えてもダメ（cygterm, mintty, ck全滅。。。）環境変数のLANGを設定しても回避できない。

そこで、いろいろ試した結果、telnetをするまえに以下のコマンドを叩くとよいことがわかった。

encoding system utf8

これで、telnetしてログインし、ログイン先でターミナルエディタの設定をEUC-JPに変更すると、正しく表示されるようになった。screenを起動した上でログインしてもOK.

### expectコマンドの途中で文字化けして強制終了

しかし、一難去ってまた一難。telnetして、その先でEmacsを開いて文字を打つと、強制終了してしまい、telnetを抜けてしまう。コンソール画面で日本語を入力しても、強制終了してしまう。

どうも、expectを利用しているのが悪さをしているようだ。とりあえず、expectを使わないで頑張るようにしてみる。

#### 参考

  * [[debian-users:36161] Re: sjis 環境でexpectを使うと文字化け][2]

 [1]: https://futurismo.biz/archives/1272
 [2]: https://lists.debian.or.jp/debian-users/200302/msg00029.html