---
author: admin
categories:
- Emacs
date: 2015-05-04T17:03:00+00:00
dsq_thread_id:
- 3.7356442e+09
follow:
- follow
index:
- index
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 3680
side:
- def
sub:
- def
tags:
- org-mode
title: ボクの考えた Emacs org-mode による TaskChute の実施方法
type: post
url: /archives/=3631
---

![](./../img/alarm-clock-590383_640.jpg)

最近、自分のタスク管理がズタボロである.

数年前は、ライフハックに熱をあげてバリバリ頑張っていたのだが、
いまやタスクに終われてシクハックに熱をあげているという状態.

具体的には、週末に MOOC の課題に追われてしまう.
本来ならば、毎日コツコツと勉強していればよいのだが、
平日に関係ない割り込みのタスクをしてまう結果、週末にバタバタする.

そこで、自分のタスク管理について、見直してみることにした.

なにが問題か？ 課題はなにか？
=============================

-   どのくらい自由な時間があるのか
-   どのくらいのタスクをかかえているのか

この 2 つを把握していないところが問題だ.

譬えれば、デパートに買い物にいったものの、
自分がいくらお財布にお金を持っているのか知らない状態.
気づけば、買い物をしすぎて、支払いができなくなっていた...

さらに、問題点を深堀りすると、
一日の仕事量は感覚的に分かるのだけれども、 一週間くらいの
**長期間での空き時間とタスクの関係** がわからない.

なので、\*1 週間の空き時間とタスクの量を見積もること\* が今回の課題.

そこでタスクシュートだ!
=======================

作業量を見積もるためのタスク管理手法について、
タスクシュートがつかえそうだった.

タスクシュートは、やることをすべて洗い出して、
一列に並べて処理していくツール. 詳しくは、以下.

-   [タスク管理ツール・ TaskChute2（PayPal
    決済）](https://shigotano.info/mbr/taskchute2/paypal.php)

今回は、みんな大好き？Emacs org-mode でこれらをどう実現するかを考えた.

org-mode による実現方法
=======================

時間を見積もる
--------------

org-mode には、時間を見積もる機能があるので、これを利用する.

アジェンダビューから C-c C-x C-c で カラムビューを起動して、
閲覧、編集をする.

![](./../img/2015-05-05-005331_751x165_scrot.png)

### カラムビューの設定

以下、カラムビューのための基本的な設定.

``` {.commonlisp}
; global Effort estimate values
(setq org-global-properties (quote ((
      "Effort_ALL" . "00:05 00:10 00:15 00:30 01:00 01:30 02:00 02:30 03:00"))))
;; カラムビューで表示する項目
;; Column の書式は以下.
;; [https://orgmode.org/manual/Column-attributes.html#Column-attributes
(setq org-columns-default-format "%50ITEM(Task) %10Effort(Effort){:} %10CLOCKSUM_T(Clock)")
```

以下の設定を書くと、見積り時間を合計して表示してくれる.

``` {.commonlisp}
(setq org-agenda-columns-add-appointments-to-effort-sum t)
```

### 見積りのタイミングは一週間に一度

週のはじめに、一週間分のタスクの洗い出しと見積りを実施する.

自分は、その時にタスクに next タグをつけることによって、 agenda view
でフィルタリングできるようにした.

agenda-view の設定は以下.

``` {.commonlisp}
(setq org-agenda-custom-commands 
      '(
       ("n" "Next Action List"
        tags-todo "next"
        ((org-agenda-prefix-format " %6e ")))))
```

### その日のタスクがいつ終わるかをみつもる

agenda-view で、今日のタスクだけを絞り込み、
カラムビューをみることによって、あと何時間タスクの完了にかかるかを
調べることができる.

agenda-view の設定は以下.ここでは、アジェンダを開くと即座にカラム
に移行させている.

``` {.commonlisp}
(setq org-agenda-custom-commands 
      '(
       ("c" ""
        tags-todo "SCHEDULED=\"<+0d>\"" 
        ((org-agenda-overriding-header "TaskChute TODO")
         (org-agenda-overriding-columns-format "%50ITEM(Task) %10Effort(Effort){:}")
         (org-agenda-view-columns-initially t)))))
```

時間の余裕を把握する
--------------------

もともとの課題の解決のために以下のような表を作成した.

  Day   Free Time   Amount time   Effort   Comment
  ----- ----------- ------------- -------- ---------
  Sat   12                                 
  Sun   12                                 
  Mon   0           46                     GW
  Tsu   12          34                     GW
  Wed   12          22                     GW
  Thu   5           17                     
  Fri   5           12                     

-   どのくらい自由な時間があるのか
-   どのくらいのタスクをかかえているのか

ということをこの表で確認する. どのくらいのタスクというところを、
先ほどの effort の合計見積りの値からもとめる.

時間帯を決める
--------------

タスクシュートには、時間帯という考え方がある.
その時間帯に実施するタスクを決めることによって、
タスク実施の強制力がかかるというもの.

org-mode では、priority の機能によって実現することにした.

-   A: 04:00 - 07:00
-   B: 07:00 - 10:00
-   C: 10:00 - 13:00
-   D: 13:00 - 16:00
-   E: 16:00 - 19:00
-   F: 19:00 - 22:00
-   G: 22:00 - 25:00

``` {.commonlisp}
(setq org-highest-priority ?A)
(setq org-lowest-priority ?G)
(setq org-default-priority ?G)
```

時間を計測する
--------------

時間計測は、org-mode のデフォルト機能を利用.

計測結果もまた、agenda view でみることができる.
見積りと比較することで、見積りの甘さをチェック.

さらに、agenda view で v c をおすと、
見積りと実績の差分を強調して表示してくれたりする.

![](./../img/2015-05-05-015338_767x392_scrot.png)

おわりに
========

歴史は繰り返す、ということを書く.

思い返せば、3 年前の GW に、Outlook でタスクシュートをしようとしていた.
3 年経った今、Emacs によるタスクシュートに挑戦している.

なんだか、同じところをグルグル回っている気がするよ.

-   [Outlook でタスクシュ−ト |
    Futurismo](https://futurismo.biz/archives/70)
