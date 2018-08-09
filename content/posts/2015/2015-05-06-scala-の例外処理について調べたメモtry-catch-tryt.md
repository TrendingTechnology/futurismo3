---
author: admin
categories:
- Scala
date: 2015-05-05T16:17:00+00:00
dsq_thread_id:
- 3.7385812e+09
pvc_views:
- 3634
title: Scala の例外処理について調べたメモ(try-catch, Try[T])
type: post
url: /archives/=3645
---

Scala には例外処理の書き方としては、

-   try, catch,finally
-   Option 型 Try

の２つがある.

それぞれ、実際に実装してどんな感じか調べてみました.

try-catch
=========

try-catch で例外を処理する方法. これは、Java における例外処理と同じ.

-   [Java の例外処理について徹底的に調べてみた |
    Futurismo](https://futurismo.biz/archives/2935)

以下のようなコードを書いた. これを、もう一つの Try\[T\] で書き換える.

``` {.scala}
object TryCatch {
  def main(args: Array[String]) {
    try {
      val result = divide(0)
      show(result)
    } catch {
      case e: Exception =>
    }
  }

  def divide(num: Int): Double = {
    try {
      val result = 1/num
      result
    }
    catch {
      case e: Exception =>      
        println("Failure!!")
        throw e
    }
  }

  def show(result: Double): Double =  {
    println(result)
    result
  }
}
```

Try\[T\]
========

このスタイルは、try-catch に比べて以下のようなメリットがある.

-   複数の例外を紡いで処理を書いていくときに、正常系と異常系を綺麗に分
    けてかいていくことができる(for 分とかで)
-   つまり、コードが綺麗にかける.

import scala.util.{Try, Success, Failure} を import して利用する.

``` {.scala}
object TryCatch {
  def main(args: Array[String]) {
    val result = divide(0)
    result match {
      case Success(v) => show(v)
      case Failure(e) => 
    }
  }

  def divide(num: Int): Try[Double] = Try {
    val result = Try{1/num}
    result match {
      case Success(v) => v
      case Failure(e) =>
        println("Failure!!")
        throw e
    }
  }

  def show(result: Double): Try[Double] = Try {
    println(result)
    result
  }
}
```

もっと Monadic に！！
---------------------

main 関数は、以下のように flatMap や for
文を利用して書き換えることができる. この書き換えが Monadic
なところなのだけれども、理解不足でこれ以上解説できません.

``` {.scala}
def main(args: Array[String]) {
  val result = for {
    result  <- divide(0)
    result2 <- show(result)
  } yield result2
}
```

try-catch が手続的なのに対して、flatMap
をつかうと、ずっと宣言的に見える.

``` {.scala}
def main(args: Array[String]) {
  divide(0).flatMap( result => show(result) )
}
```

以上、Happy Hacking!!

Special Thanks
==============

-   [Scala Standard Library 2.11.0-20140303-150720-b59c3f8641 - Try -
    Scala Standard Library 2.11.0-20140303-150720-b59c3f8641 -
    scala.util.Try](https://www.scala-lang.org/files/archive/nightly/docs/library/index.html#scala.util.Try)
-   [scala.util.Try を使いこなそう -
    Qiita](https://qiita.com/yharada/items/15f88e5bbf44833b5ed7)
-   [Scala での例外処理 - Either,Option,util.control.Exception - (
    ꒪⌓꒪)
    ゆるよろ日記](https://yuroyoro.hatenablog.com/entry/20100719/1279519961)
-   [Scala
    での例外処理](https://www.slideshare.net/TakashiKawachi/scala-16023052)
