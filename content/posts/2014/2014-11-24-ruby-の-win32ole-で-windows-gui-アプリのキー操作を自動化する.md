---
author: admin
categories:
- Ruby
- 技術メモ
date: 2014-11-24T02:23:00+00:00
dsq_thread_id:
- 3.7294822e+09
excerpt: Ruby の win32ole で Windows GUI アプリのキー操作を自動化する
pvc_views:
- 5268
tags:
- Windows
title: Ruby の win32ole で Windows GUI アプリのキー操作を自動化する
type: post
url: /archives/=2742
---

<div id="outline-container-unnumbered-1" class="outline-2">
  <h2 id="unnumbered-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-1">
    <p>
      Windows 上のアプリをキーボード操作で自動化したいと考えた.
    </p>
    
    <p>
      Ruby の win32ole を利用すれば, 実現できそうなので, 調べた.
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-2" class="outline-2">
  <h2 id="unnumbered-2">
    Win32ole とは
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-2">
    <p>
      Windows 版の Ruby には, win32ole というライブラリがある.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://docs.ruby-lang.org/ja/1.9.3/class/WIN32OLE.html">class WIN32OLE</a>
      </li>
    </ul>
    
    <p>
      これを利用すると, Ruby から Windows のいろいろなアプリを操作できる. (Excel,iExplore などなど&#x2026;)
    </p>
    
    <p>
      Windows アプリにキーを送ることができるので, キー操作で完結するアプリならば, 操作を自動化できる, というわけだ.
    </p>
    
    <p>
      以前, Excel の操作で win32ole を利用した.以下, 過去記事参照.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/2330">Ruby から Excel を操作する方法について | Futurismo</a>
      </li>
    </ul>
    
    <p>
      今回は, キーボード操作関連の情報をまとめる.
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-3" class="outline-2">
  <h2 id="unnumbered-3">
    WSHShell を操作
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-3">
    <p>
      WSHShell とは, Windows のシェル. これを Ruby から制御する.手順は 2 つ.
    </p>
    
    <ul class="org-ul">
      <li>
        あるウィンドウをアクティブにできる
      </li>
      <li>
        アクティブなウィンドウにキーコードを送る
      </li>
    </ul>
  </div>
  
  <div id="outline-container-unnumbered-4" class="outline-3">
    <h3 id="unnumbered-4">
      事前準備
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-4">
      <p>
        以下の 2 行で, まずは wsh オブジェクト生成.
      </p>
      
      <p>
        [sourcecode language=&#8221;ruby&#8221; title=&#8221;&#8221; ]<br /> require &#8216;win32ole&#8217;<br /> wsh = WIN32OLE.new (&#8216;Wscript.Shell&#8217;)<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-5" class="outline-3">
    <h3 id="unnumbered-5">
      プログラム起動
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-5">
      <p>
        Run メソッドでプログラムを起動できる.
      </p>
      
      <p>
        [sourcecode language=&#8221;ruby&#8221; title=&#8221;&#8221; ]<br /> wsh.Run (&#8216;notepad.exe&#8217;)<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-6" class="outline-3">
    <h3 id="unnumbered-6">
      ウィンドウをアクティブにする
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-6">
      <p>
        AppActivate メソッドで ウィンドウをアクティブにできる.
      </p>
      
      <p>
        アプリのタイトルを指定する. 成功すると, ture が返る. 失敗すると, false が返る.
      </p>
      
      <p>
        [sourcecode language=&#8221;ruby&#8221; title=&#8221;&#8221; ]<br /> wsh.AppActivate (&#8216;Title&#8217;)<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-7" class="outline-3">
    <h3 id="unnumbered-7">
      ウィンドウにキーコードを送る
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-7">
      <p>
        SendKeys メソッドで ウィンドウにキーを送る.
      </p>
      
      <p>
        [sourcecode language=&#8221;ruby&#8221; title=&#8221;&#8221; ]<br /> wsh.SendKeys (&#8216;A&#8217;)<br /> [/sourcecode]
      </p>
      
      <p>
        詳細な SendKey コードはここにある.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://msdn.microsoft.com/en-us/library/8c6yea83.aspx">SendKeys Method</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-8" class="outline-2">
  <h2 id="unnumbered-8">
    Sample
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-8">
  </div>
  
  <div id="outline-container-unnumbered-9" class="outline-3">
    <h3 id="unnumbered-9">
      notepad
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-9">
      <p>
        メモ帳起動してなにか書く. Popup メソッドでメッセージ表示.
      </p>
      
      <p>
        [sourcecode language=&#8221;ruby&#8221; title=&#8221;&#8221; ]<br /> require &#8216;win32ole&#8217;
      </p>
      
      <p>
        wsh = WIN32OLE.new (&#8216;Wscript.Shell&#8217;)<br /> wsh.Run (&#8216;notepad.exe&#8217;)<br /> wsh.AppActivate (&#8216;無題&#8217;)
      </p>
      
      <p>
        wsh.SendKeys (&#8216;Hello&#8217;)
      </p>
      
      <p>
        wsh.Popup (&#8216;Happy Hacking!!&#8217;)<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-10" class="outline-3">
    <h3 id="unnumbered-10">
      explorer
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-10">
      <p>
        C:-neraフォルダをコピーして test2 フォルダを作成する.
      </p>
      
      <p>
        [sourcecode language=&#8221;ruby&#8221; title=&#8221;&#8221; ]<br /> # coding: utf-8<br /> require &#8216;win32ole&#8217;
      </p>
      
      <p>
        wsh = WIN32OLE.new (&#8216;Wscript.Shell&#8217;)<br /> wsh.Run &#8216;explorer C:\Users\tsu-nera\Desktop&#8217;
      </p>
      
      <p>
        sleep (3)
      </p>
      
      <p>
        wsh.AppActivate (&#8216;Desktop&#8217;)
      </p>
      
      <p>
        # テストフォルダ選択<br /> wsh.SendKeys (&#8216;t&#8217;)
      </p>
      
      <p>
        sleep (0.5)
      </p>
      
      <p>
        # コピー & ペースト<br /> wsh.SendKeys (&#8216;^c^v&#8217;)
      </p>
      
      <p>
        sleep (0.5)
      </p>
      
      <p>
        # リーネム<br /> wsh.SendKeys (&#8216;{F2}test2{ENTER}&#8217;)
      </p>
      
      <p>
        # popup<br /> wsh.Popup (&#8216;Copy Success!!&#8217;)<br /> sleep (3)<br /> wsh.SendKeys (&#8216;{ENTER}&#8217;)<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-11" class="outline-2">
  <h2 id="unnumbered-11">
    Special Thanks
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-11">
    <ul class="org-ul">
      <li>
        <a href="https://www.tech-notes.dyndns.org/win32ole/wsh_shell.html">Ruby から WSHShell オブジェクトを使う</a>
      </li>
      <li>
        <a href="https://rubyonwindows.blogspot.jp/2007/05/automating-applications-with-ruby.html">Ruby on Windows: Automating Applications with Ruby & The Windows Script Host</a>
      </li>
    </ul>
  </div>
</div>