---
author: admin
categories:
- Emacs
- Oz
- 技術メモ
date: 2014-04-20T02:44:00+00:00
dsq_thread_id:
- 3.7302036e+09
excerpt: Mozartをemacsclientから起動する方法のメモ
pvc_views:
- 1384
title: Mozartをemacsclientから起動する方法のメモ
type: post
url: /archives/=2399
---

![][1]

以前、Oz用のプログラミング環境Mozartをインストールした。 

<ul class="org-ul">
  <li>
    <a href="https://futurismo.biz/archives/2271">マルチパラダイム言語Ozの開発環境MozartをインストールしてHelloWorldするまで | Futurismo</a>
  </li>
</ul>

この方法だと、mozart専用のEmacsがたちあがる。 

できれば、今動いているemacs-serverにemacsclientでアクセスしたい。 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    Elispの取得
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      Oz用のElispを取得して、ロードパスの通った場所におく。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/mozart/mozart2/tree/master/opi/emacs">https://github.com/mozart/mozart2/tree/master/opi/emacs</a>
      </li>
    </ul>
    
    <pre class="example">
#!/bin/sh
wget https://raw.githubusercontent.com/mozart/mozart2/master/opi/emacs/oz.el
wget https://raw.githubusercontent.com/mozart/mozart2/master/opi/emacs/oz-extra.el
wget https://raw.githubusercontent.com/mozart/mozart2/master/opi/emacs/oz-server.el
wget https://raw.githubusercontent.com/mozart/mozart2/master/opi/emacs/mozart.el
</pre>
    
    <p>
      詳細なドキュメントはここ
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://dream.inf.ed.ac.uk/computing/installed/mozart/doc/opi/index.html">https://dream.inf.ed.ac.uk/computing/installed/mozart/doc/opi/index.html</a>
      </li>
    </ul>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    Elipsと環境変数の設定
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      設定ファイルに以下を書く。
    </p>
    
    <p>
      OZHOMEに mozartをインストールしたパスを設定。PATHにその配下のbinを指定。
    </p>
    
    <pre class="example">
(or (getenv "OZHOME")
    (setenv "OZHOME" 
            "/mnt/win/opt/mozart"))   ; or wherever Mozart is installed
(setenv "PATH" (concat (getenv "OZHOME") "/bin:" (getenv "PATH")))

(add-to-list 'auto-mode-alist '("\\.oz\\'" . oz-mode))
(add-to-list 'auto-mode-alist '("\\.ozg\\'" . oz-gump-mode))
(autoload 'run-oz "oz" "" t)
(autoload 'oz-mode "oz" "" t)
(autoload 'oz-gump-mode "oz" "" t)
(autoload 'oz-new-buffer "oz" "" t)
</pre>
    
    <p>
      これでもよい。
    </p>
    
    <pre class="example">
export OZHOME=/mnt/win/opt/mozart
export PATH=/opt/mozart/bin:$PATH
</pre>
    
    <p>
      これで、あとは.oz拡張子がついたファイルを開けば ozモードで 編集できる。ばっちし。
    </p></p>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      Environment
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <ul class="org-ul">
        <li>
          Mint Linux 16
        </li>
        <li>
          Emacs 24.3.1
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      Special Thanks
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <ul class="org-ul">
        <li>
          <a href="https://dream.inf.ed.ac.uk/computing/installed/mozart/doc/opi/node2.html">2 Invoking the OPI</a>
        </li>
        <li>
          <a href="https://www.eecs.ucf.edu/~leavens/ComS541Fall06/running_oz.shtml#">Running Oz</a>
        </li>
      </ul>
    </div></p>
  </div></p>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/emacs_logo.jpg