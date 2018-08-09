---
author: admin
categories:
- Linux
date: 2013-12-30T17:43:48+00:00
dsq_thread_id:
- 3.7131876e+09
excerpt: Fcitx-anthyを使ってLinux Mintで親指シフト日本語入力環境を構築するまでの手順
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
- 5576
side:
- "y"
tags:
- Mint
title: Fcitx-anthyを使ってLinux Mintで親指シフト日本語入力環境を構築するまでの手順
title_view:
- "y"
type: post
url: /archives/=2067
---

<!--:ja-->

あたくしは何を隠そう親指シフターなのです。

  * [親指シフトでPC入力効率を爆速化！～ようやく効果を感じ始めた私の体験談～ | Futurismo][1]

Linux環境を利用するにあたって最大の不安は、親指シフトが利用できるかどうかというところでした。色々調べてみた結果、利用できたので方法を書いておきます。

### Mint日本語対応

まずは、日本公式HPの手順にしたがって、日本語対応を完了させます。

  * [ダウンロード | Linux Mint Japan][2]

コマンドは以下。

    $ wget -q https://linuxmint-jp.net/linuxmint-ja-archive-keyring.gpg -O- | sudo apt-key add -
    $ sudo wget https://linuxmint-jp.net/sources.list.d/linuxmint-ja.list -O /etc/apt/sources.list.d/linuxmint-ja.list
    $ sudo apt-get update
    $ sudo apt-get dist-upgrade
    
    $ sudo apt-get install mint-gnome-ja --install-recommends
    

### fctix-anthyを選ぶ

IMとは、インプットメソッドの略でコンピュータに文字を入力するためのソフトウェア。IMEとは、IMのエンジン(Engine)。かな漢字変換を制御するソフトウエア。文字入力は、キーボードからの文字列をIMEで変換してIMでアプリケーションに渡します。

Mintで利用できるものでメジャーなものは、

  * IM 
      * iBus
      * Fcitx
  * IME 
      * Mozc
      * Anthy

ネットて調べたところ、うれしいことにAnthyが親指シフト対応しているようだ。MozcはGoogle日本語入力で利用されている技術がオープンソースになったもので、Anthyよりも変換能力が高いが、親指シフトが残念ながら利用できない。

iBusは評判が悪そうなので（[本の虫: iBus 1.5がクソすぎる][3])、対抗馬として最近出てきたFcitxをIMに選択。

よって、fctix-anthyを試してみることにしました。

### fctix-anthyのインストール

以下の記事を参考にしました。ありがとうございます。

  * [第297回　Ubuntu 13.10でインプットメソッドFcitxを活用する：Ubuntu Weekly Recipe｜gihyo.jp … 技術評論社][4]

以下からインストールします。

    $ wget -q https://www.ubuntulinux.jp/ubuntu-ja-archive-keyring.gpg -O- | sudo apt-key add -
    $ wget -q https://www.ubuntulinux.jp/ubuntu-jp-ppa-keyring.gpg -O- | sudo apt-key add -
    $ sudo wget https://www.ubuntulinux.jp/sources.list.d/saucy.list -O /etc/apt/sources.list.d/ubuntu-ja.list
    $ sudo apt-get update
    

記事でのfcitx-mozcの部分をanthyに変更しています。

    $ apt-get install fcitx fcitx-anthy fcitx-libs-qt5 fcitx-frontend-qt5
    

また、fctix設定を開こうとするとエラーしたので以下もインストール。

    $ apt-get install fcitx-config-gtk
    

最後におまじないをして、ログアウト・ログインしなおし。

    $ gsettings set org.gnome.settings-daemon.plugins.keyboard active false
    $ im-config -n fcitx
    

これで利用できるようになったはず。\`パネルの右下にキーボードが表示されていればOK.

[<img src="https://lh3.googleusercontent.com/-pw4M2g1HfFs/UsGvRV5wccI/AAAAAAAAA74/ko6l7vrj4-M/s800/Screenshot_from_2013-12-31%252002%253A29%253A16.png" height="271" width="229" />][5]

### Fctixの設定

メニューからFctix設定を選択。Anthyをダブルクリックして選択。

全般->入力方式から nicolaを選択して完了。

[<img src="https://lh3.googleusercontent.com/-wPCAS9QLjy8/UsGvQQ7Uj4I/AAAAAAAAA7w/3seZaISod_Y/s400/Screenshot_from_2013-12-31%252002%253A33%253A20.png" height="400" width="375" />][6]

変換機能はMozcに劣る。しかし、変換候補がタブで次次表示できるのはよい。こんなに簡単に親指シフトが実現できるなんて、素晴らしい！！

<!--:-->

 [1]: https://futurismo.biz/archives/548
 [2]: https://linuxmint-jp.net/download.html
 [3]: https://cpplover.blogspot.jp/2013/10/ibus-15.html
 [4]: https://gihyo.jp/admin/serial/01/ubuntu-recipe/0297
 [5]: https://picasaweb.google.com/lh/photo/_rov1uHf64ranenD-aGvKDyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [6]: https://picasaweb.google.com/lh/photo/B-94OW_TfbQF9iKQTf3WsTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite