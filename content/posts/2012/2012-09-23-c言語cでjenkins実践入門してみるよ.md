---
author: admin
categories:
- C++
- C言語
- Jenkins
- ハッキング
date: 2012-09-23T12:53:15+00:00
dsq_thread_id:
- 3.7299684e+09
pdrp_attributionLocation:
- end
pvc_views:
- 10002
title: C言語/C++でJenkins実践入門してみるよ
type: post
url: /archives/=520
---

最近継続的インテグレーション（CI）に興味を持ったので、
  
Jenkinsの日本での初めての入門書である、Jenkins実践入門を読んでみた。

<div id="scid:81867AAF-BB02-476b-AE5D-12BDAC2E750D:4e8fb7e1-d85e-4feb-97db-6100a824e668" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <a href="https://www.amazon.co.jp/exec/obidos/ASIN/4774148911/sleephacker-22/ref=nosim" target="_blank"><img src="https://ecx.images-amazon.com/images/I/51bR%2Bvw-EvL._SL160_.jpg" alt="Jenkins実践入門　～ビルド・テスト・デプロイを自動化する技術 (WEB+DB PRESS plus)" /><br /> Jenkins実践入門　～ビルド・テスト・デプロイを自動化する技術 (WEB+DB PRESS plus)<br /> 佐藤 聖規 和田 貴久 河村 雅人 米沢 弘樹 山岸 啓 </a>
</div>

内容はとても興味深いものの、残念、JAVA中心で述べられていた。．．．┌(´_｀)┐
  
C言語つかいの自分としては、C/C++でのツールの情報が欲しいところだ。

**[Jenkins実践入門目次チラ見せしちゃいます][1]**

### C言語でJenkinsをハック！継続的インテグレーションだぃ

というわけで、この本で紹介されていることを、
  
C言語/C++でしようとするとどうすればいいのかを調べてみた。
  
目次に対応させると、以下のような感じ。

<ul class="checklist">
  <li>
    第4章 本番を想定して開発環境を準備する。(Ant, Maven)<br /> make を利用する。<br /> <a title="git commitをフックしてJenkins でビルドを起動" href="https://futurismo.biz/archives/826">git commitをフックしてJenkins でビルドを起動</a>
  </li>
  <li>
    第５章 JUnitでテストする(JUnit)<br /> GoogleTest/GoogleMockを利用する。<br /> <a title="Permanent Link to JenkinsでGoogleTestのテスト結果を表示する方法を調べてみた。" href="https://futurismo.biz/archives/475" rel="bookmark">JenkinsでGoogleTestのテスト結果を表示する方法を調べてみた。<br /> </a>
  </li>
  <li>
    第6章 カバレッジを取得する(Cobertura)<br /> gcovを利用する。<br /> <a title="C言語でのgcovカバレッジ計測結果をJenkinsで表示させる" href="https://futurismo.biz/archives/485">C言語でのgcovカバレッジ計測結果をJenkinsで表示させる<br /> </a>
  </li>
  <li>
    第7章インスペクションを実施する(FindBugs, CheckStyle)<br /> Cppcheckを利用する。DRY Pluginを利用する。<br /> <a title="Cppcheckで静的解析して、Jenkinsで表示してみる。" href="https://futurismo.biz/archives/497">Cppcheckで静的解析して、Jenkinsで表示してみる。</a><br /> <a title="重複コードを撃退！DRY原則をC言語で実践するためのCPDを調べた。" href="https://futurismo.biz/archives/516">重複コードを撃退！DRY原則をC言語で実践するためのCPDを調べた。<br /> </a><a title="JenkinsにWarning Plugin/Task Scanner Pluginを入れる" href="https://futurismo.biz/archives/559">JenkinsにWarning Plugin/Task Scanner Pluginを入れる<br /> </a><a title="DoxygenとJenkinsを連携させてみた。" href="https://futurismo.biz/archives/661">DoxygenとJenkinsを連携させてみた。</a><a title="重複コードを撃退！DRY原則をC言語で実践するためのCPDを調べた。" href="https://futurismo.biz/archives/516"><br /> </a>
  </li>
  <li>
    第8章コードステップ数をカウントする(JavaNCSS/Soner)<br /> CCCCを利用する。<br /> <a title="CCCCを利用してC言語のステップ数をJenkinsで表示する" href="https://futurismo.biz/archives/507">CCCCを利用してC言語のステップ数をJenkinsで表示する<br /> </a><a title="StepCounterでJenkinsからステップ数をカウントしてみる" href="https://futurismo.biz/archives/629">StepCounterでJenkinsからステップ数をカウントしてみる</a><a title="CCCCを利用してC言語のステップ数をJenkinsで表示する" href="https://futurismo.biz/archives/507">ﾂꀀ</a>
  </li>
</ul>

CheckstyleとかSonerはもしかしたらC/C++でも使えるのかな？
  
調査不足でバタンキュ～ﾂꀀ σ／〇＼

&nbsp;

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb28.png" alt="image" width="523" height="350" border="0" />][2]

#### 参考リンク

  * [Useful plugins for C/C++ builds][3]

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://d.hatena.ne.jp/lino/20111015/1318672811 "Jenkins実践入門目次チラ見せしちゃいます"
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image28.png
 [3]: https://jenkins.361315.n4.nabble.com/Useful-plugins-for-C-C-builds-td3605795.html