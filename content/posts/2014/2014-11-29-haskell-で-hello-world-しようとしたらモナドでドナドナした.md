---
author: admin
categories:
- Haskell
- 技術メモ
- 書評
date: 2014-11-29T10:47:00+00:00
dsq_thread_id:
- 3.7294316e+09
excerpt: Haskell で Hello World
pvc_views:
- 1856
title: Haskell で Hello World! しようとしたらモナドでドナドナした
type: post
url: /archives/=2765
---

<file:./>../img/IMG\_3895.JPG

はじめに
========

最近発売された, Haskell 本を買ってみた.

<div class='amazlink-box' style='text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;'><div class='amazlink-list' style='clear: both;'><div class='amazlink-image' style='float:left;margin:0px 12px 1px 0px;'><a href='https://www.amazon.co.jp/%E9%96%A2%E6%95%B0%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%AE%9F%E8%B7%B5%E5%85%A5%E9%96%80-%E2%94%80%E2%94%80%E7%B0%A1%E6%BD%94%E3%81%A7%E3%80%81%E6%AD%A3%E3%81%97%E3%81%84%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E6%9B%B8%E3%81%8F%E3%81%9F%E3%82%81%E3%81%AB-WEB-PRESS-plus/dp/4774169269%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4774169269' target='_blank' rel='nofollow'><img src='https://ecx.images-amazon.com/images/I/51C0LpV9lGL._SL160_.jpg' style='border: none;' /></a></div><div class='amazlink-info' style='height:160; margin-bottom: 10px'><div class='amazlink-name' style='margin-bottom:10px;line-height:120%'><a href='https://www.amazon.co.jp/%E9%96%A2%E6%95%B0%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%AE%9F%E8%B7%B5%E5%85%A5%E9%96%80-%E2%94%80%E2%94%80%E7%B0%A1%E6%BD%94%E3%81%A7%E3%80%81%E6%AD%A3%E3%81%97%E3%81%84%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E6%9B%B8%E3%81%8F%E3%81%9F%E3%82%81%E3%81%AB-WEB-PRESS-plus/dp/4774169269%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4774169269' rel='nofollow' target='_blank'>関数プログラミング実践入門 ──簡潔で, 正しいコードを書くために (WEB+DB PRESS plus)</a></div><div class='amazlink-powered' style='font-size:80%;margin-top:5px;line-height:120%'>posted with <a href='https://amazlink.keizoku.com/' title='アマゾンアフィリエイトリンク作成ツール' target='_blank'>amazlink</a> at 14.11.29</div><div class='amazlink-detail'>大川 徳之<br /></div><div class='amazlink-sub-info' style='float: left;'><div class='amazlink-link' style='margin-top: 5px'><img src='https://amazlink.fuyu.gs/icon_amazon.png' width='18'><a href='https://www.amazon.co.jp/%E9%96%A2%E6%95%B0%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%AE%9F%E8%B7%B5%E5%85%A5%E9%96%80-%E2%94%80%E2%94%80%E7%B0%A1%E6%BD%94%E3%81%A7%E3%80%81%E6%AD%A3%E3%81%97%E3%81%84%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E6%9B%B8%E3%81%8F%E3%81%9F%E3%82%81%E3%81%AB-WEB-PRESS-plus/dp/4774169269%3FSubscriptionId%3DAKIAJDINZW45GEGLXQQQ%26tag%3Dsleephacker-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D4774169269' rel='nofollow' target='_blank'>Amazon</a> <img src='https://amazlink.fuyu.gs/icon_rakuten.gif' width='18'><a href='https://hb.afl.rakuten.co.jp/hgc/g00q0724.n763w947.g00q0724.n763x2b4/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12985290%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D12985290%26surl%3Dbook' rel='nofollow' target='_blank'>楽天</a></div></div></div></div></div>

どんな言語でも, はじめは Hello, World を出力するところからはじめる.

Haskell で Hello, World をするためには, ノマドというものを理解しない
といけない. この本では p267 に書いてある. なんと険しき Hello, World...

モナドとは
==========

とりあえず理解したことを自分の言葉でメモ. あまりわかっていない.
モナドとノマドとドナドナの違いがわからない.

モナドとは, 純粋関数と副作用を共存さ競るためのしくみ.

純粋関数
--------

同じ引数を渡す限り,
どのような順番で何度呼んでも同じ結果が返るような関数.

副作用
------

ある機能がコンピュータの (論理的な) 状態を変化させ,
それ以降で得られる結果に影響を与えること.

-   状態を参照することで出力が変化すること
-   状態に変化を与えることで出力が変化すること

例としては,

-   破壊的代入
-   I/O 制御 (write/print 等)

wikipedia
---------

ちなみに, wikipedia は,

プログラムとはクライスリ圏の射である , 
という要請から合成規則としてクライスリトリプル (Kleisli triple) 
というモナドと等価なものが用いられる.

ショボーン. 線形代数の単位を落としたオレをなめるなよ!

-   [モナド (プログラミング) -
    Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%8A%E3%83%89_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0))

不条理な世の中と清められた世界
------------------------------

そう, Hello, World とは純粋で汚れのない pure な世界を汚す副作用.

そして, 純粋関数で構築されたプログラムは, 論理で構築された絶対的な世界!

絶対的な真理として存在する数学や音楽の秩序が美しさを持つように,
純粋関数によって構築された秩序は, それ自体が美しいのだ!

Hello, World!
=============

コードを以下に示す.

``` {.haskell}
main :: IO ()
main = putStrLn "Hello, World!"
```

IO という部分は, IO モナドと呼ばれる.

putStrLn は String を受け取り, IO を返す.

``` {.bash}
Prelude> :t putStrLn
putStrLn :: String -> IO ()
```

Bookmarks
---------

Ruby での解説:

-   [Ruby
    による関数型プログラミング](https://www.h6.dion.ne.jp/~machan/misc/FPwithRuby.html)
-   [モナドという言葉を使うことなく
    純粋関数型言語の入出力を解説する](https://d.hatena.ne.jp/gnarl/20111222/1324483790)

Haskell におけるモナドの解説ページ:

-   [All About Monads](https://www.sampou.org/haskell/a-a-monads/html/)
-   [Easy Monad](https://www.shido.info/hs/haskell8.html)

