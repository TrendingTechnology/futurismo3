---
author: admin
categories:
- Scala
date: 2015-05-17T10:47:00+00:00
dsq_thread_id:
- 3.7709873e+09
pvc_views:
- 1547
tags:
- Akka
title: Actor モデル初体験! Akka で Hello World してみる
type: post
url: /archives/=3842
---

<img alt="Scala" src="https://futurismo.biz/wp-content/uploads/wpid-scala.gif"/>

Scala の Akka で Hello World をしてみました.

スレッドとはちょっと違う、Actor モデルの初体験！

Akka とは
=========

Akka とは、Scala で Actor モデルベースの平行処理を書くときの、
デファクトスタンダードなライブラリだ.

-   [Akka](https://akka.io/)

Hello Akka!!
============

ソース
------

以下のファイルを src/main/scala/HelloScala.scala に作成.

``` {.scala}
import akka.actor.Actor
import akka.actor.ActorSystem
import akka.actor.Props

class HelloActor extends Actor {
  def receive = {
    case "hello" => println("World!")
  }
}

object Main extends App {
  // デフォルトの Actor を作成
  val system = ActorSystem("HelloSystem")

  print("Hello, ")

  // 送信先 Actor を作成
  val helloActor = system.actorOf(Props[HelloActor], name = "helloactor")

  // メッセージ送信
  helloActor ! "hello"
}
```

build.sbt 作成
--------------

以下の build.sbt ファイルを作成

``` {.scala}
name := "My Project"

version := "1.0"

scalaVersion := "2.10.0"

resolvers += "Typesafe Repository" at "https://repo.typesafe.com/typesafe/releases/"

libraryDependencies += "com.typesafe.akka" % "akka-actor_2.10" % "2.2-M1"
```

実行
----

コンソールより実行

``` {.bash}
> sbt run

[info] Running Main 
Hello, World!
```

返信ありのケース
================

sender を利用して、折り返し処理を実施.

``` {.scala}
import akka.actor.Actor
import akka.actor.Props
import akka.actor.ActorSystem

class HelloActor extends Actor {
  def receive = {
    case "introduce" => 
      print(",")
      sender ! "world"
  }
}

class CounterMain extends Actor {
  val system = context.actorOf(Props[HelloActor], "hellocounter")

  print("Hello")
  system ! "introduce"

   def receive = {
     case "world" =>
       println(" World!!")
       context.stop(self)
   }
}

object Main extends App {
  val system = ActorSystem("HelloSystem")
  val actor = system.actorOf(Props[CounterMain], name = "counterMain")
}
```

参考
====

-   [Simple Scala Akka Actor examples (Hello, world examples) |
    alvinalexander.com](https://alvinalexander.com/scala/simple-scala-akka-actor-examples-hello-world-actors#)
-   [The Neophyte's Guide to Scala Part 14: The Actor approach to
    concurrency -
    Da...](https://danielwestheide.com/blog/2013/02/27/the-neophytes-guide-to-scala-part-14-the-actor-approach-to-concurrency.html#)

