---
author: admin
categories:
- 技術メモ
date: 2017-01-12T13:13:00+00:00
dsq_thread_id:
- 5.456586e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 1781
side:
- "y"
tags:
- fish
title: oh-my-fish は古い！fisherman で置き換えられる。
title_view:
- "y"
type: post
url: /archives/=6079
---

今まで、oh-my-fish を fish のパッケージ管理として利用してました。

-   [デフォルト設定で強力に便利！zsh から fish に乗り換えたまとめ |
    Futurismo](https://futurismo.biz/archives/6016)

しかし、fisherman を利用すれば、oh-my-fish
で利用してきた機能を置き換えることができることを知りました。

ということで、oh-my-fish は捨てて、これからは fisherman
一本で管理していくことにします。

置き換え例
==========

たとえば、

-   omf で hoge というプラグインを利用していた場合、fisherman で
    omf/hoge に置き換え可能.
-   omf で fuga というテーマを利用していた場合、fisherman で
    omf/theme-fuga に置き換え可能.

移行手順
========

以下のチケットにまとまっていました。

-   [📌📚📕 Migration instructions from oh-my-fish to fisherman? · Issue
    \#223 ·
    fisherman/fisherman](https://github.com/fisherman/fisherman/issues/223)

1.  fisherman のインストール

``` {.bash}
curl -Lo ~/.config/fish/functions/fisher.fish --create-dirs git.io/fisherman
```

1.  omf plugin を \~/.config/fish/fishfile に加えて fisher
    コマンドを叩く

加えるルールは以下のとおり

-   plugin xxxx を使っている場合は、oh-my-fish/plugin-xxxx
-   theme xxxx を使っている場合は、oh-my-fish/theme-xxxx

``` {.bash}
oh-my-fish/plugin-xxxx
oh-my-fish/theme-xxxx
```

そして、fisher コマンドを実行。

1.  oh-my-fish のアンインストール

``` {.bash}
omf destroy
```

トラブルシューティング
======================

oh-my-fihs/theme-default をインストールしたら、git\_is\_repo
という関数がないよと Warning がでた。

fiserman で、git\_util をインストールしたら、warning はでなくなった。

-   <https://github.com/fisherman/git_util>
