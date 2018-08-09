---
author: admin
categories:
- Linux
- 技術メモ
date: 2014-06-08T05:45:00+00:00
dsq_thread_id:
- 3.7008074e+09
excerpt: Arch Linuxインストール後の設定メモです
pvc_views:
- 6733
tags:
- ArchLinux
title: ArchLinux インストール後の設定メモ
type: post
url: /archives/=2488
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/archlinux-logo-dark.png" width="500" />

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      前回ArchLinuxをインストールしたので、今回はインストール後の設定についてまとめます。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/2482">Lets Noteを買ったのでとりあえずWindows8とArchLinuxのデュアルブートにしてみた | Futurismo</a>
      </li>
    </ul>
    
    <p>
      [toc]
    </p>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    wifiの設定
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      まずは、wifiを有効化。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-language">iw dev
wpa_supplicant -B -i wlp2s0 -c &lt;(wpa_passphrase "ssid" "psk")
dhcpcd wlp2s0
</pre>
    </div>
    
    <p>
      起動時に自動でwifi接続するように設定。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-language">pacman -S wpa_actiond
systemctl enable netctl-auto@wlp2s0.service
reboot
</pre>
    </div>
    
    <p>
      再起動してネットに接続できればOK.
    </p>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    ユーザ設定
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      ユーザの作成。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-language">useradd -m -g users -G wheel -s /usr/bin/zsh tsu-nera
passwd tsu-nera
</pre>
    </div>
    
    <p>
      sudoをパスワードなしで利用するために、visudoを設定。rootになって、
    </p>
    
    <div class="org-src-container">
      <pre class="src src-language"># これで emacsで visudoが起動できる。
VISUAL=emacs visudo

# 末尾に以下の行を追加。
tsu-nera ALL=(ALL) ALL
</pre>
    </div>
  </div>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    ツールの設定
  </h2>
  
  <div class="outline-text-2" id="text-4">
  </div>
  
  <div id="outline-container-sec-4-1" class="outline-3">
    <h3 id="sec-4-1">
      pacman
    </h3>
    
    <div class="outline-text-3" id="text-4-1">
      <p>
        ArchLinuxのパッケージ管理ツール、pacmanをまずはべんきょ。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://wiki.archlinux.org/index.php/Pacman_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">pacman (日本語) &#8211; ArchWiki</a>
        </li>
      </ul>
      
      <p>
        よく利用するツールをインストール。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">pacman -S emacs git zsh tmux openssh
</pre>
      </div>
      
      <p>
        すべてをアップデート。
      </p>
      
      <p>
        n#+begin_src language pacman -Syu #+end_src
      </p>
    </div>
  </div>
  
  <div id="outline-container-sec-4-2" class="outline-3">
    <h3 id="sec-4-2">
      yaourt
    </h3>
    
    <div class="outline-text-3" id="text-4-2">
      <p>
        pacmanのラッパー。 特徴は、Arch User Repositoryにあるツールをインストールすることができること。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://wiki.archlinux.org/index.php/Yaourt_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">Yaourt (日本語) &#8211; ArchWiki</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-4-3" class="outline-3">
    <h3 id="sec-4-3">
      gitの設定
    </h3>
    
    <div class="outline-text-3" id="text-4-3">
      <div class="org-src-container">
        <pre class="src src-language">ssh-keygen -t rsa
</pre>
      </div>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/1280">githubに新しいリポジトリを作成してローカルのリポジトリをアップロードする | Futurismo</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-4-4" class="outline-3">
    <h3 id="sec-4-4">
      my dotfiles
    </h3>
    
    <div class="outline-text-3" id="text-4-4">
      <p>
        github上で管理しているdotfilesをインストールする。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">git clone https://github.com/tsu-nera/toolkit.git
git submodule update --init
</pre>
      </div>
      
      <p>
        つづけて、emacsも立ち上げる。 el-getでパッケージ管理しているので自動でtoolはおとしてくる。
      </p>
    </div>
  </div>
</div>

