---
author: admin
categories:
- Emacs
- Ruby
date: 2014-03-29T04:02:00+00:00
dsq_thread_id:
- 3.7298304e+09
excerpt: Emacsでrubydbを利用してステップ実行する
pvc_views:
- 2380
title: Emacsでrubydbを利用してステップ実行する
type: post
url: /archives/=2358
---

[<img alt="" src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" width="256" height="256" />][1] 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    ruby-debugについて
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      Rubyには、debugというデバッカが標準ライブラリとしてついている。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://docs.ruby-lang.org/ja/2.1.0/library/debug.html">library debug</a>
      </li>
    </ul>
    
    <p>
      これをつかうと、gdbのようなステップ実行ができる。
    </p></p>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      使い方
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <p>
        コンソールから以下のように入力する。
      </p>
      
      <pre><code>ruby -rdebug [filename]
</code></pre>
      
      <p>
        (rdb:1)というコンソールが現れて、入力待ちになる。操作方法は以下のとおり。
      </p>
      
      <p>
        ステップ実行関連のコマンドは以下。ほぼgdbですね。
      </p>
      
      <pre><code>  
  b[reak] [file:|class:][line|method]
  b[reak] [class.][line|method]   set breakpoint to some position

  wat[ch] [expression]       set watchpoint to some expression

  b[reak]                    list breakpoints

  del[ete][ nnn]             delete some or all breakpoints

  c[ont]                     run until program ends or hit breakpoint
  s[tep][ nnn]               step (into methods) one line or till line nnn
  n[ext][ nnn]               go over one line or till line nnn
  l[ist][ (-|nn-mm)]         list program, - lists backwards


  q[uit]                     exit from debugger
  r[estart]                  restart program
</code></pre>
      
      <p>
        個人的には、このへんの値参照が役立ちそう。
      </p>
      
      <pre><code>
  v[ar] g[lobal]             show global variables
  v[ar] l[ocal]              show local variables
  v[ar] i[nstance] [object]  show instance variables of object
  v[ar] c[onst] [object]     show constants of object
</code></pre>
      
      <p>
        あとは、watchコマンドとdispコマンドを組み合わせたのがよさそう。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://d.hatena.ne.jp/takihiro/20100404/1270370312">https://d.hatena.ne.jp/takihiro/20100404/1270370312</a>
        </li>
      </ul>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    Emacsといっしょにつかう
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      Emacsようのelispをつかうと、実行中のステップがEmacsから見ることができる。
    </p>
    
    <p>
      elispはRubyのソースコードのmiscディレクトリのなかにある。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.ruby-lang.org/ja/downloads/">ダウンロード</a>
      </li>
    </ul>
    
    <p>
      rubydb3x.elとrubydb2x.eclが入っているけれど，rubydx2x.elは19.2x以前向けなので，3xを使用する。
    </p>
    
    <p>
      rubydb3x.elをロードパスが通った場所において、init.elに以下を追加。
    </p>
    
    <pre><code>(autoload 'rubydb "rubydb3x" "run rubydb on program file in buffer" t)
</code></pre>
    
    <p>
      これで、M-x rubydbをおすとデバッガが起動する。
    </p></p>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      ヘルプコマンドから抜きだし
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <pre><code>Commands
  b[reak] [file:|class:][line|method]
  b[reak] [class.][line|method]
                             set breakpoint to some position
  wat[ch] [expression]       set watchpoint to some expression
  cat[ch] ([exception]|off)  set catchpoint to an exception
  b[reak]                    list breakpoints
  cat[ch]                    show catchpoint
  del[ete][ nnn]             delete some or all breakpoints
  disp[lay] [expression]     add expression into display expression list
  undisp[lay][ nnn]          delete one particular or all display expressions
  c[ont]                     run until program ends or hit breakpoint
  s[tep][ nnn]               step (into methods) one line or till line nnn
  n[ext][ nnn]               go over one line or till line nnn
  w[here]                    display frames
  f[rame]                    alias for where
  l[ist][ (-|nn-mm)]         list program, - lists backwards
                             nn-mm lists given lines
  up[ nn]                    move to higher frame
  down[ nn]                  move to lower frame
  fin[ish]                   return to outer frame
  tr[ace] (on|off)           set trace mode of current thread
  tr[ace] (on|off) all       set trace mode of all threads
  q[uit]                     exit from debugger
  v[ar] g[lobal]             show global variables
  v[ar] l[ocal]              show local variables
  v[ar] i[nstance] [object]  show instance variables of object
  v[ar] c[onst] [object]     show constants of object
  m[ethod] i[nstance] [obj]  show methods of object
  m[ethod] [class|module]    show instance methods of class or module
  th[read] l[ist]            list all threads
  th[read] c[ur[rent]]       show current thread
  th[read] [sw[itch]] [nnn]  switch thread context to nnn
  th[read] stop [nnn]        stop thread nnn
  th[read] resume [nnn]      resume thread nnn
  pp expression              evaluate expression and pretty_print its value
  p expression               evaluate expression and print its value
  r[estart]                  restart program
  h[elp]                     print this help
</code></pre></p>
    </div></p>
  </div></p>
</div>

 [1]: https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite