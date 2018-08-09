---
author: admin
categories:
- Linux
date: 2013-06-09T05:22:03+00:00
dsq_thread_id:
- 3.7184187e+09
pvc_views:
- 26899
tags:
- CentOS
- SMB
title: CentOS上でSAMBAサーバを立ちあげてWindowsからアクセスするためのメモ
type: post
url: /archives/=1390
---

前回、VMware上のCentOSからCygwinのディレクトリをマウントすることを記事にしました。

<a href="https://futurismo.biz/archives/1388" target="_blank">Cygwin(Windows)をCentOSからmountする方法 | Futurismo</a>

今回は、その逆。CentOSのディレクトリをWindowsにマウントします。CentOSにSambaを導入することで、実現しようと思います。

### CentOSでのSambaの設定

CentOS側での設定を書きます。ここでは、home配下を共有することを目的とします。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:ff5905b2-dfb5-4313-ab5a-dc028da3dd53" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c"># Sambaのインストール
yum -y install samba

# ユーザの追加。ここでは、tsu-neraユーザを
pdbedit -a tsu-nera

# パスワードを聞かれる
new password:
retype new password:
Unix username:        tsu-nera
NT username:
Account Flags:        [U          ]
User SID:             S-1-5-21-3434940687-3012143288-2006372190-1000
Primary Group SID:    S-1-5-21-3434940687-3012143288-2006372190-513
Full Name:
Home Directory:       \\centos\tsu-nera
HomeDir Drive:
Logon Script:
Profile Path:         \\centos\tsu-nera\profile
Domain:               CENTOS
Account desc:
Workstations:
Munged dial:
Logon time:           0
Logoff time:          never
Kickoff time:         never
Password last set:    日, 09  6月 2013 04:07:43 JST
Password can change:  日, 09  6月 2013 04:07:43 JST
Password must change: never
Last bad password   : 0
Bad password count  : 0
Logon hours         : FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF


</pre>
</div>

&#160;

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:ab1bf54e-16ba-4a46-aabc-da0d0b686afb" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">#======================= Global Settings ==================
[global]
   # 文字コード設定 CentOS
   unix charset = UTF-8
　 # 文字コード設定 Win
   dos charset = CP932
   display charset = UTF-8

# ----------------------- Network Related Options ----------
       # Widnows グループの設定 コンピュータのプロパティから調べる
        workgroup = WORKGROUP
 
        # Allow within local network
        hosts allow = 192.168.1. 127.

#============================ Share Definitions ==============
[homes]
        comment = Home Directories
        # ホームディレクトリをSAMBAで共有する
        path = %H
        browseable = no
        writable = yes
</pre>
</div>

&#160;

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:419942de-4b63-4784-a03e-f18357aaa861" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c"># Samba起動
bash-4.1# /etc/rc.d/init.d/smb start
SMB サービスを起動中:                                      [  OK  ]

# NMB起動
bash-4.1# /etc/rc.d/init.d/nmb start
NMB サービスを起動中:                                      [  OK  ]

# 起動時にサービスを起動するおまじない
chkconfig smb on　
chkconfig　nmb on　</pre>
</div>

#### ファイアウォールの設定

SAMBAを利用するためには、tcp 139,445, udp 137,138のポートを開ける。 /etc/sysconfig/iptablesを編集する。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:e76f245b-2f85-4d90-bdb4-46a1da7fa79b" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c"># for samba
 -A INPUT -p tcp --dport 139 -j ACCEPT
 -A INPUT -p udp --dport 137 -j ACCEPT
 -A INPUT -p udp --dport 138 -j ACCEPT
 -A INPUT -p tcp --dport 445 -j ACCEPT</pre>
</div>

&#160;

service iptables restart で再起動する。

#### SELinuxの設定

ここでスゴイハマった。CentOSにはSELinuxというセキュリティ強化用ソフトがあって、この設定をいじらないと、SAMBAでhomeディレクトリ配下を共有できない。(smb.confの初めにほうにも書いてあった）以下のコマンドを実行

setsebool -P samba\_enable\_home_dirs on

このコマンド実行は時間がかかる。気長に待つこと。

### Windowsでアクセスしてみる

(Windows) + r でファイル名を指定して実行を起動。

\\(サーバのIP)\(ユーザ名)

を入力する。パスワードが求められたら、パスワードを入力する。アクセス出来れば成功。

接続が確認できたら、ネットワークドライブの割り当てをしとく。

#### 参考

  * <a href="https://centossrv.com/samba.shtml" target="_blank">Windowsファイルサーバー構築(Samba) &#8211; CentOSで自宅サーバー構築</a> 
  * <a href="https://d.hatena.ne.jp/camellia1977/20120818/1345288125" target="_blank">CentOS 6.3でSambaサーバ &#8211; つばき さざんか 茶飲んでずずず</a> 
  * <a href="https://d.hatena.ne.jp/erio_nk/20120502/1335971007" target="_blank">Sambaの覚書。 &#8211; erio_nk://memo</a>