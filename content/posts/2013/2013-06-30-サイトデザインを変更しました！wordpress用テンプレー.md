---
author: admin
categories:
- Wordpress
date: 2013-06-30T13:04:40+00:00
dsq_thread_id:
- 3.7469048e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 2562
title: サイトデザインを変更しました！WordPress用テンプレート賢威6.0カスタマイズメモ
type: post
url: /archives/=1533
---

オシャレしたいお年ごろなので、今日は賢威6.0というテンプレートを使ってブログをカスタマイズしました。

作業メモをつらつらと綴ります。


  
<a href="https://www.seo-keni.jp/" onClick="return clickCount(248685, 2058);"><img src="https://www.infotop.jp/img/banner4_2058.gif" border="0" /></a>

[toc]

### 全体

#### WordPress 賢威の設定

WordPressの管理画面のツールバー ->賢威の設定 から基本的な設定を行う。

  * カラムは2カラムにする。
  * レスポンシブWebデザインを有効にする。これで、iPadやiPhoneで閲覧したとき、1カラムになる。WP touchは無効にしておく。
  * メタキーワード/メタスクリプションを無効にする。。All in one SEO packを利用しているので。
  * グローバルメニューの選択を設定。自分が作成したメニューをトップページに表示。

#### ソーシャルボタン非表示

ソーシャルボタンは、WordPress Pluginの Social Bookmark lightを利用するので、賢威のは削除。

social-button.phpからソーシャルブックマーク表示用の部分をコメントアウト。

    <!--
    <ul class="sb m20-b">
    <li class="sb-tweet"></li>
    <li class="sb-hatebu"></li>
    <li class="sb-gplus"></li>
    <li class="sb-fb-like"></li>
    </ul>
    -->
    

#### スクロールしてもついてくるソーシャルボタンを設置

スクロールしてもついてくるソーシャルボタンは、ウィジェットのテキストに、以下を入力すればよい。

    <div style=”position: fixed; bottom: 5px; left: 3px;”>
    ここに任意のタグを入れる
    </div>
    

設置位置は、bottom/top または、left/rightで調節する。pxの他、％でも位置していできる。

### フッター(footer.php)

フッターはデフォルトだと、わけわからない会社情報が表示されるので、カット。footer.phpを修正。

＜!&#8211;/アドレスエリア&#8211;＞ で囲まれている部分をコメントアウト。代わりに、カテゴリとアーカイブを表示する。これはイマイチだな。あとで変更予定。

    <div class="area01">
    <h2>アーカイブ</h2>
    <div class="footer-menu">
         <ul>
         <archives/hp wp_get_archives('show_post_count=yes'); ?>
         </ul>
    </div>
    </div>
    
    <div class="area02">
    <h2>カテゴリ</h2>
    <div class="footer-menu">
         <ul>
         <archives/hp echo str_replace('<a','<a rel="nofollow"',wp_list_categories('hierarchical=0&title_li=&show_count=1&echo=0')); ?>
         </ul>
    </div>
    </div>
    

### 記事(single.php)

#### zenback設置・GoogleAdsense設置

single.phpを編集して、　 ＜archives/hp the_content(); ?＞の下あたりに設置する。

#### 公開日、最終更新日の表示

それぞれ、wordpressでは以下の関数が用意されている。
  
+ 公開日取得 :the_time()
  
+ 最終更新更新日: get_lastpostmodified()

こんな感じで利用する。

    <p>公開日：<archives/hp the_time('Y年n月j日') ;?></br>
    最終更新日：<archives/hp echo mysql2date('Y年m月d日', get_lastpostmodified(), false); ?></p>
    

#### PV数の表示

PV数を表示するためには、「WordPress Popular Posts」　Pluginを利用する。

プラグイン有効化開始から計測される。viewを表示するためには、以下のコードを任意の場所に貼り付ける。

    <archives/hp if ( function_exists ( 'wpp_get_views' ) ) { echo '<span class="wpp-views">' . wpp_get_views ( get_the_ID() ) . '</span> views'; } ?>
    

参考:
  
<a href="https://did2memo.net/2013/02/19/wordpress-how-to-display-pv/" target="_blank">WordPress：全記事にPV数を表示する方法メモ | 情報科学屋さんを目指す人のメモ</a>

### トップページ(index.php)

#### 最新情報のサムネイル非表示

index.phpの以下の部分を変更

    変更前:
    <archives/hp newposts_keni(5,1,1,"year"); ?>
    変更後:
    <archives/hp newposts_keni(5,1,0,"year"); ?>
    

最新情報のコメントのあたりにある。

    <!--最新情報-->
    <h2><archives/hp _e('Latest Info','keni') ;?></h2>
    <div class="contents">
    <dl class="news">
    <archives/hp newposts_keni(5,1,0,"year"); ?>
    </dl>
    

### スタイルシート(*.css)

#### githubっぽくする

表示をgithubのReadmeっぽくします。最近は MarkdonwPadの　markdownpad-github.cssを利用して記事の下書きを作成しているので、ブログの方もこのスタイルシートに合わせます。

以下からスタイルシート取得。

  * https://github.com/nicolashery/markdownpad-github

#### 横幅を可変にする

このブログでは、ソースコードを貼り付けることが多いので、横幅がdefault 950pxだと小さい。なので、これを1200pxまで拡張して広々と使いたかった。

横幅は、賢威テンプレートメーカーからテンプレートをダウンロードする際に設定できる。でも、このデフォルト設定だと、ブラウザの横幅を狭めた時に動的にサイズが小さくなってくれなかった。(´･ω･｀)

レイアウトは、layout.cssで定義されている。min-widthでpxを指定するのではなく、%で指定することにした。余白を考慮して、全体の幅をwidth 100%; コンテンツを width 90%;とする。

    /*--------------------------------------------------------
    2カラムレイアウト
    --------------------------------------------------------*/
    
    .col2 #container,
    .col2 #top,
    .col2 #header,
    .col2 #global-nav,
    .col2 #main,
    .col2 #main-image,
    .col2 #footer,
    .col2 .copyright,
    .col2r #container,
    .col2r #top,
    .col2r #header,
    .col2r #global-nav,
    .col2r #main,
    .col2r #main-image,
    .col2r #footer,
    .col2r .copyright{
        width: 100%;
    /*
        min-width: 1200px;
    */
    }
    
    .col2 #top-in,
    .col2 #header-in,
    .col2 #global-nav-in,
    .col2 #main-in,
    .col2 #main-image-in,
    .col2 #footer-in,
    .col2 .copyright p,
    .col2r #top-in,
    .col2r #header-in,
    .col2r #global-nav-in,
    .col2r #main-in,
    .col2r #main-image-in,
    .col2r #footer-in,
    .col2r .copyright p{
        width: 90%;
    /*
        width: 1200px;
    */
        margin: auto;
    }
    

今日は、こんなところで。