---
author: admin
categories:
- CSS
- Wordpress
- 技術メモ
date: 2014-11-23T15:29:00+00:00
dsq_thread_id:
- 3.765097e+09
excerpt: WordPress の埋め込み gist のスタイルシート (CSS) の設定メモ
pvc_views:
- 1222
title: WordPress の埋め込み gist のスタイルシート (CSS) の設定メモ
type: post
url: /archives/=2739
---

はじめに
========

最近すごく気になってたのだが, ブログでの gist の表示が崩れまくっている
ので, 直し方を調べたのでメモする.

以下の過去記事も参照.

-   [賢威 6 で gist が表示できないときの解決方法 |
    Futurismo](https://futurismo.biz/archives/1633)

CSS の調べ方
============

要素を調べる
------------

ブラウザのツールを利用して, CSS の要素を調べる.

-   Chrome ならばディベロッパーツール,
-   firefox ならば右クリックから要素を検索

編集画面で該当箇所の css に辿り着いたら, そこを編集する. すると,
リアルタイムで変更が確認できる.

class="gist" class"gist-file" で囲まれている
--------------------------------------------

調べてみると, gist では, &lt;div class="gist"&gt;
などで囲まれていることがわかる.

以下のような StyleSheet に追加する.

``` {.css}
/* for gist */
.gist {
    font-size: 16px;
}
.gist-file div{
    background-color: black!important;
}

.gist-file .pl-vo{
    color: white!important;
}

.gist-file .highlight{
    color: white!important;
}
```

BookMarks
=========

-   [How To Style Github Gist Code Embeds in
    WordPress](https://wpsites.net/tools/how-to-style-github-gist-code-embeds-in-wordpress/)

