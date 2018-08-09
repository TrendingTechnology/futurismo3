---
author: admin
categories:
- Emacs
- Wordpress
date: 2017-06-18T16:51:00+00:00
dsq_thread_id:
- 5.9221463e+09
excerpt: MathJax を使って WordPress に org2blog で数式ありの投稿をする
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 550
side:
- "y"
tags:
- org-mode
title: MathJax を使って WordPress に org2blog で数式ありの投稿をする
title_view:
- "y"
type: post
url: /archives/=6517
---

このブログは、org2blog というライブラリを使って、 Emacs org-mode
でかかれた文章を HTML に変換して投稿している。

今回、org-mode から HTML へ変換した文章中で 数式を扱う方法を調べてみた。

MathJax をつかう
================

MathJax とは、javascript でかかれた 数式を表示するためのライブラリ。
Latex なみの数式表現が扱えるようになる。

-   <https://www.mathjax.org/>
-   <https://docs.mathjax.org/en/latest/mathjax.html>
-   [MathJax - Wikipedia](https://ja.wikipedia.org/wiki/MathJax)

すべてのブラウザで動作し、表示するクライアント側での設定はいらない。

さらに、MathJax のファイル群のインストールは必要ない。

MathJax は、コンテンツデリバリネットワーク(Contents Delivery
Network、CDN)で公開・配信されているので、 JavaScript
ライブラリをダウンロードして、サーバーにアップロードといった作業は必要はないのである。

MathJax を使用するには、&lt;html&gt;...&lt;/html&gt;
タグの中に以下を書く。

``` {.text}
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
```

&lt;body&gt;...&lt;/body&gt; の中で、MathJax
の記法(MathML、LaTeX、ASCIIMathML)を使って数式を書くと、
数式がレンダリングされる。

org-mode で MathJax をつかう
============================

org-mode は MathJax にデフォルトで対応しているようだ(version. 9.0.5)

なので、org-mode の文章中に 数式を 書いて、org-export で HTML 形式で
export すればよい。

これに今まで気づかなかったのは、自分の環境では、\#+OPTIONS: TeX:nil
を指定していたから。 ここは、Tex t でなければいけない。

Default の設定だと参照する MathJax の version
が古いらしく、以下の設定で最新が使える。

-   [Yet Another Org-Mode
    Configuration](https://www.i3s.unice.fr/~malapert/org/tips/emacs_orgmode.html)

``` {.commonlisp .rundoc-block rundoc-language="emacs-lisp" rundoc-tangle="yes"}
(setf org-html-mathjax-options
      '((path "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML")
        (scale "100") 
        (align "center") 
        (indent "2em")
        (mathml nil))
      )
(setf org-html-mathjax-template
      "<script type=\"text/javascript\" src=\"%PATH\"></script>")
```

org2blog は、html 形式に org-mode の文章を変換してから、WordPress
にアップロードする。 org2blog で WordPress に投稿すれば、WordPress
上でも数式が表示される。

Example
=======

`\[〜\]` で囲んで数式を表示
---------------------------

``` {.text}
\[f(a)= \frac{1}{2\pi i}\oint_{\Gamma} \frac{f(z)}{z-a}dz\]
```

$$f(a)= \frac{1}{2\pi i}\oint_{\Gamma} \frac{f(z)}{z-a}dz$$

`\(〜\)` で囲んで本文中に表示
-----------------------------

`\(〜\)` で囲んで、本文中に$a$を表示。

参考
====

あとは、Latex 記法を覚えるだけだ。（これが一番大変）

-   [Mathematics in a Blog Post |
    Irreal](https://irreal.org/blog/?p=3018) ... org2blog についての解説
-   [Easy Copy MathJax](https://easy-copy-mathjax.xxxx7.com/) ...
    記法が列挙されている。
-   [MathJax の使い方](https://genkuroki.web.fc2.com/#preview) ...
    MathJax の詳しい解説。
