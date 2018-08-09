---
author: admin
categories:
- MOOC
- 機械学習
date: 2018-01-02T05:31:22+00:00
dsq_thread_id:
- 6.385819e+09
excerpt: ' KaggleのためのMOOCがcourseraに！How to win a Data Science Competitionを受けた'
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
- 241
side:
- "y"
tags:
- coursera
- Kaggle
title: KaggleのためのMOOCがcourseraに！How to win a Data Science Competitionを受けた
title_view:
- "y"
type: post
url: /archives/=6854
---

kaggleの攻略法について、以前調査した。あまり、学習教材がなかった。

  * [Kaggleをはじめたので対策や攻略法についてのブックマーク | Futurismo][1]

Kaggleを初心者が進めるには、とにかくコンペに参加してKernelを読むしかないのかなと思っていた。そんな自分に朗報！この courseraが提供するものこそ、自分が求めていたものだ。

その名も・・・

How to Win a Data Science Competition: Learn from Top Kaggler

  * <https://www.coursera.org/learn/competitive-data-science>

## 特徴 {#-}

### ロシアのカグルマスターが講師 {#-}

この講座では、Yandexというロシアのgoogleが講座をサポートしている。そのため、ロシア切ってのデータサイエンティストから学ぶことができるのだ。

また、catboostなどの、ロシア魂がこもったライブラリを紹介される。これはかのxgboostよりも強力だった。

### 難易度高い&#8230; {#-}

正直、難しいです。quiz, assignment, 解けなかった。

この講座は機械学習の手法を教える講座ではない。それらはすでに身についているものとして、コンペで使える技や知識を教えてくれる。

### kaggle コンペで腕試し {#kaggle-}

習ったことは即試してみようということで、練習用のkaggleコンペが用意されている。

  * <https://www.kaggle.com/c/competitive-data-science-final-project>

ロシアのIT企業の売上予測を行う。時系列データコンペ。

## 各週の内容 {#-}

### week1: {#week1-}

recap&introduction ということで、データ分析コンペについて紹介される。

基本的な手法はもう知っているよねということで、MLの手法はサラッと紹介されて終わる。

そのあと、前処理についての紹介。これはよくまとまっている。数値変数、カテゴリ変数、時間の扱いと位置の扱い、欠損値の扱い。これは大事なので、なんども復習したいところだ。

assignmentはpandasについての演習。groupbyを多用する必要があり、初心者サヨウナラ感がとてもする。

### week2: {#week2-}

EDAについての解説。これも一通りの手法は紹介される。とはいえ、すべてを網羅できるわけではなく、自分で習ったことを実践してみないとこれは身につかない気がした。

次に Validationということで、データ分割の戦略について紹介される。データ分割がなぜ必要か（過学習を避けるため）、その手法と注意点について。

最後に、Data Leakageが扱われる。具体的な事例を元に、DataLeakageにどうやって気づくかなどが紹介される、が、
  
ここはよくわからなかったな。。。Assignmentも Data Leakageについてなのだが。

### week3: {#week3-}

Metrix(評価指標)について学ぶ。回帰、分類それぞれでよく使われる指標を学ぶ。MetrixとLoss functionの違いについて説明。ココらへん、理解していなかったので参考になる。

続いて、mean encodingという手法について紹介される。カテゴリカル変数を変換するための方法で、label/one-hot-encodingよりも、強力だとか。そして、その実装がassignmentとして課される。

### week4: {#week4-}

ハイパーパラメータのチューニングについて、まず紹介される。ランダムフォレストやxgboost, ニューラルネットワークのパラメータチューニングについての実践的なアドバイス。また、自動チューニングツールの紹介(hyperoptなど)

次に、特徴量エンジニアリングの小ネタ第二弾。

  * Matrix Factorization
  * Feature Interaction
  * t-SME

最後に、一番むずかしい話題、アンサンブル学習が紹介される。weight average, bagging, stacking, boosting, stacknet&#8230;ムズい。assignmentはstackingの実装。

### week5: {#week5-}

過去のコンペティションで講師の人が上位入賞をどうやってしたか、カグルマスターがその手法の種明かしをしてくれる。

ただ、これらの動画はおまけのようなもので、最後の週の本題は、用意されたKaggleコンペで上位スコアを取ること。

Assignmentがスコアのcsvデータの提出。一定以上のスコアを超えていないと、クリアとみなされない。そしてこの水準がとても高い。MSE1.0より低くないと、どうやら合格できないよう。LBを見ると、そんな人は30人くらいしかいない。

  * <https://www.kaggle.com/c/competitive-data-science-final-project/leaderboard>

それに加えて、ペアレビューがある。以下のフォーマットに従って、自分がどうやってコンペに望んだかを説明するレポートを作成して、コードと一緒に提出する。

  * [Winning Model Documentation Template | Kaggle][2]

提出がすむと、他の人のコードをレビューできるようになる。

## おわりに {#-}

この記事を執筆している時点では、私はコースを完了していない。
  
QuizもAssignmentも終わらなかった。

ただ、とてもこのコースはとても充実していた。かけた時間は現在95時間。kaggleのための実践的なテクニックが豊富に紹介されていて、吸収することがたくさんある。mean encodingや stackingなど、ネットにはほんとど情報がないが重要な手法も紹介されている
  
（assignmentにもなっている)

さらに、その知識を実践するする機会もコンペという形で与えられている。MOOCをいろいろと受けてきたけれども、そのなかでもかなり楽しい講座だった。それは、自分が今興味があることがデータサイエンスであり、ちょうど知りたい内容だったからだ。

この講座の内容をよくよく復習し、今後もKaggleに取り組んでいこう。[Kaggle用のマシン][3]も購入したことだし、まずはそれでグリッドサーチやアンサンブルを試してスコアを上げる。

 [1]: https://futurismo.biz/archives/6744
 [2]: https://www.kaggle.com/wiki/WinningModelDocumentationTemplate
 [3]: https://futurismo.biz/archives/6850