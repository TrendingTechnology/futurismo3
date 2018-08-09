---
author: admin
categories:
- Emacs
- Python
- 技術メモ
date: 2014-11-09T12:04:00+00:00
dsq_thread_id:
- 3.6936668e+09
excerpt: Emacs で Python 開発環境を構築
pvc_views:
- 12284
title: Emacs で Python 開発環境を構築
type: post
url: /archives/=2680
---

<div id="outline-container-unnumbered-1" class="outline-2">
  <h2 id="unnumbered-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-1">
    <p>
      coursera で Python をつかう講座を 2 つとった.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.coursera.org/course/compinvesting1">Computational Investing, Part I | Coursera</a>
      </li>
      <li>
        <a href="https://www.coursera.org/course/musictech">Survey of Music Technology | Coursera</a>
      </li>
    </ul>
    
    <p>
      もちろん Emacs で開発環境をつくったので, 構築メモ.
    </p>
    
    <p>
      <img alt="" src="https://futurismo.biz/wp-content/uploads/emacs_logo.jpg" /> </div> </div> 
      
      <div id="outline-container-unnumbered-2" class="outline-2">
        <h2 id="unnumbered-2">
          入力支援
        </h2>
        
        <div class="outline-text-2" id="text-unnumbered-2">
          <p>
            python.el は公式, python-mode.el は Python コミュニティによって作成されたもの.
          </p>
        </div>
        
        <div id="outline-container-unnumbered-3" class="outline-3">
          <h3 id="unnumbered-3">
            python
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-3">
            <p>
              Emacs にデフォルトではいっているやつ.
            </p>
          </div>
        </div>
        
        <div id="outline-container-unnumbered-4" class="outline-3">
          <h3 id="unnumbered-4">
            python-mode
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-4">
            <p>
              Python コミュニティによって作成されたもの.
            </p>
            
            <ul class="org-ul">
              <li>
                <a href="https://github.com/emacsmirror/python-mode">emacsmirror/python-mode</a>
              </li>
              <li>
                <a href="https://launchpad.net/python-mode/">python-mode.el in Launchpad</a>
              </li>
              <li>
                <a href="https://tnt.math.se.tmu.ac.jp/~tetsushi/nzmath/emacs-python-mode.html">Guide &#8211; Software &#8211; Emacs &#8211; python-mode</a>
              </li>
            </ul>
            
            <p>
              ショートカットがまとまっている.
            </p>
            
            <ul class="org-ul">
              <li>
                <a href="https://ikautimituaki.hatenablog.com/entry/20111120/1321806070">python-mode の便利なショートカットまとめ &#8211; まったりいんふぉまてぃくすめもらんだむ</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div id="outline-container-unnumbered-5" class="outline-3">
          <h3 id="unnumbered-5">
            インデント設定
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-5">
            <p>
              4 で設定.
            </p>
            
            <p>
              [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (add-hook &#8216;python-mode-hook<br /> &#8216;(lambda ()<br /> (setq indent-tabs-mode nil)<br /> (setq indent-level 4)<br /> (setq python-indent 4)<br /> (setq tab-width 4)))<br /> [/sourcecode]
            </p>
          </div>
        </div>
      </div>
      
      <div id="outline-container-unnumbered-6" class="outline-2">
        <h2 id="unnumbered-6">
          コードリーディング
        </h2>
        
        <div class="outline-text-2" id="text-unnumbered-6">
        </div>
        
        <div id="outline-container-unnumbered-7" class="outline-3">
          <h3 id="unnumbered-7">
            helm-etags-plus
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-7">
            <p>
              ダグジャンプ. ctags を利用する. そして, ctags を Emacs から利用するために, 最近は helm-etags-plus なるものを使っていたりする.
            </p>
            
            <ul class="org-ul">
              <li>
                <a href="https://github.com/jixiuf/helm-etags-plus">jixiuf/helm-etags-plus</a>
              </li>
            </ul>
            
            <p>
              [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;helm-etags+)<br /> [/sourcecode]
            </p>
            
            <p>
              [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> $ ctags -o TAGS *.py<br /> [/sourcecode]
            </p>
          </div>
        </div>
        
        <div id="outline-container-unnumbered-8" class="outline-3">
          <h3 id="unnumbered-8">
            swoop
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-8">
            <p>
              ctags はメソッドの定義にはジャンプできるけど, 変数の宣言にジャンプできない.
            </p>
            
            <p>
              変数の宣言に飛びたいときは, swoop が最近は大のお気に入り.
            </p>
            
            <ul class="org-ul">
              <li>
                <a href="https://fukuyama.co/emacs-swoop">Emacs バッファ内高速ナビゲーション Swoop.el を作りました. &#8211; Web 学び</a>
              </li>
            </ul>
            
            <p>
              [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;swoop)<br /> (global-set-key (kbd &#8220;M-o&#8221;) &#8216;swoop)<br /> (global-set-key (kbd &#8220;C-M-o&#8221;) &#8216;swoop-multi)<br /> ;; (global-set-key (kbd &#8220;M-o&#8221;) &#8216;swoop-pcre-regexp)<br /> (global-set-key (kbd &#8220;C-S-o&#8221;) &#8216;swoop-back-to-last-position)
            </p>
            
            <p>
              (define-key isearch-mode-map (kbd &#8220;M-o&#8221;) &#8216;swoop-from-isearch)<br /> (define-key swoop-map (kbd &#8220;M-o&#8221;) &#8216;swoop-multi-from-swoop)
            </p>
            
            <p>
              ;; サイズ変更禁止<br /> (setq swoop-font-size-change: nil)<br /> [/sourcecode]
            </p>
          </div>
        </div>
        
        <div id="outline-container-unnumbered-9" class="outline-3">
          <h3 id="unnumbered-9">
            imenu
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-9">
            <p>
              関数一覧を表示する. そのままだと動かなかったので, いかのリンクを参考にした.
            </p>
            
            <ul class="org-ul">
              <li>
                <a href="https://qiita.com/lambdasakura@github/items/ceb9bc6fb008c959ec4b">Emacs の Python 開発環境構築メモ &#8211; Qiita</a>
              </li>
            </ul>
            
            <p>
              [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (semantic-mode 1)<br /> (add-hook &#8216;python-mode-hook<br /> (lambda ()<br /> (setq imenu-create-index-function &#8216;python-imenu-create-index)))<br /> [/sourcecode]
            </p>
          </div>
        </div>
      </div>
      
      <div id="outline-container-unnumbered-10" class="outline-2">
        <h2 id="unnumbered-10">
          リファクタリング
        </h2>
        
        <div class="outline-text-2" id="text-unnumbered-10">
          <p>
            主に名前変更の Elisp を導入.
          </p>
          
          <p>
            参考リンク:
          </p>
          
          <ul class="org-ul">
            <li>
              <a href="https://stackoverflow.com/questions/28796/what-refactoring-tools-do-you-use-for-python">What refactoring tools do you use for Python? &#8211; Stack Overflow</a>
            </li>
          </ul>
        </div>
        
        <div id="outline-container-unnumbered-11" class="outline-3">
          <h3 id="unnumbered-11">
            anzu
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-11">
            <p>
              インタラクティブな補完.
            </p>
            
            <ul class="org-ul">
              <li>
                <a href="https://github.com/syohex/emacs-anzu">syohex/emacs-anzu</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div id="outline-container-unnumbered-12" class="outline-3">
          <h3 id="unnumbered-12">
            iedit
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-12">
            <p>
              C-;から気軽に同じキーワードを編集できる.
            </p>
            
            <ul class="org-ul">
              <li>
                <a href="https://www.emacswiki.org/emacs/Iedit">EmacsWiki: Iedit</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div id="outline-container-unnumbered-13" class="outline-3">
          <h3 id="unnumbered-13">
            Ropemacs
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-13">
            <p>
              Python 用のリファクタリングツール.
            </p>
            
            <ul class="org-ul">
              <li>
                <a href="https://rope.sourceforge.net/ropemacs.html">ropemacs, rope in emacs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div id="outline-container-unnumbered-14" class="outline-2">
        <h2 id="unnumbered-14">
          コーディング支援
        </h2>
        
        <div class="outline-text-2" id="text-unnumbered-14">
        </div>
        
        <div id="outline-container-unnumbered-15" class="outline-3">
          <h3 id="unnumbered-15">
            jedi
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-15">
            <p>
              Python のオムニ補完 (かしこい補完) をしてくれる.
            </p>
            
            <ul class="org-ul">
              <li>
                <a href="https://qiita.com/yuu116atlab/items/2a62cb880ac863dcc8ef">emacs-jedi の install &#8211; Qiita</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div id="outline-container-unnumbered-16" class="outline-3">
          <h3 id="unnumbered-16">
            ac-python
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-16">
            <p>
              auto-complete の python 強化版.
            </p>
            
            <p>
              [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;ac-python)<br /> (add-to-list &#8216;ac-modes &#8216;python-2-mode)<br /> [/sourcecode]
            </p>
          </div>
        </div>
        
        <div id="outline-container-unnumbered-17" class="outline-3">
          <h3 id="unnumbered-17">
            quickrun
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-17">
            <p>
              quickrun を利用すれば, python コードを Emacs から実行可能.
            </p>
            
            <ul class="org-ul">
              <li>
                <a href="https://github.com/syohex/emacs-quickrun">https://github.com/syohex/emacs-quickrun</a>
              </li>
            </ul>
            
            <p>
              システムの version が 3 で, Emacs からは 2 を利用したいときは, 以下のようにすれば実行コマンドをオーバライドできる.
            </p>
            
            <p>
              [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (quickrun-add-command &#8220;python&#8221;<br /> &#8216;((:command . &#8220;python2&#8221;))<br /> :override t)<br /> [/sourcecode]
            </p>
          </div>
        </div>
      </div>
      
      <div id="outline-container-unnumbered-18" class="outline-2">
        <h2 id="unnumbered-18">
          静的解析
        </h2>
        
        <div class="outline-text-2" id="text-unnumbered-18">
        </div>
        
        <div id="outline-container-unnumbered-19" class="outline-3">
          <h3 id="unnumbered-19">
            flymake
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-19">
            <p>
              flymake でエラーチェックを実施. エラーチェックのエンジンに pyflakes を利用する.
            </p>
            
            <p>
              [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> $ sudo pip install pyflakes<br /> [/sourcecode]
            </p>
            
            <p>
              Emacswiki を参考に設定.
            </p>
            
            <ul class="org-ul">
              <li>
                <a href="https://www.emacswiki.org/PythonProgrammingInEmacs">EmacsWiki: Python Programming In Emacs</a>
              </li>
            </ul>
            
            <p>
              [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (when (load &#8220;flymake&#8221; t)<br /> (defun flymake-pyflakes-init ()<br /> ; Make sure it&#8217;s not a remote buffer or flymake would not work<br /> (when (not (subsetp (list (current-buffer)) (tramp-list-remote-buffers)))<br /> (let* ((temp-file (flymake-init-create-temp-buffer-copy<br /> &#8216;flymake-create-temp-inplace))<br /> (local-file (file-relative-name<br /> temp-file<br /> (file-name-directory buffer-file-name))))<br /> (list &#8220;pyflakes&#8221; (list local-file)))))<br /> (add-to-list &#8216;flymake-allowed-file-name-masks<br /> &#8216;(&#8220;\\.py\\'&#8221; flymake-pyflakes-init)))<br /> [/sourcecode]
            </p>
          </div>
        </div>
      </div>
      
      <div id="outline-container-unnumbered-20" class="outline-2">
        <h2 id="unnumbered-20">
          さいごに
        </h2>
        
        <div class="outline-text-2" id="text-unnumbered-20">
        </div>
        
        <div id="outline-container-unnumbered-21" class="outline-3">
          <h3 id="unnumbered-21">
            Environment
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-21">
            <ul class="org-ul">
              <li>
                ArchLinux
              </li>
              <li>
                Emacs 24.4
              </li>
            </ul>
          </div>
        </div>
        
        <div id="outline-container-unnumbered-22" class="outline-3">
          <h3 id="unnumbered-22">
            Special Thanks
          </h3>
          
          <div class="outline-text-3" id="text-unnumbered-22">
            <ul class="org-ul">
              <li>
                <a href="https://www.emacswiki.org/PythonProgrammingInEmacs">EmacsWiki: Python Programming In Emacs</a>
              </li>
              <li>
                <a href="https://www.jesshamrick.com/2012/09/18/emacs-as-a-python-ide/">Emacs as a Python IDE &#8211; Jessica Hamrick</a>
              </li>
              <li>
                <a href="https://pedrokroger.net/configuring-emacs-python-ide/">Configuring Emacs as a Python IDE &#8211; Pedro Kroger</a>
              </li>
              <li>
                <a href="https://uchikoshi22.hatenadiary.jp/entry/20110925/1316936253">Emacs を Python 用 IDE としてセットアップ &#8211; uchikoshi22&#8217;s blog</a>
              </li>
              <li>
                <a href="https://d.hatena.ne.jp/cou929_la/20110525/1306321857">emacs の python 開発環境を整える &#8211; フリーフォーム フリークアウト</a>
              </li>
              <li>
                <a href="https://blog.kzfmix.com/entry/1334218401">Emacs の Python 開発環境を整えた</a>
              </li>
              <li>
                <a href="https://lambdalisue.hatenablog.com/entry/2013/06/23/071344">Vim を最強の Python 開発環境にする 2 &#8211; Λ Lisue&#8217;s blog</a>
              </li>
              <li>
                <a href="https://github.com/gabrielelanaro/emacs-for-python">gabrielelanaro/emacs-for-python</a>
              </li>
            </ul>
          </div>
        </div>
      </div>