---
author: admin
categories:
- ハッキング
date: 2012-09-12T22:47:17+00:00
dsq_thread_id:
- 3.7063916e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3326
tags:
- iRemocon
- Julius
- MMD
title: iRemoconとMMDAgentでマクロと音声認識！初音ミクにおはようしてもらう。
type: post
url: /archives/=392
---

### iRemoconが音声認識、マクロに対応！スマホで家電を音声制御できる。

iReomconが10月から音声認識と、マクロに対応するみたい。
  
スマホから音声で家電を制御できるようになる。
  
プレスリリースの事例でも紹介されていたけど、『いってきます』をトリガに、クーラーやエアコン、テレビや照明、PC、その他電気機器を全て電源OFFにできる。
  
Androidのみということで、iPhoneユーザのあたしとしては、
  
iPhoneの対応を待ち望んでいます！！

##### [2012年09月11日 日本初！グラモ、スマホで一般家電を“音声”制御 ～『iRemocon』ユーザー向けに10月上旬リリース、利用料無料。節電にも ブレスリリース][1]
  
[グラモ][2]

<div id="scid:81867AAF-BB02-476b-AE5D-12BDAC2E750D:8b101b01-fbf1-464b-a64c-b4cf67716f8c" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <a href="https://www.amazon.co.jp/exec/obidos/ASIN/B0053BXBVG/sleephacker-22/ref=nosim" target="_blank"><img src="https://ecx.images-amazon.com/images/I/31NzUQPEL-L._SL160_.jpg" alt="Glamo 【自宅や外出先から、お使いの家電をコントロールできる学習リモコンの決定版! 】 iRemocon(アイリモコン) IRM-01L" /><br /> Glamo 【自宅や外出先から、お使いの家電をコントロールできる学習リモコンの決定版! 】 iRemocon(アイリモコン) IRM-01L<br /> </a>
</div>

&nbsp;

### 現実世界をプログラミングできるなんて、魔法みたい(゜ 0 ゜)/

個人的には、マクロを使って現実世界をプログラミングできることに、感動してる。
  
マクロを組むということは、
  
パソコン作業で面倒なルーチンワークを自動化するということだ。

それは、パソコンのなかだけに閉じられたものでしたが、
  
iRemoconの登場によって、誰でもカンタンに現実世界をマクロで自動化できる。
  
現実世界をプログラミングできるなんて、スゴイことだ。

しかも、音声認識でITを操れるなんて、もはや魔法を身につけたようなもの。

### iRemoconとMMDAgentとTeratermを組み合わせて、音声制御を先取り

依然記事にしたけれど、iRemoconとMMDAgent、Teratermマクロを使うことで、
  
iRemoconに追加予定の機能は実現できる。

[iRemoconでミクミクにしてやんよ。][3]

MMDAgentは音声認識、音声合成をするためのソフト。
  
しかも、モデルに初音ミクを使うことができる。
  
Teratermマクロは、iRemoconへ通信してコマンドを実行するドライバ。
  
これを組み合わせて、音声制御を先取りしてみた。

#### iRemoconとMMDAgentでミクにいってらっしゃいしてもらう

