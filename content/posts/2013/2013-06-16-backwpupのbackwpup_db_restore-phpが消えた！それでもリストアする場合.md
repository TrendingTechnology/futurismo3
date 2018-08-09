---
author: admin
categories:
- Wordpress
date: 2013-06-16T01:23:39+00:00
dsq_thread_id:
- 3.7297334e+09
pvc_views:
- 2761
title: BackWPupのbackwpup_db_restore.phpが消えた！それでもリストアする場合の方法メモ
type: post
url: /archives/=1417
---

WordPressのバックアップには、BackWPupというプラグインを利用している。リストアが必要になったのに、サイトにアクセスしてみたら、

404 Not Found &#8230;.

<font color="#ff0000" size="5">な・ん・だ・と&#160; (o´･Д･｀)ﾉ </font>

バックアップのツールなのに、リストアできないとは悲惨。色々調べたら、phpMyAdminからリストアする方法があるようだ。以下、方法をメモ

### phpMyAdminからのSQLデータインポート方法

<p align="left">
  phpMyAdminにアクセスして、インポートを選択。
</p>

<p align="left">
  リストアしたいsqlファイルをアップロードする。あとは、デフォルト設定で実行を選択。数分で完了する。
</p>

<p align="left">
  <a href="https://futurismo.biz/wp-content/uploads/skitch5.png"><img title="skitch" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="skitch" src="https://futurismo.biz/wp-content/uploads/skitch_thumb2.png" width="468" height="333" /></a>
</p>

<p align="left">
  すごい簡単ラクチン＼(^o^)／。 <br />こんなにサクッとデキるならば、backwpup_db_restore.phpはいらないね。
</p>