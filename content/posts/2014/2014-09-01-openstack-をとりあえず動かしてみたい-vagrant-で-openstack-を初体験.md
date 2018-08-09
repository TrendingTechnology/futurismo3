---
author: admin
categories:
- 技術メモ
date: 2014-08-31T15:42:00+00:00
dsq_thread_id:
- 3.7279127e+09
excerpt: 公開されている vagrant box で OpenStack を動かす
pvc_views:
- 4865
tags:
- OpenStack
- vagrant
title: OpenStack をとりあえず動かしてみたい! vagrant で OpenStack を初体験したメモ
type: post
url: /archives/=2604
---

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      最近とみに OpenStack という単語をきくようになった.
    </p>
    
    <p>
      OpenStack がなんなのか知らないと, 何だか日本人なのに納豆がきらいといって白々しい目で見られるような, 子供にそのうち石をなげられるような惨めさを感じる.
    </p>
    
    <p>
      というわけで, OpenStack について調べ, さらにはインストールしてみる.
    </p>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    OpenStack とは
  </h2>
  
  <div class="outline-text-2" id="text-2">
    まずは, OpenStack とはなにか, しらべてみた.</p> 
    
    <ul class="org-ul">
      <li>
        <a href="https://www.openstack.org/">https://www.openstack.org/</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      OpenStack の特徴
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <ul class="org-ul">
        <li>
          オープンソースで構成されるクラウド・インフラストラクチャー.
        </li>
        <li>
          クラウドに・インフラに関わるすべてのことが, 共通化されて自動化される.
        </li>
        <li>
          バイナリの API ではなく Web API で呼び出せるため, それぞれは独立性が担保され, 柔軟で開発しやすく使いやすい.
        </li>
        <li>
          Apache ライセンスを採用.
        </li>
        <li>
          IBM や HP など, 大企業が開発を牽引している.
        </li>
        <li>
          AWS クラウド コンピューティングに対するロックイン回避
        </li>
      </ul>
    </div>
    
    <div id="outline-container-sec-2-1-1" class="outline-4">
      <h4 id="sec-2-1-1">
        20 年前の Linux のような存在
      </h4>
      
      <div class="outline-text-4" id="text-2-1-1">
        <p>
          Linux は OpenStack のように, オープンソースであることによって, 早い成長を遂げている.しかし, Linux とおなじではない.
        </p>
        
        <ul class="org-ul">
          <li>
            草の根 vs 大企業: Linux はコミュニティが作り, その後ベンダーに採用されたテクノロジ.
          </li>
        </ul>
        
        <p>
          OpenStack は商業的なプロジェクトで, その後コミュニティに公開されたもの.
        </p>
        
        <p>
          <a href="https://jp.linux.com/news/linuxcom-exclusive/406215-lco201307029">リアリティ チェック: Openstack は第二の Linux ではない</a>
        </p>
      </div>
    </div>
    
    <div id="outline-container-sec-2-1-2" class="outline-4">
      <h4 id="sec-2-1-2">
        参考
      </h4>
      
      <div class="outline-text-4" id="text-2-1-2">
        <ul class="org-ul">
          <li>
            <a href="https://ja.wikipedia.org/wiki/OpenStack">OpenStack &#8211; Wikipedia</a>
          </li>
          <li>
            <a href="https://www.atmarkit.co.jp/ait/articles/1406/10/news039.html">NEC の柴田氏に聞く:OpenStack はなぜこれまで成功してきたのか &#8211; ＠ IT</a>
          </li>
          <li>
            <a href="https://itpro.nikkeibp.co.jp/article/Keyword/20121029/433321/">Network キーワード &#8211; OpenStack とは:ITpro</a>
          </li>
          <li>
            <a href="https://cloud.watch.impress.co.jp/docs/column/cloud/20140404_642748.html">【クラウド特捜部】プレーヤーがそろい表舞台に立つ OpenStack &#8211; クラウド Watch</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      OpenStack のアーキテクチャ
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      複数のサービスコンポーネントが Web ベースの RestAPI でつながっている. 詳細は, 別ページ参照.</p> 
      
      <ul class="org-ul">
        <li>
          <a href="https://thinkit.co.jp/story/2014/06/10/4999">OpenStack のアーキテクチャを理解しよう | Think IT (シンクイット)</a>
        </li>
        <li>
          <a href="https://docs.openstack.org/ja/trunk/install-guide/install/apt-debian/content/ch_overview.html">第 1 章 アーキテクチャー &#8211; OpenStack インストールガイド Debian 7.0 (Wheezy) 版 &#8211; juno</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    OpenStack のインストール方法
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      OpenStack のインストール方法はいろいろあるようだ.
    </p>
    
    <p>
      公式ページのインストール方法.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://docs.openstack.org/ja/">OpenStack Docs: Japanese</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-3-1" class="outline-3">
    <h3 id="sec-3-1">
      DevStack
    </h3>
    
    <div class="outline-text-3" id="text-3-1">
      簡単にインストールするためには, DevStack というものが有名なようだ.</p> 
      
      <ul class="org-ul">
        <li>
          <a href="https://devstack.org/">DevStack &#8211; Deploying OpenStack for Developers</a>
        </li>
        <li>
          <a href="https://www.ospn.jp/press/20120828no27-useit-oss.html"> 「オープンソース」を使ってみよう (第 23 回 DevStack でラクラク導入!</a>
        </li>
        <li>
          <a href="https://momijiame.tumblr.com/post/80665373356/vagrant-devstack-openstack">Vagrant と DevStack で OpenStack をサクッと試す | CUBE SUGAR STORAGE</a>
        </li>
        <li>
          <a href="https://github.com/openstack-dev/devstack.git">https://github.com/openstack-dev/devstack.git</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-3-2" class="outline-3">
    <h3 id="sec-3-2">
      RDO
    </h3>
    
    <div class="outline-text-3" id="text-3-2">
      Linux ディストリビューションを VM 上に入れるという方法もある. RedHat が出している RDO というツールもある.</p> 
      
      <ul class="org-ul">
        <li>
          <a href="https://openstack.redhat.com/Main_Page">RDO</a>
        </li>
        <li>
          <a href="https://momijiame.tumblr.com/post/80582413671/vagrant-rdo-openstack">Vagrant と RDO で OpenStack をサクッと試す | CUBE SUGAR STORAGE</a>
        </li>
        <li>
          <a href="https://www.atmarkit.co.jp/ait/articles/1311/06/news004_2.html">Havana 登場! 何が変わった?/DevStack で Havana を試すには? (2/3) &#8211; ＠ IT</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-3-3" class="outline-3">
    <h3 id="sec-3-3">
      VMware Integrated OpenStack
    </h3>
    
    <div class="outline-text-3" id="text-3-3">
      VMware も ディストリを出す予定らしい.</p> 
      
      <ul class="org-ul">
        <li>
          <a href="https://www.vmware.com/products/openstack">VMware Integrated OpenStack (Beta) | United States</a>
        </li>
        <li>
          <a href="https://www.atmarkit.co.jp/ait/articles/1408/26/news127.html">「 OpenStack の本質は API 」:OpenStack ディストリビューションを発表, ヴイエムウェアは何を考えているか &#8211; ＠ IT</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-3-4" class="outline-3">
    <h3 id="sec-3-4">
      docker
    </h3>
    
    <div class="outline-text-3" id="text-3-4">
      docker のなかに devstack がはいっているという ちなみに, 自分の環境ではインストールできなかった.</p> 
      
      <ul class="org-ul">
        <li>
          <a href="https://registry.hub.docker.com/u/ewindisch/dockenstack/">https://registry.hub.docker.com/u/ewindisch/dockenstack/</a>
        </li>
        <li>
          <a href="https://github.com/ewindisch/dockenstack">https://github.com/ewindisch/dockenstack</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    vagrant-openstack にきめた
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      いろいろ試してみた (正確に表現すると, 失敗してみた) 結果, vagrant をつかうことにした.
    </p>
    
    <p>
      vagrant ってなにってひとは, 過去記事を参照のこと.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/1651">vagrant がスゲエ! コマンドラインから VirtualBox を自由自在に操る方法 | Futurismo</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-4-1" class="outline-3">
    <h3 id="sec-4-1">
      environment
    </h3>
    
    <div class="outline-text-3" id="text-4-1">
      <ul class="org-ul">
        <li>
          archlinux
        </li>
        <li>
          vagrant 1.6.3
        </li>
        <li>
          virtualBox 4.3
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-4-2" class="outline-3">
    <h3 id="sec-4-2">
      手順
    </h3>
    
    <div class="outline-text-3" id="text-4-2">
      <p>
        以下の記事から vagrant box があることを知ったので, それを利用する.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://qiita.com/takuan_osho/items/7f571fb35d282251e5e7">OpenStack 初心者でも Vagrant を使って OpenStack を体験する方法 &#8211; Qiita</a>
        </li>
        <li>
          <a href="https://github.com/TelekomLabs/vagrant-devstack">TelekomLabs/vagrant-devstack</a>
        </li>
      </ul>
      
      <p>
        github の README にしたがえば, vagrant up して, お茶を飲めと書いてある. 茶どころか, 回線速度が貧弱なので 1 時間くらいかかって, 喫茶店が閉店時間になって追い出されたのだが・・・ (_&#8217;Д`)
      </p>
      
      <p>
        [sourcecode language=&#8221;sh&#8221; title=&#8221;&#8221;]<br /> git clone https://github.com/TelekomLabs/vagrant-devstack.git<br /> cd vagrant-devstack<br /> vagrant up<br /> [/sourcecode]
      </p>
      
      <p>
        <a href="https://192.168.50.10/">https://192.168.50.10/</a> にアクセスして, user: admin/ password: devstack でログイン.
      </p>
      
      <div class="figure">
        <p>
          <img src="https://futurismo.biz/wp-content/uploads/wpid-2014-09-01-003629_632x482_scrot.png" alt="2014-09-01-003629_632x482_scrot.png" />
        </p></p>
      </div>
    </div>
  </div>
</div>

<div id="outline-container-sec-5" class="outline-2">
  <h2 id="sec-5">
    OpenStack で開発する
  </h2>
  
  <div class="outline-text-2" id="text-5">
    <p>
      以下はブックマーク.
    </p>
    
    <p>
      github リポジトリは以下.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/openstack">https://github.com/openstack</a>
      </li>
    </ul>
    
    <p>
      開発に参加するための手引きがまとまっている.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://wiki.openstack.org/wiki/DevQuickstart/ja">DevQuickstart/ja &#8211; OpenStack</a>
      </li>
    </ul>
    
    <p>
      開発やバグ管理は launchpad で実施されているようだ.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://launchpad.net/openstack">https://launchpad.net/openstack</a>
      </li>
    </ul>
    
    <p>
      開発のための API や SDK とそのドキュメント.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://developer.openstack.org/"> Documentation >> Application Development</a>
      </li>
    </ul>
  </div>
</div>