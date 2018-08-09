---
title: "fast.ai Practical Deep Learning for Corders 2018"
date: 2018-05-03T20:53:43+09:00
size: false
---

## はじめに
今年のGWにまとめてfast.aiの Practical Deep Learning for Coders 2018 を受けました。

- https://course.fast.ai

去年の記事はこちら。

- [fast\.ai の Practical Deep Learning for Coders, Part1 を受けた · Futurismo](https://futurismo.biz/archives/6440/)

## 講座の特徴
主に、2017との比較から

- フレームワークがKerasからPyTorchへ
- 最強のノウハウがつまったfastaiライブラリ

## 講座で扱うKaggleコンペ
fast.aiといえば、Kaggleコンペの実践的な攻略が魅力。
2018でも、以下のKaggleコンペが扱われました

- [Dogs vs\. Cats Redux: Kernels Edition \| Kaggle](https://www.kaggle.com/c/dogs-vs-cats-redux-kernels-edition)
- [Dog Breed Identification \| Kaggle](https://www.kaggle.com/c/dog-breed-identification)
- [Planet: Understanding the Amazon from Space \| Kaggle](https://www.kaggle.com/c/planet-understanding-the-amazon-from-space)
- [Rossmann Store Sales \| Kaggle](https://www.kaggle.com/c/rossmann-store-sales)

## 各Lessonの内容メモ
### Lesson1
受講したときから時間が経ってしまったので、忘れてしまいました。この記事とかが詳しい。

- [fastai Lesson1 – Okazawa Ryusuke – Medium](https://medium.com/@SEKAINOOKAZAWA/fastai-lesson1-69e78485e417)

### Lesson2
別記事にまとめました。

- [fast\.ai part1 lesson2 画像分類コンペでのゴールデンルール · Futurismo](https://futurismo.biz/2018/05/fastai_lesson2/)

### Lesson3
CNNの仕組み、ConvolutionのExcelによる解説。このあたりは、去年と同じなので飛ばしました。

半分の時間をつかって、Kaggleコンペの衛生写真からの多ラベル画像分類。

### Lesson4
Structured Deep Learnng. 
構造化データに対する DLのアプローチにを紹介。
なんでも、これをつかうと黒魔術的な特徴量設計をせずとも、いい精度がでるとか。

1時間弱、みっちり語られる。Kaggle の Rossmmanコンペがみっちり紹介される。

- [fast\.ai par1 lesson4 Tabularデータの攻略方法メモ · Futurismo](https://futurismo.biz/2018/05/fastai_p1_lesson3/)

残りの時間でRNNのイントロと、強調フィルタリンクイントロ。

### Lesson5
折り返し地点。今までは、faataiライブラリを中心に、高レベルから外観を俯瞰して全体像を眺めてきた。
ここからは、PyTorchをつかって、がっつりコーディングの解説が入る。

この回では、前半をつかって 強調フィルタリングの PyTorchによる実装が解説される。

また、後半は、Excelをつかった 最適化手法のデモ。

### Lesson6
強調フィルタリングの解説が続く。その後、Rossmannの解説。

後半は、がっつり RNN。PyTorchでスクラッチから実装してみてねとのこと。
今回は時間がしないので この課題はパス。

### Lesson7
前半は、RNN、とくに GRUの解説。これも code ベースでの説明。

後半は、CNNへ戻ってくる。PyTorchを使った、ResNetsのスクラッチ実装解説。題材は、CIFAR10.

最後に、Part2はもっと難しいので、Part1の内容を理解してから望んでねとのこと。はい、ムズいのは知ってます。
