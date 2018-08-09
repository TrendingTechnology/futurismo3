---
author: admin
categories:
- 技術メモ
date: 2012-07-01T05:36:02+00:00
dsq_thread_id:
- 3.7198272e+09
pvc_views:
- 7365
tags:
- cygwin
- Julius
title: cygwin 環境で mkdfa.plが動作しない
type: post
url: /archives/=132
---

Julius 4.2を利用して、記述文法ファイル(hoge.grammar, hoge.voca)を mkdfa.plを使ってコンパイルしたらエラ－した。 

<pre>call.grammar has 1 rules
call.voca    has 5 categories and 5 words
---
Error:       Can't open grammar file "/tmp/g9356.grammar"
Error: cannot open "call.dfa.tmp"
---
no .dfa or .dict file generated
</pre>

調べてみると、Juliusのバージョンが3.5.2ならばコンパイルが通るらしい。  
（レベルダウンではないか！）

コンパイルのためだけに tempフォルダに旧バージョンのJuliusを落としてきてコンパイル。  
Julius 3.5.2:   
[<u><font color="#0066cc">https://sourceforge.jp/projects/julius/downloads/21175/julius-3.5.2-win32bin.zip/</font></u>][1]

実行結果:

<pre><p>
  $ /cygdrive/c/temp/julius/bin/mkdfa.pl call
  call.grammar has 1 rules
  call.voca    has 5 categories and 5 words
  ---
  Now parsing grammar file
  "rror:       Lexical mistake "
  ---
  no .dfa or .dict file generated
  
</p>

<p>
  &nbsp;
</p></pre>

エラ－の出方が変わった！  
調べてみると、文法ファイルがShift-jisなのでエラ－している。  
utf-8に変換してコンパイルすると、成功。

<pre>call.grammar has 1 rules
call.voca    has 5 categories and 5 words
---
Now parsing grammar file
Now modifying grammar to minimize states[-1]
Now parsing vocabulary file
Now making nondeterministic finite automaton[6/6]
Now making deterministic finite automaton[6/6]
Now making triplet list[6/6]
---
generated: call.dfa call.term call.dict
</pre>

参考URL

  * <https://julius.sourceforge.jp/cgi-bin/cbbs-temp/cbbs.cgiarchives/age=75&mode=alk&no=0&W=T> 
      * <https://www.voxforge.org/home/dev/acousticmodels/linux/create/htkjulius/tutorial/data-prep/step-1/comments/mkdfa.pl-error></ul>

 [1]: https://sourceforge.jp/projects/julius/downloads/21175/julius-3.5.2-win32bin.zip/