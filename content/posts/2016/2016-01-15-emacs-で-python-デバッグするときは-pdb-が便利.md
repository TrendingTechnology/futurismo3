---
author: admin
categories:
- Emacs
- Python
date: 2016-01-15T09:43:00+00:00
dsq_thread_id:
- 4.493106e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 3908
side:
- "y"
title: Emacs で Python デバッグするときは pdb が便利
title_view:
- "y"
type: post
url: /archives/=5794
---

Emacs で Python のデバッグをするときは、pdb が便利. 

以下を参考にして設定してみた. 

<ul class="org-ul">
  <li>
    <a href="https://twistedmatrix.com/documents/15.0.0/core/howto/debug-with-emacs.html">Debugging Python(Twisted) with Emacs — Twisted 15.0.0 documentation</a>
  </li>
</ul>

<div id="outline-container-orgheadline1" class="outline-2">
  <h2 id="orgheadline1">
    手順
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline1">
    <ul class="org-ul">
      <li>
        デバッグしたいファイルまで M-x cd で移動。
      </li>
      <li>
        以下のスクリプトを書いて、パスが通った場所におく
      </li>
    </ul>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> #!/bin/sh<br /> exec python -m pdb $1 $2 $3 $4 $5 $6 $7 $8 $9<br /> [/sourcecode]
    </p>
    
    <p>
      Python2 だとこっち.
    </p>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> #!/bin/sh<br /> exec python2 /usr/lib/python2.7/pdb.py $1 $2 $3 $4 $5 $6 $7 $8 $9<br /> [/sourcecode]
    </p>
    
    <ul class="org-ul">
      <li>
        M-x pdb を実行
      </li>
      <li>
        ミニバッファで <code>pdb (file 名)</code> を実行
      </li>
      <li>
        画面が 2 分割されて、ソースと pdb の画面が現れる.
      </li>
      <li>
        (pdb) コンソール上で n とか s で ステップ実行
      </li>
    </ul>
    
    <p>
      便利！
    </p>
  </div>
</div>