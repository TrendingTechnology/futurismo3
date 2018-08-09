---
author: admin
categories:
- Jenkins
- Linux
date: 2013-05-19T10:20:11+00:00
dsq_thread_id:
- 3.7027226e+09
pvc_views:
- 9541
tags:
- CentOS
title: CentOS 6.4にJavaとJenkinsをインストールして設定する
type: post
url: /archives/=1348
---

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:4af30c66-203a-401f-af3b-70569d6721b4" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5879629917736079234"><img style="border: none; padding: 0px; margin: 0px" alt="SnapCrab_NoName_2013-5-19_19-6-4_No-00.png" src="https://lh6.ggpht.com/-QxDVT1YUB9I/UZikQjFrD4I/AAAAAAAAAVg/O5F4krz7bpc/SnapCrab_NoName_2013-5-19_19-6-4_No-00.png" /></a>
</div>

CentOSにJenkinsサーバを導入する手順をまとました。この公式手順にしたがいます。

[Installing Jenkins on RedHat distributions &#8211; Jenkins &#8211; Jenkins Wiki][1]

#### 環境

  * CentOS 6.4(ただし、Windows上のVMware Playerで動作している) 
  * Jenkins 1.515
  * Java 1.7.0 

### Javaのインストール

JenkinsはJavaで動作するので、Javaが入っていない場合は、先に入れます。自分の場合は、入ってなかったので、入れました。

ちなみにここで注意が必要。CentOSのデフォルトjavaではJenkinsは動作しないらしい。Sun公式Javaと互換性のあるもの(Sun-compatible)が必要か。

  * [Important Note on CentOS Java][1] 
  * [e\_p\_iのプログラム日記 &#8211; プログラマの秘密のあれこれ][2] 

すでにCentOS用のJavaが入っている場合は、削除してJavaを入れなおす。Sunと互換性のあるJavaを入れなおす。一番簡単な方法はjava-1.6.0-openjdkを入れること、と書いてある。記事が古そうなので、1.7を入れる。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:124386a0-ef9d-4b34-8557-aa6bd62fa1c0" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">sudo yum install java-1.7.0-openjdk
</pre>
</div>

インストールできたか確認。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:166ba929-9e4c-4ee1-8c14-059605649f4e" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">java -version
java version "1.7.0_19"
OpenJDK Runtime Environment (rhel-2.3.9.1.el6_4-i386)
OpenJDK Client VM (build 23.7-b01, mixed mode, sharing)
</pre>
</div>

関係ないけど、Windowsに導入した以下の記事も参考。いろいろ雑学がのってます。

[Java JDK インストール方法まとめ(Windows) | Futurismo][3]

### Jenkinsのインストール

公式HPにそってコマンドを叩くだけの簡単なお仕事。wgetも入れておくこと。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:956b5210-a976-46e6-a05f-a1adde153370" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins-ci.org/redhat/jenkins.repo
sudo rpm --import https://pkg.jenkins-ci.org/redhat/jenkins-ci.org.key
sudo yum -y install jenkins</pre>
</div>

簡単かとおもったが、エラーした。。。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:a421778a-5bfc-410c-8274-c820888479eb" class="wlWriterEditableSmartContent">
  <pre name="code" class="c:nogutter:nocontrols"> Downloading Packages:
https://pkg.jenkins-ci.org/redhat/jenkins-1.515-1.1.noarch.rpm: [Errno 14] PYCURL ERROR 22 - "The requested URL returned error: 404 Not Found"
Trying other mirror.


Error Downloading Packages:
  jenkins-1.515-1.1.noarch: failure: jenkins-1.515-1.1.noarch.rpm from jenkins: [Errno 256] No more mirrors to try.
</pre>
</div>

以下のサイトを頼りに解決方法を探す。

[CentOS6.2にJenkinsをインストールする手順 | mawatari.jp][4]

rpmで直接インストールします。これでOK.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:40ecfe21-f09f-4420-80cf-0547aa0afdb0" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">wget https://pkg.jenkins-ci.org/redhat/jenkins-1.515-1.1.noarch.rpm
sudo rpm -ivh jenkins-1.515-1.1.noarch.rpm
</pre>
</div>

さあ、Jenkinsさん。Welcome to CentOS！

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:acaf6a1a-3173-41fe-b473-172a9f3402e5" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">sudo /etc/init.d/jenkins start
Starting Jenkins                                           [  OK  ]

# 起動とともにJenkins起動するおまじない
sudo /sbin/chkconfig jenkins on</pre>
</div>

Windows上のブラウザからアクセスしようとするが・・・アクセスできないお(´･ω･｀)

[<font color="#0066cc">https://192.168.118.130:8080/</font>][5]

### Jenkinsの設定

Jenkinsのデフォルトポートは8080なので、ファイアウォールの設定でポート8080を開ける。<span style="text-transform: none; background-color: rgb(255,255,255); text-indent: 14px; letter-spacing: normal; display: inline !important; font: 14px/16px &#39;MS PGothic&#39;; white-space: normal; float: none; color: rgb(0,0,0); word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px">設定ファイル /etc/sysconfig/iptablesを編集する。</span>

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:26b0c0cf-9a9e-4d03-8b8b-37e8b0b1402d" class="wlWriterEditableSmartContent">
  <pre name="code" class="c:nogutter">$ sudo emacs /etc/sysconfig/iptables</pre>
</div>

<span style="text-transform: none; background-color: rgb(255,255,255); text-indent: 14px; letter-spacing: normal; display: inline !important; font: 14px/16px &#39;MS PGothic&#39;; white-space: normal; float: none; color: rgb(0,0,0); word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px">以下の一行を追加する。ただし、COMMITの上に追加すること。</span>

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:ce983f2e-206f-4a71-86f3-fef073c9bb54" class="wlWriterEditableSmartContent">
  <pre name="code" class="c:nogutter">-A INPUT -m state --state NEW -m tcp -p tcp --dport 8080 -j ACCEPT</pre>
</div>

ファイアウォールの再起動を実施

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:4daf2126-fbf2-489a-b6b9-3d7b802b4375" class="wlWriterEditableSmartContent">
  <pre name="code" class="c:nogutter">$ sudo service iptables restart
iptables: ファイアウォールルールを消去中:                  [  OK  ]
iptables: チェインをポリシー ACCEPT へ設定中filter         [  OK  ]
iptables: モジュールを取り外し中:                          [  OK  ]
iptables: ファイアウォールルールを適用中:                  [  OK  ]
</pre>
</div>

<tt>Jenkins氏、北朝鮮より、間違えた、CentOSより来訪。</tt>

<div style="padding-bottom: 0px; margin: 0px; padding-left: 10px; padding-right: 10px; display: inline; float: none; padding-top: 0px" id="scid:887EC618-8FBE-49a5-A908-2339AF2EC531:a725a731-22dd-4ff9-98a2-df09d36da26d" class="wlWriterEditableSmartContent">
  <a target="_blank" href="https://picasaweb.google.com/111104490436597119823/Futurismo?authkey=Gv1sRgCM-A3fCH6v_BOQ#5879629908911106162"><img style="border: 1px solid #ccc; background-color: white; padding: 6px; margin: 0px" alt="SnapCrab_NoName_2013-5-19_19-6-22_No-00.png" src="https://lh5.ggpht.com/-RqR1fJZxlt8/UZikQCNoqHI/AAAAAAAAAVc/EQv2kh6rNik/SnapCrab_NoName_2013-5-19_19-6-22_No-00.png" /></a>
</div>

#### 参考

  * [さくらのVPS CentOS6.2にJenkinsさんをインストール &#8211; 僕の車輪の再発明][6] 
  * [Jenkins氏をさくらVPSに招聘する &#8211; 飲んだり寝たり][7]

 [1]: https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins+on+RedHat+distributions
 [2]: https://program.g.hatena.ne.jp/e_p_i/?word=*%5B%E3%83%84%E3%83%BC%E3%83%AB%5D
 [3]: https://futurismo.biz/archives/751
 [4]: https://mawatari.jp/archives/install-jenkins-to-centos6-2
 [5]: https://192.168.118.130:8080/
 [6]: https://kazuph.hateblo.jp/entry/2012/09/23/151623
 [7]: https://nomnel.net/blog/install-jenkins/