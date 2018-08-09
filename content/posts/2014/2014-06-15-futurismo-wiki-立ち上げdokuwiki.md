---
author: admin
categories:
- 日記
date: 2014-06-15T01:55:00+00:00
excerpt: Futurismo Wikiを立ち上げました
follow:
- follow
index:
- index
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 5380
side:
- def
sub:
- def
tags:
- Dokuwiki
title: Futurismo Wiki 立ち上げ(Dokuwiki)
type: post
url: /archives/=2500
---

はじめに
========

以前, 高らかに Futurismo Wiki の立ち上げを宣言しました.

-   [Futurismo Wiki 立ち上げ (Dokuwiki) |
    Futurismo](https://futurismo.biz/archives/2500)

宣言しただけで, ちっともカスタマイズしていなかったので, カスタマイズ
してみました.本記事は, その作業メモ.

とくに, SEO に関する情報についてまとめてみました.

SEO 対策
========

-   [ja:seo](https://www.dokuwiki.org/ja:seo)
-   [SEO Optimized
    DokuWiki](https://en.seowiki.info/best_practices/seo_optimized_dokuwiki)

SEO Tips
--------

SEO につよい設定方法は以下にある.これはすごい.

-   [SEO Optimized DokuWiki: Basic
    Configuration](https://en.seowiki.info/best_practices/seo_optimized_dokuwiki/basic_configuration)

簡単なメモ.

-   URL 上の名前空間の区切りにスラッシュを使用 -&gt; On
    -   ページのランクをさらに高める?
-   canonical URL (正準 URL) を使用 -&gt; On
-   文書が存在しないページに"HTTP404/Page Not Found"を使用 -&gt; On

Google にインデックスの許可
---------------------------

管理者メニュー &gt; サイト設定から

-   rel="nofollow"を付加 -&gt; Off に
-   インデックスを許可 (何秒後) -&gt; 0 に
    -   [dokuwiki が検索エンジンに載りにくい理由 -
        ぎじゅっやさん](https://hain.jp/index.php/tech-j/2007/11/12/p191)

Google ウェブマスターツール
---------------------------

default では, サイトマップが作成されないので設定する.

-   [ja:sitemap ](https://www.dokuwiki.org/ja:sitemap)

管理者メニュー &gt; サイト設定から

-   Google サイトマップ作成頻度 (日数) -&gt; 1

これで, サイトマップが作成されるようになった. doku.php?do=sitemap に
アクセスすると, サイトマップが取得できる.

Google ウェブマスターツールにサイトを登録して, サイトマップの URL で
doku.php?do=sitemap を指定して, 登録完了.

-   <https://www.google.com/webmasters/tools/home?hl=ja>

Google Analytics for DokuWiki
-----------------------------

Google Analytics でアクセス解析.

-   [SEO Optimized DokuWiki: Google Analytics
    Integration](https://en.seowiki.info/best_practices/seo_optimized_dokuwiki/integration/google_analytics)

まずは, Google Analytics でトラッキング ID 取得.

### DokuWiki の設定

-   Google Analytics DokuWiki Plugin をインストール
    -   [plugin:googleanalytics](https://www.dokuwiki.org/plugin:googleanalytics)
-   サイト設定画面で,
    -   \[Google Analytics ID\]:にトラッキング ID を入力
    -   \[Don't count admin/superuser\]:チェック
    -   \[Don't count logged in users\]:チェック

Google Adsense
--------------

アドセンスもテーマに挿入出きるみたい.ただ, Wiki のデザインを大切にし
たいので, この Wiki には広告はいれないことにした.

-   [【その他】 Dokuwiki に GoogleAdSense の広告を表示する -
    tsuyushiga's
    blog](https://tsuyushiga.hatenablog.jp/entry/2014/03/02/000748)

おわりに
========

なにもしないと, Google 検索にまったくひっかからないんだということを
今更ながら知りました orz.
