---
author: admin
categories:
- Linux
date: 2013-10-14T01:45:27+00:00
dsq_thread_id:
- 3.7294152e+09
excerpt: yum updateのミラーサイトを理化学研究所（理研）に変更したメモ
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
- 8863
side:
- "y"
tags:
- CentOS
title: yum updateのミラーサイトを理化学研究所（理研）に変更したメモ
title_view:
- "y"
type: post
url: /archives/=1839
---

<!--:ja-->

yum updateのミラーサイトを、いままでは筑波大学（ftp.tsukuba.wide.ad.jp）としていたのだが、ある不具合のため理化学研究所(ftp.riken.jp)をデフォルトのミラーサイトに変更してみた。理研のほうが、早いらしいといううわさも。

### 変更はCentOS-Base.repoを修正

変更は、/etc/yum.repos.d/CentOS-Base.repoを修正する。

  * mirrorlistをコメントアウト
  * baseurlを mirror.centos.orgからftp.riken.jpに変更。これをすべてのカテゴリで実施。

### /etc/yum.repos.d/CentOS-Base.repo

/etc/yum.repos.d/CentOS-Base.repoの設定。そのままコピペでOk.

    [tsu-nera]% cat /etc/yum.repos.d/CentOS-Base.repo
    

<!--:-->