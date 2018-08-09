---
author: admin
categories:
- Python
- 技術メモ
date: 2012-12-08T10:08:01+00:00
dsq_thread_id:
- 3.7303416e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3073
tags:
- Sphinx
title: watchdog(watchmedo)でrst定期監視してsphinxビルド。
type: post
url: /archives/=901
---

今週は、1週間かけて、shinixサイトを立ち上げた。   
シェルスクリプトでサーバ公開までを自動化した。   
シェルスクリプトがバクっていて、rm -rfでsphinxサイトを完全削除してしまった。

うわ～～～～～ w(◎o◎)w

sphinxでrstファイルを作成したあとに、自動ビルドが実行できたら便利だなと思った。   
というわけで、（なんか前置きとつながってないけど）自動ビルドを調べてみた。

2つの方法があるっぽい

  * omake 
  * watchdog 

今回は、watchdogを試してみた。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:eaf6d5a4-d8c7-4f29-b09b-7b3b13af8bc1" class="wlWriterEditableSmartContent">
  <div>
  </div>
</div>

### watchdogでなにができる？

watchdogとはpythonモジュールの一つ。   
この中に含まれる、watchmedoコマンドを使うことで、   
ファイルの更新があったときにコマンドを実行できる。

#### 環境

  * Sphinx 1.1.3 
  * phthon 2.6 
  * Windows 7 64bit 

### watchdogのインストール

pythonとpython setuptoolはインストールされていることが前提。   
（なければ[このページ][1]を参考にして、インストール）   
インストールはコマンドプロンプトからeasy_installを実行する。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:944b7161-1684-46c0-9e14-b374fc04a6bb" class="wlWriterEditableSmartContent">
  <pre name="code" class="c">easy_install watchdog</pre>
</div>

### watchdogの使い方

watchdogのコマンド watchmodeを利用して更新を監視するには以下のコマンドを叩く。

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:f2e8b596-2d30-4af3-a9ec-43c8055af450" class="wlWriterEditableSmartContent">
  <pre name="code" class="py">
watchmedo shell-command --patterns="*.rst" --recursive --wait --command="make html"

</pre>
</div>

これで、rstファイルを編集すると、watchmedoコマンドが再帰的に変更されたファイルを検索して、変更を検出したら "make htm"を実行する。

#### watchmedoコマンドオプション

&#160;

<table border="1" cellspacing="0" cellpadding="2" width="400">
  <tr>
    <td valign="top" width="200">
      コマンド
    </td>
    
    <td valign="top" width="200">
      説明
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="200">
      -h, &#8211;help
    </td>
    
    <td valign="top" width="200">
      ヘルプ表示
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="200">
      -c COMMAND,<br /> <br />&#8211;command COMMAND
    </td>
    
    <td valign="top" width="200">
      実行したいコマンド<br />
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="200">
      -p PATTERNS,<br /> <br />&#8211;pattern PATTERNS, </p> 
      
      <p>
        &#8211;patterns PATTERNS </td> 
        
        <td valign="top" width="200">
          監視したい拡張子を指定
        </td></tr> 
        
        <tr>
          <td valign="top" width="200">
            -i IGNORE_PATTERNS,<br /> <br />&#8211;ignore-pattern IGNORE_PATTERNS </p> 
            
            <p>
              &#8211;ignore-patterns IGNORE_PATTERNS </td> 
              
              <td valign="top" width="200">
                無視する拡張子
              </td></tr> 
              
              <tr>
                <td valign="top" width="200">
                  -D,<br /> <br />&#8211;ignore-directories
                </td>
                
                <td valign="top" width="200">
                  無視するディレクトリ
                </td>
              </tr>
              
              <tr>
                <td valign="top" width="200">
                  -R, &#8211;recursive
                </td>
                
                <td valign="top" width="200">
                  再帰的に監視
                </td>
              </tr>
              
              <tr>
                <td valign="top" width="200">
                  &#8211;interval TIMEOUT<br /> <br />&#8211;timeout TIMEOUT
                </td>
                
                <td valign="top" width="200">
                  タイムアウト時間指定
                </td>
              </tr>
              
              <tr>
                <td valign="top" width="200">
                  -w, &#8211;wait
                </td>
                
                <td valign="top" width="200">
                  複数実行禁止
                </td>
              </tr></tbody> </table> 
              
              <p>
                &#160;
              </p>
              
              <h4>
                参考サイト
              </h4>
              
              <ul>
                <li>
                  <a href="https://tell-k.hatenablog.com/entry/2012/01/04/022229">omakeもmakeも使わずに、Sphinxドキュメントの継続的ビルド &#8211; Study08.net 対シンバシ殲滅用人型機動兵器</a>
                </li>
                <li>
                  <a href="https://d.hatena.ne.jp/nullpobug/20120331/1333125058">watchdogモジュールのwatchmedoコマンドが便利</a>
                </li>
              </ul>

 [1]: https://futurismo.biz/archives/805