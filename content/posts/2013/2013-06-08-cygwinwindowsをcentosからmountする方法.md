---
author: admin
categories:
- Linux
date: 2013-06-08T11:16:36+00:00
dsq_thread_id:
- 3.7317258e+09
pvc_views:
- 3143
tags:
- CentOS
- cygwin
title: Cygwin(Windows)をCentOSからmountする方法
type: post
url: /archives/=1388
---

### はじめに

Cygwinを今までつかっていたけれども、VMware上のCentOSにtelnetしたほうがよいのではと最近考え始めた。

その理由は、Cygwinをつかっていると、

  * カスタマイズしすぎたzshやemacsの起動が遅い 
  * screenのデタッチ後に作業を保存されない 

vmware playerならば、作業をそのまま保存してサスペンドするのでこの課題を解決できる。

さて、CygwinからVM上のCentOSにお引越ししようとおもったけれども、またCygwinに戻ってくるかもしれないと思った。なので、CentOSからCygwinのフォルダをマウントしてしまえば良いのだということに気づいた。

というわけで、CentOSからmountコマンドでCygwinをマウントする。

### CentOSでmountを使うための設定

Windowsの共有フォルダはSMBプロトコルによって除くことができる。CentOSからSambaを利用するためには、mount.cifsというコマンドを利用するらしい。というわけで、インストールする。

yum -y install samba-client 

### Windowsでmountされる設定（フォルダの共有設定）

次に、Windows側でCygwinの自分のフォルダを共有ファイルに設定する。

C:\cygwin\home\(ユーザ)

のフォルダを右クリックして、

  * プロパティ -> 共有 -> 共有 -> 共有 

を選択。これで共有が開始される。次に、

  * 詳細な共有 -> アクセス許可 

を選択して、共有を許すユーザを追加する。ログインしているユーザを追加すればよい。

次に追加したユーザにフルコントロール権限を与える。これで読み書きできる。

[<img title="skitch" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="skitch" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch_thumb.png" width="388" height="380" />][1]

### CentOSからmountコマンドを実行する

マウントするためには、rootユーザである必要がある。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:6e86e85a-5d6c-48f5-add2-77821bd838b1" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c"># mount するディレクトリ作成
mkdir -p /mnt/cygwin

# mount する。
mount -t cifs -o user=TSUNEMICHI,password=********* //192.168.1.101/TSUNEMICHI /mnt/cygwin</pre>
</div>

mount -t cifsで、内部的に mount.cifsコマンドに置き換えられる。

-oがオプション 

  * usr ・・・Windowsのユーザ名 
  * password Windowsのパスワード 
  * //(WindowsのサーバIP(ipconfigで調べる)/共有フォルダ名 
  * /mnt/cygwin ・・・ CentOS側のマウントディレクトリ 

アンマウントするには、umount /mnt/cygwinでよい。

### 終わりに

本当は、別の目的で調べていた。

Jenkinsからビルドサーバにビルドを依頼しようとおもった時に、sshを利用するのではなくて、ビルドサーバのディレクトリをCIサーバにマウントしてしまえばいいんじゃねと思った。

しかし、この方法は一人で使うにはいいけれども、ユーザ管理や運用を考えた時にはJenkinsユーザにCIサーバのディレクトリ構造まで意識させる必要がある気がしたので、やめた。

#### 参考

  * <a href="https://webware.blog.fc2.com/blog-category-12.html" target="_blank">どシロウトのWEBめも samba</a>

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch.png