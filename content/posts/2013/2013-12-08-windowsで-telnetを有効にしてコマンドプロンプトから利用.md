---
author: admin
categories:
- 日記
date: 2013-12-07T23:30:21+00:00
dsq_thread_id:
- 3.7134748e+09
pvc_views:
- 2195
title: Windowsで コマンドプロンプトからtelnetする！またはアスキーアートでのスターウォーズがスゴイ件
type: post
url: /archives/=2028
---

Windows7 でtelnetを利用する方法のメモ。多分8もこれでいける。

今までは、Cygwinを利用してtelnetをしていたが、Cygwin 64bitは telnetをサポートしていないので、別の方法を調べた。

### telnetを有効にする

スタートメニューから

    コントロールパネル > プログラムと機能 > Windowsの機能を有効化または無効化
    

を選択。続いて、 Telnetクライアント、にチェック入れる。

有効にするには、Windowsの再起動が必要。

### コマンドプロンプトでつかう

コマンドプロンプトで telnetと入力すると、telnetクライアントの画面に移動する。

    Welcome to Microsoft Telnet Client
    
    Escape Character is 'CTRL+]'
    
    Microsoft Telnet>
    

利用方法は特殊なので、helpを参照。

### おまけ: スターウォーズ

このサイトへのtelnetがスゴイ！

    towel.blinkenlights.nl 23 
    

&#160;

なんと、アスキーアートでのスターウォーズが見れる！

[<img title="SnapCrab_NoName_2013-12-8_8-31-53_No-00" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="SnapCrab_NoName_2013-12-8_8-31-53_No-00" src="https://futurismo.biz/wp-content/uploads/SnapCrab_NoName_2013-12-8_8-31-53_No-00_thumb.jpg" width="493" height="246" />][1]

[<img title="SnapCrab_NoName_2013-12-8_8-32-41_No-00" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="SnapCrab_NoName_2013-12-8_8-32-41_No-00" src="https://futurismo.biz/wp-content/uploads/SnapCrab_NoName_2013-12-8_8-32-41_No-00_thumb.jpg" width="488" height="246" />][2]

 [1]: https://futurismo.biz/wp-content/uploads/SnapCrab_NoName_2013-12-8_8-31-53_No-00.jpg
 [2]: https://futurismo.biz/wp-content/uploads/SnapCrab_NoName_2013-12-8_8-32-41_No-00.jpg