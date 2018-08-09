---
author: admin
categories:
- Linux
- 技術メモ
date: 2012-11-24T06:34:02+00:00
dsq_thread_id:
- 3.7083476e+09
pdrp_attributionLocation:
- end
pvc_views:
- 4829
tags:
- VMware
title: VMware ToolsをVMware Playreにインストールしたメモ
type: post
url: /archives/=787
---

VMWare Toolsを VMware Playreにインストールしてみたので、メモ。   
これはゲストOS(ココてはUbuntu)に入れるもの。

#### VMWare Toolsでなにができるか

VMware Toolsとは、VMwareを効率的に使うためのツール郡。   
VMware ToolsをゲストOSに入れると、以下のことができる。

<ul class="checklist">
  <li>
    時刻の同期
  </li>
  <li>
    共有フォルダ
  </li>
  <li>
    ゲストOSとホストOS間のテキストのコピーペースト
  </li>
</ul>

など。（WMwareが出しているPDFは[ココ][1] )

#### 環境

  * ホストOS Windows 7 
  * ゲストOS Ubuntu 12.10 
  * VMware Player 5.0.1 

### VMware Toolsのインストール

上位のタブから、[Player] > [管理] > [VMware Toolのインストール]を選択。   
ホームフォルダにVMware Toolが現れる。 

[<img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image_thumb[23]" border="0" alt="image_thumb[23]" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb23_thumb.png" width="356" height="318" />][2]

右クリックして、展開を選択。   
ローカルディレクトリに展開。   
ここではhome配下にtempディレクトリを作ってそこに展開。

「Dashホーム」のアイコンをクリックし、   
検索欄に「terminal」と入力して、端末を起動する。

以下を入力して、解凍する。

<table border="1" cellspacing="0" cellpadding="2" width="400">
  <tr>
    <td valign="top" width="400">
      cd home/temp/vmwera-tool-distrib <br />sudo ./vmware-install.pl
    </td>
  </tr>
</table>

パスワードを聞かれるので入力する。   
あとはいろいろと聞かれるので、全て[Enter]で。   
インストールがすんだらUbuntuを再起動。

<table border="1" cellspacing="0" cellpadding="2" width="400">
  <tr>
    <td valign="top" width="400">
      sudo shutdown 窶途 now
    </td>
  </tr>
</table>

### Windows/Linux間で共有フォルダを設定してみる

まずは、ホスト側(Windows)の任意の場所にフォルダを新規作成。(Ubunts_shares)

VMware Playerの「仮想マシン設定の編集」をクリックし[オプション]>「共有フォルダ」を開く。

「常に有効」にチェックし、その下のフォルダで[追加]を選択。   
先ほど作成した共有フォルダを選択する。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb68.png" width="472" height="391" />][3] 

仮想マシンを再生する。   
すると、「コンピュータ/ファイルシステム/mnt/hgfs」に共有フォルダがマウントされる。   
（/mnt/hgfs/Ubuntu_shares）

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb69.png" width="381" height="317" />][4]

試しで、Windowsからファイルを入れてみると、リアルタイムでUbuntuから見れた。

[<img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb70.png" width="358" height="277" />][5]

 [1]: https://docs.google.com/viewer?url=https://www.vmware.com/files/jp/pdf/vmware-tools-installation-configuration_JA.pdf
 [2]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb231.png
 [3]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image68.png
 [4]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image69.png
 [5]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image70.png