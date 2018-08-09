---
author: admin
categories:
- C++
- C言語
- Jenkins
- 技術メモ
date: 2012-09-23T09:14:00+00:00
dsq_thread_id:
- 3.7287918e+09
pvc_views:
- 6948
tags:
- CCCC
- 静的解析
title: CCCCを利用してC言語のステップ数をJenkinsで表示する
type: post
url: /archives/=507
---

CCCCとは、C言語/C++のステップカウンタだ。   
ステップ数をカウントをカウントしてくれるだけでなく、   
コードの様々なメトリックをレポートととして生成してくれる。

CCCCとは、ギャグでもなんでもなく、C and C++ Code Counterの略。   
以下からダウンロードできる。

[C and C++ Code Counter 窶錀 sourceforge][1]

### ccccを実行して、ステップ数を得る

ccccはコマンドラインから以下のように実行する。

> cccc (対象ファイル）

すると、.ccccというディレクトリに cccc.htmlやらcccc.xmlやらが自動で生成される。

cccc.hemlはこんな感じで出力される。LOCというのが行数にあたる。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb22.png" width="561" height="271" />][2]

CCCCはWindows版では   
C:\Program Files (x86)\CCCC\cccc.exe   
にインストールされるので、Windowsのコマンドプロンプトから実行するには、   
直接バスを指定するか、環境変数を設定するかの工夫が必要。

### CCCC Pluginを導入してJenkinsで表示する

CCCC PluginをJenkinsにインストールする。   
[Jenkinsの管理] > [プラグインの管理] からCCCC Pluginを選択して、インストール。

カバレッジ出力するための設定は、[設定] > [ビルド] で、ccccのコマンドを追加する。

[ビルド後の処理] に [Publish CCCC report]   
という項目が追加されているので、選択。 xmlファイルパスを追加する

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb23.png" width="594" height="97" />][3]

### 出力結果

出力結果は .htmlと同じだけれど、   
ソースが参照できなかったり、関数ごとのステップ数がわからなかったりする。   
あまり・・・・な感じだ。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb24.png" width="537" height="248" />][4]

こんな感じで、ステップ数の遷移もワカルようだ。（あまり例がよくないな・・・）

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb25.png" width="527" height="235" />][5]

#### 参考リンク

  * [ccccを使って、C/C++のメトリクス集計を行い、CSV化する 窶錀 ふにゃるん][6]
  * ##### [CCCC + Jenkins &#8211; プログズミ][7]

 [1]: https://sourceforge.jp/projects/sfnet_cccc/releases/
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image22.png
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image23.png
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image24.png
 [5]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image25.png
 [6]: https://d.hatena.ne.jp/Wacky/20070814/1187096320
 [7]: https://srz-zumix.blogspot.jp/2012/06/cccc-jenkins.html