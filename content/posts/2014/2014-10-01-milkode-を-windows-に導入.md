---
author: admin
categories:
- 技術メモ
date: 2014-10-01T12:06:00+00:00
dsq_thread_id:
- 3.7461023e+09
excerpt: Milkode を Windows に導入
pvc_views:
- 1381
title: Milkode を Windows に導入
type: post
url: /archives/=2637
---

<ul class="org-ul">
  <li>
    <a href="https://milkode.ongaeshi.me/">Milkode &#8211; 行指向のソースコード検索エンジン</a>
  </li>
</ul>

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    Install
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      事前に Windows に Ruby と DevKit をいれておく.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://rubyinstaller.org/downloads/">https://rubyinstaller.org/downloads/</a>
      </li>
      <li>
        <a href="https://github.com/oneclick/rubyinstaller/wiki/Development-Kit">https://github.com/oneclick/rubyinstaller/wiki/Development-Kit</a>
      </li>
    </ul>
    
    <p>
      gem で取得.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> gem install milkode<br /> [/sourcecode]
    </p>
    
    <p>
      eventmachine のインストールでコケた.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://uisteven.blog.fc2.com/blog-entry-49.html">Windows 7 に Ruby 2.0 x64 を その 5 ~EventMachine の問題と対策~|Ruby と iPhone と UI と</a>
      </li>
    </ul>
    
    <p>
      以下のページを参考にして, git リポジトリから eventmachine を取得した.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> gem install specific_install<br /> gem specific_install -l &#8216;git://github.com/u338steven/eventmachine.git&#8217;<br /> [/sourcecode]
    </p>
    
    <p>
      再度, milkode をインストールして完了. それにしても, 依存関係が多すぎる&#x2026;
    </p>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    つかってみる
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      デフォルト設定をまずは設定.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> $ milk init &#8211;default<br /> [/sourcecode]
    </p>
    
    <p>
      検索対象のリポジトリを追加する.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> $ milk add .<br /> [/sourcecode]
    </p>
    
    <p>
      Web 画面を起動. port はデフォルトでは 9292 なので, 変更した.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> $ milk web -p 9293<br /> [/sourcecode]
    </p>
    
    <p>
      すると, ブラウザが立ち上がってソースコードが閲覧できる. 便利!
    </p>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      Environment
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <ul class="org-ul">
        <li>
          Windows 8 64bit
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      Special Thanks
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <ul class="org-ul">
        <li>
          <a href="https://tori932.dip.jp/Program/%E6%9C%80%E6%96%B0%E3%81%AEMilkode(1.8.0)%E3%82%92Windows%E3%81%A7%E8%A9%A6%E3%81%99">最新の Milkode (1.8.0) を Windows で試す | tori&#8217;s home</a>
        </li>
      </ul>
    </div>
  </div>
</div>