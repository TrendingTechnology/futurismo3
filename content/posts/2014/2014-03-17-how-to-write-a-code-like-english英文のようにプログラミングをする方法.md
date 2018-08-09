---
author: admin
categories:
- 技術メモ
date: 2014-03-17T12:20:00+00:00
dsq_thread_id:
- 3.7338926e+09
excerpt: 英語の文章のようにプログラミングをする方法についてのまとめ
pvc_views:
- 2646
tags:
- English
- OO
title: How to write a code like English(英文のようにプログラミングをする方法)
type: post
url: /archives/=2326
---

英語の文章のようにプログラミングをする方法についてのまとめです。 

はじめに書いておくと、今回の記事の元ネタは以下の2つです。 

<ul class="org-ul">
  <li>
    <a href="https://www.find-job.net/startup/english-for-engineers-naming-conventions">正しいコーディングが身につくエンジニア英語の手引き 〜文法とクラス／メソッド、命名規則〜 | Find Job ! Startup</a>
  </li>
  <li>
    <a href="https://futurismo.biz/archives/2200">散文的ブログラミングの哲学につら抜かれたCleanCodeでカルチャーショック体験 | Futurismo</a>
  </li>
</ul>

[toc] 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    メソッド名と引数は文法にこだわるべし
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      まずは、オブジェクト指向と英語の5文型との関係性について。
    </p>
    
    <p>
      S(Subject主語)はオブジェクト、V(Verb動詞)はメソッドに対応する。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www5d.biglobe.ne.jp/chick/5senpat.html">英語５文型のまえがきと目次</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      第1文型 S + V
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <p>
        第一文型は、S+V。 誰・何は、どうする、SはVする。
      </p>
      
      <p>
        Vには、自動詞が使われる。主語と動詞で文が完結する。
      </p>
      
      <p>
        go、wait、start、listen、work, begin, come
      </p>
      
      <div class="org-src-container">
        <pre class="src src-ruby"><span style="color: #f92672; font-weight: bold;">class</span> <span style="color: #66d9ef; font-weight: bold;">S</span> 
  <span style="color: #f92672; font-weight: bold;">def</span> <span style="color: #a6e22e;">V</span> <span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">&#33258;&#21205;&#35422;</span>
  <span style="color: #f92672; font-weight: bold;">end</span>
<span style="color: #f92672; font-weight: bold;">end</span>
</pre></p>
      </div>
      
      <p>
        第一文型の動詞には、前置詞+名詞の形をした副詞句が続くことが多い。
      </p>
      
      <p>
        よって、より英語っぽくコーディングするには、
      </p>
      
      <p>
        前置詞をメソッド名に、名詞を第一引数にするべし。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-ruby"><span style="color: #f92672; font-weight: bold;">class</span> <span style="color: #66d9ef; font-weight: bold;">Bob</span>
  <span style="color: #f92672; font-weight: bold;">def</span> <span style="color: #a6e22e;">go_to</span>(place)
  <span style="color: #f92672; font-weight: bold;">end</span>

  <span style="color: #f92672; font-weight: bold;">def</span> <span style="color: #a6e22e;">wait_for</span>(girlfriend)
  <span style="color: #f92672; font-weight: bold;">end</span>

  <span style="color: #f92672; font-weight: bold;">def</span> <span style="color: #a6e22e;">live_in</span>(town)
  <span style="color: #f92672; font-weight: bold;">end</span>
<span style="color: #f92672; font-weight: bold;">end</span>
</pre></p>
      </div></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-1-2" class="outline-3">
    <h3 id="sec-1-2">
      第2文型 S + V + C
    </h3>
    
    <div class="outline-text-3" id="text-1-2">
      <p>
        第2文型は、S+V+C。 誰・何は、なんだ。S=Cの関係がなりたつもの。
      </p>
      
      <p>
        形容詞と名詞がCになる。Vには、大抵be動詞がくる。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-ruby"><span style="color: #f92672; font-weight: bold;">class</span> <span style="color: #66d9ef; font-weight: bold;">S</span> 
  <span style="color: #f92672; font-weight: bold;">def</span> <span style="color: #a6e22e;">V</span>(<span style="color: #66d9ef; font-weight: bold;">C</span>) <span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">be&#21205;&#35422; + &#24418;&#23481;&#35422;</span>
  <span style="color: #f92672; font-weight: bold;">end</span>
<span style="color: #f92672; font-weight: bold;">end</span>
</pre></p>
      </div>
      
      <p>
        しかし、be動詞をメソッドにするには具体性がない。
      </p>
      
      <p>
        be動詞以外で動詞にくる名詞を以下に列挙。
      </p>
      
      <ul class="org-ul">
        <li>
          状態系 be, look, seem, keep, remain
        </li>
        <li>
          変化系 become、get, turn, go
        </li>
        <li>
          感覚系 feel、sound、
        </li>
        <li>
          <a href="https://www.elm-lab.com/CCP040.html">第２文型をとる動詞</a>
        </li>
      </ul>
      
      <p>
        よって、より英語っぽくコーディングするには、
      </p>
      
      <p>
        第一引数に状態を入れるべし。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-1-3" class="outline-3">
    <h3 id="sec-1-3">
      第3文型 S + V + O
    </h3>
    
    <div class="outline-text-3" id="text-1-3">
      <p>
        第3文型は、S+V+O。SはOをVする。Vは他動詞。Oは目的語。
      </p>
      
      <p>
        Objective、Objectiveですよ！Objective！大事なことは3回書きます。
      </p>
      
      <p>
        つまり、Oはオブジェクトがくる。オブジェクト指向万歳。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-ruby"><span style="color: #f92672; font-weight: bold;">class</span> <span style="color: #66d9ef; font-weight: bold;">S</span> 
  <span style="color: #f92672; font-weight: bold;">def</span> <span style="color: #a6e22e;">V</span>(<span style="color: #66d9ef; font-weight: bold;">O</span>) <span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">&#20182;&#21205;&#35422; + &#12458;&#12502;&#12472;&#12455;&#12463;&#12488;</span>
  <span style="color: #f92672; font-weight: bold;">end</span>
<span style="color: #f92672; font-weight: bold;">end</span>
</pre></p>
      </div>
      
      <p>
        よって、より英語っぽくコーディングするには、
      </p>
      
      <p>
        オブジェクトか名詞を引数にするべし。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-ruby"><span style="color: #f92672; font-weight: bold;">class</span> <span style="color: #66d9ef; font-weight: bold;">Bob</span>
  <span style="color: #f92672; font-weight: bold;">def</span> <span style="color: #a6e22e;">study</span>(<span style="color: #fd971f;">@ruby</span>)
  <span style="color: #f92672; font-weight: bold;">end</span>

  <span style="color: #f92672; font-weight: bold;">def</span> <span style="color: #a6e22e;">read</span>(aBook)
  <span style="color: #f92672; font-weight: bold;">end</span>
<span style="color: #f92672; font-weight: bold;">end</span>
</pre></p>
      </div>
      
      <p>
        しかし、Oにくるものはなにも名詞ばかりでない。
      </p>
      
      <p>
        不定詞(to xxx)、動名詞(xxxing)、名詞句、名詞節もOとなり得る。 このケースはメソッドの引数とするにはすこし難しいな。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-1-4" class="outline-3">
    <h3 id="sec-1-4">
      第4文型 S + V + O + O
    </h3>
    
    <div class="outline-text-3" id="text-1-4">
      <p>
        第4文型は、S＋V＋O（人）＋O（物）。Sは
      </p>
      
      <p>
        ボイントは1つめのOは人、2つめは物。
      </p>
      
      <p>
        give, show, send, buy
      </p>
      
      <p>
        人というのは、モジュールに置き換えるのがよい。
      </p>
      
      <p>
        xxxManager, xxxListener, xxxController, xxxObserver&#x2026;.etc.
      </p>
      
      <p>
        オブジェクト間のやりとりでつかえる。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-ruby"><span style="color: #f92672; font-weight: bold;">class</span> <span style="color: #66d9ef; font-weight: bold;">Bob</span>
  <span style="color: #f92672; font-weight: bold;">def</span> <span style="color: #a6e22e;">send</span>(<span style="color: #fd971f;">@Manager</span>, <span style="color: #fd971f;">@message</span>)
  <span style="color: #f92672; font-weight: bold;">end</span>

  <span style="color: #f92672; font-weight: bold;">def</span> <span style="color: #a6e22e;">give</span>(<span style="color: #fd971f;">@girlfriend</span>, <span style="color: #fd971f;">@present</span>)
  <span style="color: #f92672; font-weight: bold;">end</span>
<span style="color: #f92672; font-weight: bold;">end</span>
</pre></p>
      </div>
      
      <p>
        よって、より英語っぽくコーディングするには、
      </p>
      
      <p>
        第一引数をやりとり先のオブジェクト、第二引数をデータにするべし。 英語を意識するならば、順番にこだわるべし。
      </p>
      
      <p>
        ちなみに、第三文型と第四文型は、変換可能。
      </p>
      
      <p>
        Tom shows hoge to him. / Tom shows him hoge.
      </p>
      
      <p>
        前置詞がともなうと引数の形にしずらいので、 第4文型として引数を2つとるほうが英語っぽい。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-1-5" class="outline-3">
    <h3 id="sec-1-5">
      第5文型 S + V + O + C
    </h3>
    
    <div class="outline-text-3" id="text-1-5">
      <p>
        第５文型は、「S＋V＋O＋C」（主語＋動詞＋目的語＋補語）。O = Cの関係がなりたつ。
      </p>
      
      <p>
        第ニ文型との対比に注意。第二文型はS=Cだが、5はO=Cの関係。
      </p>
      
      <p>
        Oには、オブジェクトがくる。Cには状態がくる。 Sオブジェクトの指示でOの状態を変化させる。
      </p>
      
      <p>
        make, call, appoint, drive, find, keep, turn, notice,
      </p>
      
      <p>
        こうやって、動詞をならべてみると、実際に利用できそうなものはあまりないな。
      </p></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    メンタルマッピングを避けるべし
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      メンタルマッピングとは、あたまの中での対応付け。 コードの中で、変数名はなにかを略されることがおおい。
    </p>
    
    <p>
      cntl -> controller, mgr -> manager, sn -> serial number
    </p>
    
    <p>
      しかし、略すと英語として読み取れなくなる。よって、メンタルマッピングには反対だ。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    コメントを書く代わりにメソッドの抽出をするべし
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      コメントはコードを雑然させる。そして、度々間違っている。
    </p>
    
    <p>
      こんなときはコメントを書く代わりに、その部分を戻り値なしのメソッドに抽出する。
    </p>
    
    <p>
      たとえば、
    </p>
    
    <div class="org-src-container">
      <pre class="src src-C++"><span style="color: #8f8f8f;">// </span><span style="color: #8f8f8f;">&#12477;&#12540;&#12488;&#12377;&#12427;&#12290;</span>
<span style="color: #f92672; font-weight: bold;">for</span>(<span style="color: #66d9ef; font-weight: bold;">int</span> <span style="color: #fd971f;">i</span>=0; i &lt; 9; i++) {
  <span style="color: #f92672; font-weight: bold;">for</span>( <span style="color: #66d9ef; font-weight: bold;">int</span> <span style="color: #fd971f;">j</span>=i+1 i &lt; 10 ; j++)
     <span style="color: #f92672; font-weight: bold;">if</span>( a[i] &gt; a[j] ) {
        swap(i, j);
     }
  }
}
</pre></p>
    </div>
    
    <p>
      これはこうリファクタリングする。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-C++"><span style="color: #66d9ef; font-weight: bold;">void</span> <span style="color: #a6e22e;">sort</span>(<span style="color: #66d9ef; font-weight: bold;">Data</span> *<span style="color: #fd971f;">a</span>) {
