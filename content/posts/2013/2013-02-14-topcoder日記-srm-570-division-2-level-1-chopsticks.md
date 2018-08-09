---
author: admin
categories:
- C++
- 日記
date: 2013-02-14T13:05:53+00:00
dsq_thread_id:
- 3.72947e+09
pdrp_attributionLocation:
- end
pvc_views:
- 1863
tags:
- TopCoder
- topcoder_diary
title: '[TopCoder日記] SRM 570, Division 2, Level 1 : Chopsticks'
type: post
url: /archives/=1198
---

TopCoder SRM570に参加した記録です。

### 当日の感想

今回で3回目の参戦。   
英語の問題文にひるまないだけの度胸はついた。   
当初思っていたよりも難しくはないことは分かった。

プログラミングをしているよりも、白紙に向かっていろいろと数式を書いている時間の方が長い。プログラミングは、考えた解法をそのまま書くだけと言った感じ。

言語の壁という点では、英語よりもC++の知識が乏しいのがつらい。   
vectorの使い方がわからなかったり。（配列のサイズの求め方がわからん！)

わからなくなったら独習C++を元にガンパル。

### Level 1 : Chopsticks

#### 問題

異なる長さの箸がN本ある。   
同じ長さのペアの数がパーティーに招待できる人数。   
さあ、招待できる人数の最大値を求めよ。

システムテストで落とされた。なぜだろう。   
連想配列を利用して、参考書を見ながらもう少し綺麗に書きなおした。   
連想配列が空気を吸うように使いこなせればいいな。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:a4433f15-35ae-4103-bf25-e9fb09994557" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">/*  TopCoder
 *  SRM       : 570
 *  Division  : 1
 *  Level     : 2
 *
 *  Created on: 2013/02/14
 *      Author: tsu_nera&lt;fox10225fox@gmail.com&gt;
 */
 
#include &lt;algorithm&gt;
#include &lt;iostream&gt;
#include &lt;map&gt;
#include &lt;numeric&gt;
#include &lt;set&gt;
#include &lt;sstream&gt;
#include &lt;string&gt;
#include &lt;vector&gt;
using namespace std;
 
#define FOR(i,s,e) for (int i = int(s); i != int(e); i++)
#define FORIT(i,c) for (typeof((c).begin()) i = (c).begin(); i != (c).end(); i++)
#define ISEQ(c) (c).begin(), (c).end()
 
class Chopsticks {
 
public: int getmax(vector&lt;int&gt; length) {
 
  map&lt;int, int&gt; dic;
 
  for (int i = 0; i &lt; (int)length.size(); i++) {
    dic[length[i]] = 0;
  }
 
  for (int i = 0; i &lt; (int)length.size(); i++) {
    dic[length[i]]++;
  }
 
  int ans = 0;
  map&lt;int, int&gt;::iterator it;
  for (it = dic.begin() ; it != dic.end(); it++) {
    ans += ( (*it).second /2);
  }
 
  return ans;
 
}
 
};</pre>
</div>

### Level 2 : RobotHerbDiv2

#### 問題

ロポットが与えられた配列と規則に従って移動する。
    
  
最終的に移動した場所の原点からの距離を求めよ。

規則を漸化式に起こそうとしたが、途中で時間切れ。