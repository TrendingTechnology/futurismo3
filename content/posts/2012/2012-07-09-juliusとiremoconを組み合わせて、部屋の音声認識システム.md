---
author: admin
categories:
- C++
- ハッキング
date: 2012-07-08T21:36:03+00:00
dsq_thread_id:
- 3.7294188e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3301
tags:
- iRemocon
- Julius
title: JuliusとiRemoconを組み合わせて、部屋の音声認識システムをつくった
type: post
url: /archives/=136
---

JuliusとiRemoconを組み合わせて、部屋の音声認識システムをつくった。
  
出来栄えは、こんな感じ。

[https://www.youtube.com/embed/N6uw2pMFC1s]

&nbsp;

参考にしたのはこのサイト。
  
[リモコンはオワコン。音声認識でお部屋の家電を操作してみた。][1]

C++の知識のなさと、Boooooooooooooooooostなコンパイル時間と
  
戦いつつも、とりあえずの目標達成。
  
iRemoconを購入してから85時間の戦いだった。

定義した命令はこんな感じ。

> テレビ(を|)つけて
> 
> エアコン(を|)つけて
  
> エアコン(を|)消して
> 
> 電気(を|)つけて
  
> 天井灯(を|)つけて
  
> すべての電気(を|)つけて
  
> 電気(を|)消して
  
> 天井灯(を|)消して
  
> すべての電気(を|)消して
> 
> MorningMode
  
> SleepMode
  
> RelaxMode
  
> SexyMode
  
> PartyMode
> 
> (うるさい|だまって)
  
> ボリューム(を|)大きくして
  
> ボリューム(を|)小さくして
  
> アプリケ－ション起動
  
> Chrome(を|)つけて
  
> Ottava(を|)つけて
  
> Twitter(を|)つけて
  
> Toggl(を|)つけて
  
> Gmail(を|)つけて
  
> Youtube(を|)つけて
  
> ニコニコ(を|)つけて
  
> TVタックル(を|)つけて
> 
> こんにちは
  
> おはよう
  
> おやすみ
  
> いってきます
  
> ただいま
  
> ありがとう
  
> きこえてる
  
> 今日の天気(を|)教えて
  
> 明日の天気(を|)教えて
  
> 今何時
  
> 今日は何日
  
> ライバルを教えて
  
> 今週の目標を読み上げて

&nbsp;

あとは、Webカメラでモーションを捉えたらコマンド実行するようにして、
  
家のドアを開けると「おかえりなさい」をしてくれるようにした。

<div id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:aa137fd9-f68e-4b2f-9429-85e4474ed2a7" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <div>
  </div>
</div>

&nbsp;

本当ならばここで、
  
「おかえりなさい、ご飯にする？お風呂にする？それとも・・・あたし？」

と、いわしめたいものぞ。悲しき独身生活・・・(´・ω・\`)

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://d.hatena.ne.jp/hecomi/20120116/1326726831