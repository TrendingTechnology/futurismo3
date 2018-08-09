---
author: admin
categories:
- Emacs
- Ruby
date: 2014-02-11T23:47:00+00:00
dsq_thread_id:
- 3.693667e+09
excerpt: EmacsでRubyの開発環境をパワーアップしたので、導入したものをまとめてみた
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
- 20046
side:
- "y"
sub:
- def
title: Emacs で Ruby の開発環境をさらにめちゃガチャパワーアップしたまとめ
title_view:
- "y"
type: post
url: /archives/=2213
---

161227: 内容が古くなったので、書き直しました。

\[toc\]

はじめに
========

Ruby 開発環境を整えようとおもったが, 普段よく使っている Eclipse
を出すにはスクリプト言語は大げさだ.

スクリプト言語はコンソール端末で書くに限る.

というわけで, Emacs 使いなあたしとしては, Emacs での Ruby
環境を整えようとおもった.

いろんなサイトを参考にしつつ, 導入したものを列挙していく.

準備
----

elip 取得に必要な package.el や el-get.el, git や wget
などのツールはインストール済みのこと.

環境
----

-   Emacs 24.3.1
-   Ruby 2.1.0

優れた IDE の条件
-----------------

優れた IDE が備えるべき機能は以下

-   シンタックスハイライト/ インデント
    -   ruby-mode
-   検索・置換 iedit, multiple-cursors, helm-ag, helm-swoop....etc
-   タグジャンプ ctags
-   コード補間
    -   auto-complete, yasnippet
-   エラーチェック
    -   flycheck
-   リファクタリング emacs-refactor
-   インタープリタ・デバッカ inf-ruby, pry
-   プロジェクト管理 projectile

シンタックスハイライト/ インデント
==================================

ruby-mode
---------

まずはともあれ, Emacs の ruby-mode を使う.

-   <https://github.com/jwiegley/ruby-mode>

.emacs の設定. 拡張子.rb と接頭語 Capfile,Gemfile を Ruby
ファイルと認識させる.

``` {.commonlisp}
(autoload 'ruby-mode "ruby-mode"
  "Mode for editing ruby source files" t)
 (add-to-list 'auto-mode-alist '("\\.rb$" . ruby-mode))
 (add-to-list 'auto-mode-alist '("Capfile$" . ruby-mode))
 (add-to-list 'auto-mode-alist '("Gemfile$" . ruby-mode))
 (add-to-list 'auto-mode-alist '("[Rr]akefile$" . ruby-mode))
```

enhanced-ruby-mode
------------------

今は, enhanced-ruby-mode というものもあるらしい.

-   <https://qiita.com/vzvu3k6k/items/acec84d829a3dbe1427a>

以下の機能を強化.

-   インデント
-   シンタックスハイライト
-   リアルタイムの文法チェック

自分はただの ruby-mode でいいかな。一応紹介。

MELPA に入っているので, package.el や el-get.el でインストールできる.

github の元のリポジトリは開発が止まっているようで, 自分は fork
版を入れる.

-   <https://github.com/zenspider/enhanced-ruby-mode>

enh-rubu-mode という名前を探してインストールした.

あとは, 既存の設定で, ruby-mode-hock/ruby-mode-map となっているところを
enh-ruby-mode-hock enh-ruby-mode-map で置換する.

