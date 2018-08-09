---
author: admin
categories:
- Java
- 技術メモ
date: 2014-11-14T15:24:00+00:00
dsq_thread_id:
- 3.7191987e+09
excerpt: Javaで Visitor Patternを実装してみた
pvc_views:
- 1365
tags:
- Gof
title: Javaで Visitor Patternを実装してみた
type: post
url: /archives/=2689
---

はじめに
========

今日、仕事でVisitorパターンの話題がでたけど
なんのことだかわからなかったので、調べてみた.

Visitor Patternとは
===================

ビジターパターンとは、Gofのデザインパターンの一つ.

-   [Visitor パターン -
    Wikipedia](https://ja.wikipedia.org/wiki/Visitor_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3)

データと処理の分離
------------------

ひとつの特徴は、データと処理を分離できること。

-   データに対応するのが、Accepter.
-   操作に対応するのが, Visitor

よくあるVisitorパターンの例は、
コンポジットパターン(フォルダパターン)に対する操作.

-   データは,
    -   フォルダ
    -   ファイル
-   操作は、
    -   最終更新日取得
    -   作成日取得
    -   サイズ取得

型のパターンマッチのカプセル化
------------------------------

Visitorパターンは関数型言語ででてくる,
型によるパターンマッチにとても似ていると思った.

Accepterごとに異なる型を持たせ、
Visitorは型のパターンマッチによって型に対するメソッドを
割り当てるイメージ.

### Code

``` {.java}
class VisitorSample {

    ////////////////////
    // Data
    ////////////////////
    abstract public static class PrintData {
         abstract public void accept(Visitor printer);
    }

    public static class Data1 extends PrintData {

        public String getStr1 () {
            return "Suzuki";
        }

        public String getStr2 () {
            return "Ichiro";
        }

        public void accept(Visitor printer) {
            printer.visit(this);
        }
    }

    public static class Data2 extends PrintData {
        public String getStr () {
            return "Jonney";
        }

        public void accept(Visitor printer) {
            printer.visit(this);
        }       
    }

    ////////////////////
    // Operation
    ////////////////////
    public interface Visitor {
        public void visit(Data1 data);
        public void visit(Data2 data);  
    }

    public static class NamePrinter implements Visitor {
        public void visit(Data1 data) {
            String str1 = data.getStr1();
            String str2 = data.getStr2();
            System.out.println(str1 + " " + str2);
        }

        public void visit(Data2 data) {
            String str = data.getStr();
            System.out.println(str);            
        }
    }

    ////////////////////
    // Main procedre
    ////////////////////
    public static void main(String[] args) {
        NamePrinter printer = new NamePrinter();
        PrintData data;

        data = new Data1();
        data.accept(printer);

        data = new Data2();
        data.accept(printer);
    }
}

```

操作の柔軟な追加
----------------

Visitorを継承することで、容易に操作を追加することができる。
上の例では、名前の表示という操作がすでにある.
ここに、出席番号表示という操作を追加する.

### Code

``` {.java}
class VisitorSample {

    ////////////////////
    // Data
    ////////////////////
    abstract public static class PrintData {
        abstract public void accept(Visitor printer);
        abstract public int getNum();       
    }

    public static class Data1 extends PrintData {

        public String getStr1 () {
            return "Suzuki";
        }

        public String getStr2 () {
            return "Ichiro";
        }

        public int getNum () {
            return 1;
        }

        public void accept(Visitor printer) {
            printer.visit(this);
        }
    }

    public static class Data2 extends PrintData {
        public String getStr () {
            return "Jonney";
        }

        public int getNum () {
            return 2;
        }

        public void accept(Visitor printer) {
            printer.visit(this);
        }       
    }

    ////////////////////
    // Operation
    ////////////////////
    public interface Visitor {
        public void visit(Data1 data);
        public void visit(Data2 data);  
    }

    public static class NamePrinter implements Visitor {
        public void visit(Data1 data) {
            String str1 = data.getStr1();
            String str2 = data.getStr2();
            System.out.println(str1 + " " + str2);
        }

        public void visit(Data2 data) {
            String str = data.getStr();
            System.out.println(str);            
        }
    }

    public static class NumberPrinter implements Visitor {
        public void visit(Data1 data) {
            System.out.println("出席番号: " + data.getNum());
        }

        public void visit(Data2 data) {
            System.out.println("出席番号: " + data.getNum());           
        }
    }

    ////////////////////
    // Main procedre
    ////////////////////
    public static void main(String[] args) {
        NamePrinter name = new NamePrinter();       
        NumberPrinter num = new NumberPrinter();
        PrintData data;

        data = new Data1();
        data.accept(name);      
        data.accept(num);

        data = new Data2();
        data.accept(name);      
        data.accept(num);
    }
}
```

さいごに
========

だれがこんな手法を考えついたのだろう??

デザインパターンってすごいね−。

Bookmarks
=========

-   [13．Visitor パターン |
    TECHSCORE(テックスコア)](https://www.techscore.com/tech/DesignPattern/Visitor.html/)
-   [Visitorパターンで遊んでみたよ
    （1/2）：CodeZine](https://codezine.jp/article/detail/6829)

