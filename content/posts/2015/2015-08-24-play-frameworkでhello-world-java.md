---
author: admin
categories:
- Java
date: 2015-08-24T13:27:00+00:00
dsq_thread_id:
- 4.0620567e+09
pvc_views:
- 1608
tags:
- Play
title: Play frameworkでHello World (Java)
type: post
url: /archives/=4663
---

Javaで有名な Webフレームワーク、Playで Hello Worldをしてみました.
(=\^ー゜)ノ

Install
=======

参考:
[install](https://www.playframework.com/documentation/ja/1.2.x/install)

最新版のactivator バイナリを以下から取得.

-   <https://www.playframework.com/download>

ダウンロードした圧縮ファイルを解凍し、任意のディレクトリに配置.
Playの実行ファイルactivator へ環境変数PATHを設定.

以下を実行し、しばらくまつ(結構時間かかる). ツールのダウンロードが走る.

``` {.bash}
$ activator ui
```

<https://localhost:8888>
にアクセスしてドキュメントが見えればインストール完了.

Hello Play !!
=============

Hello worldをしてみる.以下の手順にしたがいます.

-   <https://www.playframework.com/documentation/ja/1.2.x/firstapp>

まずは、プロジェクト作成 (=\^ー゜)ノ

``` {.bash}
$ activator new my-first-app play-java
```

activatorを起動して、いろいろダウンロード.

``` {.bash}
$ cd my-first-app
$ activator run
```

これで <https://localhost:9000> にアクセスすると、Welcome ページが見える.

view で hello world
-------------------

app/view/index.scala.htmlをひらき、Hello Worldを追記.

``` {.html}
@(message: String)

Hello, Play!!
```

再度 Webにアクセスすると、 Hello, Playの文字が (**´∇｀**)

controllers で hello world
--------------------------

次に、 app/controllers/Application.javaを開き printlnを追記.

``` {.java}
package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public Result index() {
        System.out.println("Hello, Play!!");

        return ok(index.render("Your new application is ready."));
    }

}
```

再度, <https://localhost:9000> にアクセスしてみると、 コンソール画面に.
Hello, Playの文字が (**´∇｀**)

ここでの感動ポイントは、\*リコンパイル不要\* ということ. Javaだろ？！
動的言語かよ!! (=\^ー゜)ノ

オリジナルのエントリポイント
============================

オリジナルのエントリポイントをつくってみる. conf/routesを編集する.
ここでエントリポイントを定義する.

以下の行を追加. 記法は、Scalaのようだ.

``` {.text}
# My Sample
GET     /test/:number               controllers.MySample.index(number: String)
```

つづいて、オリジナルの controllerを作成. app/controllers/MySample.java

``` {.java}
package controllers;

import play.*;
import play.mvc.*;

public class MySample extends Controller {

    public Result index(String number) {
        System.out.println("number is " + number);
        return ok();
    }
}
```

これで、たとえば、https://localhost:9000/test/200 にアクセスすると、
"number is 200" という文字がコンソールに出力される.

おわりに
========

Special Thanks
--------------

-   [NewApplication](https://www.playframework.com/documentation/ja/2.3.x/NewApplication)
-   [Play Framework(Java)の開発環境を構築する - hidemium's
    blog](https://hidemium.hatenablog.com/entry/2014/11/24/175303)
-   [Play Framework で「Hello World!!」 -
    hirahiro56のブログ](https://hirahiro56.hatenablog.com/entry/2015/01/03/023902)
-   [PlayFramework - Play framework開発セットアップ（Java） -
    Qiita](https://qiita.com/yu_naka0607/items/c48f01c4bd7e605bdfbf)

<p style="font-size:32px">以上、Happy Hacking!!</p>
