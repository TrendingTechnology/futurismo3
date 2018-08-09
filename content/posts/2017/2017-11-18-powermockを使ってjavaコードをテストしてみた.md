---
author: admin
categories:
- Java
- TDD
date: 2017-11-18T08:27:59+00:00
dsq_thread_id:
- 6.2924733e+09
excerpt: PowerMockを使ってJavaコードをテストしてみた
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
- 279
side:
- "y"
tags:
- JUnit
title: PowerMockを使ってJavaコードをテストしてみた
title_view:
- "y"
type: post
url: /archives/=6815
---

## はじめに {#-}

仕事で JavaのTesting Frameworkとして Spockを利用する予定があったので、一生懸命勉強していたが、政治的な理由によって Spockではなく JUnitが採用されてしまった！

というわけで、急遽 JUnitで利用できそうな Mockフレームワークを調査。

PowerMockというのがなかなかいけているので、それを調べた。

  * [powermock/powermock: PowerMock is a Java framework that allows you to unit test code normally regarded as untestable.][1]

今回のテスト対象コードは、以前書いたSpock Frameworkのときのと同じです。

  * [Spock をつかってJavaコードをテストしてみた | Futurismo][2]
  * [Spockでモックとスタブを使ってJavaコードをテストする | Futurismo][3]

<pre><code class="lang-java">package sample;

public class MockSample {
    private MessageManager mgr;

    public void setMgr(MessageManager mgr) {
        this.mgr = mgr;
    }

    public MockSample() {
        mgr = new MessageManagerImpl();
    }

    public void sendMsg(String msg) {
        mgr.send(msg);
    }

    public int sendMsg2(String msg) {
        return mgr.send2(msg);
    }

    public void sendMsg3(String msg) {
        MessageManager mgr2 = new MessageManagerImpl();
       mgr2.send(msg);
    }

    public static int sendMsg4(String msg) {
        return MessageManagerStatic.send(msg);
    }

    private void sendMsg5(String msg) {
        mgr.send(msg);
    }
}
</code></pre>

<pre><code class="lang-java">package sample;

public interface MessageManager {
    void send(String msg);
    int send2(String msg);
}
</code></pre>

<pre><code class="lang-java">package sample;

public class MessageManagerImpl implements MessageManager {
    @Override
    public void send(String msg) {
        System.out.println(msg);
    }

    @Override
    public int send2(String msg) {
        System.out.println(msg);
        return 0;
    }
}
</code></pre>

<pre><code class="lang-java">package sample;

public class MessageManagerStatic {
    public static int send(String msg) {
        System.out.println(msg);
        return 0;
    }
}
</code></pre>

## PowerMock Install w/ gradle {#powermock-install-w-gradle}

Gradleをビルドツールで利用しているので、gradleの方法を書く。

公式wikiには、Mavenのやり方が書いてあるので、そちらを参照。

build.gradleの dependenciesに以下を追加する。
  
もっと最新バージョンが出ているらしいが不安定だとwikiに書いてあったので、安定バージョンを。

<pre><code class="lang-groovy">dependencies {
    testCompile &#39;junit:junit:4.12&#39;
    testCompile &#39;org.powermock:powermock-module-junit4:1.6.2&#39;
    testCompile &#39;org.powermock:powermock-api-mockito:1.6.2&#39;
}
</code></pre>

## テスト！テスト！テスト！ {#-}

テストする内容は、比較のためSpock Frameworkと同じにしてます。

まずは、お決まりのおまじないアノテーション2つを書く

  * @RunWith(PowerMockRunner.class)
  * @PrepareForTest({MockSample.class, MessageManagerStatic.class}) 
      * MockSample.class &#8230; メソッド内のインスタンスモック用
      * MessageManagerStatic &#8230; メソッド内のスタティックメソッドモック用
  
        ### 呼び出し引数と回数をチェック {#-}

  * times で 呼び出し回数をチェック
  * Mockito.veirfy(spy).send("Hello") で引数にHelloが来たかチェック

