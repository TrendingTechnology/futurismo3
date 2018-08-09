---
author: admin
categories:
- 未分類
date: 2013-03-07T14:33:22+00:00
dsq_thread_id:
- 3.7740925e+09
pvc_views:
- 1898
tags:
- TopCoder
- topcoder_diary
title: '[TopCoder日記] SRM 572, Division 2'
type: post
url: /archives/=1237
---

今回は、TopCoderに参加前にEclipseCoderからログインできず、かなりあたふたしたが、なんとか登録完了。

  * [Eclipseプラグインのインストール/アップデートでNo repository found containingが出てあたふたする場合の解決方法 | Futurismo][1]

安心して、開始時間までジョギングに出かけたら見事に遅刻したorz。

### Level 1: EasyHomework

与えられた配列の要素の積の符号を求める問題。与えられた配列をそのまま計算すると桁あふれするので、1/-1に要約するのがポイント。これはチョロかった。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:61da4f9c-0533-4c37-8186-01eb3c2fa9cc" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">/*
*  TopCoder
*  SRM       : 572
*  Division  : 2
*  Level     : 1
*
*  Created on: 2013/03/07
*      Author: tsu_nera
*/
#include &lt;string&gt;
#include &lt;vector&gt;
using namespace std;

class EasyHomework {

     public: string determineSign(vector&lt;int&gt; A) {

          // Initialization
          int rslt_integer = 1;
          int now_integer = 0;

          // Search
          for (int i = 0; i &lt; (int)A.size(); ++i) {

               if( A[i] == 0 )     return "ZERO";

               now_integer = ( A[i] &gt; 0) ? 1 : -1;
               rslt_integer *= now_integer;
          }

          // Judge
          return ( rslt_integer &gt; 0 ) ? "POSITIVE"
                                        : "NEGATIVE";
     }

};
</pre>
</div>

&#160;

### Level2: NextOrPrev

与えられたstart文字列を規則に従ってgoal文字列まで変形する。
    
  
変形までにかかる最小コストを求める。

ただし、変形の過程で文字列の中の文字は一意であることが条件。
    
  
反例はわかったのだが、そのアルゴリズムがわからなかった。。。挫折。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:5275d873-3323-4626-8c1b-ad3e8f208f9e" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">/*
 *  TopCoder
 *  SRM       : 572
 *  Division  : 2
 *  Level     : 2
 *
 *  Created on: 2013/03/06
 *      Author: tsu_nera
 */
using namespace std;

#define debug(x) cout &lt;&lt; #x &lt;&lt; " = " &lt;&lt; x &lt;&lt; endl;
#define size(a) int ((a).size())

class NextOrPrev {

public: int getMinimum( int nextCost, int prevCost, string start, string goal) {

        int cost = 0;
        int distance = 0;

        for(int i = 0; i &lt; size(start); i++) {
               for(int j = 0; j &lt; size(start); j++) {
                      if( ((start[i] - start[j]) * (goal[i] - goal[j]) ) &lt; 0 ) {
                            return -1;
                     }
              }
       }

        for(int i = 0; i &lt; size(start); i++ ) {
              distance = ( goal[i] - start[i] );

               if( distance == 0) continue;

               if( distance &gt; 0 ) {
                     cost += nextCost * distance;
              }
               else {
                     cost -= prevCost * distance;
              }
       }

        return cost;

}

};

</pre>
</div>

 [1]: https://futurismo.biz/archives/1236