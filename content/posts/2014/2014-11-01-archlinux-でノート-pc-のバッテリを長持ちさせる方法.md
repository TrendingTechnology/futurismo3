---
author: admin
categories:
- Linux
- 技術メモ
date: 2014-11-01T02:12:00+00:00
dsq_thread_id:
- 3.731648e+09
excerpt: ArchLinux でノート PC のバッテリを長持ちさせる方法
pvc_views:
- 2129
tags:
- ArchLinux
title: ArchLinux でノート PC のバッテリを長持ちさせる方法
type: post
url: /archives/=2669
---

最近引越しをした. 引っ越す前の町には電源カフェがたくさんあったのだが,
引越し先では, 電源が利用できるカフェが少ない.

なので, ノート PC (ArchLinux)
のバッテリを長持ちさせる方法を模索してみた.

-   [Power Management (日本語) -
    ArchWiki](https://wiki.archlinux.org/index.php/Power_Management_(%E6%97%A5%E6%9C%AC%E8%AA%9E))

バッテリ確認
============

残りバッテリーを調べる
----------------------

apci コマンドで, バッテリ状態を見ることができる.

-   [Laptop (日本語) -
    ArchWiki](https://wiki.archlinux.org/index.php/Laptop_(%E6%97%A5%E6%9C%AC%E8%AA%9E))

``` {.bash}
$ apci -b
```

cbatticon
---------

システムトレイ用のバッテリアイコン.

エコの設定
==========

-   [Power saving -
    ArchWiki](https://wiki.archlinux.org/index.php/Power_saving)
-   [Linux – Extend your laptop's battery
    life](https://en.kioskea.net/faq/2800-linux-extend-your-laptop-s-battery-life#laptop-mode-tools-functions)

明るさ調整
----------

明るさを低くすることで, バッテリを長持ちできる.

-   [Backlight (日本語) -
    ArchWiki](https://wiki.archlinux.org/index.php/Backlight_(%E6%97%A5%E6%9C%AC%E8%AA%9E))

### xcalib

xcalib で, コマンドラインから明るさを調整できる.

``` {.bash}
# 設定クリア
$ xcalib -c 

# 明るさを 70
$ xcalib -co 70 -a
```

laptop-mode-tools
-----------------

laptop-mode-tools は, ラップトップ PC の電源を,
使用状態に応じて適切に調整してくれるツール.

-   Official: [Laptop Mode Tools](https://samwel.tk/laptop_mode/)
-   [Laptop Mode Tools -
    ArchWiki](https://wiki.archlinux.org/index.php/Laptop_Mode_Tools)
-   [電力管理/ ハウツー - Gentoo
    ](https://wiki.gentoo.org/wiki/Power_management/HOWTO/ja)

初期設定はここ. /etc/laptop-mode/laptop-mode.conf

### 起動方法

``` {.bash}
# サービス登録
$ sudo systemctl enable laptop-mode
# 再起動
$ sudo systemctl restart laptop-mode

# 手動起動
$ sudo laptop-mode auto
# ステータス確認
$ sudo laptop-mode status
```

### 追加インストール

-   apcid で laptop-mode-tools から 電源管理.
-   hdparm で Hard Disk の回転数をセーブ.

バッテリーが少なくなったらサスペンド
------------------------------------

以下を記述することで, バッテリが少なくなったときに,
自動的にサスペンド状態にする.

``` {.bash}
/etc/udev/rules.d/99-lowbat.rules

# Suspend the system when battery level drops to 2% or lower
SUBSYSTEM=="power_supply", ATTR{status}=="Discharging", ATTR{capacity}=="2", RUN+="/usr/bin/systemctl suspend"
SUBSYSTEM=="power_supply", ATTR{status}=="Discharging", ATTR{capacity}=="1", RUN+="/usr/bin/systemctl suspend"
SUBSYSTEM=="power_supply", ATTR{status}=="Discharging", ATTR{capacity}=="0", RUN+="/usr/bin/systemctl suspend"
```
