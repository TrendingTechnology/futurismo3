---
author: admin
categories:
- Java
- 技術メモ
date: 2014-12-04T22:45:00+00:00
dsq_thread_id:
- 3.7352276e+09
excerpt: Java で Decolator パターンを実装してみた
pvc_views:
- 1601
title: 動的に機能追加!Java で Decolator パターンを実装してみた
type: post
url: /archives/=2780
---

<a href="https://futurismo.biz/wp-content/uploads/java.png"><img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" /></a>

はじめに
========

Java であるクラスとべつのクラスの差がちょっとしかない場合を仮定する.

どうすれば共通部分を効率よく再利用できるのだろう??

たとえば
========

こんなとき, どうする??

``` {.java}
class A {
    public static void greeding () {
        System.out.println ("Hello");
        System.out.println ("Nice to meet you");
        System.out.println ("Good Bye");
    }
}

class B {
    public static void greeding () {
        System.out.println ("Hello");
        System.out.println ("はじめまして");
        System.out.println ("Good Bye");
    }
}
```

継承をつかう
============

こんなときは, 継承によって共通部をスーパークラスにもっていって,
差分だけサブクラスに実装する.

``` {.java}
abstract class C {
    public void greeding () {
        System.out.println ("Hello");
        niceToMeetYou ();
        System.out.println ("Good Bye");
    }

    protected abstract void niceToMeetYou ();
}

class A extends C {
    @Override
    protected void niceToMeetYou () {
        System.out.println ("Nice to meet you");        
    }
}

class B extends C {
    @Override
    protected void niceToMeetYou () {
        System.out.println ("はじめまして");  
    }
}
```

機能追加で破綻
--------------

しかし, もう一言なにか言いたくなったときに破綻する. これは, 委譲
(Strategy Pattern) をつかっても同じ.

``` {.java}
class D {
    public static void greeding () {
        System.out.println ("Hello");
        System.out.println ("はじめまして");
        System.out.println ("お元気ですか?");
        System.out.println ("Good Bye");
    }
}
```

Decolator パターンを利用
========================

Decolator パターンを利用すると,
粒粒の機能を動的に組み合わせることができる.

-   [Decorator パターン -
    Wikipedia](https://ja.wikipedia.org/wiki/Decorator_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3)

つまり, 以下のような機能を好きな順番で並び替えることができる.

-   System.out.println ("Hello");
-   System.out.println ("はじめまして");
-   System.out.println ("お元気ですか?")
-   System.out.println ("Nice to meet you"); ;
-   System.out.println ("Good Bye");

機能をオブジェクト化
--------------------

まずは, 以下の機能を別々のオブジェクトにする. これがデコレータ本体.

-   System.out.println ("Hello");
-   System.out.println ("はじめまして");
-   System.out.println ("Nice to meet you"); ;
-   System.out.println ("Good Bye");

``` {.java}
abstract class Component {
    public abstract void operation ();
}

class EndComponent extends Component {
    public abstract void operation (){
        System.out.println ("Good Bye");
    }
}

abstract class Decorator extends Component {
    private Component component;

    public Decorator (Component component) {
        this.component = component;
    }

    public void callOperation () {
        if (component != null)
            component.operation ();
    }
}

class A extends Decorator {
    A (Component component) {
        super (component);
    }

    public void operation {
        System.out.println ("Hello");
    }
}

class B extends Decorator {
    A (Component component) {
        super (component);
    }

    public void operation {
        System.out.println ("Nice to meet you");
    }
}

class C extends Decorator {
    A (Component component) {
        super (component);
    }

    public void operation {
        System.out.println ("はじめまして");
    }
}
```

Factory でオブジェクト構築
--------------------------

欲しいオブジェクトを好きな順番で構築する.

``` {.java}
class Factory {
    public static Component getA () {
        Component component;
        component = new EndComponent ();
        component = new B (component);
        component = new A (component);
        return component;
    }

    public static Component getB () {
        Component component;
        component = new EndComponent ();
        component = new C (component);
        component = new A (component);
        return component;
    }
}

public class DecolatorSample {
    public static void main (String[] args) {
        Factory.getA ().operation ();
        System.out.println ("");
        Factory.getB ().operation ();
    }   
}
```

関数型言語ならば当たり前??
==========================

思ったのは, これって関数型言語で利用される方法なのでは? 関数型言語では,
関数を値として扱うことができる.

関数をリストに詰め込んで, リストを評価すればよい.

というわけで, 無名クラスとリストを用いて実装してみた.

``` {.java}
  import java.util.LinkedList;
import java.awt.List;

public class DecolatorWithFunctional {
    public static void main (String[] args) {
        LinkedList<Component> decorators = new LinkedList<>();

        decorators.add (new Component (){
                public void operation () { System.out.println ("Hello"); }
            });
        decorators.add (new Component (){
                public void operation () { System.out.println ("Nice to meet You"); }
            });
        decorators.add (new Component (){
                public void operation () { System.out.println ("Good Bye"); }
            });

        for (Component decolator: decorators){ decolator.operation (); }
    }
}

interface Component {
    public void operation ();
}
```

関数型のほうが圧倒的にシンプルな気がする.

Enum Strategy Pattern と組み合わせ
----------------------------------

前回学んだ, Enum Strategy Pattern と組み合わせる.

-   [Effective Java にのっている エレガントな Enum の使い方メモ |
    Futurismo](https://futurismo.biz/archives/2768)

``` {.java}
public class DecolatorWithFunctional {
    public static void main (String[] args) {
        LinkedList<Component> components = new LinkedList<>();

        components.add (Component.HELLO);
        components.add (Component.NICE);
        components.add (Component.BYE);     

        for (Component component: components){ component.operation (); }
    }
}

enum Component {
    HELLO{ public void operation (){ System.out.println ("Hello"); }},
    NICE { public void operation (){ System.out.println ("Nice to meet you"); }},
    NICE_JA{ public void operation (){ System.out.println ("はじめまして"); }},
    BYE{ public void operation (){ System.out.println ("Bye"); }}; // 

    public abstract void operation ();
}
```

さらにシンプルになった.
