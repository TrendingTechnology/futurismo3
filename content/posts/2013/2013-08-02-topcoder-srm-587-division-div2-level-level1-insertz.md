---
author: admin
categories:
- 日記
date: 2013-08-02T03:41:24+00:00
dsq_thread_id:
- 3.789061e+09
excerpt: 'TopCoder SRM : 587 Division : Div2 Level : Level1 InsertZ'
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 1523
side:
- "y"
title: 'TopCoder SRM : 587 Division : Div2 Level : Level1 InsertZ'
title_view:
- "y"
type: post
url: /archives/=1737
---

<!--:ja-->

TopCoderに参戦。

今日は、Level1が解けなかった・・・(´･ω･｀)

3つくらい実装方法を考えたが、どれも失敗。頭に浮かんだ方法にすぐに飛びつかず、いくつかアプローチ方法を考えたあとにコーディングを始めたほうがよかったなと反省。

あとは、主にString型の知識不足。

### 問題

文字列 init と goalが与えられる。initに&#8217;z&#8217;を挿入をして、goalが作れれば"yes"を、そうでなければ"No"を返せ。

### 解答

initに文字列を挿入して、goalで比較するよりも、goalから"z"を削除してinitに一致するかどうかを調べるほうが簡単にかける。



<!--:-->

<!--:en-->

Challenging TopCoder SRM 587!

Today, I could&#8217;t solv any problems

### Question

Geven String init, goalYou can insert &#8216;z&#8217; to init any times if init atch to goal return &#8220;yes&#8221;, else &#8220;No&#8221;

### Answer

It&#8217;s easy to delete &#8216;z&#8217; from goal rather than insert &#8216;z&#8217; to init 

<!--:-->