---
author: admin
categories:
- Linux
- 技術メモ
date: 2013-07-14T23:06:55+00:00
dsq_thread_id:
- 3.702299e+09
excerpt: VirtualBoxをコマンドラインから操作することができるVagrantを使ってみました
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 9119
tags:
- CentOS
- cygwin
- vagrant
- VirtualBox
title: vagrantがスゲエ！コマンドラインからVirtualBoxを自由自在に操る方法
type: post
url: /archives/=1651
---

前回、VirtualBoxの導入をしました。

  * <a href="https://futurismo.biz/archives/1643" target="_blank">Windows上のCentOSをVmwarePlayerからVirtualBoxへ移行した手順 | Futurismo</a>

今回は、VirtualBoxをコマンドラインから操作することができるVagrantを使ってみようと思います。

![][1]

[toc]

#### 環境

  * VirtualBox 4.2
  * Vagrant 1.2.3
  * Windows 7 x64

### Vagrantとは

Vargrantとは、仮想環境をコマンドラインから操作することができる、オープンソースRubyスクリプトです。

  * <a href="https://www.vagrantup.com/" target="_blank">Vagrant</a>

VirtualBoxやVMware Fusion/VMware WorkBench、EC2をコマンドラインから操作できます。VMware Fusionは有料(4000円くらい？）なので、無料のVirtualBoxで試してみます。

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'>
  <div class='amazlink-list' style='clear: both;'>
    <div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'>
      <a href='https://www.amazon.co.jp/%E3%82%A2%E3%82%AF%E3%83%88%E3%83%BB%E3%83%84%E3%83%BC-VMware-Fusion-5/dp/B009316BXW%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB009316BXW' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/51hrN%2BOGmPL._SL160_.jpg' style='border: none;' /></a>
    </div>
    
    <div class='amazlink-info' style='height:160; margin-bottom: 10px'>
      <div class='amazlink-name' style='margin-bottom:10px;line-height:120%'>
        <a href='https://www.amazon.co.jp/%E3%82%A2%E3%82%AF%E3%83%88%E3%83%BB%E3%83%84%E3%83%BC-VMware-Fusion-5/dp/B009316BXW%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB009316BXW' rel='nofollow' target='_blank'>VMware Fusion 5</a>
      </div>
      
      <div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>
        posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 13.07.14
      </div>
      
      <p>
        <noscript>
          <a href='https://bust-up.gob.jp'>xn--cck2b5as2b7b</a>
        </noscript>
      </p>
      
      <div class='amazlink-detail'>
        アクト・ツー
      </div>
      
      <div class='amazlink-sub-info' style='float: left;'>
        <div class='amazlink-link' style='margin-top: 5px'>
          <img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18' /><a href='https://www.amazon.co.jp/%E3%82%A2%E3%82%AF%E3%83%88%E3%83%BB%E3%83%84%E3%83%BC-VMware-Fusion-5/dp/B009316BXW%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB009316BXW' rel='nofollow' target='_blank'>Amazon</a>
        </div>
      </div>
    </div>
  </div>
</div>

### Vagrantのインストール

最新版をサイトからとってきてインストールします。

  * <a href="https://downloads.vagrantup.com/" target="_blank">Vagrant &#8211; Downloads</a> 
      * Vagrant_1.2.3.msi

Windows番だとMINGWやRubyがまとめて梱包されていました(重い）。

#### Cygwinで Vagrantを利用するための設定

Cygwinから利用するためには、以下のおまじないが必要みたいです。

    dos2unix /cygdrive/c/HashiCorp/Vagrant/bin/vagrant
    

詳しくはココ。

  * <a href="https://russellcardullo.com/blog/2012/07/15/setting-up-chef-and-vagrant-on-windows-7-under-cygwin/" target="_blank">Setting up Chef and Vagrant on Windows 7 under Cygwin &#8211; russell.cardullo</a>

ちなみに，このページだと、.VirtualBoxフォルダがCygwinで実行した場合には、Cygwinホーム配下に作成されて、Windowsホーム配下のものと二重管理になるので、リンクを作成するといいよとかいてある。

自分の場合、特に不都合がでることはなかったが、念のため、以下も実施しておく。

コマンドプロンプトから管理者権限で、

    cd C:\Windows\system32
    mklink C:\cygwin\home\TSUNEMICHI\.VirtualBox C:\home\TSUNEMICHI\.VirtualBox
    mklink "C:\cygwin\home\TSUNEMICHI\VirtualBox VMs" "C:\home\TSUNEMICHI\VirtualBox VMs"
    

TSUNEMICHIの部分はユーザ名なので、適当に読み替えてください。

### Vagrantの使い方

ドキュメントはコチラ。

  * <a href="https://docs.vagrantup.com/v2/getting-started/index.html" target="_blank">Vagrant Documentation</a>

環境構築には、３コマンドで行けます。

    $ vagrant box add base https://files.vagrantup.com/lucid32.box
    $ vagrant init
    $ vagrant up
    

以下、詳細です。

#### boxファイルの作成

Vagrantを利用するためには、まずboxファイルというものを用意する必要がある。boxファイルの作成方法は、以下の２つがあるようだ。

  * テンプレートをネットから落としてくる方法
  * boxファイルを自作する方法

自作する方法はまた別の機会に調べることにして、まずはテンプレートからサクッとvagrantを試してみます。

以下のサイトで、様々なOSのISOにvagrant利用環境を整えたboxが配布されている。例えば、CentOS 6.4 minimal(VartualBox)は以下。

  * <a href="https://www.vagrantbox.es/" target="_blank">A list of base boxes for Vagrant &#8211; Vagrantbox.es</a> 
      * CentOS 6.4 x86_64 Minimal (VirtualBox Guest Additions 4.2.12, Chef 11.4.4, Puppet 3.1.1)

インストールは、以下のコマンドを実行。

    vagrant box add base https://developer.nrel.gov/downloads/vagrant-boxes/CentOS-6.4-x86_64-v20130427.box
    

IOSイメージをダウンロードしてくるので、メチャクチャ時間がかかります。気長に待つこと。

#### Vagrantの初期化

boxファイルが作成できたら、VMを管理するためのディレクトリをつくって、ディレクトリでvagrantが動作するように初期化します。

    % mkdir centos
    % cd centos
    % vagrant init　base
    A `Vagrantfile` has been placed in this directory. You are now
    ready to `vagrant up` your first virtual environment! Please read
    the comments in the Vagrantfile as well as documentation on
    `vagrantup.com` for more information on using Vagrant.
    

Vagrantfileが作成されます。

#### Vagrantの実行

いよいよ、vagrant実行です。コマンド数は少ないですが、ダウンロード時間でけっこうここに来るまで時間がかかった。。orz

いざ、実行！！( ´･∀･｀)ノ

    % vagrant up
    Bringing machine 'default' up with 'virtualbox' provider...
    [default] Importing base box 'base'...
     [0K[default] Matching MAC address for NAT networking...
    [default] Setting the name of the VM...
    [default] Clearing any previously set forwarded ports...
    [default] Creating shared folders metadata...
    [default] Clearing any previously set network interfaces...
    [default] Preparing network interfaces based on configuration...
    [default] Forwarding ports...
    [default] -- 22 => 2222 (adapter 1)
    [default] Booting VM...
    [default] Waiting for VM to boot. This can take a few minutes.
    

ここで起動が止まってしまった。。。いろいろと苦労してBIOSのvt-d設定を有効化したら、起動できた！

  * <a href="https://futurismo.biz/archives/1647" target="_blank">仮想化支援機構(VT-x/AMD-V)を有効化できません | Futurismo</a>

VirtualBoxを見ると、起動中となっていることがわかります。ホントにコマンドラインから起動できた！！
  
</br>

[<img src="https://lh6.googleusercontent.com/-SAtGevHGN18/UeKizN8fd4I/AAAAAAAAApc/AA1hV-5NYsQ/s400/SnapCrab_Oracle%2520VM%2520VirtualBox%2520%25E3%2583%259E%25E3%2583%258D%25E3%2583%25BC%25E3%2582%25B8%25E3%2583%25A3%25E3%2583%25BC_2013-7-14_22-2-21_No-00.png" height="291" width="400" />][2]

#### vagrantの基本コマンド

コマンドの使い方はヘルプから確認できます。
      
$ vagrant -h
      
Usage: vagrant \[-v\] \[-h\] command [<args>]

        -v, --version                    Print the version and exit.
        -h, --help                       Print this help.
    
    Available subcommands:
         box
         destroy
         halt
         init
         package
         plugin
         provision
         reload
         resume
         ssh
         ssh-config
         status
         suspend
         up
    

基本コマンドは以下。

  * vagrant init vagrant 初期化(Vagrantfile作成)
  * vagrant up vagrant 起動
  * vagrant ssh vagrant ログイン
  * vagrant halt vagrant 終了

ログイン

    $ vagrant ssh
    Last login: Sun Jul 14 21:24:25 2013
    Welcome to your Vagrant-built virtual machine.
    [vagrant@localhost ~]$
    

vagrant 終了(一時停止）

    $ vagrant halt
    [default] Attempting graceful shutdown of VM...
    

コマンド数も少ないので、簡単に覚えられますね。動画も載せておきます。

[//www.youtube.com/embed/Pj8aEvXfaW8?rel=0]

#### 容量は・・・

ちなにみ、気になる体重・・・じゃなかった、容量ですが、CentOS minimal構成でどのくらいになるのか、調べました。

vagrant initを実行したフォルダの容量を調べたら、4.51 KB・・・あれ？(´･д･｀)

Boxファイルは、以下にありました。

    $HOME/.vagrant.d/boxes/(ボックス名)/virtualbox/box-disk1.vmdk
    

容量は、524MB。軽い軽い。

そして、VMイメージですが、以下にありました。

    C:\home\TSUNEMICHI\VirtualBox VMs
    

容量は、1.5GB。ふふふ、重い重い。

ちなみに、Boxファイルからではなく、普通にCentOS6.4 minimal構成のISOをインストールした場合の容量は、157MBだ。桁が1つ違う。。。

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'>
  <div class='amazlink-list' style='clear: both;'>
    <div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'>
      <a href='https://www.amazon.co.jp/Vagrant-Up-and-Running-ebook/dp/B00D3VH4IO%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00D3VH4IO' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/51MWELjJC4L._SL160_.jpg' style='border: none;' /></a>
    </div>
    
    <div class='amazlink-info' style='height:160; margin-bottom: 10px'>
      <div class='amazlink-name' style='margin-bottom:10px;line-height:120%'>
        <a href='https://www.amazon.co.jp/Vagrant-Up-and-Running-ebook/dp/B00D3VH4IO%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00D3VH4IO' rel='nofollow' target='_blank'>Vagrant: Up and Running</a>
      </div>
      
      <div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>
        posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 13.07.15
      </div>
      
      <p>
        <noscript>
          <a href='https://bust-up.gob.jp'>xn--cck2b5as2b7b</a>
        </noscript>
      </p>
      
      <div class='amazlink-detail'>
        Mitchell Hashimoto
      </div>
      
      <div class='amazlink-sub-info' style='float: left;'>
        <div class='amazlink-link' style='margin-top: 5px'>
          <img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18' /><a href='https://www.amazon.co.jp/Vagrant-Up-and-Running-ebook/dp/B00D3VH4IO%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00D3VH4IO' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18' /><a href='https://hb.afl.rakuten.co.jp/hgc/g00reb44.n763w26d.g00reb44.n763x91f/archives/c=http%3A%2F%2Fitem.rakuten.co.jp%2Frakutenkobo-ebooks%2F74cb2fff67524370abcb9b045d4c0361%2F&#038;m=http%3A%2F%2Fm.rakuten.co.jp%2Frakutenkobo-ebooks%2Fi%2F11439066%2F' rel='nofollow' target='_blank'>楽天</a>
        </div>
      </div>
    </div>
  </div>
</div>

 [1]: https://lh6.ggpht.com/-mgngaHujv20/UeJ8Oa7KhgI/AAAAAAAAAo8/BNLXQtvbkhI/SnapCrab_NoName_2013-7-14_19-23-34_No-00.jpg
 [2]: https://picasaweb.google.com/lh/photo/qkPzyJ_ja3NOdqXbqodlQzyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite