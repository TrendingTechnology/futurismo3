---
author: admin
categories:
- 技術メモ
date: 2015-01-05T07:53:00+00:00
dsq_needs_sync:
- 1
dsq_thread_id:
- 3.7253007e+09
excerpt: コマンドプロンプトからアカウント管理するメモ
pvc_views:
- 16229
title: Windows コマンド net user / net localgroup で コマンドプロンプトからアカウント管理するメモ
type: post
url: /archives/=2917
---

<img alt="" src="https://futurismo.biz/wp-content/uploads/Windows_7_Vertical_Logo_Web.jpg"/>

はじめに
========

2015 年の初仕事は, Windows 2003 サーバの障害復旧から始まった.

<blockquote class="twitter-tweet" lang="ja"><p>連休最後の昨日は AWS で Ubuntu や Windows2012 サーバを気軽に構築できることに感動した. &#10;そして, 仕事始めの今日は部門のオンポロファイルサーバが壊れたので Windows2003 のクリーンインストールからとは (-_-)</p>&mdash; きつね (@tsu_nera) <a href="https://twitter.com/tsu_nera/status/551949561254526977">2015, 1 月 5</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

結局復旧できない (データロスト??) なので, 明日も頑張ります.

ということで, 明日やることのメモ.

今日は, Windows2003 サーバを再インストールしたので,
明日はユーザとグループを作成し直す. できれば,
コマンドラインからやりたい.

コマンド
========

管理者権限で コマンドプロンプトを起動.

ユーザ管理
----------

net user コマンドを利用する.

### ユーザー名 + パスワードを指定して アカウント作成

``` {.text}
net user <ユーザ名> /add

net user tsune password /add
```

### アカウント確認

``` {.text}
net user tsune

ユーザー名                           tsune
フル ネーム                          西郷隆盛
コメント
ユーザーのコメント
国/ 地域番号                          000 (システム既定)
アカウント有効                       Yes
アカウントの期限                     無期限

最終パスワード変更日時               2015/01/05 15:37:36
パスワード有効期間                   2015/02/16 15:37:36
パスワード次回変更可能日時           2015/01/05 15:37:36
パスワードあり                       Yes
ユーザーによるパスワード変更可能     Yes

ログオン可能なワークステーション     すべて
ログオン スクリプト
ユーザー プロファイル
ホーム ディレクトリ
最終ログオン日時                     なし

ログオン可能時間                     すべて

所属しているローカル グループ        *HomeUsers
                                     *Users
所属しているグローバル グループ      *なし
コマンドは正常に終了しました.

```

### 本名も追加

``` {.text}
net user tsune password /add /fullname:"西郷隆盛"
```

グループ管理
------------

net localgroup コマンドを利用する.

### グループ新規作成

``` {.text}
net localgroup <グループ名> /add /comment:"<テキスト>"]

net localgroup hoge /add /comment:"実験"
```

### グループにユーザを所属させる

``` {.text}
net localgroup <グループ名> <ユーザ名> /add

net localgroup hoge tsune /add
```

ユーザーは次回ログオン時にパスワード変更が必要のオブションを有効にする.
-----------------------------------------------------------------------

これは, 初期パスワード設定後に,
ユーザにパスワード変更を強制するための仕組み.

Windows Vista, Windows Server 2008 以降では,
以下のオプションが利用できる.

``` {.text}
net user tsune passoword /add /logonpasswordchg:yes
```

-   [net user コマンドの LOGONPASSWORDCHG オプション - koi911's
    Blog](https://koi9112.blog.shinobi.jp/%E6%9C%AA%E9%81%B8%E6%8A%9E/net%20user%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%81%AElogonpasswordchg%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3)

Windows Server 2003 では??

-   [Command line user creation in Server
    2003](https://social.technet.microsoft.com/Forums/windowsserver/en-US/3e96c159-b4c1-4215-8b7a-370ea9590463/command-line-user-creation-in-server-2003?forum=winserverDS)
-   [GUI
    以外の方法で「ユーザーは次回ログオン時にパスワードの変更が必要」のチェックを入れたい -
    BIGLOBE なんでも相談室](https://soudan1.biglobe.ne.jp/qa1936302.html)

WSH を利用すればできるぽい.

Bookmarks
=========

-   [Net User
    コマンドの使用方法](https://support.microsoft.com/kb/251394/ja)
-   [Windows TIPS:net user コマンドの使い方 - ＠
    IT](https://www.atmarkit.co.jp/ait/articles/0609/02/news014.html)

