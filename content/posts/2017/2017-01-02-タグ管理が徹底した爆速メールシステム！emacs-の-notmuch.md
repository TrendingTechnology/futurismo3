---
author: admin
categories:
- Emacs
- 技術メモ
date: 2017-01-01T18:23:00+00:00
dsq_thread_id:
- 5.4268303e+09
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
- 1833
side:
- "y"
tags:
- notmuch
title: タグ管理が徹底した爆速メールシステム！Emacs の notmuch で Gmail を読む
title_view:
- "y"
type: post
url: /archives/=6039
---

motmuch というメールシステムを導入したので、導入手順をまとめます。

<div id="outline-container-org951c88f" class="outline-2">
  <h2 id="org951c88f">
    notmuch とは
  </h2>
  
  <div id="text-org951c88f" class="outline-text-2">
    <p>
      notmuch とは、タグベースの高速検索メールシステムだ。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://notmuchmail.org/">notmuch</a>
      </li>
      <li>
        <a href="https://wiki.archlinuxjp.org/index.php/Notmuch">Notmuch &#8211; ArchWiki</a>
      </li>
    </ul>
    
    <p>
      タグベースというところが気にいって、今回試してみた。
    </p>
    
    <p>
      日本語情報が皆無なので、先駆者になれるかと思って使ってみる。
    </p>
    
    <p>
      前回、同じコンセプトのタグ管理メールシステム mu4e について調べた。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/6037">タグ管理という新たな世界観！！Emacs の mu4e で Gmail を読む | Futurismo</a>
      </li>
    </ul>
    
    <p>
      今回は、ライバルの notmuch ということだ。
    </p>
  </div>
  
  <div id="outline-container-orge333d36" class="outline-3">
    <h3 id="orge333d36">
      環境
    </h3>
    
    <div id="text-orge333d36" class="outline-text-3">
      <ul class="org-ul">
        <li>
          Ubuntu 16.04 LTS
        </li>
        <li>
          notmuch 0.23.4… タグづけツール
        </li>
        <li>
          Offlineimap 6.6.1 … ローカルディレクトリとリモートフォルダを同期するツール
        </li>
        <li>
          msmtp 1.6.6… smtpmail を軽量化したメール送信用ツール
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-org7107abc" class="outline-2">
  <h2 id="org7107abc">
    インストール方法
  </h2>
  
  <div id="text-org7107abc" class="outline-text-2">
    <p>
      Ubuntu にインストールする。
    </p>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> sudo apt-get install notmuch<br /> [/sourcecode]
    </p>
    
    <p>
      端末上で notmuch setup を入力すると、簡単なガイダンスが始まる。
    </p>
    
    <p>
      質問に答えていく。mkdir ~/mail で notmuch 用のフォルダを作成。
    </p>
    
    <p>
      そのあと、notmuch new と入力する。.~/mail/.notmuch という DB フォルダが作成される。
    </p>
  </div>
</div>

