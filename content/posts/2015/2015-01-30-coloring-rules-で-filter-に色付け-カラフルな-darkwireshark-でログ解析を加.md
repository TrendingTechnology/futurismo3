---
author: admin
categories:
- 技術メモ
date: 2015-01-30T04:31:00+00:00
dsq_thread_id:
- 3.7535416e+09
excerpt: Coloring Rules で Filter に色付けする方法
pvc_views:
- 1813
tags:
- WireShark
title: Coloring Rules で Filter に色付け! カラフルな DarkWireShark でログ解析を加速する方法
type: post
url: /archives/=2959
---

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      前回の続きです.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/2943">もうダサいなんていわせない! 黒くてクールな DarkWireShark | Futurismo</a>
      </li>
    </ul>
    
    <p>
      WireShark の Coloring Rules をいじることで, 表示されるパケットに自由に色をつけることができたので紹介.
    </p>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    Coloring Rules をいじる
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      Wireshark を開き,
    </p>
    
    <ul class="org-ul">
      <li>
        ツールバーから view > Coloring Rules を選択.
      </li>
      <li>
        New を選択
      </li>
      <li>
        Name: で名前をつける. String で絞りこむ条件を入れる.
      </li>
    </ul>
    
    <p>
      この設定をすることで, 起動時から Filter に色をつけておくことができる. たとえば, 以下の記事に書いたフィルタをあらかじめ色付けしておけば, とてもログ解析がやりやすくなる.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/2956">WireShark で SMB/CIFS のパケット解析をするときの便利 Tips | Futurismo</a>
      </li>
    </ul>
    
    <p>
      以下, 色づけの例.
    </p>
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
      <colgroup> <col class="left" /> <col class="left" /> <col class="left" /> <col class="left" /> </colgroup> <tr>
        <th scope="col">
          Name
        </th>
        
        <th scope="col">
          Fildter
        </th>
        
        <th scope="col">
          ForeGround
        </th>
        
        <th scope="col">
          BackGround
        </th>
      </tr>
      
      <tr>
        <td>
          SMB2
        </td>
        
        <td>
          smb2
        </td>
        
        <td>
          #F8F8F2
        </td>
        
        <td>
          #272822
        </td>
      </tr>
      
      <tr>
        <td>
          SMB2 ERROR
        </td>
        
        <td>
          smb2.nt_status>0
        </td>
        
        <td>
          #F8F8F2
        </td>
        
        <td>
          #FF5800
        </td>
      </tr>
      
      <tr>
        <td>
          SMB2 CREATE
        </td>
        
        <td>
          smb2.cmd==5
        </td>
        
        <td>
          #F8F8F2
        </td>
        
        <td>
          #225D71
        </td>
      </tr>
    </table>
    
    <p>
      これだけでも, だいぶカラフルになる.
    </p>
    
    <div class="figure">
      <p>
        <img src="https://futurismo.biz/wp-content/uploads/wpid-SnapCrab_NoName_2015-1-30_13-19-44_No-00.png" alt="SnapCrab_NoName_2015-1-30_13-19-44_No-00.png" />
      </p></p>
    </div>
  </div>
</div>