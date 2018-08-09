---
author: admin
categories:
- Emacs
date: 2013-05-12T06:03:09+00:00
dsq_thread_id:
- 3.6998528e+09
pvc_views:
- 3256
title: Emacsの自動インストールを助けるツール 【auto-install】
type: post
url: /archives/=1323
---

### はじめに

EmacsはElispをインストールすることによって、どんどんパワーアップできるのが魅力だ。Elipsをつかうためには、ロードパスの通ったディレクトリで以下を実行すればよい。

$ curl -O [Elipsが置いてあるURL]

emacswikiなんかをURLに指定すると、そこからElispをダウンロードして使えるようになる。お手軽！

しかし、拡張機能のインストールをもっと手軽に実行できるツールがある。それが、

  * auto-install 

だ。

### auto-install

#### auto-installのインストールと設定

以下のコマンドでまずは、auto-installをインストール。-O は大文字のオーだ。

$ curl -O <https://www.emacswiki.org/emacs/download/auto-install.el>

次に、設定を.emacsに記入する。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:ba2fe9fa-944f-4816-9834-e4b303d1e35b" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">; ------------------------------------------------------------------------
; auto-install
; https://www.emacswiki.org/emacs/download/auto-install.el
; ------------------------------------------------------------------------
(when(require 'auto-install nil t)
  ;;インストールディレクトリを設定。.emacs.d/elispに入れる。
  (setq auto-install-directory "~/.emacs.d/elisp/")
  ;;EmacsWikiに登録されているelispの名前を取得する
  (auto-install-update-emacswiki-package-name t)
  ;;必要であればプロキシの設定を行う
  ;;(setq url-proxy-services '(("http" . "hogehoge")))
  ;;install-elispの関数を利用可能にする
  (auto-install-compatibility-setup))
</pre>
</div>

Emacs再起動して設定を反映する。

#### auto-installの使い方

以下のコマンドがある。

<ul style="box-sizing: border-box; text-align: left; text-transform: none; background-color: rgb(255,255,255); text-indent: 0px; letter-spacing: 0px; font: 14px/16px verdana, osaka, sans-serif; white-space: normal; color: rgb(0,0,0); word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px">
  <li style="box-sizing: border-box">
    M-x install-elisp RET&#160; URLから取得
  </li>
  <li style="box-sizing: border-box">
    M-x install-elisp-from-emacswiki EmacsWikiから取得
  </li>
  <li style="box-sizing: border-box">
    M-x install-elisp-from-gist → gistIDから取得
  </li>
</ul>

ここでは、xml-rpc.elを取得する。M-x install-elisp RETして、URLを入力。

[<font color="#0066cc">https://launchpadlibrarian.net/40270196/xml-rpc.el</font>][1]

ダウンロードしたら、C-c, C-c でバイトコンパイルする。そうすることで、速くElispを読み込むことができるようになる。Emacsを再起動することなく、Elispが使用可能になっている。

ダウンロードからバイトコンパイルまでが、スムーズにこなせるのがいいですね～。

[https://www.youtube.com/embed/bYRAOaQYCWQ?rel=0]

 [1]: https://launchpadlibrarian.net/40270196/xml-rpc.el