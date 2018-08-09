---
author: admin
categories:
- Ruby
- 技術メモ
date: 2013-05-02T05:26:37+00:00
dsq_thread_id:
- 3.7594396e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 2956
title: Rubyのpty,expectで同一wordをwaitすると出力が止まる
type: post
url: /archives/=1296
---

Rubyからexpect & ptyを組み合わせてtelnetをする方法を記事にした。多段telnetをすると、出力に処理結果が表示されないことに気づいた。pyt.getptyでも、pty.spawnでも同じ。多段sshも同じ。

[Ruby から サーバ上にパスワードなしでtelnetログイン(expect,pty) | Futurismo][1]

正確にいうと、初めはちょろっと出力されるが、途中から表示されなくなる。echoコマンドだと6コまで表示されて、pwdコマンドを実行すると、2つまでされた。この違いはなんだろう(・・?

表示されてないだけで、処理自体は動いているようだ。バックグラウンド処理(&)として起動すると、ちゃんと出力される。

また、多段telnetでない場合は問題なくexpectが動作する。多段にすると、失敗する。

いろいろと実験して、解決方法を探ってみたが、結論はわからなかった。

### 原因

expectで同一wordをwaitしていると、初めのwordをexpectした時点で、後ろのexpectも動作する。一気に動作するために、表示に間に合わに終了するため、動作していないように見えた。(echo と pwdで差がでたのも実行時間のせい）

これだとダメ。同一の"tsunera-virtual-machine"

> r.expect("tsunera-virtual-machine"){ w.puts "echo&#160; &#8216;hello&#8217;" }    
> r.expect("tsunera-virtual-machine"){ w.puts "echo&#160; &#8216;hello&#8217;" }    
> r.expect("tsunera-virtual-machine"){ w.puts "echo&#160; &#8216;hello&#8217;" }    
> r.expect("tsunera-virtual-machine"){ w.puts "echo&#160; &#8216;hello&#8217;" }    
> r.expect("tsunera-virtual-machine"){ w.puts "echo&#160; &#8216;hello&#8217;" }    
> r.expect("tsunera-virtual-machine"){ w.puts "echo&#160; &#8216;hello&#8217;" }

これだとOK.期待文字列がかぶってないので。

> r.expect("hello"){ w.puts "echo&#160; &#8216;hello1&#8217;" }   
> &#160;&#160;&#160; r.expect("hello1"){ w.puts "echo&#160; &#8216;hello2&#8217;" }   
> &#160;&#160;&#160; r.expect("hello2"){ w.puts "echo&#160; &#8216;hello3&#8217;" }   
> &#160;&#160;&#160; r.expect("hello3"){ w.puts "echo&#160; &#8216;hello4&#8217;" }   
> &#160;&#160;&#160; r.expect("hello4"){ w.puts "echo&#160; &#8216;hello5&#8217;" }   
> &#160;&#160;&#160; r.expect("hello5"){ w.puts "echo&#160; &#8216;hello6&#8217;" }   
> &#160;&#160;&#160; r.expect("hello6"){ w.puts "echo&#160; &#8216;hello7&#8217;" }

不思議なのは、前回記事にした Smart-Compileを経由したスクリプト実行だとうまくいく。

[EmacsでRubyの開発環境をめちゃガチャパワーアップしたまとめ | Futurismo][2]

このへんに解決の糸口がありそうだが、お腹がすいたので今日はここまで。

### 追記 解決 13/08/11

いろいろ試行錯誤して、うまくいく方法を見つけました。

waitで止まったように見えていたが、実はウラで動いていたよう。標準出力に出力されていないだけだっだ。

#### {|c| print c}

telnetした結果を表示するためには、waitforを以下の形式で書けば良い。

    telnet.waitfor(/*****/){ |c| print c }
    

{|c| print c}で標準出力を出力する。

#### telnet.cmdてはなくて、telnet.puts

多段telnetをするとき、telnet.cmd("hogehoge")で実行すると、"hogehoge"コマンドの出力を待ち続けるために、エラーする。telnet.cmdではなくtelnet.putsを利用することで、出力を待つことがなくなる。

  * <a href="https://ruby.11.x6.nabble.com/ruby-list-44531-telnet-td3545797.html" target="_blank">ruby-list jp &#8211; [ruby-list:44531] 多段telnetするプログラムの作り方</a>

#### STDOUT.sync = true

STDOUT.flushを実行すると、バッファにたまっている出力が吐出されるので、よりリアルタイムに画面出力させることができる。

コマンドを実行するたびに、これを打つのは面倒なので、常時リアルタイムで出力するよう、おまじないを書く。

    STDOUT.sync = true
    

  * <a href="https://www.ruby-forum.com/topic/208856" target="_blank">Use of STDOUT.flush after puts &#8211; Ruby Forum</a>

 [1]: https://futurismo.biz/archives/1286
 [2]: https://futurismo.biz/archives/1295