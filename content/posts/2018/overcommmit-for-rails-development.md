---
title: ローカルCIでRails開発を加速する！overcommitの紹介
description: git-hookを拡張した神ツール、covercommitの紹介記事です 
date: 2018-10-14 14:43:13
author: tsu-nera
type: post
tags:
- Rails
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1536239732/futurismo/thumbnails/rails-logo.png
---

現在、開発に CircleCI が導入されており、GitHub に push 後に静的解析が走るようになっている。

とくに rubocop が動いており、こちらが push 後に悪いところを指摘するので、再 commit が必要になる。

できればこれを改善したい、なんとかならないかと思っていた所、commit や push 前に rubocop を走らせる overcommit なるツールを見つけたので紹介します。

- https://github.com/brigade/overcommit

## できるようになること

設定を追加することで、commit 前や push などにツールを走らせることが可能になります。

- yarn install
- bundle install
- rubocop
- fasterer
- brakeman
- reek
- railsbestpractices
- eslint
- rspec

しかも、マルチコア対応なので、通常はしらせるよりも高速です。私は 12 コアなので、一瞬で終わります。

## 使い方

gem で提供されています。

```
$ gem install overcommit
```

git repogitory で有効にするには、`overcommit --install`を叩いてください。

次に、`.overcommit.yml`を作成して、設定を書いていきます。
参考までに私の設定を書きますが、公式の README に詳しい設定項目が載っています。

```yaml
PreCommit:
  RuboCop:
    description: "Rubocopの実行"
    enabled: true
    command: ['bundle', 'exec', 'rubocop', '-c', '.rubocop.yml']
  AuthorName:
    description: "gitのユーザ名チェック"
    enabled: false
  Fasterer:
    enabled: true
    description: "パフォーマンスチェック(fasterer)"
  BundleAudit:
    enabled: true
   description: "脆弱性チェック(bundler-audio)"
  Brakeman:
    enabled: true
  RailsSchemaUpToDate:
    enabled: true
  Reek:
    enabled: true
    command: ['reek', '-c', 'config.reek.yml']
  RailsBestPractices:
    enabled: true
  EsLint:
    description: "eslintの実行"
    enabled: true
    required_executable: 'npm'
    command: ['node_modules/.bin/eslint']
    flags: ['--format=compact']
    install_command: 'npm install -g eslint'
    include:
      - 'app/javascript/**/*.js'
      - 'app/javascript/**/*.vue'
      - '.eslintrc'
PostCheckout:
  BundleInstall:
    description: "bundle installの実行"
    enabled: true
  YarnInstall:
    description: "yarn installの実行"
    enabled: true
```

設定をし終わったら、`overcommmit --sign`を忘れずに実行してください。
これで commit や checkout 後に処理が走るようになります。

もし、commit 後の挙動を事前にチェックしたいならば、`overcommit -r`を打ち込むと OK です。

## まとめ

開発に CI を導入することはよくありますが、これは個人レベルのローカル CI です。

CircleCI は GitHub の番人としてありますが、ローカルでも細かく CI をすることで、開発フィードバックをうけ、開発を加速させましょう！

## 参考

- https://medium.com/@kirill_shevch/lint-your-ruby-code-with-overcommit-and-static-analysis-tools-bd36d3147d2e
- https://speakerdeck.com/morizyun/overcommit-and-pronto-introduction
