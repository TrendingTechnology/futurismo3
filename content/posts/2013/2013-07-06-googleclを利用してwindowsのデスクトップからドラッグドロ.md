---
author: admin
categories:
- 日記
date: 2013-07-06T13:47:01+00:00
dsq_thread_id:
- 3.7318886e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 3027
title: GoogleCLを利用してWindowsのデスクトップからドラッグ&ドロップでpicasaに画像投稿するバッチスクリプト
type: post
url: /archives/=1559
---

ブログの画像はPicasaで管理しているので、コマンドラインからサクッと画像をアップロードできないかなと調べていたらいいものを発見した。

GoogleCL

![][1]

[toc]

#### 環境

  * Windows 7
  * Python 2.7.3

### GoogleCLとは

GoogleCLとは、コマンドラインからGoogleのサービスを利用するためのツール。

  * <a href="https://code.google.com/p/googlecl/" target="_blank">googlecl &#8211; Command line tools for the Google Data APIs &#8211; Google Project Hosting</a>

### インストール

以下の3つが必要。

  * python　2.6
  * gdata-python-client(Google Data APIs Python Client Library)
  * googelcl(Command line tools for the Google Data APIs)

pythonのインストールは省略。

#### gdata python Clientのインストール

サイトから最新版をダウンロードしてきます。

  * https://code.google.com/p/gdata-python-client/ 
      * gdata-2.0.18.tar.gz

解凍してインストールする。

     $ tar zvxf gdata-2.0.18.tar.gz
     $ cd gdata-2.0.18
     $ python setup.py install
    

#### googleclのインストール

サイトから最新版をダウンロードしてきます。

  * https://code.google.com/p/googlecl/ 
      * googlecl-0.9.13.tar.gz

解凍してインストールする。

    $ tar zvxf googlecl-0.9.13.tar.gz
    $ cd googlecl-0.9.13
    $ python setup.py install
    

### とりあえず使ってみる

使い方はここに書いてある。

https://code.google.com/p/googlecl/wiki/Manual

サンプルで、google Calenderを利用してみる。コマンドプロンプトから

    >python "C:\Python26\Scripts\google" calendar add "Lunch with Jim at noon tomorrow"
    

エラーした。無念。。。

    Traceback (most recent call last):
      File "C:\Python26\Scripts\google", line 5, in <module>
        pkg_resources.run_script('googlecl==0.9.13', 'google')
      File "C:\Python26\lib\site-packages\setuptools-0.6c11-py2.6.egg\pkg_resources.py", line 489, in run_script
      File "C:\Python26\lib\site-packages\setuptools-0.6c11-py2.6.egg\pkg_resources.py", line 1207, in run_script
      File "c:\python26\lib\site-packages\googlecl-0.9.13-py2.6.egg\EGG-INFO\scripts\google", line 849, in <module>
        main()
      File "c:\python26\lib\site-packages\googlecl-0.9.13-py2.6.egg\EGG-INFO\scripts\google", line 835, in main
        run_once(options, args)
      File "c:\python26\lib\site-packages\googlecl-0.9.13-py2.6.egg\EGG-INFO\scripts\google", line 588, in run_once
        setattr(options, attr_name, safe_decode(attr, googlecl.TERMINAL_ENCODING))
      File "C:\Python26\lib\site-packages\googlecl-0.9.13-py2.6.egg\googlecl\__init__.py", line 261, in safe_decode
        return string.decode(current_encoding, errors)
    LookupError: unknown encoding: cp65001
    

コマンドプロンプトのエンコードをUTF-8からShift-JISにしてみる。

    chcp 932
    

これでうまくいく。

初回時、ブラウザが立ち上がり認証画面がでる。認証して、コマンドプロンプトに戻ってEnter.

Googleカレンダーで見てみると・・・。

おお！

<img src="https://lh5.googleusercontent.com/--rmVyj-TkaY/UdgBDLMYr9I/AAAAAAAAAbU/rZcOkWP-eFQ/s400/SnapCrab_NoName_2013-7-6_20-0-17_No-00.png" height="213" width="400" />

### Google Picasa に写真をアップロード

目的のGoogle Picasa に写真をアップロードする。 アップロードするためのコマンドは、&#8221;google picasa post&#8221;

    # Futurismo アルバムに SnapCrab_NoName_2013-7-6_20-0-17_No-00.pngファイルをアップロード
     python "C:\Python26\Scripts\google" picasa post Futurismo SnapCrab_NoName_2013-7-6_20-0-17_No-00.png
    

やったー！成功だー　　＼(^o^)／

#### 　batにまとめる

バッチスクリプトにすれば、もっとラクチンになるはず。ディレクトリ配下の画像をドラック&ドロップで送信。

    @echo off
    chcp 932
    python "C:\Python26\Scripts\google" picasa post Futurismo "%*"
    

投稿したURLを取得するには、以下。

    python "C:\Python26\Scripts\google" picasa list --fields=url-direct --query "SnapCrab_NoName_2013-7-6_20-0-17_No-00.png"
    

これを組み合わせて、投稿した画像をブログ用URLに変換する。

    @echo off
    
    chcp 932
    set file=%*
    
    rem Picasaに投稿
    python "C:\Python26\Scripts\google" picasa post Futurismo "%file%"
    
    rem URL取得
    for /f "usebackq tokens=*" %%a in (`python "C:\Python26\Scripts\google" picasa list --fields=url-direct --query "%file:C:\Users\TSUNEMICHI\Desktop\=%"`) do @set x=%%a
    
    rem 変換
    echo "<img src="%x%" />"
    
    pause
    

追記: 画像を投稿してから、しばらく時間が立たないと、URLの取得ができないようだ。正確な時間はまだわからない。

#### 参考

  * <a href="https://mba-hack.blogspot.jp/2012/07/googleclpicasa.html" target="_blank">MBA-HACK: GoogleCLを使って画像をPicasaに一括アップロードする方法</a>
  * <a href="https://d.hatena.ne.jp/zebevogue/20100629/1277796535" target="_blank">GoogleCLをWindows上で使う &#8211; ZeBeVogue別館</a>
  * <a href="https://nakanowa.0j0.jp/archives/=3014" target="_blank">【GoogleCL】Picasaコマンドメモ | なかのわ</a>

 [1]: https://lh4.ggpht.com/-XIw8S78IApU/UdgSg5sszRI/AAAAAAAAAcM/KevCpEzdVj0/SnapCrab_NoName_2013-7-6_20-44-3_No-00.jpg