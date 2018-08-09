---
author: admin
categories:
- Python
- 技術メモ
date: 2017-06-25T00:50:00+00:00
dsq_thread_id:
- 5.9399127e+09
excerpt: ev3dev-lang-python 開発環境(Visual Studio Code)
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
- 826
side:
- "y"
tags:
- mindstorms
title: ev3dev-lang-python 開発環境(Visual Studio Code)
title_view:
- "y"
type: post
url: /archives/=6569
---

ev3dev で Python の開発をするには、Visual Studio COde をローカル PC
でつかうのがよさそう。

サーバ上でコーディングすると、サーバからのレスポンスが遅くてイライラする。

なので、ローカルで編集したファイルをサーバにアップロードする方式のほうがよさそう。

VS Code なら ftp-sync という拡張機能があり、保存のたびに
サーバとローカルのフォルダの同期が走る。

Visual Studio Code の設定メモです。

環境
----

-   Ubuntu 16.04 LTS
-   Visual Studio Code 1.13.1

Visual Studio Code
==================

VS Code の本体を手に入れる。

-   <https://code.visualstudio.com/>

deb をダウンロードして、以下でインストール。

``` {.bash}
$ sudo dpkg -i code_1.13.1-1497464373_amd64.deb
```

anaconda
========

anaconda をつかって、専用の環境を用意する。

``` {.bash}
# ev3 環境を作成
$ conda create -n ev3
$ activate ev3

# python をインストール
$ conda install python
```

VS Code の ファイル &gt; 基本設定 &gt; 設定を選択。

ユーザ設定ファイル setting.json が作成される。setting.json に python
のパスを追記する。

``` {.text}
"python.pythonPath": "/home/tsu-nera/anaconda3/envs/ev3/bin/python",
```

ev3dev-lang-python
------------------

ev3dev ライブラリをインストール。

``` {.bash}
$ git clone https://github.com/rhempel/ev3dev-lang-python.git
$ cd ev3dev-lang-python
$ python setup.py
```

pylint
------

pylint をインストールすることで、エラーチェックを有効化。

``` {.bash}
$ conda install pylint
```

autocomplete
------------

ev3dev-lang-python の API のコード補完ができない。

PyCharm だとこの辺ができるんだけどな。。。。解決策探し中。

拡張機能
========

python
------

Python で開発するための必須機能。

-   <https://marketplace.visualstudio.com/items?itemName=donjayamanne.python>

ftp-sync
--------

VS Code のキモの拡張機能。sftp を利用してサーバとフォルダを同期する。

-   <https://marketplace.visualstudio.com/items?itemName=lukasz-wronski.ftp-sync>

以下のように、ftp-sync.json を設定する。

sftp は port22 に変更することに注意。remotePath
は同期したいサーバ上のフォルダ。

``` {.text}
{
    "remotePath": "./experimentals",
    "host": "ev3dev.local",
    "username": "robot",
    "password": "maker",
    "port": 22,
    "secure": false,
    "protocol": "sftp",
    "uploadOnSave": true,
    "passive": false,
    "debug": false,
    "privateKeyPath": null,
    "passphrase": null,
    "ignore": [
        "\\.vscode",
        "\\.git",
        "\\.DS_Store"
    ],
    "generatedFiles": {
        "uploadOnSave": false,
        "extensionsToInclude": [],
        "path": ""
    }
}
```

