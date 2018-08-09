---
author: admin
categories:
- C言語
- MOOC
- 技術メモ
date: 2014-05-10T23:16:00+00:00
dsq_thread_id:
- 3.743414e+09
excerpt: 組込みソフトウェア開発の勉強をedXでしました
pvc_views:
- 2057
tags:
- edX
- 組込み
title: '[edX]Embedded Systems – Shape The World ずっと受けたかった組み込みソフト開発の授業'
type: post
url: /archives/=2439
---

![][1]

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      レジスタも触ったことのないニセエセ組込みエンジニアなので、 リアル組込みエンジニアになりたくて、edXで組込み開発の学習をしました。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://www.edx.org/course/utaustinx/utaustinx-ut-6-01x-embedded-systems-1172#.U26vMhMu2IM">Embedded Systems &#8211; Shape The World | edX</a>
      </li>
      <li>
        <a href="https://edx-org-utaustinx.s3.amazonaws.com/UT601x/index.html">Embedded Systems</a>
      </li>
    </ul>
    
    <p>
      <iframe width="560" height="315" src="//www.youtube.com/embed/KUtsCLgNomo" frameborder="0" allowfullscreen></iframe>
    </p>
    
    <p>
      結果は、途中で挫折しました。全15週の10週目くらいで挫折。 なので、この記事も中途半端な記事になります。
    </p>
    
    <p>
      自分はリアル組み込みエンジニアにはなれませんでしたorz.
    </p>
    
    <p>
      [toc]
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    内容
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      0,1のフリップフロップから電子回路、レジスタへと、基礎からしっかり解説される。 オームの法則とか、忘れた。電子回路は読んで読まないふりをした。
    </p>
    
    <p>
      期待していた？電子回路の知識は十分過ぎるほど出てきた。 ADC,DACあたりはほんとうに挫折。
    </p></p>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      言語はC言語
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <p>
        言語はもちろん、C言語だ。補足的にアセンブラ言語もでてくる。楽勝楽勝。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      実践も重視
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <p>
        知識的な部分だけではなく、開発プロセスや品質の考え方、デバッグ手法など 実践的な部分も説明される。
      </p>
      
      <p>
        開発プロセスでは、フローチャートやサブルーチンといった、 手続き型用語が解説されて、やや時代遅れを感じた。
      </p></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    進め方
  </h2>
  
  <div class="outline-text-2" id="text-3">
  </div>
  
  <div id="outline-container-sec-3-1" class="outline-3">
    <h3 id="sec-3-1">
      講義の流れ
    </h3>
    
    <div class="outline-text-3" id="text-3-1">
      <p>
        イントロダクションとして、2人のコント？から始まる。 動画よりも、文章の方が多め。
      </p>
      
      <p>
        動画ではとくにパワーポイントは使わずにホワイトボードで解説されるので、 字がきれいでなく読みにくい。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-3-2" class="outline-3">
    <h3 id="sec-3-2">
      Labについて
    </h3>
    
    <div class="outline-text-3" id="text-3-2">
      <p>
        講義よりも比重が置かれているのが、Labと呼ばれている実機学習。
      </p>
      
      <p>
        毎週課題が出されて、それに取り組むことで講義の内容の理解を深める。
      </p>
      
      <p>
        課題の評価はテストコードで自動でチェックされる。 シミュレータと実機の両方で評価することが求められる。
      </p>
      
      <p>
        評価ボードは、Texas Instrumentsの EK-LM4F120XLというものを買った。 ネットで注文して購入する必要がある。ARMの Cortex-Mが載っている。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.tij.co.jp/tool/jp/ek-lm4f120xl">Stellaris LM4F120 LaunchPad 評価ボード &#8211; EK-LM4F120XL &#8211; TI ツール・フォルダ</a>
        </li>
      </ul>
      
      <p>
        開発環境としては、Keil uVision for the ARM, MDK-Lite (32KB) Editionを利用する。 ARMの開発をするためのIDE.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.keil.com/uvision/default.asp">µVision IDE &#8211; Overview</a>
        </li>
      </ul>
    </div>
    
    <div id="outline-container-sec-3-2-1" class="outline-4">
      <h4 id="sec-3-2-1">
        Lチカ
      </h4>
      
      <div class="outline-text-4" id="text-3-2-1">
        <iframe width="560" height="315" src="//www.youtube.com/embed/32fij3U6SUo" frameborder="0" allowfullscreen></iframe>
      </div></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    感想
  </h2>
  
  <div class="outline-text-2" id="text-4">
  </div>
  
  <div id="outline-container-sec-4-1" class="outline-3">
    <h3 id="sec-4-1">
      自己紹介
    </h3>
    
    <div class="outline-text-3" id="text-4-1">
      <p>
        まず、なぜ私がニセエセ組込みエンジニアなのかを説明したい。 そのために、まずは自分のしていた仕事を書こうと思う。 このブログに仕事の話を書くのも初めてな気がする。
      </p>
      
      <p>
        今は別のこと（社内ニートとも）をしているけれども、ちょっと前までは、 ストレージ装置の組込みソフトエンジニアだった。
      </p>
      
      <p>
        開発はそこそこ大規模で、機能モジュールごとに担当チームが別れている。
      </p>
      
      <p>
        自分の所属していたチームは、エラー発生時のリカバリが担当。 つまり、装置でエラーが発生したときに、 可用性を失わないためにあらゆる手段をつかってあれこれする役目。
      </p>
      
      <p>
        そのなかでも、自分が担当していた部分は、 ハードエラーが発生して装置内の各種ドライバから通知を受けたときに、 装置の可用性を失わないためはどうすればいいかを一生懸命考える部分。
      </p>
      
      <div class="figure">
        <p>
          <img src="https://futurismo.biz/wp-content/uploads/wpid-sample5.png" alt="sample.png" />
        </p></p>
      </div>
      
      <p>
        ハードと接するinterfaceはドライバ層で隠蔽されているため、 実は自分はレジスタを触ったことがない！
      </p>
      
      <p>
        そもそもレジスタがなんだかわからない。 雑誌『Interface』や『トランジスタ技術』が 会社の休憩ゾーンにおいてあるが、書いてあることがほぼわからない。
      </p>
      
      <p>
        これって、組込みエンジニアとしてどうなの？ これが、ニセエセ組込みエンジニアたる所以である。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-4-2" class="outline-3">
    <h3 id="sec-4-2">
      課題
    </h3>
    
    <div class="outline-text-3" id="text-4-2">
      <p>
        自分は、組込みエンジニアという肩書きではあるものの、 実際はハードウェアを理解していない。
      </p>
      
      <p>
        以下の記事にとても共感する。
      </p>
      
      <p>
        <a href="https://monoist.atmarkit.co.jp/mn/articles/0703/26/news101.html">組み込みギョーカイの常識・非常識（8）：組み込みソフトウェアって何</a>
      </p>
      
      <p>
        ちなみに、この記事を書いた著者のことを調べてみるとこんな本を書いてた。
      </p>
      
      <div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'>
        <div class='amazlink-list' style='clear: both;'>
          <div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'>
            <a href='https://www.amazon.co.jp/%E7%B5%84%E8%BE%BC%E3%81%BF%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%83%8F%E3%83%BC%E3%83%89%E3%82%A6%E3%82%A7%E3%82%A2%E5%85%A5%E9%96%80-%E7%B5%84%E8%BE%BC%E3%81%BF%E3%83%97%E3%83%AC%E3%82%B9Selection-%E3%81%BF%E3%82%8F-%E3%82%88%E3%81%97%E3%81%93/dp/4774140155%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4774140155' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/41MIz39174L._SL160_.jpg' style='border: none;' /></a>
          </div>
          
          <div class='amazlink-info' style='height:160; margin-bottom: 10px'>
            <div class='amazlink-name' style='margin-bottom:10px;line-height:120%'>
              <a href='https://www.amazon.co.jp/%E7%B5%84%E8%BE%BC%E3%81%BF%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%83%8F%E3%83%BC%E3%83%89%E3%82%A6%E3%82%A7%E3%82%A2%E5%85%A5%E9%96%80-%E7%B5%84%E8%BE%BC%E3%81%BF%E3%83%97%E3%83%AC%E3%82%B9Selection-%E3%81%BF%E3%82%8F-%E3%82%88%E3%81%97%E3%81%93/dp/4774140155%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4774140155' rel='nofollow' target='_blank'>組込みソフトウェアエンジニアのためのハードウェア入門 (組込みプレスSelection)</a>
            </div>
            
            <div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>
              posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 14.05.11
            </div>
            
            <div class='amazlink-detail'>
              みわ よしこ
            </div>
            
            <div class='amazlink-sub-info' style='float: left;'>
              <div class='amazlink-link' style='margin-top: 5px'>
                <img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18' /><a href='https://www.amazon.co.jp/%E7%B5%84%E8%BE%BC%E3%81%BF%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%83%8F%E3%83%BC%E3%83%89%E3%82%A6%E3%82%A7%E3%82%A2%E5%85%A5%E9%96%80-%E7%B5%84%E8%BE%BC%E3%81%BF%E3%83%97%E3%83%AC%E3%82%B9Selection-%E3%81%BF%E3%82%8F-%E3%82%88%E3%81%97%E3%81%93/dp/4774140155%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4774140155' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18' /><a href='https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/archives/c=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F6186429%2F&#038;m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D6186429%26surl%3Dbook' rel='nofollow' target='_blank'>楽天</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <p>
        ハードウェアの担当者と一緒の打ち合わせに参加しても、正直ちんぷんかんぷん。
      </p>
      
      <p>
        ということで、以下が学習目標。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-4-3" class="outline-3">
    <h3 id="sec-4-3">
      学習目標
    </h3>
    
    <div class="outline-text-3" id="text-4-3">
      <p>
        DMA Driver が DMA Portのハードエラーを検出して、 そのエラー要因ごとに異常を通知する仕組みを理解すること。
      </p>
      
      <p>
        DriverがDMAなのは、 仕事で一番お世話になったのが DMA Driverの担当の人だったから。
      </p>
      
      <p>
        ここからは、勉強メモ。
      </p></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-5" class="outline-2">
  <h2 id="sec-5">
    Embeded System
  </h2>
  
  <div class="outline-text-2" id="text-5">
    <p>
      組み込みシステム。
    </p>
    
    <p>
      特定の機能を実現するために機械や機器に組み込まれるコンピュータシステム。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://ja.wikipedia.org/wiki/%E7%B5%84%E3%81%BF%E8%BE%BC%E3%81%BF%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0">組み込みシステム &#8211; Wikipedia</a>
      </li>
    </ul>
    
    <p>
      組み込みシステムの主な構成要素は以下。
    </p>
    
    <ul class="org-ul">
      <li>
        Embedded Systems <ul class="org-ul">
          <li>
            MicroCotroller <ul class="org-ul">
              <li>
                Memory <ul class="org-ul">
                  <li>
                    RAM
                  </li>
                  <li>
                    ROM
                  </li>
                </ul>
              </li>
              
              <li>
                Processor(CPU)
              </li>
              <li>
                I/O Ports
              </li>
              <li>
                DAC
              </li>
              <li>
                Bas
              </li>
              <li>
                Timer
              </li>
            </ul>
          </li>
          
          <li>
            External Circuits
          </li>
          <li>
            Physical Device <ul class="org-ul">
              <li>
                Sensor
              </li>
              <li>
                ADC
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    
    <p>
      以下のような特徴をもつ。
    </p>
    
    <ul class="org-ul">
      <li>
        A microcontroller hidden inside
      </li>
      <li>
        A dedicated purpose
      </li>
      <li>
        Run in real time
      </li>
      <li>
        Input/output is important
      </li>
      <li>
        High volume, low cost
      </li>
      <li>
        Extremely reliable
      </li>
      <li>
        Low power
      </li>
      <li>
        Small size and weight
      </li>
    </ul>
  </div></p>
