---
author: admin
categories:
- 技術メモ
date: 2012-12-09T07:12:59+00:00
dsq_thread_id:
- 3.7427968e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3037
tags:
- Sphinx
title: SphinxをWindowsに導入していろいろした使い方・カスタマイズまとめ
type: post
url: /archives/=930
---

Sphinx関係の記事をたくさん投稿してきたので、ここらでまとめてみます。

### Sphinxとは

Sphinx(スフィンクス)とは、文章を書くためのツール（フレームワーク）
  
エディタとも、wikiとも分類しがたい、新たな書き方のツール。

<a href="https://sphinx-users.jp/" target="_blank"><img class="alignleft" alt="" src="https://capture.heartrails.com/150x130/shadow?https://sphinx-users.jp/" width="150" height="130" align="left" border="0" /></a> <a style="color: #0070c5;" href="https://sphinx-users.jp/" target="_blank">Sphinx-Users.jp :: ドキュメンテーションツール スフィンクス Sphinx-users.jp</a> <img alt="" src="https://b.hatena.ne.jp/entry/image/https://sphinx-users.jp/" border="0" />

導入方法はこの記事を参照されたし。
  
[SphinxをWindowsPCにインストールした。][1]

### Sphinx導入のメリット

利用すると、以下のことができるようになります。

<ul class="checklist">
  <li>
    さまざまな形式で出力できる。(HTML,ePub,PDF,Word…)<br /> <a href="https://futurismo.biz/archives/811">Sphinx-docxbuilderでWordドキュメントをテキストから生成(Windows)<br /> </a><a href="https://futurismo.biz/archives/925">Sphinxからepub形式で出力して、Dropbox経由でiPadから読んでみる<br /> </a><a title="SphinxのPDF出力をrst2pdfで試す@Windows64bit" href="https://futurismo.biz/archives/946">SphinxのPDF出力をrst2pdfで試す@Windows64bit<br /> <a title="Sphinxでテキストから変幻自在の出力結果比較(HTML,Word,PDF,ePub)" href="https://futurismo.biz/archives/949">Sphinxでテキストから変幻自在の出力結果比較(HTML,Word,PDF,ePub)</a></a>
  </li>
  <li>
    好きなエディタ(Emacs,Vim,Vi)をつかってテキストでかける。<br /> <a href="https://futurismo.biz/archives/908">EmacsでSphinxのrstファイルを編集するときの気に食わない白色をなんとかしたメモ<br /> </a><a href="https://futurismo.biz/archives/910">SphinxのRSTファイル編集のためにrst.elをemacsに入れる<br /> </a>
  </li>
  <li>
    gitやsvnなどで版数管理できる。<br /> <a href="https://futurismo.biz/archives/813">gitでSphinxのドキュメントを版数管理。commitでビルドさせた。<br /> </a>
  </li>
  <li>
    プラクイン豊富！各種自動化が可能！<br /> <a href="https://futurismo.biz/archives/831">git commitからJenkinsでSphinxドキュメントをビルド＋α<br /> </a><a href="https://futurismo.biz/archives/901"><span style="color: #0066cc;">watchdog(watchmedo)でrst定期監視してsphinxビルド。</span></a>
  </li>
</ul>

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://futurismo.biz/archives/805