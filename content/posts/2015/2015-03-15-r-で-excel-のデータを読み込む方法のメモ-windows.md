---
author: admin
categories:
- R
- 技術メモ
date: 2015-03-15T02:38:00+00:00
dsq_thread_id:
- 3.7152878e+09
excerpt: R で Excel のデータを読み込む方法のメモ (Windows)
pvc_views:
- 3006
tags:
- Excel
title: R で Excel のデータを読み込む方法のメモ (Windows)
type: post
url: /archives/=3045
---

![][1]

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      Windows 環境に R をインストールします. また, Excel データを R から読み込んでみます.
    </p>
    
    <p>
      [toc]
    </p>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      Environment
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <ul class="org-ul">
        <li>
          windows 8.1
        </li>
        <li>
          R version 3.1.3
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    R のインストール
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      以下から最新版をインストール.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://cran.r-project.org/bin/windows/base/">https://cran.r-project.org/bin/windows/base/</a>
      </li>
    </ul>
    
    <p>
      インストール後, パスを通す.
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> C:\Program Files\R\R-3.1.3\bin\x64<br /> [/sourcecode]
    </p>
    
    <p>
      コマンドプロンプトをを開いて <code>R</code> と打ち込んで R プログラムが立ち上がれば OK.
    </p>
    
    <p>
      文字化けする場合はコンソールで <code>chcp 65001</code> と入力で UTF-8 になる.
    </p>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    Excel 用のパッケージ取得
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      xlsx パッケージを利用することで, Excel ファイルを R から読みこむことができる.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://cran.r-project.org/web/packages/xlsx/">CRAN &#8211; Package xlsx</a>
      </li>
    </ul>
    
    <p>
      CRAN からインストール.R コンソール上で,
    </p>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221;]<br /> install.packages ("xlsx", dependencies = TRUE)<br /> [/sourcecode]
    </p>
    
    <p>
      使い方マニュアル.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://docs.google.com/viewer?url=https://cran.r-project.org/web/packages/xlsx/xlsx.pdf">xlsx.pdf</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-3-1" class="outline-3">
    <h3 id="sec-3-1">
      読み込みテスト
    </h3>
    
    <div class="outline-text-3" id="text-3-1">
      <p>
        以下のサイトからサンプルデータ習得して読み込んでみる.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.lanlan.co.jp/mtuinfo/exceldata.html">Excel データサンプル</a>
        </li>
      </ul>
      
      <p>
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> require (xlsx)
      </p>
      
      <p>
        # read excelsample.xls sheet1<br /> data <- read.xlsx ("C:\\Users\\tsu-nera\\Downloads\\excelsample.xls", 2)<br /> head (data)<br /> [/sourcecode]
      </p>
    </div>
    
    <div id="outline-container-sec-3-1-1" class="outline-4">
      <h4 id="sec-3-1-1">
        result
      </h4>
      
      <div class="outline-text-4" id="text-3-1-1">
        [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221;]<br /> 仮設工事 1 1 401350 320888 401350 79.953 100 401350 320888 401350 33.83 0<br /> 基礎工事及び土工事 1 1 7861394 6296746 7854794 80.098 99.917 7861394 6296746 7854794 0 0<br /> 屋外付帯工事 1 1 435800 348640 435800 80 100 435800 348640 435800 0 0<br /> 木工事 1 1 515720 412576 515720 80 100 515720 412576 515720 0 0<br /> 外壁工事 1 1 3239500 2575650 3207600 79.508 99.016 3239500 2575650 3207600 0 0<br /> 屋根及び板金工事 1 1 402400 321920 402400 80 100 402400 321920 402400 0 0<br /> [/sourcecode]
      </div>
    </div>
  </div>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    その他
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      <code>RExcel</code> を利用すると R へ Excel データを読み込まずとも, Excel 上から R を呼び出すことも可能.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.okada.jp.org/RWiki/?RExcel">RExcel &#8211; RjpWiki</a>
      </li>
      <li>
        <a href="https://cdn-ak.f.st-hatena.com/images/fotolife/R/Rion778/20091013/20091013004617.png">Excel 上で R を動かす RExcel &#8211; もうカツ丼でいいよな</a>
      </li>
      <li>
        <a href="https://shimana7.seesaa.net/article/372267775.html">RExcel のインストール方法が変わった: Memories of the Past by Takashi NAGAI</a>
      </li>
    </ul>
  </div>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/Windows_7_Vertical_Logo_Web.jpg