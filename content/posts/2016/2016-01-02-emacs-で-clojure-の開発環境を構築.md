---
author: admin
categories:
- Clojure
- Emacs
date: 2016-01-02T00:21:00+00:00
dsq_thread_id:
- 4.45411e+09
pvc_views:
- 3196
title: Emacs で Clojure の開発環境を構築
type: post
url: /archives/=5742
---

Clojure の勉強を始めました。 

まずはなにより Emacs の設定からかと思うので、 Clojure の Emacs 設定を整えました. 現時点での設定をプログにスナップショット. 

<div id="outline-container-orgheadline1" class="outline-2">
  <h2 id="orgheadline1">
    優れた IDE が備える機能
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline1">
    <ul class="org-ul">
      <li>
        シンタックスハイライト/ インデント clojure-mode
      </li>
      <li>
        検索・置換 たくさんあるよ.
      </li>
      <li>
        タグジャンプ ggtags
      </li>
      <li>
        コード補間 ac-clojure
      </li>
      <li>
        エラーチェック flycheck
      </li>
      <li>
        リファクタリング clj-refactor
      </li>
      <li>
        インタープリタ・デバッカ cider
      </li>
      <li>
        プロジェクト管理 projectile
      </li>
      <li>
        ドキュメント参照 eldoc
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-orgheadline9" class="outline-2">
  <h2 id="orgheadline9">
    Clojure に特科した Elisp
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline9">
  </div>
  
  <div id="outline-container-orgheadline2" class="outline-3">
    <h3 id="orgheadline2">
      clojure-mode
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline2">
      <p>
        Clojure のためのメジャーモード. シンタックスハイライトとかインデントとかを正してくれるモード. これは必須.
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
  
  <div id="outline-container-orgheadline3" class="outline-3">
    <h3 id="orgheadline3">
      cider
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline3">
      <p>
        Clojure のためのインタラクティブな開発環境.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/clojure-emacs/cider">https://github.com/clojure-emacs/cider</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;cider)<br /> ;; clojure-mode で cider を有効に<br /> (add-hook &#8216;clojure-mode-hook &#8216;cider-mode)<br /> ;; eldoc を有効にする<br /> (add-hook &#8216;cider-mode-hook &#8216;cider-turn-on-eldoc-mode))<br /> [/sourcecode]
      </p>
      
      <ul class="org-ul">
        <li>
          cider-jack-in で repl 起動
        </li>
        <li>
          cider-connect でリモート repl に接続
        </li>
      </ul>
      
      <p>
        repl と連携して開発を行うことができる. REPL 駆動開発！！
      </p>
    </div>
  </div>
  
  <div id="outline-container-orgheadline4" class="outline-3">
    <h3 id="orgheadline4">
      4clojure
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline4">
      <p>
        clojure の問題集.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/losingkeys/4clojure.el">https://github.com/losingkeys/4clojure.el</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;4clojure)<br /> [/sourcecode]
      </p>
      
      <p>
        Emacs から問題をといたり、答え合わせができる. そのまま答えを投稿できればいいのだけれども、それは未対応.
      </p>
    </div>
  </div>
  
  <div id="outline-container-orgheadline5" class="outline-3">
    <h3 id="orgheadline5">
      ac-cider
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline5">
      <p>
        auto-complete for cider. 強力な補完機能が手に入る.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/clojure-emacs/ac-cider">https://github.com/clojure-emacs/ac-cider</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;ac-cider)<br /> (add-hook &#8216;cider-mode-hook &#8216;ac-flyspell-workaround)<br /> (add-hook &#8216;cider-mode-hook &#8216;ac-cider-setup)<br /> (add-hook &#8216;cider-repl-mode-hook &#8216;ac-cider-setup)<br /> (eval-after-load &#8220;auto-complete&#8221;<br /> &#8216;(progn<br /> (add-to-list &#8216;ac-modes &#8216;cider-mode)<br /> (add-to-list &#8216;ac-modes &#8216;cider-repl-mode))))<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-orgheadline6" class="outline-3">
    <h3 id="orgheadline6">
      clojure-cheatsheet
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline6">
      <p>
        CheatSheet を参照できる.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/clojure-emacs/clojure-cheatsheet">https://github.com/clojure-emacs/clojure-cheatsheet</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;clojure-cheatsheet)<br /> (define-key clojure-mode-map (kbd &#8220;C-c C-h&#8221;) #&#8217;clojure-cheatsheet)<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-orgheadline7" class="outline-3">
    <h3 id="orgheadline7">
      clj-refactor
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline7">
      <p>
        Clojure 用リファクタリング支援ツール.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/clojure-emacs/clj-refactor.el">https://github.com/clojure-emacs/clj-refactor.el</a>
        </li>
      </ul>
      
      <p>
        できる機能か多すぎ！覚えらんない..
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/clojure-emacs/clj-refactor.el/wiki">https://github.com/clojure-emacs/clj-refactor.el/wiki</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;clj-refactor)
      </p>
      
      <p>
        (defun my-clojure-mode-hook ()<br /> (clj-refactor-mode 1)<br /> (yas-minor-mode 1) ; for adding require/use/import statements<br /> ;; This choice of keybinding leaves cider-macroexpand-1 unbound<br /> (cljr-add-keybindings-with-prefix &#8220;C-c C-m&#8221;))
      </p>
      
      <p>
        (add-hook &#8216;clojure-mode-hook #&#8217;my-clojure-mode-hook)<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-orgheadline8" class="outline-3">
    <h3 id="orgheadline8">
      clojure-snippets
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline8">
      <p>
        Yasnipeet for Clojure
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/mpenet/clojure-snippets">https://github.com/mpenet/clojure-snippets</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;clojure-snippets)<br /> (setq clojure-snippets-dir &#8220;~/.emacs.d/el-get/repo/clojure-snippets/&#8221;)<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>

<div id="outline-container-orgheadline14" class="outline-2">
  <h2 id="orgheadline14">
    主に Lisp 系に役立つ Elisp
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline14">
  </div>
  
  <div id="outline-container-orgheadline10" class="outline-3">
    <h3 id="orgheadline10">
      ggtags
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline10">
      <ul class="org-ul">
        <li>
          <a href="https://github.com/leoliu/ggtags">https://github.com/leoliu/ggtags</a>
        </li>
      </ul>
      
      <p>
        変数や関数の定義にタグジャンプする. ggtags-create-tags 関数を呼ぶと, ctags コマンドがコールされてタグがつくられる.
      </p>
      
      <p>
        と思ったら、つくられない。.globalrc に設定を追加する必要があるようだ. 以下のサイトを参考にした。ありがとうございます.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://ayato.hateblo.jp/entry/20150603/1433329200">Clojure の開発で gtags を使う &#8211; (define -ayalog &#8216;())</a>
        </li>
      </ul>
      
      <p>
        タグができたら、あとはコマンドを定義するだけ.
      </p>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;ggtags)<br /> (add-hook &#8216;clojure-mode-hook (lambda () (ggtags-mode 1)))
      </p>
      
      <p>
        ;; use helm<br /> (setq ggtags-completing-read-function nil)
      </p>
      
      <p>
        ;; use eldoc<br /> (setq-local eldoc-documentation-function #&#8217;ggtags-eldoc-function)
      </p>
      
      <p>
        ;; imenu<br /> (setq-local imenu-create-index-function #&#8217;ggtags-build-imenu-index)
      </p>
      
      <p>
        (define-key ggtags-mode-map (kbd &#8220;C-c g s&#8221;) &#8216;ggtags-find-other-symbol)<br /> (define-key ggtags-mode-map (kbd &#8220;C-c g h&#8221;) &#8216;ggtags-view-tag-history)<br /> (define-key ggtags-mode-map (kbd &#8220;C-c g r&#8221;) &#8216;ggtags-find-reference)<br /> (define-key ggtags-mode-map (kbd &#8220;C-c g f&#8221;) &#8216;ggtags-find-file)<br /> (define-key ggtags-mode-map (kbd &#8220;C-c g c&#8221;) &#8216;ggtags-create-tags)<br /> (define-key ggtags-mode-map (kbd &#8220;C-c g u&#8221;) &#8216;ggtags-update-tags)<br /> (define-key ggtags-mode-map (kbd &#8220;C-c g m&#8221;) &#8216;ggtags-find-tag-dwim)
      </p>
      
      <p>
        (define-key ggtags-mode-map (kbd &#8220;M-,&#8221;) &#8216;pop-tag-mark))<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-orgheadline11" class="outline-3">
    <h3 id="orgheadline11">
      smartparens
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline11">
      <ul class="org-ul">
        <li>
          <a href="https://github.com/Fuco1/smartparens">https://github.com/Fuco1/smartparens</a>
        </li>
      </ul>
      
      <p>
        カッコの移動を簡単にする elisp. 似たような機能に Paredit という elisp もある. どちらを使うかは好き嫌い.
      </p>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;smartparens-config)<br /> (smartparens-global-mode t)<br /> [/sourcecode]
      </p>
      
      <p>
        以下、自分のキーバインドを貼り付けるけれども、キーバインドは好きに設定してよい.
      </p>
      
      <p>
        正直、あまりつかいこなせてない&#x2026;
      </p>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (define-key sp-keymap (kbd &#8220;C-M-f&#8221;) &#8216;sp-forward-sexp) ;; forward<br /> (define-key sp-keymap (kbd &#8220;C-M-b&#8221;) &#8216;sp-backward-sexp) ;; backward
      </p>
      
      <p>
        (define-key sp-keymap (kbd &#8220;C-M-n&#8221;) &#8216;sp-next-sexp) ;; next<br /> (define-key sp-keymap (kbd &#8220;C-M-p&#8221;) &#8216;sp-previous-sexp) ;; previous
      </p>
      
      <p>
        ;; 一段中の/ 外のカッコに移動.<br /> (define-key sp-keymap (kbd &#8220;C-M-d&#8221;) &#8216;sp-down-sexp) ;; down<br /> (define-key sp-keymap (kbd &#8220;C-M-u&#8221;) &#8216;sp-up-sexp) ;; up
      </p>
      
      <p>
        ;; かっこの先頭と末尾に移動.<br /> (define-key sp-keymap (kbd &#8220;C-M-a&#8221;) &#8216;sp-beginning-of-sexp)<br /> (define-key sp-keymap (kbd &#8220;C-M-e&#8221;) &#8216;sp-end-of-sexp)
      </p>
      
      <p>
        ;; カッコのなかを削除・コピー (かたまり単位)<br /> ;; sp-kill/copy-hiblid-sexp というものもある<br /> (define-key sp-keymap (kbd &#8220;C-M-k&#8221;) &#8216;sp-kill-sexp)<br /> (define-key sp-keymap (kbd &#8220;C-M-w&#8221;) &#8216;sp-copy-sexp)
      </p>
      
      <p>
        ;; かっこを外す<br /> (define-key sp-keymap (kbd &#8220;C-M-s&#8221;) &#8216;sp-unwrap-sexp)<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-orgheadline12" class="outline-3">
    <h3 id="orgheadline12">
      show-paren-mode
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline12">
      <p>
        対応する括弧を光らせる.
      </p>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> ;; turn on highlight matching brackets when cursor is on one<br /> (show-paren-mode 1)<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-orgheadline13" class="outline-3">
    <h3 id="orgheadline13">
      rainbow-delimiters
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline13">
      <p>
        かっこの深さに応じて色付けしてくれる.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/Fanael/rainbow-delimiters">https://github.com/Fanael/rainbow-delimiters</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;rainbow-delimiters)<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>