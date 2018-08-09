---
author: admin
categories:
- Java
- パターン
- 技術メモ
date: 2014-12-10T15:56:00+00:00
dsq_thread_id:
- 3.7079444e+09
excerpt: Factory Method と Abstract Factory の違いを順に理解する
pvc_views:
- 18784
tags:
- Gof
title: Factory Method と Abstract Factory の違いを順に理解する
type: post
url: /archives/=2805
---

<a href="https://futurismo.biz/wp-content/uploads/java.png"><img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" /></a>

はじめに
========

デザインパターンにでてくる Factory Method と Abstract Factory.

なんだか, いつになっても違いが分からない...
というわけで一旦整理してみることにした.

能書き
======

まずは, 一般的な説明をネットからひろう.

Factory の原則
--------------

生成と実装を分離することで, プログラムはシンプルになる.

-   生成パラメータの指定方法をシンプルに
-   生成後の管理をシンプルに
-   生成するオブジェクトの指定方法をシンプルに

特定のケースで特定のオブジェクトを生成するのは手続き思考的.

2 つをわけて考えることで設計に集中.

-   動作方法
-   生成,管理方法

Factory Method
--------------

オブジェクトの生成を行う時のインタフェースを規定して,
インスタンス化するクラスを決定するのはサブクラスに任せる.

factoryMethod の中でオブジェクトの生成をすることで,
生成を生成オブジェクト (メソッド) 内にカプセル化.

