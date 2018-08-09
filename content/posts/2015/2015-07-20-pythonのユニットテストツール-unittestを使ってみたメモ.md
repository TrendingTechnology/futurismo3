---
author: admin
categories:
- Python
- 技術メモ
date: 2015-07-19T23:58:00+00:00
dsq_thread_id:
- 3.9508242e+09
pvc_views:
- 3995
title: Pythonのユニットテストツール unittestを使ってみたメモ
type: post
url: /archives/=4395
---

Pythonのユニットテストツールである unittestをいじって見たのでご紹介.

最も簡単な例
============

以下に、シンプルなテスト実行手順を書く.

-   unittestライブラリをインポート
-   unittest.TestCaseを継承したクラスを作成
-   test\_のプレフィクスをもつメソッドを作成
-   self.assertEqualでテストアサーションを宣言
-   末尾に unittest.main()を書く

コード: test\_hello.py
----------------------

``` {.python}
import unittest

class TestHelloUnitTest(unittest.TestCase):

    def test_add(self):
        actual = 1 + 1
        expected = 2
        self.assertEqual(expected, actual)

if __name__ == '__main__':
    unittest.main()
```

実行結果
--------

``` {.text}
$ python test_hello.py
.
----------------------------------------------------------------------
Ran 1 test in 0.000s

OK
```

詳しい説明
==========

アサーション
------------

アサーション関数は以下が用意されている.
どれもassertXXXXという形をしているが、Equalさえしっていれば大抵はOK.

-   assertEqual(a, b)
-   assertNotEqual(a, b)
-   assertTrue(x)
-   assertFalse(x)
-   assertIs(a, b)
-   assertIsNot(a, b)
-   assertIsNone(x)
-   assertIsNotNone(x)
-   assertIn(a, b)
-   assertNotIn(a, b)
-   assertIsInstance(a, b)
-   assertNotIsInstance(a, b)

前処理と後処理
--------------

各テストの前処理でしたいことがあるときは、setUpメソッドに処理を書く.

各テストの後処理でしたいことがあるときは、tearDownメソッドに処理を書く.

``` {.python}
class TestHelloUnitTest(unittest.TestCase):
   def setUp(self):
        pass

   def tearDown(self):
        pass
```

テストケース、メソッド指定でのテスト
------------------------------------

テストケース（クラス）を指定して、実行したいときは、以下ののようにして書く.

``` {.text}
$ python -m unittest スクリプト名.テストケース名
```

メソッドを指定したいときは、以下.

``` {.text}
$ python -m unittest スクリプト名.テストケース名.メソッド名
```

Emacsならメソッド指定でテストできるよ！
---------------------------------------

Emacs を利用すれば、メソッド単位で簡単テスト実行可能.

-   <https://github.com/emacs-pe/python-test.el>

実行したいテストケースの上で M-x python-test-function .

<p style="font-size:32px">以上、Happy Hacking!!</p>


