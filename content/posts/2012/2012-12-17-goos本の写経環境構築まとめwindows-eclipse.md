---
author: admin
categories:
- Java
- TDD
- 技術メモ
date: 2012-12-17T11:58:50+00:00
dsq_thread_id:
- 3.734082e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3281
title: 実践テスト駆動開発(GOOS本)の写経環境構築まとめ(Windows + Eclipse)
type: post
url: /archives/=965
---

実践テスト駆動開発(Growing Object-Oriented Software, Guided by Tests略してGOOS本)を読んでいる。

  * https://www.growing-object-oriented-software.com/

開発環境構築が少し難しかったので、備忘録としてまとめ。

<div class="wlWriterEditableSmartContent" id="scid:81867AAF-BB02-476b-AE5D-12BDAC2E750D:987091f9-20f9-44b6-9b7e-02f521435380" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <a href="https://www.amazon.co.jp/exec/obidos/ASIN/4798124583/sleephacker-22/ref=nosim" target="_blank"><img alt="実践テスト駆動開発 テストに導かれてオブジェクト指向ソフトウェアを育てる (Object Oriented SELECTION)" src="https://ecx.images-amazon.com/images/I/61IlUpc4QkL._SL160_.jpg" /><br /> 実践テスト駆動開発 テストに導かれてオブジェクト指向ソフトウェアを育てる (Object Oriented SELECTION)<br /> Steve Freeman Nat Pryce </a>
</div>

&nbsp;

#### 設定環境

  * Windows 7 64bit

### 環境構築

以下の導入手順は省略で。

  * Java SE 1.7
  * Windows 7
  * Eclipse 4.2 Juno

### JUnit

Javaの定番xUnitフレームワーク。以下の記事を参考。

  * [JUnitのインストールとEclipseでの使い方まとめ][1]

### JMock

Java用Mockオブジェクト生成のためのフレームワーク。
  
このGoos本は、Mockオブジェクトを使ったTDDをまとめたもの。

  * <a style="widows: 2; text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; font: 14px/21px メイリオ, meiryo, arial, helvetica; white-space: normal; orphans: 2; color: #cc6600; word-spacing: 0px; text-decoration: underline; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;" title="JMockのインストールとEclipseでの使い方まとめ" href="https://futurismo.biz/archives/961">JMockのインストールとEclipseでの使い方まとめ</a>

### Smack

SmackはXMPPをJavaから利用するためのライブラリ。
  
XMPP(eXtensible Messaging and Presence Protocol)とは、XMLベースのメッセージプロトコルのこと。以下のリンクから最新版を落とす。

  * <https://www.igniterealtime.org/downloads/index.jsp> 
      * smack\_3\_2_2.zip

ダウンロードしたら、smack.jar,smackx.jarを追加する。
  
プロジェクトの[プロパティ] > [Javaのビルド・パス] > [外部Jarの追加]でsmack.jar,smackx.jar追加。

### Openfire

xmpp サーバであるOpenfireを入れる。

以下のリンクからwinodws版exeファイルの最新版を落とす。
  
各種プラットホームに対応したインストーラがある。

  * [<span style="color: #0066cc;">https://www.igniterealtime.org/downloads/index.jsp</span>][2] 
      * openfire\_3\_7_1.exe

実行ファイルを起動するとインストーラが立ち上がるので、[次へ]を押して完了。

#### Openfireの初期設定

[Launch Admin]を選択して、初期設定をする。

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="skitch(11)" alt="skitch(11)" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch11_thumb.png" width="244" height="175" border="0" />][3]

  1. Language Settiing
  
    日本語ないので、適当に選択。
  2. Server Setting
  
    Domainは[localhost]
  
    あとは、Defaultのままに設定(Portは9090)
  3. Database Settings
  
    [Embedded Database]を選択。データベース詳しくないので、とりあえず速度は出ないがセットアップが楽そうなので。
  4. Profile Settings
  
    Default選択。
  5. Administrator Account
  
    adminはデフォルトで設定済み。パスワードを入力(pass)。

#### OpenfireのGOOS設定

Opnefireの初期設定ができたら、次はGOOS環境で使うための設定。
  
ここからは、本のコラム『Openfireサーバをセットアップする』を参考にする。

  * 以下の3つのアカウントとパスワードを作っておく。
  
    [User/Groups]タブ ＞ [Create New User]から、以下のアカウントを作成。</p> 
      * sniper: sniper
      * auction-item-54321: auction
      * auction-item-65432: auction
  * [Server]タブ > [ServerInfomation]でServer Name が[localhost]であることを確認。（もしくは、下の[Edit Propertyで変更)
  * [Server]タブ > [Server Setting] > [Resource Policy]で[Never kick]を選択。
  * Openfireを再起動。
  
    (Windowsでは『管理者として実行』しないと、起動に失敗した)

### WindowLicker

JAVA用のGUIテスティングフレームワークであるWindowLickerをいれる。
  
<https://code.google.com/p/windowlicker/>

バイナリやパッケージはないらしい。
  
以下、英語のGoogleグループの質問ページを自動翻訳したもの。（珍妙な訳・・・）
  
[https://groups.google.com/forum/?fromgroups=#!topic/growing-object-oriented-software/d5sdcR5wTkw][4]

> あなたはwindowlicker.googlecode.comからWindowLickerを得ることができます。それはだ現在流動的な状況で、我々はそれが別のルックに対応するよう
  
> 異なるプラットフォーム上で実行されているが、コア機能と、感じている
  
> （ポーリング、タイムアウトやエラーレポート）安定しています。
  
> バイナリ配布はまだありません。あなたはそれをからチェックアウトする必要がありますSVNとAntでビルドします。
> 
> -ﾂꀀ NAT

というわけで、svnコマンドでcheckoutして持ってくる。

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:78b9bc9c-4989-44a1-b489-c10588310125" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c">svn checkout https://windowlicker.googlecode.com/svn/trunk/ windowlicker-read-only</pre>
</div>

githubにもあるっぽい。

[https://github.com/petercoulton/windowlicker][5]

<div class="wlWriterEditableSmartContent" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:cce67735-f319-4650-9543-d92159a0589b" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <pre name="code" class="c">$ git clone https://github.com/petercoulton/windowlicker.git windowlicker</pre>
</div>

落としてきたらとりあえず、ビルド(./buil.shを利用）

するといろいろとテストが始まって楽しい。

<div class="wlWriterEditableSmartContent" id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:b5d05cf3-4fb2-4602-9560-e47cf3b92784" style="margin: 0px; display: inline; float: none; padding: 0px;">
  <div>
  </div>
</div>

build/jarsにjarファイルが作成されるので、それをEclipseの外部jarに登録。

  * windowlicker-core-DEV.jar
  * windowlicker-swing-DEV.jar

#### 参考

  * <https://d.hatena.ne.jp/ToMmY/20110913/1315898710>
  * [<span style="color: #0066cc;">https://github.com/sf105/goos-code</span>][6]
  * [<span style="color: #0066cc;">https://t-kazu.hatenablog.com/</span>][7]

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://futurismo.biz/archives/844
 [2]: https://www.igniterealtime.org/downloads/index.jsp
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/skitch11.png
 [4]: https://groups.google.com/forum/?fromgroups=#!topic/growing-object-oriented-software/d5sdcR5wTkw "https://groups.google.com/forum/?fromgroups=#!topic/growing-object-oriented-software/d5sdcR5wTkw"
 [5]: https://github.com/petercoulton/windowlicker "https://github.com/petercoulton/windowlicker"
 [6]: https://github.com/sf105/goos-code
 [7]: https://t-kazu.hatenablog.com/