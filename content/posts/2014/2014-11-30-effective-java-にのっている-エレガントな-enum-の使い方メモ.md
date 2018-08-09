---
author: admin
categories:
- Java
- 技術メモ
date: 2014-11-30T12:21:00+00:00
dsq_thread_id:
- 3.7156567e+09
excerpt: Effective Java の Enum のメモ
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 13825
side:
- "y"
tags:
- Gof
title: Effective Java にのっている エレガントな Enum の使い方メモ
title_view:
- "y"
type: post
url: /archives/=2768
---

[<img alt="" src="https://futurismo.biz/wp-content/uploads/java.png" width="256" height="256" />][1]

<div id="outline-container-unnumbered-1" class="outline-2">
  <h2 id="unnumbered-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-1">
    <p>
      Effective Java には毎回驚かされる.
    </p>
    
    <div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'>
      <div class='amazlink-list' style='clear: both;'>
        <div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'>
          <a href='https://www.amazon.co.jp/EFFECTIVE-JAVA-%E7%AC%AC2%E7%89%88-Java-Series/dp/4621066056%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4621066056' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/51lEBnUjJqL._SL160_.jpg' style='border: none;' /></a>
        </div>
        
        <div class='amazlink-info' style='height:160; margin-bottom: 10px'>
          <div class='amazlink-name' style='margin-bottom:10px;line-height:120%'>
            <a href='https://www.amazon.co.jp/EFFECTIVE-JAVA-%E7%AC%AC2%E7%89%88-Java-Series/dp/4621066056%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4621066056' rel='nofollow' target='_blank'>EFFECTIVE JAVA 第 2 版 (The Java Series)</a>
          </div>
          
          <div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>
            posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 14.11.30
          </div>
          
          <div class='amazlink-detail'>
            Joshua Bloch
          </div>
          
          <div class='amazlink-sub-info' style='float: left;'>
            <div class='amazlink-link' style='margin-top: 5px'>
              <img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18' /><a href='https://www.amazon.co.jp/EFFECTIVE-JAVA-%E7%AC%AC2%E7%89%88-Java-Series/dp/4621066056%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4621066056' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18' /><a href='https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/archives/c=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12699391%2F&#038;m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D12699391%26surl%3Dbook' rel='nofollow' target='_blank'>楽天</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <p>
      今日は, p143 からはじまる Enum の章を読んだ.
    </p>
    
    <p>
      エレガントで美しいコードや Enum の効果的な使い方に驚いた. 忘れないように, 気になたところをメモしておく.
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-2" class="outline-2">
  <h2 id="unnumbered-2">
    Enum とは
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-2">
    <p>
      プログラマが選んだ各々の識別子をそのまま有限集合として持つ抽象データ型.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://ja.wikipedia.org/wiki/%E5%88%97%E6%8C%99%E5%9E%8B">列挙型 &#8211; Wikipedia</a>
      </li>
    </ul>
    
    <p>
      番号を持たないカテゴリ変数. 一意の文字定数.
    </p>
    
    <p>
      実行時には, 番号が振られることが覆いが, 言語によっては番号はプログラマに見えないこともある.
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-3" class="outline-2">
  <h2 id="unnumbered-3">
    int enum パターン
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-3">
    <p>
      名前つき int 定数のグループを宣言すること.バッドノウハウ.
    </p>
    
    <p>
      [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> public static final int FOO = 0;<br /> public static final int BAR = 1;<br /> [/sourcecode]
    </p>
    
    <ul class="org-ul">
      <li>
        コンパイラによる型検査の恩恵を受けることができない.
      </li>
      <li>
        同じ名前がついたものを名前空間で区別することができない.
      </li>
      <li>
        変更により再コンパイルが必要.
      </li>
      <li>
        表示可能な文字列へ変換する方法かない.
      </li>
      <li>
        int と enum では実効速度はそれほどかわらない.
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-unnumbered-4" class="outline-2">
  <h2 id="unnumbered-4">
    定数固有メソッド実装 (constant-specific method implementation)
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-4">
    <p>
      enum 定数に対して振る舞いを関連付けるための方法.
    </p>
    
    <p>
      パターン適用前.
    </p>
    
    <p>
      [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> public enum Operation {<br /> PLUS, MINUS;
    </p>
    
    <p>
      double apply (double x, double y) {<br /> switch (this) {<br /> case PLUS: return x + y;<br /> case MINUS: return x &#8211; y;<br /> }<br /> throw new AssertionError () ("Unknown op:" + this);<br /> }<br /> }<br /> [/sourcecode]
    </p>
    
    <p>
      パターン適用後. enum 型で抽象メソッドを宣言して, 定数固有クラス本体で, 定数ごとに具象メソッドで その抽象メソッドをオーバーライド.
    </p>
    
    <p>
      switch 文を排除するので, エレガント!! 抽象メソッドによって実装をカプセル化.
    </p>
    
    <p>
      [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> public enum Operation {<br /> PLUS { double apply (double x, double y) {return x + y;} },<br /> MINUS { double apply (double x, double y) {return x &#8211; y;} };
    </p>
    
    <p>
      abstract double apply (double x, double y);<br /> }<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-5" class="outline-2">
  <h2 id="unnumbered-5">
    定数固有クラス
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-5">
    <p>
      さらに, 定数固有データと実装を組み合わせることで, 強力な表現力を.
    </p>
    
    <p>
      [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> public enum Operation {<br /> PLUS ("+") { double apply (double x, double y) {return x + y;} },<br /> MINUS ("-") { double apply (double x, double y) {return x &#8211; y;} };
    </p>
    
    <p>
      private final String symbol;<br /> Operation (String symbol) { this.symbol = symbol; }<br /> @Override public String toString () { return symbol; }
    </p>
    
    <p>
      abstract double apply (double x, double y);<br /> }<br /> [/sourcecode]
    </p>
    
    <p>
      Enum の toString は定数表現は 文字列へ変換することもできる.
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-6" class="outline-2">
  <h2 id="unnumbered-6">
    戦略 Enum (Strategy Enum)
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-6">
    <p>
      抽象メソッドをクラスに変更して外部から与えてやるようにすれば, これはいわゆる Strategy Pattern だ.
    </p>
    
    <p>
      評価戦略を外部から与えて, Operation は委譲で評価をする.
    </p>
    
    <p>
      [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> public enum Operation {<br /> PLUS (EvaluateType.PLUS), MINUS (EvaluateType.MINUS);
    </p>
    
    <p>
      private final EvaluateType type;
    </p>
    
    <p>
      Operation (EvaluateType type) {<br /> this.type = type;<br /> }
    </p>
    
    <p>
      double apply (double x, double y) {<br /> return type.apply (x, y);<br /> }
    </p>
    
    <p>
      // Strategy Enum Type<br /> private enum EvaluateType {<br /> PLUS { double apply (double x, double y) {return x + y;} },<br /> MINUS { double apply (double x, double y) {return x &#8211; y;} };
    </p>
    
    <p>
      abstract double apply (double x, double y);<br /> }<br /> }<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-7" class="outline-2">
  <h2 id="unnumbered-7">
    enum 定数と値の関連付けに ordinal をつかわないこと
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-7">
    <p>
      enum と関連付けられた int 値を取得する メソッドとして ordinal メソッドがある.
    </p>
    
    <p>
      これを定数と値を関連付けるときには, 使わない. なぜなら, コードの修正で, 振られる番号が変わるから.
    </p>
    
    <p>
      [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> public enum Number {<br /> ONE, TWE;<br /> public int getNumber{ return ordinal () + 1; }<br /> }<br /> [/sourcecode]
    </p>
    
    <p>
      代わりにインスタンスフィールドを利用すればよい.
    </p>
    
    <p>
      [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> public enum Number {<br /> ONE (1), TWE (2);<br /> private final int number;<br /> Number (int number) { this.number = number;}<br /> public int getNumber{ return number; }<br /> }<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-8" class="outline-2">
  <h2 id="unnumbered-8">
    集合と集合の対応づけに序数インデックス (配列) をつかわない
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-8">
    <p>
      2 つの集合を対応付けるときには, 配列をつかうよりもいい方法がある.
    </p>
    
    <p>
      それは, EnumMap. EnumMap は内部実装は配列でされているものの, インデックスを意識する必要がないというメリットがある.
    </p>
    
    <p>
      配列をインデックスするために序数を使用することが適切であることはほ とんどない.代わりに, EnumMap を使用すること.
    </p>
    
    <p>
      関連が多次元ならば, EnumMap<&#x2026;, EnumMap<&#x2026;>> というように連なっていく.
    </p>
    
    <p>
      [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> Map<Herb.Type, Set<Herb>> herbsByType =<br /> new EnumMap<Herb.Type, Set<Herb>>(Herb.Type.class);<br /> for (Herb.Type t : Herb.Type.values ())<br /> herbsByType.put (t, new HashSet<Herb>());<br /> for (herb h: garden)<br /> herbsBytpe.get (h.type).add (h);<br /> [/sourcecode]
    </p>
  </div>
</div>

<div id="outline-container-unnumbered-9" class="outline-2">
  <h2 id="unnumbered-9">
    Enum シングルトンパターン
  </h2>
  
  <div class="outline-text-2" id="text-unnumbered-9">
    <p>
      Enum を利用して, シングルトンパターンをする方法.
    </p>
    
    <p>
      [sourcecode language=&#8221;java&#8221; title=&#8221;&#8221;]<br /> class SampleSingleton {<br /> static public enum EnumUtil {<br /> INSTANCE;
    </p>
    
    <p>
      public static int plus (int x, int y) { return x + y; }<br /> public static int minus (int x, int y) { return x &#8211; y; }<br /> }
    </p>
    
    <p>
      public static void main (String[] args) {<br /> System.out.println (EnumUtil.INSTANCE.plus (1,1));<br /> System.out.println (EnumUtil.INSTANCE.minus (2,1));<br /> }<br /> }<br /> [/sourcecode]
    </p>
  </div>
</div>

 [1]: https://futurismo.biz/wp-content/uploads/java.png