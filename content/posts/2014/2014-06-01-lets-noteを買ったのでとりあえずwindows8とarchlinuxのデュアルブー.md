---
author: admin
categories:
- Linux
- 技術メモ
date: 2014-06-01T05:01:00+00:00
dsq_thread_id:
- 3.7034642e+09
excerpt: Let's NoteをWindows8とArchLinuxのデュアルブートにした作業メモ
pvc_views:
- 6545
tags:
- ArchLinux
title: Lets Noteを買ったのでとりあえずWindows8とArchLinuxのデュアルブートにしてみた
type: post
url: /archives/=2482
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/archlinux-logo-dark.png" width="500" />

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      新しいノートPCを買った。Panasonicの Let&#8217;s Note.
    </p>
    
    <p>
      いままで散々弄りまわしてきたVAIOだけれど、 最近になって裏のネジがなくなってしまった。 そのため、ディスプレイが今にも外れそうな危ない状態だ。
    </p>
    
    <p>
      VAIOには名残惜しいものの、このままだといつ壊れてもおかしくない。 そんなわけで、新しいPCを買うことになった。 本心は、再びVAIOを購入したいところだったが、VAIOがヨドバシに売っていなかった。
    </p>
    
    <p>
      ヨドバシの店頭においてある一番高い、30万に届くような高スペックのLet&#8217;s Noteを購入。
    </p>
    
    <p>
      最高スペックには最高のOSを！
    </p>
    
    <p>
      ということで、Windows8とArchLinuxとのデュアルブートにすることにした。
    </p>
    
    <p>
      以下は、インストールするまでの作業メモです。
    </p>
    
    <p>
      [toc]
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    Windows側での事前準備
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      まず、購入時にはWindows8.1がすでにインストールされている。 デュアルブート化のための準備をWindows側でする。
    </p></p>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      ArchLinux ディストリビューションを取得
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <p>
        以下から、最新版をダウンロード。日本のミラーサイトからダウンロードする。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.archlinux.org/download/">Arch Linux &#8211; Downloads</a> <ul class="org-ul">
            <li>
              archlinux-2014.05.01-dual.iso
            </li>
          </ul>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      インストール用にUSBメモリ作成
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <p>
        USBWriter for Windowsで、ダウンロードしたISOファイルをUSBメモリに焼く。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://sourceforge.net/projects/usbwriter/">USBWriter | Free software downloads at SourceForge.net</a>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-3" class="outline-3">
    <h3 id="sec-2-3">
      高速スタートアップ解除
    </h3>
    
    <div class="outline-text-3" id="text-2-3">
      <p>
        手順にしたがって、高速スタートアップを無効にする。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.eightforums.com/tutorials/6320-fast-startup-turn-off-windows-8-a.html">Fast Startup &#8211; Turn On or Off in Windows 8</a>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-4" class="outline-3">
    <h3 id="sec-2-4">
      パーティションを切る
    </h3>
    
    <div class="outline-text-3" id="text-2-4">
      <p>
        コントロールパネル→管理ツール→コンピュータの管理→記憶域→ディスクの管理を機動起動。
      </p>
      
      <p>
        購入時、ドライブ構成はこんな感じ。
      </p>
      
      <ul class="org-ul">
        <li>
          合計 240GB <ul class="org-ul">
            <li>
              回復パーティション 800MB
            </li>
            <li>
              EFIシステムパーティション 260MB
            </li>
            <li>
              Cドライブ 221GB
            </li>
            <li>
              回復パーティション 15GB
            </li>
          </ul>
        </li>
      </ul>
      
      <p>
        CドライブからArchLinux用のパーティションを切り出す。 150GB/70GBの 2対1くらいの比率にしておくか。適当だけど。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-5" class="outline-3">
    <h3 id="sec-2-5">
      リカバリディスク作成
    </h3>
    
    <div class="outline-text-3" id="text-2-5">
      <p>
        いざというときのために、リカバリディスクを作成。 これはノートPCの説明書にしたがった。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-6" class="outline-3">
    <h3 id="sec-2-6">
      FAQを読む/ArchWayを読む
    </h3>
    
    <div class="outline-text-3" id="text-2-6">
      <p>
        FAQとArch Wayを読んで、インストールして後悔しないか再度確認。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://wiki.archlinux.org/index.php/FAQ_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">FAQ (日本語) &#8211; ArchWiki</a>
        </li>
        <li>
          <a href="https://wiki.archlinux.org/index.php/The_Arch_Way_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">The Arch Way (日本語) &#8211; ArchWiki</a>
        </li>
      </ul>
    </div>
    
    <div id="outline-container-sec-2-6-1" class="outline-4">
      <h4 id="sec-2-6-1">
        KISS
      </h4>
      
      <div class="outline-text-4" id="text-2-6-1">
        <p>
          Keep It Simple, Stupid.
        </p>
        
        <p>
          シンプルにしとけよ、このバカチンが
        </p></p>
      </div></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    ArchLinuxのインストール
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      基本的には以下のページにしたがう。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://wiki.archlinux.org/index.php/Beginners'_Guide_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">Beginners&#8217; Guide (日本語) &#8211; ArchWiki</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-3-1" class="outline-3">
    <h3 id="sec-3-1">
      USBメモリから起動
    </h3>
    
    <div class="outline-text-3" id="text-3-1">
      <p>
        F2からBIOSの設定を変更して、USBメモリから起動する。
      </p>
      
      <p>
        いきなりエラーしてワクワクするＯ(〃⌒▼⌒〃)Ｏ
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">failed to start loader
</pre></p>
      </div>
      
      <ul class="org-ul">
        <li>
          <a href="https://teksyndicate.com/forum/linux/loaderefi-error-arch-linux/168495">Loader.efi error Arch Linux | Tek Syndicate</a>
        </li>
      </ul>
      
      <p>
        Secure Bootが怪しいということで、以下のガイダンスにしたがう。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://wiki.archlinux.org/index.php/Unified_Extensible_Firmware_Interface#Secure_Boot">Unified Extensible Firmware Interface &#8211; ArchWiki</a>
        </li>
      </ul>
      
      <p>
        rootでログイン成功。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-3-2" class="outline-3">
    <h3 id="sec-3-2">
      言語の選択
    </h3>
    
    <div class="outline-text-3" id="text-3-2">
      <p>
        キーマップで日本語を設定。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">loadkeys jp106
