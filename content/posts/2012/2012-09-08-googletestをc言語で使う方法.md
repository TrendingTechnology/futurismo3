---
author: admin
categories:
- C++
- C言語
- TDD
- ハッキング
date: 2012-09-08T10:00:07+00:00
dsq_thread_id:
- 3.6960993e+09
pdrp_attributionLocation:
- end
pvc_views:
- 8285
title: GoogleTestをC言語で使う方法をハックしてみた
type: post
url: /archives/=316
---

### 頭文字だけでスゴイ！GoogleTestの特徴

GoogleTestとは、C++用の単体テスト用のツール。
  
このツールの優れているところは、

  * 日本語ドキュメントが充実しているところ
  * テストスイートをかかなくても、自動でテストスイートを作成してるれるところ
  * GUI 表示をするツールがある（Guiter)ので、楽しい。
  
    (<span style="font-family: Verdana;"><a href="https://code.google.com/p/gtest-gbar/">https://code.google.com/p/gtest-gbar/</a></span>)

[<img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image_thumb6.png" alt="image" width="433" height="227" border="0" />][1]

なにより、

<p class="caution6">
  頭文字が “ Google”
</p>

なので、理由もなく愛用中。

ダウンロードはココから:<https://code.google.com/p/googletest/>
  
C++でのつかいかたはここから:[Google Test ドキュメント日本語訳][2]

### GoogleTestはC言語でも使えます

C++用のツールなのだが、実はC言語でも使う裏ワザがあるのだ。

ポイントは、はテスト関数を.cppでつくり、
  
テストしたいC言語用のヘッダファイルをextern&#8221;C&#8221;{}で囲むこと。
  
実は、これだけで使えるようになる。

[c]
  
#include &#8220;gtest/gtest.h&#8221;

extern &#8220;C&#8221;
  
{
  
#include &#8220;sample.h&#8221;
  
}

TEST(AddTest, Test1)
  
{
  
ASSERT_EQ(2, add(2, 1));
  
}
  
[/c]

&nbsp;

これであなたも C言語で「レッド」→ 「グリーン」→ 「リファクタリング」(゜ ▽ ゜)/

GoogleTestがC言語で使えるようになったら、
  
つぎは兄弟ツールのGoogleMockをC言語で使ってみよう。

G[oogleMockをC言語で使う方法をハックしてみた][3]

 [1]: https://hmi-me.ciao.jp/wordpress/wp-content/uploads/image6.png
 [2]: https://opencv.jp/googletestdocs/
 [3]: https://futurismo.biz/archives/306 "GoogleMockをC言語で使う方法をハックしてみた"