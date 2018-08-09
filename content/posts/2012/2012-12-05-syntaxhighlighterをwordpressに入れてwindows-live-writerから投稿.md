---
author: admin
categories:
- Wordpress
- 技術メモ
date: 2012-12-05T13:07:49+00:00
dsq_thread_id:
- 3.746657e+09
pvc_views:
- 2140
title: syntaxhighlighterをWordPressに入れてWindows Live Writerから投稿
type: post
url: /archives/=893
---

syntaxhighlighterとは、ブログでソースコードを綺麗に表示させるためのツール。   
WordPressには、syntaxhighlighterを利用するためのプラグインが多数ある。

  * syntaxhighlighter 
      * [https://code.google.com/p/syntaxhighlighter/][1] 

今回は、普段使っている Windows Live Writerのプラグイン   
『Windows Live Writer Plug-ins』   
から投稿して、ブログに表示させたかったので、いろいろ試してみた。

その結果、どれもWindows Live Writer Plug-insとはうまく連携してくれなかった。   
なので、プラグインではなくて、直接syntaxhighlighterを入れることにした。

以下のサイトが大変参考になった。

<a href="https://cre.main.jp/wp/archives/454" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://cre.main.jp/wp/archives/454" width="150" height="130" /></a> <a style="color: #0070c5" href="https://cre.main.jp/wp/archives/454" target="_blank">memo+ ≫ WordPressでSyntaxHighlighter for Windows Live Writerを使用する</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://cre.main.jp/wp/archives/454" />  <br style="clear: both" />

&#160;

### Windows Live Writer Plug-insのインストール

まだ、Windows Live Writer Plug-insを入れていない場合は、以下から手に入れる。

[https://plugins.live.com/writer/detail/syntaxhighlighter-for-windows-live-writer][2]

### syntaxhighlighterのダウンロードとインストール

以下からダウンロード。

[https://code.google.com/p/syntaxhighlighter/][1]

rarファイルを解凍すると、以下の3つが格納されている。

  * uncompressed
  * Scripts
  * Styles

uncompressedを削除して、残り２つをWordpressのテーマフォルダ配下にアップロードする。

### syntaxhighlighterの設定

WordPress画面を開いて、[外観] > [テーマの編集]を選択。

ヘッダの直前（ </head>の前）に以下のコードを追加する。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:42befccb-2636-40cd-a3ef-f61b821093ce" class="wlWriterEditableSmartContent">
  <pre name="code" class="php">&lt;archives/hp
wp_enqueue_style('SyntaxCss', get_bloginfo('template_url').'/dp.SyntaxHighlighter/Styles/SyntaxHighlighter.css');
 
wp_register_script('Core', get_bloginfo('template_url').'/dp.SyntaxHighlighter/Scripts/shCore.js');
wp_register_script('CSharp', get_bloginfo('template_url').'/dp.SyntaxHighlighter/Scripts/shBrushCSharp.js');
wp_register_script('BrushCss', get_bloginfo('template_url').'/dp.SyntaxHighlighter/Scripts/shBrushCss.js');
wp_register_script('BrushPhp', get_bloginfo('template_url').'/dp.SyntaxHighlighter/Scripts/shBrushPhp.js');
wp_register_script('BrushJava', get_bloginfo('template_url').'/dp.SyntaxHighlighter/Scripts/shBrushJava.js');
 
wp_enqueue_script('Core');
wp_enqueue_script('CSharp');
wp_enqueue_script('BrushCss');
wp_enqueue_script('BrushPhp');
wp_enqueue_script('BrushJava');
?&gt;
</pre>
</div>

以下の2つは記述必須。あとは、言語によって選択する。
    
  
ここでは、C#,CSS,PHP,JAVAを設定している。

ちなみに、ここで言語を選択しないと、表示は薄い灰色に表示される。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:877bf046-b73b-4742-89e9-846c3d9d5d12" class="wlWriterEditableSmartContent">
  <pre name="code" class="php">wp_register_script('Core', get_bloginfo('template_url').'/dp.SyntaxHighlighter/Scripts/shCore.js');</pre>
</div>

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:2b893b21-d66c-4589-bc83-3097bbffef59" class="wlWriterEditableSmartContent">
  <pre name="code" class="php">wp_enqueue_script('Core');</pre>
</div>

続けて、JavaScriptを書く。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:38692859-1e66-46cc-bbed-7dc980f36cde" class="wlWriterEditableSmartContent">
  <pre name="code" class="js">&lt;script type="text/javascript"&gt;
window.onload = function () {
    dp.SyntaxHighlighter.ClipboardSwf = 'wp-content/themes/wp/dp.SyntaxHighlighter/Scripts/clipboard.swf';
    dp.SyntaxHighlighter.HighlightAll('code');
}
&lt;/script&gt;
</pre>
</div>

dp.SyntaxHighlighter.ClipboardSwfに設定するパスはそれぞれの環境に合わせて変更。

これで、Windows Live Writer から投稿すると、Wordpressでコードか綺麗に表示されるはず。

 [1]: https://code.google.com/p/syntaxhighlighter/ "https://code.google.com/p/syntaxhighlighter/"
 [2]: https://plugins.live.com/writer/detail/syntaxhighlighter-for-windows-live-writer "https://plugins.live.com/writer/detail/syntaxhighlighter-for-windows-live-writer"