---
author: admin
categories:
- Ruby
- 日記
date: 2014-01-12T13:14:12+00:00
dsq_thread_id:
- 3.737808e+09
excerpt: <!--:ja-->GoogleCLを利用してLinuxからpicasaに画像を投稿するスクリプト<!--:-->
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 1423
title: GoogleCLを利用してLinuxからpicasaに画像を投稿するスクリプトでブログ執筆効率化!
type: post
url: /archives/=2143
---

以前、Windows環境でgoogleclを利用した画像データのUploadの自動化をしたのですが、Linux環境でも同様のことをしてみました。

  * [GoogleCLを利用してWindowsのデスクトップからドラッグ&ドロップでpicasaに画像投稿するバッチスクリプト][1]

#### Environment

  * Linux Mint 16

### Install

Googleclは、以下でインストール

    % sudo apt-get install googlecl
    

初回通信でログイン認証する。ブラウザが起動するので認証する。

    & google calendar add "Lunch with Jim at noon tomorrow"
    

Googleカレンダーを起動して、予定が作成されていればOK.

### Picasaに投稿

picasa postコマンドで実行します。

    % google picasa post Futurismo tmuxinator.jpg

スクリプトにまとめると、ブログ執筆がさらに便利ですね。

    #!/usr/bin/env ruby
    # Picasaへアップロード
    `google picasa post Futurismo #{ARGV[0]}`
    
    # URLを取得
    url = `google picasa list --fields=url-direct|grep #{ARGV[0]}`
    
    # 標準出力にimgのURL出力
    img = "<img src=\"" + url.chop + "\">"
    puts img

 [1]: https://futurismo.biz/archives/1559