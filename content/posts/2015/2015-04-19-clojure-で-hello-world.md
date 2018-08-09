---
author: admin
categories:
- Clojure
- 技術メモ
date: 2015-04-18T23:58:00+00:00
dsq_thread_id:
- 3.6936543e+09
pvc_views:
- 1487
title: Clojure で Hello, World
type: post
url: /archives/=3131
---

はじめに
========

千里の道も Hello World からはじまるというユダヤの教えがありますが,
今回は, Clojure で Hello, World をしてみます.

\[toc\]

Environment
-----------

-   Arch Linux
-   Java 1.7

Clojure とは
============

Clojure は JVM 上で動く Lisp 系モダン関数型言語.

-   <https://clojure.org/>

<div data-theme="default" data-height="155" data-width="500" data-github="clojure/clojure" class="github-card"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>

-   <https://github.com/clojure/clojure>

以下の本によると, Clojure の魅力は, **簡潔さと力**. つまり...

**Elegant**

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'><div class='amazlink-list' style='clear: both;'><div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'><a href='https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0Clojure-Stuart-Halloway-Aaron-Bedra/dp/4274069133%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4274069133' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/512fApbP-4L._SL160_.jpg' style='border: none;' /></a></div><div class='amazlink-info' style='height:160; margin-bottom: 10px'><div class='amazlink-name' style='margin-bottom:10px;line-height:120%'><a href='https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0Clojure-Stuart-Halloway-Aaron-Bedra/dp/4274069133%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4274069133' rel='nofollow' target='_blank'>プログラミング Clojure 第 2 版</a></div><div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 15.04.19</div><div class='amazlink-detail'>Stuart Halloway and Aaron Bedra<br /></div><div class='amazlink-sub-info' style='float: left;'><div class='amazlink-link' style='margin-top: 5px'><img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18'><a href='https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0Clojure-Stuart-Halloway-Aaron-Bedra/dp/4274069133%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4274069133' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18'><a href='https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12301346%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D12301346%26surl%3Dbook' rel='nofollow' target='_blank'>楽天</a></div></div></div></div></div>

インストール
============

事前に, JDK6 以上 をインストールしておくこと.

-   [Java JDK インストール方法まとめ (Windows) |
    Futurismo](https://futurismo.biz/archives/751)

ダウンロード
------------

以下からダウンロードして解凍.

-   <https://clojure.org/downloads>
    -   closure-1.6.0.zip

leiningen
---------

leingen は, clojure 用のビルドツール.

<div data-theme="default" data-height="155" data-width="500" data-github="technomancy/leiningen" class="github-card"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>

-   <https://github.com/technomancy/leiningen>

github のページにしたがい lein スクリプトをインストール.

Hello, World
============

プロンプトから起動
------------------

Clojure 起動.

``` {.bash}
java -cp clojure-1.6.0.jar clojure.main
```

=&gt;user というプロンプトがでる. 以下を入力で, Hello, World!!

``` {.clojure}
user=> (println "Hello, World!!")
Hello, World!!
nil
```

REPL から実行
-------------

lein から REPL (インタラクティブスクリプト) を呼び出す.

``` {.bash}
lein repl
```

user=&gt;というプロンプトがでる.あとは, 上と同じ.

ファイルから実行
----------------

ファイルに保存して実行する. 拡張子は, .clj

``` {.bash}
echh "(println \"Hello, World!!\")" >> hello_world.clj
java -cp clojure-1.6.0.jar clojure.main hello_world.clj
```

Special Thanks
--------------

-   [Clojure だと生産性が上がるわけ |
    POSTD](https://postd.cc/why-im-productive-in-clojure/)
