---
author: admin
categories:
- ライフログ
date: 2018-01-27T10:42:49+00:00
dsq_thread_id:
- 6.441081e+09
excerpt: Elasticsearch と kibanaで fitbitのデータを可視化する
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
- 150
side:
- "y"
tags:
- fitbit
title: Elasticsearch と kibanaで fitbitのデータを可視化する
title_view:
- "y"
type: post
url: /archives/=6908
---

## はじめに {#はじめに}

今まで収集されたデータを分析して、よい精度を出すことに躍起になっていたのだけれども、世の中そんなに簡単にデータが集まっているわけではない。データを集めることは結構大変なのではと思った。なので、データ分析の前にデータ収集を自前でやってみようと思ったのだった。

何がデータ収集の対象がいいだろうと考えたのだけれども、自分のライフログを収集するのがまずは取っ掛かりとしては面白そうだ。これを英語ではQuantified Self というらしい。自分の行動履歴をマッシュアップで表示できると楽しいのではないか？？

そんな空想を実現するOSSを調べていると、どうやらElasticsearch と kibanaというツールが使えそうだ。というわけで、このツールをいじってみることにした。

## Elasticsearchとkibanaについて {#elasticsearchとkibanaについて}

まずは、２つのツールの関係と機能について。Elasticsearchとは、データの全文検索エンジン。そして、kibanaは そのフロントエンドツール。どちらも同じ会社 elastic が開発しているOSS。

  * <https://www.elastic.co/jp/products/elasticsearch>
  * <https://www.elastic.co/jp/products/kibana>

## Elasticsearchのインストールと実行 {#elasticsearchのインストールと実行}

ダウンロードは以下から。

  * <https://www.elastic.co/jp/downloads/elasticsearch>

Ubuntuなのでdebを選択してDownloadします。

```bash
$ sudo dpkg -i elasticsearch-6.1.2.deb
$ systemctl start elasticsearch.service
```

これで、<https://localhost:9200>　にアクセスして、以下のレスポンスを受ければOK.

```json
{
  "name" : "6UGX_mB",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "Ih-924HvSr6AxH7CMfWlZg",
  "version" : {
    "number" : "6.1.2",
    "build_hash" : "5b1fea5",
    "build_date" : "2018-01-10T02:35:59.208Z",
    "build_snapshot" : false,
    "lucene_version" : "7.1.0",
    "minimum_wire_compatibility_version" : "5.6.0",
    "minimum_index_compatibility_version" : "5.0.0"
  },
  "tagline" : "You Know, for Search"
}
```

## kibanaのインストールと実行 {#kibanaのインストールと実行}

kibanaのインストールは以下から。

  * <https://www.elastic.co/jp/downloads/kibana>

Ubuntuなのでdebを選択してDownloadします。

```bash
$ sudo dpkg -i kibana-6.1.2-amd64.deb
$ systemctl start kibana.service
```

これで、<https://localhost:5601>　にアクセスして、welcome画面がでればOK.

## CSV データを elasticsearchに投入する {#csv-データを-elasticsearchに投入する}
理想的にはリアルタイムでデータ収集したいが、まずは手元にある静的なデータを使う。まずはじめは、fitbitから得た心拍数をグラフ化してみよう。

[Fitbit Apiとpythonで心拍数の取得をする | Futurismo][1]</th> 

kibanaからCSVデータを投入する機能は、一時保留になっている。そこで、logstashを利用する。

  * <https://www.elastic.co/jp/downloads/logstash>

設定ファイルを以下のように書く。

```json
input {
  file {
    path => "/home/tsu-nera/repo/python-scripts/heartbeat.csv"
    type => "csv"
    start_position => "beginning"
    sincedb_path => "/dev/null"
  }
}

filter {
  csv {
    columns => ["time","value"]
    separator => ","
  }
  date{
    match => ["time" , "yyyy-MM-dd HH:mm:ss"]
    target => "time"
  }
  mutate {
    convert => { "value" => "integer" }
  }
}

output {
  elasticsearch {
    hosts => ["localhost:9200"]
    index => "heartbeat"
  }
}
```

コマンドラインから実行。

    $ logstash -f conf.conf 

