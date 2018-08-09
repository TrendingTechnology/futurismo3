---
author: admin
categories:
- C++
- C言語
- Eclipse
- 日記
date: 2013-02-28T23:32:24+00:00
dsq_thread_id:
- 3.734847e+09
pvc_views:
- 4059
tags:
- CDT
title: 汚いコードをハイライト表示するEclipseプラグイン[Bracketeer for C/C++]
type: post
url: /archives/=1219
---

複雑な条件分岐に死にたくなったことがよくあると思います。たとえば、

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:38a3614b-997f-4546-86eb-33f05bfe4adc" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">if(1) {
  if(2) {
    if(3) {
      if(4) {
          printf("4重カッコだお(´･ω･｀)");
      }
    }
  }
} </pre>
</div>

とか、

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:be0a45ed-db6d-44d6-b477-e878df803db7" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">  if (((i_am_sleepy == true) || (i_am_happy == false))&&
      ( (i_am_angry == true)|| (i_am_sad == true))) {
     printf("わけがわからないお(´･ω･｀)");
  }
</pre>
</div>

### Bracketeer for C/C++でできること

こんなときには、コードをハイライト表示してわかりやすくしてくれるEclipseプラグイン[Bracketeer for C/C++]がかなり便利です。 

C言語/C++用のEclipseプラグイン、Bracketeer for C/C++をつかうと、カッコの対応関係がハイライトされて見やすくなる。

C/C++用のCDTの他に、Java用のJDT版もあるようだ。

Bracketeer for C/C++のインストールは、[ヘルプ] > [Eclipse マーケットプレイス]から[Bracketeer for C/C++]で検索する。

#### カッコの対応関係が分かる

{} だったり、 ()の対応関係が色付きのハイライト表示されるので、どこがどのカッコに対応するかがわかりやすくなります。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:e787dc97-7a5a-40f5-af7a-99f4c9780006" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5850149280665977266"><img style="border: none; padding: 0px; margin: 0px" alt="20130301_breaketeer_0.png" src="https://lh4.ggpht.com/-mqIaH90N-lM/US_nxn0aQbI/AAAAAAAAAJA/skL0vzsMj-0/20130301_breaketeer_0.png" /></a>
</div>

#### 画面からはみ出る条件の表示とジャンプ

一画面に収まらない{}や()、#if/#endifの対応関係の場合、条件の終わりから先頭へジャンプするためのリンクが挿入される。ジャンプは[Ctrl]を押しながらクリック。

色で確認することもできるが、ジャンプして直接確認もできる、ということ。便利！

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:ce7572a2-a120-403b-999a-c7464c9041f9" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5850149281210851346"><img style="border: none; padding: 0px; margin: 0px" alt="20130301_breaketeer_1.png" src="https://lh6.ggpht.com/-xUBkcy-atI8/US_nxp2UYBI/AAAAAAAAAI8/9U1R6ZC0UkI/20130301_breaketeer_1.png" /></a>
</div>