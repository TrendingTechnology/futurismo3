---
author: admin
categories:
- Linux
date: 2013-12-30T08:06:56+00:00
dsq_thread_id:
- 3.732237e+09
excerpt: Linux環境でMarkdownやRestructuredTextをかくためのエディタ ReTextの紹介
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 2555
side:
- "y"
tags:
- markdown
title: '[ReText]Linux環境でMarkdownやRestructuredTextをかくためのエディタはこれで決まり'
title_view:
- "y"
type: post
url: /archives/=2058
---

<!--:ja-->

[<img src="https://lh4.googleusercontent.com/-uVzj63Iggaw/UsEodyLr_fI/AAAAAAAAA6U/KwOpP1BgcWo/s640/Screenshot_from_2013-12-30%252016%253A57%253A38.png" width="640" height="390" />][1]

LinuxでMarkdownを書くためのよいエディタを探していたところ、ReTextというツールを見つけたので紹介。

[ReText][2]とは、MarkdownやRestructuredTextをかくためのエディタ。特徴は以下。

  * MarkdownやRestructuredTextでかかれたファイルをリアルタイムプレビューできる。
  * HTML シンタックスハイライト
  * PDF, ODT, HTML, Google Docs へのエクスポート
  * HTML生成

今まではWindows環境で MarkdownPadを利用してブログ記事を作成していた。

[畜生、ブログエディタ変更だ！Windows上のMarkDownPadで編集してWordPressに投稿する | Futurismo][3]

Linux環境でも同等の機能を持つものを探してたので、このReTextが利用できそうだ。

Mint Linuxでのインストール方法は以下。

    sudo add-apt-repository ppa:mitya57
    sudo apt-get update
    sudo apt-get install -y retext
    

### Error

以下のエラーが表示されてプレビューを見ることができきない。

    ファイルの内容を解析できません。必要なモジュール がインストールされているか確認してください。
    

コンソールから起動してみるも、こんなメッセージが表示される。

READMEをよくよく読んでみると、Python3.2以上で動作するとのこと。

また、Markdownを利用するには、追加のパッケージが必要とのこと。

システムのPythonのバージョンを調べてみると、Python 2.7.

    $ python --version
    Python 2.7.5+
    

Linuxには、現在 Pythonが2種類デフォルトでインストールされているようだ。

    $ python3 --version
    Python 3.3.2+
    $ python --version
    Python 2.7.5+
    

つまり、Python3には markdownがインストールされていなかった。Python3にパッケージをインストールするには、pipではなくてpip3を利用する。

    sudo pip3 install markdown
    sudo apt-get install python3-pip
    

これでエラーせずに表示されるようになった。

<!--:-->

 [1]: https://picasaweb.google.com/lh/photo/hqaS9_Y7eoc3uuFsSAEAuDyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [2]: https://sourceforge.net/projects/retext/
 [3]: https://futurismo.biz/archives/1456