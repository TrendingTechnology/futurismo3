---
author: admin
categories:
- Emacs
- Ruby
- 技術メモ
date: 2014-02-21T12:36:47+00:00
dsq_thread_id:
- 3.7283505e+09
excerpt: EmacsのRubyでタグを自動生成してタグジャンプする方法についてしらべました
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 4929
side:
- "y"
title: EmacsのRuby環境でタグを自動生成してタグジャンプ！
title_view:
- "y"
type: post
url: /archives/=2262
---

[<img src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" alt="" width="256" height="256" />][1]

Emacsをつかっていても、Eclipseみたいにタグジャンプしたい！

そんな情念に突き動かされて、タグジャンプの方法をしらべました。

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    Ctagsを利用する
  </h2>
  
  <div id="text-1" class="outline-text-2">
    <p>
      タグジャンプを利用するためには、ctagsがRubyに対応しているようだ。
    </p>
    
    <p>
      まずは、ctagsをインストール。linux mintでは以下で入る。
    </p>
    
    <pre><code>sudo apt-get install ctags
</code></pre>
    
    <p>
      Exuberant Ctagsというものがctagsの代わにインストールされた？まあいいや。
    </p>
    
    <p>
      ルートディレクトリで以下を実行。
    </p>
    
    <pre><code>ctags-exuberant -a -e -f TAGS --tag-relative -R *
</code></pre>
    
    <p>
      TAGSが生成される。これをemacsからつかえばよい。試しに M-x find-tagsを入力して、タグジャンプが発動すればOK。
    </p>
    
    <ul class="org-ul">
      <li>
        M-. find-tags タグジャンプ
      </li>
      <li>
        M-* ジャンプ元に戻る。
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    ripper-tags で高速化
  </h2>
  
  <div id="text-2" class="outline-text-2">
    <p>
      さらに改善。ctagsよりも高速なripper-tagsというものを見つけた。Emacsにも対応しているよう。
    </p>
    
    <p>
      ripper-tagsは ctagsデータをより高速に生成するツール。
    </p>
    
    <pre><code>gem install ripper-tags
</code></pre>
    
    <p>
      ルートディレクトリで以下を実行。
    </p>
    
    <pre><code>ripper-tags -e -R -f TAGS
</code></pre>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    helm-etags-selectで見やすさアップ
  </h2>
  
  <div id="text-3" class="outline-text-2">
    <p>
      さらにさらに改善するには、helm-etags-selectがいいかも。 helmインターフェースで飛び先を絞り込み。C-x c e で発動。
    </p>
  </div>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    observrで保存を自動監視
  </h2>
  
  <div id="text-4" class="outline-text-2">
    <p>
      さらにさらにさらに改善。ctagsを保存するたびに作り直す。
    </p>
    
    <p>
      保存の監視には、observerを利用する。observerはファイル監視用のgem. watchrをforkして作られた。
    </p>
    
    <p>
      以下でインストール。
    </p>
    
    <pre><code>gem install observer
gem install rev
</code></pre>
    
    <p>
      正規表現を利用して、設定ファイルを書く。 プロジェクトのルートディレクトリにスクリプト作成。(ripper.observr)
    </p>
    
    <pre><code>watch( 'spec/(.*)_spec\.rb' )  {system("ripper-tags -e -R -f TAGS") }
watch( 'lib/.*\.rb' ) { system("ripper-tags -e -R -f TAGS") }
</code></pre>
    
    <p>
      監視スタート。
    </p>
    
    <pre><code>observr ripper.observr
</code></pre>
    
    <p>
      素晴らしき開発環境になった。
    </p>
    
    <h2>
      １６１２３１：追記 helm-etags+を使おう
    </h2>
    
    <p>
      helm-etags+のなかに含まれている、ctags-update.elを利用することで、ファイル保存時にタグを更新することができる。
    </p>
    
    <blockquote class="wp-embedded-content" data-secret="KhlnB9XtWJ">
      <p>
        <a href="https://emacs.rubikitch.com/ctags-update/">ctags-update.el : 【多言語対応関数定義ジャンプツール】Exuberant ctagsを賢く自動更新させる</a>
      </p>
    </blockquote>
    
    <p>
      <iframe class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; clip: rect(1px, 1px, 1px, 1px);" src="https://emacs.rubikitch.com/ctags-update/embed/#?secret=KhlnB9XtWJ" data-secret="KhlnB9XtWJ" width="525" height="296" title="&#8220;ctags-update.el : 【多言語対応関数定義ジャンプツール】Exuberant ctagsを賢く自動更新させる&#8221; &#8212; るびきち「新生日刊Emacs」" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
    </p>
    
    <p>
      &nbsp;
    </p>
  </div>
</div>

 [1]: https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite