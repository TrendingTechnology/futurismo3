---
author: admin
categories:
- Linux
- 技術メモ
date: 2014-01-10T15:41:51+00:00
dsq_thread_id:
- 3.7116897e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 4896
tags:
- Mint
- VAIO
title: '[Linux Mint]xinputでタッチパッドをコマンドラインから有効化・無効化する'
type: post
url: /archives/=2129
---

Linux Mintを利用していると、ノートPCのタッチパッドの感度がどうもよすぎる。そのため、普段はタッチパッドを無効にして、マウスのみを利用していた。

マウスが利用できないときにノートPCを立ち上げると、タッチパッドが制御不能であるためになにもできなくなる。そんなときに、コマンドラインからタッチパッドを有効化する方法を調べた。

xinputコマンドを利用する。

コマンドラインから制御するためには、まず以下を入力。

    gsettings set org.gnome.settings-daemon.peripherals.touchpad touchpad-enabled true
    

制御デバイスのID or 名前を調べる。

    % xinput list
    ⎡ Virtual core pointer                      id=2    [master pointer  (3)]
    ⎜   ↳ Virtual core XTEST pointer                id=4    [slave  pointer  (2)]
    ⎜   ↳ SynPS/2 Synaptics TouchPad                id=11   [slave  pointer  (2)]
    ⎣ Virtual core keyboard                     id=3    [master keyboard (2)]
        ↳ Virtual core XTEST keyboard               id=5    [slave  keyboard (3)]
        ↳ Video Bus                                 id=6    [slave  keyboard (3)]
        ↳ Sony Vaio Keys                            id=7    [slave  keyboard (3)]
        ↳ Power Button                              id=8    [slave  keyboard (3)]
        ↳ USB2.0 Camera                             id=9    [slave  keyboard (3)]
        ↳ AT Translated Set 2 keyboard              id=10   [slave  keyboard (3)]
    

Touchpadという名前がついているものが該当。ここでは、SynPS/2 Synaptics TouchPad id=11

以下のコマンドで有効・無効を切り替える。

    # 無効
    % xinput --set-prop "SynPS/2 Synaptics TouchPad" "Device Enabled" 0
    % xinput --set-prop 11 "Device Enabled" 0
    
    # 有効
    % xinput --set-prop "SynPS/2 Synaptics TouchPad" "Device Enabled" 1
    % xinput --set-prop 11 "Device Enabled" 1
    

ログインシェルにaliasを切っておくとよい。.zshenvに定義した。

    alias touchpad_disable='xinput --set-prop "SynPS/2 Synaptics TouchPad" "Device Enabled" 0'
    alias touchpad_enable='xinput --set-prop "SynPS/2 Synaptics TouchPad" "Device Enabled" 1'
    

### 参考

  * [Linux Mint Forums • View topic &#8211; Disabled Touchpad D630 Dell &#8211; Mint 15(xinput solution)][1]
  * [SynapticsTouchpad &#8211; Community Ubuntu Documentation][2]

 [1]: https://forums.linuxmint.com/viewtopic.php?f=49&t=141577
 [2]: https://help.ubuntu.com/community/SynapticsTouchpad