</pre></p>
      </div>
      
      <p>
        文字コードも設定。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">nano /etc/locale.gen
ja_JP.UTF-8 UTF-8

locale-gen
<span style="color: #a6e22e;">export</span> <span style="color: #fd971f;">LANG</span>=ja_JP.UTF-8
</pre></p>
      </div></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-3-3" class="outline-3">
    <h3 id="sec-3-3">
      無線の設定
    </h3>
    
    <div class="outline-text-3" id="text-3-3">
      <p>
        pingしてダメなことを確認する。unknown hostと出てきた。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">ping -c 3 www.google.com
</pre></p>
      </div>
      
      <div class="org-src-container">
        <pre class="src src-sh">iw dev

phy#0
        Interface wlp2s0

ip link set wlp2s0 up
</pre></p>
      </div>
      
      <p>
        エラーした。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">RTNELINK answerss: Operation not possible do to RF-kill
</pre></p>
      </div>
      
      <p>
        wifiの物理スイッチがOffになってただけだった。スイッチオンしたら成功。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">wifi-menu wlp2s0
</pre></p>
      </div>
      
      <p>
        wifi-menuではdhcp設定がうまくいかない。手動設定でうまくいった。pingも通る。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">wpa_supplicant -B -i wlp2s0 -c &lt;(wpa_passphrase <span style="color: #e6db74;">"ssid"</span> <span style="color: #e6db74;">"psk"</span>)
dhcpcd wlp2s0
</pre></p>
      </div></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-3-4" class="outline-3">
    <h3 id="sec-3-4">
      パーティションを切る
    </h3>
    
    <div class="outline-text-3" id="text-3-4">
      <p>
        以下を参考にパーティションを考える。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://wiki.archlinux.org/index.php/Partitioning_(%E6%97%A5%E6%9C%AC%E8%AA%9E)#GPT_.E3.81.8B_MBR_.E3.81.AE.E9.81.B8.E6.8A.9E">Partitioning (日本語) &#8211; ArchWiki</a>
        </li>
      </ul>
      
      <p>
        こんな感じ。swap領域はwikiを信じて作成しない。 rootとhomeを分けておくと rm -rfしたときにデータ復旧できる。
      </p>
      
      <ul class="org-ul">
        <li>
          / 20GB
        </li>
        <li>
          /home 130GB
        </li>
      </ul>
      
      <p>
        /bootは、EFI system partitionがあるのでそれをつかう。 (この用語についてはあとでまたでてくる)
      </p></p>
    </div>
    
    <div id="outline-container-sec-3-4-1" class="outline-4">
      <h4 id="sec-3-4-1">
        gdisk
      </h4>
      
      <div class="outline-text-4" id="text-3-4-1">
        <p>
          パーティションツールは、SSDを長持ちさせるために、GPTに対応したgdiskを利用する。
        </p>
        
        <p>
          (以前つかったことがある GPartedを試みたものの、GPTの設定方法がわからなかった。 どうも一旦すべてのパーティションを削除しないとgptは設定できないようだった)
        </p>
        
        <div class="org-src-container">
          <pre class="src src-sh">gdisk /dev/sda
