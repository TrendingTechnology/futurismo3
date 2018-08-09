---
author: admin
categories:
- Linux
date: 2018-01-04T15:35:15+00:00
dsq_thread_id:
- 6.3911654e+09
excerpt: 自宅のUbuntuサーバに外からsshでアクセスする
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 213
side:
- "y"
tags:
- Ubuntu
title: 自宅のUbuntuサーバに外からsshでアクセスする
title_view:
- "y"
type: post
url: /archives/=6862
---

自宅に高価なパソコンを購入したので、どうせなら外出先でもアクセスしたい。

なので、外部から自宅サーバにsshする方法を調べて設定してみた。

### 環境 {#-}

  * ソフトバンク光 BBユニット
  * Ubuntu 16.04 LTS (サーバもクライアントも)

## ssh鍵認証でログインする {#ssh-}

第一ステップとして、ローカルネットワーク、つまり自宅内のネットワークでssh接続できることを目指す。パスワード認証ではなくて、ssh鍵認証をする。ハッキングが怖いので。

これは、5年前！に書いた自分の記事が役に立った。整理しつつ、再掲。

  * [SSHを使いこなそう！Windows上のCygwinからvmware上のUbuntuにパスワードなしでSSH通信するまでのまとめ | Futurismo][1]

### サーバ側の設定 {#-}

サーバ側にssh serverを インストールする。

    sudo apt install openssh-server
    

これでOk.簡単です。次にsshの設定をいじる。 /etc/ssh/sshd_configを管理者権限で編集

    sudo nano /etc/ssh/ssh_config
    
    //ルートでのログイン禁止
    PermitRootLogin no
    
    //RSA認証の有効化
    RSAAuthentication yes
    
    //パスワードによる認証を許可
    PasswordAuthentication yes
    
    //空のパスワードは拒否
    PermitEmptyPasswords no
    
    //チャレンジレスポンス認証を不許可
    ChallengeResponseAuthentication no
    

設定の反映のために再起動。

    systemctl restart sshd
    

### クライアント側の設定 {#-}

クライアントの設定。といってもsshコマンドはデフォルトで入っている。

    // 認証公開鍵の作成
    $ ssh-keygen -t rsa
    
    // いくつか質問されるのでEnter連打。
    

クライアントの公開鍵をサーバに送ります。安全のために、ここではscpコマンドを使うのがよいでしょう。

    $ scp ~/.ssh/id_rsa.pub  tsu-nera@XXX.XXX.XXX.XXX:
    

### 再びサーバ側の設定 {#-}

scpで送った鍵を保存する。

    $ cat id_rsa.pub >> .ssh/authorized_keys
    $ rm id_ras.pub
    
    $ chmod 600 .ssh/authorized_keys
    

再度、sshd_configの設定を編集.

    //パスワードによる認証を許可しない
    PasswordAuthentication no
    

再起動して終了。

    sudo systemctl restart sshd
    

## ローカルIPアドレスを固定する {#-ip-}

ローカルIPアドレス(プライベートIPアドレス)は、DHCP機能によって自動的に振られるので、これを固定IPアドレスにする。

固定の方法なのだけれども、ここでかなりハマった。以下の記事を参考に/etc/network/interfacesを覗いてみたのだけれども・・・

  * [[Ubuntu]ローカルIPアドレスを固定にする | 純規の暇人趣味ブログ][2]

    $ cat /etc/network/interfaces
    # interfaces(5) file used by ifup(8) and ifdown(8)
    auto lo
    iface lo inet loopback
    

あれ、Loopbackのnicしかないyo!!

ということで、ここでハマった。いろいろ調べてみると、15.xからここらへんの仕様変更があったようで、名前が記事とは違うらしい。名前どころか、仕組みも違うみたい。詳しくは調べきれていないのだが、Network Managerというserviceに置き換わろうとしていて、そのフロントエンドが nm-appletというアプリだそうだ。

というわけで、nm-appletをいじる。これは、右上のネットワーク接続を示すアプレットのこと。これで、まずは接続情報というところをチェックする。Ipv4の欄の

  * IPアドレス
  * ブロードキャストアドレス
  * サブネットマスク
  * デフォルトゲートウェイ

をチェックしてメモする。そして、接続を編集するを選択して、現在接続中の通信を選択して編集を押す。Ipv4設定を選択し情報を以下のように入力する。

![][3]

ここでは、192.168.3.5を固定IPアドレスにした。これでIPは固定になるはず（自信ないです。。。）

