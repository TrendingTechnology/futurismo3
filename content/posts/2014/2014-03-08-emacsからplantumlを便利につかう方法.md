---
author: admin
categories:
- Emacs
- 技術メモ
date: 2014-03-08T01:00:00+00:00
dsq_thread_id:
- 3.7341988e+09
excerpt: EmacsからPlantUMLを便利につかう方法
pvc_views:
- 3175
tags:
- UML
title: EmacsからPlantUMLを便利につかう方法
type: post
url: /archives/=2305
---

EmacsからPlantUMLをつかう方法を調べた。 

手順はここにある。 

<ul class="org-ul">
  <li>
    <a href="https://plantuml.sourceforge.net/emacs.html">PlantUML</a>
  </li>
</ul>

いかんせん、わかりにくかったので、自分でも作業メモを残そうと思う。 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    ob-plantuml.el
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      Emacs内でplantumlをコンパイルするには、ob-plantuml.elをつかう。
    </p>
    
    <p>
      これは、24.1以降のバージョンだとbuild-inされているのでとくにインストールは不要。
    </p>
    
    <p>
      以下のサイトを参考に、init.elに以下を記述。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://d.hatena.ne.jp/a_bicky/20121016/1350347857">Emacs から PlantUML を使ってみた &#8211; あらびき日記</a>
      </li>
    </ul>
    
    <div class="org-src-container">
      <pre class="src src-emacs-lisp">(setq org-plantuml-jar-path <span style="color: #e6db74;">"/usr/share/plantuml/plantuml.jar"</span>)
(<span style="color: #f92672; font-weight: bold;">defun</span> <span style="color: #00ffff;">org-mode-init</span> ()
  (org-babel-do-load-languages
   'org-babel-load-languages
   (add-to-list 'org-babel-load-languages '(plantuml . t))))
(add-hook 'org-mode-hook 'org-mode-init)
</pre></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    使用例
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      org-modeで書いているドキュメントの中で以下のようなコードを書く。
    </p>
    
    <p>
      C-c, C-e h oで Org文書をHTML変換する。 このときに、plantumlからUML図の生成も行われる。
    </p></p>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      Code
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <pre><code>
#+BEGIN_SRC plantuml :file sample.png :cmdline -charset UTF-8
  Alice -> Bob: Authentication Request
  Bob --> Alice: Authentication Response
#+END_SRC
</code></pre></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      図
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <div class="figure">
        <p>
          <img src="https://futurismo.biz/wp-content/uploads/wpid-sample2.png" alt="sample.png" />
        </p></p>
      </div></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    plantuml-mode.el
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      plantumlを書くためのモードもあります。package.elからインストールした。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-emacs-lisp">(<span style="color: #f92672; font-weight: bold;">require</span> '<span style="color: #ae81ff;">plantuml-mode</span>)
(add-to-list 'auto-mode-alist '(<span style="color: #e6db74;">"\\.puml$latex "</span> . plantuml-mode))
(add-to-list 'auto-mode-alist '(<span style="color: #e6db74;">"\\.plantuml$"</span> . plantuml-mode))
</pre></p>
    </div>
    
    <p>
      最近は、ブログの記事をorg-modeで書いているので、これでブログ執筆が便利になった。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://zhangweize.wordpress.com/2010/08/25/creating-uml-images-by-using-plantuml-and-org-babel-in-emacs/">Creating uml images by using plantuml and org-babel in emacs | zwz&#8217;s Blog</a>
      </li>
    </ul>
  </div></p>
</div>