---
title: "Visual Studio Code で JavaScript開発環境の構築"
date: 2018-07-21T01:17:46+09:00
size: false
---
## はじめに
今まで有料のJetbrain IDEをつかっていたのだけれども、見た目のダサさに愛想が尽きた.そこで、いろいろ探していたところ Visual Studio Codeの美しさに一目惚れしてしまったのだった.

あんなに、あんなに、あんなに、Microsoftが嫌いだったのに・・・.

ということで、Visual Studio Codeの紹介と、JavaScript,　Reactの開発環境構築をしたので紹介する。

## 見た目の設定
**ルックスが最重要の設定項目である！！**

というわけで、まずは外観の設定からはじめよう! ここでは、以下のテーマとフォントをオススメする。

- Theme: LevelUpTuts・・・JavaScript の人気チュートリアルで使われているテーマ
    - https://marketplace.visualstudio.com/items?itemName=leveluptutorials.theme-levelup
- Font: Hack ・・・ ソースコードのためのフォント
    - https://github.com/source-foundry/Hack

続いて、フォントサイズとフォントの設定。

```json
{
    "workbench.colorTheme": "Level Up", /* テーマ */
    "editor.fontSize" : 14,             /* フォント */
    "editor.fontWeight": "bold",
    "window.zoomLevel": 1,              /* 外枠のサイズ */
}
```

[![Image from Gyazo](https://i.gyazo.com/2972b01ec7053dc1fa33ef57efb680ec.png)](https://gyazo.com/2972b01ec7053dc1fa33ef57efb680ec)

アイコンもカッチョよく。
- vs-icons
    - https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons
    

## JavaScriptの設定
優れたIDEが揃えるべき機能は以下のとおり。 

- シンタックスハイライト/ インデント
- 検索・置換 
- タグジャンプ
- コード補間
- エラーチェック
- リファクタリング
- インタープリタ・デバッカ
- プロジェクト管理

vscodeを JavaScriptの最強エディタにするためには以下のツールが必要だ。

```text
シンタックスハイライト/インデント ... defaultでOk
検索・置換  ... defaultでOk
タグジャンプ  ... defaultでOk
コード補間 ... defaultでOk
エラーチェック .. ESLint
リファクタリング ... deualtでOK, JavaScript Booster
インタープリタ・デバッカ ... Debugger for Chrome, Quokka.js
プロジェクト管理 ... defaultでOk
```

なんたることか、ほとんどDefaultでOkだ。つおい。やることがなかった。
- https://code.visualstudio.com/docs/languages/javascript

とりあえず、足りない機能をちまちま追加します。
- [JavaScript Extensions in VS Code](https://code.visualstudio.com/docs/nodejs/extensions)

### ESLint
定番の静的解析ツール。

- [ESLint \- Pluggable JavaScript linter](https://eslint.org/)
- [ESLint \- Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

設定が必要。

```bash
$ npm install eslint --global
$ eslint --init 
```

### Prettier + Format on Save
保存時にフォーマット整形できる。

設定が必要。

```bash
$ npm install prettier --global
$ yarn add -D eslint-plugin-prettier eslint-config-prettier
```

- [ESLint\(あるいはTSLint\)とPrettierを併用する \- ひと夏の技術](https://tech-1natsu.hatenablog.com/entry/2018/01/07/154941)
- [Integrating with ESLint · Prettier](https://prettier.io/docs/en/eslint.html)

### Debugger for Chrome
ブレークボイントをはって、Chromeでデバッグできるらしい。

- [Introducing Chrome Debugging for VS Code](https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code)

### JavaScript Booster
WebStormに激しく感化されたものだとか。賢いリファクタリングをSuggestしてくれる。
- [JavaScript Booster \- Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=sburg.vscode-javascript-booster)

### Auto Import
オートインポート.

### スニペット関連
入れれば便利だけれども、自分はあまりつかわない。

## Reactの設定
公式にまとまっている。
- [React JavaScript Tutorial in VS Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)

## Web開発関連
HTML, CSSまわりの便利機能も調べておく。

- HTML Snippets ... HTMLのスニペット群
- HTML CSS Class Completion ... HTMLを解析してCSS補完

### View in Browser
選択中のHTMLファイルをコマンド一つでブラウザで開くことできる。
- [View In Browser \- Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=qinjia.view-in-browser)

## 設定のクラウド共有・保存
- [Settings Sync \- Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

## 参考リンク
- [Top JavaScript VSCode Extensions for Faster Development 🔥](https://codeburst.io/top-javascript-vscode-extensions-for-faster-development-c687c39596f5)
- [VS Code Extensions for Happier JavaScript Coding – Hacker Noon](https://hackernoon.com/vs-code-extensions-for-happier-javascript-coding-e258f72dd9c1)
- [10 Must\-have VS Code Extensions for JavaScript Developers — SitePoint](https://www.sitepoint.com/vs-code-extensions-javascript-developers/)
- LevelUpTutsのビデオチュートリアル ESLint設定
    - https://www.youtube.com/watch?v=cMrDePs86Uo
- [Prettier \+ Format On Save = Never worry about formatting JavaScript again – Scott Sauber](https://scottsauber.com/2017/06/10/prettier-format-on-save-never-worry-about-formatting-javascript-again/)
