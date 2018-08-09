---
author: admin
categories:
- 技術メモ
date: 2014-05-10T03:51:00+00:00
dsq_thread_id:
- 3.7729382e+09
excerpt: Software Defined Infrastructureに関するブックマークです
pvc_views:
- 2157
tags:
- インフラ
- クラウド
title: Software Defined Infrastructureに関するブックマーク
type: post
url: /archives/=2435
---

Software Defined Storageという用語を知りました。 この用語に関して調べたブックマークメモです。 

たったひとつのキーワードからどんどん世界が広がっていき、 調べるのがとても楽しく、またSoftware Defiedの動向に驚いている。 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    Software Defined xxx とは
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      ソフトウェアを中心としたインフラ構築のビジョン。
    </p>
    
    <blockquote>
      <p>
        Software-defined data center (SDDC) is a vision for IT infrastructure<br /> that extends virtualization concepts such as abstraction, pooling,<br /> and automation to all of the data center’s<br /> resources and services to achieve IT as a service (ITaaS)
      </p>
    </blockquote>
    
    <ul class="org-ul">
      <li>
        <a href="https://en.wikipedia.org/wiki/Software-defined_data_center">Software-defined data center &#8211; Wikipedia, the free encyclopedia</a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Software_Defined_Infrastructure">Software Defined Infrastructure &#8211; Wikipedia, the free encyclopedia</a>
      </li>
    </ul>
    
    <blockquote>
      <p>
        「Software Defined」とは「（手作業ではなく）ソフトウェアで定義・制御する環境」を実現する、または目指すという意味
      </p>
    </blockquote>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.ctc-g.co.jp/report/column/it_sdi/index.html">よくわかるIT新発見　第1回　「Software Defined xx」の潮流を読み解く！｜伊藤忠テクノソリューションズ</a>
      </li>
      <li>
        <a href="https://itpro.nikkeibp.co.jp/article/COLUMN/20131127/521113/">漆原茂の技術インパクト &#8211; 第10回　Software Defined Everything：ITpro</a>
      </li>
    </ul>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    各ベンダの動向
  </h2>
  
  <div class="outline-text-2" id="text-2">
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      Intel &#8211; Software Defined Infrastructure(SDI)
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <p>
        データセンターのサーバー、ネットワーク、ストレージを統合する戦略。
      </p>
      
      <blockquote>
        <p>
          SDIの大きな特徴は、コンピュート（CPU、メモリ）、ネットワーク、ストレージなど、データセンターを構成するハードウェアをすべて抽象化して、ソフトウェアで自由に設定を変更することができる点
        </p>
        
        <p>
          ハードウェアとソフトウェアがタイトに結びつくのではなく、ハードウェアを抽象化し、必要に応じてソフトウェアから設定を変更するだけで、サーバーのリソース構成をダイナミックに変更できるシステムが必要になってきた
        </p>
      </blockquote>
      
      <ul class="org-ul">
        <li>
          <a href="https://itpro.nikkeibp.co.jp/article/NEWS/20130723/493463/">米インテルがSoftware Defined Infrastructureを発表、ストレージとネットワークで攻勢：ITpro</a>
        </li>
        <li>
          <a href="https://cloud.watch.impress.co.jp/docs/column/virtual/20130730_609512.html">【仮想化道場】“やわらかいデータセンター”を作る、IntelのSoftware Defined Infrastructure &#8211; クラウド Watch</a>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      Cisco &#8211; Software Defined Network(SDN)
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <p>
        Software-Defined Networking.ネットワークにおけるSoftware defined.
      </p>
      
      <blockquote>
        <p>
          SDN allows network administrators to manage network services<br /> through abstraction of lower level functionality.
        </p>
      </blockquote>
      
      <ul class="org-ul">
        <li>
          <a href="https://en.wikipedia.org/wiki/Software-defined_networking">Software-defined networking &#8211; Wikipedia, the free encyclopedia</a>
        </li>
      </ul>
      
      <blockquote>
        <p>
          広義：「従来システムのネットワーク要素を抽象化し分割する、コンピュータ ネットワークを構築するアプローチ」（wiki より）<br /> 狭義：「（広義のアプローチを具体化するために）ネットワーク機器のコントロール プレーン、データ プレーンを分離し、集中化されたソフトウェアからコントロールして、もっと効率的なこと、便利なことをする！！」
        </p>
      </blockquote>
      
      <ul class="org-ul">
        <li>
          <a href="https://gblogs.cisco.com/jp/2014/02/open-source-controller-framework-opendaylight-1/">Cisco Japan Blog » オープンソース コントローラ フレームワーク ― OpenDaylight (1)</a>
        </li>
      </ul>
      
      <p>
        なんと、Courseraに講義を発見！時間があれば受けたいところだが。。。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.coursera.org/course/sdn">Software Defined Networking | Coursera</a>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-3" class="outline-3">
    <h3 id="sec-2-3">
      EMC &#8211; Software Defined Storage(SDS)
    </h3>
    
    <div class="outline-text-3" id="text-2-3">
      <p>
        EMCのとなえる戦略。ストレージにおけるSoftware Defined.
      </p>
      
      <blockquote>
        <p>
          Software-defined storage (SDS) is a term<br /> for computer data storage technologies which separate storage hardware<br /> from the software that manages the storage infrastructure
        </p>
      </blockquote>
      
      <ul class="org-ul">
        <li>
          <a href="https://en.wikipedia.org/wiki/Software-defined_storage">Software-defined storage &#8211; Wikipedia, the free encyclopedia</a>
        </li>
      </ul>
      
      <p>
        SDNはOpenFlowという共通技術によって浸透したが、 ストレージ分野では共通技術となるようなものがないとか。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.publickey1.jp/blog/14/software-defined_storage.html">Software-Defined Storage、これからのストレージ技術が実現する世界とはどのようなものか？ － Publickey</a>
        </li>
      </ul>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    実現するためのArchtecture
  </h2>
  
  <div class="outline-text-2" id="text-3">
  </div>
  
  <div id="outline-container-sec-3-1" class="outline-3">
    <h3 id="sec-3-1">
      Software Defined Infrastructe
    </h3>
    
    <div class="outline-text-3" id="text-3-1">
      <p>
        このページで紹介されているアーキテクチャがわかりやすい。
      </p>
      
      <p>
        <a href="https://www.ctc-g.co.jp/report/column/it_sdi/index.html">よくわかるIT新発見　第1回　「Software Defined xx」の潮流を読み解く！｜伊藤忠テクノソリューションズ</a>
      </p>
      
      <p>
        以下、引用。
      </p>
      
      <ul class="org-ul">
        <li>
          Orchestration ・・・ 下位の機能レイヤのAPIを通じて全体のプロビジョニングを実施。
        </li>
        <li>
          Controller ・・・ 上位レイヤからのAPIを介した指示にしたがって、Deviceの設定変更を実施。
        </li>
        <li>
          Device ・・・ 上位レイヤのAPIを介した指示にしたがって、必要なITリソースを提供。
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-3-2" class="outline-3">
    <h3 id="sec-3-2">
      Rack Scale Architecture(RSA)
    </h3>
    
    <div class="outline-text-3" id="text-3-2">
      <p>
        Intelが提唱するアーキテクチャ。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://news.mynavi.jp/news/2013/04/12/141/">ラックはサーバ集積からモジュール構造へ、Intel | マイナビニュース</a>
        </li>
      </ul>
      
      <p>
        これはよくわかならいな。
      </p></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    実現するための技術・OSS
  </h2>
  
  <div class="outline-text-2" id="text-4">
  </div>
  
  <div id="outline-container-sec-4-1" class="outline-3">
    <h3 id="sec-4-1">
      OpenStack
    </h3>
    
    <div class="outline-text-3" id="text-4-1">
      <ul class="org-ul">
        <li>
          <a href="https://ja.wikipedia.org/wiki/OpenStack">OpenStack &#8211; Wikipedia</a>
        </li>
      </ul>
      
      <blockquote>
        <p>
          クラウド基盤を構築するオープンソースソフトウエア。<br /> KVMやXen、VMware ESXi、Hyper-Vといった仮想化ソフト（ハイパーバイザー）と組み合わせ、<br /> IaaS（Infrastructure as a Service）やストレージサービスを提供するための仮想マシンやストレージ、ネットワークの管理機能などを提供する
        </p>
        
        <p>
          OpenStackを使って構築したクラウド環境は、<br /> 統一したAPIや認証を使って管理できる。<br /> また、IaaSのパブリッククラウドサービスで最大手であるAmazon EC2と互換性を持つ。
        </p>
      </blockquote>
      
      <ul class="org-ul">
        <li>
          <a href="https://itpro.nikkeibp.co.jp/article/Keyword/20121029/433321/">Networkキーワード &#8211; OpenStack とは：ITpro</a>
        </li>
        <li>
          <a href="https://cloud.watch.impress.co.jp/docs/column/cloud/20140404_642748.html">【クラウド特捜部】プレーヤーがそろい表舞台に立つOpenStack &#8211; クラウド Watch</a>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-4-2" class="outline-3">
    <h3 id="sec-4-2">
      CloudStack
    </h3>
    
    <div class="outline-text-3" id="text-4-2">
      <ul class="org-ul">
        <li>
          <a href="https://www.atmarkit.co.jp/ait/articles/1403/03/news019.html">プロダクトの差はわずか？ 活動評価視点で検証：OpenStackとCloudStack、違いは何？ (1/2) &#8211; ＠IT</a>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-4-3" class="outline-3">
    <h3 id="sec-4-3">
      OpenFlow
    </h3>
    
    <div class="outline-text-3" id="text-4-3">
      <p>
        OpenFlowとは、 ソフトウェアによってネットワークの構成を行うための新しい標準。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://e-words.jp/w/OpenFlow.html">OpenFlowとは 〔 オープンフロー 〕 &#8211; 意味/解説/説明/定義 ： IT用語辞典</a>
        </li>
        <li>
          <a href="https://www.publickey1.jp/blog/13/openflowsdnopenflowsdn_japan_2013.html">OpenFlow/SDNはなぜ誕生したのか、OpenFlow以前にあった問題とは。生みの親カサド氏が壇上で語る。SDN Japan 2013 － Publickey</a>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-4-4" class="outline-3">
    <h3 id="sec-4-4">
      Hydrogen
    </h3>
    
    <div class="outline-text-3" id="text-4-4">
      <p>
        OpenDaylight Projectとは、 SDN(Software Defined Network)のプラットフォームを開発するプロェクト。 Linux Foundation Projectのひとつ。
      </p>
      
      <blockquote>
        <p>
          SDN の市場育成とともにこの分野の革新とユーザ環境への導入促進を目的に活動を開始したのが「OpenDaylight」です。業界をリードする素晴らしいメンバー（Platinum/Goldスポンサー：Brocade、Cisco、Citrix、Ericsson、IBM、Juniper、Microsoft、Redhat、NEC、VMWare）が参加し、複数のインダストリ プレイヤーによるコントリビューション（HackFest 参加、ソースコード寄贈、共同開発）によりコントローラ フレームワークを形成
        </p>
      </blockquote>
      
      <ul class="org-ul">
        <li>
          <a href="https://gblogs.cisco.com/jp/2014/02/open-source-controller-framework-opendaylight-1/">Cisco Japan Blog » オープンソース コントローラ フレームワーク ― OpenDaylight (1)</a>
        </li>
      </ul>
      
      <p>
        OpenDaylightが開発したオープンソース コントローラ フレームワークがHydrogen。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://sourceforge.jp/magazine/14/02/06/144500">オープンソースSDNプロジェクトのOpenDaylightが初リリース、「Hydrogen」が登場</a>
        </li>
        <li>
          <a href="https://www.atmarkit.co.jp/ait/articles/1402/05/news050.html">SDNのオープンソースプロジェクト：OpenDaylight Project、最初のリリースHydrogenを発表 &#8211; ＠IT</a>
        </li>
        <li>
          <a href="https://gihyo.jp/dev/serial/01/linuxcon2014/0003">#3　最終回はNeela Jacques氏にOpenDaylightについて伺いました：LinuxCon Japan 2014 Preview｜gihyo.jp … 技術評論社</a>
        </li>
      </ul>
    </div></p>
  </div></p>
</div>