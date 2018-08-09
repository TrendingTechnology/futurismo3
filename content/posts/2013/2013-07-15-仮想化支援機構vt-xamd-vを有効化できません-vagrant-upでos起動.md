---
author: admin
categories:
- 技術メモ
date: 2013-07-14T21:39:11+00:00
dsq_thread_id:
- 3.7019156e+09
excerpt: 仮想化支援機構(VT-x/AMD-V)を有効化できませんと表示された場合の対処方法です
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 25267
tags:
- virtu
title: 仮想化支援機構(VT-x/AMD-V)を有効化できません Vagrant upでOS起動失敗した
type: post
url: /archives/=1647
---

Vagrant upで起動しないので調査してみたメモです。

vagrant upを実行しても、以下のようなところで止まってしまいます。

    % vagrant up
    Bringing machine 'default' up with 'virtualbox' provider...
    [default] Setting the name of the VM...
    [default] Clearing any previously set forwarded ports...
    [default] Creating shared folders metadata...
    [default] Clearing any previously set network interfaces...
    [default] Preparing network interfaces based on configuration...
    [default] Forwarding ports...
    [default] -- 22 => 2222 (adapter 1)
    [default] Booting VM...
    [default] Waiting for VM to boot. This can take a few minutes.
    

#### 環境

  * ホストOS: Windows 7 64bit
  * ゲストOS: CentOS 6.4 64biy
  * VirtualBox 1.2
  * BIOS: InsydeH20

### GUIモードで起動してみる

調査のために、GUI画面を立ちあげてみます。Vagrantfileを編集します。

       config.vm.provider :virtualbox do |vb|
         # Don't boot with headless mode
         vb.gui = true
      #   # Use VBoxManage to customize the VM. For example to change memory:
      #   vb.customize ["modifyvm", :id, "--memory", "1024"]
       end
    

これで、再度 vagrant upを実行すると、GUI画面もいっしょに立ち上がります。

以下のようなエラーメッセージ。

> 仮想化支援機構(VT-x/AMD-V)を有効化できません。64ビットゲストOSは64ビットCPUを検出できず、起動できません。
    
> ホストマシンのBIOS設定でVT-x/AMD-V を有効化してください。

![][1]

</br>

[<img src="https://lh4.googleusercontent.com/-zamBHeLFly0/UeKrZusngWI/AAAAAAAAAps/lSnVqwDEBAo/s400/SnapCrab_centos_1373809247%2520%255B%25E5%25AE%259F%25E8%25A1%258C%25E4%25B8%25AD%255D%2520-%2520Oracle%2520VM%2520VirtualBox_2013-7-14_22-44-59_No-00.png" height="271" width="400" />][2]

真っ黒な画面のまま止まっていた。

どうりで、これでは立ち上がるわけないよな・・・(´･ω･｀)

### VT-x/AMD-Vを有効化

これは、BIOSで仮想環境のための設定がされていないことが原因。64bitOSをゲストOSにする場合はCPUがVT-xに対応している必要がある。

以下の設定が必要となる。

  1. BIOS画面に入る。（PC起動時に、Fを押す）
  2. Intel(R) Virtualization Technology: Enabled

![][3]

BIOSの種類によって、設定項目は異なりますが、どこかにあります。CPUがVT-xをサポードしてないときは、諦めも必要。

設定が終わっラPCを再起動。無事にログインできました。vagrantのboxファイルから起動した場合は、user:vagrant、password:vagrantでログインできます。

#### 参考

  * <a href="https://d.hatena.ne.jp/yohei-a/20110124/1295887695" target="_blank">仮想化支援機能(VT-x/AMD-V)を有効化できません &#8211; ablog</a>
  * <a href="https://shibayu36.hatenablog.com/entry/2013/03/17/175405" target="_blank">vagrant upの実行が終わらない話 &#8211; $shibayu36->blog;</a>

 [1]: https://lh4.ggpht.com/-CTNCW3tgK7g/UeMPiEOoy5I/AAAAAAAAAqM/TRIQ71ByBNs/SnapCrab_VirtualBox%252520-%252520%2525E3%252582%2525A8%2525E3%252583%2525A9%2525E3%252583%2525BC_2013-7-14_22-52-4_No-00.jpg
 [2]: https://picasaweb.google.com/lh/photo/gY2l6PnOtYSXgRFirauHbjyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [3]: https://lh6.ggpht.com/--_dWdh0TkmY/UeMWqFa6UWI/AAAAAAAAAqs/sG3i-18UktM/vt-x_enable.jpg