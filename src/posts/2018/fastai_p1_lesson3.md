---
title: "fast.ai par1 lesson4 Tabularデータの攻略方法メモ"
date: 2018-05-04T09:48:32+09:00
size: false
---

## はじめに
この記事では、Tabular(表形式）データに対しての攻略方法についてメモする。

詳しくは、以下の参考記事を参照。

- https://www.fast.ai/2018/04/29/categorical-embeddings/
- https://github.com/fastai/fastai/blob/master/courses/dl1/lesson3-rossman.ipynb

この記事では、オリジナルのデータに対してこの技をどうやって適用するか、
動画のなかでコメントされていたので、それを書く。

- https://youtu.be/gbceqO8PpBg?t=1h18m3s

## TabularデータにDeep Learningを適用するためのステップ
### step1
カテゴリカルデータと、数値データのカラムを並べる。

```python
cat_vars = ['Store', 'DayOfWeek', 'Year', 'Month', 'Day', 'StateHoliday', 'CompetitionMonthsOpen',
    'Promo2Weeks', 'StoreType', 'Assortment', 'PromoInterval', 'CompetitionOpenSinceYear', 'Promo2SinceYear',
    'State', 'Week', 'Events', 'Promo_fw', 'Promo_bw', 'StateHoliday_fw', 'StateHoliday_bw',
    'SchoolHoliday_fw', 'SchoolHoliday_bw']

contin_vars = ['CompetitionDistance', 'Max_TemperatureC', 'Mean_TemperatureC', 'Min_TemperatureC',
   'Max_Humidity', 'Mean_Humidity', 'Min_Humidity', 'Max_Wind_SpeedKm_h', 
   'Mean_Wind_SpeedKm_h', 'CloudCover', 'trend', 'trend_DE',
   'AfterStateHoliday', 'BeforeStateHoliday', 'Promo', 'SchoolHoliday']
```

### step2
どのindexがvalidation setなのかを設定する。

```python
train_ratiotrain_rat  = 0.75
train_size = int(samp_size * train_ratio); train_size
val_idx = list(range(train_size, len(df)))
```

### step3
DataFrameから、dataオブジェクトを作成。

```python
md = ColumnarModelData.from_data_frame(PATH, val_idx, df, yl.astype(np.float32), cat_flds=cat_vars, bs=128,
                                       test_df=df_test)
```

### step4
embeddingするサイズを求める。

```python
cat_sz = [(c, len(joined_samp[c].cat.categories)+1) for c in cat_vars]
emb_szs = [(c, min(50, (c+1)//2)) for _,c in cat_sz]
```

### step5
学習モデルの作成

```python
mm  =  md.get_learner(emb_szs, len(df.columns)-len(cat_vars),
	            0.04, 1, [1000,500], [0.001,0.01], y_range=y_range)
```

### step6
学習

```python
m.fit(lr, 5, metrics=[exp_rmspe], cycle_len=1)
```
