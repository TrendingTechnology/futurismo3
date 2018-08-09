---
author: admin
categories:
- Linux
- Python
- 技術メモ
date: 2012-11-25T04:41:34+00:00
dsq_needs_sync:
- 1
dsq_thread_id:
- 3.693667e+09
pvc_views:
- 5594
tags:
- OSS
- Ubuntu
- レビュー
title: ReviewBoardインストール手順まとめ(Ubuntu)
type: post
url: /archives/=798
---

コードレビューが不十分だったと思ったので、コードレビューのためのツールを調べた。

  * [コードレビューツール 6選 どれが最適？ 窶錀 Act as Professional][1] 
  * [アジャイルなレビューをサポートするツールを5つ | 世界 | daipresents.com][2] 

調べてみるといろいろあるものだ。   
ReviewBoardをトライアルしてみることにした。   
ReviewBoardとは、VMware社が開発したコードレビューツール。（無料）   
Twitter社でもつかわれているらしい。   
[<font color="#0066cc">https://www.reviewboard.org/ </font>][3]

導入は、実はとても大変だった。   
まず、Windows 7 64bit 環境で導入しようとしたが、挫折。   
公式HPの注意事項にも書いてあるが、Windows 64bit環境では動くのだろうか？   
[<font color="#0066cc">https://www.reviewboard.org/docs/manual/dev/admin/installation/windows/</font>][4]   
インストールに必要なPythonモジュールのバージョンがなかったりした。

自分の場合は、Linux(Ubuntu)で導入してみた。   
LinuxはWinodowsに比べてとても導入が簡単だった（といっても、ハマったけど）。   
以下、Ubuntuでの導入手順を公式HPにそって実施したまとめ。   
<https://www.reviewboard.org/docs/manual/1.6/admin/installation/linux/>

#### 環境

  * Ubuntu 12.10 

#### インストールしたもの

  * Apache 2.2.22 
  * MySQL 5.5.28 
  * Python 2.7.3 
  * python dev 2.7.3 
  * Python Setuptools 0.6.28 
  * memcached 1.4.14 
  * python-memcached 1.48 
  * patch 2.6.1 
  * Review Board 1.6.13 
  * python-mysqldb 1.2.3 

### Review Boardのインストール

#### MySQLをインストール

> $ sudo apt-get install mysql-server 

パスワードをきかれるので、入れる。   
[https://debianj.com/ubuntu/install/mysql.html][5]

MySQLインストール後、   
共有ライブラリとして認識させるために「/etc/ld.so.conf」に以下の行を追記。

> /usr/local/lib/mysql

#### Apacheをイントール

> $ sudo apt-get install apache2

apache2の高速化のために、以下の3つのPython Moduleから一つを選ぶ必要がある。

  * mod_wsgi (推奨）
  * fastcgi 
  * mod_python （非推奨）

ここでは、推奨であるmod_wsgiを選択する。   
以下のHPにしたがって設定。<a href="https://d.hatena.ne.jp/mizchi/20100701/1277985324" name="1277985324">Ubuntuにmod-wsgiいれたメモ</a>

> $ sudo apt-get install libapache2-mod-wsgi #インストール   
> $ sudo a2enmod wsgi&#160; #有効化   
> $ sudo apache2ctl restart #サーバー再起動

#### Python Setuptoolsをイントール

Pyhonはインストール済みであること。   
ここでは、Ubuntuにデフォルトで入っているPython 2.7を使う。   
2.4以降ならばいいらしい。

> $ sudo apt-get install python-setuptools

これで、**easy_install**コマンドが使えるようになり、インストールが簡単になる。

#### Python Development Headersをインストール

> $ sudo apt-get install python-dev

#### memcachedをインストール

Review Boardを高速化するためのキャッシュツールを入れる。

> $ sudo apt-get install memcached   
> $ sudo easy_install python-memcached

#### patchをインストール

GNU patch とは、 差分ファイル (パッチファイル) を用いてソースファイルの修正作業を自動的に実行してくれるソフトウェア（らしい）

> $ sudo apt-get install patch

#### Review Boardをインストール

ようやく、主題であるReview Boardのインストールだ。   
コマンドは以下を実行。

> $ sudo easy_install ReviewBoard

これで、Djblets, Django-Evolution, Django, flup, paramiko and Python Imaging Libraryが足りない場合は、依存性を分析して、ダウンロードしてくれる。   
（ここがWindowsと違って感動した)

flupが見つからなかったので、下記サイトを参考にインストール。   
<https://kaigai-hosting.com/bluehost-django.php>

> wget <https://www.saddi.com/software/flup/dist/flup-1.0.2.tar.gz>   
> tar xzvf flup-1.0.2.tar.gz   
> cd flup-1.0.2   
> sudo python setup.py install &#8211;user

&#160;

#### mysql-pythonのインストール

mysqlをpythonから操作するためのモジュールmysql-pythonを入れる。

> apt-get install python-mysqldb

ただ、ここでハマった。easy_installも実施しておく。   
のちのち、サイトを起動したときに、mysql-pythonが動いていないために、   
500エラーとなって、以下のメッセージが表示された。

review board is taking a nap

apacheのエラーログをみると、mysql_config not foundらしい。   
以下の２つのコマンドを叩いて解決した。

> sudo apt-get instal libmysqlclient-dev   
> sudo easy_install mysql-python

&#160;

### Review Board サイトの作成

#### Apache起動

> /usr/apache2/bin/apachectl start

127.0.1.1にアクセスしてみて、"It works!"が起動されていれば成功。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb71.png" width="343" height="123" />][6]

[https://kazmax.zpp.jp/apache/apache2.html#ah_1][7]

#### MySQLデータベース作成

<span style="widows: 2; text-transform: none; background-color: rgb(255,255,255); text-indent: 0px; letter-spacing: normal; display: inline !important; font: 13px/19px sans-serif; white-space: normal; orphans: 2; float: none; color: rgb(0,0,0); word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px"><font face="Arial">ユーザ「mysql」を作成し、データベースを初期化。</font></span>

> /usr/sbin/useradd mysql    
> /usr/local/bin/mysql\_install\_db &#8211;user=mysql

MySQLを起動（常駐）

> /usr/local/bin/mysqld_safe &#8211;user=mysql &

rootパスワードを入れる

> /usr/local/bin/mysqladmin -u root password "パスワードを入力"

MySQLにroot権限でログインして、データベース(ここではreviewboard)を作成。

> mysql -u root -p

> mysql> GRANT ALL privileges ON \*.\* TO reviewboard@localhost IDENTIFIED BY &#8216;reviewboard&#8217; WITH GRANT OPTION;   
> mysql> CREATE DATABASE reviewboard DEFAULT character SET utf8;

つづいて、mysqlユーザのパスワード設定。

> mysql> set password for <mysql@localhost> = password(&#8216;パスワードを入力&#8217;);

ちなみに、ここが正しく設定されていないと、

Something broke! 

と表示された。

#### ReivewBoardインストール

以下のコマンドで作成。ここでは" /var/www/reviews.example.com"に作成する。

> sudo rb-site install /var/www/reviews.example.com

GUIの設定画面が現れるので、順に回答していく。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb72.png" width="372" height="275" />][8]

Domain Name: review   
Root Path:/reviews/   
Database:mysql   
Database Name:reviewboard   
Database Server:localhost   
database username/password xxx   
web server apache   
wsqi   
&#8230;. etc.

（参考サイト)   
[https://www.atmarkit.co.jp/fjava/rensai4/devtool19/devtool19_3.html][9]

#### パーミッションの変更

作成したディレクトリ"/var/www/reviews.example.com"にApacheからアクセスするために、アクセス権限を与える。

$ chown -R www-data /var/www/reviews.example.com/htdocs/media/uploaded   
$ chown -R www-data /var/www/reviews.example.com/data

#### Apacheサーバの設定

Apache2とmod_wsgiを選択した場合の設定例。   
reviews.example.comディレクトリで自動生成された設定ファイルをApacheの設定ファイルに反映する。

> $ cd /etc/apache2/sites-available   
> $ cp /var/www/reviews.example.com/conf/apache-wsgi.conf reviews.example.com.conf   
> $ cd ../sites-enabled   
> $ ln -s ../sites-available/reviews.example.com.conf .

＊apache-wsgi.confがASCIIコードでUTF-8に変換しないといけないという記事もあった。   
自分の場合はUTF-8だったから問題はなかったけれども。

最後に、/etc/apache2/sites-enabled/000-defaultを削除する。   
<https://www.natswell.com/techcolumn/2011/10/06/review-board/>

Apache再起動。

> $apachectl restart

ついに設定完了か？、と思ったらいきなり以下のエラーがでた。

(1146, "Table &#8216;reviewboard.django_site&#8217; doesn&#8217;t exist")   
[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb73.png" width="591" height="87" />][10]

&#8216;reviewboard.django_site&#8217; が存在しない、とのこと。   
djangoのコマンドで manage.py syncdbを叩かないといけないらしい。   
よくわからないが、以下のコマンドを叩いて直った。

> sudo rb-site upgrade /var/www/reviews.example.com/

<https://groups.google.com/forum/?fromgroups=#!topic/reviewboard/8b2fH37hLC8>

### ReviewBoardインストール完了

サイトにアクセスして、ログインできれば成功。   
ここでは(<https://localhost/review/> ）にアクセス。

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb74.png" width="554" height="332" />][11]

### うまくインストール出来ない時の対処方法

#### Apacheエラーログをみる

エラーログを見れば、メッセージからなんとなく足りないPythonモジュールがわかるかも。

/var/log/apache2/error.log

#### Pythonデバックフラグを立てる

Something broke! とか出た場合は、apache2ログでは分からない。   
こんなときは、デバックフラグをたてて、メッセージを確認する。

reviewboardのディレクトリ配下で、conf/settings_local.pyを開く。   
ここでは、(/var/www/reviews.example.com/conf/settings_local.py)   
DEBUG = True   
と書き換える。

サイトにアクセスしてて、エラーすればメッセージがでる。   
出たメッセージをもとにGoogle先生に相談する。

 [1]: https://hiroki.jp/2012/09/13/5626/
 [2]: https://daipresents.com/2011/%E3%82%A2%E3%82%B8%E3%83%A3%E3%82%A4%E3%83%AB%E3%81%AA%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%99%E3%82%8B%E3%83%84%E3%83%BC%E3%83%AB%E3%82%925%E3%81%A4/
 [3]: https://www.reviewboard.org/ "https://www.reviewboard.org/ &#13;&#10;"
 [4]: https://www.reviewboard.org/docs/manual/dev/admin/installation/windows/ "https://www.reviewboard.org/docs/manual/dev/admin/installation/windows/"
 [5]: https://debianj.com/ubuntu/install/mysql.html "https://debianj.com/ubuntu/install/mysql.html"
 [6]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image71.png
 [7]: https://kazmax.zpp.jp/apache/apache2.html#ah_1 "https://kazmax.zpp.jp/apache/apache2.html#ah_1"
 [8]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image72.png
 [9]: https://www.atmarkit.co.jp/fjava/rensai4/devtool19/devtool19_3.html "https://www.atmarkit.co.jp/fjava/rensai4/devtool19/devtool19_3.html"
 [10]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image73.png
 [11]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image74.png