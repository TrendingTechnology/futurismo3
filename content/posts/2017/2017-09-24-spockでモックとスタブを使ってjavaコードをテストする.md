---
author: admin
categories:
- Java
- TDD
date: 2017-09-24T05:57:32+00:00
dsq_thread_id:
- 6.1664343e+09
excerpt: Spockでモックとスタブを使ってJavaコードをテストする
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
- 300
side:
- "y"
tags:
- spock
title: Spockでモックとスタブを使ってJavaコードをテストする
title_view:
- "y"
type: post
url: /archives/=6786
---

## はじめに {#-}

前回の続きです。

  * [はじめてSpock をつかってみた | Futurismo][1]

前回は、基本的な文法を確認しました。今回は、モック機能を使ってみます。

## テスト対象コード {#-}

想定としては、MockSampleが自分が開発しているコード。MessageManagerが他人が開発しているコードとします。

MessageManagerクラスの開発は遅延しているので、インタフェースだけ先に提供されているものとします。

こんなとき、自分が作ったMockSampleクラスをMessageManagerの依存関係をうまく扱ってテストすることを目指します。

  * MockSample.java

<pre><code class="lang-java">package sample;

public class MockSample {
    private MessageManager mgr;

    public void setManager(MessageManager mgr) {
        this.mgr = mgr;
    }

    public void sendMsg(String msg) {
        mgr.send(msg);
    }

    public int sendMsg2(String msg) {
        return mgr.send2(msg);
    }
}
</code></pre>

  * MessageManager.java

<pre><code class="lang-java">package sample;

public interface MessageManager {
    void send(String msg);
    int send2(String msg);
}
</code></pre>

## テストコード {#-}

モックとスタブの言葉の定義は人それぞれあって混乱するのだけれども、ここでは

  * モック: 呼びだされたときに与えられるパラメータチェックと呼び出し回数をチェックするダミークラス
  * スタブ: 呼びだされた時に戻り値を返すダミークラス

とします。

### モック {#-}

まずは、モックから。Mockを生成するには、

    def mgr = Mock(MessageManager)
    

とするか、

    MessageManager mgr = Mock()
    

で宣言します。

<pre><code class="lang-groovy">import sample.MessageManager
import sample.MockSample
import spock.lang.Specification

class MockSampleSpec extends Specification {

  def "呼び出し引数をチェック(Mocking)"() {
      setup:
      def sample = new MockSample()
      def mgr = Mock(MessageManager)
      sample.setManager(mgr)

      when:
      sample.sendMsg("hello")
      sample.sendMsg("hello")

      then:
      2 * mgr.send("hello")
  }
}
</code></pre>

以下で2回呼び出しを期待して、呼び出し引数は"hello"を期待しています。

    2 * mgr.send("hello")
    

### スタブ {#-}

次にスタブです。以下の宣言で、戻り値をオブジェクトに指定します。

    mgr.send2(_) >> 1
    

<pre><code class="lang-groovy">def "戻り値を返す(Stubbing)" () {
    setup:
    def sample = new MockSample()
    def mgr = Mock(MessageManager)
    mgr.send2(_) &gt;&gt; 1
    sample.setManager(mgr)

    expect:
    sample.sendMsg2("hello") == 1
}
</code></pre>

## 例外をチェックするテストコード {#-}

戻り値の代わりに例外をスタブで発生させることもできます。

<pre><code class="lang-groovy">def "例外が発生したことを確認する" () {
    setup:
    def sample = new MockSample()
    def mgr = Mock(MessageManager)
    mgr.send(_) &gt;&gt; {throw new IllegalArgumentException()}
    sample.setManager(mgr)

    when:
    sample.sendMsg("hoge")

    then:
    thrown(IllegalArgumentException)
}
</code></pre>

また、なにも例外が発生しなかったことを確認することもできます。

<pre><code class="lang-groovy">def "例外が発生しないことを確認する" () {
    setup:
    def sample = new MockSample()
    def mgr = Mock(MessageManager)
    sample.setManager(mgr)

    when:
    sample.sendMsg("hello")

    then:
    noExceptionThrown()
}
</code></pre>

コードはgithubにもあげています。

  * [https://github.com/tsu-nera/java\_spock\_playground][2]

参考

  * [相互作用中心のテスト — Spock 1.0-SNAPSHOT][3]

今日はここまで！

 [1]: https://futurismo.biz/archives/6783
 [2]: https://github.com/tsu-nera/java_spock_playground
 [3]: https://spock-framework-reference-documentation-ja.readthedocs.io/ja/latest/interaction_based_testing.html