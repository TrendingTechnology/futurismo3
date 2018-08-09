---
author: admin
categories:
- OSS
date: 2014-01-19T11:47:12+00:00
dsq_thread_id:
- 3.7128049e+09
excerpt: 軽量なターミナルである、rxvt-unicodeを試してみました
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
- 12330
side:
- "y"
tags:
- Mint
- urxvt
- xmonad
title: 省エネ時代の軽快ターミナル！rxvt-unicode(urxvt)でサクサクターミナル生活
title_view:
- "y"
type: post
url: /archives/=2163
---

軽量なターミナルである、rxvt-unicodeを試してみました

  * [rxvt-unicode][1]

![][2]

### urxvtとは

rxvt-unicode(urxvt)とは、軽量なターミナル。

  * Unicode対応
  * 設定ファイルによって、自由にカスタマイズ可能
  * クラッシュしらず
  * 小メモリ、爆速の軽快さ。

などなどの特徴がある。軽量なためxmonadとの相性がよいと、xmonadのサイトで紹介されていたため、ターミナルを乗りかえてみた。

以下でインストール。

    sudo apt-get install rxvt-unicode-256color
    

### カスタマイズ

カスタマイズは、~/.Xdefaultsに設定を記入することで実施する。環境は、Linux Mint.

以下のサイトのXdefaultが大変参考になりました。ありがとうございます。

  * [urxvt 入れてみた &#8211; oogattaの勉強日記][3]

### フォントの設定

Rictyを設定。アンチエイリアスも有効に設定。

    URxvt.allow_bold:           false
    URxvt*font: xft:Ricty:size=12:antialias=true
    

### 背景を透過にする

背景に画像を設定して、ターミナルは半透明にすることにする。以下を参考にした。

  * [Urxvtに背景画像をセットする方法 : アシアルブログ][4]

以下を追記。

    urxvt*shading: 80
    URxvt*inheritPixmap: true
    

### 色テーマをmolokaiにする

色テーマを鮮やかなmolokaiにする。ここを参照。

  * [dotfiles/xcolors/molokai at master · brianbuccola/dotfiles][5]

### .Xdefaults結果

余計なツールバーもないし、軽いし、カスタマイズ自由、なかなかいい感じ。

  * [dotfiles/.Xdefaults][6]

### 参考

  * [urxvt 入れてみた &#8211; oogattaの勉強日記][3]
  * [Urxvtのカスタマイズ : アシアルブログ][7]

 [1]: https://software.schmorp.de/pkg/rxvt-unicode.html
 [2]: https://lh6.ggpht.com/-Kr1vXZsZdh0/Utu4uNAyrmI/AAAAAAAABAM/fWV1z6HQUxA/2014-01-19-203608_796x432_scrot.png
 [3]: https://d.hatena.ne.jp/oogatta/20130905/1378364651
 [4]: https://blog.asial.co.jp/404
 [5]: https://github.com/brianbuccola/dotfiles/blob/master/xcolors/molokai
 [6]: https://github.com/tsu-nera/dotfiles/blob/master/.Xdefaults
 [7]: https://blog.asial.co.jp/262