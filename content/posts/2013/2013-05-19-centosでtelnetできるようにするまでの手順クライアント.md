---
author: admin
categories:
- Linux
date: 2013-05-19T03:29:08+00:00
dsq_thread_id:
- 3.6936668e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 58847
tags:
- CentOS
- telnet
title: CentOSでtelnetできるようにするまでの手順(クライアント・サーバ)
type: post
url: /archives/=1339
---

<!--:ja-->CentOSでtelnetを実施するための手順を調べてみたのではメモします。

### telnetクライアントの設定

コマンド一つで入る。これはラクチン。

> \# yum -y install telnet

### telnetサーバの設定

#### telnetサーバインストール

まずはサーバをインストール。

> \# yum -y install telnet-server

#### IP設定

emacs -nw /etc/host.allowに
  
同一のネットワーク内のクライアントを許可する場合は、以下を追記。

> in.telnetd: 192.168.XXX

#### telnetサーバ有効化

インストール直後では、Telnet-Serverは無効になっています。以下の変更を加える事で有効にできます。

> \# vi /etc/xinetd.d/telnet
  
> \# default: on
  
> \# description: The telnet server serves telnet sessions; it uses \
  
> \# unencrypted username/password pairs for authentication.
  
> service telnet
  
> {
  
> flags = REUSE-
  
> socket_type = stream
  
> wait = no
  
> user = root
  
> server = /usr/sbin/in.log\_on\_failure += USERID
  
> disable = no # ここをyesからnoに変更
  
> }

#### サーバを起動

\# /etc/init.d/xinetd start

#### telnet実験

まずは、ローカルホストに入れるのかテスト。

> \# telnet localhost

次に、Windowsからtelnetしてみるができない。。。(´･ω･｀)

#### ファイアウォール設定

ファイアウォールの設定が必要。telnetはポート23で通信するが、デフォルトではポート23は閉じているので、開ける必要がある。以下のコマンドで、23が空いているか確認。

> \# less /etc/sysconfig/iptables

23という数字が見当たらなければ設定が必要。/etc/sysconfig/iptablesに以下の行を追記する。見にくいのだが、&#8211;stateと&#8211;dportの- は &#8211; が 2つ連続。

    -A INPUT -m state --state NEW -m tcp -p tcp --dport 23-j ACCEPT

iptablesを再起動して設定を適用すれば、telnetできるようになる。

> \# service iptables restart

#### 参考

  * [CentOS6.0、windows、その他忘備録 &#8211; telnetサーバの導入][1]
  * [CentOS 5のインストールとTelnet設定。 &#8211; Monolog][2]
  * [ITテクニックデータベース 【Linux】telnetの設定][3]

<!--:-->

<!--:en-->

CentOSでtelnetを実施するための手順を調べてみたのではメモします。

### telnetクライアントの設定

コマンド一つで入る。これはラクチン。

> \# yum -y install telnet 

### telnetサーバの設定

#### telnetサーバインストール

まずはサーバをインストール。

> \# yum -y install telnet-server

#### IP設定

emacs -nw /etc/host.allowに   
同一のネットワーク内のクライアントを許可する場合は、以下を追記。

> in.telnetd: 192.168.XXX

#### telnetサーバ有効化

インストール直後では、Telnet-Serverは無効になっています。以下の変更を加える事で有効にできます。

> \# vi /etc/xinetd.d/telnet   
> \# default: on   
> \# description: The telnet server serves telnet sessions; it uses \   
> \# unencrypted username/password pairs for authentication.   
> service telnet   
> {   
> flags = REUSE   
> socket_type = stream   
> wait = no   
> user = root   
> server = /usr/sbin/in.telnetd   
> log\_on\_failure += USERID   
> disable = no # ここをyesからnoに変更   
> } 

#### サーバを起動

\# /etc/init.d/xinetd start

#### telnet実験

まずは、ローカルホストに入れるのかテスト。

> \# telnet localhost

次に、Windowsからtelnetしてみるができない。。。(´･ω･｀)

#### ファイアウォール設定

ファイアウォールの設定が必要。telnetはポート23で通信するが、デフォルトではポート23は閉じているので、開ける必要がある。以下のコマンドで、23が空いているか確認。

> \# less /etc/sysconfig/iptables

23という数字が見当たらなければ設定が必要。/etc/sysconfig/iptablesに以下の行を追記する。

> -A INPUT -m state &#8211;state NEW -m tcp -p tcp &#8211;dport 23-j ACCEPT

iptablesを再起動して設定を適用すれば、telnetできるようになる。

> \# service iptables restart

#### 参考

  * [CentOS6.0、windows、その他忘備録 &#8211; telnetサーバの導入][1]
  * [CentOS 5のインストールとTelnet設定。 &#8211; Monolog][2]
  * [ITテクニックデータベース 【Linux】telnetの設定][3]

<!--:-->

 [1]: https://www10.atwiki.jp/noel1008/pages/76.html
 [2]: https://blog.goo.ne.jp/j-watanuki/e/ad19bf558f373b46016115a581396617
 [3]: https://onoaff.blog28.fc2.com/blog-entry-41.html