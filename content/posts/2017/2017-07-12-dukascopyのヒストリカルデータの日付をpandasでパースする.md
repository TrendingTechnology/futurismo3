---
author: admin
categories:
- Python
date: 2017-07-11T22:55:26+00:00
dsq_thread_id:
- 5.9818813e+09
excerpt: Dukascopyのヒストリカルデータの日付をpandasでパースする方法
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
- 384
side:
- "y"
tags:
- FX
- pandas
title: Dukascopyのヒストリカルデータの日付をpandasでパースする方法
title_view:
- "y"
type: post
url: /archives/=6623
---

FXのヒストリカルデータを取得するために、私はいつもDukascopyを利用している。

  * <https://www.dukascopy.com/swiss/english/marketwatch/historical/>

### おかしな日付 {#-}

ダウンロードしたデータをプロットしてみたら、おかしなことになった。

<pre><code class="lang-python">self.csv_data = pd.read_csv(self.csv_path, index_col=0, parse_dates=True, header=0)
</code></pre>

![][1]

dukascopyの日時のフォーマットは、_03.07.2017 00:00:00.000_ のようになっている。
  
なので、2017年7月3日をpandasは間違えて 2017年3月7日としてパースしてしまったようだ。

### 正しい日付にパース {#-}

こういう場合は、自前のパーサを作成して、_pandas.read_csv_ に date_parser optionの引数としてパーサを渡すことで解決する。

<pre><code class="lang-python">f = '%d.%m.%Y %H:%M:%S.%f'
my_parser = lambda date: pd.datetime.strptime(date, f)
self.csv_data = pd.read_csv(self.csv_path, index_col=0, parse_dates=True, header=0,
                           date_parser=my_parser)
</code></pre>

![][2]

 [1]: https://lh3.googleusercontent.com/-_xy4uVAX8kjS7XQQdM-_658Q_5cn-PUM0LWcjyk2IA8bIyvqJbDBUXNp-ruR6pa2YZtHbfuGxmZzLaqUZGUIAVfMR7PTlrAqBGG3TY2KG_FKPzXiq0L1RfnE1rdQq8e8w0BNohBNT10bpQqHVD2XPdM2a9lX2gajr8_ft9uXivnq4vBzfQb4RxV84cg2K-UWcMGlovWbBI3w1slmMC4TZKpFA4-6jHvucUcOMrw89WoVB5hgLUeoj0ry3ZeWGmrbCH0W-F-naxMCTwfZIAFSyMwXPqcYBGU0RKjUrHf1IaQNyfBXT1ipO_RUCL72XnAyqB8XdHyKqwBdxUHIdMsPk2G2br_L-INwiWLiQKSn4yDxbKvU98jeidu6K1SvxQte9CQrL6Dk3SU344l5Fz1V4zwJ8dAHS6GFmF16CvbdFX-jLu27r2OUiFPHwetEmtFrsHKCCRR0UYt8ipJiBEr0GkPIDLfHzXxYxKi5vXtbXMcDG5ZOVVbxjO3SAe2PxdXa7MdHtLyzFx9E8f7XsJ9X4ufzxLIRswjxNsBkE5xQnb9byk4uumwnyUtLE8ROUTo05K-oRDpJypNJeDK3ALIAs5r_MGqUy0mchX_qZIcI8qkvvCZ4RuQ58zo=w394-h272-no
 [2]: https://lh3.googleusercontent.com/XLT3NsA-Bf-jMCyDmLPM5JCI5ZQiOwhxvXA-4yhqbkRu_5oRogJ0VC1DNVM3ZTeVF17nl5iwDdVVOChw2D6j8FpZCgdSD_GMYPYNQGFApm0Ku6Od8OtaB1HyA7SMR1wPv_jFcM1duip7805mvZ-z-7haB9fKP_oKsQKHwzAU00ixmmtRjosQUt4rK1Mu0DjskjUMRpF8zHrG1uh5cZmykUzVmriWvkVSLAoxxw2GknNm20Rbzb5uahQx1v189DN4PHRIAMA-_wFYf_woO4-a8HIFUgTTwwO7dCRc7W7nX76jahL-yIeoGxP_IEYw6AB4CcGGiw7v43TUvvrpYnMqhYaGHuRkC4h-fAMWVcZblfEKef49qZT4ur0foRS_XzkOF32EzgPlug9Dz_PfPan5NI9Oi-b7vnmpdFg7hrtJUHlZkfDiR5fzOd8flaVLzgreqJa505_w7UrHuv_JaZjz_plF9KFH_I1gY8dQRNFNcY--yLXv3IHG8v5p03srVshToIBGK3kSf0ZAL1f09K3legswNkK0sHGKPYcC5akw-gvitFiHN55M3PszcYVEjiDteoHXUKDRzoKalEZmakd9L860_jvPAuCdqiQBMPLI4Ny3etckKpmnpazS=w394-h289-no