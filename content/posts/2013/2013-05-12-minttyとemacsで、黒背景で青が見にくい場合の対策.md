---
author: admin
categories:
- Emacs
date: 2013-05-12T03:11:30+00:00
dsq_thread_id:
- 3.7251392e+09
pvc_views:
- 7184
tags:
- cygwin
title: minttyとemacsで、黒背景で青が見にくい場合の対策
type: post
url: /archives/=1322
---

minttyやemacsで黒背景を使ってると、

<font color="#0000ff" size="4">青文字が非常に見づらいヽ(`Д´)ﾉﾌ</font>

たとえば、alias ls=&#8217;ls -F &#8211;show-control-chars &#8211;color=aut&#8217;なんて設定したって、lsコマンド結果はこんな感じである。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:4aa5817f-8a43-41e5-8de8-8443b322604a" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5876916277104513074"><img style="border: none; padding: 0px; margin: 0px" alt="SnapCrab_NoName_2013-5-12_11-35-44_No-00.png" src="https://lh5.ggpht.com/-74nu9w97j0s/UY8AN3-GkDI/AAAAAAAAARc/M9b-cS5YVAQ/SnapCrab_NoName_2013-5-12_11-35-44_No-00.png" /></a>
</div>

&#160;

Emacsで関数を見たら青くて、目がショボショボしてしまう。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:cb2d4297-9f60-4719-a4d7-f6544a035b6f" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5876916830457784402"><img style="border: none; padding: 0px; margin: 0px" alt="SnapCrab_NoName_2013-5-12_11-38-34_No-00.png" src="https://lh3.ggpht.com/-yKnyycmnto0/UY8AuFXzaFI/AAAAAAAAARw/esGgRLLVrYQ/SnapCrab_NoName_2013-5-12_11-38-34_No-00.png" /></a>
</div>

こんなときの、目を守るための優しい対策を調べてみた。

### minttyの場合

minttyの場合は、.minttyrcという設定ファイルに色の設定を追記する。

このサイトの色設定を参考にして、.minttyrcに色設定を追加。

[<font color="#0066cc">https://nishikawasasaki.hatenablog.com/entry/20120227/1330313691</font>][1]

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:ca21b52a-0103-4f67-af8e-129d554228ce" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">Black=0,0,0
Red=255,100,0
Green=183,234,17
Yellow=234,206,28
Blue=65,105,225
Magenta=237,157,185
Cyan=0,191,191
White=255,255,255
BoldBlack=64,64,64
BoldRed=255,100,0
BoldGreen=183,234,17
BoldYellow=234,206,28
BoldBlue=107,155,219
BoldMagenta=237,157,185
BoldCyan=64,255,255
BoldWhite=255,255,25
BackgroundColour=0,0,0
</pre>
</div>

&#160;

こんな感じに改善されました。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:749938d5-3970-4f1e-a34c-bc75a22d3ff7" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5876924313418569250"><img style="border: none; padding: 0px; margin: 0px" alt="SnapCrab_NoName_2013-5-12_11-47-39_No-00.png" src="https://lh5.ggpht.com/-xMS6DGYdnUw/UY8HhpkrliI/AAAAAAAAASM/_wn3Dh3ZpNk/SnapCrab_NoName_2013-5-12_11-47-39_No-00.png" /></a>
</div>

### emacsの場合

ターミナルの設定をしても、emacs表示は別口なので、別設定が必要。emacsを開いて、以下のコマンドを実行。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:0fa64e66-6389-4e87-843f-2828a3c09a22" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">M-x list-faces-display</pre>
</div>

&#160;

すると、色の設定画面が開きます。見にくい色を見つけてEnter。ここではminibuffer-prompt が非常に見にくいので選択。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:dabcf5fb-ea0c-47c1-ad87-5fc0572867b5" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5876924313883010290"><img style="border: none; padding: 0px; margin: 0px" alt="list-faces-display1.png" src="https://lh4.ggpht.com/-HoIipHDcTSY/UY8HhrTaZPI/AAAAAAAAASQ/c9JiYuZ0TL0/list-faces-display1.png" /></a>
</div>

&#160;

【Choose】という枠をEnterすると、色を選択することができます。見やすいいろを選びなおして、決めたら[Apply and Save]で保存します。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:e82b375a-ae50-4607-96d8-b17913c51b37" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5876924326741110578"><img style="border: none; padding: 0px; margin: 0px" alt="list-faces-display2.png" src="https://lh6.ggpht.com/-dWtYBHwe3ME/UY8HibNBbzI/AAAAAAAAASg/lhOe7wJ2ri8/list-faces-display2.png" /></a>
</div>

&#160;

すると、.emacsに自動で以下のようなものが追記されます。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:99cff5b2-952b-4ad2-9cad-1be6089526fb" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(minibuffer-prompt ((t (:foreground "brightblue")))))
</pre>
</div>

&#160;

あとは、片端から見にくい色を変更していくのみです。こんな感じになりました。でめたしでめたし。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:62f8acc0-6c09-48a8-80e2-3d6ec94060e7" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5876924312953566162"><img style="border: none; padding: 0px; margin: 0px" alt="SnapCrab_NoName_2013-5-12_12-7-16_No-00.png" src="https://lh6.ggpht.com/-_obO5x7_0zU/UY8Hhn10M9I/AAAAAAAAASU/2SDPVuykp-Y/SnapCrab_NoName_2013-5-12_12-7-16_No-00.png" /></a>
</div>

#### 参考

  * [計算物理屋の研究備忘録 |Emacsの色設定][2] 
  * [mintty の表示色を設定する &#8211; あじーん-0.0.2-SNAPSHOT][1]

 [1]: https://nishikawasasaki.hatenablog.com/entry/20120227/1330313691
 [2]: https://keisanbutsuriya.blog.fc2.com/blog-entry-51.html