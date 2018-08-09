---
author: admin
categories:
- Ruby
- 技術メモ
date: 2014-03-06T13:09:53+00:00
dsq_thread_id:
- 3.7408643e+09
pvc_views:
- 2182
tags:
- Gof
- Tk
title: 簡潔さは力なり！Rubyでステートパターン(State Pattern)を実装する
type: post
url: /archives/=2302
---

[<img alt="" src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" width="256" height="256" />][1] 

Rubyでステートパターンを勉強したので、その学習メモです。 

サンプルは前回の記事を発展させたもの。 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    ステート・パターンとは
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      状態遷移をわかりやすく実装するためのパターン。
    </p>
    
    <p>
      各状態をクラスで定義する。各状態は、抽象的なスーパークラスのサブクラスになる。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://ja.wikipedia.org/wiki/State_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3">State パターン &#8211; Wikipedia</a>
      </li>
    </ul>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    Spec
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      以下のような仕様を実装したい。
    </p>
    
    <blockquote>
      <p>
        停止中に再生ボタンをクリックと動作中を表示<br /> 停止中に停止ボタンをクリックとなにも表示しない<br /> 動作中に再生ボタンをクリックと一時停止を表示<br /> 動作中に停止ボタンをクリックと停止を表示<br /> 一時停止中に再生ボタンをクリックする動作中を表示<br /> 一時停止中に停止ボタンをクリックする停止中を表示
      </p>
    </blockquote>
    
    <p>
      状態は、停止中、一時停止中、実行中の3つ。この3つをクラスにする。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    実装比較
  </h2>
  
  <div class="outline-text-2" id="text-3">
  </div>
  
  <div id="outline-container-sec-3-1" class="outline-3">
    <h3 id="sec-3-1">
      普通の実装
    </h3>
    
    <div class="outline-text-3" id="text-3-1">
      <p>
        if文が多いですね。
      </p>
      
      <p>
      </p>
      
      <p>
        ここで、さらにBoot中、Shutdown中なんて2つの状態追加がはいったらなかなか死ねます。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-3-2" class="outline-3">
    <h3 id="sec-3-2">
      パターン適用後
    </h3>
    
    <div class="outline-text-3" id="text-3-2">
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    感動のボイント
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      感動のポイントをアピール。自分はここに感動した。
    </p>
    
    <pre><code>
  def start

    if (@status == OFFLINE)
      @status = ONLINE
      @textValue = "動作中"
      return
    end

    if (@status == ONLINE)
      @status = SUSPEND
      @textValue = "一時停止中"
      return
    end

    if (@status == SUSPEND)
      @status = ONLINE
      @textValue = "動作中"
      return
    end
  end

  def stop

    if (@status == ONLINE)
      @status = OFFLINE
      @textValue = "停止中"
      return
    end

    if (@status == SUSPEND)
      @status = OFFLINE
      @textValue = "停止中"
      return
    end
  end
</code></pre>
    
    <pre><code>
  def start
    @status = @status.start
  end

  def stop
    @status = @status.stop
  end</code></pre>
    
    <p>
      なんという簡潔さだろうか！ふるえちゃう。
    </p></p>
  </div></p>
</div>

 [1]: https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite