---
author: admin
categories:
- OSS
date: 2018-03-04T05:16:25+00:00
excerpt: 個人用ライフログ環境をmattermostで構築しました
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 120
side:
- "y"
tags:
- mattermost
title: 個人用ライフログ環境をmattermostで構築しました
title_view:
- "y"
type: post
url: /archives/=6945
---

## はじめに {#はじめに}

現在、ひとりslackにハマっている。チャンネルを話題ごとに分けることができたり、記事のメモを気軽に投稿できるのがよく、ひとりで大盛り上がりである。以下のようなチャンネルを作っている。

  * book
  * diary
  * tech
  * gtd
  * kaggle
  * mooc
  * work

しかし、あまりハマりすぎて、フリープランの壁にぶつかる。独りslackはフリープランで10000件の履歴という制限があるので、これはライフログの観点からよくない。独りtwitterも検討したのだけれどもチャンネルが分かれていないのが使いづらい。

そこで、slackのクローンのOSSである _mattermost_ を導入することにした。

  * <https://about.mattermost.com/>

mattermostのインストール方法は、Linux Nativeな環境にインストールする方法と、dockerをつかう方法がある。今回は、Linuxに直にインストールする方法を選んだ。

  * <https://about.mattermost.com/download/>

### 環境 {#環境}

  * Ubuntu 16.04 LTS
  * mattermost 4.7.2
  * mysql

## preview {#preview}

まずは、mattermostがどんなものか確認してみよう。mattermostがどんな感じかは、demo用お試しサーバにアクセスすると確認することができる。

  * <https://demo.mattermost.com/>

または、 preview用の dockerを imageを試すことで確認できる。

  * <https://hub.docker.com/r/mattermost/mattermost-preview/>

## インストール {#インストール}

  * <https://docs.mattermost.com/install/install-ubuntu-1604.html>

### mysqlのインストール {#mysqlのインストール}

mysqlのインストールをし、mysqlの設定をする。

    sudo  apt-get  install  mysql-server
    mysql -u root -p
    

    mysql>  create  user  'mmuser'@'%'  identified  by  'mmuser-password';
    mysql>  create  database  mattermost;
    mysql>  grant  all  privileges  on  mattermost.*  to  'mmuser'@'%';
    mysql>  exit
    

### mattermostサーバのインストール {#mattermostサーバのインストール}

最新版の アーカイブをダウンロードする。

  * <https://about.mattermost.com/download/>

ダウンロードしたものは、解凍して、/opt配下に置く。

    sudo mv mattermost /opt
    sudo  mkdir  /opt/mattermost/data
    sudo  useradd  --system  --user-group  mattermost
    sudo  chown  -R  mattermost:mattermost  /opt/mattermost
    sudo  chmod  -R  g+w  /opt/mattermost
    

/opt/mattermost/config/config.jsonを MySQL用に編集する。
  
`"DriverName"` を`"mysql"`　に。 DataSource を以下のように変える。

    "mmuser:mmuser-password@tcp(127.0.1.1:3306)/mattermost?charset=utf8mb4,utf8&readTimeout=30s&writeTimeout=30s"
    

さあ、ここまできたら試してみよう。

    cd /opt/mattermost
    sudo  -u  mattermost  ./bin/platform
    

これて起動して、 matter mostがたちあがれば成功！　簡単だね！

### mattermostサービス起動 {#mattermostサービス起動}

手動起動が成功したならば、次は自動起動。サービスに登録して、システム起動時に起動する。
  
/lib/systemd/system/mattermost.serviceを修正する。

    \[Unit\]
    Description=Mattermost
    After=network.target
    After=mysql.service
    Requires=mysql.service
    
    \[Service\]
    Type=simple
    ExecStart=/opt/mattermost/bin/platform
    Restart=always
    RestartSec=10
    WorkingDirectory=/opt/mattermost
    User=mattermost
    Group=mattermost
    LimitNOFILE=49152
    
    \[Install\]
    WantedBy=mysql.service
    

    sudo  systemctl  daemon-reload`
    sudo  systemctl  start  mattermost.service
    sudo  systemctl  enable  mattermost.service
    

これで立ち上げ完了です！

## 設定 {#設定}

ここからは、mattermostの設定をしていきます。

### Slackデータのインポート {#slackデータのインポート}

まずは、slackの過去データを エクスボートして、mattermostにインポート。

  * <https://myslack.slack.com/services/export>

### 日本語部分検索対応 {#日本語部分検索対応}

mattermostでは、日本語検索に難がある。現在、mysqlの方に対処方法があるので、それを試す。postgresは知らない。

  * [MattermostのMySQLで日本語の全文検索に対応する方法 \| Step On Board][1]

/etc/my.conf作成。

    systemctl restart mysql
    mysql mattermost -u mmuser -p mmuser-passoword
    

    mysql> ALTER TABLE Posts DROP INDEX idx\_posts\_message_txt;  
    mysql> ALTER TABLE Posts ADD FULLTEXT INDEX idx\_posts\_message_txt (\`Message\`) WITH PARSER ngram COMMENT 'ngram reindex';
    

他にもいろいろ設定したけれども、細かいのでココでは省略。

## おわりに {#おわりに}

結構時間がかかったのだけれども、なんとか個人用のライフログ環境がmattermostで構築できました。

![][2]

 [1]: https://www.lesstep.jp/step_on_board/mattermost/859/
 [2]: https://lh3.googleusercontent.com/ylckNWVmxQwYfeYTO5kCdP300VfYzXNdffKTaJMRIAgq6MoMSP-s6OieOlu-gvlSWBKk-NZbYnMz-sW9zNyA_m-_BJ4h1QVRtmouaMxy3mUXmORjayrwFNkS5UarxuBnRuqph1jI1ha17aV37Pg4sKPt8aBdSs5316w7GoWi2c9y2AfFxfe4gS2PpAcAfWXelJAT-zdc3XNY6p8-JrKNgSlCoIWqdmxi2NyVtwqZmg49AnUt2zf12D9fcHSg5Li6dy8UOas1VjesEX09IXdoeI9kUfIO8cPt-2h4LgS-H9GA2m2SdJXbf6-QlDYuaP_RDuD-32T1A5808oRH7_qXmeTbTZFJATrD3m_TO8g1P43KE-0OZdZ-2VGSZaBK1B6VzY7bSE_q0WqWMDEIym_wieXEXhHsYmNsBlZQ4agUutyUP4LSlTezDGLwArvAS9K4ImTegtZqJAzA2c7EIjygX59HtXz8kxYBfPE-WooVaP87LJJqMEW4PCqA78baHkQuyaFs0z5q4yK98x-ziJWhf8bTNpcF-QOmj8hwg9JpRcas7FZfCR7rKE3nYyZeSdAoRLxtATWfV1Zia_TbTOrxpcjzFBICM-EFg_A4eHk=w984-h716-no