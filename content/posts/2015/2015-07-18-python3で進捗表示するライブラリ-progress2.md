---
author: admin
categories:
- Python
date: 2015-07-18T11:30:00+00:00
dsq_thread_id:
- 3.9462994e+09
pvc_views:
- 2655
title: Python3で進捗表示するライブラリ progressbar2
type: post
url: /archives/=4384
---

アプリをつくりながらPythonを勉強中. 

今日は、Queueから一つずつオブジェクトを取り出して処理するときに、 進捗表示ができたらいいなと思い、そういうライブラリを探してみた。 

progressbarというライブラリができそうなのだが、python3では動かなかった. 

困っていたら、以下を見つけた. Python3で動作することを確認. 

<ul class="org-ul">
  <li>
    <a href="https://github.com/WoLpH/python-progressbar">https://github.com/WoLpH/python-progressbar</a>
  </li>
  <li>
    <a href="https://pythonhosted.org/progressbar2/">https://pythonhosted.org/progressbar2/</a>
  </li>
</ul>

<div id="outline-container-orgheadline1" class="outline-2">
  <h2 id="orgheadline1">
    インストール
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline1">
    <p>
      pipでインストール.
    </p>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> $ sudo pip install progressbar2<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-orgheadline2" class="outline-2">
  <h2 id="orgheadline2">
    使い方
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline2">
    <p>
      Exampleページを参考にいくつか試す.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://pythonhosted.org/progressbar2/examples.html">https://pythonhosted.org/progressbar2/examples.html</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-orgheadline3" class="outline-3">
    <h3 id="orgheadline3">
      基本の使い方
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline3">
      [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221;]<br /> from progressbar import ProgressBar<br /> import time</p> 
      
      <p>
        p = ProgressBar(100)
      </p>
      
      <p>
        for i in range(100):<br /> p.update(i+1)<br /> time.sleep(0.01)<br /> [/sourcecode]
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> 100% (100 of 100) |###############################| Elapsed Time: 0:00:01 ETA: 0:00::0<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-orgheadline4" class="outline-3">
    <h3 id="orgheadline4">
      Queueサイズ分の進捗表示
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline4">
      [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221;]<br /> from progressbar import ProgressBar<br /> import queue</p> 
      
      <p>
        q = queue.Queue()
      </p>
      
      <p>
        for i in range(12345):<br /> q.put(i)
      </p>
      
      <p>
        p = ProgressBar(q.qsize()).start()
      </p>
      
      <p>
        for i in range(q.qsize()):<br /> q.get()<br /> p.update(i)
      </p>
      
      <p>
        p.finish()<br /> [/sourcecode]
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> 100% (12345 of 12345) |###########################| Elapsed Time: 0:00:00 Time: 0:00:00<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>

<div id="outline-container-orgheadline5" class="outline-2">
  <h2 id="orgheadline5">
    おわりに
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline5">
    <p>
      自分で車輪の再発明をする前に、 ネットでOSSが転がっていないか探すことが大事だと実感.
    </p>
    
    <p>
      ほしいものは、大抵おちてる、それがオープンソースの世界.
    </p>
    
    <p style="font-size:32px">
      以上、Happy Hacking!!
    </p>
  </div>
</div>