### ssh port を 22から 10022に変更する {#ssh-port-22-10022-}

ssh は port 22 なのだけれども、これを変更する。ハッカーに攻撃されないようにね。

設定ファイルを開き、下記のように変更する。

    $ sudo nano /etc/services
    
    //前
    ssh              22/udp     # SSH Remote Login Protocol
    ssh              22/tcp     # SSH Remote Login Protocol
    
    //後
    ssh              10022/udp     # SSH Remote Login Protocol
    ssh              10022/tcp     # SSH Remote Login Protocol
    

## グローバルIPアドレスでアクセス {#-ip-}

さあ、ローカルネットワークではこれでssh接続できるようになった。次はグローバルだ。まずは、自分のグローバルIPアドレスを以下から調べる。

  * [アクセス情報【使用中のIPアドレス確認】][4]

### ソフトバンク光BBユニットの設定からポート開放設定 {#-bb-}

自分の家のルータの設定を変更して、上で設定した10022番ポートがホストに回してくれるよう設定する。

  * <https://172.16.255.254/> に接続、user/userでログイン
  * 詳細設定を開く -> ポート転送
  * 有効/無効 -> 有効
  * プロトコル -> tcp
  * WAN/LAN側ポート両方 -> 10022-10022
  * 転送先IPアドレス -> 自分のローカルipアドレス

ルーターを再起動する。

### No-IPを使ってグローバルIPアドレスを DDNSで追跡する {#no-ip-ip-ddns-}

グローバルIPアドレスは気まぐれで変更されてしまう。なので、変更を追跡してくれるサービスを利用する。DDNS(Dynamic DNS)というらしい。No-IPというサービを利用する。

  * <https://www.noip.com/>

これに登録して、fox10225fox.ddns.netというドメインを取得した。

## 最後の仕上げ {#-}

以下のコマンドで、アクセスできれば目標達成。

    ssh -p 10022 tsu-nera@fox10225fox.ddns.net
    

### ちなみにヘアピンNATに注意 {#-nat-}

同一ネットワーク内からグローバルIPにアクセスしようとすると、アクセスが失敗する。これは、ヘアピンNATと呼ばれているルーターの仕組みの問題。

ヘアピンNAT対応していないルータをつかっていると、どんなに設定をいじってもアクセスが失敗する(これでとても時間をつかった)

  * [自宅でWebサーバを運用するならヘアピンNAT付きルータが便利 &#8211; Tari Lari Run][5]

/etc/hostsを編集する方法がネットにたくさん散見された。これで試したところ、うまく行った。

    $ sudo /etc/hosts
    
    192.168.3.5 fox10225fox.ddns.net

 [1]: https://futurismo.biz/archives/1266
 [2]: https://jyn.jp/ubuntu-localip-static/
 [3]: https://lh3.googleusercontent.com/VxUs8mK9tRym-RIjtWsdDFEMNIMf7Et8iERFbdvZMMeSt1-8JVCEQBMjEKAJZpO8hFnG8-kyLJ_g05GqlMTxldPxnGZppLUT2n6VbKg5UDNazWgTXjRZEF8U1gPaOg4DaYnemyFFQel5GNHyasY0tfbZiX9kniuTCBbDIUO05xQ0CBQt8WP95ZA_JP8koQ0xZ02RWmd3oXYEcu0qg8-DMBFUeyWLuvTTFtKf-HEXqHV0aOJPgmR0jaDm0WSMswDQp5bp3q6vUjK_U4dxQJnZVp_S_o3EMvvBF9dwvodCZFcUVDTlrTrbK6ldzpTQEVBzfYggoPIkv7sxpPZbKG_MVDDDchW85TjyLofH2TMJ36q6yUI768jqh4RVrqW9bvzkk-D5EB_Li58mvziBVz7vXPZAvjIqQ9CD2v7-_MVBp5-PbcfsvyybxhKcXlS7-mzWH-L4ga0dNOw4dxMr-gis64AlljpaANNoavhARaIJUbjuJko_FZbEOrwl_Vd4UFl6oMuhoAo84ixoVUykN0HgVGLcaq7dbjWcziod80TQlbrDn6_fO3vl7WSKMu_fuCkr3EAspOC1XgmZEUcNRrNIVkSqIz1gj19ma4Bv7fY=w515-h482-no
 [4]: https://www.cman.jp/network/support/go_access.cgi
 [5]: https://bygzam.seesaa.net/article/117880246.html