---
categories:
- Emacs
- Python
date: 2018-03-26T20:38:00+00:00
excerpt: Emacsでデータサイエンス用環境構築(Python)
title: Emacsでデータサイエンス用環境構築(Python)
type: post
url: /archives/=6954
---

## はじめに {#はじめに}

肥大化してデブになった emacs設定を一旦捨て去り、一から作り直すことにした。

デブは自分のお腹だけで十分だ！（名言）

### Motivation {#motivation}

以前は、こんな感じの設定ファイルを作っていたのだけれども、複雑になりすぎた。

  * <https://github.com/tsu-nera/dotfiles/tree/master/.emacs.d/inits>

また、データサイエンスをやるにつれて、以下のようなことがあり、Emacsを使いたくなってきた。

  * 自宅サーバにsshで自習室からつないで作業することが多いので、Pycharm使えない。
  * Jupyter Notebookを使うことが多いが、Jupyter Notebookでは、スクリプトかけない。
  * 今まで素の Emacsでしのいできたのだけれども、辛くなってきた。
  * ターミナルかっこいい＼(<sup>o</sup>)／

### 目指す姿 {#目指す姿}

  * データサイエンス、もっと言えばPythonに特化した環境を作りたい
  * 軽い環境を作りたい
  * できるだけシンプルにしたい

### Environment {#environment}

  * Ubuntu 16.04
  * Python 3.6(Anaconda)
  * Emacs 25.x

## 最新版Emacsを投入 {#最新版emacsを投入}

まずは、Ubuntuに25系のversionをインストールする。

  * [Ubuntu 16.04にEmacs 25.1をインストールする &#8211; Qiita][1]


```bash
sudo add-apt-repository ppa:kelleyk/emacs
sudo apt-get update
sudo apt-get install emacs25
sudo update-alternatives --config emacs
```

## リポジトリ & 設定ファイルを作成 {#リポジトリ--設定ファイルを作成}

.emacs.dを gitで世代管理して、githubにバックアップしたい。まずは、emacs用のリポジトリを作成。

  * <https://github.com/tsu-nera/dotemacs-for-data-science>

init.elも作成。[ここ][2]を参考にして、カスタムディレクトリを起点に起動できるように記述。

    (when load-file-name
      (setq user-emacs-directory (file-name-directory load-file-name)))
    

続いて、このリポジトリを利用して起動するためのスクリプトを作成して、パスの通ったところに置く。

```bash
#!/bin/bash                                                                                                                                                                                                          
emacs -nw -q -l /home/tsu-nera/dotemacs-for-data-science/init.el $1
```

## パッケージ管理をどうするか？ {#パッケージ管理をどうするか？}

以前はuse-packageを使っていた。しかし、今回はシンプルにしたいので、デフォルトで搭載されているパッケージ管理ツール package.elを使うことにする。以下の記事によると、25.1からはインストールされたパッケージが package-selected-package 変数に保持されるようになったらしい。

  * [Caskからpackage.elに戻ってきた &#8211; YAMAGUCHI::weblog][3]

以下の設定を inti.elに書くことで、custom.elに設定を吐き出すようにする。

    (setq custom-file (expand-file-name "custom.el" user-emacs-directory))
    (when (file-exists-p custom-file)
      (load custom-file))
    

package-installでインストールできるパッケージを増やすために、リポジトリを追加する。

    (require 'package)
    (add-to-list 'package-archives '("melpa" . "https://melpa.milkbox.net/packages/"))
    (add-to-list 'package-archives '("marmalade" . "https://marmalade-repo.org/packages/"))
    (fset 'package-desc-vers 'package--ac-desc-version)
    (package-initialize)
    

## Python開発環境 {#python開発環境}

ここからが本番！ データサイエンスのために Python開発環境を整える。過去記事を参考に（古くてあまり参考にならないですが）、設定を書いていく。

  * [Emacs で Python 開発環境を構築 |Futurismo][4]

### python-mode　- メジャーモード {#python-mode---メジャーモード}

メジャーモードはデフォルトの pythonパッケージではなく、python-modeをつかう。なんとなく。

    (require 'python-mode)
    (add-to-list 'auto-mode-alist '("\\\.py\\\'" . python-mode))
    (add-to-list 'interpreter-mode-alist '("python" . python-mode))
    

### flycheck, flake8 &#8211; 静的解析 {#flycheck-flake8---静的解析}

Pythonの静的解析ツールとして flake8, それをつかうためのインタフェース flycheckを入れる。

    pip install flake8
    

python-modeのときだけ有効。

    (defun tnoda/turn-on-flycheck-mode ()
      (flycheck-mode 1))
    (add-hook 'python-mode-hook 'tnoda/turn-on-flycheck-mode)
    

### jedi &#8211; 自動補完 {#jedi---自動補完}

jedi は pythonのための 自動補完ツール。

    pip install jedi
    

    (add-hook 'python-mode-hook 'jedi:setup)
    (setq jedi:complete-on-dot t)
    

jedi は Emacsの補完ツール , auto-completeを使っているので、その設定もしておく。

    (require 'auto-complete-config)
    (ac-config-default)
    (global-auto-complete-mode t)
    

### yapf &#8211; 自動フォーマット {#yapf---自動フォーマット}

自動でいい感じに整形してくれるツールを入れる。autopep8という古参なツールもあるけれども、新しい方を採用。

    pip install yapf
    

    ;; py-yapf - auto format                                                                                                                                                                                             
    (require 'py-yapf)
    (add-hook 'python-mode-hook 'py-yapf-enable-on-save)
    

ひとまず完成した init.el

  * <https://github.com/tsu-nera/dotemacs-for-data-science/blob/7ca7d9c09267a8cb6c7afe48b1779976d3100c93/init.el>

 [1]: https://qiita.com/ytoda129/items/58078d8c7e74d9144014
 [2]: https://tarao.hatenablog.com/entry/20150221/1424518030#tips-isolated-setup
 [3]: https://ymotongpoo.hatenablog.com/entry/2017/11/07/000921
 [4]: https://futurismo.biz/archives/2680
