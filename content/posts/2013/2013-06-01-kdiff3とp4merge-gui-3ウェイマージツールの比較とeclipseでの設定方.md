---
author: admin
categories:
- Eclipse
- 日記
date: 2013-05-31T23:57:54+00:00
dsq_thread_id:
- 3.7279037e+09
pvc_views:
- 5979
title: kdiff3とP4Merge GUI 3ウェイマージツールの比較とEclipseでの設定方法
type: post
url: /archives/=1375
---

### はじめに

前回の記事で、コマンドラインから3ウェイマージをするためのコマンド diff3を調べました。

[GNU Diffutilsを使い倒す！diff3を使って他人の修正ブランチを自分のブランチに３ウェイマージする | Futurismo][1]

今回は、GUIから3ウェイマージをするためのツールを調べてみます。２つのツールを試しました。

  * kdiff3 
  * P4Merge 

いろんなツールがあるっぽい。

[version control &#8211; What&#8217;s the best three-way merge tool? &#8211; Stack Overflow][2]

#### 環境

  * Windows 7 x64 
  * Eclipse 4.2 Juno 

### ダウンロード＆インストール

#### kdiff3のダウンロードとインストール

LinuxライクなUIのkdiff3を試します。

<a href="https://kdiff3.sourceforge.net/" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://kdiff3.sourceforge.net/" width="150" height="130" /></a> <a style="color: #0070c5" href="https://kdiff3.sourceforge.net/" target="_blank">KDiff3 &#8211; Homepage</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://kdiff3.sourceforge.net/" />  <br style="clear: both" />

以下のリンクからダウンロード。マルチプラットフォームでWindows,Mac,Linuxといろんなインストーラがおいてある。

  * [<font color="#0066cc">https://sourceforge.jp/projects/sfnet_kdiff3/</font>][3] 
  * KDiff3-64bit-Setup_0.9.97.exe 

#### P4Mergeのダウンロードとインストール

P4Mergeは版数管理システム Perforce（パワーフォース）のマージツールです。Perforce自体は有料だけれども、そのマージツールは無料なので、嬉しい。

<a href="https://www.perforce.com/product/components/perforce-visual-merge-and-diff-tools" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://www.perforce.com/product/components/perforce-visual-merge-and-diff-tools" width="150" height="130" /></a> <a style="color: #0070c5" href="https://www.perforce.com/product/components/perforce-visual-merge-and-diff-tools" target="_blank">Visual Merge and Diff Tools | Perforce</a>  <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://www.perforce.com/product/components/perforce-visual-merge-and-diff-tools" />

&#160;

&#160;

ダウンロードは以下から。

  * [<font color="#0066cc">Perforce Downloads | Perforce</font>][4]
  * P4Merge: Visual Merge Toolの + をクリック
  * OSと32/64bitを選択して、ダウンロードを選択。
  * （とりあえず)Skip Registrationaを選択。

インストール時にはいろいろと他のツールのインストールも求められますが、まずはP4Mergeだけを入れます。

<div id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:54068544-028f-4823-915c-2506e9a80db7" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5884281134850308370"><img style="border: none; padding: 0px; margin: 0px" alt="skitch.png" src="https://lh6.ggpht.com/-O7M1RdxpaQg/UakqhBFI-RI/AAAAAAAAAXk/zW3yHTyRasM/skitch.png" /></a>
</div>

&#160;

### 差分比較

起動して２つのファイルを指定すると差分比較できます。

#### kdiff3

<div id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:fd548b4a-2534-456f-bfbe-5610d7cd4bdc" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5884281054305721746"><img style="border: none; padding: 0px; margin: 0px" alt="skitch.jpg" src="https://lh3.ggpht.com/-k3xFK-_HQcw/UakqcVB0HZI/AAAAAAAAAXU/74RwjCWfDYk/skitch.jpg" /></a>
</div>

#### P4merge

<div id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:699e82fe-440a-4af6-ab33-fd0062597ce3" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5884281116685779778"><img style="border: none; padding: 0px; margin: 0px" alt="skitch.jpg" src="https://lh5.ggpht.com/-Mdt4z-uuCno/Uakqf9aYQ0I/AAAAAAAAAXc/_9FgtNDMeX8/skitch.jpg" /></a>
</div>

&#160;

### マージ

両者とも、3ウェイマージをサポートしています。3ウェイマージがあれば、衝突(Conflict)を自動解決できます。つまりは、2ウェイマージでは手動マージしかできないものが、自動マージできるということ。

[マージ (バージョン管理システム) &#8211; Wikipedia][5]

3つのファイルを指定します。

#### kdiff3

<div id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:c5c8c2a7-3be0-4621-adaf-1a59b50b0fa7" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5884281183734165026"><img style="border: none; padding: 0px; margin: 0px" alt="skitch.png" src="https://lh6.ggpht.com/-lTt8FynsfmU/Uakqj3L9biI/AAAAAAAAAX0/AMu535YYd6A/skitch.png" /></a>
</div>

ツールバーから マージ -> 現在のファイルをマージを選択してマージします。

#### P4Merge

<div id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:1dba7515-0f81-4ecd-984f-3b460d441b90" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5884281150911972354"><img style="border: none; padding: 0px; margin: 0px" alt="skitch.jpg" src="https://lh3.ggpht.com/-K_EePQ8GkdQ/Uakqh86ihAI/AAAAAAAAAXs/vUcFmadJ3Ng/skitch.jpg" /></a>
</div>

&#160;

### kdiff3とP4Mergeの比較

kdiff3とP4Mergeでは、マージ結果が異なりました。

  * P4Mergeは自分の修正と相手の修正の両方を取り込んでマージ 
  * kdiff3は相手の修正を優先してマージ 

個人的には、P4Mergeの機能を求めているので、P4Mergeのほうがよいかなという印象。P4Mergeはとてもカラフル。kdiff3は古くさいUI。見た目的には、圧倒的にP4Mergeに軍配が上がる。

ただ、P4Megeはフォルダ指定の比較ができないが、kdiff3はできる。また、競合時の解決では、kdiff3はキーボードショートカットで選択できるが、P4Mergeでは選択できない。つまり操作性や機能面ではkdiff3のほうが優る。

というわけで、一長一短でどちらがいいとはいえないようだ。

### Eclipseの外部ツールとして利用する

Eclipseから比較ツールを利用したいことがたくさんある。External diff Tool Pluginを入れる。導入方法は過去記事を。

[Eclipseの比較エディタでWinMergeを使うためのメモ | Futurismo][6]

Eclipseを開き、ツールバーの

  * ウィンドウ -> 設定
  * 一般 -> 比較/外部ツール

を選択。外部diff実行ツールでkdiff3または、P4Mergeを選択。

コマンドライン引数に以下を入力。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:52c0111b-29f6-4b5b-915d-2a017b50ad75" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c">%first %first %second
#それぞれ意味は、(ベース) (自分のファイル) (相手のファイル）</pre>
</div>

<div id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:f74adc3e-d0d3-4f27-99aa-1625ec5bd11b" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5884296032955295330"><img style="border: none; padding: 0px; margin: 0px" alt="skitch.png" src="https://lh4.ggpht.com/-7a6pgzsK3uI/Uak4EM2KZmI/AAAAAAAAAYU/G8fLFv6sDrY/skitch.png" /></a>
</div>

&#160;

あとは、Eclipseで2つのファイルを選択して、右クリックから 比較 -> 相互(外部ツール)を選択すればよい。

#### 参考

  * [KDiff3導入の話 &#8211; 文殊堂][7] 
  * [Googleでも採用されているPerforce社製のマージツールPerforce Visual Merge Tool (P4Merge)を使ってみる &#8211; 大人になったら肺呼吸][8]

 [1]: https://futurismo.biz/archives/1374
 [2]: https://stackoverflow.com/questions/572237/whats-the-best-three-way-merge-tool
 [3]: https://sourceforge.jp/projects/sfnet_kdiff3/
 [4]: https://www.perforce.com/downloads/Perforce-Software-Version-Management/complete_list/Customer%20Downloads
 [5]: https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%BC%E3%82%B8_(%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E7%AE%A1%E7%90%86%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)#3.E3.82.A6.E3.82.A7.E3.82.A4.E3.83.9E.E3.83.BC.E3.82.B8
 [6]: https://futurismo.biz/archives/1256
 [7]: https://d.hatena.ne.jp/monjudoh/20090430/1241095338
 [8]: https://d.hatena.ne.jp/replication/20091221/1261351398