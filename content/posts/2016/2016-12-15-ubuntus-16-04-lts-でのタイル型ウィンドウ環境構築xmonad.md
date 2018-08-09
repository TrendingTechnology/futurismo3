---
author: admin
categories:
- 技術メモ
date: 2016-12-14T16:18:00+00:00
dsq_thread_id:
- 5.3801656e+09
excerpt: Ubuntus 16.04 LTS でのタイル型ウィンドウマネージャー環境構築(xmonad)
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
- caption
pvc_views:
- 1521
side:
- "y"
tags:
- xmonad
title: Ubuntus 16.04 LTS でのタイル型ウィンドウマネージャー環境構築(xmonad)
title_view:
- "y"
type: post
url: /archives/=5968
---

今まで、ArchLinux を利用していたのだけれども、壊れたので、Ubuntu
に乗り換えた。

タイル型ウィンドウマネージャーの魅力に取り付かれたので、Ubuntu でも
xmonad を導入してみた。

-   [タイル型ウィンドウマネージャという新たな世界観に衝撃を受けた！Xmonad
    をつかってワクワク CUI 生活 |
    Futurismo](https://futurismo.biz/archives/2165)

設定ファイルは以前 ArchLinux で利用していたものがそのまま使えた。

誰かの役に立つとは思えないけれども、再度自分で設定するときのために書きました。

Environment
-----------

-   Ubuntu 16.04 LTS
-   Let's Note

xmonad の導入
=============

まずは、xmonad のインストールから。

-   [xmonad - ArchWiki](https://wiki.archlinuxjp.org/index.php/Xmonad)

``` {.bash}
sudo apt-get install xmonad
```

これで、ログイン時に xmonad でログインするか選択できるようになる。

xmonad.hs の設定
----------------

.xmonad/xmonad.hs を作成。ターミナルは urxvt を利用。

-   [省エネ時代の軽快ターミナル！rxvt-unicode(urxvt)でサクサクターミナル生活
    | Futurismo](https://futurismo.biz/archives/2163)

現在の設定は以下。

-   <https://raw.githubusercontent.com/tsu-nera/dotfiles/master/.xmonad/xmonad.hs>

``` {.text}
import XMonad
import XMonad.Hooks.DynamicLog
import XMonad.Hooks.ManageDocks
import XMonad.Util.Run(spawnPipe)
import XMonad.Util.EZConfig(additionalKeys)
import System.IO

import XMonad.Actions.WindowGo

import XMonad.Layout.MultiToggle
import XMonad.Layout.MultiToggle.Instances
import XMonad.Config.Desktop (desktopLayoutModifiers)
import XMonad.Layout.Named

-- for keyboard shortcut mod4 is windows ShortcutKey
modm = mod4Mask

tall = Tall 1 (3/100) (1/2)

main = do
        xmproc <- spawnPipe "/usr/bin/xmobar /home/tsu-nera/.xmobarrc"
        xmonad $ defaultConfig
        { manageHook = manageDocks <+> manageHook defaultConfig
        --, layoutHook = avoidStruts  $  layoutHook defaultConfig
    , layoutHook = mkToggle1 FULL $ desktopLayoutModifiers (named "V" tall ||| (named "H" $ Mirror tall))

      -- sometimes, xmonad freese,comment out these lines 
          -- , logHook = dynamicLogWithPP $ xmobarPP
          -- { ppOutput = hPutStrLn xmproc
          --    , ppTitle = xmobarColor "green" "" . shorten 50
          -- }

          -- Border settings
      , borderWidth = 2
          , normalBorderColor  = "#99ccff"
          , focusedBorderColor = "#0033dd" -- blue

          -- Rebind Mod to the Hiragana_Katakana 
      , modMask = mod3Mask
      -- , modMask = mod1Mask        

          -- use rxvt-unicode 
      , terminal = "urxvt" 
          }
          -- windows キーでショートカット
          `additionalKeys`
          [
            ((modm, xK_l), spawn "gnome-screensaver-command -l")
          , ((modm, xK_t), runOrRaise "urxvt" (className =? "URxvt"))
          , ((modm, xK_k), runOrRaise "conkeror" (className =? "conkeror"))
      , ((modm, xK_f), sendMessage (Toggle FULL))
          , ((modm, xK_q), spawn "xinput --set-prop \"SynPS/2 Synaptics TouchPad\" \"Device Enabled\" 0")
          , ((modm, xK_w), spawn "xinput --set-prop \"SynPS/2 Synaptics TouchPad\" \"Device Enabled\" 1")
          ]
```

Let's Note を利用しているので、mod キーをウィンドウズキーに設定。
いろいろと、ショートカットを設定。

xmobar の設定
=============

xmobar は xmonad と相性のよいステータスバー。

-   [Xmobar - ArchWiki](https://wiki.archlinuxjp.org/index.php/Xmobar)

``` {.bash}
sudo apt-get install xmobar
```

設定は以下のとおり。工夫私大でいろいろできる。

-   <https://raw.githubusercontent.com/tsu-nera/dotfiles/master/.xmobarrc>
-   [xmobar に org-clock の状態と時刻を表示する超コネタ |
    Futurismo](https://futurismo.biz/archives/4543)

``` {.text}
Config { font = "-misc-fixed-*-*-*-*-10-*-*-*-*-*-*-*"
       , borderColor = "black"
       , border = TopB
       , bgColor = "black"
       , fgColor = "grey"
       , position = TopW L 90
       , lowerOnStart = True
       , persistent = False
       , commands = [ Run Cpu ["-L","3","-H","50","--normal","green","--high","red"] 10
                    , Run Memory ["-t","Mem: <usedratio>%"] 10
            -- , Run Swap [] 10
                    , Run Battery ["Bat0"] 600
                    , Run Com "xmobar-clock-monitor.sh" [] "orgClock" 10
                    , Run Com "sh" ["-c", "cat ~/tmp/clocking"] "orgShow" 10
                , Run Date "%a %b %_d %Y %H:%M:%S" "date" 10
            ]   
       , sepChar = "%"
       , alignSep = "}{"
--       , template = "%cpu% | %memory% | %battery% }{ <fc=#ee9a00>%date%</fc> %orgClock%clock</fc> %orgShow%"
       , template = "%cpu% | %memory% | %battery% }{ <fc=#ee9a00>%date%</fc> "
             }
```

dmenu
=====

コマンドランチャー。mod+p に割り当てている。すごく便利。

``` {.bash}
sudo apt-get install dmenu
```

PATH が通ったところにあるコマンドを実行できる。時々おかしくなる。
そのような時は、\~/.xmonad/dmenu\_run を削除する。

タスクトレイの設定
==================

trayer というタスクトレイツールを使っている。

``` {.bash}
sudo apt-get install tarayer
```

ここにいろいろなアプリを表示する。.profile に登録しておく。

-   <https://raw.githubusercontent.com/tsu-nera/dotfiles/master/.profile_ubuntu>

``` {.bash}
# trayer タスクトレイ
trayer --edge top --align right --SetDockType true --SetPartialStrut false --expand true --width 10 --transparent true --tint 0x000000 --height 14 &

# ネットワーク
nm-applet &

# サウンド
volumeicon &

# バッテリ
cbatticon &

# Dropbox
~/.dropbox-dist/dropboxd &~/.dropbox-dist/dropboxd &

# TouchPad Default Off
xinput --set-prop "SynPS/2 Synaptics TouchPad" "Device Enabled" 0

# wall paper
feh --bg-scale ~/Dropbox/Photos/ubuntu.jpg &

# クリップポードマネージャー
copyq &
```

以上、自分のための簡単な備忘録でした。便利なツールがあれば、教えてください。

参考リンク
==========

-   [Xmonad/Config archive/John Goerzen's Configuration -
    HaskellWiki](https://wiki.haskell.org/Xmonad/Config_archive/John_Goerzen%27s_Configuration)
-   [Xmonad の設定 -
    kenkovlog](https://kenkov.hatenablog.jp/entry/20110509/1304961140)
-   ["My configuration of xmonad window manager with xmobar and trayer "
    at arjuna del
    toso](https://arjuna.deltoso.net/index.html%3Fp=242.html)
-   [2016 年の Linux 環境 - Devlion
    Memo](https://mjhd.hatenablog.com/entry/2016/03/23/131055)
