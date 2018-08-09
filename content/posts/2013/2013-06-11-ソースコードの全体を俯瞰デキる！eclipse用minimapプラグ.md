---
author: admin
categories:
- Eclipse
- 日記
date: 2013-06-10T23:35:11+00:00
dsq_thread_id:
- 3.7197916e+09
pvc_views:
- 5486
title: ソースコードの全体を俯瞰デキる！Eclipse用minimapプラグイン 「Overview plugin for Eclipse」
type: post
url: /archives/=1397
---

Eclipseでminimapの機能が使えたらいいなといろいろ探してていたら、

<font size="3">見つけた＼(^o^)／&#160; </font>

<a href="https://marketplace.eclipse.org/node/687236#.UbZbr_l7K8A" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://marketplace.eclipse.org/node/687236#.UbZbr_l7K8A" width="150" height="130" /></a> <a style="color: #0070c5" href="https://marketplace.eclipse.org/node/687236#.UbZbr_l7K8A" target="_blank">Overview plugin for Eclipse | Eclipse Plugins, Bundles and Products &#8211; Eclipse Marketplace</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://marketplace.eclipse.org/node/687236#.UbZbr_l7K8A" />  <br style="clear: both" />

### minimapとは

minimapとは、コードの全体姿を俯瞰的に見ることができる、ビューのこと。BirdView/Code Outlineともいうらしい。Emacsにはあるので、Eclipseにもきっとあるはずとおもった。

<https://www.emacswiki.org/emacs/MiniMap>

また、以下のサイトの記事でminimapプラグインが現る！と紹介されていたけれども、バグっていそうなので、手を出せてなかった。

<a href="https://did2memo.net/2013/01/25/eclipse-minimap-plugin-1-0-0/" target="_blank">遂にEclipse用「MiniMap」プラグイン現る！ | 情報科学屋さんを目指す人のメモ</a>

### Overview plugin for Eclipseの使い方

まずは、EclipseマーケットプレイスからOverview pluginを検索して、インストール。[ ![][1]][2]

インストールが完了したら、ツールバーの

  * ウィンドウ -> ビューの表示 -> その他 -> 概要 -> 概要 

を選択して、ビューを表示させる。

[<img title="skitch" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="skitch" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch_thumb1.png" width="602" height="420" />][3]

ビューを右か左に縦長に配置すれば完成。ソースコードの縮図が画面横に映し出される。

クリックするとズームアップも可能だ。Ctrl + o でアウトラインビューと組み合わせて、より効率的に画面を移動できそうだ。なにより、カッコイイ(･∀･)。

 [1]: https://marketplace.eclipse.org/sites/all/modules/custom/marketplace/images/installbutton.png
 [2]: https://marketplace.eclipse.org/marketplace-client-intro?mpc_install=687236 "Drag and drop into a running Eclipse Indigo workspace to install Overview plugin for Eclipse"
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch4.png