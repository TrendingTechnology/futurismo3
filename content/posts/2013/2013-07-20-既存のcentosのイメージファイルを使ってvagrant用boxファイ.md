---
author: admin
categories:
- 技術メモ
date: 2013-07-20T11:48:01+00:00
dsq_thread_id:
- 3.7278167e+09
excerpt: 既存のvmをbox化する方法がワカラなかったので、自分でvargrant用boxを作成する方法を調べました。
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 5275
tags:
- CentOS
- vagrant
- VirtualBox
title: 既存のCentOSのイメージファイルを使ってvagrant用boxファイルを作ったメモ
type: post
url: /archives/=1678
---

既存のvmをbox化する方法がワカラなかったので、自分でvargrant用boxを作成する方法を調べました。

ネットからisoを落としててきてカスタマイズするのは、veeweeやpackerといったツールがあるみたいだけれども、今回はあくまで既存のvmイメージをなんとかする。

公式サイトによると、以下の設定が必要

  * VirtualBox Guest Additionsのインストール(ファイル共有、ポートフォワードのため)
  * SSH の設定
  * Ruby & RubyGemsインストール（Chef and Puppetをインストールするため）
  * Chef and Puppet インストール（プロビジョニングのため）

ちなみに、一番参考になったのは、以下のサイト

  * <a href="https://cbednarski.com/articles/creating-vagrant-base-box-for-centos-62/" target="_blank">Creating a CentOS 6.2 Base Box for Vagrant 1.1 &#8211; Chris Bednarski</a>

[toc]

### 事前準備

使うのは、もともともっている自分のvmです。こんな歴史のCentOS 6.4 minimal構成。

  * [CentOSを最小構成(minimal)でVMware Playerにインストールした | Futurismo][1]
  * [Windows上のCentOSをVmwarePlayerからVirtualBoxへ移行した手順 | Futurismo][2]

### VMの設定

#### rootパスワードをvargrantにする

root権限になって、変更

    su
    vagrant
    

#### vagrantユーザを作成する

vagrant userを追加して、adminグループに入れる。

    useradd vagrant
    passwd vagrant
    groupadd admin
    usermod -G admin -a vagrant
    

### Permission設定

adminグループにパスワードなしで、sudoできるようにする。

    visudo
    

以下を末尾に追記
      
vagrant ALL=(ALL) ALL
      
%admin ALL=(ALL) NOPASSWD:ALL
      
Defaults env\_keep=&#8221;SSH\_AUTH_SOCK&#8221;

requirettyの先頭に!をつける。

    Default !requiretty
    

これをしないと、起動時にこんなエラーが出た。

    [default] -- /vagrant
    The following SSH command responded with a non-zero exit status.
    Vagrant assumes that this means the command failed!
    
    mkdir -p /vagrant
    

### VirtualBox Guest Additionsのインストール

ファイル共有やポートフォワーディングを利用するために、virtualbox guest additionをインストールする。

VirtualBox の [デバイス]-[GuestAdditionインストール]を選択してダウンロード。ダウンロードされたら、ファイルをマウントしてファイルを取り出す。

    mkdir /mnt/cdrom
    mount -r /dev/cdrom1 /mnt/cdrom
    cd /mnt/cdrom/
    

VBoxLinuxAdditions.runというファイルがあるので、これを実行。

    # 念のため
    yum -y install gcc kernel-devel
    sh VBoxLinuxAdditions.run
    

CentOSだとエラーしたけど、構わずReboot

    Installing the Window System drivers     [FAILED]
    

これはエラーしても問題はない。以下のコマンドでインストールできたことを確認する。

    VBoxControl --version
    VBoxService --version
    

インストールが終わったら、CentOSを再起動する。

### ソフトウェアのインストール

以下の５つが必要。

  * Ruby &#8211; Use the dev package so mkmf is present for Chef to compile
  * RubyGems &#8211; To install the Chef gem
  * Puppet &#8211; To install Puppet (also ensure that a ‘puppet’ group is present!)
  * Chef gem &#8211; For provisioning support (gem install chef)
  * SSH

#### Ruby & RubyGemを入れる

    yum -y install ruby rubygems
    

#### Chef,Puppetのインストール

プロビジョニングのためにChefを入れる

    gem install chef --no-ri --no-rdoc
    // puppetはいらないかも
    gem install puppet --no-ri --no-rdoc
    

### SSH設定

githubにSSHのためのキーがおいてある。

  * <a href="https://github.com/mitchellh/vagrant/tree/master/keys/" target="_blank">vagrant/keys at master · mitchellh/vagrant</a>

自分でつかうだけならば、この鍵をつかう。boxを公開するきは、自分で鍵を作成する。

vagrantユーザになって、

    　mkdir .ssh
     cd 　.ssh
     curl 'https://raw.github.com/mitchellh/vagrant/master/keys/vagrant.pub' > authorized_keys
     chmod 0755 .ssh
     chmod 0644 .ssh/authorized_keys
    

これを叩くとssh高速化するらしい

    echo 'UseDNS no' >> /etc/ssh/sshd_config
    

### パッケージ作成

不要なファイルはできるだけ、パッケージ化前に削除しておくこと。

    yum clean all
    

VMの電源を一旦OFFにする。

vagrant package でパッケージを作成する。

    vagrant package --base "C:\home\TSUNEMICHI\VirtualBox VMs\Saru\Saru.vbox"
    

package.boxが作成される。（けっこう時間かかる）

### 作成できたか確認

実際に、boxをつかってみて、ちゃっとできたか確かめる。

    vagrant box add my_box package.box
    mkdir test_environment
    cd test_environment
    vagrant init my_box
    vagrant up
    vagrant ssh
    

接続できればOK.接続できなければ、sshの設定が怪しい。

共有フォルダの設定も確認。

    touch test
    vagrant ssh
    less /vagrant
    

#### 参考

  * <a href="https://d.hatena.ne.jp/okinaka/20110805/1312474847" target="_blank">Vagrant のベースBOX作成手順 (Scientific Linux 6.1) &#8211; エンジニアきまぐれTips</a>
  * <a href="https://qiita.com/amedama/items/459a9187a116ba90016c" target="_blank">Ubuntu 13.04 の vagrant 用 box を作る &#8211; Qiita [キータ]</a>
  * [Vagrant Documentation &#8211; Documentation &#8211; Base Boxes][3]
  * <a href="https://github.com/fespinoza/checklist_and_guides/wiki/Creating-a-vagrant-base-box-for-ubuntu-12.04-32bit-server" target="_blank">Creating a vagrant base box for ubuntu 12.04 32bit server · fespinoza/checklist_and_guides Wiki</a>
  * <a href="https://briceno.mx/2012/10/easy-guide-to-create-a-vagrant-box-from-virtualbox/" target="_blank">Easy and simple guide to create your own Vagrant box (Ubuntu-12.02-64 server bridged) from VirtualBox « Basilio Briceño</a>
  * <a href="https://blog.vandenbrand.org/2012/02/21/creating-a-centos-6-2-base-box-for-vagrant/" target="_blank">Creating a CentOS 6.2 base box for Vagrant | Ricbra&#8217;s Blog</a>

 [1]: https://futurismo.biz/archives/1330
 [2]: https://futurismo.biz/archives/1643
 [3]: https://docs-v1.vagrantup.com/v1/docs/base_boxes.html