[https://www.youtube.com/embed/lpUV6RUzvFw]

##### TTLマクロ

[text]
  
include &#8220;C:\Users\Administrator\DROPBOX\SRC\HAL1000\MACRO\COM\INIT.TTL&#8221;

mpause 300
  
;すべての電気をけす
  
include &#8220;C:\Users\Administrator\DROPBOX\SRC\HAL1000\MACRO\COM\ALLLIGHTSOFF.TTL&#8221;
  
mpause 300
  
; エアコン消す
  
sendln &#8216;*is;313&#8217;
  
; パソコン消す
  
exec &#8216;C:\Users\Administrator\Dropbox\src\HAL1000\macro\shutdown_now.bat&#8217; &#8216;HIDE&#8217;

include &#8220;C:\Users\Administrator\DROPBOX\SRC\HAL1000\MACRO\COM\END.TTL&#8221;
  
[/text]
  
初音ミクにいってらっしゃいを言われると、よし、今日もがんばろうとおもう。
  
そんなことでは、いつになっても結婚できない気がする。

#### おかえりなさい(ここだけ別の声？！ GoogleTTS )

<div id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:c8e3702b-60cb-4219-9e8e-581683d8841c" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <div>
  </div>
</div>

##### TTLマクロ

[text]
  
include &#8220;C:\Users\Administrator\Dropbox\src\HAL1000\macro\com\init.ttl&#8221;

;声
  
exec &#8216;C:\Program Files (x86)\Windows Media Player\wmplayer.exe C:\Users\Administrator\Dropbox\src\HAL1000\voice\ComeBack.mp3&#8217; &#8216;hide&#8217;

; 時刻を取得
  
gettime timestr &#8220;%H&#8221;
  
; 文字列を数字に変換
  
str2int timenum timestr
  
; 時間帯によって直接照明と間接照明を分ける
  
if timenum < 18 then
  
; 直接照明
  
sendln &#8216;*is;83&#8217;
  
else
  
; 間接照明
  
sendln &#8216;*is;81&#8217;
  
mpause 300
  
sendln &#8216;*is;91&#8217;
  
mpause 300
  
sendln &#8216;*is;89&#8217;
  
endif

include &#8220;C:\Users\Administrator\Dropbox\src\HAL1000\macro\com\end.ttl&#8221;
  
[/text]
  
ここでは、玄関にWEBカメラを設置してモーションセンサのソフトを利用して、
  
ドアの開閉を監視している。([動体検知ソフト Msako][4]）

モーションを感知したら、マクロを実行するという仕組み。

今は会社の寮に住んでいるのだが、
  
たまに大家さんが、自分が会社にいる間に部屋に入ってくることがある。
  
そのうち、防犯カメラでモーションを検出したら、
  
壁からゴキジェットを噴射できないか計画中・・・(゜△゜)/

#### iRemoconとMMDAgentでミクにおやすみなさいしてもらう

<div id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:ebce148f-8198-40b5-9b8f-f181efef8a6f" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <div>
  </div>
</div>

##### TTLマクロ

[text]
  
include &#8220;C:\Users\Administrator\Dropbox\src\HAL1000\macro\com\init.ttl&#8221;

pause 5

; 電気を消す
  
sendln &#8216;*is;82&#8217;
  
mpause 300
  
sendln &#8216;*is;84&#8217;
  
mpause 300
  
sendln &#8216;*is;97&#8217;

; ブルーLEDライトをつける
  
mpause 300
  
sendln &#8216;*is;91&#8217;
  
mpause 300
  
sendln &#8216;*is;86&#8217;

;安眠用BGMを流す
  
exec &#8216;C:\Program Files (x86)\Windows Media Player\wmplayer.exe C:\Users\Administrator\Dropbox\src\HAL1000\sound/SleepModeBGM1.wav&#8217; &#8216;maximize&#8217;

include &#8220;C:\Users\Administrator\Dropbox\src\HAL1000\macro\com\end.ttl&#8221;

; ShutDown after 30minutes
  
; 30分経過
  
pause 1500

include &#8220;C:\Users\Administrator\Dropbox\src\HAL1000\macro\com\init.ttl&#8221;

; LED消す。
  
sendln &#8216;*is;97&#8217;
  
mpause 300
  
;AirCon Off
  
sendln &#8216;*is;313&#8217;

include &#8220;C:\Users\Administrator\Dropbox\src\HAL1000\macro\com\end.ttl&#8221;
  
[/text]
  
部屋を青くできるLED間接照明で、海の中にいる気分(／_-)
  
そのうちリモコン制御のアロマディフューザーでラベンダーの香りを出そうと計画中。
  
（いい商品がみつからない！今は手動でアロマディフューザーをつかってる）

流れているのは、Youtubeで落としてきた安眠用の音楽。
  
余談だが一番の愛用曲は、究極の眠れるCD。これは本当にオススメ！ネれる！

<div id="scid:81867AAF-BB02-476b-AE5D-12BDAC2E750D:40eab5fa-51f0-4f90-a9f0-ea72266445f3" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <a href="https://www.amazon.co.jp/exec/obidos/ASIN/B00006AM09/sleephacker-22/ref=nosim" target="_blank"><img src="https://ecx.images-amazon.com/images/I/51Whx38xaLL._SL160_.jpg" alt="究極の眠れるCD" /><br /> 究極の眠れるCD<br /> メンタル・フィジック・シリーズ </a>
</div>

#### iRemoconとMMDAgentでミクにおはようしてもらう

<div id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:cc942f49-e6c8-451d-8a57-ea65e121f9c4" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <div>
  </div>
</div>

##### TTLマクロ

[text]
  
include &#8220;C:\Users\Administrator\Dropbox\src\HAL1000\macro\com\init.ttl&#8221;

;AirCon On
  
sendln &#8216;*is;312&#8217;
  
; ディズニーのエレクトリカルパレード
  
exec &#8216;C:\Program Files (x86)\iTunes\iTunes.exe C:\Users\Administrator\Dropbox\src\HAL1000\sound\MorningModeBGM1.wav&#8217;
  
mpause 7000
  
;電気つける
  
sendln &#8216;*is;83&#8217;
  
mpause 300

; ボリュームをどんどん大きくしていく
  
for i 1 20
  
sendln &#8216;*is;56&#8217;
  
sendln &#8216;*is;56&#8217;
  
pause 1
  
next

include &#8220;C:\Users\Administrator\Dropbox\src\HAL1000\macro\com\end.ttl&#8221;
  
[/text]
  
電気がパソコンから制御できるので、
  
初ボーナスで購入した光目覚ましはドブに捨てた。
  
ミッキーのエレクトリカルパレードの音楽は、
  
朝から最大音量まで大きくしていくので、隣の住人はさぞ迷惑だろうぞ。

ちなみに、この動画って、
  
朝じゃなくて夜中じゃね？ってツッコミがあるかもしれない。

MMDAgentの.fstでの定義はこんな感じにしてる。
  
[text]
  
1 3 RECOG\_EVENT\_STOP|ミク SYNTH\_START|mei|mei\_voice_normal|はい。

3 261 RECOG\_EVENT\_STOP|ただいま C:\Users\Administrator\Dropbox\src\MMDAgent\Macro\ComeBack.ttl
  
261 300SYNTH\_START|mei|mei\_voice_normal|おかえりなさい。

3 262 RECOG\_EVENT\_STOP|おやすみ EXECUTE|C:\Users\Administrator\Dropbox\src\MMDAgent\Macro\SleepMode.ttl
  
262 300SYNTH\_START|mei|mei\_voice_normal|おやすみなさい。

3 263 RECOG\_EVENT\_STOP|いってきます EXECUTE|C:\Users\Administrator\Dropbox\src\MMDAgent\Macro\itterashai.ttl 263 300SYNTH\_START|mei|mei\_voice_normal|いってらっしゃい。

300 2 SYNTH\_EVENT\_STOP|mei
  
[/text]

&nbsp;

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://docs.google.com/viewer?url=https://glamo.co.jp/wp-content/uploads/2012/09/GLPR_2012091101.pdf
 [2]: https://glamo.co.jp/
 [3]: https://futurismo.biz/archives/154 "iRemoconでミクミクにしてやんよ。"
 [4]: https://homebrew.jp/showarchives/age=1262