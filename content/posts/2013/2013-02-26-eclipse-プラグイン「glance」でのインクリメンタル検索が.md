---
author: admin
categories:
- Eclipse
- 日記
date: 2013-02-26T12:41:30+00:00
dsq_thread_id:
- 3.7201505e+09
pvc_views:
- 4805
tags:
- CDT
title: Eclipse プラグイン「Glance」でのインクリメンタル検索が便利な件
type: post
url: /archives/=1209
---

Eclipse CDTを使っていると、インクリメンタルサーチがけっこう貧弱に感じる。   
かといって、検索機能を起動するまでもなくさくっと調べたい。

そんなときには、「Glance」がけっこう良かった。

<a href="https://code.google.com/p/eclipse-glance/" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://code.google.com/p/eclipse-glance/" width="150" height="130" /></a> <a style="color: #0070c5" href="https://code.google.com/p/eclipse-glance/" target="_blank">eclipse-glance &#8211; Incremental Text Search and Highlight in Eclipse &#8211; Google Project Hosting</a>  <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://code.google.com/p/eclipse-glance/" />

&#160;

&#160;

Glanceプラグインを利用すると、インクリメンタルサーチがサクッと、ハイライトが綺麗に検索できます。便利！

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:e4622916-6ab5-47c5-a56c-38726c1a84d2" class="wlWriterEditableSmartContent">
  <div>
  </div>
</div>

<br style="clear: both" />

### Glanceインストール方法

ツールバーの[ヘルプ] > [Eclipseマーケットプレイス]から[Glance]を検索。   
あとは、指示に従ってインストール。

### Glanceのキーバインドを変更する

標準のキーバインドだと「Ctrl + Alt + F」が割り当てられている。   
これは、Eclipse CDTキーバインドのデフォルトでのキーバインドと重複している。

既存のインクリメンタルサーチ[Ctrl + J]をGlanceでのサーチに置き換えるのがよい。

ツールバーの[ウィンドウ] > [設定] > [一般] > [キー]を選択。   
検索窓から[Ctrl + J]で引っかかったコマンドをアンパインドする。   
次に[Open Glance]のキーバインドを[Ctrl + J]に割り当てる。

### Glance使用例

こんな感じ。

[<img src="https://lh3.googleusercontent.com/-a_0aG47JM3I/USyklwCvReI/AAAAAAAAAHk/G8rJDOFVpAg/s400/20130226_glance.png" width="422" height="363" />][1]

 [1]: https://picasaweb.google.com/lh/photo/dqv3DQ837lUgxlTtuT8nEzyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite