---
author: admin
categories:
- C++
- TDD
date: 2013-10-26T16:02:11+00:00
dsq_thread_id:
- 3.713512e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 2310
title: 『Modern C++ with TDD』学習メモ(Chapter6-11)
type: post
url: /archives/=1946
---

『Modern C++ with TDD』後半分の学習メモです。前半部分は、ココ。

[『Modern C++ with TDD』学習メモ(Chapter2-5) | Futurismo][1]

### 各章の概略

  * Chapter6: Incremental Design 主にリファクタリングの話題。どうやってシンプルなコードを作っていくかを実践する。1行でも関数として抽出する。インクリメンタルに、デザインを作り上げていくその開発スタイルが『モダン』といっている。
  * Chapter7: Quality Tests テストの書き方について。FIRSTの原則の紹介。一つのテストでひとつのことを検証する、テストの名前付に慎重になる。そして、テストコードのリファクタリングの実践、ほかTips。
  * Chapter8: Legacy Challenges　実際のレガシーコードを使ったリファクタリング体験。いきなり200Stepsのうんこメゾッドが出される。ここでは、CppUTestを使う。テクニックは『レガシーコード改善ガイド』に載っているもの。この章は，必読。涙がでるほど素晴らしかった。
  * Chapter9: TDD and Threading マルチスレッドのプログラムに対するTDDのアプローチの紹介。正直、ここは理解できなかった。
  * Chapter10: パフォーマンスや受け入れテスト、TPPなどの、TDDを発展させた話題を取り扱う。
  * Chapter11: Growing and Sustaining TDD おまけのような、未分類の小さな話など。Code Jodo、マネージャーへのTDDの説得方法、参考リンクなどなど。

### StudyMemo

#### Small Methods

一行の論理でもメソッドとして抽出する。その理由は、

  * Methods名が機能を現してコメント代わりになる。
  * 重複を排除するためのスタートになる。
  * パフォーマンスは瑣末なものだ。

Chapter6は　1990年代では、奇妙なことがよいこととされてきた、と結論づけられる。いまは、このような過剰なリファクタリングは奇妙に見えるけれども、20年後はこれ普通になるのだよ、と。

Chapter10では、実際に簡単な数値実験が行われる。inlineメソッド、Smallメソッド、inline無効にした場合で実験。inlineメソッドとSmallメソッドのパフォーマンスはほぼ同じ、だけどinline無効メソッドは時間がかかる。

最近のコンパイラは頭がいいから、小さな関数は勝手に最適化してくれる。なので、Smallメソッドはパフォーマンスを阻害しないと。他人のいうことに耳を傾けてはいけない、彼らは同じことをいうだけなので。

ここにも、数値実験があった。このリンクの記事はリファクタリングについてよく語っていて興味深い。数値をみると、なるほどと思う。

  * [リファクタリングにありがちな誤解を解く][2]

自分でも実験してみた。だいたい、変わんない。

  * [組込み開発の二大迷信に挑む！リファクタリングにおけるパフォーマンスとスタックオーバーフローについての数値実験 | Futurismo][3]

パフォーマンスが懸念だが、そもそもパフォーマンスがネックというのは迷信なのか？オーバーヘッドは無視していいのか?未来は、パフォーマンスは瑣末な問題になるのだろうか？

コードにコメントを書くことについても、『コード自身が語っているのに、なんで冗長なコメントを書くの』と。

#### FIRSTの原則

良いテストは以下の５つに従う。

  * F First
  * I Isolated
  * R Repeatable
  * S Self-Verifiying
  * T Timely

#### Mikado Method

ミカドメソッドとは、大規模なコードをリファクタリングするための方法論。 別記事にまとめました。

  * [大規模コードをリファクタリングする方法『ミカドメソッド(Mikado Methood)』について | Futurismo][4]

#### Code Kata

これは別記事にまとめました。

  * [必殺技を実践で繰り出すために、TDDの『Code Kata』について調べてみた | Futurismo][5]

### Transformation Priority Premise

ボブおじさんが考案した、TDDをより簡単に実施するための方法。

  * [Transformation Priority Premise &#8211; Wikipedia, the free encyclopedia][6]

<iframe src="//player.vimeo.com/video/60561303" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 

[&#8220;Uncle Bob&#8221; Martin &#8211; The Transformation Priority Premise][7] from [8th Light][8] on [Vimeo][9].

 [1]: https://futurismo.biz/archives/1847
 [2]: https://www.infoq.com/jp/articles/RefactoringMyths
 [3]: https://futurismo.biz/archives/1939
 [4]: https://futurismo.biz/archives/1936
 [5]: https://futurismo.biz/archives/1876
 [6]: https://en.wikipedia.org/wiki/Transformation_Priority_Premise
 [7]: https://vimeo.com/60561303
 [8]: https://vimeo.com/eighthlight
 [9]: https://vimeo.com