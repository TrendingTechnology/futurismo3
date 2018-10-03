---
title: fast.ai の Introduction to Machine Learning for Codersを受けた
description: fast.ai の Introduction to Machine Learning for Codersを受けた感想です。これは、とても役に立つからね。
date: 2018-09-29 07:52:55
author: tsu-nera
type: post
tags:
- fast.ai
- 機械学習
- MOOC
size: false
image: https://res.cloudinary.com/tsu-nera/image/upload/v1538175823/futurismo/posts/055a5a7aae59ab9e58ca7d1c86f1f1d9.png
---

fast.ai ジェレミーハワード氏の機械学習講座入門が公開されました!!

- http://course.fast.ai/ml
- [Introduction to Machine Learning for Coders: Launch · fast\.ai](http://www.fast.ai/2018/09/26/ml-launch/)

2017 年に全世界で話題を呼んだ、Practical Deep Learning for Coders の Machine Learning 版だ。

- https://futurismo.biz/archives/6440/
- https://futurismo.biz/2018/05/fastai_p1_2018/

## 今回も kaggle はフル活用

fast.ai は課題の題材に kaggle のコンペを利用するところが面白い。

それは、教育の哲学が、Top-Down で実施することを重視しているからだ。
理論よりも、まずは手を動かすことによって、楽しむ。

今回も、以下のコンペが取り上げられる。

- https://www.kaggle.com/c/bluebook-for-bulldozers
- https://www.kaggle.com/c/favorita-grocery-sales-forecasting
- https://www.kaggle.com/c/rossmann-store-sales

## Random Forest と LogisticRegression

驚くことなかれ、Lesson1-7 までずっと RandomForset の解説がある。
一つの動画が 1.5 時間名て、10 時間以上 RandomForest を解説する。
使い方から、仕組みまでさらい、さらにはスクラッチ実装まで。

それをこえると、今度は PyTorch による LogisticRegression の解説が、6 時間くらいある。

Tree 系、Linear 系、合わせて 16 時間を Code ベースで丁寧に解説。

## 授業内容

- https://github.com/fastai/fastai/tree/master/courses/ml1

### シラバス

```
Train vs test
    Effective validation set construction
Trees and ensembles
    Creating random forests
    Interpreting random forests
What is ML? Why do we use it?
	What makes a good ML project?
	Structured vs unstructured data
	Examples of failures/mistakes
Feature engineering
	Domain specific - dates, URLs, text
	Embeddings / latent factors
Regularized models trained with SGD
	GLMs, Elasticnet, etc (NB: see what James covered)
Basic neural nets
	PyTorch
	Broadcasting, Matrix Multiplication
	Training loop, backpropagation
KNN
CV / bootstrap (Diabetes data set?)
	Ethical considerations
```

### Lesson1

Random Forest をつかって、
Kaggle の Blue Book for Bulldozers コンペに挑戦。

- https://www.kaggle.com/c/bluebook-for-bulldozers

### Lesson2

Lesson1 の続き。Random Forest の解説。決定木からバギングまで。

また、validation を利用した、パラメータチューニングについて。

また、Lesson2 までを通じて一通りの機械学習コンペの作法を学ぶ。
kaggle からのデータダウンロード、前処理、Random Forest、提出。

### Lesson3

Lesson1, 2 で学んだ内容を、以下のコンペに適用してみる。
30th になれるので、モデルをどんどん改良してねとか。

Corporación Favorita Grocery Sales Forecasting

- https://www.kaggle.com/c/favorita-grocery-sales-forecasting

残りの時間は、再び Bulldozers コンペに戻り、解析結果の解釈方法について話される。
feature importance, feature selection の話。

### Lesson4

メモするの忘れた。まだ Random Forest.

### Lesson5

Validation 戦略、主にクロスバリデーションとか。

後半は、Random Forest のスクラッチ実装を開始。
RandomForest だけで、8 時間くらいたっているのですが。。。

確認したら、Lesson6,7 も RandomForest だ。みっちり 10 時間以上だな。

### Lesson6

Machine Learning とは、という話がここでようやくでてくる。この記事の説明。

- https://www.oreilly.com/ideas/drivetrain-approach-data-products

その後、今まで説明した概念を振り返り説明する。

### Lesson7

Random Forest のスクラッチ実装。
RandomForest の実装は簡単で実はそこに利用されてる DecisionTree が難しい。

すみません、この動画は飛ばしてみました。

この回で、ようやく RandomForest は終わり。次は、ニューラルネット。

### Lesson 8, 9, 10

ニューラルネットワークの説明。PyTorch 登場。MNIST の一層のネットワークによる分類を実装。

yTorch をつかって、LogisticRegression をスクラッチ実装していく。6 時間。

コードの一行一行を丁寧に解説していく。正則化などのテクニックも合わせて紹介される。

しかし、この一連の PyTorch の実装は私は飛ばしました。

### Lesson 11

前半は、PyTorch による SDG の実装の振り返り。

後半は、時系列データに対する扱いをということで Rossman コンペの解説だ。

### Lesson12

Rossman コンペの解説。

- https://github.com/fastai/fastai/blob/master/courses/dl1/lesson3-rossman.ipynb

表形式データに対して、昨今は ニューラルネットでのアプローチで
あまり feature enginnering しなくてもいい精度が出るとのこと。

最後に、講座の振り返り。
Tree 系は RandomForests を、Linear 系は LogisticRegression をやったよね？
フルスクラッチで実装もできたよね？じゃあ、大丈夫だ。

そして、最後の最後に Machine Learning と倫理についてのお話。ここは飛ばしました。
