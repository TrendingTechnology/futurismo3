---
author: admin
categories:
- 日記
date: 2014-04-05T05:38:24+00:00
dsq_thread_id:
- 3.7250665e+09
excerpt: SquidをつかってWindows環境化でプロキシサーバを立ててみた
pvc_views:
- 25656
title: SquidをつかってWindows環境化でプロキシサーバを立ててみる
type: post
url: /archives/=2370
---

わけあってプロキシサーバを立ててみたくなったので、 Windows環境でプロキシサーバをたてる方法について調べてみた。 

  ![][1]

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    Squidをつかう
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      フリーソフトのSquidを利用する。Squidはマルチプラットフォームなプロキシサーバソフト。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://ja.wikipedia.org/wiki/Squid_(%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2)">Suid (ソフトウェア) &#8211; Wikipedia</a>
      </li>
    </ul>
    
    <p>
      以下から、windows用のプログラムをダウンロードしてくる。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.acmeconsulting.it/SquidNT/">Acme Consulting -Società di Consulenza e Formazione Informatica &#8211; Torino</a>
      </li>
    </ul>
    
    <p>
      解凍したものを、C:に配置。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    設定ファイルの設定
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      etc配下にある以下をリネーム。
    </p>
    
    <ul class="org-ul">
      <li>
        mime.conf.default -> mime.conf
      </li>
      <li>
        squid.conf.default -> squid.conf
      </li>
    </ul>
    
    <p>
      600行目あたりに、acl （任意の名前） src （IPアドレス)/（サブネットマスク）を追加。
    </p>
    
    <p>
      入力するIPアドレスは コマンドプロンプトから ipconfigコマンドで調べることができる。
    </p>
    
    <pre><code>
#Recommended minimum configuration:
acl all src all
acl manager proto cache_object
acl localhost src 127.0.0.1/32
acl to_localhost dst 127.0.0.0/8 0.0.0.0/32 
# 以下を追加
acl net localsrc 192.168.1.0/255.255.255.0 
</code></pre>
    
    <p>
      650行目あたりで定義したネットワーク指定をアクセス許可。
    </p>
    
    <p>
      ここではhttp_access に localnetを追加。
    </p>
    
    <pre><code># Only allow cachemgr access from localhost
http_access allow manager localhost localnet
http_access deny manager
</code></pre>
    
    <p>
      1100行目あたりでプロキシ用ボートを8080に設定。
    </p>
    
    <pre><code># Squid normally listens to port 3128
# http_port 3128
http_port 8080
</code></pre></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    コマンドプロンプトでの操作。
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      まずは、管理者権限でコマンドプロンプトを起動する。
    </p></p>
  </div>
  
  <div id="outline-container-sec-3-1" class="outline-3">
    <h3 id="sec-3-1">
      キャッシュエリア作成
    </h3>
    
    <div class="outline-text-3" id="text-3-1">
      <p>
        C:で以下のコマンドを実行。
      </p>
      
      <pre><code>C:\squid\sbin>squid -z
2014/04/04 21:39:46| Creating Swap Directories
</code></pre></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-3-2" class="outline-3">
    <h3 id="sec-3-2">
      サービスの起動
    </h3>
    
    <div class="outline-text-3" id="text-3-2">
      <p>
        以下のコマンドで、Windowsの管理のサービスに追加して起動。
      </p>
      
      <pre><code>C:\squid\sbin>squid -i
C:\squid\sbin>net start squid 
</code></pre>
      
      <p>
        停止はnet stop squid。サービスから外すには以下。
      </p>
      
      <pre><code>C:\squid\sbin>squid -ｒ
</code></pre></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    たとえばInternet Exploreの設定
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      IEにプロキシ経由でネットにアクセスするように設定。
    </p>
    
    <p>
      [接続] > [LANの設定] > [プロキシサーバ]と移動して、入力欄に自分のIPアドレスとポート番号を入れる。
    </p>
    
    <p>
      ここでは、192.168.100.101と8080.
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-5" class="outline-2">
  <h2 id="sec-5">
    BASIC認証をかける
  </h2>
  
  <div class="outline-text-2" id="text-5">
    <p>
      squidのダウンロードページにおいてある、NCSAsupport.zipをおとして解凍する。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://squid.acmeconsulting.it/index.html">Acme Consulting -Società di Consulenza e Formazione Informatica &#8211; Torino</a>
      </li>
    </ul>
    
    <p>
      なかに、htpasswd.exe があるので、C:にコピー。以下を実行してpasswdファィルを作成。
    </p>
    
    <pre><code>C:\squid\etc>htpasswd.exe -c passwd tsu-nera
Adding password for tsu-nera.
New password:**************
Re-type new password:**************
</code></pre>
    
    <p>
      passwd生成用のWebサービスもあるようだ。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://phpspot.net/php/pghtpasswd%E7%94%A8%E3%83%91%E3%82%B9%E4%BD%9C%E6%88%90%E3%83%84%E3%83%BC%E3%83%AB.html">htpasswd用パス作成ツール &#8211; phpspot</a>
      </li>
    </ul>
    
    <p>
      C:.confの288行目あたりをコメントアウト。認証用プログラムとパスワードファイルを指定する。
    </p>
    
    <pre><code>auth_param basic program C:/squid/libexec/ncsa_auth.exe C:/squid/exc/passwd 
auth_param basic children 5
auth_param basic realm Squid proxy-caching web server
auth_param basic credentialsttl 2 hours
auth_param basic casesensitive off
</code></pre>
    
    <p>
      以下を追加。
    </p>
    
    <pre><code>acl password proxy_auth REQUIRED
http_access allow password
</code></pre>
    
    <p>
      さきほど追加したnetはコメントアウトしておく。
    </p>
    
    <pre><code># http_access allow net
</code></pre>
    
    <p>
      再起動すれば設定完了。IEからネットにアクセスしてユーザ名とパスワードを効かれたらOK.
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-6" class="outline-2">
  <h2 id="sec-6">
    Special Thanks
  </h2>
  
  <div class="outline-text-2" id="text-6">
    <ul class="org-ul">
      <li>
        <a href="https://ganbarepc.blog32.fc2.com/blog-entry-325.html">簡単プロキシサーバー設定！【 Squid　（Windows版） 】</a>
      </li>
      <li>
        <a href="https://d.hatena.ne.jp/neyngedhoo/20121023/1350971792">WindowsでプロキシーサーバSquid &#8211; なにがしのそれがし。neyngedhooの日記</a>
      </li>
      <li>
        <a href="https://uguisu.skr.jp/Windows/squid_win_tips.html">プロキシ（Proxy）サーバをWindows上に立ててみる：Squidの使い方</a>
      </li>
      <li>
        <a href="https://www32.atwiki.jp/lmes2/pages/192.html">おのれ鍋奉行が！ &#8211; Squid で BASIC認証</a>
      </li>
      <li>
        <a href="https://squid.robata.org/squid_nt.html">Windows NT 4.0/2000/XP/2003用のSquid</a>
      </li>
      <li>
        <a href="https://iceweasel.blog101.fc2.com/blog-entry-118.html">Windows Squid プロキシ 認証 &#8211; 電波素子は電気執事の夢を見るか？</a>
      </li>
    </ul>
  </div></p>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/Windows_7_Vertical_Logo_Web.jpg