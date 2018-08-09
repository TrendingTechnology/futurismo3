---
author: admin
categories:
- Ruby
- 技術メモ
date: 2014-03-06T11:43:00+00:00
dsq_thread_id:
- 3.723546e+09
excerpt: Rubyで定期実行処理を実装しました
pvc_views:
- 2142
tags:
- Tk
title: '[RubyTk]定期実行処理についてのメモ(Thread, TkAfter)'
type: post
url: /archives/=2297
---

[<img alt="" src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" width="256" height="256" />][1] 

RubyTkでなにかの監視処理を実施する方法を調べたことのメモです。 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    RubyTk内でsleepが使えない
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      RubyTkでは、画面表示のために、Tk.mainloopを持ちいる。
    </p>
    
    <p>
      これはメインスレッドで動作するため、 sleepをしてしまうとメインスレッドをその処理占有してしまい、 RubyTkをつかった描写ができない。また、逆もしかりである。
    </p></p>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      TkAfterをつかう
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <p>
        RubyTkでタイマ制御や定期監視のようなsleepに関わる処理に利用するライブラリがTkAfter.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.dumbo.ai.kyutech.ac.jp/nomura-ken/kajiyama/ruby_tk/after.html">https://www.dumbo.ai.kyutech.ac.jp/nomura-ken/kajiyama/ruby_tk/after.html</a>
        </li>
      </ul>
      
      <p>
        使用例は以下のとおり。
      </p>
      
      <p>
      </p>
      
      <p>
        タイマ制御がTkライブラリに依存してしまうのが個人的には気にくわなかった。
      </p>
      
      <p>
        なので、別の方法を考える。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-1-2" class="outline-3">
    <h3 id="sec-1-2">
      Threadをつかう
    </h3>
    
    <div class="outline-text-3" id="text-1-2">
      <p>
        RubyのThread機能を利用して、別スレッドで定期的な処理を動かす。
      </p>
      
      <p>
        定期的な通知には、observerライブラリを利用する。
      </p>
      
      <p>
      </p>
      
      <p>
        どちらも実現したいことは同じだけれども、2つめのアーキの方が好きだ。
      </p></p>
    </div></p>
  </div></p>
</div>

 [1]: https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite