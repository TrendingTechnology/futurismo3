---
author: admin
categories:
- 未分類
date: 2013-05-25T12:45:51+00:00
dsq_thread_id:
- 3.7561285e+09
pvc_views:
- 3414
tags:
- cygwin
- git
title: Cygwinでgit push時にパスワード入力を省略する方法
type: post
url: /archives/=1357
---

Cygwinでgit pushするとき、いちいちパスワードをうつのが面倒だ。なにか回避方法がないものか？

普通の（Linux)の場合、$HOME/.netrcに以下を追加すればよいらしい。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:9778472b-4673-47f9-94a3-3589db9288b7" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre name="code" class="c:nogutter:nocontrols">machine github.com
login tsu-nera
password ****************
</pre>
</div>

&#160;

ただし、Cygwinではうまくいかず、_netrcという名前にしろとあったり。

  * [windows &#8211; netrc not accepted by git &#8211; Stack Overflow][1] 
  * [Git &#8211; How to use .netrc file on windows to save user and password &#8211; Stack Overflow][2] 

これでもうまくイカなかった。しかたがないので、expectコマンドを使って、パスワード入力を自動化した。



#### 追記

名前は.netrcにして、アクセス権限を変更したらうまくいくようになった！！

chmod 600 ~/.netrc

[git clone https://ID@HOST/&#8230; できない場合の暫定対策 &#8211; iWA’s 雑記@はてな出張所][3]

 [1]: https://stackoverflow.com/questions/6903158/netrc-not-accepted-by-git
 [2]: https://stackoverflow.com/questions/6031214/git-how-to-use-netrc-file-on-windows-to-save-user-and-password/6031266#6031266
 [3]: https://d.hatena.ne.jp/vmi/20111025/p1