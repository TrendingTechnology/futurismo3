---
author: admin
categories:
- C++
date: 2013-11-10T00:34:45+00:00
dsq_thread_id:
- 3.7540739e+09
page_layout:
- col2
pdrp_attributionLocation:
- end
pvc_views:
- 2319
tags:
- Algorithms
- TopCoder
title: UnionFindアルゴリズムを実装してみた
type: post
url: /archives/=1992
---

UnionFindをC++で実装した。

UnionFindとは、２つの異なる集合がつながっているかを調べるアルゴリズム。詳しくは以下。

  * [素集合データ構造 &#8211; Wikipedia][1]

### Implement

以下のJavaでかかれた実装をC++版に書き直してみた。木構造にデータを保持する場合と、そう強いない場合の２つを実装。

  * [Case Study: Union-Find][2]

 [1]: https://ja.wikipedia.org/wiki/%E7%B4%A0%E9%9B%86%E5%90%88%E3%83%87%E3%83%BC%E3%82%BF%E6%A7%8B%E9%80%A0
 [2]: https://algs4.cs.princeton.edu/15uf/