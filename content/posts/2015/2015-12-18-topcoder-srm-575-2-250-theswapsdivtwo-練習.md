---
author: admin
categories:
- アルゴリズム
date: 2015-12-18T10:31:00+00:00
dsq_thread_id:
- 4.414215e+09
pvc_views:
- 947
tags:
- TopCoder
title: TopCoder SRM 575 Div2 250 TheSwapsDivTwo (練習)
type: post
url: /archives/=5524
---

![TopCoder][1]

<div id="outline-container-orgheadline1" class="outline-2">
  <h2 id="orgheadline1">
    問題
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline1">
    <ul class="org-ul">
      <li>
        <a href="https://community.topcoder.com/stat?c=problem_statement&pm=12499">https://community.topcoder.com/stat?c=problem_statement&pm=12499</a>
      </li>
    </ul>
    
    <p>
      int型配列が与えられる。 ２個の数値の位置を入れ替える場合、得られるユニークな数列が何通りあるか.
    </p>
  </div>
</div>

<div id="outline-container-orgheadline2" class="outline-2">
  <h2 id="orgheadline2">
    方針
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline2">
    <p>
      全通り swapしてみて、ユニークな数列の数を数える.
    </p>
  </div>
</div>

<div id="outline-container-orgheadline3" class="outline-2">
  <h2 id="orgheadline3">
    回答
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline3">
    [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221; ]<br /> class TheSwapsDivTwo:<br /> def find(self, sequence):<br /> s = set()<br /> n = len(sequence)</p> 
    
    <p>
      for i in range(n &#8211; 1):<br /> for j in range(i + 1, n):<br /> l = list(sequence)<br /> l[i], l[j] = l[j], l[i]<br /> s.add(tuple(l))
    </p>
    
    <p>
      return len(s)<br /> [/sourcecode]
    </p>
  </div>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/topcoder.png