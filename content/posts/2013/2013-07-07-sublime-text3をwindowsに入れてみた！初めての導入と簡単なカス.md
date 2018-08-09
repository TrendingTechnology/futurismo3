---
author: admin
categories:
- 技術メモ
date: 2013-07-06T23:17:41+00:00
dsq_thread_id:
- 3.709912e+09
excerpt: |
  最近なにかと話題のSublime text(サブライムテキスト)。

  Sublime text3 パプリックベータ版が最近でたのを機に、試してみました。<!--:--><!--:en-->最近なにかと話題のSublime text(サブライムテキスト)。

  Sublime text3 パプリックベータ版が最近でたのを機に、試してみました。<!--:-->
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
- 13489
side:
- "y"
tags:
- SublimeText
title: Sublime Text3をWindowsに入れてみた！初めての導入と簡単なカスタマイズまとめ
title_view:
- "y"
type: post
url: /archives/=1572
---

<!--:ja-->

![][1]

&nbsp;

最近なにかと話題のSublime text(サブライムテキスト)。 Sublime text3 パプリックベータ版が最近でたのを機に、試してみました。

[toc]

### Sublime textって、なに？

エディタです。 メモ帳やワードパッド、Emacs、vim、サクラエディタや秀丸エディタの仲間。 以下のような特徴があるようだ。

  * Webデザイナに人気のエディタ。
  * 見た目はブラッククール
  * 豊富なプラグイン
  * 無料で使える
  * マルチプラットフォーム(Linux,windows,Mac&#8230;)

### Sublime text3のインストール

以下から。

  * [Sublime Text &#8211; Download][2]

![][3]

### Package Controlのインストール

Package Controlを利用すると、Sublimetextにプラグインを入れることができる。

  * <a href="https://sublime.wbond.net/installation#st3" target="_blank" rel="noopener">Installation &#8211; Package Control</a>

ST3用のPackageControlは開発中らしく、githubから入手する。Cygwinを利用。

    cd "C:\Users\tsu-nera\AppData\Roaming\Sublime Text 3\Packages"
    git clone https://github.com/wbond/sublime_package_control.git "Package Control"
    cd "Package Control"
    git checkout python3
    

注意 : Packagesは Program Files配下ではない。(C:\Program Files\Sublime Text 3)AppData配下。 (追記 2013/10/16) インストールのためのスクリプトが対応したようだ。詳しくは、取得先のURL参照

  * <a href="https://sublime.wbond.net/installation#st3" target="_blank" rel="noopener">Installation &#8211; Package Control</a>

### Google日本語入力対応

Google日本語入力をしようとすると、ウィンドウの外に変換候補がでる。インライン入力するためには、プラグインを導入する。

  * [chikatoike/IMESupport][4]

Package Controlからインストールする。

  * Ctrl+Shift+P → 「Package Control:Install Package」 → 「IME Suport」

これで、けっこうつかいやすくなった。

### フォントの変更

Rictyが最近のお気に入りなので、変更します。 Preferences -> Setting(User)から設定画面開く。&#8221;font_face&#8221;の項目を追記。

    "font_face": "Ricty",
    "font_size": 10,
    

### Emacsキーバインド対応

とりあえず、AuthHotkeyで代用。

  * <a href="https://futurismo.biz/archives/1135" target="_blank" rel="noopener">WindowsでEmacsキーバインドをするためのメモ AutoHotkey_Lを利用 | Futurismo</a>

### 日本語対応

わからなかった。

### 文字コード対応

Sublime TextはUTF-8が文字コードなので、shift-jisのファイルを開くと文字化けする。windows環境ではshift-jisが多いので、文字コードを変換するためのプラグインを入れる。

  * <a href="https://github.com/seanliang/ConvertToUTF8" target="_blank" rel="noopener">seanliang/ConvertToUTF8</a>

このプラグインを入れることで、Shift\_JISのファイルを開くときはUTF-8に変換し、保存するときにShift\_JISに戻すことができる。 インストールは Package Controlから ConvertToUTF8で検索。

### 画面分割

ショートカットでOK

  * 縦分割 Alt + Shift + 1,2,3,4&#8230;.
  * 横分割 Alt + Shift + 8,9
  * フォーカスするウィンドウの変更 Alt + 1,2,3,4..
  * ウィンドウの別領域への移動 Ctrl + Shift + 1,2,3,4..
  * カーソルの別領域への移動 Ctrl + 1,2,3,4&#8230;

#### SimpleClone

ウィンドウ操作をもっと効率よくするプラグイン

  * Ctrl + Shift + 右 右側に今フォーカスしているファイルのコピー作成
  * Ctrl + Shift + 下 下に今フォーカスしているファイルのコピー作成

### Markdownエディタとして利用する

MarkDown Previewを利用する。

  * [revolunet/sublimetext-markdown-preview][5]

インストールは、githubから手動インストール。

    cd "C:\Users\tsu-nera\AppData\Roaming\Sublime Text 3\Packages"
    git clone https://github.com/revolunet/sublimetext-markdown-preview.git "MarkDown preview"
    cd "MarkDown preview"
    git checkout ST3
    

キーバインドからブラウザプレピューするために、キーバインドを設定する。

  * Preferences -> Key Binding-Users から以下を追記 { &#8220;keys&#8221;: [&#8220;alt+m&#8221;], &#8220;command&#8221;: &#8220;markdown_preview&#8221;, &#8220;args&#8221;: {&#8220;target&#8221;: &#8220;browser&#8221;} },

これで、Alt + mからプラウザプレビューできる。

### まとめ

外見がクールなのがメチャクチャ気に入った！！ 秀丸やサクラエディタから乗り換えてしまおう。 もっと知りたい人は、ドットインストールが便利。

  * <a href="https://dotinstall.com/lessons/basic_sublimetext" target="_blank" rel="noopener">Sublime Text 2入門 (全14回) &#8211; プログラミングならドットインストール</a>

#### 参考

  * <a href="https://log.chocolateboard.net/sublime-text-setting/" target="_blank" rel="noopener">Sublime Text: 初期設定など（ST2 / ST3） :: log.chocolateboard</a>

<!--:-->

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://lh4.ggpht.com/-BCBrVAkBn2M/UdiGclrVEaI/AAAAAAAAAh0/vsAtzONQfmw/SnapCrab_2013-7-6_18-54-35_No-00.jpg
 [2]: https://www.sublimetext.com/3
 [3]: https://lh6.ggpht.com/-V41i06d1ZrI/UdgdaXl4ijI/AAAAAAAAAd4/KvHAxlGY7kI/SnapCrab_NoName_2013-7-6_18-49-4_No-00.jpg
 [4]: https://github.com/chikatoike/IMESupport
 [5]: https://github.com/revolunet/sublimetext-markdown-preview