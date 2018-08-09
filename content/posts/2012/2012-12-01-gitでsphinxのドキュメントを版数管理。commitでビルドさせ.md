---
author: admin
categories:
- 技術メモ
date: 2012-12-01T07:13:00+00:00
dsq_thread_id:
- 3.7564887e+09
pdrp_attributionLocation:
- end
pvc_views:
- 2655
tags:
- git
- Sphinx
title: gitでSphinxのドキュメントを版数管理。commitでビルドさせた。
type: post
url: /archives/=813
---

前回の続き。

  * [gitでSphinxのドキュメントを版数管理。commitでビルドさせた。][1]
  * [Sphinx-docxbuilderでWordドキュメントをテキストから生成(Windows)][2]

Sphinxを試してみた動機は、テキストで版数管理しつつ、WordやWeb形式に変換したいということだったので、今回はgitとSphinxを連携してみた。

### Gitリボジトリをつくる

まずは、Sphinxのトップディレクトリでgitのリポジトリを作成。

> git init

次に、.gitignoreの設定。
  
ここでは、ビルドした生産物を除外する。

> echo &#8220;_*&#8221; >> .gitignore

はじめてのコミットをする。

> git add .
  
> git commit -m&#8221;first commit&#8221;

### git commit でSphinxを make html してみる

commit後にコマンドを実行するためには、.git/hooks/ディレクトリ配下に、post-commitフォルダを作成し、そこに実行したいコマンドを書く。

というわけで、

> cd .git/hooks/
  
> emacs post-commit

post-commtの内容は以下

> #!/bin/sh
  
> make html

実行権限を与えて完了

> chmod a+x post-commit

&nbsp;

#### 参考リンク

  * [reST のファイルをgitで管理する][3]
  * [gitでcommitしたらsphinxのmake htmlが走るようにする設定 &#8211; Drkcore][4]

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://futurismo.biz/archives/813 "gitでSphinxのドキュメントを版数管理。commitでビルドさせた。"
 [2]: https://futurismo.biz/archives/811 "Sphinx-docxbuilderでWordドキュメントをテキストから生成(Windows)"
 [3]: https://note.sicafe.net/sphinx_memo/reSTandGit.html
 [4]: https://blog.kzfmix.com/entry/1309561912