<span style="color: #8f8f8f;">// </span><span style="color: #8f8f8f;">&#12477;&#12540;&#12488;&#12377;&#12427;&#12290;</span>
<span style="color: #f92672; font-weight: bold;">for</span>(<span style="color: #66d9ef; font-weight: bold;">int</span> <span style="color: #fd971f;">i</span>=0; i &lt; 9; i++) {
  <span style="color: #f92672; font-weight: bold;">for</span>( <span style="color: #66d9ef; font-weight: bold;">int</span> <span style="color: #fd971f;">j</span>=i+1 i &lt; 10 ; j++)
     <span style="color: #f92672; font-weight: bold;">if</span>( a[i] &gt; a[j] ) {
        swap(i, j);
     }
  }
}
</pre></p>
    </div>
    
    <p>
      メソッド名を文章にすることで、コードが文章に近づくのだ。素晴らしいテクニック。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    if, else, while文は一行で書くべし
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      if, else, whileを一文で書くことで、より英語の文章に近づく。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-C++"><span style="color: #f92672; font-weight: bold;">if</span> (isdangerous())
  stopApplication();
<span style="color: #f92672; font-weight: bold;">else</span>
  restartAplication();
</pre></p>
    </div>
    
    <p>
      この際、条件式もメソッドに抽出する。
    </p>
    
    <p>
      javaでは is(条件)、rubyでは(条件)?というスタイルが好まれる。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-5" class="outline-2">
  <h2 id="sec-5">
    説明的変数を導入すべし
  </h2>
  
  <div class="outline-text-2" id="text-5">
    <p>
      説明的変数を導入すると、可読性が上がる。
    </p>
    
    <p>
      ぐちゃぐちゃした論理は説明的変数またはメソッド抽出でわかりやすい文章に変える。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-C++"><span style="color: #66d9ef; font-weight: bold;">bool</span> <span style="color: #fd971f;">isSuccess</span> = (&#26465;&#20214;1) && (&#26465;&#20214;2) && (&#26465;&#20214;3) || (&#26465;&#20214;4)
</pre></p>
    </div>
    
    <p>
      ここでも、if文を一行にまとめるという規則と合わせると、より文章らしくなる。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-C++"><span style="color: #f92672; font-weight: bold;">if</span> (isSuccess())
   startMusicAndSingingASong();
</pre></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-6" class="outline-2">
  <h2 id="sec-6">
    まとめ
  </h2>
  
  <div class="outline-text-2" id="text-6">
    <p>
      英語のようにコーディングするにあたって、最大の関心事が、「実行速度」だ。
    </p>
    
    <p>
      メソッドを細かくすると、それだけ遅くなるのではないか？
    </p>
    
    <p>
      大丈夫、コンパイラは進化しているので、細かいメソッド分割はコンパイラによって最適化される。詳しくは以下参照。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/1946">『Modern C++ with TDD』学習メモ(Chapter6-11) | Futurismo</a>
      </li>
    </ul>
    
    <p>
      本当にコンパイラを信じていいの？迷信ではないか？
    </p>
    
    <p>
      いや、実のところ、自分でも不安だ。どこかに書いてあったことをそのまま信じてだけだ。自信がない。
    </p>
    
    <p>
      じゃあ、ということで、コンパイラについて勉強してみよう。今日から始まる courseraの コンパイラの講義に挑戦だ！
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.coursera.org/course/compilers">Compilers | Coursera</a>
      </li>
    </ul>
  </div></p>
</div>