<div id="outline-container-sec-5" class="outline-2">
  <h2 id="sec-5">
    日本語環境の設定
  </h2>
  
  <div class="outline-text-2" id="text-5">
  </div>
  
  <div id="outline-container-sec-5-1" class="outline-3">
    <h3 id="sec-5-1">
      文字コードの設定
    </h3>
    
    <div class="outline-text-3" id="text-5-1">
      <p>
        ja_JP.UTF-8をつかう。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language"># locale.genを編集
emacs /etc/locale.gen

# 以下をコメントアウト
en_US.UTF-8 UTF-8
ja_JP.UTF-8 UTF-8

# locale.gen生成
locale.gen
</pre>
      </div>
      
      <p>
        コンソール環境では文字化けする。X Window System環境をを整えてから以下を設定。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">echo LANG=ja_JP.UTF-8 &gt; /etc/locale.conf
export LANG=ja_JP.UTF-8
</pre>
      </div>
    </div>
  </div>
  
  <div id="outline-container-sec-5-2" class="outline-3">
    <h3 id="sec-5-2">
      IM/IME
    </h3>
    
    <div class="outline-text-3" id="text-5-2">
      <p>
        親指シフトが利用できる、ibus-anthyを利用する。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language"># インストール
sudo pacman -S ibus-anthy
# 設定
ibus-setup
</pre>
      </div>
      
      <p>
        日本語入力はなかなか苦労した。 なぜなら、ibus-daemonを起動しても日本語入力できなかったから。
      </p>
      
      <p>
        結論としては、/etc/clipboardに設定をした。.zshenvや.xinitrc, .profileはすべて失敗した。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language"># ibus
export XIM=ibus
export XIM_PROGRAM=/usr/bin/ibus-daemon
export XIM_ARGS="--xim"
export GTK_IM_MODULE="ibus"
export XMODIFIERS="@im=ibus"
export QT_IM_MODULE="ibus"
ibus-daemon -d -x
</pre>
      </div>
    </div>
  </div>
  
  <div id="outline-container-sec-5-3" class="outline-3">
    <h3 id="sec-5-3">
      Font
    </h3>
    
    <div class="outline-text-3" id="text-5-3">
      <p>
        Ricty を使う。驚いたのは、archlinuxだと、以下のコマンド一つでインストールできてしまうこと。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">yaourt -S ttf-ricty
</pre>
      </div>
      
      <p>
        いままで散々苦労してきたが、あまりに導入が簡単過ぎて感動した。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/1313">いつ変えるの？今でしょ！Windowsプログラマーのための『Ricty』</a>
        </li>
        <li>
          <a href="https://futurismo.biz/archives/2072">美は生産性に宿る！プログラマーのためのフォントRictyをLinux Mintに導入した</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-sec-6" class="outline-2">
  <h2 id="sec-6">
    GUI環境の設定
  </h2>
  
  <div class="outline-text-2" id="text-6">
  </div>
  
  <div id="outline-container-sec-6-1" class="outline-3">
    <h3 id="sec-6-1">
      X Window System
    </h3>
    
    <div class="outline-text-3" id="text-6-1">
      <div class="org-src-container">
        <pre class="src src-language"># x window systemのインストール
pacman -S xorg-server xorg-server-utils xorg-xinit
pacman -S mesa

# ドライバを調べる。
$ lspci | grep VGA
Intel Corporation Haswell-ULT Integrated Graphics Controller(rev 09)
</pre>
      </div>
      
      <p>
        ここから適切なドライバを探す。自分のPCは intelなので、 xf86-video-intelのようだ。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://wiki.archlinux.org/index.php/Xorg_(%E6%97%A5%E6%9C%AC%E8%AA%9E)#.E3.83.89.E3.83.A9.E3.82.A4.E3.83.90.E3.83.BC.E3.81.AE.E3.82.A4.E3.83.B3.E3.82.B9.E3.83.88.E3.83.BC.E3.83.AB">Xorg (日本語) &#8211; ArchWiki</a>
        </li>
      </ul>
      
      <div class="org-src-container">
        <pre class="src src-language">pacman -S xf86-video-intel
</pre>
      </div>
      
      <p>
        タッチパッドの制御のために以下もインストール。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">pacman -S xf86-input-synaptics
</pre>
      </div>
      
      <p>
        ただし、TouchPadは普段は邪魔なので、無効化しておく。エイリアスを切って、off/onをする。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">alias touchpad_disable='xinput --set-prop "SynPS/2 Synaptics TouchPad" "Device Enabled" 0'