</div>

<div id="outline-container-sec-6" class="outline-2">
  <h2 id="sec-6">
    MicroController
  </h2>
  
  <div class="outline-text-2" id="text-6">
    <p>
      マイクロコントローラー。いわゆる、マイコン。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://ja.wikipedia.org/wiki/%E3%83%9E%E3%82%A4%E3%82%AF%E3%83%AD%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF">マイクロコンピュータ &#8211; Wikipedia</a>
      </li>
    </ul>
    
    <blockquote>
      <p>
        Microcontrollers, which are microcomputers incorporating the processor,<br /> RAM, ROM and I/O ports into a single package,<br /> are often employed in an embedded system because of their low cost,<br /> small size, and low power requirements.
      </p>
    </blockquote>
  </div>
  
  <div id="outline-container-sec-6-1" class="outline-3">
    <h3 id="sec-6-1">
      I/O Port
    </h3>
    
    <div class="outline-text-3" id="text-6-1">
      <p>
        Input Port/Output Portの略。 Input Portは 外部の世界(外部の集積回路、sensor, etc) からの情報をコンピュータのなかに入れる。Output Portはその逆。
      </p>
      
      <p>
        A port is a physical connection between the computer and its outside world.
      </p></p>
    </div>
    
    <div id="outline-container-sec-6-1-1" class="outline-4">
      <h4 id="sec-6-1-1">
        device driver
      </h4>
      
      <div class="outline-text-4" id="text-6-1-1">
        <p>
          a set of software functions that facilitate the use of an I/O port.
        </p></p>
      </div></p>
    </div>
    
    <div id="outline-container-sec-6-1-2" class="outline-4">
      <h4 id="sec-6-1-2">
        GPIO
      </h4>
      
      <div class="outline-text-4" id="text-6-1-2">
        <p>
          GPIOはGeneral Purpose Input/Output（汎用入出力）の略語。
        </p>
        
        <p>
          <a href="https://ja.wikipedia.org/wiki/GPIO">GPIO &#8211; Wikipedia</a>
        </p>
        
        <p>
          LSIチップや電子機器の備える入出力端子の一種で、 設定次第で様々な用途に利用できるもの。
        </p>
        
        <p>
          ソフトウェアの指示によって任意の入力あるいは出力に利用することができる。 複数の端子がGPIOに割り当てられている場合には、 これを一つのグループとして一括して制御することができ「GPIOポート」などと呼ばれる
        </p>
        
        <p>
          <a href="https://e-words.jp/w/GPIO.html">GPIOとは 【 General Purpose Input/Output 】 &#8211; 意味/解説/説明/定義 ： IT用語辞典</a>
        </p>
        
        <p>
          PinはGPIOの構成要素。たとえば、GPIO PortAは、PA0-PA7の8つのPinからできている。
        </p>
        
        <p>
          Pins can be configured for digital I/O, analog input, timer I/O, or serial I/O. For example PA0 can be digital I/O or serial input.
        </p>
        
        <p>
          Pinのそれぞれが外部デバイスに接続される。 用途は、レジスタの設定によって自由にできる。
        </p>
        
        <ul class="org-ul">
          <li>
            PA1 &#x2026; LEDへのOutput用
          </li>
          <li>
            PA2 &#x2026; Switch からの Input用
          </li>
          <li>
            PA3 &#x2026; UART の Input用
          </li>
          <li>
            PA4 &#x2026; UART の Output用
          </li>
        </ul>
      </div></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-6-2" class="outline-3">
    <h3 id="sec-6-2">
      Register
    </h3>
    
    <div class="outline-text-3" id="text-6-2">
      <p>
        コンピュータのプロセッサなどが内蔵する記憶回路で、 制御装置や演算装置や実行ユニットに直結した、 操作に要する速度が最速の、比較的少量のものを指す。
      </p>
      
      <p>
        一般に、論理回路において、フリップフロップなどにより状態を保持する装置をレジスタと呼ぶ。 コンピュータにおいては、プロセッサが内蔵しているそれを指す。 プロセッサには、プログラムが読み書きできるレジスタ以外に、 プロセッサ自身が動作するためのレジスタがあり、内部レジスタなどと呼ばれる。
      </p>
      
      <p>
        <a href="https://ja.wikipedia.org/wiki/%E3%83%AC%E3%82%B8%E3%82%B9%E3%82%BF_(%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF)">レジスタ (コンピュータ) &#8211; Wikipedia</a>
      </p>
      
      <p>
        Registers are high-speed storage inside the processor.
      </p></p>
    </div>
    
    <div id="outline-container-sec-6-2-1" class="outline-4">
      <h4 id="sec-6-2-1">
        Registerのプログラムでの扱い
      </h4>
      
      <div class="outline-text-4" id="text-6-2-1">
        <p>
          Pinを操作するためのレジスタには、 アドレス空間の決められたアドレスが割り振られている。(仕様)
        </p>
        
        <p>
          プログラムでは、あらかじめDefineを利用してレジスタのアドレスを宣言するのが王道。 volatileをつけることで、コンパイラが最適化してアドレスを変更するのを防ぐ。
        </p>
        
        <div class="org-src-container">
          <pre class="src src-language">#define PA5   (*((volatile unsigned long *)0x40004080))
