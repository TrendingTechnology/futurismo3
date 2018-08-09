---
title: EmacsでRSpec環境をめちゃガチャパワーアップしたまとめ
author: admin
type: post
date: 2014-02-20T13:55:15+00:00
excerpt: '<!--:ja-->Emacs環境でのRSpec環境を強化しました<!--:--><!--:en-->Emacs環境でのRSpec環境を強化しました<!--:-->'
draft: true
private: true
url: /archives/=2259
pvc_views:
  - 33
page_layout:
  - col2
pdrp_attributionLocation:
  - end
categories:
  - Emacs
  - Ruby
  - 技術メモ
tags:
  - RSpec

---
<!--:ja-->

[<img alt="" src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" width="256" height="256" />][1]

<div class="outline-2" id="outline-container-sec-1">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      Emacs環境でのRSpec環境を強化しようと思った。
    </p>
    
    <p>
      結果的にはEmacsうんぬんとあまり関係なく、 尻すぼみになってしまったけど、まあいいや。
    </p>
    
    <p>
      これは前回の記事の続編。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/en/archives/2213">EmacsでRubyの開発環境をさらにめちゃガチャパワーアップしたまとめ | Futurismo</a>
      </li>
    </ul>
  </div>
  
  <div class="outline-3" id="outline-container-sec-1-1">
    <h3 id="sec-1-1">
      環境
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <ul class="org-ul">
        <li>
          Emacs 24.3.1
        </li>
        <li>
          Ruby 2.1.0
        </li>
      </ul>
      
      <p>
        [toc]
      </p>
    </div>
  </div>
</div>

<div class="outline-2" id="outline-container-sec-2">
  <h2 id="sec-2">
    rspec-mode
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      まずは定番のrspec-modeを導入。
    </p>
    
    <pre><code>(require 'rspec-mode)
(eval-after-load 'rspec-mode
  '(rspec-install-snippets))
</code></pre>
    
    <p>
      RSpec関係のショートカットを実行すると Could not determine the project root.とでてしまう。
    </p>
    
    <p>
      以下を参考にして、空Rakefileを作成する。おまじないも書く。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://d.hatena.ne.jp/nbahide/20100721/1279676604">rspec-modeをrake意外で使う方法 &#8211; んばぁってなんなのよ</a>
      </li>
    </ul>
    
    <pre><code>(custom-set-variables '(rspec-use-rake-flag nil))
(custom-set-faces )
</code></pre>
    
    <p>
      これでショートカットが動く。
    </p>
    
    <blockquote>
      <p>
        C-c , v RSpec実行<br /> C-c , s カ-ソルが当たっているサンプルを実行<br /> C-c , t Specとソースを切り替える
      </p>
    </blockquote>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/pezra/rspec-mode">pezra/rspec-mode</a>
      </li>
    </ul>
    
    <p>
      rspecを実行したときのバッファが主張しすぎだと思う場合は、popwinで調整。
    </p>
    
    <pre><code>(push '("*rspec-compilation*" :regexp t) popwin:special-display-config)
</code></pre>
  </div>
</div>

<div class="outline-2" id="outline-container-sec-3">
  <h2 id="sec-3">
    yasnippet
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      rspec用の yasnippetを導入する。これで入力が楽になる。
    </p>
    
    <pre><code>git clone git@github.com/gary/yasnippets-rspec.git
</code></pre>
    
    <p>
      とりあえず githubから落としてきて、ruby-modeのフォルダに突っ込んだ。 なんか、やりかたが違う気がするけど。。。
    </p>
  </div>
</div>

<div class="outline-2" id="outline-container-sec-4">
  <h2 id="sec-4">
    auto-test
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      保存時にRSpecを自動で動かすためのツール。
    </p>
    
    <p>
      まずは、autotestを入れる。
    </p>
    
    <pre><code>gem install ZenTest
</code></pre>
    
    <p>
      libにテスト対象コード、specにテストコードを入れる。 プロジェクトルートにautotestというディレクトリをつくり、 そのなかにdiscover.rbを作成。
    </p>
    
    <p>
      プロジェクトルートで autotestを起動。テストを編集して、勝手にテストが走れば成功。
    </p>
    
    <pre><code>mkdir autotest
echo 'Autotest.add_discovery { "rspec2" }' &gt; autotest/discover.rb
autotest
</code></pre>
  </div>
  
  <div class="outline-4" id="outline-container-sec-4-0-1">
    <h4 id="sec-4-0-1">
      カラー表示
    </h4>
    
    <div class="outline-text-4" id="text-4-0-1">
      <p>
        ~/.rspecをつくると、rspecがカラーになる。
      </p>
      
      <pre><code>/.rspec
--format nested
--color
</code></pre>
    </div>
  </div>
  
  <div class="outline-4" id="outline-container-sec-4-0-2">
    <h4 id="sec-4-0-2">
      デスクトップ通知
    </h4>
    
    <div class="outline-text-4" id="text-4-0-2">
      <p>
        autotest/discover.rbに以下を書くと、テストの成功時、失敗時のアクションが定義できる。
      </p>
      
      <pre><code>Autotest.add_hook :green do
end

Autotest.add_hook :red do
end
</code></pre>
      
      <p>
        たとえばLinux Mintだと、notify-sendコマンドを使えばデスクトップ通知が可能だ。notify-sendのインストールは以下の過去記事参照。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/2160">GTDの規律に従い生産性Up!!3分後にデスクトップ通知と音を鳴らすワンラインスクリプト(Linux) | Futurismo</a>
        </li>
      </ul>
      
      <p>
        アイコンはフリー素材からひろった。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.iconarchive.com/">https://www.iconarchive.com/</a>
        </li>
      </ul>
      
      <pre><code>wget https://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/256/Close-2-icon.png
wget https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Actions-dialog-ok-apply-icon.png
</code></pre>
      
      <p>
        めっちゃくちゃいい感じに表示される！これはテンションアップ。
      </p>
      
      <pre><code>Autotest.add_discovery { "rspec2" }

Autotest.add_hook :green do
  system 'notify-send -i ~/Pictures/tdd/Actions-dialog-ok-apply-icon.png OK'
end

Autotest.add_hook :red do
    system 'notify-send -i ~/Pictures/tdd/Close-2-icon.png Error'
end
</code></pre>
    </div>
  </div>
  
  <div class="outline-4" id="outline-container-sec-4-0-3">
    <h4 id="sec-4-0-3">
      Emacsで動かす
    </h4>
    
    <div class="outline-text-4" id="text-4-0-3">
      <p>
        autotestをEmacs上で動かす elispもある。
      </p>
      
      <pre><code>wget https://www.emacswiki.org/cgi-bin/emacs/download/autotest.el
</code></pre>
      
      <p>
        だがしかし、自分の環境ではうまくうごかなかった。。。 emacs上でshellをたちあげて、autotestを実行すると同じことができる。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/dchelimsky/rspec/wiki/autotest-integration">Autotest Integration · dchelimsky/rspec Wiki</a>
        </li>
        <li>
          <a href="https://tmtms.hatenablog.com/entry/20110101/rspec">RSpec で autotest &#8211; @tmtms のメモ</a>
        </li>
        <li>
          <a href="https://d.hatena.ne.jp/amacou/20080908/1220893836">autotest,RSpec,Emacsで快適テスト環境をつくる(あとGrowlも) &#8211; AorBorF</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="outline-2" id="outline-container-sec-5">
  <h2 id="sec-5">
    rspec-kickstarter
  </h2>
  
  <div class="outline-text-2" id="text-5">
    <p>
      RSpecのテストコードを自動生成するツール。以下の記事を参照。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/en/archives/2253">Rubyのテストコード自動生成!レガシーコードをrspec-kickstarterで切り崩す | Futurismo</a>
      </li>
    </ul>
  </div>
</div>

<div class="outline-2" id="outline-container-sec-6">
  <h2 id="sec-6">
    simplecov
  </h2>
  
  <div class="outline-text-2" id="text-6">
    <p>
      RSpecと組み合わせてカバレッジをとるツール。
    </p>
    
    <pre><code>gem install simplecov 
</code></pre>
    
    <p>
      spec_helper.rbに以下の2行を追加するだけ。すごくsimple
    </p>
    
    <div class="amazlink-box" style="text-align: left; padding-bottom: 20px; font-size: small; /zoom: 1; overflow: hidden;">
      <div class="amazlink-list" style="clear: both;">
        <div class="amazlink-image" style="float: left; margin: 0px 12px 1px 0px;">
          <a href="https://www.amazon.co.jp/RSpec-Book-Professional-Ruby-Series/dp/4798121932%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4798121932" target="_blank" rel="nofollow"><img style="border: none;" alt="" src="https://ecx.images-amazon.com/images/I/51-3T735zLL._SL160_.jpg" /></a>
        </div>
        
        <div class="amazlink-info" style="height: 160; margin-bottom: 10px;">
          <div class="amazlink-name" style="margin-bottom: 10px; line-height: 120%;">
            <a href="https://www.amazon.co.jp/RSpec-Book-Professional-Ruby-Series/dp/4798121932%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4798121932" target="_blank" rel="nofollow">The RSpec Book (Professional Ruby Series)</a>
          </div>
          
          <div class="amazlink-powered" style="font-size: 80%; margin-top: 5px; line-height: 120%;">
            posted with <a title="アマゾンアフィリエイトリンク作成ツール" href="https://amazlink.keizoku.com/" target="_blank">amazlink</a> at 14.02.20
          </div>
          
          <div class="amazlink-detail">
            David Chelimsky
          </div>
          
          <div class="amazlink-sub-info" style="float: left;">
            <div class="amazlink-link" style="margin-top: 5px;">
              <img alt="" src="https://amazlink.fuyu.gs/icon_amazon.png" width="18" /><a href="https://www.amazon.co.jp/RSpec-Book-Professional-Ruby-Series/dp/4798121932%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4798121932" target="_blank" rel="nofollow">Amazon</a> <img alt="" src="https://amazlink.fuyu.gs/icon_rakuten.gif" width="18" /><a href="https://hb.afl.rakuten.co.jpjp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/archives/c=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11531387%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D11531387%26surl%3Dbook" target="_blank" rel="nofollow">楽天</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!--:-->

<!--:en-->

[<img alt="" src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" width="256" height="256" />][1] 

<div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">
    はじめに
  </h2>
  
  <div class="outline-text-2" id="text-1">
    <p>
      Emacs環境でのRSpec環境を強化しようと思った。
    </p>
    
    <p>
      結果的にはEmacsうんぬんとあまり関係なく、 尻すぼみになってしまったけど、まあいいや。
    </p>
    
    <p>
      これは前回の記事の続編。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/en/archives/2213">EmacsでRubyの開発環境をさらにめちゃガチャパワーアップしたまとめ | Futurismo</a>
      </li>
    </ul>
  </div>
  
  <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1">
      環境
    </h3>
    
    <div class="outline-text-3" id="text-1-1">
      <ul class="org-ul">
        <li>
          Emacs 24.3.1
        </li>
        <li>
          Ruby 2.1.0
        </li>
      </ul>
      
      <p>
        [toc]
      </p></p>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">
    rspec-mode
  </h2>
  
  <div class="outline-text-2" id="text-2">
    <p>
      まずは定番のrspec-modeを導入。
    </p>
    
    <pre><code>(require 'rspec-mode)
(eval-after-load 'rspec-mode
  '(rspec-install-snippets))
</code></pre>
    
    <p>
      RSpec関係のショートカットを実行すると Could not determine the project root.とでてしまう。
    </p>
    
    <p>
      以下を参考にして、空Rakefileを作成する。おまじないも書く。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://d.hatena.ne.jp/nbahide/20100721/1279676604">rspec-modeをrake意外で使う方法 &#8211; んばぁってなんなのよ</a>
      </li>
    </ul>
    
    <pre><code>(custom-set-variables '(rspec-use-rake-flag nil))
(custom-set-faces )
</code></pre>
    
    <p>
      これでショートカットが動く。
    </p>
    
    <blockquote>
      <p>
        C-c , v RSpec実行<br /> C-c , s カ-ソルが当たっているサンプルを実行<br /> C-c , t Specとソースを切り替える
      </p>
    </blockquote>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/pezra/rspec-mode">pezra/rspec-mode</a>
      </li>
    </ul>
    
    <p>
      rspecを実行したときのバッファが主張しすぎだと思う場合は、popwinで調整。
    </p>
    
    <pre><code>(push '("*rspec-compilation*" :regexp t) popwin:special-display-config)
</code></pre></p>
  </div></p>
</div>

<div id="outline-container-sec-3" class="outline-2">
  <h2 id="sec-3">
    yasnippet
  </h2>
  
  <div class="outline-text-2" id="text-3">
    <p>
      rspec用の yasnippetを導入する。これで入力が楽になる。
    </p>
    
    <pre><code>git clone git@github.com:gary/yasnippets-rspec.git
</code></pre>
    
    <p>
      とりあえず githubから落としてきて、ruby-modeのフォルダに突っ込んだ。 なんか、やりかたが違う気がするけど。。。
    </p></p>
  </div></p>
</div>

<div id="outline-container-sec-4" class="outline-2">
  <h2 id="sec-4">
    auto-test
  </h2>
  
  <div class="outline-text-2" id="text-4">
    <p>
      保存時にRSpecを自動で動かすためのツール。
    </p>
    
    <p>
      まずは、autotestを入れる。
    </p>
    
    <pre><code>gem install ZenTest
</code></pre>
    
    <p>
      libにテスト対象コード、specにテストコードを入れる。 プロジェクトルートにautotestというディレクトリをつくり、 そのなかにdiscover.rbを作成。
    </p>
    
    <p>
      プロジェクトルートで autotestを起動。テストを編集して、勝手にテストが走れば成功。
    </p>
    
    <pre><code>mkdir autotest
echo 'Autotest.add_discovery { "rspec2" }' > autotest/discover.rb
autotest
</code></pre></p>
  </div>
  
  <div id="outline-container-sec-4-0-1" class="outline-4">
    <h4 id="sec-4-0-1">
      カラー表示
    </h4>
    
    <div class="outline-text-4" id="text-4-0-1">
      <p>
        ~/.rspecをつくると、rspecがカラーになる。
      </p>
      
      <pre><code>/.rspec
--format nested
--color
</code></pre></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-4-0-2" class="outline-4">
    <h4 id="sec-4-0-2">
      デスクトップ通知
    </h4>
    
    <div class="outline-text-4" id="text-4-0-2">
      <p>
        autotest/discover.rbに以下を書くと、テストの成功時、失敗時のアクションが定義できる。
      </p>
      
      <pre><code>Autotest.add_hook :green do
end

Autotest.add_hook :red do
end
</code></pre>
      
      <p>
        たとえばLinux Mintだと、notify-sendコマンドを使えばデスクトップ通知が可能だ。notify-sendのインストールは以下の過去記事参照。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://futurismo.biz/archives/2160">GTDの規律に従い生産性Up!!3分後にデスクトップ通知と音を鳴らすワンラインスクリプト(Linux) | Futurismo</a>
        </li>
      </ul>
      
      <p>
        アイコンはフリー素材からひろった。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://www.iconarchive.com/">https://www.iconarchive.com/</a>
        </li>
      </ul>
      
      <pre><code>wget https://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/256/Close-2-icon.png
wget https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Actions-dialog-ok-apply-icon.png
</code></pre>
      
      <p>
        めっちゃくちゃいい感じに表示される！これはテンションアップ。
      </p>
      
      <pre><code>Autotest.add_discovery { "rspec2" }

Autotest.add_hook :green do
  system 'notify-send -i ~/Pictures/tdd/Actions-dialog-ok-apply-icon.png OK'
end

Autotest.add_hook :red do
    system 'notify-send -i ~/Pictures/tdd/Close-2-icon.png Error'
end
</code></pre></p>
    </div></p>
  </div>
  
  <div id="outline-container-sec-4-0-3" class="outline-4">
    <h4 id="sec-4-0-3">
      Emacsで動かす
    </h4>
    
    <div class="outline-text-4" id="text-4-0-3">
      <p>
        autotestをEmacs上で動かす elispもある。
      </p>
      
      <pre><code>wget https://www.emacswiki.org/cgi-bin/emacs/download/autotest.el
</code></pre>
      
      <p>
        だがしかし、自分の環境ではうまくうごかなかった。。。 emacs上でshellをたちあげて、autotestを実行すると同じことができる。
      </p>
      
      <ul class="org-ul">
        <li>
          <a href="https://github.com/dchelimsky/rspec/wiki/autotest-integration">Autotest Integration · dchelimsky/rspec Wiki</a>
        </li>
        <li>
          <a href="https://tmtms.hatenablog.com/entry/20110101/rspec">RSpec で autotest &#8211; @tmtms のメモ</a>
        </li>
        <li>
          <a href="https://d.hatena.ne.jp/amacou/20080908/1220893836">autotest,RSpec,Emacsで快適テスト環境をつくる(あとGrowlも) &#8211; AorBorF</a>
        </li>
      </ul>
    </div></p>
  </div></p>
</div>

<div id="outline-container-sec-5" class="outline-2">
  <h2 id="sec-5">
    rspec-kickstarter
  </h2>
  
  <div class="outline-text-2" id="text-5">
    <p>
      RSpecのテストコードを自動生成するツール。以下の記事を参照。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://futurismo.biz/en/archives/2253">Rubyのテストコード自動生成!レガシーコードをrspec-kickstarterで切り崩す | Futurismo</a>
      </li>
    </ul>
  </div></p>
</div>

<div id="outline-container-sec-6" class="outline-2">
  <h2 id="sec-6">
    simplecov
  </h2>
  
  <div class="outline-text-2" id="text-6">
    <p>
      RSpecと組み合わせてカバレッジをとるツール。
    </p>
    
    <pre><code>gem install simplecov 
</code></pre>
    
    <p>
      spec_helper.rbに以下の2行を追加するだけ。すごくsimpple!
    </p>
    
    <p>
      #+BEGIN_HTML
    </p>
    
    <div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'>
      <div class='amazlink-list' style='clear: both;'>
        <div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'>
          <a href='https://www.amazon.co.jp/RSpec-Book-Professional-Ruby-Series/dp/4798121932%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4798121932' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/51-3T735zLL._SL160_.jpg' style='border: none;' /></a>
        </div>
        
        <div class='amazlink-info' style='height:160; margin-bottom: 10px'>
          <div class='amazlink-name' style='margin-bottom:10px;line-height:120%'>
            <a href='https://www.amazon.co.jp/RSpec-Book-Professional-Ruby-Series/dp/4798121932%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4798121932' rel='nofollow' target='_blank'>The RSpec Book (Professional Ruby Series)</a>
          </div>
          
          <div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>
            posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 14.02.20
          </div>
          
          <div class='amazlink-detail'>
            David Chelimsky
          </div>
          
          <div class='amazlink-sub-info' style='float: left;'>
            <div class='amazlink-link' style='margin-top: 5px'>
              <img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18' /><a href='https://www.amazon.co.jp/RSpec-Book-Professional-Ruby-Series/dp/4798121932%3FSubscriptionId%3DAKIAJBCXQ4WQGJ7WU3WA%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4798121932' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18' /><a href='https://hb.afl.rakuten.co.jpjp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/archives/c=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11531387%2F&#038;m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D11531387%26surl%3Dbook' rel='nofollow' target='_blank'>楽天</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></p>
</div>

<!--:-->

 [1]: https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite