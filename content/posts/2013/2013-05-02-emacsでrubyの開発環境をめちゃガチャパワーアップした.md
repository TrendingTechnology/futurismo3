---
title: EmacsでRubyの開発環境をめちゃガチャパワーアップしたまとめShow my Ruby development environment with Emacs
author: admin
type: post
date: 2013-05-02T01:42:55+00:00
excerpt: "<!--:ja-->EmacsでRubyの開発環境をパワーアップしたので、導入したものをまとめてみました。<!--:--><!--:en-->I'll introduce what I've tried cited with many sites I referenced.<!--:-->"
draft: true
private: true
url: /archives/=1295
pvc_views:
  - 1575
page_layout:
  - col2
pdrp_attributionLocation:
  - end
sub:
  - def
side:
  - def
index:
  - index
follow:
  - follow
categories:
  - Emacs
  - Ruby

---
<!--:ja-->記事は移行しました。

  * [EmacsでRubyの開発環境をさらにめちゃガチャパワーアップしたまとめ][1]

<!--:-->

<!--:en-->Rubyを勉強している。開発環境を整えようとおもったが、普段よく使っているEclipseを出すにはスクリプト言語は大げさだ。スクリプト言語はコンソール端末で書くに限る。というわけで、Emacs使いなあたしとしては、EmacsでのRuby環境を整えようとおもった。

いろんなサイトを参考にしつつ、導入したものを列挙していく。

#### 事前準備

Ruby関連のelispをまとめるために、新しいディレクトリを作成して、load-pathに追加しておく。

### ruby-mode

まずはともあれ、Emacsのruby-modeを使う。ruby-mode は Ruby ソースの中に入ってる。Rubyを配布サイトからダウンロードして、解凍する。

<https://www.ruby-lang.org/ja/downloads/>

ruby/misc ディレクトリにある Emacs Lisp ファイル（.*.el）をload-pathが通ったディレクトリにコピーする。

次に、.emacsの設定。拡張子.rbと接頭語Capfile,GemfileをRubyファイルと認識させる。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:6830ac31-7b49-40ee-abc5-b51178297686" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c:nogutter">(autoload 'ruby-mode "ruby-mode"
  "Mode for editing ruby source files" t)
(add-to-list 'auto-mode-alist '("\\.rb$" . ruby-mode))
(add-to-list 'auto-mode-alist '("Capfile$" . ruby-mode))
(add-to-list 'auto-mode-alist '("Gemfile$" . ruby-mode))</pre>
</div>

### ruby-electric

