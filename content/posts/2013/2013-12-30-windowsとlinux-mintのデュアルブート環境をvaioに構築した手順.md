---
author: admin
categories:
- Linux
date: 2013-12-30T13:12:29+00:00
dsq_thread_id:
- 3.728372e+09
excerpt: SonyのVAIOに Windowsと Linuxのデュアルブート環境を構築した手順メモです
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
- 12733
side:
- "y"
title: WindowsとLinux Mintのデュアルブート環境をVAIOに構築した手順メモ
title_view:
- "y"
type: post
url: /archives/=2064
---

<!--:ja-->

Linux Mintをインストールしてみました。

SonyのVAIOに Windowsと Linuxのデュアルブート環境を構築した手順メモです。

[<img src="https://lh4.googleusercontent.com/-WwKryqsJRbA/Ur_VLCSgqpI/AAAAAAAAA5c/6z6x7DqoddQ/s800/SnapCrab_NoName_2013-12-29_16-50-47_No-00.jpg" width="362" height="140" />][1]

  * [ホームページ | Linux Mint Japan][2]

### 背景

プログラマならば当然Linuxを使いこなさなければという危機感があったので、普段利用しているパソコン環境をLinuxにしたいと常々思ってました。年末年始のお休みを利用して、トライしてみました。

仮想化環境ならばいままで何度か挑戦してきたのだけれども、動作が重いので普段利用するには使えないと思った。

  * [WindowsでVMware Player上のUbuntuを動かしてみたメモ | Futurismo][3]
  * [Windows上のCentOSをVmwarePlayerからVirtualBoxへ移行した手順 | Futurismo][4]

### ディストリピューション選び

2013年でもっとも人気のあるディストリビューションを調べてみました。このサイトの右下に世界ランキングがある。

  * [DistroWatch.com: Put the fun back into computing. Use Linux, BSD.][5]

これによると、&#8221;Mint&#8221;というきいたことがないディストリビューションが、ぶっちぎりで上位を占めていることが分かる。というわけで、Mintをインストールしようと決意しました。

[<img src="https://lh5.googleusercontent.com/-EGtR4otqQVU/Ur_W14yG81I/AAAAAAAAA50/fDTlZgAt3HY/s800/SnapCrab_NoName_2013-12-29_17-1-3_No-00.jpg" width="239" height="217" />][6]

mint4winというツールを利用すると、Windows内部にMintをインストールすることが可能らしいが、Mint 16ではサポートされないとのこと。mint4winの先行きも不安なため、この方法はつかわずにデュアルブートに。

#### 環境

  * Windows 7 64bit
  * Linux Mint 16 64bit cinnamon

### Windowsでの作業

ここからは、Linux Mint Japanのユーザーズガイドの手順にそってインストールしてみます。

  * [ユーザーズガイド &#8211; Linux Mint Japan Wiki][7]

また、以下のサイトも参考にしました。

  * [Guide To Install Linux Mint 16 In Dual Boot With Windows][8]
  * [Windows7とUbuntu10.04.1 LTSのデュアルブート | Web開発者の日常][9]

#### 空き容量の確保

インストールに必要な容量は、7.7Gほど。現在の自分のの総容量は100GB、空き容量は10GB&#8230;今回は色々と頑張って30GBほど空き容量を増やした。過去記事も参考。

  * [ボクの相棒ノートPC『VAIO』の容量を増やすために実施したことのメモ（Windows,SSD) | Futurismo][10]

#### Mintインストールようにパーティション作成

Mintをインストールするために、Windows側でパーティションを区切ります。

コントロールパネル→管理ツール→コンピュータの管理→記憶域→ディスクの管理を機動。

[<img src="https://lh6.googleusercontent.com/-WW3nH0n9swk/UsFvAniKp-I/AAAAAAAAA7Q/3OoobpB3oPI/s400/SnapCrab_%25E3%2583%2587%25E3%2582%25A3%25E3%2582%25B9%25E3%2582%25AF%25E3%2581%25AE%25E7%25AE%25A1%25E7%2590%2586_2013-12-29_12-11-50_No-00.png" width="400" height="244" />][11]

