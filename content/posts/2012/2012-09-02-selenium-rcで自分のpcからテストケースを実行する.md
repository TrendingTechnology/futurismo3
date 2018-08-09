---
author: admin
categories:
- ハッキング
date: 2012-09-02T08:39:00+00:00
dsq_thread_id:
- 3.7379707e+09
excerpt: Selenium RCで自分のPCからテストケースを実行する
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 5855
tags:
- Selenium
title: Selenium RCで自分のPCからテストケースを実行する
type: post
url: /archives/=292
---

<!--:ja-->Selenium IDEでテストケースができたけれど、


  
これではいちいちブラウザから起動しないとテストを実行できない。
  
定期的に実行することを自動化するためには、Selenium RCを入れる。

### Selenium RCでコマンドラインからテストを実行する

Selenium RCを使うことで、
  
Selenium IDEで作成したテストソースをコマンドラインから実行できる。
  
コマンドラインから実行できれば、あとはそれをJenkinsでスケジューリングすれば
  
よいというわけだ。というわけで、Selenium RCを導入する。

Selenium RCはServerとDriverの２つの部品からなる。
  
まずは、サイトからSelenium Serverをダウンロード。（日本語サイトは古い）
  
[<span style="color: #0066cc;">https://seleniumhq.org/download/</span>][1]

Selenium Serverは以下の形式で実行する

> java -jar seleium-server.jar <htmlSuite> <Webブラウザ名> <WebアプリケーションのURL> <テストスィートのURL> <テスト結果を出力するファイル>

前回作成した Selenium IDEのテストスイートを実行するには、
  
パラメータは以下をセット

<table width="562" border="1" cellspacing="0" cellpadding="2">
  <tr>
    <td valign="top" width="252">
      <Webブラウザ名>
    </td>
    
    <td valign="top" width="308">
      *firefox
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="252">
      <WebアプリケーションのURL>
    </td>
    
    <td valign="top" width="308">
      <a href="https://www.google.com">https://www.google.com</a>
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="252">
      <テストスィートのURL>
    </td>
    
    <td valign="top" width="308">
      C:\Selenium\1day_post_pure.html
    </td>
  </tr>
  
  <tr>
    <td valign="top" width="252">
      <テスト結果を出力するファイル>
    </td>
    
    <td valign="top" width="308">
      C:\Selenium\TestResult.html
    </td>
  </tr>
</table>

コマンドプロンプトより、コマンド実行。

> java -jar selenium-server-standalone-2.25.0.jar -htmlSuite &#8220;*firefox&#8221;
  
> &#8220;https://www.google.com&#8221; &#8220;C:\Selenium\1day\_post\_pure.html&#8221;
  
> &#8220;C:\Selenium\TestResult.html&#8221;

 [1]: https://seleniumhq.org/download/