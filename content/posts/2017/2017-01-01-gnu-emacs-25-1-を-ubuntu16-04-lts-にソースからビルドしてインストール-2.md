---
author: admin
categories:
- Emacs
- 技術メモ
date: 2017-01-01T07:00:00+00:00
dsq_thread_id:
- 5.428244e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 1685
side:
- "y"
tags:
- Ubuntu
title: GNU Emacs 25.1 を Ubuntu16.04 LTS にソースからビルドしてインストールする
title_view:
- "y"
type: post
url: /archives/=6047
---

2016 年 9/17 に Emacs25.1 がリリースされたのですが、Ubuntu16.04 LTS で apt-get で Emacs を インストールすると、Emacs24.5 がインストールされてしまう。 

なので、ソースコードから Emacs25.1 をインストールすることにした。 

<div id="outline-container-org47c2e17" class="outline-2">
  <h2 id="org47c2e17">
    事前準備
  </h2>
  
  <div class="outline-text-2" id="text-org47c2e17">
    <p>
      以下のモジュールを入れておく。
    </p>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> sudo apt-get install build-essential checkinstall<br /> [/sourcecode]
    </p>
    
    <p>
      Emacs24 に依存するライブラリをインストールする。 Emacs 24 と 25 は、同じ依存関係を持っている。
    </p>
    
    <p>
      なお、デフォルトでは、build-dep ができないので、 以下を参考に設定を有効にする。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.hiroom2.com/2016/07/14/ubuntu-16-04-apt-source%E3%81%A7%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%99%E3%82%8B/">Ubuntu 16.04: apt source でソースコードをダウンロードする &#8211; Narrow Escape</a>
      </li>
    </ul>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> sudo su -c &#8220;grep &#8216;^deb &#8216; /etc/apt/sources.list | \<br /> sed &#8216;s/^deb/deb-src/g&#8217; > /etc/apt/sources.list.d/deb-src.list&#8221;
    </p>
    
    <p>
      sudo apt-get build-dep emacs24<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-orge46ba55" class="outline-2">
  <h2 id="orge46ba55">
    Emacs のインストール
  </h2>
  
  <div class="outline-text-2" id="text-orge46ba55">
  </div>
  
  <div id="outline-container-orge86a210" class="outline-3">
    <h3 id="orge86a210">
      ダウンロード
    </h3>
    
    <div class="outline-text-3" id="text-orge86a210">
      <p>
        GNU のページから Emacs のアーカイブをダウンロードして、解凍する。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://ftp.gnu.org/gnu/emacs/">https://ftp.gnu.org/gnu/emacs/</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> wget https://ftp.gnu.org/gnu/emacs/emacs-25.1.tar.gz<br /> tar xf emacs-25.1.tar.gz<br /> cd emacs-25.1<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-org74540f1" class="outline-3">
    <h3 id="org74540f1">
      ビルド
    </h3>
    
    <div class="outline-text-3" id="text-org74540f1">
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> ./configure</p> 
      
      <p>
        # エラーしたので以下を追加で入れた。<br /> sudo apt-get install libxpm-dev libjpeg-dev libgif-dev libtiff5-dev
      </p>
      
      <p>
        ./configure<br /> make<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-org8aa474e" class="outline-3">
    <h3 id="org8aa474e">
      インストール
    </h3>
    
    <div class="outline-text-3" id="text-org8aa474e">
      <p>
        sudo make install ではなくて、sudo checkinstall を使う。
      </p>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> sudo checkinstall<br /> [/sourcecode]
      </p>
      
      <p>
        deb パッケージが作成されて、インストールされる。emacs_25.1-1_amd64.deb
      </p>
    </div>
  </div>
  
  <div id="outline-container-orgc20b1d8" class="outline-3">
    <h3 id="orgc20b1d8">
      アンインストール
    </h3>
    
    <div class="outline-text-3" id="text-orgc20b1d8">
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> # sudo dpkg -r emacs-25<br /> [/sourcecode]
    </div>
  </div>
</div>

<div id="outline-container-org4e98d42" class="outline-2">
  <h2 id="org4e98d42">
    追記: 170102 もっとお手軽な方法
  </h2>
  
  <div class="outline-text-2" id="text-org4e98d42">
    <p>
      deb パッケージが配布されていた。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://askubuntu.com/questions/851633/emacs-25-on-ubuntu-16-10">apt &#8211; Emacs 25 on Ubuntu 16.10? &#8211; Ask Ubuntu</a>
      </li>
    </ul>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> sudo add-apt-repository ppa:kelleyk/emacs<br /> sudo apt-get update<br /> sudo apt-get install emacs25<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-org4c17b36" class="outline-2">
  <h2 id="org4c17b36">
    参考
  </h2>
  
  <div class="outline-text-2" id="text-org4c17b36">
    <ul class="org-ul">
      <li>
        <a href="https://www.shigemk2.com/entry/emacs_25_install_ubuntu">Emacs 25.1.1 をインストール(Ubuntu) &#8211; by shigemk2</a>
      </li>
      <li>
        <a href="https://chrisperkins.blogspot.jp/2011/07/building-emacs-24.html">Building Emacs 24</a>
      </li>
      <li>
        <a href="https://ubuntuhandbook.org/index.php/2016/09/install-gnu-emacs-25-1-in-ubuntu-16-04/">How to Install GNU Emacs 25.1 in Ubuntu 16.04 | UbuntuHandbook</a>
      </li>
      <li>
        <a href="https://www.hiroom2.com/2016/09/29/ubuntu-16-04-emacs%E3%82%92%E3%83%93%E3%83%AB%E3%83%89%E3%81%97%E3%81%A6%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8B/">Ubuntu 16.04: Emacs をビルドしてインストールする &#8211; Narrow Escape</a>
      </li>
    </ul>
  </div>
</div>