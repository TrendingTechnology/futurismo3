---
author: admin
categories:
- Wordpress
- 技術メモ
date: 2013-07-28T07:15:03+00:00
dsq_thread_id:
- 3.7298944e+09
pvc_views:
- 2410
title: WPプラグイン「qTranslate」で記事を新規投稿すると403 Error(wp-admin/post.php)
type: post
url: /archives/=1728
---

WordPressの多言語化プラグインqTranslateを入れて、記事を投稿しようとすると、403エラーとなり、記事が投稿できなくなったので、解決方法を調べました。

wp-admin/post.phpにはアクセス権がないと怒られます。

### 原因

ロリポップサーバで動作している、WAFが原因でした。

<a href="https://www.sophia-it.com/content/WAF" target="_blank">WAFとは 「Webアプリケーションファイヤーウォール」 ワフ： &#8211; IT用語辞典バイナリ</a>

> WAFとは、外部ネットワークからの不正アクセスを防ぐためのソフトウェア（あるいはハードウェア）であるファイアーウォールの中でも、Webアプリケーションのやり取りを把握・管理することによって不正侵入を防御することのできるファイアウォールのことである。

### 解決方法

ロリポップの管理ページから、Webツール -> WAF設定を選択。

WAF設定が有効になっているので、無効に設定。

5分から10分ほどすると、設定が反映されて、無事投稿できるようになりました。

#### Reference

  * <a href="https://rensaba-karuma.net/paperboy/lolipop/1208/" target="_blank">ロリポップ！のWordPressで記事投稿時に403エラーが出た場合の対処方法（wp-admin/post.php） &#8211; レンタルサーバー比較のカルマ</a>