---
author: admin
categories:
- C++
- TDD
date: 2013-10-14T13:28:48+00:00
dsq_thread_id:
- 3.7516562e+09
excerpt: 『Modern C++ with TDD』学習メモ(Chapter2-5)
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
- 2074
side:
- "y"
tags:
- gmock
- gtest
title: 『Modern C++ with TDD』学習メモ(Chapter2-5)
title_view:
- "y"
type: post
url: /archives/=1847
---

<!--:ja-->Modern C++ Programming with Test-Driven Development: Code Better, Sleep


  
Better

体育の日の祝日なので、図書館とカフェにこもってベンキョしてました。そんな体育の日もオツだよね。というわけで、今日勉強した記録を淡々とメモします。

今日は、『Modern C++ Programming with Test-Driven Development』の前半を読みました。これからあんまし時間がとれなくなる気がするので、後半はお正月休みあたりか。

### 各章の概略

  * Chapter1・・・ツールの準備について。
  * Chapter2・・・TDDの実践方法をsampleとともに、解説される。ここでは、GoogleMockをつかうものの、中身としてはGoogleTestの使い方解説。TDDを知らない初心者向けに丁寧に書いてある。リファクタリングの方法なども、sampleとともに、体験できる。けっこう優しめで丁寧。
  * Chapter3・・・『レッド・グリーン・リファクタリング』にはじまるTDDの思想や原則、規律について書いてある。Webや書籍ですでにいろいろと言われていることをまとめているだけなので、とりわけ目新しいことはない。
  * Chapter4・・・GoogleMockの細かい使い方など。テスト。フィクスチャ、テストのフィルターやパラメタライズドテストの方法が解説される。HamcrestやASSERT_THATがmodernなのだ！と強調される。また、例外のテストや浮動小数点数のテストなど、細かいTipsとか。
  * Chapter5・・・テスト・ダブルの紹介。ここでついに、GoogleMockが登場。まずは、マニュアルでモックをつくらせて、そのあとにGoogleMockでモックをつくり『ほ～ら、コンナに簡単にできちゃうんだぞ～』とさとされる。cURL、JSONCPPなどのサードパーティをつかって、それらとの依存関係を取り除く方法が紹介される。

### Study Memo

以下、新しく知ったことを忘れないためのStudy Memo。なので、自分が知っていることは省略。

#### ASSERT_EQと ASSERT_THAT

いままで、テスト結果の検証には『ASSERT_EQ』しか利用してこなかったけれども、この本では 『ASSERT_THAT』を利用している。理由は、テストコードの可読性が高まるから。

比較してみる。 『1+1=2』( (1+1) equals to 2 )。

    ASSERT_EQ( 2, (1+1) );
    

これを、ASSERT_THATで書きなおすと以下のようになる。

    ASSERT_THAT( (1+1), Eq(2) );
    

なるほど、英語の文の並びと同じになる。 Assert that 1+1 equals to 2.

ASSERT_EQからASSERT_THATを利用しているところが、まずモダン。

#### Test Fixtureでのクラス生成はポインタで

クラスをフィクスチャ間で共有するには、どうすればいいか、いままでワカラなかった。こうすればよい。

    #include "gmock/gmock.h"
    #include "RetweetCollection.h"
    #include "Tweet.h"
    
    #include 
    
    using namespace ::testing;
    using namespace std
    
    class ARetweetCollectionWithOneTweet: public Test {
    public:
       RetweetCollection collection;
       shared_ptr tweet;
    
       void SetUp() override {
          tweet = shared_ptr(new Tweet("msg", "@user"));
          collection.add(*tweet);
       }
    };
    
    TEST_F(ARetweetCollectionWithOneTweet, IgnoresDuplicateTweetAdded) {
       Tweet duplicate(*tweet);
       collection.add(duplicate);
    
       ASSERT_THAT(collection.size(), Eq(1u));
    }
    

Classの宣言に、shared_ptrを利用して、SetUp()でメモリを動的に獲得する。

#### Hamcrest Assertion

従来のAssertion(expect_eqとか）では、一つの宣言で一つのことしか検証できなかった。
  
しかし、モダンなHamcrest Assertionだと、Matcherを利用し、一つの宣言で複数のことを検証できる。

    ASSERT_THAT(actual,
        AllOf(StartsWith("al"), EndsWith("ha"), Ne("aloha")));
    

GoogleMockはC++でHamcrestが利用できるxUnitなので、こういう方法も紹介されている。

#### Parameterized Test

複数のテストケースをまとめて実行できるというもの。TDDというよりは、スプレッドシートにかかれた仕様を検証するようなときに必要そうなテストの書き方。

    #include "gmock/gmock.h"
    using namespace ::testing;
    
    struct Sumcase {
      int a, b, expected;
      Sumcase(int anA, int aB, int anExpected)
        : a(anA), b(aB), expected(anExpected) {}
    };
    
    class AnAdder: public TestWithParam {
    };
    
    class Adder {
    public:
      static int sum(int a, int b) {
        return a + b;
      }
    };
    
    TEST(AnAdder, GenerateASumFromTwoNumbers) {
      ASSERT_THAT(Adder::sum(1, 1), Eq(2));
    }
    
    TEST_P(AnAdder, GenerateLotsOfSumsFromTwoNumbers) {
      Sumcase input = GetParam();
      ASSERT_THAT(Adder::sum(input.a, input.b), Eq(input.expected));
    }
    
    Sumcase sums[] = {
      Sumcase(1,1,2),
      Sumcase(1,2,3),
      Sumcase(2,2,4)
    };
    
    INSTANTIATE_TEST_CASE_P(BulkTest, AnAdder, ValuesIn(sums));
    
    

#### Test Double、Mock、Stub、Spy、Fake

これは、この本の本題ではないけれども、メモしとく。

  * Test Double・・・テストのために本番用コードと置き換わり、本番用コードをエミュレートするもの
  * Stub・・・ハードコーディングされた値を返すTest Double
  * Spy・・・テストの後の検証のために、オブジェクトに送られた情報をキャッチするTest Double
  * Mock・・・自分で検証機能をもつTest Double
  * Fake・・・本番用クラスを簡易版実装したTestDouble

<iframe style="width: 120px; height: 240px;" src="https://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=sleephacker-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=1937785483" height="240" width="320" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>

<div id="fastlookup_top" style="display: none;">
</div>

<!--:-->