</pre></p>
        </div>
        
        <p>
          nコマンドでパーティション追加。
        </p>
        
        <ul class="org-ul">
          <li>
            Parttition number は defaultなので Enter
          </li>
          <li>
            First sector は defaultなので Enter
          </li>
          <li>
            Last sector は +20G/Enter
          </li>
          <li>
            GUIDは は defaultなので Enter
          </li>
        </ul>
        
        <p>
          最後にwでディスクに書き込む。
        </p></p>
      </div></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-3-5" class="outline-3">
    <h3 id="sec-3-5">
      ファイルシステムの作成
    </h3>
    
    <div class="outline-text-3" id="text-3-5">
      <p>
        ext4でパーティションをフォーマットする。
      </p>
      
      <p>
        まずは、lsblkで device nameを確認
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">lsblk
</pre></p>
      </div>
      
      <p>
        容量と見比べて、今回は以下が対象。
      </p>
      
      <ul class="org-ul">
        <li>
          sda7 20G Root用
        </li>
        <li>
          sda8 126G home用
        </li>
      </ul>
      
      <div class="org-src-container">
        <pre class="src src-sh">mkfs.ext4 /dev/sda7
mkfs.ext4 /dev/sda8
</pre></p>
      </div>
      
      <p>
        lsblk -fでFSTYPEがext4であることを確認。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-3-6" class="outline-3">
    <h3 id="sec-3-6">
      パーティションのマウント
    </h3>
    
    <div class="outline-text-3" id="text-3-6">
      <p>
        パーティションをマウントする。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">mount /dev/sda7 /mnt

mkdir /mnt/home
mount /dev/sda8 /mnt/home
</pre></p>
      </div>
      
      <p>
        EFI system partitionを /boot/efiにマウントする。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">mkdir -p /mnt/boot/efi
mount /dev/sda2 /mnt/boot/efi
</pre></p>
      </div></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-3-7" class="outline-3">
    <h3 id="sec-3-7">
      ミラーの選択
    </h3>
    
    <div class="outline-text-3" id="text-3-7">
      <p>
        とりあえず、jaistとtukubaを最優先に設定。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-3-8" class="outline-3">
    <h3 id="sec-3-8">
      ベースシステムのインストール
    </h3>
    
    <div class="outline-text-3" id="text-3-8">
      <p>
        ついにインストール。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">pacstrap -i /mnt base base-devel
</pre></p>
      </div></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-3-9" class="outline-3">
    <h3 id="sec-3-9">
      fstabの生成
    </h3>
    
    <div class="outline-text-3" id="text-3-9">
      <div class="org-src-container">
        <pre class="src src-sh">genfstab -U -p /mnt &gt;&gt; /mnt/etc/fstab
</pre></p>
      </div></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    Chroot とベースシステムの設定
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <div class="org-src-container">
      <pre class="src src-sh">arch-chroot /mnt /bin/bash
</pre></p>
    </div>
    
    <p>
      ごちゃごちゃしているのでメモは省略。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-5" class="outline-2">
  <h2 id="sec-5">
    ブートローダ設定
  </h2>
  
  <div class="outline-text-2" id="text-5">
    <p>
      ブートローダは使ったことがあるGRUBにする。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://wiki.archlinux.org/index.php/GRUB_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">GRUB (日本語) &#8211; ArchWiki</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-5-1" class="outline-3">
    <h3 id="sec-5-1">
      べんきょ
    </h3>
    
    <div class="outline-text-3" id="text-5-1">
      <p>
        まずは、用語がわからないので、wikiをざっとながめる。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://wiki.archlinux.org/index.php/Unified_Extensible_Firmware_Interface_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">Unified Extensible Firmware Interface (日本語) &#8211; ArchWiki</a>
        </li>
        <li>
          <a href="https://wiki.archlinux.org/index.php/GUID_Partition_Table_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">GUID Partition Table (日本語) &#8211; ArchWiki</a>
        </li>
        <li>
          <a href="https://wiki.archlinux.org/index.php/UEFI_Bootloaders_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">Boot Loaders (日本語) &#8211; ArchWiki</a>
        </li>
      </ul>
      
      <p>
        つぎに自分のシステムがUEFIとGPTに対応しているか調べる。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">parted /dev/sda print
