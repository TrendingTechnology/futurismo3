---
author: admin
categories:
- Ruby
- TDD
date: 2014-02-19T15:13:00+00:00
dsq_thread_id:
- 3.731661e+09
excerpt: 既存コードからRSpecのスケルトンコードを自動生成するツールを試す
pvc_views:
- 3020
title: Rubyのテストコード自動生成!レガシーコードをrspec-kickstarterで切り崩す
type: post
url: /archives/=2253
---

[<img alt="" src="https://lh3.googleusercontent.com/-Zf4rF4KLaKQ/UvpByiJqSvI/AAAAAAAABCA/lvJgohfEmdo/s800/ruby1.png" width="256" height="256" />][1] 

RSpec絶賛勉強中! t-wadaさんの記事を参考にして写経してる。 

  * [RSpec の入門とその一歩先へ &#8211; t-wadaの日記][2] 

RSpecについての情報を探してネット上を徘徊していたら、 rspec-kickstarterというおもしろそうなツールを発見したので試す。 

<div id="outline-container-1" class="outline-4">
  <h4 id="sec-1">
    rspec-kickstarterとは
  </h4>
  
  <div class="outline-text-4" id="text-1">
    <p>
      githubのREADMEによると、 既存コードからRSpecのスケルトンコードを自動生成するツールのようだ。
    </p>
    
    <ul>
      <li>
        <a href="https://github.com/seratch/rspec-kickstarter">seratch/rspec-kickstarter</a>
      </li>
    </ul>
    
    <ul>
      <li id="sec-1-1">
        インストール<br /> <pre><code>gem install rspec-kickstarter
</code></pre>
      </li>
    </ul>
  </div></p>
</div>

<div id="outline-container-2" class="outline-4">
  <h4 id="sec-2">
    つかってみる
  </h4>
  
  <div class="outline-text-4" id="text-2">
    <p>
      写経用教材をrspec-kickstarterにかけてみると・・・
    </p>
    
    <pre><code>require 'spec_helper'
require 'message_filter'

describe MessageFilter do

  # TODO auto-generated
  describe '#new' do
    it 'works' do
      word = double('word')
      result = MessageFilter.new(word)
      expect(result).not_to be_nil
    end
  end

  # TODO auto-generated
  describe '#detect?' do
    it 'works' do
      word = double('word')
      message_filter = MessageFilter.new(word)
      text = double('text')
      result = message_filter.detect?(text)
      expect(result).not_to be_nil
    end
  end

end
</code></pre>
    
    <p>
      あっという間に自動生成。自動生成なのでテストがDRYではあるが、それでも素晴らしい。 いきなり最終回だ。
    </p></p>
  </div></p>
</div>

<div id="outline-container-3" class="outline-4">
  <h4 id="sec-3">
    テストのリズム
  </h4>
  
  <div class="outline-text-4" id="text-3">
    <p>
      オプション -f をつけると、 既存のspecコードに足りないメソッドのサンプルを追加してくれる。
    </p>
    
    <p>
      このオプションをつかうと、以下のようなTDDのリズムが考えられる。
    </p>
    
    <ol>
      <li>
        メソッドを定義
      </li>
      <li>
        メソッドに対応するスケルトンを生成し、テストを実装
      </li>
      <li>
        テスト失敗
      </li>
      <li>
        メソッド実装
      </li>
      <li>
        テスト成功
      </li>
    </ol>
    
    <p>
      普通ならば、このあとリファクタリングをする。
    </p>
    
    <p>
      まだ、お試しなので、もう少し使ってみて有用性を見極めてみる。
    </p>
    
    <p>
      一からスクラッチを書くコードよりも、レガシーコードにたいして絶大な効果がありそう。
    </p>
    
    <p>
      また、テストファイルをとりあえず生成することができるので、初めの一歩をkickするためだけの用途でも使えそう。
    </p>
  </div>
</div>

 [1]: https://picasaweb.google.com/lh/photo/Tu2VEkVYqYsV04cIb3i5qTyD6hjDXGH6XyE6iLrzolo?feat=embedwebsite
 [2]: https://d.hatena.ne.jp/t-wada/20100228/p1