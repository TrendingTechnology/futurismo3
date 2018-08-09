---
author: admin
categories:
- ハッキング
date: 2012-05-13T14:28:26+00:00
dsq_thread_id:
- 3.727986e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3330
tags:
- iRemocon
title: iRemoconでPCからエアコン制御をしてみた
type: post
url: /archives/=101
---

iRemoconでPCからエアコン制御をしてみた。

参考にしたのは以下のサイト。  
[Boost.Asio + iRemocon でテレビを操作してみた][1]  
[iRemoconの音声操作設定手順を纏めてみました][2]

ただ真似しただけだけど、なかなか大変だった。  
詰まったのは ファイアウォ－ルのポ－トの開け方と、Boostのコンパイル方法。  
ここをみて解決。  
[Windows 7 パーソナルファイアウォールに個別ポート許可設定][3]  
<https://www.richelbilderbeek.nl/CppLinkErrorUndefinedReferenceToBoostSystem.htm>

環境は Windows 7 + Cygwin  
Boostのコンパイルが特にハマったけれど結局以下で解決。

<pre>$ g++ iRemocon.cpp -o iRemocon -L/usr/local/lib -lboost_system-mt</pre>

-lboost_system-mtをリンクさせるのがミソだったみたい。  
いやいや、なかなか追い詰められた。

今日の成果

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:13a41302-3706-41ba-8ac1-bae8037dbf96" class="wlWriterEditableSmartContent">
  <div>
  </div>
</div>

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:70a092aa-3127-4f07-a49a-26dfe7452cc3" class="wlWriterEditableSmartContent">
  <div>
  </div>
</div>

 [1]: https://d.hatena.ne.jp/hecomi/20120109/1326112105
 [2]: https://zigsow.jp/portal/own_item_detail/181910/
 [3]: https://www.akakagemaru.info/port/windows7fwport.html