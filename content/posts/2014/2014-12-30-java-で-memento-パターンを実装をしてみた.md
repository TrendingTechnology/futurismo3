---
author: admin
categories:
- Java
- 技術メモ
date: 2014-12-30T07:23:00+00:00
dsq_thread_id:
- 3.7294208e+09
excerpt: Java で Bridge パターンを実装をしてみた
pvc_views:
- 1759
tags:
- Gof
title: Java で Memento パターンを実装をしてみた
type: post
url: /archives/=2868
---

<a href="https://futurismo.biz/wp-content/uploads/java.png"><img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" /></a>

はじめに
========

Java で Memento パターンを実装をしてみました.

Memento パターンとは
====================

オブジェクトの状態を保存しておき, 元に戻せるようにしておく.
オブジェクトを以前の状態に (ロールバックにより) 戻す能力を提供する.

-   [Memento パターン -
    Wikipedia](https://ja.wikipedia.org/wiki/Memento_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3)

パターン適用前
==============

以前, State Pattern を実装したコードを改造.
ステートを保存できるようにします.

``` {.java}
public class StatePatternMemento {

    public static void main (String[] args) {
        Context context = new Context (new Morning ());

        while (!context.isDone ()) {
            context.greeting ();
        }
    }
}

class Context {
    private State state;

    public Context (State state) {
        this.state = state;
    }

    public void greeting () {
        state = state.greeting ();
    }

    public boolean isDone () {
        return state == null;
    }
}

interface State {
    public State greeting ();
}

class Morning implements State {

    public Morning () {
        System.out.println (" === It's 09:00 ===");
    }

    public State greeting () {
        System.out.println ("Good morning!! ('▽`)");
        return new Afternoon ();
    }
}

class Afternoon implements State {

    public Afternoon () {
        System.out.println (" === It's 15:00 ===");
    }

    public State greeting () {
        System.out.println ("Good afternoon!! ('▽`)");
        return new Evening ();
    }
}

class Evening implements State {

    public Evening () {
        System.out.println (" === It's 20:00 ===");
    }

    public State greeting () {
        System.out.println ("Good evening!! ('▽`)");
        return null;
    }
}

```

パターン適用後
==============

状態保存する機能を順番に追加していく.

メメントパターンは, 保存/
復元される側とする側の役割を独立させるのが普通.

-   originator (代表者) 内部属性を保存されるもの.
-   caretaker (世話役) originator 内部属性 (状態) を保存するコンテナ.
-   Memento (記念品) originator 内部属性 (状態) を記憶するデータ構造.

その 1 初期状態を復元
---------------------

まずは, 初期状態を追加. originator である Context を拡張する.

``` {.java}
class Context {
    private State initialState; 

    public Context (State state) {
        this.state = state;
        this.initialState = state;
    }

    public void restoreState () {
        System.out.println ();  
        System.out.println (" === Restore State ===");
        System.out.println ();      
        state = initialState;
    }
}
```

初期状態を保存する属性と 外部から restore
するためのインタフェースを用意.

``` {.java}
public class StatePatternMemento1 {

    public static void main (String[] args) {
        Context context = new Context (new Morning ());

        while (!context.isDone ()) {
            context.greeting ();
        }

        context.restoreState ();

        while (!context.isDone ()) {
            context.greeting ();
        }
}
}

class Context {
    private State state;
    private State initialState; 

    public Context (State state) {
        this.state = state;
        this.initialState = state;
    }

    public void greeting () {
        state = state.greeting ();
    }

    public boolean isDone () {
        return state == null;
    }

    public void restoreState () {
        System.out.println ();  
        System.out.println (" === Restore State ===");
        System.out.println ();      
        state = initialState;
    }
}

interface State {
    public State greeting ();
}

class Morning implements State {

    public Morning () {
        System.out.println (" === It's 09:00 ===");
    }

    public State greeting () {
        System.out.println ("Good morning!! ('▽`)");
        return new Afternoon ();
    }
}

class Afternoon implements State {

    public Afternoon () {
        System.out.println (" === It's 15:00 ===");
    }

    public State greeting () {
        System.out.println ("Good afternoon!! ('▽`)");
        return new Evening ();
    }
}

class Evening implements State {

    public Evening () {
        System.out.println (" === It's 20:00 ===");
    }

    public State greeting () {
        System.out.println ("Good evening!! ('▽`)");
        return null;
    }
}

```

### 実行結果

``` {.text}
 === It's 09:00 ===
