---
author: admin
categories:
- Linux
- 技術メモ
date: 2013-07-14T10:02:44+00:00
dsq_thread_id:
- 3.7280136e+09
excerpt: Windows上のCentOSをVmwarePlayerからVirtualBoxへ移行した作業メモです
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 4551
tags:
- CentOS
- VirtualBox
- VMware
title: Windows上のCentOSをVmwarePlayerからVirtualBoxへ移行しました
type: post
url: /archives/=1643
---

以前、一生懸命頑張ってVmwarePlayerをインストールしましたが、Vargrantを使ってみたくてVartualBoxに移行することに決めました。今回も、フルパワーで頑張りました。

<a href="https://futurismo.biz/archives/777" target="_blank">WindowsでVMware Player上のUbuntuを動かしてみたメモ | Futurismo</a>

</br>

![][1]

#### 環境

  * ホストOS: Windows 7 64bit
  * ゲストOS: CentOS 6.4
  * 移行元: VirtualBox 4.2
  * 移行先: VMware Player 5.0.1

### VirtualBoxのインストール

なにはともあれ、VirtualBoxをインストールします。以下からダウンロードします。OSよってダウンロードするバイナリが異なります。自分はWindowsを選択。

  * <a href="https://www.virtualbox.org/wiki/Downloads" target="_blank">Downloads – Oracle VM VirtualBox</a> 
      * VirtualBox platform packages 
          * VirtualBox 4.2.16 for Windows hosts x86/amd64
          * VirtualBox-4.2.16-86992-Win.exe

VirtualBoxはVmwarePlayerに比べると心なしか、UIがカッコ悪い気がします。

</br>
  
![][2]

### VirtualBoxの設定

#### 仮想マシンの作成

『新規』を選択して、新規仮想マシンを作成。

  * バージョンを選択するところにCentOSの文字はない。Red Hatを選択します。
  * メモリ容量は適当に。ここでは1024MB
  * ハードドライブを追加しないにチェックを入れます。

![][3]

仮想マシン完成！

#### 仮想マシンの設定

次に，仮想マシンの設定をします。

ツールバーの『設定』 -> ストレージ -> コントローラ SATA -> 追加

を選択。ここで、vmwara playerの仮想ディスク(.vmdk)を追加します。

</br>

![][4]

起動を選択！
  
</br>

![][5]

簡単に立ち上がりました！と思ったら、マウス操作が効かなくなる。。

これは、2つあるCtrlキーのうちの右のほうを押すことで、マウスが復活する。Vmwareだと、Ctrl + Altだったので、これに変更する。変更は、ツールバー -> 詳細設定 -> 入力から可能だ。

#### 文字化け対策

色々とコマンドを実行しようとしても ■　■　■　■　と表示されて、うまく表示できない。以下で解決。えっ、Shift-jis??

    export LANG=ja_JP.shift-jis
    

#### 外部ネットワーク設定

まず、ネットワークが繋がらない。ネットワークをstopさせて再スタートさせると、以下のメッセージ。

    /etc/init.d/network start
    device eth0 does not seem to be present delaying initialization
    

古い移行前のvmware　playerでの設定が残っているようだ。

このサイトの通りに設定しなおしたらネットワークにつなぐことができた。

  * <a href="https://www.linuxmaster.jp/linux_blog/2011/09/vmwaredevice-eth0-does-not-seem-to-be-present-delaying-initialization.html" target="_blank">VMwareで「Device eth0 does not seem to be present, delaying initialization」と表示された時の対処法　その２｜リナックスマスター.JP 公式ブログ</a>

#### ホストオンリーアダプタの設定

上記ネットワーク設定だと、外部のネットワークにはアクセスできたが、ホストOSからゲストOSにtelnetすることができなかった。

ホストOSとゲストOSの接続をするためには、ホストオンリーアダプタの設定が別途必要。

以下のサイトを参考に設定。

<a href="https://blog.kjirou.net/p/2171" target="_blank">VIrtualBoxで仮想ネットワークを構築 | それなりブログ</a>

eth1用にネットワーク起動スクリプトを作ったのがミソだった。

    touch /etc/sysconfig/network-scripts/ifcfg-eth1
    emacs /etc/sysconfig/network-scripts/ifcfg-eth1
    ========================
    DEVICE=eth1
    BOOTPROTO=static
    BROADCAST=192.168.56.255
    HWADDR=XX:XX:XX:XX:XX:XX
    IPADDR=192.168.56.101
    NETMASK=255.255.255.0
    NETWORK=192.168.56.0
    ONBOOT=yes
    ========================
    

このやりかただと、また

    device eth1 does not seem to be present delaying initialization
    

が出てきたので、再度eth0と同じ手順で設定し直した。

### 最後に

ふう、大変だった。

もう、VMWare Playerにはもどれないだろうな・・。

 [1]: https://lh3.ggpht.com/-Isx6-_tM43U/UeI4_UfzcbI/AAAAAAAAAng/KbW6VuBk0q0/SnapCrab_NoName_2013-7-14_14-36-53_No-00.jpg
 [2]: https://lh3.ggpht.com/-I-49-KMtBfY/UeI8Q_UxomI/AAAAAAAAAnw/2nDfJ_hKN64/SnapCrab_NoName_2013-7-14_14-50-49_No-00.jpg
 [3]: https://lh4.ggpht.com/-ZCwIJ0JVBzk/UeJAAEdBD_I/AAAAAAAAAoA/nobyrcx7VdA/SnapCrab_NoName_2013-7-14_15-5-36_No-00.jpg
 [4]: https://lh5.ggpht.com/-8WGgVUqbW-g/UeJCaSepdnI/AAAAAAAAAoY/sdRNWxikHC4/vmdk_add.jpg
 [5]: https://lh6.ggpht.com/-tERlmHWy7vY/UeJFpgpdeHI/AAAAAAAAAoo/aVFjPbsqh8k/SnapCrab_Saru%252520%252520-%252520Oracle%252520VM%252520VirtualBox_2013-7-14_15-22-37_No-00.jpg