---
author: admin
categories:
- 技術メモ
date: 2017-01-12T15:23:00+00:00
dsq_thread_id:
- 5.4569016e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 988
side:
- "y"
tags:
- fish
- peco
title: ghq で管理しているリポジトリを peco で選択して、gh-open で開く fish プラグイン
title_view:
- "y"
type: post
url: /archives/=6082
---

peco, ghq, gh-open の組み合わせが便利。

ghq で管理しているリポジトリを peco で選択して、gh-open で開く。

-   [peco、ghq、gh-open の組み合わせが捗る - Webtech
    Walker](https://webtech-walker.com/archive/2014/06/peco-ghq-gh-open.html)
-   [nyagos で ghq と gh-open を peco ってつかいたかった -
    Qiita](https://qiita.com/JugnautOnishi/items/f55058c2f6669a18076a)

これを、fish に移植した。リポジトリは以下。

<div class="github-card" data-github="tsu-nera/fish-peco_open_gh_repository" data-width="400" data-height="" data-theme="default"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>

-   <https://github.com/tsu-nera/fish-peco_open_gh_repository>

あらかじめ、

-   <https://github.com/motemen/ghq>
-   <https://github.com/typester/gh-open>

をインストールしておいて, 以下でインストールできる。

``` {.bash}
fisher tsu-nera/fish-peco_open_gh_repository
```
