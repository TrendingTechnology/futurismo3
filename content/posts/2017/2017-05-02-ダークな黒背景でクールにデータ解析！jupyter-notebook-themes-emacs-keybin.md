---
author: admin
categories:
- 技術メモ
date: 2017-05-02T07:05:00+00:00
dsq_thread_id:
- 5.778482e+09
excerpt: Jupyter Notebook Themes & Emacs KeyBinding
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
- 1607
side:
- "y"
tags:
- Jupyter
title: ダークな黒背景でクールにデータ解析！Jupyter Notebook Themes & Emacs KeyBinding
title_view:
- "y"
type: post
url: /archives/=6306
---

最近、Emacs よりも Jupyter Notebook の使用率が高いのだけれども(?!)、
今朝 twitter の
タイムラインを眺めてたらこんなツイートが流れてきたので、飛びついた。

<blockquote class="twitter-tweet" data-cards="hidden" data-lang="ja"><p lang="ja" dir="ltr">最近、Jupyter Notebook を本格的に使い始めたけど jupyter themes を使ったらすごくいい感じになった。今のところお気に入りは jt -t monokai -f hack かな。MD のフォントだけ置き換えた。 <a href="https://t.co/x7PTYQ60gn">https://t.co/x7PTYQ60gn</a> <a href="https://t.co/oOm4gYHCTe">pic.twitter.com/oOm4gYHCTe</a></p>&mdash; aidiary (@sylvan5) <a href="https://twitter.com/sylvan5/status/859022989974585344">2017 年 5 月 1 日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

試してみたら、ものすごくクールだったので、スクショをとってみたのが以下。黒背景、メチャガチャクールだ。

![](./../img/2017-05-02-152410_980x543_scrot.png)

Jupyter Themes
==============

Jupyter Notebook を 黒背景にするには、Jupyter Themes という extentions
を使う。

-   [dunovank/jupyter-themes: Custom Jupyter Notebook
    Themes](https://github.com/dunovank/jupyter-themes)

インストールは pip から。

``` {.bash}
pip install jupyterthemes
```

これで、jt コマンドが利用出来るようになる。

テーマは以下のテーマがある。私の大好きな monokai
がある！！これは、うれしい！ 他にも solarized の Light と Dark がある。

``` {.bash}
$ jt -l
Available Themes: 
   oceans16
   chesterish
   grade3
   solarizedl
   monokai
   onedork
   solarized-light
```

テーマの適用には、-t &lt;theme&gt; をつけて jt を呼ぶ。

``` {.bash}
jt -t monokai
```

![](./../img/2017-05-02-152221_988x573_scrot.png)

フォルダはこんな感じ。

![](./../img/2017-05-02-152123_1057x647_scrot.png)

オプションに -N -T をつけると、ツールバーと ノート名を表示できる。

![](./../img/2017-05-02-152151_982x625_scrot.png)

私の最終的な設定は、以下にした。 code のフォントは
プログラミングに適していると言われている Ricty で有名な inconsolata。

``` {.bash}
jt -t monokai -f inconsolata -N -T 
```

追記
----

seaborn
の縦軸横軸の表示が、背景が黒だとなにもみえなくなった。以下で解決。

-   [Best way to display Seaborn/Matplotlib plots with a dark iPython
    Notebook profile - Stack
    Overflow](https://stackoverflow.com/questions/25451294/best-way-to-display-seaborn-matplotlib-plots-with-a-dark-ipython-notebook-profil)

``` {.python}
custom_style = {'axes.labelcolor': 'white',
                'xtick.color': 'white',
                'ytick.color': 'white'}
sns.set_style("darkgrid", rc=custom_style)
```

Emacs KeyBindings
=================

こうなったら、Emacs ライクに Jupyter Notebook をしようと思い、 Emacs
ライクにキーバインディングをする方法も調べてみた。以下の extentions
を入れる。

-   [rmcgibbo/jupyter-emacskeys: Emacs keybindings for Jupyter
    notebook](https://github.com/rmcgibbo/jupyter-emacskeys)

``` {.bash}
pip install jupyter-emacskeys
```

これで、コードを書くときに Emacs keyBindings
が使える、と思ったがここで一つ問題が。 Ctrl + n は Emacs では
下に移動に割当たっているのだけれども、
ブラウザでは新しいウィンドウを開くに割り当てられているので、使えない。

-   [Next line key · Issue \#3 ·
    rmcgibbo/jupyter-emacskeys](https://github.com/rmcgibbo/jupyter-emacskeys/issues/3)

これは、Ctrl + n で新しいウィンドウを開くのを無効にする firefox
プラグイン、 "Menu Wizard"を入れることで解決できた。

-   [Menu Wizard::Add-ons for
    Firefox](https://addons.mozilla.org/ja/firefox/addon/s3menu-wizard/)

このプラグイン、バグっているのか再起動すると、設定が消えるので、
ブラウザを立ち上げるたびに設定しないといけないのが難点。 Shift-Alt-M
で設定画面が開くのでそこで設定する。

さよなら Emacs
==============

これで Jupyter Notebook が markdown ではなく org-mode
でかければ最強なのだけれどもそんなマイナーなニーズには対応していない。

とはいえ、データサイエンティストを目指すには Emacs とはおさらばだ！！
