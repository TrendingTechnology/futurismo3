---
author: admin
categories:
- 技術メモ
date: 2014-10-30T03:38:00+00:00
dsq_thread_id:
- 3.704697e+09
excerpt: iPhone を CIFS サーバにするアプリ CIFS NQ
pvc_views:
- 1629
tags:
- iPhone
- SMB
title: iPhone を CIFS サーバにするアプリ CIFS NQ
type: post
url: /archives/=2667
---

仕事で CIFS をつかっている. 

たとえば, カフェでダラダラしているときに, 急に CIFS のパケットが気になってしょうがなくなったとしよう. 

NotePC には Windows がはいっている. しかし, Windows のクライアントがあっても接続する CIFS サーバがないと, CIFS のパケットを見ることができない! 

VirtualBox に CentOS を入れて, その上に Samba サービスを立ち上げるとい うことを以前やった. 

<ul class="org-ul">
  <li>
    <a href="https://futurismo.biz/archives/1390">CentOS 上で SAMBA サーバを立ちあげて Windows からアクセスするためのメモ | Futurismo</a>
  </li>
</ul>

しかし, 今は仮想マシンを立ち上げる容量がないという不幸な状況. 

そんなもどかしさに悶え苦しんでいるひとのために朗報! 

iPhone を CIFS サーバにすればよい 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    iPhone を CIFS サーバにするアプリ
  </h2>
  
  <div class="outline-text-2" id="text-1">
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      GoodReader
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <p>
        仕事効率化の定番アプリ, GoodReader に エクスプローラからアクセスする ことができる.以下, リンク参照.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://samulife.com/iPhone/goodreader-webdav">iPhone GoodReader を PC のネットワークドライブに割り当てる方法!! ドラッグ&ドロップでファイル転送できる</a>
        </li>
      </ul>
      
      <p>
        しかし, この手順で Windows のエクスプローラからアクセスすると, 都合が わるいことに気づく.それは, GoodReader のサポートしている SMB のバージョ ンが 1 だったこと.
      </p>
      
      <p>
        自分は, SMB2 のパケットが見たかった&#x2026;.
      </p>
    </div>
  </div>
  
  <div id="outline-container-sec-1-2" class="outline-3">
    <h3 id="sec-1-2">
      CIFS NQ
    </h3>
    
    <div class="outline-text-3" id="text-1-2">
      <p>
        ということで, 次に探したのがこれ. CIFS NQ.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://itunes.apple.com/jp/app/id806015001">iTunes の App Store で配信中の iPhone, iPod touch, iPad 用 CIFS NQ</a>
        </li>
      </ul>
      
      <p>
        開発した会社は, CIFS/SMB のリーディングカンパニーとか.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.visualitynq.com/?lang=jp">Visuality Systems &#8211; ホーム</a>
        </li>
      </ul>
      
      <p>
        無料なので, さっそくインストールしてみた. 設定画面からサーバステータスを ON に設定することで, CIFS サーバ起動.
      </p>
      
      <p>
        エクスプローラの URL 欄に IP を打ち込んで乗り込む. WireShark でパケッ トキャプチャをすると, SMB2 だった.
      </p>
      
      <p>
        おもわずニヤリ.
      </p>
      
      <p>
        これで, カフェで SMB2 のパケットをみることができるよになった.
      </p>
    </div>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    さいごに
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      誰トクな記事なんだろう&#x2026;.
    </p>
  </div>
</div>