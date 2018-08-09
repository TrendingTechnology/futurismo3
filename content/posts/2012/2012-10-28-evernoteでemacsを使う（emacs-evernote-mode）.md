---
author: admin
categories:
- Emacs
- 技術メモ
date: 2012-10-28T03:50:44+00:00
dsq_thread_id:
- 3.729765e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3270
tags:
- cygwin
- Evernote
title: EvernoteでEmacsを使う（emacs-evernote-mode）
type: post
url: /archives/=717
---

Evernote、いつも常用しているけれども、なにしろ

<span style="color: #ff0000; font-size: large;">エディタが使いにくい！</span>

毎日Emacsを使っている自分としては、是非Emacsの入力がしたいと思った。
  
毎度、Google先生にお伺いをたてたら、こんなツールを見つけたので、使ってみた。

その名も、emacs-evernote-mode（そのままの名前だぁ）

### emacs-evernote-modeのダウンロードとインストール方法

Windowsユーザなので、CygwinでEmacsを利用しています。
  
なので、ここではCygwinでのインストール方法で。

ダウンロードは以下のサイトから
  
[emacs-evernote-mode][1]

インストール方法と使い方の日本語訳は、以下のサイトから見ることができる（感謝）
  
[https://emacs-evernote-mode.googlecode.com/svn/branches/0\_21/doc/readme\_ja.html][2]

解凍したら、適当な場所において、おいたディレクトリで以下のコマンドを実行。

#### Rubyスクリプトインストール

[text]
  
ruby ruby/setup.rb
  
[/text]
  
ただし、注意が必要だ。
  
evernote-mode-0_41.zip では、バグが2つくらいあった。
  
下に書いたエラーメッセージがでたときは、Rubyスクリプトを手動で修正する必要がある。

#### evernote-mode.el をロードパスにコピーする

[text]
  
cp evernote-mode.el (load-path)
  
[/text]
  
（load-pathってなんだよって人は以下のサイト参照）
  
[<span style="color: #0066cc;">https://d.hatena.ne.jp/sandai/20120304/p2</span>][3]

#### evernote-mode設定を.emacs に追記

.emacsでもいいけれでも、自分の場合は<span style="text-align: left; widows: 2; text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; display: inline !important; font: 15px/22px arial, sans-sarif; white-space: normal; orphans: 2; float: none; color: #333344; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;"><span style="font-family: Arial;">~/.emacs.d/init.elファイルに書いた。</span></span>

[text]
  
(add-to-list &#8216;load-path &#8220;<your load path>&#8221;)
  
(require &#8216;evernote-mode)
  
(global-set-key &#8220;\C-cec&#8221; &#8216;evernote-create-note)
  
(global-set-key &#8220;\C-ceo&#8221; &#8216;evernote-open-note)
  
(global-set-key &#8220;\C-ces&#8221; &#8216;evernote-search-notes)
  
(global-set-key &#8220;\C-ceS&#8221; &#8216;evernote-do-saved-search)
  
(global-set-key &#8220;\C-cew&#8221; &#8216;evernote-write-note)
  
(global-set-key &#8220;\C-cep&#8221; &#8216;evernote-post-region)
  
(global-set-key &#8220;\C-ceb&#8221; &#8216;evernote-browser)
  
(setq evernote-username &#8220;USERNAME&#8221;) ; Evernote アカウント名
  
[/text]

### 使い方

動画で説明。
  
[https://www.youtube.com/embed/Z6yCFAcOyh0]

### evernote-modeのバグを手動修正しよう

evernote-mode-0_41.zip では、Cygwin環境で使おうとすると、バグがあるっぽい。
  
そのままでは、以下のエラーが出て使えなかった。
  
以下のサイトを参考にして、直接Rubyソースを修正し、再度 ruby setup.rbを実行するとできた。

#### バグ修正（その１）

> error in process sentinel: enclient.rb exited abnormally with code 1
  
> -e:1: syntax error, unexpected tINTEGER, expecting tSTRING\_CONTENT or tSTRING\_DBEG or tSTRING\_DVAR or tSTRING\_END
  
> :1: Use RbConfig instead of obsolete and deprecated Config.

<https://code.google.com/p/emacs-evernote-mode/source/detail?r=198>

#### バグ修正（その2)

> SSL_connect SYSCALL returned=5 errno=0 state=SSLv2/v3 read server hello A

<https://code.google.com/p/emacs-evernote-mode/issues/detail?id=16>

<https://code.google.com/p/emacs-evernote-mode/issues/detail?id=17>

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://code.google.com/p/emacs-evernote-mode/downloads/detail?name=evernote-mode-0_41.zip
 [2]: https://emacs-evernote-mode.googlecode.com/svn/branches/0_21/doc/readme_ja.html
 [3]: https://d.hatena.ne.jp/sandai/20120304/p2