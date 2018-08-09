---
author: admin
categories:
- Jenkins
- ハッキング
date: 2012-09-02T03:12:00+00:00
dsq_thread_id:
- 3.7305795e+09
excerpt: JenkinsをWindowsPCにインストールする
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 6642
title: JenkinsをWindowsPCにインストールする
type: post
url: /archives/=299
---

&nbsp;

### サーバ選定

本来ならば、常時稼動のサーバ上にJenkinsを入れたい。
  
今は、さくらインターネットとロリポップのサーバを借りているが、どちらもJenkinsが動かないようなので、とりあえずは自宅PCに。
  
ちょうしに乗ってきたらサクラVPSを契約するかな。
  
まあ、今でもかなり常時可能なので、要件は満たしているけどね;(^.^);

  * [ロリポップで聞きたいことが二点あります。][1]
  * [さくらのレンタルサーバーでのdaemon実行は禁止？][2]

### JenkinsをWindowsPCにインストールする

  1. 公式サイト（[<span style="color: #0066cc;">https://jenkins-ci.org/</span>][3]）にアクセスする。
  2. 右のサイドバーにある [Or native package]からWindowsを選択する。[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb4.png" alt="image" width="373" height="199" border="0" />][4]
  3. ダウンロードしたファイルを解凍し、インストーラを起動(setup.exeのほう）
  4. Webブラウザから「<https://localhost:8080>」にアクセス。
  5. Jenkins導入完了！

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb5.png" alt="image" width="320" height="230" border="0" />][5]

&nbsp;

参考:[Windows環境でもJenkins -執事さんとご対面-][6]

 [1]: https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&ved=0CDkQFjAD&url=http%3A%2F%2Fq.hatena.ne.jp%2F1107315097&ei=EJ1CULWEMqX2mAXxiYCoBA&usg=AFQjCNHO7Xe-2FHnHFR_4hsWym7daBG13g&sig2=_KMGTaGtnJSZZpeiWIBU5A
 [2]: https://www.cat-ears.net/archives/=318
 [3]: https://jenkins-ci.org/
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image4.png
 [5]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image5.png
 [6]: https://pplace.jp/2011/06/199/