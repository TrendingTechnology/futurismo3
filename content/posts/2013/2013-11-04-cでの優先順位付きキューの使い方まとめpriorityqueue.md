---
author: admin
categories:
- C++
- 技術メモ
date: 2013-11-04T14:46:00+00:00
dsq_thread_id:
- 3.724888e+09
excerpt: C++ での優先順位付きキューの使い方まとめ (PriorityQueue)
follow:
- follow
index:
- index
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 12488
side:
- def
sub:
- def
tags:
- STL
title: C++ での優先順位付きキューの使い方まとめ (PriorityQueue)
type: post
url: /archives/=1981
---

<div id="outline-container-unnumbered-1" class="outline-2">
  <h2 id="unnumbered-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-1">
    <p>
      優先順位付きキューのを PriorityQueue という.
    </p>
    
    <p>
      キューの中で最大 (最小) のものを抜き出す場合などに利用する.
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-2" class="outline-2">
  <h2 id="unnumbered-2">
    使い方
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-2">
  </div>
  
  <div id="outline-container-unnumbered-3" class="outline-3">
    <h3 id="unnumbered-3">
      宣言
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-3">
      <p>
        デフォルトでは大きい順で pop されるので, 最小のものを pop で取り出すには, greater を宣言時に追記する.
      </p>
      
      <p>
        [sourcecode language=&#8221;cpp&#8221; title=&#8221;&#8221;]<br /> #include <queue><br /> using namespace std;
      </p>
      
      <p>
        priority_queue <int> maxpq; // default 大きい順<br /> priority_queue<int, vector<int>, greater<int> > minpq; // 小さい順<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-4" class="outline-3">
    <h3 id="unnumbered-4">
      関数
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-4">
    </div>
    
    <div id="outline-container-unnumbered-5" class="outline-4">
      <h4 id="unnumbered-5">
        要素を追加する (push)
      </h4>
      
      <div class="outline-text-4" id="text-unnumbered-5">
        [sourcecode language=&#8221;cpp&#8221; title=&#8221;&#8221;]<br /> pq.push (1);<br /> [/sourcecode]
      </div>
    </div>
    
    <div id="outline-container-unnumbered-6" class="outline-4">
      <h4 id="unnumbered-6">
        先頭の要素を取り出す
      </h4>
      
      <div class="outline-text-4" id="text-unnumbered-6">
        <p>
          最大 (または最小) の先頭を取り出します.
        </p>
        
        <p>
          [sourcecode language=&#8221;cpp&#8221; title=&#8221;&#8221;]<br /> pq.pop ();<br /> [/sourcecode]
        </p>
      </div>
    </div>
    
    <div id="outline-container-unnumbered-7" class="outline-4">
      <h4 id="unnumbered-7">
        要素を調べる
      </h4>
      
      <div class="outline-text-4" id="text-unnumbered-7">
        [sourcecode language=&#8221;cpp&#8221; title=&#8221;&#8221;]<br /> // キューがからかどうかを調べる<br /> pq.empty ()</p> 
        
        <p>
          // 要素数をしらべる<br /> pq.size ();
        </p>
        
        <p>
          // 次に取り出される要素を調べる<br /> pq.top ();<br /> [/sourcecode]
        </p>
      </div>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-8" class="outline-2">
  <h2 id="unnumbered-8">
    Sample
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-8">
  </div>
  
  <div id="outline-container-unnumbered-9" class="outline-3">
    <h3 id="unnumbered-9">
      昇順に取り出す
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-9">
      [sourcecode language=&#8221;cpp&#8221; title=&#8221;&#8221;]<br /> #include <queue><br /> #include <iostream><br /> using namespace std;</p> 
      
      <p>
        int main ()<br /> {<br /> priority_queue<int> pq;
      </p>
      
      <p>
        pq.push ( 2 );<br /> pq.push ( 1 );<br /> pq.push ( 3 );
      </p>
      
      <p>
        cout << pq.top () << endl;<br /> pq.pop ();<br /> cout << pq.top () << endl;<br /> pq.pop ();<br /> cout << pq.top () << endl;<br /> pq.pop ();
      </p>
      
      <p>
        return 0;<br /> }<br /> [/sourcecode]
      </p>
    </div>
    
    <div id="outline-container-unnumbered-10" class="outline-4">
      <h4 id="unnumbered-10">
        実行結果
      </h4>
      
      <div class="outline-text-4" id="text-unnumbered-10">
        [sourcecode language=&#8221;language&#8221; title=&#8221;&#8221;]<br /> 3<br /> 2<br /> 1<br /> [/sourcecode]
      </div>
    </div>
  </div>
  
  <div id="outline-container-unnumbered-11" class="outline-3">
    <h3 id="unnumbered-11">
      降順に取り出す
    </h3>
    
    <div class="outline-text-3" id="text-unnumbered-11">
      [sourcecode language=&#8221;cpp&#8221; title=&#8221;&#8221;]<br /> #include <queue><br /> #include <iostream><br /> using namespace std;</p> 
      
      <p>
        int main ()<br /> {<br /> priority_queue<int, vector<int>, greater<int> > pq;
      </p>
      
      <p>
        pq.push ( 2 );<br /> pq.push ( 1 );<br /> pq.push ( 3 );
      </p>
      
      <p>
        cout << pq.top () << endl;<br /> pq.pop ();<br /> cout << pq.top () << endl;<br /> pq.pop ();<br /> cout << pq.top () << endl;<br /> pq.pop ();
      </p>
      
      <p>
        return 0;<br /> }<br /> [/sourcecode]
      </p>
    </div>
    
    <div id="outline-container-unnumbered-12" class="outline-4">
      <h4 id="unnumbered-12">
        実行結果
      </h4>
      
      <div class="outline-text-4" id="text-unnumbered-12">
        [sourcecode language=&#8221;language&#8221; title=&#8221;&#8221;]<br /> 1<br /> 2<br /> 3<br /> [/sourcecode]
      </div>
    </div>
  </div>
</div>

<div id="outline-container-unnumbered-13" class="outline-2">
  <h2 id="unnumbered-13">
    おまけ
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-13">
    <p>
      ダイクストラ法の実装をする際に, C++ の STL があるとは知らずに, 自前で最小優先キューを実装しました. STL を利用すればよかった.
    </p>
    
    <p>
      この Java Sourse を参考に C++ に書きなおした.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="ftp://ftp.cs.princeton.edu/pub/cs226/bins/MinPQ.java">ftp://ftp.cs.princeton.edu/pub/cs226/bins/MinPQ.java</a>
      </li>
    </ul>
    
    <p>
      MinPQ:
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://gist.github.com/tsu-nera/7302383">https://gist.github.com/tsu-nera/7302383</a>
      </li>
    </ul>
  </div>
</div>