---
author: admin
categories:
- PHP
- Wordpress
- 技術メモ
date: 2013-01-02T03:40:22+00:00
dsq_thread_id:
- 3.7220147e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3254
title: WordPressで記事を取得して記事一覧を作成する方法メモ
type: post
url: /archives/=1124
---

WordPressの固定ページとかで、記事一覧を取得して一覧表示することがよくある。

一覧表示するためには、Exec-PHPプラグインを利用するのだけれども、WordPressの編集画面でテキストから[ビジュアル]に変換すると、表示がおかしなことになる。

そのたびごとに、再度コードを書き直しているのだけれども、どんなコードだったかスグ忘れて、メモもどこかに行ってしまうので、このサイトでもメモしておく。

#### 事前準備

WordPressの編集画面でPHPを利用するために、Exec-PHPを入れる。

<a href="https://wordpress.org/extend/plugins/exec-php/" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://wordpress.org/extend/plugins/exec-php/" width="150" height="130" /></a> <a style="color: #0070c5" href="https://wordpress.org/extend/plugins/exec-php/" target="_blank">WordPress 窶ｺ Exec-PHP ≪ WordPress Plugins</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://wordpress.org/extend/plugins/exec-php/" />

#### ソースコード例

以下のコードをWordPress編集画面に貼り付け。ここではPHPカテゴリ(カテゴリIDは39)を取得する。カテゴリIDは[ダッシュポード] > [カテゴリー]から調べることができる。

[gist]https://gist.github.com/4450427[/gist]

#### 表示例

<archives/hp 
$args = array( 'numberposts' => -1, &#8216;cat&#8217;=> 39);


  
$posts = get_posts($args); global $post;?>
  
<archives/hp foreach($posts as $post): ?></p> 

  * <a href="<archives/hp the_permalink(); ?>&#8220;>
    
    <archives/hp the_title(); ?></a>

<archives/hp endforeach; ?></ul> 

#### よく使うのは numberposts/cat/tagのオプション

表示する記事のオプション指定は $args = array( &#8230; hogehoge &#8230; ) の中を編集する。

numberpostsの引数で、取得する件数を指定。"-1"で全て取得。

cat の引数でカテゴリIDを指定。これを指定すると、カテゴリに属する記事一覧が取得できるので、カテゴリごとの固定ページの作成に便利。

tag の引数で、タグに割りつけたスラングを指定(タグ名でないことに注意）

他にもオブションはたくさんある。詳しくは以下のページが参考になる。

<a href="https://elearn.jp/wpman/column/c20110121_01.html" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://elearn.jp/wpman/column/c20110121_01.html" width="150" height="130" /></a> <a style="color: #0070c5" href="https://elearn.jp/wpman/column/c20110121_01.html" target="_blank">get_postsとquery_postsを使い分け:WordPress私的マニュアル</a>  <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://elearn.jp/wpman/column/c20110121_01.html" />

<br style="clear: both" />

&#160;

#### 参考サイト

  * [WordPressでカテゴリ別の新着記事を表示する方法][1]

 [1]: https://www.seo-blogs.biz/2009/06/28/655/