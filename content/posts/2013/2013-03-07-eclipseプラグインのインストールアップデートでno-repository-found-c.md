---
author: admin
categories:
- Eclipse
date: 2013-03-07T13:43:25+00:00
dsq_thread_id:
- 3.7229716e+09
pvc_views:
- 11860
tags:
- TopCoder
title: Eclipseプラグインのインストール/アップデートでNo repository found containingが出てあたふたする場合の解決方法
type: post
url: /archives/=1236
---

昨日、TopCoderに参加しようとしてEclipseからログインしようとしたら、ログインできずに焦った。こんなメッセージが表示された。

> <font size="2">class "com.topcoder.client.netClient.ResponseWaiterManager"&#8217;s signer information does not match signer information of other classes in the same package <br />https://code.google.com/p/eclipsecoder/issues/detail?id=40</font>

えっ、まじかよ！ｱﾀﾌﾀ((ヽ(；´Д｀)ﾉ))ｱﾀﾌﾀ

ネットでいろいろと調べてみると、eclipsecoderプラグインの不具合であることがわかった。   
プラグインを0.3.10以降にすればいいらしい。

<a href="https://code.google.com/p/eclipsecoder/issues/detail?id=40" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://code.google.com/p/eclipsecoder/issues/detail?id=40" width="150" height="130" /></a> <a style="color: #0070c5" href="https://code.google.com/p/eclipsecoder/issues/detail?id=40" target="_blank">Issue 40 &#8211; eclipsecoder &#8211; Arena version downloaded by Eclipsecoder is too old and doesn&#8217;t work &#8211; An Eclipse plug-in for competing at the TopCoder online algorithm competition &#8211; Google Project Hosting</a>    <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://code.google.com/p/eclipsecoder/issues/detail?id=40" /><br style="clear: both" />

早速、Eclipsecoder Coreを0.3.12にアップデートしようとしたころ、エラーしてできない。   
こんなメッセージが表示された。

> <font size="1">インストールする項目の収集中にエラーが発生しました</font>
> 
> <font size="1">session context was:(profile=epp.package.cpp, phase=org.eclipse.equinox.internal.p2.engine.phases.Collect, operand=, action=). <br />No repository found containing: osgi.bundle,org.apache.ant,1.8.3.v201301120609 <br />No repository found containing: osgi.bundle,org.eclipse.ant.core,3.2.401.v20121204-162022 <br />No repository found containing: osgi.bundle,org.eclipse.compare,3.5.301.v20130125-135424 <br />No repository found containing: osgi.bundle,org.eclipse.compare.win32,1.0.200.v20120914-154749 <br />No repository found containing: osgi.bundle,org.eclipse.core.commands,3.6.2.v20130123-162658 <br />No repository found containing: osgi.bundle,org.eclipse.core.databinding,1.4.1.v20120912-132807 <br />No repository found containing: osgi.bundle,org.eclipse.core.expressions,3.4.401.v20120912-155018 <br />No repository found containing: osgi.bundle,org.eclipse.core.filesystem,1.3.200.v20130115-145044 <br />No repository found containing: osgi.bundle,org.eclipse.core.jobs,3.5.300.v20120912-155018 <br />No repository found containing: osgi.bundle,org.eclipse.core.net,1.2.200.v20120914-093638</font>
> 
> <font size="1">・・・長いので、以下省略。</font>

<font color="#0000ff" size="4">えっ、まじかよ！ｱﾀﾌﾀ((ヽ(；´Д｀)ﾉ))ｱﾀﾌﾀ</font>

さらに、ネットでいろいろと調べてみるとEclipse上にアップデートサーバの情報がキャッシュされていて、その情報が古いかららしい。キャッシュクリアのためには、以下の方法を試す。

[ウィンドウ] > [設定] > [インストール/更新] > [利用可能なソフトウェア]で、今回ダウンロードしてくるサーバを選択(今回はEclipseCoder <https://fornwall.net/eclipsecoder/>)し、右の[再ロード]をおす。

これで、解決するはずが・・・直らない！   
EclipseCoderをアンインストールしたら、今度はインストールすらできない！

<font color="#ff0000" size="5">えっ、まじかよ！ｱﾀﾌﾀ((ヽ(；´Д｀)ﾉ))ｱﾀﾌﾀ</font>

いろいろと追い詰められた結果、以下の方法で解決した。 

  1. [ウィンドウ] > [設定] > [インストール/更新] > [利用可能なソフトウェア] > [エクスポート]で利用可能なソフトウェアのリストをbookmarks.xmlに保存。 
  2. 利用可能なソフトウェアを全て削除して、Eclipse再起動 
  3. 再度、[利用可能なソフトウェア]にURLを追加 
  4. アップデートを実施 -> 成功する 
  5. bookmarks.xmlを[インポート] 

なんとか間に合ってよかったよかった。