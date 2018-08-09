---
author: admin
categories:
- Emacs
- 技術メモ
date: 2012-11-18T07:50:38+00:00
dsq_thread_id:
- 3.731581e+09
pvc_views:
- 4039
tags:
- Word
title: WordでEmacsキーバインドをしてみたメモ
type: post
url: /archives/=731
---

Wordでも、Emacsのキーバインドができるらしいので、メモしとく。   
以下、Word2010の環境で。多分他のバージョンでも同機能はある。

以下の手順で設定画面へ。   
[ファイル] > [オプション] > [リボンのユーザ設定] > [ユーザ設定]

右側に表示されているコマンドに対して、   
[割り当てるキーを押してください]からショートカットを入力。

[<img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb52.png" width="477" height="306" />][1]

### 基本的なコマンドとショートカットの対応表

<table border="1" cellspacing="0" cellpadding="2" width="442">
  <tr>
    <td valign="top" width="130">
      コマンド
    </td>
    
    <td valign="top" width="123">
      ショートカット
    </td>
    
    <td valign="top" width="187">
      意味
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="130">
      StartOfLine
    </td>
    
    <td valign="top" width="123">
      Ctrl+A
    </td>
    
    <td valign="top" width="187">
      行頭へ移動
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="130">
      EndOfLine
    </td>
    
    <td valign="top" width="123">
      Ctrl+E
    </td>
    
    <td valign="top" width="187">
      行末へ移動
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="130">
      CharRight
    </td>
    
    <td valign="top" width="123">
      Ctrl+F
    </td>
    
    <td valign="top" width="187">
      次へ移動
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="130">
      CharLeft
    </td>
    
    <td valign="top" width="123">
      Ctrl+B
    </td>
    
    <td valign="top" width="187">
      前へ移動
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="130">
      LineUp
    </td>
    
    <td valign="top" width="123">
      Ctrl+P
    </td>
    
    <td valign="top" width="187">
      上へ移動
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="130">
      LineDown
    </td>
    
    <td valign="top" width="123">
      Ctrl+N
    </td>
    
    <td valign="top" width="187">
      下へ移動
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="130">
      EditClear
    </td>
    
    <td valign="top" width="123">
      Ctrl+D
    </td>
    
    <td valign="top" width="187">
      一文字削除
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="130">
      EditCut
    </td>
    
    <td valign="top" width="123">
      Ctrl+W
    </td>
    
    <td valign="top" width="187">
      切り取り
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="130">
      EndOfLineExtend
    </td>
    
    <td valign="top" width="133">
      Ctrl+K
    </td>
    
    <td valign="top" width="187">
      行末までを選択
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="130">
      EditPaste
    </td>
    
    <td valign="top" width="133">
      Ctrl+Y
    </td>
    
    <td valign="top" width="187">
      貼り付け
    </td>
  </tr>
</table>

小さなライフハック。

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image52.png