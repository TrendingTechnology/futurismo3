---
title: 作文界のゲームチェンジャー！ 日本語の文章校正ツールのtextlintを試した
date: 2018-08-06 03:23:40
description: 日本語の文章校正ツールであるtextlintをつかってみた
size: false
---
感動しました！

文章作成のゲームチェンジャーになる可能性があるツール、textlintについて紹介します。

## textlint とは
簡単に、textlintの概要を説明をする。

textlintとは、日本語の文章の文法チェックツール、文章校正をプログラムで調べるツール。

- https://github.com/textlint/textlint

プログラミングをしているときにIDEをつかうと、自動で文法チェックしてくれて構文エラーのときは赤線がでてきたりする。
あれをMarkdownでもやりたいというお話。

## textlintを試してみる
Node.js製ですので、 以下でまずはインストールしてみる。

```bash
yarn add textlint
```

デフォルトでは、文法チェックのためのルールがひとつも入っていない。ブラグインをいれることで、文法をチェックできる。
まず手始めに、ToDoが存在しないことをチェックするプラグインを入れてみる。

### textlint-rule-no-ToDoの導入

```bash
yarn add textlint-rule-no-todo
```

次のようなToDoが文章中に存在しないかをチェックする。

```
- [ ] test test
```

エラーすると、こんな感じでエラーする。

```
$./node_modules/textlint/bin/textlint.js --rule no-todo user-textlint-for-markdown.md
/home/tsu-nera/futurismo3/src/posts/2018/user-textlint-for-markdown.md
  34:3  error  Found TODO: '- [ ] test test'  no-todo

✖ 1 problem (1 error, 0 warnings)
```

### .textlintrcに設定を書いて引数を省略する
コマンドの引数に渡すオプションが長いので、.`textlintrc`に設定を書くことで、省略する。

```json
{
  "rules": {
    "no-to": true
  }
}
```

## プリセットとオススメプラグイン
プラグインの使い方がわかったところで、次々とプラグインをいれていくことにしよう。
Presetというのが用意されている、いわばプラグインを寄せ集めた欲張りセット。

### 入門用
入門向け日本語のプリセット。

-  https://github.com/textlint-ja/textlint-rule-preset-japanese

### prh
表記揺れのチェックツール。

- https://github.com/textlint-rule/textlint-rule-prh

自分で表記揺れのルールを設定するのはたいへんですので、定義済みのルールを入れる。

```bash
$ yarn add prh
$ ls -l node_modules/prh/prh-rules/media/                                                                                                        
-rw-r--r-- 1 tsu-nera tsu-nera 85538  8月 22  2017 WEB+DB_PRESS.yml
-rw-r--r-- 1 tsu-nera tsu-nera 10820  8月 17  2017 techbooster.yml
```

### 技術文書向けのプリセット
textlint-rule-preset-ja-technical-writing

- https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing

### JTF日本語標準スタイルガイド（翻訳用）に従ったプリセット
textlint-rule-preset-jtf-style

- https://github.com/textlint-ja/textlint-rule-preset-JTF-style

### 半角/全角スペースプリセット
textlint-rule-preset-ja-spacing

- https://github.com/textlint-ja/textlint-rule-spacing

```json
{
    "rules": {
        "preset-japanese": true,
        "prh": {
            "rulePaths" :[
                "./node_modules/prh/prh-rules/media/techbooster.yml",
                "./node_modules/prh/prh-rules/media/WEB+DB_PRESS.yml"
            ],
            "preset-ja-technical-writing": true,
            "preset-ja-spacing": true
        }
    }
}
```

## Visual Studion Codeとのtextlint連携
Visual Studio Codeを利用して文章を書いているので、それとの連携を設定する。

次のプラグインを導入する。

- [vscode\-textlint \- Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=taichi.vscode-textlint)

あとは、vscodeを開くだけだ。 赤線をクリックすると、auto complete（自動修正もしてくれるこれはスゴい）

## 終わりに
私はかつて、技術文書がかけないので、テクニカルライティング検定というものを受けた（そして不合格）

- [TC 技術検定 3 級 テクニカルライティング試験 \(TW\) 受験しました](https://futurismo.biz/archives/1205/)

自分でルールを覚える時代は終わったんだ、これからはIDEで文章を書いてチェックする時代だ！

## 参考
- [textlintで日本語の文章をチェックする \| Web Scratch](https://efcl.info/2015/09/10/introduce-textlint/)
- https://github.com/textlint/textlint/wiki/Collection-of-textlint-rule
- [textlint入門 \(全11回\) \- プログラミングならドットインストール](https://dotinstall.com/lessons/basic_textlint)
