---
author: admin
categories:
- Python
- アルゴリズム
date: 2015-12-09T10:42:00+00:00
dsq_thread_id:
- 4.3892634e+09
pvc_views:
- 2547
tags:
- TopCoder
title: TopCoderで動的計画法とメモ化再帰の問題を解いてみる(Python)
type: post
url: /archives/=5367
---

以下の参考書を元に、TopCoderの対策をしています。 

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'>
  <div class='amazlink-list' style='clear: both;'>
    <div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'>
      <a href='https://www.amazon.co.jp/%E6%9C%80%E5%BC%B7%E6%9C%80%E9%80%9F%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%9E%E3%83%BC%E9%A4%8A%E6%88%90%E8%AC%9B%E5%BA%A7-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%82%B3%E3%83%B3%E3%83%86%E3%82%B9%E3%83%88TopCoder%E6%94%BB%E7%95%A5%E3%82%AC%E3%82%A4%E3%83%89-%E9%AB%98%E6%A9%8B-%E7%9B%B4%E5%A4%A7/dp/4797367172%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4797367172' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/61G3pzteg7L._SL160_.jpg' style='border: none;' /></a>
    </div>
    
    <div class='amazlink-info' style='height:160; margin-bottom: 10px'>
      <div class='amazlink-name' style='margin-bottom:10px;line-height:120%'>
        <a href='https://www.amazon.co.jp/%E6%9C%80%E5%BC%B7%E6%9C%80%E9%80%9F%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%9E%E3%83%BC%E9%A4%8A%E6%88%90%E8%AC%9B%E5%BA%A7-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%82%B3%E3%83%B3%E3%83%86%E3%82%B9%E3%83%88TopCoder%E6%94%BB%E7%95%A5%E3%82%AC%E3%82%A4%E3%83%89-%E9%AB%98%E6%A9%8B-%E7%9B%B4%E5%A4%A7/dp/4797367172%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4797367172' rel='nofollow' target='_blank'>最強最速アルゴリズマー養成講座 プログラミングコンテストTopCoder攻略ガイド</a>
      </div>
      
      <div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>
        posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 15.12.07
      </div>
      
      <div class='amazlink-detail'>
        高橋 直大
      </div>
      
      <div class='amazlink-sub-info' style='float: left;'>
        <div class='amazlink-link' style='margin-top: 5px'>
          <img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18' /><a href='https://www.amazon.co.jp/%E6%9C%80%E5%BC%B7%E6%9C%80%E9%80%9F%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%9E%E3%83%BC%E9%A4%8A%E6%88%90%E8%AC%9B%E5%BA%A7-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%82%B3%E3%83%B3%E3%83%86%E3%82%B9%E3%83%88TopCoder%E6%94%BB%E7%95%A5%E3%82%AC%E3%82%A4%E3%83%89-%E9%AB%98%E6%A9%8B-%E7%9B%B4%E5%A4%A7/dp/4797367172%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4797367172' rel='nofollow' target='_blank'>Amazon</a>
        </div>
      </div>
    </div>
  </div>
</div>

今日は、動的計画法とメモ化再帰について勉強しました. 

