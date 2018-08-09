---
author: admin
categories:
- C++
- C言語
- TDD
- ハッキング
date: 2012-09-08T10:10:26+00:00
dsq_thread_id:
- 3.7283927e+09
pdrp_attributionLocation:
- end
pvc_views:
- 7902
tags:
- gmock
title: GoogleMockをC言語で使う方法をハックしてみた
type: post
url: /archives/=306
---

今、仕事ではテスト工程なので、
  
C言語で書いたソースにたいしてGoogleTestを使ってウラウラとテストを書きまくっている。

このロジックに対してはどうやってテストを書けばいいかを考えるのが楽しい。
  
モック関数を書きまくっている結果微妙な工程遅延を起こし、
  
マニュアルテスト組から、したり顔をされていたりする。;(´o｀

GoogleTestには兄貴分のGoogleMockがいるのだが、
  
こいつがC言語で使えないかどうか、調べてみた。

### GoogleMockとは

GoogleMockとは、C++用のモックオブジェクト作成ツール。
  
モックオブジェクトを使うことによって、
  
関数からの戻り値を自分でかってに書き換えたり，
  
テストしたい関数に渡された引数の値をしらべることができる。

普通ならば、テスト用の関数を自作して、調べなければいけないが、
  
これをGoogleMockを使うことによって、自作する関数を少なくできる。

ダウンロードはココから:[GoogleMock][1]
  
C++でのつかいかたはここから:[Google Mock ドキュメント日本語訳][2]

### テスト対象コード

数を取得するライブラリを呼び出して、その結果から分岐するコードをテストする。

sample.c

[c]
  
#include &#8220;sample.h&#8221;

int get_ret(void)
  
{
  
int num = 0;
  
int ret;

/*\*N 数をライブラリより取得 \*/
  
num = get_num();

/*\*N 結果によって分岐 \*/
  
if( num == 1 ) {
  
ret = 10;
  
}
  
else if( num == 2 ){
  
ret = 20;
  
}
  
else {
  
ret = 30;
  
}

return ret;
  
}
  
[/c]

numlib.c
  
[c]
  
#include &#8220;numlib.h&#8221;
  
#include <stdlib.h>

int get_num()
  
{
  
return rand();
  
}
  
[/c]

get_num()の戻り値をテストを実行するたびに変更できれ便利だなー。
  
そんなことが、GoogleMockを使えばできてしまう。

### GoogleMock導入結果

まずは、導入結果から。sample.cには手を入れない。

numlib.c
  
[c]
  
#include &#8220;numlib.h&#8221;
  
#include <stdlib.h>

int get_numImpl()
  
{
  
return rand();
  
}

int (*get\_num)(void) = get\_numImpl;
  
[/c]

numlib.h
  
[c]
  
#ifndef NUMLIB\_H\_
  
#define NUMLIB\_H\_

#ifdef __cplusplus
  
extern &#8220;C&#8221; {
  
#endif

extern int (*get_num)(void);

#ifdef __cplusplus
  
}
  
#endif

#endif /\* NUMLIB\_H\_ \*/
  
[/c]

gmock_test.cpp
  
[cpp]
  
extern &#8220;C&#8221;
  
{
  
#include &#8220;sample.h&#8221;
  
}

#include &#8220;gtest/gtest.h&#8221; /*\*N GoogleTest インクルード \*/
  
#include &#8220;gmock/gmock.h&#8221; /*\*N GoogleMock インクルード \*/

using ::testing::Return;

/*\*N モッククラス \*/
  
class MockNum
  
{
  
public:
  
MOCK\_METHOD0(get\_num, int() );
  
} mock;

int Mockget_num(void)
  
{
  
return mock.get_num();
  
}

/*\*N get_num 実体 \*/
  
int (*get_num)(void);

/*\*N テスト \*/
  
class MockNumTest : public ::testing::Test
  
{
  
int (*savedget_num)();

virtual void SetUp()
  
{
  
savedget\_num = get\_num;
  
get\_num = Mockget\_num;
  
}

virtual void TearDown()
  
{
  
get\_num = savedget\_num;
  
}

};

TEST_F(MockNumTest, return1)
  
{
  
EXPECT\_CALL(mock, get\_num() ).WillOnce(Return(1));
  
EXPECT\_EQ(10, get\_ret() );
  
}

TEST_F(MockNumTest, return2)
  
{
  
EXPECT\_CALL(mock, get\_num() ).WillOnce(Return(2));
  
EXPECT\_EQ(20, get\_ret() );
  
}

TEST_F(MockNumTest, return3)
  
{
  
EXPECT\_CALL(mock, get\_num() ).WillOnce(Return(3));
  
EXPECT\_EQ(30, get\_ret() );
  
}
  
[/cpp]
  
テストコードではget_numからの戻り値がそれぞれ1,2,3が帰ってきた場合の、
  
処理分岐をテストしている。

### GoogleMock導入のポイント

GoogleMcokをC言語で導入するためのポイントは2つ。

#### extern “C” で CとC++のソースをつなぐ

numlib.hは、C言語（sample.c）とC++（gmock_test.cpp）の
  
異なる言語のファイルからインクルードされるため、
  
インクルードのためのおまじないをかく。

[c]
  
#ifdef __cplusplus
  
extern &#8220;C&#8221; {
  
#endif
  
extern int (*get_num)(void);
  
#ifdef __cplusplus
  
}
  
#endif
  
[/c]

__cplusplusマクロは、C++で開発しているときにだけ定義される。
  
Ｃ++でコンパイルをかけるときだけ、C++で定義されたget_numをC言語でも
  
コンパイルできる extern “C” が適応される。

#### 関数ポインタでget_numをモック関数に置き換える

関数ポインタをつかうことで、プロダクトコードには手を加えなくても、
  
実際のインタフェースをモックオブジェクトのインタフェースを置換することができる。
  
テストを実行する際に、一時的に関数ポインタをテスト用の関数で上書きする。

[cpp]
  
class MockNumTest : public ::testing::Test
  
{
  
int (*savedget_num)();

virtual void SetUp()
  
{
  
savedget\_num = get\_num;
  
get\_num = Mockget\_num;
  
}

virtual void TearDown()
  
{
  
get\_num = savedget\_num;
  
}

};
  
[/cpp]

また、プロダクトコード、テストコードの両方でget_numをインクルードしたいため、
  
ヘッダファイルでextern宣言している。

### 最後に

実は、GoogleMockをGoogleTestで使う方法は１年以上前から調べていたのだが、
  
ようやくわかったので、記事にしてみた。参考にしたのは以下のQ＆A。

[<span style="color: #0066cc;">https://groups.google.com/forum/?fromgroups=#!searchin/googlemock/C$20language/googlemock/CVdeuQ0e6OI/HOYyoNA7uIAJ</span>][3]

これで毎日が定時退社だ！!(^ ○ ^)!/

### 追記

Cygwin環境で、g++-4.exeを使ってコンパイルすると、コンパイルは通るが、
  
g++-3.exeだと、コンパイルエラーする。

3.xと4.xでなにが異なるのかわからないけれど、
  
とりあえずコンパイル通らなかったら、g++-3.exeをg++.exeに置換する必要あり。

&nbsp;

 [1]: https://code.google.com/p/googlemock/
 [2]: https://opencv.jp/googlemockdocs/index.html
 [3]: https://groups.google.com/forum/?fromgroups=#!searchin/googlemock/C$20language/googlemock/CVdeuQ0e6OI/HOYyoNA7uIAJ