---
author: admin
categories:
- Linux
- 技術メモ
date: 2013-04-20T07:50:15+00:00
dsq_thread_id:
- 3.71514e+09
pvc_views:
- 14640
tags:
- ShellScript
title: Expect コマンドでパスワードなしでログインする方法(telnet,ssh,scp)
type: post
url: /archives/=1272
---

前回、sshを使ってパスワードなしでログインする方法を書きましたが、linuxのコマンド"expect"を利用することでも、パスワードなしでログインできたのでメモします。

  * [SSHを使いこなそう！Windows上のCygwinからvmware上のUbuntuにパスワードなしでSSH通信するまでのまとめ | Futurismo][1]

#### 環境

前回と同じように、CygwinからUbunsuサーバに接続してみる。

  * 接続先: ubuntu 
  * 接続元: cygwin

#### expectコマンドの紹介

expectコマンドは対話型シェルを実現するためのコマンド。デフォルトでは入っていないようなので、手に入れる。インストール方法は省略します。

覚えるべきコマンドは以下の5つ。

  * set timeout   
    設定した秒数の間、標準入力から応答がないとexpectは、終了します。
  * spawn   
    自動で実行したいコマンドを指定します。
  * expect   
    指定された文字列を待ちます。
  * send   
    指定された文字列（「”」に囲まれた文字）を先に実行したコマンドのジョブに送信します。
  * interact   
    実行ジョブの標準入出力をキーボードと画面にします。端末からログインしたのと同じ状態になります。

### サンプルスクリプト

telnet,ssh,scpでのパスワードなし接続方法を書きます。   
ubuntuサーバにtsu-neraユーザでログインします。

#### telnet

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:acae77fa-81ab-4a71-ba87-a49619f65ec9" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">#!/bin/bash

# ログイン情報を入力
hostname=ubuntu
username=tsu-nera
password=*********

# expect コマンドを実行
expect -c "
# タイムアウト値の指定
set timeout 20
# spawnで新しいジョブ生成
spawn telnet $hostname

# login
expect login:
send \"$username\n\"
expect Password:
send \"$password\n\"

# spawnジョブを通常の通信にする
interact
"
</pre>
</div>

#### ssh

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:3852773b-3b8f-4b5a-a9ed-05f01417772c" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">#!/bin/bash

# ログイン情報を入力
hostname=ubuntu
username=tsu-nera
password=*********

# expect コマンドを実行
expect -c "
# タイムアウト値の指定
set timeout 20
# spawnで新しいジョブ生成
spawn ssh -l $username $hostname

# login
expect password:
send \"$password\n\"

# spawnジョブを通常の通信にする
interact
"
</pre>
</div>

#### scp

ファイルパスは第一引数で指定します。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:29cb7e3a-0430-4592-97d2-c2de22785859" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">#!/bin/bash

# ログイン情報を入力
hostname=ubuntu
username=tsu-nera
password=*********

# ファイルパスは第一引数で
if [ "$1" != "" ]; then
    filepass=$1
else
    echo "Error: Input File Path"
    exit 1
fi

# expect コマンドを実行
expect -c "
# タイムアウト値の指定
set timeout 20
# spawnで新しいジョブ生成
spawn scp $username@$hostname:$filepass .

# login
expect password:
send \"$password\n\"

expect $
"
exit 0
</pre>
</div>

 [1]: https://futurismo.biz/archives/1266