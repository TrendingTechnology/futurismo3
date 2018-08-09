---
author: admin
categories:
- Ruby
- 技術メモ
date: 2014-03-22T05:56:00+00:00
dsq_thread_id:
- 3.705719e+09
excerpt: RubyからExcelを操作する win32oleの使い方メモです
follow:
- follow
index:
- index
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 7941
side:
- def
sub:
- def
tags:
- Excel
title: RubyからExcelを操作する方法について
type: post
url: /archives/=2330
---

[<img src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" alt="" width="256" height="256" />][1]

RubyからExcel操作をする手順について調べてみた。

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    RubyからExcelを操作するライブラリ
  </h2>
  
  <div id="text-1" class="outline-text-2">
    <p>
      RubyからExcelやスプレットシートを操作するライブラリはいくつかあるようだ。
    </p>
    
    <p>
      <a href="https://qiita.com/damassima/items/1b791ba90459ef0534fe">RubyでExcelファイルを扱うライブラリの比較 &#8211; Qiita</a>
    </p>
    
    <p>
      標準ライブラリに含まれているものは、Win32OLEというものなので、これを試す。
    </p>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      環境
    </h3>
    
    <div id="text-1-1" class="outline-text-3">
      <ul class="org-ul">
        <li>
          Windows 7 64bit
        </li>
        <li>
          cygwin
        </li>
        <li>
          Ruby 2.0
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-sec-1-2" class="outline-3">
  <h3 id="sec-1-2">
    Win32OLE
  </h3>
  
  <div id="text-1-2" class="outline-text-3">
    <p>
      Win32OLE は、COM とか ActiveX などと呼ばれたりする技術を扱うためのライブラリ。
    </p>
    
    <ul>
      <li>
        <a href="https://magazine.rubyist.net/?0003-Win32OLE">Rubyist Magazine &#8211; Win32OLE 活用法 【第 1 回】 Win32OLE ことはじめ</a>
      </li>
    </ul>
    
    <p>
      COM オブジェクトは WIN32OLE::new(ProgID)という形式で呼び出す。 Excelの場合は、ProgIDは&#8217;Excel.Application&#8217;となる。
    </p>
    
    <p>
      利用できるメソッドは以下のコマンドで表示できる。
    </p>
    
    <div class="org-src-container">
      <pre class="src src-language">$ ruby -r win32ole -e "excel = WIN32OLE.new('Excel.Application');puts excel.ole_methods;"
</pre>
    </div>
  </div>
</div>

<div id="outline-container-sec-1-3" class="outline-3">
  <h3 id="sec-1-3">
    Excelオブジェクトの整理
  </h3>
  
  <div id="text-1-3" class="outline-text-3">
    <ul class="org-ul">
      <li>
        Application ・・・ Excelオブジェクト本体
      </li>
      <li>
        WookBook ・・・ Excelワークブック
      </li>
      <li>
        WookSheet ・・・ Excelワークシート
      </li>
      <li>
        Range ・・・ Excelのセルやセルの集合。
      </li>
      <li>
        <a href="https://www.tech-notes.dyndns.org/excel_lib/excel_doc.html">Excelのクラスの説明</a>
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    やることリスト
  </h2>
  
  <div id="text-2" class="outline-text-2">
    <ul class="org-ul">
      <li>
        xlsx拡張子の既存ファイルを開く
      </li>
      <li>
        既存ファイルから情報を読みこむ
      </li>
      <li>
        既存ファイルから情報を書き込む
      </li>
      <li>
        ファイルを保存する
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      ファイルオープン
    </h3>
    
    <div id="text-2-1" class="outline-text-3">
      <p>
        Win32OLEを利用するには、wiin32oleをrequireする。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-ruby">require <span style="color: #e6db74;">'win32ole'</span>
</pre>
      </div>
    </div>
    
    <div id="outline-container-sec-2-1-1" class="outline-4">
      <h4 id="sec-2-1-1">
        Applicationオブジェクト
      </h4>
      
      <div id="text-2-1-1" class="outline-text-4">
        <p>
          excelオブジェクト
        </p>
        
        <div class="org-src-container">
          <pre class="src src-ruby"><span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">Excelオブジェクト生成</span>
excel = <span style="color: #66d9ef; font-weight: bold;">WIN32OLE</span>.new(<span style="color: #e6db74;">'Excel.Application'</span>)
<span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">FileSystemObject生成</span>
fso = <span style="color: #66d9ef; font-weight: bold;">WIN32OLE</span>.new(<span style="color: #e6db74;">'Scripting.FileSystemObject'</span>)
<span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">デバッグ用表示</span>
excel.visible = <span style="color: #66d9ef; font-weight: bold;">DEBUG_SHOW</span>
</pre>
        </div>
      </div>
    </div>
    
    <div id="outline-container-sec-2-1-2" class="outline-4">
      <h4 id="sec-2-1-2">
        WorkBookオブジェクト
      </h4>
      
      <div id="text-2-1-2" class="outline-text-4">
        <p>
          bookオブジェクトを作成してファイルを開く。
        </p>
        
        <div class="org-src-container">
          <pre class="src src-ruby"><span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">指定したファイルを開く</span>
book = excel.<span style="color: #66d9ef; font-weight: bold;">Workbooks</span>.<span style="color: #66d9ef; font-weight: bold;">Open</span>(fso.<span style="color: #66d9ef; font-weight: bold;">GetAbsolutePathName</span>(<span style="color: #66d9ef; font-weight: bold;">FILE_PATH</span>))
</pre>
        </div>
      </div>
    </div>
    
    <div id="outline-container-sec-2-1-3" class="outline-4">
      <h4 id="sec-2-1-3">
        WorkSheetオブジェクト
      </h4>
      
      <div id="text-2-1-3" class="outline-text-4">
        <p>
          シートの取得方法は以下。コレクションに従った記法もできるところが嬉しい。
        </p>
        
        <div class="org-src-container">
          <pre class="src src-ruby"><span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">一番左のシートを取得</span>
sheet = book.<span style="color: #66d9ef; font-weight: bold;">Worksheets</span>(1)

<span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">シート名が "Sheet1" のシートを取得</span>
sheet = book.<span style="color: #66d9ef; font-weight: bold;">Worksheets</span>(<span style="color: #e6db74;">"Sheet1"</span>)

<span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">bookに属するそれぞれのSheetについて操作</span>
book.<span style="color: #66d9ef; font-weight: bold;">Worksheets</span>.each {|sheet|
  puts sheet.<span style="color: #66d9ef; font-weight: bold;">Name</span>
}
</pre>
        </div>
        
        <ul>
          <li>
            <a href="https://d.hatena.ne.jp/maluboh/20070708#p1">2007-07-08 &#8211; まるぼ～の日記</a>
          </li>
        </ul>
      </div>
    </div>
    
    <div id="outline-container-sec-2-1-4" class="outline-4">
      <h4 id="sec-2-1-4">
        Rangeオブジェクト
      </h4>
      
      <div id="text-2-1-4" class="outline-text-4">
        <p>
          セルにアクセスする方法は以下。
        </p>
        
        <div class="org-src-container">
          <pre class="src src-ruby"><span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">D5にアクセス</span>
cell = sheet.<span style="color: #66d9ef; font-weight: bold;">Cells</span>.<span style="color: #66d9ef; font-weight: bold;">Item</span>(4, 5)
cell = sheet.<span style="color: #66d9ef; font-weight: bold;">Cells</span>.<span style="color: #66d9ef; font-weight: bold;">Item</span>(<span style="color: #e6db74;">"5"</span>, <span style="color: #e6db74;">"D"</span>)
cell = sheet.<span style="color: #66d9ef; font-weight: bold;">Range</span>(<span style="color: #e6db74;">"D5"</span>)
</pre>
        </div>
        
        <p>
          eachを利用してうまく処理するのがRubyをつかういいところ。
        </p>
        
        <div class="org-src-container">
          <pre class="src src-ruby"><span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">列ごとに処理</span>
sheet.<span style="color: #66d9ef; font-weight: bold;">UsedRange</span>.<span style="color: #66d9ef; font-weight: bold;">Rows</span>.each <span style="color: #f92672; font-weight: bold;">do</span> |row|
  <span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">セルごとに処理</span>
  row.<span style="color: #66d9ef; font-weight: bold;">Columns</span>.each <span style="color: #f92672; font-weight: bold;">do</span> |cell|
  <span style="color: #f92672; font-weight: bold;">end</span>
<span style="color: #f92672; font-weight: bold;">end</span>

<span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">A1 ～ A5 を取得する方法</span>
cells = sheet.<span style="color: #66d9ef; font-weight: bold;">Range</span>(<span style="color: #e6db74;">"A1:A5"</span>)
cells.each <span style="color: #f92672; font-weight: bold;">do</span> |cell|
<span style="color: #f92672; font-weight: bold;">end</span>
</pre>
        </div>
      </div>
    </div>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      指定したセルの読み書き
    </h3>
    
    <div id="text-2-2" class="outline-text-3">
      <p>
        Valueメソッドで値を書き換える
      </p>
      
      <div class="org-src-container">
        <pre class="src src-ruby"><span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">値の読み込み</span>
puts cell.<span style="color: #66d9ef; font-weight: bold;">Value</span>

<span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">値の書き込み</span>
cell.<span style="color: #66d9ef; font-weight: bold;">Value</span> = <span style="color: #e6db74;">"HogeHoge"</span>
</pre>
      </div>
    </div>
  </div>
  
  <div id="outline-container-sec-2-3" class="outline-3">
    <h3 id="sec-2-3">
      ファイルを保存する
    </h3>
    
    <div id="text-2-3" class="outline-text-3">
      <p>
        saveメソッドで上書き保存ができる。
      </p>
      
      <div class="org-src-container">
        <pre class="src src-ruby">book.save
</pre>
      </div>
      
      <p>
        Excel操作中に異常終了してしまうと、プロセスが残ってしまう。 Rubyの例外処理の仕組みをつかうのがTips
      </p>
      
      <div class="org-src-container">
        <pre class="src src-ruby">  <span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">始め処理</span>
<span style="color: #f92672; font-weight: bold;">begin</span>
  <span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">行いたい処理</span>
  sheet = book.<span style="color: #66d9ef; font-weight: bold;">Worksheets</span>(1)
  sheet.<span style="color: #66d9ef; font-weight: bold;">Cells</span>.<span style="color: #66d9ef; font-weight: bold;">Item</span>(2, <span style="color: #e6db74;">"C"</span>).<span style="color: #66d9ef; font-weight: bold;">Value</span> = <span style="color: #e6db74;">"HogeHoge"</span>
<span style="color: #f92672; font-weight: bold;">ensure</span>
  <span style="color: #8f8f8f;"># </span><span style="color: #8f8f8f;">終わり処理</span>
  book.<span style="color: #66d9ef; font-weight: bold;">Close</span>
  excel.<span style="color: #66d9ef; font-weight: bold;">Quit</span>
<span style="color: #f92672; font-weight: bold;">end</span>
</pre>
      </div>
    </div>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    結果
  </h2>
  
  <p>
  </p>
  
  <h2 id="sec-4">
    Links
  </h2>
  
  <div id="text-4" class="outline-text-2">
    <ul>
      <li>
        <a href="https://magazine.rubyist.net/?0004-Win32OLE">Rubyist Magazine &#8211; Win32OLE 活用法 【第 2 回】 Excel</a>
      </li>
      <li>
        <a href="https://qiita.com/damassima/items/1b791ba90459ef0534fe">RubyでExcelファイルを扱うライブラリの比較 &#8211; Qiita</a>
      </li>
      <li>
        <a href="https://naoty.hatenablog.com/entry/20100823/1282559185">WIN32OLEを使ったExcelの操作(1) &#8211; naoty.to_s</a>
      </li>
    </ul>
  </div>
</div>

 [1]: https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite