---
author: admin
categories:
- Linux
date: 2014-08-15T12:33:00+00:00
dsq_thread_id:
- 3.7138432e+09
excerpt: Docker で WordPress を入れてみる
pvc_views:
- 4638
tags:
- Docker
- Hello_World
title: WordPress ローカル環境が 5 分で構築できるか?   Docker の都市伝説を検証してみた
type: post
url: /archives/=2545
---

<a href="https://futurismo.biz/wp-content/uploads/docker_img.png"><img alt="" src="https://futurismo.biz/wp-content/uploads/docker_img.png" width="256" height="256" /></a>

はじめに
========

WordPress のテーマをカスタマイズするローカル環境が欲しかった.

Docker を利用すれば, お気楽お手軽に実現できるという都市伝説を聞い
た.Docker はもともと試してみたかったし, 以前 Docker Hub のアカウント
も取得したのだけれども, 利用していなかった.

これを機に, Docker の勉強も兼ねて, 以下の都市伝説を検証してみた.

"WordPress ローカル環境が 3 分で構築できるか?"

Docker とは
===========

Docker とは, OSS の Linux コンテナエンジン.

-   Official: [Docker - Build, Ship, and Run Any App,
    Anywhere](https://www.docker.com/)
-   github: [docker/docker](https://github.com/docker/docker)
-   [Docker - Wikipedia](https://ja.wikipedia.org/wiki/Docker)

特徴
----

-   Go でかかれている.
-   Linux カーネルにのみ依存.
-   デプロイの作業が自動化できる.
    -   github, bitbucket とも連携.
-   Docerfile によってインフラをコードとして扱える.
-   ゲスト OS がなくカーネルを共有しているのでオーバヘッドが非常に少ない
    -   ディスク使用量は少ない.
    -   インスタンス作成やインスタンス起動は速い
    -   性能劣化がほとんどない
-   Linux コンテナ上ならば同じ環境が再現できる (Java と同じ考え)
-   クライアント・サーバ型のアーキテクチャ

Linux コンテナとは
------------------

いくつかのユーザプロセスをまとめて閉じ込めたユーザ空間.
コンテナ内で動くプロセスは通常のプロセスと同じもの.

### ハイパーバイザとの比較

From: [コラム - クラウド時代のオープンソース実践活用 | 第 41 回 Linux
コンテナ (LXC) の基礎をまとめ直す|CTC 教育サービス 研修/
トレーニング](https://www.school.ctc-g.co.jp/columns/nakai/nakai41.html)

-   コンテナ
    -   1 つの OS.
    -   カーネル空間共有, ユーザ空間が別々
-   ハイパーバイザ
    -   独立した複数 OS
    -   カーネル空間, ユーザ空間が別々

Dockerfile とは
---------------

OS のスクラッチイメージからアプリが動くまでを書いたコード.

Bookmarks
---------

-   [今からでも間に合う Docker の基礎. コンテナとは何か, Dockerfile
    とは何か. Docker Meetup Tokyo \#2 -
    Publickey](https://www.publickey1.jp/blog/14/dockerdockerfiledocker_meetup_tokyo_2.html)
-   [Docker とは何か? どこで使うべきか? |
    SOTA](https://deeeet.com/writing/2014/05/01/what-is-docker/)

Docker で Hello World
=====================

インストールから Hello, World まで.

Install
-------

### ArchLinux

-   [Docker (日本語) -
    ArchWiki](https://wiki.archlinux.org/index.php/Docker_(%E6%97%A5%E6%9C%AC%E8%AA%9E))

    ``` {.bash}
    # インストール
    $ sudo pacman -S docker
    # サービス登録. Docker は OS のサービスとして動作する.
    $ sudo systemctl start docker
    # 動作確認 docker がクライアントコマンド
    $ dockker info
    # 一般ユーザを sudo なしで docker をつかえるようにする
    $ sudo gpasswd -a tsu-nera docker
    ```

使ってみる
----------

### Hello, World

まずは, 定番の Hello World をしてみる. コマンドラインから,

``` {.bash}
$ sudo docker run ubuntu /bin/echo 'Hello World'
```

これを叩くと, ローカルに docker のイメージがない場合は, Docker Hub か
ら勝手にダウンロードしてくれる.

docker は image からコンテナを生成する.
(クラスからインスタンスを生成するように)

``` {.language}
% sudo docker run ubuntu /bin/echo 'Hello World'
Unable to find image 'ubuntu' locally
Pulling repository ubuntu
c4ff7513909d: Download complete 
er.io/v1/ 9d: Pulling image (latest) from ubuntu 
511136ea3c5a: Download complete 
1c9383292a8f: Download complete 
9942dd43ff21: Download complete 
d92c3c92fa73: Download complete 
0ea0d582fd90: Download complete 
Hello World
```

### bash を起動

bash を起動して, インタラクティブに操作

``` {.language}
$ sudo docker run -t -i ubuntu /bin/bash
```

### イメージとコンテナ

現在保持している image は docker images で確認できる.

``` {.language}
$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
ubuntu              14.04               c4ff7513909d        3 days ago          213 MB
ubuntu              latest              c4ff7513909d        3 days ago          213 MB
```

また, 過去に生成したコンテナも含めて一覧を確認するコマンドは docker ps
-a.

``` {.language}
 % docker ps -a
CONTAINER ID        IMAGE               COMMAND                CREATED             STATUS                      PORTS               NAMES
78941163261a        ubuntu:14.04        /bin/bash              12 minutes ago      Exited (0) 11 minutes ago                       clever_perlman       
894d649c27d4        ubuntu:14.04        /bin/echo 'Hello Wor   13 minutes ago      Exited (0) 13 minutes ago                       stupefied_rosalind   
9d34b4889593        ubuntu:14.04        /bin/echo 'Hello Wor   14 minutes ago      Exited (0) 14 minutes ago                       romantic_bohr        
a986cb096871        ubuntu:14.04        /bin/echo 'Hello Wor   15 minutes ago      Exited (0) 15 minutes ago                       tender_sinoussi      
cbbca1119327        ubuntu:14.04        /bin/echo 'Hello Wor   15 minutes ago      Exited (0) 15 minutes ago                       mad_babbage          
c6824e447da7        ubuntu:14.04        /bin/echo 'Hello Wor   17 minutes ago      Exited (0) 17 minutes ago                       sleepy_bardeen       
```

とりあえず, すべてを一旦削除したい.コンテナをすべて削除.

``` {.language}
$ sudo docker rm $(sudo docker ps -a -q)
```

続いて, イメージもすべて削除.

``` {.language}
$ sudo docker rmi $(sudo docker images -q)
```

-   [私の Docker TIPS -
    Qiita](https://qiita.com/mopemope/items/181cb6c6c6f7cf9bbaa9)

### Links

秀逸なガイダンス.

-   [Docker User Guide 日本語版 (仮) -
    Qiita](https://qiita.com/zembutsu/items/444396b76e0db2c04c2b)
-   [Docker 入門 (全 11 回) -
    プログラミングならドットインストール](https://dotinstall.com/lessons/basic_docker)

Docker Architecture.

-   [Docker を理解する - Docker User Guide -
    Qiita](https://qiita.com/zembutsu/items/337c04a7003f3a5c4211)

Docker で WordPress 環境を構築
==============================

さて, 本題.

wordpress image を取得
----------------------

もちろん, Docker Hub に wordpress のイメージがあった. tutum/wordpress
というリポジトリが導入が導入が簡単だとの評判.

-   [tutum/wordpress Repository | Docker Hub Registry - Repositories of
    Docker Images](https://registry.hub.docker.com/u/tutum/wordpress/)

ローカル環境に落として実行.

``` {.language}
$ sudo docker run -d -p 80:80 tutum/wordpress
```

まつこと数分・・・ <https://localhost> にアクセスしてみると・・・

インストール完了!! 都市伝説は本当だった!

ssh でもやっぱりアクセスしたい
------------------------------

しばらく喜んでたけど, なんだか ssh でコンテナにアクセスしたくなって
きたので, 設定.

まずは, コンテナの中に入る.

``` {.language}
$ sudo docker run -t -i tutum/wordpress /bin/bash
```

コンテナの中で openssh-server を立ち上げ.パスワードを設定.

``` {.bash}
apt-get install openssh-server
mkdir /var/run/sshd
/usr/sbin/sshd
passwd root
exit
```

root でアクセスできるように設定変更.

``` {.bash}
vi /etc/ssh/sshd_config
```

``` {.language}
PermitRootLogin  yes
```

run.sh に sshd が勝手に起動するように修正.

``` {.language}
vi run.sh

# 追加
/usr/sbin/sshd -D &
```

ここまでの作業を commit.

``` {.bash}
docker commit ${ID} tsune/wordpress
```

自分で作成したイメージを起動. -p 20 で ssh 用のポートを別のものに割り
当てる.

``` {.language}
docker run -d -p 22 -p 80:80 tsune/wordpress
```

最後に, ifconfig で docker0 に割り当てられている ip と, docker ps で 22
に割当たっているポートナンバをしらべて, ssh.

``` {.bash}
$ ifconfig
docker0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
inet 172.17.42.1  netmask 255.255.0.0  broadcast 0.0.0.0

$ docker ps
0.0.0.0:49157->22/tcp

$ ssh root@172.17.42.1 -p 49157
```

-   [docker のコンテナイメージに ssh でアクセスしてみる - ようへいの日々
    精進 XP](https://inokara.hateblo.jp/entry/2013/09/29/090500)

Links
-----

-   [Installing WordPress in a Docker Container on the CenturyLink Cloud
    | CenturyLink
    Labs](https://www.centurylinklabs.com/tutorials/docker/wordpress-in-a-docker-container-on-the-centurylink-cloud/)

Docker 関連技術まとめ
=====================

Docker Hub
----------

Docker コンテナをクラウドサービス上で共有できる.

-   <https://hub.docker.com/>
-   [Docker Hub 発表. ビルド, テスト, デプロイの自動化, Docker
    イメージの管理など
    Publickey](https://www.publickey1.jp/blog/14/docker_hubdockerdocker.html)
-   [Docker Hub を始める - Docker User Guide -
    Qiita](https://qiita.com/zembutsu/items/dd3fd778b92aacaa884b)

Boot2Docker
-----------

Boot2Docker を利用すると, Windows 上で Docker を動かすことが可能となる.
Very Cool Feature.

-   [boot2docker/boot2docker](https://github.com/boot2docker/boot2docker)

[- Microsoft Windows - Docker
Documentation](https://docs.docker.com/installation/windows/)

Panamax
-------

Docker コンテナを GUI で利用することができる.Very Cool Feature.

-   [Panamax: Docker Management for Humans](https://panamax.io/)
-   [CenturyLink Labs](https://github.com/CenturyLinkLabs)
-   [Docker コンテナを GUI で管理する「 Panamax 」を使って WordPress
    をセットアップしてみた話 | ブログ :: Web
    notes.log](https://blog.wnotes.net/blog/article/tried-panamax-with-wordpress)

おわりに
========

本当に, あっという間に WordPress の環境が手に入った. しかし,
この記事を書くのに, 2 時間かかった!

プロセスは通常時のものとほぼ同等リソースを食わないというところが,
VirtualBox よりも気に入った. VM 環境は重くてリソースを喰うのが嫌い.

普段 Linux を利用している自分としては, 発想次第でいろいろ応用できそうだ.
