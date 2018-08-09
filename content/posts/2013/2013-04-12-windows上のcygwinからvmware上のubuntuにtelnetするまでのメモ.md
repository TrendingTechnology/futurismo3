---
author: admin
categories:
- Linux
date: 2013-04-12T08:00:50+00:00
dsq_thread_id:
- 3.7214136e+09
pvc_views:
- 3968
tags:
- cygwin
- Ubuntu
title: Windows上のcygwinからvmware上のUbuntuにtelnetするまでのメモ
type: post
url: /archives/=1264
---

Windows上のcygwinからvmware上のUbuntuにtelnetをしようとしてハマったのでメモ。   
Ubuntuには、defaultではtelnetができないようで、ツールを入れて設定が必要。

なにもしていないと、以下のように接続拒否される。

> $ telnet 192.168.118.129   
> Trying 192.168.118.129&#8230;   
> telnet: Unable to connect to remote host: Connection refused

### Ubuntuでtelnetをするためのツールをインストール

#### Inetutils-inetdをインストールする

netutils-inetdとはTCP/UDPを受信してプログラムを実行するサーバだそうで。以下のコマンドでインストール 。

[Ubuntu 窶錀 hardy の inetutils-inetd パッケージに関する詳細][1]

> $ sudo apt-get install inetutils-inetd 

#### tenletdをインストール

telnetdとは、telnetを受信するためのサーバ(デーモン)だそうで。以下のコマンドでインストール。

[Ubuntu 窶錀 hardy の telnetd パッケージに関する詳細][2]

> $ sudo apt-get install telnetd 

### 接続許可するIPアドレスを設定

/etc/host.allowに許可するIPアドレスを追加する。

> $ sudo emacs -nw /etc/host.allow 

許可するIPを追加する。追加したIPを後ろについて以下の一行を追加。

> in.telnetd: 192.168.101.1

まとめてこんな書き方もできる。

  * クライアントのIPアドレスを指定する場合 in.telnetd: 192.168.XXX.2
  * 同一のネットワーク内のクライアントを許可する場合 in.telnetd: 192.168.XXX

### inetdサーバを再起動

以下のコマンドで再起動する。

> /etc/init.d/inetutils-inetd restart

これで接続できるようになった。

> $ telnet 192.168.118.129   
> Trying 192.168.118.129&#8230;   
> Connected to 192.168.118.129.   
> Escape character is &#8216;^]&#8217;.   
> Ubuntu 12.10   
> tsunera-virtual-machine login: tu-nera   
> Password:

#### 参考

  * [妊娠、出産日記(夫の立場から) ubuntu (Linux) にtelnet接続するための設定][3]
  * [Ubuntu 11.10にtelnetを入れてみる。 | tkd55 blog][4]

 [1]: https://packages.ubuntu.com/ja/hardy/inetutils-inetd
 [2]: https://packages.ubuntu.com/ja/hardy/telnetd
 [3]: https://hatchaku.blog47.fc2.com/blog-entry-28.html
 [4]: https://www.tkd55.net/blog/archives/=132