<div id="outline-container-org6168995" class="outline-2">
  <h2 id="org6168995">
    Emacs Frontend Interface の導入
  </h2>
  
  <div id="text-org6168995" class="outline-text-2">
    <p>
      notmuch は Emacs 専用ソフトではない。いろんなフロントエンド I/F が用意されている。 (cli, vim, emacs, mutt)
    </p>
    
    <p>
      しかし、Emacs でメールを閲覧することが目的なので、Emacs I/F をインストールする。
    </p>
    
    <p>
      git repository からインストールすることが推奨されている。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://git.notmuchmail.org/git/notmuch">git.notmuchmail.org Git &#8211; notmuch/summary</a>
      </li>
    </ul>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> sudo apt-get install libxapian-dev libgmime-2.6-dev libtalloc-dev zlib1g-dev python-sphinx<br /> git clone git://notmuchmail.org/git/notmuch<br /> ./configure<br /> make<br /> make install<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-org550fe00" class="outline-2">
  <h2 id="org550fe00">
    notmuch の Emacs 設定
  </h2>
  
  <div id="text-org550fe00" class="outline-text-2">
    <p>
      [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221;]<br /> (require &#8216;notmuch)<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-org6cdb6ed" class="outline-2">
  <h2 id="org6cdb6ed">
    メールを受信する
  </h2>
  
  <div id="text-org6cdb6ed" class="outline-text-2">
  </div>
  
  <div id="outline-container-org5a40e6d" class="outline-3">
    <h3 id="org5a40e6d">
      Offlineimap
    </h3>
    
    <div id="text-org5a40e6d" class="outline-text-3">
      <p>
        IMAP サーバーからメールを同期する Python ユーティリティ.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://wiki.archlinuxjp.org/index.php/OfflineIMAP">OfflineIMAP &#8211; ArchWiki</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> sudo apt-get -y install offlineimap<br /> [/sourcecode]
      </p>
      
      <p>
        ~/.offlineimaprc を作成する。ここでは、Inbox と Notes と Drafts を同期するように設定している。
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> [general]<br /> accounts = main
      </p>
      
      <p>
        [Account main]<br /> localrepository = main-local<br /> remoterepository = main-remote
      </p>
      
      <p>
        [Repository main-local]<br /> type = Maildir<br /> localfolders = ~/mail/Gmail
      </p>
      
      <p>
        [Repository main-remote]<br /> type = Gmail<br /> # maxconnections=1<br /> remoteuser = fox10225fox@gmail.com<br /> remotepass =<br /> # realdelete=no<br /> folderfilter = lambda foldername: foldername in ["INBOX", "Notes", "[Gmail]/Drafts"]<br /> sslcacertfile = /etc/ssl/certs/ca-certificates.crt<br /> [/sourcecode]
      </p>
      
      <p>
        ターミナルより、offlineimap を入力することで、メールボックスを同期できる。
      </p>
    </div>
    
    <div id="outline-container-orga70d1d5" class="outline-4">
      <h4 id="orga70d1d5">
        パスワードをかくす
      </h4>
      
      <div id="text-orga70d1d5" class="outline-text-4">
        <p>
          設定ファイルは github で管理したいのだが、パスワードを晒すわけにはいかない。 netrc が使える。
        </p>
        
        <p>
          [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> touch ~/.netrc<br /> chmod 600 ~/.netrc<br /> [/sourcecode]
        </p>
        
        <p>
          .netrc の中身は次の通り。
        </p>
        
        <p>
          [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> machine imap.gmail.com<br /> login fox10225fox@gmail.com<br /> password<br /> machine smtp.gmail.com<br /> login fox10225fox@gmail.com<br /> password<br /> [/sourcecode]
        </p>
      </div>
    </div>
    
    <div id="outline-container-org4f75ad7" class="outline-4">
      <h4 id="org4f75ad7">
        デーモン化
      </h4>
      
      <div id="text-org4f75ad7" class="outline-text-4">
        <p>
          offlineimap を定期的に動作させるためには、systemd サービスに登録する必要がある。 以下の wiki に手順が載っている。
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://wiki.archlinuxjp.org/index.php/OfflineIMAP#.E3.83.90.E3.83.83.E3.82.AF.E3.82.B0.E3.83.A9.E3.82.A6.E3.83.B3.E3.83.89.E3.81.A7_offlineimap_.E3.82.92.E5.AE.9F.E8.A1.8C">OfflineIMAP &#8211; ArchWiki</a>
          </li>
        </ul>
        
        <p>
          または、.offlineimaprc の[Account]欄に以下を書く。
        </p>
        
        <p>
          [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> autorefresh = 1<br /> [/sourcecode]
        </p>
        
        <p>
          cron に登録してもよい。
        </p>
      </div>
    </div>
    
    <div id="outline-container-org1304050" class="outline-4">
      <h4 id="org1304050">
        Post-sync hook
      </h4>
      
      <div id="text-org1304050" class="outline-text-4">
        <p>
          メールを受信したら、notmuch new を動作させて、インデックスを作成する。
        </p>
        
        <p>
          .offlineimaprc の[Account]欄に以下を書く。
        </p>
        
        <p>
          [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> postsynchook = /usr/bin/offlineimap-postsync<br /> [/sourcecode]
        </p>
        
        <p>
          offlineimap-postsync というスクリプトを作成する。そのなかに notmuch new と書く。
        </p>
        
        <p>
          以下のファイルが参考になる。 この例では、notify-send で通知を表示したりログしたりしている。
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://github.com/cbancroft/config/blob/master/mail/lib/offlineimap-postsync.sh">https://github.com/cbancroft/config/blob/master/mail/lib/offlineimap-postsync.sh</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div id="outline-container-orgaedead4" class="outline-2">
  <h2 id="orgaedead4">
    メールを検索する
  </h2>
  
  <div id="text-orgaedead4" class="outline-text-2">
    <p>
      基本は、search 欄にキーワードを入れて検索する。
    </p>
    
    <p>
      helm-i/f がある。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/xuchunyang/helm-notmuch">https://github.com/xuchunyang/helm-notmuch</a>
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-org92b5a5b" class="outline-2">
  <h2 id="org92b5a5b">
    メールを送信する
  </h2>
  
  <div id="text-org92b5a5b" class="outline-text-2">
    <p>
      msmtp を使う。
    </p>
    
    <p>
      [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221;]<br /> $ git clone git://git.code.sf.net/p/msmtp/code msmtp<br /> $ cd msmtp<br /> $ autoreconf -i<br /> $ ./configure; make; make install<br /> [/sourcecode]
    </p>
    
    <p>
      .emacs の設定は以下の通り。
    </p>
    
    <p>
      [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221;]<br /> ;; use msmtp<br /> (setq message-send-mail-function &#8216;message-send-mail-with-sendmail)<br /> (setq sendmail-program "msmtp")<br /> ;; tell msmtp to choose the SMTP server according to the from field in the outgoing email<br /> (setq message-sendmail-extra-arguments &#8216;("&#8211;read-envelope-from"))<br /> (setq message-sendmail-f-is-evil &#8216;t)
    </p>
    
    <p>
      ;; don&#8217;t keep message buffers around<br /> (setq message-kill-buffer-on-exit t)<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-orgda90d53" class="outline-2">
  <h2 id="orgda90d53">
    Tips
  </h2>
  
  <div id="text-orgda90d53" class="outline-text-2">
  </div>
  
  <div id="outline-container-org2fea8e0" class="outline-3">
    <h3 id="org2fea8e0">
      ショートカット
    </h3>
    
    <div id="text-org2fea8e0" class="outline-text-3">
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221;]<br /> (define-key notmuch-show-mode-map "\C-c\C-o" &#8216;browse-url-at-point)
      </p>
      
      <p>
        (define-key notmuch-search-mode-map "g"<br /> &#8216;notmuch-poll-and-refresh-this-buffer)<br /> (define-key notmuch-hello-mode-map "g"<br /> &#8216;notmuch-poll-and-refresh-this-buffer)
      </p>
      
      <p>
        (define-key notmuch-search-mode-map "d"<br /> (lambda ()<br /> "toggle deleted tag for thread"<br /> (interactive)<br /> (if (member "deleted" (notmuch-search-get-tags))<br /> (notmuch-search-tag &#8216;("-deleted"))<br /> (notmuch-search-tag &#8216;("+deleted" "-inbox" "-unread")))))
      </p>
      
      <p>
        (define-key notmuch-search-mode-map "!"<br /> (lambda ()<br /> "toggle unread tag for thread"<br /> (interactive)<br /> (if (member "unread" (notmuch-search-get-tags))<br /> (notmuch-search-tag &#8216;("-unread"))<br /> (notmuch-search-tag &#8216;("+unread")))))
      </p>
      
      <p>
        (define-key notmuch-show-mode-map "d"<br /> (lambda ()<br /> "toggle deleted tag for message"<br /> (interactive)<br /> (if (member "deleted" (notmuch-show-get-tags))<br /> (notmuch-show-tag &#8216;("-deleted"))<br /> (notmuch-show-tag &#8216;("+deleted" "-inbox" "-unread")))))
      </p>
      
      <p>
        (define-key notmuch-search-mode-map "a"<br /> (lambda ()<br /> "toggle archive"<br /> (interactive)<br /> (if (member "archive" (notmuch-search-get-tags))<br /> (notmuch-search-tag &#8216;("-archive"))<br /> (notmuch-search-tag &#8216;("+archive" "-inbox" "-unread")))))
      </p>
      
      <p>
        (define-key notmuch-show-mode-map "a"<br /> (lambda ()<br /> "toggle archive"<br /> (interactive)<br /> (if (member "archive" (notmuch-show-get-tags))<br /> (notmuch-show-tag &#8216;("-archive"))<br /> (notmuch-show-tag &#8216;("+archive" "-inbox" "-unread")))))
      </p>
      
      <p>
        (define-key notmuch-hello-mode-map "i"<br /> (lambda ()<br /> (interactive)<br /> (notmuch-hello-search "tag:inbox")))
      </p>
      
      <p>
        (define-key notmuch-hello-mode-map "u"<br /> (lambda ()<br /> (interactive)<br /> (notmuch-hello-search "tag:unread")))
      </p>
      
      <p>
        (define-key notmuch-hello-mode-map "a"<br /> (lambda ()<br /> (interactive)<br /> (notmuch-hello-search "tag:archive")))<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-org56c985d" class="outline-3">
    <h3 id="org56c985d">
      org-mode 連携
    </h3>
    
    <div id="text-org56c985d" class="outline-text-3">
      <p>
        org-store-link が使える。
      </p>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221;]<br /> (require &#8216;org-notmuch)<br /> (define-key global-map "\C-cl" &#8216;org-store-link)<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-org7b11419" class="outline-3">
    <h3 id="org7b11419">
      日本語ワードが検索で引っかからないときの対応
    </h3>
    
    <div id="text-org7b11419" class="outline-text-3">
      <p>
        日本語ワードが検索でうまく引っかかってない。 いろいろ調べた結果、以下の記事にたどり着いた。 この方法で検索がうまく動くようになった。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://u7fa9.org/memo/HEAD/archives/2012-06/2012-06-01.rst">notmuch で日本語検索をいい感じにする &#8211; memo</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> $ export XAPIAN_CJK_NGRAM=1<br /> $ notmuch dump > ~/Maildir/.notmuch/dump-$(date +%Y%m%d)<br /> $ mv ~/Maildir/.notmuch/xapian{,.old}<br /> $ notmuch new<br /> $ notmuch restore &#8211;input~/Maildir/.notmuch/dump-$(date +%Y%m%d)<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>

<div id="outline-container-orgfab20a0" class="outline-2">
  <h2 id="orgfab20a0">
    mu4e と notmuch との比較
  </h2>
  
  <div id="text-orgfab20a0" class="outline-text-2">
    <p>
      mu4e の方が使いやすい。なぜなら、
    </p>
    
    <ul class="org-ul">
      <li>
        notmuch には、メールの削除の方法がない（わからない）
      </li>
      <li>
        Gmail との同機の方法が面倒。
      </li>
    </ul>
    
    <p>
      notmuch が mu4e より優れている点は、
    </p>
    
    <ul class="org-ul">
      <li>
        タグ管理が より mu4e に比べて徹底している
      </li>
    </ul>
    
    <p>
      削除の機能がないというところを考えると、 notmuch はそもそも膨大なデータを検索するためのソフトウェアで タグによる検索に徹底していて、 削除など必要ないという設計思想なのかもしれない。
    </p>
    
    <p>
      この記事によると、mu4e よりも、notmuch のほうが圧倒的に高速のようだ。
    </p>
    
    <p>
      purely tag and search based mail client
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://wwwtech.de/articles/2016/jul/my-personal-mail-setup">My personal mail setup — Articles — WWWTech</a>
      </li>
    </ul>
    
    <p>
      mu4e のほうが一見使いやすくみえるが、 上の記事を読むと最終的には notmuch に軍配が上がるのではないか？
    </p>
    
    <p>
      よし、決めたぞ。notmuch を使うことにしよう。迷ったときは、マイナーな方を選ぶのだ！
    </p>
  </div>
</div>

<div id="outline-container-org7d1773e" class="outline-2">
  <h2 id="org7d1773e">
    参考
  </h2>
  
  <div id="text-org7d1773e" class="outline-text-2">
    <ul class="org-ul">
      <li>
        <a href="https://blog.tai2.net/mutt-and-notmuch.html#id11">mutt + notmuch でコマンドラインメール送受信環境を構築する(Mac OS X 編)</a>
      </li>
      <li>
        <a href="https://chrisdone.com/posts/emacs-mail">Emacs, Notmuch and Offlineimap</a>
      </li>
    </ul>
  </div>
</div>