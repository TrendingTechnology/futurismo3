---
author: admin
categories:
- C言語
- TDD
- 技術メモ
date: 2012-09-10T11:53:32+00:00
dsq_thread_id:
- 3.7262326e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3531
tags:
- xUnit
title: GoogleMockのモックメゾッドにC言語の構造体ポインタを渡してみた
type: post
url: /archives/=358
---

今日は体調不良のため、定時退社というなの早退をして、
  
家に帰ってきた瞬間に治ったので、ブログを更新してみる。

今の開発だと、制御用のメモリを構造体ポインタの形でやり取りすることが多い。
  
構造体ポインタをGoogleMockの モックメゾッド（MOCK_METHODx)にわたすと、
  
コンパイルが通らない。悩んだ上げく、以下の方法でできた。

### Mockオブジェクトの中で、構造体をメンバごとに分解して、渡してやる

MOCK_METHODに渡すときには、構造体のメンバごとに引数に渡してやればいいだけ。
  
[C]
  
typedef struct hogehoge {
  
int x;
  
int y;
  
}HOGE;
  
[/C]
  
なので、構造体の場合は、

MOCK_METHOD0(hoge);

だとエラーするので、

MOCK_METHOD2(hoge->x, hoge->y);

と分解すればよい。
  
[前回エントリ][1]のサンブルソースを少し改造

sample.c
  
[C]
  
#include &#8220;sample.h&#8221;

int get_ret(void)
  
{
  
int num = 0;
  
int ret;
  
NUM dummy;

dummy.num = 2;
  
dummy.count = 3;

/*\*N 数をライブラリより取得 \*/
  
num = get_num(&dummy);

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
  
[/C]

numlib.h
  
[C]
  
typedef struct NUM
  
{
  
int num;
  
int count;
  
}NUM;

#ifdef __cplusplus
  
extern &#8220;C&#8221; {
  
#endif

extern int(\*get_num)(NUM \*num);
  
[/C]

gmock_test.cpp
  
[C]
  
extern &#8220;C&#8221;
  
{
  
#include &#8220;sample.h&#8221;
  
}

#include &#8220;gtest/gtest.h&#8221; /*\*N GoogleTest インクルード \*/
  
#include &#8220;gmock/gmock.h&#8221; /*\*N GoogleMock インクルード \*/

using ::testing::Return;
  
using ::testing::_;
  
using ::testing::Eq;

/*\*N モッククラス \*/
  
class MockNum
  
{
  
public:
  
MOCK\_METHOD2(get\_num2, int(int num, int count) );
  
} mock;

int Mockget_num(NUM *num)
  
{
  
return mock.get_num2(num->num, num->count);
  
}

/*\*N get_num 実体 \*/
  
int (\*get_num)(NUM \*num);

/*\*N テスト \*/
  
class MockNumTest : public ::testing::Test
  
{
  
int (\*savedget_num)(NUM \*num);

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
  
EXPECT\_CALL(mock, get\_num2(\_,\_) )
  
.WillOnce(Return(1));

EXPECT\_EQ(10, get\_ret() );
  
}

TEST_F(MockNumTest, return2)
  
{
  
EXPECT\_CALL(mock, get\_num2(2,3) ).WillOnce(Return(2));
  
EXPECT\_EQ(20, get\_ret() );
  
}

TEST_F(MockNumTest, return3)
  
{
  
EXPECT\_CALL(mock, get\_num2(Eq(2),Eq(3)) ).WillOnce(Return(3));
  
EXPECT\_EQ(30, get\_ret() );
  
}
  
[/C]

 [1]: https://futurismo.biz/archives/306 "GoogleMockをC言語で使う方法をハックしてみた"