---
author: admin
categories:
- Emacs
- 技術メモ
date: 2016-12-09T19:32:00+00:00
dsq_thread_id:
- 5.368363e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 623
side:
- "y"
title: Emacsで fcitx-anthy（Nicola)の調子が悪いときに試すこと
title_view:
- "y"
type: post
url: /archives/=5934
---

私は、Emacsで
日本語入力(親指シフト)をしていると、調子がわるいときがある。

-   入力結果の出力がやたらと遅い
-   打鍵しても、期待しない文字が入力される

なんとか解決方法はないかと、3時間頑張って探して、ようやく見つけた。

環境
----

-   Ubuntu 16.04
-   fcitx-anthy 4.2.9

解決方法
========

一旦別のアプリ（ターミナル、ブラウザ）で打鍵をしてから、Emacsに戻ってくる。

これで、解決できた。なにかのバグかな？これが判明するまでに、試行錯誤て3時間かかった。

こんなことで悩んでいるのは自分だけかもしれないけれども
