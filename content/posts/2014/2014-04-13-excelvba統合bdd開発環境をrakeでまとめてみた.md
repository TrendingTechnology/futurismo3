---
author: admin
categories:
- VBA
- 技術メモ
date: 2014-04-13T06:51:44+00:00
dsq_thread_id:
- 3.7374881e+09
excerpt: <!--:ja-->　ExcelVBA統合BDD開発環境を構築したメモです<!--:--><!--:en-->　ExcelVBA統合BDD開発環境を構築したメモです<!--:-->
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 1908
tags:
- Excel
title: ExcelVBA統合BDD開発環境をrakeでまとめてみた
type: post
url: /archives/=2395
---

![][1]

ExcelVBAで統合BDD開発環境を構築したメモです。 

この記事は以下の記事の続きです。 

<ul class="org-ul">
  <li>
    <a href="https://futurismo.biz/archives/2379">EmacsでのExcel VBA開発環境を構築 | Futurismo</a>
  </li>
  <li>
    <a href="https://futurismo.biz/archives/2382">Excel VBAで テスト駆動開発してみる | Futurismo</a>
  </li>
  <li>
    <a href="https://futurismo.biz/archives/2386">ExcelVBAのコードをimport/exportする | Futurismo</a>
  </li>
  <li>
    <a href="https://futurismo.biz/archives/2388">ExcelVBAのステップ数をカウントする | Futurismo</a>
  </li>
</ul>

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    機能
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      開発環境というところが指す意味は、 rakeをつかってVBA開発で役立つ機能をまとめたということです。
    </p>
    
    <p>
      以下のような機能が実装済み。
    </p>
    
    <pre><code>
rake clean    # Remove any temporary products.
rake clobber  # Remove any generated file.
rake export   # export all files to specified dir
rake hide     # Hide Excel
rake import   # import All Modules
rake open     # Open or Connect Excel File
rake release  # Make releasee excel file
rake save     # Save Excel File
rake show     # Show Excel
rake spec     # Run All Tests
rake step     # Count Steps in Project
rake vbe      # Open Visual Basic Editor for Application
</code></pre></p>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      rakeからExcelマクロを実行する
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <p>
        ruby の win32oleを利用して、Excelのマクロを実行するところがこのツールのキモ。
      </p>
      
      <pre><code>@book.run("ShowTotalCodeLinesInProject")
</code></pre>
      
      <p>
        こんな感じで、runメソッドをつかって実行する。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-1-2" class="outline-3">
    <h3 id="sec-1-2">
      BDD実行エンジン
    </h3>
    
    <div class="outline-text-3" id="text-1-2">
      <p>
        実は、VB Lite Unitが会社の環境では使えなかった。おそらく、Excelが64bit版なことが原因。 ということで、代替手段を探したところ、コンナツールを発見。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/timhall/Excel-TDD">timhall/Excel-TDD</a>
        </li>
      </ul>
      
      <p>
        記法がRSpecに似ていて、しかも純VBAで書かれている。これを採用。
      </p>
      
      <p>
        これと、VBAコードの import/export機能の組み合わせによって
      </p>
      
      <ol class="org-ol">
        <li>
          Emacsで編集
        </li>
        <li>
          rake spec -> Excelにコードがインポートされてテスト実行
        </li>
        <li>
          イミディエイトウィンドウで結果を確認。
        </li>
        <li>
          バグってたらデバッガでステップ実行とか
        </li>
        <li>
          テストが成功したら、rake exportしてgitにcommit
        </li>
      </ol>
      
      <p>
        というTDDサイクルを回すことができるようになった。
      </p>
      
      <p>
        Excelを起動していない状態で rake specを実行すると、 メモリ不足でテストが実行できないというバグがある。（というより解消方法がわからない） rake openしたあとに、一旦 rake saveをすることで回避できる。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-1-3" class="outline-3">
    <h3 id="sec-1-3">
      フォルダ構造
    </h3>
    
    <div class="outline-text-3" id="text-1-3">
      <p>
        src/spec/helperの3つに分けた。
      </p>
      
      <p>
        生産物はsrcにいれる。テストコードは specフォルダに入れる。helperはお助けツール。
      </p>
      
      <p>
        specの命名規則はxxx_specとする。 ファイル名が_specかどうかでテストコードを判定しているので。 本当はもっと設定ファイルとかで設定させたいけど、そのうち。
      </p></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    コード
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <ul class="org-ul">
      <li>
        <a href="https://github.com/tsu-nera/ExcelVBA_BDD_Sample">https://github.com/tsu-nera/ExcelVBA_BDD_Sample</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      Environment
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <ul class="org-ul">
        <li>
          Windows 7 64bit
        </li>
        <li>
          Excel 2010
        </li>
      </ul>
      
      <p>
        ツールバーから 参照設定を選択肢、以下を追加する必要あり。
      </p>
      
      <ul class="org-ul">
        <li>
          Microsoft Visual Basic for Application Extention
        </li>
      </ul>
    </div></p>
  </div></p>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/Windows_7_Vertical_Logo_Web.jpg