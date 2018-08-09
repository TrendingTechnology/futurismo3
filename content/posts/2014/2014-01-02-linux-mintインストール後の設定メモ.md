---
author: admin
categories:
- Eclipse
- Linux
date: 2014-01-02T07:29:33+00:00
dsq_thread_id:
- 3.7087196e+09
excerpt: <!--:ja-->Linux Mintをインストール後の設定についてまとめます<!--:-->
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 6858
tags:
- Mint
title: Linux Mintインストール後の設定メモ
type: post
url: /archives/=2082
---

[<img alt="" src="https://lh4.googleusercontent.com/-WwKryqsJRbA/Ur_VLCSgqpI/AAAAAAAAA5c/6z6x7DqoddQ/s800/SnapCrab_NoName_2013-12-29_16-50-47_No-00.jpg" width="362" height="140" />][1]

前回、Linux Mintをインストールしたので、今回はその後の設定についてまとめます。

  * [Windowsと Mint Linuxのデュアルブート環境をVAIOに構築した手順メモ | Futurismo][2]

### 日本語入力環境の構築

デフォルトでは日本語がまず入力できません。なので日本語を入力できるようにします。

  * [Fcitx-anthyを使ってLinux Mintで親指シフト日本語入力環境を構築するまでの手順][3]

#### ソフトウェアを取得するリポジトリの変更と更新

日本国民ならば、パッケージを取得するための公式リポジトリは日本のミラーサイトに設定するべき。設定のソフトウェアソースを開き、公式リポジトリのミラーサイトを日本の国旗がかかれているものに変更。

    https://ftp.jaist.ac.jp/pub/Linux/linuxmint/packages/ 
    https://ftp.riken.jp/pub/Linux/ubuntu/
    

ソフトウェアを更新する。

    $ sudo apt-get update
    

### ディレクトリ名の英語表記

ホーム配下にあるディレクトリ（ピクチャやドキュメントなど）は日本語表記だが、コマンドラインとの相性を考えると英語の方がよいので変更する。

    $ env LANGUAGE=C LC_MESSAGES=C xdg-user-dirs-gtk-update
    

### WorkSpace数の変更

WorkSpace数はデフォルトで2つだけれども、4つに変更する。

    $ gsettings set org.cinnamon number-workspaces 4
    

### テーマと背景を変更する

テーマや背景は趣味で変更。

メニューの色も変更してみる。gtk-theme-configというツールをつかう。

    $ sudo apt-get install gtk-theme-config
    

インストールしたらメニューから Theme Configurationを選択。

Emacsを利用すると、256色つかえなかった。環境変数に以下を設定する必要がある。

    $ export TERM=xterm-256color
    

&nbsp;

### フォントの変更

デフォルトフォントは、Sansというフォント。これをプログラミングフォント、Rictyに変更する。

  * [美は生産性に宿る！プログラマーのためのフォントRictyをLinux Mintに導入した | Futurismo][4]

### Windows(NTFS)ファイルシステムをマウントする

Linux側からWindowsのドライブをマウントすれば、Linux側からもWindowsのファイルが利用できて便利です。以下にまとめました。

  * [デュアルブート時のLinux環境Dropbox導入について(Windows 7/Mint) | Futurismo][5]

### ディスプレイ明るさの調整

ノートPCなので、バッテリーを利用しているときは、ディスプレイの明るさを落として電力を節約したい。xbacklightdをインストールする。

    
    sudo apt-get install xbacklight
    

調整は以下のコマンドで実施。setの後ろの数字で調整。

    
    xbacklight -set 80
    

### Applications

各種アプリケーションを入れます。

#### zsh

端末のシェルをzshにします。

    $ sudo apt-get install zsh
    $ chsh
    

#### git

Gitをインストール

    $ sudo apt-get install git
    

続けて、githubと連携。以下のエントリも参照。

  * [githubに新しいリポジトリを作成してローカルのリポジトリをアップロードする | Futurismo][6]

githubで管理しているdotfilesを落としてきます。

  * [自分のプログラミング開発環境の歴史を記録する！githubで設定ファイル(dotfiles)をクラウド管理する方法 | Futurismo][7]

### Ruby

  * [Cygwin上のRuby1.9をrbenvで最新版Ruby2.0にバージョンアップしたの巻 | Futurismo][8]

rbenvを利用してインストール

    git clone git://github.com/sstephenson/rbenv.git ~.rbenv
    mkdir -p ~/.rbenv/plugins
    cd ~/.rbenv/plugins
    git clone git://github.com/sstephenson/ruby-build.git
    rbenv install 2.1.0
    rbenv global 2.1.0 
    rbenv rehash
    

エラーした。

    configure: error: in `/tmp/ruby-build.20140102130128.5783/ruby-2.1.0':
    configure: error: C compiler cannot create executables
    

この方法を試すとうまくいった [Home · sstephenson/ruby-build Wiki][9]

    apt-get install build-essential autoconf libssl-dev libyaml-dev libreadline6 libreadline6-dev zlib1g zlib1g-dev
    CC=/usr/bin/gcc rbenv install 2.1.0
    

### Eclipse

この記事がとても参孝になりました。ありがとうございます

  * [Linux で Eclipse 4.2 のダウンロード，インストール，設定，日本語化，基本操作][10]

Linux版のEclipseを[公式サイト][11]からインストールします。/opt/eclipse配下に展開。以下で起動確認。

    % /opt/eclipse/eclipse
    

起動できたら、日本語化します。[Pleadesプロジェクト][12]から日本語に必要なファイルをダウンロードして、feature,pluginsに上書き。

eclipse.intの最後に以下を追加

    -javaagent:/opt/eclipse/plugins/jp.sourceforge.mergedoc.pleiades/pleiades.jar
    

Eclipse環境の引越し方法は[Eclipse年次バージョンアップ時の移行方法について調べた][13]を参考。

### Wine

Windowsから引っ越してきたならば、必須のツール。なんとWindowsアプリがLinuxで利用できるのだ！Cygwinみたいなもの。

$HOME/.wine配下にCドライブのようなものができて、そこにアプリがインストールされる。

### Evernote

Wineを利用して、Evernote for windowsをインストール！Winowsのホームディレクトリ/AppDate/Local/Evernote/EvernoteにEvernoteのデータがあるため、ここにシンボリックリンクをはることで、LinuxとWindowsでデータを共用。

その他、趣味に合わせてツールをドンドン導入。

  * Google Chrome
  * freemind
  * Emacs

&#8230;

 [1]: https://picasaweb.google.com/lh/photo/6W0SkYpGlM4aBJtD4aJSYTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [2]: https://futurismo.biz/archives/2064
 [3]: https://futurismo.biz/archives/2067
 [4]: https://futurismo.biz/archives/2072
 [5]: https://futurismo.biz/archives/2077
 [6]: https://futurismo.biz/archives/1280
 [7]: https://futurismo.biz/archives/1325
 [8]: https://futurismo.biz/archives/1383
 [9]: https://github.com/sstephenson/ruby-build/wiki
 [10]: https://www.kkaneko.com/rinkou/javaintro/linux_eclipse.html
 [11]: https://www.eclipse.org/
 [12]: https://mergedoc.sourceforge.jp/
 [13]: https://futurismo.biz/archives/1527