---
author: admin
categories:
- アルゴリズム
date: 2015-12-18T01:46:00+00:00
dsq_thread_id:
- 4.413345e+09
pvc_views:
- 765
tags:
- TopCoder
title: TopCoder SRM672 Div2 Easy SetPartialOrder
type: post
url: /archives/=5508
---

![TopCoder][1]

<div id="outline-container-orgheadline1" class="outline-2">
  <h2 id="orgheadline1">
    問題
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline1">
    <p>
      Intの配列AとBが与えられる。
    </p>
    
    <ul class="org-ul">
      <li>
        等しいなら&#8221;EQUAL&#8221;、
      </li>
      <li>
        AがBのサブセットなら&#8221;LESS&#8221;、
      </li>
      <li>
        BがAのサブセットなら&#8221;GREATER&#8221;、
      </li>
      <li>
        それ以外なら&#8221;INCOMPARABLE&#8221;と返す。
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-orgheadline2" class="outline-2">
  <h2 id="orgheadline2">
    方針
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline2">
    <p>
      setを使う. サブセットは < で比較するのを始めて知った. issubset というメソッドもあるらしい.
    </p>
  </div>
</div>

<div id="outline-container-orgheadline3" class="outline-2">
  <h2 id="orgheadline3">
    回答
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline3">
    [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221; ]<br /> class SetPartialOrder:<br /> def compareSets(self, a, b):<br /> a = set(a)<br /> b = set(b)</p> 
    
    <p>
      if a == b:<br /> return &#8220;EQUAL&#8221;<br /> elif a < b: return "LESS" elif a > b:<br /> return &#8220;GREATER&#8221;<br /> else:<br /> return &#8220;INCOMPARABLE&#8221;<br /> [/sourcecode] </div> </div>

 [1]: https://futurismo.biz/wp-content/uploads/topcoder.png