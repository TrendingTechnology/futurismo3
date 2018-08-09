---
author: admin
categories:
- Emacs
date: 2016-12-10T18:16:00+00:00
dsq_thread_id:
- 5.3704474e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 850
side:
- "y"
title: Emacs で自分の信念を確認する M-x cookie
title_view:
- "y"
type: post
url: /archives/=5938
---

成功とはなにか？どのように成功するか？最近、考えに耽っている.以下の記事の続編。

-   [成功とはなにかを定義した |
    Futurismo](https://futurismo.biz/archives/5849)
-   [ウォートン・スクールの本当の成功の授業を読んだ |
    Futurismo](https://futurismo.biz/archives/5875)

どのように成功するか？
======================

ウォートン・スクールの本当の成功の授業を読み終えた。https://amzn.to/2hpLUsO

どのように成功するか？以下のことを常にこころにとめて生きることにした。

自分の信念
----------

``` {.text}
- 小さいことを積み重ねることが、 とんでもないところへ行くただひとつの道 
- スピードよりも着実な理解を優先する 
- やる気がでないときは勉強する意味を考える 
- 達成よりも学習の過程を重視する 
- 屈辱をモチベーションに変える 
- この世で目標を達成するために与えられた時間には限りがある 
- 他人と自分を比較しない、自分は必ず目標を達成できる。 自分を信じること 
- GRIT(やり抜く力） を身につける
  才能は努力で克服できる 
  成長思考−努力は必ず報われると信じる 
  興味をもつ、練習を続ける、目的をもつ、希望を持つ
```

cookie について
===============

Emacs から、信念を確認したいと思うのは自分だけではないはずだ？

というわけで、Emacs から確認してみる。

M-x cookie というコマンドがある。これを使うと、cookie-file
で指定されたファイルにかいてある行をランダムにとりだすことができる。

設定例を示そう。

``` {.commonlisp}
(setq cookie-file "~/.emacs.d/policy.txt")
(global-set-key (kbd "C-x C-,") 'cookie)
```

policy.txt のなかみは fortune 形式というもので書く必要がある。

``` {.text}
Policy
%
小さいことを積み重ねることが, とんでもないところへ行くただひとつの道
%
スピードよりも着実な理解を優先する
%
やる気がでないときは勉強する意味を考える
%
達成よりも学習の過程を重視する
%
屈辱をモチベーションに変える
%
この世で目標を達成するために与えられた時間には限りがある
%
他人と自分を比較しない, 自分は必ず目標を達成できる. 自分を信じるこ
%
才能は努力で克服できる
%
成長思考..努力は必ず報われると信じる
%
興味をもつ, 練習を続ける, 目的をもつ, 希望を持つ 
%
```

これで、"C-x C-,"を押すと、名言が見られる。

hydra と連携して、連続で信念をみる
==================================

hydra を使うと、連続で信念を次から次へと出すことができる。

-   <https://github.com/abo-abo/hydra>

``` {.commonlisp}
(defhydra hydra-meigen (global-map "C-x ,")
  "meigen"
  ("," cookie "meigen"))
```

他の名言集もいっしょに
======================

信念の他に名言集もみたい。最終的には、以下のように設定している。

名言集 meigen.txt
-----------------

``` {.text}
名言
%
苦悩を抜けて歓喜へ ... ベートーベン
%
志を立てて以って万事の源と為す ... 吉田松蔭
%
高みに向かって努力を続けることは, 決して無駄ではない ... ニーチェ
%
普通の奴らの上を行け ... ポール・グレアム
%
克己凌雲 ... tsu-nera
%
```

設定例
------

``` {.commonlisp}
(defun set-my-meigen ()
  (interactive) (setq cookie-file   "~/.emacs.d/meigen/meigen.txt"))
(defun set-my-policy ()
  (interactive) (setq cookie-file "~/.emacs.d/meigen/policy.txt"))

(setq cookie-file "~/.emacs.d/meigen/policy.txt")
(defhydra hydra-meigen (global-map "C-x ,")
  "meigen"
  ("," cookie "meigen")
  ("m" set-my-meigen "my-meigen")
  ("p" set-my-policy "my-policy"))
```

![](./../img/2016-12-11-031324_489x61_scrot.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/3qfet8vJ17Q" frameborder="0" allowfullscreen></iframe>

