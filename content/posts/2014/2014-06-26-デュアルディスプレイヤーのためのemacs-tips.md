---
author: admin
categories:
- Emacs
- 技術メモ
date: 2014-06-25T22:41:00+00:00
dsq_thread_id:
- 3.701593e+09
pvc_views:
- 1544
title: デュアルディスプレイヤーのためのEmacs Tips
type: post
url: /archives/=2508
---

![][1]

会社でトリプルディスプレイにした結果、 生産性が効率が下がったように感じる今日この頃。 

生産性をあげるために、 マルチディスプレイ環境におけるEmacsの使い方について調べてみた。 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    フレーム間操作
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      マルチディスプレイでは、別フレームを利用するのがよさそう。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-sh"><span style="color: #a9a9a9;"># </span><span style="color: #a9a9a9;">&#21029;&#12501;&#12524;&#12540;&#12512;&#12434;&#29983;&#25104;</span>
C-x 5 2 

<span style="color: #a9a9a9;"># </span><span style="color: #a9a9a9;">&#12501;&#12449;&#12452;&#12523;&#12434;&#25506;&#12375;&#12390;&#21029;&#12501;&#12524;&#12540;&#12512;&#12391;&#38283;&#12367;</span>
C-x 5 f

<span style="color: #a9a9a9;"># </span><span style="color: #a9a9a9;">&#12496;&#12483;&#12501;&#12449;&#12434;&#21029;&#12501;&#12524;&#12540;&#12512;&#12391;&#38283;&#12367;</span>
C-x 5 b
</pre>
    </div>
    
    <p>
      別フレームへは以下のコマンドで移動。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-language">other-frame or C-x 5 o

next-multiframe-window
</pre>
    </div>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    ace-jump-mode
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      もっとベターなのがこの方法。ace-jump-modeを利用する。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/winterTTr/ace-jump-mode">winterTTr/ace-jump-mode</a>
      </li>
    </ul>
    
    <p>
      これを利用すると、フレームを越えて移動したい場所に3ステップでジャンプできる。
    </p>
    
    <p>
      このLispのスゴさは、Emacs Rocksの動画を見るのがよい。
    </p>
    
    <p>
      <iframe width="560" height="315" src="//www.youtube.com/embed/UZkpmegySnc" frameborder="0" allowfullscreen></iframe>
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://emacsrocks.com/e10.html">Emacs Rocks!</a>
      </li>
    </ul>
    
    <p>
      赤い文字でターゲットを絞って、ジャンプできる。すげぇ!
    </p>
    
    <p>
      Emacs is Awesome.
    </p>
  </div>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/emacs_logo.jpg