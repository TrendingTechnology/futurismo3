---
author: admin
categories:
- Linux
- トラブルシューティング
date: 2018-01-03T06:47:35+00:00
dsq_thread_id:
- 6.388165e+09
excerpt: Ubuntu で NVidia ドライバを使っている時の不具合
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
- 166
side:
- "y"
tags:
- Ubuntu
title: Ubuntu で NVidia ドライバを使っている時の不具合
title_view:
- "y"
type: post
url: /archives/=6860
---

ドスパラでゲーミングPCガレリア(Galleria)を買ったのだけれども、 Ubuntu16.04をインストールしたら、解像度もへんてこだし、音も出ないしでいろいろ不具合がでた。PCのスペックは前記事の記事を参照。

  * [機械学習/ディープラーニング用にウルトラ高性能ゲーミングPCを購入 | Futurismo][1]

いろいろ試してみたところ、どうもNVIDIAのドライバがインストールされていないからだった。

コンピュータの検索から、システム設定 > ソフトウェアとアップデートを選択。

追加のドライバータブを選択。NVidia CorporationからNVIDIA binary driverを選択。

![][2]

これをインストールすれば、解像度もモニターに合うし、音も出る。誰かの助けになれば。

 [1]: https://futurismo.biz/archives/6850
 [2]: https://lh3.googleusercontent.com/5IeBJpNG2U0QbI0JTgm79QoIVxSVL-YlTKvuMZ6LG2wSSkRd0qkhHfJEskCokR4RHfwJIzaf0H0GGED1rANjaQ2FqaYJA3xaoXtXDKltUv65uEAuFn6LNle0v5-dZDxu3SyZIhP4nx1lDnz2V1YSRmtOV8a92Nsn5LMIqvviNWereTFyPopVuMrq39IMLhDUhxWkezu6yFXDVcyANCdFQwInAFNhFeCLhDa8ZsKpLxdEeWuaCmkxvA93jfnaDyl3VXG91DG2nfSXanLYJb5p2Ie0cwSq1Jmn_Ksy6c7Npy0QPGq5VJxcPMBsKFqpPHUDG57l2MnhxwlkKsVyGIjfn8z1Q-XElsc5p11iMzUTdp_WRxOJ4PA4pGd5Jmy7R5OzHdJWqkK6wytbQYPz68sui8L0UcDTQB7ssfZnQ9CNPIiH4rp13tY-3FWIDefzcuVHueCt7tLVoJiBDXJdbUoCsM-Za8Ki4De9vJSfS1PfL1CP8VJqjaqE1KZ3hAlDQIUJl87h7MVXPO2iYIKqowmiqR569CsvVFsYjxGEyUqwag1_M9jSpVzrcTyy2KTS4sevbbe8gE3RkvYiuOv8RPhJfwcTEscq6YmHN-O5cV0=w935-h444-no