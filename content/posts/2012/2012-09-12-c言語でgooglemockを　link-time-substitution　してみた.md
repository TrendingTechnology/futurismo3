---
author: admin
categories:
- C++
- C言語
- TDD
- 技術メモ
date: 2012-09-11T22:32:44+00:00
dsq_thread_id:
- 3.7189018e+09
pdrp_attributionLocation:
- end
pvc_views:
- 3684
title: C言語でGoogleMockをLink-Time Substitutionしてみた
type: post
url: /archives/=369
---

前回の続き。

  * [GoogleTestをC言語で使う方法をハックしてみた][1]
  * [GoogleMockをC言語で使う方法をハックしてみた][2]
  * [GoogleMockのモックメゾッドに構造体ポインタを渡してみた][3]

前回までが、関数ポインタを使った置換でGoogleMockを使っていたが、 別の方法で。
  
Makefileを書き換えて、リンク時に置換してしまう。(リンク時置換 link-time Substitution)

### Link-time-Substitutionとは

C言語でテストをするときに、関数をダミー関数と置き換えたいことがある。

関数がテストしたいファイルと同じ場所にある場合は、
  
関数ポインタをつかって置換することができる。

しかし、関数がテストしたいファイルと別の場所にあるときは、
  
ファイルごと置換してしまうことができる。

ダミー関数はもともと置き換えたい関数と同関数名として、
  
テストしたいファイルとは別のファイルに定義しておく。
  
コンパイルをかけるときに、Makefileを置き換えたい関数が定義してあるファイルをコンパイル対象から外してしまい、その代わりに、ダミー関数が定義してあるファイルを追加する。

こうすることによって、プロダクトコードに手を加えずに、
  
コンパイル時に関数をダミー関数を置き換えることができる。
  
これを、Link-time-Substitutionという。

### Link-Time SubstitutionでGoogleMockをプロダクトコードにねじ込む

というわけで、このテクニックを使って、
  
ブロダクトコードにモックを強引にねじ込んでテストした。

sample.c(プロダクトコード）
  
[c]
  
#include &#8220;sample.h&#8221;

int get_ret(void)
  
{
  
int num = 0;
  
int ret;
  
NUM dummy;
  
RET dummy2;

dummy.num = 2;
  
dummy.count = 3;

/*\*N 数をライブラリより取得 \*/
  
num = get_num(&dummy, &dummy2);

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

sample.h
  
[c]
  
#ifndef SAMPLE\_H\_
  
#define SAMPLE\_H\_

#include &#8220;numlib.h&#8221;

int get_ret(void);

#endif /\* SAMPLE\_H\_ \*/
  
[/c]

numlib.c(置き換えたい関数）
  
[c]
  
int get_num()
  
{
  
return rand();
  
}
  
[/c]

numlib.h(置き換えたい関数のヘッダファイル）
  
[c]
  
typedef struct NUM
  
{
  
int num;
  
int count;
  
}NUM;

typedef struct RET
  
{
  
int ret;
  
int count;
  
}RET;

int get_num(NUM \*num, RET \*ret);
  
[/c]

gmock_test.cpp(テストコード)

[c]
  
extern &#8220;C&#8221;
  
{
  
#include &#8220;sample.h&#8221;
  
int get_num(NUM \*num, RET \*ret);
  
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

/*\*N テスト \*/
  
class MockNumTest : public ::testing::Test
  
{
  
public:

virtual void SetUp()
  
{
  
}

virtual void TearDown()
  
{
  
}
  
};

int get_num(NUM \*num, RET \*ret)
  
{
  
return mock.get_num2(num->num, num->count);
  
}

TEST_F(MockNumTest, return1)
  
{
  
EXPECT\_CALL(mock, get\_num2(\_,\_) ).WillOnce(Return(1));
  
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
  
[/c]

&nbsp;

C言語からC++での関数が使えるように、C++のコードではextern “C”をつかう。

> extern &#8220;C&#8221;
  
> {
  
> #include &#8220;sample.h&#8221;
  
> int get_num(NUM \*num, RET \*ret);
  
> }

たいていの場合、Mockで置き換えたい関数は、他人のコードなので、
  
ファイルが独立していることが多い。
  
関数ポインタを使う方法よりも、こっちのほうがよくつかったりする。

<div id="fastlookup_top" style="display: none;">
</div>

 [1]: https://futurismo.biz/archives/316 "GoogleTestをC言語で使う方法をハックしてみた"
 [2]: https://futurismo.biz/archives/306 "“GoogleMockをC言語で使う方法をハックしてみた” を編集する"
 [3]: https://futurismo.biz/archives/358 "GoogleMockのモックメゾッドに構造体ポインタを渡してみた"