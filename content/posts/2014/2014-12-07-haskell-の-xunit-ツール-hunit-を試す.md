---
author: admin
categories:
- Haskell
- TDD
- 技術メモ
date: 2014-12-07T12:45:00+00:00
dsq_thread_id:
- 3.745987e+09
excerpt: Haskell の xUnit ツール HUnit を試す
pvc_views:
- 1382
title: Haskell の xUnit ツール HUnit を試す
type: post
url: /archives/=2792
---

はじめに
========

Haskell でテストコードを書くツールをしらべてみた.

メジャーなものは以下

-   doctest
-   QuickCheck
-   HSpec
-   HUnit

各ツールの特徴
==============

doctest
-------

コメントにテストを書くスタイルのツール.

Python の doctest を haskell に移植したものだとか.

-   <https://github.com/sol/doctest>

QuickCheck
----------

ランダムなテストデータによって関数の性質をテストする.

-   [QuickCheck: Automatic testing of Haskell programs |
    Hackage](https://hackage.haskell.org/package/QuickCheck)

xUnit とは異なるコンセプトをもつ.

HSpec
-----

xSpec ライクなテストツール.

-   [hspec: A Testing Framework for Haskell |
    Hackage](https://hackage.haskell.org/package/hspec)

Ruby の RSpec にインスパイヤされたらしい.

-   [Hspec: A Testing Framework for Haskell](https://hspec.github.io/)

記法が BDD 的.

HUnit
-----

xUnit ライクなテストツール. JUnit ライク.

-   [HUnit: A unit testing framework for Haskell |
    Hackage](https://hackage.haskell.org/package/HUnit)
-   [Haskell - HUnit 超入門 -
    Qiita](https://qiita.com/7shi/items/9fb326a87de6c3083784)
-   [Haskell の UnitTest, HUnit について学ぶ -
    エンジニアのソフトウェア的愛情](https://d.hatena.ne.jp/E_Mattsan/20121020/1350707524)

HUnit を試す
============

JUnit になじみがあるので, HUnit を試してみた.

Install
-------

``` {.bash}
$ cabal install HUnit
```

Usage
-----

-   [HUnit 1.0 User's
    Guide](https://hunit.sourceforge.net/HUnit-1.0/Guide.html)

Test.HUnit をインポート.

``` {.haskell}
import Test.HUnit
```

### テスト対象コード

``` {.haskell}
import Data.List
import Data.Char
import Unsafe.Coerce

data Nat = Zero
         | Succ Nat
         deriving Show

natToInteger (Succ n) = natToInteger n + 1
natToInteger Zero = 0
```

### テストコード

``` {.haskell}
tests = TestList
        [ "natToInteger 1" ~: natToInteger Zero ~?= 0
        , "natToInteger 2" ~: natToInteger (Succ Zero) ~?= 1
        , "natToInteger 3" ~: natToInteger (Succ (Succ Zero)) ~?= 2
        ]
```

### テスト実行

runTestTT (テスト関数名) でテスト実行.

``` {.bash}
$ runTestTT tests
Cases: 3  Tried: 3  Errors: 0  Failures: 0
Counts {cases = 3, tried = 3, errors = 0, failures = 0}
```

わざと失敗させてみる.

``` {.bash}
*Main> runTestTT tests
### Failure in: 2:natToInteger 3
expected: 1
 but got: 2
Cases: 3  Tried: 3  Errors: 0  Failures: 1
Counts {cases = 3, tried = 3, errors = 0, failures = 1}
```

Bookmarks
---------

-   [Emacs/Automatic unit testing -
    HaskellWiki](https://www.haskell.org/haskellwiki/Emacs/Automatic_unit_testing)
