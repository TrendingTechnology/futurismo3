---
author: admin
categories:
- Emacs
- 技術メモ
date: 2014-01-11T08:10:31+00:00
dsq_thread_id:
- 3.705136e+09
excerpt: Emacsで Markdown記述環境を整えたので、その作業メモです
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
- 9510
side:
- "y"
tags:
- markdown
title: EmacsでMarkdown記法での執筆環境を整えた
title_view:
- "y"
type: post
url: /archives/=2137
---

ブログはmarkdown記法で作成して、HTMLに変換してwordprssに投稿しています。

Emacsで Markdown記述環境を整えたので、その作業メモです。Emacs で markdownモードを利用するには、emacs-markdown.elを利用します。公式サイトは以下。

  * [Emacs Markdown Mode][1]

以下のサイトを参考にしました。ありがとうございます。

  * [Windows環境のEmacsでマークダウンモード(markdown-mode.el) &#8211; Qiita [キータ]][2]
  * [Emacsでmarkdown-modeを使用する &#8211; kurobaraのブログ][3]
  * [フクロウの雪かき (beta) | Emacsのmarkdown-modeを使ってみる][4]

### 導入手順

以下から emacs-markdown.elを入手して、ロードパスの通ったところへ配置。

     wget https://jblevins.org/projects/markdown-mode/markdown-mode.el
    

init.elに以下を記述

    (autoload 'markdown-mode "markdown-mode.el" "Major mode for editing Markdown files" t)
    

.mdと書いてあるファイルをmarkkdownモードで起動するように関連付ける

    (add-to-list 'auto-mode-alist '("\\.md\\'" . markdown-mode))
    

### 色の変更

色が気持ち悪い場合は、

M-x list-face-displayをでfaceの設定を起動して修正。

[minttyとemacsで、黒背景で青が見にくい場合の対策][5]も参考のこと。

### HTML形式に変換する

MarkdownでかかれたものをHTMLに変換するには、markdown.plを利用する。

[Daring Fireball: Markdown][6]からmarkdown.plをダウンロードしてパスの通った場所ち配置。ここでは、/usr/local/binへ。名前もMarkdown.plから markdownへ変更。

    cd /usr/local/bin
    sudo mv '/home/tsu-nera/Downloads/Markdown.pl' markdown
    

### プレビュー表示

C-c C-c m でバッファにプレビューを表示できます。
  
C-c C-c p でブラウザにプレビューを表示できます。

command not found: markdownと出る場合は、Markdown.plがうまく動いていない。

    zsh:1: command not found: markdown
    

その他コマンドは、[公式サイトのUsage][1]を参照。

 [1]: https://jblevins.org/projects/markdown-mode/
 [2]: https://qiita.com/umeneri/items/8824907d50e3108481b3
 [3]: https://moonstruckdrops.github.io/blog/2013/03/24/markdown-mode/
 [4]: https://blog.s-amemiya.com/development/emacs%E3%81%AEmarkdown-mode%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B/
 [5]: https://futurismo.biz/archives/1322
 [6]: https://daringfireball.net/projects/markdown/