---
author: admin
categories:
- Emacs
- 技術メモ
date: 2017-01-01T13:26:00+00:00
dsq_thread_id:
- 5.4264146e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 1370
side:
- "y"
tags:
- mu4e
title: タグ管理という新たな世界観！！Emacs の mu4e で Gmail を読む
title_view:
- "y"
type: post
url: /archives/=6037
---

mu というタグメールシステムを導入したので、導入手順をまとめます。 

<div id="outline-container-orgb3cdf36" class="outline-2">
  <h2 id="orgb3cdf36">
    mu4e とは
  </h2>
  
  <div class="outline-text-2" id="text-orgb3cdf36">
    <p>
      notmuch とは、タグベースの高速検索メールシステムだ。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/djcb/mu">https://github.com/djcb/mu</a>
      </li>
    </ul>
    
    <p>
      タグベースというところが気にいって、今回試してみた。
    </p>
    
    <p>
      これまで、ファイルベースのメーラが世を席巻してきた。
    </p>
    
    <p>
      しかし、21 世紀はタグでデータを管理する時代なのだ！
    </p>
    
    <p>
      そのことは、この本にかかれていた。
    </p>
    
    <p>
      <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&#038;bc1=000000&#038;IS2=1&#038;bg1=FFFFFF&#038;fc1=000000&#038;lc1=0000FF&#038;t=fox10225fox-22&#038;o=9&#038;p=8&#038;l=as4&#038;m=amazon&#038;f=ifr&#038;ref=as_ss_li_til&#038;asins=4153200093&#038;linkId=db5764c9a971a98df4208913e65f697c"></iframe>
    </p>
    
    <p>
      ファイラだと、<a href="https://www.fenrir-inc.com/jp/fenrirfs/">FenrirFS</a> というファイラが気に入っている。
    </p>
    
    <p>
      メールだと、Gmail がある。じゃあ Gmail でいいじゃないかということになるが、 Gmail は Web ベースだ。 Emacs 好きとしては、Emacs から、メールを操作したい、というのが主な動機だ。
    </p>
    
    <p>
      ちなみに、Mutt と Wanderlust は経験している。
    </p>
  </div>
  
  <div id="outline-container-org324f80a" class="outline-3">
    <h3 id="org324f80a">
      環境と各ツールの役割
    </h3>
    
    <div class="outline-text-3" id="text-org324f80a">
      <ul class="org-ul">
        <li>
          Ubuntu 16.04 LTS
        </li>
        <li>
          mu 0.9.18&#x2026; タグづけ検索メールシステム
        </li>
        <li>
          mu4e 0.9.18&#x2026; mu の フロントエンド I/F
        </li>
        <li>
          Offlineimap 6.6.1 &#x2026; ローカルディレクトリとリモートフォルダを同期するツール
        </li>
        <li>
          msmtp 1.6.6&#x2026; smtpmail を軽量化したメール送信用ツール
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-org94c509f" class="outline-2">
  <h2 id="org94c509f">
    インストール方法
  </h2>
  
  <div class="outline-text-2" id="text-org94c509f">
    <p>
      事前の依存ライブラリのインストール
    </p>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> # must<br /> $ sudo apt-get install libgmime-2.6-dev libxapian-dev gnutls-bin
    </p>
    
    <p>
      # optional<br /> $ sudo apt-get install guile-2.0-dev html2text xdg-utils<br /> [/sourcecode]
    </p>
  </div>
  
  <div id="outline-container-orga0fbd05" class="outline-3">
    <h3 id="orga0fbd05">
      mu のインストール
    </h3>
    
    <div class="outline-text-3" id="text-orga0fbd05">
      <p>
        github から最新版の mu ををインストール。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/djcb/mu/releases">https://github.com/djcb/mu/releases</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> ./configure && make<br /> sudo make install<br /> [/sourcecode]
      </p>
    </div>
  </div>
  
  <div id="outline-container-orga936df7" class="outline-3">
    <h3 id="orga936df7">
      mu4e(Emacs Frontend Interface) の導入
    </h3>
    
    <div class="outline-text-3" id="text-orga936df7">
      <p>
        mu をインストールすると、サブディレクトリに mu4e というものがあり その中に elisp が入っている。
      </p>
      
      <p>
        [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;mu4e)<br /> (setq user-mail-address &#8220;fox10225fox@gmail.com&#8221;<br /> user-full-name &#8220;Tsunemichi Harada&#8221;)
      </p>
      
      <p>
        (setq mu4e-maildir &#8220;~/Maildir&#8221;)<br /> (setq mu4e-drafts-folder &#8220;/[Gmail].Drafts&#8221;)<br /> (setq mu4e-sent-folder &#8220;/[Gmail].Sent Mail&#8221;)<br /> (setq mu4e-trash-folder &#8220;/[Gmail].Trash&#8221;)<br /> ;; U で 更新するときに使うプログラム<br /> (setq mu4e-get-mail-command &#8220;offlineimap&#8221;)<br /> [/sourcecode]
      </p>
    </div>
  </div>
</div>

<div id="outline-container-orge8935a8" class="outline-2">
  <h2 id="orge8935a8">
    メールを受信する
  </h2>
  
  <div class="outline-text-2" id="text-orge8935a8">
    <p>
      ２つのツールがある。
    </p>
    
    <ul class="org-ul">
      <li>
        offlineimap <a href="https://github.com/OfflineIMAP/offlineimap">https://github.com/OfflineIMAP/offlineimap</a>
      </li>
      <li>
        mbsync <a href="https://isync.sourceforge.net/mbsync.html">https://isync.sourceforge.net/mbsync.html</a>
      </li>
    </ul>
    
    <p>
      mbsync のほうがいい？？
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://pragmaticemacs.com/emacs/migrating-from-offlineimap-to-mbsync-for-mu4e/">Migrating from offlineimap to mbsync for mu4e | Pragmatic Emacs</a>
      </li>
    </ul>
    
    <p>
      今回は、日本語情報の多い Offlineimap を使う。
    </p>
  </div>
  
  <div id="outline-container-org410064b" class="outline-3">
    <h3 id="org410064b">
      Offlineimap
    </h3>
    
    <div class="outline-text-3" id="text-org410064b">
      <p>
        IMAP サーバーからメールを同期する Python ユーティリティ.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://wiki.archlinuxjp.org/index.php/OfflineIMAP">OfflineIMAP &#8211; ArchWiki</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> sudo apt-get -y install offlineimap<br /> [/sourcecode]
      </p>
      
      <p>
        ~/.offlineimaprc を作成する。 ここでは、Inbox と Notes と Drafts を同期するように設定している。
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> [general]<br /> accounts = Gmail
      </p>
      
      <p>
        [Account Gmail]<br /> localrepository = Local<br /> remoterepository = Remote
      </p>
      
      <p>
        [Repository Local]<br /> type = Maildir<br /> localfolders = ~/Maildir
      </p>
      
      <p>
        [Repository Remote]<br /> type = Gmail<br /> folderfilter = lambda foldername: foldername in [&#8220;INBOX&#8221;, &#8220;Notes&#8221;, &#8220;[Gmail]/Drafts&#8221;]<br /> sslcacertfile = /etc/ssl/certs/ca-certificates.crt<br /> maxconnections = 1<br /> realdelete = no<br /> [/sourcecode]
      </p>
      
      <p>
        ターミナルより、offlineimap を入力することで、メールボックスを同期できる。
      </p>
    </div>
  </div>
  
  <div id="outline-container-org60c8fd9" class="outline-3">
    <h3 id="org60c8fd9">
      パスワードをかくす
    </h3>
    
    <div class="outline-text-3" id="text-org60c8fd9">
      <p>
        設定ファイルは github で管理したいのだが、パスワードを晒すわけにはいかない。 netrc が使える。
      </p>
      
      <p>
        [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> touch ~/.netrc<br /> chmod 600 ~/.netrc<br /> [/sourcecode]
      </p>
      
      <p>
        .netrc の中身は次の通り。
      </p>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> machine imap.gmail.com<br /> login fox10225fox@gmail.com<br /> password <your password here><br /> machine smtp.gmail.com<br /> login fox10225fox@gmail.com<br /> password <your password here><br /> [/sourcecode] </div> </div> 
        
        <div id="outline-container-orgb2c067a" class="outline-3">
          <h3 id="orgb2c067a">
            定期的に動作させる
          </h3>
          
          <div class="outline-text-3" id="text-orgb2c067a">
            <p>
              できれば定期的に動作させたい。 以下で、5 分ごとにバックグラウンドでポーリングできる。
            </p>
            
            <p>
              [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (setq mu4e-update-interval 300)<br /> [/sourcecode]
            </p>
          </div>
        </div>
        
        <div id="outline-container-org201a44a" class="outline-3">
          <h3 id="org201a44a">
            メール受信通知を受けたい
          </h3>
          
          <div class="outline-text-3" id="text-org201a44a">
            <p>
              mu4e-alert という elisp がある。
            </p>
            
            <ul class="org-ul">
              <li>
                <a href="https://github.com/iqbalansari/mu4e-alert">https://github.com/iqbalansari/mu4e-alert</a>
              </li>
            </ul>
            
            <p>
              [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;mu4e-alert)<br /> ;; デスクトップ通知<br /> (when linux-p<br /> ;; デスクトップ通知<br /> (mu4e-alert-set-default-style &#8216;libnotify))<br /> (add-hook &#8216;after-init-hook #&#8217;mu4e-alert-enable-notifications)<br /> ;; モードライン通知<br /> (add-hook &#8216;after-init-hook #&#8217;mu4e-alert-enable-mode-line-display)<br /> [/sourcecode]
            </p>
          </div>
        </div></div> 
        
        <div id="outline-container-org28257c7" class="outline-2">
          <h2 id="org28257c7">
            メールを検索する
          </h2>
          
          <div class="outline-text-2" id="text-org28257c7">
            <p>
              mu4e を開いて、更新 U を押すと、Offlineimap が走ってメールを受信し、 mu が走ってタグ付けされる。
            </p>
          </div>
          
          <div id="outline-container-org9214a97" class="outline-3">
            <h3 id="org9214a97">
              helm-mu
            </h3>
            
            <div class="outline-text-3" id="text-org9214a97">
              <p>
                helm I/F で検索できる。
              </p>
              
              <ul class="org-ul">
                <li>
                  <a href="https://github.com/emacs-helm/helm-mu">https://github.com/emacs-helm/helm-mu</a>
                </li>
              </ul>
              
              <p>
                [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> (require &#8216;helm-mu)<br /> (setq helm-mu-default-search-string &#8220;(maildir:/INBOX OR maildir:/Sent)&#8221;)<br /> (define-key mu4e-main-mode-map &#8220;s&#8221; &#8216;helm-mu)<br /> (define-key mu4e-headers-mode-map &#8220;s&#8221; &#8216;helm-mu)<br /> (define-key mu4e-view-mode-map &#8220;s&#8221; &#8216;helm-mu)<br /> [/sourcecode]
              </p>
            </div>
          </div>
        </div>
        
        <div id="outline-container-org6d9c03d" class="outline-2">
          <h2 id="org6d9c03d">
            メールを送信する
          </h2>
          
          <div class="outline-text-2" id="text-org6d9c03d">
            <p>
              sendmail ライブラリが Emacs にデフォルトで搭載されていたけれども、 動かなかった。。。 msmtp を使う。
            </p>
            
            <p>
              [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> $ git clone git://git.code.sf.net/p/msmtp/code msmtp<br /> $ cd msmtp<br /> $ autoreconf -i<br /> $ ./configure; make; make install<br /> [/sourcecode]
            </p>
            
            <p>
              .emacs の設定は以下の通り。
            </p>
            
            <p>
              [sourcecode language=&#8221;emacs-lisp&#8221; title=&#8221;&#8221; ]<br /> ;; use msmtp<br /> (setq message-send-mail-function &#8216;message-send-mail-with-sendmail)<br /> (setq sendmail-program &#8220;msmtp&#8221;)<br /> ;; tell msmtp to choose the SMTP server according to the from field in the outgoing email<br /> (setq message-sendmail-extra-arguments &#8216;(&#8220;&#8211;read-envelope-from&#8221;))<br /> (setq message-sendmail-f-is-evil &#8216;t)
            </p>
            
            <p>
              ;; don&#8217;t keep message buffers around<br /> (setq message-kill-buffer-on-exit t)<br /> [/sourcecode]
            </p>
          </div>
        </div>
        
        <div id="outline-container-org9ac4b3e" class="outline-2">
          <h2 id="org9ac4b3e">
            参考
          </h2>
          
          <div class="outline-text-2" id="text-org9ac4b3e">
            <ul class="org-ul">
              <li>
                <a href="https://wenshanren.org/archives/=111#Message-complete">mu4e: an E-mail Client for Emacs | 肉山博客 (Wenshan&#8217;s Blog)</a>
              </li>
              <li>
                <a href="https://qiita.com/kaz-yos/items/164f03c7bba401646783">mu4e でメール &#8211; Qiita</a>
              </li>
            </ul>
          </div>
        </div>