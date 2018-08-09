---
author: admin
categories:
- 技術メモ
date: 2014-10-13T10:00:00+00:00
dsq_thread_id:
- 3.724883e+09
excerpt: Linux と Windows で デュアルディスプレイをする
pvc_views:
- 2934
title: VNC Server を利用して Linux-Windows or iPad でデュアルディスプレイをする方法
type: post
url: /archives/=2647
---

<div id="outline-container-unnumbered-1" class="outline-2">
  <h2 id="unnumbered-1">
    引越しをした
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-1">
    <p>
      引越しをした.
    </p>
    
    <p>
      今までは, ずっと東京都民・市民だったけれども, これからは神奈川県民だ. こころのどこかでずっと東京の神奈川に対する優位性と差別意識を抱いてきたけれども, それも本日で改めねば!
    </p>
    
    <p>
      今まで利用していたデスクトップ PC だが, 4 年も利用していると起動が遅くて使いものにならなくなってきた.
    </p>
    
    <p>
      そこで, この使えない デスクトップ PC を , 現在メインで利用しているノート PC のサブディスプレイとして 利用できないかどうか, 調べてみた.
    </p>
  </div>
  
  <div id="outline-container-unnumbered-2" class="outline-3">
    <h3 id="unnumbered-2">
      Environment
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-2">
      <ul class="org-ul">
        <li>
          Main PC: Panasonic Let&#8217;s Note, ArchLinux
        </li>
        <li>
          Sub PC: Fujitsu ESPRIMO, Windows 7
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-3" class="outline-2">
  <h2 id="unnumbered-3">
    インストール
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-3">
    <p>
      以下の 2 つが必要なので, インストール.
    </p>
    
    <ul class="org-ul">
      <li>
        tigervnc
      </li>
      <li>
        x2vnc (AUR)
      </li>
    </ul>
    
    <p>
      [sourcecode language=&#8221;sh&#8221; title=&#8221;&#8221; ]<br /> % sudo pacman -S tigervnc<br /> % yaourt -S x2vnc<br /> [/sourcecode]
    </p>
  </div>
  
  <div id="outline-container-unnumbered-4" class="outline-3">
    <h3 id="unnumbered-4">
      Vncserver の起動
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-4">
      <p>
        vncserver の初回起動でパスワードが設定できるため, パスワード設定のために vncserver を起動.
      </p>
      
      <p>
        このパスワードは client からアクセスするときに必要.
      </p>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> % vncserver :1
      </p>
      
      <p>
        You will require a password to access your desktops.
      </p>
      
      <p>
        Password:<br /> Verify:
      </p>
      
      <p>
        New &#8216;localhost:1 (tsu-nera)&#8217; desktop is localhost:1
      </p>
      
      <p>
        Creating default startup script /home/tsu-nera/.vnc/xstartup<br /> Starting applications specified in /home/tsu-nera/.vnc/xstartup<br /> Log file is /home/tsu-nera/.vnc/localhost:1.log<br /> [/sourcecode]
      </p>
      
      <p>
        パスワード設定したら, 一旦 vncserver を停止する.
      </p>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> % vncserver -kill :1<br /> [/sourcecode]
      </p>
      
      <p>
        vncserver のスタートアップスクリプト ~/.vnc/xstartup を編集して, スタートアップで.xinitrc を利用するようにする.
      </p>
      
      <p>
        if [ -x /etc/X11/xinit/xinitrc ]; then の手前に以下のコードを追加.
      </p>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> if [ -f ~/.xinitrc ]; then<br /> exec sh ~/.xinitrc<br /> fi<br /> [/sourcecode]
      </p>
      
      <p>
        これで準備完了.以下のコマンドで起動.
      </p>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> vncserver :1 -alwaysshared<br /> [/sourcecode]
      </p>
      
      <p>
        vncserver は解像度や画面の大きさも設定できる. デフォルトでは, -depth 16 -geometry 1024&#215;768 が設定されている. -depth が解像度, -geometory が大きさ.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.obenri.com/_vnc/vnc_server2.html">https://www.obenri.com/_vnc/vnc_server2.html</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-5" class="outline-3">
    <h3 id="unnumbered-5">
      x2vnc の起動
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-5">
      <p>
        x2vnc は, ディスプレイ間でマウスやキーボード操作を共有するツール.
      </p>
      
      <p>
        以下のコマンドで起動する.
      </p>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> % x2vnc -shared -east localhost:1
      </p>
      
      <p>
        x2vnc: VNC server supports protocol version 3.8 (viewer 3.3)<br /> Password:
      </p>
      
      <p>
        x2vnc: VNC authentication succeeded<br /> x2vnc: Desktop name &#8220;localhost:1 (tsu-nera)&#8221;<br /> x2vnc: Connected to VNC server, using protocol version 3.3<br /> x2vnc: VNC server default format:<br /> screen[0] pos=1603<br /> Xinerama detected, x2vnc will use screen 1.<br /> x2vnc: pointer multiplier: 1.719312<br /> [/sourcecode]
      </p>
      
      <p>
        Password は vncserver に設定したもの.
      </p>
      
      <p>
        表示させたい位置をオプションで指定できる. [-north] [-south] [-east] [-west]
      </p>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-6" class="outline-2">
  <h2 id="unnumbered-6">
    VNC Viewer から接続
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-6">
  </div>
  
  <div id="outline-container-unnumbered-7" class="outline-3">
    <h3 id="unnumbered-7">
      ESPRIMO から接続
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-7">
      <p>
        ESPRIMO に VNC Viewer を入れて, アクセスする.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.realvnc.com/download/viewer/">https://www.realvnc.com/download/viewer/</a>
        </li>
      </ul>
      
      <p>
        Address の入力欄には &#8220;(IP アドレス):1&#8243;というように:1 をつける.
      </p>
      
      <div class="figure">
        <p>
          <img src="https://futurismo.biz/wp-content/uploads/wpid-IMG_3851.jpg" alt="IMG_3851.jpg" />
        </p></p>
      </div>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-8" class="outline-3">
    <h3 id="unnumbered-8">
      iPad からの接続
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-8">
      <p>
        クライアントを iPad にもできる. これで, 外出中もデュアルディスプレイ!
      </p>
      
      <p>
        iPad 用の VNC Client &#8220;VNC Viewer&#8221; を iPad にインストール.
      </p>
      
      <ul class="org-ul">
        <li>
          <p>
            <a href="https://itunes.apple.com/jp/app/vnc-viewer/id352019548?mt=8">iTunes の App Store で配信中の iPhone, iPod touch, iPad 用 VNC Viewer</a>
          </p>
          
          <p>
            AddressBook タブの右上にある + を押して, パソコンを登録する. Address の入力欄には &#8220;(IP アドレス):1&#8243;というように:1 をつける.
          </p>
        </li>
      </ul>
      
      <p>
        これで, iPad からも接続できた.
      </p>
      
      <div class="figure">
        <p>
          <img src="https://futurismo.biz/wp-content/uploads/wpid-IMG_3850.jpg" alt="IMG_3850.jpg" />
        </p></p>
      </div>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-9" class="outline-3">
    <h3 id="unnumbered-9">
      Special Thanks
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-9">
      <ul class="org-ul">
        <li>
          <a href="https://d.hatena.ne.jp/kiwanami/20110514/1305388379">Linux で iPad をセカンドモニターにする &#8211; 技術日記＠ kiwanami</a>
        </li>
        <li>
          <a href="https://wiki.archlinux.org/index.php/Vncserver_(%E6%97%A5%E6%9C%AC%E8%AA%9E)">Vncserver (日本語) &#8211; ArchWiki</a>
        </li>
        <li>
          <a href="https://pocke.hatenablog.com/entry/2014/01/18/155859">Android タブレットを Linux のディスプレイにしよう &#8211; pockestrap</a>
        </li>
        <li>
          <a href="https://nosada.hatenablog.com/entry/2012/09/11/144300">VNC を使って Android 端末をサブディスプレイにする &#8211; テクニカルプア</a>
        </li>
      </ul>
    </div>
  </div>
</div>