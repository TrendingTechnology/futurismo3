---
author: admin
categories:
- Wordpress
date: 2013-01-08T13:00:00+00:00
dsq_thread_id:
- 3.7280067e+09
pdrp_attributionLocation:
- end
pvc_views:
- 4464
title: WordPress完全移行マニュアル(BackWPupでリストア)
type: post
url: /archives/=1165
---

前回のエントリで、BackWPupを利用してWordPressで構築したサイトのバックアップを作成できたので、今回はこのデータをリストアしてみます。

  * [BackWPup WordPress完全バックアップマニュアル | Futurismo][1] 

前回はロリポップサーバからバックアップしたので、これをさくらインターネットにリストアしてみます。つまり、WordPress移行作業をします。（移行しないけど）

     <a href="https://px.a8.net/svt/ejp?a8mat=25GJVU+5CZJE+D8Y+61JSH" target="_blank"><br /><img border="0" alt="" src="https://www20.a8.net/svt/bgt?aid=130102698009&wid=004&eno=01&mid=s00000001717001015000&mc=1" width="468" height="60" /></a>   
<img border="0" alt="" src="https://www15.a8.net/0.gif?a8mat=25GJVU+5CZJE+D8Y+61JSH" width="1" height="1" />

#### 移行手順

<ul class="checklist">
  <li>
    リストア先の環境を用意
  </li>
  <li>
    リストア先サーバへファイルをアップロード
  </li>
  <li>
    リストア用のBackWPupスクリプトを実行する
  </li>
  <li>
    wp-config.phpを編集する
  </li>
</ul>

### リストア先の環境を用意

まずは、さくらインターネットの管理画面にアクセスして、 MySQLの新しいデータベースを作成します。

右のツールバーから[データベースの設定] > [データベースの新規作成]を選択。   
データベース名を入力して、[データベースを作成する]を選択。

[<img alt="" src="https://lh6.googleusercontent.com/-hehY2Lb29Cc/UOlzm4u1TpI/AAAAAAAAAF0/2FRbliITFcE/s400/backwpup_20130103_03.PNG" width="400" height="246" />][2]

これで、データベースが作成できました。   
以下の情報をメモしておきます。

  * データベースサーバ名 
  * 作成したデータベース名 
  * データベース ユーザ名 
  * データベース パスワード 

[<img alt="" src="https://lh3.googleusercontent.com/-0pfWf7YfuxI/UOl1CE_N-KI/AAAAAAAAAGs/-jHcaiexhns/s400/backwpup_20130106_06.PNG" width="400" height="213" />][3]

### リストア先サーバへファイルをアップロード

あらかじめBackWPupでバックアップしておいたzipファイルを解凍します。

リストア先のさくらインターネットのWordPressを配置するディレクトリに、解凍したファイルをまるごとアップロードします。

### リストア用のBackWPupスクリプトを実行する

リストアをするためにはBackWPupのスクリプトを実行します。   
まずは、スクリプトを以下のサイトから手に入れます。

  * Download 窶ｺ BackWPup.com 
      * backwpup\_db\_restore.php 

ダウンロードしたら、WordPressを配置するディレクトリにこのスクリプトもアップロードします。

アップロードしたスクリプトにブラウザからアクセスします。   
Select file to restore:と表示されるので、データベースにチェックをつけて、Nextを選択。

メモしておいた情報を元に、フォーマットを埋めていく。

  * データベースサーバ名 
  * 作成したデータベース名 
  * データベース ユーザ名 
  * データベース パスワード 

&#160;

[<img alt="" src="https://lh3.googleusercontent.com/-TJ6ZJ6IVOd0/UOlzncuAHTI/AAAAAAAAAGA/r2WtpY_6doU/s400/backwpup_20130106_05.PNG" width="400" height="167" />][4]

[Restore Done. Please delete the SQL file and this script.]と表示されてリストア終了。

&#160;

追記:2013年6月

なんと、backwpup\_db\_restore.php がなくなっていた。以下のエントリをもとにsqlのリストアをしてください。

<a href="https://futurismo.biz/archives/1417" target="_blank">BackWPupのbackwpup_db_restore.phpが消えた！それでもリストアする場合の方法メモ | Futurismo</a>

### wp-config.phpを編集する

メモしておいた以下の情報を、WordPressを配置するディレクトリにあるwp-config.phpを開いて修正する。

  * データベースサーバ名 
  * 作成したデータベース名 
  * データベース ユーザ名 
  * データベース パスワード 

&#160;

[<img alt="" src="https://lh6.googleusercontent.com/-Dnu6mkuX_CI/UOlznTHH2vI/AAAAAAAAAGE/DoN_YX_G1s8/s400/backwpup_20130106_04.PNG" width="400" height="170" />][5]

#### 感動の瞬間

<span style="text-decoration: underline"><span style="font-size: x-large">新規URLにアクセスして、リストア終了！ (^ ^) vv</span></span>

はじめてでも、簡単にバックアップできました。   
これで、枕を高くして眠ることができます。

<div id="fastlookup_top">
</div>

 [1]: https://futurismo.biz/archives/1129
 [2]: https://picasaweb.google.com/lh/photo/_sL6rJWGHHgsC3xGArgeajyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [3]: https://picasaweb.google.com/lh/photo/RZqBeQ1WNcFzkmIqp6BnfDyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [4]: https://picasaweb.google.com/lh/photo/8oP0bKGF5xsM9Tb7SVLj8zyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [5]: https://picasaweb.google.com/lh/photo/tCOeRvoOTBJo5vy0bT0CZTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite