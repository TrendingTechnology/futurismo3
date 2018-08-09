---
author: admin
categories:
- Wordpress
- 技術メモ
date: 2017-05-03T06:20:00+00:00
dsq_thread_id:
- 5.7815214e+09
follow:
- follow
fullscreen_view:
- "n"
index:
- index
menu_view:
- "y"
pvc_views:
- 617
side:
- "y"
tags:
- Jupyter
title: Jupyter Notebook で書いた ipynb を WordPress の記事にするには jupy2wp が便利
title_view:
- "y"
type: post
url: /archives/=6359
---

Jupyter Notebook で実行した結果や、matplotlib や seaborn で生成した図を、 そのまま WordPress に表示して、記事にしたいとする。 

調べてみると、以下の やり方があるようだ。 

<ol class="org-ol">
  <li>
    gist に アップロードして公開したものを WordPress に 埋め込む。
  </li>
  <li>
    Jupyter Notebook を html 形式で、ダウンロードする。
  </li>
  <li>
    .ipynb ファイルを nbconvert で html ファイルにして WordPress に入力する。
  </li>
  <li>
    jupy2wp を使う。
  </li>
</ol>

<div id="outline-container-orgb216044" class="outline-2">
  <h2 id="orgb216044">
    gist を埋め込む
  </h2>
  
  <div class="outline-text-2" id="text-orgb216044">
    <p>
      Jupyter Notebook には、Gist-it という extentions がある。 extentions の有効方法については、以下の README を参照。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/ipython-contrib/jupyter_contrib_nbextensions">ipython-contrib/jupyter_contrib_nbextensions:</a>
      </li>
    </ul>
    
    <p>
      これを有効にすると、ツールバーに gist のマークが現れる。 ポチルだけで、gist に ipynb がアップロードされて、公開される。
    </p>
    
    <p>
      注意点は、gist-it の設定画面から Github personal access token を入力することだ。 そうしないと、anonymous として gist が公開される。
    </p>
    
    <p>
      しかし、この方法は自分は好まない。なぜなら、gist を WordPress に 埋め込んだとき、 コードの高さが固定されてスクロールバーが出てきてしまうからだ。この回避方法がわからなかった。 もし、この問題が回避できれば、gist はいいかもしれない。
    </p>
    
    <p>
      どういう仕組みかわからないけれども、図表も表示される。
    </p>
  </div>
</div>

<div id="outline-container-org52fdc65" class="outline-2">
  <h2 id="org52fdc65">
    HTML 形式でダウンロードする
  </h2>
  
  <div class="outline-text-2" id="text-org52fdc65">
    <p>
      Jupyter Notebook の notebook を開いて、 File > Download as > HTML から html 形式でダウンロードする。
    </p>
    
    <p>
      出来た html ファイルを WordPress のテキスト画面に貼り込む
    </p>
    
    <p>
      この作戦も、自分は好まない。なぜなら、Jupyter Themes を使っているのだけれども、 Themes が反映された状態で HTML がダウンロードされるからだ。
    </p>
    
    <p>
      黒背景を使っているので、真っ黒な画面になった、よくない。
    </p>
  </div>
</div>

<div id="outline-container-org801ac1b" class="outline-2">
  <h2 id="org801ac1b">
    nbconvert をつかう
  </h2>
  
  <div class="outline-text-2" id="text-org801ac1b">
    <p>
      以下のサイトで紹介されている方法。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://qiita.com/AmbientData/items/47a341b5d4e030909dac">Jupyter Notebook のドキュメントを WordPress に貼り込む &#8211; Qiita</a>
      </li>
      <li>
        <a href="https://www.mianchen.com/wordpress-blogging-with-jupyter-notebook-in-five-simple-steps/">WordPress Blogging with Jupyter Notebook in Five Simple Steps | Mian Chen</a>
      </li>
    </ul>
    
    <p>
      1.Jupyter Notebook でコンテンツを作り、Save する 2.nbconvert で html ファイルに変換する
    </p>
    
    <p>
      [sourcecode language=&#8221;sh&#8221; title=&#8221;&#8221; ]<br /> $ jupyter nbconvert &#8211;to html &#8211;template basic 出来たファイル.ipynb<br /> [/sourcecode]
    </p>
    
    <p>
      3.出来た html ファイルを WordPress のテキスト画面に貼り込む 4.Wordpress の CSS ファイルに最後に示した CSS を追加する。
    </p>
    
    <p>
      これはいいかもしれない。しかし、もっといい方法を見つけた。
    </p>
  </div>
</div>

<div id="outline-container-org1a82c7e" class="outline-2">
  <h2 id="org1a82c7e">
    jupy2wp を使う
  </h2>
  
  <div class="outline-text-2" id="text-org1a82c7e">
    <p>
      jupy2wp というツールを使う。
    </p>
    
    <ul class="org-ul">
      <li>
        <a href="https://github.com/Pybonacci/jupy2wp">Pybonacci/jupy2wp: Publish a Jupyter notebook on a wordpress site using xmlrpc</a>
      </li>
    </ul>
    
    <p>
      インストール方法は README 参照。ちょっとコマンドオプションが長いけれども、以下のように使う。
    </p>
    
    <p>
      [sourcecode language=&#8221;bash&#8221; title=&#8221;&#8221; ]<br /> python -m jupy2wp.jupy2wp &#8211;xmlrpc-url https://futurismo.biz/xmlrpc.php &#8211;user username &#8211;password hogehoge &#8211;nb titanic-cnn.ipynb &#8211;title &#8220;Kaggle: Titanic 問題データ分析&#8221; &#8211;categories [Python, 統計] &#8211;tags keras<br /> [/sourcecode]
    </p>
    
    <p>
      こうすると、下書きの状態で、ipynb で表示されていた内容がそのまま記事として投稿される。
    </p>
    
    <p>
      さらに、画像は、/upload フォルダ配下に自動でアップロードされて保存される。これはいい。
    </p>
  </div>
</div>