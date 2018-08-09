---
author: admin
categories:
- 日記
date: 2013-05-19T00:06:49+00:00
dsq_thread_id:
- 3.7345815e+09
pvc_views:
- 2820
tags:
- cygwin
- Evernote
title: Cygiwnでの操作ログをevernoteにライフログする方法
type: post
url: /archives/=1334
---

ライフログ大流行の昨今、やっぱりコンソールの履歴もライフログしたいです。

ブログを書くときとか、操作したことを自動的に記録出来ればいいとおもった。さらには、Evernoteに自動転送してログできればいいなと思ったので、方法を調べてみた。

### Evernoteに自動転送する方法

Evernoteに自動転送するには、インポートフォルダの設定をすればよい。

  1. 任意の場所にログを保存するフォルダを作成。 
  2. Evernoteにログを保存したフォルダを作成。 
  3. Evernoteのツールバーから、ツール -> インポートフォルダを選択。 
  4. 追加を選択して、作成したWindows上のフォルダを指定する。 
  5. 「ノートブック」欄を選択して、Evernoteフォルダを選択する。 

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="evernote_mintty" border="0" alt="evernote_mintty" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/evernote_mintty_thumb.png" width="483" height="281" />][1]

### Cygwin上でログを記録をする

起動と終了をシェルでまとめました。

#### ログ開始

ログを取るには、scriptコマンドを利用します。script&#160; -a で追記モードで起動。ついでに、起動したときの日付をファイル名にします。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:90248baa-eafc-4686-9ff1-14913fe9dbac" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">#!/bin/bash

LOG_TEMP_DIR=$HOME/log/evernote/temp
DATE=`date +%y%m%d`

script -af $LOG_TEMP_DIR/$DATE.txt
</pre>
</div>

#### ログ終了

Evernoteへはログ終了時に転送します。まずはコマンドラインからscriptを終了させることが前提。

制御文字をcolコマンドで削除します。Evernoteの文字コードがShift-Jisなため、Shift-JISでなければ、変換が必要。nkfコマンドで変換します。なお、拡張子はtxt形式にしないと、evernote上で開けない。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:ec95be08-a2cc-4324-8b47-97344e24fad6" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">#!/bin/bash
LOG_DIR=$HOME/log/evernote
LOG_TEMP_DIR=$HOME/log/evernote/temp
DATE=`date +%y%m%d`

# 制御文字削除
col -bx &lt; $LOG_TEMP_DIR/$DATE.txt &gt; $LOG_TEMP_DIR/$DATE.col.txt

# 文字コード変換 Shift-JIS
nkf -s $LOG_TEMP_DIR/$DATE.col.txt &gt; $LOG_TEMP_DIR/$DATE.sjis.txt

# Evernoteへ移動
mv $LOG_TEMP_DIR/$DATE.sjis.txt $LOG_DIR/$DATE.txt

# 一時ファイル削除
rm $LOG_TEMP_DIR/$DATE.col.txt
</pre>
</div>

#### 画面制御文字は妥協した

ちなみに、画面制御文字はどうしても取り除けなかかった。33m~や0;など。これは、minttyを色なしで表示すればいいが、それはやりたくないので妥協。

### Cygtermを使う

シェルでガンパラなくても、Cygtermのログ機能を使えば、画面制御文字も取り除ける。

minttyでの出力結果をcygtermからtail -f で表示させるとか。まあ、いろいろと方法を探したけれども、Cygtermを利用するのが一番簡単そうだ。minttyを捨てて、Cygtermにするかどうか、悩むところだ。。。

ツールバーの設定 -> その他の設定 -> ログを選択。

標準ログファイル名で、strftimeフォーマットに従った名前を書く。ここでは、%y%m%d.txtとした。これで今日の日付が入る。

保存先ディレクトリでevernoteと連携しているフォルダを指定。

自動的にログ採取を開始するにチェックをいれると、Cygterm起動時にログが開始される。

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="SnapCrab_Tera Term その他の設定_2013-5-19_15-5-22_No-00" border="0" alt="SnapCrab_Tera Term その他の設定_2013-5-19_15-5-22_No-00" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/SnapCrab_Tera-Term-_2013-5-19_15-5-22_No-00_thumb.png" width="488" height="371" />][2]

#### その他

これを、ログインシェルとログアウトシェルに書いて自動的にログするかは検討中。そんなにログは必要かな？

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/evernote_mintty.png
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/SnapCrab_Tera-Term-_2013-5-19_15-5-22_No-00.png