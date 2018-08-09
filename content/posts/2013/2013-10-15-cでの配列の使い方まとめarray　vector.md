---
author: admin
categories:
- C++
- 技術メモ
date: 2013-10-15T14:42:53+00:00
dsq_thread_id:
- 3.7141437e+09
excerpt: C++での配列(array,vector)の使い方についてまとめます。
follow:
- follow
index:
- index
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 16169
side:
- def
sub:
- def
title: C++での配列の使い方まとめ(array,vector)
type: post
url: /archives/=1854
---

C++での配列(array,　vector)の使い方についてまとめます。

### 配列(array)

#### 宣言と初期化

    //宣言
    int a[50];
    
    // 0初期化
    int a[50] ={0};
    
    // memsetを利用
    memset(a, 0, size(a));
    
    // メモリ獲得で宣言
    int* a = new int[50];
    
    // newで0初期化までするには、()をつける
    int* a = new int[50]();

#### 代入

要素番号を指定して、代入。

    a[1] = 1;
    

#### サイズを調べる

    a.length();
    

### 動的配列（vector)

#### 宣言と初期化

vector は std という名前空間に含まれる。

    using namespace std;
    
    vector<int> a;      // int型で宣言
    vector<Class>   a;    // クラスで宣言
    
    // 領域獲得
    a.reserve( 100 ); 
    

#### 代入

    // 末尾に追加
    a.push_back( 1 );
    

#### 参照

    a[4];
    

#### サイズ獲得

size()を使う

    a.size()
    

空の場合は、emptyで調べる。

    if (a.empty())
    

### 削除

eraseを利用する。

    
      //先頭を削除
      a.erase(a.begin());
      // i番目を削除
      a.erase(a.begin()+i);
    

すべてを消すときは、clearで

    
    　　a.clear()
    

### イテレータ

    // 宣言
    vector<data>::iterator it;
    
    //　参照
    *it;        
    
    // サーチ
    for(it = data.begin(); it != data.end(); it++ ) {}
    </data>

### その他

#### 移動ベクトルを定義する

二次元配列が与えられてサーチが必要な場合、移動ベクトルを定義すると、処理か綺麗にかける。

  * 4方向 
        int dx[] = {1, 1, 1, 0};
        int dy[] = {-1, 0, 1, -1};
        

  * 8方向 
        int dx[] = {1, 1, 1, 0, 0, -1, -1, -1};
        int dy[] = {-1, 0, 1, -1, 1, -1, 0, 1};
        

#### 配列の領域外でないかチェック

    #define IS_IN2(x, n) ((x)>=0) && ((x)<n) )
    

#### 二次元配列の領域外でないかチェック

    #define IS_IN2(x, n, y, m) ( (x)>=0) && ((x)<n) && ((y)>=0) && ((y)<m) )
    

<div id="fastlookup_top" style="display: none;">
</div>