</pre></p>
        </div>
        
        <p>
          これは以下と同値。
        </p>
        
        <div class="org-src-container">
          <pre class="src src-language">data = (*((volatile unsigned long *)0x40004080));
data = 0x40004080;
data = (*0x40004080);
</pre></p>
        </div>
        
        <p>
          そうすると、以下のようにして Registerの値を Read/Writeできる。
        </p>
        
        <div class="org-src-container">
          <pre class="src src-language"># Register Write
PA5 = 0x20;
# Register Read
data = PA5;
</pre></p>
        </div>
        
        <p>
          初期設定はこんな感じ。
        </p>
        
        <div class="org-src-container">
          <pre class="src src-language">void PortF_Init(void){ volatile unsigned long delay;
  SYSCTL_RCGC2_R |= 0x00000020;   // 1) F clock
  delay = SYSCTL_RCGC2_R;         // delay  
  GPIO_PORTF_LOCK_R = 0x4C4F434B; // 2) unlock PortF PF0 
  GPIO_PORTF_CR_R |= 0x1F;        // allow changes to PF4-0      
  GPIO_PORTF_AMSEL_R &= 0x00;     // 3) disable analog function
  GPIO_PORTF_PCTL_R &= 0x00000000; // 4) GPIO clear bit PCTL 
  GPIO_PORTF_DIR_R &= ~0x11;      // 5.1) PF4,PF0 input,
  GPIO_PORTF_DIR_R |= 0x08;       // 5.2) PF3 output 
  GPIO_PORTF_AFSEL_R &= 0x00;     // 6) no alternate function
  GPIO_PORTF_PUR_R |= 0x11;       // enable pullup resistors on PF4,PF0      
  GPIO_PORTF_DEN_R |= 0x1F;       // 7) enable digital pins PF4-PF0       
}
</pre></p>
        </div></p>
      </div></p>
    </div>
    
    <div id="outline-container-sec-6-2-2" class="outline-4">
      <h4 id="sec-6-2-2">
        LチカExample抜粋
      </h4>
      
      <div class="outline-text-4" id="text-6-2-2">
        <div class="org-src-container">
          <pre class="src src-language">// symbolic names instead of addresses