<div id="outline-container-orgheadline1" class="outline-2">
  <h2 id="orgheadline1">
    動的計画法(Dynamic Programming)
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline1">
    [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> 対象となる問題を複数の部分問題に分割し、<br /> 部分問題の計算結果を記録しながら解いていく手法を総称してこう呼ぶ<br /> [/sourcecode]</p> 
    
    <ul class="org-ul">
      <li>
        <a href="https://ja.wikipedia.org/wiki/%E5%8B%95%E7%9A%84%E8%A8%88%E7%94%BB%E6%B3%95">動的計画法 &#8211; Wikipedia</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-orgheadline2" class="outline-3">
    <h3 id="orgheadline2">
      分類
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline2">
      <p>
        動的計画法には、トップダウン方式、ボトムアップ方式の二つがある. 以下のように呼ばれることが多い.
      </p>
      
      <ul class="org-ul">
        <li>
          再帰関数のメモ化 ・・・メモ化再帰、メモ化、トップダウン方式
        </li>
        <li>
          漸化式 + ループ ・・・動的計画法、分割統治法、ボトムアップ方式
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-orgheadline3" class="outline-3">
    <h3 id="orgheadline3">
      トップダウン方式(メモ化再帰)
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline3">
      <p>
        一度計算した結果を覚えておいて、 同じ計算をしようとしたときに記憶していた値を利用する.
      </p>
      
      <p>
        再帰関数を利用することで、問題を解く.
      </p>
    </div>
  </div>
  
  <div id="outline-container-orgheadline4" class="outline-3">
    <h3 id="orgheadline4">
      ボトムアップ方式(漸化式)
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline4">
      <p>
        漸化式を立てて、順々に漸化式を解いていく.
      </p>
      
      <p>
        for文を回すことで、問題を解く.
      </p>
    </div>
  </div>
</div>

<div id="outline-container-orgheadline9" class="outline-2">
  <h2 id="orgheadline9">
    問題
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline9">
  </div>
  
  <div id="outline-container-orgheadline5" class="outline-3">
    <h3 id="orgheadline5">
      SRM413 Div1 Medium
    </h3>
    
    <div class="outline-text-3" id="text-orgheadline5">
      <p>
        以下の問題をPythonで解いてみる.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.itmedia.co.jp/enterprise/articles/1003/06/news002_3.html">最強最速アルゴリズマー養成講座：アルゴリズマーの登竜門、「動的計画法・メモ化再帰」はこんなに簡単だった (3/5) &#8211; ITmedia エンタープライズ</a>
        </li>
        <li>
          <a href="https://community.topcoder.com/stat?c=problem_statement&pm=9922&rd=13504">https://community.topcoder.com/stat?c=problem_statement&pm=9922&rd=13504</a>
        </li>
      </ul>
    </div>
    
    <div id="outline-container-orgheadline6" class="outline-4">
      <h4 id="orgheadline6">
        動的計画法
      </h4>
      
      <div class="outline-text-4" id="text-orgheadline6">
        <p>
          <b>まとめらる処理をまとめて、同じ計算を行わないようにする</b>
        </p>
        
        <p>
          途中経過をメモしておいて、次の計算で使うというのが動的計画法. ここでは、i を順に計算していく.
        </p>
        
        <p>
          [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221; ]<br /> class InfiniteSequence2:<br /> def calc(self, n, p, q, x, y):<br /> dp = [0 for i in range(n + 1)]<br /> dp[0] = 1
        </p>
        
        <p>
          for i in range(1, n + 1):<br /> nexta = i / p &#8211; x<br /> nextb = i / q &#8211; y
        </p>
        
        <p>
          if nexta <= 0: a = 1 else: a = dp[nexta] if nextb <= 0: b = 1 else: b = dp[nextb] dp[i] = a + b return dp[n] [/sourcecode] </div> </div> 
          
          <div id="outline-container-orgheadline7" class="outline-4">
            <h4 id="orgheadline7">
              深さ優先探索
            </h4>
            
            <div class="outline-text-4" id="text-orgheadline7">
              <p>
                トップダウンで探索をしていく.
              </p>
              
              <p>
                [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221; ]<br /> class InfiniteSequence2:<br /> def calc(self, n, p, q, x, y):<br /> return self.dfs(n, p, q, x, y)
              </p>
              
              <p>
                def dfs(self, n, p, q, x, y):<br /> if n <= 0: return 1 return self.dfs(n / p - x, p, q, x, y) + self.dfs(n / q - y, p, q, x, y) [/sourcecode] </div> </div> 
                
                <div id="outline-container-orgheadline8" class="outline-4">
                  <h4 id="orgheadline8">
                    メモ化再帰
                  </h4>
                  
                  <div class="outline-text-4" id="text-orgheadline8">
                    <p>
                      一度計算した点は覚えておいて、余計な計算をしないのがメモ化再帰.
                    </p>
                    
                    <p>
                      [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221; ]<br /> class InfiniteSequence2:<br /> def calc(self, n, p, q, x, y):<br /> self.memo = {}<br /> return self.dfs(n, p, q, x, y)
                    </p>
                    
                    <p>
                      def dfs(self, n, p, q, x, y):<br /> if n <= 0: return 1 if n in self.memo: return self.memo[n] self.memo[n] = self.dfs(n / p - x, p, q, x, y) + self.dfs(n / q - y, p, q, x, y) return self.memo[n] [/sourcecode] </div> </div> </div> </div> 
                      
                      <div id="outline-container-orgheadline10" class="outline-2">
                        <h2 id="orgheadline10">
                          Special Thanks
                        </h2>
                        
                        <div class="outline-text-2" id="text-orgheadline10">
                          <ul class="org-ul">
                            <li>
                              <a href="https://www.itmedia.co.jp/enterprise/articles/1003/06/news002.html">最強最速アルゴリズマー養成講座：アルゴリズマーの登竜門、「動的計画法・メモ化再帰」はこんなに簡単だった (1/5) &#8211; ITmedia エンタープライズ</a>
                            </li>
                            <li>
                              <a href="https://www.itmedia.co.jp/enterprise/articles/1005/15/news002.html">最強最速アルゴリズマー養成講座：病みつきになる「動的計画法」、その淵に迫る (1/4) &#8211; ITmedia エンタープライズ</a>
                            </li>
                            <li>
                              <a href="https://shindannin.hatenadiary.com/entry/20131208/1386512864">動的計画法が苦手な人が、動的計画法が超苦手な人へアドバイスしてみる &#8211; じじいのプログラミング</a>
                            </li>
                            <li>
                              <a href="https://www.slideshare.net/iwiwi/ss-3578511">プログラミングコンテストでの動的計画法</a>
                            </li>
                          </ul>
                        </div>
                      </div>