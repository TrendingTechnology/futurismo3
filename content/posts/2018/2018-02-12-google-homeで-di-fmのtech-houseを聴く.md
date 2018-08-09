---
author: admin
categories:
- Python
date: 2018-02-12T11:36:03+00:00
dsq_thread_id:
- 6.474761e+09
excerpt: Google Homeで DI.fmのTech Houseを聴く
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
- 131
side:
- "y"
tags:
- GoogleHome
title: Google Homeで DI.FMのTech Houseを聴く
title_view:
- "y"
type: post
url: /archives/=6928
---

## はじめに {#はじめに}

プログラマーならば、テクノ・ミュージック、ですよね。

とてもとてもニッチな小ネタだけれども、誰かの役に立てれば。

自分は、作業用音楽として、Digitally Importedの Tech Houseを溺愛している。

  * <https://www.di.fm/techhouse>

テクノ・ミュージックを聴くと、テンション上がって作業がとても捗るのだ。Google Homeを購入したので、せっかくいいスピーカーなので、これで聴きたい！

ということで、Digitally ImportedのTech House のチャンネルを聴く方法を試した。もちろん、同様の方法は、JazzRadioでもいける。

## ChromeCastできくとwifiが切れる {#chromecastできくとwifiが切れる}

まず思い付いた方法は、Google Chromeのキャスト機能を利用して、Google Chromeで流れている音楽をGoogle Homeに転送して聴く方法。

これでうまく行った、と思いきや、なぜかwifiが1分もするとブツブツ切れてしまう。失敗。

## iPhone経路で聴くことに成功 {#iphone経路で聴くことに成功}

調査を続けると、Digitally Imported が Chromecastをサポートしているとのこと。

  * [Digitally Imported Radio supports Chromecast &#8230; and somehow I missed it &#8211; Ausdroid][1]
  * [Digitally Imported Radio (DI.FM) Gets Google Cast Support In Latest Update][2]

試しに、iPhoneアプリを起動してみて、上記記事のようなアイコンを押すと、なんと流れた！おおーっ。

## パソコン経由で聴くことに成功 {#パソコン経由で聴くことに成功}

欲を入れば、OK Google, テクノ・ミュージックかけて、で音楽を流したい。なので、パソコンからやる方法を調べた。pychromecastを使えばいけた。

まずは、digitally importedのstream urlをしらべる。

  * <https://gist.github.com/sim642/4f73e3e145fd1eac8c39> 
      * [https://pub1.diforfree.org:8000/di\_techhouse\_hi][3]

次に以下のスクリプトを書いた。

```python
#!/usr/bin/env python
import pychromecast

def play_mp4(url):
    cast.wait()
    mc = cast.media_controller
    mc.play_media(url, 'audio/mp4')
    mc.block_until_active()

chromecast_name = "Main"
chromecasts = pychromecast.get_chromecasts()
cast = next(cc for cc in chromecasts if cc.device.friendly_name == chromecast_name)

play_mp4("https://pub2.diforfree.org:8000/di_techhouse_hi")
```

これを実行すると、Tech Houseが流れた。いえい！あとは、[こことか][4]でやった方法を応用して、声のインタフェースを用意すれば完成！

 [1]: https://ausdroid.net/2016/01/02/digitally-imported-radio-supports-chromecast-and-somehow-i-didnt-know/
 [2]: https://www.androidpolice.com/2015/11/10/digitally-imported-radio-di-fm-gets-google-cast-support-in-latest-update/
 [3]: https://pub1.diforfree.org:8000/di_techhouse_hi
 [4]: https://futurismo.biz/archives/6921
