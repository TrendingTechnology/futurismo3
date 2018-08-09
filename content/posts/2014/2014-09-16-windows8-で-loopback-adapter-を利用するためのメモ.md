---
author: admin
categories:
- 技術メモ
date: 2014-09-16T12:40:00+00:00
dsq_thread_id:
- 3.7294461e+09
excerpt: Windows8 で Loopback Adapter を利用するためのメモ
pvc_views:
- 7588
tags:
- Network
- Windows
title: Windows8 で Loopback Adapter を利用するためのメモ
type: post
url: /archives/=2619
---

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      仕事では, windows 環境でネットワークの開発をしている.
    </p>
    
    <p>
      開発用には ローカルホストがあると便利だけれども, Windows では Linux のように簡単にはローカルホストを利用できなかった.
    </p>
    
    <p>
      LoopBack Adapter というものを利用するとよいことを知ったので, 導入手順をメモします.
    </p>
    
    <p>
      WireShark で LoopBack Adapter をみる方法もメモします.
    </p>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      Environment
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <ul class="org-ul">
        <li>
          Windows8
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    Loopback Adapter とは
  </h2>
  
  <div class="outline-text-2" id="text-2">
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      Loopback とは
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <p>
        ip アドレスは必ずしもリモートホストと関連付けられている必要はない. 得に開発環境では, ローカルな IP アドレスが役に立つ.
      </p>
      
      <p>
        自端末に対して通信することを LoopBack という. LoopBack で指定するアドレスを Loopback Address という.
      </p>
      
      <ul class="org-ul">
        <li>
          ハードウェアと関係ない, 論理的なインタフェース.
        </li>
        <li>
          Linux では, localhost と言われている. IP は 127.0.0.1
        </li>
      </ul>
      
      <p>
        <a href="https://e-words.jp/w/E383ABE383BCE38397E38390E38383E382AF.html">ループバックとは 〔 ローカルループバック 〕</a>
      </p>
    </div>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      Windows LoopBack Adapter とは
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <p>
        Windows で Loopback Address を利用するためのアダプター. Microsoft から無料で提供されている.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://support.microsoft.com/kb/236869/ja">Microsoft Loopback Adapter をインストールする方法</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    Loopback Adapter をインストールする
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      以下のページに画像付きの手順があるので参考にした.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://blogs.yahoo.co.jp/akio_myau/45048512.html">Windows 8 Loopback アダプターを設定する &#8211; みゃうのリカバリーをする前に &#8211; Yahoo! ブログ</a>
      </li>
    </ul>
    
    <p>
      Windows7 とほぼ手順はおなじだけれども, インストールする際の名称が Microsoft KM-TEST Loopback Adapter だった.
    </p>
  </div>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    Loopback Adapter を設定する
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      以下のページに画像付きの手順があるので参考にした.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://mizupc8.bio.mie-u.ac.jp/pukiwiki/index.php?TIPS/MS%20Windows/015">TIPS/MS Windows/015 &#8211; PukiWiki</a>
      </li>
    </ul>
    
    <p>
      IP はとりあえず以下を利用.
    </p>
    
    <ul class="org-ul">
      <li>
        ip: 10.0.0.2
      </li>
      <li>
        subnet: 255.255.255.0
      </li>
      <li>
        gateway: 10.0.0.1
      </li>
      <li>
        DNS: 127.0.0.1
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-sec-5" class="outline-2">
  <h2 id="sec-5">
    WireShark でパケットキャプチャーする
  </h2>
  
  <div class="outline-text-2" id="text-5">
    <p>
      WireShark Wiki ページによると, 3 つの方法があるようだ.
    </p>
    
    <ul class="org-ul">
      <li>
        route add
      </li>
      <li>
        Proxocket
      </li>
      <li>
        RawCap
      </li>
    </ul>
    
    <p>
      <a href="https://wiki.wireshark.org/CaptureSetup/Loopback">CaptureSetup/Loopback &#8211; The Wireshark Wiki</a>
    </p>
    
    <p>
      結論としては, RawCap がうまくいった.
    </p>
  </div>
  
  <div id="outline-container-sec-5-1" class="outline-3">
    <h3 id="sec-5-1">
      ローカルマシンに route add する方法
    </h3>
    
    <div class="outline-text-3" id="text-5-1">
      <p>
        Add a route to your local machine going through the network gateway
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> route add <your_IP> mask 255.255.255.255 <the_gateway> metric 1<br /> [/sourcecode]
      </p>
      
      <p>
        自分の環境で頑張ってみたのだが, どうも動かなかった. Gateway の設定が違う気がするが&#x2026;
      </p>
      
      <p>
        以下の記事によると, Loopback Adapter より先に WireShark を インストールしていた場合は, WireShark の再インストールが必要?
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://stackoverflow.com/questions/5847168/wireshark-localhost-traffic-capture">Wireshark localhost traffic capture &#8211; Stack Overflow</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-5-2" class="outline-3">
    <h3 id="sec-5-2">
      Proxocket をつかう方法
    </h3>
    
    <div class="outline-text-3" id="text-5-2">
      <p>
        Proxocket という dll を キャプチャしたいアプリと同じフォルダにいれて おくと, パケットキャプチャできるらしい. これは自分は未検証.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.netresec.com/archives/age=Blog&#038;month=2011-01&#038;post=Proxocket---A-Winsock-Proxy-Sniffer">Proxocket &#8211; A Winsock Proxy Sniffer &#8211; NETRESEC Blog</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-5-3" class="outline-3">
    <h3 id="sec-5-3">
      RawCap
    </h3>
    
    <div class="outline-text-3" id="text-5-3">
      <p>
        唯一うまくいった方法.RawCap というツールを使う.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.netresec.com/archives/age=RawCap">RawCap &#8211; A raw socket sniffer for Windows</a>
        </li>
      </ul>
      
      <p>
        使い方は簡単. ダブルクリックで起動して, キャプチャしたいインタフェースを選択するだけ.
      </p>
      
      <p>
        キャプチャを終了するときには, Ctrl+C で終了させる. pcap 形式のファイ ルが作成されるため, これを wireshark で開けばよい.
      </p>
      
      <div class="figure">
        <p>
          <img src="https://futurismo.biz/wp-content/uploads/wpid-SnapCrab_NoName_2014-9-16_12-31-47_No-00.png" alt="SnapCrab_NoName_2014-9-16_12-31-47_No-00.png" />
        </p></p>
      </div>
    </div>
  </div>
</div>