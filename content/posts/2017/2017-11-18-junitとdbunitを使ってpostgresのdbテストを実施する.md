---
author: admin
categories:
- Java
- TDD
date: 2017-11-18T13:53:59+00:00
dsq_thread_id:
- 6.292701e+09
excerpt: JUnitとdbUnitを使ってPostgresのDBテストを実施する
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
- 278
side:
- "y"
title: JUnitとdbUnitを使ってPostgresのDBテストを実施する
title_view:
- "y"
type: post
url: /archives/=6817
---

## はじめに {#-}

データベースの知識がなくって、DBのテスト方法がわからない。

そこで、データベースのテストを自動化するためのツール、dbUnitを調べてみた。

  * <https://dbunit.sourceforge.net/>

dbUnitをつかうと以下のようなことができる。

  1. JUnitのテスト実施前に、データをデータベースに投入。
  2. テスト実施後に、期待のデータと変更後のデータベースの値を比較。

データはxmlデータ, Excelデータ, csvデータが利用できる。

## インストール {#-}

ビルドツールにgradleを利用しているので、gradleの設定を書く。

以下から、最新のバージョンをクリックして、gradleのコードをdependenciesに書く。

  * <https://mvnrepository.com/artifact/org.dbunit/dbunit>

<pre><code class="lang-groovy">dependencies {   
    compile group: 'org.dbunit', name: 'dbunit', version: '2.5.4'
}
</code></pre>

## データのテーブル用意 {#-}

データのテーブルを用意する。ここでは、flywayを使った。

<pre><code class="lang-groovy">buildscript {
    dependencies {
        classpath 'com.h2database:h2:1.4.191'
    }
}

plugins {
    id "org.flywaydb.flyway" version "4.2.0"
}

flyway {
    url = 'jdbc:postgresql://localhost:5434/sampleDB'
    user = 'postgres'
    password = 'postgres'
}
</code></pre>

