---
author: admin
categories:
- ハッキング
date: 2014-01-10T12:56:32+00:00
dsq_thread_id:
- 3.75916e+09
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
- 1939
side:
- "y"
tags:
- ShellScript
- taskwarrior
title: taskwarriorでタスクにメモを書くシェルスクリプト
title_view:
- "y"
type: post
url: /archives/=2124
---

最近は、タスク管理のために taskwarriorを利用しています。

タスクに対してメモをつけたいと思い、メモする方法を調べました。簡単にメモするならば、以下で注釈を追加

    task 20 annotate hoehoge
    

もっとがっつり書きたいと調べたところ、以下のような記事を発見。

  * [odis code: Organizing my world with taskwarrior and org-mode][1]

スクリプトを起動してメモを作成する方法です。さっそく参考にしました。

${HOME}/Documents/wiki/tasks/commentsにメモ保存用ディレクトリ作成

    mkdir -p ${HOME}/Documents/wiki/tasks/comments
    

以下のようなスクリプトを作成



task idを指定してコマンドを実行すると、Descriptionに c が追加されて、メモをエディタで開けます。

    $ taskcomments 20

 [1]: https://odiscode.blogspot.jp/2012/02/organizing-my-world-with-taskwarrior.html