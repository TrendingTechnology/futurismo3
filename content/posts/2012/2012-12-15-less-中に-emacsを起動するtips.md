---
author: admin
categories:
- Emacs
- 技術メモ
date: 2012-12-15T12:50:25+00:00
dsq_thread_id:
- 3.7535022e+09
pvc_views:
- 2305
tags:
- cygwin
title: less 中に Emacsを起動するTips
type: post
url: /archives/=960
---

less 中に vを押すと通常はviを起動してしまけれど、あたしはEmacs派なので、   
なんとかEmacsを起動したいなと思ったので、Let&#8217;s hack begen.

### 環境変数export EDITOR=emacsを設定する

方法は簡単だった。環境変数で以下を指定すればよい。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:1a59cc6c-06b9-4286-af0f-a133b31063b3" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">export EDITOR=emacs</pre>
</div>

bashならば.bashrcとか。
    
  
zshならば、.zshrcとかに記入してやればよい。

以上