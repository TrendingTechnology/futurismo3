---
author: admin
categories:
- Linux
- 技術メモ
date: 2012-11-24T05:56:19+00:00
dsq_thread_id:
- 3.6989225e+09
pvc_views:
- 5418
tags:
- VMware
title: WindowsでVMware Player上のUbuntuを動かしてみたメモ
type: post
url: /archives/=777
---

Windows 7 64bit環境で、VMwareからUbuntus(ウブンツ)を立ちあげてみたので、   
どんな感じかメモしとく。

#### Hello Ubuntu

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb59.png" width="379" height="310" />][1]

#### インストール環境 

  * Windows 7 64bit (ホストOS)
  * Intel Core i5 
  * メモリ 4GB 

#### インストールするもの

  * VMware Player 5.0.1
  * Ubuntu 12.10 (ゲストOS)

### VMware Playerインストール手順

VMware Playerを使うと、1台のPCで複数OSを実行できる。   
つまり、Windows を実行しつつ、Linuxが使える。しかも、無料。

VMware Player for Windows 32-bit and 64-bitをダウンロードする。&#160;   
<https://www.vmware.com/go/get-player-jp>

あとは、ダウンロードした実行ファイルを使ってインストール。   
(VMware-player-5.0.1-894247.exe)ここまでは、簡単。

[<img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image_thumb4" border="0" alt="image_thumb4" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb4_thumb.png" width="380" height="346" />][2]

### ubuntuのインストール手順

次は、Linux OSである、Ubuntuを入れる。

#### Ubuntuのダウンロード

VMware PlayerでLinux OSを実行するには、ISOイメージファイルが必要となる。   
Ubuntsuの日本コミュニティのページからダウンロードできる。[https://www.ubuntulinux.jp/][3]

[Ubuntu Desktop 日本語 Remix CDのダウンロード]を選択し、最新版を落とす。   
(ubuntu-ja-12.10-desktop-i386.iso)

#### Ubuntuのインストール

VMware Playerを起動して、[新規仮想マシンの作成]を選択。   
[あとでOSをインストール]を選択。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb60.png" width="344" height="294" />][4]

Linuxを選択。   
つづいて、Ubuntu選択。（ISOが32bitなので、32bitを選択）

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb61.png" width="339" height="290" />][5]

仮想マシンの設定で[CD/DVD]を選択。   
デバイスのステータスは[起動時に接続]を選択する。   
[接続]では、さっき落としたISOイメージファイルを選ぶ。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb62.png" width="355" height="295" />][6]

OKを押すと、Ubuntuが起動する。   
VMware Toolのインストールを聞いてきたりするが、後回しで。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb63.png" width="361" height="266" />][7]

Ubuntuのインストールを選択。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb64.png" width="359" height="301" />][8]

特に、チェックをいれずに次へ。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb65.png" width="367" height="305" />][9]

ディスクを削除してUbuntuをインストールを選択。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb66.png" width="368" height="306" />][10]

インストールが終わったら[再起動]。   
再起動後にUbuntuにご対面&#160; ＼(^0^)

[<img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb67.png" width="379" height="310" />][11]

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image59.png
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb410.png
 [3]: https://www.ubuntulinux.jp/ "https://www.ubuntulinux.jp/"
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image60.png
 [5]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image61.png
 [6]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image62.png
 [7]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image63.png
 [8]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image64.png
 [9]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image65.png
 [10]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image66.png
 [11]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image67.png