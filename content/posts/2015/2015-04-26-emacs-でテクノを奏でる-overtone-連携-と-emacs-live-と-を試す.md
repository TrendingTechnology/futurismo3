---
author: admin
categories:
- Clojure
- Emacs
date: 2015-04-26T07:26:00+00:00
dsq_thread_id:
- 3.713455e+09
pvc_views:
- 1847
tags:
- overtone
title: Emacs でテクノを奏でる?! overtone 連携 と Emacs Live と を試す
type: post
url: /archives/=3464
---

![][1]

<div id="outline-container-unnumbered-1" class="outline-2">
  <h2 id="unnumbered-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-1">
    <p>
      前回, overtone を起動しました.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/3127">Clojure で楽器を演奏しよう! Overtone をインストールしてみた | Futurismo</a>
      </li>
    </ul>
    
    <p>
      今回は Emacs から利用するまでを試します.
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-2" class="outline-2">
  <h2 id="unnumbered-2">
    Emacs Live
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-2">
    <p>
      Emacs Live は Overtone を Emacs から操るための 環境, ツール群, Emacs の設定.
    </p>
    
    <div data-theme="default" data-height="155" data-width="500" data-github="overtone/emacs-live" class="github-card">
    </div>
    
    <p>
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/overtone/emacs-live">https://github.com/overtone/emacs-live</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-unnumbered-3" class="outline-3">
    <h3 id="unnumbered-3">
      Install
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-3">
      <p>
        overtone の設定は, 前回の記事を参照.
      </p>
      
      <ul class="org-ul">
        <li>
          <p>
            <a href="https://futurismo.biz/archives/3127">Clojure で楽器を演奏しよう! Overtone をインストールしてみた | Futurismo</a>
          </p>
          
          <p>
            以下のスクリプトを実行する.
          </p>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> bash <(curl -fksSL https://raw.github.com/overtone/emacs-live/master/installer/install-emacs-live.sh) [/sourcecode] 
        
        <p>
          ~/.emacs.d に emacs live 用の環境が作成される.
        </p>
        
        <p>
          もし, すでに .emacs.d が存在する場合は, emacs-live-old-config ディレクトリに旧設定がコピーされる.
        </p></div> </div> 
        
        <div id="outline-container-unnumbered-4" class="outline-3">
          <h3 id="unnumbered-4">
            Getting Started
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-4">
            <ul class="org-ul">
              <li>
                lein repl 起動.
              </li>
              <li>
                emacs 起動.
              </li>
              <li>
                M-x cider-connect で lein に接続する <ul class="org-ul">
                  <li>
                    localhost/port 番号 (lein repl 起動時にコンソールに出る) を入れる.
                  </li>
                </ul>
              </li>
            </ul>
            
            <p>
              これで, emacs 上から, repl を操作することができる.あとは, コンソー ルから overtone を利用するときと同じ.
            </p>
            
            <p>
              [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> # External server 起動<br /> $ user=> (use &#8216;overtone.core)<br /> $ user=> (boot-external-server)
            </p>
            
            <p>
              # 音がでるか確認. ピーっと音が出れば OK.<br /> user=> (demo (sin-osc))<br /> [/sourcecode]
            </p>
          </div>
        </div>
        
        <div id="outline-container-unnumbered-5" class="outline-3">
          <h3 id="unnumbered-5">
            ファイルに音楽を書く.
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-5">
            <p>
              github にサンプルの音楽が置いてある.
            </p>
            
            <ul class="org-ul">
              <li>
                <a href="https://github.com/overtone/overtone/wiki/Swing">https://github.com/overtone/overtone/wiki/Swing</a>
              </li>
            </ul>
            
            <p>
              適当なファイルを作成して, コピペ後, C-x C-e でひとつずつ評価すると, コードが repl に送信されて, 音がなる. Live Coding !!
            </p>
          </div>
        </div></div> 
        
        <div id="outline-container-unnumbered-6" class="outline-2">
          <h2 id="unnumbered-6">
            自分の Emacs で overtone をつかう
          </h2>
          
          <div class="outline-text-2" id="text-unnumbered-6">
            <p>
              overtone を利用する度に自分の Emacs 設定を Emacs live に置き換えたくは ないので, 自分の Emacs 環境で overtone を利用する方法を試す.
            </p>
            
            <p>
              Emacs Live を利用すためには, 以下を入れる必要あり.
            </p>
            
            <ul class="org-ul">
              <li>
                clojure-mode
              </li>
              <li>
                cider
              </li>
            </ul>
            
            <div data-theme="default" data-height="155" data-width="500" data-github="clojure-emacs/cider" class="github-card">
            </div>
            
            <p>
            </p>
            
            <p>
              自分は, el-get からインストールした.
            </p>
          </div>
          
          <div id="outline-container-unnumbered-7" class="outline-3">
            <h3 id="unnumbered-7">
              clojure-mode
            </h3>
            
            <div class="outline-text-3" id="text-unnumbered-7">
              <p>
                Clojure のためのメジャーモード.
              </p>
              
              <ul class="org-ul">
                <li>
                  <a href="https://github.com/clojure-emacs/clojure-mode">https://github.com/clojure-emacs/clojure-mode</a>
                </li>
              </ul>
              
              <p>
                [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;clojure-mode)<br /> [/sourcecode]
              </p>
            </div>
          </div>
          
          <div id="outline-container-unnumbered-8" class="outline-3">
            <h3 id="unnumbered-8">
              cider
            </h3>
            
            <div class="outline-text-3" id="text-unnumbered-8">
              <p>
                Clojure のためのインタラクティブな開発環境.
              </p>
              
              <ul class="org-ul">
                <li>
                  <a href="https://github.com/clojure-emacs/cider">https://github.com/clojure-emacs/cider</a>
                </li>
              </ul>
              
              <p>
                [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;cider)<br /> (add-hook &#8216;clojure-mode-hook &#8216;cider-mode)<br /> (add-hook &#8216;cider-mode-hook &#8216;cider-turn-on-eldoc-mode)<br /> [/sourcecode]
              </p>
            </div>
          </div>
          
          <div id="outline-container-unnumbered-9" class="outline-3">
            <h3 id="unnumbered-9">
              Getting Started
            </h3>
            
            <div class="outline-text-3" id="text-unnumbered-9">
              <p>
                Emacs Live と起動方法は同じ. 音が出れば OK.
              </p>
            </div>
          </div>
        </div>
        
        <div id="outline-container-unnumbered-10" class="outline-2">
          <h2 id="unnumbered-10">
            おわりに
          </h2>
          
          <div class="outline-text-2" id="text-unnumbered-10">
            <p>
              Emacs Live には, いろいろ便利な関数や色が定義されているので, 時間をみて Emacs Live の リポジトリを眺めてみよう.
            </p>
            
            <p>
              今日はここまで!
            </p>
          </div>
        </div>
        
        <div id="outline-container-unnumbered-11" class="outline-2">
          <h2 id="unnumbered-11">
            Special Thanks
          </h2>
          
          <div class="outline-text-2" id="text-unnumbered-11">
            <ul class="org-ul">
              <li>
                <a href="https://bzg.fr/emacs-org-babel-overtone-intro.html">Emacs Org and Overtone quick intro</a>
              </li>
              <li>
                <a href="https://atsuya046.hatenablog.com/entry/2015/02/11/232316">Emacs で Overtone 演奏環境構築 &#8211; のぶ Lab.</a>
              </li>
            </ul>
          </div>
        </div>

 [1]: https://futurismo.biz/wp-content/uploads/emacs_logo.jpg