---
author: admin
categories:
- HTML
- PHP
- Wordpress
- 技術メモ
date: 2013-07-07T08:20:47+00:00
dsq_thread_id:
- 3.8344376e+09
excerpt: "|\n  今日はサイトのトップページをメチャガチャクールな男前にカスタマイズしてみました。\n  \n  今日も淡々と作業メモを残します。\n"
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 2101
title: WordPressのトップページで新着記事をメチャガチャクールに表示する方法
type: post
url: /archives/=1586
---

今日はサイトのトップページをメチャガチャクールな男前にカスタマイズしてみました。今日も淡々と作業メモを残します。

改築前に、自分のイメージではこんな風にしたいという図を下に書きます。

![][1]

では、改造スタート。(^o^)／

### Thumbnail for Excerptsを利用する

まずは画像のカスタマイズ。新着記事には、大きいアイキャッチ画像を表示させたい。Thumbnail for Excerptsという便利なプラグインがある。

  * [Thumbnail for Excerpts][2]

このプラグインを利用すると、記事の先頭にある画像をアイキャッチ画像と自動で認識できる。

he_expert()関数で、記事抜粋を表示すると、アイキャッチもいっしょに表示してくれる。

しかも、大きさや位置、さらにはアイキャッチ画像が見つからなかった場合のデフォルト画像も指定可能だ。

![][3]

### WP Multibyte Patch

本文抜粋記事を表示する関数、the_excerpt()は、デフォルトで110文字を表示する。この文字数を増やしたい。

WP Multibyte Patchを利用する。これはWordPressにデフォルトでついているプラグインなので、有効化する。

wpmp-config-sample-ja.phpというファイルを編集することで、文字数が変更できる。ファイルの場所は以下。

    (WordPresインストールフォルダ）/wp-content/plugins/wp-multibyte-patch/wpmp-config-sample-ja.php
    

このwpmp-config-sample-ja.phpの内容をコピーして、wpmp-config.phpという新規作成したファイルに貼り付ける。

$wpmp\_conf[&#8216;excerpt\_mblength&#8217;] = 110となっている場所を見つけて、110という数字を表示したい文字数に変更すればOk.

    /**
     * 投稿抜粋の最大文字数
     *
     * この設定は the_excerpt() とその関連の抜粋系関数に適用されます。
     * この設定は $wpmp_conf['patch_wp_trim_excerpt'] が false の場合は無効となります。
     */
    $wpmp_conf['excerpt_mblength'] = 500;
    

あとは、新規記事作成時に、抜粋欄にもしっかり文章を書けばOk.

![][4]

### アイコンの作成

続きを読むアイコンを自作しました。Windowsのペイントを使いました。これは説明略。

    <p class="link-next"><a href="<archives/hp the_permalink() ?>">
    <img src="<archives/hp bloginfo('template_url'); ?>/images/icon/futurismo_next.png" alt="続きを読む" />
    </a></p>
    

### カテゴリのカスタマイズ

カテゴリをスタイルシートを利用して、色をつけたりしました。

    #main-contents .post-cat a{
        margin-bottom: 0;
        background-color: #FFA500;
        color: #ffffff;
        text-decoration: none;
        overflow: hidden;
        width: 6em;
        height: 1.5em;
        padding: 0.1em 0.3em 0;
        border-bottom: none;
        font-size: 0.858em;
        text-align: center;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
    }
    

### タグのカスタマイズ

タグもカスタマイズします。そもそも、タグがヒョウジサれていなかったので、表示。the_tags() で記事のタグが取得できる。

    <archives/hp if (the_tags() != ""): ?> [<span class="post-tag"><archives/hp the_tags(', ') ?></span>] <archives/hp endif; ?></p>
    

これも、カテコリと同様に、CSSでデコレートする。

### まとめ。

とりあえず、こんなところで！まだまだ、もさっとしている。男前にはなれなかったお(´･ω･｀)

    <archives/hp while (have_posts()) : the_post(); ?>
    
    <div class="post">
    <h2 class="post-title"><a href="<archives/hp the_permalink() ?>" title="<archives/hp the_title_attribute(); ?>"><archives/hp the_title(); ?></a></h2>
    <p class="post-meta">
        公開日：<archives/hp the_time('Y年n月j日') ;?>  
        <archives/hp if ( function_exists ( 'wpp_get_views' ) ) { echo '<span class="wpp-views">' . wpp_get_views ( get_the_ID() ) . '</span> views'; } ?>
        <archives/hp if (get_the_category() != ""): ?> カテゴリ: <span class="post-cat"><archives/hp the_category(', ') ?></span> <archives/hp endif; ?>
        <archives/hp if (get_the_tags() != ""): ?> タグ: <span class="post-tag"><archives/hp the_tags(' ') ?></span> <archives/hp endif; ?>
    </p>
    <div class="contents clearfix">
    
        <div class="article">
    
        <!--本文抜粋-->
        <archives/hp the_excerpt(); ?>     
    
        <p class="link-next"><a href="<archives/hp the_permalink() ?>"><img src="<archives/hp bloginfo('template_url'); ?>/images/icon/futurismo_next.png" 
         alt="続きを読む" /></a></p>
        <!--/本文抜粋-->
    
        </div>
        <!--/article-->
    
    </div>
    
    </div>
    <!--/post-->
    
    <archives/hp endwhile;
    

![][5]

 [1]: https://lh4.ggpht.com/-s67vJmbz8NY/Udi1teuq8NI/AAAAAAAAAis/GkaTk3xp200/top_eye_cache_image.jpg
 [2]: https://wordpress.org/plugins/thumbnail-for-excerpts/
 [3]: https://lh5.ggpht.com/-awye-d0RWHI/Udi19HEgHXI/AAAAAAAAAi0/ayRZmVD2ljU/Tuhumbnail_excerpt.jpg
 [4]: https://lh5.ggpht.com/-fA-S3RdHJk4/UdjF-XW7YpI/AAAAAAAAAjE/cXu1slrUpSw/SnapCrab_NoName_2013-7-7_10-35-45_No-00.jpg
 [5]: https://lh5.ggpht.com/-Taa0EWcMy2M/Udkj6T36ksI/AAAAAAAAAjU/ptEN8fre6cU/SnapCrab_NoName_2013-7-7_17-15-7_No-00.jpg