ruby-electricはかっこやdo endなどの対応関係を自動で補正してくれるらしい。一応入れておく。これもRuby ソースファイルにいっしょに入っていた。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:1f6ee7ce-ecf9-4482-96cb-20a48ee03e66" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c:nogutter">(require 'ruby-electric)
(add-hook 'ruby-mode-hook '(lambda () (ruby-electric-mode t)))
(setq ruby-electric-expand-delimiters-list nil)</pre>
</div>

  * <https://github.com/qoobaa/ruby-electric>

### ruby-block

ruby-blockを導入すると、end に対応する行をハイライトしてくれます。以下からダウンロードして、load-pathに配置。設定を追加。

[<span style="color: #0066cc;">https://www.emacswiki.org/cgi-bin/wiki/ruby-block.el</span>][2]

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:6724a1b2-707b-41cb-870a-ace05ed53fda" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c:nogutter">;;; ruby-block.el --- highlight matching block
(require 'ruby-block)
(ruby-block-mode t)
(setq ruby-block-highlight-toggle t)</pre>
</div>

### rcodetools( xmpfilter )

rcodertoolsとは、Ruby開発のためのツール群。以下のような機能を有している。

>   * xmpfilter: Test::Unit assert\* / RSpec should\* 自動生成、コード注釈
>   * rct-complete: 高精度メソッド名・クラス名・定数名等補完
>   * rct-doc: ドキュメント参照・コードナビゲーター
>   * rct-meth-args: 高精度メソッド情報リスト、TAGS ファイル作成
>   * rct-fork: Rails 等重いライブラリを予めロードし、補完を高速化する（サーバ）
>   * rct-fork-client: rct-fork サーバが保持する状態から Ruby スクリプトを実行する
>   * ruby-toggle-file: テストスクリプトと実装スクリプトを切り換える
>   * rbtest: 小規模スクリプトのための埋め込み Test::Unit
> 
> （引用元 [<span style="color: #0066cc;">https://d.hatena.ne.jp/keyword/rcodetools</span>][3])

まずは、rcodertoolsをダウンロードする。gemコマンドで入る。

$ gem install rcodetools

gem environmentコマンドでインストールされた場所を調べて、rcodetools.elをload-pathが通った場所にコピーする。

$ gem environment

$ cp /usr/lib/ruby/gems/1.9.1/gems/rcodetools-0.8.5.0/rcodetools.el .

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:b52a905a-1008-4803-89e5-ca884bff8922" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c:nogutter">;; rcodetools
(require 'rcodetools)
(setq rct-find-tag-if-available nil)
(defun ruby-mode-hook-rcodetools ()
  (define-key ruby-mode-map "\M-\C-i" 'rct-complete-symbol)
  (define-key ruby-mode-map "\C-c\C-t" 'ruby-toggle-buffer)
  (define-key ruby-mode-map "\C-c\C-d" 'xmp)
  (define-key ruby-mode-map "\C-c\C-f" 'rct-ri))
(add-hook 'ruby-mode-hook 'ruby-mode-hook-rcodetools)

(require 'anything-rcodetools)
(setq rct-get-all-methods-command "PAGER=cat fri -l")
;; See docs
(define-key anything-map [(control ?;)] 'anything-execute-persistent-action)</pre>
</div>

&nbsp;

xmprilterを使うとRuby コードの行末に「# =>」を入れて xmpfilter を実行すると，その行の返り値を見ることができる。

rct-completeを使うと、コードの自動補完が使える。

### SmartCompile

SmaprtCompleを入れることで、Emacs編集中に&#8221;C+c, C+c&#8221;でRubyを実行することができます。以下からダウンロードして、load-path配下に置きます。.emacsにも設定を追加します。

<https://www.emacswiki.org/emacs/download/smart-compile.el>

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:58dff2d8-952d-4e22-8c39-bf74664e7639" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c:nogutter">;; smart-compile
(require 'smart-compile)
(define-key ruby-mode-map (kbd "C-c c") 'smart-compile)
(define-key ruby-mode-map (kbd "C-c C-c") (kbd "C-c c C-m"))</pre>
</div>

また、このままだと、コードチェックまでで、実行してくれないので、このサイトを参考にしてelを編集する。

[SmartCompile | Emacsからrubyを直接実行 | Drowsy Dog&#8217;s Diary][4]

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:0d8cffd2-ce17-4a19-9cfa-6bda89d96a25" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c:nogutter">;;  ("\\.rb\\'"         . "ruby -cw %f")
  ("\\.rb\\'"         . "ruby %f")</pre>
</div>

### 参考サイト

  * [emacsのruby環境を整えています &#8211; $shibayu36->blog;][5]
  * [Emacs における快適な Ruby 開発環境を求めて #Ruby #AdventCalendar #開発環境 #Emacs &#8211; Qiita [キータ]][6]
  * [ruby-mode で rcodetools を使った補完のメモ &#8211; 牌語備忘録 &#8211; pygo][7]
  * [SmartCompile | Emacsからrubyを直接実行 | Drowsy Dog&#8217;s Diary][4]

I study Ruby

I want to set up my ruby deverlopment environment, I usually use Eclipse, but Eclipse is big fo script language like ruby. So I decided to use Emacs(because I&#8217;m emacs user)

I&#8217;ll introduce what I&#8217;ve tried cited with many sites I referenced.

#### 事前準備

Ruby関連のelispをまとめるために、新しいディレクトリを作成して、load-pathに追加しておく。

### ruby-mode

まずはともあれ、Emacsのruby-modeを使う。ruby-mode は Ruby ソースの中に入ってる。Rubyを配布サイトからダウンロードして、解凍する。

<https://www.ruby-lang.org/ja/downloads/>

ruby/misc ディレクトリにある Emacs Lisp ファイル（.*.el）をload-pathが通ったディレクトリにコピーする。

次に、.emacsの設定。拡張子.rbと接頭語Capfile,GemfileをRubyファイルと認識させる。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:6830ac31-7b49-40ee-abc5-b51178297686" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c:nogutter">(autoload 'ruby-mode "ruby-mode"
  "Mode for editing ruby source files" t)
(add-to-list 'auto-mode-alist '("\\.rb$" . ruby-mode))
(add-to-list 'auto-mode-alist '("Capfile$" . ruby-mode))
(add-to-list 'auto-mode-alist '("Gemfile$" . ruby-mode))</pre>
</div>

### ruby-electric

ruby-electricはかっこやdo endなどの対応関係を自動で補正してくれるらしい。一応入れておく。これもRuby ソースファイルにいっしょに入っていた。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:1f6ee7ce-ecf9-4482-96cb-20a48ee03e66" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c:nogutter">(require 'ruby-electric)
(add-hook 'ruby-mode-hook '(lambda () (ruby-electric-mode t)))
(setq ruby-electric-expand-delimiters-list nil)</pre>
</div>

  * <https://github.com/qoobaa/ruby-electric>

### ruby-block

ruby-blockを導入すると、end に対応する行をハイライトしてくれます。以下からダウンロードして、load-pathに配置。設定を追加。

[<span style="color: #0066cc;">https://www.emacswiki.org/cgi-bin/wiki/ruby-block.el</span>][2]

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:6724a1b2-707b-41cb-870a-ace05ed53fda" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c:nogutter">;;; ruby-block.el --- highlight matching block
(require 'ruby-block)
(ruby-block-mode t)
(setq ruby-block-highlight-toggle t)</pre>
</div>

### rcodetools( xmpfilter )

rcodertoolsとは、Ruby開発のためのツール群。以下のような機能を有している。

>   * xmpfilter: Test::Unit assert\* / RSpec should\* 自動生成、コード注釈
>   * rct-complete: 高精度メソッド名・クラス名・定数名等補完
>   * rct-doc: ドキュメント参照・コードナビゲーター
>   * rct-meth-args: 高精度メソッド情報リスト、TAGS ファイル作成
>   * rct-fork: Rails 等重いライブラリを予めロードし、補完を高速化する（サーバ）
>   * rct-fork-client: rct-fork サーバが保持する状態から Ruby スクリプトを実行する
>   * ruby-toggle-file: テストスクリプトと実装スクリプトを切り換える
>   * rbtest: 小規模スクリプトのための埋め込み Test::Unit
> 
> （引用元 [<span style="color: #0066cc;">https://d.hatena.ne.jp/keyword/rcodetools</span>][3])

まずは、rcodertoolsをダウンロードする。gemコマンドで入る。

$ gem install rcodetools

gem environmentコマンドでインストールされた場所を調べて、rcodetools.elをload-pathが通った場所にコピーする。

$ gem environment

$ cp /usr/lib/ruby/gems/1.9.1/gems/rcodetools-0.8.5.0/rcodetools.el .

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:b52a905a-1008-4803-89e5-ca884bff8922" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c:nogutter">;; rcodetools
(require 'rcodetools)
(setq rct-find-tag-if-available nil)
(defun ruby-mode-hook-rcodetools ()
  (define-key ruby-mode-map "\M-\C-i" 'rct-complete-symbol)
  (define-key ruby-mode-map "\C-c\C-t" 'ruby-toggle-buffer)
  (define-key ruby-mode-map "\C-c\C-d" 'xmp)
  (define-key ruby-mode-map "\C-c\C-f" 'rct-ri))
(add-hook 'ruby-mode-hook 'ruby-mode-hook-rcodetools)

(require 'anything-rcodetools)
(setq rct-get-all-methods-command "PAGER=cat fri -l")
;; See docs
(define-key anything-map [(control ?;)] 'anything-execute-persistent-action)</pre>
</div>

&nbsp;

xmprilterを使うとRuby コードの行末に「# =>」を入れて xmpfilter を実行すると，その行の返り値を見ることができる。

rct-completeを使うと、コードの自動補完が使える。

### SmartCompile

SmaprtCompleを入れることで、Emacs編集中に&#8221;C+c, C+c&#8221;でRubyを実行することができます。以下からダウンロードして、load-path配下に置きます。.emacsにも設定を追加します。

<https://www.emacswiki.org/emacs/download/smart-compile.el>

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:58dff2d8-952d-4e22-8c39-bf74664e7639" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c:nogutter">;; smart-compile
(require 'smart-compile)
(define-key ruby-mode-map (kbd "C-c c") 'smart-compile)
(define-key ruby-mode-map (kbd "C-c C-c") (kbd "C-c c C-m"))</pre>
</div>

また、このままだと、コードチェックまでで、実行してくれないので、このサイトを参考にしてelを編集する。

[SmartCompile | Emacsからrubyを直接実行 | Drowsy Dog&#8217;s Diary][4]

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:0d8cffd2-ce17-4a19-9cfa-6bda89d96a25" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c:nogutter">;;  ("\\.rb\\'"         . "ruby -cw %f")
  ("\\.rb\\'"         . "ruby %f")</pre>
</div>

### 参考サイト

  * [emacsのruby環境を整えています &#8211; $shibayu36->blog;][5]
  * [Emacs における快適な Ruby 開発環境を求めて #Ruby #AdventCalendar #開発環境 #Emacs &#8211; Qiita [キータ]][6]
  * [ruby-mode で rcodetools を使った補完のメモ &#8211; 牌語備忘録 &#8211; pygo][7]
  * [SmartCompile | Emacsからrubyを直接実行 | Drowsy Dog&#8217;s Diary][4]

<!--:-->

 [1]: https://futurismo.biz/archives/2213 "EmacsでRubyの開発環境をさらにめちゃガチャパワーアップしたまとめ"
 [2]: https://www.emacswiki.org/cgi-bin/wiki/ruby-block.el
 [3]: https://d.hatena.ne.jp/keyword/rcodetools
 [4]: https://ka-zoo.net/2013/03/smartcompile-emacs%E3%81%8B%E3%82%89ruby%E3%82%92%E7%9B%B4%E6%8E%A5%E5%AE%9F%E8%A1%8C/
 [5]: https://shibayu36.hatenablog.com/entry/2013/03/18/192651
 [6]: https://qiita.com/items/f02ab0c38ad5e9ba385a
 [7]: https://d.hatena.ne.jp/CortYuming/20121229/p1