Good morning!! ('▽`)
 === It's 15:00 ===
Good afternoon!! ('▽`)
 === It's 20:00 ===
Good evening!! ('▽`)

 === Restore State ===

Good morning!! ('▽`)
 === It's 15:00 ===
Good afternoon!! ('▽`)
 === It's 20:00 ===
Good evening!! ('▽`)
```

その 2 状態 + アルファを復元
----------------------------

状態 + アルファを保存するためのデータ構造を用意する. これこそが
memento!!

ここでは, アルファは count とする.

``` {.java}
private int count;
```

count と state を保持するデータ構造 memento クラスを作成. memento
のコンストラクタで状態を保存する. memento の getter
で属性を取得してリストアする.

``` {.java}
private static class Memento {
    private State state;
    private int count;

    public Memento (State stateToSave, int countToSave) {
        state = stateToSave;
        count = countToSave;            
    }
    public State getSavedState () { return state; }
    public int getSavedCount () { return count; }       
}
```

### 全コード

``` {.java}
public class StatePatternMemento2 {

    public static void main (String[] args) {
        Context context = new Context (new Morning ());

        while (!context.isDone ()) {
            context.greeting ();
        }

        context.restoreState ();

        while (!context.isDone ()) {
            context.greeting ();
        }
    }
}

class Context {
    private State state;
    private int count;
    private Memento m;

    public Context (State state) {
        this.state = state;
    }

    public void greeting () {
        state = state.greeting ();
        count++;

        if (count == 1) {
            m = new Memento (state, count);
        }
    }

    public boolean isDone () {
        return state == null;
    }

    public void restoreState () {
        System.out.println ();  
        System.out.println (" === Restore State ===");
        System.out.println ();

        state = m.getSavedState ();
        count = m.getSavedCount ();     
    }

    private static class Memento {
        private State state;
        private int count;

        public Memento (State stateToSave, int countToSave) {
            state = stateToSave;
            count = countToSave;            
        }
        public State getSavedState () { return state; }
        public int getSavedCount () { return count; }       
    }
}

interface State {
    public State greeting ();
}

class Morning implements State {

    public Morning () {
        System.out.println (" === It's 09:00 ===");
    }

    public State greeting () {
        System.out.println ("Good morning!! ('▽`)");
        return new Afternoon ();
    }
}

class Afternoon implements State {

    public Afternoon () {
        System.out.println (" === It's 15:00 ===");
    }

    public State greeting () {
        System.out.println ("Good afternoon!! ('▽`)");
        return new Evening ();
    }
}

class Evening implements State {

    public Evening () {
        System.out.println (" === It's 20:00 ===");
    }

    public State greeting () {
        System.out.println ("Good evening!! ('▽`)");
        return null;
    }
}

```

### 実行結果

``` {.text}
 === It's 09:00 ===
Good morning!! ('▽`)
 === It's 15:00 ===
Good afternoon!! ('▽`)
 === It's 20:00 ===
Good evening!! ('▽`)

 === Restore State ===

Good afternoon!! ('▽`)
 === It's 20:00 ===
Good evening!! ('▽`)
```

その 3 スナップショットを復元
-----------------------------

最後にスナップショット機能を追加. 保存するためには,
第三者を登場させて外部に状態を保持する.

``` {.java}
class SnapShot {
    private List<Object> states = new ArrayList<Object>();

    public void addMemento (Object m) { states.add (m); }
    public Object getMemento (int index) { return states.get (index); }
}
```

ここでのポイントは, Context の情報のみをもつ Memento データを
保存しておくこと. 保存する情報はメモリ上で小さくすることが目的.

### 全コード

``` {.java}
import java.util.List;
import java.util.ArrayList;

public class StatePatternMemento3 {

    public static void main (String[] args) {
        Context context = new Context (new Morning ());
        SnapShot snaps = new SnapShot ();
        snaps.addMemento (context.saveToMemento ());

        while (!context.isDone ()) {
            context.greeting ();
        }

        context.restoreFromMemento (snaps.getMemento (0));

        while (!context.isDone ()) {
            context.greeting ();
        }
    }
}

class Context {
    private State state;
    private int count;

    public Context (State state) {
        this.state = state;
    }

    public void greeting () {
        state = state.greeting ();
        count++;
    }

    public boolean isDone () {
        return state == null;
    }

    public Object saveToMemento () { 
        System.out.println (" == Save to Memento == ");
        return new Memento (state, count); 
    }

    public void restoreFromMemento (Object m) {
        if (m instanceof Memento) {
            Memento memento = (Memento) m;
            state = memento.getSavedState ();
            count = memento.getSavedCount ();

            System.out.println ();  
            System.out.println (" === Restore State ===");
            System.out.println ();
        }
    }   

    private static class Memento {
        private State state;
        private int count;

        public Memento (State stateToSave, int countToSave) {
            state = stateToSave;
            count = countToSave;            
        }
        public State getSavedState () { return state; }
        public int getSavedCount () { return count; }       
    }
}

class SnapShot {
    private List<Object> states = new ArrayList<Object>();

    public void addMemento (Object m) { states.add (m); }
    public Object getMemento (int index) { return states.get (index); }
}

interface State {
    public State greeting ();
}

class Morning implements State {

    public Morning () {
        System.out.println (" === It's 09:00 ===");
    }

    public State greeting () {
        System.out.println ("Good morning!! ('▽`)");
        return new Afternoon ();
    }
}

class Afternoon implements State {

    public Afternoon () {
        System.out.println (" === It's 15:00 ===");
    }

    public State greeting () {
        System.out.println ("Good afternoon!! ('▽`)");
        return new Evening ();
    }
}

class Evening implements State {

    public Evening () {
        System.out.println (" === It's 20:00 ===");
    }

    public State greeting () {
        System.out.println ("Good evening!! ('▽`)");
        return null;
    }
}


```

### 実行結果

``` {.text}
 === It's 09:00 ===
Good morning!! ('▽`)
 === It's 15:00 ===
Good afternoon!! ('▽`)
 === It's 20:00 ===
Good evening!! ('▽`)

 === Restore State ===

Good morning!! ('▽`)
 === It's 15:00 ===
Good afternoon!! ('▽`)
 === It's 20:00 ===
Good evening!! ('▽`)
```
