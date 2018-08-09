---
author: admin
categories:
- Jenkins
- ハッキング
date: 2012-12-02T11:24:52+00:00
dsq_thread_id:
- 3.7305905e+09
pdrp_attributionLocation:
- end
pvc_views:
- 2853
tags:
- Sphinx
title: git commitからJenkinsでSphinxドキュメントをビルド＋α
type: post
url: /archives/=831
---

SphinxとJenkinsを組み合わせたら、どんなことが可能なのか考えてみた。

  * (版数管理を前提として）チェックインをトリガにして、Sphinxドキュメント生成。
  * 文字列をカウントして、グラフ化。
  * スペルチェックや表記の揺れをチェック。

結局いろいろ調べて、まだそういうツールないということはわかった。
  
文字列カウントも、スペルチェックもできないことは分かった。

文字列カウントは make textで生成したテキストファイルをカウントして、グラフ化する仕組みを作れば実現可能かも。

表記の揺れは、Yahoo の提供する校正支援APIを利用すれば、実現可能かも。
  
<https://developer.yahoo.co.jp/webapi/jlp/kousei/v1/kousei.html>

というわけで、できることとして、文字列カウントの代わりに、ステップカウントを入れた。
  
追加で、JenkinsのTask Scanner Pluginを入れた。

#### こんな流れ

sphinxのファイルをgit commit
  
↓
  
Jenkinsにwgetで通知
  
↓
  
Jenkinsで make html
  
Task Scan
  
ステップカウント

  * [git commitをフックしてJenkins でビルドを起動][1]
  * [JenkinsにWarning Plugin/Task Scanner Pluginを入れる][2]
  * [StepCounterでJenkinsからステップ数をカウントしてみる][3]

うーん、これではまだまだ使い物にはならないな。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb79.png" alt="image" width="401" height="244" border="0" />][4]

<div id="fastlookup_top">
</div>

 [1]: https://futurismo.biz/archives/826
 [2]: https://futurismo.biz/archives/559
 [3]: https://futurismo.biz/archives/629
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image79.png