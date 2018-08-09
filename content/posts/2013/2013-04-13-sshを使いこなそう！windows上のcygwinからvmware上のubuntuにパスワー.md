---
author: admin
categories:
- Linux
date: 2013-04-13T04:13:47+00:00
dsq_thread_id:
- 3.713796e+09
pvc_views:
- 6162
tags:
- cygwin
- OpenSSH
title: SSHを使いこなそう！Windows上のCygwinからvmware上のUbuntuにパスワードなしでSSH通信するまでのまとめ
type: post
url: /archives/=1266
---

OpenSSHには、個人的に何度も苦労しているので、ココらへんで接続確立手順をまとめておこうと思う。

#### 環境

  * SSHサーバ Ubuntu&#160; Ubuntu 12.10 (vmware上で起動) 
  * SSHクライアントCygwin&#160; 1.7.17-1(Windows 7上で動作) 

Windows上のCygwinからvmware上のUbuntuにSSHするまでを目指す。

### OpenSSHとは

OpenSSHについてもまとめておく。OpneSSHとは、SSH通信をするためのフリーソフト/ツール。SSHとは、暗号技術を利用して安全に情報をやりとりするためのプロトコル。SSHのウレシイところは、パスワードなしで自由に他のコンピュータと通信ができるところだ。公式サイトはココ。

<a href="https://www.openssh.org/" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://www.openssh.org/" width="150" height="130" /></a> <a style="color: #0070c5" href="https://www.openssh.org/" target="_blank">OpenSSH</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://www.openssh.org/" />

### OpenSSHに必要なもの

#### サーバ側の設定

UbuntuにSSHサーバをインストールする。以下のコマンドで取得。

> $sudo apt-get install openssh-server

次に、SSHサーバの設定ファイルを編集します。これも管理者権限でオープン。

> $sudo emacs /etc/ssh/sshd_config 

PasswordAuthentication というの項目をyesに変更。PasswordAuthenticationはパスワード認証を許可するかどうかの設定。defaultではコメントされている。また、今回はRSA暗号を使うため、設定ファイルでRSAを有効にしておく。

> \# Change to no to disable tunnelled clear text passwords   
> PasswordAuthentication yes
> 
> RSAAuthentication yes   
> PubkeyAuthentication yes

最後に設定を反映するために、サーバを再起動します。

> $sudo /etc/init.d/ssh restart

&#160;

#### クライアント側の設定

cygwin側にもSSHクライアントを導入します。setup.exeからopensshを取得してインストールします。

### OpenSSH通信の確立

#### クライアント側で鍵生成

クライアント側で暗号鍵を生成します。ここではRSA暗号方式を採用。一番有名なので。以下のコマンドで$HOME/.sshに秘密鍵と公開鍵が作成される。パスワード入力が求められるが、ここではなにも入れずにEnterをおす。

  * id_rsa(秘密鍵） 
  * id_rsa.pub(公開鍵) 

> $ ssh-keygen   
> Generating public/private rsa key pair.   
> Enter file in which to save the key (/home/TSUNEMICHI/.ssh/id_rsa):   
> Created directory &#8216;/home/TSUNEMICHI/.ssh&#8217;.   
> Enter passphrase (empty for no passphrase):   
> Enter same passphrase again:   
> Your identification has been saved in /home/TSUNEMICHI/.ssh/id_rsa.   
> Your public key has been saved in /home/TSUNEMICHI/.ssh/id_rsa.pub.   
> The key fingerprint is:   
> 78:af:12:31:f3:e2:b5:12:93:cc:8d:97:5e:36:5b:5c tsu-nera@TSUNEMICHI-VAIO   
> The key&#8217;s randomart image is:   
> +&#8211;[ RSA 2048]&#8212;-+   
> |&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; |   
> |&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; |   
> |&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; |   
> |&#160;&#160;&#160;&#160;&#160; +.&#160;&#160;&#160;&#160;&#160; E&#160; |   
> |&#160;&#160;&#160;&#160; o.OS. . .&#160;&#160; |   
> |&#160;&#160;&#160;&#160;&#160; X.*.+ o&#160;&#160;&#160; |   
> |&#160;&#160;&#160;&#160; . O +.+&#160;&#160;&#160;&#160; |   
> |&#160;&#160;&#160;&#160;&#160; + o..&#160;&#160;&#160;&#160;&#160; |   
> |&#160;&#160;&#160;&#160;&#160;&#160; o.&#160;&#160;&#160;&#160;&#160;&#160;&#160; |   
> +&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;+

#### クライアントの公開鍵をサーバに送信

クライアントの公開鍵をサーバに送ります。安全のために、ここではscpコマンドを使うのがよいでしょう。

> $ scp ~/.ssh/id_rsa.pub&#160; <tsu-nera@192.168.118.129>:   
> The authenticity of host &#8216;192.168.118.129 (192.168.118.129)&#8217; can&#8217;t be established.   
> ECDSA key fingerprint is 3e:0c:49:ce:a0:14:79:82:bd:88:02:9d:1a:7c:d3:c0.   
> Are you sure you want to continue connecting (yes/no)? yes   
> Warning: Permanently added &#8216;192.168.118.129&#8217; (ECDSA) to the list of known hosts.   
> [tsu-nera@192.168.118.129&#8217;s][1] password:   
> id_rsa.pub&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; 100%&#160; 406&#160;&#160;&#160;&#160; 0.4KB/s&#160;&#160; 00:00

#### サーバ側で公開鍵の認証登録をする

ここからは、サーバの設定です。まずは、クライアントの公開鍵を保存するためのディレクトリを作成。アクセス権限は自分だけに与えます。そうしないと、パスワードを聞かれる。（ココてハマった）

> $ mkdir .ssh   
> $ chmod 700 .ssh 
> 
> $ ls -al|grep ssh   
> drwx&#8212;&#8212;&#160; 2 tsu-nera tsu-nera&#160; 4096&#160; 4月 13 12:49 .ssh

次に、クライアントの公開鍵をauthorized_keysというファイルに覚えます。覚えさせたら、クライアントの公開鍵はすみやかに削除しましょう。

> $ cat id\_rsa.pub >> .ssh/authorized\_keys   
> $ rm id_ras.pub

.ssh/authorized_keysのアクセス権限も変更します。

> $$ chmod 600 .ssh/authorized_keys

ちなみにauthorized\_keysてはなくauthorized\_keys2の場合もあるらしい。Ubuntuではauthorized_keysがデフォルト。うまくいかない場合は、設定ファイルで以下の項目を確認するとよい。

> $ grep AuthorizedKeysFile /etc/ssh/sshd_config   
> AuthorizedKeysFile %h/.ssh/authorized_keys

### クライアント側からアクセスしてみる

準備完了。クライアント側からアクセスしてみる。

> $ ssh&#160; <tsu-nera@192.168.118.129>   
> Welcome to Ubuntu 12.10 (GNU/Linux 3.5.0-18-generic i686)
> 
> * Documentation:&#160; <https://help.ubuntu.com/>
> 
> Last login: Fri Apr 12 20:50:51 2013 from 192.168.118.1   
> <tsu-nera@tsunera-virtual-machine:~$>

アクセスできたら、サーバ側の設定ファイルでパスワード認証を解除する。

> \# Change to no to disable tunnelled clear text passwords   
> PasswordAuthentication no

最後に設定を反映するために、サーバを再起動します。

> $sudo /etc/init.d/ssh restart

[https://www.youtube.com/embed/yaNiOf-7X_o?rel=0]

 [1]: mailto:tsu-nera@192.168.118.129's