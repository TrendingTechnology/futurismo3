---
author: admin
categories:
- アルゴリズム
date: 2015-12-18T03:04:00+00:00
dsq_thread_id:
- 4.4134605e+09
pvc_views:
- 713
tags:
- TopCoder
title: TopCoder SRM 672 Div2 500 SubstitutionCipher
type: post
url: /archives/=5511
---

<div id="outline-container-orgheadline1" class="outline-2">
  <h2 id="orgheadline1">
    問題
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline1">
    <p>
      可換暗号の問題. 暗号化のために可換テーブルを利用する。
    </p>
    
    <p>
      ところが、この可換テーブルがなくなってしまった。
    </p>
    
    <p>
      a,b, y が与えられるので a -> b の変換を手がかりにして、 暗号化されたy から 復号化された文字列xを求めよ。
    </p>
  </div>
</div>

<div id="outline-container-orgheadline2" class="outline-2">
  <h2 id="orgheadline2">
    方針
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline2">
    <p>
      可換テーブルを b->aの複合ルールから求めてそれを y に適用する.
    </p>
    
    <p>
      文字が25文字のとき、全てのアルファベットの中で利用されていない 文字を調べてテーブルに追加する必要がある.
    </p>
  </div>
</div>

<div id="outline-container-orgheadline3" class="outline-2">
  <h2 id="orgheadline3">
    回答
  </h2>
  
  <div class="outline-text-2" id="text-orgheadline3">
    [sourcecode language=&#8221;python&#8221; title=&#8221;&#8221; ]<br /> allchar = list(&#8220;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#8221;)<br /> class SubstitutionCipher:<br /> def notIn(self, s):<br /> return &#8220;A&#8221;</p> 
    
    <p>
      def decode(self, a, b, y):<br /> cipher = {}
    </p>
    
    <p>
      for i in range(len(a)):<br /> cipher[b[i]] = a[i]
    </p>
    
    <p>
      if len(cipher) == 25:<br /> remain_a = list(set(allchar) &#8211; set(a))[0]<br /> remain_b = list(set(allchar) &#8211; set(b))[0]<br /> cipher[remain_b] = remain_a
    </p>
    
    <p>
      x = &#8220;&#8221;<br /> for i in range(len(y)):<br /> if y[i] not in cipher:<br /> return &#8220;&#8221;<br /> x += cipher[y[i]]
    </p>
    
    <p>
      return x<br /> [/sourcecode]
    </p>
  </div>
</div>