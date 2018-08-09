---
author: admin
categories:
- Linux
date: 2014-01-01T12:39:22+00:00
dsq_thread_id:
- 3.708061e+09
excerpt: デュアルブートでのDropbox Linux導入方法についてメモ
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
- 2279
side:
- "y"
tags:
- Mint
title: デュアルブート時のLinux環境Dropbox導入について(Windows 7/Mint)
title_view:
- "y"
type: post
url: /archives/=2077
---

<!--:ja-->

デュアルブートでDropboxを利用するとき、すでにDropboxアカウントは持っていて、Windows上にファイル群もある。

そんなときデュアルブートなので、WindowsのボリュームをマウントすればWindows上のDropboxにアクセスできる。なので、Dropboxの同期ファイルはWindows上のフォルダに指定すれば容量がすくなくなりうれしいです。

デュアルブートでのDropbox導入方法についてメモします。

### LinuxからWindows(NTFS)をマウントする

ここでは、/mnt/winというマウントポイントにマウントするとします。

    $mkdir -p /mnt/win
    

以下のコマンドでマウントします。マウントさせるボリューム名はGPartedツールを起動して調べるのがよいでしょう。

以下のコマンドでマウントします。マウントさせるボリューム名はGPartedツールを起動して調べるのがよいでしょう。(ここでは/dev/mapper/isw\_bfahbhfbaf\_Volume0p3)

    $ sudo mount -t ntfs /dev/mapper/isw_bfahbhfbaf_Volume0p3 /mnt/win
    $ df
    Filesystem                           1K-blocks     Used Available Use% Mounted on
    /dev/mapper/isw_bfahbhfbaf_Volume0p3  85284860 77874012   7410848  92% /mnt/win
    

このままでは、毎回手動でマウントさせないといけないので、Linux起動時に自動でマウントさせるようにします。/etc/fstabに以下の行を追加することで、Linux起動時にマウントするようになります。

    /dev/mapper/isw_bfahbhfbaf_Volume0p3 /mnt/win ntfs defaults 1 0
    

参考: [4.4. ファイルシステムのマウントとアンマウント][1]

### Dropboxのインストール

以下からDropboxのアプリをインストールする。

  * [Linux マシンに Dropbox をインストール][2]

Dropboxデーモンを起動する 
      
~/.dropbox-dist/dropboxd

指示にしたがって進んでいくと、同期用のディレクトリがきかれます。すでにDropboxアカウントは持っていて、Windows上にファイル群もある。デュアルブートなので、WindowsのボリュームをマウントすればWindows上のDropboxにアクセスできる。なので、Dropboxの同期ファイルはWindows上のフォルダを指定します。

/mnt/win/Documents and Settings/TSUNEMICHI/を指定する。すると、以下のように質問されるので、OKを選択。

    「Dropbox」という名前のフォルダが既に存在しています。そのフォルダ内にある既存のファイルをすべて、お使いの Dropbox で統合しますか？
    

ついでに、シンボリックリンクも作成。

    ln -s "/mnt/win/Documents and Settings/TSUNEMICHI/Dropbox" ~/
    

### Dropboxデーモンを自動起動

DropboxはLinux起動時に自動起動しないので、自動起動するように /etc/init.d/に起動スクリプトを作成します。

以下のサイトを参考にしました。ありがとうございます。

[Install Dropbox In An Entirely Text-Based Linux Environment &#8211; The Unofficial Dropbox Wiki][3]

ちゃんと起動したようです

    $ ps ax|grep dropbox
     1610 ?        Sl     0:13 /home/tsu-nera/.dropbox-dist/dropbox
    

<!--:-->

 [1]: https://www.freebsd.org/doc/ja/books/handbook/mount-unmount.html
 [2]: https://www.dropbox.com/install?os=lnx
 [3]: https://www.dropboxwiki.com/tips-and-tricks/install-dropbox-in-an-entirely-text-based-linux-environment#debianubuntu