</pre></p>
      </div>
      
      <p>
        冒頭にPartition Table:gpt, リストの2番目に EFI system partitionとかいてある。 どうやらGPTとESPがあるもよう。さすが、最新式。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-5-2" class="outline-3">
    <h3 id="sec-5-2">
      GRUBインストール
    </h3>
    
    <div class="outline-text-3" id="text-5-2">
      <p>
        Arch WikiのUEFIシステムのインストール手順にしたがう。ツールを入れる。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">pacman -S grub efibootmgr dosfstools
</pre></p>
      </div>
      
      <p>
        以下のコマンドでインストール
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=grub --recheck --debug
</pre></p>
      </div></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-5-3" class="outline-3">
    <h3 id="sec-5-3">
      デュアルブート対応
    </h3>
    
    <div class="outline-text-3" id="text-5-3">
      <p>
        これもwikiにしたがう。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">pacman -S os-prober
grub-mkconfig -o /boot/grub/grub.cfg
</pre></p>
      </div>
      
      <p>
        grub-mkconfigがエラーする。 os-proberを単体で実行しても同じエラーメッセージがでる。 os-proberを削除するとエラーがでない。どうもこれが悪いみたい。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://unix.stackexchange.com/questions/105389/arch-grub-asking-for-run-lvm-lvmetad-socket-on-a-non-lvm-disk">partition &#8211; Arch GRUB asking for /run/lvm/lvmetad.socket on a non lvm disk &#8211; Unix & Linux Stack Exchange</a>
        </li>
      </ul>
      
      <p>
        manualで grub menuを設定する。/etc/grub.d/40_customを編集。 以下を書くことで、grubのmenuにwindowsを表示できる。ArchLinuxはかってに表示される。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">#!/bin/sh

exec tail -n +3 $0
# This file provides an easy way to add custom menu entries.  Simply type the
# menu entries you want to add after this comment.  Be careful not to change
# the 'exec tail' line above.

if [ "${grub_platform}" == "efi" ]; then
  menuentry "Microsoft Windows 8.1 x86_64 UEFI-GPT" {
    echo "Loading Microsoft Windows 8.1..."
    insmod part_gpt
    insmod fat
    insmod search_fs_uuid
    insmod chain
    search --fs-uuid --set=root $hints_string $uuid
    chainloader /EFI/Microsoft/Boot/bootmgfw.efi
  }
fi

menuentry "System shutdown" {
	echo "System shutting down..."
	halt
}

menuentry "System restart" {
	echo "System rebooting..."
	reboot
}
</pre></p>
      </div>
      
      <div class="org-src-container">
        <pre class="src src-sh"><span style="color: #a9a9a9;"># </span><span style="color: #a9a9a9;">uuid</span>
grub-probe --target=fs_uuid /boot/efi/EFI/Microsoft/Boot/bootmgfw.efi
1231-C3B2
<span style="color: #a9a9a9;"># </span><span style="color: #a9a9a9;">hints_string</span>
grub-probe --target=hints_string /boot/efi/EFI/Microsoft/Boot/bootmgfw.efi
--hint-bios=hd0,gpt2 --hint-efi=hd0,gpt2 --hint-baremetal=ahci0,gpt2
</pre></p>
      </div>
      
      <p>
        /boot/grub/grub.cfgに反映させる。このコマンドでgrub.cfgに追記される。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-sh">grub-mkconfig -o /boot//grub/grub.cfg
