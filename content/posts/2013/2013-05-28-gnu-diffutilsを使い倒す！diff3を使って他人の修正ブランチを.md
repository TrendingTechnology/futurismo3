---
author: admin
categories:
- Linux
date: 2013-05-27T23:12:04+00:00
dsq_thread_id:
- 3.7287695e+09
pvc_views:
- 4929
title: GNU Diffutilsを使い倒す！diff3を使って他人の修正ブランチを自分のブランチに３ウェイマージする
type: post
url: /archives/=1374
---

### はじめに

会社で使用している版数管理システムではブランチ間のマージができない。。。他人の修正を自分のブランチに取り込めないぽい。。ヽ( ﾟдﾟ)ﾉ 

ブランチ間でマージをするためには、両者のファイルを比較して、手動でマージシなければいけいない。そんなバカな、なにか方法があるのだろうと思い、調べてみた。

#### やりたいこと

  * ブランチ間の自動マージ。
  * コマンドライン上からサクッとできる。
  * ただし、競合があるときや慎重にやりたいときは、手動マージ。

### 3 way mergeアルゴリズム

調べてみると、svnやcvsもできないらしい。git やMercurialだとできる。

その違いは何かというと、マージのためのアルゴリズムが違うのだった。

[マージ (バージョン管理システム) &#8211; Wikipedia][1]

  * svn、cvs ・・・ 2 way merge(２ウェイマージ）。2つのファイルの差分を比較してマージ。競合の解決は手動。
  * git、mercural・・・3 way merge(3ウェイマージ)。2つのファイルの共通の祖先との差分を比較してマージ。競合の解決は自動。

競合を自動マージするためには、3-way mergeを使う必要がある。

### GNU Diffutilsを使い倒す！

3 way merge をサクッとこなすコマンドを探しいてたら、diff3というものを発見！これは、GNU Project のDiffutilsに含まれるコマンドの一つらしい。ということで、このDiffutilsを調べた。

[Diffutils &#8211; GNU Project &#8211; Free Software Foundation][2]

diffutils とは、cmp, diff, diff3 そして sdiff のプログラムを含むパッケージ。これらのツール群を駆使して、差分比較やマージをコマンドラインからすることができる。

### 実験

以下のようなファイルをもとに、ツールを検証してみる。

#### 比較対象

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:fa92925e-b06e-4e2d-a541-d4589de78e54" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c"># test1 ファイル
a
a
a
a
a

# test2 ファイル
a
a
b
a
a
</pre>
</div>

### diff

まずはdiffから。これはさくっと2つのファイルの差分をみるためにつかう。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:b55790aa-2ddb-40da-845e-5d7608d6f9ba" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">[tsu-nera]% diff test1 test2
3c3
&lt; a
---
&gt; b
</pre>
</div>

[Man page of DIFF][3]

### sdiff

対話的にマージするためのツール。まずは、なにも指定しないと、両者を並べてdiffしてくれる。見やすい。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:6ca4c7be-f103-4ed8-afbf-ed48622a69aa" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">[tsu-nera]% sdiff test1 test2
a                                                               a
a                                                               a
a                                                             | b
a                                                               a
a                                                               a
</pre>
</div>

差分だけをみるには、&#8217;-s&#8217;をつける。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:dcaa41ce-f2d8-4c58-a103-c7c2aeca249c" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">[tsu-nera]% sdiff -s test1 test2
a                                                             | b
</pre>
</div>

マージするには、-o "出力ファイル" をオプションでつける。マージする部分で、%のプロンプトがでるので、一つづつどうマージするか答える。手動マージで自動マージはしてくれない。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:499c21d5-0f11-4e11-afb8-4bd56d274ffd" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">ed:     両方の版にヘッダーで飾って、利用し、編集。
eb:     両側の版を使用して編集。
el:     左側の版を使用して編集。
er:     右側の版を使用して編集。
e:      新版を編集。
l:      左側の版を使用。
r:      右側の版を使用。
s:      共通行を寡黙に含む。
v:      共通行を饒舌に含む。
q:      終了。
</pre>
</div>

こんな感じでマージ。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:e855c353-751c-4198-af3b-5b7a5fa8a3e1" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">[tsu-nera]% sdiff -o output test1 test2
a                                                               a
a                                                               a
a                                                             | b
%r
a                                                               a
a                                                               a
</pre>
</div>

[Man page of SDIFF][4]

### diff3 

3 つのファイル間にある違いを探す 。つまり、

<font color="#0000ff" size="4">3 way mergeができる！(^_^)v</font>

比較のためのアルゴリズムがdiffと異なるのだ。。基本は以下。

%&#160; diff3 MINE OLDER YOURS

  * MINE ・・・自分のファイル
  * OLDER ・・・ 2つのファイルの共通の先祖
  * YOURS ・・・他人のファイル

共通の祖先を指定することがキモ。これで他人の修正を自分のファイルに取り込むことができる。

OLDER &#8212; &#8211;MINE
    
  
&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; |

&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; &#8212;YOURES

まずは実行。暗号めいた出力がでる。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:95bdaf27-9423-4474-a89e-de82bc944f37" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">[tsu-nera]% diff3 test1 test1 test2
====3
1:3c
2:3c
  a
3:3c
  b
</pre>
</div>

====3で3つめのファイルに差分があることを示す。

マージするには、-mオプションをつける。すると標準出力にマージ結果が出力されるので、リダイレクトでファイルに書き出せばよい。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:e239a6f0-d284-4a37-a24d-b7007989b788" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">[tsu-nera]% diff3 -m test1 test1 test2 &gt; output
[tsu-nera]% less output
a
a
b
a
a
</pre>
</div>

[Man page of DIFF3][5]

### まとめ

  * 差分を確認したいときは、sdiff -s で。
  * 自動マージするときは、diff3 -m で。
  * 手動マージするときは、sdiff -o で。

なんとか頑張れそう。

 [1]: https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%BC%E3%82%B8_(%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E7%AE%A1%E7%90%86%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)
 [2]: https://www.gnu.org/software/diffutils/
 [3]: https://linuxjm.sourceforge.jp/html/gnumaniak/man1/diff.1.html
 [4]: https://linuxjm.sourceforge.jp/html/gnumaniak/man1/sdiff.1.html
 [5]: https://linuxjm.sourceforge.jp/html/gnumaniak/man1/diff3.1.html