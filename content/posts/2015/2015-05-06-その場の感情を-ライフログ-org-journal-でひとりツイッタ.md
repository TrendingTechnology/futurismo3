---
author: admin
categories:
- Emacs
- ライフログ
date: 2015-05-06T12:51:00+00:00
dsq_thread_id:
- 3.7411745e+09
pvc_views:
- 2519
tags:
- org-mode
title: その場の感情を ライフログ!! org-journal でひとりツイッターする
type: post
url: /archives/=3655
---

自分は、あまり twitter につぶやかない.

なぜなら、つぶやくとタイムラインが、ドロドロの鬱ったーにかわるので.

感情は、しかし、どこかに吐き出さないと、健康によくない.

そこで、その場の感情を即座に記録するための仕組みを org-journal
で実現したので紹介.

org-journal でできること
========================

org-journal は、Emacs から即座に、日記を書くための elisp.

<div data-theme="default" data-height="155" data-width="500" data-github="bastibe/org-journal" class="github-card"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>

-   <https://github.com/bastibe/org-journal>

できることは、

1.  ショートカット(C-c C-j)で journal.org を開く.
2.  日付を挿入する.
3.  感情を書き留める.
4.  org-journal を去る.

以下、自分の設定例.

``` {.commonlisp}
(require 'org-journal)

(setq org-journal-date-format "%x")
(setq org-journal-time-format "<%Y-%m-%d %R> ")
(setq org-journal-file-format "journal.org")
(setq org-journal-dir "~/gtd/journal/")
```

上記設定では、journal.org ファイルにどんどん書き込んでいくが、
日付ごとに記録するファイルをわけることも可能だ.

実は org-capture でもできる
===========================

これだけならば、org-capture でもできないことはない. org-journal
は、設定が org-capture に比べて特化している.

org-agenda で一日の振り返り
===========================

この機能の好きなところは、org-agenda との連携.

以下のようにタイムスタンプを挿入するように設定して、 journal.org を
agenda ファイル対象にすることで、 org-agenda view
につぶやきを載せることができる.

``` {.commonlisp}
(setq org-journal-time-format "<%Y-%m-%d %R> ")
```

![](./../img/2015-05-06-214842_717x169_scrot.png)

howm で過去ログを検索
=====================

howm テキストファイルを evernote のように管理するツール.

howm はデータをひとつのフォルダに保存するのだが、
このフォルダから、org-journal のフォルダにシンボリックリンク
をはることで、howm から org-journal 結果が検索できる.

howm には、過去のいろいろな情報を溜め込んでいるので、
過去に相談したくなったら、howm から org-journal が引けるのはうれしい.

<p style="font-size:32px">以上、Happy Hacking!!</p>


