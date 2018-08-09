---
author: admin
categories:
- Ruby
- ハッキング
date: 2014-01-07T12:27:50+00:00
dsq_thread_id:
- 3.7284183e+09
excerpt: <!--:ja-->コマンドラインからサクッとメールを送信するスクリプトを作成しました<!--:-->
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 2242
title: コマンドラインからgmail経由でメールを送るRubyスクリプト
type: post
url: /archives/=2114
---

なにかのアイデアを忘れないように、アイデアは思いついたときにgmailや会社のメールのInboxへリマインダメールを放り込む習慣がある。

コマンドラインからサクッとメールを送信するスクリプトを作成しました。

以下の記事を参考にしました。ありがとうございます。

  * [RubyからGMailを使ってメール送信 &#8211; ギークを夢見るじょーぶん男子][1]

事前準備として、以下をインストールする必要があります。

    gem install mail
    gem install tlsmail
    

Warningエラーがたくさんでるので、対策が必要。これはgmailが原因のようだ。

    /home/tsu-nera/.rbenv/versions/2.1.0/lib/ruby/gems/2.1.0/gems/tlsmail-0.0.1/lib/net/smtp.rb:806: warning: already initialized constant Net::SMTPSession
    /home/tsu-nera/.rbenv/versions/2.1.0/lib/ruby/2.1.0/net/smtp.rb:1063: warning: previous definition of SMTPSession was here
    /home/tsu-nera/.rbenv/versions/2.1.0/lib/ruby/gems/2.1.0/gems/tlsmail-0.0.1/lib/net/pop.rb:687: warning: already initialized constant Net::POP
    /home/tsu-nera/.rbenv/versions/2.1.0/lib/ruby/gems/2.1.0/gems/tlsmail-0.0.1/lib/net/pop.rb:687: warning: previous definition of POP was here
    /home/tsu-nera/.rbenv/versions/2.1.0/lib/ruby/gems/2.1.0/gems/tlsmail-0.0.1/lib/net/pop.rb:688: warning: already initialized constant Net::POPSession
    /home/tsu-nera/.rbenv/versions/2.1.0/lib/ruby/gems/2.1.0/gems/tlsmail-0.0.1/lib/net/pop.rb:688: warning: previous definition of POPSession was here
    /home/tsu-nera/.rbenv/versions/2.1.0/lib/ruby/gems/2.1.0/gems/tlsmail-0.0.1/lib/net/pop.rb:689: warning: already initialized constant Net::POP3Session
    /home/tsu-nera/.rbenv/versions/2.1.0/lib/ruby/gems/2.1.0/gems/tlsmail-0.0.1/lib/net/pop.rb:689: warning: previous definition of POP3Session was here
    /home/tsu-nera/.rbenv/versions/2.1.0/lib/ruby/gems/2.1.0/gems/tlsmail-0.0.1/lib/net/pop.rb:702: warning: already initialized constant Net::APOPSession
    /home/tsu-nera/.rbenv/versions/2.1.0/lib/ruby/gems/2.1.0/gems/tlsmail-0.0.1/lib/net/pop.rb:702: warning: previous definition of APOPSession was here
    

以下のサイトを参考に対策を実施。

  * [ruby on rails &#8211; warning: already initialized constant after installing tlsmail gem? &#8211; Stack Overflow][2]
    
        require 'net/smtp'
        Net.instance_eval {remove_const :SMTPSession} if defined?(Net::SMTPSession)
        
        require 'net/pop'
        Net::POP.instance_eval {remove_const :Revision} if defined?(Net::POP::Revision)
        Net.instance_eval {remove_const :POP} if defined?(Net::POP)
        Net.instance_eval {remove_const :POPSession} if defined?(Net::POPSession)
        Net.instance_eval {remove_const :POP3Session} if defined?(Net::POP3Session)
        Net.instance_eval {remove_const :APOPSession} if defined?(Net::APOPSession)
        
        require 'tlsmail'
        

スクリプトは以下のとおりです。

 [1]: https://d.hatena.ne.jp/meganii/20120419/1334787470
 [2]: https://stackoverflow.com/questions/8783400/warning-already-initialized-constant-after-installing-tlsmail-gem