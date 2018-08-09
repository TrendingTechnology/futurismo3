---
author: admin
categories:
- Emacs
date: 2014-01-13T05:19:11+00:00
dsq_thread_id:
- 3.7296243e+09
excerpt: <!--:ja-->Emacsターミナル環境をカラフルに改造したので、導入したツールを晒します<!--:-->
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 4941
tags:
- Mint
title: Beautiful Colorful Terminal – Emacsターミナル環境をカラフルに彩る
type: post
url: /archives/=2146
---

外見大事！ 美しいとテンションが上がって作業効率も向上する。

Emacsターミナル環境をカラフルに改造したので、導入したツールを晒します。

[<img src="https://lh5.googleusercontent.com/-6douzga2p7s/UtN1WsJz3pI/AAAAAAAAA-0/IWMgJ15qh7I/s400/beautiful_terminal.png" height="225" width="400" />][1]

#### Environment

  * Linux Mint 16
  * Emacs 24

### Guake

まずは、ターミナルから。デフォルトのGnome端末でも機能としては十分だが、デフォルトツールというところが気にくわないので、デフォルトでない一番人気をさがしたところ、Guakeを入れることにした。

    sudo apt-get install guake
    

Guakeの利点は、画面のサイズが気軽に切り替えられるところ。上からにょきっと現れる操作感がよい。

  * F12で全画面表示
  * ショートカットで半画面表示

暗めの幻想的な背景を探して設定した。

F12を押したときに端末にフォーカスできないバグがあるらしいので、手動で修正。

  * [Fix for compliance with Gnome 3: when hidden, loose focus (and regain it&#8230; by toobaz · Pull Request #141 · Guake/guake][2]

### Ricty

美しいフォントRictyを設定。

  * [美は生産性に宿る！プログラマーのためのフォントRictyをLinux Mintに導入した | Futurismo][3]

### tmux-powerline

tmuxのモードラインをカラフルに彩るツール、tmux-powerlineを導入しました。

  * [erikw/tmux-powerline][4]

導入は、READMEに従って作業。カスタマイズはこれから。

![][5]
  

  
![][6]

#### Referenced

  * [tmux-powerline &#8211; Qiita [キータ]][7]
  * [モテるtmux &#8211; まつぼ x Web][8]
  * [tmux-powerlineを使う &#8211; memo63][9]

### カラーテーマ

#### Emacs Color Theme

カラーテーマを変更。Emacsのカラーテーマを変更するには、そもそも Emacs Color Themeを導入する必要があるので、これを導入。

[gnuemacscolorthemetest &#8211; GNU Emacs Color Theme Test &#8211; Google Project Hosting][10]からダウンロードしてきて、ロードパスの通った場所におく。

init.elに以下を追加した。

    (require 'color-theme)
    (color-theme-initialize)
    

#### Molokai

Vimのカラーテーマで有名な、molokaiを導入してみた。カラフルな装飾がMolokaiの特徴。

![][11]

molokaiのテーマは派生がいろいろあるようなので、Googleで検索して筆頭に現れたこれをいれる。

  * [hbin/molokai-theme][12]

molokai-theme-kit.el,molokai-theme.elをダウンロードしてロードパスの通った場所へ配置。ここでは、themsというディレクトリを.emacs.dのしたにつくった。

init.elに以下を追加した。

    
        (add-to-list 'custom-theme-load-path "~/.emacs.d/themes")
         (setq molokai-theme-kit t)
         (load-theme 'molokai t)

### emacs-powerline

Emacsのモードラインをカラフルに彩る Emacs Powerlineを入れる。tmux-powerlineと合わせると、画面がとても賑やかになる。

powerline.elをダウンロードして、ロードパスの通った場所に配置。

ここにも数種類のデザインがあるし、ネット上にもさらに多くのものがある。いろいろと試してみる。

  * [EmacsWiki: powerline.el][13]

![][14]

init.elに以下を追加

    (require 'powerline)

 [1]: https://picasaweb.google.com/lh/photo/seC0YXllQNELube4DAknHzyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [2]: https://github.com/Guake/guake/pull/141
 [3]: https://futurismo.biz/archives/2072
 [4]: https://github.com/erikw/tmux-powerline
 [5]: https://lh3.ggpht.com/-1yzuh3J8jxw/UtNoBcQq_CI/AAAAAAAAA9w/XN8LhMSkC9U/tmux-powerline_01.png
 [6]: https://lh6.ggpht.com/-tjt2_ywGdAs/UtNoFVV1aVI/AAAAAAAAA94/J9FaiC0JASo/tmux-powerline_02.png
 [7]: https://qiita.com/PSP_T/items/dc509f208b464838b948
 [8]: https://matsu.teraren.com/blog/2013/02/10/moteru-tmux-powerline/
 [9]: https://saku-na63.hatenablog.com/entry/2013/10/13/223010
 [10]: https://code.google.com/p/gnuemacscolorthemetest/
 [11]: https://lh6.ggpht.com/-Q2ItmgIghe0/UtNpkDOiCnI/AAAAAAAAA-E/7PXVx7R2wBQ/molokai_01.png
 [12]: https://github.com/hbin/molokai-theme
 [13]: https://www.emacswiki.org/emacs/powerline.el
 [14]: https://lh6.ggpht.com/-9MHvsvshvh8/UtN0RBjOaGI/AAAAAAAAA-g/VDChvbgH5JY/emacs-powerline.png