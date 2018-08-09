---
author: admin
categories:
- VBA
- 日記
date: 2014-04-12T12:37:06+00:00
dsq_thread_id:
- 3.7296963e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 7238
tags:
- Excel
title: ExcelVBAのコードをimport/exportする
type: post
url: /archives/=2386
---

![][1]

Excel VBAの最大の課題が、保守性。 Excelの中にコードが縛られている。このコードを外に出すと、 

<ul class="org-ul">
  <li>
    バージョン管理ができる
  </li>
  <li>
    VimやEmacsなどのエディタで開発できる
  </li>
  <li>
    テスト駆動開発できる
  </li>
</ul>

などなど。 

レガシーなExcelVBAもバージョン管理、テスト、自動化という 現代ソフトウェア開発の三種の神器に従って開発ができる。 

調べてみると、同じようなことを考えている人たちがいた。 

<ul class="org-ul">
  <li>
    <a href="https://rsh.csh.sh/text-scripting-vba/">vi で書こう VBA — Text Scripting on VBA</a>
  </li>
  <li>
    <a href="https://aki2o.hatenablog.jp/entry/2014/01/09/VBA%E3%81%AE%E3%82%BD%E3%83%BC%E3%82%B9%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E7%AE%A1%E7%90%86%E3%81%99%E3%82%8B%E3%81%AE%E3%82%92%E6%94%AF%E6%8F%B4">VBAのソースファイルをバージョン管理するのを支援するvba-porter.xlaを作りました &#8211; 死ぬまでの暇潰し</a>
  </li>
</ul>

これらの方法を利用してもいいのだが、 現在VBA絶賛勉強中のため、自分の学習も兼ねて、 VBAのコードをExcel内からimort/exportするコードを書いてみた。 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    苦労した点とか
  </h2>
  
  <div class="outline-text-2" id="text-1">
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      Rubyの win32oleがつかえなかった
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <p>
        はじめはRubyでやっちゃえと思ったけど、どうもwin32oleではメソッドがみつからなかった。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-1-2" class="outline-3">
    <h3 id="sec-1-2">
      Excel Objectについて
    </h3>
    
    <div class="outline-text-3" id="text-1-2">
      <p>
        標準モジュール、クラスモジュールはImpot/Exportができるのだが、 ThisWorkbookやSheetなどのExcel Objectはそれができない。 これらは、行の削除と挿入で対応した。
      </p>
      
      <pre><code>Private Sub InsertLines(myFile As String)
  Dim myFSO As New FileSystemObject
  Dim myBaseName As String: myBaseName = myFSO.GetBaseName(myFile)
  
  With ThisWorkbook.VBProject.VBComponents(myBaseName).CodeModule
    .DeleteLines StartLine:=1, count:=.CountOfLines
    .AddFromFile myFile
    
    ' Delete header lines
    .DeleteLines StartLine:=1, count:=4
  End With

  Set myFSO = Nothing
End Sub
</code></pre></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-1-3" class="outline-3">
    <h3 id="sec-1-3">
      自分で自分をリロードできない
    </h3>
    
    <div class="outline-text-3" id="text-1-3">
      <p>
        VBAで書くと、自分自身のコードをimport/exportすることができない。
      </p>
      
      <p>
        なので、ThisWorkbookとFileManagerという二種類のファイルに処理を分けて 2段階でインポートすることにした。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-1-4" class="outline-3">
    <h3 id="sec-1-4">
      Environment
    </h3>
    
    <div class="outline-text-3" id="text-1-4">
      <ul class="org-ul">
        <li>
          Windows 7 64bit
        </li>
        <li>
          Excel 2010
        </li>
      </ul>
      
      <p>
        </div>
      </p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2" class="outline-2">
    <h2 id="sec-2">
      最後に
    </h2>
    
    <div class="outline-text-2" id="text-2">
      <p>
        このベージの解説が素晴らしい。本当に、Special Thanks.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://rsh.csh.sh/text-scripting-vba/">vi で書こう VBA — Text Scripting on VBA</a>
        </li>
      </ul>
    </div></p>
  </div>

 [1]: https://futurismo.biz/wp-content/uploads/Windows_7_Vertical_Logo_Web.jpg