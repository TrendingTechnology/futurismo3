---
author: admin
categories:
- Linux
date: 2013-05-16T23:13:48+00:00
dsq_thread_id:
- 3.7031414e+09
pvc_views:
- 15766
tags:
- CentOS
- VMware
title: CentOSを最小構成(minimal)でVMware Playerにインストールした
type: post
url: /archives/=1330
---

以前、Windows上のVmwareにUbuntuを入れてみました。

[WindowsでVMware Player上のUbuntuを動かしてみたメモ | Futurismo][1]

UbuntuなどのDebian系Linuxもいいけれども、<font color="#0000ff">Linuxハッカーを目指すあたくし</font>としては、RedHat系もゴニョゴニョいじりたいわけでして。

そうはいっても、容量が貧弱なMyパソコンに２つ目のVMイメージはデカイ。なので、最小構成で、CentOSを入れてみて、容量がどんなもんか調べてみました。

#### 環境

  * Windows 7 64bit 
  * vmware player 5.0.1 build-894247 
  * CentOS 6.4 32bit 

### 64biit minimal CentOS のISOをダウンロード

ここが、CentOSの公式サイトです。

<https://www.centos.org/>

ミラーサイトからイメージファイルをダウンロードします。   
Downloads -> Mirror List ->South American, Asian, Oceania, Middle Eastern, African and Other Regional Mirrorsを選択。

さらに、Japanっぽいところから落としてきます。ここでは、JAISTからHTTPを選択。

ISOファイルは/pub/linux/centos/6.4/isos/配下にあります。x86_64が64bitでi386が32bit。ここでは、32bit版を選択。

64bitなのに、32bitをする理由は64bitでインストールしようとするとエラーしたので。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:50fa4725-6c10-47a2-96ed-958bb41d3a6b" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5878031258254400146"><img style="border: none; padding: 0px; margin: 0px" alt="centos5.png" src="https://lh5.ggpht.com/-G3Ca2wbr3TI/UZL2SUblWpI/AAAAAAAAAUU/E4kqQI2qNrU/centos5.png" /></a>
</div>

これは、BIOSの設定を変更すればOKらしい。BIOSがIntel-VT（AMDの場合はAMD-V）をサポートしていればいい。BIOS設定でVTをEnabledにするとつかえるらしい。詳しくはココ

[64bit OS を VMWare上にゲストOSとしてインストールする (ハギー@blog.弐)][2]

また、自分のpcに64bitOSが入るかどうかもチェックツールを使えば可能。

  * [VMware Server][3] 
      * <a style="text-align: left; text-transform: none; background-color: rgb(255,255,255); text-indent: 0px; letter-spacing: normal; font: 14px/17px arial, sans-sarif; white-space: normal; color: rgb(119,119,136); word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px" href="https://download3.vmware.com/software/wkst/VMware-guest64check-5.5.0-18463.exe" target="_blank"><font face="Arial">https://download3.vmware.com/software/wkst/VMware-guest64check-5.5.0-18463.exe</font></a> 

CentOSを最小構成でインストールするためには、minimalのisoを選びます。

  * [<font color="#0066cc">https://ftp.iij.ad.jp/pub/linux/centos/6.4/isos/i386/</font>][4] 
      * CentOS-6.4-i386-minimal.iso 

通常が4.1GBなのに対して、minimalは342MB！小さいですね！！

### vmwareにCentOSをインストールする

次に、CentOSをvmwareにインストールします。CUI操作の勉強も兼ねているので、ここではCUIオンリーなインストールをして、さらに省エネ化を図ります。

基本は、[Ubuntuの時と同じ][1]で。なので、vmwareのインストールはここでは省略。

#### vmware Playerの設定

<span style="text-transform: none; background-color: rgb(255,255,255); text-indent: 0px; letter-spacing: normal; display: inline !important; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; float: none; color: rgb(51,51,51); word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px">VMware Playerを起動して、[新規仮想マシンの作成]を選択。</span>

<span style="text-transform: none; background-color: rgb(255,255,255); text-indent: 0px; letter-spacing: normal; display: inline !important; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; float: none; color: rgb(51,51,51); word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px">ちなみに、「ISOイメージファイル」から簡易インストールを利用してインストールしようとしたが、minimalはうまくインストールでききなかった。コマンドがないよといわれて、そこで動かなくなった。</span>

ゲストOSでLinuxを選択。バージョンで CentOS を選択。 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:be1e15e4-776e-4f72-af0a-bced81573a7b" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5878031224433509810"><img style="border: none; padding: 0px; margin: 0px" alt="SnapCrab_新しい仮想マシン ウィザード_2013-5-15_9-45-9_No-00.png" src="https://lh3.ggpht.com/-o3Wu-8g7fQY/UZL2QWcDhbI/AAAAAAAAATo/YGGu7njgj4Q/SnapCrab_%2525E6%252596%2525B0%2525E3%252581%252597%2525E3%252581%252584%2525E4%2525BB%2525AE%2525E6%252583%2525B3%2525E3%252583%25259E%2525E3%252582%2525B7%2525E3%252583%2525B3%252520%2525E3%252582%2525A6%2525E3%252582%2525A3%2525E3%252582%2525B6%2525E3%252583%2525BC%2525E3%252583%252589_2013-5-15_9-45-9_No-00.png" /></a>
</div>

仮想マシン名と場所はデフォルトのままで。 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:94403772-6e76-48ba-af9f-9b13555385b5" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5878031207385078498"><img style="border: none; padding: 0px; margin: 0px" alt="SnapCrab_新しい仮想マシン ウィザード_2013-5-15_9-45-31_No-00.png" src="https://lh5.ggpht.com/-IdnxXp85TY4/UZL2PW7ZGuI/AAAAAAAAATc/AOzUmk7KbRg/SnapCrab_%2525E6%252596%2525B0%2525E3%252581%252597%2525E3%252581%252584%2525E4%2525BB%2525AE%2525E6%252583%2525B3%2525E3%252583%25259E%2525E3%252582%2525B7%2525E3%252583%2525B3%252520%2525E3%252582%2525A6%2525E3%252582%2525A3%2525E3%252582%2525B6%2525E3%252583%2525BC%2525E3%252583%252589_2013-5-15_9-45-31_No-00.png" /></a>
</div>

ディスク最大サイズを20GBから10GBにします。Windowsのほうが枯渇気味なので。ディスク最大サイズはあとから変更は可能。 さらに、仮想ディスクを単一ファイルとして格納にチェック。これは管理を簡単にすることが目的。 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:f318653c-38ab-4dd7-873d-362051e77f48" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5878031241768491362"><img style="border: none; padding: 0px; margin: 0px" alt="centos3.png" src="https://lh6.ggpht.com/-dk2LJJ_Pfk4/UZL2RXBCWWI/AAAAAAAAAUA/76QVf8rSP20/centos3.png" /></a>
</div>

最後に、設定を確認して完了を選択。 

次に、作成した仮想マシンを選択します。[ CD/DVD ] を選択して、右の[ ISOイメージファイルを利用する ] を選択し、先ほどダウンロードした CentOS用イメージファイルを選択します。これで準備完了。 

#### CentOSのインストール

CentOSのインストール仮想マシンの再生を選択し、CentOSを起動。   
[Install or upgrade an existing system] を選択。 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:b53bd6a3-39b0-4cd3-a787-8c94e5a90269" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5878031181563208370"><img style="border: none; padding: 0px; margin: 0px" alt="SnapCrab_CentOS - VMware Player (非営利目的の使用のみ)_2013-5-15_9-49-13_No-00.png" src="https://lh4.ggpht.com/-wlj0dw5LAMs/UZL2N2u-orI/AAAAAAAAATQ/YhMEHwksUnk/SnapCrab_CentOS%252520-%252520VMware%252520Player%252520%252528%2525E9%25259D%25259E%2525E5%252596%2525B6%2525E5%252588%2525A9%2525E7%25259B%2525AE%2525E7%25259A%252584%2525E3%252581%2525AE%2525E4%2525BD%2525BF%2525E7%252594%2525A8%2525E3%252581%2525AE%2525E3%252581%2525BF%252529_2013-5-15_9-49-13_No-00.png" /></a>
</div>

&#160;

テストみたいなものが現れるので、とりええず実行して次へ。 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:bedda7f9-0fef-497d-ade6-d2abdffde720" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5878031186811561010"><img style="border: none; padding: 0px; margin: 0px" alt="SnapCrab_CentOS - VMware Player (非営利目的の使用のみ)_2013-5-15_9-51-14_No-00.png" src="https://lh5.ggpht.com/-SRcbXVoeNYQ/UZL2OKSSJDI/AAAAAAAAATM/qn3lvgQP35g/s288/SnapCrab_CentOS%252520-%252520VMware%252520Player%252520%252528%2525E9%25259D%25259E%2525E5%252596%2525B6%2525E5%252588%2525A9%2525E7%25259B%2525AE%2525E7%25259A%252584%2525E3%252581%2525AE%2525E4%2525BD%2525BF%2525E7%252594%2525A8%2525E3%252581%2525AE%2525E3%252581%2525BF%252529_2013-5-15_9-51-14_No-00.png" /></a>
</div>

&#160;

めでたく、ロゴが現れました。( ﾟ∀ﾟﾉﾉﾞﾊﾟﾁﾊﾟﾁﾊﾟﾁ次へ。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:a277f00f-7f07-41ff-ba13-8bd491e6c668" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5878031215527612146"><img style="border: none; padding: 0px; margin: 0px" alt="SnapCrab_CentOS - VMware Player (非営利目的の使用のみ)_2013-5-15_9-58-0_No-00.png" src="https://lh4.ggpht.com/-JfEBZ6IQ2t4/UZL2P1QuTvI/AAAAAAAAATk/rEAN4bY4AL4/SnapCrab_CentOS%252520-%252520VMware%252520Player%252520%252528%2525E9%25259D%25259E%2525E5%252596%2525B6%2525E5%252588%2525A9%2525E7%25259B%2525AE%2525E7%25259A%252584%2525E3%252581%2525AE%2525E4%2525BD%2525BF%2525E7%252594%2525A8%2525E3%252581%2525AE%2525E3%252581%2525BF%252529_2013-5-15_9-58-0_No-00.png" /></a>
</div>

パーティション未定義なため警告が出る。[ どのようなデータであっても破棄してください] を選んで次へ。 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:c641968a-9f74-45e3-8787-a76802ef3a6d" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5878031165906073650"><img style="border: none; padding: 0px; margin: 0px" alt="SnapCrab_CentOS - VMware Player (非営利目的の使用のみ)_2013-5-15_10-0-19_No-00.png" src="https://lh3.ggpht.com/-EnB9YHmhRls/UZL2M8aBuDI/AAAAAAAAATE/7E0dv48V63E/s288/SnapCrab_CentOS%252520-%252520VMware%252520Player%252520%252528%2525E9%25259D%25259E%2525E5%252596%2525B6%2525E5%252588%2525A9%2525E7%25259B%2525AE%2525E7%25259A%252584%2525E3%252581%2525AE%2525E4%2525BD%2525BF%2525E7%252594%2525A8%2525E3%252581%2525AE%2525E3%252581%2525BF%252529_2013-5-15_10-0-19_No-00.png" /></a>
</div>

ホスト名の設定で、適切なホスト名を入れる。ネットワーク設定はインストール完了後に実施するため、ここではスキップ。

rootのパスワード、言語設定と、インストール方法を選択。ここは、インストール方法は仮想なので 『 すべての領域を利用する』 を選択。 

これで、インストールが開始される。minimalだからさぞかしなにもインストールしないとおもいきや、けっこういろいろなパッケージをインストールするのに驚く。Cygwinよりもずっとリッチじゃないか！

インストールが終わったら再起動。真っ黒なCUI画面が現れる。さすがminimal構成！

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:b083b21c-7469-4e20-adc8-a43a007b49e6" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5878031491925011618"><img style="border: none; padding: 0px; margin: 0px" alt="SnapCrab_CentOS - VMware Player (非営利目的の使用のみ)_2013-5-15_10-18-52_No-00.png" src="https://lh5.ggpht.com/-tBkpUVyQOAQ/UZL2f66_7KI/AAAAAAAAAUc/lhat3xD2c24/SnapCrab_CentOS%252520-%252520VMware%252520Player%252520%252528%2525E9%25259D%25259E%2525E5%252596%2525B6%2525E5%252588%2525A9%2525E7%25259B%2525AE%2525E7%25259A%252584%2525E3%252581%2525AE%2525E4%2525BD%2525BF%2525E7%252594%2525A8%2525E3%252581%2525AE%2525E3%252581%2525BF%252529_2013-5-15_10-18-52_No-00.png" /></a>
</div>

#### minimal構成の容量を確認

1.8GBでした。ちなみに、前回インストールしたUbuntuの標準インストールは5.16GB。minimalなので、軽いです。これならあまり容量を圧迫せずに使える(^O^)。

#### 参考

  * [VMware Playerを使ってCentOS6.2(minimal)をインストールする｜ヘビィ・ＳＭＤ！][5]

 [1]: https://futurismo.biz/archives/777
 [2]: https://haggy0108.net/blog2/2009/02/64_bit_os_vmwareos.html
 [3]: https://my.vmware.com/jp/web/vmware/details/processor_check_5_5_dt/dCpiQGhkYndkdA==
 [4]: https://ftp.iij.ad.jp/pub/linux/centos/6.4/isos/i386/
 [5]: https://ameblo.jp/smd310/entry-11182382161.html