---
author: admin
categories:
- Wordpress
- 技術メモ
date: 2013-01-02T06:31:38+00:00
dsq_thread_id:
- 3.7381568e+09
pdrp_attributionLocation:
- end
pvc_views:
- 2767
tags:
- バックアップ
- プラグイン
title: WordPress完全バックアップマニュアル(BackWPupでバックアップ)
type: post
url: /archives/=1129
---

このブログのレンタルサーバはロリポップを利用し、WordPressで運営しています。   
     <a href="https://px.a8.net/svt/ejp?a8mat=25GJVT+GBMX62+348+63WO1" target="_blank"><br /><img border="0" alt="" src="https://www26.a8.net/svt/bgt?aid=130102697987&wid=004&eno=01&mid=s00000000404001026000&mc=1" width="468" height="60" /></a>

     <img border="0" alt="" src="https://www16.a8.net/0.gif?a8mat=25GJVT+GBMX62+348+63WO1" width="1" height="1" />  
お正月ということで、万が一のデータロストやサーバダウンに備えたバックアップ方法を調べてみました。題して、

<span style="color: #0000ff; font-size: large">WordPress完全バックアップマニュアル</span>

なんだか、完全自殺マニュアルっぽくて、胡散臭さがいい感じです。

[https://www.youtube.com/embed/7BDxGeTnMxY]

&#160;

#### バックアップ対象について

WordPressのバックアップは、以下の２つに分けられます。

  * WordPress本体のバックアップ 
  * MySQLのバックアップ 

WordPressの方はサーバにFTPしてデータを持ってきて、データベースの方はMySQLにログインしてバックアップを作成して・・・・

なんて、手動バックアップはバカらしいですね。

<span style="color: #0000ff; font-size: large">WordPress本体とデータベースを自動かつ定期的にバックアップ</span>

できる便利なプラグインないかなーと探したところ、ありました。それが、

<span style="font-size: large"><a href="https://wordpress.org/extend/plugins/backwpup/">BackWPup</a></span>

です。では、順に見て行きたいと思います。

#### 環境

  * ロリポップ ロリポプラン 
  * WordPress 3.5 
  * MySQL 5.1.34 

### BackWPupを使ってバックアップする

#### BackWPupのインストール

ダッシュポードから[プラグイン] > [新規追加] を選択。   
検索で[BackWPup]を見つけて[今すぐインストール]を選択。   
インストールされたら[プラグインを有効化]して完了です。

#### BackWPupをどう設定するか

次に、BackWPupの設定をします。

<span style="color: #0000ff; font-size: large">WordPress本体とデータベースを自動かつ定期的にバックアップ</span>

の全ての要件を満たすために、以下のことを実施します。

  * 毎日2:00に定期バックアップを実行する 
  * [Dropbox][1]にバックアップする。 

バックアップする時間はサーバ負荷の少ない深夜を選びます。   
このプラグインの嬉しいところは、バックアップ先に[Dropbox][1]を選択できることです。   
<span style="color: #0000ff">自動でクラウド上に保存</span>できれば、バックアップシステムとしては完璧です。

他にも、FTPができるサーバ、Google Storage、Amazon S3、SugarSyncにもバックアップできるみたいです。

#### BackWPupの設定方法

ダッシュポードから[backWPup] > [Add New] を選択。   
[Job Type]で [File Backup]と[Database Backup]の両方にチェックが入っていることを確認。

[JobSchedule]で[Activate Scheduling]にチェックを入れる。   
深夜の2:00に実行するように設定。

[Database Jobs]でバックアップ対象のDBを選択。   
ここでは、Defaultのままで特にいじらない。

[File Backup]でバックアップしたいファイルの設定を細かく調整。   
自分がいじったのは、[Themes]の部分。不要なテーマはバックアップ対象外に。

<table style="width: auto">
  <tr>
    <td>
      <a href="https://picasaweb.google.com/lh/photo/n8jWrPJ7NR08kqs5IvYF_DyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite"><img alt="" src="https://lh3.googleusercontent.com/-c620TOqtx24/UOOIFVCKqkI/AAAAAAAAACE/Ex9LHC4BSm8/s400/wp_20130102_01.jpg" width="517" height="309" /></a>
    </td>
  </tr>
  
  <tr>
    <td style="text-align: right; font-family: arial,sans-serif; font-size: 11px">
      送信者 <a href="https://picasaweb.google.com/111104490436597119823/Futurismo?authuser=0&feat=embedwebsite">Futurismo</a>
    </td>
  </tr>
</table>

<p class="caution7">
  上記は、BackWPup1.xでの情報です。2.xではUIに変更がありました。 <br />設定項目に変更はありません。（そのうち書き直します）
</p>

#### Dropboxをバックアップ対象先に設定

Dropboxをバックアップ先に設定します。   
[Backup to Dropbox]のボックスで[Authenticate!]を選択します。

Dropboxの認証サイトに飛ぶので、そこで連携を[許可]します。

<table style="width: auto">
  <tr>
    <td>
      <a href="https://picasaweb.google.com/lh/photo/oLtij59xZJOmYfCS3dGUaTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite"><img alt="" src="https://lh4.googleusercontent.com/-rFWQzDYikDk/UOONODMUVmI/AAAAAAAAACk/qN1D1FXuBAk/s288/wp_20130102_02.JPG" width="423" height="166" /></a>
    </td>
  </tr>
  
  <tr>
    <td style="text-align: right; font-family: arial,sans-serif; font-size: 11px">
      送信者 <a href="https://picasaweb.google.com/111104490436597119823/Futurismo?authuser=0&feat=embedwebsite">Futurismo</a>
    </td>
  </tr>
</table>

[Root]で[Dropbox]を選択します。   
[Folder]でバックアップ先のフォルダを選択します。   
フォルダは予め作成しておく必要があります。ここでは、以下のように入力しました。   
(ここのパスが間違っていると[Backups]タブでErrorと表示されます)

> Buckup/sites/wordpress

最後にバックアップする世代数を入力します。

<table style="width: auto">
  <tr>
    <td>
      <a href="https://picasaweb.google.com/lh/photo/HsJ7hquJ9LK-cEQ4CzfJCTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite"><img alt="" src="https://lh6.googleusercontent.com/-6M-9tefzYSo/UOONOK0eYdI/AAAAAAAAACg/SVs2xl6ivlA/s400/wp_20130102_03.JPG" width="575" height="154" /></a>
    </td>
  </tr>
  
  <tr>
    <td style="text-align: right; font-family: arial,sans-serif; font-size: 11px">
      送信者 <a href="https://picasaweb.google.com/111104490436597119823/Futurismo?authuser=0&feat=embedwebsite">Futurismo</a>
    </td>
  </tr>
</table>

&#160;

上の[Job Types]の[Save Changing]を押して、終了です。

### バックアップを実行してみる

バックアップのテストをしてみます。   
[Jobs]タブから先ほど作成したJobで[Run Now]を選択して、実行してみます。

<table style="width: auto">
  <tr>
    <td>
      <a href="https://picasaweb.google.com/lh/photo/AV841mkEwZ0PfuS1CShIaDyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite"><img alt="" src="https://lh4.googleusercontent.com/-V-9DIZz4vbk/UOOPsltqA0I/AAAAAAAAADI/dKsmYbMOTtc/s400/shinjuku_20130102_05.PNG" width="400" height="275" /></a>
    </td>
  </tr>
  
  <tr>
    <td style="text-align: right; font-family: arial,sans-serif; font-size: 11px">
      送信者 <a href="https://picasaweb.google.com/111104490436597119823/Futurismo?authuser=0&feat=embedwebsite">Futurismo</a>
    </td>
  </tr>
</table>

すると、黒いコンソール画面に切り替わり、バックアップが実行されます。   
数分間、ハラハラドキドキしながら待つと進捗が100%になり、終了します。   
さあ、バックアップはされたかな・・・とDropboxを覗いてみます。

ブラボー。バックアップは成功したようです。   
backwpup\_1\_2013-01-02_10-36-38.zipというファイルが作成されました。

コレで枕を高くして眠ることができる。実際にバックアップしたデータをリストアできるかも試してみようと思いますが、長くなったのでまた次回。

<div style="display: none" id="fastlookup_top">
</div>

 [1]: https://www.dropbox.com/