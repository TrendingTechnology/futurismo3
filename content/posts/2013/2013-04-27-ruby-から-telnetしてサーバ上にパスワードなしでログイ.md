---
author: admin
categories:
- Ruby
date: 2013-04-27T10:50:31+00:00
dsq_thread_id:
- 3.7327542e+09
pvc_views:
- 3836
title: Ruby から サーバ上にパスワードなしでtelnetログイン(expect,pty)
type: post
url: /archives/=1286
---

前回までは、sshやシェルスクリプトのexpectコマンドでサーバへのログインについて書いて来ました。今回は、Rubyを使って、サーバにログインする方法を調べてみました。

[Expect コマンドでパスワードなしでログインする方法(telnet,ssh,scp) | Futurismo][1]

#### 環境

前回と同じように、CygwinからUbunsuサーバに接続してみる。

  * 接続先: ubuntu 
  * 接続元: cygwin 
  * Ruby 1.9.3 

### net/telnetライブラリを利用して、telnetする

Rubyでtelnetを利用するためには、net/telnetライブラリを読み込んで利用します。公式リファレンスはココ。

[class Net::Telnet][2]

ポイントは以下

  * require &#8216;net/telnet&#8217;   
    telnet用のライブラリを読み込む 
  * new   
    telnetオブジェクトを生成して、リモートホストと接続。 
  * login   
    ユーザ名とパスワードを用いてログインする 
  * cmd   
    コマンドを実行する。 
  * close   
    telnetを終了する。 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:c894d820-0c8e-42e0-ae9c-de264d329db7" class="wlWriterEditableSmartContent">
  <pre name="code" class="ruby"># -*- coding: utf-8 -*-
require 'net/telnet'

# リモートホスト  に接続
# タイムアウトは 10 秒
telnet = Net::Telnet.new("Host" =&gt; "192.168.118.129",
                         "Timeout" =&gt; 10)

# ログインし、プロンプトが出るまで待ち合わせる
telnet.login("tsu-nera", "*******") {|c| print c}

# ls コマンドを実行し、実行後、プロンプトが出るまで待ち合わせる
telnet.cmd("ls") {|c| print c}

# ログインセッションの終了
telnet.cmd("exit") {|c| print c}
telnet.close


</pre>
</div>

Expectコマンドを利用した時よりも、実行速度は遅い。そして、interactのような、telnetの途中で標準入出力をキーボードに切り替える方法もないようだ。

ただし、シェルスクリプトに比べてずっとコードが綺麗。

### pyt,expectを利用してtelnetする

こっちが本題。Rubyにもシェルスクリプトと同様なexpectがあった。これを利用する。

pytは擬似tty(Pesude tty)。

[module PTY][3]

これで、擬似的にttyを生成して、標準入出力を操作する。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:51ed7da8-3617-47a5-af78-e272fa7138a7" class="wlWriterEditableSmartContent">
  <pre name="code" class="ruby">#!/usr/bin/env ruby
# -*- coding: utf-8 -*-
require 'pty'
require 'expect'

# ログイン情報を入力
hostname="ubuntu"
username="tsu-nera"
password="*******"

# expect で読み込んだ内容を標準出力に出力するおまじない
$expect_verbose=true

PTY.spawn("telnet -l #{username} #{hostname}") do |r,w|
w.sync = true
r.expect(/Password: /) { w.puts "#{password}" }
r.expect(/[$%#]/) { w.puts "ls" }
r.expect(/[$%#]/) { w.puts "exit" }
end
</pre>
</div>

 [1]: https://futurismo.biz/archives/1272
 [2]: https://doc.ruby-lang.org/ja/1.9.3/class/Net=3a=3aTelnet.html
 [3]: https://doc.ruby-lang.org/ja/1.9.2/class/PTY.html