---
author: admin
categories:
- Emacs
- 技術メモ
date: 2014-09-22T10:22:00+00:00
dsq_thread_id:
- 3.7316278e+09
excerpt: Eclim を Windows で利用するためのメモ
pvc_views:
- 1854
title: Eclim を Windows で利用するためのメモ
type: post
url: /archives/=2621
---

![][1]

Emacs から Eclipse を利用するためにつかうのが Eclim. 動くまで少しハマったので, インストール方法をメモ. 

前回の記事は以下. 

<ul class="org-ul">
  <li>
    <a href="https://futurismo.biz/archives/2462">Eclim で Emacs と Eclipse のいいとこどり!Emacs で Java 開発環境を構築した (副題 打倒 Eclipse!) | Futurismo</a>
  </li>
</ul>

<div id="outline-container-sec-0-1" class="outline-3">
  <h3 id="sec-0-1">
    Environment
  </h3>
  
  <div class="outline-text-3" id="text-0-1">
    <ul class="org-ul">
      <li>
        Windows 7 64bit
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    eclim
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      インストーラがあるので, ダウンロードする.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://eclim.org/install.html">Download / Install &#8211; eclim (eclipse + vim)</a>
      </li>
    </ul>
    
    <p>
      コマンドプロンプトから以下で起動.または, ダブルクリックでも起動した.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> $ java -jar eclim_2.4.0.jar<br /> [/sourcecode]
    </p>
    
    <p>
      インストーラの指示にしたがいインストール.
    </p>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    eclim-emacs
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      Emacs から利用するためには, eclim-emacs を入れる.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/senny/emacs-eclim">senny/emacs-eclim</a>
      </li>
    </ul>
    
    <p>
      設定ファイルに以下を追記.
    </p>
    
    <p>
      [sourcecode language=&#8221;elisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;eclim)<br /> (global-eclim-mode)<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    使い方
  </h2>
  
  <div class="outline-text-2" id="text-3">
  </div>
  
  <div id="outline-container-sec-3-1" class="outline-3">
    <h3 id="sec-3-1">
      デーモン起動.
    </h3>
    
    <div class="outline-text-3" id="text-3-1">
      <p>
        インストールが完了すると, Eclipse のフォルダに, eclimd.bat があるのでダブルクリックで起動する.
      </p>
      
      <p>
        これで, eclim デーモンが起動する. 127.0.0.1 の port 9091 で起動する.
      </p>
    </div>
  </div>
  
  <div id="outline-container-sec-3-2" class="outline-3">
    <h3 id="sec-3-2">
      Emacs からアクセス
    </h3>
    
    <div class="outline-text-3" id="text-3-2">
      <p>
        Cygwin 上の Emacs から利用するならば, 以下を追加. パスは各自の設定で.
      </p>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (setq eclim-eclipse-dirs &#8220;/cygdrive/c/eclipse/luna&#8221;)<br /> (setq eclim-executable &#8220;/cygdrive/c/eclipse/luna/eclim.bat&#8221;)<br /> (setq eclim-port 9091)<br /> [/sourcecode]
      </p>
      
      <p>
        GUI 上の Emacs から利用するならば, 以下を追加. bat ファイルを Emacs から直接実行できなかった.
      </p>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (setq eclim-eclipse-dirs &#8220;C:/eclipse/luna&#8221;)<br /> (setq eclim-executable &#8220;C:/eclipse/luna/ng.exe &#8211;nailgun-port 9091 org.eclim.command.Main&#8221;)<br /> (setq eclim-port 9091)<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/emacs_logo.jpg