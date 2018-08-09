---
author: admin
categories:
- 技術メモ
date: 2017-06-28T18:01:44+00:00
dsq_thread_id:
- 5.949102e+09
excerpt: AtomでMarkdownを快適に執筆するための環境構築
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
- 418
side:
- "y"
tags:
- atom
title: AtomでMarkdownを快適に執筆するための環境構築
title_view:
- "y"
type: post
url: /archives/=6589
---

AtomでMarkdownを快適に執筆するための設定を調べた。

自分はEmacs派なのだけれども、最近EmacsはWordPressの執筆用にしか使わなくなってきた。そこで、WordPressを快適に執筆するための環境を調べたところ、LinuxではAtomが良さそうだったので、試しにAtomでブログを書くことにした。

Emacsを捨てる気はないヨ！ ちょっとした浮気だよ。

### 環境 {#-}

  * Ubuntu 16.02
  * Atom 1.18.0

## atomのインストール {#atom-}

公式サイトにアクセス <https://atom.io/>

Ubuntuなので、debパッケージをダウンロードし、以下のコマンドでインストール。

<pre class="editor-colors lang-text">sudo dpkg -i atom-amd64.deb
</pre>

## 基本設定 {#-}

### 日本語化設定 {#-}

  * メニューバーからHelp->WelComeGuideを選択
  * 「Install a Package」を選択
  * 「Open Installer」を選択
  * フォームに「japanese」と入力し、「Packages」を選択
  * パッケージが表示されるので、「japanese-menu」の「Install」を選択

### フォントを設定する {#-}

フォントが小さいので大きくする。

  * 編集 -> 環境設定を選択
  * Editorsを選択
  * FontFamily にフォントを入力（ここではRictyを入力)
  * Font Size で適切な大きさを入力(ここでは18を入力)

### テーマの設定 {#-}

Monokaiが好きなので、それに変更する。<https://atom.io/themes/monokai>

  * SettingsからInstallを選択
  * Monokaiを検索し、インストール
  * Themesを選択し、Syntax ThemesでMonokaiを選択

## 基本パッケージのインストール {#-}

パッケージのインストール方法は、以下でいけます。

  * 編集 -> 環境設定を選択し、設定を開く
  * パッケージを選択
  * フォームでパッケージを検索してインストール

### atomic-emacs {#atomic-emacs}

AtomでEmacsキーバインドを利用するためのパッケージ。これは必須だ。

  * <https://atom.io/packages/atomic-emacs>

### highlight-line {#highlight-line}

現在ラインをハイライト

  * <https://atom.io/packages/highlight-line>

## Markdown {#markdown}

もともとの目的である、Markdownでの執筆を便利にするプラグインを入れる。

### markdown-preview {#markdown-preview}

Markdownのプレビュー機能は、デフォルトでインストールされている。 Ctrl+Shift+Mで Markdownプレビューウィンドウをtoggleできる。

### Markdownプレビュー画面のGithubスタイル適用 {#markdown-github-}

インストールパッケージからMarkdown-Previewを検索し、
  
Use Github.com Style にチェックを入れる。

### markdown-scroll-sync {#markdown-scroll-sync}

エディタにあわせて、markdown プレビュー画面を自動スクロール。

  * <https://atom.io/packages/markdown-scroll-sync>

### markdown-writer {#markdown-writer}

Markdownの入力支援のパッケージ

  * <https://atom.io/packages/markdown-writer>

たとえば、- の次に改行を入力すると、次の &#8211; が自動で挿入される。

### tool-bar-markdown-writer {#tool-bar-markdown-writer}

便利なツールバーを表示してくれる。Markdownの記法を覚えてないので、これは便利。

  * <https://atom.io/packages/tool-bar-markdown-writer>

markdown-writerとtool-barが必要。

  * markdown-writerをインストール
  * tool-barをインストール
  * tool-bar-markdown-writerをインストール

### tool-bar {#tool-bar}

tool-bar-markdown-writerの使用に必要

## WordPressに投稿する方法 {#wordpress-}

  * markdown previewから、右クリックで HTMLを保存を選択。
  * WordPressの投稿画面を開き、投稿画面にペースト。