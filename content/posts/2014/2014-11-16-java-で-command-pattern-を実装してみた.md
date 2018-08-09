---
author: admin
categories:
- Java
- 技術メモ
date: 2014-11-16T06:10:00+00:00
dsq_thread_id:
- 3.6997686e+09
excerpt: Java で Command Pattern を実装してみた
pvc_views:
- 2048
tags:
- Gof
title: Java で Command Pattern を実装してみた
type: post
url: /archives/=2703
---

はじめに
========

前回の続き.

-   [Java で Visitor Pattern を実装してみた |
    Futurismo](https://futurismo.biz/archives/2689)

コマンドパターン (Command Pattern) と Visitor Pattern で
なにが違うのかよくわからなかったので, 比較しつつ, Command Pattern
を実装してみた.

Command Pattern とは
====================

動作を表現するオブジェクト.
動作とそれに伴うパラメータをカプセル化したもの.

-   [Command パターン -
    Wikipedia](https://ja.wikipedia.org/wiki/Command_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3)

特徴
----

-   Command オブジェクトは,
    手続きに必要なパラメータの一時格納場所として便利.
    関数呼び出しのためのパラメータを集めて,
    後で使用するためにコマンドを保存しておくことができる.

-   関数呼び出しのためのパラメータを集めて,
    後で使用するためにコマンドを保存しておくことができる.
    保存されたデータ構造に対する追加, 削除が可能になる.

-   コマンドの生成と実行のタイミングの分離.

Visitor パターンとの比較
========================

わかりやすいように, Command ということばをここでは Visitor とする.

Visitor Pattern
---------------

### オブジェクトの関係

-   Receiver は たくさん.
-   Visitor は 単一.

### データと操作の関係

-   データは Visitor, 操作は Receiver がもつ.
-   Receiver は Visitor によって異なる操作をする.

Command Pattern
---------------

### オブジェクトの関係

-   Receiver は 単一.
-   Visitor は たくさん.

### データと操作の関係

-   データと操作は Visitor がもつ.
-   Receiver は Visitor によって同じ操作を実施する.

Code
====

前回の Visitor のコードを少し残しつつ, コードを改良してみた.

Invoker というコマンドを貯めておくデータ構造を追加した.

``` {.java}
import java.util.Iterator;
import java.util.Stack;

class CommandSample {

    ////////////////////
    // Data
    ////////////////////
    abstract public static class Command {
    public void setReceiver (Receiver receiver){}
        public abstract void execute ();
        // abstract public void accept (Receiver printer);
    }

    public static class Data1 extends Command {
        protected Receiver receiver;

        private String str1 = "Suzuki";
        private String str2 = "Ichiro";

        // データは隠蔽 getter は提供しない
        // public String getStr1 () {
        //  return "Suzuki";
        // }
        // public String getStr2 () {
        //  return "Ichiro";
        // }

    public void setReceiver (Receiver receiver){
            this.receiver = receiver;
    }

    public void execute (){
            receiver.action (str1 + " " + str2);
    }       

        // public void accept (Receiver printer) {
        //  printer.visit (this);
        // }
    }

    public static class Data2 extends Command {
        protected Receiver receiver;

        private String str = "Jonney";

        // データは隠蔽, getter は提供しない
        // public String getStr () {
        //  return "Jonney";
        // }

    public void setReceiver (Receiver receiver){
            this.receiver = receiver;
    }

        // public void accept (Receiver printer) {
        //  printer.visit (this);
        // }

    public void execute (){
            receiver.action (str);
    }       
    }

    public interface Receiver {
        // public void visit (Data1 data);
        // public void visit (Data2 data);
        public abstract void action (String msg);
    }

    public static class NamePrinter implements Receiver {
        // コマンドに応じて処理を変更しない.
        // public void visit (Data1 data) {
        //  String str1 = data.getStr1 ();
        //  String str2 = data.getStr2 ();
        //  System.out.println (str1 + " " + str2);
        // }

        // public void visit (Data2 data) {
        //  String str = data.getStr ();
        //  System.out.println (str);           
        // }

    public void action (String msg){
            System.out.println (msg);
    }       
    }

    ////////////////////
    // Invoker
    ////////////////////
    public static class Invoker{
    private Stack<Command> commands = new Stack<Command>();

    public void addCommand (Command command){
            commands.push (command);
    }

    public void execute (){
            for ( Command command : commands ) {
                command.execute ();
            }
    }
    }

    public static void main (String[] args) {
        NamePrinter name = new NamePrinter ();      
        Command data1, data2;
        Invoker invoker = new Invoker ();

        data1 = new Data1 ();
        data1.setReceiver (name);
        data2 = new Data2 ();
        data2.setReceiver (name);

        invoker.addCommand (data1);
        invoker.addCommand (data2);

        invoker.execute ();
    }
}
```

操作のカプセル化
================

Wikipedia の説明をみると, クロージャー機能に似ている気がした.

というわけで, 内部 (匿名, 無名) クラスを利用してみる.

``` {.java}
import java.util.Iterator;
import java.util.Stack;

class CommandSample {

    ////////////////////
    // Command
    ////////////////////
    abstract public static class Command {
    public void setReceiver (Receiver receiver){}
        public abstract void execute ();
    }

    public static interface Executer {
        public void run ();
    }

    public static class Data1 extends Command {
        protected Receiver receiver;

        private String str1 = "Suzuki";
        private String str2 = "Ichiro";

    public void setReceiver (Receiver receiver){
            this.receiver = receiver;
    }

    public void execute () {
            receiver.action (new Executer () {
                    public void run () {
                        System.out.println (str1 + " " + str2);
                    }
                });
    }       

    }

    public static class Data2 extends Command {
        protected Receiver receiver;

        private String str = "Jonney";

    public void setReceiver (Receiver receiver){
            this.receiver = receiver;
    }

    public void execute () {
            receiver.action (new Executer () {
                    public void run () {
                        System.out.println (str);
                    }
                });
    }       
    }       

    ////////////////////
    // Receiver
    ////////////////////
    public interface Receiver {
        public abstract void action (Executer executer);
    }

    public static class NamePrinter implements Receiver {
    public void action (Executer executer){
            executer.run ();
    }       
    }

    ////////////////////
    // Invoker
    ////////////////////
    public static class Invoker{
    private Stack<Command> commands = new Stack<Command>();

    public void addCommand (Command command){
            commands.push (command);
    }

    public void execute (){
            for ( Command command : commands ) {
                command.execute ();
            }
    }
    }

    public static void main (String[] args) {
        NamePrinter name = new NamePrinter ();      
        Command data1, data2;
        Invoker invoker = new Invoker ();

        data1 = new Data1 ();
        data1.setReceiver (name);
        data2 = new Data2 ();
        data2.setReceiver (name);

        invoker.addCommand (data1);
        invoker.addCommand (data2);

        invoker.execute ();
    }
}
```

こうみると, Visitor Pattern にまた似てきた.
混乱してきたので今日はここまで.

-   Command Pattern: call Command -&gt; call Receiver -&gt; call
    Executer
-   Visitor Pattern: call Receiver -&gt; call Visitor

