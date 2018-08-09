---
author: admin
categories:
- Python
date: 2018-02-09T15:29:08+00:00
dsq_thread_id:
- 6.4690094e+09
excerpt: pychromecastでお手軽にGoogle Homeから時報を鳴らす
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
- 205
side:
- "y"
tags:
- GoogleHome
title: pychromecastでお手軽にGoogle Homeから時報を鳴らす
title_view:
- "y"
type: post
url: /archives/=6923
---

## はじめに {#はじめに}

Google Homeで 時報を鳴らしたい。こんな記事があり、試してみようと思った。

  * [Google Homeで時報を知らせる &#8211; Qiita][1]

google-home-notifierというツールを使うのが王道なようだ。

しかし、いかんせん、node.jsがわからない。。できれば、いつも使っているPythonでやりたいなーと思っていろいろ試した結果、pychromecastというものをつかうと、GoogleHomeから音楽を鳴らすことができたので、そのメモ。

## pychromecastをつかう {#pychromecastをつかう}

pychromecastを使うと、かなりお手軽にやりたいことが実現できた。

    pip install pychromecast
    

Web上のリソースをGoogleHomeで鳴らすことができるので、以下のダウンロードサイトから、音源を鳴らすことにした。

  * <https://ultra.zone/jihou.ja>

コードは以下。



これを実行すると、Google Homeから音を鳴らすことができる。

## cronで定期実行 {#cronで定期実行}

cronで１時間ごとに実行するように、設定してみる。 crontab -e で Ok。

    0 */1 * * * python google-home-jihou.py
    

これで、ピッピッピっポーン。

 [1]: https://qiita.com/udon11/items/fef44cec7b243f93151b