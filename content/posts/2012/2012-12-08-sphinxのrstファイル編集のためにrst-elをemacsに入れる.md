---
author: admin
categories:
- Emacs
- 技術メモ
date: 2012-12-08T12:38:04+00:00
dsq_thread_id:
- 3.735906e+09
pdrp_attributionLocation:
- end
pvc_views:
- 2830
tags:
- Sphinx
title: SphinxのRSTファイル編集のためにrst.elをemacsに入れる
type: post
url: /archives/=910
---

せっかく、EmacsでRSTファイルを編集するのだから、Lispを使いたいもの。
  
というわけで、今日はRSTファイル用のEmacsモード

<span style="font-size: large;">rst-mode</span>

を試してみる。

### rst.elをemacsに入れる

以下のHPをrst.elという名前で保存する。

[rst.el][1]

これをload-pathの通ったところに置く。
  
続いて、以下の行を.emacsに追加。
  
（自分の場合は~/.emacs.d/init.elファイルに書いた）

<div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:e0a173de-9ebf-4e60-a8f7-af4fd47017ff" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c">;; rst.elを読み込み
(require 'rst)
;; *.rst, *.restファイルをrst-modeでOpen
(setq auto-mode-alist
      (append '(("\\.rst$" . rst-mode)
                ("\\.rest$" . rst-mode)
                ) auto-mode-alist))</pre>
</div>

これで、キーバインドが使えるようになった。

### rst-modeのキーバインド

rst-modeのキーバインドは以下のURLから。

  * [https://docutils.sourceforge.net/docs/user/emacs.html][2]
  * [emacs の rest-mode のバインディング &#8211; 科学と非科学の迷宮][3]

とりあえず、よく使いそうなものを抜粋。

<table width="495" border="1" cellspacing="0" cellpadding="2">
  <tr>
    <td valign="top" width="200">
      コメントアウト
    </td>
    
    <td valign="top" width="293">
      （リージョン指定）M-x comment-region
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="200">
      箇条書き
    </td>
    
    <td valign="top" width="293">
      （リージョン指定）C-c,C-b
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="200">
      見出しレベル変更
    </td>
    
    <td valign="top" width="293">
      C-c,C-a,C-a
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="200">
      右にインデント
    </td>
    
    <td valign="top" width="293">
      C-c,C-r,<tab>
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="200">
      |を入れる
    </td>
    
    <td valign="top" width="293">
      C-c,C-d
    </td>
  </tr>
</table>

&nbsp;

ちなみに、いろんなページに書かれているキーバインドは、自分の環境(Windows Cygwin上のEmacs)では動作しなかった。キーバインドが変わったぽい。

実行すると、下の方に別のコマンドを使ってくださいと説明が出るので、そっちで実行するとよい。もしくは、M-x (関数名)でいける。関数名はこのサイトで調べた。

  * [emacs の rest-mode のバインディング &#8211; 科学と非科学の迷宮][3]

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://docutils.sourceforge.net/tools/editors/emacs/rst.el
 [2]: https://docutils.sourceforge.net/docs/user/emacs.html "https://docutils.sourceforge.net/docs/user/emacs.html"
 [3]: https://d.hatena.ne.jp/shiumachi/20111221/1324461243