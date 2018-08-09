---
author: admin
categories:
- Python
- アルゴリズム
date: 2015-12-12T08:05:00+00:00
dsq_thread_id:
- 4.39708e+09
pvc_views:
- 2094
tags:
- AOJ
title: Pythonでナップザック問題(AOJ)
type: post
url: /archives/=5436
---

今日は、ナップザック問題を勉強しました. 

今回は、AOJの問題をPythonで解いてみます. 

<ul class="org-ul">
  <li>
    <a href="https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=DPL_1_B&lang=jp">https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=DPL_1_B&lang=jp</a>
  </li>
</ul>

ナップザック問題については、以下のサイトを参考にしました. 

<ul class="org-ul">
  <li>
    <a href="https://dai1741.github.io/maximum-algo-2012/docs/dynamic-programming/">動的計画法（ナップサック問題） &#8211; アルゴリズム講習会</a>
  </li>
</ul>

以下、記号の意味などは、上記サイトを参照願いします. 

<div id="outline-container-orgheadline1" class="outline-2">
  <h2 id="orgheadline1">
    深さ優先探索
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline1">
    [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221; ]<br /> N, W = map(int, raw_input().split())</p> 
    
    <p>
      v = [0] * N<br /> w = [0] * N
    </p>
    
    <p>
      for i in range(N):<br /> v[i], w[i] = map(int, raw_input().split())
    </p>
    
    <p>
      def rec(i, j):<br /> if i == N:<br /> res = 0<br /> elif j < w[i]: res = rec(i + 1, j) else: res = max(rec(i + 1, j), rec(i + 1, j - w[i]) + v[i]) return res print(rec(0, W)) [/sourcecode] 
      
      <p>
        これだと、時間制限に引っかかって、テストが通らない
      </p></div> </div> 
      
      <div id="outline-container-orgheadline2" class="outline-2">
        <h2 id="orgheadline2">
          メモ化再帰
        </h2>
        
        <div class="outline-text-2" id="text-orgheadline2">
          <p>
            深さ優先探索を改良.
          </p>
          
          <p>
            メモ化のためのテーブル dp を宣言する.
          </p>
          
          <p>
            rec(i,j)の結果は、(i,j)によって一意に決まるため、計算結果の dp[i][j]を返す.
          </p>
          
          <p>
            [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221; ]<br /> N, W = map(int, raw_input().split())
          </p>
          
          <p>
            v = [0] * N<br /> w = [0] * N<br /> dp = [[-1 for i in range(W + 1)] for j in range(N + 1)]
          </p>
          
          <p>
            for i in range(N):<br /> v[i], w[i] = map(int, raw_input().split())
          </p>
          
          <p>
            def rec(i, j):<br /> if dp[i][j] != -1:<br /> return dp[i][j]
          </p>
          
          <p>
            if i == N:<br /> res = 0<br /> elif j < w[i]: res = rec(i + 1, j) else: res = max(rec(i + 1, j), rec(i + 1, j - w[i]) + v[i]) dp[i][j] = res return res print(rec(0, W)) [/sourcecode] </div> </div> 
            
            <div id="outline-container-orgheadline3" class="outline-2">
              <h2 id="orgheadline3">
                動的計画法
              </h2>
              
              <div class="outline-text-2" id="text-orgheadline3">
                <p>
                  漸化式を解く.
                </p>
                
                <p>
                  [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221; ]<br /> N, W = map(int, raw_input().split())
                </p>
                
                <p>
                  v = [0] * N<br /> w = [0] * N<br /> dp = [[0 for i in range(W + 1)] for j in range(N + 1)]
                </p>
                
                <p>
                  for i in range(N):<br /> v[i], w[i] = map(int, raw_input().split())
                </p>
                
                <p>
                  for i in range(N &#8211; 1, -1, -1):<br /> for j in range(W + 1):<br /> if j < w[i]: dp[i][j] = dp[i + 1][j] else: dp[i][j] = max(dp[i + 1][j], dp[i + 1][j - w[i]] + v[i]) print(dp[0][W]) [/sourcecode] </div> </div> 
                  
                  <div id="outline-container-orgheadline4" class="outline-2">
                    <h2 id="orgheadline4">
                      Special Thanks
                    </h2>
                    
                    <div class="outline-text-2" id="text-orgheadline4">
                      <ul class="org-ul">
                        <li>
                          <a href="https://www.itmedia.co.jp/enterprise/articles/1005/15/news002.html">最強最速アルゴリズマー養成講座：病みつきになる「動的計画法」、その深淵に迫る (1/4) &#8211; ITmedia エンタープライズ</a>
                        </li>
                      </ul>
                    </div>
                  </div>