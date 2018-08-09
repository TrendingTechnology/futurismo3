---
author: admin
categories:
- Java
- 技術メモ
date: 2014-12-30T14:46:00+00:00
dsq_thread_id:
- 3.737084e+09
excerpt: Java で Bridge パターンを実装をしてみた
pvc_views:
- 2112
tags:
- Gof
title: Java で Bridge パターンを実装をしてみた
type: post
url: /archives/=2864
---

<a href="https://futurismo.biz/wp-content/uploads/java.png"><img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" /></a>

はじめに
========

Java で Bridge パターンを実装をしてみました.

Bridge パターンとは
===================

クライアントがアクセスするクラス (インタフェース)
と実装クラスを分離して, それぞれを独立に変更できるようにする.

-   [Bridge パターン -
    Wikipedia](https://ja.wikipedia.org/wiki/Bridge_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3)

機能追加と機能実装の組み合わせ爆発を抑止することができる.

パターン適用前
==============

言語と時間帯の分だけ, Man のサブクラスが増えていく.

なので, 言語や時間帯をひとつ追加すると
その度にサブクラスが増えると言う問題がある.(組み合わせ爆発)

``` {.java}
public class BridgeSample {
    public static void main (String args[]) {
        new JapaneseInTheMorning ().say ();
        new JapaneseInTheEvening ().say ();     
        new EnglishInTheMorning ().say ();
        new EnglishInTheEvening ().say ();      
    }
}

abstract class Man {
    public abstract void say ();
}

// ここで組み合わせ爆発が発生する!!!!
class JapaneseInTheMorning extends Man {
    public void say () { new Japanese ().inTheMorning (); }
}
class JapaneseInTheEvening extends Man {
    public void say () { new Japanese ().inTheEvening (); }
}
class EnglishInTheMorning extends Man {
    public void say () { new English ().inTheMorning (); }
}
class EnglishInTheEvening extends Man {
    public void say () { new English ().inTheEvening (); }
}

abstract class Language {
    public abstract void inTheMorning ();
    public abstract void inTheEvening ();   
}

class Japanese extends Language {
    public void inTheMorning () {
        System.out.println ("おはよう");
    }
    public void inTheEvening () {
        System.out.println ("こんばんわ");
    }
}

class English extends Language {
    public void inTheMorning () {
        System.out.println ("Good Morning");
    }
    public void inTheEvening () {
        System.out.println ("Good Evening");
    }
}
```

パターン適用後
==============

言語と時間帯を分離して, 時間帯の引数で言語を渡す.

-   言語の種類が増えても, 時間帯のクラスを増やす必要はない.
-   時間帯の種類が増えても, 言語のクラスを増やす必要はない.

言語と時間帯はそれぞれ独立して機能拡張できる. つまり,
仕様変更に強い設計.

``` {.java}
public class BridgeSample2 {
    public static void main (String args[]) {
        new Morning (new JapaneseSpeaker ()).say ();
        new Evening (new JapaneseSpeaker ()).say ();        
        new Morning (new EnglishSpeaker ()).say ();
        new Evening (new EnglishSpeaker ()).say ();     
    }
}

abstract class Man {
    protected Speaker speaker;
    public Man (Speaker speaker) {
        this.speaker = speaker;
    }
    public abstract void say ();

    protected void inTheMorning () {
        speaker.inTheMorning ();
    }
    protected void inTheEvening () {
        speaker.inTheEvening ();
    }
}

class Morning extends Man {
    public Morning (Speaker lang){ super (lang); }
    public void say () { inTheMorning (); }
}
class Evening extends Man {
    public Evening (Speaker lang){ super (lang); }  
    public void say () { inTheEvening (); }
}

abstract class Speaker {
    public abstract void inTheMorning ();
    public abstract void inTheEvening ();   
}

class JapaneseSpeaker extends Speaker {
    public void inTheMorning () {
        new Japanese ().inTheMorning ();
    }
    public void inTheEvening () {
        new Japanese ().inTheEvening ();        
    }
}

class EnglishSpeaker extends Speaker {
    public void inTheMorning () {
        new English ().inTheMorning ();
    }
    public void inTheEvening () {
        new English ().inTheEvening ();     
    }
}

abstract class Language {
    public abstract void inTheMorning ();
    public abstract void inTheEvening ();   
}

class Japanese extends Language {
    public void inTheMorning () {
        System.out.println ("おはよう");
    }
    public void inTheEvening () {
        System.out.println ("こんばんわ");
    }
}

class English extends Language {
    public void inTheMorning () {
        System.out.println ("Good Morning");
    }
    public void inTheEvening () {
        System.out.println ("Good Evening");
    }
}
```

実行結果
========

<iframe src="https://paiza.io/projects/e/XNAA0j3Cm_f5_VqFKgxOKg?theme=monokai" width="100%" height="500" scrolling="no" seamless="seamless"></iframe>


