---
author: admin
categories:
- Java
- TDD
date: 2017-09-24T13:39:05+00:00
dsq_thread_id:
- 6.167149e+09
excerpt: spock で モック を interfaceを用意せずにつくる方法
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
- 249
side:
- "y"
tags:
- spock
title: Spock で モック を interfaceを用意せずにつくる方法
title_view:
- "y"
type: post
url: /archives/=6795
---

## はじめに {#-}

前回、spockの mock 機能を利用するために、interfaceを用意していた。

  * [Spockでモックとスタブを使ってJavaコードをテストする | Futurismo][1]

というのも、interfaceからでないとMockを作成できないと思っていたからだ。

しかし、interfaceを用意しなくても、classからモックを作成できることがわかったので、紹介。

## byte-buddy {#byte-buddy}

class からモックを作ろうとすると、以下のようなエラーがでる。

org.spockframework.mock.CannotCreateMockException:Cannot create mock for class sample.Calculator. Mocking of non-interface types requires a code generation library. Please put byte-buddy-1.6.4 or cglib-nodep-3.2 or higher on the class path.

注目すべきは、Please put byte-buddy-1.6.4 or cglib-nodep-3.2 or higher on the class path.

なんだ、byte-buddyとは？ということで、検索。

  * [Byte Buddy &#8211; runtime code generation for the Java virtual machine][2]

どうやら、コードを自動生成するようなライブラリらしい。早速インストール。gradleをつかっているので、以下を build.gradleのdependencies
  
に追加。他のビルドツールでの追加方法は、byte-buddyのサイトを参照してください。

    testRuntime "net.bytebuddy:byte-buddy:1.7.5"
    

すると、interfaceを実装していないクラスからでもMockがつくれた！

## 実列 {#-}

以下のクラスのモックを作る。

<pre><code class="lang-java">class Calculator {

    int add(int a, int b) {
        return a + b
    }
}
</code></pre>

テストコードは以下。

<pre><code class="lang-groovy">def "interfaceなしでMockをつくる" () {
    setup:
    def calc = Mock(Calculator)
    calc.add(_, _) &gt;&gt; 4

    expect:
    calc.add(1,2) == 4
}
</code></pre>

これを走らせると、テストが成功する。

何が起こっているのかわからないけれども、おそらくクラスからインタフェースを自動生成しているのかな？とりあえず、便利になった。

コードは以下です。

  * [https://github.com/tsu-nera/java\_spock\_playground][3]

今日はここまで。

 [1]: https://futurismo.biz/archives/6786
 [2]: https://bytebuddy.net/#/
 [3]: https://github.com/tsu-nera/java_spock_playground