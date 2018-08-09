---
author: admin
categories:
- PHP
- Wordpress
date: 2013-07-28T13:17:02+00:00
dsq_thread_id:
- 3.7216927e+09
excerpt: |
  <!--:ja-->WordPressで処理をファイル分割する方法を調べてみました。<!--:--><!--:en-->My code is getting longer and longer as follows to coding

  Then , I split code to another file<!--:-->
follow:
- follow
index:
- index
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 1864
side:
- def
sub:
- def
title: WordPressで処理をファイル分割する方法を調べてみました
type: post
url: /archives/=1729
---

WordPressで処理をファイル分割する方法を調べてみました。

wordpressのコードをいじっていると、だんだん長くなってきた。

そこで、責務が独立できそうな部分を、別ファイルとして独立させる方法を調べてみた。

### get_template_part()をつかう

header.phpやfooter.phpなどの、WordPressで決められた名前のファイルは、専用のinclude関数が用意されている。(get_header(),get_footer()など）

自前で作ったファイル(hogehoge.php)を読みこむには、get_template_part()を利用する。

    get_template_part('hogehoge');
    

例えば、前回の記事で、固定メニューバーをheader.phpから独立させたい場合は，以下のようにすればよい。

  1. header-sticky.phpというファイルを新規作成
  2. 処理をファイルにカット & ペースト
  3. header.phpのカットした場所に以下の行を追加

.

    <archives/hp get_template_part('header-sticky'); ?>
    

ファイル名は、.phpをつけないところがミソ。