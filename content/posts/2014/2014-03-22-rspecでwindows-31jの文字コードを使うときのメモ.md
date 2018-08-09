---
author: admin
categories:
- Ruby
- 日記
date: 2014-03-22T07:27:30+00:00
dsq_thread_id:
- 3.7427005e+09
excerpt: RSpecでWindows-31Jの文字コードを使うときのメモ
pvc_views:
- 3617
tags:
- Windows
title: RSpecでWindows-31Jの文字コードを使うときのメモ
type: post
url: /archives/=2332
---

[<img alt="" src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" width="256" height="256" />][1] 

RSpecで Windows-31Jのエンコードを扱うときにハマったので、作業メモ。 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    Rubyファイルのエンコードについて
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      Rubyでは、ファイルのエンコードを判定するために、 ファイル冒頭のマジックコメントを利用している。
    </p>
    
    <pre><code>
UTF-8の場合
# coding: utf-8

Windows-31Jの場合
# coding: Windows-31J
</code></pre>
    
    <p>
      エンコードのことなる関係でRubyを利用するときは注意が必要。
    </p>
    
    <p>
      Rubyでは、文字列のエンコードを変換するために、以下のメソッドがある。
    </p>
    
    <pre><code>
# 戻り値として変更
str.encode!("UTF-8")

# 上書き変更
str.encode!("UTF-8")

# エンコードを調べる
str.encoding
</code></pre></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    RSpecでのエンコード
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      RSpecで文字列を比較するときは、当然文字コードが期待値と結果で同一な必要がある。
    </p>
    
    <p>
      specファイルもテスト対象も同一の文字コードで記述すれば比較は問題ない。
    </p>
    
    <p>
      しかし、普段Emacsに結果を表示していて、その表示がUTF-8でないと文字化けしてしまう。
    </p>
    
    <p>
      しかたがないので、以下のようにした。
    </p>
    
    <ul class="org-ul">
      <li>
        specファイルは UTF-8
      </li>
      <li>
        テスト対象ファイルは Windows-31J
      </li>
      <li>
        specからテスト対象を呼び出すときと、結果の比較で encodeメソッドを利用する。
      </li>
    </ul>
    
    <div class="org-src-container">
      <pre class="src src-ruby">it <span style="color: #e6db74;">"&#26085;&#26412;&#35486;"</span> <span style="color: #f92672; font-weight: bold;">do</span>
  line = <span style="color: #e6db74;">"SCENARIO_NAME = \'&#12371;&#12435;&#12395;&#12385;&#12399;\'"</span>.encode!(<span style="color: #e6db74;">"Windows-31J"</span>)
  <span style="color: #fd971f;">@perser</span>.parse(line, <span style="color: #fd971f;">@regexp</span>).should == <span style="color: #e6db74;">"&#12371;&#12435;&#12395;&#12385;&#12399;"</span>.encode!(<span style="color: #e6db74;">"Windows-31J"</span>)
<span style="color: #f92672; font-weight: bold;">end</span>
</pre></p>
    </div></p>
  </div></p>
</div>

 [1]: https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite