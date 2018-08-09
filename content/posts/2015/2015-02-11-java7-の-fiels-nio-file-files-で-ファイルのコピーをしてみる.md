---
author: admin
categories:
- Java
- 技術メモ
date: 2015-02-11T06:54:00+00:00
dsq_thread_id:
- 3.699607e+09
excerpt: Java7 の Fiels.nio.file.Files で ファイルのコピーをしてみる
pvc_views:
- 12303
title: Java7 の Java.nio.file.Files で ファイルのコピーをしてみる
type: post
url: /archives/=2976
---

<a href="https://futurismo.biz/wp-content/uploads/java.png"><img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" /></a>

はじめに
========

会社では Java で SMB プロトコルをごにょごにょしているというお仕事なので,
Java でファイル操作をするような I/F を調べました.

具体的には, フォルダをコピーしたい.

Java7 で Files というライブラリが新たらしく追加された.
これが利用できそうなので, 試してみた.

reference
---------

-   [Files (Java Platform SE 7
    )](https://docs.oracle.com/javase/jp/7/api/java/nio/file/Files.html)
-   [Java ファイル関連メモ 2 (Hishidama's Java Files
    Memo)](https://www.ne.jp/asahi/hishidama/home/tech/java/files.html)
-   [Java SE 7 徹底理解 第 4 回 New I/O 2
    の新しいファイルシステムインタフェース その
    1:ITpro](https://itpro.nikkeibp.co.jp/article/COLUMN/20110725/362803/?ST=develop)
-   [Java SE 7 徹底理解 第 5 回 New I/O 2
    の新しいファイルシステムインタフェース その
    2:ITpro](https://itpro.nikkeibp.co.jp/article/COLUMN/20110830/367909/)
-   [Java SE 7 の java.nio.file.Files がとても便利な件 -
    きしだのはてな](https://d.hatena.ne.jp/nowokay/20110707)
-   [java.nio.file.Files のメソッドを一通り使ってみた - kagamihoge
    の日記](https://kagamihoge.hatenablog.com/entry/20130110/1357810886)
-   [これからの「 Java I/O 」の話をしよう www (5) : Files
    クラスのメソッド 〜ファイル内容の読み書き〜 - 倭マン's
    BLOG](https://waman.hatenablog.com/entry/20120515/1337044411)

基本
====

java.nio.file を import.

``` {.java}
import java.nio.file.*; 
```

FileSystems.getDefault ();で ファイルシステムオブジェクトを取得.

``` {.java}
// filesystem の取得
FileSystem fileSystem = FileSystems.getDefault ();
```

ファイル or ディレクトリを表すオブジェクトは Path オブジェクトで示す.
以下のいずれかで取得.

-   fileSystem.getPath ()
-   Paths.get ()

``` {.java}
Path fooFile = fileSystem.getPath ("foo.txt");
Path barFile = Paths.get ("bar.txt");
```

コピーしてみる
==============

Files オブジェクトの copy メソッドを利用する.

-   [Files (Java Platform SE 7
    )](https://docs.oracle.com/javase/jp/7/api/java/nio/file/Files.html#copy (java.nio.file.Path,%20java.nio.file.Path,%20java.nio.file.CopyOption...))

``` {.java}
public static Path copy (Path source, Path target, CopyOption... options) throws IOException
```

-   source ... コピー元
-   target ... コピー先
-   options
    -   REPLACE\_EXISTING ... target が存在すれば上書き
    -   COPY\_ATTRIBUTES ... Attribute もコピー.
    -   NOFOLLOW\_LINKS ... シンポリックリンクはコピーしない.

``` {.java}
Files.copy (fooFile, barFile);
```

reference
---------

コピー

-   [(3/7) Java 技術最前線 - Java SE 7 徹底理解 第 5 回 New I/O 2
    の新しいファイルシステムインタフェース その
    2:ITpro](https://itpro.nikkeibp.co.jp/article/COLUMN/20110830/367909/?ST=develop&P=3)
-   [Java 7 新機能 3 ファイルコピー -
    Qiita](https://qiita.com/asahina_dev/items/ce85cc4ddec2543b99f0)

移動

-   [(4/7) Java 技術最前線 - Java SE 7 徹底理解 第 5 回 New I/O 2
    の新しいファイルシステムインタフェース その
    2:ITpro](https://itpro.nikkeibp.co.jp/article/COLUMN/20110830/367909/?ST=develop&P=4)

属性の取得
==========

以下でできる.

-   getFileAttributeView ()
-   getFileAttribute ()
-   readFileAttirbute ()

getFileAttributeView (), readFileAttirbute () だと, 指定した
FileAttributeView オブジェクトが取得できる.

-   [FileAttributeView (Java Platform SE 7
    )](https://docs.oracle.com/javase/7/docs/api/java/nio/file/attribute/FileAttributeView.html)

``` {.java}
BasicFileAttributes attrs = Files.getFileAttributeView (barFile, BasicFileAttributeView.class);
BasicFileAttributes attrs = Files.readAttributes (barFile, BasicFileAttributes.class);
```

getFileAttribute で FileAttirbuteView
の個々の属性を指定して情報を取得することができる.

-   [FileAttributeView (Java Platform SE 7
    )](https://docs.oracle.com/javase/7/docs/api/java/nio/file/attribute/FileAttributeView.html)
-   [Obtaining and modifying the metadata of the files in Java 7
    NIO.2](https://www.javabeat.net/obtaining-and-modifying-the-metadata-of-the-files-in-java-7-nio-2/)

Sample Code
===========

``` {.java}
import java.nio.file.*;
import java.nio.file.attribute.*;

public class FilesSample {
    public static void main (String args[]) {
        try {

            // file system
            FileSystem fileSystem = FileSystems.getDefault ();

            // ファイルを表す Path オブジェクトを生成
            Path fooFile = fileSystem.getPath ("foo.txt");
            System.out.println (fooFile);
            Path barFile = Paths.get ("bar.txt");
            System.out.println (barFile);

            // ファイルが存在する場合は削除します
            Files.deleteIfExists (barFile);

            // copy
            Files.copy (fooFile, barFile);

            // 存在チェック
            if (!Files.exists (barFile)) 
                System.out.println ("file not exist");

            // 容量チェック
            if (Files.size (barFile) != Files.size (barFile) ) 
                System.out.println ("file size is not equal");

            BasicFileAttributes attrs = Files.getFileAttributeView (barFile, BasicFileAttributeView.class);
            BasicFileAttributes attrs = Files.readAttributes (barFile, BasicFileAttributes.class);

        } catch (Exception ex) {
            System.out.println (ex);
        }
    }
}
```

つづき
======

-   [Java で windows のコマンドを実行してフォルダコピー |
    Futurismo](https://futurismo.biz/archives/2978)