-   [Factory Method パターン -
    Wikipedia](https://ja.wikipedia.org/wiki/Factory_Method_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3)

Abstract Factory
----------------

関連するオブジェクト群を, その具象クラスを明確にせずに生成するための
インタフェースを提供する.

-   [Abstract Factory パターン -
    Wikipedia](https://ja.wikipedia.org/wiki/Abstract_Factory_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3)

関連するインスタンス群を生成するための API を集約することによって,
複数のモジュール群の再利用を効率化することを目的とする.

実装は意識せずに, インタフェース (API) のみで,
抽象的な部品をつくりあげる.

Factory Method 自体のカプセル化. マルチ Factory Method. Factory Methods.

両者の違い
----------

### Factory Method

ファクトリのクライアントとなるオブジェクトが,
ファクトリオブジェクトにインスタンスの生成を委譲する.

-   親クラスである Creator クラスが子クラスである

ConcreteCreator クラスにオブジェクトの生成を委ねる

-   Creator クラスと ConcreteCreator クラスとの関連である.
-   \[オブジェクト生成\] の抽象化にポイントを置いたパターン

### Abstract Factory

親クラスであるファクトリが,
実際のオブジェクトの生成をサブクラスに委譲する

-   Client のインスタンスが ConcreteFactory
    のインスタンスにオブジェクトの生成を委ねる
-   オブジェクト同士の関連
-   \[関連するオブジェクト群をまとめて生成するための手順\] の抽象化

コードから理解する
==================

能書きはいくら読んでもわからない.

というわけで, コードから理解する.

Factory Method
--------------

### パターン未適用

まずは基本から. if-else が汚いことがよくわかる.

``` {.java}
public class FactoryMethodSample {
    enum Type { FIRST, SECOND }

    public static void main (String[] args) {
        Type type;
      Alphabet alphabet;

        type = Type.FIRST;
        if (type == Type.FIRST) {
            alphabet = new A ();
        }
        else {
            alphabet = new B ();
        }
        alphabet.whoAreYou ();

        type = Type.SECOND;
        if (type == Type.FIRST) {
            alphabet = new A ();
        }
        else {
            alphabet = new B ();
        }
        alphabet.whoAreYou ();
    }
}

abstract class  Alphabet {
    abstract void whoAreYou ();
}

class A extends  Alphabet {
    void whoAreYou () { System.out.println ("I'm A");}
}

class B extends  Alphabet {
    void whoAreYou () { System.out.println ("I'm B");}
}

```

static ファクトリーメソッド適用
-------------------------------

Factory の原則にしたがうと,
生成部分と振る舞いをわけることがシンプルなコードへの第一歩.

ということで, 生成部分をサブメソッドに抽出する.

これを, Effective Java では, static ファクトリーメソッドといっている.

``` {.java}
public class StaticFactoryMethodSample {
    enum Type { FIRST,SECOND }

    public static void main (String[] args) {
        Type type;
        Alphabet alphabet;

        type = Type.FIRST;
        alphabet = factoryMethod (type);
        alphabet.whoAreYou ();

        type = Type.SECOND;
        alphabet = factoryMethod (type);
        alphabet.whoAreYou ();
    }

    static Alphabet factoryMethod (Type type) {
        if (type == Type.FIRST) {
            return new A ();
        }
        else {
            return new B ();
        }
    }
}

abstract class Alphabet {
    abstract void whoAreYou ();
}

class A extends Alphabet {
    void whoAreYou () { System.out.println ("I'm A");}
}

class B extends Alphabet {
    void whoAreYou () { System.out.println ("I'm B");}
}
```

ファクトリーメソッド パターン適用
---------------------------------

そして, これがファクトリーメソッド パターン適用版. static
ファクトリメソッドをオブジェクトに抽出.

抽象クラスに生成メソッドを定義して, サブクラスで実装する.

if-else 文が消滅しているところに注目.

``` {.java}
public class FactoryMethodSample {
    public static void main (String[] args) {
        Creator creator;
        Alphabet alphabet;

        creator = new CreatorA ();
        alphabet = creator.factoryMethod ();
        alphabet.whoAreYou ();

        creator = new CreatorB ();
        alphabet = creator.factoryMethod ();
        alphabet.whoAreYou ();
    }
}

abstract class Creator {
    abstract Alphabet factoryMethod ();
}

class CreatorA extends Creator {
    Alphabet factoryMethod () {
        return new A ();
    }
}

class CreatorB extends Creator {
    Alphabet factoryMethod () {
        return new B ();
    }
}

abstract class Alphabet {
    abstract void whoAreYou ();
}

class A extends Alphabet {
    void whoAreYou () { System.out.println ("I'm A");}
}

class B extends Alphabet {
    void whoAreYou () { System.out.println ("I'm B");}
}
```

Abstract Factory
----------------

つぎに, Abstract Factory は Factory Method
のカプセル化に過ぎないことを示す.

Factory Method を発展させたのが, Abstract Factory.

ファクトリメソッドのソースに Number という概念を加える. Alphabet と
Number には関係がある.

Abstract Factory は 関連ある複数のオブジェクトの生成のための API
をひとつのオブジェクトに集約する.

### パターン未適用

まずは, 汚いコードから.

``` {.java}
public class AbstractFactorySample {
    enum Type { FIRST,SECOND }

    public static void main (String[] args) {
        Type type;
        Alphabet alphabet;
        Number number;

        type = Type.FIRST;
        if (type == Type.FIRST) {
            alphabet = new A ();
        }
        else {
            alphabet = new B ();
        }

        if (type == Type.FIRST) {
            number = new One ();
        }
        else {
            number = new Twe ();
        }
        alphabet.whoAreYou ();
        number.whoAreYou ();

        type = Type.SECOND;
        if (type == Type.FIRST) {
            alphabet = new A ();
        }
        else {
            alphabet = new B ();
        }

        if (type == Type.FIRST) {
            number = new One ();
        }
        else {
            number = new Twe ();
        }
        alphabet.whoAreYou ();
        number.whoAreYou ();
    }
}

abstract class Alphabet {
    abstract void whoAreYou ();
}

class A extends Alphabet {
    void whoAreYou () { System.out.println ("I'm A");}
}

class B extends Alphabet {
    void whoAreYou () { System.out.println ("I'm B");}
}

abstract class Number {
    abstract void whoAreYou ();
}

class One extends Number {
    void whoAreYou () { System.out.println ("I'm 1");}
}

class Twe extends Number {
    void whoAreYou () { System.out.println ("I'm 2");}
}
```

### ファクトリメソッドパターン適用

ここで, まずはファクトリメソッドを適用して整理する.

``` {.java}
public class AbstractFactorySample2 {

    public static void main (String[] args) {
        AlphabetCreator alphabetCreator;
        NumberCreator numberCreator;        
        Alphabet alphabet;
        Number number;

        alphabetCreator = new CreatorA ();
        numberCreator = new CreatorOne ();
        alphabet = alphabetCreator.factoryMethod ();
        number = numberCreator.factoryMethod ();
        alphabet.whoAreYou ();
        number.whoAreYou ();

        alphabetCreator = new CreatorB ();
        numberCreator = new CreatorTwe ();
        alphabet = alphabetCreator.factoryMethod ();
        number = numberCreator.factoryMethod ();
        alphabet.whoAreYou ();
        number.whoAreYou ();
    }
}

abstract class AlphabetCreator {
    abstract Alphabet factoryMethod ();
}

class CreatorA extends AlphabetCreator {
    Alphabet factoryMethod () {
        return new A ();
    }
}

class CreatorB extends AlphabetCreator {
    Alphabet factoryMethod () {
        return new B ();
    }
}

abstract class NumberCreator {
    abstract Number factoryMethod ();
}

class CreatorOne extends NumberCreator {
    Number factoryMethod () {
        return new One ();
    }
}

class CreatorTwe extends NumberCreator {
    Number factoryMethod () {
        return new Twe ();
    }
}

abstract class Alphabet {
    abstract void whoAreYou ();
}

class A extends Alphabet {
    void whoAreYou () { System.out.println ("I'm A");}
}

class B extends Alphabet {
    void whoAreYou () { System.out.println ("I'm B");}
}

abstract class Number {
    abstract void whoAreYou ();
}

class One extends Number {
    void whoAreYou () { System.out.println ("I'm 1");}
}

class Twe extends Number {
    void whoAreYou () { System.out.println ("I'm 2");}
}
```

Type と if-else 文が取り除かれてすっきり. しかし,
まだ冗長なところがある.

そこで, alphabetCreator と NumberCreator をひとつにまとめる.

### Abstract Factory パターン適用

``` {.java}
public class AbstractFactorySample3 {

    public static void main (String[] args) {
        Creator creator;
        Alphabet alphabet;
        Number number;

        creator = new FirstCreator ();
        alphabet = creator.alphabetFactoryMethod ();
        number = creator.numberFactoryMethod ();
        alphabet.whoAreYou ();
        number.whoAreYou ();

        creator = new SecondCreator ();
        alphabet = creator.alphabetFactoryMethod ();
        number = creator.numberFactoryMethod ();
        alphabet.whoAreYou ();
        number.whoAreYou ();
    }
}

abstract class Creator {
    abstract Alphabet alphabetFactoryMethod ();
    abstract Number numberFactoryMethod (); 
}

class FirstCreator extends Creator {
    Alphabet alphabetFactoryMethod () {
        return new A ();
    }
    Number numberFactoryMethod () {
        return new One ();
    }
}

class SecondCreator extends Creator {
    Alphabet alphabetFactoryMethod () {
        return new B ();
    }
    Number numberFactoryMethod () {
        return new Twe ();
    }
}

abstract class Alphabet {
    abstract void whoAreYou ();
}

class A extends Alphabet {
    void whoAreYou () { System.out.println ("I'm A");}
}

class B extends Alphabet {
    void whoAreYou () { System.out.println ("I'm B");}
}

abstract class Number {
    abstract void whoAreYou ();
}

class One extends Number {
    void whoAreYou () { System.out.println ("I'm 1");}
}

class Twe extends Number {
    void whoAreYou () { System.out.println ("I'm 2");}
}
```

おわりに
========

本をよんでも分かりにくいことは,
より単純な例に落とし込めば自分でも理解できる.

Abstract Factroy と Factory メソッドの関係が分かって, スッキリ.
