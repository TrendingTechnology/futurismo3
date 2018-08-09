---
author: admin
categories:
- C++
date: 2013-10-25T04:06:33+00:00
dsq_thread_id:
- 3.7162732e+09
follow:
- follow
index:
- index
page_layout:
- def
pdrp_attributionLocation:
- end
pvc_views:
- 18513
side:
- def
sub:
- def
title: C++での動的配列(set,map)の使い方まとめ
type: post
url: /archives/=1901
---

C++での動的配列(set,map)の使い方についてまとめます。

### setの使い方

setとは、自動でソートされる動的配列を扱うためのSTLです。

数学でいうところの"集合"に対応するものですが、setは要素数が有限です。

#### 宣言

<pre>#include &lt;set&gt;
using namespace std;

set &lt;string&gt; s;
</pre>

#### 関数

##### 要素数を調べる

    s.size();
    

##### 要素を追加する

    s.insert("hoge");
    

同じ要素を追加しても、要素数は1つのまま。

    s.insert("hoge");
    s.insert("hoge");
    s.size(); // = 1
    

##### 要素を検索する

    s.find("探すもの")
    
    if( s.find( "hoge" ) == s.end() )
    {
        cout << "Not Found" << endl;
    }
    else
    {
        cout << "Find" << endl;
    }
    

##### 要素をすべてクリアする

    s.clear();
    

### よくある使い方

文字列Sのなかの文字の要素数を調べる。

    int getNumber(string S) {
    
    　 set <string> s;
      for(int i=0; i<S.size(); i++) {
        s.insert(S[i]);
      }
      return s.size();
    }
    

### pairの使い方

pairは2つの値をペアで扱うためのSTLです。

##### 宣言

    #include <utility>
    using namespace std;
    
    pair <string, int> p;
    

##### 参照

    p.first();  // 一つ目の要素
    p.second(); // ２つ目の要素
    

##### 要素を追加する

    p.first  = "hoge"
    p.second = 3
    
    pair<int, string>( "hoge", 3 );
    p = make_pair("hoge",3);
    

### mapの使い方

map とは、連想配列を扱うための STLです。

(キー, 値）のペアでデータが保持されます。「任意の型のキー」から「値」を引く辞書を作成できます。

setは(キー)のみを要素にしていますが、mapはpairを要素とします。

##### 宣言

    #include <map>
    using namespace std;
    
    map <string, int> m;
    

##### 参照

    m.first();  // キーへのアクセス
    m.second(); // 値へのアクセス
    

##### 要素を追加する

    s["hoge"] = 3;
    s.insert(pair<string, int>("hoge", 3));
    s.insert(make_pair("hoge", 3));
    

##### 要素を検索する

setと同じなので、省略。

##### 要素をクリアする

    m.clear();
    

### よくある使い方

mapの要素にアクセスするには、イテレータを利用するのが便利です。

    map<string, int>::iterater it;
    

また、要素の先頭アクセスするには、begin(),最後にアクセスするにはend()を利用します。

    m.begin();　// 先頭要素にアクセス
    m.end();　　　// 最後の要素にアクセス
    

文字列Sのなかの文字で一番数が多いものの最大値を求めます。

    int getNumber(string S) {
        map <string, int> m;
        for(int i=0; i < S.size(); i++) {
          m[S[i]]++;
        }
    
        int max = 0;
        map<string, int>::iterator it;
        for(it = m.begin(); it!=m.end(); it++ ) {
          if( max < it->second ) max = it->second;
        }
        return max;
    }