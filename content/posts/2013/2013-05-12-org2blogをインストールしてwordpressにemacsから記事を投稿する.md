---
author: admin
categories:
- Emacs
- Wordpress
date: 2013-05-12T07:02:25+00:00
dsq_thread_id:
- 3.697443e+09
excerpt: org2blogをインストールしてWordPressにEmacsから記事を投稿する方法
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
- caption
pvc_views:
- 3538
side:
- "y"
title: org2blogをインストールしてWordPressにEmacsから記事を投稿する
title_view:
- "y"
type: post
url: /archives/=1324
---

<!--:ja-->

### はじめに

emacsなら、なんでもできると信じている今日このごろなので、WordPressにもEmacsから記事の投稿ができたらいいなと思います。そんななかリサーチしてみたら、選択肢としては、以下のようなものがありました。

  * WebbloggerMode(wp-emacs は古い名前らしい) 
      * [<span style="color: #0066cc;">https://www.emacswiki.org/emacs/WebloggerMode</span>][1]
  * org2blog 
      * [<span style="color: #0066cc;">https://github.com/punchagan/org2blog</span>][2]

[![][3]][4]

こんな感じなので、org2blogをつかってみます。

#### 環境

  * cygwin               1.7.18-1
  * emacs                24.3-1

### org2blogのインストール

org2blogとは、Emacsのorg-modeでかかれたドキュメントをWordPress用に変換して投稿するEmac Lispです。

以下の3つが必要。

  * org2blog
  * metaweblog.el
  * xml-rcp.el

githubからorg2blogとmetaweblogをまずは取得。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:6f8790ac-2736-4b19-bd80-a8c616f3b995" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c">$ git clone git://github.com/punchagan/org2blog.git
$ git clone git://github.com/punchagan/metaweblog.el.git</pre>
</div>

org2blogディレクトリをload-pathの通った場所に配置します。例えば .emacsに以下を追記。metaweblog.elも同様にロードパスの通ったところへ。(or2blog配下でよい）

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:46545434-60c8-4249-a656-9878bd572cbc" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c">(setq load-path (cons "~/.emacs.d/org2blog/" load-path)) 
(require 'org2blog-autoloads)</pre>
</div>

xml-rcp.elも以下から取得。ロードパスの通った場所に配置します。

<a style="text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; color: #666666; word-spacing: 0px; text-decoration: underline; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;" href="https://launchpadlibrarian.net/40270196/xml-rpc.el"><span style="font-style: normal ! important; font-family: メイリオ,meiryo,arial,helvetica ! important; color: #0066cc;">https://launchpadlibrarian.net/40270196/xml-rpc.el</span></a>

ブログの設定も.emacsに書きます。以下を参考に適当に編集。

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:5ad7862f-bf76-4790-8d14-33ab8a4bc088" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c">(setq org2blog/wp-blog-alist 
       '(("wordpress" 
          :url "https://username.wordpress.com/xmlrpc.php"  ;;xmlrcp.phpのURL
          :username "username"  
          :password "password" 
          :default-title "Hello World" ;; デフォルトタイトル
          :default-categories ("daily") ;;カテゴリを指定 
          :tags-as-categories nil))) ;; タグを指定</pre>
</div>

設定が終わったら、emacsを再起動。

### org2blogの使い方

接続確認をします。ミニバッファで以下を入力し、サーバにログインできます。

M-x org2blog/wp-login

新しい記事を作成するには、以下を入力。

M-x org2blog-new-entry

テンプレートが呼び出さます。

[C-c d]で下書き保存され、[C-c p]で公開されます。

詳しくは、README参照。これは便利だー(^O^)

[<span style="color: #0066cc;">https://github.com/punchagan/org2blog</span>][2]

[https://www.youtube.com/embed/5cBghog4hn0?rel=0]

###  追記

パスワード入力を省略する方法があるようだ。まずは、~/.netrcに以下を追記。

    
    echo "machine myblog login username password yourpassword" > ~/.netrc 
    

init.elにも以下を追加。

    
    (require 'netrc) ;; or nothing if already in the load-path
    (setq blog (netrc-machine (netrc-parse "~/.netrc") "myblog" t))
    (setq org2blog/wp-blog-alist
          '(("my-blog"
             :url "https://username.server.com/xmlrpc.php"
             :username (netrc-get blog "login")
             :password (netrc-get blog "password"))))
    

#### 参考

  * [wp-emacsいれてみた | 日々の反省1][5]
  * [統合執筆環境 org-mode (Emacs Advent Calendar 22日目) &#8211; sheephead][6]
  * [org2blog で WordPress に投稿してみる | 備忘録][7]

<!--:-->

<!--:en-->

<!--:-->

 [1]: https://www.emacswiki.org/emacs/WebloggerMode
 [2]: https://github.com/punchagan/org2blog
 [3]: https://chart.googleapis.com/chart?cht=bhg&chs=400x200&chxt=y%2Cx&chxl=0%3A%7Cwp-emacs%7Corg2blog&chdlp=r&chco=ffbf67&chxr=1%2C0%2C2550&chbh=a&chd=t%3A2550%2C215&chtt=Google%20%E6%A4%9C%E7%B4%A2%E7%B5%90%E6%9E%9C%E6%95%B0%E3%81%AE%E6%AF%94%E8%BC%83&chds=0%2C2550&chm=N**%2C666666%2C0%2C-1%2C12%2C0&chl
 [4]: https://konisimple.net/tool/google_graph/#org2blog
 [5]: https://highmt.wordpress.com/2010/10/20/wp-emacs%E3%81%84%E3%82%8C%E3%81%A6%E3%81%BF%E3%81%9F/
 [6]: https://sheephead.homelinux.org/2010/12/22/6501/
 [7]: https://www.kaichan.mydns.jp/~kai/wordpress/archives/=28