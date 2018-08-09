---
title: "fast.ai part1 lesson2 画像分類コンペでのゴールデンルール"
date: 2018-05-03T14:45:27+09:00
size: false
---

## はじめに
fast.aiの Lesson2の動画をみているのだけれども、これがいい。

- https://www.youtube.com/watch?v=JNxcznsrRb8

次から次へと新しい手法が紹介され、
それらはすべてfast.aiライブラリに実装されているとのこと。

そして、画像分類コンペのゴールデンルールが示される。

1. Enable data augmentation, and precompute=True
1. Use lr_find() to find highest learning rate where loss is still clearly improving
1. Train last layer from precomputed activations for 1-2 epochs
1. Train last layer with data augmentation (i.e. precompute=False) for 2-3 epochs with cycle_len=1 Unfreeze all layers
1. Set earlier layers to 3x-10x lower learning rate than next higher layer
1. Use lr_find() again
1. Train full network with cycle_mult=2 until over-fitting

参考: 

- https://forums.fast.ai/t/deeplearning-lecnotes2/7515

あまり理解していないので間違っていることを書くかもしれなけれども、
講座で紹介されたテクニックのメモ。

## ゴールデンルールで使われているテクニック
### 学習率(learning rate)のサーチ
learning rate, 学習率を決定するための Practicalな方法。
学習率は、感覚で最適な値を探すことが多いが、もっと系統立てて探そうよという取り組み。

この論文が元になっている。

- [\[1506\.01186\] Cyclical Learning Rates for Training Neural Networks](https://arxiv.org/abs/1506.01186)

Learning Rate Schedulerという機能によって、はじめは小さい値からはじめて次第に大きくしていく。
このとき、Lossの変化をplotしていくことで、変化の極小値の値を採用する。

fast.aiライブラリでは、lr_findというメソッドに実装されている。

### cyclic LR schedule
Cyclic LR scheduleは、学習率をcosine曲線にそって変更することで鞍点を抜け出す。

### differential learning rate
fine-tuneするときの学習率を、
はじめのレイヤは小さく、おわりのレイヤは大きく設定することで、学習を最適化する。

### cyclic_melt
Cyclic LR scheduleの学習率の変化を、epochが増えるに従って緩やかにしていく。
Cyclicの周期を1epock, 2epock, 4epockと変えていく。

### Test Time Augmentation (TTA)
Data Augmentationを　推論フェーズでも使おうということ。
これによって、validationセットに対して Data Augumentaitionを適用して 予測をし、
たとえば一つの画像を4つに増やしたとき、精度はその平均をとることになる。

## まとめ
まとめると、以下の手法が紹介された。

- LR find
- Cyclic LR
- differential LR
- Test Time Augmentation

ゴールデンルールにしたがえばworld-classな精度が簡単にでるよとのこと。

fast.ai Part1 lesson2では、以下のKaggleコンペが例題として登場し、解説される。

- [Dogs vs\. Cats Redux: Kernels Edition \| Kaggle](https://www.kaggle.com/c/dogs-vs-cats-redux-kernels-edition)
- [Dog Breed Identification \| Kaggle](https://www.kaggle.com/c/dog-breed-identification)
- [Planet: Understanding the Amazon from Space \| Kaggle](https://www.kaggle.com/c/planet-understanding-the-amazon-from-space)

手頃なKaggle画像コンペに参加して、腕試しをしてみたい。