参考:[enhanced-ruby-mode の概説 -
Qiita](https://qiita.com/vzvu3k6k/items/acec84d829a3dbe1427a)

ruby-electric
-------------

ruby-electric はかっこや do end などの対応関係を自動で補正してくれる.

-   <https://github.com/qoobaa/ruby-electric>

``` {.commonlisp}
(require 'ruby-electric)
(add-hook 'ruby-mode-hook '(lambda () (ruby-electric-mode t)))
(setq ruby-electric-expand-delimiters-list nil)
```

ruby-block
----------

ruby-block を導入すると, end に対応する行をハイライトしてくれる.

-   <https://www.emacswiki.org/cgi-bin/wiki/ruby-block.el>
-   <https://github.com/adolfosousa/ruby-block.el>

``` {.commonlisp}
;; ruby-block.el --- highlight matching block
(require 'ruby-block)
(ruby-block-mode t)
(setq ruby-block-highlight-toggle t)
```

検索・置換
==========

検索や置換機能が優れているところが Emacs のいいところ。
以下、自分がよく利用するものを列挙。

-   iedit
-   multiple-cursors
-   helm-ag -&gt; 今は ripgrep の方がよい。
-   helm-swoop

コードリーディング
==================

rcodetools ( xmpfilter )
------------------------

rcodertools とは, Ruby 開発のためのツール群. emacs 界で有名な, rubikichi
氏の作品.

以下のような機能をゆうしている.

-   xmpfilter: Test::Unit assert\* / RSpec should\* 自動生成, コード注釈
-   rct-complete: 高精度メソッド名・クラス名・定数名等補完
-   rct-doc: ドキュメント参照・コードナビゲーター
-   rct-meth-args: 高精度メソッド情報リスト, TAGS ファイル作成
-   rct-fork: Rails 等重いライブラリを予めロードし, 補完を高速化する
    (サーバ)
-   rct-fork-client: rct-fork サーバが保持する状態から Ruby
    スクリプトを実行する
-   ruby-toggle-file: テストスクリプトと実装スクリプトを切り換える
-   rbtest: 小規模スクリプトのための埋め込み Test::Unit

まずは, rcodertools をダウンロードする. gem コマンドで入る.

``` {.bash}
$ gem install rcodetools
```

gem environment コマンドでインストールされた場所を調べて, rcodetools.el
を load-path が通った場所にコピーする.

``` {.bash}
$ gem environment
$ cp /usr/lib/ruby/gems/1.9.1/gems/rcodetools-0.8.5.0/rcodetools.el .
```

最後に, rcodetools/bin にパスを通す (ここがハマりポイント!)
このページに助けられた.

-   <https://d.hatena.ne.jp/tomitake_flash/20100220/1266662660>

.zshenv とかに,

``` {.bash}
export PATH=$PATH:$HOME/.rbenv/versions/2.1.0/lib/ruby/gems/2.1.0/gems/rcodetools-0.8.5.0/bin
```

.emacs への設定例は以下.

``` {.commonlisp}
 ;; rcodetools
(require 'rcodetools)
(setq rct-find-tag-if-available nil)
(defun ruby-mode-hook-rcodetools ()
  (define-key ruby-mode-map "\M-\C-i" 'rct-complete-symbol)
   (define-key ruby-mode-map "\C-c\C-t" 'ruby-toggle-buffer)
   (define-key ruby-mode-map "\C-c\C-f" 'rct-ri))
(add-hook 'ruby-mode-hook 'ruby-mode-hook-rcodetools)
```

xmprilter を使うと Ruby コードの行末に「\# =&gt;」を入れて xmpfilter
を実行するとその行の返り値を見ることができる.

rct-complete を使うと, コードの自動補完が使える.

また, ruby-toggle-buffer
はテストコードとソースコードを切り替えることができる.

切り替えたり, メソッドを補完しながら TDD する方法を TDC と名づけている.
(Test Driven Completion) README.TDC を読むと面白い.

たくさん機能があるので, いろいろ調べるとよい.
ちょっとまだつかいこなせてない. 詳しくは README を参照.

-   <https://github.com/tnoda/rcodetools>

helm-rdefs
----------

rdefs はソースコードの class や module, def
といった宣言のラインを引っ張り出してくれるツール.

``` {.bash}
gem install rdefs
```

helm I/F を経由して, Emacs から利用することができる.

-   <https://github.com/saidie/emacs-helm-rdefs>

.emacs の設定は以下.

``` {.commonlisp}
(require 'helm)
(require 'helm-rdefs)
(add-hook 'ruby-mode-hook
          (lambda ()
            (define-key ruby-mode-map (kbd "C-c @") 'helm-rdefs)))
```

これはなかなかよいツールだ.

auto-highlight-symbol
---------------------

シンボルをハイライト表示してくれる.

``` {.commonlisp}
(require 'auto-highlight-symbol)
(global-auto-highlight-symbol-mode t))
```

タグジャンプ
============

ctags/ripper-tags
-----------------

記事を独立させました.

-   [Emacs の Ruby 環境でタグを自動生成してタグジャンプ！ |
    Futurismo](https://futurismo.biz/archives/2262)

試してないけれども、GNU GLOBAL でもタグジャンプができるみたい。

-   [Emacs での Rails 開発を GNU GLOBAL でだいぶ快適にする -
    Qiita](https://qiita.com/5t111111/items/5e854f6047d187ea21c7)

コード補完
==========

robe
----

Ruby 用の補完をする. 補完は auto-complete という有名な elisp がある.
もっと賢いのがオムニ補完と呼ばれるもの.
これは文法を解析して補完してくれる.

-   [auto-complete + rsense の代わりに auto-complete + robe をつかう -
    LGTM](https://codeout.hatenablog.com/entry/2014/02/04/210237)

el-get 経由で robe-mode を入れる.

-   <https://github.com/dgutov/robe>

また, pry というものも必要みたい. 詳しくは github の README 参照で.

``` {.bash}
gem install pry pry-doc method_source
```

設定を追記.

``` {.commonlisp}
 ; robe
(autoload 'robe-mode "robe" "Code navigation, documentation lookup and completion for Ruby" t nil)
(autoload 'robe-ac-setup "robe-ac" "robe auto-complete" nil nil)
(add-hook 'robe-mode-hook 'robe-ac-setup)
```

補完以外にも、ドキュメント参照とか、定義ジャンプができるようだ。すごいぞ
robe!!

-   Jump to method definition
-   Jump to super or a constructor called at point
-   Jump to a module or class (provided it has at least one method
    defined)
-   Display method documentation
-   Display information about method called at point using ElDoc
-   Method and constant name completion

yasnippet-ruby
--------------

Emacs のスニペット挿入機能といえば, yasnippet だが, その Ruby
用テンプレート群をいれる.

ここからダウンロードして, yasnippet のスニペット一覧に突っ込む!

-   <https://github.com/bmaland/yasnippet-ruby-mode>

いちおう, yasnippets の設定も載せておく. ここでは, \~/.emacs.d/snippets
にいれた.

``` {.commonlisp}
(require 'yasnippet)
(yas/load-directory "~/.emacs.d/snippets")
(yas-global-mode 1)

;; 既存スニペットを挿入する
(define-key yas-minor-mode-map (kbd "C-x i i") 'yas-insert-snippet)
;; 新規スニペットを作成するバッファを用意する
(define-key yas-minor-mode-map (kbd "C-x i n") 'yas-new-snippet)
;; 既存スニペットを閲覧・編集する
(define-key yas-minor-mode-map (kbd "C-x i v") 'yas-visit-snippet-file)
```

エラーチェック
==============

flycheck
--------

エラーチェックといえば flycheck だ。flymake
の時代は終わったと思っている。

``` {.commonlisp}
(require 'flycheck)
(setq flycheck-check-syntax-automatically '(mode-enabled save))
(add-hook 'ruby-mode-hook 'flycheck-mode)
```

ついでに, flycheck をカラフルにする flycheck-color-mode-line も入れた.

flycheck のチェッカーとして ruby-lint と robocop を入れてみる.

### rubocop

コーディングスタイルをチェックするために, rubocop を入れてみる.
以下を参考にした.

-   <https://qiita.com/watson1978/items/debafdfc49511fb173e9>
-   <https://qiita.com/yaotti/items/4f69a145a22f9c8f8333>

まずは, gem で robocop をインストール.

``` {.bash}
gem install rubocop
```

.emacs の設定は以下.

-   <https://github.com/bbatsov/rubocop-emacs>

``` {.commonlisp}
(require 'rubocop)
(add-hook 'ruby-mode-hook 'rubocop-mode)
```

標準だと, Ruby
コーディングスタイルガイドにしたがっているかチェックできる.

-   <https://github.com/bbatsov/ruby-style-guide>

    カスタマイズは徐々にしていこう.

    さらに, 前述の flycheck の check ツールに rubocop
    を組み込むことができる.

    flycheck-list-errors で, flycheck
    が検出したエラーと一緒にチェックできる. I/F の共通化.

``` {.commonlisp}
(flycheck-define-checker ruby-rubocop
   "A Ruby syntax and style checker using the RuboCop tool."
   :command ("rubocop" "--format" "emacs" "--silent"
             (config-file "--config" flycheck-rubocoprc)
             source)
   :error-patterns
   ((warning line-start
             (file-name) ":" line ":" column ": " (or "C" "W") ": " (message)
             line-end)
    (error line-start
           (file-name) ":" line ":" column ": " (or "E" "F") ": " (message)
           line-end))
    :modes (ruby-mode motion-mode))
```

### ruby-lint

semantic (文法解析) 的に解析してくれるらしい. rubocop
との違いについても, github の readme にかかれている.

-   <https://github.com/YorickPeterse/ruby-lint>

gem でインストール.

``` {.bash}
gem install ruby-lint
```

これも, flycheck のインタフェースを利用してチェックさせる.

``` {.commonlisp}
 ;; definition for flycheck
(flycheck-define-checker ruby-rubylint
   "A Ruby syntax and style checker using the rubylint tool."
   :command ("ruby-lint" source)
   :error-patterns
   ((warning line-start
             (file-name) ":" line ":" column ": " (or "C" "W") ": " (message)
             line-end)
    (error line-start
           (file-name) ":" line ":" column ": " (or "E" "F") ": " (message)
           line-end))
   :modes (ruby-mode ruby-mode))
```

リファクタリング
================

Ruby リファクタリング環境は以外に貧弱だった.
なんとかならないものか・・・.

anzu
----

リファクタリングのリネーム機能を探していたら, これが良さそう.

-   <https://github.com/syohex/emacs-anzu>

置換や検索をおしゃれに実行する Elisp. 詳しくは, 以下.

-   <https://qiita.com/syohex/items/56cf3b7f7d9943f7a7ba>

``` {.commonlisp}
(require 'anzu)
(global-anzu-mode +1)

(set-face-attribute 'anzu-mode-line nil
                    :foreground "yellow" :weight 'bold)
(custom-set-variables
 '(anzu-mode-lighter "")
 '(anzu-deactivate-region t)
 '(anzu-search-threshold 1000)
 '(anzu-use-mimego t)
 '(anzu-replace-to-string-separator " => "))
```

ruby-refactor
-------------

ruby-refactor は, Ruby でリファクタリングをするためのツール.

-   <https://github.com/ajvargo/ruby-refactor>

.emacs にも設定を追加.

``` {.commonlisp}
 (require 'ruby-refactor)
(add-hook 'ruby-mode-hook 'ruby-refactor-mode-launch)
```

こんなことができる.

-   Extract to Method (C-c C-r e)
-   Extract Local Variable (C-c C-r v)
-   Extract Constant (C-c C-r c)
-   Add Parameter (C-c C-r p)
-   Extract to Let (C-c C-r l)

個人的には Extract Method と Rename ができればよいが, Rename はできない.

また, Extract Method は変数を抽出してはくれないのであまり賢くない.

インタープリタ・デバッカ
========================

rubydb
------

標準ライブラリのデバッカ. ステップ実行できる. elisp は ruby
のソースに梱包されている.

-   [Emacs で rubydb を利用してステップ実行する |
    Futurismo](https://futurismo.biz/archives/2358)

inf-ruby
--------

Emacs のバッファから irb を起動する.

``` {.commonlisp}
(autoload 'inf-ruby "inf-ruby" "Run an inferior Ruby process" t)
(add-hook 'ruby-mode-hook 'inf-ruby-minor-mode)
```

M-x inf-ruby でバッファが起動. これだけ.

pry
---

inf-ruby よりも高機能らしい REPL.

-   <https://github.com/jacott/emacs-pry>

``` {.commonlisp}
(require 'pry)
;; optional suggestions
(global-set-key [S-f9] 'pry-intercept)
(global-set-key [f9] 'pry-intercept-rerun)
```

quickrun
--------

素早く Ruby スクリプト を実行。

-   <https://github.com/syohex/emacs-quickrun>

``` {.commonlisp}
(require 'quickrun)
```

RSpec
-----

記事を独立させました。

-   [Emacs で RSpec 環境をめちゃガチャパワーアップしたまとめ |
    Futurismo](https://futurismo.biz/archives/2266)

プロジェクト管理
================

rake
----

Interaction with rake command tool.

-   <https://github.com/asok/rake>

``` {.commonlisp}
(use-package rake
  :config
  (eval-after-load 'ruby-mode
    '(define-key ruby-mode-map (kbd "C-!") 'rake))
  (setq rake-completion-system 'helm))
```

projectile
----------

プロジェクト管理といえばこれ。

Project Interaction Library for Emacs.

-   <https://github.com/bbatsov/projectile>

自動でプロジェクトのルートディレクトリを探して,
それ以下のファイルを見つけたり色々できる.

-   [最近の開発環境: mjolnir, projectile, peco -
    blog.en30.net](https://blog.en30.net/2014/10/20/development-environment.html)

.projectile ファイルをマニュアルで作成することで, そのフォルダを Route
Folder と認識出来る.(要 Emacs 再起動)

``` {.commonlisp}
(require 'projectile)
(projectile-global-mode)
;; 大きいプロジェクトだと劇的に改善するらしい.
(setq projectile-enable-caching t)
```

projectile-rails
----------------

Ruby on rails 用.

-   <https://github.com/asok/projectile-rails>

``` {.commonlisp}
(require 'projectile-rails)
(add-hook 'projectile-mode-hook 'projectile-rails-on)
```
