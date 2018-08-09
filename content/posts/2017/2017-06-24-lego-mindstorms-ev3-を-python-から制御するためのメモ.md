---
author: admin
categories:
- Python
- 技術メモ
date: 2017-06-23T23:57:00+00:00
dsq_thread_id:
- 5.9373896e+09
excerpt: LEGO Mindstorms EV3 を Python から制御するためのメモ
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
- 743
side:
- "y"
tags:
- LEGO
title: LEGO Mindstorms EV3 を Python から制御するためのメモ
title_view:
- "y"
type: post
url: /archives/=6564
---

レゴマインドストーム EV3 を Python
で制御するためのセットアップ作業メモです。

Environment
-----------

-   LEGO MindStorms EV3
-   Ubuntu 16.04(途中 micro SD カードのところは Windows10)
-   ev3dev (2017-06-09)
-   Python 3.4.2

ev3dev
======

-   [Getting Started with
    ev3dev](https://www.ev3dev.org/docs/getting-started/)

ev3dev の OS 起動
-----------------

ev3dev とは、Debian ベースの Linux OS.

-   [ev3dev Home](https://www.ev3dev.org/)

Python でプログラミングするには、標準で入っている OS ではなく、ev3dev
を利用する。 この ev3dev OS を micro SD カードに焼いて、カードから OS
を起動してその上で作業する。

いわば これはデュアルブート。 なので、もともとの EV3 の OS
を削除することなく、ev3dev OS を動かすことができる。

まずは、OS のイメージをダウンロードする。

-   [ev3dev Downloads](https://www.ev3dev.org/downloads/)

ダウンロードしたファイルを解凍する。

micro SD カードに write するために、ツールを使う。自分の PC では Ubuntu
で作業しているのだけれども、
カードがどうやっても認識できなかったので、Windows から micro SD カードに
OS イメージを焼いた。 Windows では、[Win32 Disk
Imager](https://ja.osdn.net/projects/sfnet_win32diskimager/)というソフトが利用できる。

SD カードを EV3 本体に差し込んで、起動ボタンを押す。1
分ほどで、立ち上がる。

wifi 接続
---------

wifi 接続には、wifi ドングルが必要。

-   [EV3-Python プログラミング（ev3dev）環境　 wifi 接続手順 |
    アフレル](https://afrel.co.jp/archives/16530)

ssh でリモートログイン
----------------------

ターミナルを起動して、以下を打ち込む。

``` {.bash}
ssh robot@ev3dev.local
```

ユーザ名は、robot, パスワードは
maker.ログインが成功すると、以下の出力を得る。

``` {.bash}
             _____     _
   _____   _|___ /  __| | _____   __
  / _ \ \ / / |_ \ / _` |/ _ \ \ / /
 |  __/\ V / ___) | (_| |  __/\ V /
  \___| \_/ |____/ \__,_|\___| \_/

Debian jessie on LEGO MINDSTORMS EV3!

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Fri Jun 23 10:55:42 2017 from 192.168.3.4
robot@ev3dev:~$ 
```

wifi 設定を永続化するために、/etc/wpa\_supplicant/wpa\_supplicant.conf
の編集をする。

``` {.bash}
cd /etc/wpa_supplicant/
sudo touch wpa_supplicant.conf
sudo chmod a+w wpa_supplicant.conf
sudo wpa_passphrase <SSID> <passward> >> wpa_supplicant.conf
```

ev3dev のアップデート
---------------------

``` {.bash}
sudo apt-get update
```

Python
======

Python
------

デフォルトでは、Python 2.x が入っているようだ。python3 で 3.x
系が使える。

``` {.bash}
robot@ev3dev:~$ python
Python 2.7.9 (default, Aug 13 2016, 17:33:18) 

robot@ev3dev:~$ python3
Python 3.4.2 (default, Oct  8 2014, 14:47:30
```

ev3dev-lang-python
------------------

Python で ev3dev のデバイス、
つまりセンサやモータなどを制御するためには、ev3dev-lang-python
というライブラリを使う。

-   <https://github.com/rhempel/ev3dev-lang-python>

ライブラリを最新にする。

``` {.bash}
sudo apt-get install --only-upgrade python3-ev3dev
```

ライブラリのドキュメントは以下。

-   <https://python-ev3dev.readthedocs.io/en/latest/>

インタラクティブ
----------------

### Hello World

まずは、Hello World から。Python インタープリタを起動する。

``` {.python}
robot@ev3dev:~$ python3
Python 3.4.2 (default, Oct  8 2014, 14:47:30) 
[GCC 4.9.1] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

ライブラリ を import する。

``` {.python}
import ev3dev.ev3 as ev3
```

Hello, World と音をだす。

``` {.python}
ev3.Sound.speak('Hello World!').wait()
```

### モーター制御

-   <https://python-ev3dev.readthedocs.io/en/latest/motors.html>

ev3.LargeMotor でモーターのインスタンスを作成する。

run\_timed で、時間指定でモーターを回す。

``` {.python}
# インスタンス取得
m = ev3.LargeMotor('outA')

# 3 秒間動かす
m.run_timed(time_sp=3000, speed_sp=500)
```

時間指定なしでモーターを回すには、run\_forever()を使う。止めるには、stop()を使う。

``` {.python}
m.run_forever(duty_cycle_sp=30,speed_sp=500)
m.stop()
```

スクリプト
----------

python3 を使うために、行頭に \#!/usr/bin/env python3
を書く。run\_motor.py を作成。

``` {.python}
#!/usr/bin/env python3
import ev3dev.ev3 as ev3
import time

m = ev3.LargeMotor('outA')
m.run_forever(duty_cycle_sp=50, speed_sp=500)
time.sleep(3)
m.stop()
```

ターミナルから実行。

``` {.bash}
python3 run_motor.py
```

EV3
の本体から、スクリプトを選択して実行することもできる。スクリプトを実行可能にする。

``` {.bash}
chmod +x run_motor.py
```

画面から、File Browser
を選択して、作成したファイルを選択すると実行できる。

開発環境
========

いろいろ試したけれども、PyCharm に落ち着きそう。

Emacs
-----

ローカル PC(Ubuntu)の Emacs からリモートサーバの ev3dev
のファイルをいじるには、 Emacs の Tramp を使う。

Emacs を起動して、C-x C-f を押してから以下を入力

``` {.bash}
/ssh:robot@ev3dev.local:
```

パスワードを聞かれるので maker と入力して Enter.

Windows での方法は、今回は未検証だけど、以下でいけるはず。

-   [Windows 環境の Emacs から Linux マシンに tramp で乗り込む方法メモ |
    Futurismo](https://futurismo.biz/archives/3412)

これで、ローカルで編集するのと同じ操作でリモートのファイルいじることができる。

### 追記

しばらくこれでやっていたのだけれども、tramp
を使うと入力レスポンスが遅い。ときどきフリーズする。

じゃあサーバに emacs を入れてしまおうとインストールした。

``` {.bash}
sudo apt-get install -y emacs-nox
```

これでも遅い。

やっぱりローカルで編集して、編集したものをアップロードする方式がよさそう。

PyCharm
-------

最近 PyCharm が Emacs よりもずっといいと思いはじめた。

PyCharm での 開発設定は以下にまとめられている。

-   [Setting Up a Python Development Environment with
    PyCharm](https://www.ev3dev.org/docs/tutorials/setting-up-python-pycharm/)

ここには、git
経由で編集するやり方が書いてある。編集と確認のたびにソースをコミットする必要がありそう。

なにかうまい方法はないかと考え中。ローカルで編集したものを rsync
でサーバと同期するか。

### 追記 source sync

うまい手をみつけた。プラグインで、source syncronizer というものがある。

-   <https://github.com/fioan89/sourcesync>

ローカルからサーバへの一方向のアップロードのみできる。インストールは、ファイル
&gt; 設定 &gt; プラグインを選択。 source sync
を検索してインストールする。

インストールしたら、ツール &gt; source sync を選択。プロトコルを SCP
で作成（SFTP だとうまくいかなかった）

-   ホスト: ev3dev.local
-   ホストパス: アップロード先ディレクトリ
-   ユーザ名: robot
-   パスワード: maker

ファイル単位でのアップロードだと漏れがありそうなので、 やっぱり git
で版数管理して同期するか、もしくは併用するのがいいかも。

### anaconda 環境の設定方法

``` {.bash}
# ev3 環境を作成
$ conda create -n ev3
$ activate ev3

# python をインストール
$ conda install python

# ev3dev-lang-python をインストール
$ git clone https://github.com/rhempel/ev3dev-lang-python.git
$ cd ev3dev-lang-python
$ python setup.py
```

作成した仮想環境を PyCharm で利用するには、 ファイル &gt; 設定 &gt;
プロジェクト &gt; プロジェクト・インターセプタから、 作成した環境の
Python へのパスを通す。

-   \~/anaconda3/envs/ev3/bin/python

なぜか候補に作成した環境があらわれなかったので、
歯車マークを選択して、ローカル追加を選択することで、パスを追加した。

Jupyter Notebook
----------------

頑張れば Jupyter Notebook
をインストールして使えるようだ。以下のページを参考にした。

-   <https://yakushi.shinshu-u.ac.jp/robotics/?EV3#n970fb72>

試してみたけれども、セルの実行に時間がかかりすぎたり、謎の kernel
エラーが発生したりしたのでやめた。

Visual Studio Code
------------------

拡張機能で、ローカル PC とサーバのファイルを sync
するものがある。これは便利。

-   [ev3dev-lang-python 開発環境(Visual Studio Code) |
    Futurismo](https://futurismo.biz/archives/6569)
