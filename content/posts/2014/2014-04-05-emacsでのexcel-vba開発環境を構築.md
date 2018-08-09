---
author: admin
categories:
- Emacs
- VBA
date: 2014-04-05T11:33:00+00:00
dsq_thread_id:
- 3.7261146e+09
excerpt: EmacsでのVBA開発環境を構築メモです
pvc_views:
- 5354
title: EmacsでのExcel VBA開発環境を構築
type: post
url: /archives/=2379
---

![][1]

Excel VBAなどの開発環境は、たいていVisual Basic Editorです。 

しかし、なんでもEmacs上でやらないと病気になってしまう、 もやしな人間たちにとってはEmacsでVBAが書きたいところ。 

というわけで、無謀にもEmacsでVBAの開発がでいないものか、調べてみました。 

[toc] 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    visual-basic-mode.el
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      visual-basic-mode.elというものを見つけました。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.emacswiki.org/cgi-bin/wiki/visual-basic-mode.el">EmacsWiki: visual-basic-mode.el</a>
      </li>
    </ul>
    
    <p>
      emacswikiからダウンロードして、ロードパスの通った場所に配置します。init.elにも以下を記述。
    </p>
    
    <pre><code> (autoload 'visual-basic-mode "visual-basic-mode" "Visual Basic mode." t)
 (setq auto-mode-alist (append '(("\\.\$latex frm\\|bas\\|cls\$$" .
                                 visual-basic-mode)) auto-mode-alist))
</code></pre>
    
    <p>
      VBAのファイルがハイライト表示される。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    text-scripting-vba
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      Excel VBAのコードのインポート・アウトポートを簡単にできる。そうすると、
    </p>
    
    <ul class="org-ul">
      <li>
        ViやEmacsでコードがかける
      </li>
      <li>
        バージョン管理ができる
      </li>
      <li>
        TDDでコーディングができる
      </li>
    </ul>
    
    <p>
      と、いろいろなメリットがある。
    </p>
    
    <p>
      本サイトは、以下。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://rsh.csh.sh/text-scripting-vba/define/text-vba.html">vi で書こう VBA (実践編) — Text Scripting on VBA</a>
      </li>
      <li>
        <a href="https://rsh.csh.sh/text-scripting-vba/define/resource-catalog/text-scripting-vba/quick-start.html#text-scripting-vba-quickstart">Quick Start: Text Scripting VBA — Text Scripting on VBA</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      使い方
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <p>
        xlsm拡張子のExcelデータを新規作成。test.xlsm
      </p>
      
      <p>
        開発タブからVBE起動(Alt+F11でも）。 開発タブはデフォルトで隠されているので、表示されていなければオプションから表示させる。
      </p>
      
      <p>
        ツールバーのファイル -> インポートを選択。 以下から落としてきたThisWorkbook.clsをインポート。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/tcsh/text-scripting-vba">tcsh/text-scripting-vba</a>
        </li>
      </ul>
      
      <p>
        ちなみに、文字コードがUTF-8なので、Shift-Jisに変換したほうがよい。変換方法は以下。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/1331">Cygwinにnkfをインストールして文字化け攻略する！ | Futurismo</a>
        </li>
      </ul>
      
      <pre><code>nkf -s ThisWorkbook.cls > ThisWorkbook_sjis.cls
</code></pre>
      
      <p>
        ExportThisNotebokとReloadModuleのマクロが追加される。
      </p>
      
      <p>
        標準Moduleに追加されるので、その内容をThisWorkBookに切り取り・貼り付けをする。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      コードを書く
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <p>
        サンプルとしてコンナコードを書く。./src/hello.bas
      </p>
      
      <pre><code>Sub Hello()
  MsgBox ("Hello VBA")
End Sub
</code></pre>
      
      <p>
        libdef.txtを作成。ここに読みこむソースのパスを相対パスで記述。
      </p>
      
      <pre><code>./src/hello.bas
</code></pre>
      
      <p>
        マクロ(F5 or Alt+F8)のReloadModuleを実行すると、 先ほど作成したhello.basが取り込まれる。
      </p>
      
      <p>
        こんなふうにすれば、Emacsで編集して取り込んでテストということが可能。
      </p></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    VB Lite Unit
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      VBAで TDDを実施するためのツールとして、VB Lite Unitがある。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://vb-lite-unit.sourceforge.net/">VB Lite Unit Home Page</a>
      </li>
    </ul>
    
    <p>
      詳しくは過去記事参照。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/43">VBA で TDDできるか調べてみた | Futurismo</a>
      </li>
      <li>
        <a href="https://futurismo.biz/archives/59">VB Lite Unitでの記法まとめ | Futurismo</a>
      </li>
    </ul>
  </div></p>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    vbasense.el
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      vbasenseなるものは、オムニ補間ができるとのこと。Special Thanks.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://aki2o.hatenablog.jp/entry/2014/01/10/Emacs%E3%82%92Visual_Basic_Editor%E4%B8%A6%E3%81%BF%E3%81%AEVBA%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83%E3%81%AB%E3%81%99%E3%82%8Bvbasense.el%E3%82%92%E4%BD%9C%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F">EmacsをVisual Basic Editor並みのVBA開発環境にするvbasense.elを作りました &#8211; 死ぬまでの暇潰し</a>
      </li>
    </ul>
    
    <p>
      el-getからインストールします。init.elにも以下を追加。
    </p>
    
    <pre><code>(require 'vbasense)

;; キーバインド
(setq vbasense-popup-help-key "C-:")
(setq vbasense-jump-to-definition-key "C->")

;; 必要に応じて適宜カスタマイズして下さい。以下のS式を評価することで項目についての情報が得られます。
;; (customize-group "vbasense")

;; 推奨設定を行う
(vbasense-config-default)
</code></pre>
    
    <p>
      M-x vbasense-load-libraryを実行したときに、 [VBASense] Not yet regist TLBINF32.DLLというエラーがでることがある。
    </p>
    
    <p>
      ただし、自分の環境ではどうも動かし方がわかりませんでした。 TLBINF32.DLLの登録方法がわからずに導入は挫折、残念。
    </p>
    
    <p>
      windows7 64bitだと、ダメなのかな？
    </p>
    
    <pre><code>C:\Windows\SysWOW64>regsvr32.exe TLBINF32.DLL
</code></pre>
    
    <p>
      vbasense-tli-filesに自分の環境のパスを変更しても、うまくパスをみつけてくれない。 chkTLI.vbsをNop応答にして、だましで少しつかってみる。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-5" class="outline-2">
  <h2 id="sec-5">
    Excelenium
  </h2>
  
  <div class="outline-text-2" id="text-5">
    <p>
      この記事とはまったく関係ないけれども、このツールがとてもおもしろそうなので、memo。
    </p>
    
    <p>
      ExcelとSeleniumを組合せたもので、Excelのテスト仕様書からSeleniumを実行できる。しかも、OSSとか。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://d.hatena.ne.jp/language_and_engineering/20090524/p1">&#8220;Excelenium&#8221;（エクセレニウム）で，快適な自動回帰テストを　　（Seleniumのテストスクリプトとテスト仕様書を自動生成） &#8211; 主に言語とシステム開発に関して</a>
      </li>
    </ul>
  </div></p>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/emacs_logo.jpg