本題ではないので、ここでは参考リンクを貼って詳細はそちらに譲る。

  * [Gradle &#8211; First Steps &#8211; Flyway by Boxfuse • Database Migrations Made Easy.][1]
  * [Flyway使い方メモ &#8211; Qiita][2]

以下のようなテーブルをflywayMigrateで作成。V1_\_create\_table.sql

<pre><code class="lang-sql">CREATE TABLE HOGE (
    ID INT,
    NAME VARCHAR(255),
    STATE VARCHAR(10)
);
</code></pre>

## 投入データと期待データの準備 {#-}

データはxml形式のものを用意する。テスト前、テスト後のデータを用意。ID=3の stateを normal から errorに書き換える。

Before.xml

<pre><code class="lang-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;dataset&gt;
    &lt;HOGE ID="1" STATE="normal" NAME="name#1"/&gt;
    &lt;HOGE ID="2" STATE="normal" NAME="name#2"/&gt;
    &lt;HOGE ID="3" STATE="normal" NAME="name#3"/&gt;
    &lt;HOGE ID="4" STATE="normal" NAME="name#4"/&gt;
    &lt;HOGE ID="5" STATE="normal" NAME="name#5"/&gt;
&lt;/dataset&gt;
</code></pre>

After.xml

<pre><code class="lang-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;dataset&gt;
    &lt;HOGE ID="1" STATE="normal" NAME="name#1"/&gt;
    &lt;HOGE ID="2" STATE="normal" NAME="name#2"/&gt;
    &lt;HOGE ID="3" STATE="error" NAME="name#3"/&gt;
    &lt;HOGE ID="4" STATE="normal" NAME="name#4"/&gt;
    &lt;HOGE ID="5" STATE="normal" NAME="name#5"/&gt;
&lt;/dataset&gt;
</code></pre>

## テスト対象コード {#-}

テスト対象コードをいかに示す。やっていることは、SQL文を実行しているだけ。

<pre><code class="lang-java">package sample;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class DbUnitSample {
    private static final String SQL = "update HOGE set state = 'error' where name = 'name#3';";

    public void execute() {
        try(Connection conn = DriverManager.getConnection(
                "jdbc:postgresql://localhost:5434/sampleDB", "postgres", "postgres");
        ) {
            PreparedStatement stmt = conn.prepareStatement(SQL);
            stmt.executeUpdate();
        } catch(Exception e) {
            System.out.println("failed.");
        }
    }
}
</code></pre>

## テストコード {#-}

テストコードをいかに示す。

<pre><code class="lang-java">package sample;

import org.dbunit.Assertion;
import org.dbunit.IDatabaseTester;
import org.dbunit.JdbcDatabaseTester;
import org.dbunit.dataset.IDataSet;
import org.dbunit.dataset.ITable;
import org.dbunit.dataset.SortedTable;
import org.dbunit.dataset.xml.FlatXmlDataSetBuilder;
import org.dbunit.operation.DatabaseOperation;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.io.File;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class DbUnitSampleTest {
    private static IDatabaseTester databaseTester;
    private DbUnitSample sample;

    @Before
    public void setUp() throws Exception {
        databaseTester = new JdbcDatabaseTester("org.postgresql.Driver",
                "jdbc:postgresql://localhost:5434/sampleDB",
                "postgres",
                "postgres",
                "public");

        IDataSet dataSet = new FlatXmlDataSetBuilder().build(
                new File("src/test/resources/db/dbunit/Before.xml"));
        databaseTester.setDataSet(dataSet);
        databaseTester.setSetUpOperation(DatabaseOperation.CLEAN_INSERT);
        databaseTester.onSetup();

        sample = new DbUnitSample();
    }

    @After
    public void tearDown() throws Exception {
        databaseTester.setTearDownOperation(DatabaseOperation.NONE);
        databaseTester.onTearDown();
    }

    @Test
    public void state更新() throws Exception {
        sample.execute();
        IDataSet expectedDataSet = new FlatXmlDataSetBuilder().build(
                new File("src/test/resources/db/dbunit/After.xml"));
        ITable expectedTable = expectedDataSet.getTable("HOGE");

        IDataSet databaseDataSet = databaseTester.getConnection().createDataSet();
        ITable actualTable = databaseDataSet.getTable("HOGE");
        ITable sortedTable = new SortedTable(actualTable, new String[]{"id"});

        Assertion.assertEquals(expectedTable, sortedTable);
    }

    @Test
    public void state更新2() throws Exception {
        sample.execute();
        IDataSet databaseDataSet = databaseTester.getConnection().createDataSet();
        ITable actualTable = databaseDataSet.getTable("HOGE");

        String actualState = "normal";
        for(int i=0; i &lt; actualTable.getRowCount(); i++) {
            if (actualTable.getValue(i, "name").toString().equals("name#3")) {
                actualState = actualTable.getValue(i, "state").toString();
                break;
            }
        }
        assertThat("error", is(actualState));
    }
}
</code></pre>

ちょっと注意するところは、sqlのupdateを実行すると、updateしたid=3が、rowの一番最後になってしまうところ。なので、テスト1では、わざわざソートして対応、テスト２では、for文で名前をキーにして検索をしている。

<pre><code class="lang-java">        ITable sortedTable = new SortedTable(actualTable, new String[]{"id"});
</code></pre>

## おわりに {#-}

手動でデータベースを書き換えてテストするのではなくて、flywayやらdbunitやら、使えるものは使って効率よく開発すべき。

しかし問題は、テストを書く時間すら今は確保できないくらい追い詰められていること。

進捗ヤバメです。(´・ω・\`)

code:

  * [https://github.com/tsu-nera/java\_spock\_playground][3]

 [1]: https://flywaydb.org/getstarted/firststeps/gradle
 [2]: https://qiita.com/opengl-8080/items/6368c19a06521b65a655
 [3]: https://github.com/tsu-nera/java_spock_playground