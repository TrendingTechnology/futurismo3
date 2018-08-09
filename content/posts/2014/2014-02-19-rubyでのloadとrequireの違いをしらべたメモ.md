---
author: admin
categories:
- Ruby
- 技術メモ
date: 2014-02-18T23:59:42+00:00
dsq_thread_id:
- 3.7343767e+09
pvc_views:
- 2206
title: Rubyでのloadとrequireの違いをしらべたメモ
type: post
url: /archives/=2250
---

Rubyで、他のファイルを取り込むときにrequireとloadがある。 違いをしらべてみた。 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    結論
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      結論からいうと、
    </p>
    
    <ul class="org-ul">
      <li>
        コードの中で使う場合は require
      </li>
      <li>
        irbのなかで使う場合は load
      </li>
    </ul>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    詳細
  </h2>
  
  <div class="outline-text-2" id="text-2">
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      コードのなかでloadをつかってはいけない理由
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <p>
        loadをコードの中で利用すると、無限ロードがが発生する可能性がある。 具体的には、A.rbでは、load &#8216;./B&#8217;, B.rbでは load &#8216;./A&#8217;を宣言している場合、 ２つのファイルがお互いに互いをloadしあう。（C言語での2重インクルード）
      </p>
      
      <p>
        なので、コードのなかでloadをつかうのは危険。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      irbのなかでrequireをつかってはいけない理由
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <p>
        requireをつかうと、一度取り込まれた修正は更新されない。loadをつかうと更新される。 そのため、コードを修正たあとにirbでデバッグしようとしたときに、修正をirbに取り込むことができない。
      </p>
      
      <p>
        loadを利用すると、再度修正を取り込むことができる。
      </p></p>
    </div>
    
    <div id="outline-container-sec-2-2-1" class="outline-4">
      <h4 id="sec-2-2-1">
        Tips
      </h4>
      
      <div class="outline-text-4" id="text-2-2-1">
        <p>
          以下のように書くと、irbからloadしても修正は取り込まれない。
        </p>
        
        <pre><code>
if $0 == __FILE__
  ...
end
</code></pre>
        
        <p>
          irbから実行した場合、__FILE__は irb、$0はファイル名になる。
        </p></p>
      </div></p>
    </div></p>
  </div></p>
</div>