alias touchpad_enable='xinput --set-prop "SynPS/2 Synaptics TouchPad" "Device Enabled" 1'
</pre>
      </div>
    </div>
  </div>
  
  <div id="outline-container-sec-6-2" class="outline-3">
    <h3 id="sec-6-2">
      slim
    </h3>
    
    <div class="outline-text-3" id="text-6-2">
      <p>
        軽量なログインマネージャー。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">pacman -S slim archlinux-themes-slim slim-themes
</pre>
      </div>
      
      <p>
        /etc/slim.confを設定する。テーマは/usr/share/slim/themsにある。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language"># defaultユーザの設定
default_user        tsu-nera
# テーマの設定
current_theme       archlinux-darch-grey
</pre>
      </div>
      
      <p>
        最後に設定を反映する。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-language">systemctl enable slim.service
reboot
</pre>
      </div>
    </div>
  </div>
  
  <div id="outline-container-sec-6-3" class="outline-3">
    <h3 id="sec-6-3">
      xmonad/urxvt
    </h3>
    
    <div class="outline-text-3" id="text-6-3">
      <p>
        タイル型ウィンドウマネージャのxmonad, ターミナルにurxvtをつかう。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://wiki.archlinux.org/index.php/Xmonad_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">Xmonad (日本語) &#8211; ArchWiki</a>
        </li>
      </ul>
      
      <p>
        これは以前から利用しているからだ。なので、詳細は省略。（過去記事参照)
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/2165">タイル型ウィンドウマネージャという新たな世界観に衝撃を受けた!</a>
        </li>
        <li>
          <a href="https://futurismo.biz/archives/2163">省エネ時代の軽快ターミナル！rxvt-unicode(urxvt)でサクサクターミナル生活 </a>
        </li>
      </ul>
      
      <div class="org-src-container">
        <pre class="src src-language">pacman -S xmonad xmonad-contrib dmenu xmobar, rxvt-unicode
</pre>
      </div>
    </div>
  </div>
</div>

<div id="outline-container-sec-7" class="outline-2">
  <h2 id="sec-7">
    サウンド設定
  </h2>
  
  <div class="outline-text-2" id="text-7">
  </div>
  
  <div id="outline-container-sec-7-1" class="outline-3">
    <h3 id="sec-7-1">
      ALSA
    </h3>
    
    <div class="outline-text-3" id="text-7-1">
      <p>
        サウンドカードのデバイスドライバ。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://wiki.archlinux.org/index.php/Advanced_Linux_Sound_Architecture_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">Advanced Linux Sound Architecture (日本語) &#8211; ArchWiki</a>
        </li>
      </ul>
      
      <div class="org-src-container">
        <pre class="src src-language">pacman -S alsa-utils
</pre>
      </div>
      
      <p>
        alsamixerをコマンドラインから起動する。 (自分の環境では) F6 の サウンドカード選択でHDA Intel PCHを選択。
      </p>
      
      <p>
        自分の場合は、これで音がでなかったので、以下の作業をした。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://wiki.archlinux.org/index.php/Advanced_Linux_Sound_Architecture#HDMI_output_does_not_work">Advanced Linux Sound Architecture &#8211; ArchWiki</a>
        </li>
      </ul>
      
      <div class="org-src-container">
        <pre class="src src-language"># 音がでるデバイスを調べる。
$ aplay -l
  *** ハードウェアデバイス PLAYBACK のリスト ****
カード 0: HDMI [HDA Intel HDMI], デバイス 3: HDMI 0 [HDMI 0]
  サブデバイス: 1/1
  サブデバイス #0: subdevice #0
カード 0: HDMI [HDA Intel HDMI], デバイス 7: HDMI 1 [HDMI 1]
  サブデバイス: 1/1
  サブデバイス #0: subdevice #0
カード 0: HDMI [HDA Intel HDMI], デバイス 8: HDMI 2 [HDMI 2]
  サブデバイス: 1/1
  サブデバイス #0: subdevice #0
カード 1: PCH [HDA Intel PCH], デバイス 0: ALC269VC Analog [ALC269VC Analog]
  サブデバイス: 1/1
  サブデバイス #0: subdevice #0

# 音がでるかテスト
$ apply -D plughw:1,0 /usr/share/sounds/alsa/Front_Center.wav
</pre>
      </div>
    </div>
  </div>
  
  <div id="outline-container-sec-7-2" class="outline-3">
    <h3 id="sec-7-2">
      youtube
    </h3>
    
    <div class="outline-text-3" id="text-7-2">
      <p>
        youtubeを見るためには、Adobe Flash Playerが必要。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://wiki.archlinux.org/index.php/Browser_Plugins_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">Browser Plugins (日本語) &#8211; ArchWiki</a>
        </li>
      </ul>
      
      <div class="org-src-container">
        <pre class="src src-language">pacman -S flashplugin
</pre>
      </div>
    </div>
  </div>
</div>

<div id="outline-container-sec-8" class="outline-2">
  <h2 id="sec-8">
    その他
  </h2>
  
  <div class="outline-text-2" id="text-8">
  </div>
  
  <div id="outline-container-sec-8-1" class="outline-3">
    <h3 id="sec-8-1">
      時刻設定
    </h3>
    
    <div class="outline-text-3" id="text-8-1">
      <p>
        時刻が狂っているので時刻合わせをする。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/1487">CentOSで日本標準時の時刻をntpで取得するためのメモ | Futurismo</a> <div class="org-src-container">
            <pre class="src src-language">systemctl enable ntpd
</pre>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-sec-9" class="outline-2">
  <h2 id="sec-9">
    まとめ
  </h2>
  
  <div class="outline-text-2" id="text-9">
    <p>
      前回の記事のArchLinuxの導入までで、30時間はかかった気がする。。疲れた。 ArchLinuxの導入の大変さを身をもって実感。 自分の手で設定をつくりあげる、これは大変だけれども非常に達成感があった。
    </p>
    
    <p>
      ArchLinuxは壊れやすいときくので、なるべく詳細にインストールメモを残してみた。 なんとなく、再設定をしそうな気がするので。ArchWikiの異常な丁寧さと詳細さに感嘆した。 困っても、大抵のことはここに書いてあったので、迷うことはなかった。
    </p>
    
    <p>
      なぜ、Linux MintからArchLinuxに移行しようとしたのだろう？
    </p>
    
    <p>
      ローリングストーンモデルに惹かれた点が大きい。 Linux Mintはアップデートにフルインストールが必要だけれども、ArchLinuxはコマンド一つだ。
    </p>
    
    <p>
      しかし、それは表の理由だ。真の理由は、ブランドバリューに引かれたから。 ArchLinuxには、かたよったステレオタイプがある。
    </p>
    
    <p>
      『私、ArchLinuxをつかってます』というと、なんだかマニアっぽい。 『私、vuittonのバッグを持っているの』というのと同じ。
    </p>
    
    <p>
      芸術家をアーチストという、そしてまた、ArchLinuxをつかうひとも、アーチストという。
    </p>
    
    <p>
      そんな自己満足感と達成感に浸っている。
    </p>
  </div>
</div>

<div id="outline-container-sec-10" class="outline-2">
  <h2 id="sec-10">
    Bookmarks
  </h2>
  
  <div class="outline-text-2" id="text-10">
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/2082">Linux Mintインストール後の設定メモ | Futurismo</a>
      </li>
      <li>
        <a href="https://wiki.archlinux.org/index.php/Beginners'_Guide/Extra_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">Beginners&#8217; Guide/Extra (日本語) &#8211; ArchWiki</a>
      </li>
      <li>
        <a href="https://note.chiebukuro.yahoo.co.jp/detail/n267693">Archlinuxのインストールから環境設定まで &#8211; Yahoo!知恵袋</a>
      </li>
      <li>
        <a href="https://memo.laughk.org/2014/05/25/start_archlinux.html">Arch Linux はじめました ~ 続・ラフなラボ</a>
      </li>
      <li>
        <a href="https://archlinux-blogger.blogspot.jp/2014/02/arch-linux-20140201-2-x-gnomegui.html">普段使いのArch Linux: Arch Linux インストール (デスクトップ環境・日本語化編)</a>
      </li>
    </ul>
  </div>
</div>