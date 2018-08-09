---
author: admin
categories:
- Eclipse
- Emacs
- Java
- 技術メモ
date: 2014-05-18T10:47:00+00:00
dsq_thread_id:
- 3.7129958e+09
excerpt: Eclim で Java 開発環境をつくったメモです
pvc_views:
- 6668
title: Eclim で Emacs と Eclipse のいいとこどり!Emacs で Java 開発環境を構築した (副題 打倒 Eclipse!)
type: post
url: /archives/=2462
---

![][1]

[toc] 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      よし, 認めよう. 私は, Eclipse フリークだった.
    </p>
    
    <p>
      Eclipse ですべての開発環境の統合を夢見て, あらゆるプラグインを試した.
    </p>
    
    <p>
      <a href="https://futurismo.biz/eclipsecdt4cpp">全 C/C++ プログラマに捧ぐ!Eclipse CDT を使う時のオススメ機能/ プラグインまとめ | Futurismo</a>
    </p>
    
    <p>
      歳をとるにつれて, 若かりし誤った考えを改めた. 真の統合開発環境は Emacs なのでは?
    </p>
    
    <p>
      いや, うすうすは気づいている. Java 開発では Eclipse が最強なことくらい.
    </p>
    
    <p>
      しかし, それを分かっていてあえて Emacs を使うことは美しい行為ではないか?
    </p>
    
    <p>
      それは, 死を覚悟して決戦に挑む武士のように.
    </p>
    
    <p>
      この記事は, そんな不安と挑戦の記録です.
    </p>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      Environment
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <ul class="org-ul">
        <li>
          Linux Mint 16
        </li>
        <li>
          Eclipe 4.3 Kepler
        </li>
        <li>
          Emacs 24
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    Java 開発環境について
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      まずは, Emacs における Java 開発環境を調べた.
    </p>
    
    <p>
      以下の 3 つが選択肢としてある. 詳細な解説はリンク先に譲る.
    </p>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      JDEE
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      CEDET ベースのツール. あまりメンテナンスされていないようだ.</p> 
      
      <ul class="org-ul">
        <li>
          <a href="https://mikio.github.io/article/2012/12/23_emacsjdeejava.html">Emacs 中毒者に贈る JDEE による Java 開発環境の構築|ざる魂</a>
        </li>
        <li>
          <a href="https://epian-wiki.appspot.com/wiki/Emacs/JDEEEmacs/JDEE%20-%20epian-wiki">https://epian-wiki.appspot.com/wiki/Emacs/JDEEEmacs/JDEE%20-%20epian-wiki</a>
        </li>
        <li>
          <a href="https://www.emacswiki.org/emacs/JavaDevelopmentEnvironment">EmacsWiki: Java Development Environment</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      malabar-mode
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      JDEE にかわってでてきたモダンな java のメジャーモード.</p> 
      
      <ul class="org-ul">
        <li>
          <a href="https://d.hatena.ne.jp/nekop/20101215/1292380225">Emacs で Java を書く &#8211; nekop の日記</a>
        </li>
        <li>
          <a href="https://d.hatena.ne.jp/lranran123/20130404/1365088550">Emacs で Java の環境構築, CEDET と yasnippet と malabar-mode &#8211; 趣味プログラマがまれになんかしたことの記録</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-2-3" class="outline-3">
    <h3 id="sec-2-3">
      Eclim
    </h3>
    
    <div class="outline-text-3" id="text-2-3">
      Emacs から Eclipse をつかう. その発想があったか!</p> 
      
      <ul class="org-ul">
        <li>
          <a href="https://sleepboy-zzz.blogspot.jp/2014/02/emacsjava_22.html">memo: Emacs で Java の設定</a>
        </li>
        <li>
          <a href="https://d.hatena.ne.jp/clairvy/20100630/1277854580">Emacs-Eclim を試す &#8211; クラなんとか or くらなんとか or cla なんとかの日記</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-2-4" class="outline-3">
    <h3 id="sec-2-4">
      選定する
    </h3>
    
    <div class="outline-text-3" id="text-2-4">
      <p>
        選ぶに当たって重視する機能は,
      </p>
      
      <ul class="org-ul">
        <li>
          JUnit 連携機能
        </li>
        <li>
          リファクタリング
        </li>
        <li>
          コード補完・タグジャンプ
        </li>
        <li>
          Android 開発連携
        </li>
      </ul>
      
      <p>
        malabar-mode に挑戦したが, maven がよくわからずに挫折.
      </p>
      
      <p>
        なので, eclim を試す.
      </p>
    </div>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    開発環境を整える
  </h2>
  
  <div class="outline-text-2" id="text-3">
  </div>
  
  <div id="outline-container-sec-3-1" class="outline-3">
    <h3 id="sec-3-1">
      eclim
    </h3>
    
    <div class="outline-text-3" id="text-3-1">
      インストーラがあるので, 指示にしたがって入れればよい.</p> 
      
      <ul class="org-ul">
        <li>
          <a href="https://eclim.org/install.html">Download / Install &#8211; eclim (eclipse + vim)</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-3-2" class="outline-3">
    <h3 id="sec-3-2">
      eclim-emacs
    </h3>
    
    <div class="outline-text-3" id="text-3-2">
      emacs から利用するためには, eclim-emacs を入れる.</p> 
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/senny/emacs-eclim">senny/emacs-eclim</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    使い方
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      設定ファイルに以下を追記.
    </p>
    
    <p>
      [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221;]<br /> (require &#8216;eclim)<br /> (require &#8216;eclimd)
    </p>
    
    <p>
      ;; java-mode で有効<br /> (add-hook &#8216;java-mode-hook &#8216;eclim-mode)<br /> [/sourcecode]
    </p>
    
    <p>
      M-x start-eclimd で eclipse を eclim デーモンとして起動.
    </p>
    
    <p>
      M-x eclim-project-mode で workspace にあるプロジェクト一覧が表示される.
    </p>
    
    <p>
      適当にソースを選んでごにょごにょ. 詳しくは, README 参照. まだ, あんまりいじくりまわしていない.
    </p>
    
    <p>
      M-x stop-eclimd で eclipse を eclim デーモンを終了.
    </p>
    
    <p>
      このページがとても詳しいのでリンクをはっておきます.
    </p>
    
    <dl class="org-dl">
      <dt>
        [[<a href="https://www.skybert.net/emacs/java/">https://www.skybert.net/emacs/java/</a>][.:: skybert.net :: emacs
      </dt>
      
      <dd>
        java ::.]]
      </dd>
    </dl>
  </div>
  
  <div id="outline-container-sec-4-1" class="outline-3">
    <h3 id="sec-4-1">
      auto-complete/company-mode で自動補完
    </h3>
    
    <div class="outline-text-3" id="text-4-1">
      <p>
        auto-complete/company-mode で eclipse の補完機能と連携できる.
      </p>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221;]<br /> ;; regular auto-complete initialization<br /> (require &#8216;auto-complete-config)<br /> (ac-config-default)<br /> ;; add the emacs-eclim source<br /> (require &#8216;ac-emacs-eclim-source)<br /> (ac-emacs-eclim-config)
      </p>
      
      <p>
        ;; for company-mode<br /> ;; (require &#8216;company-emacs-eclim)<br /> ;; (company-emacs-eclim-setup)<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-sec-4-2" class="outline-3">
    <h3 id="sec-4-2">
      タグジャンプ
    </h3>
    
    <div class="outline-text-3" id="text-4-2">
      <p>
        &#8216;eclim-java-find-references で定義元にジャンプできる. しかし, gtags をしてもいい.
      </p>
      
      <p>
        [sourcecode language=&#8221;elisp&#8221; title=&#8221;&#8221;]<br /> (define-key eclim-mode-map (kbd "C-c C-e l") &#8216;eclim-java-find-references)<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-sec-4-3" class="outline-3">
    <h3 id="sec-4-3">
      Program 起動
    </h3>
    
    <div class="outline-text-3" id="text-4-3">
      <p>
        org.eclim.java.run.mainclass にメインクラスを設定.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://eclim.org/vim/java/java.html">Java / Jps &#8211; eclim (eclipse + vim)</a>
        </li>
        <li>
          <a href="https://eclim.org/vim/settings.html">Settings &#8211; eclim (eclipse + vim)</a>
        </li>
        <li>
          <a href="https://stackoverflow.com/questions/7394811/eclim-what-to-set-org-eclim-java-run-mainclass-to">vim &#8211; Eclim &#8211; What to set org.eclim.java.run.mainclass to? &#8211; Stack Overflow</a>
        </li>
      </ul>
      
      <p>
        設定方法は, .settings/org.eclim.prefs というファイルを作成して,以下を書き込む
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> org.eclim.java.run.mainclass=<Class Name><br /> [/sourcecode]
      </p>
      
      <p>
        しかし, これだけでは動作しなかった. main メソッドの場所で eclim-run-class を実行すると, ようやく eclim 経由で java program が起動.
      </p>
      
      <p>
        起動は, eclim の機能を利用するのではなくて, 別のビルドツールを利用したほうがいいな.
      </p>
    </div>
  </div>
  
  <div id="outline-container-sec-4-4" class="outline-3">
    <h3 id="sec-4-4">
      JUnit を動かす
    </h3>
    
    <div class="outline-text-3" id="text-4-4">
      <p>
        これで JUnit が動いた. これはいいな.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://groups.google.com/forum/#!topic/emacs-eclim/Bj0kyZ2mUSk">https://groups.google.com/forum/#!topic/emacs-eclim/Bj0kyZ2mUSk</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;elisp&#8221; title=&#8221;&#8221;]<br /> (defun eclim-run-test ()<br /> (interactive)<br /> (if (not (string= major-mode "java-mode"))<br /> (message "Sorry cannot run current buffer."))<br /> (compile (concat eclim-executable " -command java_junit -p " eclim&#8211;project-name " -t " (eclim-package-and-class))))<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>

<div id="outline-container-sec-5" class="outline-2">
  <h2 id="sec-5">
    最後に
  </h2>
  
  <div class="outline-text-2" id="text-5">
    <p>
      使いこなすには, 時間がかかりそうな.
    </p>
    
    <p>
      今は, まだ eclipse のほうがいいと思っている. いや, 負けるな Emacs!
    </p>
  </div>
  
  <div id="outline-container-sec-5-1" class="outline-3">
    <h3 id="sec-5-1">
      .emacs の設定
    </h3>
    
    <div class="outline-text-3" id="text-5-1">
      <p>
        最後に設定を張り付けておく.
      </p>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221;]<br /> (require &#8216;eclim)
      </p>
      
      <p>
        ;; java-mode で有効<br /> (add-hook &#8216;java-mode-hook &#8216;eclim-mode)
      </p>
      
      <p>
        ;; eclim daemon<br /> (require &#8216;eclimd)
      </p>
      
      <p>
        ;; regular auto-complete initialization<br /> (require &#8216;auto-complete-config)<br /> (ac-config-default)<br /> ;; add the emacs-eclim source<br /> (require &#8216;ac-emacs-eclim-source)<br /> (ac-emacs-eclim-config)
      </p>
      
      <p>
        ;; for company-mode<br /> ;; (require &#8216;company-emacs-eclim)<br /> ;; (company-emacs-eclim-setup)
      </p>
      
      <p>
        ;; Displaying compilation error messages in the echo area<br /> (setq help-at-pt-display-when-idle t)<br /> (setq help-at-pt-timer-delay 0.1)<br /> (help-at-pt-set-timer)
      </p>
      
      <p>
        ;; add keybinds<br /> (define-key eclim-mode-map (kbd "C-c C-e p q") &#8216;eclim-problems)<br /> (define-key eclim-mode-map (kbd "C-c C-e p o") &#8216;eclim-problems-open)<br /> (define-key eclim-mode-map (kbd "C-c C-e p n") &#8216;eclim-problems-next)<br /> (define-key eclim-mode-map (kbd "C-c C-e p p") &#8216;eclim-problems-previous)<br /> ;; Re-map `eclim-project-create&#8217; to C so that I can use c for<br /> ;; `eclim-problems-correct&#8217;<br /> (define-key eclim-mode-map (kbd "C-c C-e p C") &#8216;eclim-project-create)<br /> (define-key eclim-mode-map (kbd "C-c C-e p c") &#8216;eclim-problems-correct)<br /> (define-key eclim-mode-map (kbd "M-.") &#8216;eclim-java-find-declaration)<br /> ;; find-references = list-callers.<br /> (define-key eclim-mode-map (kbd "C-c C-e l") &#8216;eclim-java-find-references)
      </p>
      
      <p>
        ;; skip warning error<br /> (setq compilation-skip-threshold 2)
      </p>
      
      <p>
        (setq eclim-eclipse-dirs "/opt/eclipse/kepler")<br /> (setq eclim-executable "/opt/eclipse/kepler/eclim")<br /> (setq eclimd-executable "/opt/eclipse/kepler/eclimd")<br /> (setq eclimd-default-workspace "/mnt/win/src/coursera")<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/emacs_logo.jpg