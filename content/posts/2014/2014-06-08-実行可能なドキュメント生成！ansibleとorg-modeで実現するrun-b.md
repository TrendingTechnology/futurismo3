---
author: admin
categories:
- Emacs
- ハッキング
date: 2014-06-08T10:31:00+00:00
dsq_thread_id:
- 3.7377367e+09
excerpt: org-babel-tangleとansibleを組み合わせて、orgファイルからansible実行
pvc_views:
- 1820
tags:
- ansible
- org-mode
title: 実行可能なドキュメント生成！AnsibleとOrg-modeで実現するRun Book Automation(RBA)
type: post
url: /archives/=2492
---

![][1]

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      org-babel-tangleをEmacsの外のコマンドラインから実行する方法を調べました。
    </p>
    
    <p>
      そして、生成したyamlファイルをansibleにわたして実行することで、 実行可能なドキュメントを生成してみました。
    </p>
    
    <p>
      関連する過去記事は以下。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/2403">org-modeで書いたテキストをPandocでRestructured Textに変換する | Futurismo</a>
      </li>
      <li>
        <a href="https://futurismo.biz/archives/2451">Web操作手順書を自動生成！Emacs org-babelで実現するRun Book Automation(RBA) | Futurismo</a>
      </li>
      <li>
        <a href="https://futurismo.biz/archives/2490">自分のデスクトップ環境の歴史を記録する！ansibleで設定ファイルをクラウド管理する方法 | Futurismo</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      Environment
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <ul class="org-ul">
        <li>
          ArchLinux
        </li>
        <li>
          Emacs 24.3
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    Emacs の関数をコマンドラインから実行する
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      org-modeでかかれたドキュメントを コマンドラインから変換するためのスクリプトを調べた。
    </p>
    
    <p>
      以下のサイトから直接スクリプトを引用する。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://orgmode.org/manual/Batch-execution.html">Batch execution &#8211; The Org Manual</a>
      </li>
    </ul>
    
    <div class="org-src-container">
      <pre class="src src-language">#!/bin/sh
# -*- mode: shell-script -*-
#
# tangle files with org-mode
#
DIR=`pwd`
FILES=""

# wrap each argument in the code required to call tangle on it
for i in $@; do
    FILES="$FILES \"$i\""
done

emacs -Q --batch \
    --eval "(progn
     (add-to-list 'load-path (expand-file-name \"~/src/org/lisp/\"))
     (add-to-list 'load-path (expand-file-name \"~/src/org/contrib/lisp/\" t))
     (require 'org)(require 'org-exp)(require 'ob)(require 'ob-tangle)
     (mapc (lambda (file)
            (find-file (expand-file-name file \"$DIR\"))
            (org-babel-tangle)
            (kill-buffer)) '($FILES)))" 2&gt;&1 |grep tangled
</pre>
    </div>
    
    <p>
      このスクリプトを実行すると、コマンドラインからorg-babel-tangleが実行できる。
    </p>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    org-banel-tangleとansible-playbookを同時実行
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      枯れた自分のシェルスクリプトの知識を呼び覚まして、シェルスクリプトを書いた。
    </p>
    
    <p>
      Indentをたもつために、以下のおまじないも加えた。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-language">(setq org-src-preserve-indentation t)
</pre>
    </div>
    
    <ul class="org-ul">
      <li>
        <a href="https://orgmode.org/worg/org-contrib/babel/languages/ob-doc-makefile.html">Makefile Source Code Blocks in Org Mode</a>
      </li>
    </ul>
    
    <p>
      </div> </div> 
      
      <div id="outline-container-sec-4" class="outline-2">
        <h2 id="sec-4">
          virtualboxのインストールスクリプト
        </h2>
        
        <div class="outline-text-2" id="text-4">
          <p>
            以下のようなorgファイルを用意した。
          </p>
          
          <blockquote>
            <p>
              * VirtualBox
            </p>
            
            <p>
              &#8211; [[https://wiki.archlinux.org/index.php/VirtualBox_(%E6%97%A5%E6%9C%AC%E8%AA%9E)][VirtualBox (日本語) &#8211; ArchWiki]]
            </p>
            
            <p>
              以下のモジュールが必要。
            </p>
            
            <p>
              &#8211; virtualbox<br /> &#8211; virtualbox-host-modules<br /> &#8211; qt4
            </p>
            
            <p>
              #+begin_src yaml :tangle yes<br /> &#8212;<br /> &#8211; hosts: localhost<br /> sudo: yes<br /> tasks:<br /> &#8211; name: Install VirtualBox<br /> pacman: name=virtualbox,virtualbox-host-modules,qt4<br /> #+end_src
            </p>
            
            <p>
              ArchLinuxでゲストOSを動かすためにはKernelモジュールをロードする必要がある。
            </p>
            
            <p>
              #+begin_src yaml :tangle yes<br /> &#8211; name: Load Kernel Module<br /> command: modprobe vboxdrv<br /> #+end_src
            </p>
          </blockquote>
          
          <p>
            コマンドラインから実行して、virtualboxをインストール成功！カッコいい。
          </p>
          
          <div class="org-src-container">
            <pre class="src src-sh">[tsu-nera]% ./ansible-org-tangled.sh archlinux/virtualbox.org

PLAY [localhost] ************************************************************** 

GATHERING FACTS *************************************************************** 
ok: [localhost]

TASK: [Install VirtualBox] **************************************************** 
ok: [localhost]

TASK: [Load Kernel Module] **************************************************** 
changed: [localhost]

PLAY RECAP ******************************************************************** 
localhost                  : <span style="color: #fd971f;">ok</span>=3    <span style="color: #fd971f;">changed</span>=1    <span style="color: #fd971f;">unreachable</span>=0    <span style="color: #fd971f;">failed</span>=0
</pre>
          </div>
          
          <p>
            もちろん、org-modeなので、HTMLへの出力とかもできる。
          </p>
          
          <p>
            githubにアップするだげで、orgファイルはいい感じに表示されるところがよい。
          </p>
          
          <ul class="org-ul">
            <li>
              <a href="https://gist.github.com/tsu-nera/83084289c9c6660812de">https://gist.github.com/tsu-nera/83084289c9c6660812de</a>
            </li>
          </ul>
        </div>
      </div>

 [1]: https://futurismo.biz/wp-content/uploads/emacs_logo.jpg