---
author: admin
categories:
- Ruby
- 技術メモ
date: 2013-08-11T06:34:10+00:00
dsq_thread_id:
- 3.7935017e+09
excerpt: FitNesseをRubyで利用するためのslimフレームワーク、RubySlimを試してみました
follow:
- follow
index:
- index
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 1664
side:
- def
sub:
- def
tags:
- FitNesse
title: RubyのAPIレベルのテストを直叩きできるFitNesse用フレームワーク ‘RubySlim’
type: post
url: /archives/=1769
---

FitNesseをRubyで利用するためのslimフレームワーク、RubySlimを試してみました。

![][1]

RubySlimは、FitNesseのブラグインで、FitNesseからRubyのコマンドを実行することができるツールです。

作者はボブおじさんです。作者直々のチュートリアル動画も見つけました。

<iframe src="https://player.vimeo.com/video/2454710" width="400" height="300" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

### RubySlimを使ってみる

##### 作業用ディレクトリ作成

    mkdir ruby_fitnesse
    cd ruby_fitnesse
    

##### fitnesseのダウンロード

  * <a href="https://fitnesse.org/FitNesseDownload" target="_blank">FitNesseDownload</a>

##### rubyslimのダウンロード

    git clone https://github.com/unclebob/rubyslim.git
    

##### TestCase の作成

まずは、URLにアクセスして、現れたURLを編集します。

    https://localhost/RubySlimFirstExample
    

TEST_RUNNERには、bin.rubyslimを設定。
  
!pathには、Custom Fixtureのパスを設定。

    !contents -R2 -g -p -f -h
    
    !define TEST_SYSTEM {slim}
    !define TEST_RUNNER {/home/tsu-nera/src/ruby_fitnesse/rubyslim/bin/rubyslim}
    !define COMMAND_PATTERN {ruby -I %p %m}
    !define PATH_SEPARATOR {-I}
    !path /home/tsu-nera/src/ruby_fitnesse/tests
    

##### Custom Fixture作成

    mkdir -p /home/tsu-nera/src/ruby_fitnesse/tests
    cd /home/tsu-nera/src/ruby_fitnesse/tests
    emacs some_decision_table.rb
    

ファイルの命名規約が重要。 SomeDecisionTable -> some_decision_table.rbのようにする。

     module Fixtures
      class SomeDecisionTable
        def set_input(input)
          @x = input
        end
    
        def get_output
          @x
        end
      end
    end
    

##### Decision Table

wikiに戻って、decision Tableを書く。

Fixtures は module名に対応させること。

    |Import|
    |Fixtures|
    

some decision table <-> SomeDecisonTable Classに対応させること。
  
set_input <-> input,get_output <-> get output?に対応する。

    |some decision table|
    |input|get output?  |
    |1    |2            |
    

これで、準備完了。testを実行すればOK.

 [1]: https://lh5.ggpht.com/-kisp2xg__ck/UgXaghxNd_I/AAAAAAAAAwM/tENCQ11ME_U/SnapCrab_NoName_2013-8-10_15-15-16_No-00.jpg