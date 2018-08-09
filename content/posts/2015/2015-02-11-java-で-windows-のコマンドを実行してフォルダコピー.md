---
author: admin
categories:
- Java
- 技術メモ
date: 2015-02-11T02:46:00+00:00
dsq_thread_id:
- 3.7016658e+09
excerpt: Java で windows のコマンドを実行してフォルダコピー
pvc_views:
- 3418
tags:
- Windows
title: Java で windows のコマンドを実行してフォルダコピー
type: post
url: /archives/=2978
---

<a href="https://futurismo.biz/wp-content/uploads/java.png"><img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" /></a>

はじめに
========

前回の続き.

-   [Java7 の Fiels.nio.file.Files で ファイルのコピーをしてみる |
    Futurismo](https://futurismo.biz/archives/2976)

Java を利用した copy だと, フォルダをコピーすると, 中身をコピーしない.

xcopy を利用.
=============

中身をコピーする方法もあるようだけれども, めんどくさいので, xcopy
を利用することにする.

-   [Windows での コマンドラインからコピーするコマンドまとめ (xcopy,
    robocopy, copy) | Futurismo](https://futurismo.biz/archives/2735)
-   [コマンドプロンプト xcopy -
    ファイルをディレクトリ構造ごとコピーする](https://www.k-tanaka.net/cmd/xcopy.php)

xcopy で ファイルですか, ディレクトリですかと質問されるので, echo F を
先頭につけたいところだが, この方法だと, うまくいかない.

-   [xcopy でフォルダコピー時に〓ファイル名ですか,
    またはディレクトリ名ですか〓と聞いてくる : 3
    流プログラマのメモ書き](https://jehupc.exblog.jp/12286010/)

ファイルならば, copy を利用する. フォルダならば, xcopy /i で OK.

Java で windows のコマンドを実行する
====================================

processBuilder ライブラリを利用する.

-   [ProcessBuilder (Java Platform
    SE 6)](https://docs.oracle.com/javase/jp/6/api/java/lang/ProcessBuilder.html)
-   [J2SE 5.0 Tiger 虎の穴
    ProcessBuilder](https://www.javainthebox.net/laboratory/J2SE1.5/TinyTips/ProcessBuilder/ProcessBuilder.html)
-   [Java 外部プロセス起動メモ (Hishidama's Java Process
    Memo)](https://www.ne.jp/asahi/hishidama/home/tech/java/process.html)

``` {.java}
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class XCopyOperator {
    public static void main (String args[]) throws IOException, InterruptedException {
        String source = "foo";
        String target = "bar";

        // Process Builder 生成
        // xcopy /e /i source target ディレクトリを再帰的にコピー
        ProcessBuilder pb = new ProcessBuilder ("xcopy", "/e", "/i", source, target);

        // 標準出力と標準エラーをマージする (Defualt false)
        pb.redirectErrorStream (true);

        // プロセス開始
        Process process = pb.start ();

        // プロセス完了待ち合わせ
        process.waitFor ();

        // 結果の出力
        InputStream is = process.getInputStream ();
        printInputStream (is);
    }

    public static void printInputStream (InputStream is) throws IOException {
        BufferedReader br = new BufferedReader (new InputStreamReader (is));
        try {
            for (;;) {
                String line = br.readLine ();
                if (line == null) break;
                System.out.println (line);
            }
        } finally {
            br.close ();
        }
    }
}
```
