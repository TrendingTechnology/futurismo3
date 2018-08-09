---
author: admin
categories:
- Linux
date: 2018-01-12T12:09:49+00:00
dsq_thread_id:
- 6.408872e+09
excerpt: ASUS ZenScreen MB16ACで快適楽々デュアルディスプレイ
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
- 166
side:
- "y"
tags:
- Ubuntu
title: ASUS ZenScreen MB16ACで快適楽々デュアルディスプレイ
title_view:
- "y"
type: post
url: /archives/=6867
---

![][1]

## はじめに {#はじめに}

[新パソコンを買った][2]のだが、せっかくなのでデュアルディスプレイにしたくなってきた。新パソコンは自宅サーバとして稼働させて普段は、有料自習室で作業することが多いので、モバイルで持ち運べるものを新調したくなった。いろいろ調べたところ、ASUSが一番スペックがよかったので購入した。

  * [MB16AC | 液晶ディスプレイ | ASUS 日本][3]

## 縦型に対応していなかった・・・ {#縦型に対応していなかった・・・}

このASUSを選んだ一番の理由は、縦にサブディスプレイを使いたかったから。自宅も外出先もUbuntuを利用しているので、対応するドライバを入れて利用する必要があるのだけれども、残念ながらドライバが対応していなかった(T_T)。

  * [Known issues with DisplayLink ubuntu support – DisplayLink Support][4]

> Rotation is not supported due to missing functionality in the generic modesetting driver

## Ubuntu用ドライバ DisplayLinkをインストール {#ubuntu用ドライバ-displaylinkをインストール}

Ubuntuで利用するには、DisplayLinkというドライバをインストールする必要がかある。

  * [Ubuntu][5]

これをお手軽に実施するツールがある。

  * <https://github.com/AdnanHodzic/displaylink-debian>

ダウンロードしたスクリプトを実行すると、よしなに関連ライブラリのインストールと設定をしてくれる。

## xrandrで設定 {#xrandrで設定}

デュアルディスプレイ用の設定をしていく。 まずはモニタが認識されているか確認。

    $ xrandr --listproviders
    Providers: number : 2
    Provider 0: id: 0x47 cap: 0x9, Source Output, Sink Offload crtcs: 4 outputs: 4 associated providers: 1 name:Intel
    Provider 1: id: 0x106 cap: 0x2, Sink Output crtcs: 1 outputs: 1 associated providers: 1 name:modesetting
    

sourceの設定。

    xrandr --setprovideroutputsource 1 0
    

xrandrでモニタ名を調べる。

    $ xrandr
    eDP1 connected primary 1600x900+0+0 (normal left inverted right x axis y axis) 309mm x 174mm
    DVI-I-1-1 connected (normal left inverted right x axis y axis)
    

そしていよいよデュアルディスプレイのコマンド投入。

    xrandr --output DVI-I-1-1 --auto --right-of eDP1
    

元に戻すには、

    xrandr --output DVI-I-1-1 --off

 [1]: https://lh3.googleusercontent.com/Oek38j_1BaO1dzViCrq5cau505pZWGGoC_kZp_8zl3CpwirgPOK8e5_5OhKjPWJXjKgZqX2Jep1gPkOm79YqDuc18SayyU9rVv83G2YSoCN97msi4mmuoQXZEs_stbWLfivVqkrJcgrOyC14_nigYdouwvxxkolY0w_zUtxi0FIniI74zHliqYENyiSLFSScLmU7uDUGkHF-f5bHnPJ2knPeKwtJu_S30pJhczkoy9ngBPWuNSOsRPtk5wAHjzQP7QFN9tXrHw3EQGu9-wzzd5zjo2zOCIFmRM1-CHqiSCcThvNfBPXmsCfE51ipVZgJYFpQi_Va2AwDh9ibbKTBZqF9kvwY95ijjXPiwuVwMjfYDNBbPsSOv6EtlYOu7oeBKDZu7nq2kUJ52bocnAj2Cp4jIsAfUT3a4VCXpswWzbNJ9G08gFwHYA4LO5UcASkh4LP9f9IAaLAk_vbk69nH94Xf9JiWXuhgLJY12cJAVVRGeREx7cqEYJlmR3BLgvkVnlEuoaHvlS9NCyXFAwC-tZNgGNCRa9GGUEaE_-FNFmzBf-XTjSyueb5Mf6dDyNyOlkEyItezBieeGNuhKqs1b0kW_BgzbLJYt52NT3E=w1222-h916-no
 [2]: https://futurismo.biz/archives/6850
 [3]: https://www.asus.com/jp/Monitors/MB16AC/
 [4]: https://support.displaylink.com/knowledgebase/articles/641668-known-issues-with-displaylink-ubuntu-support
 [5]: https://www.displaylink.com/downloads/ubuntu