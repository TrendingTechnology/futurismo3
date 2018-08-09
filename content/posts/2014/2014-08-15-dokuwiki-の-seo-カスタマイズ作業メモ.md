---
author: admin
categories:
- 技術メモ
date: 2014-08-15T05:37:00+00:00
dsq_thread_id:
- 3.7650217e+09
excerpt: Dokuwiki の SEO カスタマイズ作業メモ
pvc_views:
- 2287
tags:
- Dokuwiki
- SEO
title: Dokuwiki の SEO カスタマイズ作業メモ
type: post
url: /archives/=2542
---

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      以前, 高らかに Futurismo Wiki の立ち上げを宣言しました.
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/archives/2500">Futurismo Wiki 立ち上げ (Dokuwiki) | Futurismo</a>
      </li>
    </ul>
    
    <p>
      宣言しただけで, ちっともカスタマイズしていなかったので, カスタマイズ してみました.本記事は, その作業メモ.
    </p>
    
    <p>
      とくに, SEO に関する情報についてまとめてみました.
    </p>
  </div>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    SEO 対策
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <ul class="org-ul">
      <li>
        <a href="https://www.dokuwiki.org/ja:seo">ja:seo</a>
      </li>
      <li>
        <a href="https://en.seowiki.info/best_practices/seo_optimized_dokuwiki">SEO Optimized DokuWiki</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-2-1" class="outline-3">
    <h3 id="sec-2-1">
      SEO Tips
    </h3>
    
    <div class="outline-text-3" id="text-2-1">
      <p>
        SEO につよい設定方法は以下にある.これはすごい.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://en.seowiki.info/best_practices/seo_optimized_dokuwiki/basic_configuration">SEO Optimized DokuWiki: Basic Configuration</a>
        </li>
      </ul>
      
      <p>
        簡単なメモ.
      </p>
      
      <ul class="org-ul">
        <li>
          <p>
            URL 上の名前空間の区切りにスラッシュを使用 -> On
          </p>
          
          <ul class="org-ul">
            <li>
              ページのランクをさらに高める?
            </li>
          </ul>
        </li>
        
        <li>
          <p>
            canonical URL (正準 URL) を使用 -> On
          </p>
        </li>
        
        <li>
          <p>
            文書が存在しないページに&#8221;HTTP404/Page Not Found&#8221;を使用 -> On
          </p>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-2-2" class="outline-3">
    <h3 id="sec-2-2">
      Google にインデックスの許可
    </h3>
    
    <div class="outline-text-3" id="text-2-2">
      <p>
        管理者メニュー > サイト設定から
      </p>
      
      <ul class="org-ul">
        <li>
          <p>
            rel=&#8221;nofollow&#8221;を付加 -> Off に
          </p>
        </li>
        
        <li>
          <p>
            インデックスを許可 (何秒後) -> 0 に
          </p>
          
          <ul class="org-ul">
            <li>
              <a href="https://hain.jp/index.php/tech-j/2007/11/12/p191">dokuwiki が検索エンジンに載りにくい理由 &#8211; ぎじゅっやさん</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-2-3" class="outline-3">
    <h3 id="sec-2-3">
      Google ウェブマスターツール
    </h3>
    
    <div class="outline-text-3" id="text-2-3">
      <p>
        default では, サイトマップが作成されないので設定する.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.dokuwiki.org/ja:sitemap">ja:sitemap </a>
        </li>
      </ul>
      
      <p>
        管理者メニュー > サイト設定から
      </p>
      
      <ul class="org-ul">
        <li>
          Google サイトマップ作成頻度 (日数) -> 1
        </li>
      </ul>
      
      <p>
        これで, サイトマップが作成されるようになった. doku.php?do=sitemap に アクセスすると, サイトマップが取得できる.
      </p>
      
      <p>
        Google ウェブマスターツールにサイトを登録して, サイトマップの URL で doku.php?do=sitemap を指定して, 登録完了.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.google.com/webmasters/tools/home?hl=ja">https://www.google.com/webmasters/tools/home?hl=ja</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="outline-container-sec-2-4" class="outline-3">
    <h3 id="sec-2-4">
      Google Analytics for DokuWiki
    </h3>
    
    <div class="outline-text-3" id="text-2-4">
      <p>
        Google Analytics でアクセス解析.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://en.seowiki.info/best_practices/seo_optimized_dokuwiki/integration/google_analytics">SEO Optimized DokuWiki: Google Analytics Integration</a>
        </li>
      </ul>
      
      <p>
        まずは, Google Analytics でトラッキング ID 取得.
      </p>
    </div>
    
    <div id="outline-container-sec-2-4-1" class="outline-4">
      <h4 id="sec-2-4-1">
        DokuWiki の設定
      </h4>
      
      <div class="outline-text-4" id="text-2-4-1">
        <ul class="org-ul">
          <li>
            <p>
              Google Analytics DokuWiki Plugin をインストール
            </p>
            
            <ul class="org-ul">
              <li>
                <a href="https://www.dokuwiki.org/plugin:googleanalytics">plugin:googleanalytics</a>
              </li>
            </ul>
          </li>
          
          <li>
            <p>
              サイト設定画面で,
            </p>
            
            <ul class="org-ul">
              <li>
                [Google Analytics ID]:にトラッキング ID を入力
              </li>
              <li>
                [Don&#8217;t count admin/superuser]:チェック
              </li>
              <li>
                [Don&#8217;t count logged in users]:チェック
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  <div id="outline-container-sec-2-5" class="outline-3">
    <h3 id="sec-2-5">
      Google Adsense
    </h3>
    
    <div class="outline-text-3" id="text-2-5">
      <p>
        アドセンスもテーマに挿入出きるみたい.ただ, Wiki のデザインを大切にし たいので, この Wiki には広告はいれないことにした.
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://tsuyushiga.hatenablog.jp/entry/2014/03/02/000748">【その他】 Dokuwiki に GoogleAdSense の広告を表示する &#8211; tsuyushiga&#8217;s blog</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    おわりに
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      なにもしないと, Google 検索にまったくひっかからないんだということを 今更ながら知りました orz.
    </p>
  </div>
</div>