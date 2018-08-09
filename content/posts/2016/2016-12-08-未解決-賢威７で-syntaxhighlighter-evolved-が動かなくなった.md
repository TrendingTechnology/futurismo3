---
author: admin
categories:
- Wordpress
- 技術メモ
date: 2016-12-08T12:06:00+00:00
dsq_thread_id:
- 5.364772e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 542
side:
- "y"
tags:
- 賢威
title: '[未解決] 賢威７で SyntaxHighlighter Evolved が動かなくなった'
title_view:
- "y"
type: post
url: /archives/=5915
---

賢威７で SyntaxHighlighter Evolved が動かなくなった。

この前まで動作していた気がしたのだが、気のせいか？

暫定対処
========

取り合えず、問い合わせフォームに質問を投げた。解答待ち。

　それまでは、以下で暫定対処中。base.css に以下を追記。

``` {.css}
pre{
        border:1px solid black;  /* 黒枠線 */
        background-color: #ccc;  /* 背景を灰色 */
        padding : 0px 10px;      /* 余白 */        
}
```

これで、&lt;pre&gt; \~ &lt;/pre&gt;
で囲まれたソースの背景が灰色になって、見栄えがよくなった。

なんとかならないものか？解決できたら更新します。

追記
====

質問の回答きた。

> お問い合わせいただいた件ですが、プラグインの動作については大変申し訳ございませんがサポートの対象外となります。
> 参考 URL のお返事の際は、css
> が衝突していたことが原因でしたが、今回の場合はサイトを確認したところ
> css が原因ではないように思われます。
> お手数ではございますが、プラグイン開発者様にお問い合わせいただいてご対応いただくか、異なるプラグインで代替してご対応いただければと思います。

そんなあ。。。。(´・ω・\`)
