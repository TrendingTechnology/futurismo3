---
author: admin
categories:
- Jenkins
- 技術メモ
date: 2012-09-30T12:48:35+00:00
dsq_thread_id:
- 3.7299756e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3797
title: JenkinsにWarning Plugin/Task Scanner Pluginを入れる
type: post
url: /archives/=559
---

Jenkinsのコード分析のためのプラグイン2つを入れてみたので、
  
こんなかんじだよというのを紹介。

  * Warning Plugin
  * Task Scanner Plugin

<div id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:d9bf842c-81c6-4055-a548-dc067962acce" class="wlWriterEditableSmartContent" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <div>
  </div>
</div>

### 

### Warning Pluginで、コンパイルエラーを早期検出する

Warning Pluginは、コンパイラが吐き出すエラーをJenkinsで表示するプラグイン。
  
いろんなコンパイラに対応している。

設定画面

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb30.png" alt="image" width="496" height="174" border="0" />][1]

出力結果はこんな感じ。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb31.png" alt="image" width="466" height="127" border="0" />][2]

### Task Scanner Plugin でやり残しを見逃さない

よく自分はあとでやることはソースに、TODOと書くことが多い。
  
また、バグを作りこんでしまった場合は BUGBUGと書くことが多い。
  
Task Scanner Pluginを使うと、
  
そんなような、決まったキーワードを検索して、表にまとめてくれる。
  
このことによって、タスクをやり残すことを防ぐことができる。

設定画面

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb32.png" alt="image" width="503" height="179" border="0" />][3]

出力結果

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb33.png" alt="image" width="508" height="220" border="0" />][4]

### まとめ

ここで紹介したものはEclipseを使っていれば、
  
特に必要ないかもしれない。

でも、Jenkinsを使って見えてくる視点、それは

<p class="caution6">
  時間軸での変化
</p>

これがワカルのである。

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image30.png
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image31.png
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image32.png
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image33.png