#define GPIO_PORTF_DATA_R    (*((volatile unsigned long *)0x400253FC))
#define GPIO_PORTF_DIR_R     (*((volatile unsigned long *)0x40025400))
#define GPIO_PORTF_AFSEL_R   (*((volatile unsigned long *)0x40025420))
#define GPIO_PORTF_PUR_R     (*((volatile unsigned long *)0x40025510))
#define GPIO_PORTF_DEN_R     (*((volatile unsigned long *)0x4002551C))
#define GPIO_PORTF_LOCK_R    (*((volatile unsigned long *)0x40025520))
#define GPIO_PORTF_CR_R      (*((volatile unsigned long *)0x40025524))
#define GPIO_PORTF_AMSEL_R   (*((volatile unsigned long *)0x40025528))
#define GPIO_PORTF_PCTL_R    (*((volatile unsigned long *)0x4002552C))
#define SYSCTL_RCGC2_R       (*((volatile unsigned long *)0x400FE108))

// 2. Declarations Section
//   Global Variables
unsigned long SW1; // input from PF4
unsigned long SW2; // input from PF0

// Subroutine to initialize port F pins for input and output
// PF4 is input SW1 and PF2 is output Blue LED
void PortF_Init(void){ volatile unsigned long delay;
  SYSCTL_RCGC2_R |= 0x00000020;   // 1) F clock
  delay = SYSCTL_RCGC2_R;         // delay  
  GPIO_PORTF_LOCK_R = 0x4C4F434B; // 2) unlock PortF PF0 
  GPIO_PORTF_CR_R |= 0x1F;        // allow changes to PF4-0      
  GPIO_PORTF_AMSEL_R &= 0x00;     // 3) disable analog function
  GPIO_PORTF_PCTL_R &= 0x00000000; // 4) GPIO clear bit PCTL 
  GPIO_PORTF_DIR_R &= ~0x11;      // 5.1) PF4,PF0 input,
  GPIO_PORTF_DIR_R |= 0x08;       // 5.2) PF3 output 
  GPIO_PORTF_AFSEL_R &= 0x00;     // 6) no alternate function
  GPIO_PORTF_PUR_R |= 0x11;       // enable pullup resistors on PF4,PF0      
  GPIO_PORTF_DEN_R |= 0x1F;       // 7) enable digital pins PF4-PF0       
}