<pre><code class="lang-java">@Test
public void 呼び出し引数をチェック() {
    MessageManager spy = PowerMockito.spy(new MessageManagerImpl());

    sample.setMgr(spy);
    sample.sendMsg("Hello");
    sample.sendMsg("Hello");

    Mockito.verify(spy, times(2)).send("Hello");
}
</code></pre>

### 戻り値を返す {#-}

  * when(spy.send2("Hello")).thenReturn(1) で 1を返す.

<pre><code class="lang-java">@Test
public void 戻り値を返す() {
    MessageManager spy = PowerMockito.spy(new MessageManagerImpl());
    when(spy.send2("Hello")).thenReturn(1);
    sample.setMgr(spy);

    int ret = sample.sendMsg2("Hello");

    Mockito.verify(spy, times(1)).send2("Hello");
    assertThat(1, is(ret));
}
</code></pre>

### メソッド内で生成されるインスタンスをモックに置き換える {#-}

  * PowerMockit.whenNiewでMessageManagerImplがnew されたときに、作成したmockオブジェクトにすり替える。

この機能は、いろんなフレームワークを試しきたが、PowerMock/Mockitoで初めて見た。

<pre><code class="lang-java">@Test
public void メソッド内で生成されるインスタンスをモックに置き換える() throws Exception {
    // https://github.com/powermock/powermock/wiki/MockConstructor
    MessageManagerImpl mock = PowerMockito.mock(MessageManagerImpl.class);
    PowerMockito.whenNew(MessageManagerImpl.class).withNoArguments().thenReturn(mock);

    sample.sendMsg3("Hello");

    Mockito.verify(mock).send("Hello");
}
</code></pre>

### staticなメソッドをテストする {#static-}

オブジェクト内のメソッドからstaticメソッドを呼んでいたって、モックを利用することで、戻り値を書き換えることができる。

<pre><code class="lang-java">@Test
public void staticなメソッドをテストする() {
    // https://github.com/powermock/powermock/wiki/Mockito#mocking-static-method
    PowerMockito.mockStatic(MessageManagerStatic.class);
    Mockito.when(MessageManagerStatic.send("Hello")).thenReturn(1);

    int ret = sample.sendMsg4("Hello");

    assertThat(1, is(ret));
}
</code></pre>

### 例外を発生させる {#-}

モックのメソッドが呼ばれたら例外を発生させることもできる。 PowerMockito.doThrow(new Exception).when(mock).send("Hello")で実現している。

<pre><code class="lang-java">@Test
public void 例外が発生しないことを確認する() {
    try {
        sample.sendMsg("Hello");
    } catch (Exception e) {
        fail(e.getMessage());
    }
}

@Test(expected = IllegalStateException.class)
public void 例外が発生したこと確認する() throws Exception {
    MessageManagerImpl mock = PowerMockito.mock(MessageManagerImpl.class);
    PowerMockito.doThrow(new IllegalStateException()).when(mock).send("Hello");
    PowerMockito.whenNew(MessageManagerImpl.class).withNoArguments().thenReturn(mock);

    sample.sendMsg3("Hello");
}
</code></pre>

## おわりに {#-}

PowerMock, メソッド内で生成されるインスタンスをモックに置き換える機能がとても強力。

しかし、最大の問題点は、ドキュメントが少ないことだ。いろいろネットで情報を漁ってみたものの、情報量が少ない。

やっぱりSpockを使いたいなあ。

今回のコードはgithubにもあげています。

  * [https://github.com/tsu-nera/java\_spock\_playground][4]

 [1]: https://github.com/powermock/powermock
 [2]: https://futurismo.biz/archives/6783
 [3]: https://futurismo.biz/archives/6786
 [4]: https://github.com/tsu-nera/java_spock_playground