Cドライブを選択してボリュームの縮小を実行するが・・・・ほとんど縮小できなかった。なので、フリーソフトを利用して強引に圧縮した。

このソフトを利用した。

[MiniTool Partition Wizard &#8211; 窓の杜ライブラリ][12]

結果、こうなった。

[<img src="https://lh5.googleusercontent.com/-3WN-Wo-AzBw/UsFvBH-rvCI/AAAAAAAAA7Y/pZEpVO6IGFw/s400/SnapCrab_%25E3%2583%2587%25E3%2582%25A3%25E3%2582%25B9%25E3%2582%25AF%25E3%2581%25AE%25E7%25AE%25A1%25E7%2590%2586_2013-12-29_13-21-20_No-00.png" width="400" height="289" />][13]

なんとか、25GBを削り取ることができました。ここにLinuxをインストールします。

#### Mintディストリビューションを取得

世界中にミラーサイトがありますが、日本のミラーサイトからダウンロードするのが早いため、JAISTからMintディストリビューションをダウンロードします。

ディストリビューションにはいろいろと種類があります。

  * 32bit/64bit
  * cinammon/ mate &#8230; cinnamonは高性能/Mateは省エネ
  * codecs/noncodecs &#8230; メディア関係のアプリを含むか否か。

日本では著作権の関係でNonCodecsを利用したほうがよいみたいです。ということで、自分は 64bit,cinnamon,nocodecsを選択。

以下からダウンロード。

  * [JAIST][14]

#### インストール用にUSBメモリ作成

ディストリビューションは、CD/DVDに焼いてインストールするか、USBメモリに焼いてインストールする方法があります。Mintのアップデートがクリーンインストールを推奨されているので、これからも何度かOS入れ直しが必要になるだろうと思い、USB経由でインストールずることにしました。

フリーソフトの[LinuxLive USB Creater][15]を利用して、USBにディストリビューションをいれました。

[<img src="https://lh5.googleusercontent.com/-YoENjtXc_mk/UsFvAc_2SOI/AAAAAAAAA7M/G3266RTSNRY/s400/SnapCrab_NoName_2013-12-29_10-1-5_No-00.jpg" width="234" height="400" />][16]

ここまでがWindowsでの作業。ここからが、いよいよLinuxでの作業。

### Linuxでの作業

ここからは、なかなかうまくいかずいろんな方法を試した結果、これでとりあえずうまく言ったということを書きます。なので、手順が正しいかどうかは保証できません。。。

USBメモリから起動(BIOS中にF2を押して、External Deviceから起動するようにする）。しばらくして、デスクトップ画面が起動する。

#### GPartedでパーティション設定 & フォーマット

MenuからGPartedというアプリを起動。すでにWindowsのパーティションが3つある。

  * isw_bfahbhfbaf_Volume0p1 &#8230; VAIOリカバリ領域
  * isw_bfahbhfbaf_Volume0p2 &#8230; Windowsのシステム領域
  * isw_bfahbhfbaf_Volume0p3&#8230;. Cドライブ

余っている領域をクリックして新規拡張パーティションを作成。(isw_bfahbhfbaf_Volume0p4)

  * 512MB ext4 &#8230; BOOT用 isw_bfahbhfbaf_Volume0p5
  * 10GB ext4 &#8230; Root用 isw_bfahbhfbaf_Volume0p6
  * 4GB linux-swap &#8230; swap域用 isw_bfahbhfbaf_Volume0p7
  * 10GB ext4 &#8230; Home用 isw_bfahbhfbaf_Volume0p8

パーティションは以下のサイトを参考にしました。

  * [Guide To Install Linux Mint 16 In Dual Boot With Windows][8]
  * Root域は10GBあればいということで10GB
  * Swap域は、搭載メモリと同程度 or 2倍とのことなので、4GB
  * Boot域はいらないかもしれないが、作成しないとうまくいかなかった。このへんがよくわからない。

そして、ここで重要なのはGPartedを利用してフォーマットをすること。参照したサイトだと、インストールの途中でext4フォーマットしているが、自分の環境だと、謎のエラー(???と表示される）がでて先にすすまなかった。

#### Install Linux Mint起動

デスクトップ上にあしる Install Linux Mintを起動する。

  * 言語を設定
  * インストールのタイプで その他を選択する。

空き領域があれば自動でインストーラがパーティションを切ってくれるとガイダンスには書いてあったが、ここで謎のエラー(???)がでて先に進めなくなる。自分でパーティションをきると先に進めた。先ほどGPartedで切ったパーティションが現れるので、 Changeを選択して、以下を純に割り当てていく。

  * /boot isw_bfahbhfbaf_Volume0p5
  * / isw_bfahbhfbaf_Volume0p6
  * swap isw_bfahbhfbaf_Volume0p7
  * /home isw_bfahbhfbaf_Volume0p8

ブートローダをインストールする場所は、デフォルトのままで(ここでは/dev/sda)

ここを越えたら、あとは順にインストーラにしたがう。

インストールの最後で Fatal Errorが発生する。 このコマンドの実行が失敗したようだ。

    ./grub-install /dev/sda
    

この問題の解決方法は以下の記事で解決できる。

  * [[SOLVED] How To: Install Grub 2 on a (fake)RAID system][17]

しかし、自分はもっとかんたんな方法を見つけた。Boot Repairという Ubuntuのソフトを利用して、問題点を自動的に解決する。手順にしたがうだけなので、楽。

  * [Question #218795 : Questions : “grub2” package : Ubuntu][18]
  * [Boot-Repair &#8211; Community Ubuntu Documentation][19]

BootRepairは基本的には手順にしたがっていけばよいがブートローダをどこにインストールするか質問されるところで少し困った。先ほどの[エントリ][17]を参考に以下をしていした。

    isw_bfahbhfbaf_Volume0p
    

BootRepairが完了したら、再起動。これでWindowsとMintのデュアルブートができるはず。

ここまでくるのにいろいろと試行錯誤して、結局10時間くらいかかったけど、なんとかできた。繰り返すけれども、この方法は偶然うまくいったのかもしれないので、手順が正しいかどうかは保証できません。。。

<!--:-->

 [1]: https://picasaweb.google.com/lh/photo/6W0SkYpGlM4aBJtD4aJSYTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [2]: https://linuxmint-jp.net/
 [3]: https://futurismo.biz/archives/777
 [4]: https://futurismo.biz/archives/1643
 [5]: https://distrowatch.com/
 [6]: https://picasaweb.google.com/lh/photo/7FClRCjkv3nxyEUXfGVx9zyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [7]: https://wiki.linuxmint-jp.net/index.php/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%BA%E3%82%AC%E3%82%A4%E3%83%89#Linux_Mint.E5.85.A5.E9.96.80
 [8]: https://itsfoss.com/guide-install-linux-mint-16-dual-boot-windows/
 [9]: https://ww24.jp/linux/windows7%E3%81%A8ubuntu10-04-1-lts%E3%81%AE%E3%83%87%E3%83%A5%E3%82%A2%E3%83%AB%E3%83%96%E3%83%BC%E3%83%88
 [10]: https://futurismo.biz/archives/1801
 [11]: https://picasaweb.google.com/lh/photo/na7haXaEQtQ7aEG5peG-2DyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [12]: https://www.forest.impress.co.jp/library/software/partwizhome/
 [13]: https://picasaweb.google.com/lh/photo/fnTWh6qrghLZttb3WbpC6jyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [14]: https://ftp.jaist.ac.jp/pub/Linux/linuxmint/isos/stable/16/
 [15]: https://www.linuxliveusb.com/
 [16]: https://picasaweb.google.com/lh/photo/vKvRDGWEN0aujwRDwX7S-zyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [17]: https://ubuntuforums.org/showthread.php?t=1574765
 [18]: https://answers.launchpad.net/ubuntu/+source/grub2/+question/218795
 [19]: https://help.ubuntu.com/community/Boot-Repair#A2nd_option_:_install_Boot-Repair_in_Ubuntu