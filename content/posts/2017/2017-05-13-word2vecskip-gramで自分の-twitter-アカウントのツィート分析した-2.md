---
author: admin
categories:
- Python
- 機械学習
date: 2017-05-13T04:42:00+00:00
dsq_thread_id:
- 5.812507e+09
excerpt: Word2Vec(skip-gram)で自分の twitter アカウントのツィート分析した
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
- 663
side:
- "y"
tags:
- DeepLearning
- NLP
title: Word2Vec(skip-gram)で自分の twitter アカウントのツィート分析した
title_view:
- "y"
type: post
url: /archives/=6427
---

はじめに
========

[Udacity
DLND](https://www.udacity.com/course/deep-learning-nanodegree-foundation--nd101)、今週は
week8。word2vec がテーマ。

週をおうごとによくわからなくなっていくのは、自分だけだろうか。
だんだん、コピペと写経の講座になってしまっている。

リンクが張られてこれ読んでおいてねという感じ。自学自習が重視される。

というわけで、理解を深めるために、試行錯誤してみた。

week8 は、word2vec(skip-gram model) を tensorflow で実装するという内容。
word2vec は、2
層のニューラルネットワークに過ぎないので理解はたやすいのだけれども、
その前処理（SubSumpling)や 高速化のテクニック(Negative
Sampling)が意味わからなかった。

この絵で説明する word2vec の解説ページがとてもわかりやすかった。感謝！

-   [絵で理解する Word2vec の仕組み -
    Qiita](https://qiita.com/Hironsan/items/11b388575a058dc8a46a)

演習では、[text8](https://mattmahoney.net/dc/textdata.html) という
Wikipedia のデータセットを用いるのだけれども、相変わらず英語で、
日本人の自分にはピンとこない。というわけで、日本語のデータセットを自分で用意して試すことにした。

今回試したフル実装の Jupyter Notebook は以下です。

-   [Jupyter Notebook
    Viewer](https://nbviewer.jupyter.org/gist/tsu-nera/7aee7781457ec17f2d5110716c3a2e18#)

ツィートをデータセットに用いる
==============================

自分の twitter アカウントのツィートをデータセットにもちいることにした。

といっても、元ネタがあって、元ネタはこの記事。

-   [Ubuntu + word2vec で twitter
    の自分のアカウントのデータを自然言語処理してみた | from umentu
    import
    stupid](https://www.blog.umentu.work/ubuntu-word2vec%e3%81%a7twitter%e3%81%ae%e8%87%aa%e5%88%86%e3%81%ae%e3%82%a2%e3%82%ab%e3%82%a6%e3%83%b3%e3%83%88%e3%81%ae%e3%83%87%e3%83%bc%e3%82%bf%e3%82%92%e8%87%aa%e7%84%b6%e8%a8%80%e8%aa%9e/)

この記事に 自分のツイートを取得する方法が詳しく書いてある。 twitter が
csv データを提供してくれるのだ。 ダウンロードすると、tweets.csv
というファイルが手に入る。

pandas で読み込んで前処理を加える。 studyplus とか fitbit
のログを垂れ流していたので、それらは削除。

``` {.python}
raw_data = pd.read_csv('tweets.csv')
text = raw_data['text']

# studyplus の垂れ流しツイートは削除
text = text[text.str.contains("#studyplus") == False]
# fitbit のライフログは削除
text = text[text.str.contains("おはようございます。今日は") == False]
```

オープンソースの形態素解析エンジンである MeCab をインストールして、
ツイートを単語ごとに分解して保存する。

ここでもさらに文章からゴミを落としていく。以下を参考にした。re.sub
を使う。

-   [Python で余計な文字列を削除する方法 |
    hacknote](https://hacknote.jp/archives/19937/)

``` {.python}
import Mecab
import re
f_out = open("tweets_wakati.txt", "w" )
for line in text.iteritems():
    line = re.sub('https?://[\w/:%#\$&\?\(\)~\.=\+\-…]+','', line[1])
    line = re.sub('RT', "", line)
    line = re.sub(r'[!-~]', "", line)#半角記号,数字,英字
    line = re.sub(r'[︰-＠]', "", line)#全角記号
    line = re.sub('\n', " ", line)#改行文字
    f_out.write(m.parse(line))
f_out.close()
```

これで tweet データセットがてにはいった。

Word2Vec を Tensorflow で実装
=============================

Word2Vec を tensorflow
で実装！といっても課題をコピペしただけなので、省略！！

元の課題のコードを見てください。

-   [Skip-gram
    word2vec](https://nbviewer.jupyter.org/github/udacity/deep-learning/blob/master/embeddings/Skip-Grams-Solution.ipynb)

可視化
======

こうなりました。自分を構成している概念が可視化されて面白い。

![](./../img/tweet_analytics.png)

たとえば、落語という言葉に注目してみると、
周辺には寄席、談志、独演会など、落語関係の言葉がちゃんとあつまっている。
