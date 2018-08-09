---
author: admin
categories:
- 未分類
date: 2013-04-12T03:22:42+00:00
dsq_thread_id:
- 3.9020575e+09
pdrp_attributionLocation:
- end
pvc_views:
- 2063
tags:
- TopCoder
- topcoder_diary
title: '[TopCoder日記] SRM 576, Division 2'
type: post
url: /archives/=1259
---

久しぶりのTopCoder参戦 & 悲しい惨敗。。。

C++ の vector配列の使い方がわからず苦戦してた。

vector配列は動的配列なので、vec.push_back(hoge);で初期化する必要があったのだった。

Level1の問題は解けたのだが、Eclipse上ではテストは通ったがarena上ではテストが通らず、時間切れとなった。なぜだろう。

### Level1 determineHumidity

N個のパーティションで区切られた空間ごとに水滴を垂らす。

水滴の数は、配列intensityで与えられる。水滴は長さLのスポンジによって受け止められる。

スポンジの位置は配列leftEndで与えられる。

スポンジには上から並べられているので、同じ位置の上下でスポンジがあるときは、下のスポンジには水滴はたらされない。

L個のスポンジにそれぞれたらされる水滴の数を求めよ。
  

  
&nbsp;

<div id="fastlookup_top">
</div>