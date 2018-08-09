---
author: admin
categories:
- Emacs
- 技術メモ
date: 2014-10-18T01:53:00+00:00
dsq_thread_id:
- 3.72967e+09
excerpt: Windows 用の Emacs を入れてみることにした
pvc_views:
- 3254
title: Windows で Emacs を利用する
type: post
url: /archives/=2465
---

![][1]

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      Windows 上では, Cygwin でインストールした Emacs を今まで利用していたのだが, Cygwin の Emacs だと文字のレンダリングがズレルことがしばしばある.
    </p>
    
    <p>
      さすがにイライラしてきたので, Windows 用の Emacs を入れてみることにした.
    </p>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    Emacs for Windows
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      Windows 用にコンパイルされた Emacs のバイナリが以下から手に入る. 32bit 用はあるけど, 64bit はみつからないな^^;. まあいいや. 最新版を取得する.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://ftp.gnu.org/gnu/emacs/windows/">GNU Project Archives</a>
      </li>
      <li>
        emacs-24.3-bin-i386.zip
      </li>
    </ul>
    
    <p>
      適当な所に解凍 (C:-24.3). bin フォルダの中にある runemacs.exe を起動して Emacs が立ち上がれば成功. runemacs.exe はデスクトップなどにショートカットを作成.
    </p>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      14/10/18 追記
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <p>
        Windows 版 64bit のバイナリを発見!
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://sourceforge.net/projects/emacsbinw64/?source=typ_redirect">emacs-w64 | SourceForge.net</a>
        </li>
        <li>
          <a href="https://emacsbinw64.sourceforge.net/">emacs-w64 | 64-Bit GNU Emacs for MS Windows with optimization</a>
        </li>
      </ul>
      
      <p>
        git リポジトリからつねに最新のバイナリを作成している.現在, version は 25.0??
      </p>
    </div>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    設定ファイル (.emacs) の場所を指定
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      .emacs.d を Cygwin と共有したい. init file の参照方法は以下のようだ.
    </p>
    
    <blockquote>
      <p>
        1. If the environment variable HOME is set, use the directory it indicates.<br /> 2. If the registry entry HKCU\SOFTWARE\GNU\Emacs\HOME is set, use the directory it indicates.<br /> 3. If the registry entry HKLM\SOFTWARE\GNU\Emacs\HOME is set, use the directory it indicates. Not recommended, as it results in users sharing the same HOME directory.<br /> 4. If C:\.emacs exists, then use C:/. This is for backward compatibility, as previous versions defaulted to C:/ if HOME was not set.<br /> 5. Use the user&#8217;s AppData directory, usually a directory called Application Data under the user&#8217;s profile directory, the location of which varies according to Windows version and whether the computer is part of a domain.
      </p>
    </blockquote>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.gnu.org/software/emacs/manual/html_node/efaq-w32/Location-of-init-file.html#Location-of-init-file">Location of init file &#8211; GNU Emacs FAQ For MS Windows</a>
      </li>
    </ul>
    
    <p>
      HKCUというレジスタにパスを設定することにした. Win+R でファイル名を指定して実行を起動して, regedit と入力. レジストリエディタが起動するので, 対象のレジストリを作成. GNU と Emacs キーを作成. HOME の文字列値として以下を書いた.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> C:\cygwin\home\TSUNEMICHI\dotfiles<br /> [/sourcecode]
    </p>
    
    <p>
      また, 環境変数から HOME を削除.
    </p>
    
    <p>
      これで, cygwin の.emacs.d を参照するようになった.
    </p>
  </div>
  
  <div id="outline-container-sec-3-1" class="outline-3">
    <h3 id="sec-3-1">
      Special Thanks
    </h3>
    
    <div class="outline-text-3" id="text-3-1">
      <p>
        Official Site
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.gnu.org/software/emacs/manual/html_node/efaq-w32/index.html">GNU Emacs FAQ For MS Windows</a>
        </li>
      </ul>
    </div>
  </div>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/emacs_logo.jpg