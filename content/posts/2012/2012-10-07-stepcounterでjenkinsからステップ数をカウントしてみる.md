---
author: admin
categories:
- Jenkins
- 技術メモ
date: 2012-10-07T08:26:54+00:00
dsq_thread_id:
- 3.7033754e+09
pdrp_attributionLocation:
- end
pvc_views:
- 9139
title: StepCounterでJenkinsからステップ数をカウントしてみる
type: post
url: /archives/=629
---

Jenkinsをつかったステップ数表示について、以前CCCCを紹介した。
  
<a title="CCCCを利用してC言語のステップ数をJenkinsで表示する" href="https://futurismo.biz/archives/507" rel="bookmark">CCCCを利用してC言語のステップ数をJenkinsで表示するﾂꀀ</a>
  
ネットで調べてみると、他にもステップ数を数える方法があったのでメモする。

  * [Soner][1]を使う
  * [c4ju][2]を使う
  * StepCounterを使う

[Soner][1]は高機能なメトリクス解析ツール。だけど、メモリをたくさん消費するらしいので、サーバではなくノートPCで実験している自分には不向きなのでパス。

[c4ju][2]はCCCCの出力XMLから Jenkins の「JUnitテスト結果の集計」で利用できる XML を出力ツール。こちらのサイトで紹介されている。
  
[CCCC + Jenkins &#8211; ブログズミ][3]

ただ、JUnitテスト結果の集計ビューはすでにGoogleTestで使っているため、これもパス。

残るは、StepCounter Plugin。こちらのサイトで紹介されている。
  
<a name="1324778439" href="https://d.hatena.ne.jp/takuma02141978/20111225/1324778439"></a>StepCounterプラグインの紹介- takumaの備忘録

結論としては、これが良い感じ。

### StepCounter Pluginを使ってみる。

githubからダウンロードできた。

<https://github.com/jenkinsci/stepcounter-plugin/tree/57da29cfa10a2f0f4cd62c544353044e343391d7>

（現時点ではアップデートに必要な stepcounter.hpi がなかった）

ダウンロードしたら、[Jenkinsの管理] > [プラグインの管理] > [高度な設定] >[プラグインのアップデート]を選択。

ここで、/target配下にあるstepcounter.hpiを選択して、アップデートを選択。
  
そして、Jenkinsを再起動する。

これでStepCounterが使えるようになった。
  
あとは、ジョブの[設定] > [ビルド後の処理の追加]から[StepCounter]を選択してそれなりの設定を入れる。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb37.png" alt="image" width="537" height="117" border="0" />][4]

### 出力結果

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb38.png" alt="image" width="464" height="188" border="0" />][5]

ファイルごとにステップ数もでる。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb39.png" alt="image" width="401" height="196" border="0" />][6]

時系列の推移も大丈夫そうだ。

[https://www.youtube.com/embed/LUuROdFRfRc]

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://www.sonarsource.org/
 [2]: https://sourceforge.jp/projects/c4ju/wiki/FrontPage
 [3]: https://srz-zumix.blogspot.jp/2012/06/cccc-jenkins.html
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image37.png
 [5]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image38.png
 [6]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image39.png