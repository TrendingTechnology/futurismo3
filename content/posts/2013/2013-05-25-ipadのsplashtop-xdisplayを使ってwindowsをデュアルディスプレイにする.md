---
author: admin
categories:
- ハッキング
date: 2013-05-25T10:40:33+00:00
dsq_thread_id:
- 3.6952568e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 10478
tags:
- iPad
- iPhone/iPad
title: iPadのSplashtop XDisplayを使ってWindowsをデュアルディスプレイにする方法とモバイルルーターで接続できない場合の対処法
type: post
url: /archives/=1355
---

<!--:ja-->

<div class="wlWriterEditableSmartContent" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:91284456-5961-431d-b020-f775b1d1dd58" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px;">
  <a href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5881872357724241490" target="_blank"><img style="border: none; padding: 0px; margin: 0px;" alt="20130525200911.jpg" src="https://lh6.ggpht.com/-govSTkuH5k0/UaCbvvBXvlI/AAAAAAAAAW4/fDzE0ylGH8Y/20130525200911.jpg" /></a>
</div>

&nbsp;

会社にも、プライベートにも、どこにいくにもVAIOとiPadをもちあるいているアタクシですが、今日はiPadをデュアルディスプレイとして利用できるアプリがあることを知り、鼻血がでるほど興奮したので、紹介します。

#### 環境

  * Windows 7 64bit
  * iPad 3

### Splashtop XDisplayの紹介

利用するには、iPadアプリ <span style="color: #0000ff;">Splashtop XDisplay</span>を入れます。これを入れることで、iPadをデュアルディスプレイにすることができます。

<div class="sticky-itslink">
  <a href="https://itunes.apple.com/jp/app/splashtop-xdisplay/id446493657?mt=8&uo=4&at=10lmSQ" target="_blank" rel="nofollow"><img style="border-style: none; float: left; margin: 5px;" title="Splashtop XDisplay" alt="Splashtop XDisplay" src="https://a1298.phobos.apple.com/us/r30/Purple4/v4/c5/53/43/c5534379-7b93-2d01-7ca1-de3502087fa5/Icon-72.png" /></a></p> 
  
  <div class="sticky-itslinktext">
    <a href="https://itunes.apple.com/jp/app/splashtop-xdisplay/id446493657?mt=8&uo=4&at=10lmSQ" target="_blank" rel="nofollow">Splashtop XDisplay</a><br /> Splashtop Inc.<br /> 価格： 0円 <a href="https://itunes.apple.com/jp/app/splashtop-xdisplay/id446493657?mt=8&uo=4&at=10lmSQ" target="_blank" rel="nofollow"><img style="border-style: none;" alt="iTunesで見る" src="https://ax.phobos.apple.com.edgesuite.net/ja_jp/images/web/linkmaker/badge_appstore-sm.gif" /></a><br /> <span style="font-size: xx-small;">posted with <a href="https://sticky.linclip.com/linkmaker/" target="_blank">sticky</a> on 2013.10.22</span>
  </div>
</div>

&nbsp;

無料なのは10分間のみ。それからはプラグインを購入する必要がある。