</pre></p>
      </div>
      
      <p>
        ここまで完了したら、reboot!
      </p>
      
      <p>
        再起動してgrubメニューにArchLinuxとWindowsが表示されていることを確認。今日はつかれたので、ここまで。
      </p></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-6" class="outline-2">
  <h2 id="sec-6">
    参考にしたページのBookMarks
  </h2>
  
  <div class="outline-text-2" id="text-6">
  </div>
  
  <div id="outline-container-sec-6-1" class="outline-3">
    <h3 id="sec-6-1">
      ArchLinuxとは
    </h3>
    
    <div class="outline-text-3" id="text-6-1">
      <ul class="org-ul">
        <li>
          <a href="https://dic.nicovideo.jp/a/arch%20linux">Arch Linuxとは (アーチリナックスとは ) &#8211; ニコニコ大百科</a>
        </li>
        <li>
          <a href="https://divide-et-impera.org/archives/1388">Ubuntuに飽きた俺達の楽園はArch Linuxにあった | Divide et impera</a>
        </li>
        <li>
          <a href="https://zaka-think.com/linux/archlinux/archlinux%E3%82%92%E3%82%84%E3%82%81%E3%81%9F%E7%90%86%E7%94%B1/">Archlinuxをやめた理由 | ざかしんく</a>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-6-2" class="outline-3">
    <h3 id="sec-6-2">
      インストール
    </h3>
    
    <div class="outline-text-3" id="text-6-2">
      <ul class="org-ul">
        <li>
          <a href="https://wiki.archlinux.org/index.php/Installation_Guide_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">Installation Guide (日本語) &#8211; ArchWiki</a>
        </li>
        <li>
          <a href="https://wiki.archlinux.org/index.php/Beginners'_Guide_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">Beginners&#8217; Guide (日本語) &#8211; ArchWiki</a>
        </li>
      </ul>
    </div>
    
    <div id="outline-container-sec-6-2-1" class="outline-4">
      <h4 id="sec-6-2-1">
        Arch Linux のリリースを USB ドライブに書き込む方法
      </h4>
      
      <div class="outline-text-4" id="text-6-2-1">
        <ul class="org-ul">
          <li>
            <a href="https://wiki.archlinux.org/index.php/USB_Installation_Media_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">USB Installation Media (日本語) &#8211; ArchWiki</a>
          </li>
          <li>
            <a href="https://wiki.archlinux.org/index.php/Installing_Arch_Linux_on_a_USB_key">Installing Arch Linux on a USB key &#8211; ArchWiki</a>
          </li>
        </ul>
      </div></p>
    </div>
    
    <div id="outline-container-sec-6-2-2" class="outline-4">
      <h4 id="sec-6-2-2">
        パーティションの切り方
      </h4>
      
      <div class="outline-text-4" id="text-6-2-2">
        <ul class="org-ul">
          <li>
            <a href="https://wiki.archlinux.org/index.php/Partitioning_(%E6%97%A5%E6%9C%AC%E8%AA%9E)#GPT_.E3.81.8B_MBR_.E3.81.AE.E9.81.B8.E6.8A.9E">Partitioning (日本語) &#8211; ArchWiki</a>
          </li>
          <li>
            <a href="https://blog.volment.com/archives/=47">実は簡単Arch Linuxのインストール手順！ | volment</a>
          </li>
          <li>
            <a href="https://qiita.com/syui/items/1ffec0f12c253cda122b">awesome &#8211; ArchLinuxのGUI環境設を整える vol.1 &#8211; Qiita</a>
          </li>
        </ul>
      </div></p>
    </div>
    
    <div id="outline-container-sec-6-2-3" class="outline-4">
      <h4 id="sec-6-2-3">
        デュアルブート関係
      </h4>
      
      <div class="outline-text-4" id="text-6-2-3">
        <ul class="org-ul">
          <li>
            <a href="https://wiki.archlinux.org/index.php/Windows_and_Arch_Dual_Boot_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">Windows and Arch Dual Boot (日本語) &#8211; ArchWiki</a>
          </li>
          <li>
            <a href="https://wiki.archlinux.org/index.php/GRUB_(%E6%97%A5%E6%9C%AC%E8%AA%9E)#UEFI-GPT_.E3.83.A2.E3.83.BC.E3.83.89.E3.81.A7.E3.82.A4.E3.83.B3.E3.82.B9.E3.83.88.E3.83.BC.E3.83.AB.E3.81.95.E3.82.8C.E3.81.9F_Windows_.E3.81.AE.E3.83.A1.E3.83.8B.E3.83.A5.E3.83.BC.E3.82.A8.E3.83.B3.E3.83.88.E3.83.AA">GRUB (日本語) &#8211; ArchWiki</a>
          </li>
          <li>
            <a href="https://d.hatena.ne.jp/godai_0519/20140128/1390919028">ThinkPad X240をArch Linuxとのデュアルブートにするメモ &#8211; 堕(惰)プログラマ開発記録</a>
          </li>
          <li>
            <a href="https://spica.pw/blog/archives/=157">x240にArchとWindows8.1を共存させる | In the Spica</a>
          </li>
        </ul>
      </div></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-6-3" class="outline-3">
    <h3 id="sec-6-3">
      その他
    </h3>
    
    <div class="outline-text-3" id="text-6-3">
      <ul class="org-ul">
        <li>
          <a href="https://qiita.com/tags/archlinux">archLinuxに関する32件の投稿 &#8211; Qiita</a>
        </li>
        <li>
          <a href="https://qiita.com/xorphitus/items/3711895eb5d9f946c782">Arch Linux快適デスクトップ環境の構築 &#8211; Qiita</a>
        </li>
        <li>
          <a href="https://futurismo.biz/archives/2064">Windowsと Mint Linuxのデュアルブート環境をVAIOに構築した手順メモ | Futurismo</a>
        </li>
      </ul>
    </div></p>
  </div></p>
</div>