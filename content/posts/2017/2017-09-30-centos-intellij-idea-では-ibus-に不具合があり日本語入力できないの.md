---
author: admin
categories:
- Linux
- トラブルシューティング
date: 2017-09-30T07:00:50+00:00
dsq_thread_id:
- 6.1809403e+09
excerpt: '[CentOS] IntelliJ IDEA では ibus に不具合があり日本語入力できない のでfcitxをつかおう'
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
- 532
side:
- "y"
title: '[CentOS] IntelliJ IDEA では ibus に不具合があり日本語入力できないのでfcitxをつかおう'
title_view:
- "y"
type: post
url: /archives/=6798
---

## はじめに {#-}

仕事でVirtualBox上にCentOSを立ち上げてそのなかにIntelliJ IDEAを入れたのだけれども、
  
なぜか日本語入力ができなかったので、その調査と解決方法について書く。

### 環境 {#-}

  * CentOS 7.4
  * IBus 1.5.3
  * fcitx 4.2.8

## 結論 {#-}

調べたら、IntelliJ IDEAで IBus 1.5.11 以前のバージョンは不具合があるそうだ。

  * [ubuntu &#8211; Resolving IBus Issue &#8211; IBus prior to 1.5.11 may cause input problems &#8211; Stack Overflow][1]

こんなメッセージが起動時に出る。

    IBus prior to 1.5.11 may cause input problems. See IDEA-78860 for details.
    

おそらく、Jetbeans製のPhpStormやPyCharmでもどうようかと。

stackoverflowの解決方法にしたがって、ibus の最新版をいれたのだがibusがそれでもうまく動かなかった。おかしいな。

## fcitxをつかおう {#fcitx-}

Input Methodは ibusだけではない。fcitxがある！というわけで、ibusをアンインストールしてfcitxをインストールすることにした。

以下、インストール手順です。

参考にしたリンク

  * <https://note.kurodigi.com/centos7-fcitx/>
  * [https://github.com/SaburoJiro/MyTips/blob/97afea3df48bf192ed11f2d279bec95af68f6398/01\_CentOS/02\_CentOS7\_Install\_fcitx.mkd][2]

### fcitxをインストール {#fcitx-}

    $ sudo yum install epel-release
    $ sudo yum install -y \
    fcitx-data.noarch \
    fcitx-devel.x86_64 \
    fcitx-gtk2.x86_64 \
    fcitx-gtk3.x86_64 \
    fcitx-libs.x86_64 \
    fcitx-pinyin.x86_64 \
    fcitx-qt4.x86_64 \
    fcitx-qt5-devel.x86_64 \
    fcitx-qt5.x86_64 \
    fcitx-qw.x86_64 \
    fcitx-table.x86_64 \
    fcitx-anthy.x86_64
    fcitx.x86_64
    
    $ wget ftp://ftp.pbone.net/mirror/archive.fedoraproject.org/fedora/linux/updates/19/x86_64/fcitx-configtool-0.4.7-1.fc19.x86_64.rpm &&　sudo yum localinstall fcitx-configtool-0.4.7-1.fc19.x86_64.rpm
    

### ibusの削除 {#ibus-}

    $ sudo killall ibus-daemon
    $ sudo yum remove ibus
    

### fcitxをシステムのIMに設定 {#fcitx-im-}

    $ gsettings set org.gnome.settings-daemon.plugins.keyboard active false
    $ imsettings-swich fcitx
    

~/.bashrcに追記

    export GTK_IM_MODULE=fcitx
    export QT_IM_MODULE=fcitx
    export XMODIFIERS="@im=fcitx"
    

### インライン入力を有効にする {#-}

これで一応はfcitxで IntelliJ IDEAが使えるようになったが、
  
入力すると、変換候補が下の方に出てきてしまう。インライン入力ができるように設定する。

  * fcitx -> 設定 -> アドオン
  * 拡張のチェックボックスをマーク
  * 検索窓からximを検索。Fcitx XIM Frontendを選択して設定を押す。
  * On The Spotを使うにチェックを入れ「OK」を押す

## おわりに {#-}

解決方法に至るまでに6時間かかった。

ニッチなトラブルシューティングだけれども、同じように困っている人の助けになれば幸いです。

 [1]: https://stackoverflow.com/questions/33651898/resolving-ibus-issue-ibus-prior-to-1-5-11-may-cause-input-problems
 [2]: https://github.com/SaburoJiro/MyTips/blob/97afea3df48bf192ed11f2d279bec95af68f6398/01_CentOS/02_CentOS7_Install_fcitx.mkd