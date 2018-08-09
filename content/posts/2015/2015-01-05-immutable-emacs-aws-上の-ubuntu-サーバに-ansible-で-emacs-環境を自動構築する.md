---
author: admin
categories:
- Emacs
- 技術メモ
date: 2015-01-04T15:00:00+00:00
dsq_thread_id:
- 3.7305055e+09
excerpt: AWS 上の Ubuntu サーバに ansible で Emacs 環境を自動構築する
pvc_views:
- 1457
tags:
- ansible
- AWS
- Ubuntu
- インフラ
title: Immutable Emacs! AWS 上の Ubuntu サーバに ansible で Emacs 環境を自動構築する
type: post
url: /archives/=2910
---

![][1]

<div id="outline-container-unnumbered-1" class="outline-2">
  <h2 id="unnumbered-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-1">
    <p>
      去年, Immutable Infrastructure という言葉を知った.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/2355">インフラ業界の気になるキーワードについて調べてみた | Futurismo</a>
      </li>
    </ul>
    
    <p>
      この概念を Emacs の管理に利用できないかなとという話.
    </p>
    
    <p>
      これをやろうと考えたのは, 去年の 6 月だった. この記事の延長が本記事.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/2492">実行可能なドキュメント生成!Ansible と Org-mode で実現する Run Book Automation (RBA) | Futurismo</a>
      </li>
    </ul>
    
    <p>
      なかなか時間がとれなくて, 結局半年後の冬休みにようやくできた.
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-2" class="outline-2">
  <h2 id="unnumbered-2">
    問題の分析
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-2">
  </div>
  
  <div id="outline-container-unnumbered-3" class="outline-3">
    <h3 id="unnumbered-3">
      問題
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-3">
      <p>
        Emacs を家でも会社でも利用している.以下が簡単な環境.
      </p>
      
      <ul class="org-ul">
        <li>
          自宅 <ul class="org-ul">
            <li>
              ArchLinux
            </li>
            <li>
              Widows 8 (GUI 版)
            </li>
          </ul>
        </li>
        
        <li>
          会社 <ul class="org-ul">
            <li>
              Widows 7 (GUI 版)
            </li>
            <li>
              Windows 7 (Cygwin 版)
            </li>
          </ul>
        </li>
      </ul>
      
      <p>
        設定を github にあげて, 設定を共有している. 会社で設定ファイルを更新するのは社内規程的に NG なので, いつもは以下のような運用.
      </p>
      
      <ul class="org-ul">
        <li>
          自宅で設定ファイルを git push
        </li>
        <li>
          会社で設定ファイルを git pull
        </li>
      </ul>
      
      <p>
        しかし, 自宅で設定したものが会社で動かなかったりすることがよくある.
      </p>
      
      <p>
        会社で Emacs の設定ファイルを更新した後は, 朝の 30 分は毎回 Emacs と戯れているのはここだけのないしょだ.
      </p>
      
      <p>
        しかし, 設定の同期作業も, 面倒なのでなんとか時間を短縮できないもの か&#x2026; というのが今回の解決したい問題.
      </p>
      
      <p>
        また, 1 年に 1 回 くらいの頻度で Emacs 環境を一から再構築することがある. このとき, Emacs の パッケージ管理は el-get を利用して管理しているので, 自動ですべてのパッケージを ネットから落としてきて動作するはず.
      </p>
      
      <p>
        しかし, 必ず el-get のダウンロードで失敗するパッケージがたくさんでる.
      </p>
      
      <p>
        会社だと, proxy という厄介なものがある. また, 設定の問題とは思うが, MELPA へアクセスできなく github からしか elisp を取得できない.
      </p>
      
      <p>
        まとめると,
      </p>
      
      <ul class="org-ul">
        <li>
          会社で Emacs の設定ファイルを更新したときに 起動時のエラーを発生させなくするためには?
        </li>
        <li>
          Emacs 環境を一から再構築するときに エラーを発生させなくするためには?
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-4" class="outline-3">
    <h3 id="unnumbered-4">
      課題
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-4">
      <p>
        よくあるあたふたケースは,
      </p>
      
      <ul class="org-ul">
        <li>
          自宅の Linux 環境で push したものを 会社の windows 環境で pull して動かなくなる.
        </li>
        <li>
          会社で pull をするのが怖いのでしばらく放置した後, 久しぶりに pull すると 大量のエラーが発生する.
        </li>
      </ul>
      
      <p>
        エラーがあっても放置してしまうのは, 頻繁に エラーの確認をしないから. それは面倒だからしない. エラーの確認作業を自動化できたらうれしい.
      </p>
      
      <p>
        ということで, 課題は以下.
      </p>
      
      <ul class="org-ul">
        <li>
          Linux 環境で push したら Windows 環境で pull してエラーチェックを する作業を自動化する.
        </li>
        <li>
          定期的に一から Emacs の設定を再構築する作業を自動化する.
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-5" class="outline-3">
    <h3 id="unnumbered-5">
      解決策
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-5">
      <p>
        この 自動でエラーをチェックするところを Immutable Infrastracture の概念と 組み合わせたらおもしろそうだと思った. 無駄な勉強にもなるし.
      </p>
    </div>
    
    <div id="outline-container-unnumbered-6" class="outline-4">
      <h4 id="unnumbered-6">
        Immutable Infrastructure とは
      </h4>
      
      <div class="outline-text-4" id="text-unnumbered-6">
        <p>
          簡単に調べてみた.
        </p>
        
        <p>
          一度サーバーを構築したらその後はサーバーのソフトウェアに変更を加えないこと.
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://ja.wikipedia.org/wiki/Immutable_Infrastructure">Immutable Infrastructure &#8211; Wikipedia</a>
          </li>
        </ul>
        
        <p>
          以下の説明がとてもわかりやすい.
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://www.publickey1.jp/blog/14/immutable_infrastructure_1.html">Immutable Infrastructure はアプリケーションのアーキテクチャを変えていく Publickey</a>
          </li>
        </ul>
        
        <blockquote>
          <p>
            Windows って調子が悪くなると再インストールしてすっきりさせるじゃないで すか. OS にいろんなソフトウェアをインストールしたりカスタマイズしたり すると調子が悪くなりますが, 再インストールすれば戻ります.
          </p>
          
          <p>
            だったら, そもそも毎回作り直せばシステムはすっきりするよね, というのが 簡単な Immutable Infrastructure の説明です.
          </p>
        </blockquote>
      </div>
    </div>
    
    <div id="outline-container-unnumbered-7" class="outline-4">
      <h4 id="unnumbered-7">
        Action Plan
      </h4>
      
      <div class="outline-text-4" id="text-unnumbered-7">
        <p>
          以下のようなアクションプランを考えた.
        </p>
        
        <ul class="org-ul">
          <li>
            AWS 上のサーバで Emacs 環境を構築する.
          </li>
          <li>
            AWS 上のサーバで エラチェックーを走らせる.
          </li>
          <li>
            チェックがおわったらサーバを破棄して終了.
          </li>
        </ul>
        
        <p>
          さらにこの手順の自動化ができたらいいけど, これは大変そうなので今度.
        </p>
        
        <ul class="org-ul">
          <li>
            git push したら AWS 上で動く サーバで エラチェックーを走らせる.
          </li>
          <li>
            毎週深夜に, Emacs 環境を自動で構築する.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-8" class="outline-2">
  <h2 id="unnumbered-8">
    解決へのとりくみ
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-8">
    <p>
      Windows 環境はなにかと難しいとおもったので, まずは, Linux 環境を構築することにした.
    </p>
    
    <p>
      というわけで, この記事のゴールは,
    </p>
    
    <p>
      <b>AWS 上に Emacs と自分の Emacs の設定を自動でインストールすること</b>
    </p>
    
    <p>
      名づけて,
    </p>
    
    <p>
      <b>Immutable Emacs!</b> 大作戦.
    </p>
    
    <p>
      響きがとても気に入った!
    </p>
  </div>
  
  <div id="outline-container-unnumbered-9" class="outline-3">
    <h3 id="unnumbered-9">
      AWS を借りる
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-9">
      <p>
        別記事に独立.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/2847">AWS の Amazon EC2 で Windows サーバを立ち上げて リモートデスクトップ接続してみた | Futurismo</a>
        </li>
      </ul>
      
      <p>
        ここでは, Ubuntu Server 14.04 LTS (HVM), SSD Volume Type をつかう.
      </p>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-10" class="outline-3">
    <h3 id="unnumbered-10">
      ansible で Amazon AWS に SSH 接続
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-10">
      <p>
        なれている, ansible を利用する.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/2490">自分のデスクトップ環境の歴史を記録する!ansible で設定ファイルをクラウド管理する方法 | Futurismo</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> mkdir -p ~/.emacs.d/playbook<br /> cd ~/.emacs.d/playbook<br /> echo &#8216;54.65.121.127&#8217; >> hosts<br /> [/sourcecode]
      </p>
      
      <p>
        以下の作業はすべて,~/.emacs.d/playbook で実施.
      </p>
      
      <p>
        ansible.cfg ファイルを作成.
      </p>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> [defaults]<br /> hostfile = ./hosts<br /> remote_user = ubuntu<br /> private_key_file = ~/.ssh/archlinux.pem<br /> host_key_checking = False<br /> [/sourcecode]
      </p>
      
      <p>
        ping する.
      </p>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> ansible all -m ping -i hosts<br /> [/sourcecode]
      </p>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> 54.64.58.11 | success >> {<br /> "changed": false,<br /> "ping": "pong"<br /> }<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-11" class="outline-2">
  <h2 id="unnumbered-11">
    ansible playbook
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-11">
    <p>
      org-mode で書いたものは, 以下のスクリプトで yaml に変換する.
    </p>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> #!/bin/sh<br /> # -*- mode: shell-script -*-<br /> #<br /> # tangle files with org-mode<br /> # see: https://orgmode.org/manual/Batch-execution.html<br /> #<br /> DIR=`pwd`<br /> FILE=""
    </p>
    
    <p>
      for i in $@; do<br /> # tangle org to yaml<br /> emacs -Q &#8211;batch &#8211;eval "(progn<br /> (add-to-list &#8216;load-path \"/usr/share/emacs/site-lisp/org\")<br /> (require &#8216;org) (require &#8216;ob) (require &#8216;ob-tangle)<br /> (setq org-src-preserve-indentation t)<br /> (find-file (expand-file-name \"$i\" \"$DIR\"))<br /> (org-babel-tangle)<br /> (kill-buffer))" 2>&1 | grep tangled
    </p>
    
    <p>
      # execute ansible command to yml file<br /> string_filename=${i##*/}<br /> string_filename_without_extension=${string_filename%.*}<br /> string_path=${i%/*}
    </p>
    
    <p>
      if test $string_filename = $i ; then<br /> ansible-playbook ${string_filename_without_extension}.yaml -i hosts<br /> else<br /> ansible-playbook ${string_path}/${string_filename_without_extension}.yaml -i hosts<br /> fi<br /> done<br /> [/sourcecode]
    </p>
    
    <p>
      ここからは実際の ansible playbook を書く.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/tsu-nera/dotfiles/blob/master/.emacs.d/playbook/amazon-aws-ubuntu.org">https://github.com/tsu-nera/dotfiles/blob/master/.emacs.d/playbook/amazon-aws-ubuntu.org</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-unnumbered-12" class="outline-3">
    <h3 id="unnumbered-12">
      ansible settig
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-12">
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> &#8212;<br /> &#8211; hosts: defaults<br /> sudo: yes<br /> vars:<br /> home_dir: /home/ubuntu<br /> emacs_dir: emacs<br /> dotfiles_dir: dotfiles<br /> tasks:<br /> [/sourcecode]
    </div>
  </div>
  
  <div id="outline-container-unnumbered-13" class="outline-3">
    <h3 id="unnumbered-13">
      initial tools
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-13">
      <ul class="org-ul">
        <li>
          libncurses5-dev は tputs error 対策
        </li>
        <li>
          gnutls-bin for el-get
        </li>
        <li>
          texinfo for makeinfo
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> &#8211; name: apt-get update<br /> command: apt-get update<br /> &#8211; name: apt-get install git<br /> apt: pkg=git<br /> &#8211; name: apt-get install build tools<br /> apt: pkg=build-essential,autoconf,automake,libncurses5-dev,gnutls-bin,texinfo<br /> [/sourcecode]
      </p>
    </div>
    
    <div id="outline-container-unnumbered-14" class="outline-4">
      <h4 id="unnumbered-14">
        bookmarks
      </h4>
      
      <div class="outline-text-4" id="text-unnumbered-14">
        <ul class="org-ul">
          <li>
            <a href="https://gihyo.jp/admin/serial/01/ubuntu-recipe/0235">第 235 回 Ubuntu 12.04 で Emacs 24.1 を使う:Ubuntu Weekly Recipe|gihyo.jp … 技術評論社</a>
          </li>
          <li>
            <a href="https://emacs.tsutomuonoda.com/emacs24-1-ubuntu-install/">Emacs24.1 を Ubuntu にインストールする | Emacs の elisp インストール・設定・使い方</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-15" class="outline-3">
    <h3 id="unnumbered-15">
      install emacs
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-15">
      <ul class="org-ul">
        <li>
          <p>
            <a href="https://qiita.com/seizans/items/f5f052aec1592c47767f">Ansible で git clone させる &#8211; Qiita</a>
          </p>
          
          <p>
            make -j オブションをつけたら, メモリ枯渇で make が停止した.
          </p>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> &#8211; name: get emacs from git repository<br /> git: repo=git://git.savannah.gnu.org/emacs.git dest={{home_dir}}/{{emacs_dir}} accept_hostkey=yes<br /> &#8211; name: make emacs configure file<br /> command: ./autogen.sh chdir={{home_dir}}/{{emacs_dir}}<br /> &#8211; name: make emacs Makefile<br /> command: ./configure &#8211;prefix=/usr/local &#8211;without-makeinfo &#8211;with-x-toolkit=no &#8211;without-all chdir={{home_dir}}/{{emacs_dir}}<br /> &#8211; name: make emacs<br /> command: make chdir={{home_dir}}/{{emacs_dir}}<br /> &#8211; name: install emacs<br /> command: make install chdir={{home_dir}}/{{emacs_dir}}<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-16" class="outline-3">
    <h3 id="unnumbered-16">
      install dotfiles
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-16">
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> &#8211; name: clone dotfiles<br /> git: repo=https://github.com/tsu-nera/dotfiles.git dest={{home_dir}}/{{dotfiles_dir}}<br /> &#8211; name: make lnlinks<br /> command: ./make_lnlink chdir={{home_dir}}/{{dotfiles_dir}}<br /> sudo: yes<br /> sudo_user: ubuntu<br /> [/sourcecode]
    </div>
  </div>
  
  <div id="outline-container-unnumbered-17" class="outline-3">
    <h3 id="unnumbered-17">
      install additinal tools for emacs
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-17">
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> &#8211; name: install additinal tools for pdf-tools<br /> apt: pkg=libpng-dev,libz-dev,libpoppler-glib-dev,libpoppler-private-dev<br /> &#8211; name: install additinal tools for magit<br /> apt: pkg=texinfo<br /> &#8211; name: install additinal tools for org2blog<br /> apt: pkg=bzr<br /> &#8211; name: install additinal tools for exectable-find<br /> apt: pkg=mercurial<br /> &#8211; name: install additinal tools for cmigemo<br /> apt: pkg=cmigemo<br /> &#8211; name: install additinal tools for ag<br /> apt: pkg=silversearcher-ag<br /> [/sourcecode]
    </div>
  </div>
  
  <div id="outline-container-unnumbered-18" class="outline-3">
    <h3 id="unnumbered-18">
      boot emacs
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-18">
      <p>
        Emacs の boot に, el-get を利用してパッケージを次々にダウンロードする.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/tsu-nera/dotfiles/blob/master/.emacs.d/inits/00_el-get.org">https://github.com/tsu-nera/dotfiles/blob/master/.emacs.d/inits/00_el-get.org</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> &#8211; name: boot emacs first<br /> command: emacs &#8211;daemon<br /> sudo: yes<br /> sudo_user: ubuntu<br /> # &#8211; name: reboot emacs<br /> # command: emacsclient -e &#8216;(progn (defun yes-or-no-p (p) t) (kill-emacs))&#8217; && emacs &#8211;daemon<br /> # command: emacs &#8211;daemon<br /> # sudo: yes<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-19" class="outline-2">
  <h2 id="unnumbered-19">
    おわりに
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-19">
    <p>
      これで AWS 上で動く Ubuntu サーバに Emacs をインストールすることができた.
    </p>
    
    <p>
      まだまだ, 改良の余地は大ありだ.まだ, スタート地点.
    </p>
    
    <p>
      dotfiles を育てるように, ansible のコードも育てていきたい.
    </p>
  </div>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/emacs_logo.jpg