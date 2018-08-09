---
title: "fast.ai の機械学習講座を受けた"
date: 2018-05-23T02:54:22+09:00
size: false
---

## はじめに
fast.ai ジェレミーハワード氏の実践機械学習講座。

2017年に全世界で話題を呼んだ、Practical Deep Learning for CodersのMachine Learning版だ。

- https://futurismo.biz/archives/6440/
- https://futurismo.biz/2018/05/fastai_p1_2018/

## 今回も kaggle はフル活用
fast.aiは課題の題材にkaggle のコンペを利用するところが面白い。

それは、教育の哲学が、Top-Downで実施することを重視しているからだ。
理論よりも、まずは手を動かすことによって、楽しむ。

今回も、以下のコンペが取り上げられる。

- https://www.kaggle.com/c/bluebook-for-bulldozers
- https://www.kaggle.com/c/favorita-grocery-sales-forecasting
- https://www.kaggle.com/c/rossmann-store-sales

## Random ForestとLogisticRegression
驚くことなかれ、Lesson1-7までずっとRandomForsetの解説がある。
一つの動画が1.5時間名て、10時間以上 RandomForestを解説する。
使い方から、仕組みまでさらい、さらにはスクラッチ実装まで。

それをこえると、今度はPyTorchによるLogisticRegressionの解説が、6時間くらいある。

Tree系、Linear系、合わせて16時間をCodeベースで丁寧に解説。

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
Random Forestをつかって、
Kaggleの Blue Book for Bulldozersコンペに挑戦。

- https://www.kaggle.com/c/bluebook-for-bulldozers

### Lesson2
Lesson1の続き。Random Forest の解説。決定木からバギングまで。

また、validationを利用した、パラメータチューニングについて。

また、Lesson2までを通じて一通りの機械学習コンペの作法を学ぶ。
kaggleからのデータダウンロード、前処理、Random Forest、提出。

### Lesson3
Lesson1, 2で学んだ内容を、以下のコンペに適用してみる。
30thになれるので、モデルをどんどん改良してねとか。

Corporación Favorita Grocery Sales Forecasting
- https://www.kaggle.com/c/favorita-grocery-sales-forecasting

残りの時間は、再びBulldozersコンペに戻り、解析結果の解釈方法について話される。
feature importance, feature selectionの話。

### Lesson4
メモするの忘れた。まだ Random Forest.

### Lesson5 
Validation戦略、主にクロスバリデーションとか。

後半は、Random Forest のスクラッチ実装を開始。
RandomForestだけで、8時間くらいたっているのですが。。。

確認したら、Lesson6,7も RandomForestだ。みっちり10時間以上だな。

### Lesson6
Machine Learningとは、という話がここでようやくでてくる。この記事の説明。
- https://www.oreilly.com/ideas/drivetrain-approach-data-products

その後、今まで説明した概念を振り返り説明する。

### Lesson7 
Random Forest のスクラッチ実装。
RandomForestの実装は簡単で実はそこに利用されてるDecisionTreeが難しい。

すみません、この動画は飛ばしてみました。

この回で、ようやく RandomForestは終わり。次は、ニューラルネット。

### Lesson 8, 9, 10
ニューラルネットワークの説明。PyTorch登場。MNISTの一層のネットワークによる分類を実装。

yTorchをつかって、LogisticRegressionをスクラッチ実装していく。6時間。

コードの一行一行を丁寧に解説していく。正則化などのテクニックも合わせて紹介される。

しかし、この一連のPyTorchの実装は私は飛ばしました。

### Lesson 11
前半は、PyTorchによるSDGの実装の振り返り。

後半は、時系列データに対する扱いをということでRossmanコンペの解説だ。

### Lesson12
Rossmanコンペの解説。

- https://github.com/fastai/fastai/blob/master/courses/dl1/lesson3-rossman.ipynb

表形式データに対して、昨今は ニューラルネットでのアプローチで
あまりfeature enginneringしなくてもいい精度が出るとのこと。

最後に、講座の振り返り。
Tree系はRandomForestsを、Linear系はLogisticRegressionをやったよね？
フルスクラッチで実装もできたよね？じゃあ、大丈夫だ。

そして、最後の最後にMachine Learningと倫理についてのお話。ここは飛ばしました。
