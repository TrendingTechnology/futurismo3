---
author: admin
categories:
- Java
date: 2017-09-24T08:48:09+00:00
dsq_thread_id:
- 6.166685e+09
excerpt: Javaでsetter/getter自動生成するLombokが便利。IntelliJ+gradleでの設定
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 364
side:
- "y"
title: Javaでsetter/getter自動生成するLombokが便利。IntelliJ+gradleでの設定
title_view:
- "y"
type: post
url: /archives/=6791
---

## はじめに {#-}

Lombokという Javaのライブラリが便利。

  * <https://projectlombok.org/>

アノテーションを使うことで、getter, setter, toStoring, コンストラクタなどの、
  
定型的なコードを自動生成することができる。

## gradleでのインストール {#gradle-}

gradleでは、build.gradleのdependenciesに以下の行を追加する。

<pre><code class="lang-groovy">dependencies {
    compileOnly &#39;org.projectlombok:lombok:1.16.18&#39;
}
</code></pre>

## IntelliJ IDEAでの設定 {#intellij-idea-}

まずは、プラグインを入れる。ツールバーのFile -> Preferences -> Plugins から、
  
Lombokを検索して、インストール。

次に、コンパイル時に、アノテーションからコードを自動生成する機能を有効にする。

Preferences &#8211; Build, Execution, Deployment – Compiler – Annotation Processors を開き
  
Enable annotation processing をチェック。

ここまでできたら、IntelliJを再起動。

## 使用例 {#-}

  * [ALL Feature][1]

いろいろと便利な機能があるのだが、つまみぐいして紹介。

### @Getter/@Setter {#-getter-setter}

このアノテーションを使うと、getter/setterを自動生成してくれる。

<pre><code class="lang-java">class Parson {
    private @Getter @Setter String name;
}
</code></pre>

  * getName()
  * setName()

### @ToString {#-tostring}

このアノテーションを使うと、toStringを自動生成してくれる。

<pre><code class="lang-java">@ToString
class Parson {
    private @Setter String name;
}
</code></pre>

Person(name=mikan) とか表示される。

### @Data {#-data}

getter/setter/コンストラクタ/toString/equals/hashCode 自動生成。すごい。

<pre><code class="lang-java">@Data
class Group {
    private String name;
}
</code></pre>

### @AllArgsConstructor {#-allargsconstructor}

フィールドを持つ変数を引数にするコンストラクタを自動生成。

<pre><code class="lang-java">@AllArgsConstructor
class Group {
    private String name;
    private int id;
}
</code></pre>

  * Group(String, int)

 [1]: https://projectlombok.org/features/all