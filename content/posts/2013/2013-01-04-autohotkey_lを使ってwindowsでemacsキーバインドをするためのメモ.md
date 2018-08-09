---
author: admin
categories:
- Emacs
- 技術メモ
date: 2013-01-03T16:09:25+00:00
dsq_thread_id:
- 3.705888e+09
pdrp_attributionLocation:
- end
pvc_views:
- 5081
tags:
- AutoHotKey
title: AutoHotkey_Lを使ってWindowsでEmacsキーバインドをするためのメモ
type: post
url: /archives/=1135
---

AutoHotkey_LとEmacs用のスクリプトを利用することで、WindowsでEmacsのキーバインドが利用できました。すごく便利なので、メモして置きます。

#### きっかけ

プログを書くためのエディタにWindows Live Writerを、メールクライアントにOutlookを使っているのだれども、どちらもEmacsキーバインドを実現する方法がありませんでした。

いろいろ探してみたら、どうもWindowsのキーバインド自体をEmacsキーバインドにしてしまえばいいことに気づき、今回の方法に至りました。

### AutoHotkkey_Lとは

AutoHotKey_Lとは、Windowsのキーバインドを自由自在に設定できるOSS。   
もともとが、AutoHotKeyがその機能を担っていたが、AutoHotKeyの開発が終了してしまい代わりにAutoHotKey_Lが主流となっているらしい。

自分でキーバインドを設定するのもいいが、ネット上にいろんなスクリプトが落ちているので、それを利用しても良い。今回は、そのなかでEmacsキーバインドを実施するためのスクリプトを利用する。

### AutoHotKey_Lのダウンロードとインストール

以下のサイトからダウンロードする。

<a href="https://l.autohotkey.net/" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://l.autohotkey.net/" width="150" height="130" /></a> <a style="color: #0070c5" href="https://l.autohotkey.net/" target="_blank">AutoHotkey_L</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://l.autohotkey.net/" />  <br style="clear: both" />

インストールは実行ファイル(AutoHotkey\_L\_Install.exe)を実行すればよい。手順どおりに進めばインストール完了。

AutoHotKeyが立ち上がる。   
スタートアップに登録しておけば、スタートアップ時に起動するようになる。

### Emacsキーバインド用のスクリプトを取得

以下のgithubからemacs.ahkを取得。

<https://github.com/usi3/emacs.ahk>

emacs.ahkはAutoHotKey_Lの実行ファイルと同じフォルダに入れる。

### emacs.ahkの設定

AutoHotKey.ahkの編集画面を開く。   
一番最後の行に以下を追加。これで、AutoHotKey.exeを実行したときに、Emacsキーバインドスクリプトも一緒に実行することができる。

> #include emacs.ahk

### その他、細かいemacs.ahkの改造

私の場合、WindowsのCtrl+C, Ctrll+Vが利用てきなくなるのはいやなので、Cltl+C,Ctrl+Vをコメントアウトした。Ctrl+Y,Ctrl+Wなど、貼り付け系もコメントアウト。コメントアウトは ";"を書く。

example: Ctrl+ V 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:a6885b82-150c-451d-b57f-572542d7d2f7" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">;^v::
;  If is_target()
;    Send %A_ThisHotkey%
;  Else
;    scroll_down()
;  Return
</pre>
</div>

### GoogleChomeは除外する

Chromeに適応すると既存のキーバインドが使えなくなるため、Chromeをキーバインド適応の除外条件に入れる。

特定のアプリケーションを除外する方法は、emacs.ahkのis_target内に以下を追加する。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:71834aac-0483-4b24-9cea-cf99bb427466" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">  IfWinActive,ahk_class (除外したいWindowクラス名)
    Return 1 </pre>
</div>

参考:[https://www.autohotkey.com/docs/commands/IfWinActive.htm][1]

Windowsクラス名を調べるためには、AutoHotKeyを右クリックして、[Winodw Spy]を起動する。アクティブなウィンドウの情報が得られるのでここからWindowクラス名が分かる。

以下、GoogleChromeの例。この場合は"Chrome\_WidgetWin\_1"となる。

[<img src="https://lh4.googleusercontent.com/-i0vSwhwIg-8/UOWsjA5qDAI/AAAAAAAAADo/t1PJfaH0Bfs/s400/chrome_20130104_01.png" width="268" height="400" />][2]

 [1]: https://www.autohotkey.com/docs/commands/IfWinActive.htm "https://www.autohotkey.com/docs/commands/IfWinActive.htm"
 [2]: https://picasaweb.google.com/lh/photo/eEFKz3VSsthiCUY_TjJsgDyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite