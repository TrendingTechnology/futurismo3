---
author: admin
categories:
- Eclipse
- Emacs
- Java
- 技術メモ
date: 2014-12-17T16:20:00+00:00
dsq_thread_id:
- 3.728086e+09
excerpt: Java で log4j の使ってみた (Eclipse, Emacs Viewerも)
pvc_views:
- 19879
title: Java で log4j の使ってみた (Eclipse, Emacs Viewerも)
type: post
url: /archives/=2833
---

はじめに
========

仕事で log4j を利用しているので, Eclipse での使い方を少し調べてみた.

環境
----

-   log4j 2.3
-   Eclipse 4.4
-   Java 1.7

log4j とは
==========

Java で, ログを残すための便利で有名なライブラリ.

-   [log4j - Wikipedia](https://ja.wikipedia.org/wiki/Log4j)
-   [Log4j 2 Guide - Apache Log4j
    2](https://logging.apache.org/log4j/2.x/)

    log4j は バージョンが 1.x と 2.x がある. 新しい 2.x を試す.

install
-------

以下から最新版をダウンロード.

-   [Download Apache Log4j 2 - Apache Log4j
    2](https://logging.apache.org/log4j/2.x/download.html)

設定
----

適当なところに解凍後, クラスパスを通す.

Eclipse だと,

-   ツールバー &gt; ウィンドウ &gt; 設定
-   Java &gt; ビルド・パス &gt; ユーザライブラリ
-   新規 -&gt; Log4j と入力
-   外部 Jar 追加 を選択
    -   以下を登録
        -   log4j-core-2.x.jar
        -   log4j-api-2.x.jar
        -   log4j-1.x-api-2.x.jar

続いて, プロジェクトを右クリックして,

-   プロバティ &gt; Java ビルド・パス &gt; ライブラリータブ
-   ライブラリー追加 &gt; ユーザライブラリ &gt; 次へ
-   上で作成した Log4j を追加.

Hello log4j
===========

標準出力に log を出すことを目指す.

log4j2.xml を作成.
------------------

以下を参考に logger.xml を作成して, src 配下に配置.

-   [Configuring Log4j 2 - Apache Log4j
    2](https://logging.apache.org/log4j/2.x/manual/configuration.html)

``` {.xml}
<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="WARN">
  <Appenders>
    <Console name="Console" target="SYSTEM_OUT">
      <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
    </Console>
  </Appenders>
  <Loggers>
    <Root level="trace">
      <AppenderRef ref="Console"/>
    </Root>
  </Loggers>
</Configuration>
```

&lt;Root level="xxxx"&gt;を調整することで, ログレベルを調整できる.

### ログレベル

Wikipedia から引用. 以下のようにログのレベルがある.

  ------- ----------------------------------------
  Fatal   致命的なエラー. プログラムの異常終了
  ERROR   エラー. 予期しないその他の実行時エラー
  WARN    警告.
  INFO    情報. 実行時の何らかの注目すべき事象
  DEBUG   デバッグ用の情報
  Trace   トレース情報. DEBUG よりも詳細な情報
  ------- ----------------------------------------

コードを作成
------------

サンプルコード作成.

``` {.java}
package sample;
import org.apache.log4j.Logger;

public class LoggerSample {
        public static void main (String[] args) {
        Logger logger = Logger.getLogger (LoggerSample.class.getName ());

        logger.trace ("Hello trace");
        logger.debug ("Hello debug");
        logger.info ("Hello info");
        logger.warn ("Hello warning");
        logger.error ("Hello error");
        logger.fatal ("Hello fatal");
    }
```

出力結果
--------

``` {.bash}
23:57:03.111 [main] TRACE sample.LoggerSample - Hello trace
23:57:03.112 [main] DEBUG sample.LoggerSample - Hello debug
23:57:03.112 [main] INFO  sample.LoggerSample - Hello info
23:57:03.112 [main] WARN  sample.LoggerSample - Hello warning
23:57:03.112 [main] ERROR sample.LoggerSample - Hello error
23:57:03.112 [main] FATAL sample.LoggerSample - Hello fatal
```

Eclipse Plugin
==============

Eclipse で log4j のログを表示させるプラグインはいくつかあるみたい.

-   <https://github.com/rdiachenko/JLV>
-   [Eclipse Logfile Viewer |
    SourceForge.net](https://sourceforge.net/projects/logfiletools/)

JLV
---

JLV を試す. ためそうと思ったらこれは, log4j 1.x 用だったので, 1.x
を入れる.

-   [Apache log4j 1.2 - Download Apache log4j
    1.2](https://logging.apache.org/log4j/1.2/download.html)

以下にしたがって設定.

-   <https://github.com/rdiachenko/JLV>

カラフルに色が表示される. 検索機能も便利.
![](./../img/2014-12-18-002559_758x194_scrot.png)

Emacs Lisp
==========

こんなのみつけた.

-   [Log4j mode - view log files in
    Emacs](https://log4j-mode.sourceforge.net/)
-   <https://github.com/emacsmirror/log4j-mode>

text におとした log をみるモード. 自動で更新されるのもよい.

``` {.xml}
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">
<log4j:configuration xmlns:log4j="https://jakarta.apache.org/log4j/" >

  <appender name="file" class="org.apache.log4j.FileAppender">
     <param name="File" value="./sample.log" />
     <param name="Append" value="true" />
     <param name="Encoding" value="Shift_JIS" />
     <layout class="org.apache.log4j.PatternLayout">
        <param name="ConversionPattern" value="%m%n" />
     </layout>
  </appender>

  <root>
    <appender-ref ref="file"/>
  </root>
</log4j:configuration>
```

helm-swoop とかとくみあわせると, 抜群の検索効果.

JTags と組み合わせると, なんと Log からソースへジャンプできる.

-   [jtags - Emacs package for editing Java |
    SourceForge.net](https://sourceforge.net/projects/jtags/)
-   [jtags - Emacs minor mode for editing and browsing Java source
    code](https://jtags.sourceforge.net/)

BookMark
========

-   [1. Log4J の基本 | TECHSCORE
    (テックスコア)](https://www.techscore.com/tech/Java/ApacheJakarta/Log4J/1/)
-   <https://github.com/rdiachenko/JLV>
-   [イマドキの IDE 事情 (147)
    グラフィカなログビューアでログを手軽に分析してみよう |
    マイナビニュース](https://news.mynavi.jp/column/ide/147/)
-   [Java - log4j.xml 書き方メモ -
    Qiita](https://qiita.com/opengl-8080/items/f7e1f1b7e2b928427cb5)
-   [Configuring Log4j 2 - Apache Log4j
    2](https://logging.apache.org/log4j/2.x/manual/configuration.html)