void FlashSOS(void){
  //S
  GPIO_PORTF_DATA_R |= 0x08;  delay(1);
  GPIO_PORTF_DATA_R &= ~0x08; delay(1);
  GPIO_PORTF_DATA_R |= 0x08;  delay(1);
  GPIO_PORTF_DATA_R &= ~0x08; delay(1);
  GPIO_PORTF_DATA_R |= 0x08;  delay(1);
  GPIO_PORTF_DATA_R &= ~0x08; delay(1);
  //O
  GPIO_PORTF_DATA_R |= 0x08; delay(4);
  GPIO_PORTF_DATA_R &= ~0x08;delay(4);
  GPIO_PORTF_DATA_R |= 0x08; delay(4);
  GPIO_PORTF_DATA_R &= ~0x08;delay(4);
  GPIO_PORTF_DATA_R |= 0x08; delay(4);
  GPIO_PORTF_DATA_R &= ~0x08;delay(4);
  //S
  GPIO_PORTF_DATA_R |= 0x08; delay(1);
  GPIO_PORTF_DATA_R &= ~0x08;delay(1);
  GPIO_PORTF_DATA_R |= 0x08; delay(1);
  GPIO_PORTF_DATA_R &= ~0x08;delay(1);
  GPIO_PORTF_DATA_R |= 0x08; delay(1);
  GPIO_PORTF_DATA_R &= ~0x08;delay(1);
  delay(10); // Delay for 5 secs in between flashes
}
</pre></p>
        </div></p>
      </div></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-7" class="outline-2">
  <h2 id="sec-7">
    Memory
  </h2>
  
  <div class="outline-text-2" id="text-7">
  </div>
  
  <div id="outline-container-sec-7-1" class="outline-3">
    <h3 id="sec-7-1">
      ROM
    </h3>
    
    <div class="outline-text-3" id="text-7-1">
      <p>
        書き込んだデータは消去できないが、電源を切ってもデータが消えない読み出し専用のメモリ.
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-7-2" class="outline-3">
    <h3 id="sec-7-2">
      RAM
    </h3>
    
    <div class="outline-text-3" id="text-7-2">
      <p>
        データの読み書きは自由に行えるが、電源を切ると内容が消えるメモリ(Random Access Memory）
      </p></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-8" class="outline-2">
  <h2 id="sec-8">
    Interface
  </h2>
  
  <div class="outline-text-2" id="text-8">
    <p>
      ハードウェアとソフトウェアを結ぶもの。ここでいうところは、ハードウェアインタフェース。
    </p>
    
    <p>
      interface is defined as the hardware and software that combine to allow the computer to communicate with the external hardware.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%BC%E3%83%89%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%95%E3%82%A7%E3%83%BC%E3%82%B9#.E3.83.8F.E3.83.BC.E3.83.89.E3.82.A6.E3.82.A7.E3.82.A2.E3.82.A4.E3.83.B3.E3.82.BF.E3.83.95.E3.82.A7.E3.83.BC.E3.82.B9">インタフェース (情報技術) &#8211; Wikipedia</a>
      </li>
    </ul>
    
    <p>
      I/O Port, 外部電子回路、物理的デバイス、ソフトウェアなどを集めたもの。
    </p>
    
    <p>
      An interface is defined as the collection of the I/O port, external electronics, physical devices, and the software, which combine to allow the computer to communicate with the external world.
    </p>
    
    <p>
      以下の4つに分類される。
    </p>
    
    <ul class="org-ul">
      <li>
        Parallel &#8211; binary data are available simultaneously on a group of lines
      </li>
      <li>
        Serial &#8211; binary data are available one bit at a time on a single line
      </li>
      <li>
        Analog &#8211; data are encoded as an electrical voltage, current, or power
      </li>
      <li>
        Time &#8211; data are encoded as a period, frequency, pulse width, or phase shift
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-8-1" class="outline-3">
    <h3 id="sec-8-1">
      Parallel Interface
    </h3>
    
    <div class="outline-text-3" id="text-8-1">
      <p>
        パラレルポートとは、コンピュータシステム内で、 ばらばらの周辺機器をケーブルで接続するために使われる物理的なインタフェースの一種。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://ja.wikipedia.org/wiki/%E3%83%91%E3%83%A9%E3%83%AC%E3%83%AB%E3%83%9D%E3%83%BC%E3%83%88">パラレルポート &#8211; Wikipedia</a>
        </li>
        <li>
          <a href="https://www.sophia-it.com/content/%E3%83%91%E3%83%A9%E3%83%AC%E3%83%AB%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%95%E3%82%A7%E3%83%BC%E3%82%B9">パラレルインターフェースとは 「パラレルインタフェース」 (parallel interface)： &#8211; IT用語辞典バイナリ</a>
        </li>
      </ul>
    </div></p>
  </div>
  
  <div id="outline-container-sec-8-2" class="outline-3">
    <h3 id="sec-8-2">
      Syncronization
    </h3>
    
    <div class="outline-text-3" id="text-8-2">
      <p>
        ハードウェアとソフトウェアの同期処理。
      </p>
      
      <p>
        ハードウェアのスピードとソフトウェアのスピードは、 ソフトウェアの方が早いため相互でやりとりするためには以下の手段がある。
      </p></p>
    </div>
    
    <div id="outline-container-sec-8-2-1" class="outline-4">
      <h4 id="sec-8-2-1">
        Blind-Cycle
      </h4>
      
      <div class="outline-text-4" id="text-8-2-1">
        <p>
          決められた時間SleepしたあとにI/Oステータスをチェックする.
        </p>
        
        <p>
          the software writes data to the output device, triggers (starts) the device, then waits a specified time. We call this method blind, because there is no status information about the I/O device reported to the software.
        </p></p>
      </div></p>
    </div>
    
    <div id="outline-container-sec-8-2-2" class="outline-4">
      <h4 id="sec-8-2-2">
        Busy-Wait
      </h4>
      
      <div class="outline-text-4" id="text-8-2-2">
        <p>
          Input deviceのデータが更新されたときにI/Oステータスをチェックする。
        </p>
        
        <p>
          状態がBusyならばWait(loop), Readyならば次のステップへ。
        </p>
        
        <p>
          Busy Wait is a software loop that checks the I/O status waiting for the done state. For an input device, the software waits until the input device has new data, and then reads it from the input device,
        </p></p>
      </div></p>
    </div>
    
    <div id="outline-container-sec-8-2-3" class="outline-4">
      <h4 id="sec-8-2-3">
        Interrupt
      </h4>
      
      <div class="outline-text-4" id="text-8-2-3">
        <p>
          ハードウェアが発生させる特別な通知。
        </p>
        
        <p>
          An interrupt uses hardware to cause special software execution. With an input device, the hardware will request an interrupt when input device has new data. The software interrupt service will read from the input device and save in global RAM,
        </p></p>
      </div></p>
    </div>
    
    <div id="outline-container-sec-8-2-4" class="outline-4">
      <h4 id="sec-8-2-4">
        Periodic Polling
      </h4>
      
      <div class="outline-text-4" id="text-8-2-4">
        <p>
          クロックタイマの割り込み契機でI/Oのステータスをチェック
        </p></p>
      </div></p>
    </div>
    
    <div id="outline-container-sec-8-2-5" class="outline-4">
      <h4 id="sec-8-2-5">
        DMA
      </h4>
      
      <div class="outline-text-4" id="text-8-2-5">
        <p>
          Direct Memory Access あるメモリから別のメモリに直接情報を書き込む
        </p></p>
      </div></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-8-3" class="outline-3">
    <h3 id="sec-8-3">
      Serial Interface
    </h3>
    
    <div class="outline-text-3" id="text-8-3">
    </div>
    
    <div id="outline-container-sec-8-3-1" class="outline-4">
      <h4 id="sec-8-3-1">
        UART
      </h4>
      
      <div class="outline-text-4" id="text-8-3-1">
        <p>
          Universal Asynchronous Receiver/Transmitter (UART). 調歩同期方式によるシリアル通信をするための汎用I/F。
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://ja.wikipedia.org/wiki/UART">UART &#8211; Wikipedia</a>
          </li>
        </ul>
        
        <p>
          有名なので、最近のほとんどのマイコンに搭載されているらしい。
        </p></p>
      </div></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-9" class="outline-2">
  <h2 id="sec-9">
    Thread/Process/Task
  </h2>
  
  <div class="outline-text-2" id="text-9">
  </div>
  
  <div id="outline-container-sec-9-1" class="outline-3">
    <h3 id="sec-9-1">
      Thread
    </h3>
    
    <div class="outline-text-3" id="text-9-1">
      <p>
        A thread is defined as the path of action of software as it executes.
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-9-2" class="outline-3">
    <h3 id="sec-9-2">
      Process
    </h3>
    
    <div class="outline-text-3" id="text-9-2">
      <p>
        A process is defined as the action of software as it executes.
      </p>
      
      <p>
        スレッドとプロセスの違いは、変数のスコープの違い？
      </p>
      
      <p>
        Threads share access to I/O devices, system resources, and global variables, while processes have separate global variables and system resources. Processes do not share I/O devices.
      </p>
      
      <p>
        実際は、OSによってバラバラ。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/2245">スレッドとタスクの違いについてしらべてみた(C++/Linux) | Futurismo</a>
        </li>
      </ul>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-10" class="outline-2">
  <h2 id="sec-10">
    Interrupt
  </h2>
  
  <div class="outline-text-2" id="text-10">
    <p>
      Hardware Interrupt Software Action.
    </p>
    
    <p>
      Busy-Waitの制御で待ってられない場合は、Interruptを利用する。
    </p>
    
    <p>
      ここからは、一般的な説明ではなくてedXの中だけの定義。
    </p></p>
  </div>
  
  <div id="outline-container-sec-10-0-1" class="outline-4">
    <h4 id="sec-10-0-1">
      Arm/DisArm
    </h4>
    
    <div class="outline-text-4" id="text-10-0-1">
      <p>
        Armとは、ハードウェアが割り込みをあげることを有効化する。
      </p>
      
      <p>
        DisArmとは、ハードウェアが割り込みをあげることを無効化する。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-10-0-2" class="outline-4">
    <h4 id="sec-10-0-2">
      Enable/Disable
    </h4>
    
    <div class="outline-text-4" id="text-10-0-2">
      <p>
        Enableは一時的に割り込みを有効化する。
      </p>
      
      <p>
        Disbleは一時的に割り込みを無効化する。
      </p>
      
      <p>
        Disable中に発生したInterupptは Pendingされて、Enable時に通知される。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-10-0-3" class="outline-4">
    <h4 id="sec-10-0-3">
      Interruputの初期化処理
    </h4>
    
    <div class="outline-text-4" id="text-10-0-3">
      <ol class="org-ol">
        <li>
          Trigger flag set by hardware
        </li>
        <li>
          the device is armed by software
        </li>
        <li>
          the device is enabled for interrupts in the NVIC
        </li>
        <li>
          the processor is enabled for interrupts (PRIMASK I bit is clear)
        </li>
        <li>
          the interrupt level must be less than the BASEPRI.
        </li>
      </ol>
    </div></p>
  </div>
  
  <div id="outline-container-sec-10-0-4" class="outline-4">
    <h4 id="sec-10-0-4">
      Context Switch
    </h4>
    
    <div class="outline-text-4" id="text-10-0-4">
      <p>
        割り込みをハードウェアが検知したときに、 foregroundとbackgroundのスレッドを入れ替える。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%B3%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%B9%E3%82%A4%E3%83%83%E3%83%81">コンテキストスイッチ &#8211; Wikipedia</a>
        </li>
      </ul>
      
      <p>
        現在のプロセスの実行を一時停止して、 スタックにレジスタ情報を覚えておく。
      </p>
      
      <p>
        割り込みハンドラを実行して、 ハンドラの実行が終了したらもとのプロセスを再開する。
      </p>
      
      <ol class="org-ol">
        <li>
          Current instruction is finished,
        </li>
        <li>
          Eight registers are pushed on the stack,
        </li>
        <li>
          LR is set to 0xFFFFFFF9,
        </li>
        <li>
          IPSR is set to the interrupt number,
        </li>
        <li>
          PC is loaded with the interrupt vector
        </li>
      </ol>
    </div></p>
  </div>
  
  <div id="outline-container-sec-10-1" class="outline-3">
    <h3 id="sec-10-1">
      Interrupt Service Routine(ISR)
    </h3>
    
    <div class="outline-text-3" id="text-10-1">
      <p>
        割り込みサービスルーチン。割り込みハンドラともいう。
      </p>
      
      <p>
        <a href="https://ja.wikipedia.org/wiki/%E5%89%B2%E3%82%8A%E8%BE%BC%E3%81%BF%E3%83%8F%E3%83%B3%E3%83%89%E3%83%A9">割り込みハンドラ &#8211; Wikipedia</a>
      </p>
      
      <p>
        コンテキストスイッチによって、 foregroundで動作している busy-waitなスレッドとISRがスワップされる。
      </p>
      
      <p>
        割り込み受け付けによって起動されるオペレーティングシステムや デバイスドライバのコールバックルーチン。 割り込みハンドラは割り込み原因によってそれぞれ存在し、 割り込みハンドラがそのタスクを完了するまでにかかる時間も様々である。
      </p></p>
    </div>
    
    <div id="outline-container-sec-10-1-1" class="outline-4">
      <h4 id="sec-10-1-1">
        NVIC
      </h4>
      
      <div class="outline-text-4" id="text-10-1-1">
        <p>
          割り込みハンドラに対応させたい関数は、 startup scriptに事前に登録しておく。
        </p>
        
        <p>
          vectorというメモリ領域にシステムにどの関数を実行すればいいかをアドレスとして教える。
        </p>
        
        <p>
          interrupt発生時は vectorを参照して、それに対応する割り込みルーチンの関数を呼ぶ。
        </p>
        
        <p>
          nested vectored interrupt controller (NVIC) manages interrupts, which are hardware-triggered software functions. Some internal peripherals, like the NVIC communicate directly with the processor via the private peripheral bus (PPB). The tight integration of the processor and interrupt controller provides fast execution of interrupt service routines (ISRs), dramatically reducing the interrupt latency.
        </p></p>
      </div></p>
    </div>
    
    <div id="outline-container-sec-10-1-2" class="outline-4">
      <h4 id="sec-10-1-2">
        Acknowledge
      </h4>
      
      <div class="outline-text-4" id="text-10-1-2">
        <p>
          割り込みをISRが認識すること。 ISRが割り込みの認識を行った後、同じデバイスからの割り込みが発生しないよう割り込みマスクをする必要がある。 そうしないと、クラッシュする恐れがある。
        </p>
        
        <ul class="org-ul">
          <li>
            <a href="https://d241445.hosting-sv.jp/community/report/report31.html">レポート31：割り込みサービスルーチン（ISR）の処理</a>
          </li>
        </ul>
        
        <p>
          実装でやってはいけないことは以下。
        </p>
        
        <ul class="org-ul">
          <li>
            長時間の処理はしてはいけない。
          </li>
          <li>
            待ち状態になってはいけない、Delay Loopはつかわないほうがよい。
          </li>
          <li>
            呼んではいけない関数がある。
          </li>
        </ul>
        
        <p>
          割り込みハンドラでは必要最小限の処理のみを行い、別のタスクに通知して、 メインの処理はそっちでさせるように実装すべき。
        </p></p>
      </div></p>
    </div>
    
    <div id="outline-container-sec-10-1-3" class="outline-4">
      <h4 id="sec-10-1-3">
        ISRからメイン処理への通知方法
      </h4>
      
      <div class="outline-text-4" id="text-10-1-3">
        <p>
          ISRとメイン処理はグローバルなメモリ領域を介して情報を受渡しする。
        </p>
        
        <ul class="org-ul">
          <li>
            Binary Semaphore
          </li>
        </ul>
        
        <p>
          ISRで 決められたflagを立てて、メイン処理でそのフラグを監視する。 flagが1ならば、それのフラグに対応する処理を実施する。
        </p>
        
        <ul class="org-ul">
          <li>
            MailBox
          </li>
        </ul>
        
        <p>
          flagとともにデータも渡すこともある。
        </p>
        
        <p>
          flagをStatusといい、flagとdataを合わせたデータ構造をMailという。 (MailBox Pruducer-Consumer Pattern)
        </p>
        
        <ul class="org-ul">
          <li>
            FIFO queue
          </li>
        </ul>
        
        <p>
          ISRでFifoなメモリ領域にデータをPUTし、 メイン処理のloop処理でで定期的にFifoなdataをチェックし、順次実行する。
        </p></p>
      </div></p>
    </div></p>
  </div></p>
</div>

 [1]: https://lh5.ggpht.com/-EN3pNSfqOd0/U26qyjK8CPI/AAAAAAAABDc/0-M2yjvKiOk/LEDchika.jpg