---
author: admin
categories:
- 未分類
date: 2013-05-02T12:26:42+00:00
dsq_thread_id:
- 3.6987284e+09
pvc_views:
- 5908
tags:
- git
title: Visual Studioプロジェクトでの版数管理で無視する.gitignoreメモ
type: post
url: /archives/=1297
---

Visual Studioをいじりはじめた。いろいろと不明な拡張子がある。gitで版数管理をするためには、.gitignoreを作成する必要があるのだけれども、なにがなんだかわからないので、ちょっと整理。

### *.snoについて

プロジェクトディレクトリに*.snoができる。これは、各開発者が IDE に行ったカスタマイズか入っている。不要。

### *.userについて

プロジェクトのディレクトリ配下に、.csproj.userや*.vbproj.userができる。

これは、開発者固有のプロジェクト オプション、および参照されるアセンブリを設定するために IDE が使用する任意の参照パスが含まれている。不要。

### ipchとsdfについて

これは VS2010からデキるようになった、キャッシュデータベースらしい。けっこう容量を食う。検索やインデックスなどなど、さまざまな情報をあらかじめ蓄えておく役割があるみたい。不要。

その他、ビルドしたときに作成される DebugとReleaseもいらないな。(その中に含まれるexeファイルも）

というわけで、30分くらい調査した結果はこうなった。ベースは、github上のC++の.gitignore。

<https://github.com/github/gitignore/blob/master/C%2B%2B.gitignore>

もう少し変更するかも。

&#160;



### 参考

  * [Visual Studio + Subversion で管理するファイルについて &#8211; @sugamasao.blog.title # => ”コードで世界を変えたい”][1] 
  * [Visual Studio 2010 の sdf と ipch &#8211; なたでぽぽ][2]

 [1]: https://d.hatena.ne.jp/seiunsky/20070324/1174761587
 [2]: https://popo.ara3.net/diary/2010/20101221.htm