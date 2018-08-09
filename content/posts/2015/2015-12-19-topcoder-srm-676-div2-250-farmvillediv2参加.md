---
author: admin
categories:
- アルゴリズム
date: 2015-12-18T17:52:00+00:00
dsq_thread_id:
- 4.415265e+09
pvc_views:
- 839
tags:
- TopCoder
title: TopCoder SRM 676 Div2 250 FarmvilleDiv2(参加)
type: post
url: /archives/=5532
---

<div id="outline-container-orgheadline1" class="outline-2">
  <h2 id="orgheadline1">
    問題
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline1">
    <p>
      n個の植物がある. それぞれ time[i]秒成長するのにかかる.
    </p>
    
    <p>
      cost[i]をbudgetのなかから支払うと、1秒成長を早めることができる.
    </p>
    
    <p>
      time, cost, budgetが与えられる. 植物を育てることのできる時間の最小値をかえせ.
    </p>
  </div>
</div>

<div id="outline-container-orgheadline2" class="outline-2">
  <h2 id="orgheadline2">
    方針
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline2">
    <p>
      costを昇順にソーティング. costの低い順に時間を計算
    </p>
    
    <ul class="org-ul">
      <li>
        budgetがまだあるときは、total時間は加算しない.
      </li>
      <li>
        budgetがないときは、time分 total時間を加算する.
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-orgheadline3" class="outline-2">
  <h2 id="orgheadline3">
    解答
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline3">
    <p>
      timeとcostをインデックスをそろえながらソーティングするよい方法が思い つかなかったので、自力でソーティングアルゴリズムを実装した。
    </p>
    
    <p>
      なにかよい方法はないものか。他の人の解答をみて研究することにする.
    </p>
    
    <p>
      [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221; ]<br /> class FarmvilleDiv2:<br /> def insertion_sort(self, time, cost, N):<br /> for i in range(1, N):<br /> v1 = time[i]<br /> v2 = cost[i]<br /> j = i &#8211; 1<br /> while j >= 0 and cost[j] > v2:<br /> time[j + 1] = time[j]<br /> cost[j + 1] = cost[j]<br /> j -= 1<br /> time[j + 1] = v1<br /> cost[j + 1] = v2<br /> return time, cost
    </p>
    
    <p>
      def minTime(self, time, cost, budget):<br /> time = list(time)<br /> cost = list(cost)<br /> time, cost = self.insertion_sort(time, cost, len(cost))
    </p>
    
    <p>
      ret = 0
    </p>
    
    <p>
      for t, c in zip(time, cost):<br /> for i in range(t):<br /> if budget &#8211; c >= 0:<br /> budget -= c<br /> else:<br /> ret += 1
    </p>
    
    <p>
      return ret<br /> [/sourcecode]
    </p>
  </div>
</div>