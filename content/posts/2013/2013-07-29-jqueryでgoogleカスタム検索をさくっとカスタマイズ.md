---
author: admin
categories:
- CSS
- HTML
- Wordpress
- 技術メモ
date: 2013-07-29T07:48:01+00:00
dsq_thread_id:
- 3.7245268e+09
excerpt: <!--:ja-->jQueryを使って、Googleカスタム検索をカスタマイズしました。<!--:--><!--:en-->I customized
  Google custom search with jQuery<!--:-->
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 2724
tags:
- jQuery
title: jQueryでGoogleカスタム検索をさくっとカスタマイズ
type: post
url: /archives/=1734
---

jQueryを使って、Googleカスタム検索をカスタマイズしました。

[<img src="https://lh5.googleusercontent.com/-vhqJybwGaY4/UfYajGPCMKI/AAAAAAAAAvE/bJwgY4qL6t4/s800/SnapCrab_NoName_2013-7-29_16-32-18_No-00.jpg" height="56" width="333" />][1]

検索窓にフォーカスしているときはメッセージは消す、フォーカスしていないときは、メッセージを表示するようにしました。

デフォルトのコードはこんな感じで取得できるると思います。

    <form action="https://www.google.co.jp/cse" id="cse-search-box">
      <div>
        <input type="hidden" name="cx" value="*****" />
        <input type="hidden" name="ie" value="UTF-8" />
        <input type="text" name="q" size="20" />
        <input type="submit" name="sa" value="検索" />
      </div>
    </form>
    
    <script type="text/javascript" src="https://www.google.co.jp/coop/cse/brand?form=cse-search-box&amp;lang=ja"></script>
    

ここで、type="text"に操作するためのclass を追加します。

    <input type="text" class="focus" name="q" size="20" />
    

jQueryのコードはこんな感じで書きます。

    $(function(){
         $(".focus").val("サイト内検索");
         $(".focus").focus(function(){
              if(this.value == "サイト内検索"){
                   $(this).val("").css("color","#f39");
              }
         });
         $(".focus").blur(function(){
              if(this.value == ""){
                   $(this).val("サイト内検索").css("color","#969696");
              }
         });
    });
    

最後に、デフォルトでの表示を灰色にするために、CSSに色の宣言をします。

    .focus{color: #969696}
    

jQueryでサクッとかけました。jQuery、便利ですねー。

#### 完成！

 [1]: https://picasaweb.google.com/lh/photo/s7xf9OyEVbhqtw4TNeV6tjyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite