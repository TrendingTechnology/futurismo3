---
author: admin
categories:
- Linux
- トラブルシューティング
date: 2018-01-16T14:29:31+00:00
dsq_thread_id:
- 6.4175754e+09
excerpt: BIOS 初期化で PC起動しなくなった。原因はCSM設定
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
- 184
side:
- "y"
title: BIOS 初期化で PC起動しなくなった。原因はCSM設定
title_view:
- "y"
type: post
url: /archives/=6883
---

## はじめに {#はじめに}

Wake on Lan の設定をしようと思っていて、BIOSの設定をいろいろいじっていたのだけれども、よくわかんなくなってきたので、BIOS初期化をしたら、PCがBIOS画面から立ち上がらなくなった。

なん・・だと・・・？？

## Boot Device Not Found {#boot-device-not-found}

いろいろ調べてみると、Boot Deviceがまったくなくなっているではないですか！

起動順序を入れ替え変えようにも、デバイスがないので、切り替えられない。試しに、USBを刺しこんでみると、USBを認識して表示はされるのだけれども、それをブートしようとはしない。

つんだ・・・。涙が出てきた。泣きじゃくった。と、そこへ！

## CSMの設定という光が {#csmの設定という光が}

どうも、CSMという設定を有効にするとよいという記事を見つけた。

  * [UEFI BIOSでドライブがブートメニューに表示されない・認識しない場合 | パソコントラブル 原因＆解決][1]

引用しますと、

> “UEFI BIOS“とは新しいBIOSの仕様。
  
> 以前の”レガシーBIOS”と比べると操作性の良さやセキュリティーの高さ、高速ブートなどの利点があります。
  
> そんなUEFI BIOSですが、接続したCD・DVD・HDDドライブがBIOS上から認識しないというトラブルの相談をよく受け付けます。―　正確には、デバイスとして認識するものの、ブートディスク（起動ディスクのこと）として選択できないというトラブルです。

ということで、UEFI BIOSという新しいBIOSの使用が私の邪魔をしているようだ。

## CSMとは {#csmとは}

CSMとは Compatibility Supported Module の略です。つまり、レガシーなBIOS、レガシーな周辺機器やドライバ、レガシーなOSとの互換性を保つための設定。

ということで、これが有効になると、レガシーな部品との互換性が回復してつかえるようになる。なにが原因かわからないのだけれども、ブートローダあたりが壊れてしまったのだろうか？

とはいえ、無事に復旧することができました。めでたしめでたし。

 [1]: https://jisaku-pc.net/hddnavi/uefi_bios_01.html