(追記 2013/10/22 ）

結局はSplashtop XDisplayではなくて AirDisplayに乗り換えた）

  * [iPadでデュアルディスプレイを可能にする『AirDisplay 2』にアップデート。速度が50%向上！ | Futurismo][1]

以下、Windowsパソコンとの連携ですが、MacやLinuxももちろん行けるはず。

### Splashtop XDisplayの設定方法

順に説明します。

#### Windowsでの設定

PCに専用ソフトStreamerを入れる。ダウンロードは以下から。

<a href="https://www.splashtop.com/ja/splashtop2" target="_blank"><img class="alignleft" alt="" src="https://capture.heartrails.com/150x130/shadow?https://www.splashtop.com/ja/splashtop2" width="150" height="130" align="left" border="0" /></a> <a style="color: #0070c5;" href="https://www.splashtop.com/ja/splashtop2" target="_blank">トップリモートデスクトップアプリ | iPad からコンピューターにアクセス | Splashtop 2 | Splashtop</a>  <img alt="" src="https://b.hatena.ne.jp/entry/image/https://www.splashtop.com/ja/splashtop2" border="0" /> <br style="clear: both;" /><br class="Apple-interchange-newline" />ダウンロードしたら、インストーラを起動するとインストールされます。ここからは、Streamerの設定。

まずはアカウントの作成。

<div class="wlWriterEditableSmartContent" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:367424f1-d983-450d-b480-7729170d9306" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px;">
  <a href="https://picasaweb.google.com/111104490436597119823/2013525#5881811031931632034" target="_blank"><img style="border: none; padding: 0px; margin: 0px;" alt="ScreenClip.png" src="https://lh3.ggpht.com/-Iidekxn7Ico/UaBj-GpCOaI/AAAAAAAAAV8/S_ELoRk_iWc/ScreenClip.png" /></a>
</div>

次に、セキュリティキーを設定します。これで変な人からアクセスされることを防ぐ。

<div class="wlWriterEditableSmartContent" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:3c01ac8f-8a9b-4185-90c9-e233a5ca1af9" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px;">
  <a href="https://picasaweb.google.com/111104490436597119823/2013525#5881811450669197426" target="_blank"><img style="border: none; padding: 0px; margin: 0px;" alt="ScreenClip.png" src="https://lh4.ggpht.com/-FnHpl4K1rFI/UaBkWej2aHI/AAAAAAAAAWE/_UUJtvreJ_I/ScreenClip.png" /></a>
</div>

#### iPad側の設定

iPadにSplashtop XDisplayのAppをインストール。

<a href="https://click.linksynergy.com/fs-bin/stat?id=SU3d78d7YDQ&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=https%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fsplashtop-xdisplay%252Fid446493657%253Fmt%253D8%2526uo%253D4%2526partnerId%253D30" target="_blank" rel="nofollow">Splashtop XDisplay</a>
  
<a href="https://click.linksynergy.com/fs-bin/stat?id=SU3d78d7YDQ&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=https%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fsplashtop-xdisplay%252Fid446493657%253Fmt%253D8%2526uo%253D4%2526partnerId%253D30" target="_blank" rel="nofollow"><img style="border-style: none;" alt="iTunesで見る" src="https://ax.phobos.apple.com.edgesuite.net/images/web/linkmaker/badge_appstore-lrg.gif" /></a>

&nbsp;

これで、アプリを起動すれば同一wifi内にあるパソコンを自動検出するはずが・・・

<span style="color: #ff0000; font-size: x-large;">接続できない！！(ノД｀)</span>

不思議なエラーコードが出て、接続は確立できない。

s=00 E=84000121

### イーモバイルのPocket wifiでハマったこと

Pocket wifiなどのモバイルwifiの場合、「プライバシーセパレータ（プライベートセパレーター）」を無効にする必要がある（デフォルト有効）以下、説明を引用。

[プライバシーセパレータ][2]

> 無線ルータとしての利用時、無線LANで接続されるPC間などのファイル共有、および無線LAN対応プリンタとの接続をする場合、以下にて **「プライバシーセパレータ」 の機能を無効** にする設定を行う必要があります

イーモバイルでの設定方法は、以下。

  1. ブラウザを起動し、<https://192.168.1.1/>へ接続
  2. GL01P設定ツールにログイン。ここは自分は購入時からなにも設定していなかった。デフォルトではadmin/adminで入れる。
  3. 初めて設定するばあいは、「かんたん設定」から、そうでない場合は、設定 -> 無線LAN基本設定 を選択。
  4. プライベートセパレータの設定を 有効から無効にして適用。

<div class="wlWriterEditableSmartContent" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:c45102d1-2bc4-4802-8fbd-6acc649a36f6" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px;">
  <a href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5881863572280001730" target="_blank"><img style="border: none; padding: 0px; margin: 0px;" alt="skitch.png" src="https://lh5.ggpht.com/-3-RkAbxmBrA/UaCTwWsPRMI/AAAAAAAAAWo/TQSYFn6ngio/skitch.png" /></a>
</div>

&nbsp;

これでOK。

  * [Cre&#8217;ps Blog iPad専用アプリ「Air Display」は使える！ Pocket WiFiで使うときの注意事項！][3]
  * [YOU! ポケットWi-fiでAir Displayが繋らないんじゃない？ | ウープスデザインブログ (デザイナーまめこ)][4]

### ついにデュアルディスプレイ

<div class="wlWriterEditableSmartContent" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:1278f3c1-5c07-4b8f-8f3b-4691c1d57b33" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px;">
  <a href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5881860384736422674" target="_blank"><img style="border: none; padding: 0px; margin: 0px;" alt="20130525185513.jpg" src="https://lh4.ggpht.com/-Gibi_J5kaww/UaCQ20KoKxI/AAAAAAAAAWQ/zYE2CZAWgXI/20130525185513.jpg" /></a>
</div>

<span style="color: #ff0000; font-size: large;">これはやべぇ、誰かあたしの鼻血を止めてください(*&#8217;∀&#8217;人)</span>

[https://www.youtube.com/embed/nw1ZdZ57sp4?rel=0]<!--:-->

<!--:en-->

<div id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:91284456-5961-431d-b020-f775b1d1dd58" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5881872357724241490"><img style="border: none; padding: 0px; margin: 0px" alt="20130525200911.jpg" src="https://lh6.ggpht.com/-govSTkuH5k0/UaCbvvBXvlI/AAAAAAAAAW4/fDzE0ylGH8Y/20130525200911.jpg" /></a>
</div>

&#160;

会社にも、プライベートにも、どこにいくにもVAIOとiPadをもちあるいているアタクシですが、今日はiPadをデュアルディスプレイとして利用できるアプリがあることを知り、鼻血がでるほど興奮したので、紹介します。

#### 環境

  * Windows 7 64bit 
  * iPad 3 

### Splashtop XDisplayの紹介

利用するには、iPadアプリ <font color="#0000ff">Splashtop XDisplay</font>を入れます。これを入れることで、iPadをデュアルディスプレイにすることができます。

<div class="sticky-itslink">
  <a href="https://click.linksynergy.com/fs-bin/stat?id=SU3d78d7YDQ&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=https%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fsplashtop-xdisplay%252Fid446493657%253Fmt%253D8%2526uo%253D4%2526partnerId%253D30" rel="nofollow" target="_blank"><img title="Splashtop XDisplay" style="border-top-style: none; border-left-style: none; border-bottom-style: none; float: left; border-right-style: none; margin: 5px" alt="Splashtop XDisplay" src="https://a15.phobos.apple.com/us/r1000/062/Purple/v4/4a/ef/ed/4aefed99-12e5-9dc6-2bce-6f69071ebca9/Icon-72.png" /></a> </p> 
  
  <div class="sticky-itslinktext">
    <a href="https://click.linksynergy.com/fs-bin/stat?id=SU3d78d7YDQ&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=https%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fsplashtop-xdisplay%252Fid446493657%253Fmt%253D8%2526uo%253D4%2526partnerId%253D30" rel="nofollow" target="_blank">Splashtop XDisplay</a> <br />Splashtop Inc. <br />価格： 0円 <a href="https://click.linksynergy.com/fs-bin/stat?id=SU3d78d7YDQ&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=https%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fsplashtop-xdisplay%252Fid446493657%253Fmt%253D8%2526uo%253D4%2526partnerId%253D30" rel="nofollow" target="_blank"><img style="border-top-style: none; border-left-style: none; border-bottom-style: none; border-right-style: none" alt="iTunesで見る" src="https://ax.phobos.apple.com.edgesuite.net/ja_jp/images/web/linkmaker/badge_appstore-sm.gif" /></a> <br /><span style="font-size: xx-small">posted with <a href="https://sticky.linclip.com/linkmaker/" target="_blank">sticky</a> on 2013.5.25</span> <br style="clear: left" />
  </div></p>
</div>

&#160;

無料版と450円の有料版があります。無料版は10分間で接続が解除される制限があるため、お試しで使ってみるのはよいと思う。

以下、Windowsパソコンとの連携ですが、MacやLinuxももちろん行けるはず。

### Splashtop XDisplayの設定方法

順に説明します。

#### Windowsでの設定

PCに専用ソフトStreamerを入れる。ダウンロードは以下から。 

<a href="https://www.splashtop.com/ja/splashtop2" target="_blank"><img class="alignleft" border="0" alt="" align="left" src="https://capture.heartrails.com/150x130/shadow?https://www.splashtop.com/ja/splashtop2" width="150" height="130" /></a> <a style="color: #0070c5" href="https://www.splashtop.com/ja/splashtop2" target="_blank">トップリモートデスクトップアプリ | iPad からコンピューターにアクセス | Splashtop 2 | Splashtop</a>      <img border="0" alt="" src="https://b.hatena.ne.jp/entry/image/https://www.splashtop.com/ja/splashtop2" />    <br style="clear: both" /><br class="Apple-interchange-newline" />ダウンロードしたら、インストーラを起動するとインストールされます。ここからは、Streamerの設定。

まずはアカウントの作成。

<div id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:367424f1-d983-450d-b480-7729170d9306" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/2013525#5881811031931632034"><img style="border: none; padding: 0px; margin: 0px" alt="ScreenClip.png" src="https://lh3.ggpht.com/-Iidekxn7Ico/UaBj-GpCOaI/AAAAAAAAAV8/S_ELoRk_iWc/ScreenClip.png" /></a>
</div>

次に、セキュリティキーを設定します。これで変な人からアクセスされることを防ぐ。

<div id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:3c01ac8f-8a9b-4185-90c9-e233a5ca1af9" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/2013525#5881811450669197426"><img style="border: none; padding: 0px; margin: 0px" alt="ScreenClip.png" src="https://lh4.ggpht.com/-FnHpl4K1rFI/UaBkWej2aHI/AAAAAAAAAWE/_UUJtvreJ_I/ScreenClip.png" /></a>
</div>

#### iPad側の設定

iPadにSplashtop XDisplayのAppをインストール。

<a href="https://click.linksynergy.com/fs-bin/stat?id=SU3d78d7YDQ&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=https%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fsplashtop-xdisplay%252Fid446493657%253Fmt%253D8%2526uo%253D4%2526partnerId%253D30" rel="nofollow" target="_blank">Splashtop XDisplay</a>   
<a href="https://click.linksynergy.com/fs-bin/stat?id=SU3d78d7YDQ&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=https%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fsplashtop-xdisplay%252Fid446493657%253Fmt%253D8%2526uo%253D4%2526partnerId%253D30" rel="nofollow" target="_blank"><img style="border-top-style: none; border-left-style: none; border-bottom-style: none; border-right-style: none" alt="iTunesで見る" src="https://ax.phobos.apple.com.edgesuite.net/images/web/linkmaker/badge_appstore-lrg.gif" /></a> 

&#160;

これで、アプリを起動すれば同一wifi内にあるパソコンを自動検出するはずが・・・

<font color="#ff0000" size="5">接続できない！！(ノД｀)</font>

不思議なエラーコードが出て、接続は確立できない。

s=00 E=84000121

### イーモバイルのPocket wifiでハマったこと

Pocket wifiなどのモバイルwifiの場合、「プライバシーセパレータ（プライベートセパレーター）」を無効にする必要がある（デフォルト有効）以下、説明を引用。

[プライバシーセパレータ][2]

> 無線ルータとしての利用時、無線LANで接続されるPC間などのファイル共有、および無線LAN対応プリンタとの接続をする場合、以下にて **「プライバシーセパレータ」 の機能を無効** にする設定を行う必要があります

イーモバイルでの設定方法は、以下。

  1. ブラウザを起動し、<https://192.168.1.1/>へ接続 
  2. GL01P設定ツールにログイン。ここは自分は購入時からなにも設定していなかった。デフォルトではadmin/adminで入れる。 
  3. 初めて設定するばあいは、「かんたん設定」から、そうでない場合は、設定 -> 無線LAN基本設定 を選択。 
  4. プライベートセパレータの設定を 有効から無効にして適用。 

<div id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:c45102d1-2bc4-4802-8fbd-6acc649a36f6" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5881863572280001730"><img style="border: none; padding: 0px; margin: 0px" alt="skitch.png" src="https://lh5.ggpht.com/-3-RkAbxmBrA/UaCTwWsPRMI/AAAAAAAAAWo/TQSYFn6ngio/skitch.png" /></a>
</div>

&#160;

これでOK。

  * [Cre&#8217;ps Blog iPad専用アプリ「Air Display」は使える！ Pocket WiFiで使うときの注意事項！][3] 
  * [YOU! ポケットWi-fiでAir Displayが繋らないんじゃない？ | ウープスデザインブログ (デザイナーまめこ)][4] 

### ついにデュアルディスプレイ

<div id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:1278f3c1-5c07-4b8f-8f3b-4691c1d57b33" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 10px; margin: 0px; display: inline; padding-right: 10px">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5881860384736422674"><img style="border: none; padding: 0px; margin: 0px" alt="20130525185513.jpg" src="https://lh4.ggpht.com/-Gibi_J5kaww/UaCQ20KoKxI/AAAAAAAAAWQ/zYE2CZAWgXI/20130525185513.jpg" /></a>
</div>

<font color="#ff0000" size="4"></font> 

<font color="#ff0000" size="4">これはやべぇ、誰かあたしの鼻血を止めてください(*&#8217;∀&#8217;人)</font>

[https://www.youtube.com/embed/nw1ZdZ57sp4?rel=0]<!--:-->

 [1]: https://futurismo.biz/en/archives/1871
 [2]: https://faq.emobile.jp/faq/view/102391
 [3]: https://creps.blog6.fc2.com/blog-entry-13.html
 [4]: https://blog.woopsdez.jp/archives/1615