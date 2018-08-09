---
author: admin
categories:
- C++
date: 2013-10-25T04:14:06+00:00
dsq_thread_id:
- 3.7444083e+09
follow:
- follow
index:
- index
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 1805
side:
- def
sub:
- def
tags:
- TopCoder
title: TopCoder用テンプレート(C++)
type: post
url: /archives/=1905
---

### TopCoder用テンプレート

自分のテンプレートを公開。随時追加中。



### 補助関数

よくつかう補助関数をまとめます。補助関数を利用するには、　以下をインクルード。

    #include<algorithm>
    using namespace std;
    

#### 最大・最小

    int = 1, int j = 2;
    
    // 最大値
    rslt = max(i,j); // rslt = 2
    
    // 最小値
    rslt = min(i,j); // rslt = 1
    

#### スワップ

ポインタを指定する必要はありません。sortの実装の時などに。

    // 交換
    swap(i,j) // i=2,j=1