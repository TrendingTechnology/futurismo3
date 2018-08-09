---
author: admin
categories:
- Java
date: 2017-10-01T06:13:50+00:00
dsq_thread_id:
- 6.1830026e+09
excerpt: Java開発でIntelliJ IDEAにとりあえず入れたプラグインたちのメモ
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
- 351
side:
- "y"
tags:
- IntelliJ
title: Java開発でIntelliJ IDEAにとりあえず入れたプラグインたちのメモ
title_view:
- "y"
type: post
url: /archives/=6803
---

## はじめに {#-}

仕事でIntelliJ IDEAを使って Java開発することになったので、
  
とりあえず便利そうなプラグインをみつくろって入れてみたので、そのメモ。

IntelliJはデフォルトでいろんなプラグインがすでにインストールされているのが嬉しい。

## プラグイン {#-}

### 静的解析 {#-}

  * FindBugs-IDEA
  * CheckStyle-IDEA

FindBugsと CheckStyleは定番な静的解析ツールなので、とりあえず入れておく。
  
ちなみに、InteliJでは、Ctrl + Shift + Alt + L で コードのフォーマット整形をしてくれる。

### テスト {#-}

Spock Frameworkを使うので、サポートツールを入れる。ハイライトするだけかな？

  * Spock Framework Enhancements

### ステップカウント {#-}

進捗はステップ数で報告することになっているので、
  
ステップカウンタ(LOC)がIDEから使えると便利。

  * Statistics

日毎のステップ数が差分でわかればいいのだが、これはエクスポート機能がみつからない。
  
ステップ数については、別のツールを使ったほうがいいかな。Jenkinsをかませるか？

### 保管アクション {#-}

保管をトリガにして、いろいろな機能を動かす。

  * Save Action

設定 -> その他の設定 -> 保管アクションから各種設定を有効にする。

これはある意味、チーム開発しているときは、
  
勝手にいろいろな部分を修正してしまう恐れがあって危険だな。

### Lombok {#lombok}

  * Lombok Plugin

LombokをIntelliJで補完したりするプラグイン。

Lombokについては、以下の記事を参照。

  * [Javaでsetter/getter自動生成するLombokが便利。IntelliJ+gradleでの設定 | Futurismo][1]

## その他 {#-}

あまり入れるようなプラグインはなかったな。オススメプラグインはない。
  
それはデフォルトでIntelliJ IDEAがとても便利ということだ。
  
思いついたら、追記するようにする。

 [1]: https://futurismo.biz/archives/6791