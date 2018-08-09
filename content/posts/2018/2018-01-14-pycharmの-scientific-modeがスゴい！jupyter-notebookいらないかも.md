---
author: admin
categories:
- OSS
- Python
date: 2018-01-13T16:51:53+00:00
dsq_thread_id:
- 6.4113536e+09
excerpt: PyCharmの scientific modeがスゴい！Jupyter Notebookいらないかも
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
- 361
side:
- "y"
title: PyCharmの scientific modeがスゴい！Jupyter Notebookいらないかもよ
title_view:
- "y"
type: post
url: /archives/=6874
---

## はじめに {#はじめに}

Kaggleで、scriptを書く人と、Jupyter Notebookを書く人がいるのだけれども、どっちが生産性がいいのかなというのが、ふと自分のなかに疑問として湧き上がった。自分は、Jupyter Notebook派だ。しかし、別の方法も試してみるのも、気分転換になるかもとおもい、しばらくぶりにPyCharmを使おうとした。

すると、2017/11に出た最新版 2017.3 で Professional Editionに追加された機能、Scientifc modeがなんだかスゴそうだったので、今回紹介する。

## Scientific Mode {#scientific-mode}

まずは、公式サイトからの紹介を翻訳。

[https://www.youtube.com/embed/OHwh0c8UsW4?start=66]

  * [Scientific & Data Science Tools &#8211; Features | PyCharm][1]

### 特徴 {#特徴}

  * iPyrhon Notebook(Jupyter Notebook)がPyChamに結合。
  * IDEの恩恵を十分に受けて開発できる。自動補完、ナビゲーション、エラーチェックなど。
  * 対話的Python コンソールで REPL駆動開発ができる。
  * NumpyやPandasのデータ構造を見るViewerがある。
  * MatplotlibをインタラクティブにみるViewerがある。
  * Anaconda連携

### 有効方法 {#有効方法}

ツールバーの 表示 > Scientifc モードを選択。すると、

  * プロジェクトView
  * Python コンソール
  * ドキュメントView
  * SciView(これがデータビューとグラフビューを兼ね備えている)
  * 実行したオブジェクトリストView

が現れ、まるで **RStudio** みたいなView配置になる。RでデータサイエンスをするならRStudio一択だけれども、PyCharmはPythonにおけるデータサイエンスのためのIDEになりえるのではないか？

![][2]

## ここがスゴい {#ここがスゴい}

例えば、Jupyter Notebookユーザならば、セルごとに処理を実行することができることに魅力を感じるかもしれない。それはPyCharmでもできる。カーソルで選択して、選択範囲を実行すると、選択した部分がPythonコンソールに送られて実行できるのだ。

そうして評価した、numpyやpandasオブジェクトはクリックすると、SciVIewに現れるのだ。なので、いちいちJupyter Notebook上で、 head()関数でデータフレームの中身を確認する必要がない。

少しコードを修正したら、再度範囲を選択して、実行すると式が再評価される。

**That’s REPL駆動開発！！**

何より嬉しいのは、IDEの恩恵を存分に利用してPyhtonのコードがかけることだ。IDEに必要な条件としては、以下のようなものがある。 PyCharmはすべて兼ね備えている。

  * シンタックスハイライト/ インデント
  * 検索・置換
  * タグジャンプ
  * コード補間
  * エラーチェック
  * リファクタリング
  * インタープリタ・デバッカ
  * プロジェクト管理
  * ドキュメント参照

## 所感 {#所感}

ここがスゴイでも書いたけれども、コードを部分実行して、そのデータフレームがすぐに見れるViewがあるところがとても気に入った。

Jupyter Notebookを今までずっと使っていたけれども、Jupyter Notebookの代わりとなるかもしれない可能性を感じた。とはいえ、EDAをしたり、他人に見やすくコードを公開するには、まだまだJupyter Notebookが必要だろう。それ以外の部分は、PyCharmでいいんじゃないか？

## おわりに {#おわりに}

一番気になるのは、お値段。Professional Editionは有料で１年間 89ドル = 1万円くらい。

  * [PyCharm: JetBrains Toolbox subscription][3]

しかし、日本の代理店？から購入するとちょっと安くなる。

  * [PyCharm | サムライズム][4]
  * [PyCharm 価格 &#8211; Jetbrains 日本公式販売代理店 WillBrains][5]

まずは、試用を1ヶ月してみてから判断してみるのもよいのでは？

&nbsp;

## 追記

Community Editionでも、選択範囲のみを実行したり、numpyやpandasの中身を見ることができた。なんだ、Professional版いらないかも。

 [1]: https://www.jetbrains.com/pycharm/features/scientific_tools.html
 [2]: https://lh3.googleusercontent.com/5VGDlFx0tSxCkdvpYt6MxR1UoIA3gGuI35bsP9N9EcEYDBuwbNzGmJ5NkDBAmmCOHp6mwQKDdE2nXs4S1TCAkSnKM6LhYARkqRGOrX9IQpLpLBWQVlbYws26Uryt5cweaYWrXN2T5eo0UOyEaWwHNILB_H62S0YKSyWdgJq6P_Oj-YwtTh01A3QrbrarQe3ktomThiYNNB0adWXAj7kiy8opwb8MzEA6u5m9ASiOK_CfZ4L9VUPUY0F36ublchD0CV-h0AfYrWo9Yko39A3P11593s1WORO0T1uoM-2o6q77FYb7iXlFb4G4GOxD9YcoSrhfAuRr3oJc0OJmpQdkKdSH6oqvEl2ZGINh5i1uIfmkkIuSGyPCq-zUM3HTVfQq6peAJ5pKtgNBavkMu6g-_SWyZjw5TTQYOqm6CxoWaOeamUY3QCXO9mlL1JRGZCManDPR1ixDV1M9UzAoBGQ67Kgo-sq13NeKAx5YXQQ3pXGB3l5uwODDgjg2mMyyvOoQ0S55FWYv_j2WIsEVH_jWnoc5tfy_TRDFoUc9UzElvY2z8A5J93S87BX117PoEU9sniicZv1QzZs820SFPE_IgOQsOIXV0Rn5elh6sEc=w1107-h785-no
 [3]: https://www.jetbrains.com/pycharm/buy/#edition=personal
 [4]: https://samuraism.com/products/jetbrains/pycharm
 [5]: https://www.willbrains.jp/product/5