これで、elasticsearchにcsvのデータが投入された。Webから確認してみよう。

## kibanaでfitbitの心拍数をグラフ化 {#kibanaでfitbitの心拍数をグラフ化}

kibanaにアクセスして、**index patterns** を作成する。 作成が完了すると、Management > Index Patterns から作成した name を持つ データが並んでいるのが確認できる。

タブから Visualize を選択し、 Lineを選択。折れ線グラフを作成する。以下のようにY軸とX軸を設定。

![][2]

すると、以下のような折れ線グラフができる。素晴らしい。

![][3]

## おわりに {#おわりに}

この記事を書いた背景は、以下の記事にとても影響を受けている。

  * [今年よかった習慣: ライフログ収集および可視化 &#8211; yasuhisa’s blog][4]

この記事みたいに、自分もライフログを収集してみたい。心拍数はつまらないな。まずは、睡眠と体重からかなー。

 [1]: https://futurismo.biz/archives/6903
 [2]: https://lh3.googleusercontent.com/R9DgSlOzH6bdZhiCxMdcDKAe1ubgP3gpE2NUAZY1FTUfn7e51kUI0t335UGzveJPRuelys3o5mxnp4Bi1TujYZ7jPk3F6NDpr9bJtr_51OM_-9H0J5yeGO7YlZ46wqyat5TiGWgFUUx9GYhmwXxl-OkMtIheb6oUUs6Wj4ttfvPKn_RVga_UgpNsP98JtLRVhudb6prQppjCZyBzSb1v1DUBpABxD5fZ5iXBb3YyzKh8j_fJjPrGpFDdtwQHEQBWrGqJCxBWUgKYOVkW1szFPTCFzfbE0M1hC0uYmzARt6Uu_h8rOO-ihIkAcQzSpQGW2zme5pbsMWoYqOFDmDwtsGTzb6VvjPahkNZBAazSLAyUXIdlhArZXVJAeOrFKU6G1AU324xe3UuNJYttzSW4gVSTOvdJGTFkfrEBc7pVIol-qocUiD_W8xUEkI5Zlu59-FZ32rbQO9UylwogQaq7FYTwm0Jsg0DUOI0poFn3rs-z4t3JJlzbBYtGZ9i7Dz8tyxTQ64r1zZjvw1ybx2uVHzNBtaj4vX9NBx702jVblhLA7xLTGoiR2vF-Jz3v2G7SEE0i0iQvsyDQywz67HUWoPZIcaf4ByKNwILqTHM=w389-h696-no
 [3]: https://lh3.googleusercontent.com/c2SHfgAqAelnqs5Tts0XvOrJ8KpnqDvOdSsLZ36bPJ08pr-CKCKmRarIB3pRj6o3M7zmpeJ-i01PQoZeMZ5-eCDShUpaDuFDLtlOsr3O9FLWVeGZtvlaXj44-TZyJdDMVYsqRl5Ufbii66XtwiKokRYu3DAUZJ5sRG7tEumJGgm8gDMBvScvxtLNmEprCgJSZnVi-jqcsDxS5SUKB6Jjynbj30hxZFx4kZB3xLu5_CvfhdaBSf667y3Tvj4ZIXRMTqi6qGuYkE06W5hCAWUciIjGOQ6WFr0Dm7fq-wOIiQYeR5Ybcy6Fa42fIbOaO5gjKiqEhnvc1tObRoxySCEzHcobTA-D2kCPXc9pp1Tc6BUzfAgWWsle1GQ8BpKt5KK6WZg_D_SNcY-aZPTSCQ_A-6IHcbjaIlKU2V_XQp3RFZvonzZ5ZSdsiAF0xzR6r_cdHtg9-0SzFg5o71sfRloSaY8u7QC8OnRyq82jwMJpL4XsdtPB_XEL15K2UeHJLQ2Ey_G_k0VBNq_IXXxostyjYnuXAHTpC84qRgjNyhZlo9b0BdMSYw_w0y6XZNI1TXakErO_RxBK_APhUuCaALY-c4aoNX-_Go_-f8Z0O5c=w952-h546-no
 [4]: https://www.yasuhisay.info/entry/2015/12/21/000843
