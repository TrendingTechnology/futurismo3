---
author: admin
categories:
- 日記
date: 2014-05-02T02:23:38+00:00
dsq_thread_id:
- 3.7132672e+09
excerpt: 2月から4月の仕事の日記
pvc_views:
- 1390
title: CleanCodeはよいわけではない、場合によっては悪いこと
type: post
url: /archives/=2412
---

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      今日からゴールデンウィーク初日！
    </p>
    
    <p>
      仕事のほうも2月から3ヶ月間続いたプロジェクトが一区切りだ。
    </p>
    
    <p>
      過去のブログ記事と関連づけながら、ここで振り返りをしてみる。
    </p>
    
    <p>
      [toc]
    </p></p>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      前提
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <p>
        このプロジェクトに入る前は、精神的につぶれてた。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/1998">エンジニアとプログラマの違いについて定義してみた | Futurismo</a>
        </li>
      </ul>
      
      <p>
        なので、1月はリハビリのために特定のプロジェクトには参加していなくて、 毎日Emacsをいじっていた。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/2146">Beautiful Colorful Terminal – Emacsターミナル環境をカラフルに彩る | Futurismo</a>
        </li>
      </ul>
      
      <p>
        2月になってすこしずつ元気になってきたので、 お試し開発のプロジェクトに参加することになった。
      </p>
      
      <p>
        お試しという意味は、まだ顧客もいなくて、 ビジネスとしてなりたつのかよくわからない、 予算の限られたトライアルプロジェクトという意味。
      </p></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    よかったこと
  </h2>
  
  <div class="outline-text-2" id="text-2">
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      Rubyistになった
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <p>
        そして、Rubyistになった。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/2189">Rubyistになった日 | Futurismo</a>
        </li>
      </ul>
      
      <p>
        以前から、いつか仕事でRubyがつかえたらいいなと漠然と心に抱いていたので、 これはうれしかった。
      </p>
      
      <p>
        RubyTkをつかったGUIアプリケーションの開発がまかされた。
      </p>
      
      <p>
        わからないことが毎日あったが、 お金がないから残業できないので、その分は定時後にスタバにこもって勉強した。
      </p>
      
      <p>
        どうでもいいRubyTk関連の記事の投稿をこのブログにも怒涛のごとくしてた。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      Excel VBAをみにつけた
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <p>
        Rubyistとしてワクワクしている月日は1.5ヶ月くらいで終わった。 それからExcel VBAer?になった。
      </p>
      
      <p>
        ExcelVBA知らないけど、1日100Step、5日で完成という工程。 かなり厳しいと思ったが、3日くらいで不自由なく読み書きできるようになった。 前知識としてC++,Java,Rubyがあったからだと思う。
      </p>
      
      <p>
        これは、正直驚き、また自信につながった。 オブジェクト指向言語ならば、他の言語もそんなに苦にならずに 身につけられるような気がした。
      </p>
      
      <p>
        大事なのは、パラダイムを押さえることではと思った。MOOCでこんな講座もはじめた。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.edx.org/course/louvainx/louvainx-louv1-01x-paradigms-computer-1203#.U2L2PhMu2IM">LouvainX: Louv1.01x: Paradigms of Computer Programming | edX</a>
        </li>
      </ul>
      
      <p>
        今後は関数型プログラミングのパラダイムを身につけたい。というか、EmacsLisp書きたい！
      </p>
      
      <p>
        また、ExcelVBAの開発環境が貧弱すぎることも、 Eclipse大好きな僕には嫌だった。なので、ネット上に散らばったツールをrakeでまとめた。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/2395">ExcelVBA統合BDD開発環境をrakeでまとめてみた | Futurismo</a>
        </li>
      </ul>
      
      <p>
        この背景には、C言語のTDD開発環境ceedlingに感動した体験がある。 Rubyがすごいと思いはじめ、Rubyがやりたくなったのもこの体験があったから。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/1498">Rubyで書かれた統合C言語TDD開発環境 「Ceedling」 がけっこう便利そうな件 | Futurismo</a>
        </li>
      </ul>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    わるかったこと
  </h2>
  
  <div class="outline-text-2" id="text-3">
  </div>
  
  <div id="outline-container-sec-3-1" class="outline-3">
    <h3 id="sec-3-1">
      コスト意識がなかった
    </h3>
    
    <div class="outline-text-3" id="text-3-1">
      <p>
        コスト意識がなかったことが、最大の反省点。 なかったわけではなくて、あったことはあったが、もっとあるべきだった。
      </p>
      
      <p>
        だんだんとまわりから、
      </p>
      
      <p>
        「これは売り物になるの？iPhoneアプリつくったほうが儲かるんじゃないの？」
      </p>
      
      <p>
        という実は真実の脅しうけてビクビクしたり、
      </p>
      
      <p>
        「じつはこのプロジェクトはXX万の予算を投入したんだよね」
      </p>
      
      <p>
        とぷよぷよされて、プロジェクト参加前に比べて精神が悪化したりした。 しかし、今までコスト意識があまりなかったので、
      </p>
      
      <p>
        これはよいことなのだと自虐的に受け止めた。
      </p></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-3-2" class="outline-3">
    <h3 id="sec-3-2">
      CleanCodeは悪
    </h3>
    
    <div class="outline-text-3" id="text-3-2">
      <p>
        予算も限られていてかけられる工数が少なかったが、 プログラミングに凝りすぎたことが最大の反省点。
      </p>
      
      <p>
        具体的には、クラスの依存関係を弱くしたり、小さいメソッドやクラスを書いていた。 以下のようなカルチャーショックの直後だったので、これが今思い返せば悪影響していた。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/2200">散文的ブログラミングの哲学につら抜かれたCleanCodeでカルチャーショック体験 | Futurismo</a>
        </li>
      </ul>
      
      <p>
        自分に求められていたのは、モジュール分割がされていないモンスターメソッドであり、 インスタンスはグローバル変数で保持するような密結合の設計だった。
      </p>
      
      <p>
        結果的に、予定よりも遅れてしまった。これだけが原因ではなくて、見積りも悪かったのもあるけど。
      </p>
      
      <p>
        綺麗なコードを書くことを心がけていたが、 その価値観をすこしあらためないといけないと思った。 TDDはよいという価値観も今回の開発でかわった気がする。
      </p>
      
      <p>
        もちろん、きれいなコードはそれはそれでよいことだし、TDDも素晴らしい。 しかし、仕事はお金稼ぎでやっているので、 綺麗なコードがお金稼ぎにつながるかを考えないといけないと思った。
      </p>
      
      <p>
        プロジェクトを航海にたとえれば、 ひとりでパンを食べまくった結果、食料がつきて、 目的地にたどり着く前に全員餓死しちゃうような状況。なんて傲慢なんだろう！
      </p>
      
      <p>
        場合によりけりだとおもうが、 今回のプロジェクトでは綺麗なコードは悪いことだと思ったのが今日の日記の結論。
      </p>
      
      <p>
        ゴールデンウィーク初日からうつうつだが、 思うところはここに吐き出したので、忘れてリフレッシュしよっと。
      </p></p>
    </div></p>
  </div></p>
</div>