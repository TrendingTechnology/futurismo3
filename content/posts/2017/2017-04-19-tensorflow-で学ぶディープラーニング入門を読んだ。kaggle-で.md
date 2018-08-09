---
author: admin
categories:
- 書評
- 機械学習
date: 2017-04-19T11:22:00+00:00
dsq_thread_id:
- 5.7400346e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 1233
side:
- "y"
tags:
- DeepLearning
- Kaggle
- TensorFlow
title: TensorFlow で学ぶディープラーニング入門を読んだ。Kaggle で実践してみた。
title_view:
- "y"
type: post
url: /archives/=6274
---

TensorFlow で学ぶディープラーニング入門～畳み込みニューラルネットワーク徹底解説を読みました。 

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&#038;bc1=000000&#038;IS2=1&#038;bg1=FFFFFF&#038;fc1=000000&#038;lc1=0000FF&#038;t=fox10225fox-22&#038;o=9&#038;p=8&#038;l=as4&#038;m=amazon&#038;f=ifr&#038;ref=as_ss_li_til&#038;asins=B01MAWJJOW&#038;linkId=19d8511428ee2c27ef94333e1932cc44"></iframe>

<div id="outline-container-orgc8a649c" class="outline-2">
  <h2 id="orgc8a649c">
    概要と感想
  </h2>
  
  <div class="outline-text-2" id="text-orgc8a649c">
    <p>
      この本は、 手書き文字の認識処理を MNIST データを利用してすることが目的。
    </p>
    
    <p>
      また、Tensorflow で 畳み込みニューラルネットワーク(CNN)を実装することが目的。
    </p>
    
    <p>
      章をおうごとにソースコードがパワーアップしていき、認識精度が上がっていくところが面白い。
    </p>
    
    <ul class="org-ul">
      <li>
        2 章: Softmax をつかった多項分類器
      </li>
      <li>
        3 章: <ul class="org-ul">
          <li>
            2.単層ニューラルネットワーク
          </li>
          <li>
            3.多層ニューラルネットワーク
          </li>
        </ul>
      </li>
      
      <li>
        4 章: 単層 CNN
      </li>
      <li>
        5 章: 多層 CNN
      </li>
    </ul>
    
    <p>
      本のはじめににも書いてあるけれども、この本は TensorFlow の公式 Web サイトのチュートリアルで 「Deep MNIST for Experts」として紹介されているものをほぼそのまま採用しているそうだ。
    </p>
    
    <p>
      私は、公式サイトは読んでいないから差分がどうこういうことはできないけれども、 数式を交えて丁寧に解説されていて、わかりやすいと感じた。
    </p>
    
    <p>
      なお、Jupyter Notebook が提供されていて、 自分の環境で動かしながら勉強できるところがとても気に入った。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/enakai00/jupyter_tfbook">https://github.com/enakai00/jupyter_tfbook</a>
      </li>
    </ul>
    
    <p>
      この本で提示されている「機械学習の 3 ステップ」が心に残ったので、引用したい。
    </p>
    
    <p>
      [sourcecode language=&#8221;text&#8221; title=&#8221;&#8221; ]<br /> ①与えられたデータを元にして、未知のデータを予測する数式を考える<br /> ②数式に含まれるパラメーターの良し悪しを判断する誤差関数を用意する<br /> ③誤差関数を最小にするようにパラメーターの値を決定する<br /> [/sourcecode]
    </p>
    
    <p>
      TensorFlow について、この本ででてくるコードは毎回似たようなことをしているので、 はじめは困惑したのだけれども、繰り返し見ているうちにすらすら意味がわかるようになった。 入門レベルとしては、十分力がついたと思う。
    </p>
  </div>
</div>

<div id="outline-container-org52963f9" class="outline-2">
  <h2 id="org52963f9">
    環境構築は Anaconda をつかった
  </h2>
  
  <div class="outline-text-2" id="text-org52963f9">
    <p>
      この本には、Docker をつかって環境構築をするように書いてあったのだけれども、 自分は、Anaconda を利用して読みめてみた。
    </p>
    
    <p>
      ツールのバージョンも以下で読んだ。
    </p>
    
    <ul class="org-ul">
      <li>
        Anaconda 4.3.16
      </li>
      <li>
        Python 3.6
      </li>
      <li>
        TensorFlow 1.0.1
      </li>
    </ul>
    
    <p>
      ところどころ元のソースコードに修正が必要になったけれども、全て問題なく動作した。
    </p>
    
    <p>
      自分がした修正は以下のリポジトリにあります。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/tsu-nera/jupyter_tfbook/tree/master/">https://github.com/tsu-nera/jupyter_tfbook/tree/master/</a>
      </li>
    </ul>
  </div>
</div>

<div id="outline-container-org1555bdf" class="outline-2">
  <h2 id="org1555bdf">
    Kaggle で実力試しをした
  </h2>
  
  <div class="outline-text-2" id="text-org1555bdf">
    <p>
      2017 年現在、Kaggle で MNIST をりようしたコンペが主催されている。
    </p>
    
    <p>
      私は、各章を読み終わるたびに、理解度を深めるために Kaggle の MNIST のコンペに挑戦した。
    </p>
    
    <ul class="org-ul">
      <li>
        2 章: Softmax をつかった多項分類器 <a href="https://github.com/tsu-nera/kaggle/blob/master/digit-recognizer/multiclass-classification.ipynb">kaggle/multiclass-classification.ipynb</a>
      </li>
      <li>
        3 章: <ul class="org-ul">
          <li>
            2.単層ニューラルネットワーク <a href="https://github.com/tsu-nera/kaggle/blob/master/digit-recognizer/single-layer-network.ipynb">kaggle/single-layer-network.ipynb</a>
          </li>
          <li>
            3.多層ニューラルネットワーク <a href="https://github.com/tsu-nera/kaggle/blob/master/digit-recognizer/multi-layer-network.ipynb">kaggle/multi-layer-network.ipynb</a>
          </li>
        </ul>
      </li>
      
      <li>
        4 章: 単層 CNN <a href="https://github.com/tsu-nera/kaggle/blob/master/digit-recognizer/single-cnn.ipynb">kaggle/single-cnn.ipynb</a>
      </li>
      <li>
        5 章: 多層 CNN <a href="https://github.com/tsu-nera/kaggle/blob/master/digit-recognizer/double-layer-cnn.ipynb">kaggle/double-layer-cnn.ipynb</a>
      </li>
    </ul>
    
    <p>
      これはとてもよい、また楽しい復習方法なので、ぜひオススメしたい。
    </p>
    
    <p>
      ただし、この本を参考に実装した結果は、1150 位で 上位 1000 位以内にも入れないけれどもね。
    </p>
  </div>
</div>